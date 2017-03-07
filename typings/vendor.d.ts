declare module 'vendor/*' {
  const content: any
  export default content
}

declare module 'vendor/md5' {
  const content: (content: string) => string
  export default content
}
