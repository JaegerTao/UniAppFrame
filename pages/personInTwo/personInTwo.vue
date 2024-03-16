<!-- 新页面 -->
<template>
	<view class="text-center text-xxl">
		这是第三层页面，用于查看页面栈情况
		
		<button class="margin-top" @click="navBack">返回上一个页面</button>
		<button class="margin-top" @click="navTab">返回Tabbar页面</button>
		
		<button class="margin-top" @click="sendMsg">与前一个页面通信</button>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		onLoad() {
			
		},
		onShow() {
			const pages = getCurrentPages();
			console.log(pages)
		},
		
		methods:{
			navTab(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			},
			navBack(){
				uni.navigateBack({
					delta:1
				})
				// uni.navigateTo({
				// 	url:"/pages/personIn/personIn?myid=personInTwo",
				// 	fail(err) {
				// 		console.log(err)
				// 	}
				// })
			},
			sendMsg() {
			    const eventChannel = this.getOpenerEventChannel()
			    eventChannel.emit('someEvent', {
			        data: 'test'
			    });
			    eventChannel.on('accept', function(res) {
			        console.log('accept:',res)
			    })
			},
		}
	}
</script>
<style lang="less" scoped>
	
</style>
