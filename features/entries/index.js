import React, { Component } from 'react';
import { connect } from 'react-redux'
import { accept, reject } from './actions'

class Entries extends Component {
  handleClickAccept() {
    this.props.accept();
  }

  handleClickReject() {
    this.props.reject();
  }

  render() {
    return (
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
              <button className="accept" onClick={()=> this.handleClickAccept()}>accept</button>
              <button className="reject" onClick={()=> this.handleClickReject()}>reject</button>
            </div>
          </form>
      </section>
    );
  }
}

export default connect(null, { accept, reject })(Entries);
