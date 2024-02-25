const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const label = document.getElementById("label");
let count = 0;

increase.onclick = function(){
    count = count + 1;
    label.textContent = count;
}

decrease.onclick = function(){
    count = count - 1;
    label.textContent = count;
}

reset.onclick = function(){
    count = 0;
    label.textContent = count;
}


