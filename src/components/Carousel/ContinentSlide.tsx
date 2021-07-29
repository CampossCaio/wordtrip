import { Flex, Heading, Text, Image, Link as ChackraLink } from '@chakra-ui/react';
import Link from 'next/link';

type ContinentSlideProps = {
  image: string;
  title: string;
  description: string;
}

export function ContinentSlide({image, title, description }: ContinentSlideProps ) {
  return (
    <Link href='/continent/hsushu' passHref>
      <ChackraLink>
       <Flex 
         h={['200','450']}
       >
         <Image src={image} alt="hsuhsuh" boxSize="100%" objectFit="cover"/>
            <Flex 
              w='100%'
              h='100%' 
              bg='semiTransparent' 
              position='absolute'
              alignItems='center'
              justifyContent='center'
              flexDirection='column'
              color='white'
            >
            <Heading as='h1' fontSize={['2xl', '5xl']} textAlign='center'>
              {title}
            </Heading>
            <Text mt='4' fontSize={['sm', '2xl']} fontWeight='bold' color='#DADADA' >{description}</Text>
          </Flex>
        </Flex>
       </ChackraLink>
    </Link>
  )
}