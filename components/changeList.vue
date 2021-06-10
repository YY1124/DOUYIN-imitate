<template>
	<view class="changeList">
		<scroll-view class="scrolly" scroll-y="true" scroll-into-view="viewId">
			<view class="city-box">
				<view class="box">
					<view class="title">
						<icon class="iconfont icondingwei"></icon>
						当前城市
					</view>
					<view class="currentCity">{{tcity}}</view>
				</view>
				<view class="box">
					<view class="title">
						热门城市
					</view>
					<view class="hotList">
						<view v-for="(item,index) in list" class="item" :key="index" @click="click(item)">
							{{item}}
						</view>
					</view>
				</view>
				<view class="box-list" v-for="(city,index) in city" :key="index">
					<view class="initial" id="city.initial">
						{{city.initial}}
					</view>
					<view 
					class="cityName" 
					v-for="item of city.list" 
					:key="item.code"
					@click="click(item.name)"
					>
						{{item.name}}
					</view>
				</view>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		name:"changeList",
		props:["city","letter"],
		data() {
			return {
			list:["深圳","北京","上海","承德","成都","广州","重庆","西安","武汉","杭州","郑州","南京","昆明","贵阳","哈尔滨","长沙","井冈山","佛山"],
			viewId:"",
			tcity:'北京'
			};
		},
		watch:{
			letter(){
				this.viewId=this.letter
				console.log(this.viewId)
			}
		},
		methods:{
			click(res){
				uni.setStorage({
					key:'city',
					data: res,
				})
				uni.getStorage({
					key:'city',
					success:(res)=>{
						console.log(res)
						this.tcity=res.data
					}
				})
				uni.redirectTo({
					url:'/pages/city/city'
				})
			},
			getCurrentCity(){
				uni.getStorage({
					key:'city',
					success:(res)=>{
						console.log(res)
						this.tcity=res.data
					}
				})
			}
		},
		mounted() {
			this.getCurrentCity()
		}
	}
</script>

<style>
.changeList{
	width:100%;
	background: #000000;
	z-index: 19;
	height:100%;
}
.box{
	background: #222222;
	margin-top: 10px;
	padding:0 5px 20px 5px;
}
.title{
	height:40px;
	line-height: 40px;
	margin-left: 15px;
	color:#ffffff;
	font-size: 14px;
}
.iconfont{
	font-size: 14px;
}
.currentCity{
	color:#aaaaaa;
	font-size: 13px;
	margin-left: 15px;
	height: 30px;
	line-height: 30px;
}
.hotList{
	width:100%;
	overflow: hidden;
	
}
.item{
	width:30%;
	height:28px;
	line-height: 28px;
	font-size: 13.5px;
	float: left;
	background: #333333;
	color:#AAAAAA;
	margin-left: 2.5%;
	margin-bottom: 10px;
	text-align: center;
}
.box-list{
	padding:8px 5px;
}
.initial{
	height:25px;
	line-height: 25px;
	background: #000000;
	padding-left: 10px;
	color:#666666;
	font-size: 12px;
}
.cityName{
	background: #222222;
	height:40px;
	line-height: 40px;
	padding-left: 10px;
	color:#AAAAAA;
	font-size: 15px;
}
.scrolly{
	height:100%;
}
</style>
