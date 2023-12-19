import React, { useState } from 'react';

const Input = ({ onAddNote }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddNote = () => {
    if (inputText.trim() !== '') {
      onAddNote(inputText);
      setInputText('');
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your note here..."
        value={inputText}
        onChange={handleInputChange}
        style={{ marginBottom: '5px' }}
      />
      <button
        style={{
          position: 'absolute',
          right: '460px',
          bottom: '30px',
          padding: '10px',
        }}
        onClick={handleAddNote}
      >
        Add Note
      </button>
    </div>
  );
};

export default Input;
