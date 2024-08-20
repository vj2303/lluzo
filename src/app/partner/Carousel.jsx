"use client"

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link"

const SalonCrousal = () => {

    const salonGroups = [
        [
            { href: '/salon/BBLUNT', imgSrc: '/luzologo/1.png' },
            { href: '/salon/Bodycraft', imgSrc: '/Logos-Website/2.jpg' }
        ],
        [
            { href: '/salon/Wellness Co', imgSrc: '/luzologo/12.png' },
            { href: '/salon/#', imgSrc: '/Logos-Website/4.png' },
        ],
        [
            { href: '/salon/Toni and Guy', imgSrc: '/luzologo/4.png' },
            { href: '/salon/Juice', imgSrc: '/luzologo/juice.png' },
        ],
        [
            { href: '/salon/Aveda x Nykaa', imgSrc: '/luzologo/11.png' },
            { href: '/salon/JCB (Jean-Claude Biguine)', imgSrc: '/Logos-Website/6.png' },
        ],
        [
            { href: '/salon/Hair Masters', imgSrc: '/Logos-Website/8.png' },
            { href: '/salon/Femina Flaunt', imgSrc: '/Logos-Website/9.png' }
        ],
        [
            { href: '/salon/Elixir Wellness', imgSrc: '/luzologo/10.png' },
            { href: '/salon/Dessange Salon & Spa', imgSrc: '/Logos-Website/11.png' }
        ],
        [
            { href: '/salon/Nailashes', imgSrc: '/Logos-Website/12.png' },
            { href: '/salon/Affinity Elite', imgSrc: '/luzologo/5.png' }
        ],
        [
            { href: '/salon/Looks', imgSrc: '/luzologo/3.png' },
            { href: '/salon/LookWell', imgSrc: '/Logos-Website/15.png' }
        ],
        [
            { href: '/salon/Cut and Style', imgSrc: '/luzologo/6.png' },
            { href: '/salon/Tattva Spas', imgSrc: '/Logos-Website/17.png' }
        ],
        [
            { href: '/salon/Kapils', imgSrc: '/luzologo/2.png'},
            { href: '/salon/Monsoon Salon Pro', imgSrc: '/luzologo/9.png' }
        ],
        [
            { href: '/salon/#', imgSrc: '/luzologo/7.png' },
            { href: '/salon/Tip and Toe', imgSrc: '/luzologo/8.png'}
        ],
        [
            { href: '/salon/Naturals Salon', imgSrc: '/luzologo/14.png' },
            { href: '/salon/Apple The Original', imgSrc: '/luzologo/13.png' }
        ],
        // Add more salon groups here
    ];


    return (
        <div className='  my-[30px] sm:my-[60px] 2xl:max-w-[1300px] xl:max-w-[1200px] lg:max-w-[1000px] sm:mx-auto relative'>
            <h1 className='font-bold px-3 sm:text-[30px] text-[20px]  mb-4 '>700+ Salons | Spas | Dermatologists</h1>
            {/* <div> */}

            <div className='flex gap-[20px]'>
                <button className='prev'><ChevronLeft /></button>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={1}
                    navigation={{ nextEl: ".next", prevEl: ".prev" }}
                    loop={true}

                    modules={[Autoplay, Navigation]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        // When window width is <= 640px (for deskotop devices)
                        640: {
                            slidesPerView: 4,
                        },
                    }}
                >

                    {salonGroups.map((group, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col gap-[20px]'>
                                {group.map((salon, idx) => (
                                    <Link key={idx} href={salon.href}>
                                        <Image src={salon.imgSrc} width={324} height={182} alt='salon' className='sm:aspect-video sm:w-full sm:h-full rounded-md' />
                                    </Link>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            <button className='next'><ChevronRight /></button>
            </div>

            {/* </div> */}
            {/* <div className='flex justify-between  items-center sm:px-[20%] mt-8'> */}

            {/* <div className=' flex flex-row gap-[20px] sm:gap-[100px]'>

<p className='flex gap-[5px]'><Image src="/img/pin.svg" width={20} height={20} alt='img'  />Mumbai</p>
<p className='flex gap-[5px]'><Image src="/img/pin.svg" width={20} height={20} alt='img'  />Pune</p>
<p className='flex gap-[5px]'><Image src="/img/pin.svg" width={20} height={20} alt='img'  />Bangalore</p>
                </div> */}
            {/* </div> */}

        </div>
    )
}

export default SalonCrousal