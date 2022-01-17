//gra w zgadywanie liczby
let max = parseInt(prompt("Podaj liczbe max "));
while (!max) { let max = parseInt(prompt("Podaj liczbe")); }

const targetNum = Math.floor(Math.random() * max) + 1;

let guess = parseInt(prompt("Podaj zgadywaną liczba"));
let liczbaProb = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    liczbaProb++;
    if (guess > targetNum) {
        guess = prompt("Za wysoko Podaj kolejny pomysł: ");
    } else {
        guess = prompt("Za nisko Podaj kolejny pomysł: ");
    }
}
if (guess == 'q') {
    console.log("nie udało sie");
} else {
    console.log(`Udało sie za ${liczbaProb} razem`);
}