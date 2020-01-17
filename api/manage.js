export const api = 'http://60.176.28.134:801/jeecg-boot/mo/'


export function post2Action(url, parameter){
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			method:'POST' ,
			header: {
			    'content-type': 'application/x-www-form-urlencoded' // 改变默认值为这个配置
			},
			data: parameter,
			success(res) {
				console.log(res.data);
				if(res.data.code === 200||res.statusCode === 200){ // 业务成功code 200 后期可以改
					resolve(res)
				}
			},
			fail(res) {
				console.log(res.errMsg);
				reject(res)
			}
		})
	})	
}

export function postActionOnForm(url, parameter){
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			method:'POST' ,
			data: parameter,
			header: {
			    'content-type': 'application/x-www-form-urlencoded'
			},
			success(res) {
				if(res.statusCode === 200){
					resolve(res)
				}
			},
			fail(res) {
				reject(res)
			}
		})
	})	
}

export function postAction(url, parameter){
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			method:'POST' ,
			data: parameter,
			success(res) {
				if(res.statusCode === 200){
					resolve(res)
				}
			},
			fail(res) {
				reject(res)
			}
		})
	})	
}

export function getAction(url, parameter){
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			method:'GET' ,
			data: parameter,
			success(res) {
				if(res.statusCode === 200){
					resolve(res)
				}
			},
			fail(res) {
				reject(res)
			}
		})
	})	
}
