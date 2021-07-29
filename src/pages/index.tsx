import { Center, Divider, Box, Heading } from '@chakra-ui/react';
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TripTypes } from "../components/TripTypes";
import { Carousel } from '../components/Carousel';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Box px={['4', '32']} mt={['4', '20']} mb={['7', '14']} alignItems='cente'>
        <TripTypes />
        <Center >
          <Divider w='20' color='gray.600' opacity={1} my={['8', '20']}  />
        </Center>
        <Heading
          mb='5'
          fontWeight='400' 
          textAlign='center'
          fontSize={['xl', '4xl']}
        >
          Vamos nessa ?<br/>
          Então escolha seu continente
        </Heading>
        <Carousel/>
      </Box>
    </>
  )
}
