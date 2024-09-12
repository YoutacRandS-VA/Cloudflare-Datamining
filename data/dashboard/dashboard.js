! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e9fde8f2-dd27-5207-9e75-064a6a47ec32")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.js": function(W, E, n) {
			"use strict";
			n.d(E, {
				J8: function() {
					return a
				},
				Jd: function() {
					return i
				},
				QY: function() {
					return f
				},
				Qw: function() {
					return d
				},
				ki: function() {
					return p
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/utils/url.ts"),
				c = n("../node_modules/query-string/query-string.js"),
				m = n.n(c),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				g;
			const d = () => Object.keys(s.Z).reduce((y, S) => (S.indexOf("cf_beta.") === 0 && s.Z.get(S) === "true" && y.push(S.split(".").slice(1).join(".")), y), []),
				p = () => {
					var y, S, P;
					return ((y = window) === null || y === void 0 || (S = y.bootstrap) === null || S === void 0 || (P = S.data) === null || P === void 0 ? void 0 : P.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((g = window) === null || g === void 0 ? void 0 : g.location) && s.Z) {
				const y = m().parse(window.location.search);
				y.beta_on && s.Z.set(`cf_beta.${y.beta_on}`, !0), y.beta_off && s.Z.set(`cf_beta.${y.beta_off}`, !1)
			}
			const _ = {},
				t = y => {
					var S, P, T;
					return Object.prototype.hasOwnProperty.call(_, y) ? _[y] : ((S = window) === null || S === void 0 || (P = S.bootstrap) === null || P === void 0 || (T = P.data) === null || T === void 0 ? void 0 : T.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(R => R === y) ? (_[y] = !0, !0) : (_[y] = !1, !1)
				},
				r = y => s.Z ? s.Z.get(`cf_beta.${y}`) === !0 : !1,
				a = y => r(y) || t(y),
				l = () => !0,
				i = () => {
					var y, S, P;
					return ((y = window) === null || y === void 0 || (S = y.bootstrap) === null || S === void 0 || (P = S.data) === null || P === void 0 ? void 0 : P.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				f = y => {
					const S = (0, e.uF)(y),
						P = (S == null ? void 0 : S.roles) || [];
					return (0, o.qR)(location.pathname) && P.length === 1 && P.some(T => T === "Administrator Read Only")
				}
		},
		"../init.ts": function(W, E, n) {
			"use strict";
			n.r(E);
			var e = n("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = n("../../../../node_modules/url-search-params-polyfill/index.js"),
				c = n("../libs/init/initGlobal.ts"),
				m = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				s = n("../../../../node_modules/fetch-intercept/lib/browser.js");

			function g(h) {
				for (var L = 1; L < arguments.length; L++) {
					var H = arguments[L] != null ? Object(arguments[L]) : {},
						oe = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(H).filter(function(le) {
						return Object.getOwnPropertyDescriptor(H, le).enumerable
					})), oe.forEach(function(le) {
						d(h, le, H[le])
					})
				}
				return h
			}

			function d(h, L, H) {
				return L = p(L), L in h ? Object.defineProperty(h, L, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[L] = H, h
			}

			function p(h) {
				var L = _(h, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function _(h, L) {
				if (typeof h != "object" || h === null) return h;
				var H = h[Symbol.toPrimitive];
				if (H !== void 0) {
					var oe = H.call(h, L || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(h)
			}
			const t = h => {
				const L = h && h.headers || {},
					H = new Headers(L);
				return H.append("X-Cross-Site-Security", "dash"), g({}, h, {
					headers: H
				})
			};
			(0, s.register)({
				request: (h, L) => {
					try {
						return new URL(h), h === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", L] : [h, L]
					} catch {
						return [h, t(L)]
					}
				}
			});
			var r = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				a = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = n("../react/app/providers/storeContainer.js");
			let i = "";
			const f = 61;

			function y(h) {
				const L = h.substr(1);
				if (L && i !== L) {
					const H = document.getElementById(L);
					if (H) {
						const oe = H.getBoundingClientRect().top;
						if (oe > 0) {
							const le = oe - f;
							document.documentElement.scrollTop = le
						}
					}
				}
				i = L
			}

			function S(h) {
				h.listen(L => y(L.hash))
			}
			var P = n("../../../../node_modules/cookie/index.js"),
				T = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const R = "CF_dash_version",
				D = "current",
				C = "hash",
				q = "deploymentPreview",
				ee = h => h === D ? X() : Y(),
				X = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				Y = (h = 72) => {
					const L = 36e5;
					return new Date(Date.now() + h * L)
				},
				K = h => {
					switch (h) {
						case 429:
							return {
								title: "Rate Limit Exceeded", description: 'This IP address has been rate limited. Please wait one minute and then <a href="">reload this page</a> to try again. If the issue persists, please visit the <a href="https://cloudflarestatus.com">Cloudflare Status page</a> for up-to-date information regarding any ongoing issues.'
							};
						case 503:
							return {
								title: "The Cloudflare Dashboard is temporarily under maintenance.", description: 'Please visit the <a href="https://www.cloudflarestatus.com/incidents/5xxwjqd2lwgp">Cloudflare Status page</a> for up-to-date information regarding the maintenance.'
							};
						default:
							return {
								title: "The Cloudflare Dashboard is temporarily unavailable.", description: 'Please <a href="">reload this page</a> to try again. If the issue persists, please visit the <a href="https://cloudflarestatus.com">Cloudflare Status page</a> for up-to-date information regarding any ongoing issues.'
							}
					}
				},
				B = (h, L = !1) => {
					var H;
					const oe = K(h),
						le = `
  <style type="text/css">
    #loading-state {
      display: flex;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
    }
    .dark-mode body {
      background-color: #1d1d1d;
      color: #d9d9d9;
    }
    .error-container {
      line-height: 1.5;
      font-size: 20px;
      padding: 32px;
    }
    .error-container a {
      color: inherit;
      text-decoration: underline;
    }
    .error-container h1 {
      line-height: 1.5;
      font-size: inherit;
      font-weight: 600;
      margin: 0 auto 16px;
    }
    .error-container p {
      margin: 0;
      max-width: 37.5rem;
    }
    .error-container svg {
      width: 128px;
      margin-bottom: 16px;
    }
  </style>
  <div class="error-container">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1230.574 519.774" xml:space="preserve">
      <path fill="#F78100" d="M784.025,512.011l5.872-20.311c6.998-24.169,4.394-46.511-7.349-62.926c-10.801-15.122-28.804-24.022-50.666-25.056l-414.114-5.281c-2.788-0.147-5.096-1.403-6.518-3.471c-1.44-2.123-1.773-4.856-0.886-7.478c1.366-4.08,5.41-7.164,9.62-7.349l417.954-5.299c49.576-2.271,103.252-42.505,122.048-91.564l23.837-62.28c0.657-1.696,0.952-3.493,0.94-5.294c-0.007-0.984-0.078-1.969-0.294-2.94C857.383,91.028,748.758,0,618.863,0c-119.685,0-221.312,77.254-257.76,184.623c-23.523-17.652-53.62-27.031-85.969-23.801c-57.423,5.706-103.565,51.94-109.271,109.363c-1.496,14.901-0.277,29.284,3.158,42.8C75.222,315.718,0,392.566,0,487.029c0,8.549,0.646,16.95,1.846,25.166c0.591,3.988,3.952,6.98,7.977,6.98l764.527,0.092c0.076,0,0.142-0.034,0.218-0.036C778.942,519.134,782.79,516.24,784.025,512.011z"/>
      <path fill="#FBAC42" d="M921.982,225.558c-3.841,0-7.663,0.111-11.466,0.295c-0.628,0.033-1.224,0.185-1.796,0.385c-1.985,0.696-3.566,2.305-4.168,4.397l-16.286,56.242c-6.998,24.169-4.395,46.493,7.349,62.907c10.801,15.14,28.804,24.022,50.665,25.056l88.277,5.299c2.604,0.129,4.893,1.385,6.297,3.416c1.477,2.142,1.809,4.893,0.923,7.515c-1.385,4.081-5.41,7.164-9.601,7.349l-91.73,5.299c-49.798,2.29-103.473,42.505-122.27,91.564l-6.629,17.319c-1.206,3.134,1.039,6.472,4.354,6.635c0.084,0.004,0.159,0.031,0.244,0.031h315.626c3.766,0,7.127-2.456,8.142-6.075c5.484-19.498,8.402-40.048,8.402-61.301C1148.315,326.889,1046.984,225.558,921.982,225.558z"/>
    </svg>
    <h1 id="error-title">${oe.title}</h1>
    <p id="error-description">${oe.description}</p>
  </div>
  `,
						be = L ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${T.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(H=window.build)===null||H===void 0?void 0:H.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return le + be
				},
				$ = h => {
					var L;
					const H = document.getElementById(h);
					!H || (L = H.parentNode) === null || L === void 0 || L.removeChild(H)
				};

			function J() {
				const h = document.getElementById("loading-state");
				h == null || h.classList.add("hide"), h == null || h.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach($)
				})
			}

			function Q(h) {
				var L;
				const H = document.getElementById("loading-state"),
					oe = !!((L = P.parse(document.cookie)) === null || L === void 0 ? void 0 : L[R]);
				!H || (H.innerHTML = B(h == null ? void 0 : h.code, oe))
			}
			var Z = n("../utils/initStyles.ts"),
				se = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				z = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				fe = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				j = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				I = n("../../../../node_modules/history/esm/history.js"),
				G = (0, I.lX)(),
				ae = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				M = n("../react/utils/url.ts");
			const v = (0, ae.Rf)();
			let O;

			function b(h) {
				return F(h, "react-router-v5")
			}

			function F(h, L) {
				return (H, oe = !0, le = !0) => {
					oe && v && v.location && (O = H({
						name: (0, M.Fl)(v.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": L
						}
					})), le && h.listen && h.listen((be, ve) => {
						if (ve && (ve === "PUSH" || ve === "POP")) {
							O && O.finish();
							const Ue = {
								"routing.instrumentation": L
							};
							O = H({
								name: (0, M.Fl)(be.pathname),
								op: "navigation",
								tags: Ue
							})
						}
					})
				}
			}
			var x = n("../react/common/selectors/languagePreferenceSelector.ts"),
				ce = n("../flags.js"),
				ge = n("../utils/getDashVersion.ts"),
				Oe = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				Ae = n.n(Oe),
				Re = n("../../../common/intl/intl-core/src/errors.ts"),
				N = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				de = n("../react/common/middleware/sparrow/errors.ts");
			const Te = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				Be = !0,
				Ke = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				He = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function Ze(h, L, H) {
				return L = Ve(L), L in h ? Object.defineProperty(h, L, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[L] = H, h
			}

			function Ve(h) {
				var L = Ye(h, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function Ye(h, L) {
				if (typeof h != "object" || h === null) return h;
				var H = h[Symbol.toPrimitive];
				if (H !== void 0) {
					var oe = H.call(h, L || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(h)
			}
			class je {
				constructor() {
					Ze(this, "name", je.id)
				}
				setupOnce() {
					n.g.console && (0, N.hl)(n.g.console, "error", L => (...H) => {
						const oe = H.find(le => le instanceof Error);
						if (Te && oe) {
							let le, be = !0;
							if (oe instanceof de.ez) {
								const ve = oe instanceof de.oV ? oe.invalidProperties : void 0;
								le = {
									tags: {
										"sparrow.eventName": oe.eventName
									},
									extra: {
										sparrow: {
											eventName: oe.eventName,
											invalidProperties: ve
										}
									},
									fingerprint: [oe.name ? oe.name : "SparrowValidationError"]
								}, be = !1
							} else if (oe instanceof Oe.SparrowIdCookieError) le = {
								extra: {
									sparrowIdCookie: oe.cookie
								},
								fingerprint: [oe.name ? oe.name : "SparrowIdCookieError"]
							};
							else if (oe.name === "ChunkLoadError") {
								le = {
									fingerprint: [oe.name]
								};
								try {
									le.tags = {
										chunkId: oe.message.split(" ")[2],
										chunkUrl: oe.request
									}
								} catch {}
							} else oe instanceof Re.YB && (le = {
								fingerprint: ["TranslatorError", oe.translationKey]
							});
							be && r.Tb(oe, le)
						}
						typeof L == "function" && L.apply(n.g.console, H)
					})
				}
			}
			Ze(je, "id", "ConsoleErrorIntegration");
			var qe = null,
				Qe = n("../utils/sentry/lastSentEventId.ts"),
				et = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				We = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const tt = h => {
					const L = async H => {
						var oe, le;
						const be = {
							envelope: H.body,
							url: h.url,
							isPreviewDeploy: (oe = window) === null || oe === void 0 || (le = oe.build) === null || le === void 0 ? void 0 : le.isPreviewDeploy,
							release: (0, ge.t)()
						};
						try {
							const ve = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(be)
							});
							return {
								statusCode: ve.status,
								headers: {
									"x-sentry-rate-limits": ve.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": ve.headers.get("Retry-After")
								}
							}
						} catch (ve) {
							return console.log(ve), (0, We.$2)(ve)
						}
					};
					return et.q(h, L)
				},
				Xe = () => {
					if (Te && Be) {
						var h, L, H, oe, le, be, ve, Ue, ot, rt;
						let _t = "production";
						((h = window) === null || h === void 0 || (L = h.build) === null || L === void 0 ? void 0 : L.isPreviewDeploy) && (_t += "-preview"), z.S({
							dsn: Te,
							release: (0, ge.t)(),
							environment: _t,
							ignoreErrors: He,
							allowUrls: Ke,
							autoSessionTracking: !1,
							integrations: [new fe.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new je, new j.jK.BrowserTracing({
								routingInstrumentation: b(G)
							})],
							tracesSampleRate: 0,
							transport: tt,
							beforeSend: Nt => (Qe.e.setEventId(Nt.event_id), Nt)
						});
						const xt = (0, l.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, ce.Qw)(),
							USER_BETA_FLAGS: (0, ce.ki)(),
							meta: {
								connection: {
									type: (H = window) === null || H === void 0 || (oe = H.navigator) === null || oe === void 0 || (le = oe.connection) === null || le === void 0 ? void 0 : le.effectiveType,
									bandwidth: (be = window) === null || be === void 0 || (ve = be.navigator) === null || ve === void 0 || (Ue = ve.connection) === null || Ue === void 0 ? void 0 : Ue.downlink
								},
								languagePreference: (0, x.r)(xt),
								isPreviewDeploy: (ot = window) === null || ot === void 0 || (rt = ot.build) === null || rt === void 0 ? void 0 : rt.isPreviewDeploy
							},
							utilGates: (0, se.T2)(xt)
						}), window.addEventListener("unhandledrejection", function(Nt) {})
					}
				},
				ze = h => {
					h ? r.av({
						id: h
					}) : r.av(null)
				};
			var w = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				V = () => {
					let h;
					try {
						h = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), h = window.location.search
					}
					if (!h.includes("remote[")) return;
					const L = new URLSearchParams(h),
						H = {};
					for (let [oe, le] of L) oe.includes("remote") && (H[oe.replace(/remote\[|\]/g, "")] = le);
					w.Z.set("mfe-remotes", JSON.stringify(H))
				},
				re = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				pe = n("../node_modules/uuid/dist/esm-browser/v4.js");
			const me = "ANON_USER_ID";

			function _e() {
				var h, L, H, oe;
				let le = (h = n.g) === null || h === void 0 || (L = h.bootstrap) === null || L === void 0 || (H = L.data) === null || H === void 0 || (oe = H.user) === null || oe === void 0 ? void 0 : oe.id;
				if (!le) {
					let be = w.Z.get(me);
					if (!be) {
						let ve = (0, pe.Z)();
						w.Z.set(me, ve), be = ve
					}
					return be
				}
				return le
			}
			async function we() {
				const h = (0, l.bh)();
				h.dispatch((0, re.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await h.dispatch((0, se.UL)({
					userId: _e()
				}))
			}
			var xe = n("../libs/init/initBootstrap.ts"),
				Ie = n("webpack/sharing/consume/default/react/react"),
				Ee = n.n(Ie),
				Le = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				ct = n("webpack/sharing/consume/default/react-dom/react-dom"),
				Se = n("webpack/sharing/consume/default/react-redux/react-redux"),
				Fe = n("../../../../node_modules/swr/core/dist/index.mjs"),
				ke = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				vt = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				k = n("../react/shims/focus-visible.js"),
				ne = n("../react/app/components/DeepLink/index.ts"),
				ue = n("../../../../node_modules/prop-types/index.js"),
				ye = n.n(ue),
				Pe = n("../react/utils/translator.tsx"),
				Ne = n("../../../common/intl/intl-react/src/index.ts"),
				Ce = n("../../../dash/intl/intl-translations/src/index.ts"),
				ht = n("../node_modules/query-string/query-string.js"),
				at = n.n(ht),
				St = n("../react/common/actions/userActions.ts"),
				lt = n("../react/common/selectors/userSelectors.ts"),
				nt = n("../react/utils/i18n.ts"),
				Ct = n("../react/utils/bootstrap.ts");

			function it(h) {
				for (var L = 1; L < arguments.length; L++) {
					var H = arguments[L] != null ? Object(arguments[L]) : {},
						oe = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(H).filter(function(le) {
						return Object.getOwnPropertyDescriptor(H, le).enumerable
					})), oe.forEach(function(le) {
						Dt(h, le, H[le])
					})
				}
				return h
			}

			function Dt(h, L, H) {
				return L = Lt(L), L in h ? Object.defineProperty(h, L, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[L] = H, h
			}

			function Lt(h) {
				var L = wt(h, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function wt(h, L) {
				if (typeof h != "object" || h === null) return h;
				var H = h[Symbol.toPrimitive];
				if (H !== void 0) {
					var oe = H.call(h, L || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(h)
			}
			let $e = at().parse(location.search);
			const bt = h => {
					const L = (0, Ct.$8)() ? [(0, Ce.Fy)(Ce.if.changes), (0, Ce.Fy)(Ce.if.common), (0, Ce.Fy)(Ce.if.navigation), (0, Ce.Fy)(Ce.if.overview), (0, Ce.Fy)(Ce.if.onboarding), (0, Ce.Fy)(Ce.if.invite), (0, Ce.Fy)(Ce.if.login), (0, Ce.Fy)(Ce.if.dns), (0, Ce.Fy)(Ce.n4.ssl_tls), (0, Ce.Fy)(Ce.if.message_inbox)] : [(0, Ce.Fy)(Ce.if.common), (0, Ce.Fy)(Ce.if.invite), (0, Ce.Fy)(Ce.if.login), (0, Ce.Fy)(Ce.if.onboarding)];
					$e.lang ? kt(h) : w.Z.get(nt.th) && Tt(h, w.Z.get(nt.ly));
					const H = async oe => (await Promise.all(L.map(be => be(oe)))).reduce((be, ve) => it({}, be, ve), {});
					return Ee().createElement(Ne.RD.Provider, {
						value: h.languagePreference
					}, Ee().createElement(Ne.bd, {
						translator: Pe.Vb,
						locale: h.languagePreference
					}, Ee().createElement(Ne.lm, {
						loadPhrases: H
					}, h.children)))
				},
				kt = async h => {
					let L = $e.lang.substring(0, $e.lang.length - 2) + $e.lang.substring($e.lang.length - 2, $e.lang.length).toUpperCase();
					if (!(0, x.v)(L)) {
						console.warn(`${L} is not a supported locale.`), delete $e.lang, h.history.replace({
							search: at().stringify($e)
						});
						return
					}
					w.Z.set(nt.ly, L), delete $e.lang, Tt(h, L), h.isAuthenticated || h.history.replace({
						search: at().stringify($e)
					})
				}, Tt = async (h, L) => {
					if (h.isAuthenticated) try {
						await h.setUserCommPreferences({
							"language-locale": L
						}, {
							hideErrorAlert: !0
						}), w.Z.remove(nt.th), h.history.replace({
							search: at().stringify($e)
						})
					} catch (H) {
						w.Z.set(nt.th, !0), console.error(H)
					} else w.Z.set(nt.th, !0)
				}, Pt = h => {
					const L = (0, lt.PR)(h);
					return {
						isAuthenticated: !!(L && L.id),
						languagePreference: w.Z.get(nt.ly) || (0, x.r)(h)
					}
				}, Mt = {
					setUserCommPreferences: St.V_
				};
			var u = (0, Le.withRouter)((0, Se.connect)(Pt, Mt)(bt));
			bt.propTypes = {
				history: ye().object,
				languagePreference: ye().string.isRequired,
				children: ye().node.isRequired,
				isAuthenticated: ye().bool,
				setUserCommPreferences: ye().func.isRequired
			};
			var A = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				ie = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let he;
			const De = ({
				selectorPrefix: h = "c_"
			} = {}) => (he || (he = (0, ie.Z)({
				dev: !1,
				selectorPrefix: h
			})), he);
			var Je = n("../react/common/components/ModalManager.tsx"),
				pt = n("../react/app/components/ErrorBoundary.tsx"),
				mt = n("../react/common/actions/notificationsActions.ts");
			const ut = (n.g.bootstrap || {}).data || {};
			class dt extends Ee().Component {
				componentDidMount() {
					ut.messages && this.dispatchNotificationActions(ut.messages)
				}
				dispatchNotificationActions(L) {
					L.forEach(H => {
						const {
							type: oe,
							message: le,
							persist: be
						} = H;
						["success", "info", "warn", "error"].includes(oe) && this.props.notifyAdd(oe, (0, Pe.ZP)(le), {
							persist: !!be
						})
					})
				}
				render() {
					return null
				}
			}
			var gt = (0, Le.withRouter)((0, Se.connect)(null, {
				notifyAdd: mt.IH
			})(dt));
			dt.propTypes = {
				notifyAdd: ye().func.isRequired
			};
			var Ge = n("../react/app/redux/index.ts");

			function ft() {
				var h;
				const L = (0, Ge.p4)(lt.PR),
					H = (L == null || (h = L.email) === null || h === void 0 ? void 0 : h.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					oe = (0, re.Yc)();
				(0, Ie.useEffect)(() => {
					oe({
						userType: H
					})
				}, [H, oe])
			}
			var Me = n("../react/common/selectors/entitlementsSelectors.ts"),
				Et = n("../react/common/selectors/accountSelectors.ts");
			const $t = ["accountId", "is_ent"];

			function Wt() {
				const h = (0, re.f7)(),
					L = (0, Le.useHistory)(),
					H = (0, M.uW)(L.location.pathname),
					oe = (0, re.Yc)(),
					le = (0, re.O$)(),
					be = (0, Ge.p4)(Me.u1),
					ve = !be.isRequesting && !!be.data,
					Ue = (0, Ge.p4)(Me.p1),
					ot = (0, Ge.p4)(Et.Xu),
					rt = (0, Ge.p4)(Et.uF),
					_t = !ot.isRequesting && !!ot.data;
				(0, Ie.useEffect)(() => {
					H && _t && rt && ve && H === rt.account.id ? oe({
						accountId: rt.account.id,
						is_ent: Ue
					}) : (!H || H in h && h.accountId !== H) && le($t)
				}, [_t, rt, oe, le, ve, Ue, H, h])
			}
			var zt = n("../react/common/selectors/zoneSelectors.ts");

			function Gt() {
				const h = (0, Ge.p4)(zt.nA),
					L = (0, re.Yc)();
				(0, Ie.useEffect)(() => {
					var H;
					L({
						zone_id: h == null ? void 0 : h.id,
						zone_plan: h == null || (H = h.plan) === null || H === void 0 ? void 0 : H.legacy_id
					})
				}, [h, L])
			}
			const Kt = () => (ft(), Wt(), Gt(), null);
			var Ht = n("../react/app/components/Persistence/index.tsx"),
				Zt = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				Vt = n("../react/app/components/LoadingSuspense.tsx");
			const Yt = Ee().lazy(() => Promise.all([n.e(44459), n.e(2480), n.e(10008), n.e(22419), n.e(39115), n.e(94012), n.e(72019), n.e(14654), n.e(5668), n.e(60091), n.e(89263), n.e(39760), n.e(94923), n.e(60734), n.e(40758), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var Qt = () => Ee().createElement(Vt.Z, null, Ee().createElement(Yt, null));
			const Xt = () => (Ie.useEffect(() => J, []), null);
			var Jt = n("../../../../node_modules/moment/moment.js"),
				Bt = n.n(Jt);
			const qt = h => {
					switch (h) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return h.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return h.toLowerCase();
						default:
							return "en"
					}
				},
				en = () => {
					const h = (0, Ge.p4)(x.r);
					(0, Ie.useEffect)(() => {
						const L = qt(h);
						L !== Bt().locale() && Bt().locale(L), document.documentElement.lang = h
					}, [h])
				},
				tn = () => {
					(0, Ie.useEffect)(() => {
						async function h() {
							var L, H;
							let oe;
							if (((L = window) === null || L === void 0 || (H = L.build) === null || H === void 0 ? void 0 : H.isPreviewDeploy) && (oe = "cookie"), !!oe) try {
								const le = document.head.querySelector("link[rel=icon]");
								le && (le.href = (await n("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${oe}.ico`)).default)
							} catch {}
						}
						h()
					}, [])
				};
			var nn = n("../react/common/constants/constants.ts");
			const on = () => {
					var h;
					const L = (0, Le.useLocation)(),
						[H, oe] = (0, Ie.useState)(((h = window) === null || h === void 0 ? void 0 : h.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Ie.useEffect)(() => {
						const le = at().parse(L.search);
						if (le.pt && w.Z.set(nn.sJ, le.pt), le == null ? void 0 : le.devPanel) {
							var be, ve;
							(be = window) === null || be === void 0 || (ve = be.localStorage) === null || ve === void 0 || ve.setItem("gates_devtools_ui_gates_controller_enabled", "true"), oe(!0)
						}
					}, [L.search]), {
						devPanelEnabled: H
					}
				},
				rn = Ee().lazy(() => Promise.all([n.e(44459), n.e(2480), n.e(10008), n.e(22419), n.e(39115), n.e(94012), n.e(72019), n.e(14654), n.e(14696), n.e(41386), n.e(60091), n.e(89263), n.e(39760), n.e(94923), n.e(60734), n.e(40758), n.e(38950), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				an = Ee().lazy(() => Promise.all([n.e(83741), n.e(65447), n.e(44459), n.e(39115), n.e(14696), n.e(26337), n.e(60091), n.e(60734), n.e(69088), n.e(38950), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var sn = ({
					userIsAuthed: h
				}) => {
					en(), tn();
					const {
						devPanelEnabled: L
					} = on();
					return Ee().createElement(Ie.Suspense, {
						fallback: Ee().createElement(Xt, null)
					}, Ee().createElement(Le.Switch, null, !h && !0 && Ee().createElement(Le.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Ee().createElement(an, null)), Ee().createElement(Le.Route, {
						render: () => Ee().createElement(Zt.ZC, {
							minHeight: "100vh"
						}, Ee().createElement(rn, null))
					})), L && Ee().createElement(Qt, null))
				},
				Rt = n("../../../../node_modules/yup/es/index.js"),
				cn = n("../../../common/util/types/src/utils/index.ts");
			const jt = {
				cfEmail: () => Rt.Z_().email((0, Pe.ZP)("common.validation.email")).required((0, Pe.ZP)("common.validation.email"))
			};
			(0, cn.Yd)(jt).forEach(h => {
				Rt.kM(Rt.Z_, h, jt[h])
			});
			const Ft = Ee().lazy(() => Promise.all([n.e(6368), n.e(10008), n.e(94012), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				ln = () => {
					const h = (0, Ct.$8)(),
						[L, H] = (0, Ie.useState)(h ? Ft : Ee().Fragment),
						[oe, le] = (0, Ie.useState)((0, T.Yc)());
					(0, Ie.useEffect)(() => {
						(0, T.fF)(() => le((0, T.Yc)()))
					}, []);
					const be = ve => {
						le(ve), (0, T.C8)(ve)
					};
					return (0, Ie.useEffect)(() => {
						H(h ? Ft : Ee().Fragment)
					}, [h]), (0, Ie.useEffect)(() => {
						const ve = () => be(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", ve), () => {
							window.removeEventListener("storage", ve)
						}
					}, []), Ee().createElement(Ie.Suspense, {
						fallback: null
					}, Ee().createElement(Se.Provider, {
						store: (0, l.bh)()
					}, Ee().createElement(Le.Router, {
						history: G
					}, Ee().createElement(L, null, Ee().createElement(A.Z, {
						renderer: De()
					}, Ee().createElement(u, null, Ee().createElement(pt.Z, {
						sentryTag: "Root"
					}, Ee().createElement(Fe.J$, {
						value: {
							fetcher: ve => fetch(ve).then(Ue => Ue.json())
						}
					}, Ee().createElement(Kt, null), Ee().createElement(gt, null), Ee().createElement(Ht.Z_, {
						onDarkModeChangeCb: be
					}, Ee().createElement(ne.ZP, null, Ee().createElement(sn, {
						userIsAuthed: h
					}))), Ee().createElement(Je.ZP, null), Ee().createElement(ke.F0, null)))))))))
				},
				un = () => {
					(0, ct.render)(Ee().createElement(ln, null), document.getElementById("react-app"))
				};
			var st = n("../utils/initSparrow.ts"),
				yt = n("../utils/zaraz.ts");
			const dn = () => {
					const h = (0, lt.PR)((0, l.bh)().getState());
					pn(), (0, st.Ug)(), (0, yt.bM)(), (h == null ? void 0 : h.id) && Ae().setUserId(h == null ? void 0 : h.id), (0, st.yV)(), !(0, st.Wi)() && (0, st.IM)(), h ? (0, yt.yn)(h) : (0, yt.Ro)()
				},
				pn = () => {
					var h, L;
					(h = window) === null || h === void 0 || (L = h.OneTrust) === null || L === void 0 || L.OnConsentChanged(() => {
						const H = (0, lt.PR)((0, l.bh)().getState());
						(0, st.Wi)() ? (Ae().setEnabled(!0), (H == null ? void 0 : H.id) ? (Ae().setUserId(H.id), (0, yt.yn)(H)) : (0, yt.Ro)(), (0, st.yV)()) : (Ae().setEnabled(!1), (0, st.IM)())
					})
				};

			function mn(h) {
				for (var L = 1; L < arguments.length; L++) {
					var H = arguments[L] != null ? Object(arguments[L]) : {},
						oe = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(H).filter(function(le) {
						return Object.getOwnPropertyDescriptor(H, le).enumerable
					})), oe.forEach(function(le) {
						gn(h, le, H[le])
					})
				}
				return h
			}

			function gn(h, L, H) {
				return L = fn(L), L in h ? Object.defineProperty(h, L, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[L] = H, h
			}

			function fn(h) {
				var L = En(h, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function En(h, L) {
				if (typeof h != "object" || h === null) return h;
				var H = h[Symbol.toPrimitive];
				if (H !== void 0) {
					var oe = H.call(h, L || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(h)
			}
			const yn = "init",
				Ut = (h, L) => {
					r.$e(function(H) {
						H.setTag(yn, L), r.Tb(h)
					}), Q(h)
				},
				It = async (h, L) => {
					try {
						return await h(), !0
					} catch (H) {
						return Ut(H, L), !1
					}
				};
			(async () => {
				try {
					var h, L, H;
					n.g.build = mn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "f121b330409cf4bffc0ea17a1db50304e469efc3",
						dashVersion: "27125479",
						env: "production",
						builtAt: 1726171887909,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, ge.p)()
					}), Xe();
					const oe = [{
						fn: () => n.e(27560).then(n.bind(n, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => S(G),
						tag: "hashScroll"
					}, {
						fn: Z.Z,
						tag: "styles"
					}, {
						fn: V,
						tag: "mfePreviewData"
					}];
					for (const ot of oe)
						if (!await It(ot.fn, ot.tag)) return;
					let le;
					if (!await It(async () => {
							le = await (0, xe.k)()
						}, "bootstrap")) return;
					const be = (0, l.bh)(),
						ve = ((h = le) === null || h === void 0 ? void 0 : h.data) || {};
					be.dispatch((0, a.mW)("user", ve == null ? void 0 : ve.user));
					const Ue = (L = le) === null || L === void 0 || (H = L.data) === null || H === void 0 ? void 0 : H.user;
					return n.g.bootstrap = le, Ue && Ue.id && ze(Ue.id), !await It(we, "gates") || !await It(dn, "tracking") ? void 0 : un()
				} catch (oe) {
					Ut(oe, "global")
				}
			})()
		},
		"../libs/init/initBootstrap.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				k: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/@sentry/core/esm/exports.js");
			class o extends Error {
				constructor(g, d) {
					super(d);
					this.name = `${g} ${d}`
				}
			}
			const c = () => {
					document.cookie.split(";").forEach(g => {
						const [d] = g.trim().split("=");
						document.cookie = `${d}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				m = async () => {
					let s = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!s.ok) throw s.headers.get("content-type") === "text/html" && (await s.text()).toLowerCase().includes("cookie too large") && (e.$e(function(_) {
						_.setTag("init", "cookieTooLarge"), e.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), c(), window.location.reload()), new o("Bootstrap API Failure", s == null ? void 0 : s.status);
					return (await s.json()).result.data
				}
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../react/app/redux/index.ts"),
				m = n("../react/common/selectors/userSelectors.ts"),
				s = n("../react/common/selectors/zoneSelectors.ts"),
				g = n("../react/common/selectors/accountSelectors.ts"),
				d = n("../react/common/utils/isGuards.ts"),
				p = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				_ = n.n(p);

			function t() {
				return t = Object.assign ? Object.assign.bind() : function(l) {
					for (var i = 1; i < arguments.length; i++) {
						var f = arguments[i];
						for (var y in f) Object.prototype.hasOwnProperty.call(f, y) && (l[y] = f[y])
					}
					return l
				}, t.apply(this, arguments)
			}
			const r = l => {
				function i(f) {
					const y = (0, c.UM)(),
						S = (0, p.useHistory)(),
						P = (0, p.useLocation)(),
						T = (0, p.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						R = (0, c.p4)(m.PR) || null,
						D = (0, c.p4)(s.nA) || null,
						C = (0, c.p4)(g.uF),
						q = C ? C.account : null;
					if (!T) return null;
					const {
						accountId: ee,
						app: X,
						tab: Y
					} = T.params, K = T.params.zoneName && ((0, d.v5)(T.params.zoneName) || T.params.zoneName.indexOf(".") > 0) ? T.params.zoneName : void 0;
					return o().createElement(l, t({
						dispatch: y,
						history: S,
						location: P,
						match: T,
						user: R,
						membership: ee ? C : null,
						account: ee ? q : null,
						accountId: ee || null,
						zone: K ? D : null,
						zoneName: K || null,
						app: K ? X : null,
						tab: K ? Y : null
					}, f))
				}
				return i.displayName = `withEntities(${a(l)})`, i
			};

			function a(l) {
				return l.displayName || l.name || "Component"
			}
			E.Z = r
		},
		"../react/app/components/DeepLink/actions.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				BQ: function() {
					return p
				},
				Bh: function() {
					return g
				},
				CM: function() {
					return _
				},
				MF: function() {
					return o
				},
				TS: function() {
					return a
				},
				WF: function() {
					return s
				},
				Wz: function() {
					return t
				},
				bk: function() {
					return d
				},
				fj: function() {
					return r
				},
				r4: function() {
					return m
				},
				zq: function() {
					return c
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js");
			const o = {
					ADD_SITE: "deepLink/ADD_SITE",
					RESOLVING_START: "deepLink/RESOLVING_START",
					RESOLVING_COMPLETE: "deepLink/RESOLVING_COMPLETE",
					SELECT_ZONE: "SELECT_ZONE",
					SELECT_ACCOUNT: "SELECT_ACCOUNT",
					SELECT_PAGES_PROJECT: "SELECT_PAGES_PROJECT",
					SELECT_PAGES_DEPLOYMENT: "SELECT_PAGES_DEPLOYMENT",
					SET_FILTERED_ACCOUNT_IDS: "deepLink/SET_FILTERED_ACCOUNT_IDS",
					DELETE_FILTERED_ACCOUNT_IDS: "deepLink/DELETE_FILTERED_ACCOUNT_IDS",
					SELECT_WORKER: "deepLink/SELECT_WORKER"
				},
				c = (0, e.R)(o.ADD_SITE, l => ({
					payload: l
				})),
				m = (0, e.R)(o.RESOLVING_START),
				s = (0, e.R)(o.RESOLVING_COMPLETE),
				g = (0, e.R)(o.SELECT_ZONE, l => ({
					payload: l
				})),
				d = (0, e.R)(o.SELECT_ACCOUNT, l => ({
					payload: l
				})),
				p = (0, e.R)(o.SELECT_PAGES_PROJECT, l => ({
					payload: l
				})),
				_ = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, l => ({
					payload: l
				})),
				t = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, l => ({
					accountIds: l
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				a = (0, e.R)(o.SELECT_WORKER, l => ({
					payload: l
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				BV: function() {
					return e
				},
				Dz: function() {
					return p
				},
				Fj: function() {
					return m
				},
				Kt: function() {
					return s
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return _
				},
				dB: function() {
					return c
				},
				s$: function() {
					return g
				}
			});
			const e = "to",
				o = "_gl",
				c = "freeTrial",
				m = "deepLinkQueryParams",
				s = "add",
				g = "multiSkuProducts",
				d = "/:account/billing/checkout",
				p = "/:account/:zone/billing/checkout",
				_ = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				ZP: function() {
					return Y
				},
				U: function() {
					return d.U
				},
				dd: function() {
					return d.dd
				},
				bk: function() {
					return g.bk
				},
				Bh: function() {
					return g.Bh
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n("../react/app/redux/index.ts"),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				m = n("../react/app/components/DeepLink/utils.ts"),
				s = n("../react/utils/bootstrap.ts"),
				g = n("../react/app/components/DeepLink/actions.ts"),
				d = n("../react/app/components/DeepLink/selectors.ts"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				_ = n.n(p);

			function t(K) {
				for (var B = 1; B < arguments.length; B++) {
					var $ = arguments[B] != null ? Object(arguments[B]) : {},
						J = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && J.push.apply(J, Object.getOwnPropertySymbols($).filter(function(Q) {
						return Object.getOwnPropertyDescriptor($, Q).enumerable
					})), J.forEach(function(Q) {
						r(K, Q, $[Q])
					})
				}
				return K
			}

			function r(K, B, $) {
				return B = a(B), B in K ? Object.defineProperty(K, B, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[B] = $, K
			}

			function a(K) {
				var B = l(K, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function l(K, B) {
				if (typeof K != "object" || K === null) return K;
				var $ = K[Symbol.toPrimitive];
				if ($ !== void 0) {
					var J = $.call(K, B || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(K)
			}
			class i {
				constructor(B, $) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", J => {
						this.resolvers.set(J, {
							name: J,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", J => {
						const Q = this.resolvers.get(J);
						Q && (Q.endTime = Date.now(), this.resolvers.set(J, Q))
					}), r(this, "resolverCancel", J => {
						this.resolverDone(J), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", J => {
						const Q = "NO_ACTION",
							Z = {
								actionType: Q,
								startTime: 0
							};
						return {
							start: (se = Q) => {
								const z = this.resolvers.get(J);
								Z.actionType = se, Z.startTime = Date.now(), z && z.userActions.push(Z)
							},
							finish: (se = Q) => {
								Z.actionType = se, Z.endTime = Date.now()
							},
							cancel: (se = Q) => {
								Z.actionType = se, Z.endTime = Date.now(), this.resolverCancel(J)
							}
						}
					}), this.deepLink = B, this.legacyDeepLink = $, this.resolvers = new Map
				}
				track(B) {
					try {
						if (this._done) return;
						this._done = !0;
						const $ = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: f(this.startTime, this.endTime),
								totalCpuTime: f(this.startTime, this.endTime)
							},
							J = this.resolvers.size === 0 ? $ : Array.from(this.resolvers.values()).reduce((Q, Z) => {
								const se = f(Z.startTime, Z.endTime),
									z = Z.userActions.reduce((j, I) => {
										const U = f(I.startTime, I.endTime);
										return {
											totalTime: j.totalTime + U,
											actions: j.actions.set(I.actionType, U)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									fe = se - z.totalTime;
								return t({}, Q, {
									totalTime: Q.totalTime + se,
									totalUserActionsTime: Q.totalUserActionsTime + z.totalTime,
									totalCpuTime: Q.totalCpuTime + fe,
									[`${Z.name}ResolverTotalTime`]: se,
									[`${Z.name}ResolverTotalCpuTime`]: fe,
									[`${Z.name}ResolverTotalUserActionsTime`]: z.totalTime
								}, Array.from(z.actions.keys()).reduce((j, I) => t({}, j, {
									[`${Z.name}Resolver/${I}`]: z.actions.get(I)
								}), {}))
							}, t({}, $, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						_().sendEvent(B, J)
					} catch ($) {
						console.error($)
					}
				}
			}

			function f(K = Date.now(), B = Date.now()) {
				return (B - K) / 1e3
			}
			var y = n("../react/app/components/DeepLink/constants.ts"),
				S = n("../react/common/hooks/useCachedState.ts"),
				P = n("../react/common/hooks/usePrevious.ts");

			function T(K) {
				for (var B = 1; B < arguments.length; B++) {
					var $ = arguments[B] != null ? Object(arguments[B]) : {},
						J = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && J.push.apply(J, Object.getOwnPropertySymbols($).filter(function(Q) {
						return Object.getOwnPropertyDescriptor($, Q).enumerable
					})), J.forEach(function(Q) {
						R(K, Q, $[Q])
					})
				}
				return K
			}

			function R(K, B, $) {
				return B = D(B), B in K ? Object.defineProperty(K, B, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[B] = $, K
			}

			function D(K) {
				var B = C(K, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function C(K, B) {
				if (typeof K != "object" || K === null) return K;
				var $ = K[Symbol.toPrimitive];
				if ($ !== void 0) {
					var J = $.call(K, B || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(K)
			}
			var ee = ({
					children: K
				}) => {
					const B = (0, o.TZ)(),
						$ = (0, c.useHistory)(),
						J = (0, P.Z)($.location.pathname),
						Q = (0, o.p4)(d.dd),
						[Z, se] = (0, e.useState)(!0),
						[z, fe] = (0, S.j)(void 0, {
							key: y.Fj
						}),
						[j, I] = (0, S.j)(void 0, {
							key: y.s$
						}),
						U = (0, s.$8)();
					let G = new URLSearchParams($.location.search);
					const ae = (0, m.mL)($.location.pathname, G);
					let M = null,
						v = null;
					if (G.has(y.Tc) && G.delete(y.Tc), G.get(y.BV)) M = G.get(y.BV), $.location.hash && (v = $.location.hash);
					else if (z) {
						const b = new URLSearchParams(z);
						b.get(y.BV) && (M = b.get(y.BV), G = b)
					} else ae && (G.set(y.BV, ae), M = ae);
					if (M && y._h.test(M)) {
						const b = G.getAll(y.Kt),
							F = JSON.stringify(b);
						b.length && F !== j && I(F), G.has(y.Tc) && G.delete(y.Tc), G.delete(y.Kt)
					}!U && z === void 0 && M && fe(G.toString());
					const O = async () => {
						try {
							if ((0, m.I3)(M) && U && !Q) {
								z && fe(void 0), B.dispatch((0, g.r4)()), se(!0);
								const b = await (0, m.py)(M, se, B, $, J, new i(M, ae ? `${$.location.pathname}${$.location.search}` : void 0));
								G.delete(y.BV);
								const F = G.toString();
								$.replace(T({}, $.location, {
									pathname: b,
									search: F
								}, v ? {
									hash: v
								} : {})), B.dispatch((0, g.WF)())
							}
						} catch (b) {
							B.dispatch((0, g.WF)()), console.error(b)
						} finally {
							se(!1)
						}
					};
					return (0, e.useEffect)(() => {
						O()
					}, [$.location.pathname, $.location.search, Q]), (Z || (0, m.I3)(M)) && U ? null : K
				},
				X = n("../react/app/components/DeepLink/reducer.ts"),
				Y = ee
		},
		"../react/app/components/DeepLink/reducer.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				E: function() {
					return m
				},
				r: function() {
					return g
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				c = n("../react/app/components/DeepLink/actions.ts");
			const m = null,
				s = o().from({
					lastAction: m,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function g(d = s, p) {
				if (p.type === c.MF.RESOLVING_COMPLETE) return s;
				if (p.type === c.MF.RESOLVING_START) return d.set("isResolving", !0);
				if (d.isResolving) {
					if (p.type === c.MF.RESOLVING_COMPLETE) return d.set("isResolving", !1);
					if (p.type === c.MF.SET_FILTERED_ACCOUNT_IDS) return d.set("filteredAccountIds", p.accountIds);
					if (p.type === c.MF.DELETE_FILTERED_ACCOUNT_IDS) return d.set("filteredAccountIds", void 0);
					{
						let _ = d;
						try {
							_ = d.set("lastAction", p)
						} catch {
							_ = d.set("lastAction", {
								type: p.type
							})
						}
						return _
					}
				} else return d
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				U: function() {
					return c
				},
				dd: function() {
					return o
				},
				yI: function() {
					return e
				}
			});
			const e = m => m.deepLink.lastAction,
				o = m => m.deepLink.isResolving,
				c = m => m.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				I3: function() {
					return l
				},
				X1: function() {
					return r
				},
				mL: function() {
					return P
				},
				py: function() {
					return S
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../react/app/components/DeepLink/reducer.ts"),
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const m = T => T.replace(c.default.endsWithSlash, ""),
				s = T => {
					const R = m(T).split("/").slice(3);
					return R.length ? "/" + R.join("/") : ""
				},
				g = T => {
					const R = m(T).split("/").slice(2);
					return R.length ? `apps/${R.join("/")}` : "apps"
				};
			var d = n("../react/app/components/DeepLink/selectors.ts"),
				p = n("../react/app/components/DeepLink/constants.ts"),
				_ = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const r = T => (0, _.Lb)(T) && (T.split(".").length > 1 || (0, t.v5)(T)),
				a = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				l = T => typeof T == "string" && T.startsWith("/"),
				i = (T, R) => D => new Promise((C, q) => {
					R.start();
					const ee = T.subscribe(() => {
						const X = (0, d.yI)(T.getState());
						X === o.E ? (R.cancel(), ee(), q("DeepLink: waitForAction out of context.")) : D(X) && (R.finish(X.type), ee(), C(X))
					})
				}),
				f = (T, R, D) => (C, q) => new Promise((ee, X) => {
					D.start();
					const Y = R.location.pathname;
					C = new URL(C, window.location.href).pathname, Y !== C && (D.cancel(), X(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${C}", but on "${Y}". You need to redirect to "${C}", and unblockRouter in your Resolver, before you use this function.`));
					const K = T.subscribe(() => {
						const B = (0, d.yI)(T.getState()),
							$ = R.location.pathname,
							Q = new URLSearchParams(R.location.search).get(p.BV);
						($ !== C || !!Q) && (D.cancel(), K(), X(`DeepLink: waitForPageAction user navigated away from "${C}" to "${$}${Q?R.location.search:""}"`)), B === o.E ? (D.cancel(), K(), X("DeepLink: waitForPageAction out of context.")) : q(B) && (D.finish(B.type), K(), ee(B))
					})
				});

			function y(T) {
				const R = [],
					D = T.split("?")[0].split("/");
				for (let C of D) C.length !== 0 && (C.startsWith(":") ? R.push({
					value: C.substring(1),
					type: "dynamic"
				}) : R.push({
					value: C,
					type: "static"
				}));
				return R
			}
			async function S(T, R, D, C, q, ee) {
				ee.start();
				const X = y(T),
					K = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(60091), n.e(94923), n.e(8756)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					B = {};
				let $ = "";
				for (const [J, Q] of X.entries())
					if (Q.type === "static") $ = [$, Q.value].join("/");
					else if (Q.type === "dynamic" && a.is(Q.value) && Q.value in K) {
					ee.resolverStart(Q.value);
					const Z = await K[Q.value]({
						deepLink: T,
						blockRouter: () => R(!0),
						unblockRouter: () => R(!1),
						routerHistory: C,
						resolvedValues: B,
						store: D,
						referringRoute: q,
						uri: {
							currentPartIdx: J,
							parts: X
						},
						waitForAction: i(D, ee.createUserActionTracker(Q.value)),
						waitForPageAction: f(D, C, ee.createUserActionTracker(Q.value))
					});
					ee.resolverDone(Q.value), $ = [$, Z].join("/"), B[Q.value] = Z
				} else throw ee.cancel(), new Error(`DeepLink: Resolver with name '${Q.value}' is not supported.`);
				return ee.done(), $
			}

			function P(T, R) {
				const D = ":account",
					C = ":zone",
					q = R.get("zone");
				if (q) return R.delete("zone"), `/${D}/${C}/${q}`;
				const ee = R.get("account");
				if (ee) return R.delete("account"), `/${D}/${ee}`;
				if (T === "/overview") return `/${D}/${C}`;
				if (T === "/apps") return `/${D}/${C}/${g(T)}`;
				const X = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const Y of X) {
					const K = Y.length;
					if (T.startsWith(Y) && (T.length === K || T[K] === "/")) return `/${D}/${C}${T}`
				}
				switch (T) {
					case "/account/billing":
						return `/${D}/billing`;
					case "/account/subscriptions":
						return `/${D}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${D}/dns-firewall`;
					case "/account/audit-log":
						return `/${D}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				m = n("../react/app/components/SomethingWrong.jsx"),
				s = n("../utils/sentry/lastSentEventId.ts"),
				g = n("../react/utils/zaraz.ts"),
				d = n("../react/utils/url.ts");
			const p = ({
				sentryTag: _,
				children: t
			}) => o().createElement(c.SV, {
				beforeCapture: r => {
					_ && r.setTag("errorBoundary", _), g.tg === null || g.tg === void 0 || g.tg.track("page-error", {
						page: (0, d.Fl)(window.location.pathname)
					})
				},
				onError: r => {
					({
						REDUX_LOGGER: void 0
					}).TESTING && n.g.logAppError(r)
				},
				fallback: ({
					error: r,
					eventId: a
				}) => {
					const l = s.e.getEventId() || a;
					return o().createElement(m.Z, {
						type: "page",
						error: r,
						eventId: l
					})
				}
			}, t);
			E.Z = p
		},
		"../react/app/components/Footer.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				Z: function() {
					return v
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				m = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				g = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				_ = n.n(p),
				t = n("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				r = n("../react/common/components/Apple/utils.tsx"),
				a = n("../react/utils/translator.tsx"),
				l = n("../../../../node_modules/moment/moment.js"),
				i = n.n(l);
			const f = () => {
					const O = i()().format("YYYY"),
						b = F => {
							_().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: F
							})
						};
					return o().createElement(y, {
						marginTop: "auto"
					}, o().createElement(S, null, o().createElement(P, null, o().createElement(T, null, "\xA9 ", O, " Cloudflare, Inc."), o().createElement(T, null, o().createElement(R, null, o().createElement(D, {
						showOnDeskTop: !1
					}, o().createElement(C, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => b("Support")
					}, o().createElement(a.cC, {
						id: "common.support"
					}))), o().createElement(D, null, o().createElement(C, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => b("Privacy Policy")
					}, o().createElement(a.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(D, null, o().createElement(C, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => b("Terms of Use")
					}, o().createElement(a.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(D, null, o().createElement(C, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => b("Cookie Preferences")
					}, o().createElement(a.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(D, null, o().createElement(C, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => b("Trademark")
					}, o().createElement(a.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(R, null, o().createElement(D, null, o().createElement(C, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => b("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(a.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				y = (0, g.createComponent)(({
					theme: O,
					marginTop: b
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: b
				})),
				S = (0, g.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				P = (0, g.createComponent)(({
					theme: O
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${O.space[3]}px`
					}
				})),
				T = (0, g.createComponent)(({
					theme: O
				}) => ({
					width: "100%",
					color: O.colors.white,
					fontSize: O.fontSizes[1],
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					tablet: {
						flexDirection: "row"
					},
					desktop: {
						flexDirection: "row"
					}
				})),
				R = (0, g.createComponent)(({
					theme: O
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: O.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				D = (0, g.createComponent)(({
					showOnDeskTop: O = !0,
					theme: b
				}) => ({
					color: b.colors.white,
					fontSize: b.fontSizes[1],
					height: "20px",
					display: O ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: b.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: b.space[3],
						"&::before": {
							content: "'\xB7'",
							display: "block",
							position: "relative",
							left: "-8px",
							fontWeight: 800
						}
					},
					"&:nth-child(2)": {
						marginLeft: 0,
						"&::before": {
							display: "none"
						}
					}
				})),
				C = (0, g.createStyledComponent)(({
					theme: O
				}) => ({
					textDecoration: "none",
					color: O.colors.white,
					"&:hover": {
						color: O.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var q = f,
				ee = n("../react/common/hooks/useGate.ts"),
				X = n("../react/pages/welcome/routes.ts"),
				Y = n("../react/utils/cookiePreferences.ts"),
				K = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				$ = () => {
					const [O, b] = (0, e.useState)(!1), F = (0, Y.wV)(), x = () => {
						b(!0)
					}, ce = () => {
						b(!1)
					}, ge = F && F === "US" ? (0, a.ZP)("footer.cpra_cta.privacy_choices") : (0, a.ZP)("footer.cpra_cta.cookie_preferences"), Oe = {
						background: "transparent",
						borderRadius: "none",
						color: O ? (0, d.Yc)() ? "#ee730a" : "#003681" : (0, d.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: O ? "underline" : "none",
						textUnderlineOffset: "4px",
						cursor: "pointer",
						transitionProperty: "color",
						transitionDuration: "150ms",
						transitionTimingFunction: "ease",
						padding: "0px",
						display: "flex",
						alignItems: "center",
						lineHeight: "1.5",
						height: "fit-content",
						fontSize: "14px",
						fontWeight: 400,
						"&:focus": {
							outline: "2px solid #086fff"
						},
						border: "none",
						overflow: "hidden"
					};
					return o().createElement(s.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: Oe,
						onMouseEnter: x,
						onMouseLeave: ce
					}, o().createElement(s.Ei, {
						height: 15,
						src: K,
						mr: 2,
						alt: ge
					}), ge)
				};

			function J() {
				return J = Object.assign ? Object.assign.bind() : function(O) {
					for (var b = 1; b < arguments.length; b++) {
						var F = arguments[b];
						for (var x in F) Object.prototype.hasOwnProperty.call(F, x) && (O[x] = F[x])
					}
					return O
				}, J.apply(this, arguments)
			}

			function Q(O, b) {
				if (O == null) return {};
				var F = Z(O, b),
					x, ce;
				if (Object.getOwnPropertySymbols) {
					var ge = Object.getOwnPropertySymbols(O);
					for (ce = 0; ce < ge.length; ce++) x = ge[ce], !(b.indexOf(x) >= 0) && (!Object.prototype.propertyIsEnumerable.call(O, x) || (F[x] = O[x]))
				}
				return F
			}

			function Z(O, b) {
				if (O == null) return {};
				var F = {},
					x = Object.keys(O),
					ce, ge;
				for (ge = 0; ge < x.length; ge++) ce = x[ge], !(b.indexOf(ce) >= 0) && (F[ce] = O[ce]);
				return F
			}
			const se = 24,
				z = (0, g.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,d.Yc)()?d.rS.colors.orange[6]:d.rS.colors.blue[4]}`
					}
				}), s.A),
				fe = (0, g.createStyledComponent)(({
					theme: O
				}) => ({
					color: O.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, t.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: O.colors.gray[4]
					}
				}), s.A),
				j = O => {
					let {
						onClick: b
					} = O, F = Q(O, ["onClick"]);
					return o().createElement(z, J({
						onClick: x => {
							_().sendEvent("navigate footer nav", {
								destinationPage: F.href
							}), b && b(x)
						}
					}, F))
				},
				I = O => {
					let {
						children: b,
						target: F,
						rel: x
					} = O, ce = Q(O, ["children", "target", "rel"]);
					return o().createElement(j, J({
						target: F || "_blank",
						rel: x || "noopener noreferrer"
					}, ce), b, o().createElement(m.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				},
				U = O => {
					let {
						children: b,
						target: F,
						rel: x
					} = O, ce = Q(O, ["children", "target", "rel"]);
					return o().createElement(fe, J({
						target: F || "_blank",
						rel: x || "noopener noreferrer"
					}, ce), b)
				},
				G = (0, g.createStyledComponent)(({
					theme: O
				}) => ({
					flex: 1,
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					flexWrap: "wrap",
					marginLeft: 0,
					"& > li": {
						fontSize: O.fontSizes[2],
						display: "contents",
						"&:not(:first-child)": {
							"&::before": {
								content: "'|'",
								color: O.colors.gray[4],
								marginTop: (0, t.tq)() ? "8px" : 0,
								paddingLeft: "8px",
								paddingRight: "8px"
							}
						},
						"& > button": {
							marginTop: (0, t.tq)() ? "8px" : 0
						}
					}
				}), s.Ul),
				ae = (0, g.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, t.tq)() ? "column" : "row",
					justifyContent: "space-between"
				}), s.ZC);
			var v = () => {
				var O, b;
				const F = [X.d.root.pattern].some(ge => (0, c.matchPath)(location.pathname, {
						path: ge
					})),
					x = (0, ee.Z)("dx-footer-simplify") === "experiment";
				if ((0, r.PP)()) return o().createElement(q, null);
				if (F) return null;
				const ce = new Date().getFullYear();
				return o().createElement(s.$_, {
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: x ? "19px" : 4,
					px: [4, 3, 3],
					mt: "auto"
				}, x ? o().createElement(ae, null, o().createElement(G, null, o().createElement(s.Li, null, o().createElement(U, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("common.support"))), o().createElement(s.Li, null, o().createElement(U, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(s.Dr, {
					textTransform: "capitalize"
				}, (0, a.ZP)("footer.system_status")))), o().createElement(s.Li, null, o().createElement(U, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, a.ZP)("footer.careers"))), o().createElement(s.Li, null, o().createElement(U, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos_reduced"))), o().createElement(s.Li, null, o().createElement(U, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, a.ZP)("footer.security_issues"))), o().createElement(s.Li, null, o().createElement(U, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))), o().createElement(s.Li, null, o().createElement($, null))), o().createElement(s.ZC, {
					display: "flex",
					justifyContent: "center",
					mt: (0, t.tq)() ? 2 : 0
				}, o().createElement(s.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", ce, " Cloudflare, Inc."))) : o().createElement(s.ZC, {
					display: "flex",
					flexWrap: "wrap",
					mx: "auto",
					maxWidth: "64rem"
				}, o().createElement(s.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.contact")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.contact_support"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, a.ZP)("footer.contact_sales"))), o().createElement(s.Dd, {
					mt: 3
				}, o().createElement(s.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, o().createElement(j, {
					"aria-label": (0, a.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${se}px`
				}, o().createElement(m.J, {
					type: "twitter",
					size: se
				})), o().createElement(j, {
					"aria-label": (0, a.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${se}px`
				}, o().createElement(m.J, {
					type: "facebook",
					size: se
				})), o().createElement(j, {
					"aria-label": (0, a.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${se}px`
				}, o().createElement(m.J, {
					type: "linkedin",
					size: se
				})))))), o().createElement(s.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.what_we_do")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/plans"
				}, (0, a.ZP)("footer.plans"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/overview"
				}, (0, a.ZP)("footer.about"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/network-map"
				}, (0, a.ZP)("footer.network_map"))))), o().createElement(s.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.resources")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://developers.cloudflare.com"
				}, (0, a.ZP)("footer.product_docs"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://blog.cloudflare.com"
				}, (0, a.ZP)("footer.blog"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, a.ZP)("footer.testimonials"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://partners.cloudflare.com"
				}, (0, a.ZP)("footer.hosting_partners"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://api.cloudflare.com"
				}, (0, a.ZP)("footer.api"))))), o().createElement(s.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5],
					position: "relative"
				}, o().createElement("div", {
					style: {
						position: "absolute",
						top: "0",
						left: "0",
						height: "24px",
						width: "100%"
					},
					"aria-hidden": "true",
					title: `Current version: ${((O=window)===null||O===void 0||(b=O.build)===null||b===void 0?void 0:b.dashVersion)||"unknown"}`
				}), o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.support")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.help_center"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://community.cloudflare.com"
				}, (0, a.ZP)("footer.community"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflarestatus.com"
				}, (0, a.ZP)("footer.system_status"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/abuse"
				}, (0, a.ZP)("footer.trust_safety"))))), o().createElement(s.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.about_us")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/people"
				}, (0, a.ZP)("footer.team"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/careers"
				}, (0, a.ZP)("footer.careers"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, a.ZP)("footer.press"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, a.ZP)("footer.subs_agreement"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))))), o().createElement($, null)))
			}
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				S: function() {
					return a
				},
				Z: function() {
					return ae
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				s = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				g = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				p = n("../react/common/components/AccessControl/index.js"),
				_ = n("../react/common/components/ButtonWithDropdown.tsx"),
				t = n("../react/common/components/Dropdown/index.tsx"),
				r = n("../react/utils/translator.tsx");
			const a = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				l = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: a.EXISTING_DOMAIN,
					icon: "internet-browser",
					url: "?to=/:account/add-site",
					description: {
						id: "onboarding.add_product.existing_domain.description"
					},
					disableOn: "isZoneVersionLocked"
				}, {
					title: {
						id: "onboarding.add_product.new_domain.title"
					},
					trackingEvent: a.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/domains/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: a.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: a.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: a.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: a.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: a.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var i = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				y = n.n(f);

			function S(M) {
				for (var v = 1; v < arguments.length; v++) {
					var O = arguments[v] != null ? Object(arguments[v]) : {},
						b = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(O).filter(function(F) {
						return Object.getOwnPropertyDescriptor(O, F).enumerable
					})), b.forEach(function(F) {
						P(M, F, O[F])
					})
				}
				return M
			}

			function P(M, v, O) {
				return v = T(v), v in M ? Object.defineProperty(M, v, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[v] = O, M
			}

			function T(M) {
				var v = R(M, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function R(M, v) {
				if (typeof M != "object" || M === null) return M;
				var O = M[Symbol.toPrimitive];
				if (O !== void 0) {
					var b = O.call(M, v || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(M)
			}

			function D() {
				return D = Object.assign ? Object.assign.bind() : function(M) {
					for (var v = 1; v < arguments.length; v++) {
						var O = arguments[v];
						for (var b in O) Object.prototype.hasOwnProperty.call(O, b) && (M[b] = O[b])
					}
					return M
				}, D.apply(this, arguments)
			}

			function C(M, v) {
				if (M == null) return {};
				var O = q(M, v),
					b, F;
				if (Object.getOwnPropertySymbols) {
					var x = Object.getOwnPropertySymbols(M);
					for (F = 0; F < x.length; F++) b = x[F], !(v.indexOf(b) >= 0) && (!Object.prototype.propertyIsEnumerable.call(M, b) || (O[b] = M[b]))
				}
				return O
			}

			function q(M, v) {
				if (M == null) return {};
				var O = {},
					b = Object.keys(M),
					F, x;
				for (x = 0; x < b.length; x++) F = b[x], !(v.indexOf(F) >= 0) && (O[F] = M[F]);
				return O
			}
			const ee = M => {
					let {
						title: v,
						trackingEvent: O,
						icon: b,
						url: F,
						description: x,
						disabled: ce
					} = M, ge = C(M, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(X, D({
						to: !ce && F || "#",
						"aria-disabled": ce,
						onClick: () => {
							y().sendEvent(O, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, ge), o().createElement(m.ZC, {
						display: "flex"
					}, o().createElement(c.J, {
						type: b,
						size: 24,
						mr: 2
					}), o().createElement(m.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(m.ZC, {
						fontSize: 3
					}, o().createElement(r.cC, v)), o().createElement(m.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(r.cC, x)))))
				},
				X = (0, g.createStyledComponent)(({
					theme: M
				}) => {
					const v = {
						cursor: "pointer",
						backgroundColor: (0, s.Yc)() ? M.colors.gray[8] : M.colors.gray[9],
						color: M.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: 16,
						py: 8,
						background: M.colors.background,
						color: M.colors.gray[2],
						fontSize: M.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': v,
						':focus-within:not([aria-disabled="true"])': S({}, v, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: M.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, i.Link);
			var Y = ee,
				K = n("../react/common/hooks/useGate.ts");

			function B() {
				return B = Object.assign ? Object.assign.bind() : function(M) {
					for (var v = 1; v < arguments.length; v++) {
						var O = arguments[v];
						for (var b in O) Object.prototype.hasOwnProperty.call(O, b) && (M[b] = O[b])
					}
					return M
				}, B.apply(this, arguments)
			}

			function $(M) {
				for (var v = 1; v < arguments.length; v++) {
					var O = arguments[v] != null ? Object(arguments[v]) : {},
						b = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(O).filter(function(F) {
						return Object.getOwnPropertyDescriptor(O, F).enumerable
					})), b.forEach(function(F) {
						J(M, F, O[F])
					})
				}
				return M
			}

			function J(M, v, O) {
				return v = Q(v), v in M ? Object.defineProperty(M, v, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[v] = O, M
			}

			function Q(M) {
				var v = Z(M, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function Z(M, v) {
				if (typeof M != "object" || M === null) return M;
				var O = M[Symbol.toPrimitive];
				if (O !== void 0) {
					var b = O.call(M, v || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(M)
			}

			function se(M, v) {
				if (M == null) return {};
				var O = z(M, v),
					b, F;
				if (Object.getOwnPropertySymbols) {
					var x = Object.getOwnPropertySymbols(M);
					for (F = 0; F < x.length; F++) b = x[F], !(v.indexOf(b) >= 0) && (!Object.prototype.propertyIsEnumerable.call(M, b) || (O[b] = M[b]))
				}
				return O
			}

			function z(M, v) {
				if (M == null) return {};
				var O = {},
					b = Object.keys(M),
					F, x;
				for (x = 0; x < b.length; x++) F = b[x], !(v.indexOf(F) >= 0) && (O[F] = M[F]);
				return O
			}
			const fe = "GLOBAL_ADD_DROPDOWN",
				j = ({
					disableProducts: M
				}) => {
					const v = (0, K.Z)("dashon-18-reduced-add-button-on-mobile") === "experiment" && (0, d.tq)();
					return console.log(!v), o().createElement(I, {
						role: "group",
						"data-testid": fe
					}, o().createElement(t.Lt, {
						trigger: o().createElement(U, null, o().createElement(c.J, {
							label: "plus",
							type: "plus"
						}), !v && o().createElement(o().Fragment, null, o().createElement(r.cC, {
							id: "common.add"
						}), " ", o().createElement(c.J, {
							label: "arrow",
							type: "caret-down"
						}))),
						menu: o().createElement(_.v2, {
							overflow: "auto",
							maxHeight: "80vh",
							width: "min(50vw, 340px)",
							whiteSpace: "normal",
							mr: 1,
							p: "8px 0",
							bottom: "auto",
							zIndex: 1200
						}, l.map(O => {
							const b = O || {},
								{
									disableOn: F,
									permissionCheck: x
								} = b,
								ce = se(b, ["disableOn", "permissionCheck"]),
								ge = F && M[F],
								Oe = $({}, ce, {
									disabled: ge
								});
							return x ? o().createElement(p.Z, {
								key: O.title.id,
								edit: x
							}, ({
								isEditable: Ae
							}) => Ae && o().createElement(Y, Oe)) : o().createElement(Y, B({
								key: O.url
							}, Oe))
						}))
					}))
				},
				I = (0, g.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				U = (0, g.createStyledComponent)(({
					theme: M
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: M.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, s.Yc)() ? M.colors.gray[1] : M.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, s.Yc)() ? M.colors.gray[8] : M.colors.gray[9]
					}
				}), m.zx);
			var G = j,
				ae = G
		},
		"../react/app/components/LoadingSuspense.tsx": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				s = n("../react/utils/translator.tsx"),
				g = n("../react/app/components/ErrorStatus.tsx"),
				d = n("../react/common/components/EmptyPage.jsx"),
				p = n("../react/common/hooks/suspenseHelpers.ts");

			function _(a) {
				const [l, i] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const f = window.setTimeout(() => i(!0), a);
					return () => window.clearTimeout(f)
				}, []), l
			}
			const t = ({
					loadingTimeout: a = 1e3,
					stillLoadingTimeout: l = 9e3
				}) => {
					const i = _(a),
						f = _(l);
					if ((0, p.nW)(), !i && !f) return o().createElement(d.Z, null);
					const y = f ? o().createElement(s.cC, {
						id: "common.still_loading"
					}) : i ? o().createElement(s.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(g.Z, {
						size: 5
					}, o().createElement(m.ZC, {
						mr: 3
					}, o().createElement(c.g, {
						size: "2x"
					})), y)
				},
				r = ({
					children: a
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(t, null)
				}, a);
			E.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				C8: function() {
					return p
				},
				d3: function() {
					return d
				},
				dr: function() {
					return s
				},
				lt: function() {
					return g
				},
				m6: function() {
					return t
				},
				n: function() {
					return _
				},
				yl: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const c = "/persistence/user",
				m = async () => {
					try {
						return await (await e.get(c, {
							hideErrorAlert: !0
						})).body
					} catch (r) {
						console.error(r)
					}
				}, s = async r => {
					try {
						return await (await e.get(`/accounts/${r}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, g = async (r, a) => {
					try {
						return await (await e.post(`${c}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: r,
								accountId: a
							}),
							hideErrorAlert: !0
						})).body
					} catch (l) {
						return console.error(l), []
					}
				}, d = async (r, a) => {
					try {
						return await e.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: a
							}),
							hideErrorAlert: !0
						}), !0
					} catch (l) {
						return console.error(l), !1
					}
				}, p = async r => {
					try {
						return await (await e.post(c, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (a) {
						console.error(a)
					}
				}, _ = async r => {
					try {
						return await (await e.post(`${c}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, t = async r => {
					try {
						return await (await e.post(`${c}/viewed-changes`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						throw console.error(a), a
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				Wl: function() {
					return _
				},
				lp: function() {
					return y
				},
				Z_: function() {
					return P
				},
				r7: function() {
					return K
				},
				Tv: function() {
					return fe
				},
				yZ: function() {
					return T
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../react/app/redux/index.ts"),
				m = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = n.n(m),
				g = n("../react/utils/bootstrap.ts"),
				d = n("../react/common/selectors/zoneSelectors.ts"),
				p = n("../react/app/components/Persistence/api.ts");
			const _ = 10;

			function t(j) {
				for (var I = 1; I < arguments.length; I++) {
					var U = arguments[I] != null ? Object(arguments[I]) : {},
						G = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(U).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(U, ae).enumerable
					})), G.forEach(function(ae) {
						r(j, ae, U[ae])
					})
				}
				return j
			}

			function r(j, I, U) {
				return I = a(I), I in j ? Object.defineProperty(j, I, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[I] = U, j
			}

			function a(j) {
				var I = l(j, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function l(j, I) {
				if (typeof j != "object" || j === null) return j;
				var U = j[Symbol.toPrimitive];
				if (U !== void 0) {
					var G = U.call(j, I || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(j)
			}
			const i = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				f = t({}, i, {
					isLoading: !0,
					actions: {
						starZone: () => null,
						setDarkMode: () => null,
						isZoneStarred: () => !1,
						canAccountStarZone: () => !0,
						logRouteVisited: () => null,
						viewChange: () => null
					}
				}),
				y = (0, e.createContext)(f),
				S = y.Consumer,
				P = ({
					children: j,
					onDarkModeChangeCb: I
				}) => {
					const [U, G] = (0, e.useState)(i), [ae, M] = (0, e.useState)(f.isLoading), v = (0, g.$8)(), O = (0, c.p4)(x => (0, d.wH)(x));
					(0, e.useEffect)(() => {
						v ? (0, p.yl)().then(x => {
							x && (G(x), I(x.darkMode))
						}).finally(() => M(!1)) : M(!1)
					}, [v]);
					const b = (x, ce) => !!U.favorites.find(ge => ge.type === "zone" && ge.name === x && ge.accountId === ce),
						F = x => U.favorites.filter(ge => ge.type === "zone" && ge.accountId === x).length < _;
					return o().createElement(y.Provider, {
						value: t({}, U, {
							isLoading: ae,
							actions: {
								canAccountStarZone: F,
								isZoneStarred: b,
								starZone: async (x, ce) => {
									var ge;
									const Oe = !b(x, ce),
										Ae = F(ce);
									if (Oe && !Ae) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Re = await (0, p.lt)(x, ce);
									s().sendEvent("click star zone", {
										isStarring: Oe,
										totalStarredZones: Re.filter(N => N.accountId === ce && N.type === "zone").length,
										totalZones: O == null || (ge = O.paginationData) === null || ge === void 0 ? void 0 : ge.info.total_count
									}), G(t({}, U, {
										favorites: Re
									}))
								},
								setDarkMode: async x => {
									const ce = await (0, p.C8)(x);
									G(ce), I(ce.darkMode)
								},
								logRouteVisited: async x => {
									var ce;
									const ge = await (0, p.n)(x);
									G((ce = ge) !== null && ce !== void 0 ? ce : t({}, U))
								},
								viewChange: async x => {
									const ce = await (0, p.m6)(x);
									G(t({}, U, {
										viewedChanges: ce
									}))
								}
							}
						})
					}, j)
				},
				T = () => (0, e.useContext)(y);
			var R = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				D = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function C() {
				return C = Object.assign ? Object.assign.bind() : function(j) {
					for (var I = 1; I < arguments.length; I++) {
						var U = arguments[I];
						for (var G in U) Object.prototype.hasOwnProperty.call(U, G) && (j[G] = U[G])
					}
					return j
				}, C.apply(this, arguments)
			}

			function q(j, I) {
				if (j == null) return {};
				var U = ee(j, I),
					G, ae;
				if (Object.getOwnPropertySymbols) {
					var M = Object.getOwnPropertySymbols(j);
					for (ae = 0; ae < M.length; ae++) G = M[ae], !(I.indexOf(G) >= 0) && (!Object.prototype.propertyIsEnumerable.call(j, G) || (U[G] = j[G]))
				}
				return U
			}

			function ee(j, I) {
				if (j == null) return {};
				var U = {},
					G = Object.keys(j),
					ae, M;
				for (M = 0; M < G.length; M++) ae = G[M], !(I.indexOf(ae) >= 0) && (U[ae] = j[ae]);
				return U
			}
			const X = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var K = j => {
					let {
						isStarred: I,
						size: U = 16
					} = j, G = q(j, ["isStarred", "size"]);
					const ae = X[(0, R.Yc)() ? "dark" : "light"];
					return o().createElement(D.J, C({
						type: I ? "star" : "star-outline",
						color: I ? ae.gold : ae.gray,
						size: U
					}, G))
				},
				B = n("../../../../node_modules/@cloudflare/elements/es/index.js");

			function $(j) {
				for (var I = 1; I < arguments.length; I++) {
					var U = arguments[I] != null ? Object(arguments[I]) : {},
						G = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(U).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(U, ae).enumerable
					})), G.forEach(function(ae) {
						J(j, ae, U[ae])
					})
				}
				return j
			}

			function J(j, I, U) {
				return I = Q(I), I in j ? Object.defineProperty(j, I, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[I] = U, j
			}

			function Q(j) {
				var I = Z(j, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function Z(j, I) {
				if (typeof j != "object" || j === null) return j;
				var U = j[Symbol.toPrimitive];
				if (U !== void 0) {
					var G = U.call(j, I || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(j)
			}
			const se = {
				light: {
					default: {
						border: "gray.8",
						text: "gray.2",
						bg: "white",
						bgDisabled: "grey.6"
					},
					active: {
						border: "blue.5",
						text: "blue.5",
						bg: "blue.9",
						bgDisabled: "grey.6"
					}
				},
				dark: {
					default: {
						border: "gray.8",
						text: "gray.1",
						bg: "gray.7",
						bgDisabled: "grey.6"
					},
					active: {
						border: "blue.5",
						text: "gray.1",
						bg: "blue.9",
						bgDisabled: "grey.6"
					}
				}
			};
			var fe = (0, e.forwardRef)(({
				featurePreview: j = !1,
				isStarred: I,
				onClickFn: U,
				isDisabled: G,
				testId: ae,
				buttonText: M,
				size: v = "large"
			}, O) => {
				const b = se[(0, R.Yc)() ? "dark" : "light"][I && !j ? "active" : "default"],
					F = $({}, v === "large" && {
						starIconSize: 16,
						fontSize: 3,
						height: "auto",
						paddingLeft: "12px",
						paddingRight: 3
					}, v === "small" && {
						starIconSize: 14,
						fontSize: 1,
						height: "1.5rem",
						paddingLeft: "6px",
						paddingRight: 2
					});
				return o().createElement(B.zx, {
					innerRef: O,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: F.paddingRight,
					gap: 1,
					pl: F.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: j || G ? "default" : "pointer",
					backgroundColor: b.bg,
					color: b.text,
					borderColor: b.border,
					onClick: U,
					opacity: G ? .5 : 1,
					disabled: G,
					fontSize: F.fontSize,
					height: F.height,
					"data-testid": ae
				}, o().createElement(K, {
					isStarred: j ? !1 : I,
					size: F.starIconSize
				}), M)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				m = n.n(c),
				s = n("../../../common/intl/intl-react/src/index.ts"),
				g = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("../node_modules/@cloudflare/component-button/es/index.js"),
				p = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				_ = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				r = n.n(t),
				a = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				l = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				i = n("../react/app/components/Footer.tsx"),
				f = n("../react/utils/url.ts");

			function y($) {
				for (var J = 1; J < arguments.length; J++) {
					var Q = arguments[J] != null ? Object(arguments[J]) : {},
						Z = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(Q).filter(function(se) {
						return Object.getOwnPropertyDescriptor(Q, se).enumerable
					})), Z.forEach(function(se) {
						S($, se, Q[se])
					})
				}
				return $
			}

			function S($, J, Q) {
				return J = P(J), J in $ ? Object.defineProperty($, J, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[J] = Q, $
			}

			function P($) {
				var J = T($, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function T($, J) {
				if (typeof $ != "object" || $ === null) return $;
				var Q = $[Symbol.toPrimitive];
				if (Q !== void 0) {
					var Z = Q.call($, J || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)($)
			}
			const R = (0, g.createComponent)(({
					type: $
				}) => ({
					height: $ !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				D = (0, g.createComponent)(({
					theme: $,
					margin: J,
					size: Q = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: $.colors.gray[3],
					height: J ? "auto" : "100%",
					padding: J ? 0 : $.space[Q > 1 ? Q - 2 : 0],
					margin: J,
					justifyContent: "center",
					alignItems: "center"
				})),
				C = (0, g.createComponent)(() => ({
					textAlign: "left"
				})),
				q = (0, g.createComponent)(() => ({
					textAlign: "right"
				})),
				ee = (0, g.createComponent)(({
					theme: $
				}) => ({
					fontSize: $.fontSizes[6]
				})),
				X = (0, g.createComponent)(({
					theme: $
				}) => ({
					fontSize: $.fontSizes[4]
				})),
				Y = (0, g.createComponent)(({
					theme: $
				}) => ({
					fontSize: $.fontSizes[3]
				})),
				K = (0, g.createComponent)(({
					theme: $
				}) => ({
					width: "100%",
					height: 125,
					marginTop: $.space[4],
					padding: $.space[2]
				}), "textarea");
			class B extends o().Component {
				constructor(...J) {
					super(...J);
					S(this, "state", {
						value: "",
						submitted: !1
					}), S(this, "handleTextareaChange", Q => {
						this.setState({
							value: Q.target.value
						})
					}), S(this, "sendErrToSentry10", async () => {
						try {
							var Q, Z, se, z;
							const fe = ((Q = window) === null || Q === void 0 || (Z = Q.bootstrap) === null || Z === void 0 || (se = Z.data) === null || se === void 0 || (z = se.user) === null || z === void 0 ? void 0 : z.id) || "Unknown",
								j = this.props.eventId || p.eW(),
								I = {
									name: fe,
									email: `${fe}@userid.com`,
									comments: this.state.value,
									eventId: j,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: y({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(I)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (fe) {
							console.error(fe)
						}
					}), S(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), S(this, "renderContent", Q => o().createElement(s.oc, null, Z => o().createElement(R, {
						type: Q
					}, o().createElement(D, null, o().createElement(C, null, o().createElement(ee, null, Z.t("error.internal_issues")), o().createElement(X, null, Z.t("error.help_us")), o().createElement(K, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: se => this.handleTextareaChange(se),
						disabled: this.state.submitted,
						placeholder: Z.t("error.give_feedback")
					}), o().createElement(q, null, !this.state.submitted && o().createElement(d.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, Z.t("common.submit")), this.state.submitted && o().createElement(Y, null, Z.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const J = this.props.error;
					console.error(`SomethingWrong: ${J}`), _.YA("user_feedback_form_displayed", "yes"), _.YA("normalizedPath", (0, f.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: J
					} = this.props;
					return J === "fullscreen" ? o().createElement("div", null, o().createElement(a.h4, null, o().createElement(t.Link, {
						to: "/"
					}, o().createElement(l.TR, null))), this.renderContent(J), o().createElement(i.Z, null)) : this.renderContent(J)
				}
			}
			B.propTypes = {
				type: m().oneOf(["fullscreen", "page"]),
				error: m().oneOfType([m().string, m().object]),
				eventId: m().string
			}, E.Z = B
		},
		"../react/app/redux/index.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				TZ: function() {
					return c
				},
				UM: function() {
					return s
				},
				ZS: function() {
					return m
				},
				p4: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e);
			const c = () => (0, e.useStore)(),
				m = () => c().getState(),
				s = () => (0, e.useDispatch)(),
				g = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(W, E, n) {
			"use strict";
			n.d(E, {
				P1: function() {
					return _
				},
				jQ: function() {
					return d
				},
				qR: function() {
					return t
				},
				uc: function() {
					return p
				}
			});
			var e = n("../react/pages/home/alerts/config.tsx"),
				o = n("../react/pages/workers/entityTypes.ts"),
				c = n("../react/pages/email/types.ts"),
				m = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				s = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				g = n.n(s);
			const d = s.static.from([{
					entityType: "accessOrganization"
				}, {
					entityType: "access-temp-data"
				}, {
					entityType: "accessPolicy"
				}, {
					entityType: "accessGroup"
				}, {
					entityType: "accessPolicies",
					to: "accessPolicy"
				}, {
					entityType: "accessGroups",
					to: "accessGroup"
				}, {
					entityType: "accessAppLauncher"
				}, {
					entityType: "accounts"
				}, {
					entityType: e.w8.alert
				}, {
					entityType: e.w8.alerts,
					to: e.w8.alert
				}, {
					entityType: e.w8.alertsHistory
				}, {
					entityType: e.w8.integrations
				}, {
					entityType: e.w8.pagerDuty
				}, {
					entityType: e.w8.pagerDutyRequest
				}, {
					entityType: e.w8.statuspageComponents
				}, {
					entityType: e.w8.webhook
				}, {
					entityType: e.w8.webhooks
				}, {
					entityType: e.w8.availableAlerts
				}, {
					entityType: e.w8.availableAlertsForProduct
				}, {
					entityType: e.w8.deliveryMechanisms
				}, {
					entityType: "accountsDetailed"
				}, {
					entityType: "accountSubscriptions",
					to: "accountSubscription"
				}, {
					entityType: "zoneSubscriptions",
					to: "zoneSubscription"
				}, {
					entityType: "accountSubscription"
				}, {
					entityType: "billingFreeTrial"
				}, {
					entityType: "accountSubscriptionCancelDowngrade"
				}, {
					entityType: "accountSubscriptionCancellationReason"
				}, {
					entityType: "accountLegoContract"
				}, {
					entityType: "accountMember"
				}, {
					entityType: "accountMembers",
					to: "accountMember"
				}, {
					entityType: "accountSingle"
				}, {
					entityType: "accountRoles"
				}, {
					entityType: "accountHealthChecks"
				}, {
					entityType: "advancedTCPProtection"
				}, {
					entityType: "advancedTCPAllowlistItem"
				}, {
					entityType: "advancedTCPAllowlist",
					to: "advancedTCPAllowlistItem"
				}, {
					entityType: "advancedTCPPrefix"
				}, {
					entityType: "advancedTCPPrefixes",
					to: "advancedTCPPrefix"
				}, {
					entityType: "amp"
				}, {
					entityType: "apiShields",
					to: "apiShield"
				}, {
					entityType: "apiShield"
				}, {
					entityType: "apiToken"
				}, {
					entityType: "apiTokens",
					to: "apiToken"
				}, {
					entityType: "apiTokenZones",
					to: "zone"
				}, {
					entityType: "apiTokenFormZones",
					to: "zone"
				}, {
					entityType: "apiTokenSearchZones",
					to: "zone"
				}, {
					entityType: "billing.usageGraphQL"
				}, {
					entityType: "billingAccount"
				}, {
					entityType: "billingPlans"
				}, {
					entityType: "billingProfile"
				}, {
					entityType: "billingTransactions"
				}, {
					entityType: "billingOutstandingTransactions"
				}, {
					entityType: "billingBadDebt"
				}, {
					entityType: "billingUnpaidInvoices"
				}, {
					entityType: "billingNextBilling"
				}, {
					entityType: "billableUsage"
				}, {
					entityType: "billingContractSelfServeEligibility"
				}, {
					entityType: "certificate"
				}, {
					entityType: "certificates",
					to: "certificate"
				}, {
					entityType: "colosStats"
				}, {
					entityType: "certificatePack"
				}, {
					entityType: "certificatePacks",
					to: "certificatePack"
				}, {
					entityType: "certificateOrder"
				}, {
					entityType: "certificateValidationStatus"
				}, {
					entityType: "clientCertificate"
				}, {
					entityType: "clientCertificates",
					to: "clientCertificate"
				}, {
					entityType: "customerMetadataBoundary"
				}, {
					entityType: "customHostname"
				}, {
					entityType: "customHostnames",
					to: "customHostname"
				}, {
					entityType: "customCSR"
				}, {
					entityType: "customCSRs",
					to: "customCSR"
				}, {
					entityType: "dnsFirewallCluster"
				}, {
					entityType: "dnsFirewallClusters",
					to: "dnsFirewallCluster"
				}, {
					entityType: "dnsRecord"
				}, {
					entityType: "dnsRecords",
					to: "dnsRecord"
				}, {
					entityType: "dnsRecordsImport"
				}, {
					entityType: "dnsAcl"
				}, {
					entityType: "dnsAcls",
					to: "dnsAcl"
				}, {
					entityType: "dnsTsig"
				}, {
					entityType: "dnsTsigs",
					to: "dnsTsig"
				}, {
					entityType: "dnsOutgoingZoneTransfers"
				}, {
					entityType: "dnsMaster"
				}, {
					entityType: "dnsMasters",
					to: "dnsMaster"
				}, {
					entityType: "dpa"
				}, {
					entityType: "filter"
				}, {
					entityType: "filteredMemberships"
				}, {
					entityType: "firewallRule",
					nestedProps: {
						filter: "filter"
					}
				}, {
					entityType: "firewallRules",
					to: "firewallRule"
				}, {
					entityType: "greTunnel"
				}, {
					entityType: "greTunnels",
					to: "greTunnel"
				}, {
					entityType: "interconnect"
				}, {
					entityType: "interconnects",
					to: "interconnect"
				}, {
					entityType: "healthCheck"
				}, {
					entityType: "healthChecks",
					to: "healthCheck"
				}, {
					entityType: "magicConnector"
				}, {
					entityType: "magicConnectors",
					to: "magicConnector"
				}, {
					entityType: "hostnameRegions"
				}, {
					entityType: "http2ToOrigin"
				}, {
					entityType: "httpStats"
				}, {
					entityType: "httpStatsOverview"
				}, {
					entityType: "identityProvider"
				}, {
					entityType: "identityProviders",
					to: "identityProvider"
				}, {
					entityType: "ipAccessRule"
				}, {
					entityType: "ipAccessRules",
					to: "ipAccessRule"
				}, {
					entityType: "ipPrefix"
				}, {
					entityType: "ipPrefixes",
					to: "ipPrefix"
				}, {
					entityType: "ipsecTunnel"
				}, {
					entityType: "ipsecTunnels",
					to: "ipsecTunnel"
				}, {
					entityType: "pcapBucket"
				}, {
					entityType: "pcapBucketValidation",
					to: "pcapBucket"
				}, {
					entityType: "pcapBuckets",
					to: "pcapBucket"
				}, {
					entityType: "pcapCapture"
				}, {
					entityType: "pcapCaptures",
					to: "pcapCapture"
				}, {
					entityType: "networkMonitoringConfiguration"
				}, {
					entityType: "networkMonitoringRule"
				}, {
					entityType: "networkMonitoringRules",
					to: "networkMonitoringRule"
				}, {
					entityType: "loadBalancer",
					nestedProps: {
						default_pools: "pool",
						fallback_pool: "pool",
						region_pools: "pool",
						country_pools: "pool",
						pop_pools: "pool"
					}
				}, {
					entityType: "languagePreference"
				}, {
					entityType: "loadBalancers",
					to: "loadBalancer"
				}, {
					entityType: "accountLogpushJob"
				}, {
					entityType: "accountLogpushJobs",
					to: "accountLogpushJob"
				}, {
					entityType: "logpushJob"
				}, {
					entityType: "logpushJobs",
					to: "logpushJob"
				}, {
					entityType: "logpushDestinationExists"
				}, {
					entityType: "logpushDestinationValidation"
				}, {
					entityType: "logpushSentOwnershipToken"
				}, {
					entityType: "logpushOwnershipValidation"
				}, {
					entityType: "logpushFieldsAll"
				}, {
					entityType: "logpushFieldsDefault"
				}, {
					entityType: "staticRoute"
				}, {
					entityType: "staticRoutes",
					to: "staticRoute"
				}, {
					entityType: "membership",
					to: "memberships"
				}, {
					entityType: "memberships",
					nestedProps: {
						account: "accounts"
					}
				}, {
					entityType: "monitor"
				}, {
					entityType: "monitors",
					to: "monitor"
				}, {
					entityType: "mTlsHosts"
				}, {
					entityType: "nel"
				}, {
					entityType: "normalizationSetting"
				}, {
					entityType: "schemaValidationV2"
				}, {
					entityType: "paymentMethod"
				}, {
					entityType: "paymentMethods",
					to: "paymentMethod"
				}, {
					entityType: "pool",
					nestedProps: {
						monitor: "monitor"
					}
				}, {
					entityType: "pools",
					to: "pool"
				}, {
					entityType: "prefixDelegation"
				}, {
					entityType: "prefixDelegations",
					to: "prefixDelegation"
				}, {
					entityType: "prefixServices",
					idProp: "prefix_id"
				}, {
					entityType: "onboardingGuide"
				}, {
					entityType: "organization"
				}, {
					entityType: "originCertificate"
				}, {
					entityType: "originCertificates",
					to: "originCertificate"
				}, {
					entityType: "pageRule"
				}, {
					entityType: "pageRules",
					to: "pageRule"
				}, {
					entityType: "purgeCache"
				}, {
					entityType: "sanitizeRuleset"
				}, {
					entityType: "sanitizeRulesetOverrides"
				}, {
					entityType: "sanitizeRulesets",
					to: "sanitizeRuleset"
				}, {
					entityType: "serviceToken"
				}, {
					entityType: "serviceTokens",
					to: "serviceToken"
				}, {
					entityType: "shortLivedCertificate"
				}, {
					entityType: "shortLivedCertificates",
					to: "shortLivedCertificate"
				}, {
					entityType: "shareStats"
				}, {
					entityType: "spectrumApp"
				}, {
					entityType: "spectrumApps",
					to: "spectrumApp"
				}, {
					entityType: "sslRecommenderPreference"
				}, {
					entityType: "sslRecommendation"
				}, {
					entityType: "totalTLSSettings"
				}, {
					entityType: "certificatePacksByHosts"
				}, {
					entityType: "customHostnamesByHosts"
				}, {
					entityType: "synProtectionRule"
				}, {
					entityType: "synProtectionRules",
					to: "synProtectionRule"
				}, {
					entityType: "synProtectionFilter"
				}, {
					entityType: "synProtectionFilters",
					to: "synProtectionFilter"
				}, {
					entityType: "tcpFlowProtectionRule"
				}, {
					entityType: "tcpFlowProtectionRules",
					to: "tcpFlowProtectionRule"
				}, {
					entityType: "tcpProtectionFilter"
				}, {
					entityType: "tcpProtectionFilters",
					to: "tcpProtectionFilter"
				}, {
					entityType: "dnsProtectionRule"
				}, {
					entityType: "dnsProtectionRules",
					to: "dnsProtectionRule"
				}, {
					entityType: "user",
					nestedProps: {
						organizations: "userOrganization"
					}
				}, {
					entityType: "userOrganization"
				}, {
					entityType: "userAgentRule"
				}, {
					entityType: "userAgentRules",
					to: "userAgentRule"
				}, {
					entityType: "userSessions"
				}, {
					entityType: "regionalHostname",
					idProp: "hostname"
				}, {
					entityType: "regionalHostnames",
					to: "regionalHostname"
				}, {
					entityType: "revokeSession"
				}, {
					entityType: "securityKey"
				}, {
					entityType: "securityKeys"
				}, {
					entityType: "rateLimit"
				}, {
					entityType: "rateLimits",
					to: "rateLimit"
				}, {
					entityType: "auditLogs"
				}, {
					entityType: "userCommPreferences"
				}, {
					entityType: "userDetails"
				}, {
					entityType: "workerRoutes"
				}, {
					entityType: "zone"
				}, {
					entityType: "singleZone",
					to: "zone"
				}, {
					entityType: "zoneSubscription"
				}, {
					entityType: "recheckNameservers"
				}, {
					entityType: "abuseUrls"
				}, {
					entityType: "zoneHold"
				}, {
					entityType: "abuseReview"
				}, {
					entityType: "zones",
					to: "zone"
				}, {
					entityType: "zonesRoot",
					to: "zone"
				}, {
					entityType: "zonesAccount",
					to: "zone"
				}, {
					entityType: "zoneMarketingCampaigns"
				}, {
					entityType: "zoneRuleset"
				}, {
					entityType: "zoneRulesets"
				}, {
					entityType: "zoneRulesetsEnabled"
				}, {
					entityType: "zoneRulesetDLPOverride",
					to: "zoneRuleset"
				}, {
					entityType: "zoneRulesetOverride",
					to: "zoneRuleset"
				}, {
					entityType: "zoneMasters"
				}, {
					entityType: "zoneUiConfig"
				}, {
					entityType: "zoneLockdown"
				}, {
					entityType: "zoneLockdowns",
					to: "zoneLockdown"
				}, {
					entityType: "argoGeoAnalytics"
				}, {
					entityType: "argoGlobalAnalytics"
				}, {
					entityType: "dnsAnalyticsTopNxDomainRecords"
				}, {
					entityType: "dnsAnalyticsTopRecords"
				}, {
					entityType: "dnsAnalyticsTSByRecordType"
				}, {
					entityType: "dnsAnalyticsTSByResponseCode"
				}, {
					entityType: "geographyDnsAnalyticsNoErrorPerColo"
				}, {
					entityType: "geographyDnsAnalyticsNxDomainPerColo"
				}, {
					entityType: "geographyDnsAnalyticsPerColo"
				}, {
					entityType: "geographyHttpAnalytics"
				}, {
					entityType: "h2Prioritization"
				}, {
					entityType: "speculation"
				}, {
					entityType: "firstPartyFonts"
				}, {
					entityType: "imageResizing"
				}, {
					entityType: "rateLimitingAnalytics"
				}, {
					entityType: "rulesets"
				}, {
					entityType: "rum"
				}, {
					entityType: "rumRule"
				}, {
					entityType: "rumRuleset"
				}, {
					entityType: "rumSiteTag"
				}, {
					entityType: "rumRedirectToOnboarding"
				}, {
					entityType: "rumSiteInfo"
				}, {
					entityType: "rumSiteInfoList"
				}, {
					entityType: "rumSiteInfoTagList"
				}, {
					entityType: "rumSiteInfoZoneList"
				}, {
					entityType: "rumFeature"
				}, {
					entityType: "performanceHttpAnalytics"
				}, {
					entityType: "csamScanner"
				}, {
					entityType: "alwaysOnline"
				}, {
					entityType: "coveoCategoryResults"
				}, {
					entityType: "phoneSupportTwoFactor"
				}, {
					entityType: "supportOpenTickets"
				}, {
					entityType: "knownIssueTickets"
				}, {
					entityType: "ticket"
				}, {
					entityType: "phoneSupportOTP"
				}, {
					entityType: "helperbotDiagnostics"
				}, {
					entityType: "chinaNetwork"
				}, {
					entityType: "automaticPlatformOptimization"
				}, {
					entityType: "pageShieldScript"
				}, {
					entityType: "pageShieldScripts",
					to: "pageShieldScript"
				}, {
					entityType: "pageShieldConnection"
				}, {
					entityType: "pageShieldConnections",
					to: "pageShieldConnection"
				}, {
					entityType: "pageShieldPolicy"
				}, {
					entityType: "pageShieldPolicies",
					to: "pageShieldPolicy"
				}, {
					entityType: "securityHttpAnalytics"
				}, {
					entityType: "speedTesting"
				}, {
					entityType: "webhook"
				}, {
					entityType: "webhooks",
					to: "webhook"
				}, {
					entityType: o.D.route
				}, {
					entityType: o.D.routes,
					to: o.D.route
				}, {
					entityType: "domainGroup"
				}, {
					entityType: "domainGroups",
					to: "domainGroup"
				}, {
					entityType: "domainGroupsAllDomain"
				}, {
					entityType: "domainGroupManagerZones",
					to: "zone"
				}, {
					entityType: "domainGroupFormZones",
					to: "zone"
				}, {
					entityType: "HTTPApplicationVersion"
				}, {
					entityType: "HTTPApplicationVersions",
					to: "HTTPApplicationVersion"
				}, {
					entityType: "HTTPApplication",
					nestedProps: {
						versions: "HTTPApplicationVersions"
					}
				}, {
					entityType: "HTTPApplications",
					to: "HTTPApplication"
				}, {
					entityType: "HTTPApplicationConvertedId"
				}, {
					entityType: "WAFMigrationStatus"
				}, {
					entityType: "HTTPApplicationsRuleset"
				}, {
					entityType: "HTTPApplicationsRule"
				}, {
					entityType: "inviteMembersSearchZones",
					to: "zone"
				}, {
					entityType: "inviteMembersZones",
					to: "zone"
				}, {
					entityType: "waitingRoom"
				}, {
					entityType: "waitingRooms",
					to: "waitingRoom"
				}, {
					entityType: "waitingRoomEvent"
				}, {
					entityType: "waitingRoomEvents",
					to: "waitingRoomEvent"
				}, {
					entityType: "zoneVersion"
				}, {
					entityType: "zoneVersionCompare"
				}, {
					entityType: "zoneVersions",
					to: "zoneVersion"
				}, {
					entityType: "zoneApplication",
					nestedProps: {
						versions: "zoneVersions"
					}
				}, {
					entityType: "zoneApplications",
					to: "zoneApplication"
				}, {
					entityType: "WAFMigrationStatus"
				}, {
					entityType: "environments"
				}, {
					entityType: "tenants"
				}, {
					entityType: "accountTypes"
				}, {
					entityType: "permissionGroups"
				}, {
					entityType: "zoneLevelAccessPolicy"
				}, {
					entityType: "zoneLevelAccessPolicies",
					to: "zoneLevelAccessPolicy"
				}, {
					entityType: "oAuthConsentApp"
				}, {
					entityType: "oAuthConsentApps",
					to: "oAuthConsentApp"
				}, {
					entityType: "wafPackages"
				}, {
					entityType: "wafPackageGroup"
				}, {
					entityType: "wafPackageGroups",
					to: "wafPackageGroup"
				}, {
					entityType: "wafRule"
				}, {
					entityType: "wafRules",
					to: "wafRule"
				}, {
					entityType: "web3Hostname"
				}, {
					entityType: "web3Hostnames",
					to: "web3Hostname"
				}, {
					entityType: "web3Blocklist"
				}, {
					entityType: "web3Blocklists",
					to: "web3Blocklist"
				}, {
					entityType: "zaraz"
				}, {
					entityType: c.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: c.BB.rule,
					idProp: "tag"
				}, {
					entityType: c.BB.rules,
					to: c.BB.rule
				}, {
					entityType: c.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: c.BB.dstAddresses,
					to: c.BB.dstAddress
				}, {
					entityType: c.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: c.BB.dnsRecords,
					to: c.BB.dnsRecord
				}, {
					entityType: c.BB.zone,
					idProp: "tag"
				}]),
				p = r => r.entities,
				_ = (...r) => (0, m.P1)(d, p, ...r),
				t = (0, m.QB)(d)
		},
		"../react/app/redux/utils.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				F: function() {
					return c
				},
				_: function() {
					return o
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const o = m => (s, g, d) => (0, e.SC)(s, g, d, {
					hideErrorAlert: !0
				}).catch(m),
				c = m => s => {
					if (s.status === m) return s;
					throw s
				}
		},
		"../react/common/actionTypes.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Cm: function() {
					return g
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return d
				},
				Li: function() {
					return _
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return c
				},
				Yc: function() {
					return r
				},
				gM: function() {
					return m
				},
				lV: function() {
					return s
				},
				s1: function() {
					return p
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				c = "MODAL_OPEN",
				m = "MODAL_CLOSE",
				s = "TOGGLE_ON",
				g = "TOGGLE_OFF",
				d = "SET_ACTIVE",
				p = "CLEAR_ACTIVE",
				_ = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(a) {
				return a.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", a.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", a.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", a.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", a.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", a.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", a.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", a.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", a.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", a
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				AX: function() {
					return a
				},
				YT: function() {
					return _
				},
				ct: function() {
					return d
				},
				d6: function() {
					return t
				},
				kt: function() {
					return r
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/common/constants/index.ts");

			function c(l) {
				for (var i = 1; i < arguments.length; i++) {
					var f = arguments[i] != null ? Object(arguments[i]) : {},
						y = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(f).filter(function(S) {
						return Object.getOwnPropertyDescriptor(f, S).enumerable
					})), y.forEach(function(S) {
						m(l, S, f[S])
					})
				}
				return l
			}

			function m(l, i, f) {
				return i = s(i), i in l ? Object.defineProperty(l, i, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[i] = f, l
			}

			function s(l) {
				var i = g(l, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function g(l, i) {
				if (typeof l != "object" || l === null) return l;
				var f = l[Symbol.toPrimitive];
				if (f !== void 0) {
					var y = f.call(l, i || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(l)
			}
			const d = l => {
					const i = l.payload.map(f => c({}, f, {
						membershipId: f.id,
						id: f.account.id
					}));
					return c({}, l, {
						payload: i
					})
				},
				p = l => {
					const i = d(l);
					return Array.isArray(i.payload) ? c({}, l, {
						payload: i.payload[0]
					}) : c({}, l, {
						payload: null
					})
				},
				_ = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", d),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...l) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: l
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", p)
		},
		"../react/common/actions/modalActions.ts": function(W, E, n) {
			"use strict";
			n.r(E), n.d(E, {
				closeModal: function() {
					return m
				},
				openModal: function() {
					return c
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function c(s, g, d = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: s,
						props: g
					},
					options: d
				}
			}

			function m(s) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: s
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				IH: function() {
					return s
				},
				Vp: function() {
					return g
				},
				ZK: function() {
					return p
				},
				um: function() {
					return d
				},
				vU: function() {
					return _
				}
			});
			var e = n("../react/common/actionTypes.ts");

			function o(t) {
				return {
					type: e.Ng,
					notification: t
				}
			}

			function c(t) {
				return {
					type: e.Cz,
					notificationId: t
				}
			}
			let m = 0;

			function s(t, r, a = {}) {
				return a = a || {},
					function(l) {
						let i = m++,
							f = {
								id: i,
								type: t,
								message: r,
								delay: a.delay,
								persist: a.persist === void 0 ? !1 : a.persist,
								closable: a.closable === void 0 ? !0 : a.closable,
								onClose() {
									l(c(i)), a.onClose && a.onClose.apply(null, arguments)
								}
							};
						l(o(f))
					}
			}

			function g(t, r) {
				return s("success", t, r)
			}

			function d(t, r) {
				return s("info", t, r)
			}

			function p(t, r) {
				return s("warning", t, r)
			}

			function _(t, r) {
				return s("error", t, r)
			}
		},
		"../react/common/actions/userActions.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				BT: function() {
					return d
				},
				Ut: function() {
					return S
				},
				V_: function() {
					return P
				},
				Y9: function() {
					return f
				},
				Z0: function() {
					return R
				},
				mp: function() {
					return y
				},
				r3: function() {
					return T
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/app/redux/utils.ts");

			function c(D) {
				for (var C = 1; C < arguments.length; C++) {
					var q = arguments[C] != null ? Object(arguments[C]) : {},
						ee = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(q).filter(function(X) {
						return Object.getOwnPropertyDescriptor(q, X).enumerable
					})), ee.forEach(function(X) {
						m(D, X, q[X])
					})
				}
				return D
			}

			function m(D, C, q) {
				return C = s(C), C in D ? Object.defineProperty(D, C, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[C] = q, D
			}

			function s(D) {
				var C = g(D, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function g(D, C) {
				if (typeof D != "object" || D === null) return D;
				var q = D[Symbol.toPrimitive];
				if (q !== void 0) {
					var ee = q.call(D, C || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(D)
			}
			const d = (0, e.C)("user").get`/user`,
				p = (0, e.C)("user").patch`/user`,
				_ = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				l = (0, e.C)("user").delete`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/email`;

			function f(...D) {
				return i(...D)
			}
			const y = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				S = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(D => c({}, D, {
					body: c({}, D.body, {
						result: {}
					})
				}))),
				P = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				T = (0, e.C)("userDetails").get`/user/details`,
				R = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(W, E, n) {
			"use strict";
			n.d(E, {
				a: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e),
				c = n("../react/common/selectors/accountSelectors.ts");
			const m = g => {
					if (typeof g != "string") throw new Error("invalid Param Type provided");
					const d = g.slice(1).split(":");
					if (d.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: d[0],
						value: d[1]
					}
				},
				s = (g, d) => {
					const {
						resourceId: p,
						accountId: _,
						legacyPermission: t
					} = d;
					let {
						read: r,
						edit: a
					} = d;
					const l = {};
					t && (a = `#${t}:edit`, r = `#${t}:read`);
					const i = p || _;
					if (r) {
						const f = Array.isArray(r) ? r : [r];
						l.isReadable = f.some(y => {
							const S = m(y);
							return (0, c.DT)(g, i, P => !!(P[S.key] && P[S.key][S.value]))
						})
					}
					if (a) {
						const f = Array.isArray(a) ? a : [a];
						l.isEditable = f.some(y => {
							const S = m(y);
							return (0, c.DT)(g, i, P => !!(P[S.key] && P[S.key][S.value]))
						})
					}
					return l
				};
			E.Z = (0, e.connect)(s)
		},
		"../react/common/components/AccessControl/index.js": function(W, E, n) {
			"use strict";
			var e = n("../../../../node_modules/prop-types/index.js"),
				o = n.n(e),
				c = n("../react/app/HoCs/withEntities.tsx"),
				m = n("../react/common/components/AccessControl/SAAConnect.js");

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), i.forEach(function(f) {
						g(r, f, l[f])
					})
				}
				return r
			}

			function g(r, a, l) {
				return a = d(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function d(r) {
				var a = p(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function p(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}

			function _(r) {
				const l = ["isReadable", "isEditable"].reduce((i, f) => r.hasOwnProperty(f) ? s({}, i, {
					[f]: r[f]
				}) : i, {});
				return r.children(l)
			}
			_.propTypes = {
				resourceType: o().string,
				resourceId: o().string,
				read: o().oneOfType([o().string, o().array]),
				edit: o().oneOfType([o().string, o().array]),
				accountId: o().string,
				isReadable: o().bool,
				isEditable: o().bool,
				children: o().func
			};
			const t = (0, c.Z)((0, m.Z)(_));
			t.displayName = "AccessControl", E.Z = t
		},
		"../react/common/components/Apple/utils.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				PP: function() {
					return r
				},
				RJ: function() {
					return d
				},
				tz: function() {
					return a
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				s = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const g = () => p.test(window.location.pathname) || c.E.has(m.Qq),
				d = () => c.E.get(m.Qq),
				p = /^\/login\/apple(\/)?/,
				t = [p, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let l = !1;
					t.forEach(f => {
						if (f.test(window.location.pathname)) {
							l = !0;
							return
						}
					});
					const i = g() && l;
					return i && (0, s.C8)(s.LF.OFF), i
				},
				a = l => {
					l && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let i = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					l && (i = i + `&jwt=${l}`), window.location.href = i
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				oG: function() {
					return l
				},
				sN: function() {
					return d.sN
				},
				v2: function() {
					return d.v2
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../node_modules/@cloudflare/component-button/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = n("../../../common/intl/intl-react/src/index.ts"),
				g = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("../react/common/components/Dropdown/index.tsx"),
				p = n("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function _() {
				return _ = Object.assign ? Object.assign.bind() : function(i) {
					for (var f = 1; f < arguments.length; f++) {
						var y = arguments[f];
						for (var S in y) Object.prototype.hasOwnProperty.call(y, S) && (i[S] = y[S])
					}
					return i
				}, _.apply(this, arguments)
			}

			function t(i, f) {
				if (i == null) return {};
				var y = r(i, f),
					S, P;
				if (Object.getOwnPropertySymbols) {
					var T = Object.getOwnPropertySymbols(i);
					for (P = 0; P < T.length; P++) S = T[P], !(f.indexOf(S) >= 0) && (!Object.prototype.propertyIsEnumerable.call(i, S) || (y[S] = i[S]))
				}
				return y
			}

			function r(i, f) {
				if (i == null) return {};
				var y = {},
					S = Object.keys(i),
					P, T;
				for (T = 0; T < S.length; T++) P = S[T], !(f.indexOf(P) >= 0) && (y[P] = i[P]);
				return y
			}
			const a = (0, g.createStyledComponent)(({
				theme: i
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${i.radii[2]}px 0 0 ${i.radii[2]}px`,
					borderRight: `1px solid ${i.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${i.radii[2]}px ${i.radii[2]}px 0`,
					paddingRight: i.space[2],
					paddingLeft: i.space[2]
				},
				"& button": {
					color: (0, p.Yc)() ? i.colors.text : void 0
				},
				"& button:hover": {
					color: (0, p.Yc)() ? i.colors.text : void 0
				}
			}));

			function l(i) {
				let {
					menu: f,
					containerProps: y,
					disabled: S,
					disabledDropdown: P = S
				} = i, T = t(i, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: R
				} = (0, s.QT)();
				return o().createElement(a, _({}, y, {
					role: "group"
				}), o().createElement(c.zx, _({}, T, {
					disabled: S
				})), o().createElement(d.Lt, {
					trigger: o().createElement(c.zx, {
						type: T.type,
						"aria-haspopup": "menu",
						disabled: P
					}, o().createElement(m.J, {
						type: "caret-down",
						label: R("common.more"),
						size: 12
					})),
					menu: f
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				m = n.n(c),
				s = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const g = ({
				children: d
			}) => o().createElement(s.xu, {
				height: 411
			}, d);
			g.propTypes = {
				children: m().node
			}, E.Z = g
		},
		"../react/common/components/ModalManager.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				ZP: function() {
					return i
				},
				dd: function() {
					return a
				},
				vR: function() {
					return r
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("webpack/sharing/consume/default/react-redux/react-redux");
			const m = f => f.application.modals;
			var s = n("../react/common/actions/modalActions.ts"),
				g = n("../../../../node_modules/swr/core/dist/index.mjs"),
				d = n("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function p() {
				return p = Object.assign ? Object.assign.bind() : function(f) {
					for (var y = 1; y < arguments.length; y++) {
						var S = arguments[y];
						for (var P in S) Object.prototype.hasOwnProperty.call(S, P) && (f[P] = S[P])
					}
					return f
				}, p.apply(this, arguments)
			}
			const _ = o().createContext(null);
			class t extends o().Component {
				render() {
					const {
						modals: y,
						closeModal: S
					} = this.props;
					return o().createElement(o().Fragment, null, y.map(({
						ModalComponent: P,
						props: T = {},
						id: R
					}) => {
						const D = () => {
							typeof T.onClose == "function" && T.onClose(), S(P)
						};
						return o().createElement(_.Provider, {
							key: R,
							value: {
								closeModal: D
							}
						}, o().createElement(g.J$, {
							value: d.ZP
						}, o().createElement(P, p({}, T, {
							isOpen: !0,
							closeModal: D
						}))))
					}))
				}
			}

			function r() {
				const f = o().useContext(_);
				if (!f) throw new Error("useModalContext must be used within a ModalContext");
				return f
			}

			function a() {
				const f = (0, c.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...y) {
						return f(s.openModal(...y))
					}, [f]),
					closeModal: (0, e.useCallback)(function(...y) {
						return f(s.closeModal(...y))
					}, [f])
				}
			}
			var i = (0, c.connect)(f => ({
				modals: m(f)
			}), s)(t)
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				BQ: function() {
					return t
				},
				Gn: function() {
					return p
				},
				JR: function() {
					return _
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return g
				},
				ZI: function() {
					return s
				},
				if: function() {
					return o
				},
				q6: function() {
					return c
				},
				w_: function() {
					return m
				},
				zl: function() {
					return d
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				c = "date-from",
				m = "date-to",
				s = "from",
				g = "to",
				d = "all",
				p = {
					equals: "eq",
					notEquals: "neq",
					greaterThanOrEqual: "geq",
					greaterThan: "gt",
					lessThan: "lt",
					lessThanOrEqual: "leq",
					like: "like",
					notLike: "notlike",
					has: "has",
					notHas: "nothas",
					hasAll: "hasall",
					hasAny: "hasany",
					contains: "contains",
					startsWith: "starts",
					endsWith: "ends",
					notContains: "!contains",
					notStartsWith: "!starts",
					notEndsWith: "!ends",
					in: "in",
					notIn: "!in"
				};
			let _ = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				t = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/constants/analytics/botScoreSrc.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				EG: function() {
					return c
				},
				Me: function() {
					return s
				},
				sk: function() {
					return m
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/index.js"),
				o = n("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let c = function(g) {
				return g.NOT_COMPUTED = "not_computed", g.MACHINE_LEARNING = "machine_learning", g.HEURISTICS = "heuristics", g.BEHAVIORAL_ANALYSIS = "behavioral_analysis", g.JS_FINGERPRINTING = "js_fingerprinting", g.VERIFIED_BOT = "verified_bot", g.CLOUDFLARE_SERVICE = "cloudflare_service", g
			}({});
			const m = {
					[c.NOT_COMPUTED]: "Not Computed",
					[c.MACHINE_LEARNING]: "Machine Learning",
					[c.HEURISTICS]: "Heuristics",
					[c.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[c.JS_FINGERPRINTING]: "JS Fingerprinting",
					[c.VERIFIED_BOT]: "Verified Bot",
					[c.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				s = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [c.NOT_COMPUTED, c.MACHINE_LEARNING, c.HEURISTICS, c.BEHAVIORAL_ANALYSIS, c.JS_FINGERPRINTING, c.VERIFIED_BOT, c.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Gq: function() {
					return m
				},
				g$: function() {
					return c
				},
				WX: function() {
					return e
				},
				E0: function() {
					return _
				},
				Hw: function() {
					return g
				},
				Ed: function() {
					return s
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return l
				},
				hQ: function() {
					return d
				},
				SP: function() {
					return p
				}
			});
			let e = function(i) {
				return i.page_rules = "page_rules", i.automatic_platform_optimization = "automatic_platform_optimization", i
			}({});
			const o = "page_rules",
				c = "automatic_platform_optimization",
				m = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					volume_included: 1,
					ubb_frequency: 1,
					ubb_price: .1,
					ubb_unit: "gigabyte"
				},
				s = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				g = {
					currency: "USD",
					frequency: "monthly",
					requests_included: 5e5,
					ubb_price: .5,
					ubb_frequency: 5e5
				},
				d = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e4,
					ubb_frequency: 1e4,
					ubb_price: .05
				},
				p = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					ubb_frequency: 1e3,
					ubb_storage_price: 5,
					ubb_streaming_price: 1,
					ubb_unit: "minute"
				},
				_ = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					ubb_unit: "image",
					ubb_delivery_price: 1,
					ubb_frequency_delivery: 1e5,
					ubb_storage_price: 5,
					ubb_storage_frequency: 1e5,
					ubb_transformations_frequency: 2e3,
					ubb_transformations_price: 1
				};
			var t = n("../react/common/constants/billing/tax.ts"),
				r = n("../react/common/constants/billing/tracking.ts"),
				a = n("../react/common/constants/billing/workers.ts");
			const l = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				FP: function() {
					return e
				},
				Nl: function() {
					return s
				},
				SO: function() {
					return c
				},
				aA: function() {
					return o
				}
			});
			const e = {
					NOTIFICATION_CLICK: "Notification link click",
					CANCELED_SUBSCRIPTION: "Canceled subscription"
				},
				o = {
					NOTIFICATIONS: "notifications",
					SUBSCRIPTIONS: "subscriptions"
				},
				c = {
					BILLING: "billing"
				},
				m = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				s = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Dk: function() {
					return l
				},
				Dy: function() {
					return i
				},
				E_: function() {
					return g
				},
				K$: function() {
					return P
				},
				Lv: function() {
					return f
				},
				S4: function() {
					return s
				},
				UM: function() {
					return t
				},
				Xf: function() {
					return _
				},
				Y1: function() {
					return d
				},
				p6: function() {
					return p
				},
				q0: function() {
					return m
				},
				rg: function() {
					return y
				},
				sJ: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const m = "healthy",
				s = "degraded",
				g = "critical",
				d = "unknown",
				p = "not-monitored",
				_ = o().from({
					FREE: "free",
					PRO: "pro",
					BIZ: "business",
					ENT: "enterprise"
				}),
				t = {
					ZONES_ROOT_REQUESTED: "zones_root_requested",
					ZONES_ACCOUNT_REQUESTED: "zones_account_requested",
					ZONES_HEADER_REQUESTED: "zones_header_requested",
					MEMBERSHIPS_ROOT_REQUESTED: "membership_root_requested",
					ACCOUNT_MEMBERS_REQUESTED: "account_members_requested"
				},
				r = {
					f: _.FREE,
					p: _.PRO,
					b: _.BIZ
				},
				a = "marketing-pt",
				l = () => {
					const T = c.Z.get(a);
					if (!!T) return r[T]
				},
				i = ["gov"],
				f = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				y = "banner-notification-interactions",
				S = null;
			let P = function(T) {
				return T.SUPER_ADMIN = "Super Administrator - All Privileges", T.ADMIN = "Administrator", T.ADMIN_READ_ONLY = "Administrator Read Only", T
			}({})
		},
		"../react/common/constants/index.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Dk: function() {
					return e.Dk
				},
				Dy: function() {
					return e.Dy
				},
				E0: function() {
					return o.E0
				},
				E_: function() {
					return e.E_
				},
				K$: function() {
					return e.K$
				},
				PLANS: function() {
					return e.Xf
				},
				S4: function() {
					return e.S4
				},
				UM: function() {
					return e.UM
				},
				WX: function() {
					return o.WX
				},
				Y1: function() {
					return e.Y1
				},
				bi: function() {
					return o.bi
				},
				g$: function() {
					return o.g$
				},
				p6: function() {
					return e.p6
				},
				q0: function() {
					return e.q0
				},
				rg: function() {
					return e.rg
				},
				sJ: function() {
					return e.sJ
				}
			});
			var e = n("../react/common/constants/constants.ts"),
				o = n("../react/common/constants/billing/index.ts")
		},
		"../react/common/hooks/suspenseHelpers.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				bt: function() {
					return d
				},
				nW: function() {
					return s
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const m = "suspenseComplete";

			function s() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(m))
				}, [])
			}

			function g(p) {
				(0, c.OR)(m, () => {
					window.setTimeout(p, 0)
				}, {
					target: window
				})
			}

			function d(...p) {
				const [_, t] = p;
				o().useLayoutEffect(_, t), g(_)
			}
		},
		"../react/common/hooks/useCachedState.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				j: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function m(s, {
				key: g,
				cache: d = c.E
			} = {}) {
				const p = g !== void 0 && d.get(g),
					[_, t] = (0, e.useState)(p || s);
				return [_, a => {
					t(l => (a instanceof Function && (a = a(l)), g !== void 0 && d.set(g, a), a))
				}]
			}
		},
		"../react/common/hooks/useClickOutside.ts": function(W, E, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");

			function o(c, m) {
				(0, e.OR)("click", s => {
					var g;
					s.target instanceof Node && s.target.isConnected && ((g = c.current) === null || g === void 0 ? void 0 : g.contains(s.target)) === !1 && m(s)
				}, {
					capture: !0
				})
			}
			E.Z = o
		},
		"../react/common/hooks/useGate.ts": function(W, E, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(c) {
				return (0, e.qf)(c)
			}
			E.Z = o
		},
		"../react/common/hooks/usePrevious.ts": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function c(m) {
				const s = (0, e.useRef)(m);
				return (0, e.useEffect)(() => {
					s.current = m
				}, [m]), s.current
			}
			E.Z = c
		},
		"../react/common/middleware/sparrow/errors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Uh: function() {
					return s
				},
				ez: function() {
					return m
				},
				oV: function() {
					return g
				}
			});

			function e(d, p, _) {
				return p = o(p), p in d ? Object.defineProperty(d, p, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = _, d
			}

			function o(d) {
				var p = c(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function c(d, p) {
				if (typeof d != "object" || d === null) return d;
				var _ = d[Symbol.toPrimitive];
				if (_ !== void 0) {
					var t = _.call(d, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			class m extends Error {
				constructor(p, _) {
					super(_);
					e(this, "eventName", void 0), this.eventName = p, this.name = "SparrowValidationError"
				}
			}
			class s extends m {
				constructor(p) {
					super(p, `Event not allowed: "${p}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class g extends m {
				constructor(p, _) {
					super(p, `Found invalid properties on event: "${p}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = _
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				AC: function() {
					return Qe
				},
				Au: function() {
					return w
				},
				B: function() {
					return Ke
				},
				B3: function() {
					return Ye
				},
				BG: function() {
					return ee
				},
				Bp: function() {
					return Fe
				},
				D0: function() {
					return R
				},
				DT: function() {
					return b
				},
				EL: function() {
					return ae
				},
				GE: function() {
					return Ee
				},
				Ko: function() {
					return O
				},
				Kx: function() {
					return K
				},
				Le: function() {
					return B
				},
				O4: function() {
					return je
				},
				Ou: function() {
					return I
				},
				Py: function() {
					return et
				},
				QI: function() {
					return xe
				},
				RO: function() {
					return Te
				},
				T3: function() {
					return Xe
				},
				T8: function() {
					return q
				},
				UX: function() {
					return G
				},
				VP: function() {
					return _e
				},
				Xo: function() {
					return tt
				},
				Xu: function() {
					return z
				},
				Yi: function() {
					return ke
				},
				Yj: function() {
					return v
				},
				Zu: function() {
					return M
				},
				bC: function() {
					return ce
				},
				f8: function() {
					return Q
				},
				hI: function() {
					return vt
				},
				hN: function() {
					return Y
				},
				hX: function() {
					return Be
				},
				iq: function() {
					return Ve
				},
				nE: function() {
					return X
				},
				oD: function() {
					return U
				},
				oI: function() {
					return J
				},
				oJ: function() {
					return ze
				},
				uF: function() {
					return fe
				},
				ut: function() {
					return We
				},
				vU: function() {
					return Le
				},
				wQ: function() {
					return Ae
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				o = n("../../../../node_modules/lodash/get.js"),
				c = n.n(o),
				m = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				s = n.n(m),
				g = n("../../../../node_modules/reselect/lib/index.js"),
				d = n("../../../../node_modules/moment/moment.js"),
				p = n.n(d),
				_ = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				r = n("../react/common/selectors/userSelectors.ts"),
				a = n("../react/common/selectors/entitlementsSelectors.ts"),
				l = n("../react/app/components/DeepLink/selectors.ts"),
				i = n("../react/common/constants/index.ts"),
				f = n("../react/common/utils/hasRole.ts");

			function y(k) {
				for (var ne = 1; ne < arguments.length; ne++) {
					var ue = arguments[ne] != null ? Object(arguments[ne]) : {},
						ye = Object.keys(ue);
					typeof Object.getOwnPropertySymbols == "function" && ye.push.apply(ye, Object.getOwnPropertySymbols(ue).filter(function(Pe) {
						return Object.getOwnPropertyDescriptor(ue, Pe).enumerable
					})), ye.forEach(function(Pe) {
						S(k, Pe, ue[Pe])
					})
				}
				return k
			}

			function S(k, ne, ue) {
				return ne = P(ne), ne in k ? Object.defineProperty(k, ne, {
					value: ue,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[ne] = ue, k
			}

			function P(k) {
				var ne = T(k, "string");
				return typeof ne == "symbol" ? ne : String(ne)
			}

			function T(k, ne) {
				if (typeof k != "object" || k === null) return k;
				var ue = k[Symbol.toPrimitive];
				if (ue !== void 0) {
					var ye = ue.call(k, ne || "default");
					if (typeof ye != "object") return ye;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ne === "string" ? String : Number)(k)
			}
			const R = k => {
					const ne = fe(k);
					return ne == null ? void 0 : ne.account
				},
				D = k => {
					const ne = (0, r.PR)(k);
					if (ne) {
						const ue = ne.id;
						return k.accountAccess[ue] || {}
					}
					return {}
				},
				C = k => k.accountsDetailed,
				q = (0, t.P1)("accountsDetailed", C),
				ee = k => k.memberships,
				X = (0, g.P1)((0, t.P1)("memberships", ee), l.U, (k, ne) => !!ne && !!k ? k.filter(ue => ne.includes(ue.id)) : k),
				Y = k => k.accountFlags && k.accountFlags.data,
				K = k => k.accountFlags,
				B = (k, ne, ue) => {
					const ye = Y(k);
					return !ye || !ye[ne] ? null : ye[ne][ue]
				},
				$ = k => k.accountFlags.isRequesting,
				J = (k, ...ne) => c()(k, ["accountFlagsChanges", "data", ...ne]),
				Q = k => k.accountFlagsChanges.isRequesting,
				Z = (0, g.P1)(Y, K, (k, ne) => ({
					data: k,
					meta: ne
				})),
				se = (k, ne, ue) => !!(isEnterpriseSSEnabledSelector(k) && B(k, ne, ue)),
				z = k => k.membership,
				fe = (0, t.P1)("membership", z),
				j = (0, g.P1)(fe, z, (k, ne) => ({
					data: k,
					meta: ne
				})),
				I = k => {
					const {
						roles: ne = []
					} = fe(k) || {};
					return Boolean(ne.find(ue => ue === "Super Administrator - All Privileges" || ue === "Billing"))
				},
				U = k => {
					const ne = D(k),
						ue = Se.getMemberships(k) ? s().asMutable(Se.getMemberships(k)) : [];
					if (!!ue) return s().from(ue.map(ye => y({}, ye, {
						lastSeen: ne[ye.account.id] ? ne[ye.account.id].lastSeen : null
					})).sort((ye, Pe) => ye.lastSeen && Pe.lastSeen ? Pe.lastSeen - ye.lastSeen : 0))
				},
				G = k => k.filteredMemberships,
				ae = (0, t.P1)("filteredMemberships", G),
				M = (0, g.P1)(fe, k => k == null ? void 0 : k.permissions),
				v = (0, g.P1)(M, k => (0, e.Z)(ne => {
					var ue;
					return (ue = k == null ? void 0 : k[ne]) !== null && ue !== void 0 ? ue : {
						read: !1,
						edit: !1
					}
				})),
				O = (0, g.P1)(fe, k => k == null ? void 0 : k.policies),
				b = (k, ne, ue) => {
					let ye = Se.getMembership(k);
					if (!ye) {
						const Pe = Se.getMemberships(k);
						if (!Pe || !ne) return !1;
						ye = Pe.find(Ne => Ne.account.id === ne)
					}
					if (!ye || !ue) return !1;
					try {
						return ue(ye.permissions)
					} catch {
						return !1
					}
				},
				F = k => {
					var ne, ue;
					return (ne = (ue = R(k)) === null || ue === void 0 ? void 0 : ue.meta.has_pro_zones) !== null && ne !== void 0 ? ne : !1
				},
				x = k => {
					var ne, ue;
					return (ne = (ue = R(k)) === null || ue === void 0 ? void 0 : ue.meta.has_business_zones) !== null && ne !== void 0 ? ne : !1
				},
				ce = k => x(k) || F(k),
				ge = (k, ne) => {
					const ue = Oe(k, ne);
					return !!ue && !!ue.enabled
				},
				Oe = (k, ne) => {
					const ue = Se.getMembership(k),
						ye = ue && ue.account;
					return ye && ye.legacy_flags && ye.legacy_flags[ne]
				},
				Ae = k => ge(k, "custom_pages"),
				Re = k => !!k && k["webhooks.webhooks.enabled"],
				N = k => B(k, "bots", "enabled"),
				de = k => B(k, "billing", "annual_subscriptions_enable"),
				Te = k => k ? Boolean(B(k, "ConstellationAI", "v2_ui")) : !1,
				Be = k => k ? Boolean(B(k, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Ke = k => k ? Boolean(B(k, "AIgateway", "enabled")) : !1,
				He = k => Oe(k, "enterprise_zone_quota"),
				Ze = k => {
					const ne = He(k);
					return !ne || !ne.available ? -1 : ne.available
				},
				Ve = k => k.accountMembers,
				Ye = (0, t.P1)("accountMembers", Ve),
				je = k => k.accountMember && k.accountMember.isRequesting,
				qe = k => k.accountRoles,
				Qe = (0, t.P1)("accountRoles", qe),
				et = (k, ne) => {
					const ue = Se.getMemberships(k),
						ye = ue && ue.find(Ce => Ce.account.id === ne);
					if (ye) return ye.account.name.replace(" Account", " account");
					const Pe = Se.getMembership(k),
						Ne = Pe && Pe.account;
					return Ne && Ne.id === ne ? Ne.name : null
				},
				We = (k, ne) => {
					const ue = Se.getMemberships(k),
						ye = ue && ue.find(Ce => Ce.account.id === ne);
					if (ye) return ye.account.settings.access_approval_expiry;
					const Pe = Se.getMembership(k),
						Ne = Pe && Pe.account;
					return Ne && Ne.id === ne ? Ne.settings.access_approval_expiry : null
				},
				tt = (k, ne) => {
					const ue = We(k, ne);
					return ue ? p().utc(ue).isAfter() : !1
				},
				Xe = (k, ne, ue) => {
					const ye = We(k, ne);
					let Pe = ye ? p().utc(ye) : null;
					return !Pe || !Pe.isAfter() ? "" : Pe && Pe.year() === 3e3 ? ue("account.access_approval.card_expiration_forever") : ue("account.access_approval.card_expiration_text", {
						expiryTimestamp: Pe.local().format(_.U.DateTime)
					})
				},
				ze = k => k && k.member && k.member.edit,
				w = (k, ne) => {
					const ue = Se.getMembership(k),
						ye = ue && ue.account;
					return ye ? ye.id !== ne : !1
				},
				te = k => k.dpa,
				V = (0, t.P1)("dpa", te),
				re = k => k.webhook,
				pe = k => k.webhooks,
				me = (0, t.P1)("webhook", pe),
				_e = k => k.accountLegoContract,
				we = (0, t.P1)("accountLegoContract", _e),
				xe = k => {
					const ne = we(k);
					return (ne == null ? void 0 : ne.lego_state) ? ne.lego_state : ""
				},
				Ie = k => xe(k) === "signed",
				Ee = k => _e(k).isRequesting,
				Le = k => {
					const ne = we(k);
					return ne && ne.subscription_type ? ne.subscription_type : ""
				},
				ct = k => Le(k) !== "",
				Se = {
					getMembership: fe,
					getMemberships: X,
					getFilteredMemberships: ae,
					getAccountMembers: Ye,
					getAccountRoles: Qe
				},
				Fe = k => k.accountSingle,
				ke = (0, t.P1)("accountSingle", Fe),
				vt = k => {
					const ne = [i.K$.SUPER_ADMIN, i.K$.ADMIN];
					return (0, f.n)(k, ne)
				}
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				$f: function() {
					return i
				},
				AD: function() {
					return s
				},
				BF: function() {
					return l
				},
				Bs: function() {
					return R
				},
				Ci: function() {
					return v
				},
				E6: function() {
					return a
				},
				Hq: function() {
					return Ae
				},
				Ms: function() {
					return q
				},
				Q2: function() {
					return g
				},
				Td: function() {
					return P
				},
				Z: function() {
					return F
				},
				a: function() {
					return T
				},
				a5: function() {
					return ce
				},
				du: function() {
					return p
				},
				ec: function() {
					return Q
				},
				f: function() {
					return Oe
				},
				hL: function() {
					return x
				},
				ji: function() {
					return O
				},
				jo: function() {
					return ee
				},
				k4: function() {
					return ge
				},
				lI: function() {
					return m
				},
				p1: function() {
					return y
				},
				pK: function() {
					return Re
				},
				pf: function() {
					return t
				},
				qR: function() {
					return S
				},
				rV: function() {
					return d
				},
				u1: function() {
					return _
				},
				w4: function() {
					return r
				},
				yD: function() {
					return b
				}
			});
			var e = n("../react/utils/url.ts");

			function o(N, de) {
				return N && N[de]
			}
			const c = N => !m(N).isRequesting;

			function m(N) {
				return N.entitlements.zone
			}

			function s(N) {
				return m(N).data
			}
			const g = N => {
				var de, Te;
				return ((de = m(N).paginationData) === null || de === void 0 || (Te = de.options) === null || Te === void 0 ? void 0 : Te.editedDate) || {}
			};

			function d(N, de) {
				const Te = s(N);
				return Te ? o(Te, de) : void 0
			}
			const p = (N, de) => d(N, de) === !0;

			function _(N) {
				return N.entitlements.account
			}

			function t(N) {
				return _(N).data
			}
			const r = N => {
				var de, Te;
				return ((de = _(N).paginationData) === null || de === void 0 || (Te = de.options) === null || Te === void 0 ? void 0 : Te.editedDate) || {}
			};

			function a(N) {
				return !_(N).isRequesting
			}

			function l(N, de) {
				const Te = t(N);
				return Te ? o(Te, de) : void 0
			}

			function i(N, de) {
				return l(N, de) === !0
			}

			function f(N, de) {
				return de.every(Te => i(N, Te))
			}

			function y(N) {
				return i(N, "contract.customer_enabled")
			}

			function S(N) {
				return i(N, "contract.self_service_allowed")
			}

			function P(N) {
				return i(N, "billing.partners_managed")
			}
			const T = N => y(N) && S(N),
				R = N => i(N, "enterprise.ecp_allowed");

			function D(N) {
				return C(N) || i(N, "argo.allow_smart_routing") || i(N, "argo.allow_tiered_caching") || i(N, "rate_limiting.enabled") || i(N, "ctm.enabled") || i(N, "workers.enabled") || i(N, "workers.kv_store.enabled") || i(N, "stream.enabled")
			}
			const C = N => p(N, "argo.allow_smart_routing") || p(N, "argo.allow_tiered_caching"),
				q = N => i(N, "zone.cname_setup_allowed") || i(N, "zone.partial_setup_allowed") || p(N, "zone.partial_setup_allowed"),
				ee = N => i(N, "argo.allow_smart_routing") || p(N, "argo.allow_smart_routing"),
				X = N => i(N, "argo.allow_tiered_caching") || p(N, "argo.allow_tiered_caching"),
				Y = N => ee(N) || X(N),
				K = N => i(N, "ctm.enabled"),
				B = N => {
					const de = l(N, "ctm.load_balancers");
					return typeof de == "number" ? de : 0
				},
				$ = N => {
					const de = l(N, "ctm.pools");
					return typeof de == "number" ? de : 0
				},
				J = N => {
					const de = l(N, "ctm.origins");
					return typeof de == "number" ? de : 0
				},
				Q = N => i(N, "workers.enabled"),
				Z = N => i(N, "stream.enabled"),
				se = N => {
					const de = l(N, "access.users_allowed");
					return typeof de == "number" ? de : 0
				},
				z = N => se(N) > 0,
				fe = N => {
					const de = d(N, "dedicated_certificates");
					return typeof de == "number" ? de : 0
				},
				j = N => fe(N) > 0,
				I = N => {
					const de = d(N, "rate_limiting.max_rules");
					return typeof de == "number" ? de : 0
				},
				U = N => i(N, "rate_limiting.enabled"),
				G = N => {
					const de = d(N, "page_rules");
					return typeof de == "number" ? de : 0
				},
				ae = N => G(N) > 0,
				M = N => {
					const de = l(N, "dns_firewall.max_clusters_allowed");
					return typeof de == "number" ? de : 0
				},
				v = N => M(N) > 0,
				O = N => p(N, "zone.advanced_certificate_manager") || i(N, "zone.advanced_certificate_manager"),
				b = N => d(N, "authoritative_dns.proxy_record_allowed") === !1 || l(N, "authoritative_dns.proxy_record_allowed") === !1,
				F = N => i(N, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				x = N => d(N, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				ce = N => {
					const de = d(N, "authoritative_dns.min_record_ttl_allowed");
					return typeof de == "number" && de > 1 ? de : 60
				},
				ge = N => i(N, "foundation_dns.advanced_nameservers_allowed") || p(N, "foundation_dns.advanced_nameservers_allowed"),
				Oe = (N, de) => ((0, e.el)(window.location.pathname) ? d : l)(N, de),
				Ae = N => i(N, "authoritative_dns.multi_provider_allowed") || p(N, "authoritative_dns.multi_provider_allowed"),
				Re = N => i(N, "secondary_dns.secondary_overrides") || p(N, "secondary_dns.secondary_overrides")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				r: function() {
					return m
				},
				v: function() {
					return s
				}
			});
			var e = n("../react/utils/i18n.ts"),
				o = n("../../../common/intl/intl-types/src/index.ts"),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const m = g => {
				const d = g.userCommPreferences.data;
				if (d == null ? void 0 : d["language-locale"]) return c.Z.set(e.ly, d["language-locale"]), d["language-locale"];
				{
					c.Z.has(e.ly) || c.Z.set(e.ly, e.ZW);
					const p = c.Z.get(e.ly);
					return s(p) ? p : e.ZW
				}
			};

			function s(g) {
				const d = Object.keys(o.Q).find(p => o.Q[p] === g);
				return !!g && typeof g == "string" && d != null && (0, e.S8)(!1, d)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				$8: function() {
					return s
				},
				BG: function() {
					return _
				},
				BY: function() {
					return T
				},
				GP: function() {
					return i
				},
				GU: function() {
					return R
				},
				PR: function() {
					return c
				},
				h$: function() {
					return S
				},
				h8: function() {
					return t
				},
				kk: function() {
					return y
				},
				l8: function() {
					return d
				},
				mV: function() {
					return f
				},
				vW: function() {
					return g
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const o = D => D.user,
				c = (0, e.P1)("user", o),
				m = D => {
					var C;
					return (C = c(D)) === null || C === void 0 ? void 0 : C.email.endsWith("@cloudflare.com")
				},
				s = D => {
					var C;
					return !!((C = c(D)) === null || C === void 0 ? void 0 : C.id)
				},
				g = D => {
					const C = c(D);
					if (!!C) return C.first_name && C.last_name ? `${C.first_name} ${C.last_name}` : C.email
				},
				d = D => {
					const C = c(D);
					return C && C.has_enterprise_zones
				},
				p = D => D.userCommPreferences,
				_ = (0, e.P1)("userCommPreferences", p),
				t = D => {
					const C = c(D);
					return C && C.email_verified
				},
				r = D => {
					const C = _(D);
					return C && C.preferences.marketing_communication
				},
				a = D => D.userDetails,
				l = (0, e.P1)("userDetails", a),
				i = D => {
					const C = l(D);
					return C && C["2FA-RECOVERY"] === "scheduled"
				},
				f = D => {
					const C = l(D);
					return C && C["2FA-RECOVERY"] === "interrupted"
				},
				y = D => {
					const C = l(D);
					return C == null ? void 0 : C["NEW-USER-EMAIL"]
				},
				S = D => D.gates.assignments,
				P = (D, C) => D && D[C];

			function T(D, C) {
				const q = S(D);
				return q ? P(q, C) : void 0
			}
			const R = (D, C) => T(D, C) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				$4: function() {
					return q
				},
				$t: function() {
					return et
				},
				A4: function() {
					return y
				},
				Cu: function() {
					return S
				},
				DQ: function() {
					return ge
				},
				Ej: function() {
					return X
				},
				FH: function() {
					return T
				},
				ID: function() {
					return U
				},
				Ko: function() {
					return Be
				},
				Le: function() {
					return Re
				},
				Ly: function() {
					return M
				},
				M3: function() {
					return Ye
				},
				N8: function() {
					return Ve
				},
				NY: function() {
					return F
				},
				Ns: function() {
					return ae
				},
				Ox: function() {
					return Xe
				},
				P4: function() {
					return Y
				},
				RO: function() {
					return j
				},
				SX: function() {
					return x
				},
				Tr: function() {
					return Te
				},
				U: function() {
					return P
				},
				Ug: function() {
					return D
				},
				V6: function() {
					return je
				},
				WR: function() {
					return ze
				},
				Xg: function() {
					return f
				},
				ZB: function() {
					return Ae
				},
				_y: function() {
					return G
				},
				cU: function() {
					return Ke
				},
				cg: function() {
					return ce
				},
				d2: function() {
					return Z
				},
				jN: function() {
					return B
				},
				jg: function() {
					return O
				},
				kC: function() {
					return ee
				},
				kf: function() {
					return qe
				},
				ko: function() {
					return fe
				},
				mK: function() {
					return We
				},
				nA: function() {
					return i
				},
				oY: function() {
					return K
				},
				qM: function() {
					return N
				},
				rq: function() {
					return b
				},
				tS: function() {
					return C
				},
				tU: function() {
					return J
				},
				vB: function() {
					return tt
				},
				vM: function() {
					return $
				},
				wH: function() {
					return R
				},
				wn: function() {
					return Oe
				},
				xU: function() {
					return Q
				},
				xw: function() {
					return de
				},
				z5: function() {
					return I
				},
				zO: function() {
					return He
				},
				zW: function() {
					return Qe
				},
				zh: function() {
					return se
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				o = n("../react/app/redux/normalizer.js"),
				c = n("../../../../node_modules/lodash/get.js"),
				m = n.n(c),
				s = n("../../../../node_modules/moment/moment.js"),
				g = n.n(s),
				d = n("../react/common/constants/billing/index.ts");

			function p(w) {
				for (var te = 1; te < arguments.length; te++) {
					var V = arguments[te] != null ? Object(arguments[te]) : {},
						re = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(V).filter(function(pe) {
						return Object.getOwnPropertyDescriptor(V, pe).enumerable
					})), re.forEach(function(pe) {
						_(w, pe, V[pe])
					})
				}
				return w
			}

			function _(w, te, V) {
				return te = t(te), te in w ? Object.defineProperty(w, te, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[te] = V, w
			}

			function t(w) {
				var te = r(w, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function r(w, te) {
				if (typeof w != "object" || w === null) return w;
				var V = w[Symbol.toPrimitive];
				if (V !== void 0) {
					var re = V.call(w, te || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(w)
			}
			const a = (0, o.P1)("zone", w => w.zone),
				l = w => {
					var te;
					return (te = w.zoneVersioning) === null || te === void 0 ? void 0 : te.zoneVersionSelector
				},
				i = (0, e.P1)(a, l, (w, te) => {
					var V, re, pe;
					let me;
					if (Array.isArray(w) && w.length === 1 ? me = w[0] : w && !Array.isArray(w) && (me = w), !me) return;
					const _e = !!(te == null ? void 0 : te.enabled);
					return p({}, me, me.name && {
						name: _e ? te.rootZoneName : me.name
					}, {
						versioning: {
							enabled: _e,
							isRoot: !((V = me.name) === null || V === void 0 ? void 0 : V.endsWith(".config.cfdata.org")),
							version: _e ? te.selectedVersion : 0,
							rootZoneId: _e ? te.rootZoneId : (re = (pe = me) === null || pe === void 0 ? void 0 : pe.id) !== null && re !== void 0 ? re : ""
						}
					})
				}),
				f = w => w.zone,
				y = (0, e.P1)(i, f, (w, te) => ({
					data: w,
					meta: te
				})),
				S = w => {
					var te, V;
					return (te = (V = i(w)) === null || V === void 0 ? void 0 : V.id) !== null && te !== void 0 ? te : ""
				},
				P = w => w.zones,
				T = w => w.zonesRoot,
				R = w => w.zonesAccount,
				D = (0, o.P1)("zones", P),
				C = (0, o.P1)("zonesRoot", T),
				q = (0, o.P1)("zonesAccount", R);

			function ee(w) {
				const te = i(w);
				return te ? te.created_on : null
			}

			function X(w, te, V) {
				const re = ee(w);
				if (!re) return;
				const pe = g().duration(te, V),
					me = new Date(re),
					_e = new Date(new Date().getTime() - pe.asMilliseconds());
				return me.getTime() > _e.getTime()
			}

			function Y(w) {
				const te = i(w);
				return te ? te.status : null
			}

			function K(w) {
				const te = i(w);
				return te ? te.type : null
			}

			function B(w) {
				return w.plan_pending ? w.plan_pending : w.plan
			}

			function $(w) {
				const te = i(w);
				if (!te) return;
				const V = B(te);
				return V && V.legacy_id
			}

			function J(w, te) {
				const V = B(w);
				return !!V && d.Gs.indexOf(V.legacy_id) >= d.Gs.indexOf(te)
			}

			function Q(w) {
				return !!w && w.status === "initializing"
			}

			function Z(w) {
				return !!w && w.status === "pending"
			}

			function se(w) {
				return !!w && w.status === "active"
			}

			function z(w, te) {
				if (!w) return !1;
				const V = B(w);
				return !!V && V.legacy_id === te
			}

			function fe(w) {
				return z(w, "enterprise")
			}
			const j = w => fe(i(w));

			function I(w) {
				return z(w, "business")
			}
			const U = w => I(i(w));

			function G(w) {
				return z(w, "pro")
			}

			function ae(w) {
				return z(w, "free")
			}

			function M(w) {
				return !fe(w)
			}

			function v(w) {
				return w && w.owner
			}

			function O(w, te) {
				const V = v(te);
				return !!V && V.type === "user" && V.id === w.id
			}

			function b(w) {
				const te = i(w);
				return !!te && te.type === "partial"
			}

			function F(w) {
				const te = i(w);
				return !!te && te.type === "secondary"
			}

			function x(w) {
				const te = i(w);
				return te && b(w) && te.host
			}
			const ce = w => {
					var te;
					const V = i(w);
					return !!(V == null ? void 0 : V.host) && !!((te = V.plan) === null || te === void 0 ? void 0 : te.externally_managed)
				},
				ge = w => {
					const te = D(w);
					return te && te.some(fe)
				},
				Oe = (w, te) => {
					const V = i(w);
					return V && V.betas ? V.betas.includes(te) : !1
				},
				Ae = (w, ...te) => m()(w, ["zoneFlags", "data", ...te]),
				Re = (w, ...te) => m()(w, ["accountFlags", "data", ...te]),
				N = w => w.accountFlags.isRequesting,
				de = w => w.zoneFlags.isRequesting,
				Te = (w, ...te) => m()(w, ["zoneFlagsChanges", "data", ...te]),
				Be = w => w.zoneFlagsChanges.isRequesting,
				Ke = w => w.zoneFlags && w.zoneFlags.data,
				He = w => w.zoneFlags,
				Ze = (0, e.P1)(Ke, He, (w, te) => ({
					data: w,
					meta: te
				})),
				Ve = (0, o.P1)("abuseUrls", w => w.overview.abuseUrls),
				Ye = w => {
					const te = i(w);
					return te ? `/${te.account.id}/${te.name}` : null
				},
				je = w => w.zoneMarketingCampaigns,
				qe = w => w.overview.zoneBlocks.data,
				Qe = w => w.overview.zoneBlocks.isRequesting,
				et = w => w.overview.zoneBlocks.hasData,
				We = w => {
					var te, V;
					return (w == null || (te = w.overview.zoneBlocks) === null || te === void 0 || (V = te.paginationData) === null || V === void 0 ? void 0 : V.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				tt = w => w.overview.zoneBlocksReview.isRequesting,
				Xe = w => w.overview.zoneHold,
				ze = (0, o.P1)("zoneHold", Xe)
		},
		"../react/common/utils/formatDate.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			E.Z = (o, c, m = !1) => (0, e.p6)(o, c, m)
		},
		"../react/common/utils/hasRole.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				n: function() {
					return o
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts");
			const o = (c, m) => {
				const {
					roles: s = []
				} = (0, e.uF)(c) || {};
				return m.some(g => s.includes(g))
			}
		},
		"../react/common/utils/isGuards.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Q$: function() {
					return c
				},
				t: function() {
					return g
				},
				v5: function() {
					return m
				},
				zE: function() {
					return s
				}
			});
			var e = n("../react/common/constants/index.ts"),
				o = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const c = d => d ? ["page", "per_page", "count", "total_count"].every(_ => _ in d && d[_]) : !1,
				m = (d = "") => e.Dy.includes(d.toLowerCase()),
				s = d => d !== null && typeof d == "object" && "name" in d && "size" in d && "type" in d && typeof d.slice == "function",
				g = d => (0, o.Z)(d)
		},
		"../react/common/validators/index.js": function(W, E, n) {
			"use strict";
			n.d(E, {
				K2: function() {
					return o
				},
				Lb: function() {
					return c
				},
				XI: function() {
					return m
				},
				bK: function() {
					return p
				},
				jk: function() {
					return d
				},
				wb: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = _ => /^https?:\/\/(.*)/.test(_),
				c = _ => e.default.hostname.test(_),
				m = _ => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(_),
				s = _ => /^[!-~]+$/.test(_),
				g = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				d = _ => g.test(_),
				p = _ => !!_ && !!_.length && /^[ -~]+$/.test(_)
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Jz: function() {
					return _
				},
				OK: function() {
					return s
				},
				_Y: function() {
					return d
				},
				fD: function() {
					return r
				},
				h_: function() {
					return p
				},
				w6: function() {
					return a
				},
				yc: function() {
					return t
				}
			});

			function e(i) {
				for (var f = 1; f < arguments.length; f++) {
					var y = arguments[f] != null ? Object(arguments[f]) : {},
						S = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(y).filter(function(P) {
						return Object.getOwnPropertyDescriptor(y, P).enumerable
					})), S.forEach(function(P) {
						o(i, P, y[P])
					})
				}
				return i
			}

			function o(i, f, y) {
				return f = c(f), f in i ? Object.defineProperty(i, f, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[f] = y, i
			}

			function c(i) {
				var f = m(i, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function m(i, f) {
				if (typeof i != "object" || i === null) return i;
				var y = i[Symbol.toPrimitive];
				if (y !== void 0) {
					var S = y.call(i, f || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(i)
			}
			let s = function(i) {
					return i.Sending = "sending", i.Success = "success", i.Failed = "failed", i.Latent = "latent", i
				}({}),
				g = function(i) {
					return i[i.Success = 200] = "Success", i[i.BadRequest = 400] = "BadRequest", i
				}({});
			const d = {
					status: s.Latent,
					statusCode: void 0
				},
				p = {
					status: s.Sending
				},
				_ = {
					status: s.Success,
					statusCode: g.Success
				},
				t = {
					status: s.Failed,
					statusCode: g.BadRequest
				},
				r = {
					token: null,
					zone: null,
					isTokenValid: !1,
					user: null
				},
				a = {
					appsList: e({
						value: []
					}, d),
					installsList: e({
						value: []
					}, d),
					categoriesList: e({
						value: []
					}, d),
					recommendedAppsList: e({
						value: []
					}, d),
					metadata: e({
						value: null
					}, d),
					app: e({
						value: null
					}, d),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, d)
				},
				l = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Dl: function() {
					return a
				},
				Ux: function() {
					return l
				},
				cz: function() {
					return f
				},
				im: function() {
					return _
				},
				pG: function() {
					return i
				},
				t$: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/lodash-es/get.js"),
				o = n("../../../../node_modules/lodash-es/isEqual.js"),
				c = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function m(P) {
				for (var T = 1; T < arguments.length; T++) {
					var R = arguments[T] != null ? Object(arguments[T]) : {},
						D = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(R).filter(function(C) {
						return Object.getOwnPropertyDescriptor(R, C).enumerable
					})), D.forEach(function(C) {
						s(P, C, R[C])
					})
				}
				return P
			}

			function s(P, T, R) {
				return T = g(T), T in P ? Object.defineProperty(P, T, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[T] = R, P
			}

			function g(P) {
				var T = d(P, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function d(P, T) {
				if (typeof P != "object" || P === null) return P;
				var R = P[Symbol.toPrimitive];
				if (R !== void 0) {
					var D = R.call(P, T || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(P)
			}
			const p = P => P.test(window.location.hostname),
				_ = () => p(c.j9),
				t = () => p(MARKETPLACE_LOCAL_URL_REGEXP),
				r = (P, T) => {
					const R = random(0, 1) ? -1 : 1;
					return P.points === T.points || P.points >= APP_POINTS_THRESHOLD && T.points >= APP_POINTS_THRESHOLD ? R : P.points < 0 || T.points < 0 || P.points >= APP_POINTS_THRESHOLD || T.points >= APP_POINTS_THRESHOLD ? T.points - P.points : R
				},
				a = (P, T, R) => {
					const D = (0, e.Z)(T, R),
						C = (0, e.Z)(P, R);
					return D && !(0, o.Z)(D, C)
				},
				l = {
					transformers: {
						transformAppIdsToApps: (P, T) => T.map(R => P.find(D => D.id === R)),
						addAppVersionInfo: (P, T) => m({}, T, {
							currentVersion: T.versions.find(R => R.tag === P.versionTag),
							latestVersion: T.versions.find(R => R.tag === T.infoVersion)
						}),
						addCurrentSiteInstall: (P, T) => m({}, T, {
							currentSiteInstall: P.find(R => R.appId === T.id)
						})
					}
				},
				i = (P, T, R) => m({}, P, T, R ? {
					value: R
				} : {}),
				f = P => P.map(T => T.status),
				y = P => P.apps ? P.apps : P,
				S = P => {
					let T = ["by-cloudflare"];
					return P.filter(R => !T.includes(R.id) && R.visible).sort((R, D) => R.points < D.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(W, E, n) {
			"use strict";
			n.r(E), n.d(E, {
				categorySlugTranslationKey: function() {
					return s
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return m
				},
				translations: function() {
					return c
				}
			});
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: c,
				namespace: m
			} = (0, e.x)("marketplace", {
				markets_metadata_label_popular: "Just show me the most popular apps",
				markets_metadata_label_blog: "Improve my blog or portfolio",
				markets_metadata_label_store: "Supercharge my online store",
				markets_metadata_label_marketing: "Improve my marketing and lead generation",
				nav_bar_explore_apps: "Explore Apps",
				nav_bar_installed_apps: "Your Installed Apps",
				nav_bar_developed_apps: "Your Developed Apps",
				common_card_button_show_all: "Show All",
				app_card_untitled_app: "Untitled App",
				app_card_installed_flag: "Installed",
				developer_footer_card_title: "developers",
				developer_footer_card_header: "Ship your code to 13 million sites.",
				developer_footer_card_body: "With Cloudflare Apps, getting your tool or service onto millions of sites has never been easier. Any Cloudflare user can preview & install your code on their site in seconds.",
				developer_footer_learn_more: "Learn more \u203A",
				recommended_apps_personalize_save: "Save",
				recommended_apps_personalize_customize: "Customize",
				recommended_apps_card_error_loading: "There was a problem loading popular apps.",
				angular_app_iframe_content: "Could not load content",
				home_page_errored: "There was an error!",
				home_page_apps_search_label: "Search Apps",
				home_page_categories_filter_label: "Filter Apps",
				home_page_categories_filter_options_all: "All",
				home_page_categories_filter_options_popular: "Popular",
				category_card_popular_title: "Popular<0> apps\u203A</0>",
				category_card_popular_subtitle: "Our most popular and highly rated apps.",
				home_page_categories_filter_options_ui_and_design: "UI & Design",
				home_page_categories_filter_options_widgets_and_plugins: "Widgets & Plugins",
				home_page_categories_filter_options_security: "Security",
				home_page_categories_filter_options_performance: "Performance",
				home_page_categories_filter_options_insights: "Insights",
				home_page_categories_filter_options_social_and_communication: "Social & Communication",
				category_card_ui_and_design_title: "UI & Design<0> apps\u203A</0>",
				category_card_ui_and_design_subtitle: "Apps that make your website more beautiful and user friendly.",
				category_card_widgets_and_plugins_title: "Widgets & Plugins<0> apps\u203A</0>",
				category_card_widgets_and_plugins_subtitle: "Apps that add functionality and services to your website.",
				category_card_security_title: "Security<0> apps\u203A</0>",
				category_card_security_subtitle: "Apps which make your site safer and protect you from threats.",
				category_card_insights_title: "Insights<0> apps\u203A</0>",
				category_card_insights_subtitle: "Apps that provide insight into your visitors.",
				category_card_performance_title: "Performance<0> apps\u203A</0>",
				category_card_performance_subtitle: "Improve the speed or perceived responsiveness of your website.",
				category_card_social_and_communication_title: "Social & Communication<0> apps\u203A</0>",
				category_card_social_and_communication_subtitle: "Apps that make it easier to communicate with your customers.",
				home_page_categories_filter_options_powr: "POWR",
				home_page_categories_filter_options_grow_your_email_list: "Grow Your Email List",
				home_page_categories_filter_options_make_money_on_your_site: "Make Money On Your Site",
				home_page_categories_filter_options_recommended_for_all_sites: "Recommended for All Sites",
				home_page_categories_filter_options_performance_and_security: "Performance & Security",
				home_page_categories_filter_options_recommended_for_stores: "Recommended For Stores",
				home_page_categories_filter_options_by_cloudflare: "Cloudflare Labs",
				home_page_categories_filter_options_get_more_customers: "Get More Customers",
				home_page_categories_filter_options_getting_started_apps: "Getting Started",
				home_page_categories_filter_options_recommended_for_marketing_sites: "Recommended for Marketing Sites",
				home_page_categories_filter_options_add_on: "Add-ons",
				home_page_categories_filter_options_communication: "Communication",
				home_page_categories_filter_options_humor: "Humor",
				home_page_categories_filter_options_design: "Design & Polish",
				home_page_categories_filter_options_for_developers: "For Developers",
				home_page_categories_filter_options_recommended_for_blogs: "Recommended for Blogs",
				home_page_categories_filter_options_marketing: "Marketing",
				home_page_categories_filter_options_social_media: "Social Media",
				home_page_categories_filter_options_e_commerce: "E-Commerce",
				home_page_categories_filter_options_analytics: "Analytics",
				category_card_recommended_all_sites_subtitle: "These apps are recommended for all site types.",
				category_card_powr_title: "POWR<0> apps\u203A</0>",
				category_card_powr_subtitle: "Apps created by POWR",
				category_card_grow_your_email_list_title: "Grow Your Email List<0> \u203A</0>",
				category_card_grow_your_email_list_subtitle: "Apps to help you grow your email subscribers.",
				category_card_make_money_on_your_site_title: "Make Money On Your Site<0> \u203A</0>",
				category_card_make_money_on_your_site_subtitle: "Apps to help you make money from your website.",
				category_card_recommended_for_all_sites_title: "Recommended for All Sites<0> \u203A</0>",
				category_card_recommended_for_all_sites_subtitle: "Apps that are recommended for all sites.",
				category_card_performance_and_security_title: "Performance & Security<0> apps\u203A</0>",
				category_card_performance_and_security_subtitle: "Apps that make your website faster and more secure.",
				category_card_recommended_for_stores_title: "Recommended For Stores<0> \u203A</0>",
				category_card_recommended_for_stores_subtitle: "Apps for stores in the recommendation engine.",
				category_card_by_cloudflare_title: "Cloudflare Labs<0> apps\u203A</0>",
				category_card_by_cloudflare_subtitle: "Apps made by Cloudflare.",
				category_card_get_more_customers_title: "Get More Customers<0> \u203A</0>",
				category_card_get_more_customers_subtitle: "Apps to help you grow your customer base.",
				category_card_getting_started_apps_title: "Getting Started<0> apps\u203A</0>",
				category_card_recommended_for_marketing_sites_title: "Recommended for Marketing Sites<0> \u203A</0>",
				category_card_recommended_for_marketing_sites_subtitle: "Apps for marketing sites in the recommendation engine.",
				category_card_add_on_title: "Add-ons<0> \u203A</0>",
				category_card_add_on_subtitle: "Drop-in components to add to your website.",
				category_card_communication_title: "Communication<0> apps\u203A</0>",
				category_card_communication_subtitle: "Communicate with and provide support to your website visitors.",
				category_card_humor_title: "Humor<0> apps\u203A</0>",
				category_card_humor_subtitle: "Apps that add fun widgets and Easter eggs to your site.",
				category_card_design_title: "Design & Polish<0> apps\u203A</0>",
				category_card_design_subtitle: "Improve the look & feel and ease-of-use of your website.",
				category_card_for_developers_title: "For Developers<0> \u203A</0>",
				category_card_for_developers_subtitle: "Apps made for web developers and designers.",
				category_card_recommended_for_blogs_title: "Recommended for Blogs<0> \u203A</0>",
				category_card_recommended_for_blogs_subtitle: "Apps for blogs in the recommendation engine.",
				category_card_marketing_title: "Marketing<0> apps\u203A</0>",
				category_card_marketing_subtitle: "Promote content, collect email addresses, and increase engagement.",
				category_card_social_media_title: "Social Media<0> apps\u203A</0>",
				category_card_social_media_subtitle: "Integrate your website with Twitter, Facebook, and other networks.",
				category_card_e_commerce_title: "E-Commerce<0> apps\u203A</0>",
				category_card_e_commerce_subtitle: "Tools to help your online business.",
				category_card_analytics_title: "Analytics<0> apps\u203A</0>",
				category_card_analytics_subtitle: "Collect and analyze data from your site visitors.",
				app_edit_install: "Edit Install",
				app_uninstall: "Uninstall",
				app_installed: "Installed",
				app_cancel: "Cancel",
				app_retry: "Retry",
				app_info_about: "About",
				app_info_no_description: "This app has no description.",
				app_info_no_description_link: "This app has no description.  <0>Add one here</0>.",
				app_info_try_on_your_site: "Try it out on your site now!",
				app_info_preview: "Preview",
				app_info_header_preview: "Preview on your site",
				app_info_starting_price: "Starting at %{appStartingPrice}",
				app_info_install_free: "Install for FREE",
				app_info_details: "Details",
				app_info_rating: "Rating",
				app_info_feedback_rating_error: "There was an error with your rating. Please try again and <0>contact us</0> if the issue persists.",
				app_info_installed_version: "%{appInstalledVersion} on %{appInstalledDate}",
				app_info_developer: "Developer",
				app_info_support_contact: "Support Contact",
				app_info_category: "Category",
				app_info_categories: "Categories",
				app_info_elsewhere: "Elsewhere",
				app_info_external_link_website: "Website \u203A",
				app_info_external_link_tos: "Terms of Service \u203A",
				app_info_external_link_privacy: "Privacy Policy \u203A",
				app_info_external_link_source: "Source Code \u203A",
				developed_app_card_configure: "Configure",
				developed_app_card_metrics: "Metrics",
				developed_app_card_status_approved: "Approved",
				developed_app_card_status_hidden: "Hidden",
				developed_app_card_status_draft: "Draft",
				developed_app_card_status_pending: "Awaiting approval...",
				installed_app_card_installed_date: "Installed %{appCreatedRelativeTime}",
				installed_app_card_leave_feedback: "Leave Feedback",
				installed_app_card_visit_vendor_site: "Visit vendor site",
				installed_app_card_visit_vendor: "Visit %{title}",
				installed_app_card_external_link: "External Link",
				installed_app_card_upgrade_version: "Upgrade version",
				installed_app_card_update: "Update",
				installed_app_card_default_release_notes: "Bugfixes and stability improvements.",
				installed_apps_group_title_all: "Installed on all pages",
				installed_apps_group_title_page: "Installed on <0>%{page}</0>",
				installed_apps_group_title_page_and_other: "Installed on <0>%{page}</0> and 1 other location",
				installed_apps_group_title_page_and_others: "Installed on <0>%{page}</0> and %{length} other locations",
				uninstall_confirm_all_sites: "Are you sure you want to uninstall %{title} from all sites?",
				uninstall_confirm_sites: "Are you sure you want to uninstall %{title} from the following sites and pages?",
				uninstall_error: "There was an error removing the app. Please try again later or <0>contact us</0> for assistance.",
				page_loading_error: "There was an error loading the page.",
				developed_apps_installed_toast: "Your developed apps can be fully installed and tested on any site managed by your Cloudflare account.",
				developed_apps_no_apps: "No apps were found.",
				developed_apps_create_app: "Create an App",
				developed_apps_banner_title: "Developers",
				developed_apps_banner_body: "To configure, manage, and monitor your developed apps, go to the Developer Dashboard.",
				developed_apps_banner_dashboard: "Developer Dashboard",
				installed_apps_heading: "Apps",
				installed_apps_update_toast: "You have 1 app with pending updates.",
				installed_apps_updates_toast: "You have %{length} apps with pending updates.",
				installed_apps_no_apps_installed_section: "No apps installed on <0>%{section}</0>.",
				installed_apps_no_apps_insatlled_site: "You haven't installed any apps on your site yet."
			});

			function s(g) {
				const d = g.replace(/-/g, "_");
				return Object.keys(o).includes(d) ? d : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				L: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/url-join/lib/url-join.js"),
				o = n.n(e),
				c = n("../../../../node_modules/lodash-es/defaults.js"),
				m = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function s(l) {
				for (var i = 1; i < arguments.length; i++) {
					var f = arguments[i] != null ? Object(arguments[i]) : {},
						y = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(f).filter(function(S) {
						return Object.getOwnPropertyDescriptor(f, S).enumerable
					})), y.forEach(function(S) {
						p(l, S, f[S])
					})
				}
				return l
			}

			function g(l, i) {
				if (l == null) return {};
				var f = d(l, i),
					y, S;
				if (Object.getOwnPropertySymbols) {
					var P = Object.getOwnPropertySymbols(l);
					for (S = 0; S < P.length; S++) y = P[S], !(i.indexOf(y) >= 0) && (!Object.prototype.propertyIsEnumerable.call(l, y) || (f[y] = l[y]))
				}
				return f
			}

			function d(l, i) {
				if (l == null) return {};
				var f = {},
					y = Object.keys(l),
					S, P;
				for (P = 0; P < y.length; P++) S = y[P], !(i.indexOf(S) >= 0) && (f[S] = l[S]);
				return f
			}

			function p(l, i, f) {
				return i = _(i), i in l ? Object.defineProperty(l, i, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[i] = f, l
			}

			function _(l) {
				var i = t(l, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function t(l, i) {
				if (typeof l != "object" || l === null) return l;
				var f = l[Symbol.toPrimitive];
				if (f !== void 0) {
					var y = f.call(l, i || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(l)
			}
			class r {
				constructor(i) {
					p(this, "token", void 0), p(this, "options", void 0), p(this, "setAuthHeader", f => {
						this.token = f
					}), this.token = "", this.options = (0, c.Z)(i, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(i = "GET", f, y = {}) {
					const {
						body: S
					} = y, P = g(y, ["body"]);
					return fetch(o()(this.options.baseUrl, f), s({
						method: i
					}, P, S ? {
						body: JSON.stringify(S)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(s({
							Accept: "application/json, text/plain, */*"
						}, y.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(i, f = {}) {
					const y = await this.request("GET", i, f);
					return this.parseJSONResponse(y)
				}
				async postJSON(i, f = {}) {
					const y = await this.request("POST", i, s({}, f, {
						headers: s({}, f.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(y)
				}
				parseJSONResponse(i) {
					return i.json()
				}
			}
			p(r, "defaults", {
				baseUrl: (0, m.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const a = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				JX: function() {
					return _
				},
				Jb: function() {
					return r
				},
				RX: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/lodash-es/upperFirst.js"),
				o = n("../../../../node_modules/lodash-es/isEmpty.js"),
				c = n("../node_modules/query-string/query-string.js"),
				m = n.n(c),
				s = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				g = n("../react/pages/apps/marketplace/requests/Requester.ts"),
				d = n("../react/pages/apps/marketplace/libraries/resource.ts");

			function* p(i, f, y, S) {
				const P = (0, e.Z)(f),
					[T, R, D] = [`get${P}Sending`, `get${P}Success`, `get${P}Failed`];
				try {
					yield(0, s.gz)(i[T]());
					const C = yield(0, s.RE)(a, y);
					let q = C;
					if (q.error) {
						yield(0, s.gz)(i[D]());
						return
					}
					return S && (q = yield S(C)), yield(0, s.gz)(i[R](q)), q
				} catch {
					yield(0, s.gz)(i[D]())
				}
			}

			function* _(i, f, y, S) {
				const P = (0, e.Z)(f),
					T = `get${P}Sending`,
					R = `get${P}Success`,
					D = `get${P}Failed`;
				try {
					yield(0, s.gz)(i[T]());
					const C = yield(0, s.RE)(l, {
						url: y,
						data: S
					});
					return yield(0, s.gz)(i[R](C)), C
				} catch {
					yield(0, s.gz)(i[D]())
				}
			}
			const t = i => (0, o.Z)(i) ? "" : `?${c.stringify(i)}`,
				r = {
					app: new d.c({
						name: "app",
						url: (i, f) => `apps/${i}${t(f)}`
					}),
					apps: new d.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new d.c({
							name: "installs",
							url: i => `sites/${i}/installs`
						}),
						delete: new d.c({
							name: "installs",
							url: i => `installs/${i}`
						})
					},
					categories: new d.c({
						name: "categories",
						url: (i = {}) => "categories" + t(i)
					}),
					metadata: {
						get: new d.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						}),
						post: new d.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						})
					},
					ratings: {
						default: new d.c({
							name: "ratings",
							url: (i = {}) => "ratings" + t(i)
						}),
						delete: new d.c({
							name: "ratings",
							url: i => `ratings/${i}`
						})
					},
					recommendedApps: new d.c({
						name: "recommendedApps",
						url: (i = {}) => "apps/recommend" + t(i)
					}),
					developedApps: new d.c({
						name: "developedApps",
						url: i => `user/${i}/apps`
					})
				},
				a = async i => g.L.fetchJSON(i), l = async i => {
					const {
						url: f,
						data: y
					} = i;
					return g.L.postJSON(f, {
						body: y
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Nw: function() {
					return p
				},
				U4: function() {
					return d
				},
				XO: function() {
					return g
				},
				ZP: function() {
					return _
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts");

			function o(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), l.forEach(function(i) {
						c(t, i, a[i])
					})
				}
				return t
			}

			function c(t, r, a) {
				return r = m(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function m(t) {
				var r = s(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function s(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var l = a.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let g = function(t) {
					return t.SetCurrentUser = "user.set", t
				}({}),
				d = function(t) {
					return t.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", t.SetZone = "MARKETPLACE/AUTH/SET_ZONE", t.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", t.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", t.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", t.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", t.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", t.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", t.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", t.ResetState = "MARKETPLACE/AUTH/RESET_STATE", t
				}({});
			const p = {
				resetState: () => ({
					type: d.ResetState
				}),
				initSaga: t => ({
					type: d.InitSaga,
					zoneId: t
				}),
				setZone: t => ({
					type: d.SetZone,
					zone: t
				}),
				setToken: t => ({
					type: d.SetToken,
					token: t
				}),
				clearToken: () => ({
					type: d.ClearToken
				}),
				setTokenValid: t => ({
					type: d.SetTokenValid,
					isTokenValid: t
				}),
				getCurrentUserSaga: () => ({
					type: d.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: d.CurrentUserSending
				}),
				getCurrentUserSuccess: t => ({
					type: d.CurrentUserSuccess,
					user: t
				}),
				getCurrentUserFailed: () => ({
					type: d.CurrentUserFailed
				})
			};

			function _(t = e.fD, r) {
				switch (r.type) {
					case d.ResetState:
						return o({}, e.fD);
					case d.CurrentUserSending:
						return o({}, t);
					case d.CurrentUserSuccess:
						const {
							user: a
						} = r;
						return o({}, t, {
							user: a
						});
					case d.CurrentUserFailed:
						return o({}, t);
					case d.SetZone:
						const {
							zone: l
						} = r;
						return o({}, t, {
							zone: l
						});
					case d.SetToken:
						const {
							token: i
						} = r;
						return o({}, t, {
							token: i
						});
					case d.ClearToken:
						return o({}, t, {
							token: null
						});
					case d.SetTokenValid:
						const {
							isTokenValid: f
						} = r;
						return o({}, t, {
							isTokenValid: f
						});
					default:
						return t
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Nw: function() {
					return _
				},
				U4: function() {
					return p
				},
				ZP: function() {
					return t
				},
				dg: function() {
					return d
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function c(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), i.forEach(function(f) {
						m(r, f, l[f])
					})
				}
				return r
			}

			function m(r, a, l) {
				return a = s(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function s(r) {
				var a = g(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let d = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				p = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const _ = {
				resetState: () => ({
					type: p.ResetState
				}),
				zoneChangedSaga: () => ({
					type: p.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (r, a) => ({
					type: p.GetHomePageAssetsSaga,
					zoneId: r,
					currentResources: a
				}),
				getInstalledAppsAssetsSaga: r => ({
					type: p.GetInstalledAppsAssetsSaga,
					zoneId: r
				}),
				getDevelopedAppsAssetsSaga: (r, a) => ({
					type: p.GetDevelopedAppsAssetsSaga,
					userId: r,
					zoneId: a
				}),
				getDevelopedAppsSending: () => ({
					type: p.GetDevelopedAppsSending
				}),
				getDevelopedAppsSuccess: r => ({
					type: p.GetDevelopedAppsSuccess,
					developedApps: r
				}),
				getDevelopedAppsFailed: () => ({
					type: p.GetDevelopedAppsFailed
				}),
				getAppInfoAssetsSaga: (r, a, l) => ({
					type: p.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: a,
					version: l
				}),
				setUpdatableInstalls: r => ({
					type: p.SetUpdatableInstalls,
					updatableInstallsList: r
				}),
				getAppSaga: r => ({
					type: p.GetAppSaga,
					appIdentifier: r
				}),
				getAppSending: () => ({
					type: p.GetAppSending
				}),
				getAppSuccess: r => ({
					type: p.GetAppSuccess,
					app: r
				}),
				getAppFailed: () => ({
					type: p.GetAppFailed
				}),
				clearApp: () => ({
					type: p.ClearApp
				}),
				getAppsSaga: () => ({
					type: p.GetAppsSaga
				}),
				getAppsSending: () => ({
					type: p.GetAppsSending
				}),
				getAppsSuccess: r => ({
					type: p.GetAppsSuccess,
					appsList: r
				}),
				getAppsFailed: () => ({
					type: p.GetAppsFailed
				}),
				getInstallsSaga: r => ({
					type: p.GetInstallsSaga,
					zoneId: r
				}),
				getInstallsSending: () => ({
					type: p.GetInstallsSending
				}),
				getInstallsSuccess: r => ({
					type: p.GetInstallsSuccess,
					installsList: r
				}),
				getInstallsFailed: () => ({
					type: p.GetInstallsFailed
				}),
				getCategoriesSaga: r => ({
					type: p.GetCategoriesSaga,
					queryParams: r
				}),
				getCategoriesSending: () => ({
					type: p.GetCategoriesSending
				}),
				getCategoriesSuccess: r => ({
					type: p.GetCategoriesSuccess,
					categoriesList: r
				}),
				getCategoriesFailed: () => ({
					type: p.GetCategoriesFailed
				}),
				getMetadataSaga: r => ({
					type: p.GetMetadataSaga,
					zoneId: r
				}),
				getMetadataSending: () => ({
					type: p.GetMetadataSending
				}),
				getMetadataSuccess: r => ({
					type: p.GetMetadataSuccess,
					metadata: r
				}),
				getMetadataFailed: () => ({
					type: p.GetMetadataFailed
				}),
				postMetadataSaga: (r, a) => ({
					type: p.PostMetadataSaga,
					zoneId: r,
					data: a
				}),
				postMetadataSending: () => ({
					type: p.PostMetadataSending
				}),
				postMetadataSuccess: r => ({
					type: p.PostMetadataSuccess,
					metadata: r
				}),
				postMetadataFailed: () => ({
					type: p.PostMetadataFailed
				}),
				getRecommendedAppsSaga: (r, a, l) => ({
					type: p.GetRecommendedAppsSaga,
					appsList: r,
					installsList: a,
					metadata: l
				}),
				getRecommendedAppsSending: () => ({
					type: p.GetRecommendedAppsSending
				}),
				getRecommendedAppsSuccess: r => ({
					type: p.GetRecommendedAppsSuccess,
					recommendedAppsList: r
				}),
				getRecommendedAppsFailed: () => ({
					type: p.GetRecommendedAppsFailed
				})
			};

			function t(r = e.w6, a) {
				switch (a.type) {
					case p.ResetState:
						return c({}, e.w6);
					case p.ZoneChangedSaga:
						return c({}, r, {
							installsList: c({}, e.w6.installsList),
							recommendedAppsList: c({}, e.w6.recommendedAppsList),
							metadata: c({}, e.w6.metadata)
						});
					case p.GetAppsSending:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.h_))
						});
					case p.GetAppsSuccess:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.Jz, a.appsList))
						});
					case p.GetAppsFailed:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.yc))
						});
					case p.GetInstallsSending:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.h_))
						});
					case p.GetInstallsSuccess:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.Jz, a.installsList))
						});
					case p.GetInstallsFailed:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.yc))
						});
					case p.GetCategoriesSending:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case p.GetCategoriesSuccess:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.Jz, a.categoriesList))
						});
					case p.GetCategoriesFailed:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case p.GetMetadataSending:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.GetMetadataSuccess:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case p.GetMetadataFailed:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.PostMetadataSending:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.PostMetadataSuccess:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case p.PostMetadataFailed:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.GetRecommendedAppsSending:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case p.GetRecommendedAppsSuccess:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.Jz, a.recommendedAppsList))
						});
					case p.GetRecommendedAppsFailed:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case p.GetAppSending:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.h_))
						});
					case p.GetAppSuccess:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.Jz, a.app))
						});
					case p.GetAppFailed:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.yc))
						});
					case p.ClearApp:
						return c({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case p.SetUpdatableInstalls:
						return c({}, r, {
							updatableInstallsList: a.updatableInstallsList
						});
					case p.GetDevelopedAppsSending:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case p.GetDevelopedAppsSuccess:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.Jz, a.developedApps))
						});
					case p.GetDevelopedAppsFailed:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/caching/tracking.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o
			}({})
		},
		"../react/pages/dns/dns-records/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				U: function() {
					return e
				},
				X: function() {
					return o
				}
			});
			let e = function(c) {
				return c.DNS_RECORD_CREATE = "create DNS records", c.DNS_RECORD_UPDATE = "update DNS records", c.DNS_RECORD_DELETE = "delete DNS records", c.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", c
			}({});
			const o = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				BB: function() {
					return o
				},
				Pm: function() {
					return c
				},
				UZ: function() {
					return e
				}
			});
			let e = function(s) {
				return s.ROOT = "root", s.DSTADDRS_CARD = "dstaddrs_card", s.RULES_CARD = "rules_card", s.CATCHALL_CARD = "catchall_card", s.SETTINGS_PAGE = "settings_page", s.WORKERS_PAGE = "workers_page", s
			}({});
			const o = {
				zone: "emailRoutingZone",
				catchAllRule: "emailRoutingCatchAllRule",
				rule: "emailRoutingRule",
				rules: "emailRoutingRules",
				dstAddress: "emailRoutingDestinationAddress",
				dstAddresses: "emailRoutingDestinationAddresses",
				dnsRecord: "emailRoutingDnsRecord",
				dnsRecords: "emailRoutingDnsRecords"
			};
			let c = function(s) {
				return s[s.Verified = 0] = "Verified", s[s.Pending = 1] = "Pending", s[s.Missing = 2] = "Missing", s[s.WorkerNotFound = 3] = "WorkerNotFound", s[s.Unknown = 4] = "Unknown", s[s.Loading = 5] = "Loading", s
			}({});
			const m = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/firewall/api-shield/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Fj: function() {
					return p
				},
				kq: function() {
					return d
				},
				xr: function() {
					return _
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), l.forEach(function(i) {
						m(t, i, a[i])
					})
				}
				return t
			}

			function m(t, r, a) {
				return r = s(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function s(t) {
				var r = g(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var l = a.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let d = function(t) {
				return t.MAIN = "API Shield", t.SCHEMA_VALIDATION = "Schema Validation", t.JWT_VALIDATION = "JWT Validation", t.SEQUENCE_ANALYTICS = "Sequence Analytics", t.SEQUENCE_RULES = "Sequence Rules", t.ENDPOINT_MANAGEMENT = "Endpoint Management", t.API_DISCOVERY = "API Discovery", t.SETTINGS = "Settings", t
			}({});
			const p = {
					[d.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[d.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[d.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[d.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[d.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[d.JWT_VALIDATION]: {
						viewJWTRules: "view a page of jwt rules",
						addJWTRule: "add a jwt rule",
						editJWTRule: "edit a jwt rule",
						deleteJWTRule: "delete a jwt rule",
						reprioritizeJWTRule: "reprioritize a jwt rule",
						viewJWTConfigs: "view jwt configs",
						addJWTConfig: "add a jwt config",
						editJWTConfig: "edit a jwt config",
						deleteJWTConfig: "delete a jwt config"
					},
					[d.SETTINGS]: {
						redirectToFirewallRulesTemplate: "redirect to firewall rules",
						redirectToPages: "redirect to uploaded developer portal on pages",
						listSessionIdentifiers: "list session identifiers",
						listRequestsContainingSessionIdentifiers: "list requests containing session identifiers",
						addOrRemoveSessionIdentifiers: "add or remove session identifiers"
					}
				},
				_ = ({
					name: t,
					category: r = "user journey",
					product: a = d.MAIN,
					productName: l,
					additionalData: i
				}) => {
					o().sendEvent(t, c({
						category: r,
						product: a,
						productName: l
					}, i || {}))
				}
		},
		"../react/pages/firewall/bots/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				N3: function() {
					return e
				},
				UN: function() {
					return c
				},
				h1: function() {
					return o
				}
			});
			let e = function(m) {
					return m.INITIAL_FETCH_SCORES = "view bots scores distribution", m.FETCH_CONFIGURATION = "view bots configuration page", m.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", m.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", m.UPDATE_SETTINGS = "update bots settings", m.DELETE_RULE = "delete bots ruleset", m.UPDATE_RULE = "update bots ruleset", m.FETCH_RULES = "view bots ruleset", m.CONFIGURE_BOT_MANAGEMENT = "view bots management", m.WAF_RULES_REDIRECT = "redirect waf rules", m
				}({}),
				o = function(m) {
					return m.PROVIDED_TEMPLATE = "provided template link in detection card", m.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", m.USE_TEMPLATE = "use template", m.CREATE_FIREWALL_RULE = "create firewall rule", m.WAF_RULES = "waf rules", m
				}({});
			const c = "user journey"
		},
		"../react/pages/firewall/page-shield/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				F: function() {
					return e
				}
			});
			const e = {
				CONFIGURE_PAGE_SHIELD: "configure page shield",
				VIEW_PAGE_SHIELD_SETTINGS: "view page shield settings",
				VIEW_DETECTED_SCRIPTS: "view detected scripts",
				VIEW_DETECTED_CONNECTIONS: "view detected connections",
				VIEW_DETECTED_COOKIES: "view detected cookies",
				MANAGE_PAGE_SHIELD_POLICY: "manage page shield policy",
				VIEW_PAGE_SHIELD_POLICIES: "view page shield policies"
			}
		},
		"../react/pages/firewall/rulesets/tracking.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				QK: function() {
					return e
				},
				dy: function() {
					return o
				},
				sO: function() {
					return c
				},
				x4: function() {
					return m
				}
			});
			let e = function(s) {
				return s.DELETE = "delete", s.CREATE = "create", s.GET = "get", s.UPDATE = "update", s
			}({});
			const o = {
					http_config_settings: "configuration",
					http_request_dynamic_redirect: "redirect",
					http_request_cache_settings: "cache",
					http_request_origin: "origin",
					http_request_late_transform: "modify request header",
					http_request_transform: "rewrite url",
					http_response_headers_transform: "modify response header",
					http_response_compression: "compression",
					http_ratelimit: "rate limiting",
					http_request_firewall_custom: "custom",
					http_request_firewall_managed: "managed"
				},
				c = (s, g) => {
					var d;
					return `${g} ${(d=o[s])!==null&&d!==void 0?d:s} rule${g===e.GET?"s":""}`
				},
				m = () => {
					var s, g;
					return (s = Object.keys(o)) === null || s === void 0 || (g = s.map(d => {
						var p;
						return (p = Object.values(e)) === null || p === void 0 ? void 0 : p.map(_ => c(d, _))
					})) === null || g === void 0 ? void 0 : g.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				AS: function() {
					return g
				},
				IK: function() {
					return r
				},
				Ki: function() {
					return c
				},
				Lz: function() {
					return a
				},
				nT: function() {
					return p
				},
				o4: function() {
					return l
				},
				oY: function() {
					return m
				},
				qH: function() {
					return t
				},
				x3: function() {
					return d
				}
			});
			var e = n("../react/pages/firewall/analytics/labels.ts"),
				o = n("../react/common/constants/analytics/botScoreSrc.ts");
			const c = ["block", "challenge", "jschallenge", "managedChallenge"],
				m = ["miss", "expired", "bypass", "dynamic"],
				s = i => Object.fromEntries(Object.entries(i).map(([f, y]) => [y, f])),
				g = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				d = s(g),
				p = {
					asn: e.AU.ASN,
					country: e.AU.COUNTRY,
					ip: e.AU.IP,
					ipRange: e.AU.IP_RANGE,
					securityLevel: e.AU.SECURITY_LEVEL,
					validation: e.AU.VALIDATION,
					zoneLockdown: e.AU.ZONE_LOCKDOWN,
					waf: e.AU.WAF,
					rateLimit: e.AU.RATE_LIMIT,
					firewallRules: e.AU.FIREWALL_RULES,
					bic: e.AU.BIC,
					hot: e.AU.HOT,
					unknown: e.AU.UNKNOWN,
					l7ddos: e.AU.L7DOS,
					botFight: e.AU.BOT_FIGHT_MODE,
					apiShield: e.AU.API_SHIELD,
					apiShieldSchemaValidation: e.AU.API_SHIELD_SCHEMA_VALIDATION,
					apiShieldTokenValidation: e.AU.API_SHIELD_TOKEN_VALIDATION,
					firewallCustom: e.AU.FIREWALL_CUSTOM,
					firewallManaged: e.AU.FIREWALL_MANAGED,
					dlp: e.AU.DLP,
					botManagement: e.AU.BOT_MANAGEMENT,
					uaBlock: e.AU.UA_BLOCK
				},
				_ = s(p),
				t = s(o.EG);
			let r = function(i) {
				return i.SAMPLED = "sampled", i.RAW = "raw", i
			}({});
			const a = "security-analytics-log-explorer";
			let l = function(i) {
				return i.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', i.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', i.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', i.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', i.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', i
			}({})
		},
		"../react/pages/home/alerts/config.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				jk: function() {
					return S
				},
				w8: function() {
					return P
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				c = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				m = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function s(T) {
				for (var R = 1; R < arguments.length; R++) {
					var D = arguments[R] != null ? Object(arguments[R]) : {},
						C = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(D).filter(function(q) {
						return Object.getOwnPropertyDescriptor(D, q).enumerable
					})), C.forEach(function(q) {
						g(T, q, D[q])
					})
				}
				return T
			}

			function g(T, R, D) {
				return R = d(R), R in T ? Object.defineProperty(T, R, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[R] = D, T
			}

			function d(T) {
				var R = p(T, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function p(T, R) {
				if (typeof T != "object" || T === null) return T;
				var D = T[Symbol.toPrimitive];
				if (D !== void 0) {
					var C = D.call(T, R || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(T)
			}
			const _ = "Notifications",
				t = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				l = (0, e.BC)`${a}/destinations`,
				i = (0, e.BC)`${a}/create`,
				f = (0, e.BC)`${i}/${"alertType"}`,
				y = (0, e.BC)`${a}/edit/${"alertId"}`,
				S = s({
					account: r,
					alerts: a,
					destinations: l,
					createAlert: i,
					createAlertWithSelection: f,
					editAlert: y
				}, o._j, c._j),
				P = s({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, m.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				_j: function() {
					return g
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				c = (0, e.BC)`${o}/pagerduty/connect`,
				m = (0, e.BC)`${o}/pagerduty/register`,
				s = (0, e.BC)`${o}/pagerduty`,
				g = {
					pagerDutyConnect: c,
					pagerDutyRegister: m,
					pagerDutyList: s
				};
			var d = null
		},
		"../react/pages/home/alerts/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_LIST = "create list", o.DELETE_LIST = "delete list", o.ADD_LIST_ITEM = "add list item", o.DELETE_LIST_ITEM = "delete list item", o
			}({})
		},
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				AA: function() {
					return x
				},
				AN: function() {
					return Pe
				},
				AY: function() {
					return at
				},
				Am: function() {
					return P
				},
				B2: function() {
					return U
				},
				BB: function() {
					return X
				},
				BF: function() {
					return pe
				},
				BQ: function() {
					return ne
				},
				E8: function() {
					return Ce
				},
				Fl: function() {
					return lt
				},
				Fu: function() {
					return B
				},
				Gc: function() {
					return Se
				},
				Hc: function() {
					return Mt
				},
				IO: function() {
					return ue
				},
				JK: function() {
					return Ze
				},
				K: function() {
					return C
				},
				LI: function() {
					return k
				},
				LX: function() {
					return V
				},
				L_: function() {
					return qe
				},
				Ly: function() {
					return wt
				},
				M9: function() {
					return Ie
				},
				MR: function() {
					return ae
				},
				Mj: function() {
					return v
				},
				NB: function() {
					return bt
				},
				Or: function() {
					return b
				},
				P5: function() {
					return $e
				},
				PE: function() {
					return de
				},
				Pd: function() {
					return kt
				},
				Pk: function() {
					return Be
				},
				Pp: function() {
					return We
				},
				Q1: function() {
					return K
				},
				Qr: function() {
					return re
				},
				Qv: function() {
					return Te
				},
				Rp: function() {
					return Lt
				},
				Sh: function() {
					return nt
				},
				TZ: function() {
					return F
				},
				Tg: function() {
					return Ve
				},
				Tp: function() {
					return ct
				},
				Uy: function() {
					return Pt
				},
				Vw: function() {
					return J
				},
				W3: function() {
					return ze
				},
				WR: function() {
					return ye
				},
				WX: function() {
					return Oe
				},
				XF: function() {
					return Ne
				},
				Xc: function() {
					return xe
				},
				ZB: function() {
					return Y
				},
				Zs: function() {
					return je
				},
				_f: function() {
					return me
				},
				_k: function() {
					return Le
				},
				b4: function() {
					return ge
				},
				c2: function() {
					return G
				},
				cE: function() {
					return Dt
				},
				dh: function() {
					return et
				},
				fE: function() {
					return Qe
				},
				g7: function() {
					return N
				},
				hO: function() {
					return Xe
				},
				hV: function() {
					return Tt
				},
				hk: function() {
					return T
				},
				hr: function() {
					return ce
				},
				it: function() {
					return tt
				},
				jG: function() {
					return we
				},
				jN: function() {
					return He
				},
				m8: function() {
					return fe
				},
				nm: function() {
					return Ct
				},
				oW: function() {
					return ht
				},
				oc: function() {
					return S
				},
				pH: function() {
					return j
				},
				pi: function() {
					return z
				},
				rI: function() {
					return M
				},
				s7: function() {
					return Fe
				},
				sO: function() {
					return Ee
				},
				sg: function() {
					return it
				},
				tB: function() {
					return y
				},
				tN: function() {
					return Re
				},
				vV: function() {
					return _e
				},
				vc: function() {
					return Ke
				}
			});
			var e = n("../../../../node_modules/lodash/lodash.js"),
				o = n.n(e),
				c = n("../../../../node_modules/moment/moment.js"),
				m = n.n(c),
				s = n("../../../common/util/types/src/api/domain.ts"),
				g = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				d = n("../react/utils/translator.tsx"),
				p = n("../react/utils/url.ts"),
				_ = n("../react/pages/home/domain-registration/config.ts"),
				t = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = n("../react/pages/home/domain-registration/types.ts");

			function a(u) {
				for (var A = 1; A < arguments.length; A++) {
					var ie = arguments[A] != null ? Object(arguments[A]) : {},
						he = Object.keys(ie);
					typeof Object.getOwnPropertySymbols == "function" && he.push.apply(he, Object.getOwnPropertySymbols(ie).filter(function(De) {
						return Object.getOwnPropertyDescriptor(ie, De).enumerable
					})), he.forEach(function(De) {
						l(u, De, ie[De])
					})
				}
				return u
			}

			function l(u, A, ie) {
				return A = i(A), A in u ? Object.defineProperty(u, A, {
					value: ie,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[A] = ie, u
			}

			function i(u) {
				var A = f(u, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function f(u, A) {
				if (typeof u != "object" || u === null) return u;
				var ie = u[Symbol.toPrimitive];
				if (ie !== void 0) {
					var he = ie.call(u, A || "default");
					if (typeof he != "object") return he;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(u)
			}

			function y(u) {
				return u.filter(A => A.isSelected).reduce((A, {
					fees: ie,
					isZoneEntitlementPresent: he
				}) => he || !(0, e.isNumber)(ie == null ? void 0 : ie.transfer_fee) ? A : A + (ie == null ? void 0 : ie.transfer_fee), 0)
			}

			function S(u) {
				return u.filter(A => A.registrar.toLowerCase() === "godaddy")
			}
			const P = "MMM D, YYYY";

			function T(u, A, ie, he) {
				var De, Je, pt, mt, At, ut, dt, Ot, gt, Ge, ft;
				const Me = u[A.name];
				return {
					name: A.name,
					zone: Me,
					entitlements: ie,
					registryCheck: he,
					nameservers: A.name_servers,
					isAvailable: A.available,
					lastKnownStatus: A.last_known_status,
					authCode: A.auth_code,
					isEnterpriseZone: (Me == null || (De = Me.plan) === null || De === void 0 ? void 0 : De.legacy_id) === "enterprise",
					isActiveZone: (Me == null ? void 0 : Me.status) === "active",
					corResponsesPending: A.cor_responses_pending,
					isCorLocked: A.cor_locked,
					corLockedUntil: A.cor_locked_until ? m()(A.cor_locked_until).format(P) : null,
					isFullZone: (Me == null ? void 0 : Me.type) == r.xd.Full,
					isLocked: A.locked,
					registrar: A.current_registrar || _.JM,
					zoneId: Me == null ? void 0 : Me.id,
					currentExpiration: m()(A.expires_at).format(P),
					newExpiration: m()(A.expires_at).add(1, "year").format(P),
					lastEntitledAt: A.last_entitled_at ? new Date(A.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(ie) && !!ie.find(Et => Et.id === _.g5 && Et.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: A.transfer_in && D(A.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: A.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: A.transfer_in,
					transferOut: A.transfer_out,
					autoRenew: A.auto_renew === !0,
					lastTransferredAt: A.last_transferred_at,
					createdAt: A.created_at,
					paymentExpiresAt: m()(A.payment_expires_at).isValid() ? m()(A.payment_expires_at) : m()(A.expires_at).isValid() ? m()(A.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (Je = A.contacts) === null || Je === void 0 || (pt = Je.administrator) === null || pt === void 0 ? void 0 : pt.id,
						[r.l2.Billing]: (mt = A.contacts) === null || mt === void 0 || (At = mt.billing) === null || At === void 0 ? void 0 : At.id,
						[r.l2.Registrant]: (ut = A.contacts) === null || ut === void 0 || (dt = ut.registrant) === null || dt === void 0 ? void 0 : dt.id,
						[r.l2.Technical]: (Ot = A.contacts) === null || Ot === void 0 || (gt = Ot.technical) === null || gt === void 0 ? void 0 : gt.id
					},
					landing: A.landing,
					whois: A.whois,
					emailVerified: A.email_verified,
					materialChanges: q(A.material_changes),
					corChanges: A.cor_changes ? X(Object.assign(a({}, R), A.cor_changes)) : {},
					registryStatuses: A.registry_statuses ? A.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Ge = A.domain_protection_services) === null || Ge === void 0 ? void 0 : Ge.status
					},
					deletion: {
						isDeletable: A == null || (ft = A.deletion) === null || ft === void 0 ? void 0 : ft.is_deletable
					},
					premiumType: A == null ? void 0 : A.premium_type,
					fees: A == null ? void 0 : A.fees
				}
			}
			const R = {
				id: "",
				first_name: "",
				organization: "",
				address: "",
				city: "",
				state: "",
				zip: "",
				country: "",
				phone: "",
				email: "",
				fax: "",
				last_name: "",
				address2: "",
				email_verified: "",
				extensions: {}
			};

			function D(u) {
				switch (u.enter_auth_code) {
					case r.lW.OK:
						return r.BJ.Valid;
					case r.lW.NEEDED:
						return r.BJ.Pending;
					case r.lW.UNKNOWN:
						return r.BJ.Pending;
					case r.lW.REJECTED:
						return r.BJ.Error;
					case r.lW.TRYING:
						return r.BJ.Pending
				}
				return r.BJ.Pending
			}

			function C(u) {
				let A = u.extensions;
				(A == null ? void 0 : A.application_purpose) && (A == null ? void 0 : A.nexus_category) && (u.extensions = {
					nexusCategory: A.nexus_category,
					applicationPurpose: A.application_purpose
				});
				let ie = a({}, typeof u.id == "string" ? {
					id: u.id
				} : {}, {
					first_name: u.firstName,
					organization: u.organization,
					address: u.address1,
					city: u.city,
					state: u.state || "N/A",
					zip: u.zip,
					country: u.country,
					phone: u.phone,
					email: u.email,
					fax: "",
					last_name: u.lastName,
					address2: u.address2,
					email_verified: u.emailVerified
				}, u.extensions ? {
					extensions: {
						nexus_category: u.extensions.nexusCategory,
						application_purpose: u.extensions.applicationPurpose
					}
				} : {});
				return Ye(ie)
			}

			function q(u) {
				let A = [];
				const ie = {
					id: "",
					first_name: "firstName",
					organization: "organization",
					address: "address1",
					city: "city",
					state: "state",
					zip: "zip",
					country: "country",
					phone: "phone",
					email: "email",
					fax: "fax",
					last_name: "lastName",
					address2: "address2",
					email_verified: "emailVerified",
					extensions: null
				};
				for (const he in u) {
					const De = u[he],
						Je = ie[De];
					A.push(Je)
				}
				return A
			}
			const ee = u => {
				if (!u) return null;
				let A = u;
				return u.includes("C31") && (A = "C31"), u.includes("C32") && (A = "C32"), A
			};

			function X(u) {
				return a({}, typeof u.id == "string" ? {
					id: u.id
				} : {}, {
					firstName: u.first_name,
					organization: u.organization,
					address1: u.address,
					city: u.city,
					state: u.state,
					zip: u.zip,
					country: u.country,
					phone: u.phone.trim(),
					email: u.email.trim(),
					lastName: u.last_name,
					address2: u.address2,
					emailVerified: u.email_verified
				}, u.extensions ? {
					extensions: {
						nexusCategory: ee(u.extensions.nexus_category),
						applicationPurpose: u.extensions.application_purpose
					}
				} : {})
			}

			function Y(u = {}) {
				const A = {
					name: "",
					zoneId: "",
					zone: a({
						id: "",
						name: "",
						status: "pending",
						plan: a({
							id: "free",
							legacy_id: "free",
							name: "Free",
							price: 0,
							frequency: "monthly",
							currency: "usd",
							is_subscribed: !0,
							can_subscribe: !0,
							legacy_discount: !1,
							externally_managed: !1
						}, u.zone && u.zone.plan || {}),
						type: r.xd.Full
					}, u.zone || {}),
					emailVerified: !1,
					nameservers: [],
					isCorLocked: !1,
					corLockedUntil: null,
					corResponsesPending: 0,
					isEnterpriseZone: !1,
					autoRenew: !1,
					isActiveZone: !0,
					isFullZone: !0,
					isAvailable: !1,
					isLocked: !0,
					currentExpiration: "",
					newExpiration: "",
					lastEntitledAt: null,
					isZoneEntitlementPresent: null,
					registrar: "",
					autoTransferStatus: r._n.Pending,
					transferAuthCode: "",
					authCodeStatus: r.BJ.Pending,
					transferApiCallStatus: r.Yh.Pending,
					transferConditions: a({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, u.transferConditions || {}),
					transferIn: a({
						unlock_domain: r.lW.UNKNOWN,
						disable_privacy: r.lW.UNKNOWN,
						enter_auth_code: r.lW.UNKNOWN,
						approve_transfer: r.lW.UNKNOWN,
						accept_foa: r.lW.UNKNOWN,
						can_cancel_transfer: !1
					}, u.transferIn || {}),
					lastTransferredAt: "",
					paymentExpiresAt: "",
					contactIds: {},
					landing: {
						eligible: !1,
						enabled: !1
					},
					whois: {
						raw: "",
						privacy: !0
					},
					materialChanges: [],
					corChanges: {},
					registryStatuses: null,
					deletion: {
						isDeletable: !1
					},
					premiumType: r.Vs.Not_Premium,
					fees: null
				};
				return Object.assign(A, u)
			}

			function K(u = {}) {
				return Object.assign({
					firstName: "",
					lastName: "",
					address1: "",
					address2: "",
					city: "",
					state: "",
					zip: "",
					country: "",
					organization: "",
					phone: "",
					email: "",
					emailVerified: !1,
					extensions: void 0
				}, u)
			}

			function B(u) {
				const A = _.Py.concat(_.ui).reduce((ie, he) => a({}, ie, {
					[he]: []
				}), {});
				return u.forEach(ie => {
					let he = $(ie.registrar);
					he in A || (he = _.ui), it(ie.name) && (he = "uk"), A[he].push(ie)
				}), Object.keys(A).sort((ie, he) => ie.localeCompare(he)).map(ie => ({
					registrar: ie,
					domains: A[ie]
				})).filter(ie => ie.domains.length > 0)
			}

			function $(u) {
				return u == null ? void 0 : u.toLowerCase().replace(/\s|,|\./g, "")
			}

			function J(u) {
				if (!u || !u.registrar) return "unknown";
				if (it(u.name)) return "uk";
				const A = $(u.registrar);
				return A in _.gM ? A : "unknown"
			}
			const Q = [];

			function Z(u) {
				return Q.some(A => u.endsWith("." + A))
			}

			function se(u) {
				return !u.isEnterpriseZone || !Array.isArray(u.entitlements) ? !1 : !!u.entitlements.find(({
					id: A,
					allocation: ie
				}) => A === _.g5 && ie.value === !0)
			}

			function z(u) {
				var A;
				const ie = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let he = !1,
					De = null;
				return (A = u.registryStatuses) === null || A === void 0 || A.some(Je => {
					ie.includes(Je) && (De = Je, he = !0)
				}), [he, De]
			}

			function fe(u, A = !1) {
				if (!u) return [!1, t.keys.cannot_transfer_default];
				if (u.zone.status !== "active") return [!1, t.keys.cannot_transfer_zone_not_active];
				if (!u.isFullZone && !se(u)) return [!1, t.keys.cannot_transfer_zone_not_eligible];
				if (u.registrar === "Cloudflare") return [!1, t.keys.cannot_transfer_domain_on_cf];
				if (u.isAvailable) return [!1, t.keys.cannot_transfer_domain_available];
				if (!u.transferConditions) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (!A && Pt(u == null ? void 0 : u.premiumType)) return [!1, t.keys.cannot_transfer_domain_premium];
				if (j(u)) return [!1, t.keys.cannot_transfer_domain_transfer_in_progress];
				let ie;
				for (ie in u.transferConditions)
					if (ie !== "not_premium" && !u.transferConditions[ie]) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (Z(u.name)) return [!1, t.keys.cannot_transfer_domain_tld_not_supported];
				const [he, De] = z(u);
				return he && De ? [!1, t.keys.cannot_transfer_domain_registry_status[De]] : [!0, ""]
			}

			function j(u) {
				var A, ie;
				return !!u.transferIn && !((A = u.transferConditions) === null || A === void 0 ? void 0 : A.not_started) && !!(it(u.name) || ((ie = u.registryStatuses) === null || ie === void 0 ? void 0 : ie.includes(r.rj.PENDING_TRANSFER)))
			}

			function I(u) {
				return !!u.registrar && !!u.currentExpiration
			}

			function U(u, A = !1) {
				const [ie] = fe(u, A);
				return I(u) ? Ae(u) ? r.M5.InProgressOrOnCF : ie ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function G(u) {
				return u.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(u.transferIn.enter_auth_code) || !1
			}

			function ae(u) {
				return u.registrar === "Cloudflare"
			}

			function M(u) {
				return !!(u == null ? void 0 : u.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function v(u) {
				return !!(u == null ? void 0 : u.includes(r.rj.PENDING_TRANSFER))
			}
			const O = "Invalid date";

			function b(u) {
				return u.newExpiration === O ? "Unavailable" : u.newExpiration
			}

			function F(u) {
				return u.currentExpiration === O ? "Unavailable" : u.currentExpiration
			}

			function x(u) {
				return u.substring(u.indexOf("."))
			}

			function ce(u) {
				return u.map(A => A.name).map(A => x(A)).filter((A, ie, he) => !he.includes(A, ie + 1))
			}

			function ge(u) {
				if (_.no) return [!0, ""];
				if (!ae(u)) return [!1, r.ok.NotOnCF];
				if (u.isCorLocked) return [!1, u.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (u.lastTransferredAt) {
					const A = m()(u.lastTransferredAt),
						ie = m().duration(m()().diff(A)).as("days"),
						he = it(u.name);
					if (ie < (he ? 1 : 60)) return [!1, he ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (u.createdAt) {
					const A = m()(u.createdAt);
					if (m().duration(m()().diff(A)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function Oe(u) {
				return !!(_.Bc || u.transferOut)
			}

			function Ae(u) {
				return N(u) || ae(u)
			}

			function Re(u) {
				return !N(u) && ae(u)
			}

			function N(u) {
				return !u || u.lastKnownStatus === "pendingTransfer" || u.lastKnownStatus === "transferFOAPending" || !ae(u) && u.transferConditions && !u.transferConditions.not_started || !1
			}

			function de(u) {
				return !(Z(u.name) || u.transferConditions && !u.transferConditions.supported_tld)
			}

			function Te(u) {
				return (u == null ? void 0 : u.includes("/")) ? !0 : u.split("").some(A => A.charCodeAt(0) > 123)
			}

			function Be(u) {
				switch (u) {
					case "1&1internetse":
						return "1&1 Ionos";
					case "enom":
						return "Enom";
					case "godaddycomllc":
						return "GoDaddy";
					case "namecheap":
						return "Namecheap";
					case "networksolutions":
						return "Network Solutions";
					case "uk":
						return "UK"
				}
			}

			function Ke(u) {
				return m()(u.paymentExpiresAt).isBefore(m()())
			}

			function He(u) {
				return u.transferIn && u.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function Ze(u) {
				const A = ["CU", "KP", "IR", "SY"];
				return u.filter(ie => !A.includes(ie.code))
			}

			function Ve(u) {
				if (!!u) return `${u.charAt(0).toUpperCase()}${u.slice(1)}${u.charAt(u.length-1)==="."?"":"."}`
			}

			function Ye(u) {
				const A = {};
				for (const [ie, he] of Object.entries(u)) {
					if (he && typeof he == "string") {
						Object.assign(A, {
							[ie]: he.trim()
						});
						continue
					}
					Object.assign(A, {
						[ie]: he
					})
				}
				return A
			}

			function je(u) {
				return m()(u).add(40, "days")
			}

			function qe(u) {
				const A = u.paymentExpiresAt || u.payment_expires_at,
					ie = je(A);
				return m()().isBetween(A, ie)
			}

			function Qe(u) {
				var A;
				return !(u == null ? void 0 : u.registryStatuses) || !Array.isArray(u == null ? void 0 : u.registryStatuses) && !(0, e.isString)(u == null ? void 0 : u.registryStatuses) ? !1 : (A = u.registryStatuses) === null || A === void 0 ? void 0 : A.includes(r.rj.REDEMPTION_PERIOD)
			}

			function et(u) {
				var A;
				return !(u == null ? void 0 : u.registryStatuses) || !Array.isArray(u == null ? void 0 : u.registryStatuses) && !(0, e.isString)(u == null ? void 0 : u.registryStatuses) ? !1 : (A = u.registryStatuses) === null || A === void 0 ? void 0 : A.includes(r.rj.PENDING_DELETE)
			}

			function We(u) {
				return [".us"].includes(u)
			}

			function tt(u) {
				return [".us"].includes(u)
			}

			function Xe(u) {
				switch (u) {
					case ".us":
						return te();
					default:
						return []
				}
			}

			function ze(u) {
				switch (u) {
					case ".us":
						return w;
					default:
						return {}
				}
			}
			const w = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function te() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([u, A]) => ({
						value: u,
						label: A
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([u, A]) => ({
						value: u,
						label: A
					}))
				}]
			}

			function V(u, A, ie) {
				return A[A.length - 1][ie] === u[ie]
			}

			function re(u) {
				return Boolean(Object.keys(u).length === 0)
			}

			function pe(u) {
				return m()().add(u, "year").format(P)
			}

			function me({
				accountName: u
			}) {
				var A;
				const ie = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((A = u.toLowerCase().match(ie)) === null || A === void 0 ? void 0 : A[0]) || ""
			}

			function _e(u) {
				return !!u.match(g.default.email)
			}

			function we(u) {
				return u === "Registration banned zone error"
			}

			function xe(u) {
				return u == null ? void 0 : u.startsWith("Quote error")
			}

			function Ie(u) {
				return u == null ? void 0 : u.startsWith("Invalid acknowledgement")
			}

			function Ee(u) {
				return u === (0, d.ZP)(t.keys.registration_checkout_trademark_notice_error_message)
			}

			function Le(u) {
				return u === "DNS conflict"
			}

			function ct(u) {
				return u === s.W7.PENDING_UPDATE
			}

			function Se(u) {
				return u ? Object.values(s.wR).filter(A => A !== s.wR.OFFBOARDED).includes(u) : !1
			}

			function Fe(u) {
				return u ? [s.wR.LOCKED, s.wR.ONBOARDED, s.wR.ONBOARDING_INITIATED, s.wR.PENDING_REGISTRY_LOCK, s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(u) : !1
			}

			function ke(u) {
				return u ? s.wR.UNLOCKED === u : !1
			}

			function vt(u) {
				return u ? s.wR.LOCKED === u : !1
			}

			function k(u) {
				return u ? s.wR.PENDING_REGISTRY_LOCK === u : !1
			}

			function ne(u) {
				return u ? [s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(u) : !1
			}

			function ue(u) {
				var A;
				return !1
			}

			function ye(u) {
				var A;
				return !1
			}

			function Pe(u) {
				var A;
				return !1
			}

			function Ne(u) {
				var A;
				return !1
			}

			function Ce(u) {
				var A;
				return !1
			}

			function ht(u) {
				return Object.keys(s.wR).find(A => s.wR[A].toLowerCase() === u.toLowerCase())
			}

			function at(u) {
				var A;
				const ie = (A = ht(u)) === null || A === void 0 ? void 0 : A.toLowerCase();
				return ie ? t.keys.protection_status[ie] : t.keys.protection_status.unknown
			}

			function St(u) {
				return ["com", "net"].includes(u)
			}

			function lt(u) {
				const A = (0, p.pu)(u);
				return St(A) ? s.wR.PENDING_REGISTRY_LOCK : s.wR.LOCKED
			}

			function nt(u) {
				return (0, p.pu)(u) === "co" ? 5 : 10
			}

			function Ct(u, A) {
				return A ? 1 : (0, p.pu)(u) === "co" ? 5 : (0, p.pu)(u) === "org" ? 1 : 10
			}

			function it(u) {
				return (0, p.pu)(u) === "uk"
			}

			function Dt(u) {
				return (0, p.pu)(u) === "us"
			}

			function Lt(u) {
				return m()(u).isValid()
			}

			function wt(u) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(u)
			}

			function $e(u) {
				return !!(u == null ? void 0 : u.id)
			}

			function bt(u) {
				return u ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(u) : !1
			}

			function kt(u) {
				return u ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(u) : !1
			}

			function Tt(u) {
				var A;
				return (u == null ? void 0 : u.lastKnownStatus) ? (A = u.lastKnownStatus) === null || A === void 0 ? void 0 : A.includes("deletionIrredeemable") : !1
			}

			function Pt(u) {
				switch (u) {
					case r.Vs.NonStandard_NonStandard:
					case r.Vs.NonStandard_Standard:
					case r.Vs.Standard_Standard:
					case r.Vs.Standard_NonStandard:
						return !0;
					case r.Vs.Not_Premium:
					default:
						return !1
				}
			}

			function Mt(u) {
				if (!u || !u.message) return r.OJ.DEFAULT;
				const {
					message: A
				} = u;
				switch (!0) {
					case A.includes("feature disabled"):
						return r.OJ.FEATURE_DISABLED;
					case A.includes("email unverified"):
						return r.OJ.EMAIL_UNVERIFIED;
					case A.includes("account blocked"):
						return r.OJ.ACCOUNT_BLOCKED;
					default:
						return r.OJ.DEFAULT
				}
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Bc: function() {
					return _
				},
				Hv: function() {
					return Z
				},
				JM: function() {
					return c
				},
				Py: function() {
					return g
				},
				WK: function() {
					return r
				},
				g5: function() {
					return a
				},
				gM: function() {
					return s
				},
				gf: function() {
					return p
				},
				jk: function() {
					return Q
				},
				no: function() {
					return t
				},
				uY: function() {
					return d
				},
				ui: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../flags.js");
			const c = "Unknown",
				m = "unknown",
				s = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				g = Object.keys(s),
				d = !0,
				p = (0, o.J8)("registrar_mock_data") || !1,
				_ = (0, o.J8)("registrar_mock_transfer_out") || !1,
				t = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				a = "cf_registrar.enabled",
				l = "@abcABC1234567890123456",
				i = (0, e.BC)`/${"accountId"}`,
				f = (0, e.BC)`${i}/add-site`,
				y = (0, e.BC)`${i}/domains`,
				S = (0, e.BC)`${y}/${"zoneName"}`,
				P = (0, e.BC)`${S}/configuration`,
				T = (0, e.BC)`${S}/contacts`,
				R = (0, e.BC)`${y}/pricing`,
				D = (0, e.BC)`${y}/protection`,
				C = (0, e.BC)`${y}/register`,
				q = (0, e.BC)`${C}/checkout`,
				ee = (0, e.BC)`${C}/success`,
				X = (0, e.BC)`${y}/tlds`,
				Y = (0, e.BC)`${y}/transfer`,
				K = (0, e.BC)`${y}/transfer/${"zoneName"}`,
				B = (0, e.BC)`/registrar/accounts/verify_email`,
				$ = (0, e.BC)`/registrar/domains/verify_email`,
				J = (0, e.BC)`${y}/verify-email`,
				Q = {
					addSite: f,
					domains: y,
					domainsDomain: S,
					domainsDomainConfiguration: P,
					domainsDomainContacts: T,
					domainsPricing: R,
					domainsProtection: D,
					domainsRegister: C,
					domainsRegisterCheckout: q,
					domainsRegisterSuccess: ee,
					domainsTlds: X,
					domainsTransfer: Y,
					domainsTransferZone: K,
					registrarAccountsVerifyEmail: B,
					registrarDomainsVerifyEmail: $,
					verifyEmail: J
				},
				Z = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				J: function() {
					return r
				},
				U: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				c = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = n.n(c),
				s = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function g(a) {
				for (var l = 1; l < arguments.length; l++) {
					var i = arguments[l] != null ? Object(arguments[l]) : {},
						f = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(i).filter(function(y) {
						return Object.getOwnPropertyDescriptor(i, y).enumerable
					})), f.forEach(function(y) {
						d(a, y, i[y])
					})
				}
				return a
			}

			function d(a, l, i) {
				return l = p(l), l in a ? Object.defineProperty(a, l, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[l] = i, a
			}

			function p(a) {
				var l = _(a, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function _(a, l) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var f = i.call(a, l || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(a)
			}
			let t = function(a) {
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a
			}({});

			function r(a, l, i) {
				if (!(l == null ? void 0 : l.name)) return null;
				m().sendEvent(a, g({
					domain: {
						name: l.name,
						premium: (0, s.Uy)(l == null ? void 0 : l.premiumType),
						paymentExpiresAt: o()(l == null ? void 0 : l.paymentExpiresAt).format()
					},
					category: "registrar"
				}, i))
			}
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				KO: function() {
					return d
				},
				L9: function() {
					return t
				},
				N3: function() {
					return _
				},
				zE: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), i.forEach(function(f) {
						m(r, f, l[f])
					})
				}
				return r
			}

			function m(r, a, l) {
				return a = s(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function s(r) {
				var a = g(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let d = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r
				}({}),
				p = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				_ = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const t = (r, a = {}) => {
				o().sendEvent(r, c({}, a, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/magic/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				GF: function() {
					return a
				},
				H3: function() {
					return d
				},
				H8: function() {
					return s
				},
				J: function() {
					return i
				},
				Nz: function() {
					return p
				},
				UQ: function() {
					return y
				},
				Up: function() {
					return m
				},
				W8: function() {
					return _
				},
				Ws: function() {
					return S
				},
				Xg: function() {
					return r
				},
				_j: function() {
					return c
				},
				a4: function() {
					return l
				},
				jS: function() {
					return f
				},
				rF: function() {
					return g
				},
				rG: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/utils/translator.tsx");
			const c = {
					homeUrl: (0, e.BC)`/${"accountId"}/${"productName"}`,
					tunnelHealthchecks: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks`,
					alertNotifications: (0, e.BC)`/${"accountId"}/notifications`,
					networkAnalytics: (0, e.BC)`/${"accountId"}/network-analytics/all-traffic`,
					ipPrefixes: (0, e.BC)`/${"accountId"}/ip-addresses/ip-prefixes`,
					configuration: (0, e.BC)`/${"accountId"}/${"productName"}/configuration`,
					configurationScoping: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/scoping`,
					subnetDetails: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/subnet-details`,
					subnetDetailsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/subnet-details/form`,
					tunnels: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels`,
					tunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/form`,
					createGreTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/gre-tunnels/create`,
					editGreTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/gre-tunnels/edit`,
					createIpsecTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/ipsec-tunnels/create`,
					editIpsecTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/ipsec-tunnels/edit`,
					interconnects: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects`,
					interconnectsCreateForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/create`,
					interconnectsEditForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/edit`,
					createInterconnectGREForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/create/gre`,
					createInterconnectMPLSForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/create/mpls`,
					staticRoutes: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/static-routes`,
					createStaticRoutesForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/static-routes/create`,
					editStaticRoutesForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/static-routes/edit`,
					magicWanAddressSpace: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/magic_wan_address_space`,
					connectors: (0, e.BC)`/${"accountId"}/magic-wan/configuration/connectors`,
					editConnector: (0, e.BC)`/${"accountId"}/magic-wan/configuration/connectors/edit`,
					magicFirewallRulesBase: (0, e.BC)`/${"accountId"}/network-security/magic_firewall`,
					pcapsHome: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures`,
					pcapsCaptures: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/captures`,
					pcapsCaptureCreate: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/captures/create-capture`,
					pcapsBuckets: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets`,
					pcapsBucketsCreate: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets/create-bucket`,
					simpleCaptureFormUrl: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets/create-bucket/sample`,
					fullCaptureFormUrl: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets/create-bucket/full`,
					networkMonitoring: (0, e.BC)`/${"accountId"}/network-monitoring`,
					networkMonitoringPackets: (0, e.BC)`/${"accountId"}/network-monitoring/packets`,
					networkMonitoringConfiguration: (0, e.BC)`/${"accountId"}/network-monitoring/configuration`,
					networkMonitoringViewConfiguration: (0, e.BC)`/${"accountId"}/network-monitoring/view-configuration`,
					networkMonitoringRules: (0, e.BC)`/${"accountId"}/network-monitoring/rules`,
					networkMonitoringRulesCreateForm: (0, e.BC)`/${"accountId"}/network-monitoring/rules/create`,
					networkMonitoringRulesEditForm: (0, e.BC)`/${"accountId"}/network-monitoring/rules/edit`,
					networkMonitoringOnboarding: (0, e.BC)`/${"accountId"}/network-monitoring/onboarding`,
					overview: (0, e.BC)`/${"accountId"}/magic-wan/overview`,
					overviewSiteDetail: (0, e.BC)`/${"accountId"}/magic-wan/overview/${"siteId"}`,
					sites: (0, e.BC)`/${"accountId"}/magic-wan/sites`,
					createSite: (0, e.BC)`/${"accountId"}/magic-wan/sites/create`,
					editSite: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit`,
					editSiteTabSite: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/site`,
					editSiteTabNetwork: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/network`,
					editSiteTabTunnels: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/tunnels`,
					editSiteTabRoutes: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/static-routes`,
					editSiteTabBreakOutAppsTabs: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/breakoutapps`,
					policiesLan: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/policies`,
					quickSearchIpPrefixesUrl: (0, e.BC)`/configuration/subnet-details`,
					quickSearchTunnels: (0, e.BC)`/configuration/tunnels`,
					quickSearchInterconnects: (0, e.BC)`/configuration/interconnects`,
					quickSearchStaticRoutes: (0, e.BC)`/configuration/static-routes`,
					quickSearchWanAddressSpace: (0, e.BC)`/configuration/magic_wan_address_space`,
					quickSearchCaptures: "/packet-captures/captures",
					quickSearchBuckets: "/packet-captures/buckets",
					quickSearchNetworkMonitoringRules: "/rules",
					quickSearchNetworkMonitoringViewConfiguration: "/view-configuration",
					quickSearchConnectors: (0, e.BC)`/configuration/connectors`,
					quickSearchSitesTabSite: "/site",
					quickSearchSitesTabNetwork: "/network",
					quickSearchSitesTabTunnels: "/tunnels",
					quickSearchSitesTabStaticRoutes: "/static-routes",
					quickSearchSitesTabBreakOutApps: "/breakoutapps",
					interconnectsTableAll: "/all",
					interconnectsTablePhysical: "/physical",
					interconnectsTableVirtual: "/virtual",
					interconnectsTableCloud: "/cloud",
					interconnectsAllRoute: (0, e.BC)`/${"accountId"}/${"productName"}/all`,
					interconnectsPhysicalRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical`,
					interconnectsVirtualRoute: (0, e.BC)`/${"accountId"}/${"productName"}/virtual`,
					interconnectsCloudRoute: (0, e.BC)`/${"accountId"}/${"productName"}/cloud`,
					interconnectsPhysicalCreateRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create`,
					interconnectsPhysicalCreateSpeedRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create/speed/${"slotId"}`,
					interconnectsPhysicalCreateConfirmRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create/confirm`,
					interconnectsPhysicalCreateDownloadRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create/download/${"cniId"}`,
					tunnelHealthCheckTunnels: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels`,
					tunnelHealthCheckTunnelsList: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/list`,
					tunnelHealthCheckTunnelsHighlight: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight`,
					tunnelHealthCheckTunnelsHighlightDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight/${"tunnelId"}`,
					tunnelHealthCheckTunnelsDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/${"tunnelId"}`
				},
				m = () => [{
					value: "all",
					label: (0, o.ZP)("account.magic_transit.configuration.static_routes.all_regions")
				}, {
					value: "AFR",
					label: (0, o.ZP)("common.regions.africa")
				}, {
					value: "SAM",
					label: (0, o.ZP)("common.regions.south_america")
				}, {
					value: "APAC",
					label: (0, o.ZP)("common.regions.asia_pacific")
				}, {
					value: "WEUR",
					label: (0, o.ZP)("common.regions.western_europe")
				}, {
					value: "EEUR",
					label: (0, o.ZP)("common.regions.eastern_europe")
				}, {
					value: "WNAM",
					label: (0, o.ZP)("common.regions.western_north_america")
				}, {
					value: "ENAM",
					label: (0, o.ZP)("common.regions.eastern_north_america")
				}, {
					value: "ME",
					label: (0, o.ZP)("common.regions.middle_east")
				}, {
					value: "OC",
					label: (0, o.ZP)("common.regions.oceania")
				}],
				s = P => [{
					value: "low",
					label: P("setting.low")
				}, {
					value: "mid",
					label: P("setting.medium")
				}, {
					value: "high",
					label: P("setting.high")
				}],
				g = P => [{
					value: "request",
					label: P("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: P("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				d = P => [{
					value: "unidirectional",
					label: P("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: P("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				p = "magic-transit",
				_ = "magic-wan",
				t = "gre_tunnel",
				r = "ipsec_tunnel",
				a = 64,
				l = 1476,
				i = "mid",
				f = "reply",
				y = P => [{
					value: void 0,
					label: P("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: P("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: P("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				S = P => [{
					value: "all",
					label: P("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: P("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: P("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				_u: function() {
					return o
				},
				bK: function() {
					return e
				},
				lC: function() {
					return c
				}
			});
			const e = {
					VIEW_RULES: "view rules list",
					CREATE_RULE: "create rule",
					UPDATE_RULE: "update rule",
					DELETE_RULE: "delete rule",
					VIEW_CONFIGURATION: "view configuration",
					CREATE_CONFIGURATION: "create configuration",
					UPDATE_CONFIGURATION: "update configuration",
					DELETE_CONFIGURATION: "delete configuration"
				},
				o = "Magic network monitoring",
				c = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				VZ: function() {
					return m
				},
				lC: function() {
					return c
				},
				r8: function() {
					return o
				},
				uB: function() {
					return s
				}
			});
			var e = n("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				c = "user journey",
				m = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				s = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				W_: function() {
					return o
				},
				X: function() {
					return e
				},
				lC: function() {
					return c
				}
			});
			const e = {
					VIEW_BUCKETS_LIST: "view buckets list",
					CREATE_BUCKET: "create bucket",
					VALIDATE_BUCKET: "validate bucket",
					DELETE_BUCKET: "delete bucket",
					VIEW_CAPTURES_LIST: "view captures list",
					CREATE_SIMPLE_CAPTURE: "create simple capture",
					CREATE_FULL_CAPTURE: "create full capture",
					VIEW_FULL_CAPTURE: "view full capture",
					DOWNLOAD_SIMPLE_CAPTURE: "download simple capture"
				},
				o = "Magic packet captures",
				c = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				gb: function() {
					return t
				},
				iP: function() {
					return ee
				},
				xL: function() {
					return P
				},
				rD: function() {
					return Y
				},
				oT: function() {
					return i
				},
				i2: function() {
					return K
				},
				x1: function() {
					return g
				},
				lW: function() {
					return p
				},
				UA: function() {
					return C
				},
				K5: function() {
					return a
				},
				Ii: function() {
					return R
				},
				PJ: function() {
					return X
				},
				bK: function() {
					return y
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				s = n("../../../../node_modules/@cloudflare/elements/es/index.js");
			const g = () => o().createElement(d, null, o().createElement("svg", {
					width: "94",
					height: "5",
					viewBox: "0 0 94 5",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M48.416 2.2002L1.99976 2.20021",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M66.3115 2.2002L59.3767 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M78.7949 2.2002L76.021 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M91.2773 2.2002L88.5034 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				d = (0, c.createComponent)(({
					theme: B
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "58px",
						left: "8%",
						right: "85%"
					}
				})),
				p = () => o().createElement(_, null, o().createElement("svg", {
					width: "211",
					height: "71",
					viewBox: "0 0 211 71",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("circle", {
					cx: "175.5",
					cy: "35.5",
					r: "35.5",
					fill: "#044096"
				}), o().createElement("path", {
					d: "M48.7492 28L2.33298 28",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M66.6457 28L59.7109 28",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M79.1281 28L76.3542 28",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M91.6106 28.0005L88.8366 28.0005",
					stroke: "#E2F5FA",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M164.092 28.2002L100.767 28.2002",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				_ = (0, c.createComponent)(({
					theme: B
				}) => ({
					position: "absolute",
					top: "20px",
					left: "15%",
					right: "85%",
					desktop: {
						top: "45px",
						left: "22%",
						right: "78%"
					}
				})),
				t = () => o().createElement(r, null, o().createElement(s.Ei, {
					alt: "airplane",
					src: m,
					width: "85%"
				})),
				r = (0, c.createComponent)(({
					theme: B
				}) => ({
					position: "absolute",
					width: "90px",
					top: "90px",
					left: "65%",
					right: "35%",
					zIndex: "2",
					desktop: {
						width: "235px"
					}
				})),
				a = () => o().createElement(l, null, o().createElement("svg", {
					width: "104",
					height: "23",
					viewBox: "0 0 104 23",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M93.7248 0H90.2837V7.74245H93.7248V0Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M103.187 9.4624H95.4448V12.9035H103.187V9.4624Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M93.7248 14.6245H90.2837V22.367H93.7248V14.6245Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M88.5632 9.4624H80.8208V12.9035H88.5632V9.4624Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M36.0259 10.627L2.00024 10.627",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M56.8198 10.627L44.5328 10.627",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M72.8872 10.627L65.326 10.627",
					stroke: "#C3E9F3",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				l = (0, c.createComponent)(({
					theme: B
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "130px",
						left: "88%",
						right: "12%"
					}
				})),
				i = () => o().createElement(f, null, o().createElement("svg", {
					width: "13",
					height: "13",
					viewBox: "0 0 13 13",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("ellipse", {
					cx: "6.33672",
					cy: "6.34376",
					rx: "6.33672",
					ry: "6.34376",
					fill: "#086FFF"
				}))),
				f = (0, c.createComponent)(({
					theme: B
				}) => ({
					position: "absolute",
					top: "90px",
					left: "20%",
					right: "80%",
					desktop: {
						top: "156px",
						left: "23%",
						right: "77%"
					}
				})),
				y = () => o().createElement(S, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				S = (0, c.createComponent)(({
					theme: B
				}) => ({
					position: "absolute",
					top: "38px",
					left: "83%",
					right: "17%",
					desktop: {
						top: "64px",
						left: "44%",
						right: "56%"
					}
				})),
				P = () => o().createElement(T, null, o().createElement("svg", {
					width: "22",
					height: "22",
					viewBox: "0 0 22 22",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M12.6922 0H9.30762V7.61541H12.6922V0Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M22.0002 9.30762H14.3848V12.6922H22.0002V9.30762Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M12.6922 14.3848H9.30762V22.0002H12.6922V14.3848Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M7.61542 9.30762H0V12.6922H7.61542V9.30762Z",
					fill: "#C5EBF5"
				}))),
				T = (0, c.createComponent)(({
					theme: B
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "-25px",
						left: "30%",
						right: "70%"
					}
				})),
				R = () => o().createElement(D, null, o().createElement("svg", {
					width: "32",
					height: "32",
					viewBox: "0 0 32 32",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M18.0868 0H13.2637V10.852H18.0868V0Z",
					fill: "#FBAD41"
				}), o().createElement("path", {
					d: "M31.35 13.2637H20.498V18.0868H31.35V13.2637Z",
					fill: "#FBAD41"
				}), o().createElement("path", {
					d: "M18.0868 20.498H13.2637V31.35H18.0868V20.498Z",
					fill: "#FBAD41"
				}), o().createElement("path", {
					d: "M10.852 13.2637H0V18.0868H10.852V13.2637Z",
					fill: "#FBAD41"
				}))),
				D = (0, c.createComponent)(({
					theme: B
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "160px",
						left: "70%",
						right: "30%"
					}
				})),
				C = () => o().createElement(q, null, o().createElement("svg", {
					width: "48",
					height: "15",
					viewBox: "0 0 48 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M40.25 3.0781e-07L33.1902 7.05981L40.25 14.1196L47.3098 7.05981L40.25 3.0781e-07Z",
					fill: "#6ECCE5"
				}), o().createElement("path", {
					d: "M20.9031 6.61694L1.99994 6.61694",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				q = (0, c.createComponent)(({
					theme: B
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "160px",
						left: "20%",
						right: "70%"
					}
				})),
				ee = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 40",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M12.4025 16.0001L10.265 13.8927L8.015 16.1427C8.86952 12.6096 10.8668 9.45753 13.6967 7.17612C16.5265 4.8947 20.0305 3.6116 23.6645 3.52609C27.2984 3.44059 30.8589 4.55747 33.7929 6.70326C36.3879 8.60112 38.3644 11.2099 39.492 14.2014L40.339 13.9224L41.5646 13.5186L42.4174 13.2377C41.0751 9.5683 38.6567 6.37586 35.4641 4.08759C31.9041 1.53603 27.5888 0.257281 23.2134 0.457383C18.838 0.657484 14.6574 2.32478 11.3452 5.19063C8.03295 8.05648 5.78199 11.954 4.955 16.2551L2.63 13.9151L0.5 16.0001L6.5 22.0001L12.4025 16.0001Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M47.5646 24.0049L41.5646 18.0049L35.6471 24.0049L37.7846 26.1124L40.0346 23.8624C39.1898 27.4009 37.1992 30.561 34.3725 32.851C31.5458 35.1411 28.0415 36.4328 24.4048 36.5252C20.768 36.6176 17.2027 35.5055 14.2634 33.3619C11.5162 31.3585 9.45991 28.559 8.36721 25.3515L7.54721 25.6183L6.37385 26.0001L5.5 26.2845C6.79997 30.1536 9.28442 33.5247 12.6114 35.9135C16.1663 38.4659 20.4765 39.7483 24.8486 39.5544C29.2206 39.3605 33.4003 37.7015 36.7153 34.8443C40.0303 31.9872 42.2878 28.098 43.1246 23.8024L45.4346 26.1199L47.5646 24.0049Z",
					fill: "#C5EBF5"
				})),
				X = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 39 41",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M31.1271 6.20742L32.7396 3.67992C25.4571 -1.00008 13.5396 -1.00008 6.17465 3.67992L7.74965 6.21492C14.2521 2.11242 24.7221 2.11242 31.1271 6.20742Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M19.3896 4.67742C15.6941 4.70925 12.0606 5.63105 8.79679 7.36478C5.533 9.09851 2.73499 11.5931 0.639648 14.6374L3.16715 16.2499C5.00538 13.6448 7.43278 11.5105 10.2518 10.0209C13.0708 8.53125 16.2017 7.7283 19.3896 7.67742C28.3896 7.67742 34.1496 13.2724 35.9496 16.2274L38.4996 14.6749C36.4146 11.2174 29.7171 4.67742 19.3896 4.67742Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M19.3971 9.31242C13.4646 9.31242 8.46965 11.8849 5.34215 16.5574C3.6804 19.123 2.6668 22.0539 2.38852 25.0979C2.11024 28.142 2.57563 31.2081 3.74465 34.0324L6.51965 32.8924C5.53401 30.5237 5.1385 27.951 5.36713 25.3956C5.59576 22.8402 6.44168 20.3786 7.83215 18.2224C9.10397 16.3409 10.8316 14.8121 12.8539 13.7787C14.8762 12.7453 17.1272 12.2408 19.3971 12.3124C29.8296 12.3124 32.6421 20.8699 32.8446 24.1699C33.0771 28.0399 30.8646 28.4974 30.4446 28.5424L30.2046 28.5874C29.0973 28.8301 27.9393 28.6509 26.9571 28.0849C26.1096 27.4924 25.5846 26.4049 25.4046 24.8599C24.9171 20.6224 21.6546 18.8599 18.8796 19.0249C15.8271 19.2049 12.5421 21.6724 12.5421 26.6824C12.5421 33.9049 19.1721 39.7174 25.2921 40.9324L25.8921 37.9924C21.5646 37.1449 15.5421 32.7499 15.5421 26.6824C15.5421 23.5999 17.3046 22.1224 19.0521 22.0249C20.4246 21.9424 22.1421 22.7299 22.4271 25.2049C22.7121 27.6799 23.6721 29.4649 25.2771 30.5674C26.9271 31.5879 28.9083 31.9293 30.8046 31.5199C32.7547 31.3024 36.1746 29.4799 35.8372 24.0199C35.5896 19.9024 32.1471 9.31242 19.3971 9.31242Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M11.0346 23.1199C12.2496 19.2499 15.0771 16.9474 18.6471 16.9474C27.0396 16.9474 27.6921 24.1774 27.6921 26.3899H30.6921C30.6921 20.6524 27.5421 13.9474 18.6471 13.9474C13.7646 13.9474 9.75215 17.1274 8.14715 22.1974C7.17854 25.4217 7.25631 28.8699 8.3693 32.0471C9.4823 35.2244 11.5733 37.9674 14.3421 39.8824L16.0296 37.3999C13.7995 35.8488 12.116 33.6332 11.2191 31.069C10.3222 28.5048 10.2576 25.7229 11.0346 23.1199Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M22.9371 31.3399C22.1161 30.5273 21.4749 29.5512 21.055 28.475C20.6351 27.3988 20.4459 26.2464 20.4996 25.0924H17.4996C17.4514 26.6502 17.7256 28.2012 18.3051 29.648C18.8846 31.0948 19.7568 32.4062 20.8671 33.4999C23.4992 35.8335 26.9209 37.0778 30.4371 36.9799C30.7071 36.9799 30.9846 36.9799 31.2546 36.9799L31.1121 33.9799C27.8421 34.1299 24.8571 33.1699 22.9371 31.3399Z",
					fill: "#C5EBF5"
				})),
				Y = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 28",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M24.0165 14.6841C25.4257 14.6841 26.8032 14.2662 27.9749 13.4833C29.1466 12.7004 30.0598 11.5876 30.5991 10.2857C31.1384 8.98378 31.2795 7.55118 31.0046 6.16907C30.7296 4.78695 30.051 3.5174 29.0546 2.52095C28.0581 1.5245 26.7886 0.84591 25.4065 0.57099C24.0244 0.29607 22.5918 0.437169 21.2898 0.976444C19.9879 1.51572 18.8751 2.42895 18.0922 3.60065C17.3093 4.77235 16.8915 6.14989 16.8915 7.55908C16.893 9.44827 17.6442 11.2596 18.9801 12.5955C20.3159 13.9313 22.1273 14.6825 24.0165 14.6841ZM24.0165 3.43783C24.8323 3.43783 25.6298 3.67976 26.3082 4.13302C26.9865 4.58628 27.5153 5.23052 27.8275 5.98427C28.1397 6.73801 28.2214 7.56741 28.0622 8.36758C27.903 9.16775 27.5102 9.90276 26.9333 10.4796C26.3564 11.0565 25.6214 11.4494 24.8212 11.6086C24.021 11.7677 23.1916 11.686 22.4379 11.3738C21.6841 11.0616 21.0399 10.5329 20.5866 9.85456C20.1334 9.17621 19.8915 8.37868 19.8915 7.56283C19.8915 6.46882 20.3261 5.41961 21.0996 4.64602C21.8732 3.87243 22.9224 3.43783 24.0165 3.43783Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M9.03896 17.7928C10.0773 17.7928 11.0923 17.4849 11.9557 16.9081C12.8191 16.3312 13.492 15.5112 13.8893 14.5519C14.2867 13.5926 14.3907 12.537 14.1881 11.5186C13.9855 10.5002 13.4855 9.56475 12.7513 8.83052C12.017 8.0963 11.0816 7.59628 10.0632 7.39371C9.04478 7.19114 7.98918 7.29511 7.02987 7.69247C6.07056 8.08983 5.25062 8.76273 4.67374 9.62609C4.09687 10.4894 3.78896 11.5045 3.78896 12.5428C3.79035 13.9348 4.34392 15.2693 5.32818 16.2536C6.31245 17.2379 7.647 17.7914 9.03896 17.7928ZM9.03896 10.2928C9.48397 10.2928 9.91898 10.4248 10.289 10.672C10.659 10.9193 10.9474 11.2707 11.1177 11.6818C11.288 12.0929 11.3325 12.5453 11.2457 12.9818C11.1589 13.4182 10.9446 13.8192 10.63 14.1338C10.3153 14.4485 9.91437 14.6628 9.47791 14.7496C9.04146 14.8364 8.58906 14.7919 8.17792 14.6216C7.76679 14.4513 7.41539 14.1629 7.16815 13.7929C6.92092 13.4229 6.78896 12.9878 6.78896 12.5428C6.78956 11.9465 7.02687 11.3748 7.44876 10.9533C7.87066 10.5318 8.44261 10.2951 9.03896 10.2951V10.2928Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M40.5112 18.5751H37.4865C36.3725 18.5741 35.2726 18.8238 34.2682 19.3056C33.2866 18.1392 32.0619 17.2014 30.6798 16.5581C29.2977 15.9147 27.7917 15.5813 26.2672 15.5811H21.7327C20.2109 15.5814 18.7076 15.9137 17.3275 16.5549C15.9474 17.1961 14.7238 18.1308 13.7422 19.2936C12.7413 18.8193 11.6473 18.5739 10.5397 18.5751H7.51571C5.5307 18.5773 3.62759 19.3667 2.22384 20.7701C0.820079 22.1736 0.0302906 24.0766 0.02771 26.0616L1.52771 27.5616H46.5L48 26.0616C47.9976 24.0764 47.2077 22.1732 45.8038 20.7697C44.3998 19.3661 42.4964 18.5769 40.5112 18.5751ZM7.51571 21.5751H10.5397C11.083 21.5778 11.6213 21.6794 12.1282 21.8751C11.7558 22.7322 11.5008 23.6356 11.37 24.5608H3.28571C3.59698 23.6878 4.17049 22.9323 4.92771 22.3978C5.68493 21.8634 6.58885 21.576 7.51571 21.5751ZM14.4007 24.5623C14.7489 22.8744 15.6681 21.358 17.0036 20.2685C18.3391 19.1791 20.0092 18.5831 21.7327 18.5811H26.2672C27.9907 18.5829 29.6609 19.1787 30.9966 20.268C32.3322 21.3573 33.2516 22.8736 33.6 24.5616L14.4007 24.5623ZM36.63 24.5623C36.4999 23.6397 36.2462 22.7389 35.8755 21.8841C36.3887 21.6824 36.935 21.5776 37.4865 21.5751H40.5112C41.4382 21.576 42.3422 21.8636 43.0993 22.3984C43.8564 22.9332 44.4297 23.689 44.7405 24.5623H36.63Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M39.0105 17.7928C40.0488 17.7928 41.0638 17.4849 41.9272 16.9081C42.7906 16.3312 43.4635 15.5112 43.8608 14.5519C44.2582 13.5926 44.3622 12.537 44.1596 11.5186C43.957 10.5002 43.457 9.56475 42.7228 8.83052C41.9885 8.0963 41.0531 7.59628 40.0347 7.39371C39.0163 7.19114 37.9607 7.29511 37.0014 7.69247C36.0421 8.08983 35.2221 8.76273 34.6452 9.62609C34.0684 10.4894 33.7605 11.5045 33.7605 12.5428C33.7619 13.9348 34.3154 15.2693 35.2997 16.2536C36.284 17.2379 37.6185 17.7914 39.0105 17.7928ZM39.0105 10.2928C39.4555 10.2928 39.8905 10.4248 40.2605 10.672C40.6305 10.9193 40.9189 11.2707 41.0892 11.6818C41.2595 12.0929 41.304 12.5453 41.2172 12.9818C41.1304 13.4182 40.9161 13.8192 40.6014 14.1338C40.2868 14.4485 39.8859 14.6628 39.4494 14.7496C39.013 14.8364 38.5606 14.7919 38.1494 14.6216C37.7383 14.4513 37.3869 14.1629 37.1397 13.7929C36.8924 13.4229 36.7605 12.9878 36.7605 12.5428C36.7611 11.9465 36.9984 11.3748 37.4203 10.9533C37.8422 10.5318 38.4141 10.2951 39.0105 10.2951V10.2928Z",
					fill: "#C5EBF5"
				})),
				K = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 40 46",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M26.4256 15.404C26.4243 15.3512 26.4193 15.2986 26.4106 15.2465C26.4031 15.1415 26.3956 15.0365 26.3806 14.939C26.38 14.9109 26.3749 14.8831 26.3656 14.8565C26.3665 14.8288 26.364 14.8011 26.3581 14.774C26.2831 13.9865 26.1781 13.214 26.0731 12.4715C26.0656 12.4715 26.0506 12.479 26.0506 12.4865C25.1206 12.839 24.1756 13.244 23.2081 13.6865C23.2606 14.084 23.3131 14.504 23.3581 14.9315L23.3656 14.939C23.388 15.0806 23.403 15.2233 23.4106 15.3665C23.4406 15.6065 23.4631 15.8465 23.4856 16.094C23.4931 16.214 23.5156 16.334 23.5156 16.4615C23.5156 16.589 23.5381 16.7165 23.5456 16.8365L23.5606 16.829C24.5581 16.349 25.5256 15.929 26.4406 15.5615H26.4481C26.4406 15.509 26.4331 15.464 26.4256 15.404ZM22.0531 16.3565C21.8356 16.229 21.6181 16.109 21.3931 15.9965C20.9731 15.764 20.5531 15.539 20.1256 15.329C20.0814 15.2982 20.0335 15.273 19.9831 15.254C19.9831 15.239 19.9831 15.239 19.9756 15.2465C18.9181 15.794 17.8581 16.3765 16.7956 16.994H16.7656C16.7131 17.0315 16.6531 17.0615 16.5931 17.099C16.5331 17.1365 16.4656 17.174 16.4131 17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856C12.2581 19.784 11.2756 20.444 10.3381 21.1115C9.46812 21.734 8.63562 22.3565 7.86312 22.9865C6.68838 23.9077 5.56424 24.8916 4.49562 25.934C1.00812 29.354 -0.199384 32.0765 0.918116 34.0115H0.925616C2.03562 35.939 4.99062 36.2465 9.70061 34.9415C10.4806 34.724 11.2981 34.469 12.1456 34.169C11.9956 33.1865 11.8606 32.1815 11.7481 31.124C7.11312 32.8115 4.08312 33.104 3.52062 32.519C3.49539 32.0868 3.62281 31.6594 3.88062 31.3115C4.70562 29.894 6.85062 27.5615 10.3306 24.854C10.6606 24.6065 10.9831 24.3515 11.3356 24.104C11.4481 24.014 11.5681 23.9315 11.6881 23.849C11.8831 23.7065 12.0781 23.564 12.2806 23.4215C12.3856 23.3465 12.4981 23.264 12.6106 23.1815C12.7006 23.114 12.7981 23.0465 12.8881 22.979C12.9931 22.904 13.0981 22.8365 13.1956 22.7615L13.2031 22.769C14.1331 22.124 15.1456 21.464 16.2181 20.804C16.8181 20.444 17.4481 20.069 18.0931 19.694C18.7381 19.319 19.3681 18.974 19.9831 18.6365C21.0931 18.0365 22.1731 17.4965 23.2006 16.994C22.8181 16.775 22.4356 16.5665 22.0531 16.3565ZM16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C15.4306 29.624 14.4706 30.0515 13.5556 30.419C13.5516 30.4231 13.5463 30.4257 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C13.9306 33.509 13.9306 33.5015 13.9456 33.5015C14.8681 33.1415 15.8131 32.7365 16.7806 32.2865C16.7356 31.889 16.6756 31.475 16.6306 31.049ZM39.0781 11.975H39.0706C37.9606 10.04 34.9981 9.72502 30.2881 11.03C29.5081 11.2475 28.6981 11.5025 27.8506 11.8025V11.8175C28.0006 12.7925 28.1356 13.805 28.2481 14.855C32.8531 13.1825 35.8756 12.8975 36.4756 13.475C36.7006 14.39 34.4431 17.405 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006C27.0031 23.06 26.8981 23.1275 26.7931 23.2025C25.8631 23.8475 24.8506 24.5 23.7706 25.175C23.1706 25.5425 22.5481 25.91 21.9031 26.285C21.2581 26.66 20.6206 27.005 20.0056 27.3425C18.8881 27.9425 17.8156 28.4975 16.7881 28.985C17.1631 29.2025 17.5381 29.4125 17.9131 29.615C18.0781 29.7125 18.2431 29.8025 18.4081 29.885C18.4883 29.9342 18.5709 29.9793 18.6556 30.02C19.0381 30.23 19.4206 30.4325 19.7956 30.6275C19.8631 30.665 19.9306 30.695 19.9981 30.725L20.0056 30.7325C21.0631 30.1925 22.1281 29.6 23.2006 28.9925L23.2156 28.985L23.2231 28.9775L23.5831 28.7675V28.76L23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1856 27.1925 26.4031 27.0575 26.6131 26.915L26.6956 26.855H26.7031C26.7707 26.8195 26.8359 26.7794 26.8981 26.735C27.3331 26.4575 27.7531 26.1725 28.1731 25.8875C28.3006 25.805 28.4281 25.715 28.5556 25.625C28.8031 25.46 29.0431 25.295 29.2831 25.1225C29.3956 25.0475 29.5006 24.965 29.6131 24.89L29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23C33.3003 22.0761 34.4244 21.0897 35.4931 20.045C36.6912 18.9223 37.7357 17.6463 38.5996 16.25C39.0383 15.5378 39.329 14.7445 39.4546 13.9175C39.5395 13.2464 39.4076 12.5658 39.0781 11.975Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M26.7931 22.784V22.775C26.7931 22.34 26.7856 21.9125 26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13V19.115C26.6956 19.04 26.6956 18.965 26.6881 18.89C26.6868 18.8198 26.6818 18.7497 26.6731 18.68C26.6656 18.545 26.6581 18.41 26.6581 18.275C26.6281 17.795 26.5981 17.33 26.5606 16.865C26.5531 16.775 26.5456 16.685 26.5381 16.6025C26.5156 16.3475 26.4931 16.1075 26.4706 15.86L26.4481 15.6125C26.442 15.5983 26.4394 15.5829 26.4406 15.5675L26.4481 15.56C26.4406 15.5075 26.4331 15.4625 26.4256 15.4025C26.4243 15.3497 26.4193 15.2971 26.4106 15.245C26.4031 15.14 26.3956 15.035 26.3806 14.9375C26.3799 14.9094 26.3749 14.8816 26.3656 14.855C26.3665 14.8273 26.364 14.7996 26.3581 14.7725C26.2831 13.985 26.1781 13.2125 26.0731 12.47C25.8559 10.9959 25.5631 9.534 25.1956 8.09002C23.9731 3.35752 22.2256 0.95752 19.9981 0.95752C17.7706 0.95752 16.0156 3.36502 14.7931 8.09752C14.5906 8.88502 14.4106 9.71752 14.2381 10.6025C15.1681 10.9625 16.1131 11.3525 17.0806 11.78C17.4032 9.38634 18.0991 7.05805 19.1431 4.88002C19.4581 4.34002 19.7506 4.03252 19.9981 3.96502C20.9056 4.22002 22.3831 7.68502 23.2081 13.685C23.2606 14.0825 23.3131 14.5025 23.3581 14.93L23.3656 14.9375C23.388 15.0791 23.403 15.2218 23.4106 15.365C23.4406 15.605 23.4631 15.845 23.4856 16.0925C23.4931 16.2125 23.5156 16.3325 23.5156 16.46C23.5156 16.5875 23.5381 16.715 23.5456 16.835C23.5531 16.955 23.5681 17.0825 23.5831 17.21V17.2175C23.6731 18.3575 23.7406 19.5575 23.7706 20.825C23.7856 21.53 23.8006 22.25 23.8006 22.9925C23.8006 23.735 23.7931 24.4625 23.7706 25.175C23.7331 26.435 23.6806 27.6275 23.5831 28.76V28.7675C23.6506 28.73 23.7181 28.685 23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1481 27.215 26.3356 27.1025 26.5081 26.99C26.5444 26.9668 26.5794 26.9418 26.6131 26.915L26.6956 26.855H26.7031C26.7631 25.67 26.7931 24.455 26.7931 23.2175L26.7931 23.2025C26.7995 23.1302 26.802 23.0576 26.8006 22.985V22.7975L26.7931 22.784ZM25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144L23.5531 29.1515C23.4631 30.269 23.3431 31.3115 23.2156 32.2865C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494L26.0731 33.4865C26.2231 32.504 26.3506 31.4765 26.4481 30.404C26.0746 30.2615 25.6996 30.104 25.3081 29.9315ZM25.7506 35.384C24.8281 35.024 23.8831 34.634 22.9231 34.2065C22.0606 39.0665 20.7931 41.819 20.0131 42.0215C19.1056 41.804 17.6056 38.339 16.7806 32.2865C16.7356 31.889 16.6756 31.4765 16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C16.4281 29.024 16.4206 28.8965 16.4056 28.769C16.3156 27.629 16.2556 26.429 16.2181 25.1615C16.2031 24.4565 16.1956 23.7365 16.1881 22.9865C16.1806 22.2365 16.2031 21.5165 16.2181 20.804C16.2556 19.5515 16.3156 18.359 16.4131 17.2265V17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856L13.2931 19.1315C13.2331 20.3165 13.1956 21.524 13.1956 22.7615L13.2031 22.769C13.2011 22.769 13.1992 22.7698 13.1978 22.7712C13.1964 22.7726 13.1956 22.7745 13.1956 22.7765C13.1919 22.8465 13.1919 22.9166 13.1956 22.9865V23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864C13.3381 28.0865 13.4281 29.2715 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C14.1329 34.982 14.4209 36.442 14.7931 37.8815C16.0081 42.6215 17.7706 45.0215 19.9906 45.0215H19.9996C21.3346 45.0215 22.4821 44.1665 23.4646 42.4715C24.2378 41.0254 24.8202 39.485 25.1971 37.889C25.3996 37.094 25.5946 36.2615 25.7596 35.384H25.7506ZM15.3406 13.064L14.6206 12.7715C14.3881 12.674 14.1556 12.5765 13.9231 12.4865L13.9156 12.494C13.7731 13.4765 13.6531 14.504 13.5481 15.569C13.9156 15.7265 14.2906 15.884 14.6881 16.0565H14.6956C15.2581 16.2965 15.8356 16.5665 16.4356 16.8515V16.829C16.5331 15.7115 16.6456 14.6765 16.7806 13.7015C16.2931 13.475 15.8206 13.274 15.3406 13.064Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M35.4331 25.904C34.8706 25.3415 34.2631 24.7865 33.6031 24.209H33.5956C32.8231 24.8315 32.0206 25.4465 31.1731 26.069L31.1656 26.0765C31.1581 26.0765 31.1581 26.084 31.1506 26.0915C34.8856 29.219 36.6181 31.6715 36.4006 32.444C35.7631 33.119 32.0506 32.6915 26.4481 30.404C26.0731 30.2615 25.6981 30.104 25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144C23.4406 29.084 23.3356 29.0315 23.2231 28.979L23.2156 28.9865C22.1881 28.4915 21.1231 27.944 20.0056 27.344C19.3756 27.0065 18.7456 26.654 18.0931 26.279C17.4406 25.904 16.8181 25.529 16.2181 25.1615C15.1456 24.494 14.1406 23.8415 13.2031 23.204L13.1956 23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864L13.3006 26.8565C14.2981 27.5065 15.3331 28.144 16.4056 28.769L16.7881 28.9865C17.1631 29.204 17.5381 29.414 17.9131 29.6165C18.0781 29.714 18.2431 29.804 18.4081 29.8865C18.4883 29.9357 18.5709 29.9808 18.6556 30.0215C19.0381 30.2315 19.4206 30.434 19.7956 30.629C19.8631 30.6665 19.9306 30.6965 19.9981 30.7265L20.0056 30.734C20.0731 30.7715 20.1406 30.809 20.2081 30.839C20.6656 31.079 21.1231 31.304 21.5806 31.5215C22.1131 31.784 22.6456 32.0315 23.1631 32.2715C23.1791 32.2731 23.1944 32.2782 23.2081 32.2865H23.2156C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494C26.4256 33.6365 26.7856 33.7715 27.1381 33.899C27.4906 34.0265 27.8356 34.1465 28.1806 34.2665C28.2068 34.2695 28.2322 34.2771 28.2556 34.289C28.5931 34.4015 28.9231 34.514 29.2381 34.604C29.5756 34.7165 29.9056 34.814 30.2356 34.904C30.5281 34.9865 30.8131 35.054 31.0906 35.1215C31.3681 35.189 31.6531 35.2565 31.9156 35.309C32.2081 35.369 32.4931 35.429 32.7706 35.474C33.3256 35.564 33.8506 35.6315 34.3306 35.6615C35.2141 35.7338 36.1035 35.6603 36.9631 35.444C37.2573 35.3636 37.5416 35.2504 37.8106 35.1065C38.301 34.8394 38.7084 34.4424 38.9881 33.959C40.1056 32.0315 38.9056 29.324 35.4331 25.904ZM10.3531 21.125H10.3456V21.1175L10.3381 21.11C9.46812 21.7325 8.63562 22.355 7.86312 22.985L7.88561 23C8.65811 23.615 9.46812 24.23 10.3306 24.8525C10.6606 24.605 10.9831 24.35 11.3356 24.1025C11.4481 24.0125 11.5681 23.93 11.6881 23.8475C11.8831 23.705 12.0781 23.5625 12.2806 23.42C12.3781 23.3525 12.4756 23.2775 12.5806 23.21C12.6856 23.1425 12.7756 23.0675 12.8806 22.9925C12.8826 22.9925 12.8845 22.9917 12.8859 22.9903C12.8873 22.9889 12.8881 22.987 12.8881 22.985V22.9775C11.9746 22.3415 11.1331 21.734 10.3531 21.125ZM26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13C25.6981 18.4775 24.6556 17.8475 23.5906 17.2175H23.5831V17.21L23.2006 16.9925C22.8181 16.775 22.4356 16.565 22.0531 16.355C21.8356 16.2275 21.6181 16.1075 21.3931 15.995C20.9731 15.7625 20.5531 15.5375 20.1256 15.3275C20.0814 15.2967 20.0335 15.2715 19.9831 15.2525C19.9831 15.2375 19.9831 15.2375 19.9756 15.245C19.4506 14.9675 18.9331 14.7125 18.4156 14.465C17.8681 14.195 17.3281 13.94 16.7881 13.7H16.7806C16.2931 13.475 15.8206 13.2725 15.3406 13.0625L14.6206 12.77C14.3881 12.6725 14.1556 12.575 13.9231 12.485C13.1956 12.2 12.4831 11.9375 11.7856 11.7125C11.0881 11.4725 10.4056 11.2625 9.75311 11.075C9.46811 11 9.17562 10.925 8.90562 10.865C8.62062 10.7975 8.34311 10.73 8.07311 10.67C7.60812 10.5725 7.16562 10.4975 6.73812 10.4375C6.34812 10.385 5.96562 10.3475 5.61312 10.325C5.31312 10.3025 5.02062 10.3025 4.75062 10.3025C4.48981 10.3046 4.22935 10.3221 3.97062 10.355L3.96312 10.3475C3.63076 10.3889 3.30223 10.4566 2.98062 10.55C2.86812 10.5875 2.75562 10.625 2.65062 10.6625C2.47191 10.7314 2.29888 10.8141 2.13312 10.91C1.89763 11.04 1.68278 11.2043 1.49562 11.3975C1.3031 11.5844 1.1366 11.7963 1.00062 12.0275C-0.116884 13.955 1.08312 16.6625 4.55562 20.0825C5.13312 20.6375 5.74062 21.2075 6.40812 21.77C7.18062 21.1475 7.98312 20.5325 8.83062 19.91C8.83812 19.91 8.83812 19.9025 8.84562 19.9025C5.13312 16.7825 3.39312 14.33 3.59562 13.5275C4.27062 12.875 7.97562 13.3025 13.5481 15.5675C13.9156 15.725 14.2906 15.8825 14.6881 16.055H14.6956C15.2581 16.295 15.8356 16.565 16.4356 16.85C16.5481 16.895 16.6531 16.9475 16.7656 16.9925C16.7697 16.9966 16.7749 16.9992 16.7806 17C17.8081 17.495 18.8756 18.04 19.9831 18.635C20.6131 18.9725 21.2431 19.3325 21.8881 19.7C22.5331 20.0675 23.1631 20.45 23.7706 20.825C24.8506 21.4925 25.8581 22.145 26.7931 22.7825L26.7931 22.775C26.7931 22.3415 26.7856 21.914 26.7781 21.4865L26.7781 21.485ZM32.1106 22.985C31.3381 22.37 30.5131 21.7475 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006L27.1081 23C28.0156 23.6375 28.8631 24.26 29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23L32.1106 22.985Z",
					fill: "#C5EBF5"
				}))
		},
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				A2: function() {
					return d
				},
				He: function() {
					return s
				},
				N$: function() {
					return g
				},
				Qq: function() {
					return c
				},
				ST: function() {
					return m
				},
				wM: function() {
					return o
				}
			});
			var e = n("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				c = "login-apple-jwt",
				m = "cf-test",
				s = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				g = p => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: p ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: p ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: p ? e.rD : e.PJ
				}, {
					title: "apple.sign_in_with_apple.impact.title",
					description: "apple.sign_in_with_apple.impact.description",
					icon: e.i2
				}],
				d = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				_: function() {
					return c
				},
				c: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);
			let c = function(s) {
				return s.TEMPLATE_SELECTED = "template selected", s.TEMPLATE_PRODUCT_SELECTED = "template product selected", s.TEMPLATE_SAVE_DRAFT = "template save draft", s.TEMPLATE_CANCEL = "template cancel", s.TEMPLATE_DEPLOY = "template deploy", s
			}({});
			const m = (s, g) => o().sendEvent(s, {
				template_name: g
			})
		},
		"../react/pages/pages/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				A: function() {
					return y
				},
				C1: function() {
					return _
				},
				Dp: function() {
					return Y
				},
				HD: function() {
					return T
				},
				IK: function() {
					return s
				},
				L7: function() {
					return c
				},
				Li: function() {
					return f
				},
				Ni: function() {
					return q
				},
				OG: function() {
					return Q
				},
				QF: function() {
					return $
				},
				QV: function() {
					return C
				},
				Sx: function() {
					return R
				},
				Ub: function() {
					return B
				},
				X3: function() {
					return r
				},
				aP: function() {
					return d
				},
				eO: function() {
					return a
				},
				fH: function() {
					return i
				},
				fQ: function() {
					return S
				},
				fR: function() {
					return e
				},
				hE: function() {
					return K
				},
				iS: function() {
					return P
				},
				ku: function() {
					return X
				},
				nY: function() {
					return D
				},
				w3: function() {
					return m
				},
				wJ: function() {
					return p
				},
				wp: function() {
					return l
				},
				yu: function() {
					return t
				},
				zG: function() {
					return ee
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-pages",
				c = {
					dns: "https://cloudflare.com/dns",
					access: "https://www.cloudflare.com/teams-access/",
					access_dashboard: "https://one.dash.cloudflare.com",
					community: "https://community.cloudflare.com/tag/cloudflarepages",
					documentation: {
						access: "https://developers.cloudflare.com/pages/configuration/preview-deployments/#customize-preview-deployments-access",
						buildConfig: "https://developers.cloudflare.com/pages/configuration/build-configuration/",
						buildCache: "https://developers.cloudflare.com/pages/configuration/build-caching/#build-caching-beta",
						configuration: "https://developers.cloudflare.com/pages/configuration/",
						gettingStarted: "https://developers.cloudflare.com/pages/getting-started",
						configuringBuilds: "https://developers.cloudflare.com/pages/platform/build-configuration",
						supportedFrameworks: "https://developers.cloudflare.com/pages/platform/build-configuration#framework-presets",
						supportedTools: "https://developers.cloudflare.com/pages/configuration/language-support-and-tools",
						supportedLanguages: "https://developers.cloudflare.com/pages/configuration/language-support-and-tools/#supported-languages-and-tools",
						deployingBranches: "https://developers.cloudflare.com/pages/platform/preview-deployments",
						buildPaths: "https://developers.cloudflare.com/pages/configuration/build-watch-paths#build-watch-paths",
						root: "https://developers.cloudflare.com/pages/",
						tutorials: "https://developers.cloudflare.com/pages/how-to",
						customDomains: "https://developers.cloudflare.com/pages/platform/custom-domains/",
						contactSupport: "https://developers.cloudflare.com/support/contacting-cloudflare-support/",
						deployHooks: "https://developers.cloudflare.com/pages/platform/deploy-hooks",
						functions: "https://developers.cloudflare.com/pages/platform/functions",
						functionsRoutes: "https://developers.cloudflare.com/pages/platform/functions/routing/",
						invocationRoutes: "https://developers.cloudflare.com/pages/platform/functions/routing/#function-invocation-routes",
						functionsBindings: "https://developers.cloudflare.com/pages/platform/functions/bindings/",
						functionsAIBindings: "https://developers.cloudflare.com/pages/platform/functions/bindings/#ai",
						functionsKVNamespace: "https://developers.cloudflare.com/pages/platform/functions/bindings/#kv-namespaces",
						functionsDurableObjects: "https://developers.cloudflare.com/pages/platform/functions/bindings/#durable-object-namespaces",
						functionsR2: "https://developers.cloudflare.com/pages/platform/functions/bindings/#r2-buckets",
						functionsVectorize: "https://developers.cloudflare.com/pages/platform/functions/bindings/#vectorize-indexes",
						functionsD1: "https://developers.cloudflare.com/pages/platform/functions/bindings/#d1-databases",
						functionsServiceBindings: "https://developers.cloudflare.com/pages/platform/functions/bindings/#service-bindings",
						functionsQueueProducers: "https://developers.cloudflare.com/pages/platform/functions/bindings/#queue-producers",
						functionsAnalyticsEngine: "https://developers.cloudflare.com/pages/platform/functions/bindings/#analytics-engine",
						functionsLimits: "https://developers.cloudflare.com/workers/platform/limits/#worker-limits",
						functionsGABilling: "https://developers.cloudflare.com/pages/platform/functions/pricing/",
						headers: "https://developers.cloudflare.com/pages/platform/headers",
						redirects: "https://developers.cloudflare.com/pages/platform/redirects",
						branchConfig: "https://developers.cloudflare.com/pages/platform/branch-build-controls/#branch-deployment-controls",
						buildImageVersion: "https://developers.cloudflare.com/pages/platform/language-support-and-tools/",
						compatibilityDates: "https://developers.cloudflare.com/workers/platform/compatibility-dates/",
						compatibilityFlags: "https://developers.cloudflare.com/workers/platform/compatibility-dates/#compatibility-flags",
						usageModels: "https://developers.cloudflare.com/workers/platform/pricing#usage-models",
						functionsPricing: "https://developers.cloudflare.com/pages/functions/pricing",
						requestLimitFailureMode: "https://developers.cloudflare.com/pages/platform/functions/pricing/#free-plan",
						smartPlacement: "https://developers.cloudflare.com/pages/platform/functions/smart-placement",
						notifications: "https://developers.cloudflare.com/notifications/",
						buildCaching: "https://developers.cloudflare.com/pages/platform/build-caching/",
						userCpuLimits: "https://developers.cloudflare.com/workers/platform/pricing/#standard-usage-model",
						gitIntegration: "https://developers.cloudflare.com/pages/platform/git-integration/#troubleshooting",
						configFile: "https://developers.cloudflare.com/pages/functions/wrangler-configuration/"
					},
					github: {
						appHomepage: `https://github.com/apps/${o}`,
						newInstallation: `https://github.com/apps/${o}/installations/new`
					},
					gitlab: {
						authorize: "https://gitlab.com/oauth/authorize",
						manage: "https://gitlab.com/-/profile/applications"
					},
					webAnalytics: "https://developers.cloudflare.com/analytics/web-analytics/"
				},
				m = "Allow Members - Cloudflare Pages",
				s = 58,
				g = {
					free: {
						concurrentBuilds: 1,
						maxBuilds: 500,
						dailyFunctionsRequests: 1e5
					},
					pro: {
						concurrentBuilds: 5,
						maxBuilds: 5e3,
						dailyFunctionsRequests: 1e5
					},
					business: {
						concurrentBuilds: 20,
						maxBuilds: 2e4,
						dailyFunctionsRequests: 1e5
					}
				},
				d = "production",
				p = 2e3,
				_ = 100,
				t = 350,
				r = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				l = 10,
				i = "_headers",
				f = "_redirects",
				y = "_routes.json",
				S = "_worker.js",
				P = "do-a-barrel-roll",
				T = [i, f, y, S],
				R = 1024 * 1024 * 25,
				D = 1e3,
				C = {
					createPagesProject: "create pages project",
					updatePagesProject: "update pages project",
					deletePagesProject: "delete pages project",
					clickCreateApplication: "click create application",
					createPagesDeployment: "create pages deployment",
					listPagesProjects: "list pages projects",
					paginatePagesProjects: "paginate pages projects",
					searchPagesProjects: "search pages projects",
					setPagesEnvironmentVariables: "set pages environment variables",
					setPagesKVBindings: "set pages kv bindings",
					setPagesDOBindings: "set pages do bindings",
					setPagesAIBindings: "set pages ai bindings",
					setPagesR2Bindings: "set pages r2 bindings",
					setPagesD1Bindings: "set pages d1 bindings",
					setPagesVectorizeBindings: "set pages vectorize bindings",
					setPagesServiceBindings: "set pages service bindings",
					setPagesQueueProducerBindings: "set pages queue producer bindings",
					setPagesAnalyticsEngineBindings: "set pages analytics engine bindings",
					enablePagesAccessPolicy: "enable pages access policy",
					managePagesPolicies: "manage pages policies",
					enablePagesWebAnalytics: "enable pages web analytics",
					disablePagesWebAnalytics: "disable pages web analytics",
					managePagesMembers: "manage pages members",
					beginDeploymentLogStream: "begin deployment log stream",
					setPagesPlacement: "set pages placement",
					setPagesCpuLimit: "set pages cpu limit",
					firstDeployExploreSettings: "click settings first deploy cta",
					firstDeployCustomDomain: "click custom domain first deploy cta",
					firstDeployWebAnalytics: "click web analytics first deploy cta",
					filterWorkersPages: "filter workers and pages",
					sortWorkersPages: "sort workers and pages",
					toggledPagesSmartPlacement: "toggle pages smart placement",
					downloadDemoProject: "download demo project"
				},
				q = 1e5,
				ee = 75e3,
				X = "workers",
				Y = "cloudflare_pages_build_caching",
				K = 2;
			let B = function(Z) {
				return Z[Z.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", Z[Z.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", Z[Z.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", Z[Z.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", Z[Z.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", Z[Z.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", Z
			}({});
			const $ = 1,
				J = 2,
				Q = 2
		},
		"../react/pages/pages/routes.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Hv: function() {
					return c
				},
				_j: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
					rootNoAccount: (0, e.BC)`/`,
					root: (0, e.BC)`/${"accountId"}/pages`,
					plans: (0, e.BC)`/${"accountId"}/workers/plans`,
					newProject: (0, e.BC)`/${"accountId"}/pages/new`,
					newProjectAssetUpload: (0, e.BC)`/${"accountId"}/pages/new/upload`,
					newProjectAssetUploadProjectCreatedNoDeployment: (0, e.BC)`/${"accountId"}/pages/new/upload/${"projectName"}`,
					newProjectStepName: (0, e.BC)`/${"accountId"}/pages/new/project`,
					newProjectWranglerGuide: (0, e.BC)`/${"accountId"}/pages/new/wrangler-guide`,
					newProjectProvider: (0, e.BC)`/${"accountId"}/pages/new/provider/${"provider"}`,
					projectDetails: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}`,
					projectAnalyticsRoot: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/analytics`,
					projectAnalytics: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/analytics/${"deploymentType"}(preview|production)`,
					projectDomains: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/domains`,
					projectIntegrationsRoot: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/integrations`,
					projectIntegrations: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/integrations/${"deploymentType"}(preview|production)`,
					projectIntegrationsSetupFlow: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/integrations/${"deploymentType"}(preview|production)/${"integrationId"}/integrations-setup`,
					projectSettingsRoot: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings`,
					projectSettings: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/${"environment"}(preview|production)`,
					projectBuild: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/build`,
					projectManage: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/manage`,
					projectSettingsBuildDeployment: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/builds-deployments`,
					projectSettingsEnvironmentVariables: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/environment-variables`,
					projectSettingsFunctions: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/functions`,
					deploymentCreate: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/deployments/new`,
					deploymentDetails: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}`,
					deploymentDetailsFiles: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/files`,
					deploymentDetailsFunctions: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/functions`,
					deploymentDetailsRedirects: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/redirects`,
					deploymentDetailsHeaders: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/headers`,
					durableObjectDetails: (0, e.BC)`/${"accountId"}/workers/durable-objects/view/${"namespaceId"}`,
					verifyEmail: (0, e.BC)`/${"accountId"}/pages/verify-email`,
					access: (0, e.BC)`/${"accountId"}?zone=access`,
					members: (0, e.BC)`/${"accountId"}/members`,
					zoneOnboarding: (0, e.BC)`/${"accountId"}/add-site`,
					zoneDNS: (0, e.BC)`/${"accountId"}/${"zoneName"}/dns`,
					signUp: (0, e.BC)`/sign-up/pages`,
					defaultUsageModel: (0, e.BC)`/${"accountId"}/pages/default-usage-model`,
					webAnalyticsEnable: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/manage#web_analytics_section`,
					webAnalyticsDashboard: (0, e.BC)`/${"accountId"}/web-analytics/overview?siteTag~in=${"siteTag"}`
				},
				c = {
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/pages/account-settings`,
					checkMissing: (0, e.BC)`/pages/assets/check-missing`,
					metrics: (0, e.BC)`/accounts/${"accountId"}/pages/metrics`,
					projects: (0, e.BC)`/accounts/${"accountId"}/pages/projects`,
					projectDetails: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}`,
					purgeCache: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/purge_build_cache`,
					projectDomains: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/domains`,
					projectDomain: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/domains/${"domainName"}`,
					projectUploadFile: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/file`,
					deploymentCreateTail: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/tails`,
					deploymentDeleteTail: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/tails/${"tailId"}`,
					deployments: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments`,
					deploymentDetails: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/?force=true`,
					deploymentBuildMetadata: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/build_metadata`,
					deploymentFunctions: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/functions`,
					deploymentCancel: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/cancel`,
					deploymentRetry: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/retry`,
					rollbackDeployment: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/rollback`,
					deploymentLogs: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/history/logs`,
					deploymentLiveLogsJWT: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/live`,
					deploymentLiveLogsWS: (0, e.BC)`wss://${"apiHost"}/logs/ws/get?startIndex=${"startIndex"}&jwt=${"jwt"}`,
					deploymentLiveLogsHTTP: (0, e.BC)`https://${"apiHost"}/logs?jwt=${"jwt"}`,
					getDeploymentConfig: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployment_configs/${"environment"}`,
					setDeploymentConfig: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployment_configs/${"environment"}/envs`,
					gitConnections: (0, e.BC)`/accounts/${"accountId"}/pages/connections`,
					gitConnectionsProvider: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}`,
					gitRepos: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos`,
					gitRepo: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos/${"repo"}`,
					gitBranches: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos/${"repo"}/branches`,
					domainCheck: (0, e.BC)`/accounts/${"accountId"}/pages/domain_check`,
					getSubdomain: (0, e.BC)`/accounts/${"accountId"}/pages/get_subdomain`,
					deployHooks: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deploy_hooks`,
					changeDeployHooks: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deploy_hooks/${"hookId"}`,
					accessApps: (0, e.BC)`/accounts/${"accountId"}/access/apps`,
					accessIdPs: (0, e.BC)`/accounts/${"accountId"}/access/identity_providers`,
					accessOrg: (0, e.BC)`/accounts/${"accountId"}/access/organizations`,
					accessPolicies: (0, e.BC)`/accounts/${"accountId"}/access/apps/${"appId"}/policies`,
					accountMembers: (0, e.BC)`/accounts/${"accountId"}/members?per_page=50&page=${"page"}&direction=desc`,
					bootstrap: (0, e.BC)`/system/bootstrap`,
					zones: (0, e.BC)`/zones`,
					zone: (0, e.BC)`/zones/${"zoneId"}`,
					zoneDNSRecords: (0, e.BC)`/zones/${"zoneId"}/dns_records`,
					zoneDNSRecord: (0, e.BC)`/zones/${"zoneId"}/dns_records/${"recordId"}`,
					uploadFiles: (0, e.BC)`/pages/assets/upload`,
					upsertHashes: (0, e.BC)`/pages/assets/upsert-hashes`,
					uploadToken: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/upload-token`,
					webAnalyticsSiteInfo: (0, e.BC)`/accounts/${"accountId"}/rum/site_info`,
					webAnalyticsSiteTag: (0, e.BC)`/accounts/${"accountId"}/rum/site_info/${"siteTag"}`,
					docsRoot: "https://developers.cloudflare.com",
					buildImageVersions: "https://developers.cloudflare.com/pages/platform/language-support-and-tools.json",
					buildPresets: "https://developers.cloudflare.com/pages/platform/build-configuration.json",
					compatibilityDates: "https://developers.cloudflare.com/workers/platform/compatibility-dates.json"
				},
				m = s => `${s.subdomain}.pages.dev`
		},
		"../react/pages/pipelines/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				KO: function() {
					return d
				},
				L9: function() {
					return _
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), l.forEach(function(i) {
						m(t, i, a[i])
					})
				}
				return t
			}

			function m(t, r, a) {
				return r = s(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function s(t) {
				var r = g(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var l = a.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let d = function(t) {
					return t.LIST_PIPELINES = "list pipelines", t.CREATE_PIPELINE = "create pipeline", t.VIEW_PIPELINE = "view pipeline details", t.DELETE_PIPELINE = "delete pipeline", t.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", t.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", t.CLICK_QUICK_LINK = "click pipeline quick link", t
				}({}),
				p = function(t) {
					return t[t.success = 0] = "success", t[t.failure = 1] = "failure", t
				}({});
			const _ = (t, r = {}) => {
				o().sendEvent(t, c({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Hv: function() {
					return c
				},
				Jg: function() {
					return g
				},
				_j: function() {
					return o
				},
				pZ: function() {
					return d
				},
				vF: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
					root: (0, e.BC)`/${"accountId"}/r2`,
					overview: (0, e.BC)`/${"accountId"}/r2/overview`,
					cliQuickStart: (0, e.BC)`/${"accountId"}/r2/cli`,
					createBucket: (0, e.BC)`/${"accountId"}/r2/new`,
					bucketDetails: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}`,
					bucketDetailsSettings: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/settings`,
					createBucketEventNotification: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/notifications/new`,
					bucketDetailsCors: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/cors/${"op"}`,
					bucketMetrics: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/metrics`,
					objectDetails: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/objects/${"objectKey"}/details`,
					apiTokens: (0, e.BC)`/${"accountId"}/r2/api-tokens`,
					createApiToken: (0, e.BC)`/${"accountId"}/r2/api-tokens/create`,
					editApiToken: (0, e.BC)`/${"accountId"}/r2/api-tokens/${"tokenId"}`,
					apiTokenSuccess: (0, e.BC)`/${"accountId"}/r2/api-tokens/success`,
					plans: (0, e.BC)`/${"accountId"}/r2/plans`,
					signUp: (0, e.BC)`/sign-up/r2`,
					verifyEmail: (0, e.BC)`/${"accountId"}/r2/verify-email`,
					profile: (0, e.BC)`/profile/api-tokens`,
					billing: (0, e.BC)`/${"accountId"}/billing/subscriptions`,
					zoneDNS: (0, e.BC)`/${"accountId"}/${"zoneName"}/dns`,
					migrator: (0, e.BC)`/${"accountId"}/r2/slurper`
				},
				c = {
					canUnsubscribe: (0, e.BC)`/accounts/${"accountId"}/r2/canUnsubscribe`,
					defaultRegion: (0, e.BC)`/accounts/${"accountId"}/r2/defaultRegion`,
					buckets: (0, e.BC)`/accounts/${"accountId"}/r2/buckets`,
					bucket: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}`,
					objects: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects`,
					object: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects/${"objectKey"}`,
					bucketUsage: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/usage`,
					bucketAccess: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/policy`,
					bucketCustomDomains: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/custom_domains`,
					bucketCustomDomain: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/custom_domains/${"domainName"}`,
					bucketCors: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/cors`,
					bucketEventConfig: (0, e.BC)`/accounts/${"accountId"}/event_notifications/r2/${"bucketName"}/configuration`,
					bucketEventConfigQueue: (0, e.BC)`/accounts/${"accountId"}/event_notifications/r2/${"bucketName"}/configuration/queues/${"queueId"}`,
					bucketLifecycle: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/lifecycle`,
					bucketMultipartUploads: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/uploads`,
					bucketSippy: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/sippy`,
					apiTokens: (0, e.BC)`/user/tokens`,
					apiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					rollApiToken: (0, e.BC)`/user/tokens/${"tokenId"}/value`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					zones: (0, e.BC)`/zones`
				},
				m = t => {
					const r = "r2.cloudflarestorage.com";
					switch (t) {
						case "default":
							return r;
						case "eu":
							return `eu.${r}`;
						case "fedramp":
							return `fedramp.${r}`
					}
				},
				s = (t, r) => {
					const a = m(r);
					return `https://${t}.${a}`
				},
				g = (t, r, a) => `${s(t,r)}/${a}`,
				d = () => "r2.dev",
				p = t => {
					const r = d();
					return `https://${t}.${r}`
				},
				_ = (t, r) => `${p(t)}/${r}`
		},
		"../react/pages/security-center/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				R: function() {
					return e
				},
				v: function() {
					return o
				}
			});
			let e = function(c) {
				return c.LOAD_SCAN_INFO = "load url scan information", c.INITIATE_URL_SCAN = "initiate url scan", c
			}({});
			const o = {
				MANAGE_INSIGHT: "manage security insight",
				BULK_ARCHIVE: "bulk archive security insights",
				EXPAND_INSIGHT_ROW: "expand security issue row",
				CLICK_RESOLVE_BUTTON: "click resolve security issue button",
				FOLLOW_RESOLVE_URL: "follow security issue resolve url",
				CLICK_SCAN_NOW: "run security scan",
				CLICK_EXPORT_INSIGHTS: "click export insights"
			}
		},
		"../react/pages/spectrum/tracking.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o
			}({})
		},
		"../react/pages/traffic/argo/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o
			}({})
		},
		"../react/pages/traffic/load-balancing/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE = "create waiting room", o.UPDATE = "update waiting room", o.EVENTS = "view waiting rooms events", o.ANALYTICS = "view waiting room analytics", o.GENERATE_PREVIEW = "generate waiting room preview link", o
			}({})
		},
		"../react/pages/turnstile/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				N3: function() {
					return p
				},
				P: function() {
					return t
				},
				Xh: function() {
					return _
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), i.forEach(function(f) {
						m(r, f, l[f])
					})
				}
				return r
			}

			function m(r, a, l) {
				return a = s(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function s(r) {
				var a = g(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const d = "TURNSTILE";
			let p = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const _ = ({
					name: r,
					product: a = d,
					category: l = "user journey",
					page: i,
					additionalData: f = {}
				}) => {
					o().sendEvent(r, c({
						category: l,
						page: i,
						product: a
					}, f || {}))
				},
				t = () => {
					var r;
					return (r = Object.values(p)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				d: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				default: (0, e.BC)`/${"accountId"}/`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`,
				websites: (0, e.BC)`/${"accountId"}/websites`
			}
		},
		"../react/pages/zoneless-workers/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				$2: function() {
					return D
				},
				CI: function() {
					return T
				},
				IS: function() {
					return d
				},
				L7: function() {
					return s
				},
				Oj: function() {
					return a
				},
				QV: function() {
					return l
				},
				X$: function() {
					return S
				},
				X6: function() {
					return _
				},
				fE: function() {
					return p
				},
				im: function() {
					return f
				},
				rL: function() {
					return t
				},
				wW: function() {
					return g
				}
			});

			function e(C) {
				for (var q = 1; q < arguments.length; q++) {
					var ee = arguments[q] != null ? Object(arguments[q]) : {},
						X = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(ee).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(ee, Y).enumerable
					})), X.forEach(function(Y) {
						o(C, Y, ee[Y])
					})
				}
				return C
			}

			function o(C, q, ee) {
				return q = c(q), q in C ? Object.defineProperty(C, q, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[q] = ee, C
			}

			function c(C) {
				var q = m(C, "string");
				return typeof q == "symbol" ? q : String(q)
			}

			function m(C, q) {
				if (typeof C != "object" || C === null) return C;
				var ee = C[Symbol.toPrimitive];
				if (ee !== void 0) {
					var X = ee.call(C, q || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (q === "string" ? String : Number)(C)
			}
			const s = {
					documentation: {
						workersAPI: "https://developers.cloudflare.com/api/operations/worker-script-list-workers",
						root: "https://workers.cloudflare.com/docs",
						configuration: "https://developers.cloudflare.com/workers/configuration",
						compatibilityDates: "https://developers.cloudflare.com/workers/configuration/compatibility-dates/",
						compatibilityFlags: "https://developers.cloudflare.com/workers/configuration/compatibility-dates/#compatibility-flags",
						installWrangler: "https://developers.cloudflare.com/workers/wrangler/install-and-update/",
						wranglerDocs: "https://developers.cloudflare.com/workers/wrangler/",
						wranglerCommands: "https://developers.cloudflare.com/workers/wrangler/commands/",
						starters: "https://developers.cloudflare.com/workers/starters",
						eggheadCourse: "https://egghead.io/courses/introduction-to-cloudflare-workers-5aa3",
						tutorials: "https://developers.cloudflare.com/workers/tutorials",
						examples: "https://developers.cloudflare.com/workers/examples",
						durableObjects: "https://developers.cloudflare.com/workers/learning/using-durable-objects",
						writingWorkers: "https://developers.cloudflare.com/workers/get-started/guide/#5-write-code",
						kv: "https://developers.cloudflare.com/workers/learning/how-kv-works",
						kvBindings: "https://developers.cloudflare.com/workers/runtime-apis/kv#kv-bindings",
						kvNamespaces: "https://developers.cloudflare.com/workers/reference/storage/namespaces/",
						kvMetrics: "https://developers.cloudflare.com/kv/observability/metrics-analytics/",
						envVars: "https://developers.cloudflare.com/workers/reference/apis/environment-variables/",
						api: "https://workers.cloudflare.com/docs/reference/tooling/api",
						scheduledEventListener: "https://developers.cloudflare.com/workers/runtime-apis/add-event-listener#scheduled-listener",
						errors: "https://developers.cloudflare.com/workers/platform/limits",
						cpuLimits: "https://developers.cloudflare.com/workers/platform/limits/#cpu-runtime",
						pagesFunctionsPricing: "https://developers.cloudflare.com/pages/functions/pricing/",
						pricing: "https://developers.cloudflare.com/workers/platform/pricing",
						computeSetting: "https://developers.cloudflare.com/workers/platform/cron-triggers#green-compute",
						usageModels: "https://developers.cloudflare.com/workers/platform/pricing#usage-models",
						usageModelCLIDocs: "https://developers.cloudflare.com/workers/cli-wrangler/configuration#keys",
						wrangler: "https://developers.cloudflare.com/workers/wrangler/",
						pagesDirectUploadCLI: "https://developers.cloudflare.com/pages/get-started/direct-upload/#wrangler-cli",
						bindings: {
							index: "https://developers.cloudflare.com/workers/runtime-apis/bindings",
							ai: "https://developers.cloudflare.com/workers-ai",
							analyticsEngine: "https://developers.cloudflare.com/analytics/analytics-engine",
							browserRendering: "https://developers.cloudflare.com/browser-rendering",
							d1: "https://developers.cloudflare.com/d1",
							dispatchNamespace: "https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/get-started/configuration",
							durableObjects: "https://developers.cloudflare.com/durable-objects",
							hyperdrive: "https://developers.cloudflare.com/hyperdrive",
							kv: "https://developers.cloudflare.com/kv",
							mTLS: "https://developers.cloudflare.com/workers/runtime-apis/bindings/mtls",
							queues: "https://developers.cloudflare.com/queues/configuration/javascript-apis",
							r2: "https://developers.cloudflare.com/r2/api/workers/workers-api-reference",
							rateLimiting: "https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit",
							service: "https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings",
							vectorize: "https://developers.cloudflare.com/vectorize/reference/client-api",
							versionMetadata: "https://developers.cloudflare.com/workers/runtime-apis/bindings/version-metadata"
						},
						modules: "https://developers.cloudflare.com/workers/cli-wrangler/configuration#modules",
						routes: "https://developers.cloudflare.com/workers/platform/routes/#matching-behavior",
						routesAndDomains: "https://developers.cloudflare.com/workers/configuration/routing",
						routesDNS: "https://developers.cloudflare.com/workers/platform/triggers/routes/#subdomains-must-have-a-dns-record",
						customDomains: "https://developers.cloudflare.com/workers/platform/routing/custom-domains",
						fetchEvent: "https://developers.cloudflare.com/workers/runtime-apis/fetch-event",
						scheduledWorkers: "https://developers.cloudflare.com/workers/configuration/cron-triggers",
						emailWorkers: "https://developers.cloudflare.com/email-routing/email-workers/",
						cronSyntax: "https://developers.cloudflare.com/workers/platform/cron-triggers#supported-cron-expressions",
						scheduledEvents: "https://developers.cloudflare.com/workers/runtime-apis/scheduled-event",
						languages: "https://developers.cloudflare.com/workers/platform/languages",
						durableObjectsChatExample: "https://developers.cloudflare.com/workers/learning/using-durable-objects#websockets-in-durable-objects",
						durableObjectsCounterExample: "https://developers.cloudflare.com/workers/learning/using-durable-objects#example---counter",
						services: "https://developers.cloudflare.com/workers/platform/services",
						serviceBindings: "https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/",
						metrics: {
							root: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/",
							requestsTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#requests",
							cpuTimeTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#cpu-time-per-execution",
							durationTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#execution-duration-gb-seconds",
							requestDurationTimeseries: "https://developers.cloudflare.com/workers/learning/metrics-and-analytics/#request-duration",
							dataEgressTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#data-egress",
							invocationStatuses: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#invocation-statuses"
						},
						logpush: {
							generalDocs: "https://developers.cloudflare.com/workers/platform/logpush",
							createJob: "https://developers.cloudflare.com/workers/platform/logpush/#create-a-logpush-job"
						},
						mtlsCertificates: "https://developers.cloudflare.com/workers/runtime-apis/mtls",
						uploadMtlsCertificates: "https://developers.cloudflare.com/workers/wrangler/commands#mtls-certificate",
						smartPlacement: "https://developers.cloudflare.com/workers/platform/smart-placement/",
						smartPlacementStatus: "https://developers.cloudflare.com/workers/configuration/smart-placement/#placement-status",
						smartPlacementHowItWorks: "https://developers.cloudflare.com/workers/configuration/smart-placement/#understand-how-smart-placement-beta-works",
						smartPlacementBackendServices: "https://developers.cloudflare.com/workers/configuration/smart-placement/#unsupported-back-end-services",
						integrations: "https://developers.cloudflare.com/workers/databases/connecting-to-databases/",
						tailWorkers: "https://developers.cloudflare.com/workers/platform/tail-workers",
						dispatchNamespaces: "https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/platform/outbound-workers",
						invalidCORSPolicy: "https://developers.cloudflare.com/r2/buckets/cors/#common-issues",
						createCloudflare: "https://www.npmjs.com/package/create-cloudflare",
						userCpuLimits: "https://developers.cloudflare.com/workers/platform/pricing/#standard-usage-model",
						versions: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments",
						gradualRollouts: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/gradual-deployments",
						rollbacks: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/rollbacks",
						moduleSyntax: "https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/#migrate-from-service-workers-to-es-modules",
						configureQueues: "https://developers.cloudflare.com/queues/configuration/configure-queues/",
						observability: "https://developers.cloudflare.com/workers/observability/",
						workersAssets: "https://developers.cloudflare.com/workers"
					},
					serverlist: "https://blog.cloudflare.com/tag/serverlist/",
					discord: "https://discord.cloudflare.com/",
					community: "https://community.cloudflare.com/tag/workers",
					billing: "https://developers.cloudflare.com/workers/platform/pricing",
					network: "https://www.cloudflare.com/network",
					builtWithWorkers: "https://workers.cloudflare.com/built-with/",
					workersSupplementalTerms: "https://www.cloudflare.com/supplemental-terms/#CFWorkers",
					freeKvBlogPost: "https://blog.cloudflare.com/workers-kv-free-tier/",
					durableObjectsSurvey: "https://docs.google.com/forms/d/e/1FAIpQLSfJeZKlM_InqG7thczqGCaxEOqwsJm1Xdv8Kz0zd4zp3VNvMg/viewform",
					durableObjectsBetaBlogPost: "https://blog.cloudflare.com/durable-objects-open-beta/",
					usageModelSurvey: "https://docs.google.com/forms/d/e/1FAIpQLSeOKaVp9pC-sXvEQsgmKZc1b-BxdDRcIoL0jpOQWCHlAR9SiA/viewform",
					workersUnboundBlogPost: "https://blog.cloudflare.com/workers-unbound-ga/",
					cloudflareSubscriptionTerms: "https://www.cloudflare.com/terms",
					integrationsFeedback: "https://forms.gle/cMkH8G78MpGFP7Yo6",
					workersStandardPricing: "https://blog.cloudflare.com/workers-pricing-scale-to-zero"
				},
				g = 800,
				d = "40rem",
				p = {
					pricing: {
						requests: .15,
						duration: 12.5,
						egress: .045,
						storage: .2,
						read_units: .2,
						write_units: 1,
						delete: 1,
						currency: "USD"
					}
				},
				_ = {
					d1_included_capacity: 5e9,
					d1_included_read_count: 25e9,
					d1_included_write_count: 5e7,
					pricing: {
						storage: .75,
						read_units: .001,
						write_units: 1
					}
				},
				t = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e7,
					ubb_frequency: 1e6,
					ubb_price: .5,
					ubb_price_ent: .6,
					additional_million_requests_price: .15,
					additional_million_requests_price_ent: .18,
					additional_million_standard_requests_price: .3,
					additional_million_standard_cpu_time_price: .02,
					additional_million_gb_duration_price: 12.5,
					additional_million_gb_duration_price_ent: 15,
					additional_egress_gb_transfer_price: .045,
					additional_egress_gb_transfer_price_ent: .054,
					kv_storage_modify_price: 5,
					kv_storage_included_capacity: 1e9,
					kv_storage_read_count: 1e7,
					kv_storage_modify_count: 1e6,
					trace_logs: 1e7,
					additional_million_trace_logs_price: .05,
					trace_logs_frequency: 1e6
				},
				r = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e7,
					ubb_frequency: 1e6,
					ubb_price: .6,
					kv_storage_modify_price: 6,
					kv_storage_included_capacity: 1e9,
					kv_storage_read_count: 1e7,
					kv_storage_modify_count: 1e6
				},
				a = {
					free: {
						rateLimit: 1e3,
						maximumRequests: 1e5,
						maximumRequestsRuntimeCutoff: 12e4,
						limits: {
							Threshold1: .75,
							Threshold2: .9,
							Exceeded: 1
						}
					},
					paid: e({
						ubbRequests: 1e6,
						maximumRequests: 1e7
					}, t),
					ent_ss: e({
						ubbRequests: 1e6,
						maximumRequests: 1e7
					}, r),
					unbound: {
						bundledRequests: 10,
						unboundRequests: 1,
						unboundDuration: 4e5,
						unboundEgress: 5,
						kvMonthlyRead: 10,
						kvMonthlyWrite: 1
					},
					standard: {
						requests: 10,
						cpuTimeMilliseconds: 30
					}
				},
				l = {
					enableWorkers: "enable workers",
					setupSubdomain: "set up subdomain",
					selectPlan: "select workers plan",
					selectTemplate: "select workers template",
					verifyEmail: "verify email",
					clickApplicationName: "click application name",
					clickChangeComputeSetting: "click change compute setting",
					clickChangeSubdomain: "click change subdomain",
					clickConnectToGit: "click connect to git",
					clickCreateProjectSuccessResource: "click create project success resource",
					clickCreateProjectSuccessNextStep: "click create project success next step",
					clickSetupAE: "click setup AE",
					clickUploadAssets: "click upload assets",
					clickWorkerEditCode: "click worker edit code",
					clickWorkersManageNotificationsAlerts: "click workers manage notifications and alerts",
					clickWorkersManageAccountMembers: "click workers manage account members",
					clickWorkersResource: "click workers resource",
					createApplicationClickWorkersDocs: "create application click workers docs",
					createApplicationClickPagesDocs: "create application click pages docs",
					createApplicationCreateWithCLI: "create application click create with CLI",
					createApplicationSelectWorkers: "create application select workers",
					createApplicationSelectPages: "create application select pages",
					createService: "create service",
					createPlaygroundWorker: "create worker from playground",
					createWorkerSelectFilter: "create worker select filter",
					cancelCreatePlaygroundWorker: "cancel create worker from playground",
					deployWorkerScript: "deploy worker script",
					setupCustomDomain: "set up custom domain",
					addWorkersRoute: "add workers route",
					editWorkersRoute: "edit workers route",
					addCronTrigger: "add cron trigger",
					editCronTrigger: "edit cron trigger",
					beginLogStream: "begin log stream",
					editEnvVariables: "edit service environment variables",
					encryptVariable: "encrypt variable",
					editNamespaceBindings: "edit service kv bindings",
					editR2Bindings: "edit service r2 bindings",
					editQueueBindings: "edit service queue bindings",
					editConstellationBindings: "edit service constellation bindings",
					editHyperdriveBindings: "edit service hyperdrive bindings",
					editAiBindings: "edit service ai bindings",
					editVectorizeBindings: "edit service vectorize bindings",
					editServiceBindings: "edit service to service bindings",
					renameService: "rename service",
					deleteService: "delete service",
					sortServices: "sort services",
					searchServices: "search services",
					paginateServices: "paginate services",
					createKVNamespace: "create kv namespace",
					deleteKVNamespace: "delete kv namespace",
					listKVNamespaces: "list kv namespaces",
					searchKVNamespaces: "search kv namespaces",
					paginateKVNamespaces: "paginate kv namespaces",
					addKVKeyValue: "add kv key-value",
					editKVKeyValue: "edit kv key-value",
					deleteKVKeyValue: "delete kv key-value",
					readKVKeyValue: "read kv key-value",
					listKVKeyValues: "list kv key-values",
					searchKVKeyValues: "search kv key-values",
					paginateKVKeyValues: "paginate kv key-values",
					editMtlsCertificateBindings: "edit service mtls certificate bindings",
					quickEditHttpTab: "quick edit http tab",
					quickEditPreviewTab: "quick edit preview tab",
					quickEditScheduleTab: "quick edit schedule tab",
					quickEditWranglerTab: "quick edit wrangler tab",
					rollbackDeployment: "rollback deployment",
					editTailConsumers: "edit service tail consumers",
					editDispatchNamespaceBindings: "edit dispatch namespace bindings",
					clickedDownloadAnalytics: "clicked Workers download analytics",
					clickedPrintAnalytics: "clicked Workers print analytics",
					toggledSmartPlacement: "toggled Workers smart placement",
					clickedDiscordLink: "clicked sidebar Discord link",
					clickedCommunityLink: "clicked sidebar Community Forum link",
					clickDetailTab: "click worker detail tab",
					clickedBundledUsageModel: "Workers:Clicked Bundled Usage Model",
					clickedUnboundUsageModel: "Workers:Clicked Unbound Usage Model",
					clickedGreenComputeSetting: "Workers:Clicked Green Compute Setting",
					clickedGlobalComputeSetting: "Workers:Clicked Global Compute Setting"
				},
				i = "workers.dev",
				f = "YYYY-MM-DD HH:mm:SS ZZ",
				y = "active",
				S = ["bundled", "unbound", "standard"],
				P = null,
				T = {
					bandaWorkersCI: "banda-workers-ui",
					workersAssets: "workers-assets",
					observability: "workers-observability"
				};
			let R = function(C) {
				return C[C.NONE = 0] = "NONE", C[C.MISS = 1] = "MISS", C[C.EXPIRED = 2] = "EXPIRED", C[C.UPDATING = 3] = "UPDATING", C[C.STALE = 4] = "STALE", C[C.HIT = 5] = "HIT", C[C.IGNORED = 6] = "IGNORED", C[C.BYPASS = 7] = "BYPASS", C[C.REVALIDATED = 8] = "REVALIDATED", C[C.DYNAMIC = 9] = "DYNAMIC", C[C.STREAM_HIT = 10] = "STREAM_HIT", C[C.DEFERRED = 11] = "DEFERRED", C
			}({});
			const D = [R.HIT, R.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Hv: function() {
					return d
				},
				L: function() {
					return c
				},
				Q9: function() {
					return m
				},
				_j: function() {
					return s
				},
				ky: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = p => `${p}.workers.dev`,
				c = (p, _, t) => `${t?`${t}.`:""}${p}.${o(_)}`,
				m = (p, _, t) => `https://${c(p,_,t)}`,
				s = {
					workersOverview: (0, e.BC)`/${"accountId"}/workers/overview`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/workers`,
					root: (0, e.BC)`/${"accountId"}/workers`,
					onboarding: (0, e.BC)`/${"accountId"}/workers-and-pages/create`,
					overview: (0, e.BC)`/${"accountId"}/workers/overview`,
					subdomain: (0, e.BC)`/${"accountId"}/workers/subdomain`,
					defaultUsageModel: (0, e.BC)`/${"accountId"}/workers/default-usage-model`,
					computeSetting: (0, e.BC)`/${"accountId"}/workers/compute-setting`,
					cli: (0, e.BC)`/${"accountId"}/workers/cli`,
					kvRoot: (0, e.BC)`/${"accountId"}/workers/kv`,
					kvStore: (0, e.BC)`/${"accountId"}/workers/kv/namespaces`,
					d1Store: (0, e.BC)`/${"accountId"}/workers/d1`,
					plans: (0, e.BC)`/${"accountId"}/workers/plans`,
					purchase: (0, e.BC)`/${"accountId"}/workers/plans/purchase`,
					standardOptIn: (0, e.BC)`/${"accountId"}/workers/standard/opt-in`,
					kvNamespace: (0, e.BC)`/${"accountId"}/workers/kv/namespaces/${"namespaceId"}`,
					d1Database: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}`,
					editServiceScript: (0, e.BC)`/${"accountId"}/workers/services/edit/${"serviceId"}/${"environmentName"}`,
					durableObjectDetails: (0, e.BC)`/${"accountId"}/workers/durable-objects/view/${"namespaceId"}`,
					durableObjectDetailsSettings: (0, e.BC)`/${"accountId"}/workers/durable-objects/view/${"namespaceId"}/settings`,
					manageSubscriptions: (0, e.BC)`/${"accountId"}/billing/subscriptions`,
					manageNotifications: (0, e.BC)`/${"accountId"}/notifications`,
					servicesRoot: (0, e.BC)`/${"accountId"}/workers/services`,
					logsLive: (0, e.BC)`/${"accountId"}/workers/services/live-logs/${"serviceId"}/${"environmentName"}`,
					cronEvents: (0, e.BC)`/${"accountId"}/workers/services/cron-events/${"serviceId"}/${"environmentName"}`,
					createService: (0, e.BC)`/${"accountId"}/workers/services/new`,
					manageService: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					renameService: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/rename`,
					serviceDetailsRoot: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}`,
					serviceDetails: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}`,
					serviceDetailsBuildDetails: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/builds/${"build_uuid"}`,
					serviceDetailsDeployments: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/deployments`,
					serviceDetailsIntegrationsFlow: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/${"integrationId"}/integrations-setup`,
					serviceDetailsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/triggers`,
					serviceDetailsTriggersV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#domains`,
					serviceDetailsIntegrations: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/integrations`,
					serviceDetailsSettings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings`,
					serviceDetailsSettingsGeneral: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/general`,
					serviceDetailsSettingsGeneralV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#general`,
					serviceDetailsSettingsBindings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/bindings`,
					serviceDetailsSettingsBindingsV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#bindings`,
					serviceDetailsSettingsBuilds: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/builds`,
					serviceDetailsSettingsBuildsV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#builds`,
					serviceDetailsSettingsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/triggers`,
					serviceDetailsSettingsTriggersV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#trigger-events`,
					serviceDetailsLogs: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs`,
					serviceDetailsLogsLive: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/live`,
					serviceDetailsLogpush: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/logpush`,
					serviceDetailsObservabilityLogs: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/observability/logs`,
					serviceDetailsLogsCron: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/cron`,
					serviceDetailsManage: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					serviceDetailsRename: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/rename`,
					createDeployment: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deploy-version`,
					deploymentHistory: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deployment-history`,
					buildHistory: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/builds`,
					createEnvironment: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/environment/new`,
					apiKey: (0, e.BC)`/profile/api-tokens`,
					signUp: (0, e.BC)`/sign-up/workers`,
					dns: (0, e.BC)`/${"accountId"}/${"zoneName"}/dns`,
					ssl: (0, e.BC)`/${"accountId"}/${"zoneName"}/ssl-tls/edge-certificates`,
					analyticsEngine: (0, e.BC)`/${"accountId"}/workers/analytics-engine`,
					emailRouting: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes`,
					emailRoutingRule: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes/${"ruleId"}`,
					zones: (0, e.BC)`/${"accountId"}`,
					developerPlatform_workers_create: (0, e.BC)`/${"accountId"}/developer-platform/workers/onboarding`,
					developerPlatform_workers_success: (0, e.BC)`/${"accountId"}/developer-platform/workers/success`,
					logpush: (0, e.BC)`/${"accountId"}/logs`,
					members: (0, e.BC)`/${"accountId"}/members`
				},
				g = "https://cron-triggers.cloudflareworkers.com",
				d = {
					accountMtlsCertificates: (0, e.BC)`/accounts/${"accountId"}/mtls_certificates`,
					accountLogpushJobs: (0, e.BC)`/accounts/${"accountId"}/logpush/jobs`,
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/workers/account-settings`,
					builds: {
						build: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}`,
						cancelBuild: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/cancel`,
						latestBuildsByWorkers: (0, e.BC)`/accounts/${"accountId"}/builds/builds/latest`,
						buildLogs: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/logs`,
						buildsByScriptId: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/builds`,
						buildsByVersionIds: (0, e.BC)`/accounts/${"accountId"}/builds/builds`,
						buildTokens: (0, e.BC)`/accounts/${"accountId"}/builds/tokens`,
						repoConnections: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections`,
						repoConnection: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections/${"repo_connection_uuid"}`,
						triggers: (0, e.BC)`/accounts/${"accountId"}/builds/triggers`,
						trigger: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}`,
						triggerEnvironmentVariables: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/environment_variables`,
						triggerEnvironmentVariable: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/environment_variables/${"environment_variable_key"}`,
						workerTriggers: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/triggers`
					},
					certificates: (0, e.BC)`/zones/${"zoneId"}/ssl/certificate_packs/${"certId"}`,
					createApiToken: (0, e.BC)`/user/tokens`,
					createTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails`,
					deleteApiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					deleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails/${"tailId"}`,
					deployments: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/deployments`,
					describeCron: `${g}/describe`,
					dnsRecords: (0, e.BC)`/zones/${"zoneId"}/dns_records`,
					dnsRoute: (0, e.BC)`/accounts/${"accountId"}/workers/domains/records/${"recordId"}`,
					dnsRouteChangeset: (0, e.BC)`/accounts/${"accountId"}/workers/domains/changeset`,
					dnsRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/domains/records`,
					durableObjectNamespace: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces/${"namespaceId"}`,
					durableObjectNamespaces: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces`,
					durableObjectsInNamespace: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces/${"namespaceId"}/objects`,
					edgePreview: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/edge-preview`,
					edgePreviewInit: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain/edge-preview`,
					edgePreviewZoneInit: (0, e.BC)`/zones/${"zone"}/workers/edge-preview`,
					enableDurableObjects: (0, e.BC)`/accounts/${"accountId"}/flags/products/edgeworker/changes`,
					featureFlagSettings: (0, e.BC)`/accounts/${"accountId"}/workers/settings`,
					integrations: {
						getIntegrations: (0, e.BC)`/accounts/${"accountId"}/integrations`,
						getManifest: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}`,
						invokeGetDataAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/get-data/${"action"}`,
						invokeGetOptionsAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/get-options/${"action"}`,
						invokeSubmitFormAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/submit-form/${"action"}`,
						invokeSubmitTokenAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/submit-token/${"action"}`,
						invokeUninstallAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/uninstall/${"action"}`,
						invokeRefAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/ref/${"action"}`,
						integrationsPreviewWorker: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/preview/${"action"}`,
						integrationsDeployWorker: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/deploy/${"action"}`,
						oauthAuthorize: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/oauth/${"oauthProviderId"}/authorize`,
						oauthCallback: (0, e.BC)`/oauth/callback`,
						resourceStates: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/resource-states`,
						resourceState: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/resource-states/${"resourceName"}`,
						asset: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/assets`
					},
					kvNamespace: (0, e.BC)`/accounts/${"accountId"}/storage/kv/namespaces/${"namespaceId"}`,
					kvNamespaces: (0, e.BC)`/accounts/${"accountId"}/storage/kv/namespaces`,
					kvRequestMetrics: (0, e.BC)`/accounts/${"accountId"}/storage/analytics`,
					kvStorageMetrics: (0, e.BC)`/accounts/${"accountId"}/storage/analytics/stored`,
					newVersions: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/versions`,
					nextCron: `${g}/next`,
					outboundDispatchers: (0, e.BC)`/accounts/${"accountId"}/workers/dispatch_outbounds/by-outbound/${"serviceId"}/environment/${"environmentName"}`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					promoteDeployment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"sourceEnv"}/promote/${"targetEnv"}`,
					queues: (0, e.BC)`/accounts/${"accountId"}/workers/queues`,
					service: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}`,
					serviceBindings: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/bindings`,
					serviceBindingsReferences: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/references`,
					serviceCopyEnvironment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/copy/${"toEnvironmentName"}`,
					services: (0, e.BC)`/accounts/${"accountId"}/workers/services`,
					serviceSettings: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/settings`,
					scriptsWithSubdomain: (0, e.BC)`/accounts/${"accountId"}/workers/scripts?include_subdomain_availability=true`,
					scriptsByHandler: (0, e.BC)`/accounts/${"accountId"}/workers/scripts?handlers=${"handler"}`,
					scriptSettingsV2: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"serviceId"}/script-settings`,
					serviceCreateTail: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/tails`,
					serviceDeleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/tails/${"tailId"}`,
					serviceEmailTriggers: (0, e.BC)`/accounts/${"accountId"}/email/routing/rules`,
					serviceEnvironment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}`,
					servicePreview: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/preview`,
					serviceRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/routes`,
					serviceSchedules: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/schedules`,
					serviceScript: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/content`,
					serviceScriptRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/routes/${"routeId"}`,
					serviceScriptV2: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/content/v2?omit=sourcemaps`,
					serviceSubdomain: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/subdomain`,
					serviceUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/usage-model`,
					spectrum: (0, e.BC)`/zones/${"zoneId"}/spectrum/apps/dns`,
					standard: (0, e.BC)`/accounts/${"accountId"}/workers/standard`,
					subdomain: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain`,
					subdomainCertStatus: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain/ssl`,
					subdomainDeployed: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/subdomain`,
					tailsByConsumer: (0, e.BC)`/accounts/${"accountId"}/workers/tails/by-consumer/${"serviceId"}/environment/${"environment"}`,
					validateCron: `${g}/validate`,
					versions: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}`,
					version: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}/detail/${"versionTag"}`,
					workersObservability: {
						ruok: (0, e.BC)`/accounts/${"accountId"}/workers/observability/ruok`,
						queryRun: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/query-run`,
						keys: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/keys`,
						values: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/values`
					},
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				MN: function() {
					return c
				},
				Yg: function() {
					return s
				},
				i$: function() {
					return m
				},
				l3: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const c = async ([d, p]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: d,
					variables: p
				})
			})).body, m = async (...d) => (await e.get(...d)).body, s = d => async (p, _) => {
				const t = await fetch(p, _).then(r => r.json());
				return d.assertDecode(t)
			}, g = async (...d) => (await m(...d)).result;
			E.ZP = {
				fetcher: d => Array.isArray(d) ? g(...d) : g(d)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(W, E) {
				E()
			})(this, function() {
				"use strict";

				function W() {
					var n = !0,
						e = !1,
						o = null,
						c = {
							text: !0,
							search: !0,
							url: !0,
							tel: !0,
							email: !0,
							password: !0,
							number: !0,
							date: !0,
							month: !0,
							week: !0,
							time: !0,
							datetime: !0,
							"datetime-local": !0
						};

					function m(y) {
						return !!(y && y !== document && y.nodeName !== "HTML" && y.nodeName !== "BODY" && "classList" in y && "contains" in y.classList)
					}

					function s(y) {
						var S = y.type,
							P = y.tagName;
						return !!(P == "INPUT" && c[S] && !y.readOnly || P == "TEXTAREA" && !y.readOnly || y.isContentEditable)
					}

					function g(y) {
						y.getAttribute("is-focus-visible") !== "" && y.setAttribute("is-focus-visible", "")
					}

					function d(y) {
						y.getAttribute("is-focus-visible") === "" && y.removeAttribute("is-focus-visible")
					}

					function p(y) {
						m(document.activeElement) && g(document.activeElement), n = !0
					}

					function _(y) {
						n = !1
					}

					function t(y) {
						!m(y.target) || (n || s(y.target)) && g(y.target)
					}

					function r(y) {
						!m(y.target) || y.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), d(y.target))
					}

					function a(y) {
						document.visibilityState == "hidden" && (e && (n = !0), l())
					}

					function l() {
						document.addEventListener("mousemove", f), document.addEventListener("mousedown", f), document.addEventListener("mouseup", f), document.addEventListener("pointermove", f), document.addEventListener("pointerdown", f), document.addEventListener("pointerup", f), document.addEventListener("touchmove", f), document.addEventListener("touchstart", f), document.addEventListener("touchend", f)
					}

					function i() {
						document.removeEventListener("mousemove", f), document.removeEventListener("mousedown", f), document.removeEventListener("mouseup", f), document.removeEventListener("pointermove", f), document.removeEventListener("pointerdown", f), document.removeEventListener("pointerup", f), document.removeEventListener("touchmove", f), document.removeEventListener("touchstart", f), document.removeEventListener("touchend", f)
					}

					function f(y) {
						y.target.nodeName.toLowerCase() !== "html" && (n = !1, i())
					}
					document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", _, !0), document.addEventListener("pointerdown", _, !0), document.addEventListener("touchstart", _, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", a, !0), l(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function E(n) {
					var e;

					function o() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && E(W)
			})
		},
		"../react/utils/bootstrap.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				$8: function() {
					return o
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return m
				},
				gm: function() {
					return c
				}
			});
			const e = () => {
					var s, g, d;
					return (s = window) === null || s === void 0 || (g = s.bootstrap) === null || g === void 0 || (d = g.data) === null || d === void 0 ? void 0 : d.security_token
				},
				o = () => {
					var s, g, d;
					return !!((s = n.g.bootstrap) === null || s === void 0 || (g = s.data) === null || g === void 0 || (d = g.user) === null || d === void 0 ? void 0 : d.id)
				},
				c = () => {
					var s, g;
					return !!((s = n.g.bootstrap) === null || s === void 0 || (g = s.data) === null || g === void 0 ? void 0 : g.is_kendo)
				},
				m = () => {
					var s, g, d, p;
					return (s = window) === null || s === void 0 || (g = s.bootstrap) === null || g === void 0 || (d = g.data) === null || d === void 0 || (p = d.user) === null || p === void 0 ? void 0 : p.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				O5: function() {
					return m
				},
				Xm: function() {
					return c
				},
				kT: function() {
					return d
				},
				wV: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var t;
					return ((t = window) === null || t === void 0 ? void 0 : t.OnetrustActiveGroups) || ""
				},
				c = () => (o() || "").indexOf("C0002") !== -1,
				m = () => (o() || "").indexOf("C0003") !== -1,
				s = () => (o() || "").indexOf("C0004") !== -1,
				g = () => (o() || "").indexOf("C0005") !== -1,
				d = t => {
					const r = ".cloudflare.com";
					document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				p = () => {
					var t;
					const r = (t = window.OneTrust) === null || t === void 0 ? void 0 : t.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				_ = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				AI: function() {
					return S
				},
				S8: function() {
					return y
				},
				ZW: function() {
					return g
				},
				ay: function() {
					return P
				},
				fh: function() {
					return T
				},
				ly: function() {
					return p
				},
				th: function() {
					return s
				},
				ti: function() {
					return _
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				c = n("../../../common/intl/intl-types/src/index.ts"),
				m = n("../../../common/util/types/src/utils/index.ts");
			const s = "cf-sync-locale-with-cps",
				g = c.Q.en_US,
				d = "en_US",
				p = "cf-locale",
				_ = q => (0, m.Yd)(c.Q).find(ee => c.Q[ee] === q) || d,
				t = [],
				r = [],
				a = [c.Q.de_DE, c.Q.en_US, c.Q.es_ES, c.Q.fr_FR, c.Q.it_IT, c.Q.pt_BR, c.Q.ko_KR, c.Q.ja_JP, c.Q.zh_CN, c.Q.zh_TW],
				l = [c.Q.de_DE, c.Q.en_US, c.Q.es_ES, c.Q.es_CL, c.Q.es_EC, c.Q.es_MX, c.Q.es_PE, c.Q.fr_FR, c.Q.it_IT, c.Q.ja_JP, c.Q.ko_KR, c.Q.pt_BR, c.Q.zh_CN, c.Q.zh_TW],
				i = {
					test: [...a, ...r, ...t],
					development: [...a, ...r, ...t],
					staging: [...a, ...r, ...t],
					production: [...a, ...r]
				},
				f = {
					test: [...l, ...r, ...t],
					development: [...l, ...r, ...t],
					staging: [...l, ...r, ...t],
					production: [...l, ...r]
				},
				y = (q, ee) => {
					const X = c.Q[ee];
					return q ? i.production.includes(X) : f.production.includes(X)
				},
				S = q => Object.keys(c.Q).filter(ee => y(q, ee)),
				P = q => {
					const ee = c.Q[q];
					return r.includes(ee)
				},
				T = (q, ee) => q ? R[ee] : D[ee],
				R = {
					de_DE: "Deutsch",
					en_US: "English",
					es_CL: "Espa\xF1ol",
					es_EC: "Espa\xF1ol",
					es_ES: "Espa\xF1ol",
					es_MX: "Espa\xF1ol",
					es_PE: "Espa\xF1ol",
					fr_FR: "Fran\xE7ais",
					it_IT: "Italiano",
					pt_BR: "Portugu\xEAs",
					ko_KR: "\uD55C\uAD6D\uC5B4",
					ja_JP: "\u65E5\u672C\u8A9E",
					zh_CN: "\u7B80\u4F53\u4E2D\u6587",
					zh_TW: "\u7E41\u9AD4\u4E2D\u6587"
				},
				D = {
					de_DE: "Deutsch",
					en_US: "English (US)",
					es_CL: "Espa\xF1ol (Chile)",
					es_EC: "Espa\xF1ol (Ecuador)",
					es_ES: "Espa\xF1ol (Espa\xF1a)",
					es_MX: "Espa\xF1ol (Mexico)",
					es_PE: "Espa\xF1ol (Peru)",
					fr_FR: "Fran\xE7ais (France)",
					ja_JP: "\u65E5\u672C\u8A9E",
					ko_KR: "\uD55C\uAD6D\uC5B4(\uB300\uD55C\uBBFC\uAD6D)",
					it_IT: "Italiano (Italia)",
					pt_BR: "Portugu\xEAs (Brasil)",
					zh_CN: "\u7B80\u4F53\u4E2D\u6587",
					zh_TW: "\u4E2D\u6587 (\u53F0\u7063)"
				},
				C = o().locale();
			o().defineLocale("es-cl", {
				parentLocale: "es",
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD-MM-YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				}
			}), o().defineLocale("es-ec", {
				parentLocale: "es",
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "D/M/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				}
			}), o().defineLocale("es-mx", {
				parentLocale: "es",
				longDateFormat: {
					LT: "h:mm a",
					LTS: "h:mm:ss a",
					L: "D/MM/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY h:mm a",
					LLLL: "dddd, D [de] MMMM [de] YYYY h:mm a"
				}
			}), o().defineLocale("es-pe", {
				parentLocale: "es",
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/M/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY HH:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
				}
			}), o().locale(C)
		},
		"../react/utils/translator.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				QT: function() {
					return l
				},
				Vb: function() {
					return d
				},
				Yi: function() {
					return _
				},
				ZP: function() {
					return g
				},
				_m: function() {
					return t
				},
				cC: function() {
					return r
				},
				oc: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = n("../../../common/intl/intl-core/src/Translator.ts"),
				c = n("../../../common/intl/intl-react/src/index.ts"),
				m = n("../flags.js");
			const s = new o.Z({
				pseudoLoc: (0, m.J8)("is_pseudo_loc")
			});

			function g(i, ...f) {
				return s.t(i, ...f)
			}
			const d = s;

			function p(i, ...f) {
				return markdown(g(i, f))
			}

			function _(i) {
				if (Number(i) !== 0) {
					if (i % 86400 == 0) return g("time.num_days", {
						smart_count: i / 86400
					});
					if (i % 3600 == 0) return g("time.num_hours", {
						smart_count: i / 3600
					});
					if (i % 60 == 0) return g("time.num_minutes", {
						smart_count: i / 60
					})
				}
				return g("time.num_seconds", {
					smart_count: i
				})
			}

			function t(i, f) {
				return i in f ? f[i] : void 0
			}
			const r = c.cC,
				a = c.oc,
				l = c.QT
		},
		"../react/utils/url.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Ct: function() {
					return R
				},
				Fl: function() {
					return G
				},
				KT: function() {
					return M
				},
				NF: function() {
					return f
				},
				Nw: function() {
					return P
				},
				Pd: function() {
					return S
				},
				Uh: function() {
					return j
				},
				Y_: function() {
					return i
				},
				e1: function() {
					return T
				},
				el: function() {
					return B
				},
				hW: function() {
					return J
				},
				pu: function() {
					return ae
				},
				qR: function() {
					return K
				},
				td: function() {
					return y
				},
				uW: function() {
					return Z
				}
			});
			var e = n("../node_modules/query-string/query-string.js"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				m = n("../react/pages/stream/routes.ts"),
				s = n("../react/pages/r2/routes.ts"),
				g = n("../react/pages/zoneless-workers/routes.ts"),
				d = n("../react/pages/pages/routes.ts");

			function p(v) {
				for (var O = 1; O < arguments.length; O++) {
					var b = arguments[O] != null ? Object(arguments[O]) : {},
						F = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols(b).filter(function(x) {
						return Object.getOwnPropertyDescriptor(b, x).enumerable
					})), F.forEach(function(x) {
						_(v, x, b[x])
					})
				}
				return v
			}

			function _(v, O, b) {
				return O = t(O), O in v ? Object.defineProperty(v, O, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[O] = b, v
			}

			function t(v) {
				var O = r(v, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function r(v, O) {
				if (typeof v != "object" || v === null) return v;
				var b = v[Symbol.toPrimitive];
				if (b !== void 0) {
					var F = b.call(v, O || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(v)
			}
			const {
				endsWithSlash: a
			} = c.default, l = (v, O) => {
				const b = v.replace(a, "").split("/");
				return b.slice(0, 2).concat([O]).concat(b.slice(3)).join("/")
			}, i = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), f = v => `/${v.replace(a,"").replace(/^\//,"")}`, y = v => P("add-site", v), S = v => P("billing", v), P = (v, O) => O ? `/${O}${v?`/${v}`:""}` : `/?to=/:account/${v}`, T = () => {
				const v = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return v ? v[1] : null
			}, R = (v, O) => o().stringify(p({}, o().parse(v), O)), D = (v = "") => v.toString().replace(/([\/]{1,})$/, ""), C = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], q = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, ee = /^\/(\w{32,})(\/[^.]*)?/, X = v => C.includes(v), Y = v => !X(v), K = v => !X(v) && ee.test(v), B = v => !X(v) && q.test(v), $ = v => q.exec(v), J = v => {
				if (B(v)) return v.split("/").filter(O => O.length > 0)[1]
			}, Q = v => ee.exec(v), Z = v => {
				if (K(v)) {
					const O = Q(v);
					if (O) return O[1]
				}
			}, se = v => K(v) && v.split("/")[2] === "register-domain", z = v => se(v) ? v.split("/") : null, fe = v => {
				if (B(v)) {
					const [, , , O, b, F, x, ce] = v.split("/");
					return O === "traffic" && b === "load-balancing" && F === "pools" && x === "edit" && ce
				}
			}, j = v => {
				const O = z(v);
				if (O) return O[3]
			}, I = (v, O) => {
				var b, F;
				return ((b = v.pattern.match(/\:/g)) !== null && b !== void 0 ? b : []).length - ((F = O.pattern.match(/\:/g)) !== null && F !== void 0 ? F : []).length
			}, U = [...Object.values(m.C), ...Object.values(s._j), ...Object.values(g._j), ...Object.values(d._j)].sort(I);

			function G(v) {
				if (!Y(v)) return v;
				for (const ce of U)
					if (ce.expression.test(v)) return ce.pattern;
				const O = z(v);
				if (O) {
					const [, , ce, , ...ge] = O;
					return `/:accountId/${ce}/:domainName/${ge.join("/")}`
				}
				if (fe(v)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const F = $(v);
				if (F) {
					const [, , , , ce] = F;
					return `/:accountId/:zoneName${ce||""}`
				}
				const x = Q(v);
				if (x) {
					const [, , ce] = x;
					return `/:accountId${ce||""}`
				}
				return v
			}

			function ae(v) {
				if (!!v) try {
					const b = v.split(".").pop();
					if (b && b.length > 0) return b
				} catch {}
			}

			function M(v, O = document.location.href) {
				try {
					const b = new URL(v),
						F = new URL(O);
					if (b.origin === F.origin) return `${b.pathname}${b.search}${b.hash}`
				} catch {}
			}
		},
		"../react/utils/zaraz.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = n("../utils/zaraz.ts")
		},
		"../utils/getDashVersion.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				p: function() {
					return c
				},
				t: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var m, s;
					return (m = window) === null || m === void 0 || (s = m.build) === null || s === void 0 ? void 0 : s.dashVersion
				},
				c = () => {
					var m;
					return ((0, e.parse)((m = document) === null || m === void 0 ? void 0 : m.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Wi: function() {
					return te
				},
				IM: function() {
					return w
				},
				yV: function() {
					return Xe
				},
				Ug: function() {
					return tt
				},
				v_: function() {
					return ze
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				c = n("../react/utils/bootstrap.ts"),
				m = n("../react/app/providers/storeContainer.js"),
				s = n("../react/common/selectors/languagePreferenceSelector.ts"),
				g = n("../flags.js"),
				d = n("../../../../node_modules/cookie/index.js"),
				p = n("../react/utils/url.ts"),
				_ = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../../../../node_modules/lodash-es/memoize.js"),
				a = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				l = n("../utils/getDashVersion.ts"),
				i = n("../react/common/selectors/accountSelectors.ts");

			function f(V) {
				for (var re = 1; re < arguments.length; re++) {
					var pe = arguments[re] != null ? Object(arguments[re]) : {},
						me = Object.keys(pe);
					typeof Object.getOwnPropertySymbols == "function" && me.push.apply(me, Object.getOwnPropertySymbols(pe).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(pe, _e).enumerable
					})), me.forEach(function(_e) {
						y(V, _e, pe[_e])
					})
				}
				return V
			}

			function y(V, re, pe) {
				return re = S(re), re in V ? Object.defineProperty(V, re, {
					value: pe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[re] = pe, V
			}

			function S(V) {
				var re = P(V, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function P(V, re) {
				if (typeof V != "object" || V === null) return V;
				var pe = V[Symbol.toPrimitive];
				if (pe !== void 0) {
					var me = pe.call(V, re || "default");
					if (typeof me != "object") return me;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(V)
			}
			const T = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				R = (0, r.Z)(V => {
					try {
						return T.assertDecode((0, d.parse)(V))
					} catch (re) {
						return console.error(re), {}
					}
				}),
				D = V => (re, pe, me) => {
					try {
						const Ee = window.location.pathname,
							Le = (0, m.bh)().getState(),
							ct = R(document.cookie),
							Se = f({
								page: (0, p.Fl)(me.page || window.location.pathname),
								dashVersion: (0, l.t)()
							}, ct);
						if (re === "identify") {
							var _e, we;
							const Fe = {
								gates: (0, a.T2)(Le) || {},
								country: (_e = n.g) === null || _e === void 0 || (we = _e.bootstrap) === null || we === void 0 ? void 0 : we.ip_country
							};
							return V(re, pe, f({}, Se, Fe, me))
						} else {
							const Fe = {
								accountId: (0, p.uW)(Ee),
								zoneName: (0, p.hW)(Ee),
								domainName: (0, p.Uh)(Ee)
							};
							if ((0, p.qR)(Ee)) {
								var xe;
								const ke = (0, i.D0)(Le);
								Fe.isEntAccount = ke == null || (xe = ke.meta) === null || xe === void 0 ? void 0 : xe.has_enterprise_zones
							}
							if ((0, p.el)(Ee)) {
								var Ie;
								const ke = (0, _.nA)(Le);
								Fe.zoneId = ke == null ? void 0 : ke.id, Fe.plan = ke == null || (Ie = ke.plan) === null || Ie === void 0 ? void 0 : Ie.legacy_id
							}
							return V(re, pe, f({}, Se, Fe, me))
						}
					} catch (Ee) {
						return console.error(Ee), V(re, pe, me)
					}
				},
				C = V => async (re, pe, me) => {
					try {
						return await V(re, pe, me)
					} catch (_e) {
						if (console.error(_e), !ze()) throw _e;
						return {
							status: "rejected",
							reason: _e
						}
					}
				};
			var q = n("../react/common/middleware/sparrow/errors.ts"),
				ee = n("../react/pages/firewall/bots/tracking.ts"),
				X = n("../react/pages/caching/tracking.tsx"),
				Y = n("../react/pages/turnstile/tracking.ts"),
				K = n("../react/pages/magic/packet-captures/constants.ts"),
				B = n("../react/pages/firewall/page-shield/tracking.ts"),
				$ = n("../react/pages/firewall/rulesets/tracking.tsx"),
				J = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Q = n("../react/pages/spectrum/tracking.tsx"),
				Z = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				se = n("../react/pages/security-center/tracking.ts"),
				z = n("../react/pages/firewall/api-shield/tracking.ts"),
				fe = n("../react/pages/home/configurations/lists/tracking.ts"),
				j = n("../react/pages/traffic/load-balancing/tracking.ts"),
				I = n("../react/pages/home/alerts/tracking.ts"),
				U = n("../react/pages/dns/dns-records/tracking.ts"),
				G = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				ae = n("../react/pages/traffic/argo/tracking.ts"),
				M = n("../react/pages/magic/network-monitoring/constants.ts"),
				v = n("../react/pages/firewall/security-analytics/logs/constants.ts"),
				O = n("../react/pages/magic/overview/tracking.ts"),
				b = n("../react/pages/hyperdrive/tracking.ts"),
				F = n("../react/pages/pipelines/tracking.ts"),
				x = n("../react/pages/home/domain-registration/tracking.ts"),
				ce = n("../react/pages/zoneless-workers/constants.ts"),
				ge = n("../react/pages/pages/constants.ts"),
				Oe = n("../react/pages/page-rules/tracking.ts"),
				Ae = n("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx");
			const N = ((V, re, ...pe) => t.eg.union([t.eg.literal(V), t.eg.literal(re), ...pe.map(me => t.eg.literal(me))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on edit snippet", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "Explore demo button click", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "Request trial button click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", ce.QV.clickedDownloadAnalytics, ce.QV.clickedPrintAnalytics, ce.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", ge.QV.toggledPagesSmartPlacement, ge.QV.downloadDemoProject, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", ee.N3.INITIAL_FETCH_SCORES, ee.N3.FETCH_CONFIGURATION, ee.N3.INITIAL_FETCH_TIME_SERIES, ee.N3.INITIAL_FETCH_ATTRIBUTES, ee.N3.UPDATE_SETTINGS, ee.N3.DELETE_RULE, ee.N3.UPDATE_RULE, ee.N3.FETCH_RULES, ee.N3.CONFIGURE_BOT_MANAGEMENT, ee.N3.WAF_RULES_REDIRECT, Z.F.TOGGLE_TCP_PROTECTION, Z.F.GET_TCP_PROTECTION_PREFIXES, Z.F.CREATE_TCP_PROTECTION_PREFIXES, Z.F.CREATE_TCP_PROTECTION_PREFIX, Z.F.UPDATE_TCP_PROTECTION_PREFIX, Z.F.DELETE_TCP_PROTECTION_PREFIX, Z.F.DELETE_TCP_PROTECTION_PREFIXES, Z.F.GET_TCP_PROTECTION_ALLOWLIST, Z.F.CREATE_TCP_PROTECTION_ALLOWLIST, Z.F.UPDATE_TCP_PROTECTION_ALLOWLIST, Z.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, Z.F.DELETE_TCP_PROTECTION_ALLOWLIST, Z.F.GET_SYN_PROTECTION_RULES, Z.F.GET_SYN_PROTECTION_RULE, Z.F.CREATE_SYN_PROTECTION_RULE, Z.F.UPDATE_SYN_PROTECTION_RULE, Z.F.DELETE_SYN_PROTECTION_RULE, Z.F.GET_TCP_FLOW_PROTECTION_RULES, Z.F.GET_TCP_FLOW_PROTECTION_RULE, Z.F.CREATE_TCP_FLOW_PROTECTION_RULE, Z.F.UPDATE_TCP_FLOW_PROTECTION_RULE, Z.F.DELETE_TCP_FLOW_PROTECTION_RULE, Z.F.GET_SYN_PROTECTION_FILTERS, Z.F.GET_SYN_PROTECTION_FILTER, Z.F.CREATE_SYN_PROTECTION_FILTER, Z.F.UPDATE_SYN_PROTECTION_FILTER, Z.F.DELETE_SYN_PROTECTION_FILTER, Z.F.GET_TCP_FLOW_PROTECTION_FILTERS, Z.F.GET_TCP_FLOW_PROTECTION_FILTER, Z.F.CREATE_TCP_FLOW_PROTECTION_FILTER, Z.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, Z.F.DELETE_TCP_FLOW_PROTECTION_FILTER, Z.F.GET_DNS_PROTECTION_RULES, Z.F.GET_DNS_PROTECTION_RULE, Z.F.CREATE_DNS_PROTECTION_RULE, Z.F.UPDATE_DNS_PROTECTION_RULE, Z.F.DELETE_DNS_PROTECTION_RULE, B.F.MANAGE_PAGE_SHIELD_POLICY, B.F.CONFIGURE_PAGE_SHIELD, B.F.VIEW_DETECTED_CONNECTIONS, B.F.VIEW_DETECTED_SCRIPTS, B.F.VIEW_PAGE_SHIELD_POLICIES, B.F.VIEW_PAGE_SHIELD_SETTINGS, fe.y.CREATE_LIST, fe.y.DELETE_LIST, fe.y.ADD_LIST_ITEM, fe.y.DELETE_LIST_ITEM, b.KO.PURCHASE_WORKERS_PAID, b.KO.LIST_CONFIGS, b.KO.CREATE_HYPERDRIVE_CONFIG, b.KO.VIEW_CONFIG_DETAILS, b.KO.UPDATE_CACHING_SETTINGS, b.KO.DELETE_HYPERDRIVE_CONFIG, b.KO.CLICK_HYPERDRIVE_DOCUMENTATION, b.KO.CLICK_GET_STARTED_GUIDE, b.KO.CLICK_CONNECTIVITY_GUIDES, b.KO.CLICK_QUICK_LINK, Q.N.CNAME, Q.N.IP_ADDRESS, Q.N.LB, Q.N.UPDATE_CNAME, Q.N.UPDATE_IP_ADDRESS, Q.N.UPDATE_LB, Q.N.DISABLE, X.N.TIERED_CACHE, X.N.CACHE_PURGE, X.N.CACHE_ANALYTICS, ...(0, Y.P)(), ...(0, $.x4)(), J.N.CREATE, J.N.EVENTS, J.N.ANALYTICS, J.N.UPDATE, J.N.GENERATE_PREVIEW, se.R.INITIATE_URL_SCAN, se.R.LOAD_SCAN_INFO, se.v.EXPAND_INSIGHT_ROW, se.v.CLICK_RESOLVE_BUTTON, se.v.FOLLOW_RESOLVE_URL, se.v.MANAGE_INSIGHT, se.v.CLICK_SCAN_NOW, se.v.CLICK_EXPORT_INSIGHTS, se.v.BULK_ARCHIVE, z.Fj[z.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, z.Fj[z.kq.ENDPOINT_MANAGEMENT].detailedMetrics, z.Fj[z.kq.ENDPOINT_MANAGEMENT].createEndpoint, z.Fj[z.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, z.Fj[z.kq.ENDPOINT_MANAGEMENT].deployRouting, z.Fj[z.kq.ENDPOINT_MANAGEMENT].deleteRouting, z.Fj[z.kq.API_DISCOVERY].viewDiscoveredEndpoints, z.Fj[z.kq.API_DISCOVERY].saveDiscoveredEndpoint, z.Fj[z.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, z.Fj[z.kq.SCHEMA_VALIDATION].viewSchemasList, z.Fj[z.kq.SCHEMA_VALIDATION].uploadSchema, z.Fj[z.kq.SCHEMA_VALIDATION].viewSchemaAdoption, z.Fj[z.kq.SCHEMA_VALIDATION].downloadSchema, z.Fj[z.kq.SCHEMA_VALIDATION].deleteSchema, z.Fj[z.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, z.Fj[z.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, z.Fj[z.kq.SEQUENCE_ANALYTICS].viewSequencesPage, z.Fj[z.kq.JWT_VALIDATION].viewJWTRules, z.Fj[z.kq.JWT_VALIDATION].addJWTRule, z.Fj[z.kq.JWT_VALIDATION].editJWTRule, z.Fj[z.kq.JWT_VALIDATION].deleteJWTRule, z.Fj[z.kq.JWT_VALIDATION].reprioritizeJWTRule, z.Fj[z.kq.JWT_VALIDATION].viewJWTConfigs, z.Fj[z.kq.JWT_VALIDATION].addJWTConfig, z.Fj[z.kq.JWT_VALIDATION].editJWTConfig, z.Fj[z.kq.JWT_VALIDATION].deleteJWTConfig, z.Fj[z.kq.SETTINGS].redirectToFirewallRulesTemplate, z.Fj[z.kq.SETTINGS].redirectToPages, z.Fj[z.kq.SETTINGS].listSessionIdentifiers, z.Fj[z.kq.SETTINGS].listRequestsContainingSessionIdentifiers, z.Fj[z.kq.SETTINGS].addOrRemoveSessionIdentifiers, z.Fj[z.kq.SEQUENCE_RULES].listSequenceRules, z.Fj[z.kq.SEQUENCE_RULES].deleteSequenceRule, z.Fj[z.kq.SEQUENCE_RULES].reorderSequenceRule, z.Fj[z.kq.SEQUENCE_RULES].createSequenceRule, z.Fj[z.kq.SEQUENCE_RULES].editSequenceRule, j.Z.CREATE_AND_DEPLOY, j.Z.ANALYTICS, I.y.SECONDARY_DNS_NOTIFICATION_CREATE, I.y.SECONDARY_DNS_NOTIFICATION_UPDATE, I.y.SECONDARY_DNS_NOTIFICATION_DELETE, U.U.ZONE_TRANSFER_SUCCESS, U.U.DNS_RECORD_CREATE, U.U.DNS_RECORD_UPDATE, U.U.DNS_RECORD_DELETE, G.Y.PEER_DNS_CREATE, G.Y.PEER_DNS_UPDATE, G.Y.PEER_DNS_DELETE, G.Y.ZONE_TRANSFER_ENABLE, G.Y.ZONE_TRANSFER_DISABLE, ae.V.ARGO_ENABLEMENT, ae.V.ARGO_GEO_ANALYTICS_FETCH, ae.V.ARGO_GLOBAL_ANALYTICS_FETCH, K.X.VIEW_BUCKETS_LIST, K.X.CREATE_BUCKET, K.X.VALIDATE_BUCKET, K.X.DELETE_BUCKET, K.X.VIEW_CAPTURES_LIST, K.X.CREATE_SIMPLE_CAPTURE, K.X.CREATE_FULL_CAPTURE, K.X.VIEW_FULL_CAPTURE, K.X.DOWNLOAD_SIMPLE_CAPTURE, M.bK.VIEW_RULES, M.bK.CREATE_RULE, M.bK.UPDATE_RULE, M.bK.DELETE_RULE, M.bK.VIEW_CONFIGURATION, M.bK.CREATE_CONFIGURATION, M.bK.UPDATE_CONFIGURATION, M.bK.DELETE_CONFIGURATION, O.r8.VIEW_ALERTS, O.r8.VIEW_ALERTS_HISTORY, O.r8.MAGIC_OVERVIEW_ANALYTICS, O.VZ.CREATE_SITE, O.VZ.CREATE_TUNNEL, O.VZ.CREATE_STATIC_ROUTE, v.o4.CLICK_ADAPTIVE_SAMPLING, v.o4.CLICK_TO_LOG_EXPLORER_BANNER, v.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, v.o4.CLICK_SWITCH_TO_RAW_LOGS, v.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", x.U.REGISTER_DOMAIN_SEARCH_SUBMIT, x.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, x.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, x.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, x.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, x.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, x.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, x.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, x.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, x.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, x.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, x.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, x.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, x.U.REGISTER_DOMAIN_CHECKOUT_ERROR, x.U.TRANSFER_DOMAIN_CHANGE_STEP, x.U.RENEW_DOMAIN_COMPLETED, x.U.RESTORE_DOMAIN_INIT, x.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, x.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, x.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, x.U.RESTORE_DOMAIN_FAILURE, x.U.RESTORE_DOMAIN_COMPLETED, x.U.DOMAIN_DELETE_INIT, x.U.DOMAIN_DELETE_COMPLETED, x.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, x.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, x.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, x.U.DOMAIN_DELETE_CONFIRM_DELETE, x.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, x.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, x.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, x.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, x.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, F.KO.CLICK_GET_STARTED_GUIDE, F.KO.CLICK_PIPELINE_DOCUMENTATION, F.KO.CLICK_QUICK_LINK, F.KO.CREATE_PIPELINE, F.KO.DELETE_PIPELINE, F.KO.LIST_PIPELINES, F.KO.VIEW_PIPELINE, Ae.S.EXISTING_DOMAIN, Ae.S.NEW_DOMAIN, Ae.S.WAF_RULESET, Ae.S.WORKERS, Ae.S.PAGES, Ae.S.R2, Ae.S.ACCOUNT_MEMBERS, Oe._.TEMPLATE_PRODUCT_SELECTED, Oe._.TEMPLATE_SELECTED, Oe._.TEMPLATE_SAVE_DRAFT, Oe._.TEMPLATE_CANCEL, Oe._.TEMPLATE_DEPLOY),
				de = t.eg.exactStrict(t.eg.object({
					".agency": t.eg.any.optional,
					".auction": t.eg.any.optional,
					".bet": t.eg.any.optional,
					".center": t.eg.any.optional,
					".church": t.eg.any.optional,
					".com": t.eg.any.optional,
					".community": t.eg.any.optional,
					".energy": t.eg.any.optional,
					".fitness": t.eg.any.optional,
					".guru": t.eg.any.optional,
					".io": t.eg.any.optional,
					".info": t.eg.any.optional,
					".immo": t.eg.any.optional,
					".lgbt": t.eg.any.optional,
					".life": t.eg.any.optional,
					".live": t.eg.any.optional,
					".media": t.eg.any.optional,
					".mobi": t.eg.any.optional,
					".net": t.eg.any.optional,
					".network": t.eg.any.optional,
					".ninja": t.eg.any.optional,
					".online": t.eg.any.optional,
					".org": t.eg.any.optional,
					".photography": t.eg.any.optional,
					".plus": t.eg.any.optional,
					".press": t.eg.any.optional,
					".pro": t.eg.any.optional,
					".services": t.eg.any.optional,
					".store": t.eg.any.optional,
					".tech": t.eg.any.optional,
					".wiki": t.eg.any.optional,
					".wtf": t.eg.any.optional,
					".xyz": t.eg.any.optional,
					_ga: t.eg.any.optional,
					_lpchecked: t.eg.any.optional,
					a: t.eg.any.optional,
					absolute: t.eg.any.optional,
					access: t.eg.any.optional,
					access_users_allowed: t.eg.any.optional,
					account: t.eg.any.optional,
					accountId: t.eg.any.optional,
					"accountResolver/SELECT_ACCOUNT": t.eg.any.optional,
					"accountResolver/NO_ACTION": t.eg.any.optional,
					accountResolverTotalCpuTime: t.eg.any.optional,
					accountResolverTotalTime: t.eg.any.optional,
					accountResolverTotalUserActionsTime: t.eg.any.optional,
					action: t.eg.any.optional,
					addedRecords: t.eg.any.optional,
					addon: t.eg.any.optional,
					address: t.eg.any.optional,
					apiUrl: t.eg.any.optional,
					argo_accelerated_gigabytes: t.eg.any.optional,
					"aria-current": t.eg.any.optional,
					"aria-controls": t.eg.any.optional,
					"aria-label": t.eg.any.optional,
					"aria-selected": t.eg.any.optional,
					authHeaders: t.eg.any.optional,
					autocomplete: t.eg.any.optional,
					autoRenew: t.eg.any.optional,
					autoSetup: t.eg.any.optional,
					b: t.eg.any.optional,
					buckets: t.eg.string.optional,
					banner: t.eg.any.optional,
					bot_management: t.eg.any.optional,
					brokenExpression: t.eg.any.optional,
					bundle: t.eg.any.optional,
					c: t.eg.any.optional,
					cacheKey: t.eg.any.optional,
					cache_by_device_type: t.eg.any.optional,
					cache_rules: t.eg.any.optional,
					campaignId: t.eg.any.optional,
					campaignID: t.eg.any.optional,
					cancelled: t.eg.any.optional,
					category: t.eg.any.optional,
					cd43: t.eg.any.optional,
					cd45: t.eg.any.optional,
					cd47: t.eg.any.optional,
					certificate_pack_id: t.eg.any.optional,
					certificate_pack_type: t.eg.any.optional,
					cf: t.eg.any.optional,
					cfPlan: t.eg.any.optional,
					chartName: t.eg.any.optional,
					charts: t.eg.any.optional,
					childrenCount: t.eg.any.optional,
					childrenSelected: t.eg.any.optional,
					class: t.eg.any.optional,
					code0: t.eg.any.optional,
					columnName: t.eg.string.optional,
					completedTasks: t.eg.any.optional,
					component: t.eg.any.optional,
					component_values: t.eg.any.optional,
					configuration_rules: t.eg.any.optional,
					contentfulId: t.eg.any.optional,
					country: t.eg.any.optional,
					currentCA: t.eg.any.optional,
					currentPerPage: t.eg.any.optional,
					currentPage: t.eg.any.optional,
					d: t.eg.any.optional,
					dashVersion: t.eg.any.optional,
					"data-children-count": t.eg.any.optional,
					"data-tracking-name": t.eg.any.optional,
					"data-tracking-id": t.eg.any.optional,
					"data-testid": t.eg.any.optional,
					dataset: t.eg.any.optional,
					databaseId: t.eg.any.optional,
					dateCreated: t.eg.any.optional,
					dateModified: t.eg.any.optional,
					ddos: t.eg.any.optional,
					description: t.eg.string.optional,
					dedicated_certificates: t.eg.any.optional,
					dedicated_certificates_custom: t.eg.any.optional,
					deepLink: t.eg.any.optional,
					default: t.eg.any.optional,
					destinationPage: t.eg.string.optional,
					detailType: t.eg.any.optional,
					deviceViewport: t.eg.any.optional,
					direction: t.eg.any.optional,
					directive: t.eg.any.optional,
					domainName: t.eg.any.optional,
					download: t.eg.any.optional,
					duration: t.eg.any.optional,
					dynamic_redirects: t.eg.any.optional,
					e: t.eg.any.optional,
					email_count: t.eg.any.optional,
					end: t.eg.any.optional,
					endDate: t.eg.any.optional,
					enabled: t.eg.any.optional,
					entitled: t.eg.any.optional,
					environment: t.eg.string.optional,
					error: t.eg.any.optional,
					errorCode: t.eg.any.optional,
					errorMessage: t.eg.any.optional,
					errors: t.eg.any.optional,
					exclude_cdn_cgi: t.eg.any.optional,
					expand: t.eg.any.optional,
					experiment: t.eg.any.optional,
					expression: t.eg.any.optional,
					expressionType: t.eg.any.optional,
					features: t.eg.array(t.eg.string).optional,
					failureReasons: t.eg.any.optional,
					featureChange: t.eg.any.optional,
					featureImproved: t.eg.any.optional,
					featureName: t.eg.any.optional,
					featureOriginal: t.eg.any.optional,
					field: t.eg.any.optional,
					fieldName: t.eg.any.optional,
					filterId: t.eg.any.optional,
					firewall_rules: t.eg.any.optional,
					flow: t.eg.any.optional,
					"font-size": t.eg.any.optional,
					form: t.eg.any.optional,
					formView: t.eg.any.optional,
					frequency: t.eg.any.optional,
					from: t.eg.any.optional,
					fromCategorySearch: t.eg.any.optional,
					fromStreamRatePlanId: t.eg.any.optional,
					toStreamRatePlanId: t.eg.any.optional,
					gatesDelayed: t.eg.any.optional,
					geo: t.eg.any.optional,
					guid: t.eg.any.optional,
					hasData: t.eg.any.optional,
					hasRecords: t.eg.any.optional,
					hasSidebarNav: t.eg.boolean.optional,
					"hasTest2019-06-03": t.eg.any.optional,
					hCaptchaDisplayed: t.eg.any.optional,
					header_modification: t.eg.any.optional,
					hostname_count: t.eg.any.optional,
					hostParam: t.eg.any.optional,
					href: t.eg.any.optional,
					id: t.eg.any.optional,
					index: t.eg.any.optional,
					indexLevel: t.eg.any.optional,
					initialRecommendation: t.eg.any.optional,
					ip_access_rules: t.eg.any.optional,
					items: t.eg.number.optional,
					isAuthenticated: t.eg.any.optional,
					isPaused: t.eg.any.optional,
					isCloudflare: t.eg.any.optional,
					isExpanding: t.eg.boolean.optional,
					isEntAccount: t.eg.boolean.optional,
					isEnterprise: t.eg.boolean.optional,
					isInactive: t.eg.boolean.optional,
					isOpen: t.eg.boolean.optional,
					isScript: t.eg.any.optional,
					isSPA: t.eg.any.optional,
					isStreaming: t.eg.any.optional,
					isStripeBilling: t.eg.boolean.optional,
					isParent: t.eg.any.optional,
					isViewAll: t.eg.any.optional,
					isEditingSubscription: t.eg.any.optional,
					is_replacing: t.eg.any.optional,
					isRaw: t.eg.any.optional,
					jurisdiction: t.eg.any.optional,
					key: t.eg.any.optional,
					label: t.eg.any.optional,
					lastTimestamp: t.eg.any.optional,
					last_scan_days_ago: t.eg.any.optional,
					level: t.eg.any.optional,
					limit: t.eg.any.optional,
					link: t.eg.any.optional,
					listType: t.eg.any.optional,
					load_balancing: t.eg.any.optional,
					load_balancing_base: t.eg.any.optional,
					load_balancing_dns_queries: t.eg.any.optional,
					load_balancing_geo_routing: t.eg.any.optional,
					load_balancing_monitor_interval: t.eg.any.optional,
					load_balancing_origins: t.eg.any.optional,
					load_balancing_probe_regions: t.eg.any.optional,
					legacyDeepLink: t.eg.any.optional,
					locale: t.eg.any.optional,
					location: t.eg.any.optional,
					locationHint: t.eg.any.optional,
					maliciousCode: t.eg.any.optional,
					maliciousDomain: t.eg.any.optional,
					maliciousURL: t.eg.any.optional,
					managed_rules: t.eg.any.optional,
					marketingPlan: t.eg.any.optional,
					matchesCount: t.eg.any.optional,
					matchingRequestPercentage: t.eg.any.optional,
					matchingRequests: t.eg.any.optional,
					message0: t.eg.any.optional,
					method: t.eg.any.optional,
					millis: t.eg.any.optional,
					"mirage-recommendation": t.eg.any.optional,
					mode: t.eg.any.optional,
					monitor: t.eg.string.optional,
					monitorType: t.eg.any.optional,
					mrktCheckboxDisplayed: t.eg.any.optional,
					name: t.eg.any.optional,
					newTotalCount: t.eg.any.optional,
					novalidate: t.eg.any.optional,
					numAccounts: t.eg.any.optional,
					numRecords: t.eg.any.optional,
					numRecordsToApply: t.eg.any.optional,
					numRecordsToPrompt: t.eg.any.optional,
					numRecordsToRemove: t.eg.any.optional,
					numRows: t.eg.any.optional,
					origin_rules: t.eg.any.optional,
					numFilters: t.eg.any.optional,
					numRawLogs: t.eg.any.optional,
					numSampledLogs: t.eg.any.optional,
					moreRawLogs: t.eg.any.optional,
					old_expires_on: t.eg.any.optional,
					old_mode: t.eg.any.optional,
					oldFrequency: t.eg.string.optional,
					oldPlan: t.eg.any.optional,
					oldPrice: t.eg.number.optional,
					oldRatePlan: t.eg.string.optional,
					oldStep: t.eg.any.optional,
					oldSubscriptionValues: t.eg.record(t.eg.string, t.eg.any).optional,
					oldValue: t.eg.any.optional,
					onboarding: t.eg.any.optional,
					operator: t.eg.any.optional,
					order: t.eg.string.optional,
					order_by: t.eg.any.optional,
					page: t.eg.any.optional,
					page_rules: t.eg.any.optional,
					pageName: t.eg.any.optional,
					pageNumber: t.eg.any.optional,
					params: t.eg.any.optional,
					paused: t.eg.any.optional,
					origin_url: t.eg.string.optional,
					payment_country: t.eg.string.optional,
					payment_gateway: t.eg.string.optional,
					percentages: t.eg.array(t.eg.number).optional,
					permission: t.eg.string.optional,
					personalisation: t.eg.boolean.optional,
					personalized: t.eg.boolean.optional,
					per_page: t.eg.any.optional,
					plan: t.eg.any.optional,
					plans: t.eg.any.optional,
					planVolume: t.eg.any.optional,
					position: t.eg.number.optional,
					prefs: t.eg.any.optional,
					previousPage: t.eg.any.optional,
					previousTotalCount: t.eg.any.optional,
					price: t.eg.any.optional,
					priority: t.eg.any.optional,
					product: t.eg.any.optional,
					prioritize_malicious: t.eg.any.optional,
					products: t.eg.any.optional,
					productName: t.eg.any.optional,
					productCategory: t.eg.any.optional,
					provider: t.eg.any.optional,
					question: t.eg.any.optional,
					quota: t.eg.any.optional,
					ratePlan: t.eg.any.optional,
					rayId: t.eg.any.optional,
					readTasks: t.eg.any.optional,
					reason: t.eg.any.optional,
					recommendation: t.eg.any.optional,
					recommendationType: t.eg.any.optional,
					recordAdditionMethod: t.eg.any.optional,
					recordTypes: t.eg.any.optional,
					region: t.eg.any.optional,
					registrar: t.eg.any.optional,
					resourceName: t.eg.string.optional,
					rulesCount: t.eg.any.optional,
					gclid: t.eg.any.optional,
					gclsrc: t.eg.any.optional,
					dclid: t.eg.any.optional,
					utm_source: t.eg.any.optional,
					utm_medium: t.eg.any.optional,
					utm_campaign: t.eg.any.optional,
					utm_term: t.eg.any.optional,
					utm_content: t.eg.any.optional,
					rangeMax: t.eg.number.optional,
					rangeMin: t.eg.number.optional,
					rate_limiting: t.eg.any.optional,
					ratePlanId: t.eg.any.optional,
					referring_domain: t.eg.any.optional,
					referrer: t.eg.any.optional,
					registrationPeriod: t.eg.any.optional,
					registrationStatus: t.eg.any.optional,
					rel: t.eg.any.optional,
					relativeTimeRange: t.eg.any.optional,
					resultRank: t.eg.number.optional,
					"rocket_loader-recommendation": t.eg.any.optional,
					role: t.eg.any.optional,
					ruleDescription: t.eg.any.optional,
					ruleId: t.eg.any.optional,
					scanFailed: t.eg.any.optional,
					scope: t.eg.any.optional,
					searchAction: t.eg.any.optional,
					searchDescription: t.eg.any.optional,
					searchParam: t.eg.any.optional,
					searchStatus: t.eg.any.optional,
					searchTerm: t.eg.any.optional,
					searchValue: t.eg.any.optional,
					section: t.eg.any.optional,
					seenOnParam: t.eg.any.optional,
					selected: t.eg.any.optional,
					series: t.eg.any.optional,
					service: t.eg.any.optional,
					setting: t.eg.any.optional,
					setup: t.eg.any.optional,
					showErrors: t.eg.any.optional,
					sortDirection: t.eg.string.optional,
					sortBy: t.eg.string.optional,
					source: t.eg.any.optional,
					startDate: t.eg.any.optional,
					state: t.eg.any.optional,
					status: t.eg.any.optional,
					step: t.eg.any.optional,
					storageClass: t.eg.any.optional,
					string: t.eg.any.optional,
					stream_storage_thousand_minutes: t.eg.any.optional,
					stream_viewed_thousand_minutes: t.eg.any.optional,
					subcategory: t.eg.any.optional,
					subscribedToMarketing: t.eg.any.optional,
					subscriptionValues: t.eg.record(t.eg.string, t.eg.any).optional,
					success: t.eg.any.optional,
					supportLevel: t.eg.any.optional,
					tab: t.eg.any.optional,
					tableName: t.eg.any.optional,
					tag: t.eg.any.optional,
					target: t.eg.any.optional,
					targetPage: t.eg.any.optional,
					targetCA: t.eg.any.optional,
					target_pack_type: t.eg.any.optional,
					task: t.eg.any.optional,
					text: t.eg.any.optional,
					timeRange: t.eg.any.optional,
					title: t.eg.any.optional,
					tld: t.eg.string.optional,
					to: t.eg.any.optional,
					touched: t.eg.any.optional,
					total: t.eg.number.optional,
					transform_rules: t.eg.any.optional,
					trialPlan: t.eg.any.optional,
					trialStart: t.eg.any.optional,
					topic: t.eg.any.optional,
					totalCount: t.eg.any.optional,
					totalCpuTime: t.eg.any.optional,
					totalLevels: t.eg.any.optional,
					totalRequests: t.eg.any.optional,
					totalTime: t.eg.any.optional,
					totalUserActionsTime: t.eg.any.optional,
					type: t.eg.any.optional,
					upgrade: t.eg.boolean.optional,
					uploading: t.eg.any.optional,
					uploadFailed: t.eg.any.optional,
					url_rewrites: t.eg.any.optional,
					hosts: t.eg.string.optional,
					uiType: t.eg.string.optional,
					userId: t.eg.any.optional,
					userType: t.eg.any.optional,
					utm_referrer: t.eg.any.optional,
					validation_method: t.eg.any.optional,
					validity_days: t.eg.any.optional,
					value: t.eg.any.optional,
					visibility: t.eg.any.optional,
					via: t.eg.any.optional,
					waf: t.eg.any.optional,
					wizardName: t.eg.any.optional,
					wordpress: t.eg.any.optional,
					workers: t.eg.any.optional,
					worker_kv_deletes: t.eg.any.optional,
					worker_kv_lists: t.eg.any.optional,
					worker_kv_reads: t.eg.any.optional,
					worker_kv_storage: t.eg.any.optional,
					worker_kv_writes: t.eg.any.optional,
					worker_requests: t.eg.any.optional,
					wp_plugin: t.eg.any.optional,
					zone: t.eg.any.optional,
					zoneId: t.eg.any.optional,
					zoneName: t.eg.any.optional,
					"zoneResolver/NO_ACTION": t.eg.any.optional,
					"zoneResolver/SELECT_ZONE": t.eg.any.optional,
					zoneResolverTotalCpuTime: t.eg.any.optional,
					zoneResolverTotalTime: t.eg.any.optional,
					zoneResolverTotalUserActionsTime: t.eg.any.optional,
					zones: t.eg.any.optional,
					zoneStatus: t.eg.any.optional,
					zoneType: t.eg.any.optional,
					audit: t.eg.any.optional,
					score: t.eg.any.optional,
					potentialSavings: t.eg.any.optional,
					feature: t.eg.any.optional,
					days: t.eg.any.optional,
					minutes: t.eg.any.optional,
					customRange: t.eg.any.optional,
					metric: t.eg.any.optional,
					url: t.eg.any.optional,
					previousPlan: t.eg.any.optional,
					isStarring: t.eg.any.optional,
					isStarred: t.eg.any.optional,
					totalStarredZones: t.eg.number.optional,
					totalZones: t.eg.number.optional,
					widgetName: t.eg.any.optional,
					statusType: t.eg.any.optional,
					outcome: t.eg.any.optional,
					marketingOptInChecked: t.eg.boolean.optional,
					prompt: t.eg.any.optional,
					positive: t.eg.any.optional,
					endpoint: t.eg.any.optional,
					isArgoEnabled: t.eg.any.optional,
					insightClass: t.eg.string.optional,
					insightType: t.eg.string.optional,
					severity: t.eg.string.optional,
					domain: t.eg.any.optional,
					exact: t.eg.any.optional,
					fees: t.eg.any.optional,
					new_selection: t.eg.any.optional,
					numDomainsInCart: t.eg.any.optional,
					payment_method: t.eg.string.optional,
					payment_option: t.eg.string.optional,
					premium: t.eg.any.optional,
					previous_selection: t.eg.any.optional,
					pricing_local: t.eg.any.optional,
					selection: t.eg.any.optional,
					uniqueTopLevelDomains: t.eg.any.optional,
					template_name: t.eg.any.optional
				})),
				Te = (V, re) => {
					const [pe, me] = Be(re);
					let _e, we;
					return (0, t.nM)(N.decode(V)) && (_e = new q.Uh(V)), me && me.length > 0 && (we = new q.oV(V, me)), [pe, _e, we]
				},
				Be = V => {
					const re = de.decode(V);
					if ((0, t.nM)(re)) {
						const pe = re.left.map(({
							context: me
						}) => me.map(({
							key: _e
						}) => _e)).reduce((me, _e) => me.concat(_e), []).filter(me => me in V);
						return [Ke(pe, V), pe]
					}
					return [V, []]
				},
				Ke = (V, re) => Object.entries(re).reduce((pe, [me, _e]) => (V.includes(me) || (pe[me] = _e), pe), {}),
				He = V => (re, pe, me) => {
					const [_e, we, xe] = Te(pe, me);
					if (we) throw we;
					return xe && console.error(xe), V(re, pe, _e)
				};
			var Ze = n("../react/utils/zaraz.ts");
			const Ve = {
					identify: !0
				},
				Ye = V => (re, pe, me) => (Ve[pe] || Ze.tg === null || Ze.tg === void 0 || Ze.tg.track(pe, me), V(re, pe, me));
			var je = n("../react/utils/cookiePreferences.ts");

			function qe(V) {
				for (var re = 1; re < arguments.length; re++) {
					var pe = arguments[re] != null ? Object(arguments[re]) : {},
						me = Object.keys(pe);
					typeof Object.getOwnPropertySymbols == "function" && me.push.apply(me, Object.getOwnPropertySymbols(pe).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(pe, _e).enumerable
					})), me.forEach(function(_e) {
						Qe(V, _e, pe[_e])
					})
				}
				return V
			}

			function Qe(V, re, pe) {
				return re = et(re), re in V ? Object.defineProperty(V, re, {
					value: pe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[re] = pe, V
			}

			function et(V) {
				var re = We(V, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function We(V, re) {
				if (typeof V != "object" || V === null) return V;
				var pe = V[Symbol.toPrimitive];
				if (pe !== void 0) {
					var me = pe.call(V, re || "default");
					if (typeof me != "object") return me;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(V)
			}
			const tt = V => {
					o().init(qe({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: ze() && !(0, c.gm)() && te(),
						middlewares: [C, He, D, Ye]
					}, V))
				},
				Xe = () => {
					o().identify(qe({}, (0, e.getAttribution)(), {
						locale: (0, s.r)((0, m.bh)().getState()),
						isCloudflare: !!(0, g.Jd)()
					}))
				},
				ze = () => !0,
				w = () => {
					(0, je.kT)("sparrow_id")
				},
				te = () => (0, je.Xm)()
		},
		"../utils/initStyles.ts": function(W, E, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../react/app/providers/storeContainer.js");
			const c = "cfBaseStyles",
				m = document.head || document.getElementsByTagName("head")[0],
				s = d => {
					const p = [];
					for (let _ in d.colors) {
						const t = d.colors[_];
						if (Array.isArray(t) && _ !== "categorical")
							for (let r = 0; r < t.length; ++r) p.push(`--cf-${_}-${r}:${t[r]};`)
					}
					return p.join(`
`)
				},
				g = () => {
					const d = (0, e.Yc)(),
						p = `
    * {
      box-sizing: border-box;
    }

    ::placeholder {
      color: ${e.Rl.colors.gray[5]}
    }

    html, body, button {
      font-size: 16px;
    }

    html {
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: none;
    }

    body {
      line-height: 1.5;
      color: ${e.Rl.colors.gray[1]};
      background-color: ${e.Rl.colors.background};
      font-family: ${e.Rl.fontFamily};
    }

    text {
      fill: ${e.Rl.colors.gray[1]};
    }

    body, html, ul, ol, li, p, h1, h2, h3, h4, h5, h6 {
      margin: 0;
      padding: 0;
    }

    h1, h2, h3, small {
      line-height: 1.25;
    }

    h1 {
      font-size: 32px;
      font-weight: 400;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 20px;
    }

    h4, h5, h6 {
      font-size: 16px;
    }

    h2, h3, h4, h5 h4, h5, h6 {
      font-weight: 600;
    }

     h3 + p, h4 + p, h5 + p, h6 + p {
       margin-top: 0.5em;
     }

    small {
      font-size: 12px;
    }

    button {
      font-family: ${e.Rl.fontFamily};
      border: none;
    }

    label {
      display: block;
      font-size: 0.875rem;
      margin-bottom: 0.35938em;
      min-height: 1.22em;
    }

    fieldset {
      border: none;
    }

    pre {
      border-radius: 3px;
      color: ${e.Rl.colors.gray[1]};
      display: block;
      font-size: 14px;
      margin: 2rem 0;
      overflow: auto;
      padding: 0.5rem;
      width: 100%;
    }

    code, pre {
      background-color: ${d?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${d?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${d?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${d?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${d?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${d?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      outline: none;
    }

    a:focus {
      color: ${e.Rl.colors.blue[5]};
    }

    a svg, a:active svg, a:hover svg {
      fill: currentColor
    }

    ol, ul, dl {
      list-style-position: outside;
      margin-left: 3em;
    }

    ul {
      list-style-type: disc;
    }

    dd {
      margin: 0;
    }

    dt {
      font-weight: 600;
      font-size: ${e.Rl.fontSizes[3]}px
    }

    p+p, p+ul, p+ol, p+dl, ul+p, ul+h2, ul+h3, ul+h4, ul+h5, ul+h6 {
      margin-top: 1.5em;
    }

    hr {
      border: 0;
      border-top: 1px solid #d5d7d8;
      display: block;
      height: 0;
      margin: 2rem 0;
      width: 100%;
    }

    img, object {
      height: auto;
      max-width: 100%;
    }

    table {
      border-spacing: 0;
    }

    legend {
      padding-inline-start: 0;
    }

    fieldset {
      margin-inline-start: 0;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
      background-color: ${e.Rl.colors.background};
      color:  ${e.Rl.colors.gray[8]}
    }

    :root {
      --cf-white: ${e.Rl.colors.white};
      --cf-black: ${e.Rl.colors.black};
      ${s(e.Rl)}
    }
    
    .mode-transition *,
    .mode-transition body,
    .mode-transition input,
    .mode-transition button,
    .mode-transition footer,
    .mode-transition header,
    .mode-transition div {
      transition-duration: ${e.Rl.modeTransitionTime}ms !important;
      transition-property: color, background, background-color, fill, opacity, border, border-color !important;
      transition-timing-function: ease-out !important;
    }

    .ReactVirtualized__List {
      outline: none
    }
    .grim-scroll-sortable-helper {
      pointer-events: auto !important;
      z-index: 2000 !important;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;
      background-color: white !important;
    }
    .grim-scroll-sortable-helper * {
      cursor: grabbing !important;
    }
  `;
					let _ = document.getElementById(c);
					_ ? _.innerText = "" : (_ = document.createElement("style"), _.id = c, m.appendChild(_)), _.appendChild(document.createTextNode(p)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(g), E.Z = g
		},
		"../utils/sentry/lastSentEventId.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let c = "";
				return {
					setEventId: g => (!g || typeof g != "string" || (c = g), c),
					getEventId: () => c
				}
			})()
		},
		"../utils/zaraz.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Ro: function() {
					return r
				},
				bM: function() {
					return p
				},
				tg: function() {
					return d
				},
				yn: function() {
					return t
				}
			});

			function e(a) {
				for (var l = 1; l < arguments.length; l++) {
					var i = arguments[l] != null ? Object(arguments[l]) : {},
						f = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(i).filter(function(y) {
						return Object.getOwnPropertyDescriptor(i, y).enumerable
					})), f.forEach(function(y) {
						o(a, y, i[y])
					})
				}
				return a
			}

			function o(a, l, i) {
				return l = c(l), l in a ? Object.defineProperty(a, l, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[l] = i, a
			}

			function c(a) {
				var l = m(a, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function m(a, l) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var f = i.call(a, l || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(a)
			}
			const s = {
					track: (a, l) => null,
					set: (a, l) => console.log(`zaraz.set(${a}, ${l})`)
				},
				g = {
					track: (a, l) => {
						var i;
						(i = window.zaraz) === null || i === void 0 || i.track(a, e({}, l, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (a, l) => {
						var i;
						return (i = window.zaraz) === null || i === void 0 ? void 0 : i.set(a, l)
					}
				};
			let d;
			const p = () => {
					window.zaraz, d = g
				},
				_ = ["email", "first_name", "last_name"],
				t = a => {
					_.forEach(l => {
						var i;
						(i = d) === null || i === void 0 || i.set(l, a[l])
					})
				},
				r = () => {
					t({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				m = n.n(c),
				s = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = n("../../../common/intl/intl-react/src/index.ts"),
				d = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				p = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				_ = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				t = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				r = n("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				a = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/elements/es/index.js"),
				l = n("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				i = n("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				f = n("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				y = n("../../../common/component/component-filter-bar/src/constants.js"),
				S = n("../../../common/component/component-filter-bar/src/utils.js");

			function P(j) {
				for (var I = 1; I < arguments.length; I++) {
					var U = arguments[I] != null ? Object(arguments[I]) : {},
						G = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(U).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(U, ae).enumerable
					})), G.forEach(function(ae) {
						T(j, ae, U[ae])
					})
				}
				return j
			}

			function T(j, I, U) {
				return I = R(I), I in j ? Object.defineProperty(j, I, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[I] = U, j
			}

			function R(j) {
				var I = D(j, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function D(j, I) {
				if (typeof j != "object" || j === null) return j;
				var U = j[Symbol.toPrimitive];
				if (U !== void 0) {
					var G = U.call(j, I || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(j)
			}
			const C = 70,
				q = (0, s.createStyledComponent)(({
					showOverflow: j
				}) => P({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, j ? {} : {
					maxHeight: C,
					overflow: "hidden"
				})),
				ee = (0, s.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				X = (0, s.createStyledComponent)(({
					theme: j
				}) => ({
					backgroundColor: j.colors.background,
					py: 1,
					px: 2,
					borderRadius: j.radii[2],
					border: `1px solid ${j.colors.gray[7]}`,
					fontSize: j.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: j.colors.gray[4]
					}
				}), "div"),
				Y = (0, s.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				K = (0, s.createStyledComponent)(({
					theme: j
				}) => ({
					color: j.colors.gray[4],
					mr: 1
				}), "span"),
				B = (0, s.createStyledComponent)(() => ({
					mr: 2,
					maxWidth: 180,
					whiteSpace: "nowrap",
					display: "inline-block",
					verticalAlign: "bottom",
					overflow: "hidden",
					textOverflow: "ellipsis",
					"@media print": {
						marginRight: 0
					}
				}), "span"),
				$ = (0, s.createStyledComponent)(({
					buttonStyle: j
				}) => P({
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					height: 35,
					mr: 3,
					mb: 1,
					py: 1,
					px: 2,
					fontSize: 2,
					"@media print": {
						display: "none"
					}
				}, j), p.zx),
				J = (0, s.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				Q = (0, s.createStyledComponent)(({
					theme: j
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: j.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: j.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: j.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: j.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				Z = (0, s.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				se = j => j.current ? [...j.current.children].reduce((I, U) => (U.offsetTop >= C && I++, I), 0) : 0;
			let z = 0;
			class fe extends e.Component {
				constructor() {
					super();
					T(this, "overflowWrapper", (0, e.createRef)()), T(this, "hasOverflowed", I => {
						const U = se(this.overflowWrapper);
						I.scrollHeight > C && U >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (I.scrollHeight < C || U === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), T(this, "addNewFilter", () => {
						const {
							filterDefinitions: I
						} = this.props, U = (0, S.TE)(I), G = Object.keys(U)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: G,
								operator: (0, S.uv)(G, U),
								value: (0, S.TT)(G, U)
							}
						})
					}), T(this, "handleOpenFilterEdit", I => {
						this.setState({
							openFilter: I,
							filterChanges: P({}, this.props.filters[I])
						})
					}), T(this, "handleRemoveFilterClick", (I, U) => {
						I.stopPropagation(), this.removeFilter(U)
					}), T(this, "removeFilter", I => {
						const {
							handleFiltersChange: U
						} = this.props, G = [...this.props.filters], ae = G[I];
						G.splice(I, 1), U(G), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: ae.key,
							operator: ae.operator,
							value: ae.value
						})
					}), T(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), T(this, "handleFilterSubmit", I => {
						const {
							filterDefinitions: U
						} = this.props;
						I.preventDefault();
						const {
							filterChanges: G
						} = this.state, ae = typeof U[G.key].parse == "function" ? Array.isArray(G.value) ? G.value.map(U[G.key].parse) : U[G.key].parse(G.value) : G.value;
						if (U[G.key].validate && (Array.isArray(ae) ? !ae.every(U[G.key].validate) : !U[G.key].validate(ae))) return this.setState({
							invalid: !0
						});
						const M = [...this.props.filters],
							v = P({}, G, {
								value: ae
							}),
							O = !M[this.state.openFilter];
						O ? M.push(v) : M[this.state.openFilter] = P({}, G), this.props.handleFiltersChange(M, v), (O ? this.props.onAddFilter : this.props.onEditFilter)({
							field: v.key,
							operator: v.operator,
							value: v.value
						}), this.closeOpenFilterChanges()
					}), T(this, "handlePendingKeyChange", ({
						value: I
					}) => {
						const {
							filterDefinitions: U
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: I,
								operator: (0, S.uv)(I, U),
								value: (0, S.TT)(I, U)
							}
						})
					}), T(this, "handlePendingOperatorChange", ({
						value: I
					}) => {
						let U = P({}, this.state.filterChanges, {
							operator: I
						});
						if ((0, S.dr)(I)) {
							var G, ae;
							((G = this.state.filterChanges) === null || G === void 0 ? void 0 : G.value) && !Array.isArray((ae = this.state.filterChanges) === null || ae === void 0 ? void 0 : ae.value) && (U.value = [this.state.filterChanges.value])
						} else {
							var M, v, O;
							((M = this.state.filterChanges) === null || M === void 0 ? void 0 : M.value) && Array.isArray((v = this.state.filterChanges) === null || v === void 0 ? void 0 : v.value) && ((O = this.state.filterChanges) === null || O === void 0 ? void 0 : O.value.length) > 0 && (U.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: U
						})
					}), T(this, "handlePendingValueChange", I => {
						this.setState({
							invalid: !1,
							filterChanges: P({}, this.state.filterChanges, {
								value: I
							})
						})
					}), T(this, "handleShowOverflow", () => {
						this.setState({
							showOverflow: !this.state.showOverflow
						})
					}), this.state = {
						open: !1,
						invalid: !1,
						openFilter: null,
						filterChanges: null,
						hasOverflowed: !1,
						showOverflow: !1,
						id: ++z
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(I) {
					I.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(I) {
					const {
						formatLabel: U,
						filterDefinitions: G
					} = this.props, {
						operator: ae
					} = this.state.filterChanges, M = G[this.state.filterChanges.key], v = this.state.filterChanges.value, O = b => Array.isArray(b) ? b.map(F => F.value) : (b == null ? void 0 : b.value) || null;
					if (M.renderValueComponent) return M.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (M.type) {
						case y.k.select:
							return (0, S.dr)(ae) ? o().createElement(l.Z, {
								searchable: !0,
								multi: !0,
								creatable: !M.options,
								value: typeof v.split == "function" ? v == null ? void 0 : v.split(",") : Array.isArray(v) ? v : [],
								options: M.options ? M.options.map(b => ({
									value: b.value || b,
									label: b.label || U(this.state.filterChanges.key, b, I)
								})) : v ? (Array.isArray(v) ? v : v.split(",")).map(b => ({
									label: b,
									value: b
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(g.cC, {
									id: M.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: M.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: b => {
									this.handlePendingValueChange(O(b))
								},
								isValidNewOption: b => {
									const F = M.validate;
									return !F && b || b && F([b])
								},
								getNewOptionData: (b, F) => ({
									value: b,
									label: F
								})
							}) : o().createElement(r.hQ, {
								hideLabel: !0,
								value: v,
								options: M.options.map(b => ({
									value: b,
									label: U(this.state.filterChanges.key, b, I)
								})),
								onChange: ({
									value: b
								}) => this.handlePendingValueChange(b)
							});
						case y.k.string:
						default:
							return (0, S.dr)(ae) ? o().createElement(l.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof v.split == "function" ? v == null ? void 0 : v.split(",") : Array.isArray(v) ? v : [],
								options: v ? (Array.isArray(v) ? v : v.split(",")).map(b => ({
									label: b,
									value: b
								})) : [],
								noOptionsMessage: () => null,
								placeholder: I.t("analytics.report.filters.labels.placeholder", {
									example: G[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: b => {
									this.handlePendingValueChange(O(b))
								},
								isValidNewOption: b => {
									const F = M.validate;
									return !F && b || b && F([b])
								},
								getNewOptionData: (b, F) => ({
									value: b,
									label: F
								}),
								formatCreateLabel: b => I.t("filter_editor.value_create_label", {
									value: b
								})
							}) : o().createElement(g.oc, null, b => o().createElement(d.I, {
								value: this.state.filterChanges.value,
								onChange: F => this.handlePendingValueChange(F.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: b.t("analytics.report.filters.labels.placeholder", {
									example: G[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: I,
						filterDefinitions: U,
						modalStyles: G,
						filterIconType: ae,
						buttonStyle: M
					} = this.props, v = se(this.overflowWrapper), O = `filterPanel${this.state.id}`, b = this.state.openFilter !== null;
					return o().createElement(g.oc, null, F => o().createElement(a.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(Z, null, o().createElement($, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": b,
						"aria-controls": O,
						inverted: !0,
						buttonStyle: M
					}, o().createElement(_.J, {
						type: ae || "add",
						mr: 1,
						label: F.t("common.add", {
							_: "Add"
						})
					}), o().createElement(g.cC, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(J, null, o().createElement(g.cC, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(q, {
						innerRef: this.overflowWrapper,
						overflowLimit: C,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((x, ce) => {
						const {
							key: ge,
							operator: Oe,
							value: Ae
						} = x, Re = U[ge].ignoreLabelTranslation ? U[ge].label : F.t(U[ge].label), N = F.t(`analytics.report.filters.operators.${Oe}`), de = Array.isArray(Ae) ? Ae.map(Be => I(ge, Be, F)).join(", ") : I(ge, Ae, F), Te = `${Re} ${N} ${de}`;
						return o().createElement(ee, {
							key: `${ge}-${Oe}-${Ae}`,
							title: Te
						}, o().createElement(X, {
							onClick: () => this.handleOpenFilterEdit(ce)
						}, o().createElement(a.ZC, {
							display: "flex"
						}, o().createElement(Y, null, Re), o().createElement(K, null, N), o().createElement(B, null, de), (0, S.oN)(x, U) ? o().createElement(t.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(Q, {
							onClick: Be => this.handleRemoveFilterClick(Be, ce),
							"aria-label": "remove"
						}, o().createElement(_.J, {
							type: "remove"
						})))))
					})), b && o().createElement(f.Z, {
						id: O,
						filterDefinitions: U,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, S.oN)(this.state.filterChanges, U),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: I,
						modalStyles: G
					}), this.state.hasOverflowed && o().createElement(i.Z, {
						count: v,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			T(fe, "propTypes", {
				filterDefinitions: m().shape({}),
				filters: m().arrayOf(m().shape({
					key: m().string,
					operator: m().string,
					value: m().string
				})),
				handleFiltersChange: m().func.isRequired,
				formatLabel: m().func.isRequired,
				onAddFilter: m().func,
				onEditFilter: m().func,
				onRemoveFilter: m().func,
				children: m().node,
				modalStyles: m().object,
				filterIconType: m().string,
				buttonStyle: m().object
			}), E.Z = fe
		},
		"../../../common/component/component-filter-bar/src/index.js": function(W, E, n) {
			"use strict";
			n.d(E, {
				ME: function() {
					return o.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return c.k
				},
				oN: function() {
					return m.oN
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = n("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				c = n("../../../common/component/component-filter-bar/src/constants.js"),
				m = n("../../../common/component/component-filter-bar/src/utils.js")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				OZ: function() {
					return s
				},
				YB: function() {
					return m
				}
			});

			function e(d, p, _) {
				return p = o(p), p in d ? Object.defineProperty(d, p, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = _, d
			}

			function o(d) {
				var p = c(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function c(d, p) {
				if (typeof d != "object" || d === null) return d;
				var _ = d[Symbol.toPrimitive];
				if (_ !== void 0) {
					var t = _.call(d, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			class m extends Error {
				constructor(p, _) {
					super(_);
					e(this, "translationKey", void 0), this.translationKey = p, this.name = "TranslatorError"
				}
			}
			class s extends m {
				constructor(p) {
					super(p, `Translation key not found: ${p}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var g = null
		},
		"../../../common/intl/intl-react/src/I18nProvider.tsx": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(_) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (_[a] = r[a])
					}
					return _
				}, m.apply(this, arguments)
			}

			function s(_, t) {
				if (_ == null) return {};
				var r = g(_, t),
					a, l;
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(_);
					for (l = 0; l < i.length; l++) a = i[l], !(t.indexOf(a) >= 0) && (!Object.prototype.propertyIsEnumerable.call(_, a) || (r[a] = _[a]))
				}
				return r
			}

			function g(_, t) {
				if (_ == null) return {};
				var r = {},
					a = Object.keys(_),
					l, i;
				for (i = 0; i < a.length; i++) l = a[i], !(t.indexOf(l) >= 0) && (r[l] = _[l]);
				return r
			}
			class d extends e.Component {
				constructor(t) {
					super(t);
					const {
						locale: r,
						phrases: a,
						translator: l
					} = t;
					r && l.locale(r), a && l.extend(a)
				}
				componentDidUpdate(t) {
					t.phrases !== this.props.phrases && this.props.phrases && this.props.translator.locale(this.props.locale)
				}
				render() {
					const {
						children: t
					} = this.props;
					return t
				}
			}
			const p = _ => {
				let {
					translator: t
				} = _, r = s(_, ["translator"]);
				const a = () => e.createElement(c.oc, null, l => e.createElement(d, m({
					translator: l
				}, r)));
				return t ? (t.locale(r.locale), e.createElement(c.bd, {
					value: t
				}, a())) : a()
			};
			E.Z = p
		},
		"../../../common/intl/intl-react/src/index.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				oc: function() {
					return p.oc
				},
				lm: function() {
					return o.Z
				},
				bd: function() {
					return e.Z
				},
				RD: function() {
					return ee
				},
				cC: function() {
					return R
				},
				QT: function() {
					return C.Q
				}
			});
			var e = n("../../../common/intl/intl-react/src/I18nProvider.tsx"),
				o = n("../../../common/intl/intl-react/src/I18nLoader.tsx"),
				c = n("webpack/sharing/consume/default/react/react"),
				m = n.n(c),
				s = n("../../../../node_modules/lodash/escape.js"),
				g = n.n(s),
				d = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				p = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function _(X) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var K = arguments[Y] != null ? Object(arguments[Y]) : {},
						B = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(K).filter(function($) {
						return Object.getOwnPropertyDescriptor(K, $).enumerable
					})), B.forEach(function($) {
						t(X, $, K[$])
					})
				}
				return X
			}

			function t(X, Y, K) {
				return Y = r(Y), Y in X ? Object.defineProperty(X, Y, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : X[Y] = K, X
			}

			function r(X) {
				var Y = a(X, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function a(X, Y) {
				if (typeof X != "object" || X === null) return X;
				var K = X[Symbol.toPrimitive];
				if (K !== void 0) {
					var B = K.call(X, Y || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(X)
			}

			function l() {
				return l = Object.assign ? Object.assign.bind() : function(X) {
					for (var Y = 1; Y < arguments.length; Y++) {
						var K = arguments[Y];
						for (var B in K) Object.prototype.hasOwnProperty.call(K, B) && (X[B] = K[B])
					}
					return X
				}, l.apply(this, arguments)
			}
			const i = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				f = /(?:\r\n|\r|\n)/g;

			function y(X, Y, K) {
				return c.createElement("span", {
					key: X,
					"data-testid": K,
					dangerouslySetInnerHTML: {
						__html: Y
					}
				})
			}

			function S(X, Y = [], K = [], B) {
				let $ = 0;
				const J = X.replace(f, "").split(i);
				if (J.length === 1) return [y($, X, B)];
				const Q = [],
					Z = J.shift();
				if (Z) {
					const se = y($, Z, B);
					Q.push(se), typeof se != "string" && $++
				}
				for (const [se, z, fe] of P(J)) {
					Y[se] || window.console && console.warn(`Missing Component for translation key: ${X}, index: ${se}. Fragment will be used.`);
					const j = Y[se] || c.Fragment,
						I = K[se] || {},
						U = y(0, z);
					if (Q.push(c.createElement(j, l({
							key: $
						}, I), U)), $++, fe) {
						const G = y($, fe);
						Q.push(G), typeof G != "string" && $++
					}
				}
				return Q
			}

			function P(X) {
				if (!X.length) return [];
				const [Y, K, B, $] = X.slice(0, 4);
				return [
					[parseInt(Y || B), K || "", $]
				].concat(P(X.slice(4, X.length)))
			}

			function T({
				id: X = "",
				smartCount: Y,
				_: K,
				values: B,
				applyMarkdown: $,
				Components: J,
				componentProps: Q,
				testId: Z
			}) {
				return c.createElement(p.oc, null, se => {
					B && Object.keys(B).forEach(I => B[I] = g()(B[I])), Q && Q.forEach(I => {
						Object.keys(I).forEach(U => {
							typeof I[U] == "string" && (I[U] = g()(I[U]))
						})
					});
					const z = _({
							smart_count: Y,
							_: K
						}, B),
						fe = $ ? (0, d.Z)(se.t(X.toString(), z), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : se.t(X.toString(), z),
						j = S(fe, J, Q, Z);
					return j.length > 1 ? c.createElement(c.Fragment, null, j) : j[0]
				})
			}
			var R = T,
				D = n("../../../common/intl/intl-react/src/withTranslator.tsx"),
				C = n("../../../common/intl/intl-react/src/useI18n.tsx"),
				q = n("../../../common/intl/intl-types/src/index.ts"),
				ee = m().createContext(q.Q.en_US)
		},
		"../../../common/util/types/src/api/domain.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Aw: function() {
					return q
				},
				Ib: function() {
					return D
				},
				Ks: function() {
					return ee
				},
				MS: function() {
					return C
				},
				PN: function() {
					return f
				},
				Pp: function() {
					return m
				},
				Q3: function() {
					return l
				},
				TS: function() {
					return i
				},
				W7: function() {
					return P
				},
				dN: function() {
					return X
				},
				eF: function() {
					return R
				},
				qp: function() {
					return t
				},
				wR: function() {
					return _
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				c = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				m = e.eg.object({
					address: e.eg.string,
					address2: e.eg.string,
					city: e.eg.string,
					country: e.eg.string,
					email: e.eg.string,
					email_verified: e.eg.boolean.optional,
					fax: e.eg.string,
					first_name: e.eg.string,
					id: e.eg.string.optional,
					label: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.string,
					material_changes: e.eg.array(e.eg.string).optional,
					organization: e.eg.string,
					phone: e.eg.string,
					state: e.eg.string,
					zip: e.eg.string
				}),
				s = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				g = e.eg.object({
					registrant: m.optional,
					technical: m.optional,
					administrator: m.optional,
					billing: m.optional
				}),
				d = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: g.optional,
					years: e.eg.number
				}),
				p = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let _ = function(Y) {
				return Y.ONBOARDING_INITIATED = "Onboarding Initiated", Y.ONBOARDED = "Onboarded", Y.PENDING_REGISTRY_LOCK = "Pending Registry Lock", Y.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", Y.REGISTRY_UNLOCKED = "Registry Unlocked", Y.LOCKED = "Locked", Y.FAILED_TO_LOCK = "Failed To Lock", Y.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", Y.UNLOCKED = "Unlocked", Y.OFFBOARDED = "Offboarded", Y
			}({});
			const t = e.eg.object({
					administrator_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					auth_code: e.eg.string.optional,
					auto_renew: e.eg.boolean.optional,
					available: e.eg.boolean,
					billing_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					can_register: e.eg.boolean.optional,
					cloudflare_dns: e.eg.boolean.optional,
					cloudflare_registration: e.eg.boolean.optional,
					contacts: e.eg.any.optional,
					contacts_updated_at: e.eg.string.optional,
					cor_locked: e.eg.boolean.optional,
					cor_locked_until: e.eg.union([e.eg.string, e.eg.null]).optional,
					cor_responses_pending: e.eg.number.optional,
					created_at: e.eg.string.optional,
					created_registrar: e.eg.string.optional,
					current_registrar: e.eg.string.optional,
					domain_protection_services: e.eg.object({
						status: e.eg.enum(_).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: p.optional,
					landing: e.eg.union([c, e.eg.boolean]).optional,
					last_known_status: e.eg.union([e.eg.string, e.eg.null]).optional,
					locked: e.eg.boolean.optional,
					name: e.eg.string,
					name_servers: e.eg.array(e.eg.string).optional,
					material_changes: e.eg.array(e.eg.string).optional,
					partner_response: e.eg.union([e.eg.string, e.eg.null]).optional,
					payment_expires_at: e.eg.string.optional,
					pending_transfer: e.eg.boolean.optional,
					permissions: e.eg.array(e.eg.string).optional,
					previous_registrar: e.eg.union([e.eg.string, e.eg.null]).optional,
					privacy: e.eg.boolean.optional,
					registered_at: e.eg.union([e.eg.string, e.eg.null]).optional,
					registrant_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					registry_object_id: e.eg.union([e.eg.string, e.eg.null]).optional,
					registry_statuses: e.eg.string.optional,
					supported_tld: e.eg.boolean.optional,
					tags: e.eg.array(e.eg.string).optional,
					technical_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					transfer_conditions: s.optional,
					updated_at: e.eg.union([e.eg.string, e.eg.null]).optional,
					updated_registrar: e.eg.string.optional,
					using_created_registrar_nameservers: e.eg.boolean.optional,
					using_current_registrar_nameservers: e.eg.boolean.optional,
					using_previous_registrar_nameservers: e.eg.boolean.optional,
					using_updated_registrar_nameservers: e.eg.boolean.optional,
					whois: e.eg.unknown.optional
				}),
				r = e.eg.object({
					available: e.eg.boolean
				}),
				a = e.eg.object({
					result: e.eg.array(t),
					result_info: e.eg.object({
						count: e.eg.number,
						page: e.eg.number,
						per_page: e.eg.number,
						total_count: e.eg.number
					}),
					errors: e.eg.array(e.eg.string),
					messages: e.eg.array(e.eg.string),
					success: e.eg.boolean
				}),
				l = e.eg.object({
					check_result: e.eg.union([e.eg.null, e.eg.object({
						name: e.eg.string,
						supported_tld: e.eg.boolean,
						premium: e.eg.boolean,
						available: e.eg.boolean,
						can_register: e.eg.boolean
					})]).optional,
					domains: e.eg.array(e.eg.object({
						name: e.eg.string,
						availability: e.eg.string,
						price: e.eg.number,
						icann_fee: e.eg.number,
						pricing: e.eg.object({
							currency: e.eg.string,
							registration_fee: e.eg.number,
							renewal_fee: e.eg.number
						}),
						pricing_local: e.eg.object({
							currency: e.eg.string,
							registration_fee: e.eg.number,
							renewal_fee: e.eg.number
						})
					}))
				}),
				i = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let f = function(Y) {
				return Y.PENDING = "pending", Y.VERIFIED = "verified", Y.REJECTED = "rejected", Y.PENDING_DELETE = "pending_delete", Y.DELETED = "deleted", Y
			}({});
			const y = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(f),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				S = e.eg.object({
					designated_approvers: e.eg.array(y)
				});
			let P = function(Y) {
				return Y.PENDING = "pending", Y.PENDING_UPDATE = "pending_update", Y.ENABLED = "enabled", Y.DISABLED = "disabled", Y
			}({});
			const T = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(P)
				}),
				R = e.eg.intersection([T, S]),
				D = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let C = function(Y) {
				return Y.UNLOCK_APPROVAL = "UnlockApprovalRequest", Y.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", Y.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", Y.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", Y
			}({});
			const q = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				ee = e.eg.object({
					message: e.eg.string
				}),
				X = e.eg.object({
					result: e.eg.object({
						entry: e.eg.object({
							address2: e.eg.string,
							address: e.eg.string,
							city: e.eg.string,
							country: e.eg.string,
							default: e.eg.boolean,
							email: e.eg.string,
							email_verified: e.eg.boolean,
							fax: e.eg.string,
							first_name: e.eg.string,
							id: e.eg.string,
							last_name: e.eg.string,
							organization: e.eg.string,
							phone: e.eg.string,
							state: e.eg.string,
							zip: e.eg.string
						})
					})
				})
		},
		"../../../common/util/types/src/utils/index.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Yd: function() {
					return e
				},
				vE: function() {
					return o
				}
			});

			function e(c) {
				return Object.keys(c)
			}
			const o = (c, m) => {
				if (m !== void 0) throw new Error("Unexpected object: " + c);
				return m
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(W, E, n) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(c) {
				if (!n.o(e, c)) return Promise.resolve().then(function() {
					var g = new Error("Cannot find module '" + c + "'");
					throw g.code = "MODULE_NOT_FOUND", g
				});
				var m = e[c],
					s = m[0];
				return n.e(m[1]).then(function() {
					return n.t(s, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", W.exports = o
		}
	}
]);

//# debugId=e9fde8f2-dd27-5207-9e75-064a6a47ec32