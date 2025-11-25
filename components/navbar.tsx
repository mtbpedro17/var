import Link from "next/link"

export default function navbar() {
    return(
        <header className="flex justify-center items-center gap-2 w-screen h-14 bg-black ">
            <Link href={"/"} className="text-white hover:text-gray-200 font-bold">
            <p>Page 0</p>
            </Link>
            
            <Link href={"/01"} className="text-white hover:text-gray-200 font-bold">
            <p>Page 1</p>
            </Link>

            <Link href={"/02"} className="text-white hover:text-gray-200 font-bold">
            <p>Page 2</p>
            </Link>

            <Link href={"/props"} className="text-white hover:text-gray-200 font-bold">
            <p>Props</p>
            </Link>
            <Link href={"/usestate"} className="text-white hover:text-gray-200 font-bold">
            <p>Usestate</p>
            </Link>
            
        </header>
    )
}