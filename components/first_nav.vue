<template>
	<view class="first_nav">
		<view class="iconfont iconiconfonticonfontsousuo1 icon">
			
		</view>
		<view class="middle">
			<navigator open-type="switchTab" class="text" url="/pages/index/index">
				推荐
			</navigator>
			<navigator open-type="navigate" class="text" url="/pages/city/city">
				同城
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		name:"first_nav",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.first_nav{
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
	left:0;
	top:0;
	color:#ffffff;
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
}
</style>
