let actionClose = 0;

function pop(){
    if(actionClose == 0){
        document.getElementById("box").style.display = "flex"
        actionClose = 1;
    }
    else{
        document.getElementById("box").style.display = "none"
        actionClose = 0;
    }
}