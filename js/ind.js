let format  = {
    name : "",
    id : "",
    email : "",
    is_verified : false
  }
  
  const dataArray = [
      {
        name : "Tom",
        id : 1,
        email : "t@yopmail.com",
        is_verified : false
      },
      {
        name : "joe",
        id : 2,
        email : "j@yopmail.com",
        is_verified : true
      }   
  ]
  
  const addData = (dataObj) => {
      // code goes here...
    //   console.log(dataObj.email)
    //   console.log(dataObj.name === undefined || dataObj.id === undefined || dataObj.email === undefined || dataObj.is_verified === undefined) ;
    //   if(dataObj.name === undefined || dataObj.id === undefined || dataObj.email === undefined || dataObj.is_verified === undefined){
    //     let data = {
    //         name : "",
    //         id : null,
    //         email : "",
    //         is_verified : false
    //     }
    //       dataArray.unshift(data);
    //   }else{
    //     dataArray.unshift(dataObj);
    //   }
    // console.log(dataArray);
    for(let i of dataArray){
        console.log(i);
        if(dataObj.(x => x === undefined)){
            let data = {
                        name : "",
                        id : null,
                        email : "",
                        is_verified : false
                    }
            dataArray.unshift(data);
        }

    }
  }
  
  addData(
      {
        email : "t@yopmail.com",
        is_verified : false
      }
  )