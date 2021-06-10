<template>
	<view class="cityContent">
		<view class="conlation">
			<view class="iconfont icondingwei conlation-left">
				自动定位：{{tcity}}
				
			</view>
			<navigator open-type="navigate" url="/pages/changeCity/changeCity" class=" conlation-right">
			     切换
			   <text class="iconfont iconyou"></text>
			</navigator>
		</view>
		<view class="videolist">
			<view class="item" v-for="(item,index) in list" :key="index">
				<view class="video" >
					<video style="width: 100%;height: 100%;" objectFit="fill" :src="host+item.src" :controls="false"></video>
				</view>
				<view class="img">
					<image class="image-box" src="../static/img/hh.jpg"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {USER_CONFIG_URLS} from "../common/common.js"
	export default {
		name:"cityContent",
		props:['tcity'],
		data() {
			return {
				host:USER_CONFIG_URLS.Videos,
				list:''
			};
		},
		methods:{
			getVideos(){
				   uni.request({
					   url:USER_CONFIG_URLS.VideosJson,
					   success:(res)=>{
						   this.list=res.data.list
					   }
				   })
			  }
		},
		onShow() {
			uni.getStorage({
				key:'city',
				success:(res)=>{
					this.tcity=res.data
				}
			})
		},
		mounted() {
			this.getVideos()
		}
	}
</script>

<style>
.cityContent{
	width:100%;
	background-color: #000000;
	z-index: 18;
}
.conlation{
	width:100%;
	height:40px;
	padding-top:70px;
	overflow: hidden;
	color: #aaaaaa;
}
.conlation-right{
	float:right;
	font-size: 13px;
	padding-right: 15px;
}
.conlation-left{
	float:left;
	font-size: 13px;
	padding-left: 10px;
}
.videolist{
	width:100%;
	overflow: auto;
	background-color: #000000;
}
.item{
	width: 50%;
	float: left;
	height:300px;
	position: relative;
	margin-bottom: 10px;
}
.video{
	width:92%;
	height:300px;
	margin-left: 4%;
	z-index: 18;
}
.img{
	position: absolute;
	bottom: 10px;
	right:15px;
}
.image-box{
	width:30px;
	height:30px;
	border-radius: 50%;
}
</style>
