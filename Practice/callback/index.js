function showOk(){
    console.log("OK");
}
function showCancel(){
    console.log("Cancel");
}

let msg = confirm("Are you sure?");

function showConfirm(msg,yes,no){
    if(msg){
        yes();
    }else{
        no();
    }
}

showConfirm(msg,showOk,showCancel);