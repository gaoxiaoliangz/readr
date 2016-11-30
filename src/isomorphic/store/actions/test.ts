interface loadSomething {
  (): any
}
export const loadSomething: loadSomething = () => {
  return {
    type: 'LOAD'
  }
}

interface saveSomething {
  (): any
}
export const saveSomething: saveSomething = () => {
  return {
    type: 'SAVE'
  }
}
