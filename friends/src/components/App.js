import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './LoginForm'
import Friends from './Friends'
import PrivateRoute from './PrivateRoute'

function App(props) {
  return (
    <div className="App">
      {props.error && <p>{props.error}</p>}
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Friends} />
    </div>
  )
}

const mapStateToProps = state => ({
  error: state.error,
})

export default connect(mapStateToProps)(App)