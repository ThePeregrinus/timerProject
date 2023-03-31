import { FC, useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../../app/app';
import { translation } from '../../translation/tranlations';

const StyledNickname = styled.span`
  color: #b40000;
`;

const StyledFooter = styled.footer`
  text-align: center;
  color: rgba(255, 214, 0, 1);
`;

interface FooterInterface {
  nickname: string;
}

export const Footer: FC<FooterInterface> = ({ nickname }) => {
  const languageContext = useContext(LanguageContext);
  return (
    <StyledFooter>
      {[translation(languageContext.language, 'contacts'), ' '].join('')}
      <StyledNickname>{nickname}</StyledNickname>
    </StyledFooter>
  );
};
