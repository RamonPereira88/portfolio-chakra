import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
   colors: {
      cyan: {
         "900": "#00ffff",
         "800": "#32ffff",
         "500": "#66ffff",
         "300": "#99ffff",
         "200": "#b2ffff",
         "100": "#ccffff"
      }
   },
   fonts: {
      heading: "Lexend, sans-serif",
      body: "Lexend, sans-serif"
   }
})

export default theme