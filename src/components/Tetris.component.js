import React from 'react'

import Stage from './Stage.component'
import Display from './Display.component'
import StartButton from './StartButton.component'

const Tetris = () => {

  return (
    <div>
      <Stage />
      <aside>
        <div>
          <Display text='Score' />
          <Display text='Rows' />
          <Display text='Level' />
        </div>
        <StartButton />
      </aside>
    </div>
  )
}

export default Tetris