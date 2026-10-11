import type { Recipe } from './types';
import picture from '../../assets/berenjenas-con-tomate.png';

const recipe: Recipe = {
  id: 'berenjenas-con-tomate',
  createdAt: '2026-10-11',
  prepTime: 10,
  totalTime: 55,
  cooking: {
    method: 'airFryer',
    temperatureC: 200,
    timing: { kind: 'duration', minutes: 20, maxMinutes: 30 },
    note: {
      en: 'Then simmer in the tomato sauce for 5-10 minutes.',
      tr: 'Ardından domates sosunda kısık ateşte 5-10 dakika pişirin.',
      es: 'Después, cocinar con la salsa de tomate a fuego suave 5-10 minutos.',
    },
  },
  origin: { en: 'Greece', tr: 'Yunanistan', es: 'Grecia' },
  picture,
  servings: { default: 4, min: 1, max: 8 },
  spotifyTrackId: '2fXKyAyPrEa24c6PJyqznF',
  ingredients: [
    {
      amount: 2,
      unit: 'pcs',
      name: {
        en: 'large eggplants (use half as many again if medium-sized)',
        tr: 'büyük patlıcan (orta boysa miktarı yarısı kadar artırın)',
        es: 'berenjenas grandes (si son medianas, usa la mitad más)',
      },
    },
    {
      amount: 800,
      unit: 'g',
      name: { en: 'crushed tomatoes', tr: 'ezilmiş domates', es: 'tomate triturado' },
    },
    {
      amount: 4,
      unit: 'pcs',
      name: { en: 'garlic cloves', tr: 'diş sarımsak', es: 'dientes de ajo' },
    },
    {
      amount: 1,
      unit: 'tbsp',
      name: { en: 'dried oregano, level spoonful', tr: 'kuru kekik, silme kaşık', es: 'orégano, cucharada rasa' },
    },
    {
      amount: 1,
      unit: 'tsp',
      name: { en: 'honey', tr: 'bal', es: 'miel' },
    },
    {
      amount: 1,
      unit: 'tbsp',
      name: { en: 'vinegar', tr: 'sirke', es: 'vinagre' },
    },
    {
      unit: 'pcs',
      optional: true,
      name: { en: 'chopped parsley, to taste', tr: 'damak tadına göre kıyılmış maydanoz', es: 'perejil picado, al gusto' },
    },
    {
      unit: 'pcs',
      optional: true,
      name: { en: 'eggs, as desired', tr: 'isteğe göre yumurta', es: 'huevos, al gusto' },
    },
    {
      unit: 'pcs',
      name: { en: 'extra virgin olive oil, as needed', tr: 'gerektiği kadar sızma zeytinyağı', es: 'aceite de oliva virgen extra, cantidad necesaria' },
    },
    {
      unit: 'pcs',
      name: { en: 'salt, to taste', tr: 'damak tadına göre tuz', es: 'sal, al gusto' },
    },
  ],
  steps: [
    {
      text: {
        en: 'Peel and chop the garlic. Heat a drizzle of olive oil in a large frying pan over medium heat and gently fry the garlic until lightly golden. Keep an eye on it and lower the heat if it colours too quickly.',
        tr: 'Sarımsakları soyup doğrayın. Geniş bir tavada biraz zeytinyağını orta ateşte ısıtın ve sarımsakları hafifçe altın rengi alana kadar kavurun. Gözünüz üzerinde olsun; çok hızlı renk alırsa ateşi kısın.',
        es: 'Pela y pica los ajos. Calienta un chorro de aceite de oliva en una sartén amplia a fuego medio y rehoga los ajos hasta que estén ligeramente dorados. Vigílalos y baja el fuego si se doran demasiado rápido.',
      },
    },
    {
      text: {
        en: 'Add the crushed tomatoes, oregano, and salt to taste. Cook over medium heat, stirring occasionally, until the sauce thickens. If it splatters, cover the pan partially. If it becomes too dry, add a little water.',
        tr: 'Ezilmiş domatesi, kekiği ve damak tadınıza göre tuzu ekleyin. Ara sıra karıştırarak sos koyulaşana kadar orta ateşte pişirin. Sıçrarsa tavanın kapağını aralık bırakın. Çok kurursa biraz su ekleyin.',
        es: 'Añade el tomate triturado, el orégano y sal al gusto. Cocina a fuego medio, removiendo de vez en cuando, hasta que la salsa espese. Si salpica, tapa parcialmente la sartén. Si se queda demasiado seca, añade un poco de agua.',
      },
    },
    {
      text: {
        en: 'While the sauce cooks, wash the eggplants and remove the stems. You can peel off a few strips of skin if you prefer. Cut into bite-size pieces, put in a bowl, season with salt, and coat generously with olive oil.',
        tr: 'Sos pişerken patlıcanları yıkayıp saplarını kesin. İsterseniz kabuklarının bir kısmını şeritler halinde soyun. Lokmalık parçalara kesin, bir kaseye alın, tuz ekleyin ve zeytinyağıyla iyice kaplayın.',
        es: 'Mientras se cocina la salsa, lava las berenjenas y retira el tallo. Puedes quitar unas tiras de piel si lo prefieres. Córtalas en trozos de bocado, ponlas en un bol, añade sal y úntalas generosamente con aceite de oliva.',
      },
    },
    {
      text: {
        en: 'Cook the eggplant in the air fryer at 200°C for 20-30 minutes, checking occasionally, until golden and tender inside. Cook in batches if needed to avoid overcrowding.',
        tr: 'Patlıcanları hava fritözünde 200°C’de 20-30 dakika, ara sıra kontrol ederek dışları kızarıp içleri yumuşayana kadar pişirin. Fazla doldurmamak için gerekirse partiler halinde pişirin.',
        es: 'Cocina las berenjenas en la freidora de aire a 200 °C durante 20-30 minutos, comprobándolas de vez en cuando, hasta que estén doradas y tiernas por dentro. Hazlas por tandas si hace falta para que no queden amontonadas.',
      },
    },
    {
      text: {
        en: 'Stir the honey and vinegar into the tomato sauce. Add the cooked eggplant, mix gently, and simmer over low heat for 5-10 minutes so the flavours come together.',
        tr: 'Balı ve sirkeyi domates sosuna ekleyin. Pişmiş patlıcanları ilave edip nazikçe karıştırın ve tatların birbirine geçmesi için kısık ateşte 5-10 dakika pişirin.',
        es: 'Incorpora la miel y el vinagre a la salsa de tomate. Añade las berenjenas cocinadas, mezcla con cuidado y deja a fuego suave 5-10 minutos para que se integren los sabores.',
      },
    },
    {
      text: {
        en: 'If using parsley, add it and cook for another couple of minutes. Taste and adjust the salt.',
        tr: 'Maydanoz kullanıyorsanız ekleyip birkaç dakika daha pişirin. Tadına bakıp tuzunu ayarlayın.',
        es: 'Si usas perejil, añádelo y deja que se cocine un par de minutos más. Prueba y ajusta la sal.',
      },
    },
    {
      text: {
        en: 'Optionally, make small wells in the eggplant and tomato mixture in the pan and crack the eggs into them. Cover and cook over low heat until the whites are set and the yolks are cooked to your liking.',
        tr: 'İsteğe bağlı olarak tavadaki patlıcanlı domates karışımında küçük çukurlar açıp yumurtaları içlerine kırın. Kapağını kapatın ve kısık ateşte yumurta akları katılaşıp sarıları istediğiniz kıvama gelene kadar pişirin.',
        es: 'Opcionalmente, haz pequeños huecos en la mezcla de berenjenas y tomate de la sartén y casca los huevos dentro. Tapa y cocina a fuego suave hasta que las claras cuajen y las yemas estén a tu gusto.',
      },
    },
  ],
  translations: {
    en: {
      slug: 'eggplant-with-tomato',
      title: 'Eggplant with Tomato',
      indexSummary: 'Tender eggplant in a tomato and garlic sauce with oregano, honey, and vinegar.',
      summary: 'A Greek-inspired dish of golden eggplant in a rich tomato and garlic sauce. Oregano, honey, and vinegar bring herbal, sweet, and tangy notes, with chopped parsley as an optional finish. Serve with toast, rice, or couscous.',
    },
    tr: {
      slug: 'domates-soslu-patlican',
      title: 'Domates Soslu Patlıcan',
      indexSummary: 'Kekik, bal ve sirkeyle tatlandırılan domatesli sarımsak sosunda yumuşacık patlıcan.',
      summary: 'Yoğun domates ve sarımsak sosunda kızarmış patlıcanla hazırlanan, Yunan mutfağından esinlenen bir yemek. Kekik, bal ve sirke aromatik, tatlı ve ekşi dokunuşlar katar; kıyılmış maydanoz isteğe bağlıdır. Kızarmış ekmek, pilav veya kuskusla servis edebilirsiniz.',
    },
    es: {
      slug: 'berenjenas-con-tomate',
      title: 'Berenjenas con tomate',
      indexSummary: 'Berenjenas tiernas con salsa de tomate y ajo, orégano, miel y vinagre.',
      summary: 'Un plato de inspiración griega con berenjenas doradas y una salsa de tomate y ajo bien concentrada. El orégano, la miel y el vinagre aportan aroma, dulzor y un toque ácido, con perejil picado como remate opcional. Puedes servirlo con tostaditas, arroz o cuscús.',
    },
  },
};

export default recipe;
