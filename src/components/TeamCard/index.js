import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  console.log(id)
  return (
    <Link to={`/team-matches/${id}`} className="route-link">
      <li className="team">
        <img src={teamImageUrl} alt={name} className="team-logo" />

        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
