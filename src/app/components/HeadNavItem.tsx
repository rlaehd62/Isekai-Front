import Link from "next/link";

interface NavItemType
{
    id: number;
    to: string;
    className?: string;
    children?: React.ReactNode;
}

export default function HeadNavItem({id, to, className, children}: NavItemType)
{
    return (
        <Link key={id} href={to} className={className}>
            {children}
        </Link>
    )
}