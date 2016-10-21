/**
 * webpack require an require.ensure
 * https://github.com/TypeStrong/ts-loader/blob/master/test/codeSplitting/require.d.ts
 */
declare var require: {
  (path: string): any
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
