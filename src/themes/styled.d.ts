import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      primary: string;
      secondary: string;
      text: string;
      field: string;
      red: string;
      green: string;
      purple: string;
    };

    fonts: {
      fontSize: number;
      fontFamily: string;
    };
  }
}
