import { render, cleanup } from "@testing-library/react"
import { Provider } from 'react-redux'
import PlanetsTestData from "./PlanetsTestData.json"
import store from './store'
import App from "./App"
import * as types from "./constants"


// integration tests  - react app and redux store
describe("App integration tests", () => {

    beforeEach(() => {
        // save mock data to redux store
        store.dispatch({ type: types.SAVE_PLANETS, planets: PlanetsTestData })
    })

    afterEach(cleanup)

    it("renders static and dynamic content", () => {

        const { getByText, getByTestId } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        // assert element exists - static content
        getByText("Exoplanets discovered by TESS in 2022")

        // assert element exists - dynamic content
        getByTestId("TOI-4329 b")

    })

})

// to see the whole app html output in the terminal run DEBUG_PRINT_LIMIT=10000 yarn test

// from the redux docs
// Use integration tests for everything working together. I.e. for a React app using Redux, render a <Provider> with a real store instance wrapping the component/s being tested.
