import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  distDir: 'dist',
  images: { unoptimized: true },
  output: 'export',
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

export default nextConfig;
