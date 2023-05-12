// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
var swapPairs = function(head) {
    // console.log(head.value);
    let n = head.length;
    let newarr = []
    for(let i = 0; i< n; i++){
        let pair = head.splice(0,2);
        pair.reverse();
        newarr.push(...pair)
    }
    console.log(newarr);
    let i = 0;
    let current = head;
    let temp;
    while (head) {
        i++;
        if (i % 2 === 0)
            head.val = temp;
        else {
            temp = head.val;
            if (head.next)
                head.val = head.next.val;
        }
        head = head.next;
    }
    return current;

};
head = [1,2,3,4]
console.log(swapPairs(head));