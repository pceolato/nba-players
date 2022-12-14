'use client'

import Image from 'next/image'
import Link from 'next/link';

export function GithubLink() {
    return (
        <Link
            href="https://github.com/pceolato/nba-players">
                <Image
                    className=""
                    src="/github-logo.svg"
                    alt="Logo github"
                    width={32}
                    height={32}
                />

        </Link>
    )
}