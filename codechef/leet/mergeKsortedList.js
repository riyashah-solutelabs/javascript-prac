var mergeKLists = function(lists) {
    let i=0;
    let array=[];
    let arrayResult=[];
    while(i<lists.length){
            array.push(lists[i]);
            i++;
    }
    for(let i of array){
        while(i!=null){
            arrayResult.push(i.val);
            i=i["next"]
        }
    }
   arrayResult=arrayResult.sort((a,b)=>{return a - b});
   let l = arrayResult.reduceRight((next, val) => ({val, next}), null)
   return l
};
lists = [[1,4,5],[1,3,4],[2,6]]
console.log(mergeKLists(lists));