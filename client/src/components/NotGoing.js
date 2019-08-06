import React, { useEffect } from 'react'
import { notGoing } from '../actions/invitation.actions'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import '../styles/App.css'

export default props => {
  const notgoing = useSelector(appState => appState.notgoing)

// This function is similar to the compnentWillMount and componentWillReceiveProps functions.
// This makes a get request which responds with an array of all of the people NOT going.
// Then I am dispatching the data to plug it into the appState
  useEffect(() => {
    notGoing()
  })

  return (
    <div className='goingNotGoing'>
      <div className='linkDiv'>
        <Link to='/'><p>Back</p></Link>
      </div>
      {notgoing.map((person, i) =>
        <div key={i}className='goingContainer'>
          <div>
            <div className='imgDiv'>
              <img src={person.picture.large} alt='user pic'></img>
            </div>
            <div className='contactDiv'>
              <p>Name: <span className='name'>{person.name.first} {person.name.last}</span></p>
              <p>Phone: <span>{person.phone}</span></p>
              <p>Email: <span>{person.email}</span></p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}