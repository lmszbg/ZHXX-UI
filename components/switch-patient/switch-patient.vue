<template>
	<view class="patient-card-container">
		<view class="show-patient-card">
			<view style="width: 60%;">
				<view class="show-name">
					<view v-if="cardinfo.length != 0">
						<view style="float: left;">{{ cardinfo[newIndex].name }}</view>
						<view v-if="isShowTip && cardinfo[newIndex].isDefault == 1" class="show-tip">默认卡</view>
					</view>
					<view v-else style="float: left;">暂无信息</view>
				</view>
				
				<view v-if="cardinfo.length != 0" class="show-cardid">{{ '门诊卡ID: ' + cardinfo[newIndex].cardNo }}</view>
				<view v-else  class="show-cardid">门诊卡ID: 无</view>
			</view>
			<view style="width: 40%;">
				<view v-if="cardinfo.length != 0" @click="togglePopup" class="switch-card">切换就诊人</view>
				<view v-else @click="toPage('bind-visit-card/bind-visit-card')" class="switch-card">添加就诊人</view>
			</view>
		</view>
		<!-- 底部分享弹窗 -->
		<uni-popup ref="share" :type="type" :custom="true">
			<view class="uni-share">
				<view class="uni-share-title">
					<view class="uni-share-cancel" @click="cancel">取消</view>
					<view style="width: 100%; margin-top: 0;">切换就诊人</view>
				</view>
				<view class="uni-share-content">
					<view v-for="(item, index) in cardinfo" :key="index" class="uni-share-content-box">
						<view v-if="index == newIndex" class="uni-share-content-box-chick">
							<span class="iconfont icon icon-quangou"></span>
						</view>
						<view style="width: 100%; margin-top: 0;" @click="change(index)">
							<view class="uni-share-content-box-name"> 
								{{ item.name }} 
								{{ item.isDefault == 1 ? "(默认卡)" : ""}} 
							</view>
							<view class="uni-share-content-box-cardid"> {{ '门诊卡ID: ' + item.cardNo }} </view>
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
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup,
		},
		props: {
			cardinfo: {
				type: Array,
			},
			isShowTip: {
				type: Boolean,
			},
			nowIndex: {
				type: Number,
			},
			defaultId: {
				type: Number,
			},
		},
		watch: {
			nowIndex: function(val){
				this.newIndex = val;
			}
		},
		data() {
			return {
				newIndex: this.nowIndex,
				show: false,
				type: 'bottom',
			}
		},
		methods: {
			togglePopup() {
				this.$refs['share'].open()
			},
			cancel() {
				this.$refs['share'].close()
			},
			change(index) {
				this.newIndex = index
				this.$refs['share'].close()
				try {
					uni.setStorageSync('nowIndex', index);
				} catch (e) {}
				this.$emit('change', { index: index })
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
	.patient-card-container {
		display: -webkit-flex;
		display: flex;
		justify-content: center;
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
	
	.uni-share-cancel{
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
