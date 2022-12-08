'use client'

import Image from 'next/image'
import Link from 'next/link';

import { useContext } from 'react';
import { ThemeContext } from '../hooks/ThemeContext';

export function GithubLink() {
    const { theme } = useContext<any>(ThemeContext);
    return (
        <Link
            href="https://github.com/pceolato/nba-players">
                <Image
                    className="p-1"
                    src="/github-logo-white.svg"
                    alt="Logo github"
                    width={42}
                    height={42}
                />

        </Link>
    )
}