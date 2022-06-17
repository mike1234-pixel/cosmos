import React, { useEffect, useState } from 'react'
import Planet from '../../components/Planet/Planet';
import { connect } from 'react-redux'
import { RootState } from '../../store';
import PlanetI from '../../types/Planet';
import { HomeProps } from '../../types/props';
import style from './style.module.scss';

const Home: React.FC<HomeProps> = (props: HomeProps) => {

  const { planets } = props

  const [sortedPlanets, setSortedPlanets] = useState<Array<PlanetI>>([])

  useEffect(() => {
    setSortedPlanets(planets.sort((a: PlanetI, b: PlanetI) => new Date(a.releasedate).valueOf() - new Date(b.releasedate).valueOf()))
  }, [planets])

  return (
    <div className={`container-sm ${style.main}`}>
      <div>
        <h1>Cosmos</h1>
        <p>Once you have an innovation culture, even those who are not scientists or engineers - poets, actors, journalists - they, as communities, embrace the meaning of what it is to be scientifically literate. They embrace the concept of an innovation culture. They vote in ways that promote it. They don't fight science and they don't fight technology.</p>
        <p>Private enterprise in the history of civilization has never led large, expensive, dangerous projects with unknown risks. That has never happened because when you combine all these factors, you cannot create a capital market valuation of that activity.</p>
        <p>In science, if you don't do it, somebody else will. Whereas in art, if Beethoven didn't compose the 'Ninth Symphony,' no one else before or after is going to compose the 'Ninth Symphony' that he composed; no one else is going to paint 'Starry Night' by van Gogh.</p>
        {sortedPlanets.map((planet: PlanetI, i) => {
          return (
            <Planet planet={planet} key={planet.pl_name + i} />
          )
        })}
      </div>
    </div>
  )

};

const mapStateToProps = (state: RootState) => ({
  planets: state.planetsState.planets
});

export default connect(mapStateToProps, null)(Home);
