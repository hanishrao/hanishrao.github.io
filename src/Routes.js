import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import { AtomSpinner } from 'react-epic-spinners'

const About = lazy(() => import('./About'))
const Contact = lazy(() => import('./Contact'))
const Resume = lazy(() => import('./Resume'))
const Legal = lazy(() => import('./Legal'))
const Error = lazy(() => import('./Error'))
const Tools = lazy(() => import('./Tools'))


const loading = <AtomSpinner color="#000" className="loading" />

const Routes = (props) => {
  return (
    <Suspense fallback={loading}>
      <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/about" component={() => <About />}/>
            <Route exact path="/tools" component={() => <Tools />}/>
            <Route exact path="/contact" component={() => <Contact />}/>
            <Route exact path="/resume" component={() => <Resume />}/>
            <Route exact path="/legal" component={() => <Legal />}/>
            <Route component={() => <Error />}/>
        </Switch>
      </Router>
    </Suspense>
  )
}

export default Routes
