import React from 'react';

export const Home = () => (
  <div className="appContainer">
    <style jsx>
      {`
        .appContainer {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}
    </style>
    <style jsx global>
      {`
        .centerContainer {
          width: 80%;
          margin: 0px auto;
        }
        .brandingColor {
          background-color: tomato;
        }
        body {
          margin: 0px;
        }
        ul {
          padding: 0;
        }
        li {
          list-style-type: none;
        }
      `}
    </style>
  </div>
);
