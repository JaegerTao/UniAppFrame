<!-- Person -->
<template>
	<view>
		<image :style="{height: navBarHeight + 'px', width: '100%'}" src="/static/BasicsBg.png" mode="scaleToFill">
		</image>
		
		<view>模板语法：{{ testData }}</view>
		
		<view class="flex flex-wrap">
			<button class="myBtn basis-xs" type="primary" @click="plus()">加</button>
			<button class="myBtn basis-xs" type="primary" @click="minus()">减</button>
			<view class="basis-df"></view>
		</view>
		
		<view class="solids margin-top padding">
			条件渲染：
			<block v-if="testData > 5">
				<view class="text-center">
					testdata is now greater than 5
				</view>
			</block>
		</view>
		
		<view class="solid margin-top padding">
			列表渲染：
			<block v-for="(item, index) in planets" :key="item.id">
				<view class="flex justify-center">
					{{ index + ' : ' + item.name }}
				</view>
			</block>
		</view>
		
		<!-- <block>123</block> -->
		
		<view class="solid margin-top padding">
			列表 + 条件：
			<block v-for="(item, index) in planets" :key="item.id">
				<block v-if="item.id == 1 || item.id == 2">
					<view class="flex justify-center">
						{{ index + ' : ' + item.name }}
					</view>
				</block>
			</block>
		</view>
		
		<view class="solids margin-top padding">
			双向绑定：
			<view class="margin-top-sm">{{ '数据值：' + indata.inputtext }}</view> 
			<view class="flex justify-start">
				<view class="flex flex-direction justify-center">输入框：</view>
				<view class="flex flex-direction justify-center">
					<!-- <input class="solid text-red" type="text" :value="testData" @input="onChange" focus placeholder="输入内容" /> -->
					<input class="solid text-red" type="text" v-model="indata.inputtext" focus placeholder="输入内容" />
				</view>
			</view>
		</view>
		
		<view class="solid margin-top">
			<button class="cu-btn" @click="nav()">页面跳转</button>
			<navigator class="cu-btn margin-left" url="../personIn/personIn" open-type="navigate">页面跳转</navigator>
		</view>
		示例：拆分js和css
	</view>
</template>
<script>
	// import person from "./person.js"
	// export default person
	export default{
		data(){
			return{
				testData: 0,
				planets: [
					{id: 1, name:"Earth"},
					{id: 2, name:"Mars"},
					{id: 3, name:"Venus"},
					{id: 4, name:"Jupiter"},
					],
					
				navBarHeight: 0,
				
				indata: {
					inputtext: "初始值"
				}
			}
		},
		onLoad(){
			console.log("page onLoad")
			this.getNavHeight()
		},
		onShow() {
			console.log("page onShow")
		},
		onHide() {
			console.log("page onHide")
		},
		methods:{
			plus(){
				this.testData += 1
			},
			minus(){
				this.testData -= 1
			},
			
			getNavHeight(){
				this.navBarHeight = this.$statusBarHeight() + this.$NavigationBarHeight()
			},
			
			onChange(e){
				console.log(e)
				this.testData = e.detail.value
			},
			
			nav(){
				uni.navigateTo({
					url:"/pages/personIn/personIn?myid=person"
				})
			}
		}
	}	
</script>
<style lang="less" scoped>
	@import url("person.css");
</style>
