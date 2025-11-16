/*================================================================================================================
 * 🏗️ RootLayout (Server Component)
 * ---------------------------------------------------------------------------------------------------------------
 * This component defines the global layout structure for the entire application.
 * It renders:
 *   • Global metadata (SEO title & description)
 *   • Global stylesheet (globals.css)
 *   • Shared UI components (Navbar, Footer)
 *   • A centered content container for all pages
 *
 * SECTION BREAKDOWN
 * ---------------------------------------------------------------------------------------------------------------
 * (1) Metadata
 *     - Provides SEO-friendly title and description for the application.
 *
 * (2) Layout Structure
 *     - <html> defines the language.
 *     - <body> wraps all visual content.
 *     - The main container keeps page width consistent across devices using responsive max-width utilities.
 *
 * (3) Shared Components
 *     - <Navbar />  : Displayed on all pages for site-wide navigation.
 *     - {children}  : Dynamic page content rendered between Navbar and Footer.
 *     - <Footer />  : Contains brand info, navigation sections, product links, and company pages.
 *
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
