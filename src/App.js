import React from 'react';
import {comments} from './Components/commentData';
import Card from './Components/Card';
import './App.css';

function App() {
  return (
    <div>
      {
        comments.map(comment => <Card commentObject={comment}/>)
      }
    </div>
  );
}

export default App;
