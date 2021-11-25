import {LitElement, html} from 'lit-element'
import {Gerrit} from '../utils/gerrit'

class GerritPatch extends LitElement {
  static get properties() {
    return {
      patch: String,
      revision: String,
      revisions: Object
    }
  }

  constructor() {
    super()
    this.patch = ''
    this.revision = ''
    this.revisions = {}
  }

  render() {
    return html`
      <style-sheet></style-sheet>

      <div class="container">
        <div class="label">Patch</div>
        <div class="value">#${this.patch}</div>
      </div>
      <div class="container">
        <div class="label">Revision</div>
        <div class="value">
          ${!this.revisions.length
            ? html`${this.select()}`
            : html`<span class="loading"></span>`}
        </div>
      </div>
    `
  }

  firstUpdated(changedProperties) {
    const gerrit = new Gerrit()
    gerrit.revision(this.patch, this.revision).then(data => {
      this.revisions = data
      console.log(Array.from(data), data)
    })
  }

  // @todo: Use existing dropdown component?!
  select() {
    return html`
      <select>
        ${Object.entries(this.revisions).map(item => html`
          <option ?selected=${item[1].selected === true} value="${item[1]._number}">${item[1]._number}</option>`)}
      </select>
    `
  }
}

export {GerritPatch}
