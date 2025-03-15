import React from 'react';

const codeContainerStyle = {
    backgroundColor: '#282c34',
    color: '#f8f8f2',
    padding: '16px',
    borderRadius: '8px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    margin: '20px 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const codeStyle = {
    display: 'block',
    fontSize: '14px',
    lineHeight: '1.5',
};

const CodeSnippet = ({ code }) => {
    return (
        <div style={codeContainerStyle}>
            <code style={codeStyle}>{code}</code>
        </div>
    );
};

export default CodeSnippet;
