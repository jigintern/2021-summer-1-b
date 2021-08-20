/**
  @desc increment likes on DB
  @param {number} longitude
  @return true or false
*/
export const incrementLikes = (longitude, db) => {
  try {
    // fint this place
    const thisPlace = db.queryEntries(`SELECT * FROM places where longitude = ${longitude}`);
  
      // increment likes
      thisPlace[0].likes += 1;
      // update database
      db.query(`update places set likes = ${thisPlace[0].likes} where longitude = ${longitude}`);
  
      return true;
  } catch {
    console.log(`NotFound the place of longitude: ${longitude}`);
    return false
  }
}