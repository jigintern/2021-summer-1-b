import { DB } from "./deps.js";
const testDB = new DB("test.db");

const testPlace = [
  {
    "id":"1",
    "name":"めがねミュージアム",
    "description":"館内にはめがねショップ、めがね博物館、手づくりめがね工房があります。福井県内優良メーカーのオリジナルハウスブランドや有名人がデザインした「sabae」ブランドめがねなど、１５００種以上の最新デザインと技術をそろえ ためがねが並ぶショップ、めがね大使である俳優・大村崑氏の芸能人めがねコレクションの展示やめがねの歴史が学べる博物館、さらに、自分だけのオリジナル めがねが欲しい方のための「手づくりめがね工房」では世界にひとつだけのめがねが作れます。めがねの他にも、ミニめがね型ストラップやアクセサリーも作ることが",
    "address":"鯖江市新横江2丁目3-4（ めがね会館）",
    "longitude":"136.198844",
    "latitude":"35.942758",
    "thumbnail":"http://www3.city.sabae.fukui.jp/xml/sabakan/simage/pavilion_001.jpg"
  },
  {
    "id":"2",
    "name":"石田縞手織りセンター",
    "description":"鯖江市繊維会館内にある施設です。鯖江市は古くから繊維産業が盛んです。そのルーツである伝統織り「石田縞」が、時を越えて繊維のすばらしさと奥深さを伝えています。当センターでは、伝統ある石田縞の紹介や、昔ながらの手織り体験ができます。",
    "address":"福井県鯖江市糺町32-1-1",
    "longitude":"136.175821",
    "latitude":"35.972545",
    "thumbnail":"https://www.city.sabae.fukui.jp/xml/sabakan/simage/pavilion_002.jpg"
  },
  {
    "id":"3",
    "name":"うるしの里会館",
    "description":"館内のミュージアムショップでは、産地ならではの品揃えで越前漆器が直販価格で販売されています。また、越前漆器の歴史が学べる資料が展示されているほか、隣接の職人工房では伝統工芸士による実演を見学できます。さらに、絵付け･沈金・拭き漆の３つの漆器体験で、自分だけのオリジナル作品を作ることができます。",
    "address":"福井県鯖江市西袋町40-1-2",
    "longitude":"136.2738",
    "latitude":"35.953033",
    "thumbnail":"https://www.city.sabae.fukui.jp/xml/sabakan/simage/pavilion_003.jpg"
  },
  {
    "id":"4",
    "name":"まなべの館",
    "description":"鯖江市の歴史が学べる博物館です。鯖江の歴代藩主の書画や遺品を紹介する「まなべの部屋」をはじめ、市内遺跡からの出土品や貴重な考古資料を紹介する「考古学の部屋」、近松門左衛門の関連資料が並ぶ「近松の部屋」、鯖江市出身のアニメーション作家・久里洋二氏の作人が並ぶ「久里洋二の部屋」、鯖江市出身の芸術家・故西山真一氏の作品を紹介する「西山真一の部屋」が常設され、学びの施設として親しまれています。また、企画展や市民によるギャラリー展なども随時開催されます。",
    "address":"鯖江市長泉寺町1丁目9-20",
    "longitude":"136.184339",
    "latitude":"35.9535",
    "thumbnail":"https://www.city.sabae.fukui.jp/xml/sabakan/simage/pavilion_004.jpg"
  },
  {
    "id":"5",
    "name":"久里洋二の世界　GALLERY Ｋ",
    "description":"日本を代表するイラストレーターであり、まなべの館名誉館長でもある 鯖江市出身の久里洋二氏。彼の作品に出会える夢のギャラリーです 。ふしぎにあたたかい久里洋二氏の楽しい世界を体感できます。お気軽にお立ち寄りください。作品を購入することもできます。",
    "address":"鯖江市糺町16-18",
    "longitude":"136.167572",
    "latitude":"35.977267",
    "thumbnail":"https://www.city.sabae.fukui.jp/xml/sabakan/simage/pavilion_005.jpg"
  }
]

testDB.query(`
  CREATE TABLE IF NOT EXISTS places (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    address TEXT,
    longitude TEXT,
    latitude TEXT,
    thumbnail TEXT,
    likes INTEGER DEFAULT 0
  )
`);

testPlace.forEach((place, index) => {
  testDB.query(
    `INSERT INTO places (name, description, address, longitude, latitude, thumbnail) VALUES (
      (?), (?), (?), (?), (?), (?)
    )`,
    [place.name, place.description, place.address, place.longitude, place.latitude, place.thumbnail]
  );
})

export default testDB;