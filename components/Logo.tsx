'use client';

import Image from 'next/image'
import { useContext } from 'react';
import { ThemeContext } from '../hooks/ThemeContext';

export function Logo() {
    const { theme } = useContext<any>(ThemeContext);
    return (
        <>
            {theme === 'dark' ?
                <Image
                    src="/logo-white.svg"
                    alt="Logo NBA-PLAYERS"
                    width={81}
                    height={46}
                />
                : <Image
                    src="/logo-black.svg"
                    alt="Logo NBA-PLAYERS"
                    width={81}
                    height={46}
                />

            }
        </>
    )

}