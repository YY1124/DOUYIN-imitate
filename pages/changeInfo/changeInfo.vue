<template>
	<view class="changeInfo">
		<view class="nav-box">
			<view class="title">
				编辑个人资料
			</view>
			<navigator 
			class="iconfont iconzuo icon-nav" 
			url="../personal/personal" 
			open-type="switchTab" 
			>
			</navigator>
		</view>
		<view class="box">
			<view class="img-box">
				<image class="img" :src="src" mode="" @click="chooseImg"></image>
				<view class="text">
					点击更换头像
				</view>
			</view>
		</view>
		<view class="info-box">
		<navigator open-type="navigate"  class="text-box" @click="To(1,info.name)">
			<view class="left">
				昵称
			</view>
			<view class="iconfont iconyou icon-Box">	
			</view>
			<view class="right">
				{{info.name}}
			</view>
		</navigator>
		<navigator open-type="navigate"  class="text-box" @click="To(2,info.id)">
			<view class="left">
				抖音号
			</view>
			<view class="iconfont iconyou icon-Box">	
			</view>
			<view class="right">
			  {{info.id}}
			</view>
		</navigator>
		<navigator open-type="navigate"  class="text-box" @click="To(3,info.brief)">
			<view class="left">
				简介
			</view>
			<view class="iconfont iconyou icon-Box">	
			</view>
			<view class="right">
				{{info.brief}}
			</view>
		</navigator>
		<navigator open-type="navigate"  class="text-box" @click="To(4,info.school)">
			<view class="left">
				学校
			</view>
			<view class="iconfont iconyou icon-Box">	
			</view>
			<view class="right">
			  {{info.school}}
			</view>
		</navigator>
		<navigator open-type="navigate"  class="text-box" @click="To(5,info.sex)">
			<view class="left">
				性别
			</view>
			<view class="iconfont iconyou icon-Box">	
			</view>
			<view class="right">
				{{info.sex}}
			</view>
		</navigator>
		<view   class="text-box" @click="To(6,info.birth)">
			<view class="left">
			生日
			</view>
			<view class="iconfont iconyou icon-Box">	
			</view>
			<view class="right">
			  <uni-datetime-picker type="date" class="ll" v-show="showDate" :value="date" start="1678-6-15" end="2025-6-15" @change="dateChange"></uni-datetime-picker>
			</view>
		</view>
		<view  class="text-box" @click="To(7,info.location)">
			<view class="left">
				地区
			</view>
			<view class="iconfont iconyou icon-Box">	
			</view>
			<view class="right">
				{{info.location}}
			</view>
		</view>
		</view>
		<view class="choose" v-show="show">
			<view class="choose-text"  @click="chooseSex('男')">
				男
			</view>
			<view class="choose-text"  @click="chooseSex('女')">
				女
			</view>
			<view class="choose-text"  @click="chooseSex('不展示')">
			   不展示
			</view>
		</view>
						
	</view>
</template>

<script>
	import {USER_CONFIG_URLS} from "../../common/common.js"
	export default {
		data() {
			const currentDate = this.getDate({
			            format: true
			        })
			return {
				src:"../../static/img/hh.jpg",
				show:false,
				showDate:true,
				area:false,
				date:"",
				info:{
					name:"旭哥来了",
					id:'12223333333',
					brief:'我爱睡觉',
					school:'北京大学',
					sex:'点击选择性别',
					birth:'1999-11-24',
					location:'云南省 保山市 龙陵县'
				},
			}
		},
		 computed: {
		        startDate() {
		            return this.getDate('start');
		        },
		        endDate() {
		            return this.getDate('end');
		        }
		    },
		methods: {
			dateChange(res){
			
			 this.info.birth=res
			 console.log(res)
			 
			},
			chooseImg(){
			  uni.chooseImage({
			  	count:1,
				sourceType:['album'],
				sizeType:['original','compressed'],
				success:(res) =>{
					//console.log(res.tempFilePaths)
					this.src=res.tempFilePaths
				}
			  })
			},
			
			DateChange(e) {
			    var _time = new Date(e.detail.value).getTime();
			    var _type = 'this.' + e.currentTarget.dataset.value + '=' + _time;
			    eval(_type); // 执行上面字符串里的代码
			},
			chooseSex(res){
				this.info.sex=res
				this.show=false
			},
			getDetail(){
			  uni.request({
			  	url:USER_CONFIG_URLS.Json+"info.json",
				success:res=>{
					//console.log(res)
					this.info=res.data
				}
			  })
			},
			bindDateChange: function(e) {
			            this.date = e.target.value
			        },
			To(number,res){
				if(number===1){
					uni.navigateTo({
						url:"../modify/modify?number=1&name="+res
					})
				}else if(number===2){
					uni.navigateTo({
						url:"../modify/modify?number=2&name="+res
					})
				}else if(number===3){
					uni.navigateTo({
						url:"../modify/modify?number=3&name="+res
					})
				}else if(number===4){
					uni.navigateTo({
						url:"school?name="+res
					})
				}else if(number===5){
					this.show=true
				}else if(number===6){
					
				}else{
					console.log(res)
					uni.navigateTo({
						url:"../changeInfo/addressChoose?name="+res
					})
				}
				
			},
			 getDate(type) {
			            const date = new Date();
			            let year = date.getFullYear();
			            let month = date.getMonth() + 1;
			            let day = date.getDate();
			
			            if (type === 'start') {
			                year = year - 60;
			            } else if (type === 'end') {
			                year = year + 2;
			            }
			            month = month > 9 ? month : '0' + month;;
			            day = day > 9 ? day : '0' + day;
			            return `${year}-${month}-${day}`;
			        }
			    
		},
		mounted(){
			this.getDetail()
			this.date=this.info.birth
		},
		onLoad(options) {
			console.log(options)
		}
		
	}
</script>

<style>
.changeInfo{
	width:100%;
	height:100%;
	background-color: #000000;
	padding:0px;
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
.box{
	width:100%;
	height:150px;
	margin:0 auto;
	border-top:1px solid #333333;
	/* border-bottom:1px solid #333333; */
	
	
}
.img-box{
	text-align: center;
}
.img{
	margin-top:20px;
	width:70px;
	height:70px;
	border-radius: 50%;
}
.text{
  margin-top:13px;
  color:#999999;
  font-size:13px;
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
.choose{
	position:fixed;
	top:45%;
	left: 10px;
	border-radius: 2px;
	background-color: #FFFFFF;
	height:150px;
	width:95%;
	}
.choose-text{
	margin: 20px 0 10px 20px;
	color:#444444;
}
.uni-list-cell-db{
	width:100px;
	height:100px;
}
.uni-input{
	height:100px;
	width:100px;
}
</style>
