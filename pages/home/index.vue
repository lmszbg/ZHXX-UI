<template>
	<view class="content">
		<view class="top">
			<view class="left">
				<view class="touxiang">
					<image src="../../static/img/touxiang.jpeg" mode="aspectFit" style="width: 160rpx;height: 160rpx;"></image>
				</view>
			</view>
			<view class="right">
				<view class="body">
					<view class="title">张三</view>
					<view class="describe item">
						智慧ID:129827199381
					</view>
					<view class="text item">
						打卡一天
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.top{
		flex-direction: row;
	}
	.top .left{
		width: 240rpx;
		height: 240rpx;
		justify-content: center;
	}
	.top .left .touxiang{
		width: 160rpx;
		height: 160rpx;
		border-radius: 90rpx;
		overflow: hidden;
		align-self: center;
		border: solid 1px rgba(0,0,0,.1);
	}
	.top .right{
		width: 510rpx;
	}
	.top .right .body{
		flex-direction: column;
		justify-content: center;
	}
	.top .right .body .item{
		margin-top: 8rpx;
	}
	
</style>
