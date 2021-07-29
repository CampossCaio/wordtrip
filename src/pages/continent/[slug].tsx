import { Image, Box, Heading, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { CityCard } from '../../components/CityCard';
import { Header } from "../../components/Header";
import { ContinentDescription } from '../../components/ContinentDescription';


export default function Continent() {
 
  return (
   <>
    <Header/>
     <Box h={[200, 500]}>
      <Image 
        src='https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80' 
        alt="hsuhsuh" 
        boxSize="100%"
        objectFit="cover"
      />
      <Heading mt='-32' ml='32' color='gray.50'>Europa</Heading>
     </Box>

     <Box mt='20' px={['4', '32']}>
       <ContinentDescription
         citiesAmount={50}
         countriesAmount={50}
         description="A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste"
         languagesAmount={50}
       />

       <Box py='20'>
         <Heading fontWeight='medium'>Cidades + 100</Heading>
         <SimpleGrid py='10' columns={4} gap='9' minChildWidth='256px'>
          <CityCard 
            cityName="Londres"
            country="Reino Unido"
            flagUrl="https://assets.wprock.fr/emoji/joypixels/512/1f1ec-1f1e7.png"
            imageUrl="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"
          />

          <CityCard 
            cityName="Londres"
            country="Reino Unido"
            flagUrl="https://assets.wprock.fr/emoji/joypixels/512/1f1ec-1f1e7.png"
            imageUrl="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"
           />
          <CityCard 
            cityName="Londres"
            country="Reino Unido"
            flagUrl="https://assets.wprock.fr/emoji/joypixels/512/1f1ec-1f1e7.png"
            imageUrl="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"
          />
          <CityCard 
            cityName="Londres"
            country="Reino Unido"
            flagUrl="https://assets.wprock.fr/emoji/joypixels/512/1f1ec-1f1e7.png"
            imageUrl="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"
          />
         </SimpleGrid>
       </Box>
     </Box>
   </>
  )
} 