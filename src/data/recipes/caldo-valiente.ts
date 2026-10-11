import type { Recipe } from './types';
import picture from '../../assets/caldo-valiente.png';

const recipe: Recipe = {
  id: 'caldo-valiente',
  createdAt: '2026-10-11',
  prepTime: 10,
  totalTime: 65,
  origin: { en: 'Spain', tr: 'İspanya', es: 'España' },
  picture,
  servings: { default: 4, min: 2, max: 8 },
  spotifyTrackId: '0nVW7L8830OeBOkj2W2u0J',
  ingredients: [
    {
      amount: 1,
      unit: 'pcs',
      name: { en: 'ripe tomato', tr: 'olgun domates', es: 'tomate maduro' },
    },
    {
      amount: 1,
      unit: 'pcs',
      name: { en: 'small potato', tr: 'küçük patates', es: 'patata pequeña' },
    },
    {
      amount: 1,
      unit: 'pcs',
      name: {
        en: 'large dried chili (or twice as many small ones)',
        tr: 'büyük kuru acı biber (veya iki katı kadar küçük biber)',
        es: 'guindilla seca grande (o el doble de pequeñas)',
      },
    },
    {
      amount: 2,
      unit: 'pcs',
      name: { en: 'unpeeled garlic cloves', tr: 'kabuklu sarımsak dişi', es: 'dientes de ajo sin pelar' },
    },
    {
      amount: 0.5,
      unit: 'pcs',
      name: { en: 'onion', tr: 'soğan', es: 'cebolla' },
    },
    {
      amount: 2,
      unit: 'pcs',
      name: { en: 'bay leaves', tr: 'defne yaprağı', es: 'hojas de laurel' },
    },
    {
      amount: 1,
      unit: 'tbsp',
      name: { en: 'sweet smoked paprika', tr: 'tatlı füme toz kırmızı biber', es: 'pimentón dulce ahumado' },
    },
    {
      amount: 1,
      unit: 'tsp',
      optional: true,
      name: { en: 'cumin', tr: 'kimyon', es: 'comino' },
    },
    {
      amount: 50,
      unit: 'ml',
      name: { en: 'olive oil', tr: 'zeytinyağı', es: 'aceite de oliva' },
    },
    {
      amount: 1.2,
      unit: 'l',
      name: { en: 'water', tr: 'su', es: 'agua' },
    },
    {
      amount: 1,
      unit: 'pinch',
      name: { en: 'salt, to taste', tr: 'damak tadına göre tuz', es: 'sal, al gusto' },
    },
  ],
  steps: [
    {
      text: {
        en: 'Cut the half onion into two pieces and quarter the tomato. Peel the potato and cut it into slices.',
        tr: 'Yarım soğanı iki parçaya, domatesi dört parçaya kesin. Patatesi soyup dilimleyin.',
        es: 'Corta la media cebolla en dos y el tomate en cuatro trozos. Pela la patata y córtala en rodajas.',
      },
    },
    {
      text: {
        en: 'Heat the olive oil in a pot over medium heat.',
        tr: 'Zeytinyağını bir tencerede orta ateşte ısıtın.',
        es: 'Calienta el aceite de oliva en una cazuela a fuego medio.',
      },
    },
    {
      text: {
        en: 'Add the unpeeled garlic cloves, onion, bay leaves, tomato, and cumin if using. Sauté for a couple of minutes.',
        tr: 'Kabuklu sarımsakları, soğanı, defne yapraklarını, domatesi ve kullanıyorsanız kimyonu ekleyin. Birkaç dakika kavurun.',
        es: 'Añade los ajos sin pelar, la cebolla, el laurel, el tomate y el comino si lo usas. Rehoga un par de minutos.',
      },
    },
    {
      text: {
        en: 'Add the potato and sauté for another 3-4 minutes.',
        tr: 'Patatesi ekleyip 3-4 dakika daha kavurun.',
        es: 'Incorpora la patata y rehoga 3-4 minutos más.',
      },
    },
    {
      text: {
        en: 'Lower the heat and add the paprika. Stir for 1 minute so it does not burn.',
        tr: 'Ateşi kısın ve tatlı füme toz kırmızı biberi ekleyin. Yanmaması için 1 dakika karıştırın.',
        es: 'Baja el fuego y añade el pimentón. Remueve durante 1 minuto para que no se queme.',
      },
    },
    {
      text: {
        en: 'Pour in the water and add the dried chili, cut into two pieces if it is large. Season with salt to taste and raise the heat.',
        tr: 'Suyu ve kuru acı biberi ekleyin. Biber büyükse iki parçaya kesin. Damak tadınıza göre tuz ekleyip ateşi yükseltin.',
        es: 'Añade el agua y la guindilla, cortada en dos trozos si es grande. Sala al gusto y sube el fuego.',
      },
    },
    {
      text: {
        en: 'Once it boils, cover and simmer over low heat for about 45 minutes.',
        tr: 'Kaynamaya başlayınca kapağını kapatın ve kısık ateşte yaklaşık 45 dakika pişirin.',
        es: 'Cuando hierva, tapa y deja que se cocine a fuego suave unos 45 minutos.',
      },
    },
    {
      text: {
        en: 'Remove and discard the tomato skins, garlic skins, and bay leaves. Lift the cooked vegetables out of the broth, blend them, then stir them back into the broth to give it more body.',
        tr: 'Domates ve sarımsak kabuklarını ve defne yapraklarını çıkarıp atın. Pişmiş sebzeleri tencereden alın, blenderdan geçirip çorbaya geri ekleyin. Böylece çorba daha kıvamlı olur.',
        es: 'Retira y desecha las pieles del tomate y de los ajos y las hojas de laurel. Saca las verduras cocidas del caldo, tritúralas y reincorpóralas para darle más cuerpo.',
      },
    },
  ],
  translations: {
    en: {
      slug: 'brave-broth',
      title: 'Brave Broth',
      indexSummary: 'A warming tomato and potato broth with smoked paprika and dried chili.',
      summary: 'A warming broth for 2-4 people, made with tomato, potato, garlic, onion, bay leaves, and sweet smoked paprika. Dried chili adds heat, cumin is optional, and the blended vegetables give the broth more body.',
    },
    tr: {
      slug: 'cesur-corba',
      title: 'Cesur Çorba',
      indexSummary: 'Füme toz kırmızı biber ve kuru acı biberle hazırlanan, iç ısıtan domatesli patatesli çorba.',
      summary: 'Domates, patates, sarımsak, soğan, defne yaprağı ve tatlı füme toz kırmızı biberle hazırlanan, 2-4 kişilik iç ısıtan bir çorba. Kuru acı biber acılık katar, kimyon isteğe bağlıdır ve blenderdan geçirilen sebzeler çorbaya kıvam verir.',
    },
    es: {
      slug: 'caldo-valiente',
      title: 'Caldo valiente',
      indexSummary: 'Un caldo reconfortante de tomate y patata con pimentón ahumado y guindilla seca.',
      summary: 'Un caldo reconfortante para 2-4 personas, preparado con tomate, patata, ajo, cebolla, laurel y pimentón dulce ahumado. La guindilla aporta picante, el comino es opcional y las verduras trituradas le dan más cuerpo.',
    },
  },
};

export default recipe;
