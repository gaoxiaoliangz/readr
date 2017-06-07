export default function getAPIRoot() {
  if (!APP_CONFIG.BROWSER) {
    return `http://localhost:${process.env.PORT}${APP_CONFIG.REST_API_PATH}`
  }
  return APP_CONFIG.REST_API_PATH
}
