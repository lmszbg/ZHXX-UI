<template>
	<view class="ghxq_jzxx_2">
		<view class="ghxq_jzxx_2_left">
			<span v-bind:style="{fontSize: qianSize + 'px',fontWeight:qianWeight,color:qianColor}">
				{{qian}}
			</span>
		</view>
		<view class="ghxq_jzxx_2_right">
			<span v-bind:style="{fontSize: houSize + 'px',fontWeight:houWeight,color:houColor}">
				{{hou}}
			</span>
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			'qian',
			'hou',
			'qianSize',
			'qianWeight',
			'houSize',
			'houWeight',
			'houColor',
			'qianColor',
		],
	}
</script>

<style>
	.ghxq_jzxx_2 {
		height: 38px;
		width: 100%;
		display: flex;
		line-height: 38px;
	}

	.ghxq_jzxx_2_left {
		height: 100%;
		width: 25%;
		color: #999999;
	}

	.ghxq_jzxx_2_right {
		height: 100%;
		width: 75%;
		text-align: right;
	}
</style>
