import Link from "next/link";

interface NavItemType
{
    id: number;
    to: string;
    value: string;
    className?: string;
}

export default function HeadNavItem({id, to, value, className}: NavItemType)
{
    return (
        <Link key={id} href={to} className={className}>
            {value}
        </Link>
    )
}