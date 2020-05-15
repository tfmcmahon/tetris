export const stageWidth = 10
export const stageHeight = 20

export const createStage = () => {
  //create multi-dimensional array to represent play area
  return Array.from(
    //create an array with an amount of rows equal to our height...
    Array(stageHeight), () => {
      //...each row unit is filled with an array whose length is equal to our width
      return new Array(stageWidth).fill(
        //each width cell is an array with 0 and a string to represent collision
        [0, 'clear']
      )
    }
  )
}

export const collisionDetection = (player, stage, { x: moveX, y: moveY }) => {
  let { position, tetromino } = player
  //loop through the tetromino row
  for (let y = 0; y < tetromino.length; y++) {
    //loop through each unit of each row
    for (let x = 0; x < tetromino[y].length; x++) {
      //check that we are on a cell occupied by a tetromino
      if (tetromino[y][x] !== 0) {
        //prevent movement outside of the stage brounds
        if (
          //check that we are inside the stage bounds (y) ...
          !stage[y + position.y + moveY] ||
          //check that we are inside the stage bounds (x) ... 
          !stage[y + position.y + moveY][x + position.x + moveX] ||
          //check that the cell we are moving to isn't set to clear
          stage[y + position.y + moveY][x + position.x + moveX][1] !== 'clear'
        ) { return true }

      }
    }
  }
}