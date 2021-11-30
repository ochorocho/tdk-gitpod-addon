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

  createRenderRoot() {
    return this
  }

  render() {
    return html`
      <button id="open-git-pod" type="submit" class="gitpod">
        Open in GitPod
      </button>
    `
  }
}

export {TdkButton}
