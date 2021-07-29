import { Flex, } from '@chakra-ui/react';
import Image from 'next/image';
import logoImg from '../../public/assets/logo.svg';

export function Header() {
  return (
    <Flex
      as='header'
      h='24'
      align='center'
      justifyContent='center'
    >
      <Image
        height={40}
        width={184}
        src={logoImg}
        alt='worldtrip'
      />
    </Flex>
  )
}