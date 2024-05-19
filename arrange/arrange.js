let list=["apple","orange","orange","apple","apple"]
let appleshelf=document.getElementById("apple")
let orangeshelf=document.getElementById("orange")

function sort(){
    for(let i=0;i<list.length;i++){
        if(list[i]==="apple"){
            appleshelf.textContent+="apple"
        }
        else{
            orangeshelf.textContent+="orange"
        }
    }
}

sort()