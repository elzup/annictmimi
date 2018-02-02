// @flow

import { injectGlobal } from 'styled-components'
import 'moment/locale/ja'

injectGlobal`
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI',
  'Noto Sans Japanese', 'ヒラギノ角ゴ ProN W3', Meiryo, sans-serif;
  margin: 0;
}
`
