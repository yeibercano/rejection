import React from 'react';

export default () => {
  const date = new Date().getFullYear();

  return (
    <footer className="centerContainer">
      <p>
        <span><a className="links" href="https://github.com/yeibercano/rejection">github</a></span>
        <span> | {date}</span>
      </p>
    </footer>
  );
}
