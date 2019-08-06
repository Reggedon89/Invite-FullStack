import store from '../store'
import axios from 'axios'

export function invite() {
  axios.get('/api/invites').then(resp => {
    store.dispatch({
      type: 'INVITATION',
      payload: resp.data.results
    })
  })
}

export function going() {
  axios.get('/api/invites').then(resp => {
    store.dispatch({
      type: 'GOING',
      payload: resp.data.results
    })
  })
}

export function notGoing() {
  axios.get('/api/invites').then(resp => {
    store.dispatch({
      type: 'NOT_GOING',
      payload: resp.data.results
    })
  })
}