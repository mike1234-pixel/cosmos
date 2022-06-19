import React, { useEffect, useState } from 'react'
import { PlanetProps } from '../../types/props'
import urlify from '../../functions/urlify';
import style from './style.module.scss';
import './planets.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import tone from '../../assets/tone.mp3'

const Planet: React.FC<PlanetProps> = (props: PlanetProps) => {

    const { planet } = props

    const [planetClass, setPlanetClass] = useState<string>('planet--a')

    useEffect(() => {
        const planetSuffixes: Array<string> = ['a', 'b', 'c', 'd']

        const randomSuffix: string = planetSuffixes[Math.floor(Math.random() * planetSuffixes.length)];

        setPlanetClass('planet--' + randomSuffix)
    }, [])

    const playTone: () => void = () => {
        const audio: HTMLAudioElement = new Audio(tone)
        audio.play()
    }

    return (
        <ScrollAnimation animateIn="fadeIn" className={style.fade}>
            <a href={`https://www.google.com/search?q=${urlify(planet.pl_name)}&sa=X&ved=2ahUKEwjBtJCt0bb4AhWjNOwKHSvgC5oQ7xYoAHoECAEQMQ&biw=1440&bih=671&dpr=2`} onClick={playTone} target="_blank" className={`${style.planet} ${planetClass}`}>
                <p className="planet__name">Name: {planet.pl_name}</p>
                <p className="planet__release-date">Release Date: {planet.releasedate}</p>
                <p className="planet__rade">Rade: {planet.pl_rade}</p>
            </a>
        </ScrollAnimation>

    )
}

export default Planet