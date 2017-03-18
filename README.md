# Readr - the next generation web reading experience

[http://readrweb.com](http://readrweb.com)

## Naming conventions
* Data API functions start with 'fetch'
* call API function has params id (and options)
* API function using post method uses 'data' param to pass data

### API payload reserved key (deprecated)

> use [flux-standard-action](https://github.com/acdlite/flux-standard-action) instead

options, data, id, response, error

## Todos
	✔ remove legacy webpack config @done (March 7th 2017, 14:21)
	✔ remove legacy hmr module @done (March 7th 2017, 14:21)
	✔ remove legacy render module @done (March 7th 2017, 14:21)
	✔ add dll webpack plugin @done (March 7th 2017, 14:21)
	✔ fix build error @done (March 7th 2017, 14:42)
	✔ make tests work @done (March 7th 2017, 19:10)
	✔ summarize built files @done (March 7th 2017, 15:19)
	✔ categorize css, js and media files @done (March 7th 2017, 14:43)
	✔ vendor_modules @done (March 7th 2017, 22:39)
	✔ api tests @done (March 8th 2017, 11:17)
	✔ use public folder @done (March 8th 2017, 9:40)
	✔ vendor.dll resolve @done (March 8th 2017, 9:41)
	✔ split bin @done (March 9th 2017, 0:19)
	✔ deploy solution @done (March 9th 2017, 0:19)
	✔ remove gulp @done (March 8th 2017, 14:10)
	✔ port @done (March 9th 2017, 15:07)
	✔ isomorphic env solution @done (March 9th 2017, 15:07)
	✔ webpack port @done (March 9th 2017, 15:07)
	☐ beautify build file report
	✔ manage node process in one console @done (March 10th 2017, 13:14)
	✔ merge api with main server @done (March 10th 2017, 13:14)
	✔ remove app.config @done (March 10th 2017, 18:01)
	☐ test 500 error
	✔ test 404 fe @done (March 10th 2017, 19:57)
	✔ test 404 server @done (March 10th 2017, 19:57)
	☐ books page promise rejection (Error: only absolute urls are supported)
	✔ mobile progress label bug @done (March 10th 2017, 19:34)
	✔ jquery error @done (March 10th 2017, 19:57)
	✔ fetch saga data server side @done (March 10th 2017, 19:57)
	✔ render server side login state @done (March 13th 2017, 14:32)
	☐ server log config
	✔ node generator code with sourcemap support @done (March 12th 2017, 0:27)
	☐ common props decorator
	☐ use new request wrap
	☐ refactor books action
	☐ refactor shelf action
	☐ pass runtime env to test suit
	☐ react hot error page
	☐ use a better loading style
	☐ current page state

### Refactor
	☐ api flow
	☐ redux actions
	☐ fetching state
	☐ pagination
	✔ file tree @done (March 13th 2017, 14:33)

### Optimization
	☐ File handling flow, something to do with validation and middleware

### UX
	☐ Changing theme status
	☐ disable page flip in mobile mode

to be continued...
