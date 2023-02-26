import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = eachMatch
  const winOrLose = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="each-match">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="each-match-team-logo"
      />

      <p className="mc-competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={winOrLose}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
