import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react';

const About = ({isDarkMode}) => {
    return (
    //   id는 문서내 고유한 식별자 역할, 다른곳에서 id를 참조해서 이동가능
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{duration: 1 }}
            id='about' className='w-full px-[12%] py-10 scroll-mt-18'>
            <motion.h4
                initial={{ opacity: 0, y:-20 }}
                whileInView={{opacity: 1, y:0}}
                transition={{duration: 0.5, delay: 0.3 }}
                className='mb-2 text-lg text-center font-Ovo'>
                Introduction
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y:-20 }}
                whileInView={{opacity: 1, y:0}}
                transition={{duration: 0.5, delay: 0.5 }}
                className='text-5xl text-center font-Ovo'>About me
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, }}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8 }}
                className='flex flex-col items-center w-full gap-20 my-20 lg:flex-row'>
                <motion.div
                    initial={{ opacity: 0, scale:0.9 }}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 1 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={"/images/title-2.png"} alt='user' width={300} height={200}
                        className='w-full rounded-3xl mt-20' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.6, delay: 0.8 }}
                    className='flex-1 '>
                    <p
                        className='w-full mb-8 font-Ovo'
                    >스스로 학습의 방향을 주도적으로 설정하며, 원하는 재식을 배우기 위해 적극적으로 찾아다니며 배웠습니다. <br />
                        배운 내용을 단순히 익히는 데 그치지 않고, 대회 활동에 적용하거나 후배들에게 공유하며 지식을  체계적으로 내재화했습니다.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.8, delay: 1 }}
                        className='grid max-w-3xl grid-cols-1 gap-8 w-full sm:grid-cols-3'>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className='dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 border-[0.5px] border-gray-400 cursor-pointer hover:shadow-black rounded-xl p-4 hover:bg-lightHover hover:-translate-y-1 duration-500'
                        >
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>실패에서 배우는 자세</h3>
                            <p className='text-sm text-gray-600 dark:text-white/80'>
                            실패를 성장의 기회로 삼아 부족한 점을 인정하고 보완하며, <br /> <br />끝까지 해결해내는 태도를 지니고 있습니다.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className='dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 border-[0.5px] border-gray-400 cursor-pointer hover:shadow-black rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500'
                        >
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>AI와 Cloud를 적극 활용</h3>
                            <p className='text-sm text-gray-600 dark:text-white/80'>
                            반응형 UI와 AI 기술로 편리한 사용자 경험을 제공하며, <br />  <br />Cloud 기반 최적화된 배포로 빠르고 효율적인 서비스를 구현했습니다.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className='dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 border-[0.5px] border-gray-400 cursor-pointer hover:shadow-black rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500'
                        >
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>지속적 개선과 복습</h3>
                            <p className='text-sm text-gray-600 dark:text-white/80'>
                            깊이 있는 기술 이해와 코드 최적화를 위해 고민하며, <br /> <br /> 블로그 정리를 통해 지식을 내재화하고 개발 역량을 향상시킵니다
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
    </motion.div>
  )
}

export default About