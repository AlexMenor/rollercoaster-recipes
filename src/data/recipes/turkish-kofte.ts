import type { Recipe } from './types';
import picture from '../../assets/turkish-kofte.png';

const recipe: Recipe = {
  id: 'turkish-kofte',
  createdAt: '2026-10-11',
  prepTime: 30,
  totalTime: 235,
  origin: { en: 'Turkey', tr: 'Türkiye', es: 'Turquía' },
  picture,
  pictureBackground: 'white',
  servings: { default: 8, min: 2, max: 16 },
  spotifyTrackId: '5K6lftZ512TAyqSNitG1Sw',
  pairsWith: ['turkish-pilav'],
  ingredients: [
    {
      amount: 1200,
      unit: 'g',
      name: {
        en: 'ground beef with 15-20% fat',
        tr: 'dana kıyma (%15-20 yağlı)',
        es: 'carne picada de ternera con un 15-20% de grasa',
      },
    },
    {
      amount: 2,
      unit: 'pcs',
      name: {
        en: 'large onions (or 3 small onions for the 8-serving batch)',
        tr: 'büyük kuru soğan (8 kişilik ölçüde yerine 3 küçük soğan kullanılabilir)',
        es: 'cebollas grandes (o 3 pequeñas para la receta de 8 personas)',
      },
    },
    {
      amount: 3,
      unit: 'pcs',
      name: { en: 'garlic cloves', tr: 'diş sarımsak', es: 'dientes de ajo' },
    },
    {
      amount: 1,
      unit: 'pcs',
      name: { en: 'large egg', tr: 'büyük yumurta', es: 'huevo grande' },
    },
    {
      amount: 3,
      unit: 'pcs',
      name: {
        en: 'slices of stale white or wholemeal bread, crusts removed',
        tr: 'dilim bayat beyaz veya esmer ekmek, sadece içi',
        es: 'rebanadas de pan blanco o integral del día anterior, solo la miga',
      },
    },
    {
      amount: 40,
      unit: 'g',
      name: { en: 'flat-leaf parsley', tr: 'düz yapraklı maydanoz', es: 'perejil de hoja plana' },
    },
    {
      amount: 12,
      unit: 'g',
      name: {
        en: 'salt (about 2 level dessertspoons for the 8-serving batch)',
        tr: 'tuz (8 kişilik ölçüde yaklaşık 2 silme tatlı kaşığı)',
        es: 'sal (unas 2 cucharas de postre rasas para la receta de 8 personas)',
      },
    },
    {
      amount: 2,
      unit: 'dsp',
      name: { en: 'ground cumin', tr: 'kimyon', es: 'comino molido' },
    },
    {
      amount: 1,
      unit: 'dsp',
      name: { en: 'ground black pepper', tr: 'karabiber', es: 'pimienta negra molida' },
    },
    {
      amount: 1.5,
      unit: 'dsp',
      name: { en: 'sweet paprika', tr: 'tatlı toz kırmızı biber', es: 'pimentón dulce' },
    },
    {
      amount: 0.5,
      unit: 'tsp',
      optional: true,
      name: { en: 'chili flakes', tr: 'pul biber', es: 'copos de chile' },
    },
  ],
  steps: [
    {
      text: {
        en: 'Grate the onions and gently squeeze out the excess liquid. Crush or finely grate the garlic.',
        tr: 'Soğanları rendeleyin ve fazla suyunu hafifçe sıkın. Sarımsakları ezin veya ince rendeleyin.',
        es: 'Ralla las cebollas y apriétalas suavemente para retirar el exceso de líquido. Machaca o ralla fino el ajo.',
      },
    },
    {
      text: {
        en: 'Wash the parsley, remove the thick stems, and finely chop the leaves. Crumble the soft inside of the bread. If it is fresh, crumble it directly; if it is very dry, dampen it lightly and squeeze out the excess water. Wholemeal bread works too, and dried breadcrumbs are not essential.',
        tr: 'Maydanozu yıkayın, kalın saplarını ayırın ve ince ince doğrayın. Ekmeğin içini ufalayın. Tazeyse doğrudan ufalayabilirsiniz; çok kuruysa hafifçe ıslatıp fazla suyunu sıkın. Esmer ekmek de kullanabilirsiniz, galeta unu şart değil.',
        es: 'Lava el perejil, retira los tallos gruesos y pícalo fino. Desmenuza la miga del pan. Si está fresco, desmenúzalo directamente; si está muy seco, humedécelo un poco y escurre el exceso de agua. También sirve el pan integral; no hace falta usar pan rallado seco.',
      },
    },
    {
      text: {
        en: 'Put the ground beef in a large bowl. Add the onion, garlic, egg, crumbled bread, parsley, salt, cumin, black pepper, and sweet paprika, plus the chili flakes if using. Knead for 8-10 minutes. There is no need to add oil: the beef already has enough fat.',
        tr: 'Kıymayı büyük bir kaba koyun. Soğan, sarımsak, yumurta, ufalanmış ekmek, maydanoz, tuz, kimyon, karabiber ve tatlı toz kırmızı biberi ekleyin. İsterseniz pul biberi de ekleyin. 8-10 dakika yoğurun. Kıyma yeterince yağlı olduğu için ekstra yağ eklemenize gerek yok.',
        es: 'Pon la carne picada en un bol grande. Añade la cebolla, el ajo, el huevo, el pan desmenuzado, el perejil, la sal, el comino, la pimienta negra y el pimentón dulce, además de los copos de chile si los usas. Amasa durante 8-10 minutos. No hace falta añadir aceite: la carne ya tiene suficiente grasa.',
      },
    },
    {
      text: {
        en: 'Cook a small piece of the mixture all the way through, then taste it and adjust the seasoning of the remaining mixture if needed.',
        tr: 'Baharatları kontrol etmek için harçtan küçük bir parça alıp tamamen pişirin. Tadına bakın ve gerekirse kalan harcın baharatlarını ayarlayın.',
        es: 'Cocina por completo una pequeña porción de la mezcla, pruébala y ajusta los condimentos del resto si hace falta.',
      },
    },
    {
      text: {
        en: 'Cover and refrigerate for 3-4 hours.',
        tr: 'Üzerini kapatıp buzdolabında 3-4 saat dinlendirin.',
        es: 'Tapa y deja reposar en la nevera durante 3-4 horas.',
      },
    },
    {
      text: {
        en: 'Preheat the oven to 200°C with conventional top and bottom heat, or 180°C with a fan. Shape the mixture into oval, slightly flattened patties about 1.5-2 cm thick. Space them out on a baking tray lined with baking paper.',
        tr: 'Fırını alt-üst ayarda 200°C veya fanlı ayarda 180°C sıcaklığa ısıtın. Harçtan yaklaşık 1,5-2 cm kalınlığında, oval ve hafif yassı köfteler hazırlayın. Yağlı kâğıt serili tepsiye aralıklı dizin.',
        es: 'Precalienta el horno a 200°C con calor arriba y abajo, o a 180°C con ventilador. Forma albóndigas ovaladas y ligeramente aplanadas, de unos 1,5-2 cm de grosor. Colócalos separados en una bandeja forrada con papel de horno.',
      },
    },
    {
      text: {
        en: 'Bake on the middle rack for about 20-25 minutes, turning halfway through. Continue until browned and fully cooked inside. Check with a food thermometer: the center must reach at least 71°C. Cooking time depends on the thickness of the kofte.',
        tr: 'Orta rafta yaklaşık 20-25 dakika pişirin ve pişirmenin ortasında köfteleri çevirin. Dışları kızarana ve içleri tamamen pişene kadar devam edin. Gıda termometresiyle kontrol edin: köftenin merkez sıcaklığı en az 71°C olmalı. Pişirme süresi köftenin kalınlığına göre değişir.',
        es: 'Hornea en la rejilla central durante unos 20-25 minutos y dales la vuelta a mitad de cocción. Continúa hasta que estén dorados y completamente cocinados por dentro. Comprueba con un termómetro de cocina que el centro alcance al menos 71°C. El tiempo depende del grosor de los köfte.',
      },
    },
    {
      text: {
        en: 'For extra browning, you can finish under the grill for 2-3 minutes. Transfer the kofte to a grill-safe tray without baking paper first.',
        tr: 'Daha fazla kızarmaları için son 2-3 dakika ızgara modunu açabilirsiniz. Önce köfteleri yağlı kâğıt olmadan, ızgara moduna uygun bir tepsiye alın.',
        es: 'Para dorarlos más, puedes usar el grill durante los últimos 2-3 minutos. Pasa primero los köfte a una bandeja apta para grill, sin papel de horno.',
      },
    },
    {
      text: {
        en: 'To save some for later, freeze the uncooked kofte separately on a tray before baking. Once solid, transfer them to a freezer bag.',
        tr: 'Fazla köfteleri saklamak için pişirmeden önce çiğ halde, tepside birbirine değmeyecek şekilde dondurun. Donunca buzdolabı poşetine aktarın.',
        es: 'Para guardar los que sobren, congela los köfte crudos separados en una bandeja antes de hornearlos. Cuando estén congelados, pásalos a una bolsa de congelación.',
      },
    },
  ],
  translations: {
    en: {
      slug: 'turkish-homemade-kofte',
      title: 'Turkish Homemade Kofte',
      indexSummary: 'Oven-baked Turkish meat patties with onion, garlic, parsley, and crumbled bread.',
      summary: 'Homemade Turkish kofte with crumbled bread and parsley, shaped into oval patties and baked until browned. The base recipe uses 1.2 kg of ground beef for 8 people and makes about 30-36 kofte. Allow around 30 minutes of hands-on preparation, 3-4 hours of chilling, and 20-25 minutes of baking. The total time includes 3 hours of chilling.',
    },
    tr: {
      slug: 'turk-usulu-ev-koftesi',
      title: 'Türk Usulü Ev Köftesi',
      indexSummary: 'Soğan, sarımsak, maydanoz ve ufalanmış ekmekle hazırlanan, fırında kızaran ev köftesi.',
      summary: 'Ufalanmış ekmek ve maydanozla hazırlanan, oval şekil verilip fırında kızartılan Türk usulü ev köftesi. Temel tarifte 1,2 kg kıyma kullanılır ve 8 kişilik, yaklaşık 30-36 köfte çıkar. Yaklaşık 30 dakika hazırlık, 3-4 saat buzdolabında dinlendirme ve 20-25 dakika fırında pişirme gerekir. Toplam süreye 3 saat dinlendirme dahildir.',
    },
    es: {
      slug: 'kofte-caseros-turcos',
      title: 'Köfte caseros turcos',
      indexSummary: 'Albóndigas turcas al horno con cebolla, ajo, perejil y pan desmenuzado.',
      summary: 'Köfte caseros turcos con pan desmenuzado y perejil, de forma ovalada y horneados hasta dorarse. La receta base lleva 1,2 kg de carne picada para 8 personas y rinde unos 30-36 köfte. Calcula unos 30 minutos de preparación, 3-4 horas en la nevera y 20-25 minutos de horno. El tiempo total incluye 3 horas de reposo.',
    },
  },
};

export default recipe;
