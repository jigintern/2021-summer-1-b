export const test = (path) => {
  return path
}

/*
  @desc get places
  @route GET /api/places
  @return JSON object or {error: err.message}
*/
export const getPlaces = () => {
  try {
    const places = JSON.parse(Deno.readTextFileSync("./_data/places.json"));
    if(places) {
      return places;
    }
    
  } catch (err) {
    console.error(err.message);
    return {
      error: err.message
    }
  }
}