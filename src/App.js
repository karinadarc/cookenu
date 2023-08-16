import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./routes/routes";
import {theme} from './styles'


const App = () =>{
  return (
    <ChakraProvider theme={theme}>
      <Router/>
    </ChakraProvider>
    
  );
}

export default App;
