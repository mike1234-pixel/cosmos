import { useEffect } from 'react'
import style from './App.module.scss';
import Home from './pages/Home';
import Hero from './components/Hero';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { savePlanets } from './actions';

const App = (props) => {

  const { planets, savePlanets } = props

  useEffect(() => {
    savePlanets()
  }, [])

  return (
    <div className={style.main}>
      {JSON.stringify(planets)}
      <Hero />
      <Home />
    </div>
  )

}

const mapStateToProps = (state) => ({
  planets: state.planetsState.planets
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ savePlanets }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
