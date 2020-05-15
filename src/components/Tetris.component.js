import React, { useState, useCallback, useEffect } from 'react'

//utility functions
import { getRandomTetromino, tetrominos } from '../utils/tetrominos'
import { createStage, stageWidth, collisionDetection } from '../utils/gameHelpers'
import { useInterval } from '../utils/useInterval.hook'

//components
import Stage from './Stage.component'
import Display from './Display.component'
import StartButton from './StartButton.component'

const Tetris = () => {
  //set up tetromino movement and rotation
  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    tetromino: tetrominos[0].shape, // get the blank tetromino, use the state key from the object
    collision: false
  })
  //destructure state
  let { position, tetromino, collision } = player

  const rotateTetromino = (matrix, direction) => {
    //transform the rows into columns
    const rotatedTetromino = matrix.map(
      (value, index) => matrix.map(
        column => column[index]
      )
    )
    //reverse each row
    if (direction > 0) return rotatedTetromino.map(row => row.reverse())
    return rotatedTetromino.reverse()
  }

  const rotatePlayer = (stage, direction) => {
    const playerCopy = JSON.parse(JSON.stringify(player))
    playerCopy.tetromino = rotateTetromino(playerCopy.tetromino, direction)

    const pos = position.x
    let offset = 1

    while (collisionDetection(playerCopy, stage, { x: 0, y: 0 })) {
      playerCopy.position.x += offset
      offset = -(offset + (offset > 0 ? 1 : -1))
      if (offset > playerCopy.tetromino[0].length) {
        rotateTetromino(playerCopy.tetromino, -direction)
        playerCopy.position.x = pos
        return
      }
    }

    setPlayer(playerCopy)
  }

  const updatePlayerPosition = ({ x, y, collision }) => {
    setPlayer(prev => ({
      ...prev,
      position: {
        x: prev.position.x += x/2,
        y: prev.position.y += y/2
      },
      collision
    }))
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      position: { 
        x: stageWidth / 2 - 1, 
        y: 0 
      },
      tetromino: getRandomTetromino().shape,
      collision: false
    })
  }, [])

  //set up stage 
  const [stage, setStage] = useState(createStage())
  const [rowsCleared, setRowsCleared] = useState(0)

  useEffect(() => {
    setRowsCleared(0)

    const removeRows = newStage => (
      newStage.reduce((accumulator, row) => {
        //check if an entire row is filled with non 0 cells by running findIndex
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          //tally the rows cleared
          setRowsCleared(prev => prev + 0.5)
          //add blank rows to the top of the stage while skipping the filled row to simulate the row clear
          accumulator.unshift(new Array(newStage[0].length).fill([0, 'clear']))
          return accumulator
        }
        //else add the row back in to the stage
        accumulator.push(row)
        return accumulator
      }, [])
    )

    const updateStage = prevStage => {
      //First redraw/clear the stage
      const newStage = prevStage.map(row =>
        //map through the rows, then to each cell
        row.map(cell => 
          //grab the string value of the cell array
          (
            cell[1] === 'clear'
              ? [0, 'clear']
              : cell
          )
        )
      )

      //draw the tetromino
      tetromino.forEach(
        //loop through the parent array for all of the rows, the index is the height (y)
        (row, y) => {
          row.forEach(
            //loop through each row, the index is the width (x)
            (value, x) => {
              if (value !== 0) {
                // update the area of the tetromino, build the tetromino based on incoming coordinates and the player position
                newStage[y + position.y][x + position.x] = [
                  value,
                  `${collision ? 'merged' : 'clear'}`
                ]
              }
            }
          )
        }
      )

      //then check if we collided with anything
      if (collision) {
        //generate the next block
        resetPlayer()
        return removeRows(newStage)
      }

      return newStage

    }

    setStage(prev => updateStage(prev))

  }, [position, tetromino, collision, resetPlayer])

  //set up game status
  const [score, setScore] = useState(0)
  const [rows, setRows] = useState(0)
  const [level, setLevel] = useState(0)

  const calculateScore = useCallback(() => {
    const linePoints = [40, 100, 300, 1200]
    //check for score
    if (rowsCleared > 0) {
      setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1))
      setRows(prev => prev + rowsCleared)
    }
  }, [level, rowsCleared])

  useEffect(() => {
    calculateScore()
  }, [calculateScore, rowsCleared, score])

  //set up the tetromino falling speed
  const [dropTime, setDropTime] = useState(null)

  //set up game reset
  const [gameOver, setGameOver] = useState(false)

  const movePlayer = direction => {
    if (!collisionDetection(player, stage, { x: direction, y: 0 })) {
      updatePlayerPosition({
        x: direction,
        y: 0
      })
    }
  }

  const startGame = () => {
    //reset everything
    setStage(createStage())
    setDropTime(1000)
    resetPlayer()
    setGameOver(false)
    setScore(0)
    setRows(0)
    setLevel(0)
  }

  const drop = () => {
    //increase level every 10 rows
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1)
      //increate interval speed
      setDropTime(1000 / (level + 1) + 200)
    }

    if (!collisionDetection(player, stage, { x: 0, y: 1 })) {
      updatePlayerPosition({
        x: 0, 
        y: 1, 
        collision: false
      })
   } else {
    //check for game over
    if (position.y < 1) {
      setGameOver(true)
      setDropTime(null)
    }
    //set block collision
     updatePlayerPosition({
       x: 0,
       y: 0,
       collision: true
     })
   }
  }

  const keyUp = ({ keyCode }) => {
    if(!gameOver) {
      if (keyCode === 40 || keyCode === 83) {
        setDropTime(1000 / (level + 1) + 200)
      }
    }
  }

  const dropPlayer = () => {
    setDropTime(null)
    drop()
  }

  const moveTetromino = ({ keyCode }) => {
    //left arrow, a = 37, 65
    //right arrow, d = 39, 68
    //up arrow, w = 38, 87
    //down arrow, s = 40, 83

    if (!gameOver) {
      if (keyCode === 37 || keyCode === 65) {
        movePlayer(-1)
      } else if (keyCode === 39 || keyCode === 68) {
        movePlayer(1)
      } else if (keyCode === 40 || keyCode === 83) {
        dropPlayer()
      } else if (keyCode === 38 || keyCode === 87) {
        rotatePlayer(stage, 1)
      }
    }
  }

  useInterval(() => {
    drop()
  }, dropTime)

  return (
    <div 
      className='tetrisWrapper'
      role='button'
      tabIndex='0'
      onKeyDown={event => moveTetromino(event)}
      onKeyUp={keyUp}
    >
      <div className='tetris'>
        <Stage stage={stage}/>
        <aside>
          {gameOver 
          ? (
              <Display gameOver={gameOver} text="Game Over" />
            )
          : (
              <div>
                <Display text={`Score: ${score}`} />
                <Display text={`Rows Cleared: ${rows}`} />
                <Display text={`Level: ${level}`} />
              </div>
            )
          }
          <StartButton callback={startGame}/>
        </aside>
      </div>
    </div>
  )
}

export default Tetris