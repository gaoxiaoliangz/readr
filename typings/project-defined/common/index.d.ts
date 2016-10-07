type RequestTypes = {
  REQUEST: string
  SUCCESS: string
  FAILURE: string
  LOAD_CACHE: string
}

interface ActionEntity {
  request: any
  success: any
  failure: any
  loadCache: any
}


/**
 * webpack require an require.ensure
 * https://github.com/TypeStrong/ts-loader/blob/master/test/codeSplitting/require.d.ts
 */
declare var require: {
  (path: string): any
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void
}


/**
 * 全局函数
 */
declare function escape(str: string): string;


/**
 * config
 */
// todo
type ProjectConfig = {
  api: {
    prefix: string
  },
  vendorApi: {
    [key: string]: string
    douban: string
    github: string
  }
}


/**
 * types & interfaces
 */
type FetchDataOptions = {
  store: {
    dispatch: (action: any) => any
  }
  params: any
  query: any
  userSession: any
}


/**
 * modified interface
 */
interface NodeModule {
  hot: any
}

interface M_ReduxStore extends Redux.Store<{}> {
  runSaga: any
}
