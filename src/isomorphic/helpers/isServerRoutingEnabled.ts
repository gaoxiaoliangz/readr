export default function isServerRoutingEnabled() {
  return Boolean((window as any).__ENABLE_SERVER_ROUTING__)
}
