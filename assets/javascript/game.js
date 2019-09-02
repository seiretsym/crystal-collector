/// begin crystal collector js code

/// declaring variables
var clust1 = $("#earth"),
    clust2 = $("#fire"),
    clust3 = $("#ice"),
    clust4 = $("#lightning"),
    textWin = $("#wins").text(),
    textLose = $("#losses").text(),
    textClusters = $("#clusters").text(),
    textGoal = $("#goal").text();

/// functions
// generate random values for each cluster
function randCluster(obj1, obj2, obj3, obj4) {
    clust1.val(Math.floor(Math.random() * 12) + 1);
    clust2.val(Math.floor(Math.random() * 12) + 1);
    clust3.val(Math.floor(Math.random() * 12) + 1);
    clust4.val(Math.floor(Math.random() * 12) + 1);
}

randCluster(clust1, clust2, clust3, clust4);
/// events