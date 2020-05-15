import React, { Fragment } from 'react'


const StartButton = ({ callback }) => (
  <Fragment>
    <button
      className='startButton'
      onClick={callback}
    >
      Start Game
    </button>
  </Fragment>
)

export default StartButton