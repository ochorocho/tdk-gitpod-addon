import {LitElement, html} from 'lit-element'

class TdkButton extends LitElement {
  static get properties() {
    return {
      url: String
    }
  }

  constructor() {
    super()
    this.url = ''
  }

  render() {
    return html`
      <style-sheet/>

      <button class="popup-link" data-i18n="openButton">
        Open in GitPod
      </button>
    `
  }
}

export {TdkButton}
