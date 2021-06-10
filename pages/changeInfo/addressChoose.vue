<template>
	<view class="addressChoose">
		<view class="nav-box">
			<view class="nav">
				地址选择
			</view>
			<navigator
			class="iconfont iconzuo icon-nav" 
			url="/pages/changeInfo/changeInfo"
			open-type="navigate" 
			>
			</navigator>
		</view>
		<view class="unChoose-box" @click="unChoose()">
			<view class="unChoose">
				暂不选择
			</view>
		</view>
		<view class="choose-box">
			<view class="choose-title">
				选择地区
			</view>
			<view class="choose">
				<pick-regions :defaultRegion="defaultRegionCode" @getRegion="handleGetRegion()" >
					{{region}} 
				</pick-regions>
			</view>
		</view>
	</view>
</template>

<script>
	import pickRegions from '@/components/pick-regions/pick-regions.vue'
	export default {
		data() {
			return {
			region:[],
			defaultRegion:['广东省','广州市','番禺区'],
			defaultRegionCode:'440113'
			}
		},
		components:{
			pickRegions
		},
		methods: {	
			unChoose(){
				
			},
			choose(){
			  
			},
			handleGetRegion(region){
			   this.region = region.map(item=>item.name).join(' ')
			}
		},
		 
		onLoad(options) {
			this.region=options.name
		}
	}
</script>

<style>
.icon-nav{
    position:absolute; 
	top:35px;
	left:10px;
	color:#FFFFFF;		
}
.addressChoose{
	width:100%;
	height:100%;
	background-color: #000000;
}
.nav-box{
	width:100%;
	height:60px;
}
.nav{
	line-height:60px;
	color:#FFFFFF;
	font-size: 16px;
	text-align: center;
	margin:0 auto;
	padding-top: 10px;
}
.unChoose-box{
	width:100%;
	height:50px;
	color:#FFFFFF;
	margin-top: 20px;
}
.unChoose{
	padding-left:10px;
	margin:10px auto;
}
.choose-box{
	width:100%;
	height:100%;
}
.choose-title{
	color:#FFFFFF;
	padding-left: 10px;
}
.choose{
	width:80%;
	height:30px;
	margin:20px 0 0 10px;
	color:#FFFFFF;
}
	
.region{
	color:#FFFFFF
}
</style>
