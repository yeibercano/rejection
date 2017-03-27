import React, { Component } from 'react';
import { connect } from 'react-redux';

class Entries extends Component {
  render() {
    const { score } = this.props;

    return (
        <aside>
          <article>
            <h1>SCORE</h1>
            <span className="score">{score}</span>
          </article>
        </aside>
      );
  }
}

const mapStateToProps = (state) => ({ score: state.score.score });

export default connect(mapStateToProps, null)(Entries);
