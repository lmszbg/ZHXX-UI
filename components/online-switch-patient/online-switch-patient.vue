<template>
	 <view class="all">
		 <popup :show="show1" :type="type1" :custom="true" :mask-click="false">
		 	<view class="uni-tip">
		 		<view class="uni-tip-title">提示</view>
		 		<view class="uni-tip-content">{{message1}}(CODE:{{code1}})</view>
		 		<view class="uni-tip-group-button">
		 			<view class="uni-tip-button button-color1" @click="cancel1()">确定</view>
		 		</view>
		 	</view>
		 </popup>
		<view class="patient-card-container" >
			<view class="show-patient-card">
				<view style="width: 60%;">
					<view class="show-name">
						<view v-if="cardinfo.length != 0">
							<view style="float: left;">{{ cardinfo[indexNowId].name }}</view>
							<view v-if="isShowTip && indexNowId == defaultId" class="show-tip">默认卡</view>
						</view>
						<view v-else style="float: left;">暂无信息</view>
					</view>

					<view v-if="cardinfo" class="show-cardid">{{ '门诊卡ID: ' + cardinfo[indexNowId].cardNo }}</view>
					<view v-else class="show-cardid">门诊卡ID: 无</view>
				</view>
				<view style="width: 40%;">
					<view v-if="cardinfo.length != 0" @click="togglePopup" class="switch-card">切换就诊人</view>
					<view v-else @click="toPage('bind-visit-card/bind-visit-card')" class="switch-card">添加就诊人</view>
				</view>
			</view>
			<!-- 底部分享弹窗 -->
			<uni-popup ref="share" :type="type" :custom="true" @change="">
				<view class="uni-share">
					<view class="uni-share-title">
						<view class="uni-share-cancel" @click="cancel">取消</view>
						<view style="width: 100%; margin-top: 0;">切换就诊人</view>
					</view>
					<view class="uni-share-content">
						<view v-for="(item, index) in cardinfo" :key="index" class="uni-share-content-box">
							<view v-if="index == indexNowId" class="uni-share-content-box-chick">
								<span class="iconfont icon icon-quangou"></span>
							</view>
							<view style="width: 100%; margin-top: 0;" @click="change(index)">
								<view class="uni-share-content-box-name"> {{ item.name }}</view>
								<view class="uni-share-content-box-cardid"> {{ '门诊卡ID: ' + item.cardNo }}</view>
							</view>
						</view>
						<view class="uni-share-content-box2">
							<view class="my-butn">
								<view style="width: 50%; float: right;" @click="toPage('my-patient/my-patient')">
									管理就诊人
								</view>
								<view style="width: 50%;margin-top: 0;" @click="toPage('bind-visit-card/bind-visit-card')">
									添加就诊人
								</view>
							</view>
						</view>
					</view>

				</view>
			</uni-popup>
		</view>
		<view v-if="data_first == 1">
			<view v-if="size>0">
			    <take-num v-for="(item, index) in list" :key="index" :list='item' :list2=list2[index] :list3=list3[index]></take-num>
			</view>
			<view v-else class="no-message">
			    <view class="kg"></view>
			    {{title}}
			</view>
		</view>
		<view v-else>
			<view v-if="data_size>0">
			    <take-num v-for="(item, index) in data_list" :key="index" :list='item' :list2=data_list2[index] :list3=data_list3[index]></take-num>
			</view>
			<view v-else class="no-message">
			    <view class="kg"></view>
			    {{title}}
			</view>
		</view>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import takeNum from '@/components/take-number/take-number.vue'
	import popup from '@/components/popup/popup.vue'
	import {
	    onlineCallNumber
	} from '@/api/registration-record.js'
	export default {
		components: {
			uniPopup,
			takeNum,
			popup,
		},
		props: [
			'cardinfo',
			'isShowTip',
			'indexId',
			'defaultId',
			'list',
			'list2',
			'list3',
			'size',
		],
		data() {
			return {
				indexNowId: this.indexId,
				show: false,
				type: 'bottom',
				title:'没有查询到有效的预约信息！',
				data_list:'',
				data_list2:'',
				data_list3:'',
				data_size:'',
				code1: '',
				message1: '',
				show1: false,
				type1: 'center',
				data_first:'1',
			}
		},
		methods: {
			cancel1() {
				this.show1 = false
				return
			},
			togglePopup() {
				this.$refs['share'].open()
			},
			cancel() {
				this.$refs['share'].close()
			},
			change(index) {
				this.indexNowId = index
				this.$refs['share'].close()
				try{
					let data = {}
					data.userId = uni.getStorageSync('userinfo').id
					data.patientId = this.cardinfo[index].id
					onlineCallNumber(data).then(res => {
						console.info(res.data.result)
						if(res.data.result.code == 2000){
							this.data_size = res.data.result.result[0]
							this.data_first = 0
							if(this.data_size > 0){
								this.data_list = res.data.result.result[1]
								this.data_list2 = res.data.result.result[2]
								this.data_list3 = res.data.result.result[3]
							}
						}else if(res.data.result.code == 5000){
							this.code1 = 5000
							this.show1 = true
							this.message1 = res.data.result.message
						}
					})
				}catch(e){
					this.code1 = 1000
					this.show1 = true
					this.message1 = '抱歉，访问服务器失败，请稍后重试！'
				}
			},
			toPage(url) {
				uni.navigateTo({
					url: '/pages/' + url,
				});
			},
		},
	}
