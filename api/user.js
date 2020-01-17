import { postAction, getAction, api } from '@/api/manage'

const sendVCode = (params)=>getAction(api+"/patient/sendVCode",params);

export{
	sendVCode,
}