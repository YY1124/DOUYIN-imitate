<template>
	<view class="school">
		<view class="nav-box">
			<view class="title">
				添加学校
			</view>
			<navigator 
			class="iconfont iconzuo icon-nav" 
			url="/pages/changeInfo/changeInfo" 
			open-type="navigate" 
			>
			</navigator>
		</view>
		<view class="info-box">
		<navigator open-type="navigate"  class="text-box" @click="To(1,info.name)">
			<view class="left">
				学校
			</view>
			<view class="iconfont iconyou icon-Box">	
			</view>
			<view class="right">
				{{info.name}}
			</view>
		</navigator>
		<navigator open-type="navigate"  class="text-box" @click="To(2,info.acdemic)">
			<view class="left">
				院系
			</view>
			<view class="iconfont iconyou icon-Box">	
			</view>
			<view class="right">
				{{info.acdemic}}
			</view>
		</navigator>
		<navigator open-type="navigate"  class="text-box" @click="To(3,info.time)">
			<view class="left">
				入学时间
			</view>
			<view class="iconfont iconyou icon-Box">	
			</view>
			<view class="right">
				{{info.time}}
			</view>
		</navigator>
		<navigator open-type="navigate"  class="text-box" @click="To(4,info.educationBackground)">
			<view class="left">
				学历
			</view>
			<view class="iconfont iconyou icon-Box">	
			</view>
			<view class="right">
				{{info.educationBackground}}
			</view>
		</navigator>
		<navigator open-type="navigate"  class="text-box" @click="To(5,info.show)">
			<view class="left">
				展示范围
			</view>
			<view class="iconfont iconyou icon-Box">	
			</view>
			<view class="right">
				{{info.show}}
			</view>
		</navigator>
		</view>
		<view class="choose-box"  v-show="show" >
			<view class="choose-text" v-for="(item,index) in educationBackground" :key="index" @click="choose(item)">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			show:false,
			educationBackground:["专科","本科","硕士","博士"],
			info:{
				name:'北京大学',
				acdemic:"软件学院",
				time:"2017",
				educationBackground:'硕士',
				show:"校友可见"
				
			}
			}
		},
		methods: {
			To(number,res){
				if(number===1){
					uni.navigateTo({
						//url:"../modify/modify?number=1&name="+res
					})
				}else if(number===2){
					uni.navigateTo({
						//url:"../modify/modify?number=2&name="+res
					})
				}else if(number===3){
					uni.navigateTo({
						//url:"../modify/modify?number=3&name="+res
					})
				}else if(number===4){
					this.show=true
				}else if(number===5){
					uni.navigateTo({
						url:"../../components/extent"
					})
				}
				
			},
			choose(res){
				//console.log(res)
				this.info.educationBackground=res
				this.show=false
			},
		}
	}
</script>

<style>
.school{
	width:100%;
	height:100%;
	background-color: #000000;
}
.nav-box{
	height:80px;
	position:relative;
	margin: 0 auto;
	padding-top: 0.1px;
}
.title{
	text-align: center;
	color:#FFFFFF;
	font-size: 16px;
	margin-top: 30px;
	
}
.icon-nav{
	position:absolute;
	top:35px;
	left:10px;
	color:#FFFFFF;
	
}
.info-box{
	padding:5px 10px;
	
}
.text-box{
	width:100%;
	height: 45px;
	line-height: 45px;
}
.left{
	float:left;
	font-size: 15px;
	color: #FFFFFF;
}
.right{
	float:right;
	font-size: 15px;
	margin-right: 7px;
	color: #999999;
}
.icon-Box{
	float:right;
	font-size: 15px;
	color:#999999;
	width:10px;
}
.choose-box{
	position:fixed;
	top:30%;
	left: 10px;
	border-radius: 2px;
	background-color: #FFFFFF;
	height:180px;
	width:95%;
	}
.choose-text{
	margin: 20px 0 10px 20px;
	color:#444444;
}
</style>
