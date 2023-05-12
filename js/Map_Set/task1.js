function unique(arr) {
    return arr.filter(function(value, index, arr) {
    //   return arr.indexOf(value) === index;
    // });
    // let set = new Set();
    for(let i in arr) {
        set.add(arr[i]);
    }
    // set.add(arr);
    return set;
    // return Array.from(new Set(arr));
    
  })
}
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare, Krishna, :-O