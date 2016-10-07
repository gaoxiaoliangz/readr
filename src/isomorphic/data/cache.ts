import md5 from '../../vendor_modules/md5'
import _ from 'lodash'

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

  try {
    localStorage.setItem(key, JSON.stringify(content))
  } catch (error) {
    throw error
  }

  return true
}
