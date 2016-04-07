export function readCache(name) {
  if(typeof name !== 'string') {
    console.error('Name should be string!');
  }
  let content = localStorage.getItem(name)
  if(!content) {
    content = false
  }
  return content
}

export function saveCache(name, content) {
  if(typeof name !== 'string') {
    console.error('Name should be string!')
  }
  if(typeof content !== 'string') {
    console.error('Cache content should be string!')
  }
  localStorage.setItem(name, content)
}
