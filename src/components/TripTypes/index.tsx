import { SimpleGrid } from '@chakra-ui/react';
import cocktailImg from '../../../public/assets/cocktail.svg';
import buildingImg from '../../../public/assets/building.svg';
import earthImg from '../../../public/assets/earth.svg';
import museumImg from '../../../public/assets/museum.svg';
import surfImg from '../../../public/assets/surf.svg';
import { TripType } from './TripType';

export function TripTypes() {
  return (
    <SimpleGrid columns={5} minChildWidth='163px'>
      <TripType image={cocktailImg} title='vida noturna'/>
      <TripType image={surfImg} title='praia'/>
      <TripType image={buildingImg} title='moderna'/>
      <TripType image={museumImg} title='clássico'/>
      <TripType image={earthImg} title='e mais...'/>
    </SimpleGrid>
  );
}