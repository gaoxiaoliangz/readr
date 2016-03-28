const bookId = "56987bd2016169d440f3e33d"
const fullUrl = "/api/v0.1/books/" + bookId + '/content/'

function fetchBookData(fullUrl) {
	return new Promise(function(resolve){
		fetch(fullUrl).then(function(res){
			return res.json()
		}).then(function(json){
			resolve(json)
		})
	})
}

export function setLang(lang) {
	return { type: "SETLANG", lang: lang }
}

export function loadBook(bookId) {
	return {
		type: "LOAD",
		data: fetchBookData(fullUrl)
	}
}
