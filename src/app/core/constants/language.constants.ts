export const LANGUAGE = {
  CZECH: 'cz',
  ENGLISH: 'en',
  GERMAN: 'de',
  LATVIAN: 'lv',
  POLISH: 'pl',
  RUSSIAN: 'ru',
} as const;

export type Language = (typeof LANGUAGE)[keyof typeof LANGUAGE];

export const LANGUAGE_LABELS: Record<Language, string> = {
  cz: 'Česky',
  en: 'English',
  de: 'Deutsch',
  lv: 'Latviski',
  pl: 'Polsky',
  ru: 'Russian',
}
