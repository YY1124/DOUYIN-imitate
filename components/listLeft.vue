<template>
	<view class="listLeft">
		<view class="author">
			{{item.author}}
		</view>
		<view class="title">
			{{item.title}}
		</view>
		<view class="box">
			<view class="music">
				@月光总还复读辅导费
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"listLeft",
		props:['item'],
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.listLeft{
	height: 150px;
	margin-left:10px ;
	color:#ffffff;
	width: 150px;
}
.author{
	height:35px;
	line-height: 3px;
	font-size: 15px;
}
.title{
	width: 100%;
	line-height: 22px;
	font-size: 12px;
	word-wrap: break-word;
}
.box{
	width: 100px;
	overflow: hidden;
}
.music{
	height:35px;
	width: 140px;
	font-size: 12px;
	animation: 4s music linear 0.2s infinite;
}

@keyframes music{
	0%{
		transform: translate3d(80%,0,0);
	}
	100%{
	   transform: translate3d(-80%,0,0);
	}
}
</style>
