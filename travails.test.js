import { Square } from "./travails"

test("knight moves", () => {
    expect(new Square(0, 0).allKnightMoves()).toEqual([[1, 2], [2, 1]])

    expect(new Square(3, 3).allKnightMoves().length).toEqual(8)

    expect(new Square(4, 1).allKnightMoves().length).toEqual(6)

    expect(new Square(6, 1).allKnightMoves().length).toEqual(4)
})