<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<component-01 title="我是框架引入的组件"></component-01>
		
		<test-component title="我是自引入的组件"></test-component>
		<!-- 也可以以如下驼峰式命名使用 -->
		<!-- <testComponent title="我是自引入的组件"></testComponent> -->
		
		<view class="UI" :style="{
					'--box-width': width + 'rpx',
					'--box-height': height + 'rpx'
				}">
			css中使用data变量
		</view>
		
	</view>
</template>

<script>
	import indexapi from '@/common/apis/index/indexapi.js'
	import {mapState, mapMutations, mapActions} from 'vuex'
	import testComponent from './index-components/test-component.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				color: '#555',
				width: 500,
				height: 100
			}
		},
		components:{
			testComponent
		},
		computed:{
			
		},
		onLoad() {
			
		},
		computed:{
			//以参数解构的方式使用vuex中的状态
			...mapState(['hasLogin','avatarUrl','sessionid','username','AddNo'])
		},
		methods: {
			//以参数解构的方式使用vuex中的方法
			...mapMutations(['mlogin','msessionid','setWxInfo','mclear']),
			...mapActions(['asessionid','aclear']),
			
			//api使用示例
			exampleAPI(){
				indexapi.exampleAPI().then(resdata=>{
					//resdata处理
				}).catch(err=>{
					//错误处理
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.UI{
		height: var(--box-height);
		width: var(--box-width);
		background-color: #007AFF;
	}
</style>
