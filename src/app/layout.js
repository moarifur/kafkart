/*================================================================================================================
* * 🏠 RootLayout (Home Page Wrapper)
 * ---------------------------------------------------------------------------------------------------------------
 * PURPOSE:
 *   - Defines the global structure of the application in Next.js App Router.
 *   - Wraps every page with shared UI components (Navbar + Footer).
 *   - Provides metadata for SEO and browser rendering.
 *
 * USAGE:
 *   - Automatically applied to all pages inside the `(root)` segment.
 *   - Use `<RootLayout>` when rendering any page to inherit global styling and layout.
 *
 * KEY FEATURES:
 *   • Global Navbar & Footer (auto-included for all pages)
 *   • Centralized responsive container for consistent UI spacing
 *   • SEO metadata using Next.js `metadata` export
 *   • Shared styling through `globals.css`
 *
 * DATA / STATE:
 *   - Stateless component; does not manage or mutate data.
 *   - Receives `children` (server or client components) and renders them inside layout.
 *
 * RESPONSIVENESS:
 *   - Uses Tailwind utility classes (`max-w-xl`, `max-w-2xl`, `max-w-6xl`) for fluid scaling.
 *   - Layout auto-adjusts across mobile → tablet → desktop → large screens.
 *
 * INTERACTION:
 *   - No direct user interaction at layout level.
 *   - Navbar and Footer handle navigation and user events separately.
 *
 * NOTES:
 *   - Acts as the root HTML structure: `<html>`, `<body>`, global container.
 *   - Ensures UI consistency across all pages (header, spacing, footer).
* ================================================================================================================*/

import "./globals.css";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

export const metadata = {
  title: "KafKart",
  description: "E-commerce Platform with Microservices Architecture | Next.js, Turborepo, Kafka, Prisma, MongoDB, Stripe, Express.js, Fastify, Hono",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto p-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
            <Navbar />
            {children}
            <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout
