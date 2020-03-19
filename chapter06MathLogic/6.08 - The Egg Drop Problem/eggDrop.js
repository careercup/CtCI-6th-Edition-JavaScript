// Approach: balance out most number of drops that each egg needs to make.

// better: two by two upwards, if breaks, then drop egg on floor right below (2 eggs)
// (maximum of 52 drops to find floor)

// best: drop first egg 10 floors by 10 floors. If egg breaks, then go back to prior multiple
// of 10 and drop floor by floor until egg breaks (maximum of 20 drops to find floor)