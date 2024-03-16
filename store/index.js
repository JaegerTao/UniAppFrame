import Vue from 'vue'
import Vuex from 'vuex'
import storageEx from '../common/storage.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		hasLogin: false,//是否微信登录
		sessionid: null,
		avatarUrl: null,//微信头像地址
		username: null,//微信名
		AddNo:null,//用户唯一标识 
	},
	//同步
	mutations:{
		//登录状态
		mlogin(state){
			state.hasLogin = true
		},
		//设置头像和微信名
		setWxInfo(state, {avatarUrl, username}){
			state.avatarUrl = avatarUrl
			state.username = username
		},
		//清除所有状态
		mclear(state){
			state.hasLogin = false
			state.sessionid = null
			state.avatarUrl = null
			state.username = null
			state.AddNo = null
		},
		//设置sessionid
		msessionid(state, sessionid){
			state.sessionid = sessionid
		}
	},
	//异步方法
	actions:{
		//设置内存缓存中的sessionid 以及 状态sessionid
		async asessionid({commit}, sessionid){
			try{
				storageEx.setStorageExpire('sessionid', sessionid)
				commit("msessionid", sessionid)
			}catch(e){
				console.log(e)
			}
		},
		//清除所有缓存和所有状态
		async aclear({commit}){
			try{
				uni.clearStorageSync()
				commit("mclear")
			}catch(e){
				console.log(e)
			}
		}
	}
})

export default store