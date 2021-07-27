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