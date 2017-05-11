// Probability of winning Game 1 is p
// Probability of winning Game 2 is 
// [LWW]: (1 - p) * p * p + 
// [WLW]: p * (1 - p) * p + 
// [WWL]: p * p * (1 - p) + 
// [WWW]: p * p * p
// = 3p^2 - 3p^3 + p^3
// = 3p^2 - 2p^3

// Pick Game 1 when p > 3p^2 - 2p^3
// Pick Game 2 when p < 3p^2 - 2p^3

// 2p^3 - 3p^2 + p

// p(2p^2 - 3p + 1)

// p(2p - 1)(p - 1)

// intersections are p = 0, p = 0.5, p = 1

// test p and 3p^2 - 2p^3 at p = 0, 0.25. 0.5, 0.75, and 1