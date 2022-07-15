import { Box, Flex } from "@chakra-ui/react";
import { CardCar } from "../../components/CardCar";
import { avaiableCars } from "../../utils/avaiableCars";


export default function Home() {
  return (
    <Box w='100vw' h='100vh'>
      <Flex 
        as='section'         
        h={{lg: 'full'}}         
        justify='center' 
        align='center' 
        direction={{base: 'column', lg: 'row'}} 
        marginTop={{base: '50', lg: 0}}       
      >
        {avaiableCars.map((car) => (
          <CardCar type={car.type} description={car.description} />
        ))}
      </Flex>
    </Box>
  )
}