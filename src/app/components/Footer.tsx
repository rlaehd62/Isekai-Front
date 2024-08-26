import Link from "next/link";

export default function Footer()
{
  const github = 'https://github.com/rlaehd62'
  const Official = 'https://rlaehd62.github.io/'
    return (
    <div className="w-screen flex flex-col items-center grow-0 bg-gray-900 mt-5 p-7 bottom-0 justify-center">
        <p className="text-gray-500">Copyright © Isekai Books 2024. All Rights Reserved.</p>
        <div className="flex flex-row justify-around gap-5 mt-1">
          <p className="text-gray-500"><Link href={github}>GitHub</Link></p>
          <p className="text-gray-500"><Link href={Official}>rlaehd62@gmail.com</Link></p>
        </div>

      </div>
    )
}