<template>
	<view class="followplayer">
		<video id="myVideo" class="video" :src="host+item.src" :controls="false" loop="true" objectFit="cover"></video>
		<cover-view class="iconfont iconplay icon" @click="click"></cover-view>
	</view>
</template>

<script>
	import {USER_CONFIG_URLS} from "../common/common.js"
	export default {
		name:"followPlayer",
		props:['item','index'],
		data() {
			return {
				player:false,
				host:USER_CONFIG_URLS.Videos
			};
		},
		onReady() {
			this.videoContext=uni.createVideoContext('myVideo',this)
			if(this.index===0){
				this.play()
			}
		},
		methods:{
			play(){
				if(this.player===false){
					this.videoContext.play()
				}
				this.player=true
			},
			pause(){
				if(this.player===true){
				this.videoContext.pause()	
				}
				this.player=false
			},
			click(){
				if(this.player===true){
					this.videoContext.pause()
					this.player=false
				}else{
					this.videoContext.play()
					this.player=true
				}
			}
		},
		
	}
</script>

<style>
.followplayer{
	height:100%;
	width:100%;
}
.video{
	width:80%;
	height:100%;
	z-index: 19;
	position: relative;
}
.icon{
	position: absolute;
	bottom:5px;
	right:75px;
	color:#FFFFFF;
	z-index: 20;
	font-size: 20px;
	}
</style>
