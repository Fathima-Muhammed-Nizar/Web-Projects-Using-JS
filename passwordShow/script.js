let eyeicon=document.getElementById("eyeicon");
let password=document.getElementById("password");

eyeicon.onclick=function(){
    if(password.type =="password"){
        password.type="text";
        eyeicon.src="images/a65b975def821ba67303435473dadd5b.png"

    }
    else{
        password.type="password";
        eyeicon.src="images/closed-eye-icon-18.png"


    }
}