/**
 * Vuetify global loading & settings
 *
 * @see https://github.com/vuetifyjs/vuetify
 * @see https://vuetifyjs.com/en/features/theme
 */
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const vuetify = createVuetify({
  ssr: true,
  theme: {
    defaultTheme: 'nfDark',
    themes: {
      nfDark: {
        dark: true,
        colors: {
          primary: '#D500F9',
          secondary: '#00BCD4',
          accent: '#687ffc',
          error: '#b71c1c',
          info: '#2196f3',
          success: '#4caf50',
          warning: '#ff9800',
          text: '#ececec'
        }
      }
    }
  }
})

export default vuetify
