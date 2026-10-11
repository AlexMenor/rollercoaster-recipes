import type { Recipe } from './types';
import picture from '../../assets/turkish-pilav.png';

const recipe: Recipe = {
  id: 'turkish-pilav',
  createdAt: '2026-10-10',
  prepTime: 5,
  totalTime: 30,
  origin: { en: 'Turkey', tr: 'Türkiye', es: 'Turquía' },
  picture,
  servings: { default: 3, min: 1, max: 6 },
  spotifyTrackId: '1smXC6H0O8po3P4bS7MrgC',
  ingredients: [
    {
      amount: 1,
      unit: 'cup',
      name: { en: 'rice', tr: 'pirinç', es: 'arroz' },
    },
    {
      amount: 1.25,
      unit: 'cup',
      name: { en: 'hot water', tr: 'sıcak su', es: 'agua caliente' },
    },
    {
      amount: 1,
      unit: 'tbsp',
      name: { en: 'butter', tr: 'tereyağı', es: 'mantequilla' },
    },
    {
      amount: 1,
      unit: 'dsp',
      name: { en: 'vegetable oil', tr: 'sıvı yağ', es: 'aceite vegetal' },
    },
    {
      amount: 0.5,
      amountMax: 0.75,
      unit: 'tsp',
      name: { en: 'salt', tr: 'tuz', es: 'sal' },
    },
  ],
  steps: [
    {
      text: {
        en: 'Rinse the rice very well until the water runs as clear as possible, then drain. There is no need to soak it.',
        tr: 'Pirinci, suyu olabildiğince berraklaşana kadar çok iyi yıkayın ve süzün. Bekletmenize gerek yok.',
        es: 'Lava muy bien el arroz hasta que el agua salga lo más clara posible y escúrrelo. No hace falta dejarlo en remojo.',
      },
    },
    {
      text: {
        en: 'Melt the butter with the vegetable oil in a pot. Add the rice and sauté over medium heat for 2-3 minutes.',
        tr: 'Tereyağını sıvı yağla birlikte tencerede eritin. Pirinci ekleyip orta ateşte 2-3 dakika kavurun.',
        es: 'Derrite la mantequilla con el aceite vegetal en una olla. Añade el arroz y rehógalo a fuego medio durante 2-3 minutos.',
      },
    },
    {
      text: {
        en: 'Add the hot water and salt. Wait for it to come to a boil over medium heat.',
        tr: 'Sıcak suyu ve tuzu ekleyin. Orta ateşte kaynamasını bekleyin.',
        es: 'Añade el agua caliente y la sal. Espera a que hierva a fuego medio.',
      },
    },
    {
      text: {
        en: 'Once it boils, cover the pot and turn the heat down to its lowest setting. Cook for about 10-12 minutes, until the water is absorbed. Do not stir.',
        tr: 'Kaynayınca kapağı kapatıp en kısık ateşe alın. Suyunu çekene kadar yaklaşık 10-12 dakika pişirin. Karıştırmayın.',
        es: 'Cuando hierva, tapa la olla y baja el fuego al mínimo. Cocina unos 10-12 minutos, hasta que se absorba el agua. No remuevas.',
      },
    },
    {
      text: {
        en: 'Once the water is absorbed, turn off the heat and let the rice rest with the lid on for 10 minutes. Gently fluff and serve.',
        tr: 'Suyunu çekince ocağı kapatın ve kapağı kapalı şekilde 10 dakika dinlendirin. Sonra nazikçe karıştırıp servis edin.',
        es: 'Una vez absorbida el agua, apaga el fuego y deja reposar el arroz tapado durante 10 minutos. Después, suéltalo con cuidado y sirve.',
      },
    },
  ],
  translations: {
    en: {
      slug: 'turkish-rice-pilav',
      title: 'Turkish Rice Pilav',
      indexSummary: 'Fluffy, buttery Turkish rice with separate grains and no soaking needed.',
      summary: 'This simple Turkish rice pilav starts with thoroughly rinsed rice, briefly sautéed in butter and oil. Gentle cooking and a 10-minute covered rest give it fluffy, separate grains, with no soaking needed. Measure the rice and water with the same cup.',
    },
    tr: {
      slug: 'tereyagli-pirinc-pilavi',
      title: 'Tereyağlı Pirinç Pilavı',
      indexSummary: 'Önceden bekletmeden hazırlanan, tereyağlı ve tane tane pirinç pilavı.',
      summary: 'Bu sade pirinç pilavı, iyice yıkanmış pirincin tereyağı ve sıvı yağda kısa süre kavrulmasıyla başlar. Kısık ateşte pişirip kapağı kapalı olarak 10 dakika dinlendirmek, önceden bekletmeye gerek kalmadan tane tane bir pilav elde etmenizi sağlar. Pirinci ve suyu aynı bardakla ölçün.',
    },
    es: {
      slug: 'arroz-pilav-turco',
      title: 'Arroz pilav turco',
      indexSummary: 'Arroz turco suave y mantecoso, con granos sueltos y sin remojo previo.',
      summary: 'Este sencillo arroz pilav turco empieza con arroz bien lavado y rehogado brevemente en mantequilla y aceite. La cocción a fuego mínimo y 10 minutos de reposo con la tapa puesta dejan los granos suaves y sueltos, sin necesidad de remojo. Mide el arroz y el agua con la misma taza.',
    },
  },
};

export default recipe;
