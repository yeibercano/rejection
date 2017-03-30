import React, { Component } from 'react';
import { connect } from 'react-redux';
import { accept, reject } from './actions';
import { Field, reduxForm, reset } from 'redux-form';

class Entries extends Component {
  handleEntrySubmit(entry) {
    if (entry.response === "accept") {
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
          <form className="entryForm" onSubmit={ handleSubmit(this.handleEntrySubmit.bind(this)) }>
            <div>
              <label htmlFor="askee">Name</label>
              <Field name="askee" component="input" type="text" placeholder="name" className="askee" required/>
            </div>
            <div>
              <label htmlFor="ask">Question</label>
              <Field name="ask" component="input" type="text" placeholder="question" className="ask" required/>
            </div>
            <div>
              <label>Repsonse</label>
              <div>
                <label><Field name="response" component="input" type="radio" value="accept"/> accept</label>
                <label><Field name="response" component="input" type="radio" value="reject"/> reject</label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
      </section>
    );
  }
}

const entryForm = reduxForm({form:'entry'})(Entries)

export default connect(null, { accept, reject, reset })(entryForm)
