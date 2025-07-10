/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "haatak-storage-bucket.s3.ap-south-1.amazonaws.com",
        },
        {
          protocol: "https",
          hostname: "resorts-bucket.s3.ap-south-1.amazonaws.com",
        },
      ],
    },
};

export default nextConfig;
