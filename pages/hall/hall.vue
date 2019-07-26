<template>
	<view>
		<swiper class="screen-swiper" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="1000">
			<swiper-item v-for="(item, index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type == 'image'" style="width: 100%;height: 100%;"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
			</swiper-item>
		</swiper>

		<view class="myStockList">
			<view class="uni-flex uni-column">
				<view class="uni-flex uni-row" style="height: 90upx;text-align: left; line-height: 80upx; font-size: 35upx;">
					<text style="margin-left: 50upx;">我的自选</text>
					<text style="margin-left: 100upx;">现价</text>
					<text style="margin-left: 100upx;">涨跌</text>
					<text style="margin-left: 80upx;">涨幅</text>
					<!-- <text style="margin-left: 125upx;">操作</text> -->
				</view>
				<image src="../../static/yang.png" style="width: 100%; height: 4upx;margin-top: -15upx;">-----------white----------</image>

				<scroll-view :scroll-y="modalName == null" class="page" :class="modalName != null ? 'show' : ''">
					<view class="cu-list menu-avatar">
						<view
							class="cu-item"
							:class="modalName == 'move-box-' + index ? 'move-cur' : ''"
							v-for="(item, index) in dataArr"
							:key="index"
							@touchstart="touchStart"
							@touchmove="touchMove"
							@touchend="touchEnd"
							:data-target="'move-box-' + index"
						>
							<view class="content" @click="joinStockDetail(item.code)">
								<view class="text-grey" style="font-size: 35upx;">{{ item.stockname }}</view>
								<view class="text-gray text-sm" style="margin-top: -20upx;">
									<text class="cuIcon-infofill text-red  margin-right-xs"></text>
									{{ item.code }}
								</view>
							</view>
							<view class="textInfo1" :style="item.xianjia < item.jinkai ? 'color:green;' : 'color:red;'" @click="joinStockDetail(item.code)">{{ item.xianjia }}</view>
							<view class="textInfo2" :style="item.xianjia < item.jinkai ? 'color:green;' : 'color:red;'" @click="joinStockDetail(item.code)">{{ item.zhangdie }}</view>
							<view class="textInfo3" :style="item.xianjia < item.jinkai ? 'color:green;' : 'color:red;'" @click="joinStockDetail(item.code)">{{ item.zhangfu + '%' }}</view>

							<view class="move">
								<view class="bg-grey" style="background-color: #BBBBBB;" @click="zhiDin(item.code)"><text style="margin-top: 35upx; font-size: 30upx;">置顶</text></view>
								<view class="bg-red" style="background-color: #DD524D;" @click="deleteArr(item.id)"><text style="margin-top: 35upx;font-size: 30upx;">删除</text></view>
							</view>
						</view>
					</view>
					<button style="width: 100%; height: 100upx; background-color: #FFFFFF;" @click="addStock">+添加股票</button>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
import { stockDetail } from '../request.js';
import { httpRequest } from '../../common/common.js';
export default {
	data() {
		return {
			cardCur: 0,
			dataArr: [],
			swiperList: [
				{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				},
				{
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
				},
				{
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				},
				{
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				},
				{
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				},
				{
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				},
				{
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}
			],
			dotStyle: false,
			towerStart: 0,
			direction: '',
			listTouchDirection: null,
			listTouchStart: 0,
			modalName: false
		};
	},

	onHide: function() {
		console.log('hall-------heid');
	},

	onShow: function() {
		this.refreshStockList();
	},
	methods: {
		joinStockDetail: function(code) {
			stockDetail(code, this.navigateStockDeta);
		},
		
		refreshStockList:function(){
			var url = 'collect/findstock?userid=' + this.$user.getUserID() + '&type=1';
			httpRequest(url, this.findCallback);
		},

		findCallback: function(type, data) {
			if (type == 'fail') return;
			if (data.data.collect.length > 0) {
				this.dataArr = data.data.collect;
			} else {
				this.dataArr = [];
			}
		},

		navigateStockDeta: function(data) {
			var stock = data.substring(12, data.length);
			uni.navigateTo({
				url: '/pages/stockDetail/StockDetail?type=' + stock
			});
		},

		addStock: function() {
			uni.reLaunch({
				url: '/pages/find/find'
			});
		},

		deleteArr: function(id) {
			//删除数组中的元素
			var url = 'collect/deleteCollect?userid=' + this.$user.getUserID() + '&id=' + id;
			httpRequest(url, this.deleteCallback);
		},

		deleteCallback: function(type, data) {
			if (type == 'fail') return;

			if (data.data.code == 200) {
				this.refreshStockList();
				uni.showModal({
					content: data.data.state
				});
			}
		},

		zhiDin: function(code) {
			var url = 'collect/findstock?userid=' + this.$user.getUserID() + '&type=3' + '&code=' + code;
			httpRequest(url, this.stickCallback);
		},

		stickCallback: function(type, data) {
			if (type == 'fail') return;

			if (data.data.code == 200) {
				this.dataArr = data.data.collect;
			}
		},

		touchStart: function(e) {
			this.listTouchStart = e.touches[0].pageX;
		},

		touchMove: function(e) {
			this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left';
		},

		touchEnd: function(e) {
			if (this.listTouchDirection == 'left') {
				this.modalName = e.currentTarget.dataset.target;
			} else {
				this.modalName = null;
			}
			this.listTouchDirection = null;
		}
	}
};
</script>

<style>
.paddingItem {
	font-size: 35upx;
	margin-left: 50upx;
	margin-top: 25upx;
	color: red;
}

.list {
	border-bottom: 6upx solid #f1f1f1;
}

.cu-list + .cu-list {
	margin-top: 30upx;
}

.cu-list > .cu-item {
	transition: all 0.6s ease-in-out 0s;
	transform: translateX(0upx);
}
.cu-list > .cu-item .move {
	position: absolute;
	right: 0;
	display: flex;
	width: 260upx;
	height: 100%;
	transform: translateX(100%);
}

.cu-list > .cu-item .move view {
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: left;
}

.textInfo1 {
	margin-right: 90upx;
	font-size: 35upx;
}

.textInfo2 {
	margin-right: 80upx;
	font-size: 35upx;
}

.textInfo3 {
	margin-right: 1upx;
	font-size: 35upx;
}

.cu-list.menu-avatar > .cu-item {
	position: relative;
	display: flex;
	padding-right: 50upx;
	height: 120upx;
	background-color: #cce6ff;
	border-bottom: 10upx solid #e7ebed;
	justify-content: flex-end;
	align-items: center;
}

.cu-list.menu-avatar > .cu-item .content {
	position: absolute;
	left: 40upx;
	width: 180upx;
	line-height: 1.6em;
}

.cu-list.menu-avatar > .cu-item .action {
	width: 100upx;
	text-align: left;
}

.cu-list.menu-avatar > .cu-item .action view + view {
	margin-left: 10upx;
}

.cu-list > .cu-item.move-cur {
	transform: translateX(-260upx);
}
</style>
