import type { Recipe } from './types';
import picture from '../../assets/porridge.png';

const recipe: Recipe = {
  id: 'porridge',
  createdAt: '2026-08-29',
  prepTime: 2,
  totalTime: 15,
  picture,
  servings: { default: 2, min: 1, max: 6 },
  spotifyTrackId: '57NbelD7NoWpb6dXVcOEbM',
  ingredients: [
    {
      amount: 100,
      unit: 'g',
      name: { en: 'rolled oats', tr: 'yulaf ezmesi', es: 'copos de avena' },
    },
    {
      amount: 400,
      unit: 'g',
      name: { en: 'milk', tr: 'süt', es: 'leche' },
    },
    {
      amount: 1,
      unit: 'tsp',
      optional: true,
      name: { en: 'ground cinnamon, to taste', tr: 'damak tadına göre toz tarçın', es: 'canela molida, al gusto' },
    },
    {
      amount: 0.5,
      unit: 'pcs',
      optional: true,
      name: { en: 'strip of orange peel', tr: 'şerit portakal kabuğu', es: 'tira de piel de naranja' },
    },
  ],
  steps: [
    {
      text: {
        en: 'Put the oats, milk, cinnamon, and orange peel if using into a saucepan. Stir to combine.',
        tr: 'Yulafı, sütü, tarçını ve kullanıyorsanız portakal kabuğunu bir tencereye alın. Birleşene kadar karıştırın.',
        es: 'Pon los copos de avena, la leche, la canela y, si la usas, la piel de naranja en una cazuela. Remueve para mezclar.',
      },
    },
    {
      text: {
        en: 'Cook over medium-low heat, stirring frequently so it does not catch on the bottom, until the oats are soft and the porridge is creamy. Remove the orange peel before serving.',
        tr: 'Yulaf yumuşayıp porridge kremamsı bir kıvam alana kadar, dibe tutmaması için sık sık karıştırarak orta-kısık ateşte pişirin. Servis etmeden önce portakal kabuğunu çıkarın.',
        es: 'Cocina a fuego medio-bajo, removiendo frecuentemente para que no se pegue al fondo, hasta que los copos queden blandos y el porridge esté cremoso. Retira la piel de naranja antes de servir.',
      },
    },
  ],
  translations: {
    en: {
      slug: 'creamy-oat-porridge',
      title: 'Creamy Oat Porridge',
      indexSummary: 'A simple, creamy milk porridge with oats, cinnamon, and optional orange peel.',
      summary: 'A comforting two-serving porridge, gently cooked until the oats are soft and creamy.',
    },
    tr: {
      slug: 'kremali-yulaf-lapasi',
      title: 'Kremalı Yulaf Lapası',
      indexSummary: 'Süt, yulaf, tarçın ve isteğe bağlı portakal kabuğuyla hazırlanan sade, kremalı bir porridge.',
      summary: 'Yulaflar yumuşayıp kremamsı bir kıvama gelene kadar nazikçe pişirilen, iki kişilik rahatlatıcı bir porridge.',
    },
    es: {
      slug: 'porridge-de-avena',
      title: 'Porridge de avena',
      indexSummary: 'Un porridge cremoso y sencillo de leche, avena, canela y piel de naranja opcional.',
      summary: 'Un porridge reconfortante para dos, cocinado suavemente hasta que la avena quede blanda y cremosa.',
    },
  },
};

export default recipe;
