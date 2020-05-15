export const tetrominos = {
  //blank cell
  0: {
    shape: [[0]],
    color: '#303030'
  },
  I: {
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0]
    ],
    color: '#E0B4FF'
  },
  J: {
    shape: [
      [0, 'J', 0],
      [0, 'J', 0],
      ['J', 'J', 0]    
    ],
    color: '#3DBEA8'
  },
  L: {
    shape: [
      [0, 'L', 0],
      [0, 'L', 0],
      [0, 'L', 'L']
    ],
    color: '#412485'
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O']
    ],
    color: '#7D0000'
  },
  S: {
    shape: [
      [0, 'S', 'S'],
      ['S', 'S', 0],
      [0, 0, 0]
    ],
    color: '#7B7484'
  },
  T: {
    shape: [
      [0, 0, 0],
      ['T', 'T', 'T'],
      [0, 'T', 0]

    ],
    color: '#00669D'
  },
  Z: {
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
      [0, 0, 0]
    ],
    color: '#91028B'
  }
}

export const getRandomTetromino = () => {
  const tetrominosString = 'IJLOSTZ' //String with all keys of the tetrominos besides the blank(starter)
  const randomTetromino = tetrominosString[Math.floor(Math.random() * tetrominosString.length)] //get a random letter/key from the string
  return tetrominos[randomTetromino] //access the tetrominos object with the random key
}