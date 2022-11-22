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
    console.log(newCats);
    console.log(cats);
   
}
appendCat();

function prependCat(){
    const newCats = [...cats];
    newCats.unshift("Arnold");
    console.log(newCats);
    console.log(cats);
}
prependCat();

function removeLastCat(){
    const newCats = [...cats];
    newCats.pop("Garfield");
    console.log(newCats);
    console.log(cats);
}
removeLastCat();

function removeFirstCat(){
    const newCats = [...cats];
    newCats.shift("Milo");
    console.log(newCats);
    console.log(cats);
}
removeFirstCat(); 
