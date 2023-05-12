let range = {
    from:1,
    to:5,

    [Symbol.iterator]() {

        return{
            curr:this.from,
            last:this.to,

            next(){
                if(this.curr < this.last){
                    return { done:false, value:this.curr++ }

                }else{
                    return { done:true }
                }
            }
        }
    }
}

for(let i of range) {
    console.log(i);
}

// for(let i = range.from; i <= range.to; i++){
//     console.log(i);
// }

let a = Array.from(range);
console.log(a);