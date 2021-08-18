import {
  shuffle,
  getQueries
} from "../utils/utils.js";

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

/*
  @desc get place with 
  @route GET /api/places/?longitude=number&latitude=number
  @return JSON object or {error: err.message}
*/
export const getPlace = (path, req) => {
  // 1. path: /api/places/
  // 2. req: longitude=222&latitude=222
  const {longitude, latitude} = getQueries(req);
  console.log(`longitude: ${longitude}, latitude: ${latitude}`)

  // search near places

  
  // response
  const resData = {
    
  }
}