let inputEl=document.getElementById("input-el").value
let greet=document.getElementById("show")
inputEl.addEventListener("click",function(){
    greet.textContent=`Hey ${recipient}! How is it going? Cheers Per`
})