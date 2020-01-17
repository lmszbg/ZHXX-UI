<template>
	<view class="qh-one">
		<popup :show="show" :type="type" :custom="true" :mask-click="false">
			<view class="uni-tip">
				<view class="uni-tip-title">提示</view>
				<view class="uni-tip-content">{{message}}(CODE:{{code}})</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button button-color1" @click="cancel()">确定</view>
				</view>
			</view>
		</popup>
		<view class="qu-two">
			<view class="qu-two-kg"></view>
			<view class="two">
				<view class="two-one">
					<info-list v-for="(item, index) in list" :key="index" :qian='item.qian' :hou='item.hou' :houColor='item.houColor'
					 :qianColor='item.qianColor' :fontSize='item.fontSize'></info-list>
				</view>
			</view>
			<view class="three" @click="dianji()">
				取号
			</view>
		</view>
	</view>
</template>

<script>
	import infoList from '@/components/information-list/information-list.vue'
	import popup from '@/components/popup/popup.vue'
	
	export default {
		components: {
			infoList,
			popup,
		},
		props: [
			'list',
			'list2',
			'list3',
		],
		data() {
			return {
				code: '',
				message: '',
				show: false,
				type: 'center',
			};
		},
		methods: {
			cancel() {
				this.show = false
				return
			},
			dianji: function(e) {
				try {
					uni.setStorageSync('take-number-list2', this.list2)
					uni.setStorageSync('take-number-list3', this.list3)
					uni.navigateTo({
						url: '../../home/online-call-number/cashier/cashier'
					})
				} catch (e) {
					this.code = 1000
					this.show = true
					this.message = '抱歉，去取号失败，请稍后重试！'
				}
			},
		}
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
	.qh-one {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		height: 430rpx;
		width: 100%;
		align-items: flex-start;
		align-items: center;
		justify-content: center;
	}

	.qu-two {
		height: 88%;
		width: 95%;
		background-color: #FFFFFF;
	}

	.qu-two-kg {
		width: 100%;
		height: 2%;
	}

	.two {
		width: 100%;
		display: flex;
		overflow: hidden;
		align-items: center;
		justify-content: center;
	}

	.two-one {
		width: 90%;
		height: 90%;
	}

	.three {
		width: 100%;
		height: 20%;
		text-align: center;
		color: #00CC99;
		line-height: 84rpx;
		font-size: 17px;
		border-top: 1px solid #F8F8F8;
	}
</style>
