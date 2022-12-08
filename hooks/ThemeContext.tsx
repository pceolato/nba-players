'use client'
import { createContext, useEffect, useState } from 'react';

interface ThemeProviderProps{
    initialTheme: string | undefined;
    children: React.ReactNode;
}

const getInitialTheme = () => {
    if(localStorage) {
        const storePrefs = localStorage.getItem('color-theme');
        console.log('Tipo:', typeof storePrefs);
        if(typeof storePrefs === 'string') {
            return storePrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if(userMedia.matches) {
            return 'dark';
        }

        return 'light';
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = ({initialTheme, children}: any) => {
    const [theme, setTheme] = useState(getInitialTheme);

    const rawSetTheme = (rawTheme: any) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('color-theme', rawTheme)
    };

    if(initialTheme) {
        rawSetTheme(initialTheme);
    }

    useEffect(() => {
        rawSetTheme(theme)
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}