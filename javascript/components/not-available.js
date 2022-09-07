import {LitElement, html} from 'lit'

class NotAvailable extends LitElement {
  static get properties() {
    return {
      url: String
    }
  }

  constructor() {
    super()
    this.url = 'https://review.typo3.org/'
  }

  render() {
    return html`
      <style-sheet/>

      <p class="not-available">
        To use this plugin go to<br>
        <a href="${this.url}" target="_blank">TYPO3 Gerrit</a><br>
        and select a patch
      </p>
    `
  }
}

export {NotAvailable}
