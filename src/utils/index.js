const fs = require("fs");

const withoutActor = (likeVar, movie) => {
  if (likeVar === "good") {
    // console.log(`I like ${movie} movie`);
    fs.writeFileSync(
      "./storage.json",
      JSON.stringify({ name: movie, like: likeVar })
    );
    const stringyList = JSON.parse(fs.readFileSync("./storage.json"));
    console.log(stringyList);
  } else if (likeVar === "bad") {
    // console.log(`I do not like ${movie} movie`);

    fs.writeFileSync(
      "./storage.json",
      JSON.stringify({ name: movie, like: likeVar })
    );
    const stringyList = JSON.parse(fs.readFileSync("./storage.json"));
    console.log(stringyList);
  } else {
    console.log("Incorrect input");
  }
};

const withActor = (likeVar, movie, actor) => {
  if (likeVar === "good") {
    // console.log(`I like ${movie} movie with ${actor}`);

    fs.writeFileSync(
      "./storage.json",
      JSON.stringify({
        name: movie,
        like: likeVar,
        actor: actor,
      })
    );
    const stringyList = JSON.parse(fs.readFileSync("./storage.json"));
    console.log(stringyList.name);
  } else if (likeVar === "bad") {
    // console.log(`I do not like ${movie} movie with ${actor}`);

    fs.writeFileSync(
      "./storage.json",
      JSON.stringify({
        name: movie,
        like: likeVar,
        actor: actor,
      })
    );
    const stringyList = JSON.parse(fs.readFileSync("./storage.json"));
    console.log(stringyList.name);
  } else {
    console.log("Incorrect input");
  }
};
exports.goodOrbad = (likeVar, movie, actor) => {
  actor ? withActor(likeVar, movie, actor) : withoutActor(likeVar, movie);
};

// module.export = goodOrbad;
