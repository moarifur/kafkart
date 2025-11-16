/*================================================================================================================
* ✅ SearchBar Component
 * Purpose: Responsive search input with icon for e-commerce Navbar
 * Usage: Import and place inside Navbar or any top-level header
 *
 * Key Features:
 * 1. Responsive display (hidden on mobile, visible ≥md)
 * 2. Lucide-react Search icon integration
 * 3. Minimalist design with shadow, ring, and padding
 * 4. Reusable as a standalone component
 *
 * Tailwind Highlights:
 * - hidden md:flex → hide on mobile, flex on md+
 * - items-center gap-2 → horizontal alignment with spacing
 * - ring-1 ring-gray-200 → subtle border
 * - shadow-md rounded-md → soft elevation with rounded corners
 * - text-sm outline-0 → compact input, removes default outline
* ================================================================================================================*/

import React from 'react';
import {Search} from 'lucide-react';

const SearchBar = () => {
    return (
        <div className="hidden md:flex items-center gap-2 ring-1 ring-gray-200 px-2 py-1 shadow-md rounded-md">
            <Search className={`w-4 h-4 text-gray-500`}/>
            <input id='search' type='text' placeholder='Search...' className='text-sm outline-0' />
        </div>
    );
};

export default SearchBar;