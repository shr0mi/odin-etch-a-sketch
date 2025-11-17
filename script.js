console.log("Hello world!");

const gridContainer = document.querySelector("#container");

// Dynamic Change Grid tiles
const gridNumInput = document.querySelector("#gridNum");
gridNumInput.addEventListener("mouseup", (event) => {
    //console.log(gridNumInput.value);
    createGrid(gridNumInput.value);
    gridSize.textContent = "Size: " + gridNumInput.value.toString() + " x " + gridNumInput.value.toString(); 
});

// Display Grid Size
const gridSize = document.querySelector("#gridSize");

// Set Color
let color = "#000000";
const colorInput = document.querySelector("#colorPicker");
colorInput.addEventListener("input", (event)=>{
    color = colorInput.value;
    console.log(color);
});

// Clear Grid
const clearBtn = document.querySelector("#clearGrid");
clearBtn.onclick = () => {
    createGrid(gridNumInput.value);
};

// Eraser Mode
let eraserMode = false;
const eraseBtn = document.querySelector("#eraser");
eraseBtn.onclick = ()=>{
    if(eraserMode){
        eraserMode = false;
        eraseBtn.classList.remove("selected");
    }else{
        eraserMode = true;
        eraseBtn.classList.add("selected");
    }
}

// Random Color
let randomColorMode = false;
const randomBtn = document.querySelector("#randomColor");
randomBtn.onclick = ()=>{
    if(randomColorMode){
        randomColorMode = false;
        color = colorInput.value;
        randomBtn.classList.remove("selected");
    }else{
        randomColorMode = true;
        randomBtn.classList.add("selected");
    }
};

function getRandomInt(max){
    return Math.floor(Math.random() * max+1);
}

function generateRndColor(){
    return "rgb(" + getRandomInt(256).toString() + ", " + getRandomInt(256).toString() + ", " + getRandomInt(256).toString() + ")"; 
}


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

            // Add on mouse over event listener
            grid.addEventListener("mouseenter", (event)=>{
                if(eraserMode){
                    grid.style.backgroundColor = "#F8FAFC";
                }else if(!randomColorMode)
                    grid.style.backgroundColor = color;
                else{
                    //console.log(generateRndColor());
                    grid.style.backgroundColor = generateRndColor();
                }
            });
        }
        gridContainer.appendChild(gridRow);
    }
    //let percentWidth = 100/num;
    //console.log(percentWidth.toString() + "%");
}

createGrid(16);