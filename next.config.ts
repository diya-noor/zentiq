import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: { workerThreads: true },
  // npm run build runs `tsc --noEmit` first; avoid Next's child-process type checker
  // because this Windows environment blocks process spawning.
  typescript: { ignoreBuildErrors: true },
}
export default nextConfig
