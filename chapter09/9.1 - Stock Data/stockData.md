1) Clarify and Assume

  -Clarifications:
    a) API to frontend clients via HTTP requests 
    b) Public information, no need for user id
    c) API resides with the stock price databases, i.e. no need to pull data from another source
    d) Data will be 
        -stock ticker
        -date
        -open
        -close
        -high
        -low
    e) Stores historical data
    f) Returns JSON
    g) Clients in different geographical locations
 
  -Assumptions
    a) No real-time need, used for research and records

2) Basic Setup
  -diagram

3) Identify and Address Problems
  -uneven request traffic
    -certain times of the day
    -for certain stock tickers
    -estimation: 
      -updating users: half of 1,000 client applications check once per day, in order to make updates
      -exploring users: 1/4 of 1,000 client applications use multiple calls on various stocks
    -many calls at one go may overload server
      -place HTTP calls into a queue
      -horizontally scale servers with a load balancer
  -latency of server
    -speed will vary in different global locations
  -transmitting speed
    -http responses has no size limit
  -too much data
    -horizotally scaled and indexed (by alphabetical order)
    -have database server to direct database calls and merge database calls into one request to be returned

4) Points of Failure
  -database
    -have slave database with copy of master database on standby
  -server
    -buffer capacity for peak periods

5) Enhancements to system
  -analytics server that logs server and database activity
    -outputs report to identify points of improvement
  -caching of popular stock tickers in servers
    -when requested, don't have to make database call to retrieve data

:Suggested Answer:

  CONSIDERATIONS

  --> CLIENT EASE OF USE: easy for client developers to implement
  --> EASE FOR US TO IMPLEMENT AND MAINTAIN: make work as efficient as possible
  --> FLEXIBILITY FOR FUTURE DEMANDS: can be flexible if demands change
  --> SCALABILITY AND EFFICIENCY: mindful of efficiency of solution, so as to not overly burden service

  PROPOSAL #1

  Keep data is simple text files and let clients download data through some sort of FTP server.
  Pros: Easy to maintain in some sense, as files can be easily viewed and backed up.
  Cons: Require complex parsing to do any sort of query.
        If additional data added to text file, might break client's parsing mechanism

  PROPOSAL #2

  Use standard SQL database, and let users plug directly into it.
  Benefits:
  - Structured data
  - Adding data would bring about structure
  - Allow structured queries
  - Enjoy benefits of an ORM, ACID, rolling back and backing up data, and security could be provided using standard database features
  - Easy for clients to integrate into existing applications

  Disadvantages:
  - Direct connection -> lack flexibility for any data request that is of a specific shape
  - Much more than we actually need in terms of features for a feed
  - Need to implement additional layer to maintain and view the data. Increases implementation costs.
  - Security - While database is generally secure, shouldn't be allowing user to make any SQL request they wish to make
      - Might extract excessive amounts of data
      - Difficult to put in place restrictions
      - May make inefficient queries

  PROPOSAL #3

  XML
    Structure data as a tree.
    
    Benefits:
    -Clear and easy to distribute, can be read by both machines and humans
    -Programming languages have packages/libraries to perform XML parsing
    -Easy to add data to XML, just add additional nodes
    -Can use existing tools to back up data
    
    Disadvantages:
    -Sends clients all the information, even if they only want part of it. Inefficient
    -Queries are parsing an entire file

    SOAP - messaging protocol that allows programs that run on disparate operating systems (such as Windows and Linux) to communicate using Hypertext Transfer Protocol (HTTP) and its Extensible Markup Language (XML).

  Regardless of solution for data storage, we could provide a web service (SOAP) for client data access. Adds a layer to our work but it can provide additional security, and it may even make it easier for clients to integrate the system.

  However, clients could be limited to grabbing the data only how we expect them to. By contrast, SQL implementations could allow users to make whatevery complex queries they wanted, e.g. get highest prices, counts of stocks with a certain percentage growth, etc.
