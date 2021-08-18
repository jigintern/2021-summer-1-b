import {
  shuffle,
  getQueries
} from "./utils.js";
import {
  assertEquals,
  assertNotEquals
} from "../deps.js";

const testArray = [
  {
    "name": "test1",
    "description": "desc1"
  },
  {
    "name": "test2",
    "description": "desc2"
  },
  {
    "name": "test3",
    "description": "desc3"
  },
  {
    "name": "test4",
    "description": "desc4"
  },
  {
    "name": "test5",
    "description": "desc5"
  },
  {
    "name": "test6",
    "description": "desc1"
  },
  {
    "name": "test7",
    "description": "desc2"
  },
  {
    "name": "test8",
    "description": "desc3"
  },
  {
    "name": "test9",
    "description": "desc4"
  },
  {
    "name": "test10",
    "description": "desc5"
  },
];

Deno.test({
  name: "test shuffle func",
  fn() {
    shuffle(testArray);

    assertNotEquals(testArray[0].name, "test1");
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