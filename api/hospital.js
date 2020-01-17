// import { postAction, getAction, api, deleteAction, putAction} from '@/api/manage'
import {post2Action, api} from '@/api/manage'
// 获取医院信息
const getHospitalInfo = (params) => post2Action(api+"/hospital/getInfo",params);
// 获取轮播图片
const getHospitalImg = (params) => post2Action(api+"/hospital/getImg",params);

export{
	getHospitalInfo,
	getHospitalImg
}