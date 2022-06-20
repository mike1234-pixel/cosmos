import React, { useEffect } from 'react'
import Home from './pages/Home/Home';
import Hero from './components/Hero/Hero';
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { savePlanets } from './actions';
import { AppProps } from './types/props/index'

const App: React.FC<AppProps> = (props: AppProps) => {

  const { savePlanets } = props

  useEffect(() => {
    savePlanets()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Hero planets={[]} />
      <Home planets={[]} />
    </div>
  )

}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ savePlanets }, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(App);
