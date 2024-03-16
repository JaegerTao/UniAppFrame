export default{
	data(){
		return{
			testData: 0,
			
			// planets: [{id: 1, name:""Earth""},{id: 2, name:""Mars""},{id: 3, name:""Venus""},{id: 4, name:""Jupiter""}]
		}
	},
	onLoad(){
		console.log(this)
	},
	methods:{
		setData(){
			this.testData += 1
		}
	}
}	