import type { Recipe } from './types';
import picture from '../../assets/pasta-bolognese.png';

const recipe: Recipe = {
  id: 'pasta-bolognese',
  createdAt: '2026-08-29',
  prepTime: 15,
  totalTime: 45,
  origin: { en: 'Italy', tr: 'İtalya', es: 'Italia' },
  picture,
  servings: { default: 2, min: 1, max: 6 },
  spotifyTrackId: '7037bX3jdaUWUAXL12CHGy',
  ingredients: [
    {
      amount: 220,
      unit: 'g',
      name: {
        en: 'pasta',
        tr: 'makarna',
        es: 'pasta',
      },
    },
    {
      amount: 250,
      unit: 'g',
      name: { en: 'ground beef', tr: 'kıyma', es: 'carne picada de ternera' },
    },
    {
      amount: 0.5,
      unit: 'pcs',
      name: { en: 'onion', tr: 'soğan', es: 'cebolla' },
    },
    {
      amount: 1,
      unit: 'pcs',
      name: { en: 'small carrot', tr: 'küçük havuç', es: 'zanahoria pequeña' },
    },
    {
      amount: 300,
      unit: 'g',
      name: { en: 'tomato passata', tr: 'domates püresi', es: 'passata de tomate' },
    },
    {
      amount: 1,
      unit: 'tbsp',
      name: { en: 'olive oil', tr: 'zeytinyağı', es: 'aceite de oliva' },
    },
    {
      amount: 0.75,
      unit: 'tsp',
      name: { en: 'fine salt, plus more for the pasta water', tr: 'ince tuz, makarna suyu için biraz daha', es: 'sal fina, y un poco más para el agua de la pasta' },
    },
    {
      amount: 0.5,
      unit: 'tsp',
      name: { en: 'black pepper', tr: 'karabiber', es: 'pimienta negra' },
    },
    {
      amount: 1,
      unit: 'pcs',
      optional: true,
      name: { en: 'garlic clove', tr: 'diş sarımsak', es: 'diente de ajo' },
    },
    {
      amount: 60,
      unit: 'ml',
      optional: true,
      name: { en: 'red or white wine', tr: 'kırmızı veya beyaz şarap', es: 'vino tinto o blanco' },
    },
    {
      amount: 1,
      unit: 'tsp',
      optional: true,
      name: { en: 'dried oregano', tr: 'kuru kekik', es: 'orégano seco' },
    },
    {
      amount: 1,
      unit: 'pcs',
      optional: true,
      name: { en: 'bay leaf', tr: 'defne yaprağı', es: 'hoja de laurel' },
    },
    {
      amount: 20,
      unit: 'g',
      optional: true,
      name: { en: 'Parmesan, finely grated', tr: 'ince rendelenmiş Parmesan', es: 'parmesano, finamente rallado' },
    },
  ],
  steps: [
    {
      text: {
        en: 'Finely chop the onion and carrot. If using garlic, finely chop it too.',
        tr: 'Soğanı ve havucu ince ince doğrayın. Sarımsak kullanıyorsanız onu da ince doğrayın.',
        es: 'Pica muy fina la cebolla y la zanahoria. Si usas ajo, pícalo también.',
      },
    },
    {
      text: {
        en: 'Heat the olive oil in a wide pan over medium heat. Add the onion, carrot, and a pinch of salt. Cook for 8-10 minutes, stirring now and then, until very soft but not browned.',
        tr: 'Zeytinyağını geniş bir tavada orta ateşte ısıtın. Soğanı, havucu ve bir tutam tuzu ekleyin. Ara sıra karıştırarak iyice yumuşayana ancak kızarmayana kadar 8-10 dakika pişirin.',
        es: 'Calienta el aceite de oliva en una sartén amplia a fuego medio. Añade la cebolla, la zanahoria y una pizca de sal. Cocina 8-10 minutos, removiendo de vez en cuando, hasta que quede muy tierno sin dorarse.',
      },
    },
    {
      text: {
        en: 'Raise the heat slightly, add the ground beef and garlic if using, then break the beef up with a spatula. Cook until it loses its raw color and browns a little. To develop good color and flavor, do not stir too often: break up the beef, let it cook for 1-2 minutes, then stir and repeat.',
        tr: 'Ateşi biraz yükseltin, kıymayı ve kullanıyorsanız sarımsağı ekleyin, ardından kıymayı spatulayla ufalayın. Çiğ rengi kaybolup hafifçe kızarana kadar pişirin. İyi bir renk ve lezzet için çok sık karıştırmayın: kıymayı ufalayın, 1-2 dakika pişmeye bırakın, sonra karıştırıp tekrarlayın.',
        es: 'Sube un poco el fuego, añade la carne picada más el ajo y desmenúzala con una espátula. Cocina hasta que pierda el color crudo y se dore un poco. Para que se dore bien y tenga sabor, no remuevas demasiado. Rompe la carne y deja que se cocine 1-2 minutos antes de remover y repetir.',
      },
    },
    {
      text: {
        en: 'If using wine, pour it in and let it bubble for 1-2 minutes until nearly evaporated. Add the passata, pepper, remaining salt, and the oregano or bay leaf if using.',
        tr: 'Şarap kullanıyorsanız ekleyin ve neredeyse tamamen buharlaşana kadar 1-2 dakika kaynatın. Domates püresini, karabiberi, kalan tuzu ve kullanıyorsanız kekik veya defne yaprağını ekleyin.',
        es: 'Si usas vino, añádelo y deja que hierva 1-2 minutos, hasta que se evapore casi por completo. Incorpora la passata, la pimienta, el resto de la sal y el orégano o laurel si los usas.',
      },
    },
    {
      text: {
        en: 'Simmer over low to medium-low heat for 20-30 minutes, stirring occasionally. If you would like to cook it longer, even better: it can simmer gently for 2-3 hours. Taste and adjust the salt.',
        tr: 'Kısık ile orta-kısık ateş arasında, ara sıra karıştırarak 20-30 dakika pişirin. Daha uzun pişirmek isterseniz daha da iyi olur: sos 2-3 saat kısık ateşte rahatlıkla pişebilir. Tadına bakıp tuzunu ayarlayın.',
        es: 'Cocina a fuego bajo o medio-bajo durante 20-30 minutos, removiendo de vez en cuando. Si quieres cocinarlo más, incluso mejor. Puede estar 2-3 horas perfectamente a fuego lento. Prueba y ajusta la sal.',
      },
    },
    {
      text: {
        en: 'Near the end of the simmering time, cook the pasta in well-salted boiling water until just al dente. Reserve a cup of the cooking water, then drain.',
        tr: 'Sosun pişmesinin sonlarına doğru makarnayı bol tuzlu kaynar suda tam al dente kıvamına gelene kadar haşlayın. Bir su bardağı haşlama suyunu ayırın, ardından süzün.',
        es: 'Hacia el final de la cocción de la salsa, cuece la pasta en abundante agua hirviendo con sal hasta que quede al dente. Reserva una taza del agua de cocción y escúrrela.',
      },
    },
    {
      text: {
        en: 'Toss the pasta with the ragù in the pan for 1 minute, loosening with a little reserved pasta water if needed. Finish with Parmesan.',
        tr: 'Makarnayı ragù sosuyla tavada 1 dakika karıştırın, gerekirse ayırdığınız makarna suyundan biraz ekleyin. Parmesanla bitirin.',
        es: 'Mezcla la pasta con el ragú en la sartén durante 1 minuto, añadiendo un poco del agua reservada si hace falta. Termina con parmesano.',
      },
    },
  ],
  translations: {
    en: {
      slug: 'pasta-bolognese',
      title: 'Pasta Bolognese',
      indexSummary: 'A rich beef and tomato ragù tossed with pasta and Parmesan.',
      summary: 'A flexible pasta Bolognese with a softened onion and carrot base, well-browned beef, and tomato passata.',
    },
    tr: {
      slug: 'bolonez-makarna',
      title: 'Bolonez Soslu Makarna',
      indexSummary: 'Kıymalı domates ragù sosu ve Parmesanla hazırlanan doyurucu bir makarna.',
      summary: 'Yumuşamış soğan ve havuç tabanı, iyice kızarmış kıyma ve domates püresiyle hazırlanan esnek bir Bolonez makarna.',
    },
    es: {
      slug: 'pasta-bolonesa',
      title: 'Pasta boloñesa',
      indexSummary: 'Un rico ragú de carne y tomate mezclado con pasta y parmesano.',
      summary: 'Una boloñesa sencilla para entre semana, con cebolla y zanahoria bien pochadas, carne dorada y passata de tomate.',
    },
  },
};

export default recipe;
