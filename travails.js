export class Square {
    constructor(row, col) {
        this.row = row
        this.col = col

        this.parent = null
    }

    setParent = parent => {
        this.parent = parent
    }

    getParent = () => {
        return this.parent
    }

    allKnightMoves = () => {
        const moves = []
        Gameboard.knightOffsets.forEach(offset => {
            const [rowOffset, colOffset] = offset
            const [newRow, newCol] = [this.row + rowOffset, this.col + colOffset]

            if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                moves.push([newRow, newCol])
            }
        })

        return moves
    }

    allKnightSquares = () => {
        return this.allKnightMoves().map(coord => {
            return new Square(coord[0], coord[1])
        })
    }
}

class Gameboard {
    static knightOffsets = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
    ]
    constructor() {
    
    }

    allKnightSquares = (knightRow, knightCol) => {
        const squares = []
        Gameboard.knightOffsets.forEach(offset => {
            const [rowOffset, colOffset] = offset
            const [newRow, newCol] = [knightRow + rowOffset, knightCol + colOffset]

            if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                squares.push(new Square(newRow, newCol))
            }
        })

        return squares
    }

    setExplored = (row, col) => {
        this.exploredSquares[row][col] = true
    }

    isExplored = (row, col) => {
        return this.exploredSquares[row][col]
    }

    reset = () => {
        this.squares = {}
        for (let i = 0; i < 8; ++i) {
            for (let j = 0; j < 8; ++j) {
                this.squares[`${i},${j}`] = new Square(i, j)
            }
        }

        this.exploredSquares = []
        for (let i = 0; i < 8; ++i) {
            const row = []
            for (let j = 0; j < 8; ++j) {
                row.push(false)
            }
            this.exploredSquares.push(row)
        }
    }
}

const gameboard = new Gameboard()

export default function knightMoves([originRow, originCol], [endRow, endCol]) {
    gameboard.reset()
    gameboard.setExplored(originRow, originCol)

    const queue = [gameboard.squares[`${originRow},${originCol}`]]

    while (queue.length !== 0) {
        const square = queue.shift()

        if (square.row === endRow && square.col === endCol) {
            // console.log(gameboard.squares[`${endRow},${endCol}`])
            break
        }

        const allEdges = square.allKnightSquares()
        allEdges.forEach(edgeSquare => {
            if (!gameboard.isExplored(edgeSquare.row, edgeSquare.col)) {
                gameboard.setExplored(edgeSquare.row, edgeSquare.col)
                
                gameboard.squares[`${edgeSquare.row},${edgeSquare.col}`].setParent(gameboard.squares[`${square.row},${square.col}`])
                // console.log(`${edgeSquare.row},${edgeSquare.col}`)
                queue.push(gameboard.squares[`${edgeSquare.row},${edgeSquare.col}`])
            }
        })
    }

    const path = [gameboard.squares[`${endRow},${endCol}`]]
    while (true) {
        const nextSquare = path.at(-1).getParent()

        if (nextSquare === null || nextSquare.row === endRow && nextSquare.col === endCol) {
            break
        }

        path.push(nextSquare)
    }

    return path.reverse().map(square => [square.row, square.col])
}