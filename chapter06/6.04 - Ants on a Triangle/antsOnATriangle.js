// they do not collide only if:
// clockwise, clockwise, clockwise or
// anticlockwise, anticlockwise, anticlockwise

// since the probability of not colliding is 2 / (2 * 2 * 2)
// then the probability of colliding is 1 - 2 / (2 ^ 3)

// the generalized solution for non-collision is 1 - 2 / (2 ^ n)