import {
  ghost_api_key,
  ghost_api_url,
  ghost_api_ver,
  siteAccent,
  siteIcon,
  siteImage,
  siteUrl,
} from "@/lib/siteDefault"
import { withHttps } from "@/lib/helpers/url"

export const GHOST_API_URL = process.env.GHOST_API_URL || ghost_api_url
export const GHOST_API_KEY = process.env.GHOST_API_KEY || ghost_api_key
export const GHOST_API_VERSION = process.env.GHOST_API_VERSION || ghost_api_ver

const url = process.env.SITE_URL || process.env.VERCEL_URL || siteUrl

export const defaultSettings = {
  siteUrl: withHttps(url),
  siteIcon: siteIcon,
  siteImage: siteImage,
  siteAccent: siteAccent,
}
