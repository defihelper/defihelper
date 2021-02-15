import { createGlobalStyle } from 'styled-components'

export const color = {
  dark0: '#0E042F',
  dark1: '#1A0F3B',
  dark2: '#1E143D',
  dark3: '#2B2249',
  white: '#fff',
  primary: '#6F47EE',
  danger: '#FF1744'
}

export const background = {
  main: `linear-gradient(68.11deg, ${color.dark0} 1.98%, #100533 87.75%, ${color.dark0} 100%)`
}

export const fonts = {
  metropolisRegular: '"MetropolisRegular", sans-serif',
  metropolisThin: '"MetropolisThin", sans-serif',
  metropolisBold: '"MetropolisBold", sans-serif',
  defaultSize: '16px'
}

export const rounding = {
  default: `4px`
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${background.main};
    color: ${color.white};
    font-family: ${fonts.metropolisRegular};
    font-size: ${fonts.defaultSize};
  }
  
  p {
    margin-left: 20px;
  }

  a.unstyled {
    color: inherit;
    text-decoration: none;
  }

  .bold {
    font-family: ${fonts.metropolisBold};
    font-weight: bold;
  }

  .thin {
    font-family: ${fonts.metropolisThin};
  }

  .text-left {
    text-align: left !important;
  }
  
  .text-right {
    text-align: right !important;
  }
  
  .text-center {
    text-align: center !important;
  }
`
