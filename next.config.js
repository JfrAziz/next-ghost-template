module.exports = {
  images: {
    domains: ["static.gotsby.org"],
  },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/v1/robots",
      },
    ]
  },
}
