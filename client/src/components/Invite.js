import React, {useEffect} from 'react'
import '../styles/App.css'
import { useSelector } from 'react-redux'
import { invite, going, notGoing } from '../actions/invitation.actions'

export default props => {
  const invited = useSelector(appState => appState.user)


  useEffect(() => {
    invite()
  }, [])

  function handleGoing() {
    going()
  }
  
  function handleNotGoing () {
    notGoing()
  }



  return (
    <div className='inviteContainer'>
      <div className='attendanceDiv'>
      <p>Going: </p>
      <p>Not Going: </p>
      </div>
      {invited.map(person => {
      return(
        <div key='person.id'>
        <div className='imgDiv'>
          <img src={person.picture.large} alt='user pic'></img>
        </div>
        <div className='contactDiv'>
          <p className='name'>Name: {person.name.first} {person.name.last} </p>
          <p>Phone: {person.cell}</p>
          <p>Email: {person.email}</p>
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