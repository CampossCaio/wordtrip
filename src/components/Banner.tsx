import { Flex, } from '@chakra-ui/react';
import Image from 'next/image';
import bannerImg from '../../public/assets/banner.svg';

export function Banner() {
  return (
    <Flex>
      <Image
        src={bannerImg}
        alt='worldtrip'
      />
    </Flex>
  )
}