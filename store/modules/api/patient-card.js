import { bindPatientCard } from '@/api/patient-card.js'

const actions = {
	bindPatientCard({commit} ,params){
		return new Promise((resolve, reject) => {
			bindPatientCard(params).then(res => {
				resolve(res.data)
			})
		})
	}
}
export default{
	actions
}