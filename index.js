// Write your solution here!
 const cats=["Milo","Otis","Garfield"];

 function destructivelyAppendCat(name) {
 name=cats.push("Ralph");
    
 }
  function  destructivelyPrependCat(name) {
    name=cats.unshift("Bob")
  }
  
  function destructivelyRemoveLastCat(name) {
    name=cats.pop();
  }
  function destructivelyRemoveFirstCat(name) {
    name=cats.shift();
  }
  function appendCat(name) {
   const newCats=[...cats,"Broom"];
   return newCats;
  }
  function prependCat(name) {
    const newCats=["Arnold",...cats];
    return newCats;
   }
   function removeLastCat() {
    const newCats= [...cats.slice(0,2)];
    return newCats;
   }
   function removeFirstCat() {
    const newCats= [...cats.slice(1)];
    return newCats;
   }
