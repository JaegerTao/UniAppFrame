<!-- 新组件 -->
<template>
	<view class="text-green">
		{{ title }} <text>\n</text>
		这是一个组件示例
		在components目录下以本形式创建组件，在pages的页面中不需要进行组件的引入，
		而由框架自动引入，可以在页面中直接使用
	</view>
</template>
<script>
	export default{
		name:"component-01",
		data(){ //组件内部属性
			return{
				
			}
		},
		props:{ //组件属性
			title:{
				type: String,
				default: "组件标题"
			}
		},
		methods:{ //组件中内部方法
			
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
