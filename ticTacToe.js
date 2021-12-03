// start to build tic tac toe game
// just try to make some progress

/* 

                     |                  |
          A1         |         A2       |        A3
                     |                  |
      ---------------------------------------------------
                     |                  |
          B1         |         B2       |        B3
                     |                  |
      ---------------------------------------------------
                     |                  |
          C1         |          C2      |        C3
                     |                  |

          Winning Combos Are:

          A1, A2, A3

          B1, B2, B3

          C1, C2, C3

          A1, B1, C1

          A2, B2, C2

          A3, B3, C3

          A1, B2, C3

          A3, B2, C1

*/

let A1 = "";
let A2 = "";
let A3 = "";
let B1 = "";
let B2 = "";
let B3 = "";
let C1 = "";
let C2 = "";
let C3 = "";

// 8 winning combinations

if (A1 == "X" && A2 == "X" && A3 == "X") {
  // 1
  console.log("You Win!");
}

if (A1 == "O" && A2 == "O" && A3 == "O") {
  console.log("You Win!");
}

if (A1 == "X" && B1 == "X" && C1 == "X") {
  // 2
  console.log("You Win!");
}

if (A1 == "O" && B1 == "O" && C1 == "O") {
  console.log("You Win!");
}

if (B1 == "X" && B2 == "X" && B3 == "X") {
  // 3
  console.log("You Win!");
}

if (B1 == "O" && B2 == "O" && B3 == "O") {
  console.log("You Win!");
}

if (C1 == "X" && C2 == "X" && C3 == "X") {
  // 4
  console.log("You Win!");
}

if (C1 == "O" && C2 == "O" && C3 == "O") {
  console.log("You Win!");
}

if (A2 == "X" && B2 == "X" && C2 == "X") {
  // 5
  console.log("You Win!");
}

if (A2 == "O" && B2 == "O" && C2 == "O") {
  console.log("You Win!");
}

if (A3 == "X" && B3 == "X" && C3 == "X") {
  // 6
  console.log("You Win!");
}

if (A3 == "O" && B3 == "O" && C3 == "O") {
  console.log("You Win!");
}

if (A1 == "X" && B2 == "X" && C3 == "X") {
  // 7
  console.log("You Win!");
}

if (A1 == "O" && B2 == "O" && C3 == "O") {
  console.log("You Win!");
}

if (A3 == "X" && B2 == "X" && C3 == "X") {
  // 8
  console.log("You Win!");
}

if (A3 == "O" && B2 == "O" && C3 == "O") {
  console.log("You Win!");
}

// A1, B2, C3

// A3, B2, C1

console.log(`
                   |           |
            ${A1}  |   ${A2}   |  ${A3}
            ---------------------------
                   |           |
            ${B1}  |   ${B2}   |  ${B3}
            ---------------------------
                   |           |
            ${C1}  |   ${C2}   |  ${C3}
`);
