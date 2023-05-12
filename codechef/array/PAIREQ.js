// bake your code here
function arrEq(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let diff = max - min;
    let c = 0;
    while (diff > 0) {
      let minInd = arr.indexOf(min);
      arr[minInd] += diff;
      min = Math.min(...arr);
    //   max = Math.max(...arr);
      diff = max - min;
      c++;
    }
    return c;
  }
  
  let arr = [1, 2, 3];
  let counts = arrEq(arr);
  console.log(counts); 
  