<template>
	<view>
		<popup :show="show" :type="type" :custom="true" :mask-click="false">
			<view class="uni-tip">
				<view class="uni-tip-title">提示</view>
				<view class="uni-tip-content">{{message}}(CODE:{{code}})</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button button-color1" @click="cancel()">确定</view>
				</view>
			</view>
		</popup>
	
	<view v-if="status == 3">
		<view class="ghxq_head" style="background-color:#999999;">
			<view class="ghxq_head_left"></view>
			<view class="ghxq_head_s"></view>
			<view class="ghxq_head_z">
				<view class="ghxq_head_z_one">
					<span class="iconfont icon" :class='list[status-1].one'></span>
				</view>
				<view class="ghxq_head_z_two">
					<view class="ghxq_head_z_two_kg"></view>
					{{list[status-1].two}}
				</view>
			</view>
			<view class="ghxq_head_x">
				<br><br>
				{{list[status-1].three}}
			</view>
		</view>
	</view>
	
	<view v-if="status == 8">
		<view class="ghxq_head" style="background-color:#999999;">
			<view class="ghxq_head_left"></view>
			<view class="ghxq_head_s"></view>
			<view class="ghxq_head_z">
				<view class="ghxq_head_z_one">
					<span class="iconfont icon icon-jinzhi1"></span>
				</view>
				<view class="ghxq_head_z_two">
					<view class="ghxq_head_z_two_kg"></view>
					挂号失败
				</view>
			</view>
			<view class="ghxq_head_x">
				<br><br>
				抱歉，支付失败，如有需要，请稍后重试！
			</view>
		</view>
	</view>

	<view v-else-if="status == 1">
		<view class="ghxq_head" style="background-color:#00CC99;">
			<view class="ghxq_head_left"></view>
			<view class="ghxq_head_s"></view>
			<view class="ghxq_head_z">
				<view class="ghxq_head_z_one">
					<span class="iconfont icon" :class='list[status-1].one'></span>
				</view>
				<view class="ghxq_head_z_two">
					<view class="ghxq_head_z_two_kg"></view>
					{{list[status-1].two}}
					<view style="float: right;height: 100%;width: 50%;text-align: right;">
						<view style="float: right;height: 100%;width: 15%;text-align: right"></view>
						<!-- <count-down :endTime="uniX" :callback="callback" endText=""></count-down> -->
						<count-down :endTime="uniX" :callback="callback" endText="" :sid="sid"></count-down>
					</view>
				</view>
			</view>
			<view class="ghxq_head_x">
				<br><br>
				{{list[status-1].three}}
			</view>
		</view>
	</view>
	<view v-else-if="status == 2">
		<view class="ghxq_head" style="background-color:#00CC99;">
			<view class="ghxq_head_left"></view>
			<view class="ghxq_head_s"></view>
			<view class="ghxq_head_z">
				<view class="ghxq_head_z_one">
					<span class="iconfont icon" :class='list[status-1].one'></span>
				</view>
				<view class="ghxq_head_z_two">
					<view class="ghxq_head_z_two_kg"></view>
					{{list[status-1].two}}
				</view>
			</view>
			<view class="ghxq_head_x">
				{{list[status-1].three}}
			</view>
		</view>
		<view class="ghxq_jzxx2">
			<view class="ghxq_jzxx_kg"></view>
			<view class="ghxq_jzxx_1"></view>
			<view class="ghxq_jzxx_2" style="font-size: 16px;">
				<b>就诊凭条</b>
			</view>
			<view class='ghxq_jzxx_3'>
				<view class='ghxq_jzxx_3_kg'></view>
				<tki-barcode :val="cardNo" />
			</view>
		</view>
	</view>
	
	<view v-else-if="status == 4">
		<view class="ghxq_head" style="background-color:#00CC99;">
			<view class="ghxq_head_left"></view>
			<view class="ghxq_head_s"></view>
			<view class="ghxq_head_z">
				<view class="ghxq_head_z_one">
					<span class="iconfont icon icon-quangou"></span>
				</view>
				<view class="ghxq_head_z_two">
					<view class="ghxq_head_z_two_kg"></view>
					挂号成功
				</view>
			</view>
			<view class="ghxq_head_x">
				请在就诊时段内到相应的科室进行看病。
			</view>
		</view>
	</view>
	
	<view v-else-if="status == 5">
		<view class="ghxq_head" style="background-color:#00CC99;">
			<view class="ghxq_head_left"></view>
			<view class="ghxq_head_s"></view>
			<view class="ghxq_head_z">
				<view class="ghxq_head_z_one">
					<span class="iconfont icon icon-quangou"></span>
				</view>
				<view class="ghxq_head_z_two">
					<view class="ghxq_head_z_two_kg"></view>
					取号成功
				</view>
			</view>
			<view class="ghxq_head_x">
				请在就诊时段内到相应的科室进行看病。
			</view>
		</view>
		<view class="ghxq_jzxx2">
			<view class="ghxq_jzxx_kg"></view>
			<view class="ghxq_jzxx_1"></view>
			<view class="ghxq_jzxx_2" style="font-size: 16px;">
				<b>就诊凭条</b>
			</view>
			<view class='ghxq_jzxx_3'>
				<view class='ghxq_jzxx_3_kg'></view>
				<tki-barcode :val="cardNo"></tki-barcode>
			</view>
		</view>
	</view>
	
	</view>
