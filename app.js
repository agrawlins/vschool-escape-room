const readline = require("readline-sync");

while(true){
    mainMenu();
}

function mainMenu() {
    let key = false;
    let choice = readline.question("What will you do?\n 1) Open the door \n 2) Find the key \n 3) Put hand in the hole");
    switch (choice) {
        case "1":
            if (key = false) {
                console.log("It's locked...");
            } else if (key = false) {
                key=false;
                victoryMenu();
            };
            break;
        case "2":
            if (key = false) {
                console.log("You've acquired a key!");
                key = true;
            } else {
                console.log("You've already got the key!");
            };
            break;
        case "3":
                defeatMenu();
            break;
        default:
            console.log("Please enter either '1', '2', or '3'")
            break;
    }
}

function victoryMenu() {
    let repeat = readline.question("Congratulations! \n You've made it out of the Escape Room! \n Play again? \n 1) Yes \n 2) No");
    switch (repeat) {
        case "1":
            key = false;
            mainMenu();
            break;
        case "2":
           return console.log("Goodbye!");
        default:
            console.log("Please enter either '1' or '2'");
            break;
    }
}

function defeatMenu() {
    let repeat = readline.question("Game Over \n You died! \n Play again? \n 1) Yes \n 2) No");
    switch (repeat) {
        case "1":
            mainMenu();
            key = false;
            break;
        case "2":
           return console.log("Goodbye!");
        default:
            console.log("Please enter either '1' or '2'");
            defeatMenu();
            break;
    }
}
