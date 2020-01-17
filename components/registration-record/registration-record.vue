<template>
	<view class="ghjl" @click="ghxx(item.id,item.status)">
		<view class="ghjlzj">
			<view class="ghjlzj_tb">
				<view class="ghjlzj_tb_tb">
					<view v-if="item.status == 1">
						<br>
						<span class="iconfont icon icon2 icon-suoding"></span>
					</view>
					<view v-else-if="item.status == 3">
						<br>
						<span class="iconfont icon icon1 icon-jinzhi1"></span>
					</view>
					<view v-else-if="item.status == 2">
						<br>
						<span class="iconfont icon icon-quangou"></span>
					</view>
					<view v-else-if="item.status == 4">
						<br>
						<span class="iconfont icon icon-quangou"></span>
					</view>
					<view v-else-if="item.status == 8">
						<br>
						<span class="iconfont icon icon1 icon-jinzhi1"></span>
					</view>
				</view>
			</view>
			<view class="ghjlzj_zj">
				<view class="ghjlzj_zj_kg"></view>
				<view class="ghjlzj_gg" style="font-size: 15px;">
					<view v-if="item.status == 1">
						锁号成功
					</view>
					<view v-else-if="item.status == 3">
						取消挂号成功
					</view>
					<view v-else-if="item.status == 2">
						预约挂号成功
					</view>
					<view v-else-if="item.status == 4">
						挂号成功
					</view>
					<view v-else-if="item.status == 8">
						挂号失败
					</view>
				</view>
				<view class="ghjlzj_gg" style="line-height:23px;font-size: 12px;color: #999999;">
					<view style="font-size: 13px;">
						{{item.patientName}}
					</view>
					<view style="font-size: 14px;">
						{{item.department}}/{{item.doctorName}}
					</view>
				</view>
			</view>
			<view class="ghjlzj_kg"></view>
			<view class="ghjlzj_sj">
				<view class="ghjlzj_gg" style="font-size: 15px;">就诊时间&nbsp;</view>
				<view class="ghjlzj_gg" style="font-size: 13px;color: #999999;">
					{{item.visitingTime}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			'item'
		],
		data() {
			return {
				
			};
		},
		methods: {
			ghxx: function(e1,e2) {
				//console.info(e1)	
				uni.navigateTo({
					url: '../../userinfo/registration-record/details/details?id=' + e1 + '&status=' + e2
				})
			}
		}
	}
</script>

<style>
	.icon {
		color: #09BB07;
	}

	.icon1 {
		color: #000000;
	}

	.icon2 {
		color: #0A98D5;
	}

	.ghjl {
		height: 87px;
		width: 750rpx;
		display: table-cell;
		vertical-align: middle;
		float: left;
	}

	.ghjlzj {
		height: 80px;
		width: 100%;
		background: #FFFFFF;
	}

	.ghjlzj_tb {
		height: 100%;
		width: 120rpx;
		float: left;
		line-height: 75px;
		text-align: center;
	}

	.ghjlzj_tb_tb {
		width: 50%;
		height: 50%;
		display: inline-block;
	}

	.ghjlzj_zj {
		height: 100%;
		width: 300rpx;
		float: left;
	}

	.ghjlzj_zj_kg {
		height: 6%;
		width: 100%;
		float: left;
	}

	.ghjlzj_gg {
		height: 28%;
		width: 100%;
		float: left;
	}

	.ghjlzj_sj {
		height: 100%;
		width: 200rpx;
		float: right;
		text-align: right;
		line-height: 59px;
	}

	.ghjlzj_kg {
		height: 100%;
		width: 20rpx;
		float: right;
	}
</style>
