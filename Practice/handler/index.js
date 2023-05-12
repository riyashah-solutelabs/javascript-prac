function ask(que,...handlers){
    let isYes = confirm(que);
    for(let handler of handlers){
        if(handler.length === 0){
            if(isYes){
                handler()
            }
        }else{
            handler();
        }
    }
}

ask("Do you want to continue?",()=> console.log("yes"), (result) => console.log("no"));