import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import '../styles/App.css'

export default props => {
  const notGoing = useSelector(appState => appState.notgoing)

  useEffect(() => {
    
  }, [])
  console.log(notGoing)

  return (
    <div className='goingNotGoing'>
      {notGoing.map(person =>
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