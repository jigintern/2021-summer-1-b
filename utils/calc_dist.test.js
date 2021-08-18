import {calcDistance} from "./calc_dist.js"
import {
  assertEquals,
  assertNotEquals
} from "../deps.js";

const places = JSON.parse(Deno.readTextFileSync("./_data/data.json"));

samplePlace = {
    "id":"1",
    "name":"めがねミュージアム",
    "description":"館内にはめがねショップ、めがね博物館、手づくりめがね工房があります。福井県内優良メーカーのオリジナルハウスブランドや有名人がデザインした「sabae」ブランドめがねなど、１５００種以上の最新デザインと技術をそろえ ためがねが並ぶショップ、めがね大使である俳優・大村崑氏の芸能人めがねコレクションの展示やめがねの歴史が学べる博物館、さらに、自分だけのオリジナル めがねが欲しい方のための「手づくりめがね工房」では世界にひとつだけのめがねが作れます。めがねの他にも、ミニめがね型ストラップやアクセサリーも作ることが",
    "address":"鯖江市新横江2丁目3-4（ めがね会館）",
    "longitude":"136.198844",
    "latitude":"35.942758",
    "thumbnail":"http://www3.city.sabae.fukui.jp/xml/sabakan/simage/pavilion_001.jpg"
  },

Deno.test({
  name: "test calcDistance func",
  fn() {
    const result = calcDistance(samplePlace.latitude, samplePlace.longitude, places);


    assertEquals(result.length, 3);
    assertEquals(result[0].name, "渕上食堂");
    assertEquals(result[1].name, "ほおずき");
    assertEquals(result[2].name, "蕎麦　旨酒　亀蔵");
  }
})