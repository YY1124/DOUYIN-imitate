<template>
	<view class="content">
		<first_nav></first_nav>
		<vidoe-list :list="list"></vidoe-list>
		<tab></tab>
		</view>
	</view>
</template>

<script>
	import tab from "../../components/tab.vue"
	import first_nav from "../../components/first_nav.vue"
	import vidoeList from "../../components/vidoeList.vue"
	import {USER_CONFIG_URLS} from "../../common/common.js"
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
          this.getVideos()
		},
		methods: {
        getVideos(){
		   uni.request({
			   url:USER_CONFIG_URLS.VideosJson,
			   success:(res)=>{
				   this.list=res.data.list
			   }
		   })
		}
		},
		components:{
			tab,
			first_nav,
			vidoeList
		}
	}
</script>

<style>
.content {
	height:100%;
	width:100%;
}

	
</style>
