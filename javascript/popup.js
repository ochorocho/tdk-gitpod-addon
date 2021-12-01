import '../scss/popup.scss'
import {PopupContent} from './components/popup-content'
import {NotAvailable} from './components/not-available'
import {TdkButton} from './components/tdk-button'
import {StyleSheet} from './components/style-sheet'
import {DropDown} from './components/drop-down'
import {GerritPatch} from './components/gerrit-patch'
import {Username} from './components/username'

customElements.define('popup-content', PopupContent)
customElements.define('not-available', NotAvailable)
customElements.define('tdk-button', TdkButton)
customElements.define('style-sheet', StyleSheet)
customElements.define('drop-down', DropDown)
customElements.define('gerrit-patch', GerritPatch)
customElements.define('tdk-username', Username)
