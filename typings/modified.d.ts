declare interface NodeRequire {
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (paths: string[], callback: (require: (path: string) => any) => void) => void
}

declare interface JSX {
  IntrinsicElements: {
    div: any
  }
}

interface React {
  HTMLAttributes: {
    styleName: string
  }
}


/**
 * 全局函数
 */
declare function escape(str: string): string;

interface M_ReduxStore extends Redux.Store<{}> {
  runSaga: any
}
