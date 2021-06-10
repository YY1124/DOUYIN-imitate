<script>
	export default {
		onLaunch: function() {
		uni.hideTabBar()
		},
		onShow: function() {
		console.log('App Show')
		},
		onHide: function() {
		console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	html,body{
		width: 100%;
		height: 100%;
	}
	@font-face {
	  font-family: 'iconfont';  /* project id 2456454 */
	    src: url('https://at.alicdn.com/t/font_2456454_edargoeq7at.eot');
	    src: url('https://at.alicdn.com/t/font_2456454_edargoeq7at.eot?#iefix') format('embedded-opentype'),
	    url('https://at.alicdn.com/t/font_2456454_edargoeq7at.woff2') format('woff2'),
	    url('https://at.alicdn.com/t/font_2456454_edargoeq7at.woff') format('woff'),
	    url('https://at.alicdn.com/t/font_2456454_edargoeq7at.ttf') format('truetype'),
	    url('https://at.alicdn.com/t/font_2456454_edargoeq7at.svg#iconfont') format('svg');
	}
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.iconinformation:before {
	  content: "\e6aa";
	}
	
	.iconfensi:before {
	  content: "\e619";
	}
	
	.iconzan:before {
	  content: "\e630";
	}
	
	.iconbiaoqiankuozhan_hudong-184:before {
	  content: "\eb30";
	}
	
	.iconplay:before {
	  content: "\e688";
	}
	
	.iconpaizhao:before {
	  content: "\e60c";
	}
	
	.iconRectangleCopy:before {
	  content: "\e6ae";
	}
	
	.iconshou:before {
	  content: "\e65b";
	}
	
	.icondingwei:before {
	  content: "\e63c";
	}
	
	.iconzuo:before {
	  content: "\e604";
	}
	
	.iconquxiao:before {
	  content: "\e61f";
	}
	
	.iconyou:before {
	  content: "\e63d";
	}
	
	.iconyinle:before {
	  content: "\e83a";
	}
	
	.iconaixin1:before {
	  content: "\e85c";
	}
	
	.iconcomment-full:before {
	  content: "\e9b2";
	}
	
	.iconaixin:before {
	  content: "\e617";
	}
	
	.iconpinglun:before {
	  content: "\e603";
	}
	
	.iconfenxiang:before {
	  content: "\e72f";
	}
	
	.iconiconfonticonfontsousuo1:before {
	  content: "\e62f";
	}
	
	.iconfanhui-xianxing:before {
	  content: "\e641";
	}
	
	.iconjiahao:before {
	  content: "\e623";
	}
	

</style>
