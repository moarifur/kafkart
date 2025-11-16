/*================================================================================================================
* ✅ Navbar Component
 * Purpose: Full top navigation for e-commerce platform
 * Structure:
 * - Left: Logo + Brand Name
 * - Right: SearchBar + Icons (Home, Notifications, Cart) + Sign In link
 *
 * Features:
 * 1. Responsive design (SearchBar hidden on small screens)
 * 2. Optimized images via Next.js Image component
 * 3. Client-side routing with Link
 * 4. Consistent icon styling and spacing
 * 5. Accessible with aria-labels for icons
 *
 * Data => Inline
 * Layout => TODO:
*                | ------------------ | --------------------------------------- |
*                | Screen Size        | What Shows                              |
*                | ------------------ | --------------------------------------- |
*                | Mobile             | Logo + Icons + Sign-in (Search hidden)  |
*                | Tablet/Desktop     | Logo + Brand + Search + Icons + Sign-in |
*                | ------------------ | --------------------------------------- |

 * Content =>
Navbar
├── Logo (Image)
├── Brand Name
└── Right Section
    ├── SearchBar
    ├── Home Icon
    ├── Notification Icon
    ├── Cart Icon
    └── Sign In

* ================================================================================================================*/

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