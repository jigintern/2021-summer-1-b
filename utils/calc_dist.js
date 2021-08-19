// 参考: https://qiita.com/kawanet/items/a2e111b17b8eb5ac859a
const R = Math.PI / 180;

export const calcDistance = (lat1, lng1, array) => {
  lat1 *= R;
  lng1 *= R;
  const after_calc_array = [];

  array.forEach((place) => {
    let lat2 = place.latitude * R;
    let lng2 = place.longitude * R;
    let distance = 6371 * Math.acos(Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) + Math.sin(lat1) * Math.sin(lat2));

    // 自分自身は除外
    if (lat1 == lat2 && lng1 == lng2) {
      return;
    }
    
    place.distance = distance;
    // console.log(`distance: ${distance}, name: ${place.name} `)
    after_calc_array.push(place);
  });

  after_calc_array.sort((a, b) => {
    if (a.distance < b.distance) {
      return -1;
    } else {
      return 1;
    }
  });
  return after_calc_array.slice(0, 3);
}
