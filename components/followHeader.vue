<template>
	<view class="">
	<view class="followNav">
		<view class="iconfont iconpaizhao icon">
		<text class="icon-text">随拍</text>
		</view>
		<view class="middle">
			<navigator 
			open-type="switchTab" 
			class="text" 
			url="/pages/follow/follow"
			:style="follow"
			>
				关注
			</navigator>
			<navigator 
			open-type="switchTab" 
			class="text" 
			url="/pages/friend/friend"
			:style="friend"
			>
				好友
			</navigator>
		</view>
	</view>
	<view class="groud"></view>
	</view>
</template>

<script>
	export default {
		props:["page"],
		name:"followHeader",
		data() {
			return {
			follow:"",
			friend:"",
			};
		},
		mounted() {
			if(this.page==="friend"){
				this.friend="border-bottom:2px solid #F0AD4E"
			}else{
				this.follow="border-bottom:2px solid #F0AD4E"
			}
		}
	}
</script>

<style>
.followNav{
	width:100%;
	position: fixed;
	left:0;
	top:25px;
	height:35px;
    line-height: 35px;
	margin: 0 auto;
	z-index: 20;
}
.icon{
	position: absolute;
	left:5px;
	top:0;
	color:#FFFFFF;
	width: 20%;
	text-align: center;
	font-size: 20px;
}
.middle{
	text-align: center;
	
}
.text{
	display: inline;
	color:#FFFFFF;
	margin:0 10px;
	font-size: 15px;
}
.icon-text{
	font-size: 15px;
	margin-left: 10px;
}
.groud{
	width:100%;
	height:60px;
}
</style>
