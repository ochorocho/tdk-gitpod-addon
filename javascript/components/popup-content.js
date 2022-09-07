import {LitElement, html} from 'lit'
import {Gerrit} from '../utils/gerrit'

class PopupContent extends LitElement {
  static get properties() {
    return {
      url: String,
      branches: Array,
      php: Array,
      form: {type: Object, reflect: true}
    }
  }

  constructor() {
    super()
    this.url = ''
    this.branches = []
    this.php = [{name: '8.1', value: '8.1'}, {name: '8.0', value: '8.0'}, {name: '7.4', value: '7.4'}]
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

    this.addEventListener('open-in-gitpod', (e) => {
      this.handleSubmit()
    })
  }

  render() {
    this.tab.then((tabs) => {
      console.log(tabs[0].url)
      this.url = tabs[0].url
      this.isAvailable = tabs[0].url.toString().includes('review.typo3.org')
    })

    this.patch = this.gerrit.parse(this.url)
    const patchSelector = this.patch
      ? html`<gerrit-patch .form="${this.form}"
                           .patch="${this.patch.id}"
                           .revision="${this.patch.revision}">
      </gerrit-patch>`
      : ''

    if (this.isAvailable) {
      return html`
        <style-sheet/>

        <form method="post" id="GitPodForm">
          <tdk-username .form="${this.form}" label="Username"></tdk-username>
          ${patchSelector}
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

  handleSubmit() {
    if (this.patch) {
      this.form.TDK_PATCH_ID = this.patch.id
    }

    const env = Object.keys(this.form).map((key) => [key, encodeURIComponent(this.form[key])].join('=')).join(',')
    const gitPod = 'https://gitpod.io/#' + env + '/https://github.com/ochorocho/tdk/'
    window.open(gitPod)
  }
}

export {PopupContent}
