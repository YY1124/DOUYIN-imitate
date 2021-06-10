<template>
	<view class="city">
		<change-header></change-header>
		<change-list :letter="letter" :city="city"></change-list>
		<change-alphabet @change="change"  :city="city"></change-alphabet>
	</view>
</template>

<script>
	import changeHeader from"../../components/changeHeader.vue"
	import changeList from"../../components/changeList.vue"
	import changeAlphabet from"../../components/changeAlphabet.vue"
	import {USER_CONFIG_URLS} from "../../common/common.js"
	export default {
		data() {
			return {
		     city:[],
			 letter:''
			}	
		},
		methods: {
			getCityInfo(){
					uni.request({
						url:USER_CONFIG_URLS.CityJson,
						success: (res) => {
						this.city=res.data.city
						}
					})
				},
				change(res){
				this.letter=res
				},
		},
		mounted() {
			this.getCityInfo()
		},
		components:{
		changeHeader,
	    changeList,
		changeAlphabet
		}
	}
</script>

<style>
.city{
	width:100%;
	background: #000000;
	height:100%;
}
</style>
