import run from '../runTask'
import bundle from './bundle'

async function build() {
  await run(bundle, 'assets')
}

export default build
