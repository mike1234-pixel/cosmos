const INITIAL_STATE = {
    planets: [],
};

const planetsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SAVE_PLANETS':
            return { ...state, planets: action.planets };
        default: return state;
    }
}

export default planetsReducer;