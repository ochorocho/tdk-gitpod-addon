import {LitElement, html} from 'lit'

class DropDown extends LitElement {
  static get properties() {
    return {
      label: String,
      items: Array,
      env: String
    }
  }

  constructor() {
    super()
    this.label = ''
    this.items = []
    this.env = ''
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

  select() {
    return html`
      <select @change="${e => this.updateSelectValue(e.target)}">
        ${this.items.map(item => html`
          <option value="${item.value}">${item.name}</option>`)}
      </select>
    `
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties)
    this.env = 'TDK_' + this.label.toUpperCase().replace(' ', '_')
  }

  updated(args) {
    const select = this.renderRoot.querySelector('select')

    if (select) {
      this.form[`${this.env}`] = select.value
    }
  }

  updateSelectValue(item) {
    this.form[`${this.env}`] = item.value
  }
}

export {DropDown}
