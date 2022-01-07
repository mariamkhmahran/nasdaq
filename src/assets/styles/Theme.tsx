import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryBlue: string;
    primaryBlueDark: string;
    primaryWhite: string;
    primaryWhiteTrans: string;

    fonts: {
      extraLight: string;
      light: string;
      regular: string;
      semiBold: string;
      bold: string;
    };
    fontSizeXL: string;
    fontSizeExtraLarge: string;
    fontSizeExtraSmall: string;
    fontSizeSmall: string;
    fontSizeLarge: string;

    widthFull: string;
    widthMobile: string;
    widthTablet: string;
  }
}

export const Theme: DefaultTheme = {
  primaryBlue: '#249CFF',
  primaryBlueDark: '#2191ed',
  primaryWhite: '#FFFFFF',
  primaryWhiteTrans: '#FFF4',
  fonts: {
    extraLight: 'TitilliumExtraLight',
    light: 'TitilliumLight',
    regular: 'TitilliumRegular',
    semiBold: 'TitilliumSemiBold',
    bold: 'TitilliumBold',
  },
  fontSizeXL: '80px',
  fontSizeExtraLarge: '40px',
  fontSizeExtraSmall: '13px',
  fontSizeSmall: '20px',
  fontSizeLarge: '30px',

  widthTablet: '1024px',
  widthMobile: '425px',
  widthFull: '100%',
};

export default Theme;
