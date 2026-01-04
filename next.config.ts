/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ← ADICIONE ESTA LINHA
  images: {
    unoptimized: true, // ← Necessário para export estático
  },
  // Remove se não estiver usando
  // turbopack: {
  //   root: __dirname
  // }
}

module.exports = nextConfig