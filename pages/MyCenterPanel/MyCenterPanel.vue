<template>
	<view>
		<view class="header">
			<view class="bg">
				<view class="box">
					<view class="box-hd">
						<view class="avator">
							<img :src="data!=null&&data.head!=null?data.head:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560319891615&di=9bca8ab70bf62b97a1101cfe0b49da53&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F20%2F20180920224946_stpen.thumb.224_0.jpeg'">
						</view>
						<view class="phone-number">
							<text>{{data.nickname!=""?data.nickname.substring(0,7):data.id}}</text>
						</view>
					</view>
					<view class="box-bd">
						<view class="item" @click="showAlert">
							<view class="icon"><img src="../../static/user/message.png"></view>
							<view class="text">我的通知</view>
						</view>
						<view class="item" @click="showAlert">
							<view class="icon"><img src="../../static/user/favorite.png"></view>
							<view class="text">我的收藏</view>
						</view>
						<view class="item" @click="showAlert">
							<view class="icon"><img src="../../static/user/service.png"></view>
							<view class="text">我的客服</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="list-content">
			<view class="list" @click="toBirthdayInfo">
				<view class="li noborder" >
					<view class="icon"><image src="../../static/user/card.png"></image></view>
					<view class="text">生辰八字</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
			</view>
			<view class="list">
				<view class="li " @click="toRecord">
					<view class="icon"><image src="../../static/user/help.png"></image></view>
					<view class="text">预测记录</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
				<view class="li "  @click="clearCache">
					<view class="icon"><image src="../../static/user/about.png"></image></view>
					<view class="text">清理缓存</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
				<view class="li "  @click="showAlert">
					<view class="icon"><image src="../../static/user/opinion.png"></image></view>
					<view class="text">意见反馈</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
				<view class="li " @click="showAlert">
					<view class="icon"><image src="../../static/user/skin.png"></image></view>
					<view class="text">主题切换</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
			</view>
			<view class="list" @click="showAlert">
				<view class="li noborder" >
					<view class="icon"><image src="../../static/user/set.png"></image></view>
					<view class="text">系统设置</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import httpRequest from '../../common/common.js'
	export default {
		data() {
			return {
				data:null,
				name:'',
			};
		},
		onLoad() {
			// this.name=this.$user.getUserID();
			debugger
			this.data=this.$user.getUserInfo();
			// this.version=plus.runtime.version;
		},
		methods: {
			changeSkin:function(){
				uni.reLaunch({
					url:"../skin-change/skin-change"
				});
			},
			
			toRecord:function(){
				uni.navigateTo({
					url:"../forecastRecord/forecastRecord"
				})
			},
			
			clearCache:function(){
				uni.showModal({
					content:"确定清理本地缓存吗？",
					success:function(res){
						if (res.confirm) {
							 uni.removeStorageSync('stockdata');
							 uni.removeStorageSync('record');
							 uni.removeStorageSync('hallstock');
							uni.showModal({
								content:"清理完成！"
							})
						}else{
							uni.showModal({
								content:"已取消清理"
							})
						}
					}
				})
			},
			
			toBirthdayInfo:function(){
				uni.navigateTo({
					url:"../birthdayInfo/birthdayInfo"
				})
			},
			
			showAlert:function(){
				try{
					uni.showModal({
						title:"功能暂未开放,敬请期待。"
					});
				}catch(e){
					uni.showModal({
						title:e.message
					});
				}
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color:#f1f1f1;
	font-size: 30upx;
}
.header{
	background: #fff;
	height: 290upx;
	padding-bottom: 110upx;
	.bg{
		width: 100%;
		height:200upx;
		padding-top:100upx;
		background-color:#4191ea;
	}
}
.box{
	width: 650upx;
	height: 280upx;
	border-radius: 20upx;
	margin: 0 auto;
	background: #fff;
	box-shadow: 0 5upx 20upx 0upx rgba(0, 0, 150, .2); 
	.box-hd{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		.avator{
			width: 160upx;
			height: 160upx;
			background: #fff;
			border: 5upx solid #fff;
			border-radius: 50%;
			margin-top: -80upx;
			overflow: hidden;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.phone-number{
			width: 100%;
			text-align: center;
		}
	}
	.box-bd{
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: center;
		.item{
			flex: 1 1 auto;
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: center;
			border-right: 1px solid #f1f1f1;
			margin: 15upx 0;
			&:last-child{
				border: none;
			}
			.icon{
				width: 60upx;
				height: 60upx;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.text{
				width: 100%;
				text-align: center;
				margin-top: 10upx;
			}
		}
	}
}
.list-content{
	background: #fff;
}
.list{
	width:100%;
	border-bottom:15upx solid  #f1f1f1;
	background: #fff;
	&:last-child{
		border: none;
	}
	.li{
		width:92%;
		height:100upx;
		padding:0 4%;
		border-bottom:1px solid rgb(243,243,243);
		display:flex;
		align-items:center;
	&.noborder{
		border-bottom:0
		}
		.icon{
			flex-shrink:0;
			width:50upx;
			height:50upx;
			image{
				width:50upx;
				height:50upx;
			}
		}
		.text{
			padding-left:20upx;
			width:100%;
			color:#666;
		}
		.to{
			flex-shrink:0;
			width:40upx;
			height:40upx;
		}
	}
}
</style>
