// import { postAction, getAction, api, deleteAction, putAction} from '@/api/manage'
import {post2Action, api} from '@/api/manage'
// 获取科室树
const getDoctorsList = (params) => post2Action(api+"/doctor/getListTree",params);
// 获取科室信息
const getDoctorsInfo = (params) => post2Action(api+"/doctor/getInfo",params);

export{
	getDoctorsList,
	getDoctorsInfo
}