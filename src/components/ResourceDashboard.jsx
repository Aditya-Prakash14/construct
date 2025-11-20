import React from 'react';
import ResourceCard from './ResourceCard';
import VideoPlayer from './VideoPlayer';

const ResourceDashboard = ({ data, videoId }) => {
    console.log("Dashboard received videoId:", videoId);
    if (!data) return null;

    return (
        <div className="dashboard fade-in">
            {videoId && <VideoPlayer videoId={videoId} />}

            <div className="glass-panel" style={{ marginBottom: '2rem', textAlign: 'left' }}>
                <h2 style={{ marginTop: 0 }}>{data.title}</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{data.summary}</p>

                <div style={{ marginTop: '2rem' }}>
                    <h3>Key Takeaways</h3>
                    <ul style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                        {data.keyTakeaways.map((point, index) => (
                            <li key={index} style={{ marginBottom: '0.5rem' }}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <h3 style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Curated Resources</h3>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
            }}>
                {data.resources.map((resource, index) => (
                    <ResourceCard key={index} resource={resource} />
                ))}
            </div>

            <style>{`
    .fade -in {
        animation: fadeIn 0.5s ease- out forwards;
opacity: 0;
        }
@keyframes fadeIn {
          to { opacity: 1; }
}
`}</style>
        </div>
    );
};

export default ResourceDashboard;
