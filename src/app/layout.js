import "./globals.css";

export const metadata = {
  title: "KafKart",
  description: "E-commerce Platform with Microservices Architecture | Next.js, Turborepo, Kafka, Prisma, MongoDB, Stripe, Express.js, Fastify, Hono",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout
