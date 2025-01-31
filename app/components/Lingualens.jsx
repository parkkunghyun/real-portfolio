import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react';
import { FaArrowRight } from "react-icons/fa";

const images = [
    '/images/ling-1.png',
    '/images/ling-2.png',
    '/images/ling-3.png',
  ];

const Lingualens = ({ isDarkMode }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 2초마다 변경

    return () => clearInterval(interval);
  }, []);
    
    return (
    //   id는 문서내 고유한 식별자 역할, 다른곳에서 id를 참조해서 이동가능
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{duration: 1 }}
            id='lingualens' className='w-full px-[12%] py-10 scroll-mt-18'>
            <motion.h4
                            initial={{ opacity: 0, y:-20 }}
                            whileInView={{opacity: 1, y:0}}
                            transition={{duration: 0.5, delay: 0.3 }}
                            className='mb-2 text-lg text-center font-Ovo'>
                            Project
                        </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y:-20 }}
                whileInView={{opacity: 1, y:0}}
                transition={{duration: 0.5, delay: 0.5 }}
                className='text-5xl text-center mt-4  font-Ovo'>Lingualens
            </motion.h2>

            <motion.h4
                initial={{ opacity: 0, y:-20 }}
                whileInView={{opacity: 1, y:0}}
                transition={{duration: 0.5, delay: 0.3 }}
                className='my-8 text-lg text-center font-Ovo'>
                LinguaLens는 텍스트, 이미지, 음성을 실시간으로 번역하고 자연스러운 음성으로 전달하는 AI 기반 번역
                플랫폼입니다.
            </motion.h4>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{opacity: 1}}
                transition={{duration: 1, delay: 0.5 }}
                className='flex flex-col xl:flex-row items-center gap-8'
            >
                <Image 
                    src={images[currentImageIndex]} 
                    alt='Changing Image' 
                    width={600} // 원하는 크기로 조정
                    height={400} 
                    className="rounded-lg shadow-lg"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1, delay: 0.5 }}
                    className='flex flex-col gap-2 '
                >
                    <h2 className='font-bold text-xl'>프로젝트 설명</h2>
                    <p>Google Cloud Translate API, TTS (Text-to-Speech)  그리고 OCR 기술을 이용해 이미지 내의 텍스트를 추출하거나 다양한 언어 번역 및 음성 번역을 해주는 서비스입니다.</p>

                    <div className='flex flex-col gap-2'>
                    <h2 className='font-bold mt-4 text-xl'>주요기능 및 특징</h2>
                    <p className='text-sm'>서버사이드에서 Google API를 호출하여 클라이언트와의 분리된 구조로 보안을 강화하고, API 호출을 최적화합니다.</p>
                    <p className='text-sm'>Tanstack Query를 사용해 번역 API 호출을 효율적으로 관리하고, 에러 처리를 간편하게 처리하여 사용자 경험을 개선합니다.</p>
                    <p className='text-sm'>FastAPI로 이미지 분석 및 번역 처리 백엔드를 구축하고, Cloud Run을 통해 필요 시 서버를 실행하여 비용 효율적인 서비스를 제공합니다.</p>
                    <p className='text-sm'>GitHub Actions를 사용하여 프론트엔드를 자동 빌드하고, Cloud Run에 배포하여 지속적인 배포 환경을 구현합니다.</p>
                    </div>
                </motion.div>
            </motion.div>

            
            <div className='flex flex-col items-center gap-8 mt-8 md:flex-row'>
                <motion.a
                    target='blank'
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{duration: 0.6, delay: 1}}
                    className='flex w-[300px] hover:px-12 hover:py-4  items-center hover:scale-110 duration-200  gap-2 px-10 py-3 text-white bg-black border border-white rounded-full dark:bg-transparent'
                    href="https://github.com/parkkunghyun/translate-service-gcp">
                        <span>Github에서 자세히 보기</span>
                        <Image width={150} height={100} src={"/images/github-mark-white.png"} alt='right arrow'
                        className='w-6  text-white' />
                </motion.a>
                <motion.a
                    target='blank'
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{duration: 0.6, delay: 1}}
                    className='flex items-center hover:shadow-black duration-300 justify-center gap-2 px-10 py-3 bg-white border border-gray-500 rounded-full dark:text-black'
                    href="https://lingualens-266457465664.us-central1.run.app/">
                        <span className='font-bold'>사이트 가기</span>
                        <FaArrowRight className={`${isDarkMode ? "text-black" : "text-black"} text-2xl`} />
                </motion.a>
            </div>
   
    </motion.div>
  )
}

export default Lingualens