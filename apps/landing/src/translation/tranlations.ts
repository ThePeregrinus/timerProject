export enum Language {
  RU = 'Russian',
  ENG = 'English',
}
interface translationInterface {
  language: string;
  theme: string;
  theory: string;
  practice: string;
  start: string;
  pause: string;
  changeMode: string;
  closeSession: string;
  contacts: string;
}

const RU: translationInterface = {
  language: 'язык - ру',
  theme: 'тема',
  theory: 'Теория',
  practice: 'Практика',
  start: 'запуск',
  pause: 'пауза',
  changeMode: 'изменит режим',
  closeSession: 'закрыть сессию',
  contacts: 'Вы можете связаться co мной в telegram',
};
const EN: translationInterface = {
  language: 'language - en',
  theme: 'theme',
  theory: 'Theory',
  practice: 'Practice',
  start: 'start',
  pause: 'pause',
  changeMode: 'change mode',
  closeSession: 'close session',
  contacts: 'Contact me via telegram',
};

export const translation = (
  language: string,
  key: keyof translationInterface
) => {
  switch (language) {
    case Language.RU:
      return RU[key];
    default:
      return EN[key];
  }
};
