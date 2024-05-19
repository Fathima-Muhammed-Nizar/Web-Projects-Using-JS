
let message=document.getElementById("message-el")
function rolldice(){
let randomNumber=Math.floor(Math.random()*6)+1
message.textContent="The number is"+ " "+randomNumber

}