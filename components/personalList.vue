<template>
	<view class="">
		<view class="personalList">
			<view class="item">
				<video class="video" :src="host+'yy.mp4'" :controls="false" objectFit="cover"
					autoplay="true" :loop="true">
				</video>
				<view class="love-box">
					<text class="iconfont iconaixin love-icon">12w</text>
				</view>
			</view>
		</view>
		<view class="more">
			没有更多了
		</view>
		<view class="ground"></view>
	</view>

</template>

<script>
	import {USER_CONFIG_URLS} from "../common/common.js"
	export default {
		name: "personalList",
		data() {
			return {
               host:USER_CONFIG_URLS.Videos
			};
		}
	}
</script>

<style>
	.more {
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 12px;
		color: #999999;
		background-color: #000000;
		padding: 10px 0;
	}

	.ground {
		width: 100%;
		height: 50px;
		background-color: #000000;
	}

	.personalList {
		width: 100%;
		overflow: hidden;
		background-color: #000000;
		padding: 0 0.5%;
	}

	.item {
		width: 33%;
		height: 120px;
		float: left;
		position: relative;
	}

	.love-box {
		position: absolute;
		bottom: 5px;
		left: 10px;
	}

	.love-icon {
		font-size: 14px;
		color: #FFFFFF;
	}

	.video {
		width: 100%;
		height: 100%;

	}
</style>
