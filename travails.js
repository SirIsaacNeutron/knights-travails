export class Gameboard {
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

    knightMoves = (knightRow, knightCol) => {
        const leftTwo = knightCol - 2
        const leftOne = knightCol - 1

        const upOne = knightRow - 1
        const upTwo = knightRow - 2

        const downOne = knightRow + 1
        const downTwo = knightRow + 2

        const rightTwo = knightCol + 2
        const rightOne = knightCol + 1

        const moves = []

        if (leftTwo >= 0) {
            if (upOne >= 0) {
                moves.push([upOne, leftTwo])
            }
            if (downOne <= 8) {
                moves.push([downOne, leftTwo])
            }
        }

        if (leftOne >= 0) {
            if (upTwo >= 0) {
                moves.push([upTwo, leftOne])
            }
            if (downTwo <= 8) {
                moves.push([downTwo, leftOne])
            }
        }

        if (rightTwo <= 8) {
            if (upOne >= 0) {
                moves.push([upOne, rightTwo])
            }
            if (downOne <= 8) {
                moves.push([downOne, rightTwo])
            }
        }

        if (rightOne <= 8) {
            if (upTwo >= 0) {
                moves.push([upTwo, rightOne])
            }
            if (downTwo <= 8) {
                moves.push([downTwo, rightOne])
            }
        }

        return moves
    }
}
