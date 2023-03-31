import knightMoves, { Square } from "./travails"

test("square knight moves", () => {
    expect(new Square(0, 0).allKnightMoves()).toEqual([[1, 2], [2, 1]])

    expect(new Square(3, 3).allKnightMoves().length).toEqual(8)

    expect(new Square(4, 1).allKnightMoves().length).toEqual(6)

    expect(new Square(6, 1).allKnightMoves().length).toEqual(4)
})

test("knight travails", () => {
    expect(knightMoves([0, 0], [1, 2])).toEqual([[0, 0], [1, 2]])

    expect(knightMoves([3, 3], [0, 0])).toEqual([[3, 3], [2, 1], [0, 0]])

    expect(knightMoves([3, 3], [4, 3])).toEqual([[3, 3], [4, 5], [6, 4], [4, 3]])
})