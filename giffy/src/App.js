import React, { useState } from 'react';
import './App.css';

const GIFS = [
  'https://media2.giphy.com/media/Hs6f36KUBjWww/giphy.gif?cid=ecf05e47gzwxl7d74jz58dc83lvp7103oh75dv196iwsdqsn&rid=giphy.gif&ct=g',
  'https://media1.giphy.com/media/Fi5ZsSlN0Wt9e/giphy.gif?cid=ecf05e47gzwxl7d74jz58dc83lvp7103oh75dv196iwsdqsn&rid=giphy.gif&ct=g'
]
const DIFF_GIFS = [
  'https://media3.giphy.com/media/ewzF6uunnPn6L5amuW/giphy.gif?cid=ecf05e47gzwxl7d74jz58dc83lvp7103oh75dv196iwsdqsn&rid=giphy.gif&ct=g',
  'https://media3.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e47j4k5kotqmurn8pkudnsimfcujlt5fxl253odnskq&rid=giphy.gif&ct=g'
]
function App() {
  const [gifs, setGifs] = useState(GIFS);
  // const state =  useState([]);
  // const value = state[0];
  // const updateValue = state[1];
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} />)
        }
        <button onClick={() => setGifs(DIFF_GIFS)}>Cambiar gifs</button>
      </section>
    </div>
  );
}

export default App;
