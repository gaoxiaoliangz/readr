export default function print(...args) {
  if (process.env.NODE_ENV !== 'production') {
    const style = 'color: blue;'
    const mergedArgs = [args.join(' ')]
    let modArgs = mergedArgs.map((arg, index) => {
      if (index === 0) {
        return `%c [DEV] ${arg}`
      }
    })

    modArgs = modArgs.concat(style)
    console.trace.apply(null, modArgs)
  }
}
