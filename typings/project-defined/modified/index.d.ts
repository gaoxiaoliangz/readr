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

interface NodeModule {
  hot: any
}

interface M_ReduxStore extends Redux.Store<{}> {
  runSaga: any
}

declare var describe: any
declare var it: any



////////////////////////////// MODIFIED IN @TYPES //////////////////////////////

// // START USER DEFINED
// declare class ElementClass extends React.Component<any, any> {}

// interface ClassDecorator<TOwnProps> {
//     <T extends (typeof ElementClass)>(component:T): T;
// }

// export declare function connect<TOwnProps>(
//     mapStateToProps: FuncOrSelf<MapStateToProps<{}, TOwnProps>>,
//     mapDispatchToProps?: FuncOrSelf<MapDispatchToPropsFunction<{}, TOwnProps> | MapDispatchToPropsObject>
// ): ClassDecorator<TOwnProps>;
// // END USER DEFINED
