<template>
	<view class="time-container">
		<!-- 时间下拉 -->
		<view class="time-chose" :style="{'display': theDownTimeChoseShow?'':'none'}">
			<view class="time-chose-item">
				{{day}} <span style="margin-left: 5px;">{{week}}</span>
			</view>
			<view class="time-chose-item" @click="changeTimeChangeShow">
				<view v-if="!show">
					更多日期
					<span class="iconfont icon-youjiantou" style="font-size: 16px;margin-left: 5px;"/>
				</view> 
				<view v-else-if="show">
					收起日期
					<span class="iconfont icon-down" style="font-size: 16px;margin-left: 5px;"/>
				</view>
			</view>
		</view>
		<view style="border-bottom: solid rgba(0,0,0,.2) 1px;" />
		<!-- 下拉框 -->
		<transition name="timechose">
			<view class="time-down" v-show="show" :style="{'height': theHight}">
				<view style="display: flex;justify-content: center;border-bottom: solid rgba(0,0,0,.2) 1px;" >
					<view class="time-week">
						<view v-for="(item, index) in weeks" style="align-self: center;" :key=index>
							<view class="time-week-item">
								{{ item }}
							</view>
						</view>
					</view>
				</view>
				<view style="display: flex;justify-content: center;border-bottom: solid rgba(0,0,0,.2) 1px;padding-bottom: 5px;">
					<view class="time-day">
						<view v-for="count in nullDayNum" style="align-self: center;display: flex;justify-content: center;" class="time-day-item">
							<view class="time-day-yuan">

							</view>
						</view>
						<view v-for="(item, index) in days" :key=index style="align-self: center;display: flex;justify-content: center;"
						 class="time-day-item">
							<view class="time-day-yuan" :class="index==showIndex?'time-day-yuan-active':''" @click="changeIndex(index)">
								<view :style="{color: item.has&&index!=showIndex ?'#00CC99':''}" style="padding-top: 12px;line-height: 14px;">
									{{item.day}}
								</view>
								<view style="font-size: 10px;justify-self: center;margin-bottom: 13px;line-height: 11px;">
									{{item.has==true?"有":'无'}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</transition>
	</view>
</template>

<script>
	export default {
		props: {
			// nullDayNum: {
			// 	type: Array,
			// 	default: () => []
			// },
			days: {
				type: Array,
				default: () => []
			},
			// //高度
			// theHight: {
			// 	type: String,
			// 	default: '400rpx'
			// },
			show: {
				type: Boolean,
				default: false
			},
			showIndex: {
				type: Number,
				default: 0
			},
			theDownTimeChoseShow: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				weeks: ['周一',
					'周二',
					'周三',
					'周四',
					'周五',
					'周六',
					'周末'
				],
				day: '',
				week: '',
				theHight: '',
				nullDayNum: [],
				
			}
		},
		methods: {
			changeTimeChangeShow: function() {
				this.$emit('showChange', !this.show)
			},
			changeIndex: function(index) {
				this.$emit('showIndexChange', index)
			},
			changeDate: function(){
				let date = new Date()
				date.setDate(date.getDate()+this.showIndex)
				this.day = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
				switch(date.getDay()){
					case 0:
						this.week = '星期日'
						break
					case 1:
						this.week = '星期一'
						break
					case 2:
						this.week = '星期二'
						break
					case 3:
						this.week = '星期三'
						break
					case 4:
						this.week = '星期四'
						break
					case 5:
						this.week = '星期五'
						break
					case 6:
						this.week = '星期六'
						break
					default:
						break
				}
			}
		},			
		watch:{
			showIndex: function() {
				this.changeDate()
			}
		},
		created(){
			this.changeDate()
			this.theHight = (Math.floor((this.days.length + this.nullDayNum.length) / 7) + 1) * 84 + 84 + 10 + 'rpx';
			let time = new Date()
			let nowTime = time.getDay()
			if (nowTime == 0) {
				nowTime = 7
			}
			this.nullDayNum = []
			for (let i = 0; i < nowTime - 1; i++) {
				this.nullDayNum.push(i)
			}
		}
	}
</script>

<style>
	.time-container {
		display: flex;
		flex-direction: column;
		background-color: white;
	}

	.time-chose {
		display: flex;
		justify-content: space-between;
		height: 80rpx;
		width: 680rpx;
		color: rgba(0, 0, 0, .5);
		align-self: center;
	}

	.time-chose-item {
		align-self: center;
		font-size: 15px;
		height: 36rpx;
	}

	.time-down {
		/* display: flex;
		flex-direction: column; */
		background-color: white;
		overflow: hidden;
	}

	.timechose-enter-active,
	.timechose-leave-active {
		transition: height .5s;
	}

	.timechose-enter,
	.timechose-leave-to {
		height: 0;
	}

	.time-week {
		width: 722rpx;
		display: flex;
		align-self: center;
		font-size: 14px;
		height: 40px;
		color: rgba(0, 0, 0, .5);

	}

	.time-week-item {
		width: 102rpx;
		text-align: center;
	}

	.time-day {
		align-self: center;
		display: flex;
		font-size: 14px;
		width: 722rpx;
		color: #00CC99;
		flex-wrap: wrap;
		align-content: center;
	}

	.time-day-item {
		width: 102rpx;
		margin: 10rpx 0 10rpx 0;
		text-align: center;
	}

	.time-day-yuan {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-self: center;
		color: rgba(0, 0, 0, .5);
		overflow: hidden;
		border-radius: 16px;
		width: 32px;
		height: 32px;
	}

	.time-day-yuan-active {
		background-color: #00CC99;
		color: white;
	}
</style>
