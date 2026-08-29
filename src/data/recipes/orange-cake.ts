import type { Recipe } from './types';
import picture from '../../assets/orange-cake.png';

const recipe: Recipe = {
  id: 'orange-cake',
  createdAt: '2026-08-29',
  prepTime: 5,
  totalTime: 35,
  picture,
  servings: { default: 6, min: 1, max: 12 },
  spotifyTrackId: '3uMchOcS72aMomLzYbUSZI',
  ingredients: [
    {
      amount: 120,
      unit: 'g',
      name: { en: 'sugar', tr: 'şeker', es: 'azúcar' },
    },
    {
      amount: 1,
      unit: 'pcs',
      name: { en: 'orange, peel and flesh', tr: 'kabuğu ve içiyle portakal', es: 'naranja, piel y pulpa' },
    },
    {
      amount: 3,
      unit: 'pcs',
      name: { en: 'eggs', tr: 'yumurta', es: 'huevos' },
    },
    {
      amount: 100,
      unit: 'g',
      name: { en: 'olive oil', tr: 'zeytinyağı', es: 'aceite de oliva' },
    },
    {
      amount: 1,
      unit: 'pcs',
      name: { en: 'yogurt', tr: 'yoğurt', es: 'yogur' },
    },
    {
      amount: 250,
      unit: 'g',
      name: { en: 'cake flour', tr: 'kek unu', es: 'harina de repostería' },
    },
    {
      amount: 1,
      unit: 'pcs',
      name: { en: 'packet baking powder', tr: 'paket kabartma tozu', es: 'sobre de levadura química' },
    },
    {
      amount: 1,
      unit: 'pinch',
      name: { en: 'salt', tr: 'tuz', es: 'sal' },
    },
  ],
  steps: [
    {
      text: {
        en: 'Put the sugar, orange with its peel and flesh, and eggs into a food processor. Blend for 3 minutes at 37°C and speed 5.',
        tr: 'Şekeri, kabuğu ve içiyle portakalı, yumurtaları mutfak robotuna alın. 37°C’de, 5. hızda 3 dakika karıştırın.',
        es: 'Pon el azúcar, la naranja con su piel y pulpa, y los huevos en un robot de cocina. Tritura 3 minutos a 37 °C y velocidad 5.',
      },
    },
    {
      text: {
        en: 'Add the olive oil and yogurt. Mix for 15 seconds at speed 2.5.',
        tr: 'Zeytinyağını ve yoğurdu ekleyin. 2,5. hızda 15 saniye karıştırın.',
        es: 'Añade el aceite de oliva y el yogur. Mezcla 15 segundos a velocidad 2,5.',
      },
    },
    {
      text: {
        en: 'Add the cake flour, baking powder, and a pinch of salt. Mix for 15 seconds at speed 3.',
        tr: 'Kek ununu, kabartma tozunu ve bir tutam tuzu ekleyin. 3. hızda 15 saniye karıştırın.',
        es: 'Añade la harina de repostería, la levadura química y una pizca de sal. Mezcla 15 segundos a velocidad 3.',
      },
    },
    {
      text: {
        en: 'Grease a cake tin and pour in the batter. Bake at 180°C for 30 minutes.',
        tr: 'Bir kek kalıbını yağlayın ve hamuru içine dökün. 180°C’de 30 dakika pişirin.',
        es: 'Engrasa un molde y vierte la masa. Hornea a 180 °C durante 30 minutos.',
      },
    },
  ],
  translations: {
    en: {
      slug: 'orange-cake',
      title: 'Orange Cake',
      indexSummary: 'A simple orange cake made with whole orange, yogurt, and olive oil.',
      summary: 'A tender orange cake for six, blended with the orange peel and flesh, then baked until golden.',
    },
    tr: {
      slug: 'portakalli-kek',
      title: 'Portakallı Kek',
      indexSummary: 'Kabuğu ve içiyle portakal, yoğurt ve zeytinyağıyla yapılan sade bir kek.',
      summary: 'Portakalın kabuğu ve içiyle karıştırılan, altı kişilik yumuşak ve altın rengi bir portakallı kek.',
    },
    es: {
      slug: 'bizcocho-de-naranja',
      title: 'Bizcocho de naranja',
      indexSummary: 'Un bizcocho sencillo de naranja entera, yogur y aceite de oliva.',
      summary: 'Un bizcocho tierno de naranja para seis, triturado con la piel y la pulpa de la naranja y horneado hasta dorarse.',
    },
  },
};

export default recipe;
