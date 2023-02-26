import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    data: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(eachData => {
      const newData = {
        name: eachData.name,
        id: eachData.id,
        teamImageUrl: eachData.team_image_url,
      }
      return newData
    })
    console.log(updatedData)

    this.setState({
      data: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, data} = this.state
    return (
      <div className="ipl-container">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="ipl-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="ipl-logo"
                alt="ipl logo"
              />
              <h1 className="ipl-dashboard">Ipl Dashboard</h1>
            </div>
            <ul className="teams-container">
              {data.map(eachData => (
                <TeamCard teamDetails={eachData} key={eachData.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default Home
