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
    // update goal value
    goal.text(goal.val());
} 

// add value to total clusters collected
function addCluster(obj) {
    clusters.val(obj.value);
    // update text
    clusters.text(parseInt(clusters.text()) + parseInt(obj.value));
}

// compare clusters to goal
function checkClusters() {
    // check for win
    if (clusters.val === goal.val) {
        win();
    }
    // check for lose
    else if ( clusters.val > goal.val) {
        lose();
    }
}

// win
function win() {
   
}

// lose
function lose() {

}

/// events
// initialize game
randCluster(clust1, clust2, clust3, clust4);
randGoal(goal);

$(document).ready(function() { 
    $(".cluster").on("click", function() {
        addCluster(this);
        checkClusters();
    });
})
