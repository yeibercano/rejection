import React, { Component } from 'react';
import { connect } from 'react-redux';
import { accept, reject } from './actions';
import { Field, reduxForm, reset } from 'redux-form';
import Entry from './entry/index';

export class Entries extends Component {
  handleEntrySubmit(entry) {
    if (entry.status === "accept") {
      this.props.accept(entry);
    } else {
      this.props.reject(entry);
    }
    this.props.reset('entry')
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <section>
          <h1 className="title">Rejection</h1>
          <p className="intro">
            You must be rejected by a human being at least once per day.<br/>
            Ask for things outside your comfort zone, and you will find yourself winning a lot more.<br/>
            <b>Win</b> = 1 point. <b>Rejection</b> = 10 points.<br/>
            How long can you make your rejection streak last?
          </p>
          <Entry handleSubmit={handleSubmit((e) => this.handleEntrySubmit(e)) }/>
      </section>
    );
  }
}

const entryForm = reduxForm({form:'entry'})(Entries)

export default connect(null, { accept, reject, reset })(entryForm)
