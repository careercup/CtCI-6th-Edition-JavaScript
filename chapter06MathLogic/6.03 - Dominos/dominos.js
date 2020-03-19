// Step 1: Look at base assumptions of problem
// 8 x 8 chessboard = 64 squares
// cut off 2 squares = 62 squares
// 31 dominos of 2 squares = 62 squares

// Step 2: Reduce problem
// 2 x 2 chessboard = 4 squares
// cut off 2 squares = 2 squares
// 1 domino of 2 squares = 2 squares
// => impossible unless cut domino into 2

// Step 3: Test suspicion that it is impossible even for 8x8 chessboard
// every domino must have two adjecent squares to place on chessboard
// cutting opposite corners deprived two squares of adjacent squares
// 
// if we viewed a chessboard as alternative black and white squares,
// two black squares or two white squares have been cut off
// 
// a domino needs a black square and a white square to occupy the chessboard 