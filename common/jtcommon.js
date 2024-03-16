//常用的判断等类型方法
class jtCommon {
	constructor() {}
	/**
	 * 判断是否null或空字符串
	 */
	static isNullorEmpty(obj) {
		return (obj === undefined || obj === null || obj === "");
	}
	/**
	 * 去除字符串的首尾的空格
	 */
	static trim(a) {
		if (!jtCommon.isNullorEmpty(a))
			return a.replace(/(^\s*)|(\s*$)/g, "");
		else
			return "";
	}
	/**
	 * 判断字符串是否是正确格式的身份证
	 */
	static IdCardValidate(idCard) {
		const idCards = jtCommon.trim(idCard.replace(/ /g, ''));
		let isTrueValidateCodeBy18IdCard = aIdCard => {
			const Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
			const ValideCode = ['1', '0', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
			let sum = 0;
			const AidCard = aIdCard;
			if (AidCard[17].toLowerCase() === 'x') {
				AidCard[17] = '10';
			}
			for (let i = 0; i < 17; i += 1) {
				sum += Wi[i] * AidCard[i];
			}
			const valCodePosition = sum % 11;
			if (AidCard[17] === ValideCode[valCodePosition]) {
				return true;
			} else {
				return false;
			}
		};

		let isValidityBrithBy18IdCard = idCard18 => {
			const year = idCard18.substring(6, 10);
			const month = idCard18.substring(10, 12);
			const day = idCard18.substring(12, 14);
			const tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day));
			// 这里用getFullYear()获取年份，避免千年虫问题
			if (tempDate.getFullYear() !==
				parseFloat(year) ||
				tempDate.getMonth() !==
				parseFloat(month) - 1 ||
				tempDate.getDate() !==
				parseFloat(day)) {
				return false;
			} else {
				return true;
			}
		};

		let isValidityBrithBy15IdCard = idCard15 => {
			const year = idCard15.substring(6, 8);
			const month = idCard15.substring(8, 10);
			const day = idCard15.substring(10, 12);
			const tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day));
			if (tempDate.getYear() !==
				parseFloat(year) ||
				tempDate.getMonth() !==
				parseFloat(month) - 1 || tempDate.getDate() !== parseFloat(day)) {
				return false;
			} else {
				return true;
			}
		};
		if (idCard.length === 15) {
			return isValidityBrithBy15IdCard(idCards);
		} else if (idCards.length === 18) {
			const idCardS = idCards.split(''); // 得到身份证数组
			if (isValidityBrithBy18IdCard(idCards) && isTrueValidateCodeBy18IdCard(idCardS)) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	/**
	 * 判断是否是有限数字
	 */
	static isNumber(n) {
		return (!isNaN(parseFloat(n)) && isFinite(n));
	}
	/**
	 * 判断是否是移动手机号
	 */
	static isCellPhone(phone) {
		const re = /^1(3\d|5\d|7\d|8\d|9\d)\d{8}$/;
		return re.test(phone);
	}
	/**
	 * 判断是否是电子邮箱
	 */
	static isEmail(email) {
		const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return re.test(email);
	}
	/**
	 * 获取当前日期 ，默认格式YYYY-MM-DD
	 * seperator 可自定义连接符
	 */
	static getNowFormatDate(seperator) {
		const date = new Date();
		const seperator1 = "-";
		const year = date.getFullYear();
		let month = date.getMonth() + 1;
		let strDate = date.getDate();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		let s = jtCommon.isNullorEmpty(seperator) ? seperator1 : seperator;
		const currentDate = year + s + month + s + strDate;
		return currentDate;
	}
	/**
	 * 字符串如果为空则返回空格
	 */
	static defaultVal(val) {
		if (jtCommon.isNullorEmpty(val)) return " ";
		else return val;
	}
	/**
	 * 判断时间先后顺序，date1 <= date2则返回true，否则返回false
	 * @param {Date} date1
	 * @param {Date} date2
	 */
	static compareDateEqual(date1, date2) {
		date1 = new Date(date1);
		date2 = new Date(date2);
		if (date1.getFullYear() < date2.getFullYear())
			return true;
		else if (date1.getFullYear() > date2.getFullYear())
			return false;
		else if (date1.getFullYear() === date2.getFullYear()) {
			if (date1.getMonth() < date2.getMonth())
				return true;
			else if (date1.getMonth() > date2.getMonth())
				return false;
			else if (date1.getMonth() === date2.getMonth()) {
				if (date1.getDate() < date2.getDate())
					return true;
				else if (date1.getDate() > date2.getDate())
					return false;
				else if (date1.getDate() === date2.getDate())
					return true;
			}
		} else {
			return false;
		}
	}
	/**
	 * 判断是否日期超时,如果超时返回true,否则返回false
	 * @param {Date} date
	 */
	static isOverDate(date) {
		return !jtCommon.compareDateEqual(new Date(date), new Date());
	}
	/**
	 * 简单验证银行卡号
	 * @param {String} cardNumber
	 */
	static validateBankCardNumber(cardNumber) {
		// 去除空格和连字符
		let sanitizedNumber = cardNumber.replace(/\s/g, '').replace(/-/g, '');
		// 银行卡号必须为 12-19 位数字
		const regex = /^\d{12,19}$/;
		return regex.test(sanitizedNumber);
	}

};

export default jtCommon