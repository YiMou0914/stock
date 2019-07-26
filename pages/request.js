export function stockDetail(stock,callBack){
	var stockName="";
	if(stock[0]>=6){
		stockName="sh"+stock;
	}else{
		stockName="sz"+stock;
	}
	uni.request({
    url: 'http://qt.gtimg.cn/q='+stockName,
    success: (res) => {
			if(callBack!=null){
				callBack(res.data)
			}
    },
		fail: (res) => {
			alert(res);
		}
});
}
