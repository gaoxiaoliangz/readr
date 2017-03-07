import _ from 'lodash'
import md5 from 'vendor/md5'

export function createCacheId(identifier: any) {
  if (_.isEmpty(identifier)) {
    throw new Error('缓存标识符不能为空！')
  }
  return md5(identifier.toString())
}

export function getCache(key) {
  if (typeof key !== 'string') {
    throw new Error('Name should be string!')
  }
  let content = localStorage.getItem(key)
  if (!content) {
    return undefined
  }

  try {
    content = JSON.parse(content)
  } catch (error) {
    throw error
  }
  return content
}

export function setCache(key, content) {
  if (typeof key !== 'string') {
    throw new Error('Name should be string!')
  }
  if (typeof content !== 'object') {
    throw new Error('Cache content type should be object!')
  }

  const save = () => {
    localStorage.setItem(key, JSON.stringify(content))
  }

  try {
    save()
  } catch (error) {
    if (error.name === 'QuotaExceededError') {
      // TODO: 能否只清除最旧的
      console.warn('本地缓存已满，旧的缓存将被清除！')
      localStorage.clear()
      save()
    } else {
      console.error(error)
    }
  }

  return true
}
