let device = {}

// 返回设备信息或提示
device.install = function(Vue) {
	let deviceHeight = 0
	let deviceWidth = 0
	let devicePixelRatio = 0
	let screenHeight = 0
	let screenWidth = 0
	let statusBarHeight = 0
	let NavigationBarHeight = 44
	let TabBarHeight = 50
	uni.getSystemInfo({
		success: (e) => {
			devicePixelRatio = e.devicePixelRatio
			deviceHeight = e.windowHeight
			deviceWidth = e.windowWidth
			screenHeight = e.screenHeight
			screenWidth = e.screenWidth
			statusBarHeight = e.statusBarHeight
		}
	})
	//Tabbar的高度（固定为50px）
	Vue.prototype.$TabBarHeight = function() {
		return TabBarHeight
	},
	//导航栏的高度（固定为44px）
	Vue.prototype.$NavigationBarHeight = function() {
			return NavigationBarHeight
	},
	//状态栏的高度
	Vue.prototype.$statusBarHeight = function() {
		return statusBarHeight
	},
	//屏幕宽度
	Vue.prototype.$screenWidth = function() {
		return screenWidth
	},
	//屏幕高度
	Vue.prototype.$screenHeight = function() {
		return screenHeight
	},
	//设备屏幕高度
	Vue.prototype.$deviceHeight = function() {
		return deviceHeight
	},
	//设备宽度
	Vue.prototype.$deviceWidth = function() {
		return deviceWidth
	},
	Vue.prototype.$devicePixelRatio = function() {
		return devicePixelRatio
	},
	//显示失败提示信息 - 也可用于其他提示信息，不显示图标，汉字可以显示两行
	Vue.prototype.$ToastFail = function(text) {
		uni.showToast({
			icon: 'none',
			title: text,
			duration: 2000
		})
	},
	//显示成功提示消息，text长度有限制 最多显示 7 个汉字长度
	Vue.prototype.$ToastSuccess = function(text) {
		uni.showToast({
			icon: 'success',
			title: text,
			duration: 2000
		})
	},
	//显示加载中图标，并增加蒙层，灰色
	Vue.prototype.$showLoading = function(text) {
		uni.showLoading({
			title: text,
			mask: true
		})
	},
	Vue.prototype.$hideLoading = function(){
		uni.hideLoading()
	}

}
export default device
