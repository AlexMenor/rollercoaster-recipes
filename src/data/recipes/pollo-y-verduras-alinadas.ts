import type { Recipe } from './types';
import picture from '../../assets/pollo-y-verduras-alinadas.png';

const main = { en: 'Chicken and vegetables', tr: 'Tavuk ve sebzeler', es: 'Pollo y verduras' };
const dressing = { en: 'Dressing', tr: 'Sos', es: 'Aliño' };

const recipe: Recipe = {
  id: 'pollo-y-verduras-alinadas',
  createdAt: '2026-10-11',
  prepTime: 15,
  totalTime: 45,
  cooking: {
    method: 'oven',
    temperatureC: 210,
    timing: { kind: 'check', minutes: 25 },
    note: {
      en: 'Continue cooking only if needed.',
      tr: 'Yalnızca gerekirse pişirmeye devam edin.',
      es: 'Continuar la cocción solo si hace falta.',
    },
  },
  origin: { en: 'Greece', tr: 'Yunanistan', es: 'Grecia' },
  picture,
  servings: { default: 4, min: 2, max: 8 },
  spotifyTrackId: '3APHT3KjbHi9OllkVQsuXF',
  ingredients: [
    {
      amount: 6,
      unit: 'pcs',
      group: main,
      name: {
        en: 'boneless, skinless chicken thighs (use one-third more if small)',
        tr: 'kemiksiz, derisiz tavuk üst but (küçükse miktarı üçte bir artırın)',
        es: 'contramuslos de pollo deshuesados y sin piel (usa un tercio más si son pequeños)',
      },
    },
    {
      amount: 1,
      unit: 'pcs',
      group: main,
      name: { en: 'zucchini', tr: 'kabak', es: 'calabacín' },
    },
    {
      amount: 1,
      unit: 'pcs',
      group: main,
      name: { en: 'large red bell pepper', tr: 'büyük kırmızı biber', es: 'pimiento rojo grande' },
    },
    {
      amount: 1,
      unit: 'pcs',
      group: main,
      name: {
        en: 'large tomato (or twice as many small ones)',
        tr: 'büyük domates (veya iki katı kadar küçük domates)',
        es: 'tomate grande (o el doble de pequeños)',
      },
    },
    {
      amount: 1,
      unit: 'pcs',
      group: main,
      name: { en: 'red onion', tr: 'kırmızı soğan', es: 'cebolla morada' },
    },
    {
      amount: 50,
      unit: 'g',
      group: main,
      name: { en: 'green olives', tr: 'yeşil zeytin', es: 'aceitunas verdes' },
    },
    {
      amount: 50,
      unit: 'g',
      group: main,
      name: {
        en: 'Kalamata or other black olives',
        tr: 'Kalamata veya başka siyah zeytin',
        es: 'aceitunas kalamata u otras negras',
      },
    },
    {
      amount: 1,
      unit: 'pcs',
      group: main,
      name: {
        en: 'small handful of parsley or other fresh herbs, to taste',
        tr: 'damak tadına göre küçük bir avuç maydanoz veya başka taze ot',
        es: 'puñado pequeño de perejil u otras hierbas frescas, al gusto',
      },
      optional: true,
    },
    {
      amount: 120,
      unit: 'ml',
      group: dressing,
      name: { en: 'extra virgin olive oil', tr: 'sızma zeytinyağı', es: 'aceite de oliva virgen extra' },
    },
    {
      amount: 4,
      unit: 'tbsp',
      group: dressing,
      name: { en: 'freshly squeezed lemon juice', tr: 'taze sıkılmış limon suyu', es: 'zumo de limón recién exprimido' },
    },
    {
      amount: 1,
      unit: 'pinch',
      optional: true,
      group: dressing,
      name: { en: 'finely grated lemon zest', tr: 'ince rendelenmiş limon kabuğu', es: 'ralladura fina de limón' },
    },
    {
      amount: 2,
      unit: 'tsp',
      group: dressing,
      name: { en: 'dried oregano', tr: 'kuru kekik', es: 'orégano seco' },
    },
    {
      amount: 1,
      unit: 'pcs',
      group: dressing,
      name: { en: 'garlic clove', tr: 'diş sarımsak', es: 'diente de ajo' },
    },
    {
      amount: 1,
      unit: 'pinch',
      group: dressing,
      name: {
        en: 'black pepper, to taste',
        tr: 'damak tadına göre karabiber',
        es: 'pimienta negra, al gusto',
      },
    },
    {
      amount: 1,
      unit: 'pinch',
      group: dressing,
      name: {
        en: 'salt, to taste',
        tr: 'damak tadına göre tuz',
        es: 'sal, al gusto',
      },
    },
  ],
  steps: [
    {
      text: {
        en: 'Preheat the oven to 210°C. Use boneless, skinless chicken thighs, or chicken breast as an alternative.',
        tr: 'Fırını 210°C’ye ısıtın. Kemiksiz, derisiz tavuk üst but veya alternatif olarak tavuk göğsü kullanın.',
        es: 'Precalienta el horno a 210 °C. Usa contramuslos deshuesados y sin piel, o pechuga de pollo como alternativa.',
      },
    },
    {
      text: {
        en: 'Grate or finely chop the garlic. Squeeze the lemons, following the juice quantity in the ingredient list. Put the juice, a little zest if using, the garlic, oregano, salt, and black pepper in a jar with a lid. Add a little more juice if you prefer it sharper. Shake to help dissolve the salt, add the olive oil, and shake again.',
        tr: 'Sarımsağı rendeleyin veya ince doğrayın. Malzeme listesindeki limon suyu miktarını esas alarak limonları sıkın. Suyu, kullanıyorsanız biraz limon kabuğu rendesini, sarımsağı, kekiği, tuzu ve karabiberi kapaklı bir kavanoza koyun. Daha ekşi seviyorsanız biraz daha limon suyu ekleyin. Tuzun çözünmesi için çalkalayın, zeytinyağını ekleyip tekrar çalkalayın.',
        es: 'Ralla o pica fino el ajo. Exprime los limones siguiendo la cantidad de zumo indicada en la lista de ingredientes. Pon el zumo, un poco de ralladura si la usas, el ajo, el orégano, la sal y la pimienta en un bote con tapa. Añade un poco más de zumo si lo prefieres más ácido. Agita para ayudar a disolver la sal, añade el aceite de oliva y vuelve a agitar.',
      },
    },
    {
      text: {
        en: 'Halve the onion. Cut the zucchini into thick half-moons, the red pepper into large squares, and the tomato into wedges. Put all the vegetables in a large bowl.',
        tr: 'Soğanı ikiye bölün. Kabağı kalın yarım ay dilimlerine, kırmızı biberi büyük karelere, domatesi dilimlere kesin. Tüm sebzeleri geniş bir kaseye koyun.',
        es: 'Corta la cebolla por la mitad. Corta el calabacín en medialunas gruesas, el pimiento en cuadrados grandes y el tomate en gajos. Pon todas las verduras en un bol grande.',
      },
    },
    {
      text: {
        en: 'Pit the green and black olives if you prefer. Add them and the chicken to the bowl with the vegetables. Shake the dressing again, pour all of it into the bowl, and mix well until everything is evenly coated.',
        tr: 'Dilerseniz yeşil ve siyah zeytinlerin çekirdeklerini çıkarın. Zeytinleri ve tavuğu sebzelerin olduğu kaseye ekleyin. Sosu tekrar çalkalayın, tamamını kaseye dökün ve tüm malzemeler sosla eşit şekilde kaplanana kadar iyice karıştırın.',
        es: 'Deshuesa las aceitunas verdes y negras si lo prefieres. Añádelas junto con el pollo al bol con las verduras. Agita de nuevo el aliño, viértelo entero en el bol y mezcla bien hasta que todo quede impregnado de manera uniforme.',
      },
    },
    {
      text: {
        en: 'Transfer the chicken, vegetables, olives, and all the dressing from the bowl to a large roasting tray. Spread everything in a single layer, with the chicken and as many vegetables as possible touching the bottom. You can fold the thighs slightly to fit them in.',
        tr: 'Tavuğu, sebzeleri, zeytinleri ve kasedeki sosun tamamını geniş bir fırın tepsisine aktarın. Tavuk ve mümkün olduğunca çok sebze tepsinin tabanına değecek şekilde hepsini tek kat halinde yayın. Sığdırmak için butları hafifçe katlayabilirsiniz.',
        es: 'Pasa el pollo, las verduras, las aceitunas y todo el aliño del bol a una bandeja de horno amplia. Repártelo en una sola capa, procurando que el pollo y el máximo de verduras toquen el fondo. Puedes recoger un poco los contramuslos sobre sí mismos para que quepan.',
      },
    },
    {
      text: {
        en: 'Roast at 210°C for 25 minutes, then check that the chicken is cooked through and the vegetables are tender. If needed, continue roasting a little longer, checking frequently so the chicken does not become dry or tough. The time will vary with the size and cut of the chicken. If using parsley or other fresh herbs, chop them and sprinkle them over the cooked dish. Serve with the pan juices.',
        tr: '210°C’de 25 dakika pişirin, ardından tavuğun tamamen pişip pişmediğini ve sebzelerin yumuşayıp yumuşamadığını kontrol edin. Gerekirse biraz daha pişirin; tavuğun kurumaması veya sertleşmemesi için sık sık kontrol edin. Süre, tavuk parçalarının büyüklüğüne ve kullanılan bölüme göre değişir. Maydanoz veya başka taze ot kullanıyorsanız doğrayıp pişmiş yemeğin üzerine serpin. Tepsideki suyuyla servis edin.',
        es: 'Hornea a 210 °C durante 25 minutos y comprueba que el pollo esté bien cocinado y las verduras tiernas. Si hace falta, prolonga un poco la cocción, comprobando a menudo para que el pollo no se reseque ni quede duro. El tiempo dependerá del tamaño y del corte del pollo. Si usas perejil u otras hierbas frescas, pícalas y espolvoréalas sobre el plato ya cocinado. Sirve con los jugos de la bandeja.',
      },
    },
  ],
  translations: {
    en: {
      slug: 'lemon-oregano-chicken-and-vegetables',
      title: 'Lemon and Oregano Chicken with Vegetables',
      indexSummary: 'Roasted chicken, colorful vegetables, and olives with a lemon and oregano dressing.',
      summary: 'A Mediterranean tray bake for 3-4 people with juicy chicken, zucchini, red pepper, tomato, red onion, and green and black olives. A generous lemon, olive oil, garlic, and oregano dressing brings everything together. Chicken breast can replace the thighs, and optional fresh herbs finish the dish.',
    },
    tr: {
      slug: 'limon-kekik-soslu-sebzeli-tavuk',
      title: 'Limon ve Kekik Soslu Sebzeli Tavuk',
      indexSummary: 'Limon ve kekik sosuyla fırınlanan tavuk, rengarenk sebzeler ve zeytinler.',
      summary: 'Sulu tavuk, kabak, kırmızı biber, domates, kırmızı soğan, yeşil ve siyah zeytinle hazırlanan, 3-4 kişilik Akdeniz usulü bir fırın yemeği. Bol limonlu zeytinyağı, sarımsak ve kekik sosu tüm lezzetleri birleştirir. But yerine tavuk göğsü kullanılabilir; isteğe bağlı taze otlar son dokunuşu verir.',
    },
    es: {
      slug: 'pollo-y-verduras-alinadas',
      title: 'Pollo y verduras aliñadas',
      indexSummary: 'Pollo al horno, verduras de colores y aceitunas con un aliño de limón y orégano.',
      summary: 'Una bandeja mediterránea para 3-4 personas con pollo jugoso, calabacín, pimiento rojo, tomate, cebolla morada y aceitunas verdes y negras. Un aliño generoso de limón, aceite de oliva, ajo y orégano une todos los sabores. Puedes sustituir los contramuslos por pechuga y, si quieres, terminar con hierbas frescas.',
    },
  },
};

export default recipe;
