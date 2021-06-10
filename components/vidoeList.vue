<template>
	<view class="videoList">
		<view class="swiper-box">
			<swiper class="swiper" 
			:vertical="true" 
			@change="change"
			@touchstart="touchStart"
			@touchend="touchEnd"
			>
				<swiper-item v-for="(item,index) of videos" :key="item.id">
					<view class="swiper-item" style="color:#000000;">
						<video-player 
						ref="player" 
						@changeClick="changeClick" 
						:video="item"
						:index="index"
						>
						</video-player> 
					</view>
					<view class="left_box">
						<list-left :item="item"></list-left>
					</view>
					<view class="right_box">
						<list-right ref="right" :item="item"></list-right>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import videoPlayer from "./videoPlayer.vue"
	import listLeft from "./listLeft.vue"
	import listRight from "./listRight.vue"
	var time=null
	export default {
		name:"vidoeList",
		props:["list"],
		data() {
			return {
				videos:[],
				pageStartY:0,
				pageEndY:0,
				page:0
			};
		},
		methods:{
			change(res){
				clearTimeout(time)
				this.page=res.detail.current
				time=setTimeout(()=>{
				if(this.pageStartY<this.pageEndY){
				this.$refs.player[this.page].player()
				this.$refs.player[this.page+1].pause()
				this.pageStartY=0
				this.pageEndY=0
				}else{
				this.$refs.player[this.page].player()
				this.$refs.player[this.page-1].pause()
				this.pageStartY=0
				this.pageEndY=0
				}	
				},1)
				
				},
			touchStart(res){
				this.pageStartY=res.changedTouches[0].pageY
			},
			touchEnd(res){
			this.pageEndY=res.changedTouches[0].pageY
			},
			changeClick(){//双击点赞
				this.$refs.right[this.page].change()
			}
		},
		components:{
			videoPlayer,
			listLeft,
			listRight
		},
		watch:{
			list(){
				this.videos=this.list
			}
		}
	}
</script>

<style>
.videoList{
	height:92.6%;
	width:100%;
}
.swiper-box{
	height:100%;
	width:100%;
}
.swiper{
	height:100%;
	width:100%;
}
.swiper-item{
	height:100%;
	width:100%;
	z-index: 19;
}
.left_box{
	z-index: 20;
	position: absolute;
	bottom: 50px;
	left:10px;
}
.right_box{
	z-index: 20;
	position: absolute;
	bottom: 50px;
	right:10px;
	color: #ffffff;
}
</style>
