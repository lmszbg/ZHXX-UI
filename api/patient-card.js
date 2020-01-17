import { postAction, getAction, api, deleteAction } from '@/api/manage'

//绑定就诊卡
const bindPatientCard = (params) => postAction(api+"/patient/bindPatientCard",params);
//获得就诊卡列表
const getPatientCardList = (params) => getAction(api+"/patient/getPatientCardList",params);
//设置默认就诊人
const setDefaultPatient = (params) => postAction(api+"/patient/setDefaultPatient",params);
//删除就诊人
const deletePatient = (params) => getAction(api+"/patient/deletePatientCard",params);
//获得就诊卡列表getByUserId
const getByUserId = (params) => post2Action(api+"/patientCard/getByUserId",params);

const getVisitQueue = (params) => getAction(api + "/patient/getVisitQueueNumber", params);

export{
	bindPatientCard,
	getPatientCardList,
	setDefaultPatient,
	deletePatient,
	getByUserId,
	getVisitQueue
}