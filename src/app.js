const { goodOrbad } = require("./utils");

// const input = process.argv[2];
// console.log(`My favourite movie is ${input}`);

const likeVar = process.argv[2];
const movie = process.argv[3];
const actor = process.argv[4];
goodOrbad(likeVar, movie, actor);
