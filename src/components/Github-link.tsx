'use client'

import Image from 'next/image'
import Link from 'next/link';

import logoGithub from '../assets/github-logo.svg';

export function GithubLink() {
    return (
        <Link
            href="https://github.com/pceolato/nba-players"
            target="_blank"
        >
            <Image
                src={logoGithub}
                alt="Logo github"
                width={32}
                height={32}
            />
        </Link>
    )
}