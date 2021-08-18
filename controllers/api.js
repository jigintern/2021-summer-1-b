import { calcDistance } from "../utils/calc_dist.js";
import {
  shuffle,
  getQueries
} from "../utils/utils.js";

const places = JSON.parse(Deno.readTextFileSync("./_data/data.json"));

export const test = (path) => {
  return path
}

/*
  @desc get places
  @route GET /api/places
  @return Array or {error: err.message}
*/
export const getPlaces = () => {
  let responsePlaces = [];


  if (places) {
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

/*
  @desc get place with 
  @route GET /api/places/?longitude=number&latitude=number
  @return Array of recommended places
*/
export const getPlace = (path, req) => {
  // 1. path: /api/places/
  // 2. req: longitude=222&latitude=222
  const { longitude, latitude } = getQueries(req);
  console.log(`longitude: ${longitude}, latitude: ${latitude}`)

  let recomended_places = calcDistance(latitude, longitude, places)
  console.log(`recomended_places: ${recomended_places}`)

  if (recomended_places) {
    return {
      success: true,
      data: recomended_places
    }
  }
  else {
    return {
      success: false,
      data: []
    }
  }
}
