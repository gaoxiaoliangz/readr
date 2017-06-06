import os from 'os'

const getLocalIP = () => {
  // todo: if no network
  let IPv4
  for (let i = 0; i < os.networkInterfaces().en0.length; i++) {
    if (os.networkInterfaces().en0[i].family === 'IPv4') {
      IPv4 = os.networkInterfaces().en0[i].address
    }
  }

  return IPv4
}

export default getLocalIP
