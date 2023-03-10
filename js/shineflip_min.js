(function() {
	"use strict";

	function n(n) {
		this.OPEN = n.open || !0,
			this.FULL_SCREEN = n.autoFitScreen || !1,
			this.BOOK_WIDTH = n.width || 950,
			this.BOOK_HEIGHT = n.height || 582,
			this.PAGE_WIDTH = n.page_width || 475,
			this.PAGE_HEIGHT = n.page_height || 582,
			this.PAGE_IMG_URL = n.page_url || "background.jpg",
			this.setup()
	}
	n.prototype = {
		setup: function() {
			function wt() {
				var i, r, n, t, u, f;
				return window.innerHeight && window.scrollMaxY ?
					(i = window.innerWidth + window.scrollMaxX, r = window.innerHeight + window.scrollMaxY) : document.body.scrollHeight > document.body.offsetHeight ? (i = document.body.scrollWidth, r = document.body.scrollHeight) : document.body && (i = document.body.offsetWidth, r = document.body.offsetHeight), window.innerHeight ? (n = window.innerWidth, t = window.innerHeight) : document.documentElement && document.documentElement.clientHeight ? (n = document.documentElement.clientWidth, t = document.documentElement.clientHeight) : document.body && (n = document.body.clientWidth, t = document.body.clientHeight), u = i < n ? n : i, f = r < t ? t : r, {
						PageW: u,
						PageH: f,
						WinW: n,
						WinH: t
					}
			}

			function ot(r) {
				var e, o;
				if(r.touches ? (u.x = r.touches[0].clientX - y.offsetLeft - v / 2, u.y = r.touches[0].clientY - y.offsetTop) : (u.x = r.clientX - y.offsetLeft - v / 2, u.y = r.clientY - y.offsetTop), f > -2 && f < n.length)
					if(Math.abs(u.x) < t && Math.abs(u.x) > t - g) u.x < 0 && f >= 0 ? n[f].onedge = !0 : u.x > 0 && h >= 0 && (i[h].onedge = !0);
					else {
						for(e = 0, o = n.length; e < o; e++) n[e].onedge = !1;
						for(e = 0, o = i.length; e < o; e++) i[e].onedge = !1
					}
			}

			function ei(n) {
				n.preventDefault(), ot(n)
			}

			function oi(n) {
				ot(n)
			}

			function kt(r) {
				Math.abs(u.x) < t && f > -2 && f < n.length && (u.x < 0 && f >= 0 ? n[f].dragging = !0 : u.x > 0 && h >= 0 && h < i.length - 1 && (i[h].dragging = !0), r.preventDefault()), it.x = u.x, it.y = u.y
			}

			function si(n) {
				n.preventDefault(), ot(n), kt(n)
			}

			function hi(n) {
				kt(n)
			}

			function dt(r) {
				for(var e = 0; e < n.length; e++) n[e].dragging && u.x > -(t / 2) && (n[e].target = 1, f = Math.max(f - 1, -1), h = Math.max(h - 1, 0), i[h].target = 1, i[h].progress = 1), n[e].onedge = !1, n[e].dragging = !1;
				for(e = 0; e < i.length; e++) i[e].dragging && u.x < t / 2 && (i[e].target = -1, h = Math.min(h + 1, i.length - 1), f = Math.min(f + 1, n.length - 1), n[f].target = -1, n[f].progress = -1), i[e].onedge = !1, i[e].dragging = !1;
				ot(r)
			}

			function ci(n) {
				it.x == u.x && it.y == u.y ? gt(n) : dt(n)
			}

			function lt(n) {
				dt(n)
			}

			function gt(r) {
				if(Math.abs(u.x) < t && Math.abs(u.x) > t - g && Math.abs(u.x - it.x) < 5 && Math.abs(u.y - it.y) < 5) {
					var e = !1,
						o = !1;
					u.x > 0 && h >= 0 && h < i.length - 1 && (i[h].dragging = !0, u.x = -1, lt(r), o = !0, e = !0), o || u.x < 0 && f >= 0 && f < n.length && (n[f].dragging = !0, u.x = 1, lt(r), e = !0)
				}
			}

			function li() {
				var a, e, o, f, c, l;
				for(r.clearRect(0, 0, s.width, s.height), a = !1, e = 0, o = n.length; e < o; e++) f = n[e], f.onedge && (c = Math.max(e - 1, 0), l = Math.min(e + 1, n.length - 1), n[c].dragging || n[l].dragging || i[h].dragging ? f.onedge = !1 : f.target = Math.max(Math.min(u.x / t, 1), -1)), f.dragging && (f.target = Math.max(Math.min(u.x / t, 1), -1)), f.progress += (f.target - f.progress) * yt, !f.dragging && !f.onedge && Math.abs(f.progress) < nt && (f.target = f.target < 0 ? -1 : 1, f.progress += (f.target - f.progress) * yt), Math.abs(f.progress) < nt && (a = !0, ri(f), ii(f, e));
				if(!a)
					for(e = 0, o = i.length; e < o; e++) f = i[e], f.onedge && (c = Math.max(e - 1, 0), l = Math.min(e + 1, i.length - 1), e + 1 == i.length || i[c].dragging || i[l].dragging ? f.onedge = !1 : f.target = Math.max(Math.min(u.x / t, 1), -1)), f.dragging && (f.target = Math.max(Math.min(u.x / t, 1), -1)), f.progress += (f.target - f.progress) * pt, !f.dragging && !f.onedge && Math.abs(f.progress) < nt && (f.target = f.target < 0 ? -1 : 1, f.progress += (f.target - f.progress) * pt), Math.abs(f.progress) < nt && (ri(f), ii(f, e))
			}

			function ni(t) {
				var u, r;
				k.style.zIndex = n.length + i.length + 1, k.width = v + o * 2, k.height = b + o * 2, k.style.left = -(o + tt) + "px", k.style.top = -(o + p) + "px", c.clearRect(0, 0, k.width, k.height), (t == 0 || t == 1) && f != n.length && (c.save(), c.translate(o + v / 2, p + o), u = c.createLinearGradient(0, 0, 22, 0), u.addColorStop(0, "rgba(0,0,0,0.2)"), u.addColorStop(.3, "rgba(0,0,0,0.08)"), u.addColorStop(1, "rgba(0,0,0,0)"), c.fillStyle = u, c.fillRect(0, 0, 22, e), c.fillStyle = "rgba(0,0,0,0.2)", c.fillRect(0, -p, 0, p), c.fillStyle = "rgba(0,0,0,0.2)", c.fillRect(0, e, 0, p), c.restore()), (t == 0 || t == -1) && f != -2 && (c.save(), c.translate(o + v / 2, p + o), c.fillStyle = "rgba(0,0,0,0.2)", c.fillRect(0, -p, 0, p), c.fillStyle = "rgba(0,0,0,0.2)", c.fillRect(0, e, 0, p), c.translate(-100, 0), r = c.createLinearGradient(0, 0, 100, 0), r.addColorStop(0, "rgba(0,0,0,0)"), r.addColorStop(.8, "rgba(0,0,0,0.05)"), r.addColorStop(.9, "rgba(0,0,0,0)"), r.addColorStop(.92, "rgba(0,0,0,0.02)"), r.addColorStop(1, "rgba(0,0,0,0.1)"), c.fillStyle = r, c.fillRect(0, 0, 100, e), c.restore())
			}

			function ti(i, r, u) {
				var f = t * .5 * (1 - i.progress),
					e = t * i.progress + f,
					o = Math.max(f, 0),
					c;
				if(r < n.length - 1 && n[r + 1].progress > -1) {
					var s = t * .5 * (1 - n[r + 1].progress),
						h = t * n[r + 1].progress + s,
						l = Math.max(s, 0);
					e * 2 + f > h * 2 ? (c = Math.max(Math.max(h - e, 0) * 2 - g, 0), u.page.style.width = c + "px") : u.page.style.width = o + "px"
				} else u.page.style.width = o + "px"
			}

			function ft(n, t, i, r, u, f) {
				t == "L" ? n.page.style.left = i : t == "R" && (n.page.style.right = i), n.page.className = r, n.page.style.zIndex = u, n.page.style.width = f
			}

			function ii(u, e) {
				var l, ut, y, c, b;
				s.style.zIndex = eval(k.style.zIndex) + 1;
				var d = t * .5 * (1 - u.progress),
					p = t * u.progress + d,
					a = Math.max(d, 0),
					o, w = v / 2 + p - a - tt;
				if(u.type == 0)
					if(u.dragging) o = n[f], Math.abs(u.progress) > ht && u.progress < 0 ? (o.progress < 0 && ft(o, "L", "0px", "page", o.index, t + "px"), s.style.zIndex = 0) : ft(o, "L", w + "px", "pageflip", eval(s.style.zIndex) + 1, a + "px"), h - 1 >= 0 && (i[h - 1].page.style.width = Math.max(p, 0) + "px");
					else {
						if(u.onedge ? (o = n[f], ti(u, e, o)) : u.target == -1 ? (o = n[f], o.page.style.width = a + "px", h - 1 >= 0 && (l = Math.max(p, 0), l > t - 1 && (l = t), i[h - 1].page.style.width = l + "px")) : (o = n[e], ti(u, e, o), h >= 0 && (l = Math.max(p, 0), l > t - 1 && (l = t), i[h].page.style.width = l + "px")), o.page.className = "pageflip", o.page.style.zIndex = eval(s.style.zIndex) + 1, o.page.style.left = w + "px", a > t - 2 && u.target == -1) {
							for(y = !1, c = 0; c < n.length; c++)
								if(n[c] != o && Math.abs(n[c].progress) < nt) {
									y = !0;
									break
								}
							y || (s.style.zIndex = 0, o.page.style.left = "0px", o.page.className = "page", o.page.style.zIndex = o.index, o.page.style.width = t + "px")
						}
						if(a < 1) {
							for(y = !1, c = 0; c < n.length; c++)
								if(n[c] != o && Math.abs(n[c].progress) < nt) {
									y = !0;
									break
								}
							y || (s.style.zIndex = 0), o.page.style.left = "0px", o.page.className = "page", o.page.style.zIndex = o.index, o.page.style.width = "0px"
						}
					}
				if(u.type == 1)
					if(l = Math.max(p, 0), l < 2 && (l = 0), u.page.style.width = l + "px", u.dragging) o = n[Math.min(f + 1, n.length - 1)], Math.abs(u.progress) > ht && u.progress < 0 ? (ft(o, "L", "0px", "page", o.index, t + "px"), s.style.zIndex = 0) : ft(o, "L", w + "px", "pageflip", eval(s.style.zIndex) + 1, a + "px");
					else {
						if(u.onedge) o = n[Math.min(f + 1, n.length - 1)], o.page.style.width = a + "px";
						else if(u.target == 1) o = n[Math.min(f + 1, n.length - 1)], o.page.style.width = a + "px";
						else if(o = n[e], e != h - 1 && i[e + 1].progress > -1) {
							var it = t * .5 * (1 - i[e + 1].progress),
								rt = t * i[e + 1].progress + it,
								et = Math.max(it, 0);
							p * 2 + d > rt * 2 && (ut = Math.max(Math.max(rt - p, 0) * 2 - g, 0), o.page.style.width = ut + "px")
						} else o.page.style.width = a + "px";
						if(Math.abs(u.progress) > ht && u.progress < 0) ft(o, "L", "0px", "page", o.index, t + "px"), navigator.userAgent.indexOf("iPhone") == -1 && r.clearRect(0, 0, s.width, s.height), s.style.zIndex = 0;
						else if(o.page.className = "pageflip", o.page.style.zIndex = eval(s.style.zIndex) + 1, o.page.style.left = w + "px", a < 2) {
							for(y = !1, c = 0, c = 0; c < n.length; c++)
								if(n[c] == o) break;
							for(b = 0; b < i.length; b++)
								if(i[b] != i[c] && Math.abs(i[b].progress) < nt) {
									y = !0;
									break
								}
							y || (s.style.zIndex = 0)
						}
					}
			}

			function ri(n) {
				var a, y, h;
				try {
					var f = 1 - Math.abs(n.progress),
						u = t * .5 * (1 - n.progress),
						i = t * n.progress + u,
						s = 20 * f,
						w = t * .5 * Math.max(Math.min(1 - n.progress, .5), 0),
						c = t * .5 * Math.max(Math.min(f, .5), 0),
						l = t * .5 * Math.max(Math.min(f, .5), 0);
					r.save(), r.translate(o + v / 2, p + o), r.strokeStyle = "rgba(0,0,0," + .05 * f + ")", r.lineWidth = 30 * f, r.beginPath(), r.moveTo(i - u, -s * .5), r.lineTo(i - u, e + s * .5), r.stroke(), a = r.createLinearGradient(i, 0, i + c, 0), a.addColorStop(0, "rgba(0,0,0," + f * .2 + ")"), a.addColorStop(.8, "rgba(0,0,0,0.0)"), r.fillStyle = a, r.beginPath(), r.moveTo(i, 0), r.lineTo(i + c, 0), r.lineTo(i + c, e), r.lineTo(i, e), r.fill(), y = r.createLinearGradient(i - u - l, 0, i - u, 0), y.addColorStop(0, "rgba(0,0,0,0.0)"), y.addColorStop(1, "rgba(0,0,0," + f * .15 + ")"), r.fillStyle = y, r.beginPath(), r.moveTo(i - u - l, 0), r.lineTo(i - u, 0), r.lineTo(i - u, e), r.lineTo(i - u - l, e), r.fill(), h = r.createLinearGradient(i - w, 0, i, 0), h.addColorStop(.35, "#fafafa"), h.addColorStop(.73, "#eeeeee"), h.addColorStop(.9, "#fafafa"), h.addColorStop(1, "#e2e2e2"), r.fillStyle = h, r.strokeStyle = "rgba(0,0,0,0.06)", r.lineWidth = .5, r.beginPath(), r.moveTo(i, 0), r.lineTo(i, e), r.quadraticCurveTo(i, e + s * 2, i - u, e + s), r.lineTo(i - u, -s), r.quadraticCurveTo(i, -s * 2, i, 0), r.fill(), r.stroke(), r.restore()
				} catch(b) {
					r.restore();
					return
				}
			}
			var at = this.FULL_SCREEN,
				o = 30,
				ui = this.OPEN,
				vt = .3,
				yt = vt,
				pt = vt,
				g = 50,
				st = 50,
				ai = 1e8,
				ht = .99,
				nt = .997,
				fi = 35,
				h = 0,
				f = -1,
				y, w, ct, d, l, rt, bt, ut;
			ui || (h = -1, f = -2);
			var a = [],
				i = [],
				n = [];
			var v = this.BOOK_WIDTH,
				b = this.BOOK_HEIGHT,
				t = this.PAGE_WIDTH,
				e = this.PAGE_HEIGHT,
				et = wt();
			at ? (v = et.WinW - o * 2, b = et.WinH - o * 2, t = (v - 40) / 2, e = b - 10) : (v = this.BOOK_WIDTH, b = this.BOOK_HEIGHT, t = this.PAGE_WIDTH, e = this.PAGE_HEIGHT);
			var p = (b - e) / 2,
				tt = v / 2 - t,
				s = this.canvas = document.getElementById("shineflip-canvas"),
				r = this._ = s.getContext("2d"),
				k = document.getElementById("shineflip-page-mid-canvas"),
				c = k.getContext("2d"),
				u = {
					x: 0,
					y: 0
				},
				it = {
					x: 0,
					y: 0
				};
			if(s.width = v + o * 2, s.height = b + o * 2, s.style.left = -(o + tt) + "px", s.style.top = -(o + p) + "px", y = document.getElementById("shineflip"), y.style.width = v + "px", y.style.height = b + "px", y.style.right = 10 + "px", y.style.left = 10 + "px", y.style.top = o + "px", w = document.getElementById("shineflip-pages"), w.style.left = tt + "px", w.style.top = p + "px", w.style.width = t * 2 + "px", w.style.height = e + "px", w.backgroundImage = w.style.backgroundImage, w.backgroundColor = w.style.backgroundColor, ct = y.getElementsByTagName("section"), ct.length != 0) {
				for(l = 0, rt = ct.length; l < rt; l++) a.push(ct[l]);
				for(a.length % 2 == 0 ? (d = document.createElement("section"), w.appendChild(d), a.push(d)) : (d = document.createElement("section"), w.appendChild(d), a.push(d), d = document.createElement("section"), w.appendChild(d), a.push(d)), l = 0, rt = a.length; l < rt; l++)(l + 1) % 2 == 0 ? (a[l].style.zIndex = Math.ceil((rt + l + 1) / 2), a[l].style.left = "0px", a[l].style.width = "0px", a[l].style.height = e + "px", n.push({
					index: a[l].style.zIndex,
					type: 0,
					progress: -1,
					target: -1,
					page: a[l],
					dragging: !1,
					onedge: !1
				})) : (a[l].style.zIndex = Math.ceil((rt - l) / 2), a[l].style.left = Math.ceil(t) + "px", a[l].style.width = t + "px", a[l].style.height = e + "px", i.push({
					index: a[l].style.zIndex,
					type: 1,
					progress: 1,
					target: 1,
					page: a[l],
					dragging: !1,
					onedge: !1
				})), bt = a[l].getElementsByTagName("div2"), bt.length > 0 && (ut = bt[0], ut.addEventListener("mousedown", function(n) {
					n.stopPropagation()
				}, !1), ut.style.width = "", ut.style.height = "", ut.style.left = 0, ut.style.top = 0);
				i.length != 1 && (at && (window.onresize = function() {
					var f = et,
						u = wt(),
						k = u.WinW / f.WinW,
						d = u.WinH / f.WinH,
						l, h, c, r;
					for(v = u.WinW - o * 2, b = u.WinH - o * 2, t = (v - 40) / 2, e = b - 10, p = (b - e) / 2, tt = v / 2 - t, s.width = v + o * 2, s.height = b + o * 2, s.style.left = -(o + tt) + "px", s.style.top = -(o + p) + "px", y.style.width = v + "px", y.style.height = b + "px", w.style.left = tt + "px", w.style.top = p + "px", w.style.width = t * 2 + "px", w.style.height = e + "px", r = 0, l = a.length; r < l; r++) h = a[r].getElementsByTagName("div2"), h.length > 0 && (c = h[0], c.style.width = t - g * 2 + "px", c.style.height = e - st * 2 + "px");
					for(r = 0; r < n.length; r++) n[r].page.style.width.replace("px", "") > 2 && (n[r].page.style.width = t + "px"), n[r].page.style.height = e + "px";
					for(r = 0; r < i.length; r++) i[r].page.style.width.replace("px", "") > 2 && (i[r].page.style.width = t + "px"), i[r].page.style.left = Math.ceil(t) + "px", i[r].page.style.height = e + "px";
					ni(0), et = u
				}), setInterval(li, 1e3 / fi), ni(0), y.addEventListener("touchmove", ei), y.addEventListener("touchstart", si), y.addEventListener("touchend", ci), y.addEventListener("mousemove", oi, !1), y.addEventListener("mousedown", hi, !1), y.addEventListener("mouseup", lt, !1), y.addEventListener("click", gt, !1))
			}
		}
	}, window.ShineFlip = n
})()