import {LitElement, html} from 'lit-element'

class DropDown extends LitElement {
  static get properties() {
    return {
      label: String,
      items: Array
    }
  }

  constructor() {
    super()
    this.label = ''
    this.items = []
  }

  render() {
    return html`
      <style-sheet/>

      <div class="container">
        <label class="label">${this.label}</label>
        <div class="value">
          ${this.items.length
            ? html`${this.select()}`
            : html`<span class="loading"></span>`}
        </div>
      </div>
    `
  }

  firstUpdated(changedProperties) {
    const objectProp = 'TDK_' + this.label.toUpperCase().replace(' ', '_')
    console.log('Update called ' + objectProp)
    if (this.renderRoot.querySelector('select')) {
      this.form[objectProp] = this.renderRoot.querySelector('select').value
    }
  }

  select() {
    return html`
      <select>
        ${this.items.map(item => html`
          <option value="${item.value}">${item.name}</option>`)}
      </select>
    `
  }
}

export {DropDown}
