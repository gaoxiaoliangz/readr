export default function symbolGenerator(symbolList: Array<string>) {
  let symbols = {} as any
  symbolList.forEach(syl => {
    symbols[syl] = Symbol(syl)
  })
  return symbols
}
