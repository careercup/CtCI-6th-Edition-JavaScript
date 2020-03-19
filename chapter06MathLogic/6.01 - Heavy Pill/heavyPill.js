// Step 1: For that one use, you must measure at least 19 bottles. If that one bottle is 
// 1.1 grams, then the other 19 bottles will be normal

// Step 2: For that 19 bottles, the one measurement must be done in a way that you can 
// differentiate one bottle from the other bottles. The basis of measurement is weight
// of each pill

// Step 3: To reduce the problem, we can assume that there are less bottles, and work through
// the base cases
// 
// 1 bottle:  it has pills of 1.1 grams, measure one pill on weighing scale to confirm
// 2 bottles: measure one pill from one bottle on weighing scale to confirm
// 3 bottles: leave out one bottle, measure pills from remaining two bottles to confirm

// Step 4: To differentiate each bottle, vary the number of pills from each bottle.
// 
// bottle 1: 1 pill
// bottle 2: 2 pills
// bottle 3: 3 pills
//      ....
// bottle 19: 19 pills

// Step 5: Count the number of pills

// Step 6: Measure entire bunch of pills in one shot

// Step 7: Excess weight reveals the bottle with overweight pills