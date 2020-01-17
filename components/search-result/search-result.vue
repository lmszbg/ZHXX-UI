<template>
	<view class="example-model" :style="{'height': mainHeight }">
		<view v-if="searchResult != null" class="hsaResult">
			<view v-if="searchResult.doctors" class="model-body" style="margin-top: 0;">
				<view class="model-info"  style="margin-top: 0;">查到的医生</view>
				<view v-for="(item, index) in searchResult.doctors " :key="index" class="show-box" @click="toPage('hospitalinfo/doctors/doctorsInfo',item.id)">
					<view class="show-image"><image src="/static/img/icon/touxiang.jpeg" /></image></view>
					<view class="show-right">
						<view class="show-name">{{item.doctorName}}</view>
						<view class="show-text">{{"工号：" + item.doctorCode}}</view>
						<view class="show-text">{{item.adminDeptName==null ? "暂无信息" : item.adminDeptName }}</view>
					</view>
				</view>
			</view>
			
			<view v-if="searchResult.depts" class="model-body">
				<view class="model-info">查到的科室</view>
				<uni-list>
					<uni-list-item v-for="(item, index) in searchResult.depts " :key="index" :title="item.deptName" :note="item.deptDescription" 
					thumb="icon-yuyueguahao" :show-arrow="false"
					 @click="toPage('hospitalinfo/departments/departmentsInfo',item.id)" :isLast="index == searchResult.clinics.length-1"/>
				</uni-list>
			</view>
			
			<view v-if="searchResult.others" class="model-body">
				<view class="model-info">其他其他相关</view>
				<uni-list>
					<uni-list-item v-for="(item, index) in searchResult.others " :key="index" :title="item.title" :show-arrow="false"
					 @click="toPage('hospitalinfo/dynamic/detail',item.id)" :isLast="false"/>
				</uni-list>
			</view>
			
			<view  class="model-more">
				<uni-list-item title="查看更多" :show-arrow="true" :isLast="true" 
				@click="toPage('hospitalinfo/dynamic/dynamic','')"/>
			</view>
			
		</view>
		
		<view v-else class="error-info">
			<view class="error-image">
				<image src="/static/img/error.gif"></image>
			</view>
			<view class="error-text">
				暂未查询到相关结果
			</view>
		</view>
		
	</view>
</template>

<script>
	import doctorInfo from "@/components/doctorInfo/doctorInfo.vue"
	
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components:{
			doctorInfo,

			uniList,
			uniListItem,
		},
		props: {
			searchResult: {
				type: Object,
			},
			mainHeight:{
				type: String,
			}
		},
		methods: {
			// 跳转页面
			toPage(url,itemid) {
				uni.navigateTo({
					url: '/pages/' + url + '?id=' + itemid,
				});
			},
		},
		data() {
			return {
			}
		}
	}
</script>

<style>
	.example-model{
		position: fixed;
		overflow-y: scroll;
		overflow-x: hidden;
		/* overflow: scroll; */
		z-index: 25;
		width: 100%; 
		/* height: 90%; */
		background: #efefef;
		left: 0;
	}
	.hsaResult{
		width: 100%;
		height: 100%;
		margin-top: 0;
	}
	.model-body{
		width: 100%;
		margin-top: 20upx;
		background: #FFFFFF;
	}
	.model-info{
		padding: 20upx;
		margin-top: 20upx;
		font-size: 36rpx;
		line-height: 44rpx;
		border-top: 1upx solid lightgray;
		border-bottom: 1upx solid lightgray;
	}
	
	.show-box{
		width: 100%;
		height: 200upx;
		margin: 20upx;
		background: #FFFFFF;
		display: flex;
	}
	.show-image{
		width: 20%;
		height: 100%;
		padding: 20upx;
	}
	.show-image image{
		width: 120upx;
		height: 160upx;
	}
	.show-right{
		width: 80%;
		height: 100%;
		float: left;
	}
	.show-name{
		margin-top: 15upx;
		font-size: 44rpx;
	}
	.show-text{
		margin-top: 10upx;
		font-size: 36rpx;
	}
	
	.model-more{
		background: #FFFFFF;
		padding: 20upx;
	}
	.error-info{
		width: 100%;
		height: 100%;
	}
	.error-image{
		display: flex;
		width: 100%;
		height: 50%;
		justify-content: center;
		align-items: center;
	}
	.error-image image{
		width: 400upx;
		height: 400upx;
	}
	.error-text{
		width: 100%;
		height: 100upx;
		font-size: 48rpx;
		text-align: center;
	}
</style>
