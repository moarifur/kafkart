import React from 'react';
import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/custom/SearchBar";
import {Home, Bell, ShoppingCart} from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between w-full border-b border-gray-200 pb-4">
            {/*----------- Left -----------*/}
            <Link href={`/`} className={`flex items-center`}>
                <Image src={`/logo.png`} alt={`Logo`} width={200} height={50} className="w-6 h-3 md:w-12 md:h-7" />
                <p className={`hidden md:block text-md font-medium tracking-wider`}>KafKart</p>
            </Link>
            {/*----------- Right -----------*/}
            <div className="flex items-center gap-5">
                <SearchBar />
                <Link href={`/`}>
                    <Home className={`w-4 h-4 text-gray-500`}/>
                </Link>
                <Bell className={`w-4 h-4 text-gray-500`}/>
                <ShoppingCart className={`w-4 h-4 text-gray-500`}/>
                <Link href={`/login`} className={`text-gray-500`}>Sign in</Link>
            </div>
        </div>
    );
};

export default Navbar;