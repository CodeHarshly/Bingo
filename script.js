function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function checkWinner(){
    // check player board
    for(let i = 0; i < 5; i++){
        PlayerSum=0;
        for(let j =0; j < 5; j++){
            PlayerSum += PlayerSolbd[i][j];
            if(PlayerSum == 4){

            }
        }
    }
    for(let i = 0; i < 5; i++){
        PlayerSum=0;
        for(let j =0; j < 5; j++){
            PlayerSum += PlayerSolbd[j][i];
            if(PlayerSum == 4){

            }
        }
    }
    PlayerSum=0;
    for(let i = 0; i < 5; i++){
        PlayerSum += PlayerSolbd[i][i];
        if(PlayerSum == 4){

        }
    }
    PlayerSum=0;
    for(let i = 0; i < 5; i++){
        PlayerSum += PlayerSolbd[i][4-i];
        if(PlayerSum == 4){

        }
    }
    // check bot board
    for(let i = 0; i < 5; i++){
        BotSum=0;
        for(let j =0; j < 5; j++){
            BotSum += BotSolbd[i][j];
            if(BotSum == 4){

            }
        }
    }
    for(let i = 0; i < 5; i++){
        BotSum=0;
        for(let j =0; j < 5; j++){
            BotSum += BotSolbd[j][i];
            if(BotSum == 4){

            }
        }
    }
    BotSum=0;
    for(let i = 0; i < 5; i++){
        BotSum += BotSolbd[i][i];
        if(BotSum == 4){

        }
    }
    BotSum=0;
    for(let i = 0; i < 5; i++){
        BotSum += BotSolbd[i][4-i];
        if(BotSum == 4){

        }
    }
}
// add value in both board solution
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
  checkWinner();
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
  checkWinner();
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
    let whilecheck = true;
    while(whilecheck){
        let check= true;
        const randomNumber = Math.floor(Math.random() * 25) + 1;
        for(let i = 0; i < UsedNumber.length; i++){
            if(UsedNumber[i] == randomNumber)
            {
                check = false;
                break;
            }
        }
        if(check){
            addValue(randomNumber);
            whilecheck = false;
        }
    }
        
}

// Create an board for player and bot 
const playerBoard = Array.from({ length: 25 }, (_, i) => i + 1); // filled with 1 to 25 number in ascending order
const BotBoard = Array.from({ length: 25 }, (_, i) => i + 1);  // filled with 1 to 25 number in ascending order
let UsedNumber = []; //Array.from({ length: 25 }, (_, i) => i + 1);  // filled with 1 to 25 number in ascending order
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
let PlayerSum;
let BotSum;
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
        let check = true;
        for(let i = 0; i < UsedNumber.length; i++){
            if(UsedNumber[i] == clickedNum)
            {
                check = false;
                break;
            }
        }
        if(check){
            UsedNumber.push(clickedNum);
            addValue(clickedNum);
            botturn();
        }
            
    });
});



