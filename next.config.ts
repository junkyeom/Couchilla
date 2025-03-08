import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ['urlzhmxlxhdtqzdxreku.supabase.co'], // 여기서 도메인을 추가
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'urlzhmxlxhdtqzdxreku.supabase.co',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
