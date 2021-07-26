import {
  ghost_api_key,
  ghost_api_url,
  ghost_api_ver,
  siteAccent,
  siteIcon,
  siteImage,
  siteUrl,
} from "@/lib/siteDefault"

export const GHOST_API_URL = process.env.GHOST_API_URL || ghost_api_url
export const GHOST_API_KEY = process.env.GHOST_API_KEY || ghost_api_key
export const GHOST_API_VERSION = process.env.GHOST_API_VERSION || ghost_api_ver

const url = process.env.VERCEL_URL || process.env.SITE_URL || siteUrl

export const defaultSettings = {
  siteUrl: url,
  siteIcon: siteIcon,
  siteImage: siteImage,
  siteAccent: siteAccent,
}
