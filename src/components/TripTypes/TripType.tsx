import { Flex, Text, useBreakpointValue, Circle } from '@chakra-ui/react';
import Image from 'next/image';

type TripTypeProps = {
  title: string;
  image: any;
}

export function TripType({ title, image }: TripTypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      flexDirection={['row', 'column']}
    >
      { isWideVersion 
        ? (<Image src={image} />)
        : (<Circle size={3} bg='highlight' mt='6'mr='4'/>)
      }
      <Text
        fontWeight='600'
        fontSize={['xl', '2xl']}
        mt='6'
      >
       {title}
      </Text>
    </Flex>
  );
}