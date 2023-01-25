'use client';

import { useContext } from "react";
import { ThemeContext, TypeThemeContext } from "../contexts/ThemeContext";

import { Moon, Sun } from "phosphor-react";

export function Toggle() {
   const { theme, setTheme } = useContext<TypeThemeContext>(ThemeContext);
   return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? <Sun size={20} color="#828282" /> : <Moon size={20} color="#828282" />}
    </button>
   )
}