</script>

<style>
	page {
	    width: 100%;
	    display: flex;
	    flex-wrap: wrap;
	    align-items: flex-start;
	}
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
	 .no-message{
	     text-align: center;
	     font-size: 18px;
	     color: #999999;
	 }
	 .kg{
	     width: 100%;
	     height: 20px;
	 }
	.all {
	    display: flex;
	    flex-direction: column;
	    overflow: hidden;
	    height: 100%;
	    width: 100%;
	}
	.patient-card-container {
		display: -webkit-flex;
		display: flex;
		justify-content: center;
		background-color: #FFFFFF;
	}

	.show-patient-card {
		width: 690rpx;
		height: 150rpx;
		display: flex;
		align-items: center;
		border-radius: 10rpx;
	}

	.show-name {
		width: 100%;
		height: 50%;
		margin: 10upx 0 0 25upx;
		font-size: 36rpx;
		float: left;
	}

	.show-tip {
		font-size: 20rpx;
		margin: 0 20upx;
		padding: 2upx 3upx;
		border-style: solid;
		border-color: #666666;
		border-width: 1upx;
		float: left;
	}

	.show-cardid {
		width: 100%;
		height: 50%;
		margin: 10upx 0 0 25upx;
		font-size: 28rpx;
		float: left;
	}

	.switch-card {
		font-size: 28rpx;
		margin: 0 50upx 0 0;
		padding: 5upx 10upx;
		border-style: solid;
		border-color: #666666;
		border-width: 1upx;
		border-radius: 10upx;
		float: right;
	}

	.add-patient-card-text {
		width: 100%;
		height: 100%;
		font-size: 40rpx;
		text-align: center;
		transform: translateY(35%);
	}

	/* 底部分享 */
	.uni-share {
		width: 750rpx;
		background: #fff;
	}

	.uni-share-title {
		width: 100%;
		line-height: 60upx;
		font-size: 28rpx;
		padding: 15upx 0;
		text-align: center;
	}

	.uni-share-cancel {
		margin-right: 20rpx;
		float: right;
	}

	.uni-share-content {
		width: 100%;
		border-top: 1upx solid lightgray;
		border-bottom: 1upx solid lightgray;
	}

	.uni-share-content-box {
		width: 100%;
		height: 150rpx;
		align-items: center;
		border-top: 1upx solid lightgray;
		border-bottom: 1upx solid lightgray;
	}

	.uni-share-content-box-name {
		font-size: 36rpx;
		margin: 20upx 50upx;
		height: 50%;
	}

	.uni-share-content-box-cardid {
		font-size: 28rpx;
		margin: 20upx 50upx;
		height: 50%;
	}

	.uni-share-content-box-chick {
		height: 100%;
		width: 25%;
		display: flex;
		align-items: center;
		justify-content: center;
		float: right;
	}

	.uni-share-content-box2 {
		width: 100%;
		padding: 20upx 20upx;
		align-items: center;
		border-top: 1upx solid lightgray;
	}

	.my-butn {
		width: 100%;
		font-size: 36rpx;
		line-height: 40upx;
		text-align: center;
		color: #00CC00;
	}
</style>
