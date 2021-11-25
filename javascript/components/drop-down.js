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

      <label>${this.label}
        ${this.items.length
          ? html`${this.select()}`
          : html`<span class="loading"></span>`}
      </label>
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
