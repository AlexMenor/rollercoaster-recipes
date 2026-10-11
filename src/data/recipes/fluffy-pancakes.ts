import type { Recipe } from './types';
import picture from '../../assets/fluffy-pancakes.png';

const recipe: Recipe = {
  id: 'fluffy-pancakes',
  createdAt: '2026-10-10',
  prepTime: 10,
  totalTime: 30,
  picture,
  servings: { default: 2, min: 1, max: 6 },
  spotifyTrackId: '4WamB3ZYdJerpmAEiCIRDc',
  ingredients: [
    {
      amount: 190,
      unit: 'g',
      name: { en: 'flour', tr: 'un', es: 'harina de trigo' },
    },
    {
      amount: 1.5,
      unit: 'tsp',
      name: { en: 'baking powder', tr: 'kabartma tozu', es: 'levadura química' },
    },
    {
      amount: 0.5,
      unit: 'tsp',
      name: {
        en: 'baking soda (Kaiser Natron)',
        tr: 'karbonat (Kaiser Natron)',
        es: 'bicarbonato de sodio (Kaiser Natron)',
      },
    },
    {
      amount: 2.5,
      unit: 'tbsp',
      name: { en: 'sugar', tr: 'şeker', es: 'azúcar' },
    },
    {
      amount: 0.5,
      unit: 'tsp',
      name: { en: 'salt', tr: 'tuz', es: 'sal' },
    },
    {
      amount: 300,
      unit: 'ml',
      name: { en: 'buttermilk', tr: 'buttermilk', es: 'buttermilk (suero de mantequilla)' },
    },
    {
      amount: 2,
      unit: 'pcs',
      name: { en: 'small eggs', tr: 'küçük yumurta', es: 'huevos pequeños' },
    },
    {
      amount: 3,
      unit: 'tbsp',
      name: {
        en: 'melted butter or neutral oil, plus a little for greasing the pan',
        tr: 'eritilmiş tereyağı veya nötr aromalı sıvı yağ, ayrıca tavayı yağlamak için biraz daha',
        es: 'mantequilla derretida o aceite de sabor neutro, y un poco más para engrasar la sartén',
      },
    },
    {
      amount: 1,
      unit: 'tsp',
      name: { en: 'vanilla extract', tr: 'vanilya özütü', es: 'extracto de vainilla' },
    },
    {
      unit: 'pcs',
      group: { en: 'To serve', tr: 'Servis için', es: 'Para servir' },
      name: { en: 'maple syrup, to taste', tr: 'damak tadına göre akçaağaç şurubu', es: 'sirope de arce, al gusto' },
    },
    {
      unit: 'pcs',
      optional: true,
      name: { en: 'a small pat of butter for the top', tr: 'üzeri için küçük bir parça tereyağı', es: 'un trocito de mantequilla para poner encima' },
    },
  ],
  steps: [
    {
      text: {
        en: 'In a bowl, mix the flour, baking powder, baking soda, sugar, and salt.',
        tr: 'Bir kapta unu, kabartma tozunu, karbonatı, şekeri ve tuzu karıştırın.',
        es: 'En un bol, mezcla la harina, la levadura química, el bicarbonato, el azúcar y la sal.',
      },
    },
    {
      text: {
        en: 'In another bowl, whisk together the buttermilk, eggs, melted butter or neutral oil, and vanilla extract.',
        tr: 'Başka bir kapta buttermilk, yumurta, eritilmiş tereyağı veya nötr aromalı sıvı yağ ve vanilya özütünü çırpın.',
        es: 'En otro bol, bate el buttermilk con los huevos, la mantequilla derretida o el aceite de sabor neutro y el extracto de vainilla.',
      },
    },
    {
      text: {
        en: 'Pour the wet ingredients into the dry ingredients and stir gently, just until combined. A few lumps are good, so do not overmix. Let the batter rest for 5-10 minutes.',
        tr: 'Sıvı karışımı kuru malzemelerin üzerine dökün ve yalnızca birleşene kadar nazikçe karıştırın. Biraz topak kalması iyidir, fazla karıştırmayın. Hamuru 5-10 dakika dinlendirin.',
        es: 'Vierte la mezcla líquida sobre los ingredientes secos y remueve suavemente, solo hasta integrar. Está bien que queden algunos grumos, así que no mezcles demasiado. Deja reposar la masa durante 5-10 minutos.',
      },
    },
    {
      text: {
        en: 'Heat a lightly greased pan over medium-low heat. Pour about ¼ cup of batter (60 ml) into the pan for each pancake, cooking in batches.',
        tr: 'Hafifçe yağlanmış tavayı orta-kısık ateşte ısıtın. Her pankek için yaklaşık ¼ cup (60 ml) hamur dökerek partiler halinde pişirin.',
        es: 'Calienta una sartén ligeramente engrasada a fuego medio-bajo. Vierte aproximadamente ¼ de taza de masa (60 ml) por tortita y cocina por tandas.',
      },
    },
    {
      text: {
        en: 'Wait until bubbles form on top and the edges look set. Flip each pancake once, then cook for another 1-2 minutes.',
        tr: 'Üst yüzeyde kabarcıklar oluşup kenarlar toparlanana kadar bekleyin. Her pankeki yalnızca bir kez çevirin, ardından 1-2 dakika daha pişirin.',
        es: 'Espera a que se formen burbujas en la superficie y los bordes se vean cuajados. Da la vuelta a cada tortita una sola vez y cocina durante 1-2 minutos más.',
      },
    },
    {
      text: {
        en: 'Stack the pancakes and serve with maple syrup. If you like, put a small pat of butter on top while they are still hot.',
        tr: 'Pankekleri üst üste dizin ve akçaağaç şurubuyla servis edin. İsterseniz henüz sıcakken üzerlerine küçük bir parça tereyağı koyun.',
        es: 'Sirve las tortitas apiladas con sirope de arce. Si quieres, pon un trocito de mantequilla encima mientras aún estén calientes.',
      },
    },
  ],
  translations: {
    en: {
      slug: 'fluffy-pancakes',
      title: 'Fluffy Pancakes',
      indexSummary: 'Fluffy buttermilk pancakes for two, stacked with maple syrup and an optional pat of butter.',
      summary: 'Soft, fluffy buttermilk pancakes for two. Gently mix the batter, leave a few lumps, and let it rest before cooking over medium-low heat. Serve stacked with maple syrup and, if you like, a small pat of butter melting on top.',
    },
    tr: {
      slug: 'puf-puf-pankek',
      title: 'Puf Puf Pankek',
      indexSummary: 'Akçaağaç şurubu ve isteğe bağlı tereyağıyla üst üste servis edilen, iki kişilik buttermilk pankek.',
      summary: 'Buttermilk ile hazırlanan, iki kişilik yumuşacık, puf puf pankek. Hamuru nazikçe karıştırın, biraz topak bırakın ve orta-kısık ateşte pişirmeden önce dinlendirin. Üst üste dizip akçaağaç şurubu ve isterseniz üzerinde eriyen küçük bir parça tereyağıyla servis edin.',
    },
    es: {
      slug: 'tortitas-esponjosas',
      title: 'Tortitas esponjosas',
      indexSummary: 'Tortitas esponjosas de buttermilk para dos, apiladas con sirope de arce y mantequilla opcional.',
      summary: 'Tortitas suaves y esponjosas de buttermilk para dos. Mezcla la masa con suavidad, deja algunos grumos y permite que repose antes de cocinar a fuego medio-bajo. Sírvelas apiladas con sirope de arce y, si quieres, un trocito de mantequilla que se derrita por encima.',
    },
  },
};

export default recipe;
