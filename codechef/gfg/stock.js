let A = [100, 180, 260, 310, 40, 535, 695];
let n = 7;

function stockBuySell(A, n) {
  //your code here
  let buy = 0;
  let sell = 1;
  const max_profit = [];

  while (buy < n && sell < n) {
    if (A[buy] < A[sell]) {
      max_profit.push([buy, sell]);
      buy++;
      sell++;
    } else {
      buy = sell;
      sell++;
    }
  }

  return max_profit;


}
console.log(stockBuySell(A, n));
