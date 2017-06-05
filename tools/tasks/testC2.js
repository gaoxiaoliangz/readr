const testc2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('task c2')
      resolve()
    }, 1)
  })
}

export default testc2
