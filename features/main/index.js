import Score from '../score';
import Entries from '../entries';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentScore } from './actions';

class Main extends Component {
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
      <main className="columnContainer centerContainer">
        <Score score={score}/>
        <Entries />
        <style jsx >{`
          .columnContainer {
            display: flex;
          }
          main {
            padding-bottom: 2rem;
          }
        `}
        </style>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({ score: state.entries.currentScore });

export default connect(mapStateToProps, { currentScore })(Main);
