//封装uni.request
import Vue from 'vue'
let vm = new Vue()

//接口主地址
let HOST = "http://localhost:8080"

/**
 * 不携带header参数的get请求
 */
const jget = (url, params) =>{
	return new Promise((resolve, reject)=>{
		uni.request({
			url: HOST + url,
			method:"GET",
			data: params,
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}
/**
 * 不携带header参数的post请求
 */
const jpost = (url, params) =>{
	return new Promise((resolve, reject)=>{
		uni.request({
			url: HOST + url,
			method:"POST",
			data: params,
			header:{
				'Content-Type': "application/x-www-form-urlencoded",
			},
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

//携带haeder参数的get请求
const tget = (url, params) =>{
	return new Promise((resolve, reject)=>{
		uni.request({
			url: HOST + url,
			method:"GET",
			data: params,
			header:{
				'Cookie': vm.$store.state.sessionid
			},
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

//带有haeder参数的post
const tpost = (url, params) =>{
	return new Promise((resolve, reject)=>{
		uni.request({
			url: HOST + url,
			method:"POST",
			data: params,
			header:{
				'Content-Type': "application/x-www-form-urlencoded",
				'Cookie': vm.$store.state.sessionid
			},
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

let req = {
	jget,
	jpost,
	tget,
	tpost
}

module.exports = req