'use client'

import Image from 'next/image'
import Link from 'next/link';

export function GithubLink() {
    return (
        <Link
            href="https://github.com/pceolato/nba-players">
                <Image
                    className="p-1"
                    src="/github-logo.svg"
                    alt="Logo github"
                    width={42}
                    height={42}
                />

        </Link>
    )
}