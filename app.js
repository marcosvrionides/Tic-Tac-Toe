var positions = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function logPositions() {
    let i = 0;
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            positions[y][x] = all_buttons[i].innerHTML;
            i++;
        };
    };
};

function checkGameOver() {
    let j = 0; //number of empty boxes
    for (let i = 0; i < all_buttons.length; i++) {
        if (all_buttons[i].innerHTML == '-') {
            j++;
        }
    }
    if (j == 0 || checkWin() == true) {
        let element = document.getElementById("turn");
        element.innerHTML = "Game Over";
        element.style.color = "yellow";
        return true;
    }
};

function checkWin() {
    let winner = turn;
    if (winner == 1) {
        winner = 2;
    } else {
        winner = 1;
    }
    if (((positions[0][0] != '-') && (positions[0][0] == positions[0][1]) && (positions[0][0] == positions[0][2]))
        || ((positions[1][0] != '-') && (positions[1][0] == positions[1][1]) && (positions[1][0] == positions[1][2]))
        || ((positions[2][0] != '-') && (positions[2][0] == positions[2][1]) && (positions[2][0] == positions[2][2]))
        || ((positions[0][0] != '-') && (positions[0][0] == positions[1][1]) && (positions[0][0] == positions[2][2]))
        || ((positions[0][2] != '-') && (positions[0][2] == positions[1][1]) && (positions[0][2] == positions[2][0]))
        || ((positions[0][0] != '-') && (positions[0][0] == positions[1][0]) && (positions[0][0] == positions[2][0]))
        || ((positions[0][1] != '-') && (positions[0][1] == positions[1][1]) && (positions[0][1] == positions[2][1]))
        || ((positions[0][2] != '-') && (positions[0][2] == positions[1][2]) && (positions[0][2] == positions[2][2]))) {
        let element = document.getElementById("winner");
        element.innerHTML = `Player ${winner} wins`;
        element.style.color = "yellow";
        return true;
    }
};

const Player1 = 'X';
const Player2 = 'O';

turn = Math.round((Math.random()+1));
document.getElementById("turn").innerHTML = `Player ${turn} starts`;

var all_buttons = document.querySelectorAll('button');
console.log(all_buttons);

for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].innerHTML = "-";
    all_buttons[i].addEventListener('click',function () {
        if (turn == 1 && this.innerHTML == '-') {
            this.innerHTML = "X";
            turn = 2;
        } else if (turn == 2 && this.innerHTML == '-') {
            this.innerHTML = "O";
            turn = 1;
        }
        document.getElementById("turn").innerHTML = `Player ${turn}'s turn`;
        logPositions();
        checkGameOver();
    });
};