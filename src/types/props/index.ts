import PlanetI from "../Planet"

export interface AppProps {
    savePlanets: Function
}

export interface HomeProps {
    planets: Array<PlanetI>
}

export interface PlanetProps {
    planet: PlanetI
}

export interface HeroProps {
    planets: Array<PlanetI>
}