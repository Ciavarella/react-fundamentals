// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  // Exercise
  /*
  const handleSubmit = e => {
    e.preventDefault();
    onSubmitUsername(e.target.elements.username.value);
  }
  */

  // Exercise
  /*
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
  */

  // Extra 1.
  // Add ref instead of id on input to reference in handleSubmit.
  /*
  const usernameRef = React.useRef()

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitUsername(usernameRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={usernameRef} id="username" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
  */

  // Extra 2
  // Add react useState
  /*
  const usernameRef = React.useRef()
  const [err, setErr] = React.useState(null)

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitUsername(usernameRef.current.value);
  }

  const handleChange = e => {
    const { value } = e.target;
    const isLowerCase = value === value.toLowerCase();
    setErr(isLowerCase ? null : 'Must be lowercase')
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={usernameRef} id="username" type="text" onChange={handleChange} />
      </div>
      <div style={{color: 'red'}}>{err}</div>
      <button disabled={Boolean(err)} type="submit">Submit</button>
    </form>
  )
  */

  // Extra 3
  const usernameRef = React.useRef()
  const [username, setUsername] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitUsername(username);
  }

  const handleChange = e => setUsername(e.target.value.toLowerCase())

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={usernameRef} id="username" type="text" onChange={handleChange} value={username} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
