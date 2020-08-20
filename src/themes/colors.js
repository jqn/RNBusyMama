/**
 * Defines the application color scheme
 * src/themes/colors.js
 */
const white = '#FFF';
const black = '#000';

const greyColors = {
  light: '#E5E7E9',
  main: '#ABB2B9',
  dark: '#808B96',
};

const colors = {
  black,
  white,
  primary: {
    contrastText: black,
    dark: '#B53D00',
    main: '#EF6C00',
    light: '#FF9D3F',
  },
  secondary: {
    contrastText: white,
    dark: '#00B248',
    main: '#00E676',
    light: '#66FFA6',
  },
  success: {
    contrastText: white,
    main: '#00d660',
  },
  info: {
    contrastText: white,
    main: '#0083EF',
  },
  warning: {
    contrastText: white,
    main: '#EFE400',
  },
  error: {
    contrastText: white,
    main: '#EF000C',
  },
  text: {
    primary: '#232325',
    secondary: '#2F2F32',
    link: '#0083EF',
  },
  background: {
    default: '#48484C',
    paper: white,
  },
  icon: '#2F2F32',
  divider: '#545459',
};

export default colors;
