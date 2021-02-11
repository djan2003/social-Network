import {div, mult, sum} from "./tasks";

let a:number;
let b:number;
beforeEach(()=>{
    a=5;
    b=10;
})



test("sum of number", ()=>{

    let result = sum(a,b);
expect(result).toBe(15)
})

test("mult of numbers",()=>{

    let result = mult(a,b);
    expect(result).toBe(50)
})

test("div of numbers",()=>{
    expect(div(a,b)).toBe(2)
})