'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLink({ href, children }: any) {
    const pathname = usePathname();

    const style = {
        color: pathname === href ? '#F9F9F9' : '#828282',
    }

    return (
        <Link href={href} className="text-xl" style={style}>{children}</Link>
    )
}
