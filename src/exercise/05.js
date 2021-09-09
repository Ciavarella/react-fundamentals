// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Base
/*
const smallBox = <div>small lightblue box</div>
const mediumBox = <div>medium pink box</div>
const largeBox = <div>large orange box</div>
*/

// Exercise
/*
const smallBox = (
  <div
    className="box box--small"
    style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{fontStyle: 'italic', backgroundColor: 'pink'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{fontStyle: 'italic', backgroundColor: 'orange'}}
  >
    large orange box
  </div>
)
*/

// Extra 1.
//const Box = ({className = '', style, ...props}) => <div className={`box ${className}`} style={{fontStyle: 'italic', ...style}} {...props} />
/*
const smallBox = (
  <Box
    className="box--small"
    style={{backgroundColor: 'lightblue'}}
  >
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box
    className="box--medium"
    style={{backgroundColor: 'pink'}}
  >
    medium pink box
  </Box>
)
const largeBox = (
  <Box
    className="box--large"
    style={{backgroundColor: 'orange'}}
  >
    large orange box
  </Box>
)
*/

// Extra 2.
const Box = ({className = '', size, style, ...props}) => {
  const sizeClassName = size ? `box--${size}` : '';
  return (
    <div className={`box ${className} ${sizeClassName}`} style={{fontStyle: 'italic', ...style}} {...props} />
  )
}



function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
