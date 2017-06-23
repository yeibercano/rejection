
import React from 'react';

const CurrentUser = ({ user={} }) => {

  return (
    <aside className="currentUser">
      <ul>
        <li><div>{user.displayName || 'anonymous'}</div></li>
        <li>
          <div>{user.email}</div>
        </li>
        <li>
          <div><button className="logout">Logout</button></div>
        </li>
      </ul>
      <style jsx>{`
        .currentUser {
          width: auto;
        }
      `}
      </style>
    </aside>
  );
}

export default CurrentUser
