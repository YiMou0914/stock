<style lang="scss" scoped>
	.input-box{
		padding: 20upx;
		font-size: 30upx;
	.input-item {
			border-bottom: 65upx solid #eeeeee;
			line-height: 100upx;
			height: 0upx;
			.input-label {
				width: 150upx;
			}
			.input-body{
				position: relative;
				height:100upx;
				width: calc(100% - 150upx);
				justify-content: center;
				align-items: center;
				.input {
					line-height: 100upx;
					height: 60upx;
					position: relative;
					font-size: 45upx;
				}
			}
			.btn-code{
				position: absolute;
				    right: -140upx;
				    top:50%;
				    transform: translateY(-50%);
					background: none;
					color: #000000;
					width: 160upx;
					font-size: 32upx;
					box-sizing: border-box;
					text-align: right;
					padding: 0;
					height: 140upx;
					line-height: 100upx;
			}
			.btnKuang{
				.stockname{
					position: absolute;
					top:-35%;
					left: 5%;
						background: none;
						color: #000000;
						font-size: 45upx;
						text-align: left;
						justify-content: left;
						align-items: left;
				}
			}
	}
	}
	.partation {
	  width: 100%;
	  height: 1upx;
	  background: #f4f4f4;
	  transform: scaleY(0.5);
	}
	.scroll-view_H{
		width: 160upx;
		font-size: 33upx;
		.scroll-view-item_H{
			width: 150upx;
		}
	}
	.flex-wrap {
	  flex-wrap: wrap;
	}
	
	.flex-nowrap {
	  flex-wrap: nowrap;
	}
	
	.flex-row {
	  display: flex;
	  flex-direction: row;
	}
	.keyboard-item {
	    width: 150upx;
	    margin: 0 0 0 23upx;
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	    align-items: center;
	    background: #fff;
	    border-radius: 20upx;
	    margin-top: 10upx;
			margin-left: 30upx;
	    font-size: 50upx;
	    color: #333;
	    box-shadow: 0 2upx 3upx rgba(0, 0, 0, .5);
	    height: 80upx;
	  }
	.keyboard-item2{
	    width: 80upx;
	    margin: 0 0 0 10upx;
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	    align-items: center;
	    background: #fff;
	    border-radius: 15upx;
	    margin-top: 18upx;
			margin-left: 5upx;
	    font-size: 50upx;
	    color: #333;
	    box-shadow: 0 2upx 3upx rgba(0, 0, 0, .5);
	    height: 100upx;
	  }
		
.keyboard-item2.button-hover {
	    opacity: .5;
	  }
		
	.keyboard-item.button-hover {
	    opacity: .5;
	  }
		
		.password input{
		   display: none;
		 }
