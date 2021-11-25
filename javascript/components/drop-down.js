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
