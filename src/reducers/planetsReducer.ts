import Planet from "../types/Planet";

interface State {
    planets: Array<Planet>
}

const INITIAL_STATE: State = {
    planets: [],
};

interface Action {
    type: string,
    planets: Array<Planet>
}

const planetsReducer = (state: State = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case 'SAVE_PLANETS':
            return { ...state, planets: action.planets };
        default: return state;
    }
}

export default planetsReducer;