const buildOrder2 = (projects, dependencies) => {
    let graph = {};
    let totalDegrees = {};
    let queue = [];
    let order = [];

    //create graph and totalDegrees
    for (let project of projects) {
        graph[project] = [];
        totalDegrees[project] = 0;
    }

    //add edges and degree count
    for(let [from, to] of dependencies){
        graph[from].push(to)
        totalDegrees[to]++;
    }

    //add nodes with 0 degrees to the queue
    for(let project in totalDegrees)
        if (totalDegrees[project] === 0)
            queue.push(project)

    //perform topological sorting
    while(queue.length> 0){
        let current = queue.shift();
        order.push(current);
        for(let neighbor of graph[current]){
            totalDegrees[neighbor]--;
            if(totalDegrees[neighbor]===0)
                queue.push(neighbor)
        }
    }
    if(order.length!== projects.length) throw Error

    return order;
}