import { useMemo, useState } from 'react';

export interface RecipeCardData {
  href: string;
  title: string;
  summary: string;
  image?: { src: string; width: number; height: number };
  origin?: string;
  prepTime: number;
  totalTime: number;
}

interface Props {
  cards: RecipeCardData[];
  searchPlaceholder: string;
  noResults: string;
  minutes: string;
  prep: string;
  total: string;
}

/** Substring match scores 2, subsequence (fuzzy) match scores 1, otherwise 0. */
function matchScore(text: string, q: string): number {
  const t = (text || '').toLowerCase();
  const query = (q || '').trim().toLowerCase();
  if (!query) return 1;
  if (t.includes(query)) return 2;
  let ti = 0;
  for (let qi = 0; qi < query.length; qi++) {
    const idx = t.indexOf(query[qi], ti);
    if (idx === -1) return 0;
    ti = idx + 1;
  }
  return 1;
}

export default function RecipeSearch({ cards, searchPlaceholder, noResults, minutes, prep, total }: Props) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    return cards
      .map((card) => ({
        card,
        score: Math.max(matchScore(card.title, query), matchScore(card.summary, query)),
      }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score || a.card.title.localeCompare(b.card.title))
      .map((x) => x.card);
  }, [cards, query]);

  return (
    <div>
      <div className="relative ml-auto w-[min(340px,100%)]">
        <span className="absolute left-4 top-1/2 flex -translate-y-1/2 text-accent-700">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchPlaceholder}
          aria-label={searchPlaceholder}
          className="w-full rounded-xl border-[1.5px] border-ink bg-surface py-2 pl-10 pr-3 text-sm"
        />
      </div>

      {results.length === 0 ? (
        <p className="py-14 text-center opacity-70">{noResults}</p>
      ) : (
        <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] gap-4">
          {results.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="flex items-stretch gap-4 rounded-2xl bg-surface p-4 text-ink no-underline"
            >
              {card.image ? (
                <img
                  src={card.image.src}
                  alt=""
                  width={card.image.width}
                  height={card.image.height}
                  loading="lazy"
                  className="h-[170px] w-[150px] flex-none rounded-[14px] object-cover"
                />
              ) : (
                <div className="grid h-[170px] w-[150px] flex-none place-content-center rounded-[14px] bg-accent-2-100 p-3 text-center">
                  <span className="font-heading text-base text-ink/40">{card.title}</span>
                </div>
              )}
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <h3 className="m-0 font-heading text-2xl leading-[1.1]">{card.title}</h3>
                <p className="m-0 text-sm text-ink/75">{card.summary}</p>
                <div className="mt-auto flex flex-wrap items-center gap-2">
                  {card.origin && (
                    <span className="rounded-[10px] bg-accent-2 px-3 py-1 text-[11.5px] font-semibold text-ink">
                      {card.origin}
                    </span>
                  )}
                  <span className="rounded-[10px] border-[1.5px] border-ink px-3 py-1 text-[11.5px] font-semibold text-ink">
                    {prep}: {card.prepTime} {minutes}
                  </span>
                  <span className="rounded-[10px] border-[1.5px] border-ink px-3 py-1 text-[11.5px] font-semibold text-ink">
                    {total}: {card.totalTime} {minutes}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
