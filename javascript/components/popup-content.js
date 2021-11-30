import {LitElement, html} from 'lit-element'
import {Gerrit} from '../utils/gerrit'

class PopupContent extends LitElement {
  static get properties() {
    return {
      url: String,
      branches: Array,
      php: Array,
      form: { type: Object, reflect: true }
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
    this.form = {}
    this.tab.then((tabs) => {
      this.url = tabs[0].url
    })

    this.gerrit.branches().then(data => {
      this.branches = data
    })
  }

  render() {
    console.log('PARENT FORM RENDER', this.form)
    this.patch = this.gerrit.parse(this.url)
    if (this.patch) {
      return html`
        <style-sheet></style-sheet>

        <form @submit="${(e) => this.handleSubmit(e)}" method="post" id="GitPodForm">
          <tdk-username .form="${this.form}" label="Username"></tdk-username>
          <gerrit-patch .form="${this.form}" .patch="${this.patch.id}"
                        .revision="${this.patch.revision}"></gerrit-patch>
          <drop-down .form="${this.form}" label="Branch" .items="${this.branches}"></drop-down>
          <drop-down .form="${this.form}" label="PHP Version" .items="${this.php}"></drop-down>
          <tdk-button></tdk-button>
        </form>
      `
    } else {
      return html`
        <not-available/>`
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.form.TDK_PATCH_ID = this.patch.id
    console.log(this.form)
  }
}

export {PopupContent}
