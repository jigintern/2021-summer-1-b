import {shuffle} from "../utils/utils.js";

export const test = (path) => {
  return path
}

/*
  @desc get places
  @route GET /api/places
  @return JSON object or {error: err.message}
*/
export const getPlaces = () => {
    let responsePlaces = [];

    const places = JSON.parse(Deno.readTextFileSync("./_data/data.json"));

    if(places) {
      shuffle(places);
  
      // シャッフルした後30個のデータを返す
      for (let i = 0; i < 30; i++) {
        responsePlaces.push(places[i]);
      }
      
      return responsePlaces;

    } else {
      
      console.error("Not Found such data");
      return {
        error: "Not Found such data"
      }
    }
}