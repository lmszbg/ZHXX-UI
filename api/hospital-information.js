import { postAction, getAction, api } from '@/api/manage'

const hospitalInformation = (params)=>postAction(api+"/hospital_information/getInfo",params);

export{
	hospitalInformation,
}