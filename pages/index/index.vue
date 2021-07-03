<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<component-01></component-01>
	</view>
</template>

<script>
	import indexapi from '@/common/apis/index/indexapi.js'
	import {mapState, mapMutations, mapActions} from 'vuex'
	export default {
		data() {
			return {
				title: 'Hello'
			}
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

<style>
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
</style>
