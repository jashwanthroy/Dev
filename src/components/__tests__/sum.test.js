import { sum } from "../sum.js"

test("Sum function to test",() =>{
    const result = sum(3,4);
    //Assertion
    expect(result).toBe(7);
})