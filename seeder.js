import { db } from "./setupDB.js";

const places = JSON.parse(Deno.readTextFileSync("./_data/data.json"));

places.forEach((place) => {
  db.query(`INSERT INTO places (name, description, address, longitude, latitude, thumbnail) VALUES (${place.name}, ${place.description}, ${place.adress}, ${place.longitude}, ${place.latitude}, ${place.tumbnail})`);
})

for (const name of names) {
  db.query("INSERT INTO places VALUES ()", [name]);
}

for (const [place] of db.query("SELECT * FROM places")) {
  console.log(place);
}
