
const Score = ({score}) => {
  return (
      <aside>
          <h1>Score</h1>
          <p className="score">{score}</p>
          <style jsx >{`
            aside {
              width: 25%;
            }
          `}
          </style>
      </aside>
    );
}

export default Score
