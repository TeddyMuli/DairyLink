import Link from "next/link";
import React from "react";

export default function TopBar() {
    return (
        <div className="flex mx-4">
            <div>
                <Link href={`/`} className="px-4 py-2 font-bold text-2xl">DairyLink</Link>
            </div>
            <nav className="flex ml-auto gap-4">
                <Link href='#features' className="px-4 py-2">Features</Link>
                <Link href='#about' className="px-4 py-2">About</Link>
                <Link href="#contacts" className="px-4 py-2">Contacts</Link>
                <Link href='/auth/login' className="px-4 py-2">LogIn</Link>
                <Link href='/auth/register' className="px-4 py-2 text-white bg-black rounded-md">Register</Link>
            </nav>
        </div>
    )
}
