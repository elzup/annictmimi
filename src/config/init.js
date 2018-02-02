// @flow

import { injectGlobal } from 'styled-components'
import 'moment/locale/ja'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

injectGlobal`
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI',
  'Noto Sans Japanese', 'ヒラギノ角ゴ ProN W3', Meiryo, sans-serif;
  margin: 0;
}
`
