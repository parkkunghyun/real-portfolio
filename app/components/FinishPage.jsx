import React from 'react'
import { motion } from "motion/react";
import { assets } from '@/assets/assets'
import Image from 'next/image';

const  FinishPage =  ({isDarkMode}) => {
  return (
      <div id="finish" className='flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center'>
          <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                className="my-4"
            >
               
            </motion.div>
          <motion.h3
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='flex items-end gap-2 mb-3 text-xl font-Ovo font-bold md:text-2xl'>
              봐주셔서 감사합니다 :)
          </motion.h3>
         
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{duration: 0.6, delay: 0.7}}
              className='max-w-3xl mx-auto font-Ovo'>AI와 Cloud 기술을 적극적으로 활용해  더 나은 사용자 경험을 제공하기 위해 끊임없이 노력하고 있습니다.</motion.p>
      </div>
)
}

export default FinishPage