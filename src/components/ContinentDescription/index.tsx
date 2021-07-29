import { Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { AmountItem } from './AmountItem';

type ContinentDescriptionProps = {
  description: string;
  countriesAmount: number;
  languagesAmount: number;
  citiesAmount: number;
}

export function ContinentDescription({ 
  description,  
  countriesAmount,
  languagesAmount,
  citiesAmount 
}: ContinentDescriptionProps) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex flexDirection={`${isWideVersion ? 'row' : 'column'}`}>
      <Text flex='1' fontSize={['xl', '2xl']} textAlign='justify'>
      {description}
      </Text>
      <Flex flex='1'alignItems='center' justifyContent='space-between' px={['0','10']}>
        <AmountItem amount={countriesAmount} title='países'/>
        <AmountItem amount={languagesAmount} title='línguas'/>
        <AmountItem amount={citiesAmount} title='cidades'/>
      </Flex>
   </Flex>
  )
}