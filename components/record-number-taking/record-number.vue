<template>
	<view class="ghjl" @click="qhxx()">
		<view class="ghjlzj">
			<view class="ghjlzj_tb">
				<view class="ghjlzj_tb_tb">
					<br>
					<span class="iconfont icon icon-quangou"></span>
				</view>
			</view>
			<view class="ghjlzj_zj">
				<view class="ghjlzj_zj_kg"></view>
				<view class="ghjlzj_gg" style="font-size: 15px;">取号成功</view>
				<view class="ghjlzj_gg" style="line-height:23px;font-size: 12px;color: #999999;">
					<view style="font-size: 13px;">
						{{list.patientName}}
					</view>
					<view style="font-size: 14px;">
						{{list.department}}/{{list.doctorName}}
					</view>
				</view>
			</view>
			<view class="ghjlzj_kg"></view>
			<view class="ghjlzj_sj">
				<view class="ghjlzj_gg" style="font-size: 15px;">就诊时间&nbsp;</view>
				<view class="ghjlzj_gg" style="font-size: 13px;color: #999999;">
					{{list.visitingTime}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			'list',
		],
		data() {
			return {

			};
		},
		methods: {
			qhxx: function() {
				uni.navigateTo({
					url: '../../userinfo/record-number-taking/details/details?id='+this.list.id+'&cardNo='+this.list.patientCardNo
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
