import { sendVCode } from '@/api/user.js'

const actions = {
	sendVcode({commit} ,params){
		return new Promise((resolve, reject) => {
			sendVCode(params).then(res => {
				resolve(res.data)
			})
		})
	}
}
export default{
	actions
}