'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    player?: boolean;
    children: React.ReactNode;
}

export function NavLink({ href, children, player }: NavLinkProps) {
    const pathname = usePathname();

    const differentPathHref = () => {
        if(player) {
            if(pathname !== '/' && pathname !== '/players') 
                return true;
        }

        return false;
    }

    const path = pathname === href;

    const selectPlayer = differentPathHref();


    return (
        <Link href={href} className={`text-xl text-title ${(path || selectPlayer) && 'border-b-4' }`}>{children}</Link>
    )
}
