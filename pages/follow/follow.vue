<template>
	<view class="follow">
		<follow-header :page="page"></follow-header>
		<follow-list :list="list"></follow-list>
		<tab></tab>
	</view>
</template>

<script>
	import followHeader from "../../components/followHeader.vue"
	import tab from "../../components/tab.vue"
	import followList from "../../components/followList.vue"
	import {USER_CONFIG_URLS} from "../../common/common.js"
	export default {
		data() {
			return {
				page:"follow",
				list:[]
			}
		},
		methods: {
			getVideo(){
				uni.request({
					url:USER_CONFIG_URLS.VideosJson,
					success:(res) => {
                     this.list=res.data.list.slice(0,5)
					}
				})
			}
		},
		components:{
			followHeader,
			tab,
			followList
		},
		created() {
			this.getVideo()
		}
	}
</script>

<style>
.follow{
	width: 100%;
	height:100%;
	background-color: #000000;
}
</style>
