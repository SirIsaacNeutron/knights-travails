export class Gameboard {
    static knightOffsets = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
    ]
    constructor() {
        this.board = []
        for (let i = 0; i < 8; ++i) {
            const row = []
            for (let j = 0; j < 8; ++j) {
                row.push(null)
            }
            this.board.push(row)
        }
    }

    allKnightMoves = (knightRow, knightCol) => {
        const moves = []
        Gameboard.knightOffsets.forEach(offset => {
            const [xOffset, yOffset] = offset
            const [newRow, newCol] = [knightRow + xOffset, knightCol + yOffset]

            if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                moves.push([newRow, newCol])
            }
        })

        return moves
    }
}
