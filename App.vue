<script>
	// import httpRequest from 'common/common.js'
export default {
	onLaunch: function() {
			uni.request({
				url: 'http://localhost:8081/test.txt',
				// data: {
				// 	appid: plus.runtime.appid,
				// 	version: plus.runtime.version,
				// 	imei: plus.device.imei
				// },
				success: res => {
					console.log('success', res);
					uni.showModal({
						content:res.statusCode
					})
					if (res.statusCode == 200 && res.data.isUpdate) {
						let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
						// 提醒用户更新
						uni.showModal({
							title: '更新提示',
							content: res.data.note ? res.data.note : '是否选择更新',
							success: showResult => {
								if (showResult.confirm) {
									plus.runtime.openURL(openUrl);
								}
							}
						});
					}
				},
				fail:function(res){
					uni.showModal({
						title:"request检测失败",
						content:red.message
					})
				},
				complete:function(res){
					uni.showModal({
						title:"complete",
						content:res
					})
				}
		});
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
@import './common/uni.css';
// @import './colorui/main.css';
/*每个页面公共css */
button::after {
	border: none;
}
.input-box {
	padding: 50upx;
	font-size: 30upx;
	.input-item {
		display: flex;
		background: white;
		border-bottom: 1upx solid #eeeeee;
		line-height: 100upx;
		height: 100upx;
		.input-label {
			width: 150upx;
		}
		.input-body {
			position: relative;
			height: 100upx;
			width: calc(100% - 150upx);
			.input {
				line-height: 100upx;
				height: 100upx;
				position: relative;
				font-size: 35upx;
			}
			.eye {
				position: absolute;
				height: 50upx;
				width: 50upx;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
			}
			.btn-code {
				position: absolute;
				right: 0upx;
				top: 50%;
				transform: translateY(-50%);
				background: none;
				color: #205592;
				width: 160upx;
				font-size: 24upx;
				box-sizing: border-box;
				text-align: right;
				padding: 0;
				height: 100upx;
				line-height: 100upx;
			}
		}
	}
	.select {
		padding-top: 40upx;
		display: flex;
		justify-content: space-between;
		color: #003b67;
	}
}
.button {
	margin: 0 30upx;
	background: #08b6f2;
	border-radius: 50upx;
	line-height: 80upx;
	height: 80upx;
	color: white;
	font-size: 32upx;
}

.image-wrapper {
	font-size: 0;
	background: #f3f3f3;
	border-radius: 4px;

	image {
		width: 50%;
		height: 50%;
		transition: 0.6s;
		opacity: 0;

		&.loaded {
			opacity: 1;
		}
	}
}
</style>
