import { createContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { GlobalStyle } from '../styles/GlobalStyles';
import { Language } from '../translation/tranlations';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface TimerContextInterface {
  handleStart?: () => void;
  handleStop?: () => void;
  changeMode?: () => void;
  count: number;
  theoryTime: number;
  practiceTime: number;
  closeSession?: () => void;
}
interface LanguageContextInterface {
  language: string;
  changeLanguage?: () => void;
}

interface ThemeContextInterface {
  theme?: string;
  changeTheme?: () => void;
}

export enum Theme {
  White = 'WhiteTheme',
  Black = 'BlackTheme',
}

enum Mode {
  Theory = 'theory',
  Practice = 'practice',
}

export const TimerContext = createContext<TimerContextInterface>({
  count: 0,
  theoryTime: 0,
  practiceTime: 0,
});

export const LanguageContext = createContext<LanguageContextInterface>({
  language: Language.RU,
});
export const ThemeContext = createContext<ThemeContextInterface>({});

export function App() {
  const [started, setStarted] = useState(false);
  const [mode, setMode] = useState<string>(Mode.Theory);
  const [count, setCount] = useState<number>(0);
  const [theoryTime, setTheoryTime] = useState<number>(0);
  const [practiceTime, setPracticeTime] = useState<number>(0);
  const [language, setLanguage] = useState<string>(Language.RU);
  const [theme, setTheme] = useState<string>(Theme.Black);

  useEffect(() => {
    const interval = setInterval(() => {
      if (started) {
        switch (mode) {
          case Mode.Theory:
            setCount((n) => n + 1);
            setTheoryTime((n) => n + 1);
            break;

          case Mode.Practice:
            if (count > 0) {
              setCount((n) => n - 1);
            }
            break;
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [started, mode, count]);

  const handleStart = () => setStarted(true);

  const handleStop = () => setStarted(false);

  const changeLanguage = () => {
    language === Language.RU
      ? setLanguage(Language.ENG)
      : setLanguage(Language.RU);
  };

  const changeMode = () => {
    handleStop();
    if (mode === Mode.Practice) {
      setMode(Mode.Theory);
      setCount(theoryTime);
    } else {
      setMode(Mode.Practice);
      setPracticeTime(count * 3);
      setCount(count * 3);
    }
  };
  const closeSession = () => {
    localStorage.setItem(
      'User',
      JSON.stringify({
        count: count,
        practiceTime: practiceTime,
        theoryTime: theoryTime,
      })
    );
    if (mode === Mode.Practice) {
      setMode(Mode.Theory);
    }
    handleStop();
    setCount(0);
    setPracticeTime(0);
    setTheoryTime(0);
  };

  const changeTheme = () => {
    theme === Theme.Black ? setTheme(Theme.White) : setTheme(Theme.Black);
  };

  return (
    <TimerContext.Provider
      value={{
        count,
        handleStart,
        handleStop,
        changeMode,
        theoryTime,
        practiceTime,
        closeSession,
      }}
    >
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <GlobalStyle theme={theme} />
        <StyledWrapper>
          <LanguageContext.Provider value={{ language, changeLanguage }}>
            <Header />
            <Main />
            <Footer nickname="@nickname" />
          </LanguageContext.Provider>
        </StyledWrapper>
      </ThemeContext.Provider>
    </TimerContext.Provider>
  );
}

export default App;
