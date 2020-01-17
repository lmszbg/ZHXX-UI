import { hospitalInformation } from '@/api/hospital-information.js'

const actions = {
	hospitalInformation({commit} ,params){
		return new Promise((resolve, reject) => {
			hospitalInformation(params).then(res => {
				resolve(res.data)
			})
		})
	}
}
export default{
	actions
}