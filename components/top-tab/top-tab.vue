<template>
	<view class="body-view">
		<scroll-view class="top-menu-view" scroll-x="true" :scroll-left="scrollLeft">
			<block v-for="(menuTab,index) in menuTabs" :key="index">
				<view class="menu-one-view" v-bind:id="'tabNum'+index" @click="swichMenu(index)">
					<view :class="[currentTab==index ? 'menu-one-act' : 'menu-one']">
						<view class="menu-one-txt">{{menuTab.name}}</view>
						<view class="menu-one-bottom">
							<view class="menu-one-bottom-color"></view>
						</view>
					</view>
				</view>
			</block>
		</scroll-view>

		<view v-for="(swiperDate,index1) in swiperDateList[currentTab]" :key="index1">
			<view v-if="index1 != swiperDateList.length-1" @click="dianji(swiperDate)">
				<view class="tb-one">
					<view class="tb-one-one">
						<view class="tb-one-one-one">
							<image :src="swiperDate.img" class="tb-one-one-one-img"></image>
						</view>
						<view class="tb-one-one-two">
							<view class="tb-one-one-two-one"></view>
							<view class="tb-one-one-two-two">
								<view class="tb-one-one-two-two">
									<view class="tb-title">
										{{swiperDate.title}}
									</view>
									<view class="tb-time">
										{{swiperDate.createTime}}
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view v-else @click="dianji(swiperDate)">
				<view class="tb-two">
					<view class="tb-one-one">
						<view class="tb-one-one-one">
							<image :src="swiperDate.img" class="tb-one-one-one-img"></image>
						</view>
						<view class="tb-one-one-two">
							<view class="tb-one-one-two-one"></view>
							<view class="tb-one-one-two-two">
								<view class="tb-one-one-two-two">
									<view class="tb-title">
										{{swiperDate.title}}
									</view>
									<view class="tb-time">
										{{swiperDate.createTime}}
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			'menuTabs',
			'swiperDateList',
			'src',
		],
		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				currentTab: 0,
				showImg: true,
			}
		},

		onLoad: function() {
			//初始化数据
			for (var i = 0; i < this.swiperDateList.length; i++) {
				this.getDateList(i);
			}
		},

		methods: {
			swichMenu: async function(current) { //点击其中一个 menu
				if (this.currentTab == current) {
					return false;
				} else {
					this.currentTab = current;
					this.setScrollLeft(current);
				}
			},
			swiperChange: async function(e) {
				let index = e.target.current;
				this.setScrollLeft(index);
				this.currentTab = index;
			},
			setScrollLeft: async function(tabIndex) {
				let leftWidthSum = 0;
				for (var i = 0; i <= tabIndex; i++) {
					let nowElement = await this.getWidth('tabNum' + i);
					/* leftWidthSum = leftWidthSum + nowElement.width; */
				}
				let winWidth = uni.getSystemInfoSync().windowWidth;
				this.scrollLeft = leftWidthSum > winWidth ? (leftWidthSum - winWidth) : 0
			},
			getWidth: function(id) { //得到元素的宽高
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			loadMore: function(tabIndex) {
				console.log('正在加载更多数据。。。')
				this.getDateList(tabIndex);
			},
			getDateList: function(tabIndex) {
				for (var i = 0; i < 20; i++) {
					var entity = this.menuTabs[tabIndex].name + (this.swiperDateList[tabIndex].length);
					this.swiperDateList[tabIndex].push(entity);
				}
			},
			dianji: function(e){
				uni.navigateTo({
					url:'detail?title='+e.title+'&createTime='+e.createTime+'&content='+e.content+"&img="+e.img
				})
			}
		},
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		/* justify-content: center; */
		background: #FFFFFF;
	}
	.tb-two{
		width: 105%;
		height: 190upx;
		display: flex;
		justify-content: center;
		align-items: center; 
		border-top-width: thin;
		border-top-style: solid;
		border-top-color: #D9D9D9; 
		border-bottom-width: thin;
		border-bottom-style: solid;
		border-bottom-color: #D9D9D9;
	}
	.tb-title{
		width: 100%;
		height: 80%;
		font-size: 14px;
	}
	.tb-time{
		width: 100%;
		height: 20%;
		font-size: 11px;
		color: #999999;
	}
	.tb-one{
		width: 105%;
		height: 190upx;
		display: flex;
		justify-content: center;
		align-items: center;	
		border-top-width: thin;
		border-top-style: solid;
		border-top-color: #D9D9D9;
	}
	
	.tb-one-one{
		width: 95%;
		height: 80%;
		display: flex;
		justify-content:flex-start;
	}
	
	.tb-one-one-one{
		width: 250upx;
		height: 100%;
	}
	
	.tb-one-one-one-img{
		width: 250upx;
		height: 160upx;
	}
	
	.tb-one-one-two{
		width: 450upx;
		height: 100%;
		display: flex;
	}
	.tb-one-one-two-one{
		width: 5%;
		height: 100%;
	}
	.tb-one-one-two-two{
		width: 95%;
		height: 100%;
	}

	.body-view {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
		width: 100%;
		align-items: flex-start;
		/* justify-content: center; */
	}

	.top-menu-view {
		/* display: flex; */
		white-space: nowrap;
		width: 100%;
		background-color: #FFFFFF;
		height: 112upx;
		/* 在这里设置导航条高度 */
	}

	.top-menu-view .menu-one-view {
		display: inline-block;
		white-space: nowrap;
		/* 规定文本不进行换行 */
		height: 100%;
		width: 250upx;
	}

	.top-menu-view .menu-one-view .menu-one {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-txt {
		height: 40upx;
		font-size: 33upx;
		font-weight: 400;
		color: #999999;
		line-height: 40upx;
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
	}

	.top-menu-view .menu-one-view .menu-one-act {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-txt {
		height: 40upx;
		font-size: 33upx;
		font-weight: 400;
		color: #00CC99;
		line-height: 40upx;
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
		background: #00CC99;
	}

	.swiper-box-list {
		flex: 1;
		width: 100%;
		height: auto;
		background-color: #FFFFFF;
	}

	.swiper-one-list {
		height: 100%;
		width: 100%;
	}

	.swiper-one-list .swiper-list-entity {
		width: 100%;
		height: 112upx;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
</style>
