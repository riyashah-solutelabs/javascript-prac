const combinationSum = (candidates, target) => {
    const result = [];
    const combinations = (start = 0, res = []) => {
      const sum = res.reduce((prev, curr) => prev + curr, 0);
      console.log(res,sum);
      if (sum > target) return;
      if (sum === target) return result.push(res);
        console.log("res", res);
      for (let i = start; i < candidates.length; i++) {
        combinations(i, [...res, candidates[i]]);
      }
    };
  
    combinations();
    return result;
  };
let candidates = [2,3,6,7], target = 7
console.log(combinationSum(candidates,target));