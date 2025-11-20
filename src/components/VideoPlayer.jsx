import React from 'react';

const VideoPlayer = ({ videoId }) => {
    if (!videoId) return null;

    return (
        <div className="video-player-container" style={{ marginBottom: '2rem' }}>
            <div className="glass-panel" style={{ padding: '0.5rem', overflow: 'hidden' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: '12px'
                        }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
