(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/stockDetail/StockDetail"],{"2b5f":function(t,i,n){"use strict";n.r(i);var a=n("8584"),s=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(i,t,function(){return a[t]})}(o);i["default"]=s.a},5974:function(t,i,n){"use strict";n.r(i);var a=n("fe0d"),s=n("2b5f");for(var o in s)"default"!==o&&function(t){n.d(i,t,function(){return s[t]})}(o);n("e04e");var e=n("2877"),u=Object(e["a"])(s["default"],a["a"],a["b"],!1,null,null,null);i["default"]=u.exports},8584:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n("7a9a"),s={data:function(){return{txtMax:"12.56",txtMin:"10.52",stockID:"",stockData:[],jinKai:"",max:"",min:"",chenjiaoNum:"",chenjiaoMoney:"",zuoshou:"",buy:"",sell:"",money:"",waipan:"",neipan:"",huanshou:"",shiying:"",zhenfu:"",zonzhi:"",shijing:"",zhangtin:"",dietin:"",liuton:"",zhangsu:"",junjia:"",isSave:!0}},onLoad:function(i){this.stockID=i.type,this.stockData=this.stockID.split("~"),console.log(this.stockData," at pages\\stockDetail\\StockDetail.vue:106"),t.setNavigationBarTitle({title:this.stockData[1]+"("+this.stockData[2]+")"});var n="collect/findstock?code="+this.stockData[2]+"&type=2&userid="+this.$user.getUserID();(0,a.httpRequest)(n,this.setSaveButtonActive),this.setStockDetail(this.stockData)},methods:{startForecast:function(){var i=this.stockData[1]+"("+this.stockData[2]+")";t.navigateTo({url:"../divination/Divination?type="+i})},optional:function(){var i=this.stockData[1]+"("+this.stockData[2]+")";t.navigateTo({url:"../optional/optional?type="+i})},setStockDetail:function(t){null!=t&&(null!=t[3]&&""!=t[3]?this.money=t[3]:this.money="",null!=t[4]&&""!=t[4]?this.zuoshou=t[4]:this.zuoshou="",null!=t[5]&&""!=t[5]?this.jinKai=t[5]:this.jinKai="",null!=t[7]&&""!=t[7]?this.waipan=t[7]:this.waipan="",null!=t[8]&&""!=t[8]?this.neipan=t[8]:this.neipan="",null!=t[32]&&""!=t[32]?this.zhangsu=t[32]+"%":this.zhangsu="",null!=t[36]&&""!=t[36]?this.chenjiaoNum=(t[36]/1e4).toFixed(1)+"万":this.chenjiaoNum="",null!=t[37]&&""!=t[37]?this.chenjiaoMoney=(t[37]/1e4).toFixed(2)+"亿":this.chenjiaoMoney="",null!=t[38]&&""!=t[38]?this.huanshou=t[38]+"%":this.huanshou="",null!=t[39]&&""!=t[39]?this.shiying=t[39]:this.shiying="",null!=t[41]&&""!=t[41]?this.max=t[41]:this.max="",null!=t[42]&&""!=t[42]?this.min=t[42]:this.min="",null!=t[43]&&""!=t[43]?this.zhenfu=t[43]+"%":this.zhenfu="",null!=t[44]&&""!=t[44]?this.liuton=t[44]:this.liuton="",null!=t[45]&&""!=t[45]?this.zonzhi=t[45]+"亿":this.zonzhi="",null!=t[46]&&""!=t[46]?this.shijing=t[46]:this.shijing="",null!=t[47]&&""!=t[47]?this.zhangtin=t[47]:this.zhangtin="",null!=t[48]&&""!=t[48]?this.dietin=t[48]:this.dietin="",null!=t[51]&&""!=t[51]?this.junjia=t[51]:this.junjia="")},addHallStock:function(){var t="collect/addstock?userid="+this.$user.getUserID()+"&xianjia="+this.stockData[3]+"&stockname="+this.stockData[1]+"&zhangdie="+this.stockData[31]+"&zhangfu="+this.stockData[32]+"&jinKai="+this.stockData[5]+"&code="+this.stockData[2];(0,a.httpRequest)(t,this.addCallback),this.isSave=!1},addCallback:function(i,n){"fail"!=i&&200==n.data.code&&t.showModal({title:"收藏成功",content:"收藏成功，可在首页'我的自选'中查看"})},setSaveButtonActive:function(t,i){"fail"!=t&&(1==i.data?this.isSave=!1:this.isSave=!0)}}};i.default=s}).call(this,n("6e42")["default"])},a990:function(t,i,n){},e04e:function(t,i,n){"use strict";var a=n("a990"),s=n.n(a);s.a},fe0d:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement;t._self._c},s=[];n.d(i,"a",function(){return a}),n.d(i,"b",function(){return s})}},[["2d26","common/runtime","common/vendor"]]]);