const { BASE_URL } = process.env;

module.exports = Object.assign(require("@sentrei/next"), {
  rewrites() {
    return [
      {
        source: "/dashboard",
        destination: `${BASE_URL}/dashboard`,
      },
      {
        source: "/dashboard/:path*",
        destination: `${BASE_URL}/dashboard/:path*`,
      },
      {
        source: "/demo",
        destination: `${BASE_URL}/demo`,
      },
      {
        source: "/demo/:path*",
        destination: `${BASE_URL}/demo/:path*`,
      },
    ];
  },
});
