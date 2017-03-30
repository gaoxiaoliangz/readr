import html from '../../parsers/html'

const test = async (options) => {
  const h = html('<div class="name222">sfsdfsd</div><p></p>').documentElement.childNodes.length

  return { hehe: h }
}

export default test
