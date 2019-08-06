import React from 'react'
import '../styles/App.css'
import { useSelector } from 'react-redux'

export default props => {
  const attending = useSelector(appState => appState.going)

  return (
    <div className='goingNotGoing'>
      {attending.map(person => 
        <div key='person.id' className='goingContainer'>
          <div>
            <div className='imgDiv'>
              <img src={person.picture.large} alt='user pic'></img>
            </div>
            <div className='contactDiv'>
              <p>Name: {person.name.first} {person.name.last}</p>
              <p>Phone: {person.phone}</p>
              <p>Email: {person.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}