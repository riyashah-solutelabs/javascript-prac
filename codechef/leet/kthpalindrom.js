var kthPalindrome = function(queries, intLength) {
    let tot = Math.floor((intLength+1)/2);
    // console.log(tot);
    let arr = [] , dig = []
    let n = Math.pow(10,intLength-1);
    let n1 = queries[queries.length-1]
    let f=0,b = [];
    for(let i = 0; i<queries.length;i++){
        var count = 0;
        let q = queries[i] ;
        if (queries[i] >= tot) ++count;
        // if(tot >= 3){
        //     tot = count;
        //     f=1;
        // }
        // console.log(count);
            while (q / 10 >= tot) {
                q /= 10;
                ++count;
            }
            if(count == 1 || count == 2){
                b.push(queries[i])
            }
            // if(count == tot){
            //     dig.push(queries[i])
            //     n1 = Math.max(...dig)
            //     f=1;
            // }
        }
        n1 = Math.max(...b)
        // console.log(b);
        // if(f==0){
        //     n1 = queries[queries.length-1];
        // }
        // console.log("n1 :" +n1);
    for(let i = 1 ; i < queries.length; i++){
        while(arr.length != n1){
            let k = n;
            let temp = n;
            let r=0,sum=0;
           sum = temp.toString().split("").reverse().join("");
            // sum = temp.
            // while(temp > 0){
            //     r = parseInt(temp%10);
            //     sum = parseInt((sum*10)) + r;
            //     temp = parseInt(temp/10)
            // }
            if(k == sum){
                arr.push(sum);
            }
            n++;
        }
    }
    // console.log(arr);
    let arr2 = [];
    for(let i = 0; i < queries.length; i++){
        let n = queries[i];
        if(arr[n-1] != undefined)
        arr2.push(arr[n-1])
       else{
            arr2.push(-1)
        }
    }
    return arr2;
};
queries = [1,2,3,4,5,90], intLength = 3
queries = [2,4,6], intLength = 4
// queries = [2,564610221,288987645,1,299274767,551330452,562484652,70], intLength = 6
// queries = [449229674,501930675,40059525,908875541,9,672504016], intLength = 5
// queries = [38,949772861,85,29,60,15,47060865,890334090,298002382,233270241,15,58,78], intLength = 5
// queries = [2,201429812,8,520498110,492711727,339882032,462074369,9,7,6], intLength = 1
// queries = [8,3,2,496777026,904621465,3,979373095,3,3,6,3,8,210510121,4,833593065], intLength = 1
// queries = [94205982,719721292,1,588960619,794457264,134503655], intLength = 1
// queries = [392015495,5,4,1,425320571,565971690,3,7,6,3,506222280,468075092,5], intLength = 2
queries = [447784357,43,123961779,98,641006300,49,229851212,13,300956404], intLength = 10


console.log(kthPalindrome(queries,intLength));