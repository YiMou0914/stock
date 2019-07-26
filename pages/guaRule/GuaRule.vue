<template>
	<view>
		<canvas canvas-id="myCanvas" style="width: 100%;height: 1240upx;"  @tap="hideModal">
			<view class="uni-flex uni-row">
				<text style="width: 10upx; height: 150upx; font-size: 35upx; margin-left: 15upx; margin-top: 90upx;">{{ txtBenShang }}</text>
				<text style="width: 10upx; height: 150upx; font-size: 35upx; margin-left: -10upx; margin-top: 255upx;">{{ txtBenXia }}</text>
				<view class="gua_ben">
					<text class="ben" style="font-size: 35upx;">本卦</text>
					<view class="uni-flex uni-column">
						<view class="divina"><image :src="guaArr.length > 5 ? guaArr[5].divinaUrl : ''" style="width: 220upx; height:25upx;"></image></view>
			
						<view class="divina"><image :src="guaArr.length > 4 ? guaArr[4].divinaUrl : ''" style="width: 220upx; height:25upx;"></image></view>
			
						<view class="divina"><image :src="guaArr.length > 3 ? guaArr[3].divinaUrl : ''" style="width: 220upx; height:25upx;"></image></view>
			
						<view class="divina"><image :src="guaArr.length > 2 ? guaArr[2].divinaUrl : ''" style="width: 220upx; height:25upx;"></image></view>
			
						<view class="divina"><image :src="guaArr.length > 1 ? guaArr[1].divinaUrl : ''" style="width: 220upx; height:25upx;"></image></view>
			
						<view class="divina"><image :src="guaArr.length > 0 ? guaArr[0].divinaUrl : ''" style="width: 220upx; height:25upx;"></image></view>
					</view>
					<text class="ben_rule" style="font-size: 40upx; margin-left: 35upx;">{{ txtBen }}</text>
				</view>
				<view class="gua_bian">
					<text class="bian" style="font-size: 35upx;">变卦</text>
					<view class="uni-flex uni-column">
						<view class="divina"><image :src="bianArr.length > 5 ? bianArr[5].divinaUrl : ''" style="width: 220upx; height:25upx;"></image></view>
			
						<view class="divina"><image :src="bianArr.length > 4 ? bianArr[4].divinaUrl : ''" style="width: 220upx; height:25upx;"></image></view>
			
						<view class="divina"><image :src="bianArr.length > 3 ? bianArr[3].divinaUrl : ''" style="width: 220upx; height:25upx;"></image></view>
			
						<view class="divina"><image :src="bianArr.length > 2 ? bianArr[2].divinaUrl : ''" style="width: 220upx; height:25upx;"></image></view>
			
						<view class="divina"><image :src="bianArr.length > 1 ? bianArr[1].divinaUrl : ''" style="width: 220upx; height:25upx;"></image></view>
			
						<view class="divina"><image :src="bianArr.length > 0 ? bianArr[0].divinaUrl : ''" style="width: 220upx; height:25upx;"></image></view>
					</view>
					<text class="bian_rule" style="font-size: 40upx; margin-left: 50upx; color:#DD524D ;">{{ txtBian }}</text>
				</view>
			
				<text style="width: 10upx; height: 150upx; font-size: 35upx; margin-left: 35upx; margin-top: 90upx; color: #DD514C;">{{ txtBianShang }}</text>
				<text style="width: 10upx; height: 150upx; font-size: 35upx; margin-left: -10upx; margin-top: 255upx;color: #DD514C;">{{ txtBianXia }}</text>
			</view>
			
			<image src="../../static/yang.png" style="width: 100%; height: 5upx;"></image>
			
			<view style="font-size: 40upx;">
				<text>{{ '当前股票为： ' + txtStock }}</text>
				<br />
				<text style="color: #DD524D;">{{ '卦象解析: ' + guaContent }}</text>
				<br />
				<text>{{ '参考： ' + guaRule }}</text>
				<br />
			</view>
			
			<view v-show="isShare">
				<!-- <view class="sharePanelDi" @tap="hideModal"></view> -->
				<view class="sharePanel" @tap.stop="">
					<text style="margin-left: 320upx; margin-top: 20upx;font-size: 40upx;">分享至</text>
					<view class="uni-flex uni-row">
						<view class="uni-flex uni-column" style="margin-left: 80upx;margin-top: 20upx;" @click="shareWechat('PYQ')">
							<image src="../../static/PYQ.png" style="width: 150upx; height: 150upx;margin-left: 80upx;"></image>
							<view style="margin-left: 100upx;font-size: 35upx;">朋友圈</view>
						</view>
			
						<view class="uni-flex uni-column" style="margin-left: 80upx; margin-top: 20upx;" @click="shareWechat('talking')">
							<image src="../../static/umsocial_wechat.png" style="width: 150upx; height: 150upx;margin-left: 80upx;"></image>
							<view style="margin-left: 95upx;font-size: 35upx;">微信聊天</view>
						</view>
					</view>
				</view>
			</view>
		</canvas>
		<view class="uni-flex uni-row"  @tap.stop="" v-show="!isShare">
			<button  @tap="showShareWindow" class="btnClose" style="margin-left: 100upx;">分享解析</button>
			<button  @tap="close" class="btnClose">退 出</button>
		</view>
	</view>
