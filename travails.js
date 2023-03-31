export class Gameboard {
    static knightOffsets = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
    ]
    constructor() {
        // this.board = []
        // for (let i = 0; i < 8; ++i) {
        //     const row = []
        //     for (let j = 0; j < 8; ++j) {
        //         row.push(null)
        //     }
        //     this.board.push(row)
        // }

        this.graph = {}
        for (let i = 0; i < 8; ++i) {
            for (let j = 0; j < 8; ++j) {
                this.graph[`${i},${j}`] = this.allKnightMoves(i, j)
            }
        }
    }

    allKnightMoves = (knightRow, knightCol) => {
        const moves = []
        Gameboard.knightOffsets.forEach(offset => {
            const [rowOffset, colOffset] = offset
            const [newRow, newCol] = [knightRow + rowOffset, knightCol + colOffset]

            if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                moves.push([newRow, newCol])
            }
        })

        return moves
    }
}

export function knightMoves([originRow, originCol], [endRow, endCol]) {
    
}