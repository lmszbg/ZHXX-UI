<template>
	<view>
		<view class="apt-doctor" >
			<view class="apt-doctor-picture">
					<span class="iconfont">
						<span class="iconfont">&#xe676;</span>
					</span>
			</view>
			<view class="apt-doctor-info">
				<view>
					<view class="apt-doctor-name">
						{{name}}
					</view>
					<view class="apt-doctor-kind">
						{{kind}}
					</view>
					<view class="apt-doctor-detial">
						{{detial}}
					</view>
				</view>
			</view>
			<view v-if="leftInfo" class="apt-doctor-num">
				<view class="apt-num-last">
					余号:{{num}}
				</view>
				<view class="apt-doctor-price">
					{{'￥'+price}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
			},
			kind: {
				type: String,
			},
			detial: {
				type: String,
			},
			num: {
				type: String,
			},
			price: {
				type: String,
			},
			leftInfo: {
				type: Boolean,
			},
			url: {
				type: String,
			}
		},
		data() {
			return {

			};
		},
		methods: {
			
		}
	}
</script>

<style>
	/* 医生信息排版 */
	.apt-doctor-body {
		background-color: white;
	}

	.apt-doctor {
		width: 100%;
		height: 176rpx;
		border-bottom: solid 1rpx #ccc7c7;
		background-color: #ffffff;
		display: flex;
	}

	.apt-doctor-picture {
		margin:0rpx 20rpx;
		display: flex;
		align-items: center;
	}

	.apt-doctor-info {
		width: 340rpx;
		display: flex;
		align-items: center;
		font-size: 32rpx;
		line-height: 44rpx;
	}

	.apt-doctor-num {
		display: flex;
		margin-top: 26rpx;
		width: 240rpx;
		height: 30rpx;
		font-size: 28rpx;
		justify-content: flex-end;
	}

	.apt-doctor-name {
		font-size: 32rpx;
	}

	.apt-doctor-kind {
		color: #808080;
		font-size: 28rpx;
	}

	.apt-doctor-detial {
		width: 500rpx;
		color: #a9a9a9;
		font-size: 24rpx;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: block;
	}

	.apt-doctor-price {
		width: 45%;
		background-color: orange;
		height: 40rpx;
		text-align: center;
		border-radius: 20rpx;
		color: white;
		margin-left: 10rpx;
	}

	.apt-num-last {
		flex-direction: column-reverse;
	}

	/* iconfont 的图片格式 */
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 120rpx;
		color: #808080;
		font-style: normal
	}
</style>
