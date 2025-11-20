import React, { useState } from 'react';

const InputSection = ({ onAnalyze, isLoading }) => {
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (url.trim()) {
            onAnalyze(url);
        }
    };

    return (
        <div className="input-section" style={{ margin: '4rem 0' }}>
            <h1 className="title">Unlock Video Insights</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem' }}>
                Paste a YouTube URL to get AI-powered summaries and resources.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <input
                    type="text"
                    placeholder="https://youtube.com/watch?v=..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    disabled={isLoading}
                />
                <button type="submit" className="btn-primary" disabled={isLoading || !url.trim()}>
                    {isLoading ? 'Analyzing...' : 'Generate Resources'}
                </button>
            </form>
        </div>
    );
};

export default InputSection;
