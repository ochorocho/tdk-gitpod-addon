import {LitElement, html} from 'lit'

/**
 * Used to include global styles.
 * Well aware that this is a lousy approach
 * but at least it works and scss can be used.
 */
class StyleSheet extends LitElement {
  createRenderRoot() {
    return this
  }

  render() {
    return html`
      <link rel="stylesheet" href="./../popup.css">`
  }
}

export {StyleSheet}
