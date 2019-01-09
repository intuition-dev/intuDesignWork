console.info('setup', "v2.06.2")

/*
// http://github.com/logzio/logzio-js
(function(window) {
	const LogzioLogger = function(apiKey, sendConsoleJsErrors) {
		this.key = apiKey
		if (sendConsoleJsErrors) sendConsoleErrors()
	}
  let sendConsoleErrors = function() {
	  window.onerror = function (msg, url, line, col) {
			LogzioLogger.log({
				message: msg,
				url: url,
				line: line,
				col: col
			})
		}
	}
	LogzioLogger.prototype.log = function(data) {
		 try {
			let parsedMsg = typeof data == 'object' ? data : { message:data }
			let logUrl = window.location.protocol + '//listener.logz.io:'
			logUrl += (window.location.protocol === 'http:' ? '8090' : '8091') + '?token=' + this.key
			Object.keys(parsedMsg).forEach(function(key) {
				logUrl += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(parsedMsg[key])
			})
			let logImg = new Image()
			logImg.src = logUrl
		 } catch (ex) {
			if (window && window.console && typeof window.console.log == 'function')
				console.info("Failed to send log because of exception:\n" + ex)
		 }
	}
	window.LogzioLogger = LogzioLogger
})(window)

window.log = new LogzioLogger('__YOUR_API_TOKEN__')

log.log('Hello, this is just a test')

*/

// ////////////////////////////////////////////////////////////////////////////

loadjs([
    '//cdn.jsdelivr.net/npm/semantic-ui@2.3.1/dist/components/sidebar.min.js'
    //,
], 'cssJs')
$(document).ready(function () {
    loadjs.done('site') // "done with bundle 'site'", need this because we're not loading js here
})

function cssLoaded() {// called by the style sheet in layout
    console.info('css loaded', Date.now() - _start)
    loadjs.done('css')
}

loadjs.ready(['css', 'cssJs', 'site'], function () {
    setTimeout(function () {
        loadjs.done('style')
    }, 1000 / 60)
})

loadjs.ready(['style'], function () { //load large css
    setTimeout(function () {
        loadjs(['/assets/css/semantic2.css'
            , '//unpkg.com/vivid-icons@4.0.0/dist/css/vivid-icons.min.css' // http://vivid-icons.com/usage
        ], 'css2')
    }, 1000 / 60)
})

// util: /////////////////////////////////////////////////////////////////////
function getUrlVars() {
    var vars = [], hash
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=')
        vars.push(hash[0])
        vars[hash[0]] = hash[1]
    }
    return vars
}
