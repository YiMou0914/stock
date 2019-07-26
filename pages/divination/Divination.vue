<template>
	<view>
		<view class="divination">
			<view class="uni-flex uni-row" style="height: 180upx;line-height: 350upx;margin-top: 10upx;">
				<view :class="itemArr[0]==1?'gua_2':'gua_1'" style="margin-left: -120upx; margin-top: -80upx; " v-show="anishow"></view>
				<view :class="itemArr[1]==1?'gua_4':'gua_3'" style="margin-left: -200upx; margin-top: -80upx;" v-show="anishow"></view>
				<view :class="itemArr[2]==1?'gua_6':'gua_5'" style="margin-left: -200upx;margin-top: -80upx;  " v-show="anishow"></view>
			</view>

			<view style="height: 50upx;">
				<button class="btn-code" size="mini" type="primary" @click="startDivination" v-show="btnStart">开始预测</button>
				<button type="primary" size="mini" @click="over" class="btn-code" v-show="isOver" style="margin-left: 125upx;">完成</button>
			</view>
		</view>
		<image src="../../static/yang.png" style="width: 100%; height: 10upx;">-----------分割线----------</image>
		<!-- 第六卦 -->
		<view class="uni-flex uni-column">
			<view class="uni-flex uni-row" style="height: 140upx;line-height: 90upx;">
				<text class="gua_number">第六次</text>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>5?guaArr[5].url1:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>5?guaArr[5].url2:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>5?guaArr[5].url3:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<!-- 卦象 -->
				<view style="width: 155upx;" class="divina">
					<image :src="guaArr.length>5?guaArr[5].divinaUrl:''" style="width: 190upx; height:22upx;"></image>
				</view>
			</view>
			<!-- 第五卦 -->
			<view class="uni-flex uni-row" style="height: 140upx;line-height: 90upx;">
				<text class="gua_number">第五次</text>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>4?guaArr[4].url1:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>4?guaArr[4].url2:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>4?guaArr[4].url3:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<!-- 卦象 -->
				<view style="width: 155upx;" class="divina">
					<image :src="guaArr.length>4?guaArr[4].divinaUrl:''" style="width: 190upx; height:22upx;"></image>
				</view>
			</view>
			<!-- 第四卦 -->
			<view class="uni-flex uni-row" style="height: 140upx;line-height: 90upx;">
				<text class="gua_number">第四次</text>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>3?guaArr[3].url1:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>3?guaArr[3].url2:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>3?guaArr[3].url3:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<!-- 卦象 -->
				<view style="width: 155upx;" class="divina">
					<image :src="guaArr.length>3?guaArr[3].divinaUrl:''" style="width: 190upx; height:22upx;"></image>
				</view>
			</view>
			<!-- 第三卦 -->
			<view class="uni-flex uni-row" style="height: 140upx;line-height: 90upx;">
				<text class="gua_number">第三次</text>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>2?guaArr[2].url1:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>2?guaArr[2].url2:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>2?guaArr[2].url3:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<!-- 卦象 -->
				<view style="width: 155upx;" class="divina">
					<image :src="guaArr.length>2?guaArr[2].divinaUrl:''" style="width: 190upx; height:22upx;"></image>
				</view>
			</view>
			<!-- 第二卦 -->
			<view class="uni-flex uni-row" style="height: 140upx;line-height: 90upx;">
				<text class="gua_number">第二次</text>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>1?guaArr[1].url1:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>1?guaArr[1].url2:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>1?guaArr[1].url3:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<!-- 卦象 -->
				<view style="width: 155upx;" class="divina">
					<image :src="guaArr.length>1?guaArr[1].divinaUrl:''" style="width: 190upx; height:22upx;"></image>
				</view>
			</view>
			<!-- 第一卦 -->
			<view class="uni-flex uni-row" style="height: 140upx;line-height: 90upx;">
				<text class="gua_number">第一次</text>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>0?guaArr[0].url1:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>0?guaArr[0].url2:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<view style="width: 135upx; height: 135upx;">
					<image :src="guaArr.length>0?guaArr[0].url3:'../../static/money.png'" style="width: 120upx; height: 120upx;"></image>
				</view>
				<!-- 卦象 -->
				<view class="divina" style="width: 155upx;" >
					<image :src="guaArr.length>0?guaArr[0].divinaUrl:''" style="width: 190upx; height:22upx;"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				icon0Url1: "",
				icon0Url2: "",
				icon0Url3: "",
				iconParentUrl: "../../static/icon",
				guaArr: [],
				guaNum: 0,
				btnStart: true,
				guaUrl: "",
				itemArr: [],
				global: {
					lastTime: 0, //此变量用来记录上次摇动的时间
					intervalTime: 500, // 两次摇一摇的间隔事件
					lastX: 10,
					lastY: 10,
					lastZ: 10, //此组变量分别记录对应x、y、z三轴的数值和上次的数值
					shakeSpeed: 1300 //设置阈值
				},
				txtStock: "",
				anishow: false,
				isOver: false,
				number: 1,
			}
		},

		onLoad: function(option) {
			this.txtStock = option.type;
		},

		onShow: function() {
			// 监听摇一摇事件
			var self = this;
			try {
				uni.onAccelerometerChange(function(acceleration) {
					if (self.guaNum >= 6) return;
					if (self.btnStart == false) return;
					let nowTime = new Date().getTime(); //记录当前时间
					if (nowTime - self.global.lastTime > 100) {
						let diffTime = nowTime - self.global.lastTime; //记录时间段
						self.global.lastTime = nowTime; // 记录本次摇动时间，为下次计算摇动时间做准备
						let x = acceleration.x; // 获取x轴数值，x轴为垂直于北轴，向东为正
						let y = acceleration.y; // 获取y轴数值，y轴向正北为正
						let z = acceleration.z; // 获取z轴数值，z轴垂直于地面，向上为正

						// 速度计算
						let speed = (Math.abs(x + y + z - self.global.lastX - self.global.lastY - self.global.lastZ) / diffTime) *10000;
						//如果计算出来的速度超过了阈值，那么就算作用户成功摇一摇
						if (speed > self.global.shakeSpeed) {
							self.startDivination();
						}
					}
					self.global.lastX = x;
					self.global.lastY = y;
					self.global.lastZ = z;
				});
			} catch (err) {
				uni.showModal({
					title: "e",
					content: err.message
				});

				uni.showModal({
					title: "e",
					content: err.stack
				});
			}
		},

		onHide: function() {
			uni.stopAccelerometer();
			uni.showModal({
				title: "sdad",
				content: "关闭"
			})
			// console.log("关闭");
			this.guaNum = 0;
		},
		// 
		methods: {
			//随机值显示铜钱正反
			startDivination: function() {
				this.btnStart = false;
				this.itemArr = [];
				var max = 0;
				for (var i = 0; i < 3; i++) {
					var ran = Math.random() * 1;
					if (ran >= 0.5) {
						max++;
						this.itemArr.push(1);
					} else {
						this.itemArr.push(0);
					}
				}
				// this.traverseItemArr();
				this.guaNum++;
				this.icon0Url1 = this.iconParentUrl + this.itemArr[0] + ".png";
				this.icon0Url2 = this.iconParentUrl + this.itemArr[1] + ".png";
				this.icon0Url3 = this.iconParentUrl + this.itemArr[2] + ".png";
				this.anishow = true;
				var self = this;
				setTimeout(function() {
					if (self.guaNum == 6) {
						self.btnStart = false;
						self.isOver = true
					} else {
						self.btnStart = true;
						self.isOver = false
					}

					self.anishow = !self.anishow;
					self.setGuaURL(max);
				}, 2000);
			},

			//根据随机值显示卦象
			setGuaURL: function(index) {
				var guaData = "";
				if (index > 1) {
					guaData = "1";
					this.guaUrl = "../../static/yang.png"
				} else {
					guaData = "0";
					this.guaUrl = "../../static/yin.png"
				}
				var guaInfo = {
					index: this.guaNum,
					gua_1: this.itemArr[0],
					gua_2: this.itemArr[1],
					gua_3: this.itemArr[2],
					url1: this.iconParentUrl + this.itemArr[0] + ".png",
					url2: this.iconParentUrl + this.itemArr[1] + ".png",
					url3: this.iconParentUrl + this.itemArr[2] + ".png",
					divinaUrl: this.guaUrl,
					guaData: guaData
				};
				this.guaArr.push(guaInfo);
			},

			//卜卦完成
			over: function() {
				var guaData = JSON.stringify(this.guaArr);
				var stock = {
					stockID: this.txtStock,
					guaData: guaData,
				}
				var stockData = JSON.stringify(stock);
				this.guaNum = 0;
				uni.reLaunch({
					url: '/pages/guaRule/GuaRule?type=' + stockData,
				})
			},

			//监听摇一摇
			starshake: function(acceleration) {
				if (this.guaNum == 6 || this.btnStart == false) {
					if (index > 1) {
						if (this.number < 5) {
							uni.showModal({
								title: "guaNum",
								content: "guaNum"
							});
							this.number++;
						}
						return;
					}
				}
				let nowTime = new Date().getTime(); //记录当前时间
				let self = this;

				let diffTime = nowTime - this.global.lastTime; //记录时间段
				this.global.lastTime = nowTime; // 记录本次摇动时间，为下次计算摇动时间做准备
				let x = acceleration.x; // 获取x轴数值，x轴为垂直于北轴，向东为正
				let y = acceleration.y; // 获取y轴数值，y轴向正北为正
				let z = acceleration.z; // 获取z轴数值，z轴垂直于地面，向上为正

				// 速度计算
				let speed = (Math.abs(x + y + z - self.global.lastX - self.global.lastY - self.global.lastZ) / diffTime) * 10000;
				//如果计算出来的速度超过了阈值，那么就算作用户成功摇一摇
				if (speed > this.global.shakeSpeed) {
					this.startDivination();
				}
				this.global.lastX = x;
				this.global.lastY = y;
				this.global.lastZ = z;
			},
		}
	}
