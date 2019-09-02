/// begin crystal collector js code

/// declaring variables
var clust1 = $("#earth"),
    clust2 = $("#fire"),
    clust3 = $("#ice"),
    clust4 = $("#lightning"),
    wins = $("#wins"),
    losses = $("#losses"),
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
    clusters.val(parseInt(clusters.val()) + parseInt(obj.value));
    // update text
    clusters.text(parseInt(clusters.text()) + parseInt(obj.value));
}

// compare clusters to goal
function checkClusters() {
    // check for win
    if (parseInt(clusters.val()) === parseInt(goal.val())) {
        win();
    }
    // check for lose
    else if (parseInt(clusters.val()) > parseInt(goal.val())) {
        lose();
    }
}

// win
function win() {
   wins.text(parseInt(wins.text()) + 1);
}

// lose
function lose() {
    losses.text(parseInt(losses.text()) + 1);
}

/// events
// initialize game
clusters.val(0);
randCluster(clust1, clust2, clust3, clust4);
randGoal(goal);

$(document).ready(function() { 
    $(".cluster").on("click", function() {
        addCluster(this);
        checkClusters();
        console.log(clusters.val());
        console.log(goal.val());
    });
})
