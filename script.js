const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    let div = document.createElement("div");
    for (let j = 0; j < 16; j++) {
        let subDiv = document.createElement("div");
        div.appendChild(subDiv);
    }
    container.appendChild(div);
}