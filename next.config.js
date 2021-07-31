module.exports = {
  images: {
    domains: [
      "localhost",
      "images.unsplash.com",
      "static.gotsby.org",
      "static.ghost.org",
      "gatsby.ghost.io",
      "ghost.org",
      "repository-images.githubusercontent.com",
      "www.gravatar.com",
      "github.githubassets.com",
      ...(process.env.IMAGE_DOMAINS || "").split(","),
    ],
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
