import Score from '../score';
import Entries from '../features/entries';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getScore } from '../features/entries/entries_reducer';

class Main extends Component {
  render() {
    const { state } = this.props;
    const score = getScore(state) === null ? 'Loading...' : getScore(state);

    return (
      <main className="columnContainer centerContainer">
        <Score score={score} />
        <Entries />
        <style jsx>
          {`
            .columnContainer {
              display: flex;
              justify-content: space-between;
              flex: 1;
            }
            .flexHorizontalBetween {
              display: flex;
              justify-content: space-between;
              align-items: baseline;
            }
            main {
              padding-bottom: 2rem;
            }
            @media only screen and (min-width: 280px) and (max-width: 680px) {
              .columnContainer {
                flex-direction: column;
                justify-content: center;
              }
              body {
                font-size: 1rem;
              }
              section,
              aside {
                width: 100%;
              }
            }
          `}
        </style>
      </main>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps, null)(Main);
