'use client';

import Image from 'next/image'
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext, TypeThemeContext } from '../contexts/ThemeContext';

export function Logo() {
    const { theme } = useContext<TypeThemeContext>(ThemeContext);
    return (
        <Link
            href="/"
        >
            {theme === 'dark' && (
                <Image
                    src="/logo-white.svg"
                    alt="Logo NBA-PLAYERS"
                    width={81}
                    height={46}
                />
            )}
            
            {theme === 'light' && (
                <Image
                    src="/logo-black.svg"
                    alt="Logo NBA-PLAYERS"
                    width={81}
                    height={46}
                />
            )}
        </Link>
    )

}