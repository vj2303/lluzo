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
            { href: '/salon/BBLUNT', imgSrc: '/logos_salons/BBlunt.jpg' },
            { href: '/salon/Bodycraft', imgSrc: '/logos_salons/Bodycraft.png' }
        ],
        [
            { href: '/salon/Wellness Co', imgSrc: '/luzologo/12.png' },
            { href: '/salon/enrich', imgSrc: '/logos_salons/enrich-logo-1.png'},
        ],
        [
            { href: '/salon/Toni and Guy', imgSrc: '/luzologo/4.png' },
            { href: '/salon/Juice', imgSrc: '/logos_salons/Juice_updated.png'},
        ],
        [
            { href: '/salon/Aveda x Nykaa', imgSrc: '/logos_salons/Aveda_Nykaa.png' },
            { href: '/salon/JCB (Jean-Claude Biguine)', imgSrc: '/logos_salons/jcb_updated.png' },
        ],
        [
            { href: '/salon/Hair Masters', imgSrc: '/logos_salons/hair_master_logo-removebg-preview.png'},
            { href: '/salon/Femina Flaunt', imgSrc: '/logos_salons/Femina_Flaunt.png'}
        ],
        [
            { href: '/salon/Elixir Wellness', imgSrc: '/logos_salons/Elixir_Wellness.png'},
            { href: '/salon/Dessange Salon & Spa', imgSrc: '/Logos-Website/11.png' }
        ],
        [
            { href: '/salon/Nailashes', imgSrc: '/logos_salons/nailashes_updated.png' },
            { href: '/salon/Affinity Elite', imgSrc: '/logos_salons/affinity_updated.png' }
        ],
        [
            { href: '/salon/Looks', imgSrc: '/logos_salons/Looks.jpg'},
            { href: '/salon/LookWell', imgSrc: '/logos_salons/lookwell.png' }
        ],
        [
            { href: '/salon/Cut and Style', imgSrc: '/luzologo/6.png' },
            { href: '/salon/Tattva Spas', imgSrc: '/Logos-Website/17.png' }
        ],
        [
            { href: '/salon/Kapils', imgSrc: '/logos_salons/kapils-salon-and-academy-pune-logo.png'},
            { href: '/salon/Monsoon Salon Pro', imgSrc: '/luzologo/9.png' }
        ],
        [
            { href: '/salon/#', imgSrc: '/luzologo/7.png' },
            { href: '/salon/Tip and Toe', imgSrc: '/logos_salons/tiptoe.png'}
        ],
        [
            { href: '/salon/Naturals Salon', imgSrc: '/logos_salons/naturals.jpg' },
            { href: '/salon/Apple The Original', imgSrc: '/logos_salons/apple_updated2.png' }
        ],
        // Add more salon groups here
    ];


    return (
        <div className='  my-[30px] sm:my-[60px] 2xl:max-w-[1300px] xl:max-w-[1200px] lg:max-w-[1000px] sm:mx-auto relative'>
            <h1 className='font-bold px-3 text-[30px]  mb-4 text-[#051036] '>700+ Salons | Spas | Dermatologists</h1>
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