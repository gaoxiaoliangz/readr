import html from '../../parsers/html'
import _ from 'lodash'

const htmlstring = `
  <div>
    <p>line1</p>
    <p>line2</p>
    <div>
      <p>line1<span>in span</span>out span</p>
      <p>line2</p>
      <div>
      <div>
        <div>
          <p>this is deep<span>in div</span></p>
        </div>
        <div>another div</div>
      </div>
      <div>
        <p>ffffffff</p>
      </div>
      </dvi>
    </div>
    <p>line3</p>
    <p>line4</p>
  </div>
`

const test = async (options) => {
  return html(htmlstring)
}

export default test
