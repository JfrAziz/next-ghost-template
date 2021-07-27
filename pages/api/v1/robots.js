import { siteUrl } from "@/lib/siteDefault"

export default async function handler(req, res) {
  const url = process.env.VERCEL_URL || process.env.SITE_URL || siteUrl

  const robotString = `
  Sitemap : ${url}/api/v1/sitemap

  User-agent: *
  Allow: /*

  Disallow: /api/*
  `

  res.status(200).send(robotString)
}