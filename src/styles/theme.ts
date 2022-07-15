import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    orange: 'hsl(31, 77%, 52%)',
    cyan: 'hsl(184, 100%, 22%)',
    darkCyan: 'hsl(179, 100%, 13%)'
  },
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
})