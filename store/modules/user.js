const state = {
	user: {
		openId: '',
		username: '',
		defaultPatientCardId: '',
		headImage: '',
		patientCardNum: 0,
		token: ''
	}
}

const mutations = {
	setOpenId (state, openId) {
		state.user.openId = openId
	}
}

const getters = {
	user: state => state.user
}

const actions = {
	
}
export default{
  state,
	mutations,
	getters,
	actions
}