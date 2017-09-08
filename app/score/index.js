import React from 'react';
import PropTypes from 'prop-types';

export const Score = ({ score }) => {
  return (
    <aside>
      <h1>Score</h1>
      <p className="score">{score}</p>
      <style jsx>
        {`
          aside {
            width: 25%;
          }
        `}
      </style>
    </aside>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired
};
