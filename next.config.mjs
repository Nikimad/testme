const defineNextConfig = (config) => config;

export default defineNextConfig({
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://interns-test-fe.snp.agency/api/v1/:path*",
      },
    ];
  },
  reactStrictMode: false
});
