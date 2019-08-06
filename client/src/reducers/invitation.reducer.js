const initialState = {
  user: [],
  going: [],
  notgoing: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'INVITATION':
      return {...state, user: action.payload}
    case 'GOING':
      return {...state, going: action.payload}
    case 'NOT_GOING':
      return {...state, notgoing: action.payload}
    default:
      return state
  }
}