import type { Recipe } from './types';
import picture from '../../assets/patlican-salatasi.png';

const recipe: Recipe = {
  id: 'patlican-salatasi',
  createdAt: '2026-08-27',
  prepTime: 10,
  totalTime: 40,
  origin: { en: 'Turkey', tr: 'Türkiye', es: 'Turquía' },
  picture,
  servings: { default: 4, min: 2, max: 8 },
  spotifyTrackId: '1xfLMIPxxnRrAUkJKZxPD6',
  ingredients: [
    {
      amount: 3,
      unit: 'pcs',
      name: {
        en: 'medium eggplants',
        tr: 'orta boy patlıcan',
        es: 'berenjenas medianas',
      },
    },
    {
      amount: 400,
      unit: 'g',
      name: {
        en: 'plain yogurt, preferably Greek-style',
        tr: 'doğal yoğurt, tercihen süzme',
        es: 'yogur natural, mejor griego',
      },
    },
    {
      amount: 2,
      unit: 'pcs',
      name: { en: 'garlic cloves', tr: 'diş sarımsak', es: 'dientes de ajo' },
    },
    {
      amount: 1,
      unit: 'tsp',
      name: { en: 'salt', tr: 'tuz', es: 'sal' },
    },
    {
      amount: 0.5,
      unit: 'pcs',
      optional: true,
      name: {
        en: 'pomegranate, seeds only',
        tr: 'nar taneleri',
        es: 'granada desgranada',
      },
    },
  ],
  steps: [
    {
      text: {
        en: "Wash the eggplants and make a few small cuts with a knife so they don't burst while cooking. Roast them in the oven at 200°C for 30-40 minutes, until very soft and the skin is wrinkled.",
        tr: 'Patlıcanları yıkayıp pişerken patlamamaları için bıçakla birkaç küçük kesik atın. Fırında 200°C’de 30-40 dakika, iyice yumuşayıp kabukları buruşana kadar pişirin.',
        es: 'Lava las berenjenas y hazles unos pequeños cortes con un cuchillo para evitar que exploten durante la cocción. Ásalas en el horno a 200 °C durante 30-40 minutos, hasta que estén muy blandas y la piel quede arrugada.',
      },
    },
    {
      text: {
        en: 'Let them cool slightly, peel off the charred skin and drain the excess liquid. Chop the flesh with a knife into a rustic purée.',
        tr: 'Hafifçe soğumaya bırakın, yanmış kabukları soyun ve fazla suyunu süzdürün. İçini bıçakla rustik bir püre kıvamına gelene dek doğrayın.',
        es: 'Deja que se enfríen un poco, quita la piel quemada y elimina el exceso de líquido. Pica la pulpa con un cuchillo hasta obtener una textura tipo puré.',
      },
    },
    {
      text: {
        en: 'In a bowl, mix the roasted eggplant with the yogurt, the crushed garlic and the salt. Stir well until creamy.',
        tr: 'Bir kapta közlenmiş patlıcanı yoğurt, ezilmiş sarımsak ve tuzla karıştırın. Kremamsı bir kıvam alana dek iyice karıştırın.',
        es: 'En un bol mezcla la berenjena asada, el yogur, el ajo machacado y la sal. Remueve bien hasta que quede cremoso.',
      },
    },
    {
      text: {
        en: 'Spread the eggplant-yogurt mixture on a plate and serve cold or at room temperature. A drizzle of olive oil and a sprinkle of pomegranate seeds on top work well. It is great with pita bread or alongside grilled meats.',
        tr: 'Patlıcanlı yoğurt karışımını bir tabağa yayın ve soğuk ya da oda sıcaklığında servis edin. Üzerine zeytinyağı gezdirip nar taneleri serpebilirsiniz. Pideyle ya da ızgara etlerin yanında harika olur.',
        es: 'Pon la mezcla de berenjena y yogur en un plato y sirve fría o a temperatura ambiente. Un chorrito de aceite de oliva y unas semillas de granada por encima quedan muy bien. Va genial con pan de pita o como acompañamiento de carnes a la parrilla.',
      },
    },
  ],
  translations: {
    en: {
      slug: 'roasted-eggplant-salad',
      title: 'Roasted Eggplant Salad with Yogurt',
      indexSummary:
        'A smoky Turkish mezze of charred eggplant folded into thick yogurt.',
      summary:
        'Yoğurtlu Köz Patlıcan Salatası, literally “roasted eggplant salad with yogurt,” is a classic Turkish mezze.',
    },
    tr: {
      slug: 'yogurtlu-koz-patlican-salatasi',
      title: 'Yoğurtlu Köz Patlıcan Salatası',
      indexSummary:
        'Közlenmiş patlıcanın süzme yoğurtla buluştuğu dumansı bir meze.',
      summary:
        'Yoğurtlu Köz Patlıcan Salatası, klasik bir Türk mezesidir.',
    },
    es: {
      slug: 'ensalada-berenjena-yogur',
      title: 'Ensalada turca de berenjena asada con yogur',
      indexSummary:
        'Un mezze turco ahumado de berenjena asada mezclada con yogur espeso.',
      summary:
        'La Yoğurtlu Köz Patlıcan Salatası, literalmente «ensalada de berenjena asada con yogur», es un mezze turco muy típico.',
    },
  },
};

export default recipe;
