<template>
	<view class="changeAlphabet">
		<view class="list" >
			<view 
			class="item" 
			v-for="(item,index) of city" 
			:key="index"
			hover-class="hover"
			@click="click(item.initial)"
			@touchstart="touchStart"
			@touchend="touchEnd"
			@touchmove="touchMove"
			>
				{{item.initial}}
			</view>
		</view>
	</view>
</template>

<script>
	var timer=null
	export default {
		name:"changeAlphabet",
		props:["city"],
		data() {
			return {
				touch:false
			};
		},
		methods:{
		click(res){
		this.$emit("change",res)
		},
		touchStart(){
			this.touch=true
		},
		touchMove(e){
			clearTimeout(timer)
			timer=setTimeout(()=>{
				if(this.touch){
					const touchY=e.changedTouches[0].pageY-150
					const index=Math.floor(touchY/15)
					if(index>=0&&index<=city.length){
						this.$emit("change",this.city[index].initial)
					}
					}
			},30)
			
			
		},
		touchEnd(){
			this.touch=false
		}
		}
	}
</script>

<style>
.changeAlphabet{
	position: fixed;
	top:150px;
	right:0;
	z-index: 20;
	color:#FFFFFF
}
.list{
	width:20px;
	margin-right: 2px;
	}
	.item{
		text-align: center;
		line-height: 17px;
		font-size:12px;
	}
	.hover{
		text-align: center;
		line-height: 17px;
		font-size:15px;
	}
</style>
