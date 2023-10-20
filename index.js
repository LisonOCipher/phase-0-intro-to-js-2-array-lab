// Assigning initial value
const cats = ["Milo", "Otis", "Garfield"];

// appending Ralph
function destructivelyAppendCat() {
const appendCat = 'Ralph';
cats.push(appendCat);
console.log(cats);
}

// prepending Bob
function destructivelyPrependCat() {
const prependCat = 'Bob';
cats.unshift(prependCat);
console.log(cats);
}

// Remove last cat
function destructivelyRemoveLastCat() {
cats.pop();
console.log(cats);
}

// remove first cat
function destructivelyRemoveFirstCat() {
cats.shift();
console.log(cats);
}

// appendCat(name)
function appendCat(name) {
  const newCats = [...cats, name];
  return newCats;
}

// prependCat (name) 
function prependCat() {
const addCats = "Arnold"
  const newCats = [cats, ...addCats];
  return newCats;
}

// Removing last cat non destructively
function removeLastCat() {
  const newCats = cats.slice(0, cats.length - 1);
  return newCats;
}

// Removing first cat non destructively
function removeFirstCat() {
  const newCats = cats.slice(1);
  return newCats;
}

