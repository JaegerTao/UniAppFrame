//对表单进行正则验证的功能

import Vregular from "./Vregular.js"; //正则验证
const Vrules = {
	phone: {
		pattern: Vregular.phone,
		errMess: '请输入正确的手机号码'
	},
	number: {
		pattern: Vregular.numberType,
		errMess: '请输入正确的数字'
	},
	telephone: {
		pattern: Vregular.telephone,
		errMess: "请输入正确的座机号码",
	},
	email: {
		pattern: Vregular.email,
		errMess: '请输入正确的邮箱'
	},
	idcard: {
		pattern: Vregular.IDCard,
		errMess: '请输入正确的证件号码'
	},
	bankCard: {
		pattern: Vregular.bankCard,
		errMess: '请输入正确的银行卡号码'
	},
	qq: {
		pattern: Vregular.qq,
		errMess: '请输入正确的qq号码'
	},
	num6: {
		pattern: Vregular.num6,
		errMess: '请输入正确的6位数字'
	},
	AlipayAccount: {
		pattern: Vregular.AlipayAccount,
		errMess: '请输入正确的支付宝账号'
	},
	realName: {
		pattern: Vregular.realName,
		errMess: '请输入正确的真实姓名'
	},
	userName: {
		pattern: Vregular.userName,
		errMess: '请输入正确的用户名'
	},
	URL: {
		pattern: Vregular.URL,
		errMess: '请输入正确的url'
	},
	positiveInteger: {
		pattern: Vregular.positiveInteger,
		errMess: '请输入正确的正整数'
	},
	english: {
		pattern: Vregular.english,
		errMess: '请输入正确的英文字母'
	},
	idNumber: {
		pattern: Vregular.IDNumber,
		errMess: '请输入正确的证件号'
	},
	req: {
		pattern: Vregular.noEmpty,
		errMess: '必填项'
	},
	same: {
		pattern: "",
		errMess: '两次输入不一致'
	},
	pwd: {
		pattern: Vregular.pwd,
		errMess: '密码格式不正确'
	},
	pwd6to20: {
		pattern: Vregular.char6to20,
		errMess: '密码格式不正确'
	},
	enNum4: {
		pattern: Vregular.enNum4,
		errMess: '请输入4位英文数字'
	},
	positiveInteger: {
		pattern: Vregular.positiveInteger,
	},
	char0to20: {
		pattern: Vregular.char0to20,
	},
	char0to30: {
		pattern: Vregular.char0to30,
	},
	char0to50: {
		pattern: Vregular.char0to50,
		errMess: '输入不超过50字'
	},
	noEmpty: {
		pattern: Vregular.noEmpty
	}
}
let verification = {};

verification.install = function(Vue) {
	//验证传入数据是否满足要求
	Vue.prototype.$vervify = function(option) {

			let otherDefault = {
				reqEmptyVal: false,
			}
			let otherPra = Object.assign({}, otherDefault, option.otherPra) //合并对象
			let flag = true; //遍历条件后的结果条件
			for (let m = 0; m < option.formData.length; m++) {
				let regular = option.formData[m].rules.verify.split("|");
				for (let i = 0; i < regular.length; i++) {
					if (Vrules[regular[i]]) { //当初在表中存在对应的验证
						let _default = Object.assign({}, Vrules[regular[i]], option.formData[m].rules) //合并对象
						if (regular[i] == "req") {
							if (otherPra.reqEmptyVal) { // 必填项未填写内容提示
								let emptyMessage = "请输入" + option.formData[m].label;
								if (_default.value.length == 0) {
									showToastM(emptyMessage)
									flag = false;
								} else {
									regularVer()
								}
							} else {
								regularVer()
							}
						} else if (regular[i] == "same") { //确认输入框需要配置在被确认的下面
							if (m > 0) {
								if (option.formData[m - 1].rules.value != _default.value) {
									showToastM(_default.errMess)
									flag = false;
								}
							} else {
								showToastM("表单配置不正确，请检查被确认输入框的位置")
								flag = false;
							}

						} else {
							if (_default.value.length > 0) {
								regularVer()
							}
						}

						//弹窗提示
						function showToastM(mess) {
							uni.showToast({
								title: mess,
								duration: 2000,
								icon: "none"
							});
						}

						//不为空时正则验证
						function regularVer() {
							if (!_default.pattern.test(_default.value)) {
								showToastM(_default.errMess)
								flag = false;
							} else {
								flag = true;
							}
						}
						if (!flag) {
							return flag
						}
					}
				}
			}
			return flag;
		},
		// 提交序列化的表单
		Vue.prototype.$submitForm = function(option) {
			let submitData = {};
			for (let i = 0; i < option.length; i++) {
				submitData[option[i].rules.name] = option[i].rules.value;
			}
			return submitData;
		}
}
export default verification
