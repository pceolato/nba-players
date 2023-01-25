'use client';

import Image from 'next/image'
import { MagnifyingGlass } from 'phosphor-react';
import { useContext } from 'react';
import { ThemeContext, TypeThemeContext } from '../contexts/ThemeContext';

export function SearchIcon() {
    const { theme } = useContext<TypeThemeContext>(ThemeContext);
    return (
        <>
            {theme === 'dark' ?
                <MagnifyingGlass size={30} color="rgb(249 249 249 / 0.6)" />
                : 
                <MagnifyingGlass size={30} color="rgb(23 23 23 / 0.6)" />

            }
        </>
    )

}