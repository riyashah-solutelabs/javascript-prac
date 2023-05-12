function minEatingSpeed(piles, h) {
    let lo = 1;
    let hi = Math.max(...piles);
  
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      let time = 0;
      for (let pile of piles) {
        time += Math.ceil(pile / mid);
      }
      if (time <= h) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
  
    return lo;
  }
  
  const piles = [3,6,7,11];
  const h = 8;
  const k = minEatingSpeed(piles, h);
  console.log(k); // 4
  