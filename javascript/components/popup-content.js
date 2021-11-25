import {LitElement, html} from 'lit-element'
import {Gerrit} from '../utils/Gerrit'

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

    this.tab.then((tabs) => {
      this.url = tabs[0].url
    })

    this.gerrit.branches().then(data => {
      this.branches = data
    })
  }

  render() {
    const patch = this.gerrit.parse(this.url)
    if (patch) {
      return html`
        <gerrit-patch label="Patch" .patch="${patch.id}" .revision="${patch.revision}"></gerrit-patch>
        <username label="Username"></username>
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
