import { postAction, getAction, api } from '@/api/manage'

const registrationDetail = (params)=>postAction(api+"/registration-record/detail",params);
const registrationCancel = (params)=>postAction(api+"/registration-record/cancel",params);

export{
	registrationDetail,
	registrationCancel,
}