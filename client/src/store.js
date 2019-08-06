import { createStore } from 'redux'

import invitationReducer from './reducers/invitation.reducer'

const store = createStore(invitationReducer)

export default store