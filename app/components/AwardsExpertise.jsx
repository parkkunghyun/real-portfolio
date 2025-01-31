import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react';
import { GiCalendarHalfYear } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";

const AwardsExpertise = ({isDarkMode}) => {
    return (
        <motion.div id='awardsexpertise' className='w-full flex flex-col items-center px-[12%] py-10 scroll-mt-18 mt-20'>
          <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='text-4xl font-bold text-center font-Ovo mb-4'
          >
              수상과 Experience 그리고 Skill & Tools
          </motion.h2>
          
            <motion.div className='mt-8 flex flex-col lg:flex-row w-full justify-around items-center gap-8'>
              <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='flex flex-col'
                    >
                  <h4 className='font-bold text-2xl mb-2 flex items-center gap-2'>
                      <Image src={"/images/award.png"} alt='awards' width={40} height={40} /> Awards</h4>
                  <div className='flex flex-col ml-4'>
                      <p className='flex items-center gap-1 font-bold mt-2'>
                          <GiCalendarHalfYear className='text-2xl' /> 2021년
                      </p>
                      <span className='ml-6'>전남 디지털 격차 아이디어 공모전 장려상 수상</span>
                      <span className='ml-6'>조선대학교 알고리즘 대회 금상</span>

                      <p className='flex items-center gap-1 font-bold mt-2'>
                          <GiCalendarHalfYear className='text-2xl' /> 2022년
                      </p>
                      <span className='ml-6'>전남대학교 지역사회혁신 AI 클라우드 경진대회 은상</span>
                      <span className='ml-6'>조선대학교 IT 페스티벌 아이디어 대회 금상</span>

                      <p className='flex items-center gap-1 font-bold mt-2'>
                          <GiCalendarHalfYear className='text-2xl' /> 2023년
                      </p>
                      <span className='ml-6'>Wemade 블록체인 해커톤 우수상 수상</span>
                      <span className='ml-6'>어부바 창업 아이디어 경진대회 우수상</span>
                      <p className='flex items-center gap-1 font-bold mt-2'>
                          <GiCalendarHalfYear className='text-2xl' /> 2024년
                      </p>
                      <span className='ml-6'>지역문제 해결 창업아이디어 공모전 대상</span>
                      <span className='ml-6'>전국 대학생 SW 창업 아이디어톤 장려상</span>
                      <span className='ml-6'>Google AI 융합혁신 기술대회 인기상</span>
                  </div>
                </motion.div>
                

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='flex flex-col '
                >
                    <h4 className='font-bold text-2xl mb-2 flex items-center gap-2'>
                        <Image src={"/images/experience.png"} alt='awards' width={40} height={40} /> Experience
                    </h4>
                    <div className='flex flex-col ml-4'>
                        <p className='flex items-center gap-1 font-bold mt-2'>
                            <BiFoodMenu className='text-2xl' /> DEVSIGN(조선대 IT 동아리)
                        </p>
                        <span className='ml-6'>2018.06 ~ 2022.03</span>
                        <p className='flex items-center gap-1 font-bold mt-2'>
                            <BiFoodMenu className='text-2xl' /> 광주ICT이노베이션스퀘어 블록체인 수업
                        </p>
                        <span className='ml-6'>2021.07 ~ 2021.08</span>
                        <p className='flex items-center gap-1 font-bold mt-2'>
                            <BiFoodMenu className='text-2xl' /> 구름 쿠버네티스 전문가 양성 과정
                        </p>
                        <span className='ml-6'>2022.07 ~ 2022.11</span>
                        <p className='flex items-center gap-1 font-bold mt-2'>
                            <BiFoodMenu className='text-2xl' /> 전남대학교 네이버클라우드 AI-중급심화과정
                        </p>
                        <span className='ml-6'>2022.12.02 - 2022.12.06</span>
                        <p className='flex items-center gap-1 font-bold mt-2'>
                            <BiFoodMenu className='text-2xl' /> 42Seoul
                        </p>
                        <span className='ml-6'>2023.07 ~ 24.02</span>
                        <p className='flex items-center gap-1 font-bold mt-2'>
                            <BiFoodMenu className='text-2xl' /> 구글 CLOUD AI 인재양성 프로그램 
                        </p>
                        <span className='ml-6'>2024.06 ~ 2024.08</span>
                    </div>
                </motion.div>
                

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className='flex flex-col mt-4'
                >
                    <h4 className='font-bold text-2xl m-2 flex items-center gap-2'>
                        <Image src={"/images/skill.png"} alt='awards' width={40} height={40} /> Skill & Tools
                    </h4>

                    <div>
                        <h2 className='font-bold my-2'>Frontend</h2>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={"/images/icons/icon_html.svg"} alt='html' width={25} height={20} />
                            </div>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={"/images/icons/icon_css.svg"} alt='html' width={25} height={20} />
                            </div>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={"/images/icons/icon_javascript.svg"} alt='html' width={40} height={20} />
                            </div>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={"/images/icons/icon_react.svg"} alt='html' width={25} height={20} />
                            </div>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={isDarkMode ? "/images/icons/nextjs.svg" : "/images/icons/icon_nextjs.svg"} alt='html' width={30} height={20} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='font-bold my-2'>Backend</h2>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={"/images/icons/icon_nodejs.svg"} alt='html' width={25} height={20} />
                            </div>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={"/images/icons/fastApi.svg"} alt='html' width={30} height={20} />
                            </div>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={"/images/icons/icon_firbase.svg"} alt='html' width={30} height={20} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='font-bold my-2'>Database</h2>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={"/images/icons/icon_mongodb.png"} alt='html' width={16} height={16} />
                            </div>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={"/images/icons/icon_mysql.png"} alt='html' width={40} height={20} />
                            </div>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={"/images/icons/icon_supabase.svg"} alt='html' width={30} height={20} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='font-bold my-2'>DevOps</h2>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={"/images/icons/icon_cloudrun.svg"} alt='html' width={30} height={16} />
                            </div>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={"/images/icons/icon_docker.svg"} alt='html' width={30} height={20} />
                            </div>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={isDarkMode ? "/images/icons/icon_github.svg"  :   "/images/icons/github-mark.svg"} alt='html' width={30} height={20} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='font-bold my-2'>Collaboration</h2>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={isDarkMode ?  "/images/icons/icon_notion.svg" : "/images/icons/notion.svg"} alt='html' width={30} height={16} />
                            </div>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={"/images/icons/icon_figma.svg"} alt='html' width={20} height={20} />
                            </div>
                            <div className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'>
                                <Image src={isDarkMode ? "/images/icons/icon_discord.svg" : "/images/icons/discord.svg" } alt='html' width={30} height={20} />
                            </div>
                        </div>
                    </div>


            </motion.div>
            </motion.div>
      </motion.div>
  );
};

export default AwardsExpertise;
