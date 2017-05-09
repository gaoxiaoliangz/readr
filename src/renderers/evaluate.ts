import phantom from 'phantom'
import os from 'os'
import path from 'path'
import getCurrentTime from '../utils/getCurrentTime'

const debug = require('debug')('readr:evaluate')
const dir = os.tmpdir()

interface EvaluateConfig {
  saveShotAsPng?: boolean
  evalCallback: string
  logRequests?: boolean
}

const evaluate = (htmlString: string, config: EvaluateConfig): Promise<any> => {
  const { saveShotAsPng, evalCallback, logRequests } = config
  const instance = phantom.create()

  return instance
    .then(ins => {
      return ins.createPage().then(page => {
        if (logRequests) {
          page['on']('onResourceRequested', (requestData) => {
            debug('Requesting', requestData.url)
          })
        }

        page.property('content', htmlString)

        return page.evaluate<HTMLElement>(`function() {
          ${evalCallback}
        }` as any)
          .then((ele) => {
            if (saveShotAsPng) {
              const t = getCurrentTime()
              const dest = path.join(dir, `shot-${t}.png`)
              return page.render(dest).then(() => {
                debug('File saved as', dest)
                ins.exit()
                return ele
              })
            }
            ins.exit()
            return ele
          })
      })
    })
}

export default evaluate
