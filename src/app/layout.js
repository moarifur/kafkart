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