</script>

<style>
	.btn-code {
		margin-left: 100upx;
	}

	.divination {
		margin-left: 190upx;
		margin-top: 60upx;
	}

	.divina {
		margin-left: 20upx;
		margin-top: 30upx;
	}

	.gua_number {
		margin-top: 20upx;
		font-size: 35upx;
		width: 120upx;
		color: #FF3333;
	}

	.gua_1 {
		height: 150%;
		width: 150%;
		-webkit-animation: yin1 2s steps(3, end) infinite;
		animation-timing-function: ease-in;
	}

	.gua_2 {
		height: 150%;
		width: 150%;
		-webkit-animation: yang1 2s steps(3, end) infinite;
		animation-timing-function: ease-in;
	}

	@-webkit-keyframes yin1 {
		0% {
			background-image: url("../../static/hua1/y0000.png");
		}

		3% {
			background-image: url("../../static/hua1/y0001.png");
		}

		6% {
			background-image: url("../../static/hua1/y0002.png");
		}

		6% {
			background-image: url("../../static/hua1/y0003.png");
		}

		12% {
			background-image: url("../../static/hua1/y0004.png");
		}

		15% {
			background-image: url("../../static/hua1/y0005.png");
		}

		18% {
			background-image: url("../../static/hua1/y0006.png");
		}

		21% {
			background-image: url("../../static/hua1/y0007.png");
		}

		24% {
			background-image: url("../../static/hua1/y0008.png");
		}

		27% {
			background-image: url("../../static/hua1/y0009.png");
		}

		30% {
			background-image: url("../../static/hua1/y0010.png");
		}

		33% {
			background-image: url("../../static/hua1/y0011.png");
		}

		36% {
			background-image: url("../../static/hua1/y0012.png");
		}

		39% {
			background-image: url("../../static/hua1/y0013.png");
		}

		42% {
			background-image: url("../../static/hua1/y0014.png");
		}

		45% {
			background-image: url("../../static/hua1/y0015.png");
		}

		48% {
			background-image: url("../../static/hua1/y0016.png");
		}

		51% {
			background-image: url("../../static/hua1/y0017.png");
		}

		54% {
			background-image: url("../../static/hua1/y0018.png");
		}

		57% {
			background-image: url("../../static/hua1/y0019.png");
		}

		60% {
			background-image: url("../../static/hua1/y0020.png");
		}

		63% {
			background-image: url("../../static/hua1/y0021.png");
		}

		66% {
			background-image: url("../../static/hua1/y0022.png");
		}

		69% {
			background-image: url("../../static/hua1/y0023.png");
		}

		72% {
			background-image: url("../../static/hua1/y0024.png");
		}

		75% {
			background-image: url("../../static/hua1/y0025.png");
		}

		78% {
			background-image: url("../../static/hua1/y0026.png");
		}

		91% {
			background-image: url("../../static/hua1/y0027.png");
		}

		94% {
			background-image: url("../../static/hua1/y0028.png");
		}

		97% {
			background-image: url("../../static/hua1/y0029.png");
		}

		100% {
			background-image: url("../../static/hua1/y0030.png");
		}
	}

	@-webkit-keyframes yang1 {
		0% {
			background-image: url("../../static/zi1/y0000.png");
		}

		3% {
			background-image: url("../../static/zi1/y0001.png");
		}

		6% {
			background-image: url("../../static/zi1/y0002.png");
		}

		6% {
			background-image: url("../../static/zi1/y0003.png");
		}

		12% {
			background-image: url("../../static/zi1/y0004.png");
		}

		15% {
			background-image: url("../../static/zi1/y0005.png");
		}

		18% {
			background-image: url("../../static/zi1/y0006.png");
		}

		21% {
			background-image: url("../../static/zi1/y0007.png");
		}

		24% {
			background-image: url("../../static/zi1/y0008.png");
		}

		27% {
			background-image: url("../../static/zi1/y0009.png");
		}

		30% {
			background-image: url("../../static/zi1/y0010.png");
		}

		33% {
			background-image: url("../../static/zi1/y0011.png");
		}

		36% {
			background-image: url("../../static/zi1/y0012.png");
		}

		39% {
			background-image: url("../../static/zi1/y0013.png");
		}

		42% {
			background-image: url("../../static/zi1/y0014.png");
		}

		45% {
			background-image: url("../../static/zi1/y0015.png");
		}

		48% {
			background-image: url("../../static/zi1/y0016.png");
		}

		51% {
			background-image: url("../../static/zi1/y0017.png");
		}

		54% {
			background-image: url("../../static/zi1/y0018.png");
		}

		57% {
			background-image: url("../../static/zi1/y0019.png");
		}

		60% {
			background-image: url("../../static/zi1/y0020.png");
		}

		63% {
			background-image: url("../../static/zi1/y0021.png");
		}

		66% {
			background-image: url("../../static/zi1/y0022.png");
		}

		69% {
			background-image: url("../../static/zi1/y0023.png");
		}

		72% {
			background-image: url("../../static/zi1/y0024.png");
		}

		75% {
			background-image: url("../../static/zi1/y0025.png");
		}

		78% {
			background-image: url("../../static/zi1/y0026.png");
		}

		91% {
			background-image: url("../../static/zi1/y0027.png");
		}

		94% {
			background-image: url("../../static/zi1/y0028.png");
		}

		97% {
			background-image: url("../../static/zi1/y0029.png");
		}

		100% {
			background-image: url("../../static/zi1/y0030.png");
		}
	}

	.gua_3 {
		height: 150%;
		width: 150%;
		-webkit-animation: yin2 2s steps(3, end) infinite;
		animation-timing-function: ease-in;
	}

	.gua_4 {
		height: 150%;
		width: 150%;
		-webkit-animation: yang2 2s steps(3, end) infinite;
		animation-timing-function: ease-in;
	}

	@-webkit-keyframes yin2 {
		0% {
			background-image: url("../../static/hua2/y0000.png");
		}

		3% {
			background-image: url("../../static/hua2/y0001.png");
		}

		6% {
			background-image: url("../../static/hua2/y0002.png");
		}

		6% {
			background-image: url("../../static/hua2/y0003.png");
		}

		12% {
			background-image: url("../../static/hua2/y0004.png");
		}

		15% {
			background-image: url("../../static/hua2/y0005.png");
		}

		18% {
			background-image: url("../../static/hua2/y0006.png");
		}

		21% {
			background-image: url("../../static/hua2/y0007.png");
		}

		24% {
			background-image: url("../../static/hua2/y0008.png");
		}

		27% {
			background-image: url("../../static/hua2/y0009.png");
		}

		30% {
			background-image: url("../../static/hua2/y0010.png");
		}

		33% {
			background-image: url("../../static/hua2/y0011.png");
		}

		36% {
			background-image: url("../../static/hua2/y0012.png");
		}

		39% {
			background-image: url("../../static/hua2/y0013.png");
		}

		42% {
			background-image: url("../../static/hua2/y0014.png");
		}

		45% {
			background-image: url("../../static/hua2/y0015.png");
		}

		48% {
			background-image: url("../../static/hua2/y0016.png");
		}

		51% {
			background-image: url("../../static/hua2/y0017.png");
		}

		54% {
			background-image: url("../../static/hua2/y0018.png");
		}

		57% {
			background-image: url("../../static/hua2/y0019.png");
		}

		60% {
			background-image: url("../../static/hua2/y0020.png");
		}

		63% {
			background-image: url("../../static/hua2/y0021.png");
		}

		66% {
			background-image: url("../../static/hua2/y0022.png");
		}

		69% {
			background-image: url("../../static/hua2/y0023.png");
		}

		72% {
			background-image: url("../../static/hua2/y0024.png");
		}

		75% {
			background-image: url("../../static/hua2/y0025.png");
		}

		78% {
			background-image: url("../../static/hua2/y0026.png");
		}

		91% {
			background-image: url("../../static/hua2/y0027.png");
		}

		94% {
			background-image: url("../../static/hua2/y0028.png");
		}

		97% {
			background-image: url("../../static/hua2/y0029.png");
		}

		100% {
			background-image: url("../../static/hua2/y0030.png");
		}
	}

	@-webkit-keyframes yang2 {
		0% {
			background-image: url("../../static/zi2/y0000.png");
		}

		3% {
			background-image: url("../../static/zi2/y0001.png");
		}

		6% {
			background-image: url("../../static/zi2/y0002.png");
		}

		6% {
			background-image: url("../../static/zi2/y0003.png");
		}

		12% {
			background-image: url("../../static/zi2/y0004.png");
		}

		15% {
			background-image: url("../../static/zi2/y0005.png");
		}

		18% {
			background-image: url("../../static/zi2/y0006.png");
		}

		21% {
			background-image: url("../../static/zi2/y0007.png");
		}

		24% {
			background-image: url("../../static/zi2/y0008.png");
		}

		27% {
			background-image: url("../../static/zi2/y0009.png");
		}

		30% {
			background-image: url("../../static/zi2/y0010.png");
		}

		33% {
			background-image: url("../../static/zi2/y0011.png");
		}

		36% {
			background-image: url("../../static/zi2/y0012.png");
		}

		39% {
			background-image: url("../../static/zi2/y0013.png");
		}

		42% {
			background-image: url("../../static/zi2/y0014.png");
		}

		45% {
			background-image: url("../../static/zi2/y0015.png");
		}

		48% {
			background-image: url("../../static/zi2/y0016.png");
		}

		51% {
			background-image: url("../../static/zi2/y0017.png");
		}

		54% {
			background-image: url("../../static/zi2/y0018.png");
		}

		57% {
			background-image: url("../../static/zi2/y0019.png");
		}

		60% {
			background-image: url("../../static/zi2/y0020.png");
		}

		63% {
			background-image: url("../../static/zi2/y0021.png");
		}

		66% {
			background-image: url("../../static/zi2/y0022.png");
		}

		69% {
			background-image: url("../../static/zi2/y0023.png");
		}

		72% {
			background-image: url("../../static/zi2/y0024.png");
		}

		75% {
			background-image: url("../../static/zi2/y0025.png");
		}

		78% {
			background-image: url("../../static/zi2/y0026.png");
		}

		91% {
			background-image: url("../../static/zi2/y0027.png");
		}

		94% {
			background-image: url("../../static/zi2/y0028.png");
		}

		97% {
			background-image: url("../../static/zi2/y0029.png");
		}

		100% {
			background-image: url("../../static/zi2/y0030.png");
		}
	}

	.gua_5 {
		height: 150%;
		width: 150%;
		-webkit-animation: yin3 2s steps(3, end) infinite;
		animation-timing-function: ease-in;
	}

	.gua_6 {
		height: 150%;
		width: 150%;
		-webkit-animation: yang3 2s steps(3, end) infinite;
		animation-timing-function: ease-in;
	}

	@-webkit-keyframes yin3 {
		0% {
			background-image: url("../../static/hua3/y0000.png");
		}

		3% {
			background-image: url("../../static/hua3/y0001.png");
		}

		6% {
			background-image: url("../../static/hua3/y0002.png");
		}

		6% {
			background-image: url("../../static/hua3/y0003.png");
		}

		12% {
			background-image: url("../../static/hua3/y0004.png");
		}

		15% {
			background-image: url("../../static/hua3/y0005.png");
		}

		18% {
			background-image: url("../../static/hua3/y0006.png");
		}

		21% {
			background-image: url("../../static/hua3/y0007.png");
		}

		24% {
			background-image: url("../../static/hua3/y0008.png");
		}

		27% {
			background-image: url("../../static/hua3/y0009.png");
		}

		30% {
			background-image: url("../../static/hua3/y0010.png");
		}

		33% {
			background-image: url("../../static/hua3/y0011.png");
		}

		36% {
			background-image: url("../../static/hua3/y0012.png");
		}

		39% {
			background-image: url("../../static/hua3/y0013.png");
		}

		42% {
			background-image: url("../../static/hua3/y0014.png");
		}

		45% {
			background-image: url("../../static/hua3/y0015.png");
		}

		48% {
			background-image: url("../../static/hua3/y0016.png");
		}

		51% {
			background-image: url("../../static/hua3/y0017.png");
		}

		54% {
			background-image: url("../../static/hua3/y0018.png");
		}

		57% {
			background-image: url("../../static/hua3/y0019.png");
		}

		60% {
			background-image: url("../../static/hua3/y0020.png");
		}

		63% {
			background-image: url("../../static/hua3/y0021.png");
		}

		66% {
			background-image: url("../../static/hua3/y0022.png");
		}

		69% {
			background-image: url("../../static/hua3/y0023.png");
		}

		72% {
			background-image: url("../../static/hua3/y0024.png");
		}

		75% {
			background-image: url("../../static/hua3/y0025.png");
		}

		78% {
			background-image: url("../../static/hua3/y0026.png");
		}

		91% {
			background-image: url("../../static/hua3/y0027.png");
		}

		94% {
			background-image: url("../../static/hua3/y0028.png");
		}

		97% {
			background-image: url("../../static/hua3/y0029.png");
		}

		100% {
			background-image: url("../../static/hua3/y0030.png");
		}
	}

	@-webkit-keyframes yang3 {
		0% {
			background-image: url("../../static/zi3/y0000.png");
		}

		3% {
			background-image: url("../../static/zi3/y0001.png");
		}

		6% {
			background-image: url("../../static/zi3/y0002.png");
		}

		6% {
			background-image: url("../../static/zi3/y0003.png");
		}

		12% {
			background-image: url("../../static/zi3/y0004.png");
		}

		15% {
			background-image: url("../../static/zi3/y0005.png");
		}

		18% {
			background-image: url("../../static/zi3/y0006.png");
		}

		21% {
			background-image: url("../../static/zi3/y0007.png");
		}

		24% {
			background-image: url("../../static/zi3/y0008.png");
		}

		27% {
			background-image: url("../../static/zi3/y0009.png");
		}

		30% {
			background-image: url("../../static/zi3/y0010.png");
		}

		33% {
			background-image: url("../../static/zi3/y0011.png");
		}

		36% {
			background-image: url("../../static/zi3/y0012.png");
		}

		39% {
			background-image: url("../../static/zi3/y0013.png");
		}

		42% {
			background-image: url("../../static/zi3/y0014.png");
		}

		45% {
			background-image: url("../../static/zi3/y0015.png");
		}

		48% {
			background-image: url("../../static/zi3/y0016.png");
		}

		51% {
			background-image: url("../../static/zi3/y0017.png");
		}

		54% {
			background-image: url("../../static/zi3/y0018.png");
		}

		57% {
			background-image: url("../../static/zi3/y0019.png");
		}

		60% {
			background-image: url("../../static/zi3/y0020.png");
		}

		63% {
			background-image: url("../../static/zi3/y0021.png");
		}

		66% {
			background-image: url("../../static/zi3/y0022.png");
		}

		69% {
			background-image: url("../../static/zi3/y0023.png");
		}

		72% {
			background-image: url("../../static/zi3/y0024.png");
		}

		75% {
			background-image: url("../../static/zi3/y0025.png");
		}

		78% {
			background-image: url("../../static/zi3/y0026.png");
		}

		91% {
			background-image: url("../../static/zi3/y0027.png");
		}

		94% {
			background-image: url("../../static/zi3/y0028.png");
		}

		97% {
			background-image: url("../../static/zi3/y0029.png");
		}

		100% {
			background-image: url("../../static/zi3/y0030.png");
		}
	}
</style>
