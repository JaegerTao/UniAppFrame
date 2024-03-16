//对于base64形式图片进行存储处理，在回调中返回写入内存的文件路径

const fsm = wx.getFileSystemManager();
// const FILE_BASE_NAME = 'textImg'; //自定义文件名

/**
 * 对于base64形式图片进行存储处理，在回调中返回写入内存的文件路径
 * @param {String} base64data base64格式数据
 * @param {String} FILE_BASE_NAME 图片名，不带后缀
 * @param {Function} cb 回调函数，函数得到的参数为文件路径，可直接赋值给src
 */
function base64src(base64data,FILE_BASE_NAME, cb) {
	const [, format, bodyData] = /data:image\/(\w+);base64,(.*)/.exec(base64data) || [];
	if (!format) {
		return (new Error('ERROR_BASE64SRC_PARSE'));
	}
	const filePath = `${wx.env.USER_DATA_PATH}/${FILE_BASE_NAME}.${format}`;
	const buffer = wx.base64ToArrayBuffer(bodyData);
	fsm.writeFile({
		filePath,
		data: buffer,
		encoding: 'binary',
		success() {
			cb(filePath+"?flg="+new Date().getTime());
		},
		fail() {
			return (new Error('ERROR_BASE64SRC_WRITE'));
		},
	});
};

/**
 * 清除写入缓存区的图片，对临时路径tmp下的路径无效
 * @param {Array} filesArr 经过base64src转换后的图片路径数组 
 */
function unlinkFile(filesArr){
	filesArr.map((path, index)=>{
		// 同步接口
		try {
		  const res = fs.unlinkSync(`${wx.env.USER_DATA_PATH}/${path}`)
		} catch(e) {
		  console.error(e)
		}
	})
}

module.exports = base64src;
