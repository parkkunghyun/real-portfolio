"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const sideMenuRef = useRef(false);
    const [isScroll, setIsScroll] = useState(false);

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(0)"; // 사이드바 열기
      };
    
      const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(100%)"; // 사이드바 닫기
      };
    
      useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        });
    }, []);

    return (
        <div className="fixed left-4 right-4 top-2 flex justify-between items-center">
            <a href="/">
                <h1 className="font-bold cursor-pointer hover:scale-105 duration-200 text-6xl">PKH .</h1>
            </a>
            <div className="flex items-center gap-4">
                <button onClick={() => setIsDarkMode(!isDarkMode)}>
                    <Image
                        src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                        alt="darkMode"
                        className="w-6"
                    />
                </button>
                {/* 사이드바 토글 버튼 (다크모드 설정 옆에 배치) */}
                <button onClick={openMenu} className="block ml-3">
                    <Image
                        src={isDarkMode ? assets.menu_white : assets.menu_black}
                        alt="menu-black"
                        className="w-6"
                    />
                </button>
            </div>
            {/* 사이드바 메뉴 */}
            <ul
                ref={sideMenuRef}
                className="fixed top-0 right-0 bottom-0 z-50 flex flex-col w-64 h-screen gap-4 p-10 transition-all duration-500 dark:bg-darkHover dark:text-white bg-rose-50"
                style={{ transform: "translateX(100%)" }}
            >
                <div onClick={closeMenu} className="absolute right-6 top-6 cursor-pointer">
                <Image
                    src={isDarkMode ? assets.close_white : assets.close_black}
                    alt="menu close"
                    className="w-5"/>
                </div>
                <li>
                    <a className="font-Ovo" onClick={closeMenu} href="#home">
                        Home
                    </a>
                </li>
                <li>
                    <a className="font-Ovo" onClick={closeMenu} href="#about">
                        About me
                    </a>
                </li>
                <li>
                    <a className="font-Ovo" onClick={closeMenu} href="#services">
                        Lingualens Project
                    </a>
                </li>
                <li>
                    <a className="font-Ovo" onClick={closeMenu} href="#work">
                        full stack Projects
                    </a>
                </li>
                <li>
                    <a className="font-Ovo" onClick={closeMenu} href="#awardsexpertise">
                        수상과 스킬
                    </a>
                </li>
                <li>
                    <a className="font-Ovo" onClick={closeMenu} href="#finish">
                        마무리
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
