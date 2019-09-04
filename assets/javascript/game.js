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
function randCluster() {
    // generate random values for each cluster
    clust1.val(Math.floor(Math.random() * 11) + 2);
    clust2.val(Math.floor(Math.random() * 11) + 2);
    clust3.val(Math.floor(Math.random() * 11) + 2);
    clust4.val(Math.floor(Math.random() * 11) + 2);

    // randomize clust2 value if it's the same as clust1
    do {
        clust2.val(Math.floor(Math.random() * 11) + 2);
    }
    while (clust2.val() === clust1.val());

    // randomize clust3 value until it doesn't match clust1 or clust2
    do {
        clust3.val(Math.floor(Math.random() * 11) + 2);
    }
    while (clust3.val() === clust1.val() || clust3.val() === clust2.val());

    // randomize clust3 value until it doesn't match clust1 or clust2 or clust3
    do {
        clust4.val(Math.floor(Math.random() * 11) + 2);
    }
    while (clust4.val() === clust1.val() || clust4.val() === clust2.val() || clust4.val() === clust3.val()); 
}

// generate random value for goal based on cluster values
function randGoal(obj) {
    var total = 0;
    // generate a random value for goal based on cluster values
    total += clust1.val() * (Math.floor(Math.random() * 5) + 1);
    total += clust2.val() * (Math.floor(Math.random() * 5) + 1);
    total += clust3.val() * (Math.floor(Math.random() * 5) + 1);
    total += clust4.val() * (Math.floor(Math.random() * 5) + 1);

    // update goal value and text
    goal.val(total);
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
   newGame();
}

// lose
function lose() {
    losses.text(parseInt(losses.text()) + 1);
    newGame();
}

// new game after win/lose
function newGame() {
    clusters.val(0);
    clusters.text(0);
    randCluster();
    randGoal(goal);
}

/// events
// initialize game
clusters.val(0);
randCluster();
randGoal(goal);

// listener
$(document).ready(function() { 
    // whenever a cluster is clicked
    $(".cluster").on("click", function() {
        addCluster(this); // add to cluster value
        checkClusters(); // check for win or lose
    });
})
