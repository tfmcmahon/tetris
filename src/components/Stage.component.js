import React from 'react'
import Cell from './Cell.component'

import { stageWidth, stageHeight } from '../utils/gameHelpers'


const Stage = ({ stage }) => (
  <div
    className='stage'
    style={{
      gridTemplateRows: `repeat(
        ${stageHeight}, 
        calc(38vw / ${stageWidth})
      )`,
      gridTemplateColumns: `repeat(${stageWidth}, 1fr)`
    }}
  >
    {/*map through cells to create stage*/}
    {
       stage.map(row => 
        row.map((cell, x) => 
          //type is the number value we assign to the cell array
          <Cell 
            key={x} 
            type={cell[0]}
          />
        )
      )
    }
  </div>
)

export default Stage