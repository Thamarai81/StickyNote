import React, { useState } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
const InputArea = ({ onAddNote }) => {
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
    <div style={{ position: 'relative',display:'flex', flexDirection:'column'}}>
      <Input
      className='area'
      placeholder='Enter your text here'
      value={inputText}
      onChange={handleInputChange}
      style={{maxWidth: 613,
      height: 133,
      width: '100%',
      top: 28,
      position: 'relative',
      paddingBottom:'100px',
      verticalAlign: 'top',
      overflow:'visible' ,
    display:'flex',
  }} 
      ></Input>
      
      <Button 
      type="primary"
      className='but'
      style={{
        position: 'absolute',
        top: 120,
        bottom: 1,
        width: '100%',
        maxWidth:'79px',
        height: '32px',
      }}
      onClick={handleAddNote}
      
      >Add</Button>
      
    </div>
  );
};

export default InputArea;
