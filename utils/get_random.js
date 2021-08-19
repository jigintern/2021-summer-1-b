//最小値以上、最大値以下の整数をランダムに返す
export const getRandom = (min, max) => {
  let random = Math.floor(Math.random() * (max + 1 - min)) + min;
  return random;
}
