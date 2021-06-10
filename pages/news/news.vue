<template>
	<view class="news">
	<news-nav></news-nav>
	<new-content></new-content>
	<tab></tab>	
	</view>
</template>

<script>
	import tab from "../../components/tab.vue"
	import newsNav from "../../components/newsNav.vue"
	import newContent from "../../components/newContent.vue"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			tab,
			newsNav,
			newContent
		}
	}
</script>

<style>
.news{
	width:100%;
	height:100%;
	background-color: #000000;
}
</style>
