/*================================================================================================================
* ✅ Server Component
* (1) Data => Inline
* (2) Content => (i) Section 1: Brand logo and copyright
*               (ii) Section 2: Navigation links (Homepage, Contact, Terms, Privacy, etc.)
*              (iii) Section 3: Product-related shortcuts
*               (iv) Section 4: Company-related pages
*
* (3) Layout => (i) Section 1: Brand name is visible only on medium screens (hidden md:block).
*              (ii) Section 2: Organized in a clean vertical list, Section heading uses amber color to stand out and Uses Next.js Link for seamless navigation.
*             (iii) Section 3: Provides quick access to product-related sections and Shares the same structure and styling as the previous section for visual consistency.
*              (iv) Section 4: Contains links to important company pages such as About, Blog, and Affiliate Program and Shares the same structure and styling as the previous section for visual consistency.
* ================================================================================================================*/



import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div
            className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">
            <div className="flex flex-col gap-4 items-center md:items-start">
                <Link href="/" className="flex items-center">
                    <Image src="/logo.png" alt="TrendLama" width={36} height={36}/>
                    <p className="hidden md:block text-md font-medium tracking-wider text-white">
                        KafKart.
                    </p>
                </Link>
                <p className="text-sm text-gray-400">© 2025 KafKart.</p>
                <p className="text-sm text-gray-400">All rights reserved.</p>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/">Homepage</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Terms of Service</Link>
                <Link href="/">Privacy Policy</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-50">Products</p>
                <Link href="/">All Products</Link>
                <Link href="/">New Arrivals</Link>
                <Link href="/">Best Sellers</Link>
                <Link href="/">Sale</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-50">Company</p>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Affiliate Program</Link>
            </div>
        </div>
    );
};

export default Footer;

