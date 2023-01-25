'use client';

import Image from 'next/image'
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext, TypeThemeContext } from '../contexts/ThemeContext';

import logoBlack from '../assets/logo-black.svg'
import logoWhite from '../assets/logo-white.svg'

export function Logo() {
    const { theme } = useContext<TypeThemeContext>(ThemeContext);
    return (
        <Link
            href="/"
        >
            {theme === 'dark' && (
                <Image
                    src={logoWhite}
                    alt="Logo NBA-PLAYERS"
                    width={81}
                    height={46}
                />
            )}
            
            {theme === 'light' && (
                <Image
                    src={logoBlack}
                    alt="Logo NBA-PLAYERS"
                    width={81}
                    height={46}
                />
            )}
        </Link>
    )

}