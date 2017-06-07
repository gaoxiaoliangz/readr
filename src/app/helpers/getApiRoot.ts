export default function getAPIRoot() {
  if (!APP_ENV.BROWSER) {
    return `http://localhost:${process.env.PORT}${APP_ENV.REST_API_PATH}`
  }
  return APP_ENV.REST_API_PATH
}
