import {db} from "./setupDB.js";

const places = JSON.parse(Deno.readTextFileSync("./_data/data.json"));

// Run a simple query
// for (const name of names) {
//   db.query("INSERT INTO people (name) VALUES (?)", [name]);
// }

// Print out data in table
// for (const [name] of db.query("SELECT name FROM people")) {
//   console.log(name);
// }

// Close connection
// db.close();