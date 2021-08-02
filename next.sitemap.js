const siteUrl =
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  process.env.SITE_URL ||
  "https://example.com"

module.exports = {
  siteUrl: siteUrl,
  changefreq: "daily",
  generateRobotsTxt: true, // (optional)
  // ...other options
  exclude: ["/api"],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api",
      },
    ],
  },
}
