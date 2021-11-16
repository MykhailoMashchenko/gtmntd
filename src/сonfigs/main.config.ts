/* MODULES */
import CONFIG from 'react-native-config'

export default {
  // ENV: CONFIG.ENV,
  ENV: CONFIG.ENV || 'prod',

  API_URL: CONFIG.API_URL,

  ENABLE_LOGS: __DEV__,
  TOC: 'https://www.treezor.com/mentions-legales/',
  PP: 'https://www.treezor.com/politique-confidentialite/',

  // HI_PAY
  BASE_URL_CARD: CONFIG.BASE_URL_CARD,
}
