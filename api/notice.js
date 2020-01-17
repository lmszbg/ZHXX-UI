// import { postAction, getAction, api, deleteAction, putAction} from '@/api/manage'
import {post2Action, api} from '@/api/manage'
// 获取消息通知
const getNoticesList = (params) => post2Action(api+"/notice/getList",params);
const getNoticesPage = (params) => post2Action(api+"/notice/getPage",params);
// 获取修改消息通知
const updateStatus = (params) => post2Action(api+"/notice/update",params);

export{
	getNoticesList,
	getNoticesPage,
	updateStatus
}