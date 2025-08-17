let a = ["ant", "bat", "cat", 42];

a.forEach(function(animal) {
  console.log(animal);
});

a.forEach((thing) => { 
  console.log(thing)
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});