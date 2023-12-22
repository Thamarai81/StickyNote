import React from 'react';
import { Card } from 'antd';

const Notes = ({ notes, onDeleteNote }) => {
  const noteColors = ['#D9B8FF', '#FDA7A7', '#80CAFF', '#FDF4A7', '#C6FCFF', '#80CAFF', '#D9B8FF', '#AFBCCF'];
  return (
    <div>
      <h2>Notes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {notes.map((note, index) => (
          <Card
            key={note.id}
            style={{
              width: 240,
              height: 240,
              margin: 40,
              marginTop: 20,
              marginRight: 50,
              borderRadius: 0,
              backgroundColor: noteColors[index % noteColors.length],
              position: 'relative',
            }}
          >
            <div style={{ height: '150px', padding: '0px',top: '0',left:'0',margin:'0px',bottom :'200',overflow: 'hidden' }}>
              <p style={{fontSize:'12px', fontWeight:'600', marginTop:"auto"}}>{note.text}</p>
            </div>
            <div style={{ position: 'absolute', top: -5, right: -25, cursor: 'pointer' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                onClick={() => onDeleteNote(note.id)}
              >
                <circle opacity="0.05" cx="12.5" cy="12.5" r="12.5" fill="#E71D36" />
                <path
                  opacity="0.8"
                  d="M13.9161 12.9999L17.8099 16.8939C18.0634 17.1472 18.0634 17.5567 17.8099 17.81C17.5567 18.0633 17.1471 18.0633 16.8939 17.81L12.9999 13.916L9.10614 17.81C8.85274 18.0633 8.44333 18.0633 8.19005 17.81C7.93665 17.5567 7.93665 17.1472 8.19005 16.8939L12.0839 12.9999L8.19005 9.10593C7.93665 8.85264 7.93665 8.44311 8.19005 8.18982C8.31628 8.06347 8.48225 8 8.6481 8C8.81395 8 8.9798 8.06347 9.10614 8.18982L12.9999 12.0838L16.8939 8.18982C17.0202 8.06347 17.1861 8 17.3519 8C17.5178 8 17.6836 8.06347 17.8099 8.18982C18.0634 8.44311 18.0634 8.85264 17.8099 9.10593L13.9161 12.9999Z"
                  fill="#E71D36"
                />
              </svg>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notes;
