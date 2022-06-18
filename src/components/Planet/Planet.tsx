import React from 'react'
import { PlanetProps } from '../../types/props'
import urlify from '../../functions/urlify';
import style from './style.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';

const Planet: React.FC<PlanetProps> = (props: PlanetProps) => {

    const { planet } = props

    return (
        <ScrollAnimation animateIn="fadeIn" className={style.fade}>
            <a href={`https://www.google.com/search?q=${urlify(planet.pl_name)}&sa=X&ved=2ahUKEwjBtJCt0bb4AhWjNOwKHSvgC5oQ7xYoAHoECAEQMQ&biw=1440&bih=671&dpr=2`} target="_blank" className={style.planet}>
                <p className="planet__name">Name: {planet.pl_name}</p>
                <p className="planet__release-date">Release Date: {planet.releasedate}</p>
                <p className="planet__rade">Rade: {planet.pl_rade}</p>
            </a>
        </ScrollAnimation>

    )
}

export default Planet