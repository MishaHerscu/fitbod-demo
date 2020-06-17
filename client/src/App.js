import React, { Component }                        from 'react'
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom'
import Users                                       from './Users'
import Workouts                                    from './Workouts'
import NotFound                                    from './NotFound'

class App extends Component {
  render () {
    return <Router>
      <Switch>
        <Route exact path='/'                  component={Users} />
        <Route exact path='/users'             component={Users} />
        <Route exact path="/workouts/:userId"  component={Workouts} />
        <Route                                 component={NotFound} />
      </Switch>
    </Router>
  }
}

export default App
