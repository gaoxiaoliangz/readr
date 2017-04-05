const phantom = require('phantom')

const instance = phantom.create()
instance.then(ins => {
  ins.createPage().then(page => {
    page.on('onResourceRequested', (requestData) => {
      console.info('Requesting', requestData.url)
    })

    page.open('http://readrweb.com/').then(status => {
      // console.log(status)
      // ins.exit()
      // page.property('content').then(content => {
      //   console.log(content)
      // })

      // page.evaluate(function() {
      //   const $root = document.getElementById('root')
      //   console.log($root.clientHeight)
      //   return 
      // }).then(function(html) {
      //   console.log(html.title)
      //   ins.exit()
      // })

      page
        .evaluate(`function getContent() {
          // phantom env
          const $ele = document.getElementsByClassName('page-title_24K24')[0]
          return $ele.clientHeight
          // ins.exit()
        }`)
        .then((height) => {
          console.log(height)
          ins.exit()
        })
    })
  })
})

const htmlstring6 = `
  <div>
    <h1>chapter 1</h1>
    <p>line 1 with <strong>bold</strong> char</p>
    <ul>
      <li>root list 1</li>
      <li>root list 2</li>
      <li>root list 3</li>
      <li>
        <ul>
          <li>root2 list 1 (2,3,0,0,0)</li>
          <li>root2 list 2</li>
          <li>root2 list 3</li>
          <li><img src="a.jpg"/></li>
          <li>
            <ul>
              <li>root3 list 1</li>
              <li>root3 list 2</li>
              <li>root3 list 3</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <p>line 8</p>
    <p>line 9</p>
    <p>line 10</p>
  </div>
`

// phantom.create((ph) => {
//   ph.createPage((page) => {
//     page.set('viewportSize', { width: 1440, height: 900 })

//     // like this
//     page.set('content', htmlstring6)

//     page.render('/Users/liang/Downloads/phantom_out', () => {
//       // now pdf is written to disk.
//       ph.exit()
//     })
//   })
// })


// const instance = phantom.create()
// instance.then(ins => {
//   ins.createPage().then(page => {
//     // page.on('onResourceRequested', (requestData) => {
//     //   console.info('Requesting', requestData.url)
//     // })

//     // page.open('https://stackoverflow.com/').then(status => {
//     //   // console.log(status)
//     //   // ins.exit()
//     //   page.property('content').then(content => {
//     //     console.log(content)
//     //   })
//     // })


//     page.set('viewportSize', { width: 1440, height: 900 })
//     // like this
//     page.set('content', htmlstring6)

//     page.render('/Users/liang/Downloads/phantom_out', () => {
//       // now pdf is written to disk.
//       ins.exit()
//     })
//   })
// })
