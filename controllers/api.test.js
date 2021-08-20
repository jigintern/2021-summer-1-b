// import {
//   assertEquals,
//   assertNotEquals
// } from "../deps.js";
// import {
//   getPlaces,
//   getPlace
// } from "./api.js";

// Deno.test({
//   name: "test GET places api",
//   fn() {
//     const res = getPlaces();

//     assertEquals(res.success, true);
//   }
// })

// Deno.test({
//   name: "test GET place api",
//   fn() {
//     const testPath = "/api/places/";
//     const testReq = "longitude=136.198844&latitude=35.942758"

//     const res = getPlace(testPath, testReq);

//     assertEquals(res.success, true);
//     assertEquals(res.data.length, 3)
//   }
// })