import '../scss/tdk.scss'

// const gettingStoredSettings = browser.storage.local.get()
//
// /**
//  * Get addon settings
//  */
// gettingStoredSettings.then(function (data) {
//   // const settingsSearch = Object.assign({method: 'account/search'}, data)
//   // const port = window.location.port !== '' ? ':' + window.location.port : ''
//   // const text = window.location.host + port + window.location.pathname
//   // settings = data
//
//   // chrome.runtime.sendMessage({
//   //     contentScriptQuery: 'accountSearch',
//   //     text: text,
//   //     settings: settingsSearch
//   // }, data => selectLogin(data))
// })

// chrome.runtime.onMessage.addListener(request => {
//   if (request.command === 'fillOutForm') {
//     // usernameField.value = `${request.login}`
//
//     // spinner()
//     // const settingsPassword = Object.assign({ method: 'account/viewPass', id: request.id }, settings)
//     // chrome.runtime.sendMessage({ contentScriptQuery: 'getPassword', settings: settingsPassword }, data => {
//     //     passwordField.value = data.result.result.password
//     //     document.getElementById('syspass-spinner').remove()
//     // })
//   }
// })

/**
 * Loading indicator
 */
// function spinner() {
//   const spinnerHtml = document.createElement('div')
//   const pw = passwordField.getBoundingClientRect()
//   const top = pw.height - (pw.height * 0.9)
//
//   spinnerHtml.innerHTML = '<div id="syspass-spinner" class="syspass-spinner"></div>'
//   spinnerHtml.style.cssText = 'position: absolute; z-index: 1000'
//   spinnerHtml.style.top = (pw.top + top / 2) + 'px'
//   spinnerHtml.style.left = (pw.left - pw.height + pw.width) + 'px'
//   spinnerHtml.style.height = (pw.height * 0.9) + 'px'
//   spinnerHtml.style.width = (pw.height * 0.9) + 'px'
//
//   document.body.appendChild(spinnerHtml)
// }
