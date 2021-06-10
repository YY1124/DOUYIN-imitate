//服务器地址
export const HOST = "http://192.168.100.9:80"; 

export const USER_CONFIG_URLS={//用户相关接口
	Videos:HOST +"/videos/",//获取用户积分
	Json:HOST+"/json/",//更新用户信息
	CityJson:HOST+"/json/city.json",
	VideosJson:HOST+"/json/videos.json"
}