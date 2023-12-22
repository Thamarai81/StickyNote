import React, { useState } from 'react';
import Header from './Header';
import InputArea from './InputArea';
import Notes from './Notes';
import './App.css';
const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote = (text) => {
    setNotes([...notes, { id: Date.now(), text }]);
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <div>
      <Header />
      <InputArea onAddNote={addNote} />
      <Notes notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
};

export default App;
