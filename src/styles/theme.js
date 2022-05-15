import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
   color: {
      cyan: {
         "900": "#33cccc",
         "700": "#00ffff",
         "600": "#32ffff",
         "500": "#66ffff",
         "300": "#99ffff",
         "200": "#b2ffff",
         "100": "#ccffff"
      },
      turquoise: {
         "900": "#007fff",
         "800": "#0095ff",
         "700": "#00aaff",
         "600": "#00bfff",

      }
   },
   fonts: {
      heading: "Play, sans-serif",
      body: "Play, sans-serif"
   }
})

export default theme