export default {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff',
    primary: '#2973B7',
    effect: '#248DE0',
    link: '#007bff',
    'link-hover': '#0056b3',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  Spacer: {
    height: '20px',
  },
  List: {
    margin: '0',
    padding: '0',
    li: {
      listStyleType: 'none',
    },
  },
  Hr: {
    backgroundColor: 'lightgrey',
    height: '1px',
    width: '100%',
  },
  Image: {
    width: '100%',
    'object-fit': 'cover',
  },
  Block: {
    width: '100%',
    height: '100vh',
  },
  Box: {},
  Flex: {},
  Grid: {},
  Link: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '24px',
    fontSize: '16px',
    color: '#007bff',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#0056b3',
      textDecoration: 'underline',
    },
  },
  Text: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '24px',
    fontSize: '16px',
    color: 'black',
  },
  Tabs: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  Card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '4px',
    border: '1px solid #D2D9DD',
    'box-sizing': 'border-box',
    width: '400px',
    'min-height': '300px',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    overflow: 'auto',
  },
  cards: {
    vertical: {},
    horizontal: {
      display: 'flex',
      'min-height': '100px',
      'min-width': '200px',
      width: 'auto',
    },
  },
  Input: {
    boxSizing: 'border-box',
    backgroundColor: '#353535',
    height: '23px',
    color: '#cccccc',
    paddingLeft: '12px',
    paddingTop: '0px',
    paddingRight: '12px',
    paddingBottom: '2px',
    outline: 'none',
    lineHeight: '15px',
    border: '1px solid transparent',
    '&:hover': {
      border: '1px solid #555',
    },
    '&:focus': {
      border: '1px solid #29B6F6',
    },
  },
  Button: {
    borderRadius: '4px',
    backgroundColor: '#248DE0',
    display: 'inline-block',
    textAlign: 'center',
    border: '1px solid transparent',
    paddingTop: '7px',
    paddingRight: '16px',
    paddingBottom: '7px',
    paddingLeft: '16px',
    color: '#FFFFFF',
    transition:
      'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    '&:active': {
      backgroundColor: '#2A5D91',
      color: '#FFFFFF',
    },
    '&:hover': {
      backgroundColor: '#2973B7',
      color: '#FFFFFF',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(38,143,255,.5)',
      color: '#FFFFFF',
    },
  },
  links: {
    underlined: {
      '&:hover': {
        textDecoration: 'underline',
        color: '#0056b3',
      },
    },
    hoverUnderlined: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        color: '#0056b3',
      },
    },
    nonUnderlined: {
      textDecoration: 'none',
      '&:hover': {
        cursor: 'pointer',
        textDecoration: 'none',
        color: '#0056b3',
      },
    },
  },
  lists: {
    horizontal: {
      display: 'flex',
      flexDirection: 'row',
    },
    vertical: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  tabs: {},
  buttons: {
    outline: {
      borderColor: '#248DE0',
      backgroundColor: 'transparent',
      color: '#248DE0',
      '&:hover': {
        backgroundColor: '#248DE0',
        color: '#FFFFFF',
      },
      '&:focus': {
        color: '#248DE0',
      },
      '&:focus:hover': {
        color: '#FFFFFF',
      },
    },
  },
  texts: {
    display1: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
      fontStyle: 'normal',
      fontWeight: '300',
      lineHeight: '79px',
      fontSize: '72px',
      color: 'black',
    },
    display2: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
      fontStyle: 'normal',
      fontWeight: '300',
      lineHeight: '72px',
      fontSize: '66px',
      color: 'black',
    },
    display3: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
      fontStyle: 'normal',
      fontWeight: '300',
      lineHeight: '59px',
      fontSize: '54px',
      color: 'black',
    },
    display4: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
      fontStyle: 'normal',
      fontWeight: '300',
      lineHeight: '46px',
      fontSize: '42px',
      color: 'black',
    },
    h1: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '48px',
      fontSize: '48px',
      color: 'black',
    },
    h2: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '38px',
      fontSize: '32px',
      color: 'black',
    },
    h3: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '34px',
      fontSize: '28px',
      color: 'black',
    },
    h4: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '29px',
      fontSize: '24px',
      color: 'black',
    },
    h5: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '24px',
      fontSize: '20px',
      color: 'black',
    },
    h6: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '19px',
      fontSize: '16px',
      color: 'black',
    },
    lead: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
      fontStyle: 'normal',
      fontWeight: '300',
      lineHeight: '30px',
      fontSize: '20px',
      color: 'black',
    },
    base: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '24px',
      fontSize: '16px',
      color: 'black',
    },
  },
  spacers: {
    big: {
      height: '120px',
    },
    small: {
      height: '10px',
    },
  },
  images: {
    fluid: {
      'max-width': '100%',
      height: 'auto',
    },
    thumb: {
      border: '1px solid #dee2e6',
      'border-radius': '4px',
      width: '200px',
      height: '200px',
      backgroundColor: '#fff',
      padding: '4px',
    },
  },
  hrs: {
    wide: {
      width: '250px',
    },
    narrow: {
      width: '100px',
    },
  },
};
