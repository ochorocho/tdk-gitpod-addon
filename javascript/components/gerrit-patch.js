import {LitElement, html} from 'lit-element'
import {Gerrit} from '../utils/Gerrit'

class GerritPatch extends LitElement {
  static get properties() {
    return {
      patch: String,
      revision: String
    }
  }

  constructor() {
    super()
    this.patch = ''
    this.revision = ''
  }

  render() {
    this.updatePatchSet()

    return html`
      <style-sheet/>

      <div>
        Patch: #${this.patch}<br>
        Revision: ${this.revision}
      </div>
    `
  }

  updatePatchSet() {
    if (this.revision === null) {
      const gerrit = new Gerrit()
      gerrit.revision(this.patch).then(data => {
        this.revision = data._number
      })
    }
  }
}

export {GerritPatch}
