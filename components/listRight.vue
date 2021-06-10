<template>
	<view class="listright">
		<view class="auther-img">
			<img src="../static/img/hh.jpg" mode="" class="img"></image>
			<view class="iconfont iconjiahao add" v-show="show" @click="hide"></view>
		</view>
		<view class="iconfont iconaixin1 right-box" :style="color" @click="changeColor">
			
		</view>
		<view class="number">
			{{item.loveNumber}}
		</view>
		<view class="iconfont iconcomment-full right-box">
			
		</view>
		<view class="number">
			{{item.commentNumber}}
		</view>
		<view class="iconfont iconfenxiang  right-box">
			
		</view>
		<view class="number">
			{{item.shareNumber}}
		</view>
		<view class="around">
			<image  class="img" src="../static/img/pp.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"listRight",
		props:['item'],
		data() {
			return {
				show:true,
				color:""
			};
		},
		methods:{
			hide(){
				this.show=false
			},
			changeColor(){
				this.color=this.color===''?'color:red;':''
			},
			change(){this.color="color:red;"}
			
		}
	}
</script>

<style>
.listright{
	width: 50px;
	margin: 0 auto;
}
.auther-img{
	height:50px;
	width:50px;
	border-radius: 50%;
	border: 1px solid #FFFFFF;
	position: relative;
}
.img{
	height:50px;
	width:50px;
	border-radius: 50%;
}
.right-box{
	height:50px;
	width:50px;
	margin-top:13px ;
	text-align: center;
	line-height: 50px;
	color: #FFFFFF;
	font-size: 30px;
}
.number{
	text-align: center;
	color: #ffffff;
	font-size: 10px;
}
.around{
	height:50px;
	width:50px;
	margin-top: 15px;
	animation: rotate 1.25s linear 0.2s infinite;
}
.add{
	width:18px;
	height: 18px;
	border-radius: 50%;
	background-color: red;
	position: absolute;
	bottom: -9px;
	left:14px;
	text-align: center;
	line-height: 18px;
	color: #ffffff;
	font-size: 12px;
	
}
@keyframes rotate{
	0%{
		transform: rotate(0deg);
	}
	100%{
		transform: rotate(360deg);
	}
}
</style>
