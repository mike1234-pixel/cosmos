import React from 'react'
import { PlanetProps } from '../../types/props'
import style from './style.module.scss';

const Planet: React.FC<PlanetProps> = (props: PlanetProps) => {

    const { planet } = props

    return (
        <div className={style.planet}>
            <p className="planet__name">NAME: {planet.pl_name}</p>
            <p className="planet__release-date">RELEASE DATE: {planet.releasedate}</p>
            <p className="planet__rade">RADE: {planet.pl_rade}</p>
        </div>
    )
}

export default Planet