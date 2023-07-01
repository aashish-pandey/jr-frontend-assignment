import Link from "next/link";


export default function Navbar() {
  return (
    <header className="bg-black p-5">
        <nav className="flex md:flex-row flex-col justify-between">
            <div>
                <Link href="/" className="uppercase mx-3">
                    Music Sansar 
                </Link>
                <span>
                    (Sansar for music lovers)
                </span>
                
            </div>
            <div className="flex md:items-left px-5 md:flex-row ">
                <Link href="/" className="px-5 flex-items hover:bg-sky-700 active:bg-violet-700">
                    Home
                </Link>

                <Link href="/search" className="px-5 flex-items hover:bg-sky-700 active:bg-violet-700">
                Search
                </Link>
            </div>
        </nav>
    </header>
  )
}
