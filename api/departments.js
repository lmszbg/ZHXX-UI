// import { postAction, getAction, api, deleteAction, putAction} from '@/api/manage'
import {post2Action, api} from '@/api/manage'
// 获取科室树
const getDepartmentsList = (params) => post2Action(api+"/department/getListTree",params);
// 获取科室信息
const getDepartmentsInfo = (params) => post2Action(api+"/department/getInfo",params);

export{
	getDepartmentsList,
	getDepartmentsInfo
}