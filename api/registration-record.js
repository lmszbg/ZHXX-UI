import { postAction, getAction, api, postActionOnForm } from '@/api/manage'

const registrationRecord = (params)=>postAction(api+"/registration-record/getInfo",params);
const onlineCallNumber = (params)=>postAction(api+"/registration-record/online-call-number",params);
const guahaoinsert = (params)=>postAction(api+"/registration-record/guahaoinsert",params);
const placeOrder = (params)=>postAction(api+"/pay/placeOrder ",params);
const checkOrder = (params)=>postActionOnForm(api+"/registration-record/pollingPay", params)
const searchStatus = (params)=>postActionOnForm(api+"/registration-record/searchStatus", params)

export{
	registrationRecord,
	onlineCallNumber,
	guahaoinsert,
	placeOrder,
	checkOrder,
	searchStatus,
}