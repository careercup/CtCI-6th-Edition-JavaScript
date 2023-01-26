// To figure out the poisoned bottle in as few days as possible, I would use a binary search algorithm to divide the bottles into smaller and smaller groups, testing a sample from each group until I find the poisoned bottle.

// Here is one way to implement this algorithm:

// Divide the 1000 bottles into 10 groups of 100 bottles each.
// Take one test strip and use it to test a sample of 10 bottles from the first group.
// If the test strip turns positive, then I know the poisoned bottle is in that group of 100 bottles.
// If the test strip is negative, repeat step 2 for the next group of 100 bottles, using a new test strip.
// Once I have narrowed down the poisoned bottle to a group of 100 bottles, I will repeat step 2, but this time testing 10 bottles from each of the 10 groups of 10 bottles within that group.
// I will continue narrowing down the group of bottles until I have isolated the poisoned bottle to a single bottle.
// It will take 7 days for the first test, 7 days for second test and so on. So total 7*log(1000) days.

// A computer simulation of this algorithm would involve creating a function that takes in the number of bottles and test strips as input, and uses a while loop to repeatedly divide the group of bottles in half and test a sample from the group until the poisoned bottle is found. The function would output the number of days it takes to find the poisoned bottle.




