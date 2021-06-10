<template>
	<view class="modify">
		<view class="nav-box">
			<view class="title" v-if="number==1">
				修改昵称
			</view>
			<view class="title" v-if="number==2">
				修改抖音号
			</view>
			<view class="title" v-if="number==3">
				修改简介
			</view>
			<navigator 
			class="iconfont iconzuo icon-nav" 
			url="../changeInfo/changeInfo" 
			open-type="navigate" 
			>
			</navigator>
		</view>
		<view class="box">
			<view class="text" v-if="number==1">
				我的昵称
			</view>
			<view class="text" v-if="number==2">
				我的抖音号
			</view>
			<view class="text" v-if="number==3">
				个人简介
			</view>
			<view class="input-name" v-if="number==1||number==2">
				<input type="text" :value="Content" class="input"  @input="ContentInput"/>
				<icon class="iconfont icondingwei delete"></icon>
				<view class="number" v-if="number==1">
					{{Content.length}}/20
				</view>
				<view class="number" v-if="number==2">
					<text class="number-text">最多16个字，只允许包含字母、数字、下划线和点，30天内仅能修改一次</text>
				</view>
			</view>
			<view class="input-name" v-if="number==3">
				<textarea type="text" :value="Content" class="color"  @input="ContentInput"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			  Content:'',
			  number:'',  
			}
		},
		methods: {
			ContentInput(e){
				this.Content=e.target.value
			},
		},
		onLoad(options) {
			this.Content=options.name
			this.number=options.number
			console.log(this.number)
		}
	}
</script>

<style>
.modify{
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
	padding:15px;
}
.text{
	color:#999999;
	font-size: 15px;
}
.input-name{
	margin-top: 10px;
    font-size: 18px;
	position: relative;
}
.input{
	width:85%;
	color:#999999;
}
.delete{
	position:absolute;
	right:0;
	top:0;
	width:15%;
	height:2px;
	font-size: 20px;
	color:#999999;
}
.number{
	color:#999999;
	font-size: 12px;
	margin-top: 8px;
}
.color{
	width: 95%;
	background-color: #222222;
	color:#FFFFFF;
	font-size: 13px;
	padding: 8px;
}
</style>
