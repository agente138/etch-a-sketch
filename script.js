const createGrid = (n) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < n; i++) {
        let row = document.createElement("div");
        row.classList.add("row-grid")

        for (let j = 0; j < n; j++) { 
            let gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");           
            gridItem.addEventListener("mouseout", e => {
                e.target.style.backgroundColor = "black";               
            });
            row.append(gridItem);
        }
        fragment.append(row);    
    }

    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.appendChild(fragment);
    return grid;
}
const container = document.querySelector(".container");
var n = 16;
const grid = createGrid(n)
container.append(grid);


newGridBtn = document.querySelector(".new-grid-btn");
resetBtn = document.querySelector(".reset-btn");

newGridBtn.addEventListener("click", () => {
    const child = document.querySelector(".grid");
    console.log(child);
    container.removeChild(child);
    do {
        n = prompt("Grid size (n x n):");
    } while (n < 1 || n > 100);    
    const grid = createGrid(n);
    container.append(grid);
});

resetBtn.addEventListener("click", () => {
    const child = document.querySelector(".grid");
    console.log(child);
    container.removeChild(child);   
    const grid = createGrid(n);
    container.append(grid);
});
