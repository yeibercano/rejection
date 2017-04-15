import Score from '../score';
import Entries from '../entries';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentScore } from '../entries/entries_reducer';

class Main extends Component {

  render() {
    const { state } = this.props;
    const score = currentScore(state) === 0 || currentScore(state) > 0 ? currentScore(state) : 'Loading...'

    return (
      <main className="columnContainer centerContainer">
        <Score score={score} />
        <Entries />
        <style jsx >{`
          .columnContainer {
            display: flex;
            justify-content: space-between;
            flex: 1;
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

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps, null)(Main);
