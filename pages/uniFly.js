! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define
		.amd ? define([], t) : "object" == typeof exports ? exports.uniFly = t() : e.uniFly = t()
}(this, function() {
	return function(e) {
		var t = {};

		function r(n) {
			if (t[n]) return t[n].exports;
			var o = t[n] = {
				i: n,
				l: !1,
				exports: {}
			};
			return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
		}
		return r.m = e, r.c = t, r.d = function(e, t, n) {
			r.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: n
			})
		}, r.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, r.t = function(e, t) {
			if (1 & t && (e = r(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (r.r(n), Object.defineProperty(n, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e)
				for (var o in e) r.d(n, o, function(t) {
					return e[t]
				}.bind(null, o));
			return n
		}, r.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return r.d(t, "a", t), t
		}, r.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, r.p = "", r(r.s = 1)
	}([function(e, t, r) {
		var n;
		n = function() {
			return function(e) {
				var t = {};

				function r(n) {
					if (t[n]) return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
				}
				return r.m = e, r.c = t, r.i = function(e) {
					return e
				}, r.d = function(e, t, n) {
					r.o(e, t) || Object.defineProperty(e, t, {
						configurable: !1,
						enumerable: !0,
						get: n
					})
				}, r.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e.default
					} : function() {
						return e
					};
					return r.d(t, "a", t), t
				}, r.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}, r.p = "", r(r.s = 13)
			}([function(e, t, r) {
				"use strict";
				var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" :
						typeof e
				};
				e.exports = {
					type: function(e) {
						return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
					},
					isObject: function(e, t) {
						return t ? "object" === this.type(e) : e && "object" === (void 0 === e ? "undefined" : n(e))
					},
					isFormData: function(e) {
						return "undefined" != typeof FormData && e instanceof FormData
					},
					trim: function(e) {
						return e.replace(/(^\s*)|(\s*$)/g, "")
					},
					encode: function(e) {
						return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(
							/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
					},
					formatParams: function(e) {
						var t = "",
							r = !0,
							n = this;
						return this.isObject(e) ? (function e(o, s) {
							var i = n.encode,
								a = n.type(o);
							if ("array" == a) o.forEach(function(t, r) {
								n.isObject(t) || (r = ""), e(t, s + "%5B" + r + "%5D")
							});
							else if ("object" == a)
								for (var u in o) e(o[u], s ? s + "%5B" + i(u) + "%5D" : i(u));
							else r || (t += "&"), r = !1, t += s + "=" + i(o)
						}(e, ""), t) : e
					},
					merge: function(e, t) {
						for (var r in t) e.hasOwnProperty(r) ? this.isObject(t[r], 1) && this.isObject(e[r], 1) && this.merge(e[
							r], t[r]) : e[r] = t[r];
						return e
					}
				}
			}, function(e, t, r) {
				var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" :
							typeof e
					},
					o = function() {
						function e(e, t) {
							for (var r = 0; r < t.length; r++) {
								var n = t[r];
								n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
									e, n.key, n)
							}
						}
						return function(t, r, n) {
							return r && e(t.prototype, r), n && e(t, n), t
						}
					}(),
					s = r(0),
					i = "undefined" != typeof document;
				e.exports = function(e) {
					return function() {
						function t() {
							! function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t), this.requestHeaders = {}, this.readyState = 0, this.timeout = 0, this.responseURL = "",
								this.responseHeaders = {}
						}
						return o(t, [{
							key: "_call",
							value: function(e) {
								this[e] && this[e].apply(this, [].splice.call(arguments, 1))
							}
						}, {
							key: "_changeReadyState",
							value: function(e) {
								this.readyState = e, this._call("onreadystatechange")
							}
						}, {
							key: "open",
							value: function(e, t) {
								if (this.method = e, t) {
									if (0 !== (t = s.trim(t)).indexOf("http") && i) {
										var r = document.createElement("a");
										r.href = t, t = r.href
									}
								} else t = location.href;
								this.responseURL = t, this._changeReadyState(1)
							}
						}, {
							key: "send",
							value: function(t) {
								var r = this;
								t = t || null;
								var o = this;
								if (e) {
									var a = {
										method: o.method,
										url: o.responseURL,
										headers: o.requestHeaders || {},
										body: t
									};
									s.merge(a, o._options || {}), "GET" === a.method && (a.body = null), o._changeReadyState(3);
									var u = void 0;
									o.timeout = o.timeout || 0, 0 < o.timeout && (u = setTimeout(function() {
										3 === o.readyState && (r._call("onloadend"), o._changeReadyState(0), o._call("ontimeout"))
									}, o.timeout)), a.timeout = o.timeout, e(a, function(e) {
										function t(t) {
											var r = e[t];
											return delete e[t], r
										}
										if (3 === o.readyState) {
											clearTimeout(u), o.status = t("statusCode") - 0;
											var r = t("responseText"),
												s = t("statusMessage");
											if (o.status) {
												var a = t("headers"),
													c = {};
												for (var f in a) {
													var l = a[f],
														p = f.toLowerCase();
													"object" === (void 0 === l ? "undefined" : n(l)) ? c[p] = l: (c[p] = c[p] || [], c[p].push(
														l))
												}
												var d = c["set-cookie"];
												i && d && d.forEach(function(e) {
														document.cookie = e.replace(/;\s*httpOnly/gi, "")
													}), o.responseHeaders = c, o.statusText = s || "", o.response = o.responseText = r, o._response =
													e, o._changeReadyState(4), o._call("onload")
											} else o.statusText = r, o._call("onerror", {
												msg: s
											});
											o._call("onloadend")
										}
									})
								} else console.error("Ajax require adapter")
							}
						}, {
							key: "setRequestHeader",
							value: function(e, t) {
								this.requestHeaders[s.trim(e)] = t
							}
						}, {
							key: "getResponseHeader",
							value: function(e) {
								return (this.responseHeaders[e.toLowerCase()] || "").toString() || null
							}
						}, {
							key: "getAllResponseHeaders",
							value: function() {
								var e = "";
								for (var t in this.responseHeaders) e += t + ":" + this.getResponseHeader(t) + "\r\n";
								return e || null
							}
						}, {
							key: "abort",
							value: function(e) {
								this._changeReadyState(0), this._call("onerror", {
									msg: e
								}), this._call("onloadend")
							}
						}], [{
							key: "setAdapter",
							value: function(t) {
								e = t
							}
						}]), t
					}()
				}
			}, function(e, t, r) {
				var n = function() {
						function e(e, t) {
							for (var r = 0; r < t.length; r++) {
								var n = t[r];
								n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
									e, n.key, n)
							}
						}
						return function(t, r, n) {
							return r && e(t.prototype, r), n && e(t, n), t
						}
					}(),
					o = r(0),
					s = "undefined" != typeof document,
					i = function() {
						function e(t) {
							function r(e) {
								var t = void 0,
									r = void 0;

								function n() {
									e.p = t = r = null
								}
								o.merge(e, {
									lock: function() {
										t || (e.p = new Promise(function(e, n) {
											t = e, r = n
										}))
									},
									unlock: function() {
										t && (t(), n())
									},
									clear: function() {
										r && (r("cancel"), n())
									}
								})
							}! function(t, r) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this), this.engine = t || XMLHttpRequest;
							var n = (this.default = this).interceptors = {
									response: {
										use: function(e, t) {
											this.handler = e, this.onerror = t
										}
									},
									request: {
										use: function(e) {
											this.handler = e
										}
									}
								},
								s = n.request;
							r(n.response), r(s), this.config = {
								method: "GET",
								baseURL: "",
								headers: {},
								timeout: 0,
								params: {},
								parseJson: !0,
								withCredentials: !1
							}
						}
						return n(e, [{
							key: "request",
							value: function(e, t, r) {
								var n = this,
									i = new this.engine,
									a = "Content-Type",
									u = a.toLowerCase(),
									c = this.interceptors,
									f = c.request,
									l = c.response,
									p = f.handler,
									d = new Promise(function(c, d) {
										function h(e) {
											return e && e.then && e.catch
										}

										function m(e, t) {
											e ? e.then(function() {
												t()
											}) : t()
										}
										o.isObject(e) && (e = (r = e).url), (r = r || {}).headers = r.headers || {}, m(f.p, function() {
											o.merge(r, JSON.parse(JSON.stringify(n.config)));
											var y = r.headers;
											y[a] = y[a] || y[u] || "", delete y[u], r.body = t || r.body, e = o.trim(e || ""), r.method =
												r.method.toUpperCase(), r.url = e;
											var v = r;
											p && (v = p.call(f, r, Promise) || r), h(v) || (v = Promise.resolve(v)), v.then(function(n) {
												n === r ? function(r) {
													t = r.body, e = o.trim(r.url);
													var n = o.trim(r.baseURL || "");
													if (e || !s || n || (e = location.href), 0 !== e.indexOf("http")) {
														var f = "/" === e[0];
														if (!n && s) {
															var p = location.pathname.split("/");
															p.pop(), n = location.protocol + "//" + location.host + (f ? "" : p.join("/"))
														}
														if ("/" !== n[n.length - 1] && (n += "/"), e = n + (f ? e.substr(1) : e), s) {
															var y = document.createElement("a");
															y.href = e, e = y.href
														}
													}
													var v = o.trim(r.responseType || ""),
														b = -1 !== ["GET", "HEAD", "DELETE", "OPTION"].indexOf(r.method),
														g = o.type(t),
														w = r.params || {};
													b && "object" === g && (w = o.merge(t, w));
													var O = [];
													(w = o.formatParams(w)) && O.push(w), b && t && "string" === g && O.push(t), 0 < O.length &&
														(e += (-1 === e.indexOf("?") ? "?" : "&") + O.join("&")), i.open(r.method, e);
													try {
														i.withCredentials = !!r.withCredentials, i.timeout = r.timeout || 0, "stream" !== v &&
															(i.responseType = v)
													} catch (n) {}
													var j = r.headers[a] || r.headers[u],
														P = "application/x-www-form-urlencoded";
													for (var x in o.trim((j || "").toLowerCase()) === P ? t = o.formatParams(t) : o.isFormData(
																t) || -1 === ["object", "array"].indexOf(o.type(t)) || (P =
																"application/json;charset=utf-8", t = JSON.stringify(t)), j || b || (r.headers[a] = P),
															r.headers)
														if (x === a && o.isFormData(t)) delete r.headers[x];
														else try {
															i.setRequestHeader(x, r.headers[x])
														} catch (n) {}

													function E(e, t, n) {
														m(l.p, function() {
															if (e) {
																n && (t.request = r);
																var o = e.call(l, t, Promise);
																t = void 0 === o ? t : o
															}
															h(t) || (t = Promise[0 === n ? "resolve" : "reject"](t)), t.then(function(e) {
																c(e)
															}).catch(function(e) {
																d(e)
															})
														})
													}

													function S(e) {
														e.engine = i, E(l.onerror, e, -1)
													}

													function k(e, t) {
														this.message = e, this.status = t
													}
													i.onload = function() {
														try {
															var e = i.response || i.responseText;
															e && r.parseJson && -1 !== (i.getResponseHeader(a) || "").indexOf("json") && !o.isObject(
																e) && (e = JSON.parse(e));
															var t = i.responseHeaders;
															if (!t) {
																t = {};
																var n = (i.getAllResponseHeaders() || "").split("\r\n");
																n.pop(), n.forEach(function(e) {
																	if (e) {
																		var r = e.split(":")[0];
																		t[r] = i.getResponseHeader(r)
																	}
																})
															}
															var s = i.status,
																u = i.statusText,
																c = {
																	data: e,
																	headers: t,
																	status: s,
																	statusText: u
																};
															if (o.merge(c, i._response), 200 <= s && s < 300 || 304 === s) c.engine = i, c.request =
																r, E(l.handler, c, 0);
															else {
																var f = new k(u, s);
																f.response = c, S(f)
															}
														} catch (f) {
															S(new k(f.msg, i.status))
														}
													}, i.onerror = function(e) {
														S(new k(e.msg || "Network Error", 0))
													}, i.ontimeout = function() {
														S(new k("timeout [ " + i.timeout + "ms ]", 1))
													}, i._options = r, setTimeout(function() {
														i.send(b ? null : t)
													}, 0)
												}(n) : c(n)
											}, function(e) {
												d(e)
											})
										})
									});
								return d.engine = i, d
							}
						}, {
							key: "all",
							value: function(e) {
								return Promise.all(e)
							}
						}, {
							key: "spread",
							value: function(e) {
								return function(t) {
									return e.apply(null, t)
								}
							}
						}]), e
					}();
				i.default = i, ["get", "post", "put", "patch", "head", "delete"].forEach(function(e) {
					i.prototype[e] = function(t, r, n) {
						return this.request(t, r, o.merge({
							method: e
						}, n))
					}
				}), ["lock", "unlock", "clear"].forEach(function(e) {
					i.prototype[e] = function() {
						this.interceptors.request[e]()
					}
				}), e.exports = i
			}, , , , , function(e, t, r) {
				"use strict";
				e.exports = function(e, t) {
					var r = {
						method: e.method,
						url: e.url,
						dataType: e.dataType || void 0,
						header: e.headers,
						data: e.body || {},
						responseType: e.responseType || "text",
						success: function(e) {
							t({
								statusCode: e.statusCode,
								responseText: e.data,
								headers: e.header,
								statusMessage: e.errMsg
							})
						},
						fail: function(e) {
							t({
								statusCode: e.statusCode || 0,
								statusMessage: e.errMsg
							})
						}
					};
					wx.request(r)
				}
			}, , , , , , function(e, t, r) {
				"use strict";
				var n = r(2),
					o = r(1)(r(7));
				e.exports = function(e) {
					return new n(e || o)
				}
			}])
		}, e.exports = n()
	}, function(e, t, r) {
		"use strict";

		function n(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = null != arguments[t] ? arguments[t] : {},
					n = Object.keys(r);
				"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(
					function(e) {
						return Object.getOwnPropertyDescriptor(r, e).enumerable
					}))), n.forEach(function(t) {
					o(e, t, r[t])
				})
			}
			return e
		}

		function o(e, t, r) {
			return t in e ? Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = r, e
		}
		r.r(t);
		var s = function(e) {
				null != e && null != e.title && 0 < e.title.length && (null == e.icon && (e.icon = "none"), void 0 === e.mask &&
					(e.mask = !0), uni.showToast(n({
						duration: 2e3
					}, e)))
			},
			i = function(e) {
				(null == (e = n({}, e)).title || e.title.length < 1) && (e.title = "加载中..."), void 0 === e.mask && (e.mask = !0),
					uni.showLoading(n({}, e))
			},
			a = function() {
				uni.hideLoading()
			},
			u = r(0),
			c = r.n(u);

		function f(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = null != arguments[t] ? arguments[t] : {},
					n = Object.keys(r);
				"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(
					function(e) {
						return Object.getOwnPropertyDescriptor(r, e).enumerable
					}))), n.forEach(function(t) {
					l(e, t, r[t])
				})
			}
			return e
		}

		function l(e, t, r) {
			return t in e ? Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = r, e
		}
		var p = function e(t) {
			var r = t.baseUrl,
				n = t.timeout,
				o = t.headers,
				s = t.showLoading,
				i = t.showError,
				a = t.requestInterceptors,
				u = t.responseInterceptors;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e), e.headers = o, e.showLoading = s, e.showError = i;
			var l = new c.a;
			l.config.baseURL = r, l.config.timeout = n, a = f({}, e.requestInterceptors, a), u = f({}, e.responseInterceptors,
					u), l.interceptors.request.use(a.success, a.error), l.interceptors.response.use(u.success, u.error), this.fly =
				l
		};
		p.headers = {}, p.showLoading = !0, p.showError = !0, p.requestInterceptors = {
			success: function(e) {
				return console.log("请求拦截"), e.headers = p.headers, 1 == p.showLoading && i(), e
			},
			error: function(e) {
				return a(), p.showError && s({
					title: "请求拦截失败"
				}), Promise.reject(e)
			}
		}, p.responseInterceptors = {
			success: function(e) {
				return p.showLoading && a(), console.log("响应拦截"), Promise.resolve(e)
			},
			error: function(e) {
				return a(), p.showError && s({
					title: "响应拦截失败"
				}), Promise.reject(e)
			}
		};
		var d = p;

		function h(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = null != arguments[t] ? arguments[t] : {},
					n = Object.keys(r);
				"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(
					function(e) {
						return Object.getOwnPropertyDescriptor(r, e).enumerable
					}))), n.forEach(function(t) {
					m(e, t, r[t])
				})
			}
			return e
		}

		function m(e, t, r) {
			return t in e ? Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = r, e
		}

		function y(e, t) {
			for (var r = 0; r < t.length; r++) {
				var n = t[r];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
					e, n.key, n)
			}
		}
		var v = function() {
			function e() {
				! function(t, r) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this)
			}
			return t = e, (r = [{
				key: "instance",
				value: function(t) {
					var r = t.headers,
						n = t.showLoading,
						o = void 0 === n || n,
						s = t.showError,
						i = void 0 === s || s,
						a = t.timeout,
						u = void 0 === a ? e.timeOut : a;
					if (!e.baseUrl) throw new Error("请先设置基础路由baseUrl");
					return r = h({}, e.headers, r), new d({
						baseUrl: e.baseUrl,
						timeout: u,
						headers: r,
						showLoading: o,
						showError: i,
						requestInterceptors: e.requestInterceptors,
						responseInterceptors: e.responseInterceptors
					})
				}
			}, {
				key: "get",
				value: function(t) {
					var r = t.url,
						n = t.params,
						o = t.showLoading,
						s = t.showError,
						i = t.timeout,
						a = t.headers,
						u = e.instance({
							showLoading: o,
							showError: s,
							timeout: i,
							headers: void 0 === a ? {} : a
						});
					return new Promise(function(t, o) {
						u.fly.get(r, h({}, e.baseParam, n)).then(function(e) {
							t(e)
						}).catch(function(e) {
							o(e)
						})
					})
				}
			}, {
				key: "post",
				value: function(t) {
					var r = t.url,
						n = t.params,
						o = t.showLoading,
						s = t.showError,
						i = t.timeout,
						a = t.headers,
						u = e.instance({
							showLoading: o,
							showError: s,
							timeout: i,
							headers: void 0 === a ? {} : a
						});
					return new Promise(function(t, o) {
						u.fly.post(r, h({}, e.baseParam, n)).then(function(e) {
							t(e)
						}).catch(function(e) {
							o(e)
						})
					})
				}
			}, {
				key: "put",
				value: function(t) {
					var r = t.url,
						n = t.params,
						o = t.showLoading,
						s = t.showError,
						i = t.timeout,
						a = t.headers,
						u = e.instance({
							showLoading: o,
							showError: s,
							timeout: i,
							headers: void 0 === a ? {} : a
						});
					return new Promise(function(t, o) {
						u.fly.put(r, h({}, e.baseParam, n)).then(function(e) {
							t(e)
						}).catch(function(e) {
							o(e)
						})
					})
				}
			}, {
				key: "delete",
				value: function(t) {
					var r = t.url,
						n = t.params,
						o = t.showLoading,
						s = t.showError,
						i = t.timeout,
						a = t.headers,
						u = e.instance({
							showLoading: o,
							showError: s,
							timeout: i,
							headers: void 0 === a ? {} : a
						});
					return new Promise(function(t, o) {
						u.fly.delete(r, h({}, e.baseParam, n)).then(function(e) {
							t(e)
						}).catch(function(e) {
							o(e)
						})
					})
				}
			}]) && y(t, r), e;
			var t, r
		}();
		v.baseUrl = "", v.timeOut = 2e4, v.headers = {
			common: {},
			"Content-Type": "application/json"
		}, v.baseParam = {}, v.requestInterceptors = {}, v.responseInterceptors = {};
		var b = v;
		t.default = b
	}]).default
});
