// Write your solution here!
// create array of cats and initialize it
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
//add a cat to the end of the cats arrray
    cats.push("Ralph");
}
destructivelyAppendCat();

function destructivelyPrependCat(){
    //add to the beginning of cats array
    cats.unshift("Bob");
}
destructivelyPrependCat(); 

function destructivelyRemoveLastCat(){
    cats.pop("Garfield");
    //remove last cat from array
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
    cats.shift("Milo");
    //removes first cat from array
}
destructivelyRemoveFirstCat();

function appendCat(){
    const newCats = [...cats];
   newCats.push("Broom");
   return newCats;
   
}
appendCat();

function prependCat(){
    const newCats = [...cats];
    newCats.unshift("Arnold");
    return newCats;
}
prependCat();

function removeLastCat(){
    const newCats = [...cats];
    newCats.pop("Garfield");
    return newCats;
}
removeLastCat();

function removeFirstCat(){
    const newCats = [...cats];
    newCats.shift("Milo");
    return newCats;
}
removeFirstCat(); 
