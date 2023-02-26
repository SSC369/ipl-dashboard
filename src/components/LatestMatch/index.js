import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatch

  return (
    <div className="latest-match-container">
      <div className="img-details">
        <div className="details-1">
          <p className="competing-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="detail">{venue}</p>
          <p className="lm-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="lm-team-logo"
        />
      </div>
      <div className="details-2">
        <p className="detail-heading">First Innings</p>
        <p className="detail">{firstInnings}</p>
        <p className="detail-heading">Second Innings</p>
        <p className="second-innings">{secondInnings}</p>
        <p className="detail-heading">Man Of The Match</p>
        <p className="detail">{manOfTheMatch}</p>
        <p className="detail-heading">Umpires</p>
        <p className="detail">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
