import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import TextTransition, { presets } from "react-text-transition";
import { RootState } from '../../store';
import { HeroProps } from '../../types/props';
import style from './style.module.scss'

const Hero: React.FC<HeroProps> = (props: HeroProps) => {

  const { planets } = props

  const texts: Array<string> = planets.map(planet => planet.pl_name);

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId: NodeJS.Timer = setInterval(() =>
      setIndex(index => index + 1),
      3000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={`${style.hero} d-flex align-items-center`}>
      <div className="container-sm">
        <div className="row">
          <div className="col-sm-12">
            <h1>Exoplanets discovered by TESS in 2022</h1>
            <h2>
              <TextTransition springConfig={presets.gentle}>
                {texts[index % texts.length]}
              </TextTransition>
            </h2>
            <p>Once you have an innovation culture, even those who are not scientists or engineers - poets, actors, journalists - they, as communities, embrace the meaning of what it is to be scientifically literate. They embrace the concept of an innovation culture. They vote in ways that promote it. They don't fight science and they don't fight technology.</p>
            <p>Private enterprise in the history of civilization has never led large, expensive, dangerous projects with unknown risks. That has never happened because when you combine all these factors, you cannot create a capital market valuation of that activity.</p>
            <p>In science, if you don't do it, somebody else will. Whereas in art, if Beethoven didn't compose the 'Ninth Symphony,' no one else before or after is going to compose the 'Ninth Symphony' that he composed; no one else is going to paint 'Starry Night' by van Gogh.</p>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state: RootState) => ({
  planets: state.planetsState.planets
});

export default connect(mapStateToProps, null)(Hero);
