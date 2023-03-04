import Link from "next/Link"

import { useState } from 'react'
export default function Header() {
    // const [selected, setSelected] = useState(0)
    const navitems = [
        <Link href="/"  className="hover:text-green-300 focus:text-green-500 transition-colors" passHref={true} >HOME</Link>,
        <Link href="/events"className="hover:text-green-300 focus:text-green-500" passHref={true} >EVENTS </Link>,
        <Link href="/about"className="hover:text-green-300 focus:text-green-500" passHref={true} >about </Link>
    ]
    return (<header className="   py-3 drop-shadow-md fixed bg-slate-500 w-full h-[60px] flex items-center">
    <div className=" flex justify-between container mx-auto px-4 md:px-0 ">
    
    
    <p>logo</p>
        <div className="uppercase space-x-3 ">
            {
                navitems.map((item) =>item)

            }



        </div>
    </div>
    </header>)
}