import React from 'react'


const Display = ({ gameOver, text }) => (
  <div
    style={{
      color: gameOver ? 'red' : '#eee'
    }}
    className='display'
  >
    {text}
  </div>
)

export default Display