.keyPanel{
	background-color: darkgrey;
	margin-top: 10px;
	height: 370upx;
}
.abcpanel{
	background-color: darkgrey;
	margin-top: 20upx;
	height: 372upx;
}
</style>
<template>
	<view>
		<view class="input-box">
			<!-- 顶部输入框 -->
			<view class="input-item">
				<view class="input-body">
					<button @click="setKeyActive" style="width: 600upx; height: 64upx;" class="btnKuang">
						<text style="font-size: 45upx;" class="stockname">{{txtStock}}</text>
					</button>
					<button class="btn-code" @click="found" type="primary" size="mini">搜索</button>
				</view>
			</view>
		</view>

		<scroll-view scroll-y="true" style="width: 100%; height: 600upx; " v-show="iskeyopen">
			<block v-for="(item,index) in dataArr" :key="index">
				<view :class="'indexItem-' + item.name" :id="'indexes-' + item.name" :data-index="item.name">
					<button style="width: 100%; height: 80upx; margin-top: 20upx; color: #555555;" type="default" @click="setStock(item.id)">
						<view class="uni-flex uni-row">
							<view class="padding" style="font-size: 35upx;margin-left: -10upx; margin-top: 10upx; width: 280upx;">{{item.name}}</view>
							<view class="padding" style="font-size: 35upx;margin-left: -10upx; margin-top: 10upx; width: 150upx;">{{item.id}}</view>
							<view class="padding" style="font-size: 35upx;margin-left: 40upx; margin-top: 10upx; width: 150upx;">{{item.pinyin}}</view>
						</view>
					</button>
				</view>
			</block>
			<button style="100%width: 100%; height: 90upx; font-size: 35upx; margin-top: 10upx;"  @click="deleteDataArr" v-show="false">清空记录</button>
		</scroll-view>

		<!-- 键盘 -->
		<view v-show="iskeyopen">
			<!-- 数字键盘 -->
			<view class="keyPanel" v-show="isnumber">
				<view class="uni-flex uni-column">
					<view class="uni-flex uni-row">
						<button class="keyboard-item" @click="key('000')">
							<text>000</text>
						</button>
						<button class="keyboard-item" @click="key(1)">
							<text>1</text>
						</button>
						<button class="keyboard-item" @click="key(2)">
							<text>2</text>
						</button>
						<button class="keyboard-item" @click="key(3)">
							<text>3</text>
						</button>
					</view>

					<view class="uni-flex uni-row">
						<button class="keyboard-item" @click="key(300)">
							<text>300</text>
						</button>
						<button class="keyboard-item" @click="key(4)">
							<text>4</text>
						</button>
						<button class="keyboard-item" @click="key(5)">
							<text>5</text>
						</button>
						<button class="keyboard-item" @click="key(6)">
							<text>6</text>
						</button>
					</view>

					<view class="uni-flex uni-row">
						<button class="keyboard-item" @click="key(600)">
							<text>600</text>
						</button>
						<button class="keyboard-item" @click="key(7)">
							<text>7</text>
						</button>
						<button class="keyboard-item" @click="key(8)">
							<text>8</text>
						</button>
						<button class="keyboard-item" @click="key(9)">
							<text>9</text>
						</button>
					</view>

					<view class="uni-flex uni-row">
						<button class="keyboard-item" @click="setKeyClass">
							<text>ABC</text>
						</button>
						<button class="keyboard-item" @click="key(0)">
							<text>0</text>
						</button>
						<button class="keyboard-item" @click="key('.')">
							<text>.</text>
						</button>
						<button class="keyboard-item" @click="del()">
							<image class="" src="/static/delte.png" mode="aspectFill" :lazy-load="true" style="height: 55%; width: 60upx;"></image>
						</button>
					</view>
				</view>
			</view>

			<!-- 英文字母键盘 -->
			<view class="abcpanel" v-show="!isnumber">
				<view class="uni-flex uni-column" v-show="!isnumber">
					<view class="uni-flex uni-row">
						<button class="keyboard-item2" @click="key('Q')">
							<text>Q</text>
						</button>
						<button class="keyboard-item2" @click="key('W')">
							<text>W</text>
						</button>
						<button class="keyboard-item2" @click="key('E')">
							<text>E</text>
						</button>
						<button class="keyboard-item2" @click="key('R')">
							<text>R</text>
						</button>
						<button class="keyboard-item2" @click="key('T')">
							<text>T</text>
						</button>
						<button class="keyboard-item2" @click="key('Y')">
							<text>Y</text>
						</button>
						<button class="keyboard-item2" @click="key('U')">
							<text>U</text>
						</button>
						<button class="keyboard-item2" @click="key('I')">
							<text>I</text>
						</button>
						<button class="keyboard-item2" @click="key('O')">
							<text>O</text>
						</button>
						<button class="keyboard-item2" @click="key('P')">
							<text>P</text>
						</button>
					</view>

					<view class="uni-flex uni-row">
						<button class="keyboard-item2" @click="key('A')">
							<text>A</text>
						</button>
						<button class="keyboard-item2" @click="key('S')">
							<text>S</text>
						</button>
						<button class="keyboard-item2" @click="key('D')">
							<text>D</text>
						</button>
						<button class="keyboard-item2" @click="key('F')">
							<text>F</text>
						</button>
						<button class="keyboard-item2" @click="key('G')">
							<text>G</text>
						</button>
						<button class="keyboard-item2" @click="key('H')">
							<text>H</text>
						</button>
						<button class="keyboard-item2" @click="key('J')">
							<text>J</text>
						</button>
						<button class="keyboard-item2" @click="key('K')">
							<text>K</text>
						</button>
						<button class="keyboard-item2" @click="key('L')">
							<text>L</text>
						</button>
					</view>

					<view class="uni-flex uni-row">
						<button class="keyboard-item2" @click="setKeyClass" style="font-size: 45upx;">
							<text>123</text>
						</button>
						<button class="keyboard-item2" @click="key('Z')">
							<text>Z</text>
						</button>
						<button class="keyboard-item2" @click="key('X')">
							<text>X</text>
						</button>
						<button class="keyboard-item2" @click="key('C')">
							<text>C</text>
						</button>
						<button class="keyboard-item2" @click="key('V')">
							<text>V</text>
						</button>
						<button class="keyboard-item2" @click="key('B')">
							<text>B</text>
						</button>
						<button class="keyboard-item2" @click="key('N')">
							<text>N</text>
						</button>
						<button class="keyboard-item2" @click="key('M')">
							<text>M</text>
						</button>
						<button class="keyboard-item2" @click="del()">
							<image class="" src="/static/delte.png" mode="aspectFill" :lazy-load="true" style="height: 45%; width:60upx;"></image>
						</button>
					</view>
				</view>
			</view>
		</view>
	</view>
	</view>

