// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // 配列の二つの数字を交換
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const getQueries = (req) => {
  if(req.includes("longitude") && req.includes('latitude')) {
    const r = /\d+/g;
    const result = req.match(r)

    return {
      longitude: +`${result[0]}.${result[1]}`,
      latitude: +`${result[2]}.${result[3]}`
    }
  } else {
    return {
      
    }
  }
}