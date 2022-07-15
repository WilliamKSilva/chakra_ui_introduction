import * as React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"
import Home from "./pages/Home"
import { theme } from "./styles/theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Home />
  </ChakraProvider>
)
