'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLink({ href, children }: any) {
    const pathname = usePathname();
    console.log(pathname);

    const style = {
        color: pathname === href ? '#F9F9F9' : '#828282',
    }

    return <Link href={href} style={style}>{children}</Link>
    
}
