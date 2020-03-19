System Design:
1) Scope the problem
  -Ask clarifying questions
  -Develop use cases

2) Make reasonable assumptions
  -Make assumptions
  -Verify assumptions

3) Draw the major components
  -Draw system architecture diagram
  -Walk through system to provide a flow

4) Identify the key issues
  -System bottlenecks and major challenges (in real life)
  -Use guidance that interviewer gives

5) Redesign for the key issues
  -Propose adjustments to address key issues
  -Update diagram on whiteboard
  -Mention limitations

Feature and Algorithms Scaling:
1) Ask questions
  -Ask clarifying questions and details

2) Make believe
  -Solve problem without space and time complexity limitations

3) Get real
  -Identify problems what will occur with scale
  -Needing to divide work load and storage
    -How to divide
    -How to look up

4) Solve Problems
  -Decide on approach to solve problems
    -Modification or reapproaching problem/feature
  -Iterate and go back to step 3 again
  -Poke holes in your own solution

Concepts to use:

Scaling: A system can be scaled one of two ways:

-Vertical scaling - increasing resources of a specific node. For example, you might add additional memory to a server to improve its availability to handle load changes.

-Horizontal scaling means increasing the number of nodes. For example, you might add additional servers, thus decreasing the load on any one server.

Vertical scaling is generally easier than horizontal scaling, but it's limited. You can only add so much memory or disk space.

Load Balancer

Typically, some frontend parts of a scalable website will be thrown behind a load balancer.
This allows a system to distribute the load evenly so that one server doesn't crash and take down
the whole system. To do so, of course, you have to build out a network of cloned servers that all have essentially the same code and access to the same data.

Database Denormalization and NoSQL

Joins in a relational database such as SQL can get very slow as the system grows bigger. For this reason, you would generally avoid them.

Denormalization is one part of this. Denormalization means adding redundant information into a database to speed up reads. For example, imagine a database describing projects and tasks (where a project can have multiple tasks). You might need to get the project name and the taks information. Rather than doing a join across these table, you can store the project name within the task table (in addition to the project table).

Or, you can go with a NoSQL database. A NoSQL database does not support joins and might structure data in a different way. It is designed to scale better.

Database partitioning (Sharding)

Sharding means splitting the data across multiple machines while ensuring you have a way of figuring out which data is on which machine

A few common ways of partitioning include:

a) Vertical partitioning: this is basically partitioning by feature. For example, if you were building a social network, you might have one partition for tables relating to profiles, another one for messages, and so on. One drawback of this is that if one of these tables gets very large, you might need to repartition that database (possibly using a different partitioning scheme).

b) Key-based (or Hash-based) Parititioning: This uses some part of the data (for example an ID) to partition it. A very simple way to do this is to allocate N servers and put the data on mod(key, n). One issue with this is that the number of servers you have is effectively fixed. Adding additional servers means reallocating all the data--a very expensive task.

c) Directory-based Partitioning: In this scheme, you maintain a lookup table for where the data can be found. This makes it relatively easy to add additional servers, but it comes with two major drawbacks. First the lookup table can be a single point of failure. Second, constantly accessing this table impacts performance.

Many architectures actually end up using multiple partitioning schemes.

Caching

An in-memory cache can deliver very rapid results. It is a simple key-value pairing and typically sits between your application layer and your data store.

When an application requests a piece of information, it first tries the cache. If the cache does not contain the key, it will then look up the data in the data store. (At this point, the data might-or might not-be stored in the data store)

When you cache, you might cache a query and its results directly. Or, alternatively, you can cache the specific object (for example, a rendered version of a part of the website, or a list of the most recent blog posts)

Asynchonous Treatment

-Display old version while updating
-or display notice that updating is under way.

Networking Metrics

Bandwidth - This is the maximum amount of data that can be transferred in a unit of time.
It is typically expressed in bits per second (or some similar ways, such as gigabytes per second)

Throughput - Whereas bandwidth is the maximum data that can be transferred in a unit of time,
throughput is the actual amount of data that is transferred.

Latency - This is how long it takes data to go from one end to the other. That is, it is the delay
between the sender sending information (even a very small chunk of data) and the receiver receiving it
