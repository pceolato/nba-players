'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLink({ href, children }: any) {
    const pathname = usePathname();

    const path = pathname === href;

    return (
        <Link href={href} className={`text-xl text-title ${path && 'border-b-4' }`}>{children}</Link>
    )
}
