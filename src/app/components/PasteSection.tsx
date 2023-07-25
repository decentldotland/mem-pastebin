'use client'

import React, { useState, ChangeEvent } from 'react';

const PasteSection: React.FC = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handlePasteClick = () => {
    // Implement the API call to paste the content
    // After successful pasting, you may show a success message or update the recent pastes list
  };

  return (
    <section className="paste-section">
      <h1>Paste your text here</h1>
      <textarea
        rows={10}
        placeholder="Enter your text here"
        value={content}
        onChange={handleContentChange}
      ></textarea>
      <button onClick={handlePasteClick}>Paste</button>
    </section>
  );
};

export default PasteSection;
