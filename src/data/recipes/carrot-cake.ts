import type { Recipe } from './types';
import picture from '../../assets/carrot-cake.png';

const recipe: Recipe = {
  id: 'carrot-cake',
  createdAt: '2026-08-30',
  prepTime: 20,
  totalTime: 110,
  picture,
  servings: { default: 8, min: 4, max: 16 },
  spotifyTrackId: '5bGMMNxjvlledmzq9dItvf',
  ingredients: [
    {
      amount: 2,
      unit: 'pcs',
      group: { en: 'For the cake', tr: 'Kek için', es: 'Para el bizcocho' },
      name: { en: 'eggs', tr: 'yumurta', es: 'huevos' },
    },
    {
      amount: 150,
      unit: 'g',
      name: { en: 'sugar', tr: 'şeker', es: 'azúcar' },
    },
    {
      amount: 1,
      unit: 'pcs',
      name: { en: 'packet vanilla sugar', tr: 'paket vanilin şekeri', es: 'sobre de azúcar vainillado' },
    },
    {
      amount: 110,
      unit: 'ml',
      name: { en: 'olive oil', tr: 'zeytinyağı', es: 'aceite de oliva' },
    },
    {
      amount: 90,
      unit: 'ml',
      name: { en: 'milk', tr: 'süt', es: 'leche' },
    },
    {
      amount: 200,
      unit: 'g',
      name: { en: 'plain flour', tr: 'un', es: 'harina de trigo' },
    },
    {
      amount: 2,
      unit: 'tsp',
      name: { en: 'baking powder', tr: 'kabartma tozu', es: 'levadura química' },
    },
    {
      amount: 1,
      unit: 'tsp',
      name: { en: 'ground cinnamon', tr: 'toz tarçın', es: 'canela molida' },
    },
    {
      amount: 200,
      unit: 'g',
      name: { en: 'carrots, grated', tr: 'rendelenmiş havuç', es: 'zanahoria rallada' },
    },
    {
      amount: 60,
      unit: 'g',
      name: {
        en: 'walnuts, roughly chopped, with some reserved for the optional topping',
        tr: 'iri doğranmış ceviz, isteğe bağlı üst süsleme için bir kısmı ayrılmış',
        es: 'nueces troceadas, reservando una parte para la cobertura opcional',
      },
    },
    {
      amount: 200,
      unit: 'g',
      group: { en: 'For the frosting', tr: 'Krema için', es: 'Para la cobertura' },
      name: { en: 'cream cheese', tr: 'labne veya krem peynir', es: 'queso crema' },
      optional: true,
    },
    {
      amount: 50,
      unit: 'g',
      name: { en: 'sugar', tr: 'şeker', es: 'azúcar' },
      optional: true,
    },
    {
      amount: 1,
      unit: 'tsp',
      name: { en: 'vanilla sugar', tr: 'vanilin şekeri', es: 'azúcar vainillado' },
      optional: true,
    },
  ],
  steps: [
    {
      text: {
        en: 'Heat the oven to 180°C using conventional top and bottom heat. Line a cake tin with baking paper.',
        tr: 'Fırını alt-üst ayarda 180°C’ye ısıtın. Bir kek kalıbını pişirme kağıdıyla kaplayın.',
        es: 'Precalienta el horno a 180 °C con calor arriba y abajo. Forra un molde para bizcocho con papel de horno.',
      },
    },
    {
      text: {
        en: 'Beat the eggs with the sugar and vanilla sugar. Add the olive oil and milk, then mix again.',
        tr: 'Yumurtaları şeker ve vanilin şekeriyle çırpın. Zeytinyağını ve sütü ekleyip tekrar karıştırın.',
        es: 'Bate los huevos con el azúcar y el azúcar vainillado. Añade el aceite de oliva y la leche, y vuelve a mezclar.',
      },
    },
    {
      text: {
        en: 'In a separate bowl, combine the flour, baking powder, and cinnamon. Add the dry mixture to the wet mixture and stir just until combined. Fold in the grated carrots and most of the walnuts, reserving a small amount if you plan to add the optional frosting and topping.',
        tr: 'Ayrı bir kapta unu, kabartma tozunu ve tarçını karıştırın. Kuru karışımı sıvı karışıma ekleyip yalnızca birleşene kadar karıştırın. Rendelenmiş havuçları ve cevizin büyük kısmını katın. İsteğe bağlı krema ve üst süslemeyi yapacaksanız az miktarda ceviz ayırın.',
        es: 'En otro bol, mezcla la harina, la levadura química y la canela. Añade los ingredientes secos a la mezcla líquida y remueve solo hasta integrar. Incorpora la zanahoria rallada y la mayor parte de las nueces, reservando una pequeña cantidad si vas a añadir la cobertura opcional.',
      },
    },
    {
      text: {
        en: 'Pour the batter into the lined tin. Bake for 30-40 minutes at 180°C, then remove from the oven.',
        tr: 'Hamuru kağıt kaplı kalıba dökün. 180°C’de 30-40 dakika pişirin, ardından fırından çıkarın.',
        es: 'Vierte la masa en el molde forrado. Hornea durante 30-40 minutos a 180 °C y retira del horno.',
      },
    },
    {
      text: {
        en: 'Let the cake cool completely. Serve it as it is, or add the optional frosting once cool.',
        tr: 'Keki tamamen soğumaya bırakın. Sade olarak servis edin veya soğuduktan sonra isteğe bağlı kremayı ekleyin.',
        es: 'Deja que el bizcocho se enfríe por completo. Sírvelo tal cual o añade la cobertura opcional una vez frío.',
      },
    },
    {
      text: {
        en: 'Optional frosting: mix the cream cheese with the sugar and vanilla sugar until smooth. If possible, refrigerate it briefly, then spread it over the cooled cake. Crack the reserved walnuts into small irregular pieces and scatter them over the frosting.',
        tr: 'İsteğe bağlı krema için labne veya krem peyniri şeker ve vanilin şekeriyle pürüzsüz olana kadar karıştırın. Mümkünse kısa bir süre buzdolabında bekletin, ardından soğuyan kekin üzerine sürün. Ayırdığınız cevizleri küçük, düzensiz parçalara kırıp kremanın üzerine serpiştirin.',
        es: 'Cobertura opcional: mezcla el queso crema con el azúcar y el azúcar vainillado hasta que quede suave. Si es posible, refrigérala brevemente y después extiéndela sobre el bizcocho frío. Rompe las nueces reservadas en trocitos irregulares y espárcelos sobre la cobertura.',
      },
    },
  ],
  translations: {
    en: {
      slug: 'carrot-cake',
      title: 'Carrot Cake',
      indexSummary: 'A warmly spiced carrot cake with optional cream cheese frosting and a scattering of cracked walnuts.',
      summary: 'A moist carrot and walnut cake mixed with olive oil and cinnamon, delicious plain or finished with optional vanilla cream cheese frosting and irregular pieces of cracked walnut.',
    },
    tr: {
      slug: 'havuclu-kek',
      title: 'Havuçlu Kek',
      indexSummary: 'İsteğe bağlı labneli krema ve serpiştirilmiş kırık ceviz parçalarıyla sunulan tarçınlı havuçlu kek.',
      summary: 'Zeytinyağı, tarçın, havuç ve cevizle hazırlanan nemli dokulu bir kek. Sade olarak veya isteğe bağlı vanilinli labne kreması ve düzensiz kırılmış ceviz parçalarıyla servis edilebilir.',
    },
    es: {
      slug: 'tarta-de-zanahoria',
      title: 'Tarta de zanahoria',
      indexSummary: 'Un bizcocho especiado de zanahoria con cobertura opcional de queso crema y nueces partidas por encima.',
      summary: 'Un bizcocho jugoso de zanahoria y nueces preparado con aceite de oliva y canela, delicioso solo o con una cobertura opcional de queso crema y vainilla, y trocitos irregulares de nuez.',
    },
  },
};

export default recipe;
