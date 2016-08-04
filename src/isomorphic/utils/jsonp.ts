import handleResponseJson from './handleResponseJson'

function jsonp(fullUrl, config: { schema?: {} }) {
  if (fullUrl.indexOf('douban') !== -1) {
    let id = new Date().valueOf()
    let jsonpId = 'jsonp-' + id
    let jsonpCallback = 'jsonpCallback' + id
    let jsonpCallbackData = `__JSONP_DATA_${id}__`

    window[jsonpCallback] = function (data) {
      window[jsonpCallbackData] = data
    }

    let script = document.createElement('script')

    script.setAttribute('src', `${fullUrl}&callback=${jsonpCallback}`)
    script.setAttribute('id', jsonpId)
    document.body.appendChild(script)

    return new Promise(resolve => {
      script.onload = function () {
        document.body.removeChild(document.getElementById(jsonpId))
        let json = window[jsonpCallbackData]

        resolve(handleResponseJson(json, config.schema))
      }
    })
  }
}

export default jsonp
