// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(Broom) {
    var newCats = cats.slice("Broom");
    newCats.push(Broom)
    return newCats;
}

function prependCat(Arnold) {
    var newCats = cats.slice("Arnold");
    newCats.unshift(Arnold)
    return newCats;
}

function removeLastCat() {
    const removeLastCat = cats.slice(0, 2);
    return removeLastCat;
}

function removeFirstCat() {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
}