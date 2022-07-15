import { Box, Flex, Img, Text } from '@chakra-ui/react'
import SedanImage from '../../assets/icon-sedans.svg'
import LuxuryImage from '../../assets/icon-luxury.svg'
import SuvsImage from '../../assets/icon-suvs.svg'
import { Button } from '../Button'

type CardCarProps = {
  type: string;
  description: string;
}

export function CardCar({ type, description }: CardCarProps) {
  
  function handleCardCarColor() {
    
    if (type === 'SEDANS') {
      return 'orange';
    }

    if (type === 'SUVS') {
      return 'cyan';
    }

    return 'darkCyan';
  }

  function handleCarImage() {

    if (type === 'SEDANS') {
      return SedanImage;
    }

    if (type === 'LUXURY') {
      return LuxuryImage;
    }

    return SuvsImage;
  }
  
  return (
    <Flex 
      bg={handleCardCarColor()} 
      gap={5}
      direction='column'       
      w={{base: '80%', md: '60%', lg: '30%', xl: '20%'}}
      h={{base: '70%', md: '40%', lg: '55%'}}             
      borderTopRadius={type === 'SEDANS' ? 5 : 0}
      borderBottomRadius={type === 'LUXURY' ? 5 : 0}
      padding='3rem'
    >
      <Img src={handleCarImage()} w='4rem' h='3rem' />
      <Text fontSize='3xl' color='white' fontWeight='black'>
        {type}
      </Text>
      <Text fontSize='medium' color='white' fontWeight='medium'>
        {description}
      </Text>
      <Box as='section' w={{base: '60%', sm: '40%', md: '30%', lg: '50%'}}>
        <Button title='Learn More' onClick={() => console.log('teste')} type={type} />
      </Box>
    </Flex>
  )
}