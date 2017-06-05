// simple implemention of rxjs observable

class Observable {
  constructor(connector) {
    this.connector = connector
    this.observer = {
      onNext: (val) => {
        this.handler(val)
      }
    }
    this.connector(this.observer)
  }

  subscribe(handler) {
    this.handler = handler
    return Promise.resolve()
  }
}

export default Observable
