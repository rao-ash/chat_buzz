import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import './Chats.css';

const Chats = ({ messages, name }) => (
  <ScrollToBottom className="chats">
    {messages.map((message) => <div><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
);

export default Chats