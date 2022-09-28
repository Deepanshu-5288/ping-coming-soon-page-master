
document.querySelector("#email").addEventListener("click", removeClass);
document.querySelector(".btn").addEventListener("click", handleClick);
function removeClass(){
    document.querySelector("#email").classList.remove("input-error");
    document.querySelector(".error-msg").classList.remove("error-msg-show");
}
function handleClick(){
    if(!document.querySelector("#email").value.includes("@") || !document.querySelector("#email").value.includes(".com")){
        document.querySelector("#email").classList.add("input-error");
        document.querySelector(".error-msg").classList.add("error-msg-show");
    }
    else{
        
        alert("You have successfully subscirbed. Thanks!");
    }
}