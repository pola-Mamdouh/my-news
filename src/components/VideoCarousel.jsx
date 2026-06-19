import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const videos = [
  { image: '/images/picture-13.jpg' },
  { image: '/images/picture-17.jpg' },
  { image: '/images/picture-16.jpg' },
  { image: '/images/picture-15.jpg' },
  { image: '/images/picture-14.jpg' },
  { image: '/images/picture-11.jpg' },
]

const slideTitle = 'لوريوم أيكسسيبتيور الأحمد نص'

export default function VideoCarousel() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={30}
      autoplay={true}
      loop={true}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      breakpoints={{
        992: { slidesPerView: 3 },
      }}
      className="swiper"
    >
      {videos.map((v, i) => (
        <SwiperSlide key={i}>
          <Link to="/article" className="block text-black no-underline">
            <div className="relative">
              <img src={v.image} alt="video" className="w-full object-cover" style={{ maxHeight: 250 }} />
              <i className="fa-solid fa-play absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-6xl text-white pointer-events-none"></i>
            </div>
            <div className="mt-7 text-center">
              <h5 className="text-white text-lg">{slideTitle}</h5>
            </div>
          </Link>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  )
}
