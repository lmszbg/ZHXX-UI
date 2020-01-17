import { postAction, getAction, api, deleteAction } from '@/api/manage'

//获得报告
const getJianchaByPatientId = (params) => postAction(api+"/report/getJianchaByPatientId",params);
//获得报告详情
const getReportInformation = (params) => getAction(api+"/report/getReportInformation", params);
//获得检验报告时间进程
const getReportInformationTime = (params) => getAction(api +"/report/getReportInformationTime", params)

export{
	getJianchaByPatientId,
	getReportInformation,
	getReportInformationTime
}