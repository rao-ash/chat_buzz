import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { useLocation } from "react-router-dom"
import ActiveUsers from '../../components/ActiveUsers/ActiveUsers';
import Chats from '../../components/Chats/Chats';
import StatusBar from '../../components/StatusBar/StatusBar'; 
import InputBar from '../../components/InputBar/InputBar';
import './ChatPage.css';

const endPoint = 'https://chat-buzz-web-app.herokuapp.com/'

let socket;

const Chat = () => {
  const location = useLocation()
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    socket = io(endPoint, {  
        cors: {
        origin: "https://chat-buzz-web-app.herokuapp.com/",
        credentials: true
      },transports : ['websocket'] });
      setRoom(room)
      setName(name)
    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [endPoint, location.search]); 
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="div1">
      <div className="div2">
          <StatusBar room={room} />
          <Chats messages={messages} name={name} />
          <InputBar message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <ActiveUsers users={users}/>
    </div>
  );
}

export default Chat;