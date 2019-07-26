(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/cu-custom"],{"333f":function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,a=this.CustomBar,n=this.bgImage,u="height:".concat(a,"px;padding-top:").concat(t,"px;");return this.bgImage&&(u="".concat(u,"background-image:url(").concat(n,");")),u}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){t.navigateBack({delta:1})}}};a.default=n}).call(this,n("6e42")["default"])},5323:function(t,a,n){"use strict";var u=function(){var t=this,a=t.$createElement;t._self._c},e=[];n.d(a,"a",function(){return u}),n.d(a,"b",function(){return e})},8102:function(t,a,n){"use strict";n.r(a);var u=n("333f"),e=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(a,t,function(){return u[t]})}(r);a["default"]=e.a},"88a5":function(t,a,n){"use strict";n.r(a);var u=n("5323"),e=n("8102");for(var r in e)"default"!==r&&function(t){n.d(a,t,function(){return e[t]})}(r);var o=n("2877"),c=Object(o["a"])(e["default"],u["a"],u["b"],!1,null,null,null);a["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'common/cu-custom-create-component',
    {
        'common/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("88a5"))
        })
    },
    [['common/cu-custom-create-component']]
]);                
