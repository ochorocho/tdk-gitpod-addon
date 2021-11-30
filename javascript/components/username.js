import {LitElement, html} from 'lit-element'
import {Gerrit} from '../utils/gerrit'

class Username extends LitElement {
  static get properties() {
    return {
      username: String
    }
  }

  constructor() {
    super()
    this.username = ''
    this.getUsername()
  }

  render() {
    return html`
      <style-sheet/>
      <div class="container">
        <div class="label">Username</div>
        <div class="value">${this.username.length
          ? html`${this.username}`
          : html`
            <div class="alert-warning">Can't detect username, please <a
              href="https://review.typo3.org/login/%2Fc%2FPackages%2FTYPO3.CMS%2F%2B%2F72275%2F">login</a> (optional)
            </div>`}
        </div>
      </div>
    `
  }

  getUsername() {
    const gerrit = new Gerrit()
    gerrit.username().then(data => {
      this.username = data.username || ''
      this.form.TDK_USERNAME = this.username.length ? this.username : 'none'
    })
  }
}

export {Username}
