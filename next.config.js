const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


module.exports = withBundleAnalyzer({
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
})
