Clarify Assumptions
-Web crawler built using Javascript
-Traverse through links (a tags)
-Purpose of crawling the web is to build a search index/look for data

-Use case - to build a search index at scale
-Base product
  - indexing engine that crawls the web
  - word -> list of urls in order

a.com -> <a href="b.com">b.com</a>

b.com -> <a href="a.com">a.com</a>

Setup

index database-> where the unique key is the search term, and the list of urls is the values

deliverable
-keep track of visited sites at scale
  -hashtable

-service that does indexing (BFS -> 10 layers from an entry point)
-in the server, maintain a hashtable for memoising
-for each URL traversed:
  -if URL present in hashtable, skip
  -store URL as key with true as value (string key -> boolean value)
  -tip: replace '.' with '%dot%' in URLs when storing

Identify and Address Problems

Scale: hashtable too big to hold all the visited sites
  Option 1) build a separate service to store cut up versions of the hashtable
  Option 2) store URL keys in a sharded database.

Organizing the cut up database
  -by alphabetical order - easy to understand but hard to adjust
  -hash and possibly store urls in linked list (bad idea because need to re-index if size grows too big)

  -> use a distributed hashtable
      -to scale up and prevent failure nodes

Points of failure
  i) database -> slave duplicate
  ii) server -> standby server

ANSWERS

--> define based on URL or based on content? no easy way to do this as content can be random.
--> estimate degree of similarity based on URL and content.
--> generate a signature based on specific subsections of page and its URL.
--> query database to see if this signature has been crawled recently
--> if something with signature has been crawled, insert page back into database at a low priority
--> if not, crawl links and insert into database
















