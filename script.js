function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function addValue(value){
  let k = 0, j = 0;
  for(let i = 0; i < 25; i++){
    if(playerBoard[i] == value){
        if(i >= 20 && i <= 24){
            k = 4;
            j = i - 20;
            PlayerSolbd[k][j] = 1;
        }
        else if(i >= 15 && i <= 19){
            k = 3;
            j = i - 15;
            PlayerSolbd[k][j] = 1;
        }
         else if(i >= 10 && i <= 14) {
            k = 2;
            j = i - 10;
            PlayerSolbd[k][j] = 1;
        }
        else if(i >= 5 && i <= 9){
            k = 1;
            j = i - 5;
            PlayerSolbd[k][j] = 1;
        }
        else if(i >= 0 && i <= 4){
            k = 0;
            j = i;
            PlayerSolbd[k][j] = 1;
        }
    }
  }
  for(let i = 0; i < 25; i++){
    if(playerBoard[i] == value){
        if(i >= 20 && i <= 24){
            k = 4;
            j = i - 20;
            BotSolbd[k][j] = 1;
        }
        else if(i >= 15 && i <= 19){
            k = 3;
            j = i - 15;
            BotSolbd[k][j] = 1;
        }
        else if(i >= 10 && i <= 14) {
            k = 2;
            j = i - 10;
            BotSolbd[k][j] = 1;
        }
        else if(i >= 5 && i <= 9){
            k = 1;
            j = i - 5;
            BotSolbd[k][j] = 1;
        }
        else if(i >= 0 && i <= 4){
            k = 0;
            j = i;
            BotSolbd[k][j] = 1;
        }
    }
  }
  const gridContainer1 = document.getElementById('grid-container1');

// Display bot board by Creating and appending grid items with shuffled numbers
for (let i = 0; i < 5; i++) {
for (let j = 0; j < 5; j++) {
    const gridItem1 = document.createElement('div');
    gridItem1.classList.add('grid-item1');
    gridItem1.textContent = BotSolbd[i][j];
    gridContainer1.appendChild(gridItem1);
}
}
}
function botturn(){
    let check = true;
    while(check){
        const randomNumber = Math.floor(Math.random() * 25) + 1;
        for(let i = 0; i < 25; i++){
            if(UsedNumber[i] == randomNumber)
            {
                UsedNumber[i] = 0;
                addValue(randomNumber);
                check = false;
                break;
            }
        }
        
    }
}
// Create an board for player and bot 
const playerBoard = Array.from({ length: 25 }, (_, i) => i + 1); // filled with 1 to 25 number in ascending order
const BotBoard = Array.from({ length: 25 }, (_, i) => i + 1);  // filled with 1 to 25 number in ascending order
let UsedNumber = Array.from({ length: 25 }, (_, i) => i + 1);  // filled with 1 to 25 number in ascending order
//const UsedNumber = Array(25).fill(0); //filled with zero element
//const BotSolbd = Array(25).fill(0);  //filled with zero element
let PlayerSolbd = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
let BotSolbd = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
// Shuffle the element randomly
shuffleArray(playerBoard);
shuffleArray(BotBoard);

// Get the grid container element
const gridContainer = document.getElementById('grid-container');

// Display player board by Creating and appending grid items with shuffled numbers
for (let i = 0; i < 25; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = playerBoard[i];
    gridContainer.appendChild(gridItem);
}
const gridContainer1 = document.getElementById('grid-container1');

// Display bot board by Creating and appending grid items with shuffled numbers
for (let i = 0; i < 5; i++) {
for (let j = 0; j < 5; j++) {
    const gridItem1 = document.createElement('div');
    gridItem1.classList.add('grid-item1');
    gridItem1.textContent = BotSolbd[i][j];
    gridContainer1.appendChild(gridItem1);
}
}
// Get all the grid items
const gridItems = document.querySelectorAll('.grid-item');

// Get the clicked-number element
const clickedNumber = document.getElementById('clicked-number');

// Add a click event listener to each grid item
gridItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Get the clicked number
        const clickedNum = item.textContent;

        // Display the clicked number below the grid
        clickedNumber.textContent = `You clicked on number ${clickedNum}`;
        for(let i = 0; i < 25; i++){
            if(UsedNumber[i] == clickedNum)
            {
                UsedNumber[i] = 0;
                addValue(clickedNum);
                botturn();
                
            }
        }
            
    });
});



