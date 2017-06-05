import Observable from '../Observable'

const mockCompiler = (cb) => {
  console.log('in compiler')

  let index = 0

  const itl = setInterval(() => {
    cb('update')
    index++
    if (index === 3) {
      clearInterval(itl)
    }
  }, 1000)
}

function* seq2() {
  // yield 1
  // yield 2
  // yield 3
  // // yield Promise.resolve()
  // // return new Promise((resolve) => {

  // //   // resolve()
  // //   yield 1
  // //   yield 1
  // //   yield 1
  // // })

  // yield setTimeout(function* () {
  //   yield 1987
  // }, 1000)

  // yield new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(1)
  //   }, 1000)
  // })
  // yield new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject('2..')
  //   }, 1500)
  // })
  // yield new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(function* () {
  //       yield Promise.resolve(2)
  //       yield Promise.resolve(3)
  //     })
  //   }, 1000)
  // })
  // yield Promise.resolve(2)
  // yield Promise.resolve(3)

  // yield new Promise(function* (resolve) {
  //   const handleCb = (val) => {
  //     resolve(val)
  //     yield val
  //   }
  //   mockCompiler(handleCb)
  // })
  // yield Promise.resolve('end?')



  yield new Promise((resolve) => {
    function* getVal(val) {
      console.log(val)
      resolve(val)
      yield Promise.resolve(val)
    }

    mockCompiler(getVal)
  })
}

function getComSta() {
  return new Promise((resolve) => {
    function getVal(val) {
      resolve(val)
    }
    mockCompiler(getVal)
  })
}

function seq() {
  // const proList = []
  // const a = new Promise((resolve) => {
  //   function getVal(val) {
  //     proList.push(a)
  //     resolve(val)
  //   }
  //   mockCompiler(getVal)
  // })
  // return proList

  // const  yield getComSta()
  // const a = yield getComSta()
  // console.log(a)
  // return Promise.resolve('jio')
  // yield Promise.resolve('jio')
  // yield Promise.resolve('jio')
  // yield Promise.resolve('jio')
  // yield Promise.resolve('jio')

  // const obs = {
  //   subscribe: 
  // }

  return new Observable((observer) => {
    mockCompiler((val) => {
      observer.onNext(val)
    })
  })
}

export default seq
