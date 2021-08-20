import db from "../setupDB.js";
import { calcDistance } from "../utils/calc_dist.js";
import { incrementLikes } from "../utils/increment_likes.js";
import {
  shuffle,
  getQueries
} from "../utils/utils.js";

const places = db.queryEntries("SELECT * FROM places");

export const test = (path) => {
  return path
}

/**
 * 
 * @desc get places
 * @route GET /api/places
 * @return {object} object of success flag and places
*/
export const getPlaces = () => {
  let responsePlaces = [];

  if (places) {
    shuffle(places);

    // シャッフルした後30個のデータを返す
    for (let i = 0; i < 30; i++) {
      responsePlaces.push(places[i]);
    }

    return {
      success: true,
      data: responsePlaces
    }

  } else {

    console.error("Not Found such data");
    return {
      success: false,
      data: []
    }
  }
}

/**
 * 
 * @desc get place with recommended places
 * @route GET /api/places/?longitude=number&latitude=number
 * @return {object} object of success flag and recommended places
*/

export const getPlace = (path, req) => {
  // 1. path: /api/places/
  // 2. req: longitude=222&latitude=222
  const { longitude, latitude } = getQueries(req);
  // console.log(`longitude: ${longitude}, latitude: ${latitude}`)

  let recomended_places = calcDistance(latitude, longitude, places)
  // console.log(`recomended_places: ${recomended_places}`)

  // increment likes
  const result = incrementLikes(longitude);

  if (recomended_places && result) {
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
