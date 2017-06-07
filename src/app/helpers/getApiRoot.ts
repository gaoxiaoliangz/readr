export default function getApiRoot() {
  if (APP_CONFIG.BROWSER) {
    return `http://localhost:${process.env.PORT}/api`
  }
  return '/api'
}
