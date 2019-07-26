var userid="";
var wxname="";
var headUrl="";
var userName="";

var user={
	getUserID:function(){
			return userid;
	},
		
	setName:function(name){
		userName=name;
	},
	
	getName:function(){
			return userName;
	},
		
	setUserID:function(id){
		userid=id;
	},
	
	getNickName:function(){
			return wxname;
	},
		
	setNickName:function(name){
		debugger
		wxname=name;
		console.log(wxname);
	},
	getHeadUrl:function(){
			return headUrl;
	},
		
	setHeadUrl:function(url){
		headUrl=url;
	},
	
	getUserInfo:function(){
		debugger
		var userInfo={
			"nickname":wxname,
			"id":userid,
			"head":headUrl,
			"name":userName
		}
		
		return userInfo;
	}
}
export default user;

