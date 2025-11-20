import React, { useState } from 'react';
import InputSection from './components/InputSection';
import ResourceDashboard from './components/ResourceDashboard';
import Loader from './components/Loader';
import { analyzeVideo } from './services/socialKitService';
import { getVideoId } from './utils/youtube';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [currentVideoId, setCurrentVideoId] = useState(null);

  const handleAnalyze = async (url) => {
    setIsLoading(true);
    setData(null);
    setCurrentVideoId(null);

    const videoId = getVideoId(url);
    console.log("Extracted Video ID:", videoId);
    if (videoId) {
      setCurrentVideoId(videoId);
    }

    try {
      const result = await analyzeVideo(url);
      setData(result);
    } catch (error) {
      console.error("Error analyzing video:", error);
      alert("Failed to analyze video. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <InputSection onAnalyze={handleAnalyze} isLoading={isLoading} />

      {isLoading && <Loader />}

      {!isLoading && data && (
        <ResourceDashboard data={data} videoId={currentVideoId} />
      )}
    </div>
  );
}

export default App;
