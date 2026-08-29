import type { Recipe } from './types';
import picture from '../../assets/baked-sweet-potatoes.png';

const recipe: Recipe = {
  id: 'baked-sweet-potatoes',
  createdAt: '2026-08-29',
  prepTime: 5,
  totalTime: 50,
  picture,
  servings: { default: 2, min: 1, max: 6 },
  spotifyTrackId: '7xB3hSztVbX6xFvQqEGKud',
  ingredients: [
    {
      amount: 1,
      unit: 'pcs',
      name: { en: 'medium sweet potato', tr: 'orta boy tatlı patates', es: 'boniato mediano' },
    },
    {
      amount: 1,
      unit: 'tbsp',
      name: { en: 'olive oil', tr: 'zeytinyağı', es: 'aceite de oliva' },
    },
    {
      amount: 1,
      unit: 'pinch',
      name: { en: 'salt', tr: 'tuz', es: 'sal' },
    },
    {
      amount: 1,
      unit: 'pinch',
      name: { en: 'black pepper', tr: 'karabiber', es: 'pimienta negra' },
    },
  ],
  steps: [
    {
      text: {
        en: 'Heat the oven to 190°C. Line a baking tray with baking paper. Wash the sweet potato and cut it in half lengthwise.',
        tr: 'Fırını 190°C’ye ısıtın. Bir fırın tepsisini yağlı kağıtla kaplayın. Tatlı patatesi yıkayıp boylamasına ikiye kesin.',
        es: 'Precalienta el horno a 190 °C. Forra una bandeja con papel de horno. Lava el boniato y córtalo por la mitad a lo largo.',
      },
    },
    {
      text: {
        en: 'Rub the exposed flesh of each half with olive oil, making sure the whole cut surface is covered. Season with a pinch of salt and black pepper.',
        tr: 'Her yarımın açıkta kalan etli kısmını, kesik yüzeyin tamamını kaplayacak şekilde zeytinyağıyla ovun. Bir tutam tuz ve karabiber serpin.',
        es: 'Unta la pulpa visible de cada mitad con aceite de oliva, procurando que toda la superficie cortada quede cubierta. Añade una pizca de sal y pimienta negra.',
      },
    },
    {
      text: {
        en: 'Place both halves cut-side down on the lined tray, with the flesh touching the paper. Bake for about 45 minutes, until tender when pierced with a knife.',
        tr: 'İki yarımı etli kısımları kağıda değecek şekilde, kesik yüzleri aşağı bakacak biçimde tepsiye koyun. Bıçakla kolayca delininceye kadar yaklaşık 45 dakika pişirin.',
        es: 'Coloca las dos mitades con la parte cortada hacia abajo sobre la bandeja forrada, con la pulpa tocando el papel. Hornea unos 45 minutos, hasta que estén tiernas al pincharlas con un cuchillo.',
      },
    },
  ],
  translations: {
    en: {
      slug: 'baked-sweet-potatoes',
      title: 'Baked Sweet Potato',
      indexSummary: 'A tender oven-baked sweet potato with olive oil, salt, and black pepper.',
      summary: 'An easy two-serving side, with one sweet potato baked cut-side down until soft and naturally sweet.',
    },
    tr: {
      slug: 'firinda-tatli-patates',
      title: 'Fırında Tatlı Patates',
      indexSummary: 'Zeytinyağı, tuz ve karabiberle fırınlanmış yumuşacık bir tatlı patates.',
      summary: 'Kesik yüzü aşağı gelecek şekilde pişirilerek yumuşacık ve doğal olarak tatlı hale gelen, tek tatlı patatesle hazırlanan iki kişilik kolay bir tarif.',
    },
    es: {
      slug: 'boniatos-al-horno',
      title: 'Boniato al horno',
      indexSummary: 'Un boniato tierno al horno con aceite de oliva, sal y pimienta negra.',
      summary: 'Una guarnición fácil para dos, con un solo boniato horneado boca abajo hasta que quede tierno y naturalmente dulce.',
    },
  },
};

export default recipe;
