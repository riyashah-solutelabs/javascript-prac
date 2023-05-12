let lists = [[1,4,5],[1,3,4],[2,6]]

var mergeKLists = function(lists) {
    // Merge all lists into a single array
    const res = [].concat(...lists);
    // console.log([].concat(...lists));
    // Sort the merged array
    res.sort((a, b) => a - b);
  
    return res;
};

console.log(mergeKLists(lists));