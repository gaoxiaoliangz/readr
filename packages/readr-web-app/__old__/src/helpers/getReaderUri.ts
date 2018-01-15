const getReaderURI = (path: string, version: '1' | '2' = '2') => {
  return `/reader/v${version}/book/${path}`
}

export default getReaderURI
