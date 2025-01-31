import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
      <div className='mt-20'>
          <div className='text-center sm:flex items-center justify-between border-gray-400 border-t mx-[10%] mt-12 py-6'>
              <p>Copyright 2025. pkh all rights reserved. </p>
              <div className='hidden lg:block'>
                  <p className='text-sm dark:text-gray-400  text-gray-600'>next js, framer-motion, Tailwind CSS 기반으로 제작된 사이트입니다.</p>
                  <p className='text-sm dark:text-gray-400  text-gray-600'>github action과 cloud run을 활용해 CI/CD 파이프라인을 만들어 배포했습니다.</p>
              </div>
              <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                  <li><a target='_blank' href="https://github.com/parkkunghyun">GitHub</a></li>
                  <li><a target='_blank' href="https://velog.io/@rudgus/posts">Velog</a></li>
              </ul>
          </div>
    </div>
  )
}

export default Footer