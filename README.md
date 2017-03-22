# Readr - the next generation web reading experience

[http://readrweb.com](http://readrweb.com)

## Naming conventions
* Data API functions start with 'fetch'
* call API function has params id (and options)
* API function using post method uses 'data' param to pass data

### API payload reserved key (deprecated)

> use [flux-standard-action](https://github.com/acdlite/flux-standard-action) instead

options, data, id, response, error

## Done
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
	✔ manage node process in one console @done (March 10th 2017, 13:14)
	✔ merge api with main server @done (March 10th 2017, 13:14)
	✔ remove app.config @done (March 10th 2017, 18:01)
	✔ test 404 fe @done (March 10th 2017, 19:57)
	✔ test 404 server @done (March 10th 2017, 19:57)
	✔ books page promise rejection (Error: only absolute urls are supported) @done (March 21st 2017, 10:18)
	✔ mobile progress label bug @done (March 10th 2017, 19:34)
	✔ jquery error @done (March 10th 2017, 19:57)
	✔ fetch saga data server side @done (March 10th 2017, 19:57)
	✔ render server side login state @done (March 13th 2017, 14:32)
	✔ server log config @done (March 21st 2017, 10:19)
	✔ node generator code with sourcemap support @done (March 12th 2017, 0:27)
	✔ use new request wrap @done (March 21st 2017, 10:19)
	✔ refactor books action @done (March 21st 2017, 10:19)
	✔ refactor shelf action @done (March 21st 2017, 10:19)
	✔ react hot error page @done (March 21st 2017, 10:19)
	✔ use a better loading style @done (March 21st 2017, 10:19)
	✔ current page state @done (March 21st 2017, 10:19)
	✔ split actions @done (March 21st 2017, 10:19)

### Next
	☐ fix login
	☐ fix animation
	☐ page no style
	☐ fix dropdown on mobile
	✔ fix recent reading @done (March 22nd 2017, 1:21)
	☐ add status text
	✔ fix shelf @done (March 22nd 2017, 1:21)
	✔ fix book detail @done (March 22nd 2017, 1:21)
	☐ better 500 page
	☐ use blurred panel

### Test
	☐ pass runtime env to test suit

### Bugs
	☐ in-book navigation
	☐ dropdown on mobile won't hide
	☐ in-book links contain child element

### Feature
	☐ remove reading history
	☐ modify profile
	☐ backend db management
	☐ add home hero image
	☐ home screen responsive
	☐ mobile console
	☐ add image support

### Refactor & Optimization
	☐ api flow
	✔ redux actions @done (March 21st 2017, 10:19)
	✔ fetching state @done (March 21st 2017, 10:19)
	✔ pagination @done (March 21st 2017, 10:19)
	✔ file tree @done (March 13th 2017, 14:33)
	☐ File handling flow, something to do with validation and middleware
	☐ beautify build file report

### UX
	☐ Changing theme status
	✔ disable page flip in mobile mode @done (March 21st 2017, 10:19)

### Proposal
	☐ common props decorator
	☐ model schema typing
	☐ use react motion
	☐ use og meta tag
	☐ use token authentication
	☐ rejection handle in validator
	☐ global view

to be continued...
