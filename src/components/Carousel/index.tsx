import { Box } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

import { ContinentSlide } from './ContinentSlide';

export function Carousel() {
  return (
    <Box>
       <Swiper
         navigation
         pagination
      >
        <SwiperSlide > 
          <ContinentSlide 
            image='https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' 
            title='Europa' 
            description='O continente mais antigo.' 
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentSlide
            image='https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
            title='Europa' 
            description='O continente mais antigo.' 
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentSlide
            image='https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
            title='Europa' 
            description='O continente mais antigo.' 
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}