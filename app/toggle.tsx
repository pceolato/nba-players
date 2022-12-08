'use client';

import { useContext } from "react";
import { ThemeContext } from "../hooks/ThemeContext";

import { BiMoon, BiSun } from "react-icons/bi";

export function Toggle() {
   const { theme, setTheme } = useContext<any>(ThemeContext);
   return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? <BiSun size={20} color="#828282"/> : <BiMoon size={20} color="#828282"/>}
    </button>
   )
}