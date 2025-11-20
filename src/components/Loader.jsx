import React from 'react';

const Loader = () => {
    return (
        <div className="loader-container" style={{ padding: '2rem' }}>
            <div className="spinner"></div>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Analyzing video content...</p>
            <style>{`
        .spinner {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          border-top-color: var(--accent-color);
          animation: spin 1s ease-in-out infinite;
          margin: 0 auto;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default Loader;
