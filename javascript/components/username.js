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
  }

  render() {
    this.getUsername()

    return html`
      <style-sheet/>

      <div class="container">
        <div class="label">Username</div>
        <div class="value">${this.username}</div>
      </div>
    `
  }

  getUsername() {
    const gerrit = new Gerrit()
    gerrit.username().then(data => {
      this.username = data.username
    })
  }
}

export {Username}
