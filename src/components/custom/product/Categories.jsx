/*================================================================================================================
* ✅ Categories Component — Client-Side
 *
 * PURPOSE:
 * This component displays a list of product categories in a responsive grid.
 * Clicking a category updates the URL query parameter (?categories=slug),
 * allowing the UI or backend to filter products based on the selected category.
 *
 * COMPONENT BREAKDOWN:
 * 1. Data Source:
 *    - Currently loaded from: data.js (local demo data)
 *    - Future plan: Replace with database-driven API data
 *
 * 2. Layout System:
 *    - Responsive Grid:
 *        • default: 2 columns
 *        • sm:      3 columns
 *        • md:      4 columns
 *        • lg:      6 columns
 *        • xl:      8 columns
 *    - Each category box is centered using Flexbox
 *
 * 3. Interaction Logic:
 *    - On category click:
 *        • Updates the search params (e.g., /?categories=tech)
 *    - Active State:
 *        • If the clicked category matches the current search param,
 *          the background color changes to indicate selection
* ================================================================================================================*/

"use client";

import { categories } from "@/components/custom/product/data";
import { useSearchParams, useRouter } from "next/navigation";

const Categories = () => {

    // 🔍 Read URL query parameters from the client-side router
    const searchParams = useSearchParams();

    // Extract the current 'categories' parameter (e.g., ?categories=tech)
    const selectedCategories = searchParams.get("categories");

    // Router instance for updating URL without page refresh
    const router = useRouter();

    /**
     * Updates the current URL with the selected category.
     * Example: clicking "Tech" → /?categories=tech
     */
    const handleChange = (value) => router.push(`/?categories=${value}`);

    return (
        <div className={styles.container}>
            {categories.map((category) => (
                <div
                    key={category.name}
                    /**
                     * STYLE LOGIC:
                     * - If the category slug matches the active search param, highlight the item
                     * - Otherwise, apply default gray text styling
                     */
                    className={`${styles.item} ${
                        category.slug === selectedCategories ? "bg-white" : "text-gray-600"
                    }`}
                    onClick={() => handleChange(category.slug)}
                >
                    {category.icon}
                    {category.name}
                </div>
            ))}
        </div>
    );
};

export default Categories;

/* ================================================================================================================
 * 🎨 Styles (Tailwind utility classes for consistency and readability)
 * ================================================================================================================*/
const styles = {
    container: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-200 rounded-lg p-2 mb-4 text-sm",
    item: "flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md",
};