import React from 'react';
import Footer from '../footer'
import Header from '../header';
import Main from '../main';

export default () => (
  <div className="appContainer">
    <Header />
    <Main />
    <Footer />
    <style jsx>{`
      .appContainer {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
    `}
    </style>
    <style jsx global>{`
      .centerContainer {
        width: 80%;
        margin: 0px auto;
      }
      ul {
        padding: 0;
      }
      li {
        list-style-type: none;
      }
      .brandingColor {
        background-color: tomato;
      }
    `}
    </style>
  </div>
);
