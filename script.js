console.log("Hello world!");

const gridContainer = document.querySelector("#container");


function createGrid(num){
    // First Remove All Children
    gridContainer.innerHTML = "";

    //Loop and Create Grid
    for(let i=0;i<num;i++){
        let gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        for(let j=0;j<num;j++){
            let grid = document.createElement("div");
            grid.classList.add("gridTile");
            grid.style.width = (100/num).toString() + "%";
            grid.style.aspectRatio = "1/1";
            gridRow.appendChild(grid);
        }
        gridContainer.appendChild(gridRow);
    }
    //let percentWidth = 100/num;
    //console.log(percentWidth.toString() + "%");
}

createGrid(16);
createGrid(16);