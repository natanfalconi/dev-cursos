import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import "swiper/css";
import "swiper/css/pagination";

interface Props {
  componentList: {
    component: ReactNode;
  }[];
  loop: boolean;
  nameCarousel: string;
  spaceBetween: number;
  swiperClassName: string;
  pagination?: boolean;
  classButtonPrev?: string;
  classButtonNext?: string;
  widthSwiper?: string
}
const CarouselPrevNextCard = (props: Props) => {
  const { componentList, loop, nameCarousel, spaceBetween, swiperClassName, widthSwiper } =
    props;
  return (
    <>
      <Swiper
        loop={loop}
        className={swiperClassName}
        slidesPerView="auto"
        centeredSlides={true}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        spaceBetween={spaceBetween}
        grabCursor={true}
        pagination={{
          el: '.carousel_prev_next_card'

        }}
      >
        {componentList.map((item, key) => (
          <SwiperSlide key={`${key}__${nameCarousel}__swiper__prev__next__card`} style={{ width: `${widthSwiper}%`, padding: '0', background: 'none', height: 'auto' }}>
            {item.component}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='carousel_prev_next_card' style={{ textAlign: 'center', marginTop: '8px' }} />
    </>
  );
};

export default CarouselPrevNextCard;
