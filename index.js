const decreaseBtn = document.getElementById("decreaseBtn")
const increaseBtn = document.getElementById("increaseBtn")
const resetBtn = document.getElementById("resetBtn")
const countLabel = document.getElementById("countLabel")

let count = 0;

increaseBtn.onclick = function(){
    count += 1;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    if (count != 0){
        count -= 1;
    }
    countLabel.textContent = count;
}


resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

