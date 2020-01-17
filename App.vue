<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	view{
		display: flex;
	}
	/* 标题 */
	.title{
		font-size: 24px;
		font-weight: 600;
	}
	/* 注释 */
	.describe{
		font-size: 14px;
	}
	/* 正文 */
	.text{
		font-size: 18px;
	}
</style>
