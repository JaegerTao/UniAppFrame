<!-- 新页面 -->
<template>
	<view>
		<video :src="src"></video>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				src:"http://localhost:8085/teaBack/uploadMaterial/showVideo?filepath=201737.mp4&matid=11&mptid=353&filename=webflux-8.mp4"
			}
		},
		methods:{
			
		}
	}
</script>
<style lang="less" scoped>
	
</style>
