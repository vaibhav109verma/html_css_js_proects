const containerEl = document.querySelector(".container");

for (let index = 0; index < 28; index++) {
    const colorEl = document.createElement("div");
    colorEl.classList.add("color-container");
    containerEl.appendChild(colorEl);
}

const colorEls = document.querySelectorAll(".color-container");

generate(); 

function generate(){
    colorEls.forEach(colorEl => {
        const ran = randomColor();
        colorEl.style.backgroundColor =  "#" + ran;
        colorEl.innerText = "#"+ran;
    });
}
randomColor();    

function randomColor(){
    const chars = "0123456789abcdef"
    const colorLengths =6;
    let color = "";
    for (let index = 0; index < colorLengths; index++) {
        const randomNum = Math.random() * chars.length;
        color += chars.substring(randomNum , randomNum + 1);
    }
    return color;
}