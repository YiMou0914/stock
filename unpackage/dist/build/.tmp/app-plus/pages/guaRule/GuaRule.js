(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/guaRule/GuaRule"],{1616:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},"222b":function(t,a,e){},"83c3":function(t,a,e){"use strict";e.r(a);var n=e("d725"),i=e.n(n);for(var u in n)"default"!==u&&function(t){e.d(a,t,function(){return n[t]})}(u);a["default"]=i.a},a0ff:function(t,a,e){"use strict";var n=e("222b"),i=e.n(n);i.a},bac4:function(t,a,e){"use strict";e.r(a);var n=e("1616"),i=e("83c3");for(var u in i)"default"!==u&&function(t){e.d(a,t,function(){return i[t]})}(u);e("a0ff");var s=e("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=r.exports},d725:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e("b72c"),i=e("f2c4"),u=e("7a9a"),s={data:function(){return{guaArr:null,bianArr:[],txtBen:"",txtBian:"",txtBenXia:"",txtBenShang:"",txtBianShang:"",txtBianXia:"",guaRule:"",txtStock:"",guaContent:"",isShare:!1}},onLoad:function(t){var a=JSON.parse(t.type);this.guaArr=JSON.parse(a.guaData),this.txtStock=a.stockID,this.setBianGuaInfo(),this.saveGuaContent(this.getNowTime())},methods:{setBianGuaInfo:function(){var t="";this.getGuaRule(this.guaArr,"ben");for(var a=0;a<this.guaArr.length;a++)this.guaArr[a].gua_1==this.guaArr[a].gua_2&&this.guaArr[a].gua_1==this.guaArr[a].gua_3?this.setGuaUrl(a):(t={guaData:this.guaArr[a].guaData,divinaUrl:this.guaArr[a].divinaUrl},this.bianArr.push(t));this.getGuaRule(this.bianArr,"bian")},setGuaUrl:function(t){var a="";a="../../static/yin.png"==this.guaArr[t].divinaUrl?{guaData:"1",divinaUrl:"../../static/yang.png"}:{guaData:"0",divinaUrl:"../../static/yin.png"},this.bianArr.push(a)},close:function(){t.reLaunch({url:"../hall/hall"})},getGuaRule:function(t,a){var e=t[2].guaData;e+=t[1].guaData,e+=t[0].guaData;var i=t[5].guaData;i+=t[4].guaData,i+=t[3].guaData,"ben"==a?(this.txtBen=(0,n.getGuaXiang)(i,e),this.txtBenShang=(0,n.getGuaRule)(i),this.txtBenXia=(0,n.getGuaRule)(e)):(this.txtBian=(0,n.getGuaXiang)(i,e),this.txtBianShang=(0,n.getGuaRule)(i),this.txtBianXia=(0,n.getGuaRule)(e),this.txtBen==this.txtBian?this.guaRule=this.txtBen.substring(2,5)+"不变卦":(this.guaRule=this.txtBen.substring(2,5)+"卦变",this.guaRule+=this.txtBian.substring(2,5)+"卦"))},getNowTime:function(){var t=new Date,a=t.getFullYear(),e=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,n=t.getDate()<10?"0"+t.getDate():t.getDate(),i=t.getHours(),u=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();return a+"-"+e+"-"+n+" "+i+":"+u},saveGuaContent:function(a){var e="record/addRecord?guastate="+this.guaRule+"&name="+this.txtStock+"&time="+a+"&content="+this.guaContent+"&userid="+this.$user.getUserID();t.showModal({content:e}),(0,u.httpRequest)(e,this.callback)},callback:function(a,e){if("fail"!=a){var n=this;t.showModal({title:a,content:"addRecord========userid="+n.$user.getUserID()})}else t.showModal({content:e.data.err})},showShareWindow:function(){this.isShare=!this.isShare},shareWechat:function(t){this.isShare=!0,this.canvasToTempFilePath(t)},shareCallBcak:function(){this.isShare=!this.isShare,t.showModal({content:"关闭分享界面"})},canvasToTempFilePath:function(a){var e=this,n=t.getSystemInfoSync(),u=t.createCanvasContext("myCanvas");u.draw(!0,function(){t.canvasToTempFilePath({x:10,y:10,width:n.screenWidth,height:n.screenHeight,destWidth:n.windowWidth,destHeight:n.windowHeight,canvasId:"myCanvas",success:function(e){t.showModal({title:"获取照片成功"}),"PYQ"==a?(0,i.sharePYQWindow)(e.tempFilePath):(0,i.shareWeChatTalkingWindow)(e.tempFilePath)},fail:function(a){t.showModal({title:"获取照片失败",content:a.message})}},e)})},hideModal:function(){this.isShare=!this.isShare}}};a.default=s}).call(this,e("6e42")["default"])}},[["e83b","common/runtime","common/vendor"]]]);