function createGrid(numberOnEachRow){
    let sizeOfEachBox = 760/numberOnEachRow;
    const container = document.querySelector('.container');
    container.innerHTML = "";
    let columnNumber = numberOnEachRow;

    for(let i = 0; i<columnNumber; i++){
        let column = document.createElement('div');
        column.style.display = 'flex';
        column.style.width = sizeOfEachBox + "px";
        column.style.flexDirection = 'column';
        container.appendChild(column);
        for(let z=0; z<numberOnEachRow; z++){
            let box = document.createElement('div');
            box.className = 'box';
            box.addEventListener("pointerover", boxColorChange);
            box.style.width = sizeOfEachBox + "px";
            box.style.height = sizeOfEachBox + "px";
            box.style.backgroundColor = "#FFFFFF"
            box.style.border = "1px solid black";
            column.appendChild(box);
        }
    }
}

createGrid(10);

document.querySelector('button').addEventListener('click', ()=>{
    let userInput = prompt('Please enter how many boxes you want on each line: ');
    let gridSize = Number(userInput);

    if(userInput<=100 && userInput != NaN){
        createGrid(userInput);
    }else{
        alert('Please enter a number that is not bigger than 100.');
    }


})

function boxColorChange(e){
    let currentBackground = e.target.style.backgroundColor;
    if(currentBackground == 'rgb(255, 255, 255)'){
        e.target.style.backgroundColor = 'black';
    }
}


