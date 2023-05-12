const N = 5;
let p1 = [140,89,90,112,88];
let p2 = [82,134,110,106,90];

let d = [];
let p = [];
for(let i in p1){
    if(p1[i] <= p2[i]){
        d.push(p2[i] - p1[i]);
        p.push(2);
    }else if(p1[i] > p2[i]){
        d.push(p1[i] - p2[i])
        p.push(1)
    }

}
let score = d;
let max = Math.max(...score)
let ind = d.indexOf(max);
console.log(`${p[ind]} ${max}`);