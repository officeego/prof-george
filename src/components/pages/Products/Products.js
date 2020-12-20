import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjFour} from './Data'
// import Pricing from '../../Pricing'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import '../../../App.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);


const data = [
    {
       id: 1,
       img: 'images/svg-2.svg',
       username: 'Newsletter',
       testimonial: 'Create your own topics Filter by keywords and Technology References Customize views by source, relevance, or date Topics'
    },
    {
        id: 1,
        img: 'images/svg-3.svg',
        username: 'Topics',
        testimonial: 'Build your own Newsletter Set your technology (feed) alerts'
     },
     {
        id: 1,
        img: 'images/svg-4.svg',
        username: 'Communication',
        testimonial: 'how to communicate your deck to the right investor while we provide you with the appropriate feedback.'
     },
     {
        id: 1,
        img: 'images/svg-5.svg',
        username: 'Marketplace',
        testimonial: 'Helps you get started in developing a customized innovation roadmap or program based on your needs',
     },
     {
        id: 1,
        img: 'images/svg-6.svg',
        username: 'Diagnostic',
        testimonial: 'An assessment that provides an initial multidimensional  view of the current innovation status and organizational personal'
     },
     {
         id: 1,
         img: 'images/svg-7.svg',
         username: 'Trendy Topics',
         testimonial: 'Curated news platform for customized and selected feeds. Build your own Newsletter and set your technologies and innovation alerts'
      },
      {
         id: 1,
         img: 'images/svg-8.svg',
         username: 'Surveillance',
         testimonial: 'Detect great opportunities for technological innovation and new ideas that facilitate an improvement of products and services'
      },
      {
         id: 1,
         img: 'images/svg-1.svg',
         username: 'VALUES',
         testimonial: 'Be proactive; Focus on results and Stay Agile, so you can seek and provide feedback, take smart decisions and remain responsive to change.',
      }
]

function Products() {
    return (
        <>
           <HeroSection {...homeObjFour} />
           <div className="App">
               <h1>Strategic Planning</h1>
    <Swiper
    effect="fade"
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map( user => (
          <SwiperSlide key={user.id} className="slide">
              <div className="slide-content">
                  <div className="user-image">
                      <img src={user.img} alt="" />
                   </div>
            <h5> {user.username} </h5>
             <p> " <i>{user.testimonial}</i> "</p>
              </div>
          </SwiperSlide>
      ))}
    </Swiper>
    </div>
        </>
    )
}

export default Products
