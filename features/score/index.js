import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentScore } from './actions';

class Score extends Component {
  componentDidMount() {
    this.props.currentScore();
  }

  render() {
    let { score } = this.props;

    if (score === 0) {
      score = score;
    } else if (!score) {
      score = 'loading...';
    }

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

const mapStateToProps = (state) => ({ score: state.score.currentScore });

export default connect(mapStateToProps, { currentScore })(Score);
