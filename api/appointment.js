import {post2Action, api} from '@/api/manage'
//获取排班表
const getSchedules = (params) => post2Action(api+"/main/RegScheduleTest",params);
//获取号源
const getNumberSources = (params) => post2Action(api+"/main/RegNumberSources",params);
//用户收藏操作
const doctorCollection = (params) => post2Action(api+"/Collection/DoctorCollection",params);
//获取用户收藏
const selectCollection = (params) => post2Action(api+"/Collection/SelectCollection",params);


export{
	getSchedules,
	getNumberSources,
	selectCollection,
	doctorCollection
}