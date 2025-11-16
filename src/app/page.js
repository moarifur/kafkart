/*================================================================================================================
* ✅ Homepage Component
*
* * Purpose:
 * Renders the main landing page of the website, serving as the first point of interaction for users.
 *
 * Usage:
 * Import and use in the Next.js App Router as the default export for the homepage route.
 *
 * Key Features:
 * - Displays the Hero section prominently.
 * - Acts as a container for future homepage sections.
 *
 * Hero Highlights:
 * - Includes Hero component with main banner, call-to-action, and introductory content.
 *
 * Data:
 * - Currently static; can be extended to fetch dynamic content from CMS or API.
 *
 * Responsiveness:
 * - Fully responsive layout, adapts to desktop, tablet, and mobile screens.
 *
 * Layout:
 * - Single-column layout with Hero component at the top.
 * - Minimal wrapper div to allow easy extension for additional sections.
 *
 * Interaction:
 * - Hero component handles user interactions like button clicks and navigation.
 * - Can be enhanced with animations or scroll-based effects.
 *
* ================================================================================================================*/

import Hero from "@/components/custom/Hero";

const HomePage = () => {
    return (
        <div className="">
            <Hero />
        </div>
    );
};

export default HomePage;