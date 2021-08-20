import testDB from "../setupTestDB.js";
import {
  shuffle,
  getQueries
} from "./utils.js";
import {
  assertEquals,
  assertNotEquals
} from "../deps.js";

const places = testDB.queryEntries("SELECT * FROM places");

// このテストは配列をシャッフルをテストしているため何回かに１回はerrorになるけど気にしない
Deno.test({
  name: "test shuffle func",
  fn() {
    shuffle(places);

    assertNotEquals(places[0].name, "めがねミュージアム");
  }
})

Deno.test({
  name: "test getQueries func",
  fn() {
    // めがね会館
    const testReq1 = "longitude=136.198844&latitude=35.942758";
    const testReq2 = "longitude=136.198844";
    const testReq3 = "latitude=35.942758";

    assertEquals(getQueries(testReq1).longitude, 136.198844)
    assertEquals(getQueries(testReq1).latitude, 35.942758)
    assertEquals(getQueries(testReq2), {})
    assertEquals(getQueries(testReq3), {})
  }
})