</template>

<script>
	import tkiBarcode from "@/components/tki-barcode/tki-barcode.vue"
	import countDown from "@/components/count-down/count-down.vue"
	import popup from '@/components/popup/popup.vue'
	import {
		registrationCancel
	} from '@/api/registration-detail.js'
	
	export default {
		components: {
			tkiBarcode,
			countDown,
			popup,
		},
		props: [
			'list',
			'status',
			'cardNo',
			'sid',
			'uniX',
		],
		data() {
			return {
				val:'5555',
				code: '',
				message: '',
				show: false,
				type: 'center',
				formId:'',
			}
		},
		methods:{
			cancel() {
				this.show = false
				return
			},
			callback(sid){
				try {
					uni.removeStorageSync(sid)
					console.info("结束了")
					let data = {}
					data.id = uni.getStorageSync(sid+"status1_id")
					data.mode = 1
					data.formId = uni.getStorageSync('formId'+data.id)
					data.openId = uni.getStorageSync('userinfo').openId;
					uni.removeStorageSync(sid+"status1_id")
					uni.removeStorageSync('formId'+data.id)
					console.info("id"+data.id)
					registrationCancel(data).then(res => {
						console.info(res.data.result)
						if (res.data.result.code == 2000) {
							this.code = 2000
							
						} else if (res.data.result.code == 5000) {
							this.code = 5000
							this.show = true
							this.message = res.data.result.message
						}
						if(res.data.result == null){
							this.code = 1000
							this.show = true
							this.message = '抱歉，访问服务器失败，请稍后重试！'
							console.info(this.message)
						}
					})
				} catch (e) {
					this.code = 1000
					this.show = true
					this.message = '抱歉，访问服务器失败，请稍后重试！'
					console.info(this.message)
					console.info(e)
				}
			}
		}
	}
</script>

<style>
	.uni-tip {
			/* padding: 15px; */
			padding: 25px 0px 0px 0px;
			width: 300px;
			background: #fff;
			box-sizing: border-box;
			border-radius: 5px;
		}
	
		.uni-tip-title {
			text-align: center;
			font-weight: bold;
			font-size: 16px;
			color: #333;
		}
	
		.uni-tip-content {
			padding: 15px;
			font-size: 16px;
			color: #999999;
			font-weight: 700;
			text-align: center;
	
		}
	
		.uni-tip-group-button {
			margin-top: 10px;
			display: flex;
			border-top: 1px solid #F8F8F8;
			height: 100rpx;
		}
	
		.uni-tip-button {
			width: 100%;
			height: 100%;
			text-align: center;
			font-size: 16px;
			text-align: center;
			font-weight: 700;
			line-height: 100rpx;
	
		}
	.ghxq_head {
		width: 100%;
		height: 100px;
		float: left;
	}

	.ghxq_head_left {
		width: 4%;
		height: 100%;
		float: left;
	}

	.ghxq_head_s {
		width: 80%;
		height: 15%;
		float: left;
	}

	.ghxq_head_z {
		width: 95%;
		height: 40%;
		float: left;
	}

	.ghxq_head_z_one {
		width: 33px;
		height: 100%;
		float: left;
	}

	.ghxq_head_z_two {
		width: 88%;
		height: 100%;
		float: left;
		line-height: 32px;
		color: #FFFFFF;
		font-size: 25px;
	}

	.ghxq_head_z_two_kg {
		width: 8px;
		height: 100%;
		float: left;
	}

	.ghxq_head_x {
		width: 90%;
		height: 60%;
		float: left;
		color: #FFFFFF;
		font-size: 15px;
	}

	.icon {
		color: #FFFFFF;
	}
</style>
