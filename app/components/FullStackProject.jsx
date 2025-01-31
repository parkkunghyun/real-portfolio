import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react';
import { FaArrowRight } from "react-icons/fa";



const FullStackProjects = ({ isDarkMode }) => {
    
    return (
    //   id는 문서내 고유한 식별자 역할, 다른곳에서 id를 참조해서 이동가능
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{duration: 1 }}
            id='fullstack' className='w-full px-[12%] py-10 scroll-mt-18'>
            <motion.h4
                initial={{ opacity: 0, y:-20 }}
                whileInView={{opacity: 1, y:0}}
                transition={{duration: 0.5, delay: 0.3 }}
                className='my-2 text-lg text-center font-Ovo'>
                Project
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y:-20 }}
                whileInView={{opacity: 1, y:0}}
                transition={{duration: 0.5, delay: 0.5 }}
                className='text-5xl text-center mt-4  font-Ovo'>Supabase & Firebase
            </motion.h2>

            <motion.h4
                initial={{ opacity: 0, y:-20 }}
                whileInView={{opacity: 1, y:0}}
                transition={{duration: 0.5, delay: 0.3 }}
                className='my-8 text-md text-center font-Ovo'>
                Supabase와 Firebase를 활용한 풀스택 프로젝트를 개발하며, 단순한 UI/UX 구현을 넘어 서비스의 아키텍처와 데이터 흐름을 깊이 이해하게 되었습니다. <br />
                Supabase프로젝트는 Github action + Cloud run으로 CI/CD를 했으며, Firebase 프로젝트의 경우 Firebase Hosting을 이용해 배포했습니다.
            </motion.h4>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{opacity: 1}}
                transition={{ duration: 1, delay: 0.5 }}
                className='w-full mt-8 mx-auto flex flex-col xl:flex-row items-center gap-6'>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className='border-2 rounded-md shadow-black p-2 mt-8 flex flex-col items-center gap-2'
                >
                    <div className="relative w-[350px] h-[350px]">
                        <Image
                            className='rounded-md mb-2 aspect-square'
                            src={"/images/supa-1.png"}
                            alt='supabase todo'
                            width={400}
                            height={200}
                        />
                        <div className="absolute inset-0 p-1 flex items-center justify-center bg-gray-800 bg-opacity-80 text-white text-lg font-bold opacity-0 transition-opacity duration-300 hover:opacity-100">
                            supabase로 데이터를 CRUD하고 React-query로 서버 데이터 상태를 관리하는 TODO 프로젝트입니다. 
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <a href="https://github.com/parkkunghyun/supabase-todo-query" target='blank'
                            className='flex w-[200px] hover:px-12 hover:py-4 duration-300 items-center gap-2 px-10 py-3 text-white bg-black border border-white rounded-full dark:bg-transparent'>
                            <span className='text-sm'>Github Link</span>
                            <Image width={100} height={100} src={"/images/github-mark-white.png"} alt='right arrow'
                                className='w-6 text-white' />
                        </a>
                        <a href="https://supabase-todo-266457465664.us-central1.run.app/" target='blank'
                            className='flex text-sm  items-center hover:shadow-black duration-300 justify-center gap-2 px-4 py-3 bg-white border border-gray-500 rounded-full dark:text-black'
                        >사이트가기</a>
                    </div>
                </motion.div>

                {/* 이미지 드래그앤 드롭 프로젝트 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className='border-2 rounded-md shadow-black p-2 mt-8 flex flex-col items-center gap-2'
                >
                    <div className="relative w-[350px] h-[350px]">
                        <Image
                            className='rounded-md mb-2 aspect-square'
                            src={"/images/supa-2.png"}
                            alt='supabase todo'
                            width={400}
                            height={200}
                        />
                        <div className="absolute inset-0 p-1 flex items-center justify-center bg-gray-800 bg-opacity-80 text-white text-lg font-bold opacity-0 transition-opacity duration-300 hover:opacity-100">
                        React Drag & Drop을 활용하여 이미지를 Supabase Storage에 업로드하고,  <br />서버 데이터를 React Query로 효율적으로 관리하였습니다.  <br /> <br /> 또한, useMemo를 사용하여 검색 성능을 최적화하였습니다.
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <a href="https://github.com/parkkunghyun/imageUploadTosupabase" target='blank'
                            className='flex w-[200px] hover:px-12 hover:py-4 duration-300 items-center gap-2 px-10 py-3 text-white bg-black border border-white rounded-full dark:bg-transparent'>
                            <span className='text-sm'>Github Link</span>
                            <Image width={100} height={100} src={"/images/github-mark-white.png"} alt='right arrow'
                                className='w-6 text-white' />
                        </a>
                        <a href="https://mini-image-266457465664.us-central1.run.app/" target='blank'
                            className='flex text-sm  items-center hover:shadow-black duration-300 justify-center gap-2 px-4 py-3 bg-white border border-gray-500 rounded-full dark:text-black'
                        >사이트가기</a>
                    </div>
                </motion.div>

                {/* 파이어베이스 파일 드롭 프로젝트 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className='border-2 rounded-md shadow-black p-2 mt-8 flex flex-col items-center gap-2'
                >
                    <div className="relative w-[350px] h-[360px]">
                        <Image
                            className='rounded-md mb-2 aspect-square'
                            src={"/images/fire-1.png"}
                            alt='supabase todo'
                            width={400}
                            height={200}
                        />
                        <div className="absolute inset-0 p-1 flex items-center justify-center bg-gray-800 bg-opacity-80 text-white text-lg font-bold opacity-0 transition-opacity duration-300 hover:opacity-100">
                        구글 드라이브와 같은 직관적인 파일 저장 시스템에서 영감을 받아, Firebase 기반의 개인화된 파일 관리 시스템을 개발했습니다. <br /> <br />
                        Firebase OAuth, Firestore, Storage 등 다양한 Firebase 기능을 적극 활용하여 효율적인 데이터 관리와 보안을 강화했습니다. 
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <a href="https://github.com/parkkunghyun/fileupload-firebase" target='blank'
                            className='flex w-[200px] hover:px-12 hover:py-4 duration-300 items-center gap-2 px-10 py-3 text-white bg-black border border-white rounded-full dark:bg-transparent'>
                            <span className='text-sm'>Github Link</span>
                            <Image width={100} height={100} src={"/images/github-mark-white.png"} alt='right arrow'
                                className='w-6 text-white' />
                        </a>
                        <a href="https://fir-skilup.web.app/" target='blank'
                            className='flex text-sm items-center hover:shadow-black duration-300 justify-center gap-2 px-4 py-3 bg-white border border-gray-500 rounded-full dark:text-black'
                        >사이트가기</a>
                    </div>
                </motion.div>


            </motion.div>
    </motion.div>
  )
}

export default FullStackProjects