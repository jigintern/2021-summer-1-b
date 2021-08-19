import db from "./setupDB.js";
import { getRandom } from "./utils/get_random.js";

const places = JSON.parse(Deno.readTextFileSync("./_data/data.json"));

places.forEach((place, index) => {
  db.query(
    `INSERT INTO places (name, description, address, longitude, latitude, thumbnail) VALUES (
      (?), (?), (?), (?), (?), (?)
    )`,
    [place.name, place.description, place.address, place.longitude, place.latitude, place.thumbnail]
  );

  db.query(`UPDATE places SET likes = ${getRandom(1, 20)} WHERE id = ${index + 1}`);
})

// let answer = db.query("SELECT * FROM places");
// console.log(answer);
