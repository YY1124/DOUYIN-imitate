<template>
	<view clas="newContent">
		<view class="box">
			<view class="icon">
				<view class="box-img">
					<view class="iconfont iconfensi img"> </view>
				</view>
				<view class="icon-text">
					粉丝
				</view>
			</view>
			<view class="icon">
				<view class="box-img">
					<view class="iconfont iconzan img"> </view>
				</view>
				<view class="icon-text">
					赞
				</view>
			</view>
			<view class="icon">
				<view class="box-img">
					<view class="iconfont iconinformation img"> </view>
				</view>
				<view class="icon-text">
					评论
				</view>
			</view>
			<view class="icon">
				<view class="box-img">
					<view class="iconfont iconbiaoqiankuozhan_hudong-184 img"> </view>
				</view>
				<view class="icon-text">
					随拍互动
				</view>
			</view>
		</view> 
		<view class="newsList">
			<view class="item" v-for="item in newList" :key="item.id">
				<view class="author-img-box">
					<image class="author-img" src="../static/img/hh.jpg" mode=""></image>
				</view>
				<view class="text">
					<view class="top">
						<view class="name">
						{{item.name}}
						</view>
						<view class="time">
						  {{item.time}}
						</view>
					</view>
					<view class="content">
						{{item.content}}
					</view>
				</view>
			</view>
			<view class="more">
				无更多消息
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"newContent",
		data() {
			return {
			newList:[
				{
					id:1,
					name:"张三",
					time:"8-1",
					content:"你好，我是张三，很高心认识你，我特别爱学习"
				},
				{
					id:2,
					name:"李四",
					time:"8-3",
					content:"你好，我是李四，很高心认识你，我特别爱学习"
				},
				{
					id:3,
					name:"王五",
					time:"8-1",
					content:"你好，我是王五，很高心认识你，我特别爱学习"
				},
				{
					id:4,
					name:"狗剩",
					time:"8-7",
					content:"你好，我是狗剩，很高心认识你，我特别爱学习"
				},
				{
					id:5,
					name:"张二狗",
					time:"8-8",
					content:"你好，我是张二狗，很高心认识你，我特别爱学习"
				},
			]	
			};
		}
	}
</script>

<style>
.newContent{
	width: 100%;
	background-color: #000000;
}
.box{
	width:100%;
	height:120px;
}
.icon{
	width:25%;
	height:100px;
	float: left;
	text-align: center;
	
}
.box-img{
	text-align: center;
}
.img{
	width:50px;
	height:50px;
	margin-top: 25px;
	margin-left: 24px;
	color:#eee;
	font-size: 30px;
}
.icon-text{
	font-size: 12px;
	text-align: center;
	color:#eee;
	margin-top: -10px;
}
.newsList{
	background-color: #000000;
	
}
.item{
	height:60px;
	padding:15px 10px;
	
}
.author-img-box{
	float:left;
	margin-left: 10px;
}
.author-img{
	width:45px;
	height:45px;
	border-radius: 50%;
}
.text{
	float: left;
	margin-left: 15px;
	height:50px;
	width:75%;
	color:#FFFFFF;
}
.top{
	height:25px;
	line-height: 25px;
}
.name{
	float: left;
	font-size: 15px;
}
.time{
	float: right;
	font-size: 13px;
	color:#AAAAAA;
}
.content{
	height:23px;
	line-height: 25px;
	font-size: 13px;
	color:#AAAAAA;
}
.more{
	width:100%;
	height:50px;
	line-height: 50px;
	font-size: 13px;
	color:#AAAAAA;
	text-align: center;
}
</style>
