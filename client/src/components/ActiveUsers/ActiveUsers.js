import React from 'react';
import './ActiveUsers.css';

const ActiveUsers = ({ users }) => (
  <div className="userBox">
    {
      users
        ? (
          <div>
            <h1 style = {{'marginBottom':'30px'}}>Active Members:</h1>
            <div>
              <h2>
                {users.map(({name}) => (
                  <div className="item">
                    &gt; {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default ActiveUsers;