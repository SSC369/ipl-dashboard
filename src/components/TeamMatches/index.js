import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    banner: '',
    latestMatch: {},
    recentMatches: {},
    isLoading: true,
    team: '',
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonData = await response.json()

    const formattedJsonData = {
      latestMatchDetails: jsonData.latest_match_details,
      recentMatches: jsonData.recent_matches,
      teamBannerUrl: jsonData.team_banner_url,
    }

    const latestMatch = formattedJsonData.latestMatchDetails

    const formattedLatestMatchDetails = {
      competingTeam: latestMatch.competing_team,
      competingTeamLogo: latestMatch.competing_team_logo,
      date: latestMatch.date,
      firstInnings: latestMatch.first_innings,
      id: latestMatch.id,
      manOfTheMatch: latestMatch.man_of_the_match,
      matchStatus: latestMatch.match_status,
      result: latestMatch.result,
      secondInnings: latestMatch.second_innings,
      umpires: latestMatch.umpires,
      venue: latestMatch.venue,
    }
    console.log(formattedLatestMatchDetails)

    const formattedRecentMatches = formattedJsonData.recentMatches.map(
      eachMatch => {
        const formattedMatch = {
          competingTeam: eachMatch.competing_team,
          competingTeamLogo: eachMatch.competing_team_logo,
          date: eachMatch.date,
          firstInnings: eachMatch.first_innings,
          id: eachMatch.id,
          manOfTheMatch: eachMatch.man_of_the_match,
          matchStatus: eachMatch.match_status,
          result: eachMatch.result,
          secondInnings: eachMatch.second_innings,
          umpires: eachMatch.umpires,
          venue: eachMatch.venue,
        }
        return formattedMatch
      },
    )

    this.setState({
      banner: formattedJsonData.teamBannerUrl,
      latestMatch: formattedLatestMatchDetails,
      recentMatches: formattedRecentMatches,
      isLoading: false,
      team: id,
    })
  }

  render() {
    const {banner, latestMatch, recentMatches, isLoading, team} = this.state
    return (
      <div className={`${team} team-container`}>
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#000000" height={100} width={100} />
          </div>
        ) : (
          <>
            <img src={banner} alt="team banner" className="team-banner" />
            <LatestMatch latestMatch={latestMatch} />
            <ul className="recent-matches-container">
              {recentMatches.map(eachMatch => (
                <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
            <Link to="/" className="route-button">
              <button type="button" className="back-button">
                Back
              </button>
            </Link>
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches
