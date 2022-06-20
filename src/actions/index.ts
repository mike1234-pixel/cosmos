import axios, { AxiosResponse, AxiosError } from 'axios'
import { Dispatch } from 'redux'
import * as types from '../constants/index'
import Planet from '../types/Planet'

export const savePlanets: () => (dispatch: Dispatch) => Promise<void> = () => {

    return (dispatch: Dispatch) => {

        return axios.get('https://binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json')
            .then((response: AxiosResponse) => {
                const planets: Array<Planet> = response.data
                dispatch({ type: types.SAVE_PLANETS, planets })
            })
            .catch((error: AxiosError) => console.error(error))

    }

}