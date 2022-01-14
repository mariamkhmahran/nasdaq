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
    fontSizeHeader: string;
    fontSizeHeaderMobile: string;
    fontSizeBody: string;
    fontSizeSmall: string;
    fontSizeExtraSmall: string;
    fontSizeLarge: string;
    fontSizeExtraLarge: string;

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
  fontSizeHeader: '42pt',
  fontSizeHeaderMobile: '34pt',
  fontSizeBody: '14pt',
  fontSizeSmall: '12pt',
  fontSizeExtraSmall: '8pt',
  fontSizeLarge: '20pt',
  fontSizeExtraLarge: '28pt',

  widthTablet: '1024px',
  widthMobile: '425px',
  widthFull: '100%',
};

export default Theme;
