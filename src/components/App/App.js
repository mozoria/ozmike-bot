import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import MainForm from '../MainForm/MainForm'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Home from './Home'
import Shoes from '../shoes/Shoes'
import Shoe from '../shoes/Shoe'
import ShoeCreate from '../shoes/ShoeCreate'
import ShoeEdit from '../shoes/ShoeEdit'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route exact path ='/' render={() => (
            <Home />
          )}/>
          <Route exact path ='/shoes' render={() => (
            <Shoes />
          )}/>
          <Route exact path="/shoes/:id" render={({ match, history }) => (
            <Shoe user={user} match={match} history={history} />
          )}/>
          <AuthenticatedRoute user={user} exact path='/shoes/:id/edit' render={({ match }) => (
            <ShoeEdit match={match} alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/create-shoe' render={() => (
            <ShoeCreate alert={this.alert} user={user} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/main-form' render={() => (
            <MainForm alert={this.alert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
