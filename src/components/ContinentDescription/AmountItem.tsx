import { Flex, Heading, Text } from '@chakra-ui/react';

type AmountItemProps = {
  title: string;
  amount: number;
}

export function AmountItem({ title, amount }: AmountItemProps) {
  return (
    <Flex 
      flexDirection='column' 
      justifyContent='center' 
      alignItems='center'
      mt={['4', '0']}
    >
      <Heading color='highlight'>{amount}</Heading>
      <Text fontSize={['xl', '2xl']} fontWeight='semibold'>{`${title} ${amount > 100 ? '+ 100' : ''}`}</Text>
    </Flex>
  )
}