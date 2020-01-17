// import { postAction, getAction, api, deleteAction, putAction} from '@/api/manage'
import {post2Action, api} from '@/api/manage'
// 登录
const login = (params) => post2Action(api+"/sys/login",params);
// 登出
const logout = (params) => post2Action(api+"/sys/logout",params);
// 搜索
const seach = (params) => post2Action(api+"/sys/seach",params);
// 系统功能数据
const getSys = (params) => post2Action(api+"/sys/getSys",params);

export{
	login,
	logout,
	seach,
	getSys
}