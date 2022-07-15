import React from 'react';
import './Message.css';

const Message = ({ message: { text, user }, name }) => {
  let sameUser = false;

  const trimName = name.trim().toLowerCase();
  if(user === trimName) {
    sameUser = true;
  }

  return (
    sameUser
      ? (
        <div className="divOuter" style={{'justifyContent':'flex-end'}}>
          <div className="divInner" style={{'backgroundColor':'#00cc66'}}>
            <span className="text" style = {{'color':'white'}}>{text}</span>
          </div>
        </div>
        )
        : (
          <div className="divOuter" style={{'justifyContent':'flex-start'}}>
          { user === 'admin'||user ==='Admin' ?(
            <div className="divInner" style={{'backgroundColor':'red','justifyContent':'center !important'}}>
              <span className="text" style = {{'color':'white'}}>{text}</span>
            </div>
          ):(<>
            <div className="divInner" style={{'backgroundColor':'#ff99ff'}}>
              <span className="text" style = {{'color':'black'}}>{text}</span>
            </div>
            <p className="sender">{user}</p></>
          )}
          </div>
        )
  );
}

export default Message;