import React from 'react';

export default () => {
  const date = new Date().getFullYear();

  return (
    <div>
      <ul>
        <li>
          <a className="links" href="https://github.com/yeibercano/rejection">github</a>
        </li>
        <li>
          {date}
        </li>
      </ul>
    </div>
  );
}
