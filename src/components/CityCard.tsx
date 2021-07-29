import {Box, Image, Flex, Text } from '@chakra-ui/react';

type CityCardProps = {
  imageUrl: string;
  flagUrl: string;
  cityName: string;
  country: string;
}

export function CityCard({ imageUrl, flagUrl, cityName, country }: CityCardProps) {
  return(
    <Box maxWidth='256px' width='100%' margin='auto'>
    <Box height={173}>
    <Image 
       src={imageUrl} 
       alt={cityName} 
       boxSize="100%"
       objectFit="cover"
     />
    </Box>
     <Flex bg='white' p='4' alignItems='center' justifyContent='space-between'>
       <Box>
         <Text fontSize='xl' fontWeight='semibold'>{cityName}</Text>
         <Text mt='2' color='gray.450'>{country}</Text>
       </Box>
       <Image 
         src={flagUrl}
         boxSize="30px"
         objectFit="cover"
         borderRadius='full'
       />
     </Flex>
  </Box> 
  )
}