import React from 'react';

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="brandingColor">
      <footer className="centerContainer">
        <p>
          <span>
            <a className="links" href="https://github.com/yeibercano/rejection">
              github
            </a>
          </span>
          <span> |{date}</span>
        </p>
      </footer>
    </div>
  );
};
