<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		
		<button type="primary" class="cu-btn block bg-blue margin-tb-sm lg" @click="WxLogin()"><text class="cuIcon-loading2 cuIconfont-spin"></text>登录测试</button>
		<button type="primary" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">绑定手机号</button>
		
		<component-01 title="我是框架引入的组件"></component-01>
		
		<test-component title="我是自引入的组件" @getDataTrans="getDataTrans"></test-component>
		<!-- 也可以以如下驼峰式命名使用 -->
		<!-- <testComponent title="我是自引入的组件"></testComponent> -->
		
		<view class="UI margin-top" :style="{
					'--box-width': width + 'rpx',
					'--box-height': height + 'rpx'
				}">
			css中使用data变量
		</view>
		
		<button type="default" @click="choosefile">文件测试</button>
		<button type="default" @click="TestPromise()">异步测试</button>
		
	</view>
</template>

<script>
	import indexapi from '@/common/apis/index/indexapi.js'
	import {mapState, mapMutations, mapActions} from 'vuex'
	import testComponent from './index-components/test-component.vue'
	export default {
		data() {
			return {
				title: 'Hello已登录',
				color: '#555',
				
				width: 300,
				height: 100,
				
				test: 0
			}
		},
		components:{
			testComponent
		},
		computed:{
			
		},
		onLoad() {
			console.log("onload"+this)
			const appInstance = getApp()
			// console.log(appInstance)
			
			this.title = "修改后的值"
			
		},
		onShow(){
			console.log("onShow")
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
			},
			
			//接收子组件传参
			getDataTrans(e){
				console.log(e)
			},
			
			//选择文件
			choosefile(){
				wx.chooseMessageFile({
					count:1,
					type:'file',
					extension:['pdf','PDF'],
					success: res=>{
						console.log(res)
					}
				})
			},
			
			TestPromise(){
				this.test += 1
				return new Promise((resolve, reject)=>{
					if(this.test == 1){
						setTimeout(()=>{
							console.log(this.test + "reject")
							reject("errors")
						},5000)
					}
					else{
						setTimeout(()=>{
							console.log(this.test + "resolve")
							resolve("end")
						},3000)
					}
				})
			},
			
			//微信登录测试
			async WxLogin(){
				//使用async + await 方式，将异步请求转化为同步执行
				try{
					let message = await indexapi.wxlogin();
					let resdata = await indexapi.weappLogin(message.code);
					if(resdata!=="err"){
						this.mlogin();
						this.asessionid(resdata.session_key)
					}
				}catch(e){
					//TODO handle the exception
				}
			},
			
			//服务端获取手机号用于绑定
			getPhoneNumber(e){
				console.log(e.detail.code)
				indexapi.bindPhoneNumber(e.detail.code).then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
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
		margin-top: 50rpx;
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
	
	button{
		margin-bottom: 5rpx;
	}
</style>
