import * as types from '../constants/index'
import axios from "axios"

export const savePlanets = () => {

    return (dispatch) => {

        return axios.get('https://binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json')
            .then((response) => {
                const planets = response.data
                dispatch({ type: types.SAVE_PLANETS, planets })
            })
            .catch((error) => console.error(error))

    }

}