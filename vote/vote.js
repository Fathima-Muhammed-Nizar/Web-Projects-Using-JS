let checked=document.getElementById("check")
let msg=document.getElementById("message")
let inputEl=document.getElementById("input-el")
let age=inputEl.value
function fun(){
if(age<18){
    msg.textContent="Sorry!Not Eligible"
}
else{
msg.textContent="You are eligible for voting."

}}