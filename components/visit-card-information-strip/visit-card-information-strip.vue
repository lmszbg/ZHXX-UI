<template>
	<view class="visit-card-information-strip">
		<view class="visit-card-information-strip-body">
			<view class="visit-card-information-strip-note">
				<!-- 左边 -->
				<!-- 数据排列 -->
				<view class="visit-card-information-strip-left">
					<!-- 就诊人 -->
					<view class="visit-card-information-strip-patient">
						{{ patient }}
						<!-- 是否默认 -->
						<view class="visit-card-information-strip-patient-default" v-if="isDefault == 1">
							默认
						</view>
					</view>
					<!-- 门诊id -->
					<view class="visit-card-information-strip-patient-id">
						门诊ID：
						<view class="visit-card-information-strip-patient-id-note">
							{{ patientId }}
						</view>
					</view>
				</view>
				<!-- 右边 -->
				<view class="visit-card-information-strip-right">
					<my-right-icon class="uni-icon-forward" color="#bbb" size="20"></my-right-icon>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import myRightIcon from '@/components/my-right-icon/uni-icons.vue'
	export default {
		props:{
			patientId: String,
			patient: String,
			isDefault: Number
		},
		data() {
			return {
				
			}
		},
		components:{
			myRightIcon
		}
	}
</script>

<style scoped lang="scss">
	.visit-card-information-strip {
		display: flex;
		height: 170rpx;
		padding: 20rpx 18rpx 0rpx 18rpx;
	}

	.visit-card-information-strip-body {
		width: 100%;
		background-color: white;
		border-radius: 2px;
		display: flex;
		justify-content: center;
	}

	.visit-card-information-strip-note {
		display: flex;
		justify-content: space-between;
		height: 120rpx;
		align-self: center;
		width: 640rpx;
	}

	.visit-card-information-strip-left {
		height: 100%;
	}

	.visit-card-information-strip-patient {
		display: flex;
		font-weight: 600;
		font-size: 40rpx;
	}

	.visit-card-information-strip-patient-default {
		margin-top: 6rpx;
		margin-left: 20rpx;
		align-self: center;
		height: 32rpx;
		border: solid #CCCCCC 2rpx;
		border-radius: 4rpx;
		font-size: 28rpx;
		padding: 0px 4rpx 6rpx 8rpx;
		font-weight: 400;
		color: #CCCCCC;
	}

	.visit-card-information-strip-patient-id {
		color: #CCCCCC;
		font-size: 32rpx;
		margin-top: 22rpx;
		display: flex;
	}
	
	.visit-card-information-strip-patient-id-note{
		
	}
	
	.visit-card-information-strip-right{
		align-self: center;
	}
</style>
