export function getUserInfo(callBack) {
	//登陆
	uni.login({
		provider: 'weixin',
		success: function(loginRes) {
			//获取用户信息
			uni.getUserInfo({
				lang: "zh_CN",
				provider: 'weixin',
				success: function(user) {
					callBack(user.userInfo);
				},
				fail: function(err) {
					uni.showModal({
						title: "获取用户信息失败",
						content: err
					})
				}
			})
		},
		fail: function(err) {
			uni.showModal({
				title: "登陆失败",
				content: err
			});
		}
	});
}

export function sharePYQWindow(canvasUrl,callback) {
	uni.share({
		provider: "weixin",
		scene: "WXSceneTimeline",
		type: 2,
		// summary: canvasUrl,
		// href:canvasUrl,
		// title:"涨跌易断",
		imageUrl: canvasUrl,
		success: function(res) {
			callback();
			uni.showModal({
				content: '分享朋友圈成功',
			});
		},
		fail: function(res) {
			callback();
			uni.showModal({
				content: '分享朋友圈失败',
			});
		}
	})
}

export function shareWeChatTalkingWindow(canvasUrl,callback) {
	uni.share({
		provider: "weixin",
		scene: "WXSceneSession",
		type: 2,
		// summary: canvasUrl,
		// // href:canvasUrl,
		// // title:"涨跌易断",
		imageUrl: canvasUrl,
		success: function(res) {
			callback();
			uni.showModal({
				content: '分享聊天界面成功',
			});
		},
		fail: function(res) {
			callback();
			uni.showModal({
				content: '分享聊天界面失败',
			});
		}
	})
}
