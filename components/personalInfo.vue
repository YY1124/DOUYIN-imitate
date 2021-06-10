<template>
	<view class="personalInfo">
		<view class="background-img-box">
			<image class="img" src="../static/img/yy.jpg" mode=""></image>
		</view>
		<view class="top">
			<view class="personal-img-box">
				<image class="personal-img" src="../static/img/hh.jpg" mode=""></image>
			</view>
			<view class="change" @click="message">
				编辑资料
			</view>
			<view class="add1">
				<text class="add-text">+</text> 好友
			</view>
		</view>
		<view class="name-box">
			<view class="name">张三</view>
			<view class="douyinhao">
				抖音号:urfhyr2222
			</view>
		</view>
		<view class="text-box">
			<view class="introduce">
				我爱碎觉
			</view>
			<view class="label-box">
				<view class="label">
					清华大学
				</view>
				<view class="label">
					北京
				</view>
			</view>
			<view class="number-box">
				<view class="box">
					<text class="number">123</text>
					<text class="number-text">获赞</text>
				</view>
				<view class="box">
					<text class="number">123</text>
					<text class="number-text">关注</text>
				</view>
				<view class="box">
					<text class="number">123</text>
					<text class="number-text">粉丝</text>
				</view>

			</view>
		</view>
		<view class="add-box">
			<text class="iconfont iconpaizhao icon"> </text>
			<text class="add">添加随拍</text>
		</view>
		<view class="option-box">
			<view class="option" :style="style1" @click="click('作品')">
				作品
			</view>
			<view class="option" :style="style2" @click="click('动态')">
				动态
			</view>
			<view class="option" :style="style3" @click="click('喜欢')">
				喜欢
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "personalInfo",
		data() {
			return {
              style1:'border-bottom:3px solid #F0AD4E',
			  style2:'',
			  style3:''
			};
		},
		methods:{
			click(res){
				switch(res){
					case "作品":
					this.style1='border-bottom:3px solid #F0AD4E'
					this.style2=''
					this.style3=''
					this.$emit("change",res)
					break;
					case "动态":
					this.style2='border-bottom:3px solid #F0AD4E'
					this.style1=''
					this.style3=''
					this.$emit("change",res)
					break;
					case "喜欢":
					this.style3='border-bottom:3px solid #F0AD4E'
					this.style2=''
					this.style1=''
					this.$emit("change",res)
					break;
				    default:
					break;
				}
			},
			message(){
				uni.navigateTo({
					url:"../../pages/changeInfo/changeInfo"
				})
			}
		}
	}
</script>

<style>
	.personalInfo {
		width: 100%;
		background-color: #000000;

	}

	.background-img-box {
		width: 100%;
		padding: 0 1px;
		z-index: 19;
	}

	.img {
		width: 100%;
		height: 180px;
	}

	.top {
		width: 100%;
		position: absolute;
		top: 140px;
		left: 0;
		z-index: 20;
		height: 60px;
		background-color: #000000;
	}

	.personal-img-box {
		margin: -25px 0 0 30px;

	}
	.add-text{
		font-weight: bold;
		font-size: 18px;
		margin-right: 3px;
		margin-left: -5px;
	}
   .add1{
	  position: absolute;
	  top: 15px;
	  right: 10px;
	  width: 15%;
	  height: 35px;
	  line-height: 35px;
	  color: #FFFFFF;
	  text-align: center;
	  font-size: 16px;
	  background-color: #333333;
	  border-radius: 5px;
	 }
	.personal-img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		z-index: 20;
		border: 3.5px solid #000000;
	}

	.change {
		position: absolute;
		top: 15px;
		right: 78px;
		width: 45%;
		height: 35px;
		line-height: 35px;
		color: #FFFFFF;
		text-align: center;
		font-size: 16px;
		background-color: #333333;
		border-radius: 5px;
	}

	.name-box {
		padding: 0 25px;
		color: #EEEEEE;
		z-index: 20;
		margin-top: 20px;

	}

	.name {
		height: 50px;
		line-height: 50px;
		font-size: 24px;

	}

	.douyinhao {
		height: 25px;
		line-height: 25px;
		font-size: 13px;
		color: #EEEEEE;
	}

	.text-box {
		padding: 0 25px;
		margin-top: 8px;
		border-top: 1px solid #222222;
	}

	.introduce {
		height: 30px;
		line-height: 30px;
		font-size: 15px;
		color: #EEEEEE;
	}

	.label-box {
		width: 100%;
		height: 25px;
		margin-top: 5px;
		line-height: 25px;
		color: #EEEEEE;
	}

	.label {
		height: 20px;
		padding: 0 5px;
		line-height: 20px;
		font-size: 11.5px;
		background-color: #333333;
		color: #999999;
		float: left;
		border-radius: 1.5px;
		margin-right: 10px;
	}

	.number-box {
		width: 100%;
		height: 50px;
		line-height: 50px;

	}

	.box {
		height: 40px;
		line-height: 40px;
		float: left;
		margin-right: 5px;
	}

	.number {
		color: #ffffff;
		font-size: 15px;

	}

	.number-text {
		color: #999999;
		font-size: 13px;
	}

	.add-box {
		margin: 0 6%;
		height: 40px;
		background-color: #333333;
		border-radius: 3px;
		text-align: center;
		line-height: 40px;
		color: #FFFFFF;
	}

	.add {
		padding-left: 5px;
		font-size: 13px;
	}

	.option-box {
		width: 100%;
		height: 50px;
		line-height: 50px;
		margin-bottom: 10px;
	}

	.option {
		width: 33%;
		height: 50px;
		line-height: 50px;
		color: #999999;
		float: left;
		text-align: center;
	}
</style>
