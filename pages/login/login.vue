<style lang="scss" scoped></style>

<template>
	<view>
		<view class="input-box">
			<view class="input-item">
				<view class="input-label" style="margin-top: 20upx;font-size: 35upx;">手机号</view>
				<view class="input-body"><input v-model="phone" maxlength="11" type="number" placeholder="请输入手机号" class="input" /></view>
			</view>
			<view class="input-item">
				<view class="input-label" style="margin-top: 20upx;font-size: 35upx;">密码</view>
				<view class="input-body">
					<input v-model="password" type="text" :password="isHidePassword ? true : false" style="margin-right: 50upx;" placeholder="请输入密码" maxlength="20" class="input" />
					<image @click="isHidePasswordClick" class="eye" :src="isHidePassword ? '/static/img/attention.png' : '/static/img/attention_forbid.png'"></image>
				</view>
			</view>
			<view class="select">
				<navigator url="/pages/register/register" hover-class="none">注册</navigator>
				<navigator url="/pages/forget-pwd/forget-pwd" hover-class="none">忘记密码？</navigator>
			</view>
		</view>
		<button class="button" @click="submit">登录</button>
		<button class="button" @click="wechatLogin" style="margin-top: 50upx;width: 260upx;">微信登录</button>
	</view>
</template>
<script>
import { checkPhone, checkPwd, httpRequest} from '@/common/common.js';
import { getUserInfo}from '../WXMgr.js'
export default {
	data() {
		return {
			isHidePassword: true,
			phone: '',
			url: 'http://b-ssl.duitang.com/uploads/item/201505/14/20150514041841_Ja8nU.jpeg',
		};
	},
	onLoad() {
	},
	methods: {
		isHidePasswordClick() {
			this.isHidePassword = !this.isHidePassword;
		},
		submit() {
			var url="users/login?id="+this.phone+"&password="+this.password;
			httpRequest(url,this.findCallback);
		},
		
		findCallback:function(type,data){
			if(type=="fail"){
				uni.showModal({
					content:"密码错误"
				})
				return;
			}
			
			if(data.data.code==200){
				this.$user.setUserID(this.phone);
				uni.showModal({
					content:"登陆成功"
				})
				uni.setStorageSync("userinfo",data);
				uni.reLaunch({
					url:"../hall/hall"
				})
			}else{
				uni.showModal({
					content:"密码错误"
				})
			}
		},
		
		wechatLogin:function(){
			// this.saveUserInfo();
			getUserInfo(this.saveUserInfo);
		},
		
		saveUserInfo:function(data){
			if(data==null)return;
			var url="users/wechatlogin?wxid="+data.openId+"&headUrl="+data.avatarUrl+"&nickname="+data.nickName;
			// var url="users/wechatlogin?wxid=o0Kwn0d_j_tOSJGcfxXmY2zF8_aI&headUrl="+this.url+"&nickname=dksfsdfsd";
			httpRequest(url,this.wechatCallback);
		},
		
		wechatCallback:function(type,data){
			uni.showModal({
				content: 'wechatCallback',
			});
			if (type=="fail") {
				uni.showModal({
					content:"登陆失败2"
				})
			} else{
				uni.showModal({
					content:data.data.code
				})
				if(data.data.code==false){
					this.$user.setUserID(data.data.id);
					this.$user.setName(data.data.name);
					this.$user.setNickName(data.data.nickname);
					this.$user.setHeadUrl(data.data.head);
					setTimeout(function(){
						uni.reLaunch({
							url:"../hall/hall"
						})
					},2000)
					
				}else{
					uni.showModal({
						content:"----------adduser----------"
					})
					debugger
					var url="users/adduser?wxid="+data.data.wxid+"&headUrl="+data.data.head+"&nickname="+data.data.nickname;
					// var url="users/adduser?wxid=o0Kwn0d_j_tOSJGcfxXmY2zF8_aI&headUrl="+this.url+"&nickname=dksfsdfsd";
					httpRequest(url,this.adduserCallback);
				}
			}
		},
		//o0Kwn0d_j_tOSJGcfxXmY2zF8_aI
		adduserCallback:function(type,data){
			uni.showModal({
				title:data.data==null?true:false,
				content:"----------adduserCallback----------"
			})
			if(data.data==null)return;
			uni.showModal({
				title:data.data.id+"----2---name:"+data.data.name,
				content:data.data.nickname+"------2-----head:"+data.data.headUrl.substring(0,20)
			})
			if (type=="fail") {
				uni.showModal({
					content:"登陆失败3"
				})
			} else{
				if(data.data.code==200){
					this.$user.setUserID(data.data.id);
					this.$user.setName(data.data.name);
					this.$user.setNickName(data.data.nickname);
					this.$user.setHeadUrl(data.data.headUrl);
					setTimeout(function(){
						uni.reLaunch({
							url:"../hall/hall"
						})
					},2000)
				}
			}
		}
		
	}
};
</script>
