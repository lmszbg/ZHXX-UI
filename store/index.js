import Vue from 'vue'
import vuex from 'vuex'
import User from './modules/user.js'

import api_user from './modules/api/user.js'
import patient_card from './modules/api/patient-card.js'
// import Hospitalinfo from './modules/api/hospitalinfo.js'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
		User,
		api_user,
		patient_card,
		// Hospitalinfo
  }
})