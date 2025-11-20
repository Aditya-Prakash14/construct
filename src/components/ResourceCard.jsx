import React from 'react';

const ResourceCard = ({ resource }) => {
    return (
        <div className="glass-panel" style={{ textAlign: 'left', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--accent-color)',
                marginBottom: '0.5rem'
            }}>
                {resource.type}
            </div>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{resource.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', flex: 1 }}>
                {resource.description}
            </p>
            <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: 'white',
                    textDecoration: 'none',
                    marginTop: '1rem',
                    display: 'inline-block',
                    borderBottom: '1px solid var(--accent-color)',
                    paddingBottom: '2px'
                }}
            >
                View Resource &rarr;
            </a>
        </div>
    );
};

export default ResourceCard;
