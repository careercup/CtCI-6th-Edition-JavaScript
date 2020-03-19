Clarification:
i) each product has a sales figure, and a bunch of categories
    -e.g. a product could some under "Sports Equipment" and "Safety".

ii) as it is an ecommerce company, there is a need for scale, and a need for real-time updating, or updating without too much of a delay.

--> no need to be immediate, can have an hour or a day lag

iii) assume that the supply chain will take care of itself, and the focus here is on categorical ranking

--> frontend systems
--> define what sales means: total historical, past month, past week?
--> multiple categories or subcategories
--> precision is important for popular items, less important for less popular items
--> no need to be that precise about the time range

iv) at scale, there is a need to rank efficiently

Setup:

-Database of products with sales figures
-Database of sales index by category
-Build sales rankings
  -sort overall and assign a rank
  -for each category, sort and assign a rank
    -assume using merge sort so O(n log n)
-Build rankings index of each item
  -overall, safety, etc.

Problems:

-Inefficient to sort by categories every time
  -O(n log n)
  -Instead just sort it the first time, and everytime there's a sale,
  -Allow item to climb up each ranking O(n)
    At scale, set up a queue for sales entries

--> Analytics are expensive
    -tables to store sales requires computation
    -effective way to store sales is good

--> Database writes are very frequent
    -should batch up sales records and update periodically at one go
    -maybe more frequent for popular products

--> Ranking data
    -ensure no bias in data (added orders to one product but not others)
    -ensure sales rank doesn't run until all stored data is processed, or by dividing up in-memory cache by some time period

--> Joins are expensive
    -for each category, pull data from items and then sort
    -or one join per category and the do one walk to get rankings

--> Database queries are expensive
    -use just log files and MapReduce
    -write sales to each category
    -overall ranking, just pairwise merge if we need to
    -large advantage of scaling nicely

-Scale
    -too many products to rank (amazon has 480 million products)

--> Weekly sales
    -circular array (only keep a week of sales)

--FOLLOW UP QUESTIONS
--> Next bottlenecks
    -black friday sales
    -super popular items
      -mapReduce method still scalable
    -super popular categories
      -mapReduce method still scalable

--> subcategories
    -treat subcategories as the 'overall' of one category
    -overall will be 'overall' of subcategories
    -no issues with respect to scaling

--> data needed to be more accurate (say within 30 minutes)
    -need to refresh log files every 30 minutes
      -maybe just for popular items
      -quite expensive (should not run 24/7, maybe only during the popular times)
