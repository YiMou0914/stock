<template>
	<view>
			<scroll-view scroll-y="true" style="width: 100%; height: 1230upx; ">
				<block v-for="(item,index) in dataArr" :key="index">
					<view class="list-content">
						<view class="list">
							<view :class="'indexItem-' + item.name" :id="'indexes-' + item.name" :data-index="item.name">
								<view class="padding" style="font-size: 35upx;margin-left: 10upx; margin-top: 0upx;">{{"时间："+item.time}}</view>
								<view class="padding" style="font-size: 35upx;margin-left: 10upx; margin-top: 0upx;">{{"股票名称："+item.stockname}}</view>
								<view class="padding" style="font-size: 35upx;margin-left: 10upx; margin-top: 0upx;">{{"卦象："+item.guastate}}</view>
								<view class="padding" style="font-size: 35upx;margin-left: 10upx; margin-top: 0upx;">{{"卦象解析："+item.content}}</view>
							</view>
						</view>
					</view>
				</block>
				<button style="width: 100%; height: 90upx; font-size: 35upx; margin-top: 10upx;"  @click="deleteDataArr" v-show="isShow">清空记录</button>
			</scroll-view>
	</view>
</template>

<script>
	import {httpRequest} from '../../common/common.js'
	export default {
		data() {
			return {
				dataArr:[],
				isShow:false,
			}
		},
		
		onLoad:function(){
			var url="record/findrecord?userid="+this.$user.getUserID();
			httpRequest(url,this.getRecord);
			// this.dataArr=[];
			// this.dataArr=uni.getStorageSync("record");
			// if(this.dataArr.length>0)this.isShow=true;
			// else this.isShow=false;
			
		},
		methods: {
			deleteDataArr:function(){
				var self=this;
				uni.showModal({
					title:"预测记录",
					content:"是否确认清空预测记录？",
					success: function (res) {
						if (res.confirm) {
							var url="record/deleltRecord?userid="+self.$user.getUserID();
							httpRequest(url,self.deleteCallback)
						} else if (res.cancel) {
								console.log('用户点击取消');
						}
					}
				})
			},
			
			deleteCallback:function(type,data){
				if(type=="fail")return;
				
				if(data.data.code==200){
					this.dataArr=[];
					uni.showModal({
						content:data.data.success
					})
				}
			},
			
			getRecord:function(type,data){
				if(data.statusCode==200&&data.data.length>0){
					this.dataArr=data.data;
					this.isShow=true;
				}else{
					this.dataArr=[];
					this.isShow=false;
				} 
			},
		}
	}
</script>

<style>
.list-content{
	background: #fff;
}
.list{
	width:100%;
	border-bottom:15upx solid  #f1f1f1;
	background: #fff;
}
</style>
