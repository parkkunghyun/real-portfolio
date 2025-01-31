import React from 'react'
import { motion } from "motion/react";
import { assets } from '@/assets/assets'
import Image from 'next/image';

const Finish = () => {
    return (
        <div id='finish' className='flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center'>
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
                className='flex items-end gap-2 mb-3 text-2xl font-Ovo font-bold md:text-4xl'>봐주셔서 감사합니다 :)<Image src={assets.hand_icon} alt='hand-icon' className='w-6' />
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{duration: 0.6, delay: 0.7}}
              className='max-w-3xl mx-auto font-Ovo'>능동적이고 긍정적인 태도로, 팀원들과 협력하여 목표를 달성하는 것을 즐깁니다.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{duration: 0.6, delay: 0.7}}
              className='max-w-3xl mx-auto font-Ovo'>더 나은 가치를 창출하는 인재로 성장하기 위해 계속 발전해 나가겠습니다.
            </motion.p>
        </div>
    )
}
export default Finish