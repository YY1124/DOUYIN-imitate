<template>
	<view class="">
		<view class="changeHeader">
			<navigator open-type="navigateBack" class="iconfont iconquxiao left">
				
			</navigator>
			<view class="title">
				切换城市
			</view>
		</view>
		<view class="ground">
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"changeHeader",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.changeHeader{
	width:100%;
	height:80px;
	line-height: 80px;
	position: fixed;
	top:0;
	left:0;
	margin:0 auto;
	background-color: #000000;
}
.left{
	position: absolute;
	top:0px;
	left:15px;
	height:80px;
	line-height: 80px;
	color:#ffffff;
	font-size:18px;
	
}
.title{
	font-size: 17px;
	text-align: center;
	color:#ffffff;
}
.ground{
	height:80px;
	width:100%;
}
</style>
