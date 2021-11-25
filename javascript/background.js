import {Gerrit} from './utils/Gerrit'

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const gerrit = new Gerrit()
  if (request.contentScriptQuery === 'branches') {
    gerrit.branches().then(data => sendResponse(data))
    return true
  }
})
