/** @type {import('next').NextConfig} */

//check if you're running in dev or build
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    output:'export',
     //name of the github repository to reference resource on deployed verison =>only for production not dev
    basePath: isProd ? '/portfolio' : '',
    images: {
      unoptimized:true,
    },

    eslint: {
        ignoreDuringBuilds: true,
      },
    typescript: {
      ignoreBuildErrors: true,
    },
};

export default nextConfig;
