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

const indexapi = {
	exampleAPI
}

module.exports = indexapi