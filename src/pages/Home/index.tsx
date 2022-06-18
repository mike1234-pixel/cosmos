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

      <div className="row">
        {sortedPlanets.map((planet: PlanetI, i) => {
          return (
            <div className='col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center'>
              <Planet planet={planet} key={planet.pl_name + i} />
            </div>
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
