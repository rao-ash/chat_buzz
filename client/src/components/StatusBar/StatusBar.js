import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './StatusBar.css';

const StatusBar = ({ room }) => (
  <div className='diva'>
    <div className='divL'>
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className='divR'>
      <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default StatusBar;