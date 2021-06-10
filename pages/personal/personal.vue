<template>
	<view class="personal">
		<personal-info @change="change"></personal-info>
		<view class="" v-show="show==='作品'">
			<personal-list ></personal-list>
		</view>
		<view class="" v-show="show==='喜欢'">
			<personal-list ></personal-list>
		</view>
		<view class="" v-show="show==='动态'">
			<follow-list :list="list"></follow-list>
		</view>
		<tab></tab>
	</view>
</template>

<script>
	import personalList from "../../components/personalList.vue"
	import personalInfo from "../../components/personalInfo.vue"
	import followList from "../../components/followList.vue"
	import tab from '../../components/tab.vue'
	import {USER_CONFIG_URLS} from "../../common/common.js"
	export default {
		data() {
			return {
				list:[],
				show:'作品'
			}
		},
		methods: {
		 getVideoInfo(){
			 uni.request({
			 	url:USER_CONFIG_URLS.VideosJson,
				success:(res)=>{
					this.list=res.data.list
				}
			 })
		 },
		 change(res){
			 this.show=res
		 }
		},
		components:{
			tab,
			personalInfo,
			personalList,
			followList
		},
		mounted() {
			this.getVideoInfo()
		}
	}
</script>

<style>
.personal{
	width:100%;
	height:100%;
	background-color: #000000;
}
</style>
