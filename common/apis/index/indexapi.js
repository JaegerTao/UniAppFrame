// index的API
import Vue from 'vue'
let vm = new Vue()

/**
 * 示例
 */
function exampleAPI(){
	return new Promise((resolve, reject)=>{
		vm.$req.tget('/wxapi/...（此处为接口路径）',{
			// key1: value,
			// key2: value
			// （此处为传输参数，以json对象形式填写）
		}).then(res=>{
			if(res.data正确){
				resolve(res.data)
			}else if(res.data错误){
				reject('err')
			}
		}).catch(err=>{
			console.log(err)
			reject(err)
		})
	})
}


/**
 * 调用接口获取登录凭证（code）。
 * 通过凭证进而换取用户登录态信息，包括用户在当前小程序的唯一标识（openid）、微信开放平台帐号下的唯一标识（unionid，若当前小程序已绑定到微信开放平台帐号）
 * 及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。
 */
function wxlogin(){
	return new Promise((resolve, reject)=>{
		uni.login({
			provider:"weixin",
			success: (res) => {
				console.log(res)
				if(res.errMsg === "login:ok"){
					resolve(res)
				}else{
					resolve("err")
				}
			},
			fail(err) {
				resolve("err")
			}
		})
	})
}

/**
 * 发送code给服务器，由服务器去请求获取相关参数
 */
function weappLogin(code){
	return new Promise((resolve, reject)=>{
		vm.$req.jpost("/wx/weAppLogin", {code})
		.then(res => {
			if(res.data.hasOwnProperty("openid")){
				vm.$ToastSuccess("成功");
				resolve(res.data);
			}else{
				vm.$ToastFail(res.data);
				resolve("err");
			}
		}).catch(err=>{
			resolve("err");
		})
	})
}

/**
 * 将获取的code交给服务器，由服务器获取手机号并与用户绑定或者处理业务
 */
function bindPhoneNumber(codeForPhone){
	return new Promise((resolve, reject)=>{
		vm.$req.tpost("/wx/bindPhone", {"code":codeForPhone}).then(res=>{
			let data = res.data;
			if(data.hasOwnProperty("errmsg") && data.errmsg === "ok"){
				vm.$ToastFail("成功");
				resolve("ok")
			}
		}).catch(err=>{
			reject("err")
		})
	})
}

const indexapi = {
	exampleAPI,
	wxlogin,
	weappLogin,
	bindPhoneNumber
}

module.exports = indexapi