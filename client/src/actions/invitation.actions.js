import store from '../store'
import axios from 'axios'
/*
Function that sends a GET Request to the backend and the backend responds with a random
person as the response for a randomperson API
*/
export function invite() {
  axios.get('/api/invites').then(resp => {
    store.dispatch({
      type: 'INVITATION',
      payload: resp.data
    })
  })
}
/*
Just using this everytime I mark someone as going or not going to clear the random person set in the appstate so I can generate a new one.
*/
export function clearInvite() {
  store.dispatch({
    type: 'CLEAR_INVITE',
  })
  invite()
}
/*
This makes a get request to backend. Backend responds with how many people are going and how many people are NOT going.
*/
export function getNumbers() {
  axios.get('/api/numbers').then(resp => {
    store.dispatch({
      type: 'GRAB_NUMBERS',
      payload: resp.data
    })
  })
}
/*
This sends a post request to mark-invitee with the whole object of the random person BUT I added a going: true to make things easier on the backend.
*/
export function markGoing(person) {
  axios.post('/api/mark-invitee', {results: person, going: true}).then(resp => {
  })
  getNumbers()
}
/*
Same as above just changed going to false
*/
export function markNotGoing(person) {
  axios.post('/api/mark-invitee', {results: person, going: false})
  getNumbers()
}
/*
This makes a get request which responds with an array of all of the people going.
Then I am dispatching the data to plug it into the appState
*/
export function going() {
  axios.get('/api/going').then(resp => {
    store.dispatch({
      type: 'GOING',
      payload: resp.data
    })
  })
}
/*
This makes a get request which responds with an array of all of the people NOT going.
Then I am dispatching the data to plug it into the appState
*/
export function notGoing() {
  axios.get('/api/notgoing').then(resp => {
    store.dispatch({
      type: 'NOT_GOING',
      payload: resp.data
    })
  })
}