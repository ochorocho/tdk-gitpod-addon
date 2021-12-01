import {LitElement, html} from 'lit'

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

      <button @click="${this.submitForm}" id="open-git-pod" type="submit" class="gitpod">
        Open in GitPod
      </button>
    `
  }

  submitForm() {
    this.dispatchEvent(new CustomEvent('open-in-gitpod', {bubbles: true, composed: true}))
  }
}

export {TdkButton}
