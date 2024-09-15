import Link from "next/link";

interface NavItemType
{
    to: string;
    className?: string;
    children?: React.ReactNode;
}

export default function HeadNavItem({to, className, children}: NavItemType)
{
    return (
        <Link href={to} className={className}>
            {children}
        </Link>
    )
}