import React from 'react';

export default () => (
  <section>
      <h1 className="title">Rejection</h1>
      <p className="intro">
        You must be rejected by a human being at least once per day.<br/>
        Ask for things outside your comfort zone, and you will find yourself winning a lot more.<br/>
        <b>Win</b> = 1 point. <b>Rejection</b> = 10 points.<br/>
        How long can you make your rejection streak last?
      </p>
      <form className="entryForm">
        <input type="text" placeholder="name"className="askee"/>
        <input type="text" placeholder="question" className="ask"/>
        <div className="buttons">
          <button className="accept">accept</button>
          <button className="reject">reject</button>
        </div>
      </form>
  </section>
);
