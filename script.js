function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to  the displayed update array
/*function updateGrid() {
    // Clear existing grid items
    gridContainer1.innerHTML = '';

    // Display the Player updated array
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const gridItem1 = document.createElement('div');
            gridItem1.classList.add('grid-item1');
            gridItem1.textContent = PlayerSolbd[i][j];
            gridContainer1.appendChild(gridItem1);
        }
    }

    // Display the Bot updated array
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const gridItem2 = document.createElement('div');
            gridItem2.classList.add('grid-item1');
            gridItem2.textContent = BotSolbd[i][j];
            gridContainer1.appendChild(gridItem2);
        }
    }
}
*/

function checkWinner(){
    // check player board
    for(let i = 0; i < 5; i++){
        PlayerSum=0;
        for(let j =0; j < 5; j++){
            PlayerSum += PlayerSolbd[i][j];
            if(PlayerSum == 5){
                var word = "You win!";
                wordContainer.innerHTML = word;
                return true;
            }
        }
    }
    for(let i = 0; i < 5; i++){
        PlayerSum=0;
        for(let j =0; j < 5; j++){
            PlayerSum += PlayerSolbd[j][i];
            if(PlayerSum == 5){
                var word = "You win!";
                wordContainer.innerHTML = word;
                return true;
            }
        }
    }
    PlayerSum=0;
    for(let i = 0; i < 5; i++){
        PlayerSum += PlayerSolbd[i][i];
        if(PlayerSum == 5){
            var word = "You win!";
            wordContainer.innerHTML = word;
            return true;
        }
    }
    PlayerSum=0;
    for(let i = 0; i < 5; i++){
        PlayerSum += PlayerSolbd[i][4-i];
        if(PlayerSum == 5){
            var word = "You win!";
            wordContainer.innerHTML = word;
            return true;
        }
    }
    // check bot board
    for(let i = 0; i < 5; i++){
        BotSum=0;
        for(let j =0; j < 5; j++){
            BotSum += BotSolbd[i][j];
            if(BotSum == 5){
                var word = "Bot win!";
                wordContainer.innerHTML = word;
                return true;
            }
        }
    }
    for(let i = 0; i < 5; i++){
        BotSum=0;
        for(let j =0; j < 5; j++){
            BotSum += BotSolbd[j][i];
            if(BotSum == 5){
                var word = "Bot win!";
                wordContainer.innerHTML = word;
                return true;
            }
        }
    }
    BotSum=0;
    for(let i = 0; i < 5; i++){
        BotSum += BotSolbd[i][i];
        if(BotSum == 5){
            var word = "Bot win!";
            wordContainer.innerHTML = word;
            return true;
        }
    }
    BotSum=0;
    for(let i = 0; i < 5; i++){
        BotSum += BotSolbd[i][4-i];
        if(BotSum == 5){
            var word = "Bot win!";
            wordContainer.innerHTML = word;
            return true;
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
  win = checkWinner();
  for(let i = 0; i < 25; i++){
    if(BotBoard[i] == value){
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
   win = checkWinner();
  //updateGrid();
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
            UsedNumber.push(randomNumber);
            document.getElementById("BotNum").innerHTML = randomNumber;
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
let win = false;
var wordContainer = document.getElementById("wordContainer");

// Shuffle the element randomly
shuffleArray(playerBoard);
shuffleArray(BotBoard);

// Get the grid container element
const gridContainer = document.getElementById('grid-container');

// Display player board by Creating and appending grid items with shuffled numbers
for (let i = 0; i < 25; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    const number = playerBoard[i];
    gridItem.style.backgroundImage = `url(images/${number}.png)`;
    
    gridContainer.appendChild(gridItem);
}
// Display Bot board by Creating and appending grid items with shuffled numbers
/*for (let i = 0; i < 25; i++) {
    const gridItem3 = document.createElement('div');
    gridItem3.classList.add('grid-item');
    const number = BotBoard[i];
    gridItem3.style.backgroundImage = `url(images/${number}.png)`;
    
    gridContainer.appendChild(gridItem3);
}*/
//const gridContainer1 = document.getElementById('grid-container1');

const crossLine = document.getElementById('cross-line');


// Display bot board by Creating and appending grid items with shuffled numbers
//updateGrid();

// Get all the grid items
const gridItems = document.querySelectorAll('.grid-item');

// Get the clicked-number element
const clickedNumber = document.getElementById('clicked-number');

// Add a click event listener to each grid item
gridItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        // Get the clicked number
        if(!win){
            const backgroundImage = item.style.backgroundImage;
            const clickedNum = parseInt(backgroundImage.match(/\d+/)[0]);

            const clickX = event.clientX - gridContainer.getBoundingClientRect().left;
            const clickY = event.clientY - gridContainer.getBoundingClientRect().top;
            crossLine.style.left = `${clickX}px`;
            crossLine.style.top = `${clickY}px`;

            // Display the cross-line
            crossLine.style.display = 'block';
            
            document.getElementById("clickXValue").textContent = `Click X: ${clickX}px`;
            document.getElementById("clickYValue").textContent = `Click Y: ${clickY}px`;

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
                document.getElementById("PlayerNum").innerHTML = clickedNum;
                addValue(clickedNum);
                botturn();
            }
        }  
    });
});
// Get the grid container and cross-line element
//const gridContainer = document.getElementById('grid-container');


const startGame = document.getElementById('start-button');
const Gamecontent = document.getElementById('grid-container');
const PlayerCont = document.getElementById('PlayerNum');
const BotContent = document.getElementById('BotNum');
const fonthide1 = document.getElementById('fonthide1');
const fonthide2 = document.getElementById('fonthide2');


startGame.addEventListener('click', () => {
    //console.log('Button clicked');
    startGame.style.display = 'none';
    Gamecontent.style.display = 'grid';
    PlayerCont.style.display = 'flex';
    BotContent.style.display = 'flex';
    fonthide1.style.display = 'block';
    fonthide2.style.display = 'block';
    
});

