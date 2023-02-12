export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family: "'Open Sans', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    xbold: 700,
    sizes: {
      xsmall: '0.75rem' /* 12 */,
      small: '0.875rem' /* 14 */,
      medium: '1rem' /* 16 */,
      large: '1.25rem' /* 20 */,
      xlarge: '1.5rem' /* 24 */,
      xxlarge: '2.0rem' /* 32 */
    }
  },
  colors: {
    primary: '#C1FD35',
    white: '#FFFFFF',
    secondaryWhite: '#EEEAEA',
    black: '#000000',
    secondaryBlack: '#201F22',
    gray: '#3A393E',
    secondaryGray: '#CECECE',
    error: '#EE3838'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  screen: {
    mobile: '24.375rem',
    tablet: '52.125rem',
    desktop: '90rem'
  }
} as const;
