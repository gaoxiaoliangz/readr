import os from 'os'

/**
 * Gather a list of local ipv4 addresses
 * @return {Array<String>}
 */
export function getIPs() {
  const ifaces = os.networkInterfaces()
  const ips = [
    'localhost'
  ]

  Object.keys(ifaces).forEach(function (ifname) {
    ifaces[ifname].forEach(function (iface) {
      // only support IPv4
      if (iface.family !== 'IPv4') {
        return
      }

      ips.push(iface.address)
    })
  })

  return ips
}

const getLocalIP = () => {
  let IPv4
  for (let i = 0; i < os.networkInterfaces().en0.length; i++) {
    if (os.networkInterfaces().en0[i].family === 'IPv4') {
      IPv4 = os.networkInterfaces().en0[i].address
    }
  }
  return IPv4
}

export default getLocalIP
