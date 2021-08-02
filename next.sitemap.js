const siteUrl =
  process.env.SITE_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
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
    additionalSitemaps: [`${siteUrl}/api/v1/sitemap`],
  },
}
