import type { Recipe } from './types';
import picture from '../../assets/spanish-potato-omelette.png';

const recipe: Recipe = {
  id: 'spanish-potato-omelette',
  createdAt: '2026-08-29',
  prepTime: 20,
  totalTime: 70,
  origin: { en: 'Spain', tr: 'İspanya', es: 'España' },
  picture,
  servings: { default: 4, min: 2, max: 8 },
  spotifyTrackId: '0yCnKUP85AQ91lu93B3wTb',
  ingredients: [
    {
      amount: 1,
      unit: 'kg',
      name: {
        en: 'Agria potatoes (or Galician or Monalisa potatoes)',
        tr: 'Agria patatesi (veya Galisya ya da Monalisa patatesi)',
        es: 'patatas agria (o patata gallega o monalisa)',
      },
    },
    {
      amount: 300,
      unit: 'ml',
      name: {
        en: 'extra-virgin olive oil, preferably Arbequina',
        tr: 'tercihen Arbequina çeşidi sızma zeytinyağı',
        es: 'aceite de oliva virgen extra, preferiblemente variedad arbequina',
      },
    },
    {
      amount: 1,
      unit: 'pcs',
      name: { en: 'large onion', tr: 'büyük soğan', es: 'cebolla grande' },
    },
    {
      amount: 8,
      unit: 'pcs',
      name: { en: 'large eggs', tr: 'L boy yumurta', es: 'huevos tamaño L' },
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
        en: 'Peel the potatoes, slice them into rounds that do not need to be very thin, and leave them soaking in water.',
        tr: 'Patatesleri soyun, çok ince olması gerekmeyen dilimler halinde kesin ve suda bekletin.',
        es: 'Pela las patatas, córtalas en láminas que no tienen por qué ser muy finas y déjalas a remojo en agua.',
      },
    },
    {
      text: {
        en: 'Slice the onion.',
        tr: 'Soğanı doğrayın.',
        es: 'Corta la cebolla.',
      },
    },
    {
      text: {
        en: 'Set out two pans: a medium one for the onion and a large one for the potatoes. Add a little oil, the onion, and salt to the medium pan. Cover and cook gently over medium heat. In the large pan, heat enough oil to cover the potatoes, add the potatoes, and cover. Leave both pans cooking over medium heat for about 40 minutes without stirring. The potatoes should break apart at the lightest touch.',
        tr: 'İki tava hazırlayın: soğan için orta boy, patates için büyük bir tava. Orta boy tavaya biraz yağ, soğan ve tuz ekleyin. Kapağını kapatıp orta ateşte yavaşça pişirin. Büyük tavada patatesleri örtecek kadar yağ ısıtın, patatesleri ekleyip kapağını kapatın. İki tavayı da orta ateşte, karıştırmadan yaklaşık 40 dakika pişirin. Patatesler en hafif dokunuşta dağılmalıdır.',
        es: 'Pon dos sartenes: una mediana para la cebolla y una grande para las patatas. En la mediana añade un poco de aceite, la cebolla y sal. Tapa y cocina suavemente a fuego medio. En la grande calienta suficiente aceite para cubrir las patatas, añade las patatas y tapa. Deja las dos sartenes a fuego medio unos 40 minutos, sin remover. Al final, las patatas deben romperse apenas al tocarlas.',
      },
    },
    {
      text: {
        en: 'While they cook, crack the eggs into a large bowl, the bowl that will later hold the whole mixture. Beat them gently without incorporating air for a creamier tortilla.',
        tr: 'Pişerken yumurtaları, daha sonra tüm karışımı alacak büyük bir kaseye kırın. Daha kremamsı bir tortilla için havalandırmadan nazikçe çırpın.',
        es: 'Mientras se cocinan, casca los huevos en un bol grande, donde después irá toda la mezcla. Bátelos suavemente sin meter aire para que la tortilla quede más cremosa.',
      },
    },
    {
      text: {
        en: 'Uncover the onion, raise the heat to evaporate its water, and let it caramelize a little, but not too much. Remove it and drain away its oil and moisture in a colander.',
        tr: 'Soğanın kapağını açın, suyunu buharlaştırmak için ateşi yükseltin ve fazla koyulaştırmadan hafifçe karamelize edin. Soğanı alın ve kalan yağ ile nemi süzgeçte süzdürün.',
        es: 'Destapa la cebolla, sube el fuego para evaporar el agua y deja que se caramelice un poco, pero no demasiado. Retírala y escurre en un colador el aceite y la humedad que queden.',
      },
    },
    {
      text: {
        en: 'Drain the oil from the potatoes, reserving it to filter and reuse if you like. Leave a little oil in the pan, raise the heat, and season with salt. Constantly move and break up the potatoes until they form a fairly even mixture, toast just a little, and become very hot. That heat will cook the egg later.',
        tr: 'Patateslerin yağını süzün, isterseniz filtreleyip yeniden kullanmak üzere ayırın. Tavada biraz yağ bırakın, ateşi yükseltin ve tuzlayın. Patatesleri sürekli hareket ettirip kırarak oldukça homojen bir karışım elde edin, hafifçe kızartın ve çok iyice ısıtın. Yumurtayı daha sonra bu ısı pişirecektir.',
        es: 'Retira el aceite de las patatas, que puedes filtrar y reutilizar. Deja las patatas con un poco de aceite, sube el fuego y añade sal. Rompe y mueve las patatas constantemente hasta formar una mezcla más o menos homogénea, que se tueste un poco y coja mucho calor. Ese calor cocinará el huevo después.',
      },
    },
    {
      text: {
        en: 'Immediately add the very hot potatoes to the bowl of eggs and mix well. Add the onion too, then let the mixture rest for 5 minutes. The egg cooks here, rather than later while the tortilla sets.',
        tr: 'Çok sıcak patatesleri hemen yumurta kasesine ekleyip iyice karıştırın. Soğanı da ekleyin ve karışımı 5 dakika dinlendirin. Yumurta, tortilla tavada pişerken değil burada pişer.',
        es: 'Incorpora enseguida las patatas muy calientes al bol de los huevos y mezcla bien. Añade también la cebolla y deja reposar 5 minutos. El huevo se cocina aquí, no más adelante al cuajar la tortilla.',
      },
    },
    {
      text: {
        en: 'Lightly oil the onion pan, or another medium pan, coating it well so the tortilla releases easily. Heat over medium heat, add the mixture, and cook for 3-4 minutes until a thin layer has set. Turn it out onto a plate, optionally rubbed with a little oil so it slides back easily, then return it to the pan and cook the other side in the same way.',
        tr: 'Soğan tavasını veya başka bir orta boy tavayı hafifçe yağlayın ve tortilla kolayca ayrılsın diye yağın her yere yayılmasını sağlayın. Orta ateşte ısıtın, karışımı ekleyin ve ince bir tabaka oluşana kadar 3-4 dakika pişirin. Bir tabağa ters çevirin. Kolayca tavaya geri kayması için tabağı isterseniz biraz yağlayın. Tortillayı tekrar tavaya koyup diğer yüzünü de aynı şekilde pişirin.',
        es: 'En la sartén de la cebolla, o en otra mediana, pon un poco de aceite y extiéndelo bien para que luego sea fácil darle la vuelta. Calienta a fuego medio, añade la mezcla y cocina 3-4 minutos, hasta que se forme una capa fina. Dale la vuelta con un plato, que puedes untar antes con un poco de aceite para que la tortilla resbale bien de nuevo a la sartén. Cuaja el otro lado de la misma forma.',
      },
    },
  ],
  translations: {
    en: {
      slug: 'spanish-potato-omelette',
      title: 'Spanish Potato Omelette',
      indexSummary: 'A creamy Spanish tortilla with tender potatoes and gently caramelized onion.',
      summary: 'This slow-cooked Spanish potato omelette gets its creamy center from mixing very hot potatoes into gently beaten eggs before it ever reaches the final pan.',
    },
    tr: {
      slug: 'ispanyol-patatesli-omlet',
      title: 'İspanyol Patatesli Omlet',
      indexSummary: 'Yumuşacık patates ve hafif karamelize soğanla hazırlanan kremamsı İspanyol tortilla.',
      summary: 'Bu yavaş pişen İspanyol patatesli omlet, çok sıcak patateslerin son tavaya girmeden önce nazikçe çırpılmış yumurtalarla karıştırılması sayesinde kremamsı bir iç doku kazanır.',
    },
    es: {
      slug: 'tortilla-de-patata',
      title: 'Tortilla de patata',
      indexSummary: 'Una tortilla cremosa, con patatas tiernas y cebolla pochada lentamente.',
      summary: 'Esta tortilla de patata de cocción lenta queda cremosa porque las patatas muy calientes se mezclan con los huevos batidos antes de llegar a la sartén final.',
    },
  },
};

export default recipe;
