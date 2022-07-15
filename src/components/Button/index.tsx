import { Flex, Text } from "@chakra-ui/react";

type ButtonProps = {
  title: string;
  onClick: () => void;
  type: string;
}

export function Button({ title, onClick, type }: ButtonProps) {
  function handleCardCarColor() {
    
    if (type === 'SEDANS') {
      return 'orange';
    }

    if (type === 'SUVS') {
      return 'cyan';
    }

    return 'darkCyan';
  }

  return (
    <Flex 
      align='center'
      p={2}      
      justify='center' 
      borderRadius={25} 
      bg='white' 
      onClick={() => onClick()}
    >
      <Text fontSize='medium' color={handleCardCarColor()}>
        {title}
      </Text>
    </Flex>
  )
}