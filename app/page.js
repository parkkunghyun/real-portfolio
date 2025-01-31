"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import Footer from "./components/Footer";
import About from "./components/About";
import Finish from "./components/Finish";
import AwardsExpertise from "./components/AwardsExpertise";
import Lingualens from "./components/Lingualens";
import FullStackProjects from "./components/FullStackProject";


// 메인페이지로 좀 애니메틱한 기능들이 추가로 들어가게 하기 -> 여기서 결정할 수 있게?
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.theme === 'dark'
      || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Lingualens isDarkMode={isDarkMode} />
      <FullStackProjects isDarkMode={isDarkMode}/>
      <AwardsExpertise isDarkMode={isDarkMode} />
      <Finish isDarkMode={isDarkMode} />
      <Footer/>
    </>
  );
}
