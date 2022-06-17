import style from './style.module.scss';
import { connect } from 'react-redux'

const Home = (props) => {

  const { planets } = props

  return (
    <div className={`container-sm ${style.main}`}>
      <div>
        <h1>Cosmos</h1>
        <p>Once you have an innovation culture, even those who are not scientists or engineers - poets, actors, journalists - they, as communities, embrace the meaning of what it is to be scientifically literate. They embrace the concept of an innovation culture. They vote in ways that promote it. They don't fight science and they don't fight technology.</p>
        <p>Private enterprise in the history of civilization has never led large, expensive, dangerous projects with unknown risks. That has never happened because when you combine all these factors, you cannot create a capital market valuation of that activity.</p>
        <p>In science, if you don't do it, somebody else will. Whereas in art, if Beethoven didn't compose the 'Ninth Symphony,' no one else before or after is going to compose the 'Ninth Symphony' that he composed; no one else is going to paint 'Starry Night' by van Gogh.</p>
        {planets.map((planet) => {
          return (
            <div key={planet.pl_name}>
              <p>NAME: {planet.pl_name}</p>
              <p>RELEASE DATE: {planet.releasedate}</p>
              <p>RADE: {planet.pl_rade}</p>
            </div>
          )
        })}
      </div>
    </div>
  )

};

const mapStateToProps = (state) => ({
  planets: state.planetsState.planets
});

export default connect(mapStateToProps, null)(Home);
