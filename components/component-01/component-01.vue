<!-- 新组件 -->
<template>
	<view>
		这是一个组件示例
		在components目录下以本形式创建组件，在pages的页面中不需要进行组件的引入，
		由框架自动引入，可以直接在页面中直接使用
	</view>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			
		},
		methods:{
			
		}
	}
</script>
<style lang="less" scoped>
	view{
		width: 600rpx;
		margin-left: 75rpx;
		margin-right: 75rpx;
	}
</style>
