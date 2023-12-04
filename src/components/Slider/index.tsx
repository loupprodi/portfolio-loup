
import {Swiper, SwiperProps } from "swiper/react";
import { ReactNode } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Slider.css'

interface SliderProps {
    settings: SwiperProps
    children: ReactNode
}

export const Slider = ({settings, children}: SliderProps) => {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
        {children}
    </Swiper>
  );
};
