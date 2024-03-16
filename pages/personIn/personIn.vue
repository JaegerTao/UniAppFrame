<!-- 新页面 -->
<template>
	<view class="text-center text-xxl">
		这是一个测试页面，用于查看页面栈情况

		<button class="margin-top" @click="nav">进入新页面</button>
		<button class="margin-top" @click="navBack">返回上一层</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		onLoad(e) {
			console.log("来自其他页面的传参：" + e.myid)
		},
		onShow() {
			const pages = getCurrentPages();
			console.log(pages)
		},
		methods: {
			navBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			nav() {
				uni.navigateTo({
					url: "/pages/personInTwo/personInTwo",
					events: {
						someEvent: function(data) {
							console.log('someEvent:', data)
						}
					},
					success(res) {
						console.log(res)
						res.eventChannel.emit('accept', {
							data: 'accept'
						})
					},
					fail(err) {
						console.log(err)
					}
				})
			}
		}
	}
</script>
<style lang="less" scoped>

</style>
