import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-m.png'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Alright, Alright, Alright
          <br />
          <img src={LogoTitle} alt="developer" />
          <br />
          Full Stack Developer | Data Scientist
        </h1>
        <h2>Full Stack Web Developer / JavaScript / Python / SQL</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}
export default Home
