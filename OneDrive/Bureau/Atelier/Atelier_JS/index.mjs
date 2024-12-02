let game = true;


while (game === true) {

    const num = Math.floor(Math.random() * (101 - 1) + 1);
    console.log(num);
    let count = 1;
    let rep = parseInt(prompt("choisis un nombre entre 1 et 100 " + num, ""), 10);
    for (let i = 0; i < 10; i++) {
        if (num != rep) {
            if (num > rep) {
                rep = parseInt(prompt("trop petit", ""), 10);
            }
            else {
                rep = parseInt(prompt("trop grand", ""), 10);
            }
        }
        else {
            i = 10;
        }
        count++;
    }

}
let regame = prompt("bravo vous avez trouver en " + count + " voulez vous rejouer ?(oui/non)");
if (regame === "oui") {
    game = true;
}
else {
    game = false;
}

}

