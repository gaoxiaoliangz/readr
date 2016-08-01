export function getCache(name) {
  if (typeof name !== 'string') {
    console.error('Name should be string!');
  }
  let content = localStorage.getItem(name)
  if (!content) {
    content = false
  }
  return content
}

export function setCache(name, content) {
  if (typeof name !== 'string') {
    console.error('Name should be string!')
  }
  if (typeof content !== 'string') {
    console.error('Cache content should be string!')
  }

  let success = true

  try {
    localStorage.setItem(name, content)
  } catch (e) {
    console.error(e)
    success = false
  }

  return success
}
