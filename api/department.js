// import { postAction, getAction, api, deleteAction, putAction} from '@/api/manage'
import {post2Action, api} from '@/api/manage'
// 获取科室列表
const getDepartments = (params) => post2Action(api+"/main/RegDeptTest",params);

export{
	getDepartments
}