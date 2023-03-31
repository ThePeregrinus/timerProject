import { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext, ThemeContext, TimerContext } from '../../app/app';
import { translation } from '../../translation/tranlations';
import { StyledButton } from '../Button/Button';
import { Timer } from '../Timer/Timer';

const PrimaryTimer = styled(Timer)`
  font-size: 96px;
  margin: 46px 0px 58px 15px;
`;
const SecondaryTimer = styled(Timer)`
  font-size: 32px;
  margin: 0px 10px 10px 0px;
`;

const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px;
  margin: 10px;
`;

const StyledMainButton = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Main = () => {
  const themeContext = useContext(ThemeContext);
  const timerContext = useContext(TimerContext);
  const languageContext = useContext(LanguageContext);

  return (
    <div>
      <TimerWrapper>
        <StyledTimerWrapper>
          <>
            <SecondaryTimer
              color={String(themeContext.theme)}
              timerName={translation(languageContext.language, 'theory')}
              time={timerContext.theoryTime}
            />
            <SecondaryTimer
              color={String(themeContext.theme)}
              timerName={translation(languageContext.language, 'practice')}
              time={timerContext.practiceTime}
            />
          </>
        </StyledTimerWrapper>
        <PrimaryTimer color="yellow" time={timerContext.count} />
      </TimerWrapper>
      <StyledMainButton>
        <ButtonRow>
          <StyledButton
            onClick={timerContext.handleStart}
            text={translation(languageContext.language, 'start')}
          />
          <StyledButton
            onClick={timerContext.handleStop}
            text={translation(languageContext.language, 'pause')}
          />
        </ButtonRow>
        <ButtonRow>
          <StyledButton
            onClick={timerContext.changeMode}
            color="white"
            text={translation(languageContext.language, 'changeMode')}
          />
          <StyledButton
            onClick={timerContext.closeSession}
            color="white"
            text={translation(languageContext.language, 'closeSession')}
          />
        </ButtonRow>
      </StyledMainButton>
    </div>
  );
};
