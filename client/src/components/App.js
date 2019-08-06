import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'

import Invite from './Invite'
import Going from './Going'
import NotGoing from './NotGoing'


export default props => {
  return (
    <Router>
    <Provider store={store}>
      <div>
        <Route exact path="/" component={Invite}></Route>
        <Route path="/going" component={Going}></Route>
        <Route path="/not-going" component={NotGoing}></Route>
      </div>
    </Provider>
    </Router>
  )
}
