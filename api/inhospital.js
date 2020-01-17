import {post2Action, api} from '@/api/manage'
//查询交易记录
const getDeposit = (params) => post2Action(api+"/Hospitalization/InHospitalDepositQuery",params);
//预付缴费
const inHospitalDeposit = (params) => post2Action(api+"/Hospitalization/InHospitalDeposit",params);
//病人住院信息
const inHospitalRegisterQuery = (params) => post2Action(api+"/Hospitalization/InHospitalRegisterQuery",params);
//住院消费账单
const inHospitalFeesQuery = (params) => post2Action(api+"/Hospitalization/InHospitalFeesQuery",params);

export{
	inHospitalDeposit,
	getDeposit,
	inHospitalRegisterQuery,
	inHospitalFeesQuery
}