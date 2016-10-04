import * as api from './api'
import * as api2 from './api2'
import * as externalApis from './external'

export * from './api'
export * from './api2'
// export * from './external'

export default Object.assign({}, api, api2, externalApis)
