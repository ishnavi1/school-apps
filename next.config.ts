import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "yeqhhhhm7rpnmvge.public.blob.vercel-storage.com", // <-- add this
      "blob.vercel-storage.com", // (optional, for other blobs)
      "xc61y5gc4apmowaw.public.blob.vercel-storage.com"
    ],
  },
};

export default nextConfig;
