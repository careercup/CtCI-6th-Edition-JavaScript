1) Clarifying questions
  -Just the data structures
  -Functionality, each node will contain profile content
    -Data to display profile picture, name, education, etc
    -Friends
    -Feed

2) Basic Setup
  -Profile - object with properties, containing data
    -Personal Info
    -Education
    -Work
    -Interests
  -Friend connections - undirected graph, by userid (because A friend of B === B friend of A)
  ---> PARTITION FEATURES BY PROFILE INFORMATION AND CONNECTIONS

  -Algorithm:
    -Find id of person A and person B
    -Find id of person A and person B from both sides, expanding out degree by degree, removing for duplicates (breath first search, to minimise the number of degrees searched)
      -> bidirectional breath first search

3) Identify and address problems (at scale)
    -Exponential -> O(n^k) where n is the number of friends a person has, and k is degree
    -No real way to reduce the complexity
      -Practically, can cache previously searched friends to remove re-processing
    -Too many users
      -Separate graph search engine from profile information database/server
      -In graph search engine, organize graphs in sorted order (e.g. one server stores 2 million nodes in alphabetical order, and engine can call the databases storing nodes as and when it needs it)
        -It would be troublesome to reindex the databases if more users starting with 'A' apply
        -So could index by userid numerical order (with half a billion users that's a 10-digit number)
        ---> SHARD DATABASE IN NUMERICAL ORDER

4) Addressing possible points of failure
    -traffic spike
      -caching, load balancers and horizontal scaling
    -servers -> buffer capacity
    -databases -> slave database

ANSWER KEY

Question: How is a bidirectional BFS faster than a BFS?
-Unidirectional BFS: O(k^n) where k is number of edges, and n is number of levels
-Bidirectional BFS: O(k^(n/2)) which is a large factor smaller

e.g. BFS of 5 nodes: a -> b -> c -> d -> e , where each node has 100 edges

Unidirectional would take 100 ^ 4, bidirectional would take 2 * 100 ^ 2.
This would be 100 ^ 2 / 2 in computational difference.

Optimization: Batch Jumps

Optimization: Smart Division - by clustering, or by country, or by city, or by college and year

Follow on questions:
a) Do you search until the end of the graph? How do you decide when to give up?
b) Some people have more friends of friends than others. How could you use this data to pick where to start traversing? sort by friends when traversing BFS, and traverse the graphs with more friends first?
