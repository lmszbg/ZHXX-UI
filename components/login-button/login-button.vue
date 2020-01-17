<template>
	<view class="card-strip">
		<view class="card-strip-left-image">
			<image src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"></image>
		</view>
		<view class="card-strip-right-text">
			<button open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="getUserInfo" 
			plain="true"style="border: none;text-align: left;line-height: 60rpx;padding: 0;">
				<view class="card-strip-right-text-title">
					未登录（点击登录）
				</view>
				<view class="card-strip-right-text-note">
					登录之后才能更了解那你~
				</view>
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			getUserInfo(e) {
				this.$emit('login', { e })
			},
		},
	}
</script>

<style>
	.card-strip {
		display: flex;
		height: 120upx;
	}

	.card-strip-left-image {
		padding: 0 15upx;
		justify-content: flex-start;
	}

	.card-strip-left-image image {
		width: 120upx;
		height: 120upx;
	}

	.card-strip-right-text {
		width: 600upx;
		justify-content: flex-end;
	}

	.card-strip-right-text-title {
		font-size: 36rpx;
		margin-bottom: 10upx;
	}

	.card-strip-right-text-note {
		margin-right: 15upx;
		float: right;
		color: #999999;
		font-size: 32rpx;
	}
</style>
