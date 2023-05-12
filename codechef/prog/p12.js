paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
var destCity = function(paths) {
    // console.log(...paths);
    // let n = paths.length;
    // console.log(paths[n-1][1]);
    const set = new Set();
    for (const path of paths) set.add(path[0]);
    for (const path of paths) {
    if (!set.has(path[1])) return path[1];
    }


  }
console.log(destCity(paths));