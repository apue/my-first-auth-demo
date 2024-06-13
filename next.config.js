/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["http://localhost:3000", "https://congenial-goldfish-9755gw6rj7hxrp5-3000.app.github.dev"],
    }
  }
}

module.exports = nextConfig;