</template>

<script>
import { getGuaRule, getGuaXiang } from '../Rules.js';
import { sharePYQWindow, shareWeChatTalkingWindow }from '../WXMgr.js'
	import {httpRequest} from '../../common/common.js'
export default {
	data() {
		return {
			guaArr: null,
			bianArr: [],
			txtBen: '',
			txtBian: '',
			txtBenXia: '',
			txtBenShang: '',
			txtBianShang: '',
			txtBianXia: '',
			guaRule: '',
			txtStock: '',
			guaContent: '',
			isShare: false,
		};
	},

	onLoad: function(option) {
		//获取路由传值
		var gua = JSON.parse(option.type);
		this.guaArr = JSON.parse(gua.guaData);
		this.txtStock = gua.stockID;
		this.setBianGuaInfo();

		this.saveGuaContent(this.getNowTime());
	},
	methods: {
		setBianGuaInfo: function() {
			var guaUrl = '';
			this.getGuaRule(this.guaArr, 'ben');
			for (let i = 0; i < this.guaArr.length; i++) {
				if (this.guaArr[i].gua_1 == this.guaArr[i].gua_2 && this.guaArr[i].gua_1 == this.guaArr[i].gua_3) {
					this.setGuaUrl(i); //进行变卦
				} else {
					guaUrl = {
						guaData: this.guaArr[i].guaData,
						divinaUrl: this.guaArr[i].divinaUrl
					};
					this.bianArr.push(guaUrl);
				}
			}

			this.getGuaRule(this.bianArr, 'bian');
		},

		setGuaUrl: function(i) {
			var guaUrl = '';
			if (this.guaArr[i].divinaUrl == '../../static/yin.png') {
				guaUrl = {
					guaData: '1',
					divinaUrl: '../../static/yang.png'
				};
			} else {
				guaUrl = {
					guaData: '0',
					divinaUrl: '../../static/yin.png'
				};
			}
			this.bianArr.push(guaUrl);
		},

		close: function() {
			uni.reLaunch({
				url: '../hall/hall'
			});
		},

		getGuaRule: function(itemArr, type) {
			var xia = itemArr[2].guaData;
			xia += itemArr[1].guaData;
			xia += itemArr[0].guaData;

			var shang = itemArr[5].guaData;
			shang += itemArr[4].guaData;
			shang += itemArr[3].guaData;

			if (type == 'ben') {
				this.txtBen = getGuaXiang(shang, xia);
				this.txtBenShang = getGuaRule(shang); //本卦   上卦
				this.txtBenXia = getGuaRule(xia); //本卦   下卦
			} else {
				this.txtBian = getGuaXiang(shang, xia);
				this.txtBianShang = getGuaRule(shang); //变卦   上卦
				this.txtBianXia = getGuaRule(xia); //变卦   下卦

				if (this.txtBen == this.txtBian) {
					this.guaRule = this.txtBen.substring(2, 5) + '不变卦';
				} else {
					this.guaRule = this.txtBen.substring(2, 5) + '卦变';
					this.guaRule += this.txtBian.substring(2, 5) + '卦';
				}
			}
		},

		getNowTime: function() {
			var nowtime = '';
			var time = new Date();
			var y = time.getFullYear();
			var m = time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1;
			var d = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
			var h = time.getHours();
			var h_m = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

			return y + '-' + m + '-' + d + ' ' + h + ':' + h_m;
		},

		saveGuaContent: function(time) {
			var url="record/addRecord?guastate="+this.guaRule
							+"&name="+this.txtStock
							+"&time="+time
							+"&content="+this.guaContent
							+"&userid="+this.$user.getUserID();
			uni.showModal({
				content:url
			})
			httpRequest(url,this.callback);
		},
		
		callback:function(type,data){
			if(type=="fail"){
				uni.showModal({
					content:data.data.err
				})
				return
			}
			var self=this;
			uni.showModal({
				title:type,
				content:"addRecord========userid="+self.$user.getUserID()
			})
		},

		showShareWindow:function(){
			this.isShare = !this.isShare;
		},
		
		shareWechat:function(type) {
			// var info="时间："+this.getNowTime()+"\n"+
			// 					"当前股票为: "+this.txtStock+"\n"+
			// 					"参考： "+this.guaRule+"\n"+
			// 					"卦象解析: "+this.guaContent+"\n";
			// if(type=="PYQ"){
			// 	sharePYQWindow(info,this.shareCallBcak);
			// }else{
			// 	shareWeChatTalkingWindow(info,this.shareCallBcak);
			// }
			this.isShare = true;
			this.canvasToTempFilePath(type);
		},
		
		shareCallBcak:function(){
			this.isShare=!this.isShare;
			uni.showModal({
				content:"关闭分享界面"
			})
		},
		
		canvasToTempFilePath:function(type){
			var self=this;
			var phoneInfo=uni.getSystemInfoSync();
			const can=uni.createCanvasContext("myCanvas");
			// can.setFillStyle("#FEF2CE");
			// can.setFontSize(45);
			// can.fillText("涨跌易断",160,280);
			// can.drawImage('http://5b0988e595225.cdn.sohucs.com/images/20171030/26ed195281334ba4b1752394b60eb29a.jpeg',100,100,100,100)
			can.draw(true,function(){
				uni.canvasToTempFilePath({
					x:10,
					y:10,
					width: phoneInfo.screenWidth,
					height: phoneInfo.screenHeight,
					destWidth: phoneInfo.windowWidth,
					destHeight: phoneInfo.windowHeight,
					canvasId: 'myCanvas',
					success: function(res) {
						uni.showModal({
							title:'获取照片成功',
						})
						if(type=="PYQ"){
							sharePYQWindow(res.tempFilePath);
						}else{
							shareWeChatTalkingWindow(res.tempFilePath);
						}
					},
					fail:function(res){
						uni.showModal({
							title:'获取照片失败',
							content:res.message,
						})
					}
				},self);
			});
		},
		
		hideModal: function() {
			this.isShare = !this.isShare;
		}
	}
};
</script>

<style>
.gua_ben {
	margin-left: 60upx;
	margin-top: 30upx;
}

.ben {
	margin-left: 80upx;
}

.gua_bian {
	margin-left: 120upx;
	margin-top: 30upx;
}

.bian {
	margin-left: 80upx;
	color: #dd524d;
}

.btnClose {
	margin-top: -260upx;
	margin-left: 50upx;
	font-size: 35upx;
	width: 220upx;
	height: 75upx;
	background-color: #cce6ff;
}

.button-hover1 {
	margin-top: -300upx;
	width: 240upx;
	height: 80upx;
	margin-left: 80upx;
	background-color: #cce6ff;
}

.sharePanelDi {
	width: 100%;
	height: 900upx;
	margin-top: 0upx;
	background-color: #7b7b7b;
}
.sharePanel {
	width: 100%;
	height: 320upx;
	background-color: #D2D5DB;
	border-radius: 20upx; /* 圆角 */
	margin-top: 160upx;
}
</style>
