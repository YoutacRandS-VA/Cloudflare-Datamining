! function() {
	var e = {
			343: function(e) {
				"use strict";
				for (var t = [], n = 0; n < 256; ++n) t[n] = (n + 256).toString(16).substr(1);
				e.exports = function(e, n) {
					var r = n || 0,
						i = t;
					return [i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]]].join("")
				}
			},
			944: function(e) {
				"use strict";
				var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
				if (t) {
					var n = new Uint8Array(16);
					e.exports = function() {
						return t(n), n
					}
				} else {
					var r = new Array(16);
					e.exports = function() {
						for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
						return r
					}
				}
			},
			508: function(e, t, n) {
				"use strict";
				var r = n(944),
					i = n(343);
				e.exports = function(e, t, n) {
					var o = t && n || 0;
					"string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
					var a = (e = e || {}).random || (e.rng || r)();
					if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
						for (var c = 0; c < 16; ++c) t[o + c] = a[c];
					return t || i(a)
				}
			},
			168: function(e, t, n) {
				"use strict";
				var r = this && this.__assign || function() {
					return r = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
						return e
					}, r.apply(this, arguments)
				};
				t.__esModule = !0;
				var i = n(699),
					o = n(752),
					a = n(104),
					c = n(508);
				! function() {
					function e(e) {
						var t = "";
						if (t = window.location.origin ? window.location.origin : "".concat(window.location.protocol, "://").concat(window.location.host), e && "string" == typeof e)
							if (0 === e.indexOf("/")) t += e;
							else try {
								var n = new URL(e);
								return "".concat(n.protocol, "://").concat(n.host).concat(n.pathname)
							} catch (e) {} else {
								var r = window.location.pathname;
								r && r.length > 0 && (t += r)
							}
						return t
					}

					function t(e, t) {
						for (var n in e) {
							var r = e[n];
							void 0 !== t && ("number" == typeof r || "string" == typeof r ? t[n] = r : Array.isArray(r) && (t[n] = JSON.parse(JSON.stringify(r))))
						}
					}! function() {
						var n, u, s = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
							f = "data-cf-beacon",
							d = document.currentScript || ("function" == typeof document.querySelector ? document.querySelector("script[".concat(f, "]")) : void 0),
							l = c(),
							v = [],
							p = window.__cfBeacon ? window.__cfBeacon : {};
						if (!p || "single" !== p.load) {
							if (d) {
								var m = d.getAttribute(f);
								if (m) try {
									p = r(r({}, p), JSON.parse(m))
								} catch (e) {} else {
									var g = d.getAttribute("src");
									if (g && "function" == typeof URLSearchParams) {
										var y = new URLSearchParams(g.replace(/^[^\?]+\??/, "")),
											h = y.get("token");
										h && (p.token = h);
										var T = y.get("spa");
										p.spa = null === T || "true" === T
									}
								}
								p && "multi" !== p.load && (p.load = "single"), window.__cfBeacon = p
							}
							if (s && p && p.token) {
								var w, S, b = !1;
								document.addEventListener("visibilitychange", (function() {
									if ("hidden" === document.visibilityState) {
										if (L && R()) {
											var t = e();
											(null == w ? void 0 : w.url) == t && (null == w ? void 0 : w.triggered) || P(), _(t)
										}!b && w && (b = !0, B())
									} else "visible" === document.visibilityState && (new Date).getTime()
								}));
								var E = {};
								"function" == typeof PerformanceObserver && ((0, a.onLCP)(x), (0, a.onFID)(x), (0, a.onFCP)(x), (0, a.onINP)(x), (0, a.onTTFB)(x), PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("layout-shift") && (0, a.onCLS)(x));
								var L = p && (void 0 === p.spa || !0 === p.spa),
									C = p.send && p.send.to ? p.send.to : void 0 === p.version ? "https://cloudflareinsights.com/cdn-cgi/rum" : null,
									P = function(r) {
										var a = function(r) {
											var o, a, c = s.timing,
												u = s.memory,
												f = r || e(),
												d = {
													memory: {},
													timings: {},
													resources: [],
													referrer: (o = document.referrer || "", a = v[v.length - 1], L && w && a ? a.url : o),
													eventType: i.EventType.Load,
													firstPaint: 0,
													firstContentfulPaint: 0,
													startTime: F(),
													versions: {
														fl: p ? p.version : "",
														js: "2024.6.0",
														timings: 1
													},
													pageloadId: l,
													location: f,
													nt: S,
													serverTimings: I()
												};
											if (null == n) {
												if ("function" == typeof s.getEntriesByType) {
													var m = s.getEntriesByType("navigation");
													m && Array.isArray(m) && m.length > 0 && (d.timingsV2 = {}, d.versions.timings = 2, d.dt = m[0].deliveryType, delete d.timings, t(m[0], d.timingsV2))
												}
												1 === d.versions.timings && t(c, d.timings), t(u, d.memory)
											} else O(d);
											return d.firstPaint = k("first-paint"), d.firstContentfulPaint = k("first-contentful-paint"), p && (p.icTag && (d.icTag = p.icTag), d.siteToken = p.token), void 0 !== n && (delete d.timings, delete d.memory), d
										}(r);
										a && p && (a.resources = [], p && ((0, o.sendObjectBeacon)("", a, (function() {}), !1, C), void 0 !== p.forward && void 0 !== p.forward.url && (0, o.sendObjectBeacon)("", a, (function() {}), !1, p.forward.url)))
									},
									B = function() {
										var t = function() {
											var t = s.getEntriesByType("navigation")[0],
												n = "";
											try {
												n = "function" == typeof s.getEntriesByType ? new URL(null == t ? void 0 : t.name).pathname : u ? new URL(u).pathname : window.location.pathname
											} catch (e) {}
											var r = {
												referrer: document.referrer || "",
												eventType: i.EventType.WebVitalsV2,
												versions: {
													js: "2024.6.0"
												},
												pageloadId: l,
												location: e(),
												landingPath: n,
												startTime: F(),
												nt: S,
												serverTimings: I()
											};
											return p && (p.version && (r.versions.fl = p.version), p.icTag && (r.icTag = p.icTag), r.siteToken = p.token), E && ["lcp", "fid", "cls", "fcp", "ttfb", "inp"].forEach((function(e) {
												r[e] = {
													value: -1,
													path: void 0
												}, E[e] && void 0 !== E[e].value && (r[e] = E[e])
											})), O(r), r
										}();
										p && (0, o.sendObjectBeacon)("", t, (function() {}), !0, C)
									},
									A = function() {
										var t = window.__cfRl && window.__cfRl.done || window.__cfQR && window.__cfQR.done;
										t ? t.then(P) : P(), w = {
											id: l,
											url: e(),
											ts: (new Date).getTime(),
											triggered: !0
										}
									};
								"complete" === window.document.readyState ? A() : window.addEventListener("load", (function() {
									window.setTimeout(A)
								}));
								var R = function() {
										return L && 0 === v.filter((function(e) {
											return e.id === l
										})).length
									},
									_ = function(e) {
										v.push({
											id: l,
											url: e,
											ts: (new Date).getTime()
										}), v.length > 3 && v.shift()
									};
								L && (u = e(), function(t) {
									var r = t.pushState;
									if (r) {
										var i = function() {
											l = c()
										};
										t.pushState = function(o, a, c) {
											n = e(c);
											var u = e(),
												s = !0;
											return n == u && (s = !1), s && (R() && ((null == w ? void 0 : w.url) == u && (null == w ? void 0 : w.triggered) || P(u), _(u)), i()), r.apply(t, [o, a, c])
										}, window.addEventListener("popstate", (function(t) {
											R() && ((null == w ? void 0 : w.url) == n && (null == w ? void 0 : w.triggered) || P(n), _(n)), n = e(), i()
										}))
									}
								}(window.history))
							}
						}

						function x(e) {
							var t, n, r, i, o, a, c, u = window.location.pathname;
							switch (S || (S = e.navigationType), "INP" !== e.name && (E[e.name.toLowerCase()] = {
									value: e.value,
									path: u
								}), e.name) {
								case "CLS":
									(c = e.attribution) && E.cls && (E.cls.element = c.largestShiftTarget, E.cls.currentRect = null === (t = c.largestShiftSource) || void 0 === t ? void 0 : t.currentRect, E.cls.previousRect = null === (n = c.largestShiftSource) || void 0 === n ? void 0 : n.previousRect);
									break;
								case "FID":
									(c = e.attribution) && E.fid && (E.fid.element = c.eventTarget, E.fid.name = c.eventType);
									break;
								case "LCP":
									(c = e.attribution) && E.lcp && (E.lcp.element = c.element, E.lcp.size = null === (r = c.lcpEntry) || void 0 === r ? void 0 : r.size, E.lcp.url = c.url, E.lcp.rld = c.resourceLoadDelay, E.lcp.rlt = c.resourceLoadTime, E.lcp.erd = c.elementRenderDelay, E.lcp.it = null === (i = c.lcpResourceEntry) || void 0 === i ? void 0 : i.initiatorType, E.lcp.fp = null === (a = null === (o = c.lcpEntry) || void 0 === o ? void 0 : o.element) || void 0 === a ? void 0 : a.getAttribute("fetchpriority"));
									break;
								case "INP":
									(null == E.inp || Number(E.inp.value) < Number(e.value)) && (E.inp = {
										value: Number(e.value),
										path: u
									}, (c = e.attribution) && E.inp && (E.inp.element = c.eventTarget, E.inp.name = c.eventType))
							}
						}

						function F() {
							return s.timeOrigin
						}

						function I() {
							if (p && p.serverTiming) {
								for (var e = [], t = 0, n = ["navigation", "resource"]; t < n.length; t++)
									for (var r = n[t], i = 0, o = s.getEntriesByType(r); i < o.length; i++) {
										var a = o[i],
											c = a.name,
											u = a.serverTiming;
										if (u) {
											if ("resource" === r) {
												var f = p.serverTiming.location_startswith;
												if (!f || !Array.isArray(f)) continue;
												for (var d = !1, l = 0, v = f; l < v.length; l++) {
													var m = v[l];
													if (c.startsWith(m)) {
														d = !0;
														break
													}
												}
												if (!d) continue
											}
											for (var g = 0, y = u; g < y.length; g++) {
												var h = y[g],
													T = h.name,
													w = h.description,
													S = h.duration;
												if (p.serverTiming.name && p.serverTiming.name[T]) try {
													var b = new URL(c);
													e.push({
														location: "resource" === r ? "".concat(b.origin).concat(b.pathname) : void 0,
														name: T,
														dur: S,
														desc: w
													})
												} catch (e) {}
											}
										}
									}
								return e
							}
						}

						function O(e) {
							if ("function" == typeof s.getEntriesByType) {
								var n = s.getEntriesByType("navigation"),
									r = {};
								e.timingsV2 = {}, n && n[0] && (n[0].nextHopProtocol && (r.nextHopProtocol = n[0].nextHopProtocol), n[0].transferSize && (r.transferSize = n[0].transferSize), n[0].decodedBodySize && (r.decodedBodySize = n[0].decodedBodySize), e.dt = n[0].deliveryType), t(r, e.timingsV2)
							}
						}

						function k(e) {
							var t;
							if ("first-contentful-paint" === e && E.fcp && E.fcp.value) return E.fcp.value;
							if ("function" == typeof s.getEntriesByType) {
								var n = null === (t = s.getEntriesByType("paint")) || void 0 === t ? void 0 : t.filter((function(t) {
									return t.name === e
								}))[0];
								return n ? n.startTime : 0
							}
							return 0
						}
					}()
				}()
			},
			752: function(e, t) {
				"use strict";
				t.__esModule = !0, t.sendObjectBeacon = void 0, t.sendObjectBeacon = function(e, t, n, r, i) {
					void 0 === r && (r = !1), void 0 === i && (i = null);
					var o = i || (t.siteToken && t.versions.fl ? "/cdn-cgi/rum?".concat(e) : "/cdn-cgi/beacon/performance?".concat(e)),
						a = !0;
					if (navigator && "string" == typeof navigator.userAgent) try {
						var c = navigator.userAgent.match(/Chrome\/([0-9]+)/);
						c && c[0].toLowerCase().indexOf("chrome") > -1 && parseInt(c[1]) < 81 && (a = !1)
					} catch (e) {}
					if (navigator && "function" == typeof navigator.sendBeacon && a && r) {
						t.st = 1;
						var u = JSON.stringify(t),
							s = navigator.sendBeacon && navigator.sendBeacon.bind(navigator);
						null == s || s(o, new Blob([u], {
							type: "application/json"
						}))
					} else {
						t.st = 2, u = JSON.stringify(t);
						var f = new XMLHttpRequest;
						n && (f.onreadystatechange = function() {
							4 == this.readyState && 204 == this.status && n()
						}), f.open("POST", o, !0), f.setRequestHeader("content-type", "application/json"), f.send(u)
					}
				}
			},
			699: function(e, t) {
				"use strict";
				var n, r;
				t.__esModule = !0, t.FetchPriority = t.EventType = void 0, (r = t.EventType || (t.EventType = {}))[r.Load = 1] = "Load", r[r.Additional = 2] = "Additional", r[r.WebVitalsV2 = 3] = "WebVitalsV2", (n = t.FetchPriority || (t.FetchPriority = {})).High = "high", n.Low = "low", n.Auto = "auto"
			},
			104: function(e, t) {
				! function(e) {
					"use strict";
					var t, n, r, i, o, a = function() {
							return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
						},
						c = function(e) {
							if ("loading" === document.readyState) return "loading";
							var t = a();
							if (t) {
								if (e < t.domInteractive) return "loading";
								if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart) return "dom-interactive";
								if (0 === t.domComplete || e < t.domComplete) return "dom-content-loaded"
							}
							return "complete"
						},
						u = function(e) {
							var t = e.nodeName;
							return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "")
						},
						s = function(e, t) {
							var n = "";
							try {
								for (; e && 9 !== e.nodeType;) {
									var r = e,
										i = r.id ? "#" + r.id : u(r) + (r.classList && r.classList.value && r.classList.value.trim() && r.classList.value.trim().length ? "." + r.classList.value.trim().replace(/\s+/g, ".") : "");
									if (n.length + i.length > (t || 100) - 1) return n || i;
									if (n = n ? i + ">" + n : i, r.id) break;
									e = r.parentNode
								}
							} catch (e) {}
							return n
						},
						f = -1,
						d = function() {
							return f
						},
						l = function(e) {
							addEventListener("pageshow", (function(t) {
								t.persisted && (f = t.timeStamp, e(t))
							}), !0)
						},
						v = function() {
							var e = a();
							return e && e.activationStart || 0
						},
						p = function(e, t) {
							var n = a(),
								r = "navigate";
							return d() >= 0 ? r = "back-forward-cache" : n && (document.prerendering || v() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
								name: e,
								value: void 0 === t ? -1 : t,
								rating: "good",
								delta: 0,
								entries: [],
								id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
								navigationType: r
							}
						},
						m = function(e, t, n) {
							try {
								if (PerformanceObserver.supportedEntryTypes.includes(e)) {
									var r = new PerformanceObserver((function(e) {
										Promise.resolve().then((function() {
											t(e.getEntries())
										}))
									}));
									return r.observe(Object.assign({
										type: e,
										buffered: !0
									}, n || {})), r
								}
							} catch (e) {}
						},
						g = function(e, t, n, r) {
							var i, o;
							return function(a) {
								t.value >= 0 && (a || r) && ((o = t.value - (i || 0)) || void 0 === i) && (i = t.value, t.delta = o, t.rating = function(e, t) {
									return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
								}(t.value, n), e(t))
							}
						},
						y = function(e) {
							requestAnimationFrame((function() {
								return requestAnimationFrame((function() {
									return e()
								}))
							}))
						},
						h = function(e) {
							var t = function(t) {
								"pagehide" !== t.type && "hidden" !== document.visibilityState || e(t)
							};
							addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0)
						},
						T = function(e) {
							var t = !1;
							return function(n) {
								t || (e(n), t = !0)
							}
						},
						w = -1,
						S = function() {
							return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
						},
						b = function(e) {
							"hidden" === document.visibilityState && w > -1 && (w = "visibilitychange" === e.type ? e.timeStamp : 0, L())
						},
						E = function() {
							addEventListener("visibilitychange", b, !0), addEventListener("prerenderingchange", b, !0)
						},
						L = function() {
							removeEventListener("visibilitychange", b, !0), removeEventListener("prerenderingchange", b, !0)
						},
						C = function() {
							return w < 0 && (w = S(), E(), l((function() {
								setTimeout((function() {
									w = S(), E()
								}), 0)
							}))), {
								get firstHiddenTime() {
									return w
								}
							}
						},
						P = function(e) {
							document.prerendering ? addEventListener("prerenderingchange", (function() {
								return e()
							}), !0) : e()
						},
						B = [1800, 3e3],
						A = function(e, t) {
							t = t || {}, P((function() {
								var n, r = C(),
									i = p("FCP"),
									o = m("paint", (function(e) {
										e.forEach((function(e) {
											"first-contentful-paint" === e.name && (o.disconnect(), e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - v(), 0), i.entries.push(e), n(!0)))
										}))
									}));
								o && (n = g(e, i, B, t.reportAllChanges), l((function(r) {
									i = p("FCP"), n = g(e, i, B, t.reportAllChanges), y((function() {
										i.value = performance.now() - r.timeStamp, n(!0)
									}))
								})))
							}))
						},
						R = [.1, .25],
						_ = {
							passive: !0,
							capture: !0
						},
						x = new Date,
						F = function(e, i) {
							t || (t = i, n = e, r = new Date, k(removeEventListener), I())
						},
						I = function() {
							if (n >= 0 && n < r - x) {
								var e = {
									entryType: "first-input",
									name: t.type,
									target: t.target,
									cancelable: t.cancelable,
									startTime: t.timeStamp,
									processingStart: t.timeStamp + n
								};
								i.forEach((function(t) {
									t(e)
								})), i = []
							}
						},
						O = function(e) {
							if (e.cancelable) {
								var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
								"pointerdown" == e.type ? function(e, t) {
									var n = function() {
											F(e, t), i()
										},
										r = function() {
											i()
										},
										i = function() {
											removeEventListener("pointerup", n, _), removeEventListener("pointercancel", r, _)
										};
									addEventListener("pointerup", n, _), addEventListener("pointercancel", r, _)
								}(t, e) : F(t, e)
							}
						},
						k = function(e) {
							["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
								return e(t, O, _)
							}))
						},
						M = [100, 300],
						N = function(e, r) {
							r = r || {}, P((function() {
								var o, a = C(),
									c = p("FID"),
									u = function(e) {
										e.startTime < a.firstHiddenTime && (c.value = e.processingStart - e.startTime, c.entries.push(e), o(!0))
									},
									s = function(e) {
										e.forEach(u)
									},
									f = m("first-input", s);
								o = g(e, c, M, r.reportAllChanges), f && h(T((function() {
									s(f.takeRecords()), f.disconnect()
								}))), f && l((function() {
									var a;
									c = p("FID"), o = g(e, c, M, r.reportAllChanges), i = [], n = -1, t = null, k(addEventListener), a = u, i.push(a), I()
								}))
							}))
						},
						D = 0,
						V = 1 / 0,
						j = 0,
						q = function(e) {
							e.forEach((function(e) {
								e.interactionId && (V = Math.min(V, e.interactionId), j = Math.max(j, e.interactionId), D = j ? (j - V) / 7 + 1 : 0)
							}))
						},
						H = function() {
							return o ? D : performance.interactionCount || 0
						},
						z = function() {
							"interactionCount" in performance || o || (o = m("event", q, {
								type: "event",
								buffered: !0,
								durationThreshold: 0
							}))
						},
						U = [200, 500],
						J = 0,
						W = function() {
							return H() - J
						},
						Q = [],
						X = {},
						G = function(e) {
							var t = Q[Q.length - 1],
								n = X[e.interactionId];
							if (n || Q.length < 10 || e.duration > t.latency) {
								if (n) n.entries.push(e), n.latency = Math.max(n.latency, e.duration);
								else {
									var r = {
										id: e.interactionId,
										latency: e.duration,
										entries: [e]
									};
									X[r.id] = r, Q.push(r)
								}
								Q.sort((function(e, t) {
									return t.latency - e.latency
								})), Q.splice(10).forEach((function(e) {
									delete X[e.id]
								}))
							}
						},
						K = [2500, 4e3],
						Y = {},
						Z = [800, 1800],
						$ = function e(t) {
							document.prerendering ? P((function() {
								return e(t)
							})) : "complete" !== document.readyState ? addEventListener("load", (function() {
								return e(t)
							}), !0) : setTimeout(t, 0)
						},
						ee = function(e, t) {
							t = t || {};
							var n = p("TTFB"),
								r = g(e, n, Z, t.reportAllChanges);
							$((function() {
								var i = a();
								if (i) {
									var o = i.responseStart;
									if (o <= 0 || o > performance.now()) return;
									n.value = Math.max(o - v(), 0), n.entries = [i], r(!0), l((function() {
										n = p("TTFB", 0), (r = g(e, n, Z, t.reportAllChanges))(!0)
									}))
								}
							}))
						};
					e.CLSThresholds = R, e.FCPThresholds = B, e.FIDThresholds = M, e.INPThresholds = U, e.LCPThresholds = K, e.TTFBThresholds = Z, e.onCLS = function(e, t) {
						! function(e, t) {
							t = t || {}, A(T((function() {
								var n, r = p("CLS", 0),
									i = 0,
									o = [],
									a = function(e) {
										e.forEach((function(e) {
											if (!e.hadRecentInput) {
												var t = o[0],
													n = o[o.length - 1];
												i && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value, o.push(e)) : (i = e.value, o = [e])
											}
										})), i > r.value && (r.value = i, r.entries = o, n())
									},
									c = m("layout-shift", a);
								c && (n = g(e, r, R, t.reportAllChanges), h((function() {
									a(c.takeRecords()), n(!0)
								})), l((function() {
									i = 0, r = p("CLS", 0), n = g(e, r, R, t.reportAllChanges), y((function() {
										return n()
									}))
								})), setTimeout(n, 0))
							})))
						}((function(t) {
							! function(e) {
								if (e.entries.length) {
									var t = e.entries.reduce((function(e, t) {
										return e && e.value > t.value ? e : t
									}));
									if (t && t.sources && t.sources.length) {
										var n = (r = t.sources).find((function(e) {
											return e.node && 1 === e.node.nodeType
										})) || r[0];
										if (n) return void(e.attribution = {
											largestShiftTarget: s(n.node),
											largestShiftTime: t.startTime,
											largestShiftValue: t.value,
											largestShiftSource: n,
											largestShiftEntry: t,
											loadState: c(t.startTime)
										})
									}
								}
								var r;
								e.attribution = {}
							}(t), e(t)
						}), t)
					}, e.onFCP = function(e, t) {
						A((function(t) {
							! function(e) {
								if (e.entries.length) {
									var t = a(),
										n = e.entries[e.entries.length - 1];
									if (t) {
										var r = t.activationStart || 0,
											i = Math.max(0, t.responseStart - r);
										return void(e.attribution = {
											timeToFirstByte: i,
											firstByteToFCP: e.value - i,
											loadState: c(e.entries[0].startTime),
											navigationEntry: t,
											fcpEntry: n
										})
									}
								}
								e.attribution = {
									timeToFirstByte: 0,
									firstByteToFCP: e.value,
									loadState: c(d())
								}
							}(t), e(t)
						}), t)
					}, e.onFID = function(e, t) {
						N((function(t) {
							! function(e) {
								var t = e.entries[0];
								e.attribution = {
									eventTarget: s(t.target),
									eventType: t.name,
									eventTime: t.startTime,
									eventEntry: t,
									loadState: c(t.startTime)
								}
							}(t), e(t)
						}), t)
					}, e.onINP = function(e, t) {
						! function(e, t) {
							t = t || {}, P((function() {
								var n;
								z();
								var r, i = p("INP"),
									o = function(e) {
										e.forEach((function(e) {
											e.interactionId && G(e), "first-input" === e.entryType && !Q.some((function(t) {
												return t.entries.some((function(t) {
													return e.duration === t.duration && e.startTime === t.startTime
												}))
											})) && G(e)
										}));
										var t, n = (t = Math.min(Q.length - 1, Math.floor(W() / 50)), Q[t]);
										n && n.latency !== i.value && (i.value = n.latency, i.entries = n.entries, r())
									},
									a = m("event", o, {
										durationThreshold: null !== (n = t.durationThreshold) && void 0 !== n ? n : 40
									});
								r = g(e, i, U, t.reportAllChanges), a && ("PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && a.observe({
									type: "first-input",
									buffered: !0
								}), h((function() {
									o(a.takeRecords()), i.value < 0 && W() > 0 && (i.value = 0, i.entries = []), r(!0)
								})), l((function() {
									Q = [], J = H(), i = p("INP"), r = g(e, i, U, t.reportAllChanges)
								})))
							}))
						}((function(t) {
							! function(e) {
								if (e.entries.length) {
									var t = e.entries.sort((function(e, t) {
											return t.duration - e.duration || t.processingEnd - t.processingStart - (e.processingEnd - e.processingStart)
										}))[0],
										n = e.entries.find((function(e) {
											return e.target
										}));
									e.attribution = {
										eventTarget: s(n && n.target),
										eventType: t.name,
										eventTime: t.startTime,
										eventEntry: t,
										loadState: c(t.startTime)
									}
								} else e.attribution = {}
							}(t), e(t)
						}), t)
					}, e.onLCP = function(e, t) {
						! function(e, t) {
							t = t || {}, P((function() {
								var n, r = C(),
									i = p("LCP"),
									o = function(e) {
										var t = e[e.length - 1];
										t && t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - v(), 0), i.entries = [t], n())
									},
									a = m("largest-contentful-paint", o);
								if (a) {
									n = g(e, i, K, t.reportAllChanges);
									var c = T((function() {
										Y[i.id] || (o(a.takeRecords()), a.disconnect(), Y[i.id] = !0, n(!0))
									}));
									["keydown", "click"].forEach((function(e) {
										addEventListener(e, (function() {
											return setTimeout(c, 0)
										}), !0)
									})), h(c), l((function(r) {
										i = p("LCP"), n = g(e, i, K, t.reportAllChanges), y((function() {
											i.value = performance.now() - r.timeStamp, Y[i.id] = !0, n(!0)
										}))
									}))
								}
							}))
						}((function(t) {
							! function(e) {
								if (e.entries.length) {
									var t = a();
									if (t) {
										var n = t.activationStart || 0,
											r = e.entries[e.entries.length - 1],
											i = r.url && performance.getEntriesByType("resource").filter((function(e) {
												return e.name === r.url
											}))[0],
											o = Math.max(0, t.responseStart - n),
											c = Math.max(o, i ? (i.requestStart || i.startTime) - n : 0),
											u = Math.max(c, i ? i.responseEnd - n : 0),
											f = Math.max(u, r ? r.startTime - n : 0),
											d = {
												element: s(r.element),
												timeToFirstByte: o,
												resourceLoadDelay: c - o,
												resourceLoadTime: u - c,
												elementRenderDelay: f - u,
												navigationEntry: t,
												lcpEntry: r
											};
										return r.url && (d.url = r.url), i && (d.lcpResourceEntry = i), void(e.attribution = d)
									}
								}
								e.attribution = {
									timeToFirstByte: 0,
									resourceLoadDelay: 0,
									resourceLoadTime: 0,
									elementRenderDelay: e.value
								}
							}(t), e(t)
						}), t)
					}, e.onTTFB = function(e, t) {
						ee((function(t) {
							! function(e) {
								if (e.entries.length) {
									var t = e.entries[0],
										n = t.activationStart || 0,
										r = Math.max(t.domainLookupStart - n, 0),
										i = Math.max(t.connectStart - n, 0),
										o = Math.max(t.requestStart - n, 0);
									e.attribution = {
										waitingTime: r,
										dnsTime: i - r,
										connectionTime: o - i,
										requestTime: e.value - o,
										navigationEntry: t
									}
								} else e.attribution = {
									waitingTime: 0,
									dnsTime: 0,
									connectionTime: 0,
									requestTime: 0
								}
							}(t), e(t)
						}), t)
					}
				}(t)
			}
		},
		t = {};
	! function n(r) {
		var i = t[r];
		if (void 0 !== i) return i.exports;
		var o = t[r] = {
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, n), o.exports
	}(168)
}();