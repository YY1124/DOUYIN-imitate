<template>
	<view class="videoPlayer">
		<video 
		id="myVideo"
		:controls="false"
		class="video" 
		:loop="true" 
		:src="HOSTVideos+video.src"  
		@click="click"
		:autoplay="autoplay"
		object-fit="cover"
		custom-cache="false"
		>
		</video>
	</view>
</template>

<script>
	import {USER_CONFIG_URLS} from "../common/common.js"
	var timer=null
	export default {
		name:"videoPlayer",
		props:['video','index'],
		data() {
			return {
				play:false,
				dblClick:false,
				autoplay:false,
				HOSTVideos:USER_CONFIG_URLS.Videos 
			};
		},
		onReady(){
			this.videoContext=uni.createVideoContext('myVideo',this)
		},
		methods:{
			click(){
				clearTimeout(timer)
				this.dblClick=!this.dblClick
				timer=setTimeout(()=>{
					if(this.dblClick){
						if(this.play===false){
						this.playThis()	
						}else{
							this.pause()
						}
					}else{//双击
						this.$emit("changeClick")
					}
					this.dblClick=false
				},300)
				
			},
			player(){
				if(this.play===false){
					this.videoContext.seek(0)
					this.videoContext.play()
					this.play=true
				}
				
			},
			pause(){
				if(this.play===true){
				this.videoContext.pause()
				this.play=false
				}
			},
			playThis(){
				if(this.play===false){
					this.videoContext.play()
					this.play=true
				}
			},
			atuo(){
				if(this.index===0){
					this.autoplay=true
				}
			}
		},
		created(){
			this.atuo()
		}
	}
</script>

<style>
.videoPlayer{
	height: 100%;
	width: 100%;
}
.video{
	height: 100%;
	width: 100%;
}
</style>
