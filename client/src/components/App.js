import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'

import Invite from './Invite'
import Going from './Going'
import NotGoing from './NotGoing'

export default props => {
  return (
    <Provider store={store}>
      <div>
        <Invite />
        <Going />
        <NotGoing />
      </div>
    </Provider>
  )
}