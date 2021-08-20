import testDB from "../setupTestDB.js";
import {
  assertEquals
} from "../deps.js";
import {incrementLikes} from "./increment_likes.js";

Deno.test({
  name: "test incrementLikes func",
  fn() {
    // めがね会館 -> longitude: 136.198844
    const result = incrementLikes(136.198844, testDB);

    assertEquals(result, true);

    // fint this place
    const thisPlace = testDB.queryEntries(`SELECT * FROM places where longitude = 136.198844`);

    assertEquals(thisPlace[0].likes, 1);
  }
})