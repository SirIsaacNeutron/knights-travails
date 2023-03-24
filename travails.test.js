import { Gameboard } from "./travails"

test("knight moves", () => {
    const gameboard = new Gameboard()

    expect(gameboard.allKnightMoves(0, 0)).toEqual([[1, 2], [2, 1]])

    expect(gameboard.allKnightMoves(3, 3).length).toEqual(8)

    expect(gameboard.allKnightMoves(4, 1).length).toEqual(6)

    expect(gameboard.allKnightMoves(6, 1).length).toEqual(4)
})