<template>
	<view>
		<view class="uni-flex uni-row" style="flex-direction: row; width: 100%; height: 100%;">
			<view class="text" style=" margin-left: 15upx; margin-top: 80upx; font-size: 55upx; color:#ED1C24">{{ money }}</view>
			<view class="uni-flex uni-column">
				<view class="uni-flex uni-row" style="height: 60upx;text-align: left;">
					<view style="color: #ED1C24;margin-top: 25upx;margin-left: -10upx;font-size: 30upx;">今开：{{jinKai }}</view>
					<view style="color: #E54D42;margin-top: 25upx;margin-left: 135upx;font-size: 30upx;">最高：{{max }}</view>
				</view>

				<view class="uni-flex uni-row" style="height: 60upx;text-align: left;">
					<view style="margin-top: 25upx;margin-left: -10upx;font-size: 30upx;width: 320upx;" >流通值：{{ liuton }}</view>
					<view style="color: #09BB07;margin-top: 25upx;margin-left:-20upx;font-size: 30upx;width: 180upx;">最低：{{ min }}</view>
				</view>
				<view class="uni-flex uni-row" style="height: 60upx;text-align: left;">
					<view style="margin-top: 25upx;margin-left: -10upx;font-size: 30upx;width: 320upx;">内盘：{{neipan }}</view>
					<view style="margin-top: 25upx;margin-left:-20upx;font-size: 30upx;width: 280upx;">外盘：{{waipan }}</view>
				</view>
			</view>
		</view>

		<view class="uni-flex uni-column">
			<view class="uni-flex uni-row" style="height: 90upx;text-align: left; line-height: 50upx;">
				<view style="margin-top: 45upx;margin-left:20upx;font-size: 30upx;width: 280upx;" >换手率：{{huanshou }}</view>
				<view style="margin-top: 45upx;margin-left:20upx;font-size: 30upx;width: 280upx;">成交量：{{chenjiaoNum }}</view>
				<view style="margin-top: 45upx;margin-left:20upx;font-size: 30upx;width: 280upx;" >成交额：{{chenjiaoMoney }}</view>
			</view>

			 <view class="uni-flex uni-row" style="height: 90upx;text-align: left; line-height: 50upx;">
				<view style="margin-top: 35upx;margin-left:50upx;font-size: 30upx;width: 280upx;" >昨收：{{zuoshou }}</view>
				<view style="margin-top: 35upx;margin-left:20upx;font-size: 30upx;width: 280upx;">均价：{{junjia }}</view>
				<view style="margin-top: 35upx;margin-left:-10upx;font-size: 30upx;width: 280upx;">市净率：{{shijing }}</view>
			</view>

			<view class="uni-flex uni-row" style="height: 90upx;text-align: left; line-height: 50upx;">
				<view style="color: #DD524D;margin-top: 35upx;margin-left:50upx;font-size: 30upx;width: 280upx;">{{ '涨停：' + zhangtin }}</view>
				<view style="margin-top: 35upx;margin-left:50upx;font-size: 30upx;width: 280upx;" >涨速：{{zhangsu }}</view>
				<view style="margin-top: 35upx;margin-left:50upx;font-size: 30upx;width: 280upx;" >振幅：{{zhenfu }}</view>
			</view>

			<view class="uni-flex uni-row" style="height: 90upx;text-align: left; line-height: 50upx;">
				<view style="color: #09BB07;margin-top: 35upx;margin-left:50upx;font-size: 30upx;width: 280upx;">{{ '跌停：' + dietin }}</view>
				<view style="margin-top: 35upx;margin-left:-50upx;font-size: 30upx;width: 280upx;">市盈率：{{shiying }}</view>
				<view style="margin-top: 35upx;margin-left:-45upx;font-size: 30upx;width: 280upx;">{{ '总市值：' + zonzhi }}</view>
			</view>

			<!--<v iew class="uni-flex uni-row" style="height: 90upx;text-align: left; line-height: 50upx;">
				<view class="text" >委比：11.25</view>
				<view class="text">市盈(动)：10.03</view>
				<view class="text">每股净资产：10.03</view>
			</view>-->
		</view>

		
		<view class="uni-flex uni-row" style="height: 90upx;text-align: left; line-height: 50upx;">
			<button class="button-hover1" @click="addHallStock" v-show="isSave"><view style="font-size: 35upx; margin-top: 10upx; color: #000000;">收 藏</view></button>
			<button :class="isSave == false ? 'button-hover2' : 'button-hover1'" @click="startForecast"><view :class="isSave == false ? 'font1' : 'font2'">开始预测</view></button>
		</view>

		<view style="margin-top: 320upx;">
			<button style="background-color:#CCE6FF;height:90upx; " size="default" type="primary" @click="optional" hover-class="none">
				<view style="font-size: 40upx; margin-top: 10upx; color: #000000;">自选卦象</view>
			</button>
		</view>
	</view>
</template>

<script>
	import {httpRequest} from '../../common/common.js'
