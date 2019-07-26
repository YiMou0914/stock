<template>
	<view>
		<view class="input-box">
			<view class="input-item">
				<view class="input-label" style="margin-top: 20upx;font-size: 35upx;">手机号</view>
				<view class="input-body">
					<input v-model="phone" maxlength="11" type="number" style="margin-right: 160upx;" placeholder="请输入手机号" class="input" />
					<button :disabled="!isCanSendCode" class="btn-code" @click="sendCode">{{ sendMsg }}</button>
				</view>
			</view>
			<view class="input-item">
				<view class="input-label" style="margin-top: 20upx;font-size: 35upx;">密码</view>
				<view class="input-body">
					<input v-model="password" type="text" :password="isHidePassword ? true : false" style="margin-right: 50upx;" placeholder="请输入密码" maxlength="20" class="input" />
					<image @click="isHidePasswordClick" class="eye" :src="isHidePassword ? '/static/img/attention.png' : '/static/img/attention_forbid.png'"></image>
				</view>
			</view>
			<view class="input-item">
				<view class="input-label" style="margin-top: 20upx;font-size: 35upx;">确认密码</view>
				<view class="input-body"><input placeholder="请再次输入密码" type="text" v-model="code" maxlength="6" class="input" password="true" /></view>
			</view>
		</view>
		<button class="button" @click="submit">注册</button>
	</view>
</template>

<script>
let timer = '';
import { httpRequest } from '../../common/common.js';
export default {
	data() {
		return {
			sendMsg: '发送验证码',
			isCanSendCode: true,
			isHidePassword: true,
			phone: '',
			password: '',
			code: ''
		};
	},
	onLoad() {},
	methods: {
		isHidePasswordClick() {
			this.isHidePassword = !this.isHidePassword;
		},
		setCodeInterval() {
			//设置验证码重新发送定时器
			let time = 60;
			clearInterval(timer);
			timer = setInterval(() => {
				time--;
				this.isCanSendCode = false;
				this.sendMsg = time + 's';
				if (time <= 0) {
					this.isCanSendCode = true;
					this.sendMsg = '重新获取';
					clearInterval(timer);
				}
			}, 1000);
		},
		clearCodeInterval() {
			clearInterval(timer);
			this.codemsg = '获取验证码';
		},
		sendCode() {
			//发送验证码
			if (!checkPhone(this.phone)) {
				return;
			}
			this.setCodeInterval();
			/*
			 * 发送验证码逻辑
			 */
		},
		submit() {
			if (this.phone == '' || this.phone.length < 6 || this.phone.length > 8) {
				this.showAlert('账号不能小于6位数,大于8位数');
			} else {
				if (this.password == '' || this.password.length < 6 || this.password.length > 8) {
					this.showAlert('密码必须为6-8位数！');
				} else {
					if (this.code == '' || this.code.length < 6 || this.code.length > 8) {
						this.showAlert('密码必须为6-8位数！');
					} else {
						if (this.password != this.code) {
							this.showAlert('两次密码不同,输入错误，请重新输入！');
						}else{
							var url="users/getuserinfo?id="+this.phone;
							httpRequest(url, this.callback);
						}
					}
				}
			}
		},

		callback: function(type,data) {
			if(data.data.code==204){
				this.showAlert('此用户已存在！');
				return;
			}
			if (data.statusCode==200) {
				var url="users/adduser?id="+this.phone+"&password="+this.password;
				httpRequest(url, this.loginCallback);
			}
		},
		
		loginCallback:function(type,data){
			if(type=="fail"){
				this.showAlert('注册失败！');
				return;
			}
			
			if (data.statusCode==200) {
				this.$user.setUserID(this.phone);
				uni.showModal({
					content: '注册成功',
					success: res => {
						uni.reLaunch({
							url: '/pages/hall/hall'
						});
					},
					fail: () => {
						uni.reLaunch({
							url: '/pages/hall/hall'
						});
					}
				});
			} else {
				this.showAlert('注册失败！');
			}
		},

		showAlert: function(err) {
			uni.showModal({
				content: err
			});
		}
	}
};
</script>

<style></style>
