declare interface NodeRequire {
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (paths: string[], callback: (require: (path: string) => any) => void) => void
}

/**
 * 全局函数
 */
declare function escape(str: string): string;

interface NodeModule {
  hot: any
}

interface M_ReduxStore extends Redux.Store<{}> {
  runSaga: any
}

declare var describe: any
declare var it: any
