/**
 * withHttps
 * 
 * return https url if url doesn't have http or https prefix
 * source https://stackoverflow.com/questions/3543187/prepending-http-to-a-url-that-doesnt-already-contain-http
 * 
 * @param string url 
 * @returns 
 */
export const withHttps = (url) => {
  return url.replace(/^(?:(.*:)?\/\/)?(.*)/i, (match, schemma, nonSchemmaUrl) =>
    schemma ? match : `https://${nonSchemmaUrl}`
  )
}

/**
 * 
 * modify URL and replace it if its url from ghost api
 * 
 * @param {string} href 
 * @param {string} ghostUrl 
 */
export const getPostLink = (href, ghostUrl) => {
  let url
  try {
    const linkUrl = new URL(href)
    const isOrigin = linkUrl.origin == new URL(ghostUrl).origin
    url = isOrigin ? `/posts${linkUrl.pathname}` : linkUrl.hash || linkUrl.href
  } catch (e) {
    url = href
  }

  return url
}