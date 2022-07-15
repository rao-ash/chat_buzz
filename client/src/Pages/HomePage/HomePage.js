import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './HomePage.css';

const HomePage = ()=>{
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="div1">
      <div className="div2">
        <h1 className="title">Chat Buzz</h1>
        <div>
          <input placeholder="Name" className="input" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="input" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className='button' type="submit">LOG IN</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage