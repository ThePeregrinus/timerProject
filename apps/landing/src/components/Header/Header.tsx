import { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext, ThemeContext } from '../../app/app';
import { translation } from '../../translation/tranlations';
import { StyledButton } from '../Button/Button';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  width: 630px;
  gap: 10px;
  padding: 5px;
  margin: 10px;
`;

export const Header = () => {
  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);

  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <StyledButton
          onClick={languageContext.changeLanguage}
          color="white"
          text={translation(languageContext.language, 'language')}
        />
        <StyledButton
          onClick={themeContext.changeTheme}
          color={'white' + themeContext.theme}
          text={translation(languageContext.language, 'theme')}
        />
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};
