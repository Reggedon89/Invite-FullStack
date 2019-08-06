const initialState = {
  going: [],
  notgoing: [],
  randomPerson: [],
  notGoingNum: 0,
  goingNum: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'INVITATION':
      return {...state, randomPerson: action.payload.results}
    case 'GRAB_NUMBERS':
      return {...state, notGoingNum: action.payload.notGoing, goingNum: action.payload.going}
    case 'CLEAR_INVITE':
      return {...state, randomPerson: []}
    case 'GOING':
      return {...state, going: action.payload}
      case 'NOT_GOING':
      return {...state, notgoing: action.payload}
    default:
      return state
  }
}