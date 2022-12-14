'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
    const pathname = usePathname();

    const path = pathname === href;

    return (
        <Link href={href} className={`text-xl text-title ${path && 'border-b-4' }`}>{children}</Link>
    )
}
