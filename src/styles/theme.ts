import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "800": "#1F2029",
      "700": "#353646",
      "600": "#47585B",
      "500": "#616480",
      "450": "#999999",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#7159c1",
      "50": "#F5F8FA",
    },
    semiTransparent: 'rgba(0, 0, 0, 0.5)',
    highlight: '#FFBA08',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600'
      }
    }
  }
});