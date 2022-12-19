'use client';

import Image from 'next/image'
import { useContext } from 'react';
import { ThemeContext, TypeThemeContext } from '../contexts/ThemeContext';

export function SearchIcon() {
    const { theme } = useContext<TypeThemeContext>(ThemeContext);
    return (
        <>
            {theme === 'dark' ?
                <Image
                    src="/search-icon-white.svg"
                    alt="Logo NBA-PLAYERS"
                    width={30}
                    height={30}
                />
                : <Image
                    src="/search-icon-black.svg"
                    alt="Logo NBA-PLAYERS"
                    width={30}
                    height={30}
                />

            }
        </>
    )

}