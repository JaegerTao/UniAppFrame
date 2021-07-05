<!-- 以传统模块方式引入此组件 -->
<template>
	<view class="text-blue">
		<text>\n</text>
		{{title}}<text>\n</text>
		<text decode="true">
			自引入组件，需要在页面中先import本组件模块，然后在components属性中加入组件名称，
			就可以在页面中使用了
			注意如果自定义组件的命名中带有连接符‘-’,
			那么在引入时，使用驼峰式命名，但是在页面中使用时仍然可以使用带连接符的标签
			例如本例子 test-component, 在index页面中引入的时候 import testComponent from '...'
			页面中使用时仍可使用 {{'<'}}test-component{{'><'}}/test-component{{'>'}}这种形式
		</text>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		props:{
			title:{
				type: String,
				default: "组件标题"
			}
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