export default {
	data() {
		return {
			txtMax: '12.56',
			txtMin: '10.52',
			stockID: '',
			stockData: [],
			jinKai: '', //今开
			max: '', //最高
			min: '', //最低
			chenjiaoNum: '', //成交量
			chenjiaoMoney: '', //成交金额
			zuoshou: '', //昨收
			buy: '', //竞买
			sell: '', //竞卖
			money: '', //当前价格,
			waipan: '', //外盘,
			neipan: '', //内盘
			huanshou: '', //换手率
			shiying: '', //市盈率
			zhenfu: '', //振幅
			zonzhi: '', //总市值
			shijing: '', //市净率
			zhangtin: '', //涨停
			dietin: '', //跌停
			liuton: '', //流通值,
			zhangsu: '', //涨速
			junjia: '', //均价
			isSave: true
		};
	},

	onLoad: function(option) {
		//获取路由传值
		this.stockID = option.type;
		this.stockData = this.stockID.split('~');
		console.log(this.stockData);
		//动态修改title
		uni.setNavigationBarTitle({
			title: this.stockData[1] + '(' + this.stockData[2] + ')'
		});

		var url ="collect/findstock?code="+this.stockData[2]+"&type=2"+"&userid="+this.$user.getUserID();
		httpRequest(url,this.setSaveButtonActive)
		this.setStockDetail(this.stockData);
	},

	methods: {
		startForecast: function() {
			var data = this.stockData[1] + '(' + this.stockData[2] + ')';
			uni.navigateTo({
				url: '../divination/Divination?type=' + data
			});
		},

		optional: function() {
			var data = this.stockData[1] + '(' + this.stockData[2] + ')';
			uni.navigateTo({
				url: '../optional/optional?type=' + data
			});
		},

		setStockDetail: function(dataArr) {
			if (dataArr == null) return;

			if (dataArr[3] != null && dataArr[3] != '') this.money = dataArr[3];
			else this.money = '';

			if (dataArr[4] != null && dataArr[4] != '') this.zuoshou = dataArr[4];
			else this.zuoshou = '';

			if (dataArr[5] != null && dataArr[5] != '') this.jinKai = dataArr[5];
			else this.jinKai = '';

			if (dataArr[7] != null && dataArr[7] != '') this.waipan = dataArr[7];
			else this.waipan = '';

			if (dataArr[8] != null && dataArr[8] != '') this.neipan = dataArr[8];
			else this.neipan = '';

			if (dataArr[32] != null && dataArr[32] != '') this.zhangsu = dataArr[32] + '%';
			else this.zhangsu = '';

			if (dataArr[36] != null && dataArr[36] != '') this.chenjiaoNum = (dataArr[36] / 10000).toFixed(1) + '万';
			else this.chenjiaoNum = '';

			if (dataArr[37] != null && dataArr[37] != '') this.chenjiaoMoney = (dataArr[37] / 10000).toFixed(2) + '亿';
			else this.chenjiaoMoney = '';

			if (dataArr[38] != null && dataArr[38] != '') this.huanshou = dataArr[38] + '%';
			else this.huanshou = '';

			if (dataArr[39] != null && dataArr[39] != '') this.shiying = dataArr[39];
			else this.shiying = '';

			if (dataArr[41] != null && dataArr[41] != '') this.max = dataArr[41];
			else this.max = '';

			if (dataArr[42] != null && dataArr[42] != '') this.min = dataArr[42];
			else this.min = '';

			if (dataArr[43] != null && dataArr[43] != '') this.zhenfu = dataArr[43] + '%';
			else this.zhenfu = '';

			if (dataArr[44] != null && dataArr[44] != '') this.liuton = dataArr[44];
			else this.liuton = '';

			if (dataArr[45] != null && dataArr[45] != '') this.zonzhi = dataArr[45] + '亿';
			else this.zonzhi = '';

			if (dataArr[46] != null && dataArr[46] != '') this.shijing = dataArr[46];
			else this.shijing = '';

			if (dataArr[47] != null && dataArr[47] != '') this.zhangtin = dataArr[47];
			else this.zhangtin = '';

			if (dataArr[48] != null && dataArr[48] != '') this.dietin = dataArr[48];
			else this.dietin = '';

			if (dataArr[51] != null && dataArr[51] != '') this.junjia = dataArr[51];
			else this.junjia = '';
		},

		addHallStock: function() {
			var url="collect/addstock?userid="+this.$user.getUserID()
			+"&xianjia="+this.stockData[3]
			+"&stockname="+this.stockData[1]
			+"&zhangdie="+this.stockData[31]
			+"&zhangfu="+this.stockData[32]
			+"&jinKai="+this.stockData[5]
			+"&code="+this.stockData[2]
			httpRequest(url,this.addCallback);
			this.isSave = false;
		},
		
		addCallback:function(type,data){
			if(type=="fail")return;
			
			if(data.data.code==200){
				uni.showModal({
					title: '收藏成功',
					content: "收藏成功，可在首页'我的自选'中查看"
				});
			}
		},

		setSaveButtonActive: function(type,data) {
			if(type=="fail")return;
			
			if(data.data==true){
				this.isSave = false;
			}else{
				this.isSave = true;
			}
		}
	}
};
</script>

<style>
.text {
	margin: 20upx 20upx;
	/* 上下间距 左右间距 */
	padding: 10upx 20upx;
	height: 40upx;
	line-height: 70upx;
	text-align: left;
	/* color: #8F8F94; */
	font-size: 31upx;
	width: 300upx;
	height: 60upx;
	font-size: 31upx;
	line-height: 40upx;
}

.button-hover1 {
	margin-top: 300upx;
	width: 240upx;
	height: 80upx;
	margin-left: 80upx;
	background-color: #cce6ff;
}

.button-hover2 {
	width: 100%;
	height: 100upx;
	margin-left: 0upx;
	margin-top: 300upx;
	background-color: #cce6ff;
}

.font1 {
	font-size: 42upx;
	margin-top: 15upx;
	color: #000000;
}

.font2 {
	font-size: 35upx;
	margin-top: 10upx;
	color: #000000;
}
</style>
