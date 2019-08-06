import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {invite, clearInvite, getNumbers, markGoing, markNotGoing} from '../actions/invitation.actions'
import {useSelector} from 'react-redux'
import '../styles/App.css'


export default props => {
  const invited = useSelector(appState => appState.randomPerson)
  const going = useSelector(appState => appState.goingNum)
  const notgoing = useSelector(appState => appState.notGoingNum)
      
  // This function is similar to the compnentWillMount and componentWillReceiveProps functions. It initiate the page and loads a randomly generated person and logs how many people are going/notgoing to the backend.
  useEffect(() => {
    invite()
    getNumbers()
  }, [])

  // This function will work when the accept button is pressed. It also resets the randomly generated person and updates the 'going' array in the backend.
  function handleGoing(e) {
  e.preventDefault()
  clearInvite()
  markGoing(invited)
  }

  // This function will work when the decline button is pressed. It also resets the randomly generated person and updates the 'notgoing' array in the backend.
  function handleNotGoing(e) {
  e.preventDefault()
  clearInvite()
  markNotGoing(invited)
  }

  return (
    <div className='inviteContainer'>
      <div className='attendanceDiv'>
      <Link to='/going'><p>Going: {going} </p></Link>
      <Link to='/not-going'><p>Not Going: {notgoing}</p></Link>
      </div>
      {invited.map((person, i) => {
      return(
        <div key={i}>
        <div className='imgDiv'>
          <img src={person.picture.large} alt='user pic'></img>
        </div>
        <div className='contactDiv'>
          <p>Name: <span className='name'>{person.name.first} {person.name.last}</span></p>
          <p>Phone: <span>{person.cell}</span></p>
          <p>Email: <span>{person.email}</span></p>
        </div>
        <div className='buttonDiv'>
          <button className='decline' onClick={handleNotGoing}>x</button>
          <button className='accept' onClick={handleGoing}>✓</button>
        </div>
      </div>
      )
    })}
    </div>
  )
}