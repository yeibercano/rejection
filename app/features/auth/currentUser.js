import React from 'react';
import PropTypes from 'prop-types';

export const CurrentUser = ({ user = {} }) => {
  return (
    <aside className="currentUser">
      <ul>
        <li>
          <div>
            {user.displayName || 'anonymous'}
          </div>
        </li>
        <li>
          <div>
            {user.email}
          </div>
        </li>
        <li>
          <div>
            <button className="logout">Logout</button>
          </div>
        </li>
      </ul>
      <style jsx>
        {`
          .currentUser {
            width: auto;
          }
        `}
      </style>
    </aside>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.object.isRequired
};
