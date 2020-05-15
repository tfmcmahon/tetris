import React from 'react'

import { tetrominos } from '../utils/tetrominos'

const Cell = ({ type }) => (
  <div
    className='cell'
    style={{ 
      background: tetrominos[type].color,
      border: type === 0 ? '1px solid' : '4px solid',
      borderBottomColor: type === 0 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.5)',
      borderRightColor: type === 0 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.5)',
      borderLeftColor: type === 0 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
      borderTopColor: type === 0 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)'
    }}
    type={type}
  >
  </div>
)

export default React.memo(Cell)