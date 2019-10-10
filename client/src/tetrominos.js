export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0', initialHeight: 0, initialWidth: 0 },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '80, 227, 230',
        initialHeight: 4,
        initialWidth: 1
    },
    J: {
        shape: [
            ['J', 0, 0],
            ['J', 'J', 'J'],
            [0, 0, 0]
        ],
        color: '36, 95, 223',
        initialHeight: 2,
        initialWidth: 3
    },
    L: {
        shape: [
            [0, 0, 'L'],
            ['L', 'L', 'L'],
            [0, 0, 0]
        ],
        color: '223, 173, 36',
        initialHeight: 2,
        initialWidth: 3
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ],
        color: '223, 217, 36',
        initialHeight: 2,
        initialWidth: 2
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '48, 211, 56',
        initialHeight: 2,
        initialWidth: 3
    },
    T: {
        shape: [
            [0, 'T', 0],
            ['T', 'T', 'T'],
            [0, 0, 0]
        ],
        color: '132, 61, 198',
        initialHeight: 2,
        initialWidth: 3
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '227, 78, 78',
        initialHeight: 2,
        initialWidth: 3
    }
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
}