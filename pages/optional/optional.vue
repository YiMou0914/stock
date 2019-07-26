<template>
	<view>
		<view class="uni-flex uni-column">
			<view class="uni-flex uni-row" style="height: 140upx;line-height: 90upx;margin-left:20upx;margin-top:30upx">
				<text class="gua_number">第六次</text>
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_6_1" style="width: 120upx; height: 120upx;" @click="setGuaInfo6(1)"></image>
				</view>
				
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_6_2" style="width: 120upx; height: 120upx;" @click="setGuaInfo6(2)"></image>
				</view>
				
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_6_3" style="width: 120upx ;height: 120upx;" @click="setGuaInfo6(3)"></image>
				</view>
				<!-- 卦象 -->
				<view style="width: 155upx;" class="divina">
					<image :src="guaxiang6" style="width: 140upx; height:22upx;"></image>
				</view>
			</view>
			
			<view class="uni-flex uni-row" style="height: 140upx;line-height: 90upx;margin-left:20upx;margin-top:30upx">
				<text class="gua_number">第五爻</text>
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_5_1" style="width: 120upx; height: 120upx;" @click="setGuaInfo5(1)"></image>
				</view>
				
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_5_2" style="width: 120upx; height: 120upx;" @click="setGuaInfo5(2)"></image>
				</view>
				
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_5_3" style="width: 120upx ;height: 120upx;" @click="setGuaInfo5(3)"></image>
				</view>
				<!-- 卦象 -->
				<view style="width: 155upx;" class="divina">
					<image :src="guaxiang5" style="width: 140upx; height:22upx;"></image>
				</view>
			</view>
			
			<view class="uni-flex uni-row" style="height: 140upx;line-height: 90upx;margin-left:20upx;margin-top:30upx">
				<text class="gua_number">第四爻</text>
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_4_1" style="width: 120upx; height: 120upx;" @click="setGuaInfo4(1)"></image>
				</view>
				
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_4_2" style="width: 120upx; height: 120upx;" @click="setGuaInfo4(2)"></image>
				</view>
				
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_4_3" style="width: 120upx ;height: 120upx;" @click="setGuaInfo4(3)"></image>
				</view>
				<!-- 卦象 -->
				<view style="width: 155upx;" class="divina">
					<image :src="guaxiang4" style="width: 140upx; height:22upx;"></image>
				</view>
			</view>
			
			<view class="uni-flex uni-row" style="height: 140upx;line-height: 90upx;margin-left:20upx;margin-top:30upx">
				<text class="gua_number">第三爻</text>
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_3_1" style="width: 120upx; height: 120upx;" @click="setGuaInfo3(1)"></image>
				</view>
				
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_3_2" style="width: 120upx; height: 120upx;" @click="setGuaInfo3(2)"></image>
				</view>
				
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_3_3" style="width: 120upx ;height: 120upx;" @click="setGuaInfo3(3)"></image>
				</view>
				<!-- 卦象 -->
				<view style="width: 155upx;" class="divina">
					<image :src="guaxiang3" style="width: 140upx; height:22upx;"></image>
				</view>
			</view>
			
			<view class="uni-flex uni-row" style="height: 140upx;line-height: 90upx;margin-left:20upx;margin-top:30upx">
				<text class="gua_number">第二爻</text>
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_2_1" style="width: 120upx; height: 120upx;" @click="setGuaInfo2(1)"></image>
				</view>
				
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_2_2" style="width: 120upx; height: 120upx;" @click="setGuaInfo2(2)"></image>
				</view>
				
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_2_3" style="width: 120upx ;height: 120upx;" @click="setGuaInfo2(3)"></image>
				</view>
				<!-- 卦象 -->
				<view style="width: 155upx;" class="divina">
					<image :src="guaxiang2" style="width: 140upx; height:22upx;"></image>
				</view>
			</view>
			
			<view class="uni-flex uni-row" style="height: 140upx;line-height: 90upx;margin-left:20upx;margin-top:30upx">
				<text class="gua_number">第一爻</text>
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_1_1" style="width: 120upx; height: 120upx;" @click="setGuaInfo1(1)"></image>
				</view>
				
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_1_2" style="width: 120upx; height: 120upx;" @click="setGuaInfo1(2)"></image>
				</view>
				
				<view style="width: 135upx; height: 135upx;margin-left:5upx;">
					<image :src="gua_1_3" style="width: 120upx ;height: 120upx;" @click="setGuaInfo1(3)"></image>
				</view>
				<!-- 卦象 -->
				<view style="width: 155upx;" class="divina">
					<image :src="guaxiang1" style="width: 140upx; height:22upx;"></image>
				</view>
			</view>
		</view>
		
		<view style="margin-top: 30upx;">
			<button type="primary" @click="setGuaOver">完成</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gua_6_1:"../../static/icon1.png",
				gua_6_2:"../../static/icon1.png",
				gua_6_3:"../../static/icon1.png",
				gua_5_1:"../../static/icon1.png",
				gua_5_2:"../../static/icon1.png",
				gua_5_3:"../../static/icon1.png",
				gua_4_1:"../../static/icon1.png",
				gua_4_2:"../../static/icon1.png",
				gua_4_3:"../../static/icon1.png",
				gua_3_1:"../../static/icon1.png",
				gua_3_2:"../../static/icon1.png",
				gua_3_3:"../../static/icon1.png",
				gua_2_1:"../../static/icon1.png",
				gua_2_2:"../../static/icon1.png",
				gua_2_3:"../../static/icon1.png",
				gua_1_1:"../../static/icon1.png",
				gua_1_2:"../../static/icon1.png",
				gua_1_3:"../../static/icon1.png",
				guaxiang1:"../../static/yang.png",
				guaxiang2:"../../static/yang.png",
				guaxiang3:"../../static/yang.png",
				guaxiang4:"../../static/yang.png",
				guaxiang5:"../../static/yang.png",
				guaxiang6:"../../static/yang.png",
				guaArr:[],
				stockID:"",
			}
		},
		
		onLoad(option) {
			this.stockID=option.type;
			this.guaArr=[];
			for (let i = 6; i > 0; i--) {
				var gua={
						index: i,
						gua_1:1,
						gua_2: 1,
						gua_3: 1,
						divinaUrl: this.guaxiang1,
						guaData: "1"
					};
				this.guaArr.push(gua);
			}
		},
		methods: {
			setGuaInfo6:function(index){
				if(index==1){
					if(this.gua_6_1=="../../static/icon1.png")this.gua_6_1="../../static/icon0.png";
					else this.gua_6_1="../../static/icon1.png";
				}else if(index==2){
					if(this.gua_6_2=="../../static/icon1.png")this.gua_6_2="../../static/icon0.png";
					else this.gua_6_2="../../static/icon1.png";
				}else if(index==3){
					if(this.gua_6_3=="../../static/icon1.png")this.gua_6_3="../../static/icon0.png";
					else this.gua_6_3="../../static/icon1.png";
				}
				
				var gua="";
				if(this.gua_6_1=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				if(this.gua_6_2=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				if(this.gua_6_3=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				var num=0;
				for (let i = 0; i < gua.length; i++) {
					if(gua[i]==1){
						num++;
					}
				}
				
				var guaData="";
				if(num>1){
					guaData = "1";
					this.guaxiang6="../../static/yang.png"
				}else{
					guaData="0";
					this.guaxiang6="../../static/yin.png"
				}
				
				var guaInfo = {
					index: 6,
					gua_1: gua[0],
					gua_2: gua[1],
					gua_3: gua[2],
					divinaUrl: this.guaxiang6,
					guaData: guaData
				};
				this.guaArr[0]=guaInfo;
			},
			
			setGuaInfo5:function(index){
				if(index==1){
					if(this.gua_5_1=="../../static/icon1.png")this.gua_5_1="../../static/icon0.png";
					else this.gua_5_1="../../static/icon1.png";
				}else if(index==2){
					if(this.gua_5_2=="../../static/icon1.png")this.gua_5_2="../../static/icon0.png";
					else this.gua_5_2="../../static/icon1.png";
				}else if(index==3){
					if(this.gua_5_3=="../../static/icon1.png")this.gua_5_3="../../static/icon0.png";
					else this.gua_5_3="../../static/icon1.png";
				}
				
				var gua="";
				if(this.gua_5_1=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				if(this.gua_5_2=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				if(this.gua_5_3=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				var num=0;
				for (let i = 0; i < gua.length; i++) {
					if(gua[i]==1){
						num++;
					}
				}
				
				var guaData="";
				if(num>1){
					guaData="1";
					this.guaxiang5="../../static/yang.png"
				}else{
					guaData="0";
					this.guaxiang5="../../static/yin.png"
				}
				
				var guaInfo = {
					index: 5,
					gua_1: gua[0],
					gua_2: gua[1],
					gua_3: gua[2],
					divinaUrl: this.guaxiang5,
					guaData: guaData
				};
				this.guaArr[1]=guaInfo;
			},
			
			setGuaInfo4:function(index){
				if(index==1){
					if(this.gua_4_1=="../../static/icon1.png")this.gua_4_1="../../static/icon0.png";
					else this.gua_4_1="../../static/icon1.png";
				}else if(index==2){
					if(this.gua_4_2=="../../static/icon1.png")this.gua_4_2="../../static/icon0.png";
					else this.gua_4_2="../../static/icon1.png";
				}else if(index==3){
					if(this.gua_4_3=="../../static/icon1.png")this.gua_4_3="../../static/icon0.png";
					else this.gua_4_3="../../static/icon1.png";
				}
				
				var gua="";
				if(this.gua_4_1=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				if(this.gua_4_2=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				if(this.gua_4_3=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				var num=0;
				for (let i = 0; i < gua.length; i++) {
					if(gua[i]==1){
						num++;
					}
				}
				
				var guaData="";
				if(num>1){
					guaData="1";
					this.guaxiang4="../../static/yang.png"
				}else{
					guaData="0";
					this.guaxiang4="../../static/yin.png"
				}
				
				var guaInfo = {
					index: 4,
					gua_1: gua[0],
					gua_2: gua[1],
					gua_3: gua[2],
					divinaUrl: this.guaxiang5,
					guaData: guaData
				};
				this.guaArr[2]=guaInfo;
			},
			
			setGuaInfo3:function(index){
				if(index==1){
					if(this.gua_3_1=="../../static/icon1.png")this.gua_3_1="../../static/icon0.png";
					else this.gua_3_1="../../static/icon1.png";
				}else if(index==2){
					if(this.gua_3_2=="../../static/icon1.png")this.gua_3_2="../../static/icon0.png";
					else this.gua_3_2="../../static/icon1.png";
				}else if(index==3){
					if(this.gua_3_3=="../../static/icon1.png")this.gua_3_3="../../static/icon0.png";
					else this.gua_3_3="../../static/icon1.png";
				}
				
				var gua="";
				if(this.gua_3_1=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				if(this.gua_3_2=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				if(this.gua_3_3=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				var num=0;
				for (let i = 0; i < gua.length; i++) {
					if(gua[i]==1){
						num++;
					}
				}
				
				var guaData="";
				if(num>1){
					guaData="1";
					this.guaxiang3="../../static/yang.png"
				}else{
					guaData="0";
					this.guaxiang3="../../static/yin.png"
				}
				
				var guaInfo = {
					index: 3,
					gua_1: gua[0],
					gua_2: gua[1],
					gua_3: gua[2],
					divinaUrl: this.guaxiang3,
					guaData: guaData
				};
				this.guaArr[3]=guaInfo;
			},
			
			setGuaInfo2:function(index){
				if(index==1){
					if(this.gua_2_1=="../../static/icon1.png")this.gua_2_1="../../static/icon0.png";
					else this.gua_2_1="../../static/icon1.png";
				}else if(index==2){
					if(this.gua_2_2=="../../static/icon1.png")this.gua_2_2="../../static/icon0.png";
					else this.gua_2_2="../../static/icon1.png";
				}else if(index==3){
					if(this.gua_2_3=="../../static/icon1.png")this.gua_2_3="../../static/icon0.png";
					else this.gua_2_3="../../static/icon1.png";
				}
				
				var gua="";
				if(this.gua_2_1=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				if(this.gua_2_2=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				if(this.gua_2_3=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				var num=0;
				for (let i = 0; i < gua.length; i++) {
					if(gua[i]==1){
						num++;
					}
				}
				
				var guaData="";
				if(num>1){
					guaData="1";
					this.guaxiang2="../../static/yang.png"
				}else{
					guaData="0";
					this.guaxiang2="../../static/yin.png"
				}
				
				var guaInfo = {
					index: 2,
					gua_1: gua[0],
					gua_2: gua[1],
					gua_3: gua[2],
					divinaUrl: this.guaxiang2,
					guaData: guaData
				};
				this.guaArr[4]=guaInfo
			},
			
			setGuaInfo1:function(index){
				if(index==1){
					if(this.gua_1_1=="../../static/icon1.png")this.gua_1_1="../../static/icon0.png";
					else this.gua_1_1="../../static/icon1.png";
				}else if(index==2){
					if(this.gua_1_2=="../../static/icon1.png")this.gua_1_2="../../static/icon0.png";
					else this.gua_1_2="../../static/icon1.png";
				}else if(index==3){
					if(this.gua_1_3=="../../static/icon1.png")this.gua_1_3="../../static/icon0.png";
					else this.gua_1_3="../../static/icon1.png";
				}
				
				var gua="";
				if(this.gua_1_1=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				if(this.gua_1_2=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				if(this.gua_1_3=="../../static/icon1.png")gua+="1";
				else gua+="0";
				
				var num=0;
				for (let i = 0; i < gua.length; i++) {
					if(gua[i]==1){
						num++;
					}
				}
				
				var guaData="";
				if(num>1){
					guaData="1";
					this.guaxiang1="../../static/yang.png"
				}else{
					guaData="0";
					this.guaxiang1="../../static/yin.png"
				}
				
				var guaInfo = {
					index: 1,
					gua_1: gua[0],
					gua_2: gua[1],
					gua_3: gua[2],
					divinaUrl: this.guaxiang1,
					guaData: guaData
				};
				this.guaArr[5]=guaInfo;
			},
			
			setGuaOver:function(){
				var gua=[];
				for (let i = this.guaArr.length-1; i >=0; i--) {
					gua.push(this.guaArr[i]);
				}
				var guaData = JSON.stringify(gua);
				var stock = {
					stockID: this.stockID,
					guaData: guaData,
				}
				var stockData = JSON.stringify(stock);
				uni.reLaunch({
					url: '/pages/guaRule/GuaRule?type=' + stockData,
				})
			},
		}
	}
</script>

<style>
.divina {
		margin-left: 20upx;
		margin-top: 30upx;
		width: 280upx;
	}

	.gua_number {
		margin-top: 20upx;
		font-size: 35upx;
		width: 120upx;
		color: #FF3333;
	}
</style>
