import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryBlue: string;
    primaryWhite: string;

    fonts: {
      extraLight: string;
      light: string;
      regular: string;
      semiBold: string;
      bold: string;
    };
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
  primaryWhite: '#FFFFFF',
  fonts: {
    extraLight: 'TitilliumExtraLight',
    light: 'TitilliumLight',
    regular: 'TitilliumRegular',
    semiBold: 'TitilliumSemiBold',
    bold: 'TitilliumBold',
  },
  fontSizeExtraLarge: '40px',
  fontSizeExtraSmall: '13px',
  fontSizeSmall: '17px',
  fontSizeLarge: '20px',

  widthTablet: '1024px',
  widthMobile: '425px',
  widthFull: '100%',
};

export default Theme;