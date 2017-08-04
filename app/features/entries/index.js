import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuestion } from './entries_reducer.js';
import { Field, reduxForm, reset } from 'redux-form';
import Entry from './entry/index';

export class Entries extends Component {
  handleEntrySubmit(entry) {
    this.props.addQuestion(entry);
    this.props.reset('entry');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <section>
        <h1 className="title">Rejection</h1>
        <p className="intro">
          You must be rejected by a human being at least once per day.<br />
          Ask for things outside your comfort zone, and you will find yourself
          winning a lot more.<br />
          <b>Win</b> = 1 point. <b>Rejection</b> = 10 points.<br />
          How long can you make your rejection streak last?
        </p>
        <Entry handleSubmit={handleSubmit(e => this.handleEntrySubmit(e))} />
        <style jsx>
          {`
            section {
              width: 65%;
            }
          `}
        </style>
      </section>
    );
  }
}

const entryForm = reduxForm({ form: 'entry' })(Entries);

export default connect(null, { addQuestion, reset })(entryForm);
