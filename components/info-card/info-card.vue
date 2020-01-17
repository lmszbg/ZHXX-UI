<template>
	<view class="card-strip">
		<view class="card-strip-left-image">
			<image :src="img"></image>
		</view>
		<view class="card-strip-right-text">
			<view class="card-strip-right-text-title">
				{{ title }}
			</view>
			<view class="card-strip-right-text-note">
				{{ note }}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			img: {
				type: String,
				default: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
			},
			title: {
				type: String,
				default: '标题'
			},
			note: {
				type: String,
				default: '附加信息'
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
		justify-content: flex-end;
		margin-left: 24upx;
	}

	.card-strip-right-text-title {
		font-size: 42rpx;
		font-weight: 600;
		margin-bottom: 10upx;
	}

	.card-strip-right-text-note {
		color: #999999;
		font-size: 32rpx;
	}
</style>
