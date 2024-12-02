let game = true;
let win;
let regame


while (game === true) {

    const num = Math.floor(Math.random() * (101 - 1) + 1);
    console.log(num);
    let count = 0;
    let rep = parseInt(prompt("choisis un nombre entre 1 et 100 " + num, ""), 10);
    for (let i = 0; i < 9; i++) {
        if (num != rep) {
            if (num > rep) {
                rep = parseInt(prompt("trop petit vous avez encore " + (9 - i) + " essai", ""), 10);
                win = false;
            }
            else {
                rep = parseInt(prompt("trop grand vous avez encore " + (9 - i) + " essai", ""), 10);
                win = false;
            }
        }
        else {
            i = 10;
            win = true;
        }
        count++;

    }
    if (win === true) {
        regame = prompt("bravo vous avez trouver en " + count + " voulez vous rejouer ?(oui/non)");
    }
    else {
        regame = prompt("Vous avez perdu voulez vous rejouer ?(oui/non)");
    }
    alert(regame);
    if (regame === "oui") {
        game = true;
    }
    else {
        game = false;
    }

}



