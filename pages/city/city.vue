<template>
	<view class="city">
      <tab></tab>
	  <first_nav></first_nav>
	  <city-content :tcity="tcity"></city-content>
	</view>
</template>

<script>
	import tab from "../../components/tab.vue"
	import first_nav from '../../components/first_nav.vue'
	import cityContent from "../../components/cityContent.vue"
	import {USER_CONFIG_URLS} from "../../common/common.js"
	export default {
		data() {
			return {
				title:"",
				tcity:"北京",
				//list:''
			}
		},
		methods: {
		getVideos(){
			   uni.request({
				   url:USER_CONFIG_URLS.VideosJson,
				   success:(res)=>{
					   //console.log(res)
					   this.list=res.data.list
				   }
			   })
		  }
		},
		components:{
			first_nav,
			tab,
			cityContent
		},
		onShow() {
			uni.getStorage({
				key:'city',
				success:(res)=>{
					this.tcity=res.data
				}
			})
		},
		onLoad() {
			this.getVideos()
		}
	}
</script>

<style>
.city{
	height:100%;
	width: 100%;
	background-color: #000000;
}
</style>
