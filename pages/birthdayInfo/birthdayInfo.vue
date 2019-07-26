<template>
	<view>
		<form>
			<view class="uni-flex uni-column">
				<view class="uni-flex uni-row" style="margin-top: 50upx; border-bottom: 5upx solid #f1f1f1;">
					<view class="title" style="margin-left: 25upx; font-size: 35upx;margin-top: -5upx;width: 100upx;">姓名</view>
					<input name="input" maxlength="5" @input="setName" :class="txtName==''?'name1':'name2'" :placeholder="txtName!=''?txtName:'请输入您的姓名'"></input>
				</view>

				<view class="uni-flex uni-row" style="margin-top: 30upx; border-bottom: 5upx solid #f1f1f1;">
					<view class="title" style="margin-left: 25upx; font-size: 35upx;margin-top: -10upx;">出生年份</view>
					<button class="button" @click="showPanel('nian')">
						<text style="margin-left: -100upx; color: #000000;">{{txtNian}}</text>
					</button>
				</view>

				<view class="uni-flex uni-row" style="margin-top: 30upx; border-bottom: 5upx solid #f1f1f1;">
					<view class="title" style="margin-left: 25upx; font-size: 35upx;margin-top: -10upx;">出生月份</view>
					<button class="button" @click="showPanel('yue')">
						<text style="margin-left: -100upx; color: #000000;">{{txtYue}}</text>
					</button>
				</view>

				<view class="uni-flex uni-row" style="margin-top: 30upx; border-bottom: 5upx solid #f1f1f1;">
					<view class="title" style="margin-left: 25upx; font-size: 35upx;margin-top: -10upx;">出生日期</view>
					<button class="button" @click="showPanel('day')">
						<text style="margin-left: -100upx; color: #000000;">{{txtDay}}</text>
					</button>
				</view>

				<view class="uni-flex uni-row" style="margin-top: 30upx; border-bottom: 5upx solid #f1f1f1;">
					<view class="title" style="margin-left: 25upx; font-size: 35upx;margin-top: -10upx;">出生时间</view>
					<button class="button" @click="showPanel('time')">
						<text :class="txtTime=='请选择您的出生时间'?'time1':'time2'">{{txtTime}}</text>
					</button>
				</view>

				<view class="uni-flex uni-row" style="margin-top: 30upx; border-bottom: 5upx solid #f1f1f1;">
					<view class="title" style="margin-left: 25upx; font-size: 35upx;margin-top: -10upx;">幸运数字</view>
					<button class="button" @click="showPanel('number')">
						<text style="margin-left: -100upx; color: #000000;">{{txtLuckNum}}</text>
					</button>
				</view>
			</view>
		</form>

		<view v-show="!isShow">
			<button style="width: 200upx;height: 80upx;margin-top: 380upx; background-color: #08B6F2;" @click="SaveBirthdayInfo">保
				存</button>
		</view>
		<view class="nian" v-show="isShow">
			<scroll-view scroll-y="true" style="width: 100%; height: 500upx; " v-show="isNianShow">
				<block v-for="(item,index) in 90" :key="index">
					<view style="border-bottom: 5upx solid #000000; ">
						<view style="margin-left: 320upx; font-size: 35upx; margin-top: 20upx;" @click="setNianInfo(1930+index)">{{1930+index}}年</view>
					</view>
				</block>
			</scroll-view>

			<scroll-view scroll-y="true" style="width: 100%; height: 500upx; " v-show="isYueShow">
				<block v-for="(item,index) in 12" :key="index">
					<view style="border-bottom: 5upx solid #000000; ">
						<view style="margin-left: 320upx; font-size: 35upx; margin-top: 20upx;" @click="setYueInfo(index)">{{index+1}}月</view>
					</view>
				</block>
			</scroll-view>

			<scroll-view scroll-y="true" style="width: 100%; height: 500upx; " v-show="isDayShow">
				<block v-for="(item,index) in 31" :key="index">
					<view style="border-bottom: 5upx solid #000000; ">
						<view style="margin-left: 320upx; font-size: 35upx; margin-top: 20upx;" @click="setDayInfo(index+1)">{{index+1}}</view>
					</view>
				</block>
			</scroll-view>

			<scroll-view scroll-y="true" style="width: 100%; height: 500upx; " v-show="isTimeShow">
				<block v-for="(item,index) in timeArr" :key="index">
					<view style="border-bottom: 5upx solid #000000; ">
						<view style="margin-left: 250upx; font-size: 35upx; margin-top: 20upx;" @click="setTimeInfo(item)">{{item}}</view>
					</view>
				</block>
			</scroll-view>

			<scroll-view scroll-y="true" style="width: 100%; height: 500upx; " v-show="isLuckShow">
				<block v-for="(item,index) in 11" :key="index">
					<view style="border-bottom: 5upx solid #000000; ">
						<view style="margin-left: 280upx; font-size: 35upx; margin-top: 20upx;" @click="setLuckNumber(index)">{{"幸运数字: "+index}}</view>
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {httpRequest}from '../../common/common.js';
	export default {
		data() {
			return {
				txtName: "",
				txtNian: "请选择您的出生年份",
				txtYue: "请选择您的出生月份",
				txtDay: "请选择您的出生日期",
				txtTime: "请选择您的出生时间",
				txtLuckNum: "请选择您的幸运数字",
				isShow: false,
				isNianShow: false,
				isYueShow: false,
				isDayShow: false,
				isTimeShow: false,
				isLuckShow: false,
				timeArr: ["23:00--00:59   子时", "01:00--02:59   丑时", "03:00--04:59   寅时", "05:00--06:59   卯时", "07:00--08:59   辰时",
					"09:00--10:59   巳时", "11:00--12:59   午时", "13:00--14:59   未时", "15:00--16:59   申时", "17:00--18:59   酉时",
					"19:00--20:59   戊时", "21:00--22:59   亥时",
				]
			}
		},
		
		onLoad:function(){
			var id=this.$user.getUserID();
			var url="users/getBirthInfo?id="+id;
			httpRequest(url,this.getBirthday);
			// var user=uni.getStorageSync("userbirthday");
			// if(user!=""){
			// 	this.txtName=user.name;
			// 	this.txtLuckNum=user.luckNumber;
			// 	this.txtNian=user.nian;
			// 	this.txtYue=user.yue;
			// 	this.txtTime=user.time;
			// 	this.txtDay=user.day;
			// }
		},
		
		methods: {
			showPanel: function(type) {
				this.isShow = !this.isShow;

				if (type == "nian") {
					this.isNianShow = true;
					this.isYueShow = false;
					this.isTimeShow = false;
					this.isLuckShow = false;
					this.isDayShow = false;
				} else if (type == "yue") {
					this.isNianShow = false;
					this.isYueShow = true;
					this.isTimeShow = false;
					this.isLuckShow = false;
					this.isDayShow = false;
				} else if (type == "day") {
					this.isNianShow = false;
					this.isYueShow = false;
					this.isTimeShow = false;
					this.isLuckShow = false;
					this.isDayShow = true;
				} else if (type == "time") {
					this.isNianShow = false;
					this.isYueShow = false;
					this.isTimeShow = true;
					this.isLuckShow = false;
					this.isDayShow = false;
				} else if (type == "number") {
					this.isNianShow = false;
					this.isYueShow = false;
					this.isTimeShow = false;
					this.isLuckShow = true;
					this.isDayShow = false;
				}
			},
			
			setName:function(event){
				this.txtName=event.detail.value;
			},
			
			setNianInfo: function(data) {
				this.isNianShow = false;
				this.isShow = false;
				this.txtNian = data+"年";
			},

			setYueInfo: function(data) {
				this.isYueShow = false;
				this.isShow = false;
				this.txtYue = data + 1+"月";
			},

			setDayInfo: function(data) {
				this.isDayShow = false;
				this.isShow = false;
				this.txtDay = data+"日";
			},

			setTimeInfo: function(data) {
				this.isTimeShow = false;
				this.isShow = false;
				this.txtTime = data;
			},

			setLuckNumber: function(data) {
				this.isTimeShow = false;
				this.isShow = false;
				this.txtLuckNum = data;
			},
			
			SaveBirthdayInfo: function() {
				if (this.txtName == "" || this.txtLuckNum == "请选择您的幸运数字" || this.txtTime == "请选择您的出生时间" || this.txtDay ==
					"请选择您的出生日期" || this.txtYue == "请选择您的出生月份" || this.txtNian == "请选择您的出生年份") {
					uni.showModal({
						title: "信息不完整",
						content: "请填写完整的信息！"
					})
				} else {
					var data = "姓名: " + this.txtName + "\n" +
						"出生日期: " + this.txtNian + "--" + this.txtYue + "--" + this.txtDay + "" + "\n" +
						"出生时间: " + this.txtTime + "\n" +
						"幸运数字: " + this.txtLuckNum;
						this.showAlert(data);
				}
			},
			
			showAlert:function(data){
				var self = this;
				uni.showModal({
					title: "信息确认",
					content: data,
					success(res) {
						if (res.confirm) {
							var birth=self.txtNian+"/"+self.txtYue+"/"+self.txtDay+"/"+self.txtTime;
							var id=self.$user.getUserID();
							var url="users/setbirth?id="+id+"&birthday="+birth+"&name="+self.txtName+"&lucknum="+self.txtLuckNum;
							httpRequest(url,self.saveBirthdayinfo);
						}else{
							uni.showModal({
								title:"保存失败",
								content:"已取消保存！"
							})
						}
					}
				})
			},
			
			saveBirthdayinfo:function(type,data){
				if(type=="fail"){
					uni.showModal({
						title:"none",
						content:"保存失败"
					})
				}else{
					uni.showModal({
						title:"none",
						content:"保存成功"
					})
				}
			},
			
			getBirthday:function(type,data){
				var birthinfo=data.data;
				var time=birthinfo.time.split("/");
				if(data.statusCode==200){
					if(birthinfo!=null&&birthinfo!=""){
						this.txtName=birthinfo.name;
						this.txtLuckNum=birthinfo.lucknum;
						this.txtNian=time[0];
						this.txtYue=time[1];
						this.txtTime=time[3];
						this.txtDay=time[2];
					}
				}
			},
		},
	}
</script>

<style>
	.nian {
		background-color: #EEEEEE;
		margin-top: 25px;
		height: 500upx;
	}

	.button {
		background-color: #FFFFFF;
		margin-top: -20upx;
		width: 520upx;
		height: 90upx;
	}
	
	.name1{
		margin-left: 130upx;
		font-size: 35upx;
		width: 380upx;
		font-size: 35upx;
		height: 45upx;
	}
	
	.name2{
		margin-left: 218upx;
		font-size: 35upx;
		width: 380upx;
		font-size: 30upx;
		height: 45upx;
	}
	
	.time1{
		margin-left: -100upx; 
		color: #000000;
	}
	
	.time2{
		margin-left: -50upx; 
		color: #000000;
	}
</style>