</template>
<script>
	import { httpRequest } from '../../common/common.js'
	import {	stockDetail} from "../request.js"
	export default {
		data() {
			return {
				txtStock: "",
				isnumber: true,
				iskeyopen: false,
				dataArr:[],
				isDelete:false,
			};
		},
		onShow() {
			// this.dataArr=[];
			// let arr=uni.getStorageSync("stockdata");
			// if(arr=="")return;
			// this.isDelete=true;
			// for (let i = 0; i < arr.length; i++) {
			// 	this.dataArr.push(JSON.parse(arr[i]));
			// }
		},
		
		methods: {
			setStockName: function(event) {
				this.txtStock = event.detail.value;
			},
			
			//删除查找记录
			deleteDataArr:function(code){
				var self=this;
				uni.showModal({
					content:"确定清除搜索记录？",
					success:function(res){
						if (res.confirm) {
							self.dataArr=[];
							self.isDelete=false;
							uni.setStorageSync("stockdata",self.dataArr);
							
							uni.showModal({
								content:"清除成功"
							})
						}
					}
				})
			},

			key(key) {
				this.txtStock += key;
				var url="allStock/findStock?key="+this.txtStock;
				httpRequest(url,this.callback)
			},
			
			callback:function(type,data){
				if(type=="fail")return;
				// debugger
				if(data.statusCode==200){
					console.log(200);
					this.dataArr=data.data.slice(0,22);
				}
			},

			setStock: function(code) {
				stockDetail(code, this.navigateStockDeta);
			},

			setKeyClass: function() {
				this.isnumber = !this.isnumber;
			},

			setKeyActive: function() {
				this.iskeyopen = true;
			},

			found: function() {
				stockDetail(this.txtStock, this.navigateStockDeta);
			},

			navigateStockDeta: function(data) {
				var data = data.substring(12, data.length);
				if (data.length < 30) {
					uni.showModal({
						title: "错误代码",
						content: "股票代码错误！请重新输入。"
					});
				} else {
					uni.navigateTo({
						url: '/pages/stockDetail/StockDetail?type=' + data
					});
				}
				this.txtStock = "";
			},

			del() {
				if (this.txtStock.length > 0) {
					this.txtStock = this.txtStock.substring(0, this.txtStock.length - 1)
					var url="allStock/findStock?key="+this.txtStock;
					httpRequest(url,this.callback)
				}
			},
		}
	}
</script>
