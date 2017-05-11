Clarifying Questions

-Problem: processSearch is expensive
-Use Case: 
  -Recent queries gets results from cache, and skips processSearch
  -When data changes, update cache
-Assumption:
  -Data changes when search engine rebuilds index

Basic Setup

LRU cache service:
-Assuming multiple client server machines
-Service coordinates with machines to update cache
-When first set up, loaded up by query terms, and results after running processSearch
-Least recently queried is discarded
-Provides API to send a copy of queries to index engine when requested

Index engine:
-When reindexing, requests for list of popular queries from cache engine, updates results, and sends back to cache engine

Identify and Address Problems
-Queries at the same time by multiple machines - Queue for cache service
-Need to ping LRU cache service for each search - 
  Address latency by having CDNs
-Need to update LRU cache for each reindexing - 
  Tradeoff for not having run processSearch

Points of Failure
  -Index engine - slave copy
  -Search engine - slave copy

--> ASSUMPTIONS
i)   many queries to cache
ii)  calling between machines is fast
iii) the processSearch function is expensive
iv)  globally distributed clients
v)   result for query is ordered list of URLs
vi)  most popular queries are always popular, as well as faddish queries

--> SYSTEM REQURIEMENTS
Primary function of cache
i)  Efficient lookups
ii) Discard old data
Cannot wait for cache to naturally expire

LRU cache => linkedlist + hashtable

-->Options:
-Each machine has its own cache
-Each machine has a copy of the cache
-Each machine stores a segment of the cache

-->Updating results:

-->Further enhancements:


