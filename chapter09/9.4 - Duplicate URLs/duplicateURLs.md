Clarifying Questions
-URL -> base URLs with queries
        https://www.facebook.com !== http://www.facebook.com !== http://www.facebook.com/jhaski
        not just routes, there are also extensions.

-duplicate -> content
           -> different URLs could point at the same document
           -> doesn't matter
           thefacebook.com !== facebook.com, even though content is the same

-detect duplicate strings, where the strings are URLs

Setup
-hashtable, and iterate through URLs.
-for each URL:
  -if URL is marked visted in hashtable, flag as duplicate
  -else mark URL as visited in hashtable

Identify and Address Problems
-at scale:
  -hashtable will have to store a lot of URLs (10 billion!?)
  -running through 10 billion URLs in a single thread will take too long
  -storing the list of 10 billion URLs is also likely going to take up too much space for one server

-distributed hashtable
-distribute 10 billion URLs into muliple server nodes using distributed systems
-parallel server nodes

Points of Failure
-the distributed approach is pretty good, covers for points of failure, comes at a cost of excess capacity but I think it's worth it


--SPACE SIZING
    -> one URL how much space? 
      a char is 1 byte / an integer is 4 bytes
      a url is around 30 chars, make it 100 as buffer -> 400 bytes
      10 000 000 000 URLs -> 4 000 000 000 000 (4000 billion bytes)
      4 000 000 000 000 bytes -> 4 000 000 000 kb -> 4 000 000 MB --> 4 000 GB -> 4 TB

    One hard drive should be able to store the entire list of 10 billion URLs but it should be a little large to open as a file

    For speed, list of URLs can be split up into smaller files and multiple server nodes, perhaps even in RAM for faster access speeds

One Machine
Pros: simple
Cons: slow, 

Many Machines
Pros: Fast, can run in parallel
Cons: Complex, many points of failure, need backup
