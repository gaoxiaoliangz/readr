import phantom from 'phantom'
import os from 'os'
import path from 'path'
import getCurrentTime from '../utils/getCurrentTime'
import { getNodeHeights } from '../app/sagas/effects/paging'

// console.log(getNodeHeights.toString());


const debug = require('debug')('readr:evaluate')
const dir = os.tmpdir()

interface EvaluateConfig {
  saveShotAsPng?: boolean
  evalCallback: string
}

// `function getContent() {
//           // this function is used as string, so it doesn't have any closure features
//           // it has phantom document variable
//           // if ('${selector}' !== 'undefined') {
//           //   return document.querySelector('${selector}')
//           // }
//           // return document.body
//           var getNodeHeights = ${getNodeHeights.toString()}
//           var nodes = document.querySelector('.content').childNodes
//           var heights = getNodeHeights(nodes)
//           return heights
//         }` as any

const evaluate = (htmlString: string, config: EvaluateConfig): Promise<any> => {
  const { saveShotAsPng, evalCallback } = config
  const instance = phantom.create()

  return instance
    .then(ins => {
      return ins.createPage().then(page => {
        // page.on('onResourceRequested', (requestData) => {
        //   debug('Requesting', requestData.url)
        // })

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
