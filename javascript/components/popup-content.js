import {LitElement, html} from 'lit-element'
import {Gerrit} from '../utils/gerrit'

class PopupContent extends LitElement {
  static get properties() {
    return {
      url: String,
      branches: Array,
      php: Array
    }
  }

  constructor() {
    super()
    this.url = ''
    this.branches = []
    this.php = [{name: '7.4', value: '7.4'}, {name: '8.0', value: '8.0'}, {name: '8.1', value: '8.1'}]
    this.gerrit = new Gerrit()
    this.tab = browser.tabs.query({currentWindow: true, active: true})
    this.patch = {}
    this.tab.then((tabs) => {
      this.url = tabs[0].url
    })

    this.gerrit.branches().then(data => {
      this.branches = data
    })
  }

  render() {
    this.patch = this.gerrit.parse(this.url)
    if (this.patch) {
      return html`
        <style-sheet></style-sheet>

        <tdk-username label="Username"></tdk-username>
        <gerrit-patch .patch="${this.patch.id}" .revision="${this.patch.revision}"></gerrit-patch>

        <drop-down label="Branch" .items="${this.branches}"></drop-down>
        <drop-down label="PHP Version" .items="${this.php}"></drop-down>
        <tdk-button></tdk-button>
      `
    } else {
      return html`
        <not-available/>`
    }
  }
}

export {PopupContent}
