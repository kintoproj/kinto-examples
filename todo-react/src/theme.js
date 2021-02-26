import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import createPalette from '@material-ui/core/styles/createPalette';


export const KINTO_BLACK = '#121212';
export const KINTO_PURPLE = 'rgb(98, 0, 238)';

export const KINTO_LIGHT_PURPLE = '#BB86FC';
export const KINTO_GREY = 'rgb(158, 158, 158)';
export const KINTO_LIGHT_GREY = '#f6f7f9';
export const KINTO_SUPER_LIGHT_GREY = '#fafafa';
export const KINTO_FONT_DARK_GREY = 'rgba(0, 0, 0, 0.87)';
export const KINTO_FONT_LIGHT_GREY = 'rgba(0, 0, 0, 0.6)';
export const KINTO_FONT_MORE_LIGHT_GREY = 'rgba(0, 0, 0, 0.38)';
export const KINTO_FONT_SUPER_LIGHT_GREY = 'rgba(0, 0, 0, 0.12)';

export const KINTO_ERROR_LIGHT = 'rgb(198,40,40)';
export const KINTO_ERROR = '#B00020';
export const KINTO_ERROR_DARK = '#B00020';

export const KINTO_SUCCESS_LIGHT = 'rgb(0,188,171)';
export const KINTO_SUCCESS = 'rgb(3, 218, 197)';
export const KINTO_SUCCESS_DARK = '#B00020';

export const KINTO_FONT_WHITE = 'rgba(255, 255, 255, 0.87)';

export const KINTO_COLOR_STATUS_RED = 'rgb(207, 102, 121)';

export const KINTO_COLOR_STATUS_GREEN = 'rgb(3, 218, 197)';
// TBD
export const KINTO_COLOR_STATUS_YELLOW = 'rgb(3, 218, 197)';
export const KINTO_COLOR_STATUS_BLUE = 'rgb(3, 218, 197)';

type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export const kintoPurple = (shade) => {
  return {
    50: '#F2E7FE',
    100: '#DBB2FF',
    200: '#BB86FC',
    300: '#985EFF',
    400: '#7F39FB',
    500: '#6200EE',
    600: '#5600E8',
    700: '#3700B3',
    800: '#30009C',
    900: '#23036A',
  }[shade];
};




export const bps = createBreakpoints({});

export const headingFontFamily = 'Roboto';
export const bodyFontFamily = 'Noto Sans TC, 微軟正黑體, 新細明體, sans-serif';

const palette = {
  primary: {
    light: kintoPurple(200),
    main: kintoPurple(500),
    dark: kintoPurple(700),
    contrastText: '#fff',
  },
  secondary: {
    main: '#ffffff',
    light: '#ff867c',
    dark: '#b61827',
    contrastText: '#000',
  },
  background: {
    default: '#f6f7f9',
    paper: '#ffffff',
  },
  action :{
    disabled: ''
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.74)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  error: {
    light: KINTO_ERROR_LIGHT,
    main: KINTO_ERROR,
    dark: KINTO_ERROR_DARK,
    contrastText: '#fff',
  },
  common: {
    black: '#000',
    white: '#fff',
  },
  success: {
    light: KINTO_SUCCESS_LIGHT,
    main: KINTO_SUCCESS_LIGHT,
    dark: KINTO_SUCCESS_LIGHT,
    contrastText: '#fff',
  }
};

const darkPalette = {
  primary: {
    main: kintoPurple(200),
    contrastText: '#fff',
  },
  secondary: {
    main: kintoPurple(200),
    light: '#ff867c',
    dark: '#b61827',
    contrastText: '#000',
  },
  background: {
        
  },
};


const errorPalette = {
  primary: {
    main: KINTO_ERROR,
    contrastText: '#fff',
  },
  secondary: {
    main: '#ffffff',
    light: '#ff867c',
    dark: '#b61827',
    contrastText: '#000',
  },

  background: {
    default: '#ffffff',
    paper: '#ffffff',
  },
  text: {
    primary: '#000',
    secondary: KINTO_FONT_LIGHT_GREY,
  },
};

export const typography = {
  useNextVariants: true,
  xsmallFontSize: 12,
  smallFontSize: 14,
  fontSize: 16,
  fontFamily: headingFontFamily,
  h1: {
    fontFamily: headingFontFamily,
    fontSize: 34,
    fontWeight: 500,
  },
  h2: {
    fontFamily: headingFontFamily,
    fontSize: 30,
    fontWeight: 500,
  },
  h3: {
    fontFamily: headingFontFamily,
    fontSize: 26,
    fontWeight: 500,
  },
  h4: {
    fontFamily: headingFontFamily,
    fontSize: 24,
    fontWeight: 500,
  },
  h5: {
    fontFamily: headingFontFamily,
    fontSize: 20,
    fontWeight: 500,
  },
  h6: {
    fontFamily: headingFontFamily,
    fontSize: 18,
    fontWeight: 500,
  },
  subtitle1: {
    fontFamily: headingFontFamily,
    fontSize: 16,
  },
  subtitle2: {
    fontFamily: headingFontFamily,
    fontSize: 14,
  },
  body1: {
    fontFamily: headingFontFamily,
    fontSize: 16,
    letterSpacing: 0.5,
  },
  body2: {
    fontFamily: headingFontFamily,
    fontSize: 14,
    letterSpacing: 0.25,
  },
  caption: {
    fontFamily: headingFontFamily,
    fontSize: 12,
    letterSpacing: 0.4,
  },
  overline: {
    fontFamily: headingFontFamily,
    fontSize: 10,
    letterSpacing: '1.4px',
    lineHeight: '16px',
  },
  button: {
    fontFamily: headingFontFamily,
    fontSize: 14,
    letterSpacing: '1.25px',
    lineHeight: '16px',
  }
};

export const mainTheme = createMuiTheme({
  typography,
  palette: createPalette(palette),
});

export const darkTheme = createMuiTheme({
  typography,
  palette: createPalette({
    ...darkPalette,
    type: 'dark',
  }),
});

export const errorTheme = createMuiTheme({
  typography,
  palette: createPalette({
    ...errorPalette,
  }),  
});