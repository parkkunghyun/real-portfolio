import React from 'react'
import { motion } from "motion/react";
import { assets } from '@/assets/assets'
import Image from 'next/image';

const Header =  ({isDarkMode}) => {
  return (
      <div id='home' className='flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center'>
          <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                className="my-4"
            >
                <Image
                    src={"/images/title.jpeg"}
                    alt="user"
                    width={256} // width와 height를 동일하게 설정
                    height={256}
                    className="w-64 h-64 rounded-full object-cover" // w-64, h-64, rounded-full을 추가하여 원형 이미지
                />
            </motion.div>
          <motion.h3
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='flex items-end gap-2 mb-3 text-xl font-Ovo font-bold md:text-2xl'>Hi! I'm 박경현<Image src={assets.hand_icon} alt='hand-icon' className='w-6' />
          </motion.h3>
          <motion.p
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{duration: 0.6, delay: 0.7}}
              className='max-w-3xl mx-auto font-Ovo'>
              단순히 화면 구현에 그치지 않고, 유저 입장에서 UI와 UX를 <br />
              고려하며 능동적으로 개선 방안을 제안하고 수정하는 박경현입니다.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{duration: 0.6, delay: 0.7}}
            className='max-w-3xl mx-auto font-Ovo'>AI와 Cloud 기술을 적극적으로 활용해  더 나은 사용자 경험을 제공하기 위해 끊임없이 노력하고 있습니다.</motion.p>

        <div className='flex flex-col  items-center gap-8 mt-8 sm:flex-row'>
              <motion.a
                  target='blank'
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{duration: 0.6, delay: 1}}
                    className='flex items-center hover:px-12 hover:py-4 duration-300  gap-2 px-10 py-3 text-white bg-black border border-white rounded-full dark:bg-transparent'
                    href="https://github.com/parkkunghyun">
                  <span>Github 둘러보기</span>
                  <Image width={150} height={100} src={"/images/github-mark-white.png"} alt='right arrow'
                className='w-6  text-white' />
              </motion.a>
              
            <motion.a
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{duration: 0.6, delay: 1.2}}
                href="/resume.pdf" download
                className='flex hover:shadow-black duration-300 items-center gap-2 px-10 py-3 bg-white border border-gray-500 rounded-full dark:text-black'>my resume <Image src={assets.download_icon} alt='resume'
                className='w-4' />
            </motion.a>
    </div>
</div>
)
}

export default Header