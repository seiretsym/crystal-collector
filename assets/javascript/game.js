/// begin crystal collector js code

/// declaring variables
var clust1 = $("#earth"),
    clust2 = $("#fire"),
    clust3 = $("#ice"),
    clust4 = $("#lightning"),
    win = $("#wins"),
    lose = $("#losses"),
    clusters = $("#clusters"),
    goal = $("#goal");

/// functions
// generate random values for each cluster
function randCluster(obj1, obj2, obj3, obj4) {
    clust1.val(Math.floor(Math.random() * 12) + 1);
    clust2.val(Math.floor(Math.random() * 12) + 1);
    clust3.val(Math.floor(Math.random() * 12) + 1);
    clust4.val(Math.floor(Math.random() * 12) + 1);
}

// generate random value for goal
function randGoal(obj) {
    goal.val(Math.floor(Math.random() * 102) + 19);
} 

/// events
randCluster(clust1, clust2, clust3, clust4);
randGoal(goal);