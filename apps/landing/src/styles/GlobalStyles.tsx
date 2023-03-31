import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
   height: 100%;
   
   font-family: 'Inter', sans-serif;
   font-weight: 700;
   ${(themeProps) => {
     switch (themeProps.theme) {
       case 'WhiteTheme':
         return 'background-color:#F5F5F5;';
       default:
         return 'background-color:#181818;';
     }
   }};
  }
  #root{
   height: 100%;
  }
  `;
