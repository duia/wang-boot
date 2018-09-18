if (! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length,
            n = Z.type(t);
        return "function" === n || Z.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (Z.isFunction(e)) return Z.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return Z.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (ae.test(e)) return Z.filter(e, t, n);
            e = Z.filter(e, t)
        }
        return Z.grep(t, function(t) {
            return V.call(e, t) >= 0 !== n
        })
    }

    function o(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function r(t) {
        var e = de[t] = {};
        return Z.each(t.match(fe) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + a.uid++
    }

    function l(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(xe, "-$1").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : be.test(n) ? Z.parseJSON(n) : n
                } catch (o) {}
                ye.set(t, e, n)
            } else n = void 0;
        return n
    }

    function c() {
        return !0
    }

    function u() {
        return !1
    }

    function p() {
        try {
            return J.activeElement
        } catch (t) {}
    }

    function h(t, e) {
        return Z.nodeName(t, "table") && Z.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function f(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function d(t) {
        var e = Oe.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function g(t, e) {
        for (var n = 0, i = t.length; i > n; n++) ve.set(t[n], "globalEval", !e || ve.get(e[n], "globalEval"))
    }

    function m(t, e) {
        var n, i, o, r, s, a, l, c;
        if (1 === e.nodeType) {
            if (ve.hasData(t) && (r = ve.access(t), s = ve.set(e, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c)
                    for (n = 0, i = c[o].length; i > n; n++) Z.event.add(e, o, c[o][n])
            }
            ye.hasData(t) && (a = ye.access(t), l = Z.extend({}, a), ye.set(e, l))
        }
    }

    function v(t, e) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && Z.nodeName(t, e) ? Z.merge([t], n) : n
    }

    function y(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && ke.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function b(e, n) {
        var i, o = Z(n.createElement(e)).appendTo(n.body),
            r = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : Z.css(o[0], "display");
        return o.detach(), r
    }

    function x(t) {
        var e = J,
            n = Me[t];
        return n || (n = b(t, e), "none" !== n && n || (Re = (Re || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Re[0].contentDocument, e.write(), e.close(), n = b(t, e), Re.detach()), Me[t] = n), n
    }

    function w(t, e, n) {
        var i, o, r, s, a = t.style;
        return n = n || _e(t), n && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || Z.contains(t.ownerDocument, t) || (s = Z.style(t, e)), Be.test(s) && We.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function C(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function T(t, e) {
        if (e in t) return e;
        for (var n = e[0].toUpperCase() + e.slice(1), i = e, o = Ge.length; o--;)
            if (e = Ge[o] + n, e in t) return e;
        return i
    }

    function k(t, e, n) {
        var i = Ue.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function E(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += Z.css(t, n + Ce[r], !0, o)), i ? ("content" === n && (s -= Z.css(t, "padding" + Ce[r], !0, o)), "margin" !== n && (s -= Z.css(t, "border" + Ce[r] + "Width", !0, o))) : (s += Z.css(t, "padding" + Ce[r], !0, o), "padding" !== n && (s += Z.css(t, "border" + Ce[r] + "Width", !0, o)));
        return s
    }

    function S(t, e, n) {
        var i = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = _e(t),
            s = "border-box" === Z.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = w(t, e, r), (0 > o || null == o) && (o = t.style[e]), Be.test(o)) return o;
            i = s && (Y.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + E(t, e, n || (s ? "border" : "content"), i, r) + "px"
    }

    function $(t, e) {
        for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (r[s] = ve.get(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Te(i) && (r[s] = ve.access(i, "olddisplay", x(i.nodeName)))) : (o = Te(i), "none" === n && o || ve.set(i, "olddisplay", o ? n : Z.css(i, "display"))));
        for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
        return t
    }

    function D(t, e, n, i, o) {
        return new D.prototype.init(t, e, n, i, o)
    }

    function N() {
        return setTimeout(function() {
            Ye = void 0
        }), Ye = Z.now()
    }

    function j(t, e) {
        var n, i = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Ce[i], o["margin" + n] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o
    }

    function A(t, e, n) {
        for (var i, o = (nn[e] || []).concat(nn["*"]), r = 0, s = o.length; s > r; r++)
            if (i = o[r].call(n, e, t)) return i
    }

    function L(t, e, n) {
        var i, o, r, s, a, l, c, u, p = this,
            h = {},
            f = t.style,
            d = t.nodeType && Te(t),
            g = ve.get(t, "fxshow");
        n.queue || (a = Z._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, p.always(function() {
            p.always(function() {
                a.unqueued--, Z.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = Z.css(t, "display"), u = "none" === c ? ve.get(t, "olddisplay") || x(t.nodeName) : c, "inline" === u && "none" === Z.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (o = e[i], Ke.exec(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (d ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i]) continue;
                    d = !0
                }
                h[i] = g && g[i] || Z.style(t, i)
            } else c = void 0;
        if (Z.isEmptyObject(h)) "inline" === ("none" === c ? x(t.nodeName) : c) && (f.display = c);
        else {
            g ? "hidden" in g && (d = g.hidden) : g = ve.access(t, "fxshow", {}), r && (g.hidden = !d), d ? Z(t).show() : p.done(function() {
                Z(t).hide()
            }), p.done(function() {
                var e;
                ve.remove(t, "fxshow");
                for (e in h) Z.style(t, e, h[e])
            });
            for (i in h) s = A(d ? g[i] : 0, i, p), i in g || (g[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function H(t, e) {
        var n, i, o, r, s;
        for (n in t)
            if (i = Z.camelCase(n), o = e[i], r = t[n], Z.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = Z.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete t[i];
                for (n in r) n in t || (t[n] = r[n], e[n] = o)
            } else e[i] = o
    }

    function q(t, e, n) {
        var i, o, r = 0,
            s = en.length,
            a = Z.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = Ye || N(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                return a.notifyWith(t, [c, r, n]), 1 > r && l ? n : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: Z.extend({}, e),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Ye || N(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = Z.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (H(u, c.opts.specialEasing); s > r; r++)
            if (i = en[r].call(c, t, u, c.opts)) return i;
        return Z.map(u, A, c), Z.isFunction(c.opts.start) && c.opts.start.call(t, c), Z.fx.timer(Z.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function P(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0,
                r = e.toLowerCase().match(fe) || [];
            if (Z.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function O(t, e, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, Z.each(t[a] || [], function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            s = t === xn;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function F(t, e) {
        var n, i, o = Z.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && Z.extend(!0, t, i), t
    }

    function I(t, e, n) {
        for (var i, o, r, s, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function R(t, e, n, i) {
        var o, r, s, a, l, c = {},
            u = t.dataTypes.slice();
        if (u[1])
            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (r = u.shift(); r;)
            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = c[l + " " + r] || c["* " + r], !s)
                for (o in c)
                    if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: s ? p : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function M(t, e, n, i) {
        var o;
        if (Z.isArray(e)) Z.each(e, function(e, o) {
            n || En.test(t) ? i(t, o) : M(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
        });
        else if (n || "object" !== Z.type(e)) i(t, e);
        else
            for (o in e) M(t + "[" + o + "]", e[o], n, i)
    }

    function W(t) {
        return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var B = [],
        _ = B.slice,
        z = B.concat,
        U = B.push,
        V = B.indexOf,
        X = {},
        Q = X.toString,
        G = X.hasOwnProperty,
        Y = {},
        J = t.document,
        K = "2.1.3",
        Z = function(t, e) {
            return new Z.fn.init(t, e)
        },
        te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ee = /^-ms-/,
        ne = /-([\da-z])/gi,
        ie = function(t, e) {
            return e.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return _.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : _.call(this)
        },
        pushStack: function(t) {
            var e = Z.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return Z.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(Z.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(_.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: B.sort,
        splice: B.splice
    }, Z.extend = Z.fn.extend = function() {
        var t, e, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = s[e], i = t[e], s !== i && (c && i && (Z.isPlainObject(i) || (o = Z.isArray(i))) ? (o ? (o = !1, r = n && Z.isArray(n) ? n : []) : r = n && Z.isPlainObject(n) ? n : {}, s[e] = Z.extend(c, r, i)) : void 0 !== i && (s[e] = i));
        return s
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === Z.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !Z.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" !== Z.type(t) || t.nodeType || Z.isWindow(t) ? !1 : t.constructor && !G.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? X[Q.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            t = Z.trim(t), t && (1 === t.indexOf("use strict") ? (e = J.createElement("script"), e.text = t, J.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(ee, "ms-").replace(ne, ie)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var o, r = 0,
                s = t.length,
                a = n(t);
            if (i) {
                if (a)
                    for (; s > r && (o = e.apply(t[r], i), o !== !1); r++);
                else
                    for (r in t)
                        if (o = e.apply(t[r], i), o === !1) break
            } else if (a)
                for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
            else
                for (r in t)
                    if (o = e.call(t[r], r, t[r]), o === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(te, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? Z.merge(i, "string" == typeof t ? [t] : t) : U.call(i, t)), i
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : V.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; n > i; i++) t[o++] = e[i];
            return t.length = o, t
        },
        grep: function(t, e, n) {
            for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++) i = !e(t[r], r), i !== a && o.push(t[r]);
            return o
        },
        map: function(t, e, i) {
            var o, r = 0,
                s = t.length,
                a = n(t),
                l = [];
            if (a)
                for (; s > r; r++) o = e(t[r], r, i), null != o && l.push(o);
            else
                for (r in t) o = e(t[r], r, i), null != o && l.push(o);
            return z.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, o;
            return "string" == typeof e && (n = t[e], e = t, t = n), Z.isFunction(t) ? (i = _.call(arguments, 2), o = function() {
                return t.apply(e || this, i.concat(_.call(arguments)))
            }, o.guid = t.guid = t.guid || Z.guid++, o) : void 0
        },
        now: Date.now,
        support: Y
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        X["[object " + e + "]"] = e.toLowerCase()
    });
    var oe = function(t) {
        function e(t, e, n, i) {
            var o, r, s, a, l, c, p, f, d, g;
            if ((e ? e.ownerDocument || e : M) !== L && A(e), e = e || L, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!i && q) {
                if (11 !== a && (o = ye.exec(t)))
                    if (s = o[1]) {
                        if (9 === a) {
                            if (r = e.getElementById(s), !r || !r.parentNode) return n;
                            if (r.id === s) return n.push(r), n
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && I(e, r) && r.id === s) return n.push(r), n
                    } else {
                        if (o[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = o[3]) && w.getElementsByClassName) return K.apply(n, e.getElementsByClassName(s)), n
                    }
                if (w.qsa && (!P || !P.test(t))) {
                    if (f = p = R, d = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (c = E(t), (p = e.getAttribute("id")) ? f = p.replace(xe, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + h(c[l]);
                        d = be.test(t) && u(e.parentNode) || e, g = c.join(",")
                    }
                    if (g) try {
                        return K.apply(n, d.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        p || e.removeAttribute("id")
                    }
                }
            }
            return $(t.replace(le, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[R] = !0, t
        }

        function o(t) {
            var e = L.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var n = t.split("|"), i = t.length; i--;) C.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function c(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function u(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function p() {}

        function h(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                o = n && "parentNode" === i,
                r = B++;
            return e.first ? function(e, n, r) {
                for (; e = e[i];)
                    if (1 === e.nodeType || o) return t(e, n, r)
            } : function(e, n, s) {
                var a, l, c = [W, r];
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) {
                            if (l = e[R] || (e[R] = {}), (a = l[i]) && a[0] === W && a[1] === r) return c[2] = a[2];
                            if (l[i] = c, c[2] = t(e, n, s)) return !0
                        }
            }
        }

        function d(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--;)
                    if (!t[o](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, i) {
            for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
            return i
        }

        function m(t, e, n, i, o) {
            for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), c && e.push(a));
            return s
        }

        function v(t, e, n, o, r, s) {
            return o && !o[R] && (o = v(o)), r && !r[R] && (r = v(r, s)), i(function(i, s, a, l) {
                var c, u, p, h = [],
                    f = [],
                    d = s.length,
                    v = i || g(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? v : m(v, h, t, a, l),
                    b = n ? r || (i ? t : d || o) ? [] : s : y;
                if (n && n(y, b, a, l), o)
                    for (c = m(b, f), o(c, [], a, l), u = c.length; u--;)(p = c[u]) && (b[f[u]] = !(y[f[u]] = p));
                if (i) {
                    if (r || t) {
                        if (r) {
                            for (c = [], u = b.length; u--;)(p = b[u]) && c.push(y[u] = p);
                            r(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(p = b[u]) && (c = r ? te(i, p) : h[u]) > -1 && (i[c] = !(s[c] = p))
                    }
                } else b = m(b === s ? b.splice(d, b.length) : b), r ? r(null, s, b, l) : K.apply(s, b)
            })
        }

        function y(t) {
            for (var e, n, i, o = t.length, r = C.relative[t[0].type], s = r || C.relative[" "], a = r ? 1 : 0, l = f(function(t) {
                return t === e
            }, s, !0), c = f(function(t) {
                return te(e, t) > -1
            }, s, !0), u = [
                function(t, n, i) {
                    var o = !r && (i || n !== D) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null, o
                }
            ]; o > a; a++)
                if (n = C.relative[t[a].type]) u = [f(d(u), n)];
                else {
                    if (n = C.filter[t[a].type].apply(null, t[a].matches), n[R]) {
                        for (i = ++a; o > i && !C.relative[t[i].type]; i++);
                        return v(a > 1 && d(u), a > 1 && h(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && h(t))
                    }
                    u.push(n)
                }
            return d(u)
        }

        function b(t, n) {
            var o = n.length > 0,
                r = t.length > 0,
                s = function(i, s, a, l, c) {
                    var u, p, h, f = 0,
                        d = "0",
                        g = i && [],
                        v = [],
                        y = D,
                        b = i || r && C.find.TAG("*", c),
                        x = W += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (c && (D = s !== L && s); d !== w && null != (u = b[d]); d++) {
                        if (r && u) {
                            for (p = 0; h = t[p++];)
                                if (h(u, s, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (W = x)
                        }
                        o && ((u = !h && u) && f--, i && g.push(u))
                    }
                    if (f += d, o && d !== f) {
                        for (p = 0; h = n[p++];) h(g, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; d--;) g[d] || v[d] || (v[d] = Y.call(l));
                            v = m(v)
                        }
                        K.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (W = x, D = y), g
                };
            return o ? i(s) : s
        }
        var x, w, C, T, k, E, S, $, D, N, j, A, L, H, q, P, O, F, I, R = "sizzle" + 1 * new Date,
            M = t.document,
            W = 0,
            B = 0,
            _ = n(),
            z = n(),
            U = n(),
            V = function(t, e) {
                return t === e && (j = !0), 0
            },
            X = 1 << 31,
            Q = {}.hasOwnProperty,
            G = [],
            Y = G.pop,
            J = G.push,
            K = G.push,
            Z = G.slice,
            te = function(t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ie.replace("w", "w#"),
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
            se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ce = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            pe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            he = new RegExp(se),
            fe = new RegExp("^" + oe + "$"),
            de = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            xe = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Ce = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Te = function() {
                A()
            };
        try {
            K.apply(G = Z.call(M.childNodes), M.childNodes), G[M.childNodes.length].nodeType
        } catch (ke) {
            K = {
                apply: G.length ? function(t, e) {
                    J.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        w = e.support = {}, k = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, A = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : M;
            return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, H = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), q = !k(i), w.attributes = o(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = o(function(t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(i.getElementsByClassName), w.getById = o(function(t) {
                return H.appendChild(t).id = R, !i.getElementsByName || !i.getElementsByName(R).length
            }), w.getById ? (C.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && q) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function(t) {
                var e = t.replace(we, Ce);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete C.find.ID, C.filter.ID = function(t) {
                var e = t.replace(we, Ce);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), C.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, C.find.CLASS = w.getElementsByClassName && function(t, e) {
                return q ? e.getElementsByClassName(t) : void 0
            }, O = [], P = [], (w.qsa = ve.test(i.querySelectorAll)) && (o(function(t) {
                H.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + R + "-]").length || P.push("~="), t.querySelectorAll(":checked").length || P.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || P.push(".#.+[+~]")
            }), o(function(t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(",.*:")
            })), (w.matchesSelector = ve.test(F = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(t) {
                w.disconnectedMatch = F.call(t, "div"), F.call(t, "[s!='']:x"), O.push("!=", se)
            }), P = P.length && new RegExp(P.join("|")), O = O.length && new RegExp(O.join("|")), e = ve.test(H.compareDocumentPosition), I = e || ve.test(H.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, V = e ? function(t, e) {
                if (t === e) return j = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === M && I(M, t) ? -1 : e === i || e.ownerDocument === M && I(M, e) ? 1 : N ? te(N, t) - te(N, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return j = !0, 0;
                var n, o = 0,
                    r = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    c = [e];
                if (!r || !a) return t === i ? -1 : e === i ? 1 : r ? -1 : a ? 1 : N ? te(N, t) - te(N, e) : 0;
                if (r === a) return s(t, e);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (n = e; n = n.parentNode;) c.unshift(n);
                for (; l[o] === c[o];) o++;
                return o ? s(l[o], c[o]) : l[o] === M ? -1 : c[o] === M ? 1 : 0
            }, i) : L
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== L && A(t), n = n.replace(pe, "='$1']"), !(!w.matchesSelector || !q || O && O.test(n) || P && P.test(n))) try {
                var i = F.call(t, n);
                if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (o) {}
            return e(n, L, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== L && A(t), I(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== L && A(t);
            var n = C.attrHandle[e.toLowerCase()],
                i = n && Q.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !q) : void 0;
            return void 0 !== i ? i : w.attributes || !q ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                o = 0;
            if (j = !w.detectDuplicates, N = !w.sortStable && t.slice(0), t.sort(V), j) {
                for (; e = t[o++];) e === t[o] && (i = n.push(o));
                for (; i--;) t.splice(n[i], 1)
            }
            return N = null, t
        }, T = e.getText = function(t) {
            var e, n = "",
                i = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else
                for (; e = t[i++];) n += T(e);
            return n
        }, C = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(we, Ce), t[3] = (t[3] || t[4] || t[5] || "").replace(we, Ce), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return de.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && he.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(we, Ce).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = _[t + " "];
                    return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && _(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, o) {
                    var r = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === o ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var c, u, p, h, f, d, g = r !== s ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (p = e; p = p[g];)
                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    d = g = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? m.firstChild : m.lastChild], s && y) {
                                for (u = m[R] || (m[R] = {}), c = u[t] || [], f = c[0] === W && c[1], h = c[0] === W && c[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (h = f = 0) || d.pop();)
                                    if (1 === p.nodeType && ++h && p === e) {
                                        u[t] = [W, f, h];
                                        break
                                    }
                            } else if (y && (c = (e[R] || (e[R] = {}))[t]) && c[0] === W) h = c[1];
                            else
                                for (;
                                    (p = ++f && p && p[g] || (h = f = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++h || (y && ((p[R] || (p[R] = {}))[t] = [W, h]), p !== e)););
                            return h -= o, h === i || h % i === 0 && h / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var o, r = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[R] ? r(n) : r.length > 1 ? (o = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, o = r(t, n), s = o.length; s--;) i = te(t, o[s]), t[i] = !(e[i] = o[s])
                    }) : function(t) {
                        return r(t, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        o = S(t.replace(le, "$1"));
                    return o[R] ? i(function(t, e, n, i) {
                        for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function(t, i, r) {
                        return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(we, Ce),
                        function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function(t) {
                    return fe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, Ce).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = q ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === H
                },
                focus: function(t) {
                    return t === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !C.pseudos.empty(t)
                },
                header: function(t) {
                    return me.test(t.nodeName)
                },
                input: function(t) {
                    return ge.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: c(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: c(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: c(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[x] = a(x);
        for (x in {
            submit: !0,
            reset: !0
        }) C.pseudos[x] = l(x);
        return p.prototype = C.filters = C.pseudos, C.setFilters = new p, E = e.tokenize = function(t, n) {
            var i, o, r, s, a, l, c, u = z[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = t, l = [], c = C.preFilter; a;) {
                (!i || (o = ce.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ue.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(le, " ")
                }), a = a.slice(i.length));
                for (s in C.filter)!(o = de[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : z(t, l).slice(0)
        }, S = e.compile = function(t, e) {
            var n, i = [],
                o = [],
                r = U[t + " "];
            if (!r) {
                for (e || (e = E(t)), n = e.length; n--;) r = y(e[n]), r[R] ? i.push(r) : o.push(r);
                r = U(t, b(o, i)), r.selector = t
            }
            return r
        }, $ = e.select = function(t, e, n, i) {
            var o, r, s, a, l, c = "function" == typeof t && t,
                p = !i && E(t = c.selector || t);
            if (n = n || [], 1 === p.length) {
                if (r = p[0] = p[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && q && C.relative[r[1].type]) {
                    if (e = (C.find.ID(s.matches[0].replace(we, Ce), e) || [])[0], !e) return n;
                    c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (o = de.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !C.relative[a = s.type]);)
                    if ((l = C.find[a]) && (i = l(s.matches[0].replace(we, Ce), be.test(r[0].type) && u(e.parentNode) || e))) {
                        if (r.splice(o, 1), t = i.length && h(r), !t) return K.apply(n, i), n;
                        break
                    }
            }
            return (c || S(t, p))(i, e, !q, n, be.test(t) && u(e.parentNode) || e), n
        }, w.sortStable = R.split("").sort(V).join("") === R, w.detectDuplicates = !!j, A(), w.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(L.createElement("div"))
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), o(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(ee, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    Z.find = oe, Z.expr = oe.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = oe.uniqueSort, Z.text = oe.getText, Z.isXMLDoc = oe.isXML, Z.contains = oe.contains;
    var re = Z.expr.match.needsContext,
        se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    Z.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? Z.find.matchesSelector(i, t) ? [i] : [] : Z.find.matches(t, Z.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, Z.fn.extend({
        find: function(t) {
            var e, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof t) return this.pushStack(Z(t).filter(function() {
                for (e = 0; n > e; e++)
                    if (Z.contains(o[e], this)) return !0
            }));
            for (e = 0; n > e; e++) Z.find(t, o[e], i);
            return i = this.pushStack(n > 1 ? Z.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && re.test(t) ? Z(t) : t || [], !1).length
        }
    });
    var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ue = Z.fn.init = function(t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ce.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || le).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof Z ? e[0] : e, Z.merge(this, Z.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : J, !0)), se.test(n[1]) && Z.isPlainObject(e))
                        for (n in e) Z.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return i = J.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = J, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? "undefined" != typeof le.ready ? le.ready(t) : t(Z) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this))
        };
    ue.prototype = Z.fn, le = Z(J);
    var pe = /^(?:parents|prev(?:Until|All))/,
        he = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(t, e, n) {
            for (var i = [], o = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && Z(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), Z.fn.extend({
        has: function(t) {
            var e = Z(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++)
                    if (Z.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, o = this.length, r = [], s = re.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, t))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? Z.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? V.call(Z(t), this[0]) : V.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), Z.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return Z.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return Z.dir(t, "parentNode", n)
        },
        next: function(t) {
            return o(t, "nextSibling")
        },
        prev: function(t) {
            return o(t, "previousSibling")
        },
        nextAll: function(t) {
            return Z.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return Z.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return Z.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return Z.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return Z.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return Z.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || Z.merge([], t.childNodes)
        }
    }, function(t, e) {
        Z.fn[t] = function(n, i) {
            var o = Z.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = Z.filter(i, o)), this.length > 1 && (he[t] || Z.unique(o), pe.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var fe = /\S+/g,
        de = {};
    Z.Callbacks = function(t) {
        t = "string" == typeof t ? de[t] || r(t) : Z.extend({}, t);
        var e, n, i, o, s, a, l = [],
            c = !t.once && [],
            u = function(r) {
                for (e = t.memory && r, n = !0, a = o || 0, o = 0, s = l.length, i = !0; l && s > a; a++)
                    if (l[a].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                i = !1, l && (c ? c.length && u(c.shift()) : e ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function r(e) {
                            Z.each(e, function(e, n) {
                                var i = Z.type(n);
                                "function" === i ? t.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), i ? s = l.length : e && (o = n, u(e))
                    }
                    return this
                },
                remove: function() {
                    return l && Z.each(arguments, function(t, e) {
                        for (var n;
                            (n = Z.inArray(e, l, n)) > -1;) l.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                    }), this
                },
                has: function(t) {
                    return t ? Z.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = c = e = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, e || p.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(t, e) {
                    return !l || n && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? c.push(e) : u(e)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return p
    }, Z.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(e, function(e, r) {
                                var s = Z.isFunction(t[e]) && t[e];
                                o[r[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && Z.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? Z.extend(t, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, Z.each(e, function(t, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, n, i, o = 0,
                r = _.call(arguments),
                s = r.length,
                a = 1 !== s || t && Z.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : Z.Deferred(),
                c = function(t, n, i) {
                    return function(o) {
                        n[t] = this, i[t] = arguments.length > 1 ? _.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && Z.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, e)) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    });
    var ge;
    Z.fn.ready = function(t) {
        return Z.ready.promise().done(t), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, t !== !0 && --Z.readyWait > 0 || (ge.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function(e) {
        return ge || (ge = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), ge.promise(e)
    }, Z.ready.promise();
    var me = Z.access = function(t, e, n, i, o, r, s) {
        var a = 0,
            l = t.length,
            c = null == n;
        if ("object" === Z.type(n)) {
            o = !0;
            for (a in n) Z.access(t, e, a, n[a], !0, r, s)
        } else if (void 0 !== i && (o = !0, Z.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
            return c.call(Z(t), n)
        })), e))
            for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
    };
    Z.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function(t) {
            if (!a.accepts(t)) return 0;
            var e = {},
                n = t[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    e[this.expando] = {
                        value: n
                    }, Object.defineProperties(t, e)
                } catch (i) {
                    e[this.expando] = n, Z.extend(t, e)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(t, e, n) {
            var i, o = this.key(t),
                r = this.cache[o];
            if ("string" == typeof e) r[e] = n;
            else if (Z.isEmptyObject(r)) Z.extend(this.cache[o], e);
            else
                for (i in e) r[i] = e[i];
            return r
        },
        get: function(t, e) {
            var n = this.cache[this.key(t)];
            return void 0 === e ? n : n[e]
        },
        access: function(t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, Z.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i, o, r = this.key(t),
                s = this.cache[r];
            if (void 0 === e) this.cache[r] = {};
            else {
                Z.isArray(e) ? i = e.concat(e.map(Z.camelCase)) : (o = Z.camelCase(e), e in s ? i = [e, o] : (i = o, i = i in s ? [i] : i.match(fe) || [])), n = i.length;
                for (; n--;) delete s[i[n]]
            }
        },
        hasData: function(t) {
            return !Z.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var ve = new a,
        ye = new a,
        be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        xe = /([A-Z])/g;
    Z.extend({
        hasData: function(t) {
            return ye.hasData(t) || ve.hasData(t)
        },
        data: function(t, e, n) {
            return ye.access(t, e, n)
        },
        removeData: function(t, e) {
            ye.remove(t, e)
        },
        _data: function(t, e, n) {
            return ve.access(t, e, n)
        },
        _removeData: function(t, e) {
            ve.remove(t, e)
        }
    }), Z.fn.extend({
        data: function(t, e) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = ye.get(r), 1 === r.nodeType && !ve.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = Z.camelCase(i.slice(5)), l(r, i, o[i])));
                    ve.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                ye.set(this, t)
            }) : me(this, function(e) {
                var n, i = Z.camelCase(t);
                if (r && void 0 === e) {
                    if (n = ye.get(r, t), void 0 !== n) return n;
                    if (n = ye.get(r, i), void 0 !== n) return n;
                    if (n = l(r, i, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ye.get(this, i);
                    ye.set(this, i, e), -1 !== t.indexOf("-") && void 0 !== n && ye.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                ye.remove(this, t)
            })
        }
    }), Z.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = ve.get(t, e), n && (!i || Z.isArray(n) ? i = ve.access(t, e, Z.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = Z.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = Z._queueHooks(t, e),
                s = function() {
                    Z.dequeue(t, e)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return ve.get(t, n) || ve.access(t, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    ve.remove(t, [e + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? Z.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = Z.queue(this, t, e);
                Z._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && Z.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                Z.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                o = Z.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = ve.get(r[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ce = ["Top", "Right", "Bottom", "Left"],
        Te = function(t, e) {
            return t = e || t, "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
        },
        ke = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = J.createDocumentFragment(),
            e = t.appendChild(J.createElement("div")),
            n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), Y.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Ee = "undefined";
    Y.focusinBubbles = "onfocusin" in t;
    var Se = /^key/,
        $e = /^(?:mouse|pointer|contextmenu)|click/,
        De = /^(?:focusinfocus|focusoutblur)$/,
        Ne = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, l, c, u, p, h, f, d, g, m = ve.get(t);
            if (m)
                for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = Z.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                    return typeof Z !== Ee && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(fe) || [""], c = e.length; c--;) a = Ne.exec(e[c]) || [], f = g = a[1], d = (a[2] || "").split(".").sort(), f && (p = Z.event.special[f] || {}, f = (o ? p.delegateType : p.bindType) || f, p = Z.event.special[f] || {}, u = Z.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && Z.expr.match.needsContext.test(o),
                    namespace: d.join(".")
                }, r), (h = l[f]) || (h = l[f] = [], h.delegateCount = 0, p.setup && p.setup.call(t, i, d, s) !== !1 || t.addEventListener && t.addEventListener(f, s, !1)), p.add && (p.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), Z.event.global[f] = !0)
        },
        remove: function(t, e, n, i, o) {
            var r, s, a, l, c, u, p, h, f, d, g, m = ve.hasData(t) && ve.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(fe) || [""], c = e.length; c--;)
                    if (a = Ne.exec(e[c]) || [], f = g = a[1], d = (a[2] || "").split(".").sort(), f) {
                        for (p = Z.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, h = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, p.remove && p.remove.call(t, u));
                        s && !h.length && (p.teardown && p.teardown.call(t, d, m.handle) !== !1 || Z.removeEvent(t, f, m.handle), delete l[f])
                    } else
                        for (f in l) Z.event.remove(t, f + e[c], n, i, !0);
                Z.isEmptyObject(l) && (delete m.handle, ve.remove(t, "events"))
            }
        },
        trigger: function(e, n, i, o) {
            var r, s, a, l, c, u, p, h = [i || J],
                f = G.call(e, "type") ? e.type : e,
                d = G.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !De.test(f + Z.event.triggered) && (f.indexOf(".") >= 0 && (d = f.split("."), f = d.shift(), d.sort()), c = f.indexOf(":") < 0 && "on" + f, e = e[Z.expando] ? e : new Z.Event(f, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : Z.makeArray(n, [e]), p = Z.event.special[f] || {}, o || !p.trigger || p.trigger.apply(i, n) !== !1)) {
                if (!o && !p.noBubble && !Z.isWindow(i)) {
                    for (l = p.delegateType || f, De.test(l + f) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                    a === (i.ownerDocument || J) && h.push(a.defaultView || a.parentWindow || t)
                }
                for (r = 0;
                    (s = h[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : p.bindType || f, u = (ve.get(s, "events") || {})[e.type] && ve.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && Z.acceptData(s) && (e.result = u.apply(s, n), e.result === !1 && e.preventDefault());
                return e.type = f, o || e.isDefaultPrevented() || p._default && p._default.apply(h.pop(), n) !== !1 || !Z.acceptData(i) || c && Z.isFunction(i[f]) && !Z.isWindow(i) && (a = i[c], a && (i[c] = null), Z.event.triggered = f, i[f](), Z.event.triggered = void 0, a && (i[c] = a)), e.result
            }
        },
        dispatch: function(t) {
            t = Z.event.fix(t);
            var e, n, i, o, r, s = [],
                a = _.call(arguments),
                l = (ve.get(this, "events") || {})[t.type] || [],
                c = Z.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (s = Z.event.handlers.call(this, t, l), e = 0;
                    (o = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, i = ((Z.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, o, r, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== t.type) {
                        for (i = [], n = 0; a > n; n++) r = e[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? Z(o, this).index(l) >= 0 : Z.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, o, r = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || J, i = n.documentElement, o = n.body, t.pageX = e.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[Z.expando]) return t;
            var e, n, i, o = t.type,
                r = t,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = $e.test(o) ? this.mouseHooks : Se.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new Z.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
            return t.target || (t.target = J), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, r) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== p() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return Z.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var o = Z.extend(new Z.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? Z.event.trigger(o, null, e) : Z.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }, Z.Event = function(t, e) {
        return this instanceof Z.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? c : u) : this.type = t, e && Z.extend(this, e), this.timeStamp = t && t.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(t, e)
    }, Z.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        Z.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return (!o || o !== i && !Z.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), Y.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            Z.event.simulate(e, t.target, Z.event.fix(t), !0)
        };
        Z.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = ve.access(i, e);
                o || i.addEventListener(t, n, !0), ve.access(i, e, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = ve.access(i, e) - 1;
                o ? ve.access(i, e, o) : (i.removeEventListener(t, n, !0), ve.remove(i, e))
            }
        }
    }), Z.fn.extend({
        on: function(t, e, n, i, o) {
            var r, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (s in t) this.on(s, e, n, t[s], o);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = u;
            else if (!i) return this;
            return 1 === o && (r = i, i = function(t) {
                return Z().off(t), r.apply(this, arguments)
            }, i.guid = r.guid || (r.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, Z(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = u), this.each(function() {
                Z.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                Z.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? Z.event.trigger(t, e, n, !0) : void 0
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ae = /<([\w:]+)/,
        Le = /<|&#?\w+;/,
        He = /<(?:script|style|link)/i,
        qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Pe = /^$|\/(?:java|ecma)script/i,
        Oe = /^true\/(.*)/,
        Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ie = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ie.optgroup = Ie.option, Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td, Z.extend({
        clone: function(t, e, n) {
            var i, o, r, s, a = t.cloneNode(!0),
                l = Z.contains(t.ownerDocument, t);
            if (!(Y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t)))
                for (s = v(a), r = v(t), i = 0, o = r.length; o > i; i++) y(r[i], s[i]);
            if (e)
                if (n)
                    for (r = r || v(t), s = s || v(a), i = 0, o = r.length; o > i; i++) m(r[i], s[i]);
                else m(t, a);
            return s = v(a, "script"), s.length > 0 && g(s, !l && v(t, "script")), a
        },
        buildFragment: function(t, e, n, i) {
            for (var o, r, s, a, l, c, u = e.createDocumentFragment(), p = [], h = 0, f = t.length; f > h; h++)
                if (o = t[h], o || 0 === o)
                    if ("object" === Z.type(o)) Z.merge(p, o.nodeType ? [o] : o);
                    else if (Le.test(o)) {
                for (r = r || u.appendChild(e.createElement("div")), s = (Ae.exec(o) || ["", ""])[1].toLowerCase(), a = Ie[s] || Ie._default, r.innerHTML = a[1] + o.replace(je, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
                Z.merge(p, r.childNodes), r = u.firstChild, r.textContent = ""
            } else p.push(e.createTextNode(o));
            for (u.textContent = "", h = 0; o = p[h++];)
                if ((!i || -1 === Z.inArray(o, i)) && (l = Z.contains(o.ownerDocument, o), r = v(u.appendChild(o), "script"), l && g(r), n))
                    for (c = 0; o = r[c++];) Pe.test(o.type || "") && n.push(o);
            return u
        },
        cleanData: function(t) {
            for (var e, n, i, o, r = Z.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                if (Z.acceptData(n) && (o = n[ve.expando], o && (e = ve.cache[o]))) {
                    if (e.events)
                        for (i in e.events) r[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, e.handle);
                    ve.cache[o] && delete ve.cache[o]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(t) {
            return me(this, function(t) {
                return void 0 === t ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? Z.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (e && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return Z.clone(this, t, e)
            })
        },
        html: function(t) {
            return me(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !He.test(t) && !Ie[(Ae.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(je, "<$1></$2>");
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (o) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, Z.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = z.apply([], t);
            var n, i, o, r, s, a, l = 0,
                c = this.length,
                u = this,
                p = c - 1,
                h = t[0],
                g = Z.isFunction(h);
            if (g || c > 1 && "string" == typeof h && !Y.checkClone && qe.test(h)) return this.each(function(n) {
                var i = u.eq(n);
                g && (t[0] = h.call(this, n, i.html())), i.domManip(t, e)
            });
            if (c && (n = Z.buildFragment(t, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (o = Z.map(v(n, "script"), f), r = o.length; c > l; l++) s = n, l !== p && (s = Z.clone(s, !0, !0), r && Z.merge(o, v(s, "script"))), e.call(this[l], s, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, Z.map(o, d), l = 0; r > l; l++) s = o[l], Pe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Fe, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        Z.fn[t] = function(t) {
            for (var n, i = [], o = Z(t), r = o.length - 1, s = 0; r >= s; s++) n = s === r ? this : this.clone(!0), Z(o[s])[e](n), U.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Re, Me = {},
        We = /^margin/,
        Be = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
        _e = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        };
    ! function() {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", o.appendChild(r);
            var e = t.getComputedStyle(s, null);
            n = "1%" !== e.top, i = "4px" === e.width, o.removeChild(r)
        }
        var n, i, o = J.documentElement,
            r = J.createElement("div"),
            s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(s), t.getComputedStyle && Z.extend(Y, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return null == i && e(), i
            },
            reliableMarginRight: function() {
                var e, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", o.appendChild(r), e = !parseFloat(t.getComputedStyle(n, null).marginRight), o.removeChild(r), s.removeChild(n), e
            }
        }))
    }(), Z.swap = function(t, e, n, i) {
        var o, r, s = {};
        for (r in e) s[r] = t.style[r], t.style[r] = e[r];
        o = n.apply(t, i || []);
        for (r in e) t.style[r] = s[r];
        return o
    };
    var ze = /^(none|table(?!-c[ea]).+)/,
        Ue = new RegExp("^(" + we + ")(.*)$", "i"),
        Ve = new RegExp("^([+-])=(" + we + ")", "i"),
        Xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = w(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = Z.camelCase(e),
                    l = t.style;
                return e = Z.cssProps[a] || (Z.cssProps[a] = T(l, a)), s = Z.cssHooks[e] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e] : (r = typeof n, "string" === r && (o = Ve.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Z.css(t, e)), r = "number"), void(null != n && n === n && ("number" !== r || Z.cssNumber[a] || (n += "px"), Y.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))))
            }
        },
        css: function(t, e, n, i) {
            var o, r, s, a = Z.camelCase(e);
            return e = Z.cssProps[a] || (Z.cssProps[a] = T(t.style, a)), s = Z.cssHooks[e] || Z.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = w(t, e, i)), "normal" === o && e in Qe && (o = Qe[e]), "" === n || n ? (r = parseFloat(o), n === !0 || Z.isNumeric(r) ? r || 0 : o) : o
        }
    }), Z.each(["height", "width"], function(t, e) {
        Z.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? ze.test(Z.css(t, "display")) && 0 === t.offsetWidth ? Z.swap(t, Xe, function() {
                    return S(t, e, i)
                }) : S(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var o = i && _e(t);
                return k(t, n, i ? E(t, e, i, "border-box" === Z.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), Z.cssHooks.marginRight = C(Y.reliableMarginRight, function(t, e) {
        return e ? Z.swap(t, {
            display: "inline-block"
        }, w, [t, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        Z.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + Ce[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, We.test(t) || (Z.cssHooks[t + e].set = k)
    }), Z.fn.extend({
        css: function(t, e) {
            return me(this, function(t, e, n) {
                var i, o, r = {},
                    s = 0;
                if (Z.isArray(e)) {
                    for (i = _e(t), o = e.length; o > s; s++) r[e[s]] = Z.css(t, e[s], !1, i);
                    return r
                }
                return void 0 !== n ? Z.style(t, e, n) : Z.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return $(this, !0)
        },
        hide: function() {
            return $(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Te(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = D, D.prototype = {
        constructor: D,
        init: function(t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = D.propHooks[this.prop];
            return t && t.get ? t.get(this) : D.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = D.propHooks[this.prop];
            return this.pos = e = this.options.duration ? Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, Z.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, Z.fx = D.prototype.init, Z.fx.step = {};
    var Ye, Je, Ke = /^(?:toggle|show|hide)$/,
        Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
        tn = /queueHooks$/,
        en = [L],
        nn = {
            "*": [
                function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        o = Ze.exec(e),
                        r = o && o[3] || (Z.cssNumber[t] ? "" : "px"),
                        s = (Z.cssNumber[t] || "px" !== r && +i) && Ze.exec(Z.css(n.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== r) {
                        r = r || s[3], o = o || [], s = +i || 1;
                        do a = a || ".5", s /= a, Z.style(n.elem, t, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
                }
            ]
        };
    Z.Animation = Z.extend(q, {
            tweener: function(t, e) {
                Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, o = t.length; o > i; i++) n = t[i], nn[n] = nn[n] || [], nn[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? en.unshift(t) : en.push(t)
            }
        }), Z.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? Z.extend({}, t) : {
                complete: n || !n && e || Z.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !Z.isFunction(e) && e
            };
            return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                Z.isFunction(i.old) && i.old.call(this), i.queue && Z.dequeue(this, i.queue)
            }, i
        }, Z.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Te).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var o = Z.isEmptyObject(t),
                    r = Z.speed(e, n, i),
                    s = function() {
                        var e = q(this, Z.extend({}, t), r);
                        (o || ve.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        r = Z.timers,
                        s = ve.get(this);
                    if (o) s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && tn.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                    (e || !n) && Z.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = ve.get(this),
                        i = n[t + "queue"],
                        o = n[t + "queueHooks"],
                        r = Z.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, Z.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(t, e) {
            var n = Z.fn[e];
            Z.fn[e] = function(t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(j(e, !0), t, i, o)
            }
        }), Z.each({
            slideDown: j("show"),
            slideUp: j("hide"),
            slideToggle: j("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            Z.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), Z.timers = [], Z.fx.tick = function() {
            var t, e = 0,
                n = Z.timers;
            for (Ye = Z.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || Z.fx.stop(), Ye = void 0
        }, Z.fx.timer = function(t) {
            Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(Je), Je = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function(t, e) {
            return t = Z.fx ? Z.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var t = J.createElement("input"),
                e = J.createElement("select"),
                n = e.appendChild(J.createElement("option"));
            t.type = "checkbox", Y.checkOn = "" !== t.value, Y.optSelected = n.selected, e.disabled = !0, Y.optDisabled = !n.disabled, t = J.createElement("input"), t.value = "t", t.type = "radio", Y.radioValue = "t" === t.value
        }();
    var on, rn, sn = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(t, e) {
            return me(this, Z.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                Z.removeAttr(this, t)
            })
        }
    }), Z.extend({
        attr: function(t, e, n) {
            var i, o, r = t.nodeType;
            return t && 3 !== r && 8 !== r && 2 !== r ? typeof t.getAttribute === Ee ? Z.prop(t, e, n) : (1 === r && Z.isXMLDoc(t) || (e = e.toLowerCase(), i = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? rn : on)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = Z.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void Z.removeAttr(t, e)) : void 0
        },
        removeAttr: function(t, e) {
            var n, i, o = 0,
                r = e && e.match(fe);
            if (r && 1 === t.nodeType)
                for (; n = r[o++];) i = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!Y.radioValue && "radio" === e && Z.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), rn = {
        set: function(t, e, n) {
            return e === !1 ? Z.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = sn[e] || Z.find.attr;
        sn[e] = function(t, e, i) {
            var o, r;
            return i || (r = sn[e], sn[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, sn[e] = r), o
        }
    });
    var an = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(t, e) {
            return me(this, Z.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[Z.propFix[t] || t]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, o, r, s = t.nodeType;
            return t && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !Z.isXMLDoc(t), r && (e = Z.propFix[e] || e, o = Z.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || an.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (Z.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var ln = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s, a = "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (Z.isFunction(t)) return this.each(function(e) {
                Z(this).addClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(fe) || []; c > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : " ")) {
                        for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = Z.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (Z.isFunction(t)) return this.each(function(e) {
                Z(this).removeClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(fe) || []; c > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : "")) {
                        for (r = 0; o = e[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        s = t ? Z.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(Z.isFunction(t) ? function(n) {
                Z(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, i = 0, o = Z(this), r = t.match(fe) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else(n === Ee || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ln, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var cn = /\r/g;
    Z.fn.extend({
        val: function(t) {
            var e, n, i, o = this[0];
            return arguments.length ? (i = Z.isFunction(t), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? t.call(this, n, Z(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function(t) {
                    return null == t ? "" : t + ""
                })), e = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(cn, "") : null == n ? "" : n)) : void 0
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = Z.find.attr(t, "value");
                    return null != e ? e : Z.trim(Z.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (Y.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (e = Z(n).val(), r) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = Z.makeArray(e), s = o.length; s--;) i = o[s], (i.selected = Z.inArray(i.value, r) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(t, e) {
                return Z.isArray(e) ? t.checked = Z.inArray(Z(t).val(), e) >= 0 : void 0
            }
        }, Y.checkOn || (Z.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        Z.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), Z.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var un = Z.now(),
        pn = /\?/;
    Z.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, Z.parseXML = function(t) {
        var e, n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new DOMParser, e = n.parseFromString(t, "text/xml")
        } catch (i) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + t), e
    };
    var hn = /#.*$/,
        fn = /([?&])_=[^&]*/,
        dn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        gn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        mn = /^(?:GET|HEAD)$/,
        vn = /^\/\//,
        yn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        bn = {},
        xn = {},
        wn = "*/".concat("*"),
        Cn = t.location.href,
        Tn = yn.exec(Cn.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Cn,
            type: "GET",
            isLocal: gn.test(Tn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? F(F(t, Z.ajaxSettings), e) : F(Z.ajaxSettings, t)
        },
        ajaxPrefilter: P(bn),
        ajaxTransport: P(xn),
        ajax: function(t, e) {
            function n(t, e, n, s) {
                var l, u, v, y, x, C = e;
                2 !== b && (b = 2, a && clearTimeout(a), i = void 0, r = s || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, n && (y = I(p, w, n)), y = R(p, y, w, l), l ? (p.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (Z.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (Z.etag[o] = x)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, u = y.data, v = y.error, l = !v)) : (v = C, (t || !C) && (C = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || C) + "", l ? d.resolveWith(h, [u, C, w]) : d.rejectWith(h, [w, C, v]), w.statusCode(m), m = void 0, c && f.trigger(l ? "ajaxSuccess" : "ajaxError", [w, p, l ? u : v]), g.fireWith(h, [w, C]), c && (f.trigger("ajaxComplete", [w, p]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, o, r, s, a, l, c, u, p = Z.ajaxSetup({}, e),
                h = p.context || p,
                f = p.context && (h.nodeType || h.jquery) ? Z(h) : Z.event,
                d = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                m = p.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!s)
                                for (s = {}; e = dn.exec(r);) s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? r : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) m[e] = [m[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return i && i.abort(e), n(0, e), this
                    }
                };
            if (d.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, p.url = ((t || p.url || Cn) + "").replace(hn, "").replace(vn, Tn[1] + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = Z.trim(p.dataType || "*").toLowerCase().match(fe) || [""], null == p.crossDomain && (l = yn.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === Tn[1] && l[2] === Tn[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Tn[3] || ("http:" === Tn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = Z.param(p.data, p.traditional)), O(bn, p, e, w), 2 === b) return w;
            c = Z.event && p.global, c && 0 === Z.active++ && Z.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !mn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (pn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = fn.test(o) ? o.replace(fn, "$1_=" + un++) : o + (pn.test(o) ? "&" : "?") + "_=" + un++)), p.ifModified && (Z.lastModified[o] && w.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && w.setRequestHeader("If-None-Match", Z.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + wn + "; q=0.01" : "") : p.accepts["*"]);
            for (u in p.headers) w.setRequestHeader(u, p.headers[u]);
            if (p.beforeSend && (p.beforeSend.call(h, w, p) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) w[u](p[u]);
            if (i = O(xn, p, e, w)) {
                w.readyState = 1, c && f.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, i.send(v, n)
                } catch (C) {
                    if (!(2 > b)) throw C;
                    n(-1, C)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, n) {
            return Z.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return Z.get(t, void 0, e, "script")
        }
    }), Z.each(["get", "post"], function(t, e) {
        Z[e] = function(t, n, i, o) {
            return Z.isFunction(n) && (o = o || i, i = n, n = void 0), Z.ajax({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), Z._evalUrl = function(t) {
        return Z.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(t) {
            var e;
            return Z.isFunction(t) ? this.each(function(e) {
                Z(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return this.each(Z.isFunction(t) ? function(e) {
                Z(this).wrapInner(t.call(this, e))
            } : function() {
                var e = Z(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = Z.isFunction(t);
            return this.each(function(n) {
                Z(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, Z.expr.filters.visible = function(t) {
        return !Z.expr.filters.hidden(t)
    };
    var kn = /%20/g,
        En = /\[\]$/,
        Sn = /\r?\n/g,
        $n = /^(?:submit|button|image|reset|file)$/i,
        Dn = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(t, e) {
        var n, i = [],
            o = function(t, e) {
                e = Z.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (n in t) M(n, t[n], e, o);
        return i.join("&").replace(kn, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = Z.prop(this, "elements");
                return t ? Z.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !Z(this).is(":disabled") && Dn.test(this.nodeName) && !$n.test(t) && (this.checked || !ke.test(t))
            }).map(function(t, e) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Sn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Sn, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var Nn = 0,
        jn = {},
        An = {
            0: 200,
            1223: 204
        },
        Ln = Z.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in jn) jn[t]()
    }), Y.cors = !!Ln && "withCredentials" in Ln, Y.ajax = Ln = !!Ln, Z.ajaxTransport(function(t) {
        var e;
        return Y.cors || Ln && !t.crossDomain ? {
            send: function(n, i) {
                var o, r = t.xhr(),
                    s = ++Nn;
                if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) r[o] = t.xhrFields[o];
                t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n) r.setRequestHeader(o, n[o]);
                e = function(t) {
                    return function() {
                        e && (delete jn[s], e = r.onload = r.onerror = null, "abort" === t ? r.abort() : "error" === t ? i(r.status, r.statusText) : i(An[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                            text: r.responseText
                        } : void 0, r.getAllResponseHeaders()))
                    }
                }, r.onload = e(), r.onerror = e("error"), e = jn[s] = e("abort");
                try {
                    r.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (e) throw a
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return Z.globalEval(t), t
            }
        }
    }), Z.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), Z.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, o) {
                    e = Z("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), J.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Hn = [],
        qn = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Hn.pop() || Z.expando + "_" + un++;
            return this[t] = !0, t
        }
    }), Z.ajaxPrefilter("json jsonp", function(e, n, i) {
        var o, r, s, a = e.jsonp !== !1 && (qn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && qn.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(qn, "$1" + o) : e.jsonp !== !1 && (e.url += (pn.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return s || Z.error(o + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
            s = arguments
        }, i.always(function() {
            t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Hn.push(o)), s && Z.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || J;
        var i = se.exec(t),
            o = !n && [];
        return i ? [e.createElement(i[1])] : (i = Z.buildFragment([t], e, o), o && o.length && Z(o).remove(), Z.merge([], i.childNodes))
    };
    var Pn = Z.fn.load;
    Z.fn.load = function(t, e, n) {
        if ("string" != typeof t && Pn) return Pn.apply(this, arguments);
        var i, o, r, s = this,
            a = t.indexOf(" ");
        return a >= 0 && (i = Z.trim(t.slice(a)), t = t.slice(0, a)), Z.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && Z.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, s.html(i ? Z("<div>").append(Z.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            s.each(n, r || [t.responseText, e, t])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        Z.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), Z.expr.filters.animated = function(t) {
        return Z.grep(Z.timers, function(e) {
            return t === e.elem
        }).length
    };
    var On = t.document.documentElement;
    Z.offset = {
        setOffset: function(t, e, n) {
            var i, o, r, s, a, l, c, u = Z.css(t, "position"),
                p = Z(t),
                h = {};
            "static" === u && (t.style.position = "relative"), a = p.offset(), r = Z.css(t, "top"), l = Z.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = p.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), Z.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + o), "using" in e ? e.using.call(t, h) : p.css(h)
        }
    }, Z.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                Z.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = i && i.ownerDocument;
            return r ? (e = r.documentElement, Z.contains(e, i) ? (typeof i.getBoundingClientRect !== Ee && (o = i.getBoundingClientRect()), n = W(r), {
                top: o.top + n.pageYOffset - e.clientTop,
                left: o.left + n.pageXOffset - e.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (i = t.offset()), i.top += Z.css(t[0], "borderTopWidth", !0), i.left += Z.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - Z.css(n, "marginTop", !0),
                    left: e.left - i.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || On; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent;
                return t || On
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var i = "pageYOffset" === n;
        Z.fn[e] = function(o) {
            return me(this, function(e, o, r) {
                var s = W(e);
                return void 0 === r ? s ? s[n] : e[o] : void(s ? s.scrollTo(i ? t.pageXOffset : r, i ? r : t.pageYOffset) : e[o] = r)
            }, e, o, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(t, e) {
        Z.cssHooks[e] = C(Y.pixelPosition, function(t, n) {
            return n ? (n = w(t, e), Be.test(n) ? Z(t).position()[e] + "px" : n) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        Z.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            Z.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || o === !0 ? "margin" : "border");
                return me(this, function(e, n, i) {
                    var o;
                    return Z.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? Z.css(e, n, s) : Z.style(e, n, i, s)
                }, e, r ? i : void 0, r, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Fn = t.jQuery,
        In = t.$;
    return Z.noConflict = function(e) {
        return t.$ === Z && (t.$ = In), e && t.jQuery === Z && (t.jQuery = Fn), Z
    }, typeof e === Ee && (t.jQuery = t.$ = Z), Z
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.2.0", i.prototype.close = function(e) {
        function n() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var i = t(this),
            o = i.attr("data-target");
        o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(o);
        e && e.preventDefault(), r.length || (r = i.hasClass("alert") ? i : i.parent()), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button"),
                r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), i[o](null == r[e] ? this.options[e] : r[e]), setTimeout(t.proxy(function() {
            "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), n.preventDefault()
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, n.prototype.keydown = function(t) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.to = function(e) {
        var n = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            n.to(e)
        }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(e, n) {
        var i = this.$element.find(".item.active"),
            o = n || i[e](),
            r = this.interval,
            s = "next" == e ? "left" : "right",
            a = "next" == e ? "first" : "last",
            l = this;
        if (!o.length) {
            if (!this.options.wrap) return;
            o = this.$element.find(".item")[a]()
        }
        if (o.hasClass("active")) return this.sliding = !1;
        var c = o[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(o)]);
                p && p.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function() {
                o.removeClass([e, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(h)), r && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(n) {
        var i, o = t(this),
            r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
        }
    }), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.collapse"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && r.toggle && "show" == e && (e = !e), o || i.data("bs.collapse", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n = t.Event("show.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find("> .panel > .in");
                if (i && i.length) {
                    var o = i.data("bs.collapse");
                    if (o && o.transitioning) return;
                    e.call(i, "hide"), o || i.data("bs.collapse", null)
                }
                var r = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[r](0), this.transitioning = 1;
                var s = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return s.call(this);
                var a = t.camelCase(["scroll", r].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(350)[r](this.$element[0][a])
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var i = t.fn.collapse;
    t.fn.collapse = e, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var i, o = t(this),
            r = o.attr("data-target") || n.preventDefault() || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
            s = t(r),
            a = s.data("bs.collapse"),
            l = a ? "toggle" : o.data(),
            c = o.attr("data-parent"),
            u = c && t(c);
        a && a.transitioning || (u && u.find('[data-toggle="collapse"][data-parent="' + c + '"]').not(o).addClass("collapsed"), o[s.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(s, l)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(o).remove(), t(r).each(function() {
            var i = n(t(this)),
                o = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", o))
        }))
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.2.0", s.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = n(o),
                s = r.hasClass("open");
            if (e(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.trigger("focus"), r.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, s.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = n(i),
                    s = o.hasClass("open");
                if (!s || s && 27 == e.keyCode) return 27 == e.which && o.find(r).trigger("focus"), i.trigger("click");
                var a = " li:not(.divider):visible a",
                    l = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (l.length) {
                    var c = l.index(l.filter(":focus"));
                    38 == e.keyCode && c > 0 && c--, 40 == e.keyCode && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ', [role="menu"], [role="listbox"]', s.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var n = this,
            i = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var i = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            i ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var n = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && i;
            if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(150) : r()
        } else e && e()
    }, n.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            o = i.attr("href"),
            r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof e && e;
            (o || "destroy" != e) && (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var i = this,
                o = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                l = a.test(s);
            l && (s = s.replace(a, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var c = this.getPosition(),
                u = o[0].offsetWidth,
                p = o[0].offsetHeight;
            if (l) {
                var h = s,
                    f = this.$element.parent(),
                    d = this.getPosition(f);
                s = "bottom" == s && c.top + c.height + p - d.scroll > d.height ? "top" : "top" == s && c.top - d.scroll - p < 0 ? "bottom" : "right" == s && c.right + u > d.width ? "left" : "left" == s && c.left - u < d.left ? "right" : s, o.removeClass(h).addClass(s)
            }
            var g = this.getCalculatedOffset(s, c, u, p);
            this.applyPlacement(g, s);
            var m = function() {
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(150) : m()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top = e.top + s, e.left = e.left + a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != r && (e.top = e.top + r - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var p = u.left ? 2 * u.left - o + l : 2 * u.top - r + c,
            h = u.left ? "left" : "top",
            f = u.left ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(p, i[0][f], h)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function() {
        function e() {
            "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            i = this.tip(),
            o = t.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName;
        return t.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: i ? t(window).width() : e.outerWidth(),
            height: i ? t(window).height() : e.outerHeight()
        }, i ? {
            top: 0,
            left: 0
        } : e.offset())
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var c = e.left - r,
                u = e.left + r + n;
            c < s.left ? o.left = s.left - c : u > s.width && (o.left = s.left + s.width - u)
        }
        return o
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                r = "object" == typeof e && e;
            (o || "destroy" != e) && (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.2.0", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(n, i) {
        var o = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(n).is("body") ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.2.0", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = "offset",
            n = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function() {
            var i = t(this),
                o = i.data("target") || i.attr("href"),
                r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [
                [r[e]().top + n, o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e <= o[0]) return s != (t = r[0]) && this.activate(t);
        for (t = o.length; t--;) s != r[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.2.0", n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a")[0],
                r = t.Event("show.bs.tab", {
                    relatedTarget: o
                });
            if (e.trigger(r), !r.isDefaultPrevented()) {
                var s = t(i);
                this.activate(e.closest("li"), n), this.activate(s, s.parent(), function() {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, n, i) {
        function o() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
        }
        var r = n.find("> .active"),
            s = i && t.support.transition && r.hasClass("fade");
        s ? r.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o(), r.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(n) {
        n.preventDefault(), e.call(t(this), "show")
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.2.0", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = t(document).height(),
                i = this.$target.scrollTop(),
                o = this.$element.offset(),
                r = this.options.offset,
                s = r.top,
                a = r.bottom;
            "object" != typeof r && (a = s = r), "function" == typeof s && (s = r.top(this.$element)), "function" == typeof a && (a = r.bottom(this.$element));
            var l = null != this.unpin && i + this.unpin <= o.top ? !1 : null != a && o.top + this.$element.height() >= e - a ? "bottom" : null != s && s >= i ? "top" : !1;
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var c = "affix" + (l ? "-" + l : ""),
                    u = t.Event(c + ".bs.affix");
                this.$element.trigger(u), u.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(c).trigger(t.Event(c.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: e - this.$element.height() - a
                }))
            }
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(t) {
        return t instanceof Number || "number" == typeof t
    }
    t.fn.borderLayout = function() {
        var n = function(n, i) {
                n.style.position = "absolute", n.style.boxSizing = "border-box";
                for (var o in i) {
                    var r = i[o];
                    e(r) && (r = parseInt(r) + "px"), n.style[o] = r
                }
                t(n).trigger("size.change")
            },
            i = function(t, e) {
                return "%" === t[t.length - 1] ? e * parseInt(t) / 100 : parseInt(t)
            },
            o = function(t, e, n, o) {
                var r = i(t, e);
                return n && (n = i(n, e), n > r) ? n : o && (o = i(o, e), r > o) ? o : r
            };
        return this.each(function() {
            function e() {
                c && (b = c._data.width, b && (b = o(b, p, c._data["min-width"], c._data["max-width"]), k = b, x = parseInt(c._data.left) || 0, x && (w -= x, k += x), w -= b, n(c, {
                    top: T,
                    left: x,
                    width: b,
                    height: C
                }))), l && (b = l._data.width, b && (b = o(b, p, l._data["min-width"], l._data["max-width"]), x = parseInt(l._data.right) || 0, x && (w -= x), w -= b, n(l, {
                    top: T,
                    right: x,
                    width: b,
                    height: C
                })))
            }

            function i() {
                s && (b = s._data.height, b && (b = o(b, h, s._data["min-height"], s._data["max-height"]), C -= b, T = b, n(s, {
                    top: 0,
                    left: k,
                    width: w,
                    height: b
                }))), a && (b = a._data.height, b && (b = o(b, h, a._data["min-height"], a._data["max-height"]), C -= b, n(a, {
                    bottom: 0,
                    left: k,
                    height: b,
                    width: w
                })))
            }
            this.style.boxSizing = "border-box", this.style.overflow = "hidden", (this == document.body || t(this).hasClass("layout--body")) && n(this, {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            });
            for (var r, s, a, l, c, u = t(this).hasClass("layout--h"), p = this.clientWidth, h = this.clientHeight, f = 0, d = this.children; f < d.length;) {
                var g = d[f++],
                    m = g.getAttribute("data-options");
                if (m) {
                    m = m.replace(/(['"])?([a-zA-Z0-9\-]+)(['"])?:/g, '"$2":'), m = m.replace(/'/g, '"'), m = "{" + m + "}";
                    try {
                        m = JSON.parse(m)
                    } catch (v) {
                        continue
                    }
                    var y = m.region;
                    y && (g._data = m, /center/i.test(y) ? r = g : /north/i.test(y) ? s = g : /south/i.test(y) ? a = g : /east/i.test(y) ? l = g : /west/i.test(y) && (c = g))
                }
            }
            var b, x, w = p,
                C = h,
                T = 0,
                k = 0;
            u ? (e(), i()) : (i(), e()), r && n(r, {
                top: T,
                left: k,
                width: w,
                height: C
            })
        })
    }, t(function() {
        t(".layout").borderLayout(), t(window).resize(function() {
            t(".layout").borderLayout()
        })
    })
}(jQuery), ! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : window.jQuery && !window.jQuery.fn.colorpicker && t(window.jQuery)
}(function(t) {
    "use strict";
    var e = function(t) {
        this.value = {
            h: 0,
            s: 0,
            b: 0,
            a: 1
        }, this.origFormat = null, t && (void 0 !== t.toLowerCase ? (t += "", this.setColor(t)) : void 0 !== t.h && (this.value = t))
    };
    e.prototype = {
        constructor: e,
        colors: {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            "indianred ": "#cd5c5c",
            "indigo ": "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32",
            transparent: "transparent"
        },
        _sanitizeNumber: function(t) {
            return "number" == typeof t ? t : isNaN(t) || null === t || "" === t || void 0 === t ? 1 : void 0 !== t.toLowerCase ? parseFloat(t) : 1
        },
        isTransparent: function(t) {
            return t ? (t = t.toLowerCase().trim(), "transparent" == t || t.match(/#?00000000/) || t.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/)) : !1
        },
        rgbaIsTransparent: function(t) {
            return 0 == t.r && 0 == t.g && 0 == t.b && 0 == t.a
        },
        setColor: function(t) {
            t = t.toLowerCase().trim(), t && (this.value = this.isTransparent(t) ? {
                h: 0,
                s: 0,
                b: 0,
                a: 0
            } : this.stringToHSB(t) || {
                h: 0,
                s: 0,
                b: 0,
                a: 1
            })
        },
        stringToHSB: function(e) {
            e = e.toLowerCase();
            var n = this,
                i = !1;
            return t.each(this.stringParsers, function(t, o) {
                var r = o.re.exec(e),
                    s = r && o.parse.apply(n, [r]),
                    a = o.format || "rgba";
                return s ? (i = a.match(/hsla?/) ? n.RGBtoHSB.apply(n, n.HSLtoRGB.apply(n, s)) : n.RGBtoHSB.apply(n, s), n.origFormat = a, !1) : !0
            }), i
        },
        setHue: function(t) {
            this.value.h = 1 - t
        },
        setSaturation: function(t) {
            this.value.s = t
        },
        setBrightness: function(t) {
            this.value.b = 1 - t
        },
        setAlpha: function(t) {
            this.value.a = parseInt(100 * (1 - t), 10) / 100
        },
        toRGB: function(t, e, n, i) {
            t || (t = this.value.h, e = this.value.s, n = this.value.b), t *= 360;
            var o, r, s, a, l;
            return t = t % 360 / 60, l = n * e, a = l * (1 - Math.abs(t % 2 - 1)), o = r = s = n - l, t = ~~t, o += [l, a, 0, 0, a, l][t], r += [a, l, l, a, 0, 0][t], s += [0, 0, a, l, l, a][t], {
                r: Math.round(255 * o),
                g: Math.round(255 * r),
                b: Math.round(255 * s),
                a: i || this.value.a
            }
        },
        toHex: function(t, e, n, i) {
            var o = this.toRGB(t, e, n, i);
            return this.rgbaIsTransparent(o) ? "transparent" : "#" + (1 << 24 | parseInt(o.r) << 16 | parseInt(o.g) << 8 | parseInt(o.b)).toString(16).substr(1)
        },
        toHSL: function(t, e, n, i) {
            t = t || this.value.h, e = e || this.value.s, n = n || this.value.b, i = i || this.value.a;
            var o = t,
                r = (2 - e) * n,
                s = e * n;
            return s /= r > 0 && 1 >= r ? r : 2 - r, r /= 2, s > 1 && (s = 1), {
                h: isNaN(o) ? 0 : o,
                s: isNaN(s) ? 0 : s,
                l: isNaN(r) ? 0 : r,
                a: isNaN(i) ? 0 : i
            }
        },
        toAlias: function(t, e, n, i) {
            var o = this.toHex(t, e, n, i);
            for (var r in this.colors)
                if (this.colors[r] == o) return r;
            return !1
        },
        RGBtoHSB: function(t, e, n, i) {
            t /= 255, e /= 255, n /= 255;
            var o, r, s, a;
            return s = Math.max(t, e, n), a = s - Math.min(t, e, n), o = 0 === a ? null : s === t ? (e - n) / a : s === e ? (n - t) / a + 2 : (t - e) / a + 4, o = (o + 360) % 6 * 60 / 360, r = 0 === a ? 0 : a / s, {
                h: this._sanitizeNumber(o),
                s: r,
                b: s,
                a: this._sanitizeNumber(i)
            }
        },
        HueToRGB: function(t, e, n) {
            return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
        },
        HSLtoRGB: function(t, e, n, i) {
            0 > e && (e = 0);
            var o;
            o = .5 >= n ? n * (1 + e) : n + e - n * e;
            var r = 2 * n - o,
                s = t + 1 / 3,
                a = t,
                l = t - 1 / 3,
                c = Math.round(255 * this.HueToRGB(r, o, s)),
                u = Math.round(255 * this.HueToRGB(r, o, a)),
                p = Math.round(255 * this.HueToRGB(r, o, l));
            return [c, u, p, this._sanitizeNumber(i)]
        },
        toString: function(t) {
            switch (t = t || "rgba") {
                case "rgb":
                    var e = this.toRGB();
                    return this.rgbaIsTransparent(e) ? "transparent" : "rgb(" + e.r + "," + e.g + "," + e.b + ")";
                case "rgba":
                    var e = this.toRGB();
                    return "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a + ")";
                case "hsl":
                    var n = this.toHSL();
                    return "hsl(" + Math.round(360 * n.h) + "," + Math.round(100 * n.s) + "%," + Math.round(100 * n.l) + "%)";
                case "hsla":
                    var n = this.toHSL();
                    return "hsla(" + Math.round(360 * n.h) + "," + Math.round(100 * n.s) + "%," + Math.round(100 * n.l) + "%," + n.a + ")";
                case "hex":
                    return this.toHex();
                case "alias":
                    return this.toAlias() || this.toHex();
                default:
                    return !1
            }
        },
        stringParsers: [{
            re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
            format: "rgb",
            parse: function(t) {
                return [t[1], t[2], t[3], 1]
            }
        }, {
            re: /rgb\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,
            format: "rgb",
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], 1]
            }
        }, {
            re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function(t) {
                return [t[1], t[2], t[3], t[4]]
            }
        }, {
            re: /rgba\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        }, {
            re: /hsl\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,
            format: "hsl",
            parse: function(t) {
                return [t[1] / 360, t[2] / 100, t[3] / 100, t[4]]
            }
        }, {
            re: /hsla\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            format: "hsla",
            parse: function(t) {
                return [t[1] / 360, t[2] / 100, t[3] / 100, t[4]]
            }
        }, {
            re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            format: "hex",
            parse: function(t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), 1]
            }
        }, {
            re: /#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
            format: "hex",
            parse: function(t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), 1]
            }
        }, {
            re: /^([a-z]{3,})$/,
            format: "alias",
            parse: function(t) {
                var e = this.colorNameToHex(t[0]) || "#000000",
                    n = this.stringParsers[6].re.exec(e),
                    i = n && this.stringParsers[6].parse.apply(this, [n]);
                return i
            }
        }],
        colorNameToHex: function(t) {
            return "undefined" != typeof this.colors[t.toLowerCase()] ? this.colors[t.toLowerCase()] : !1
        }
    };
    var n = {
            horizontal: !1,
            inline: !1,
            color: !1,
            format: !1,
            input: "input",
            container: !1,
            component: ".add-on, .input-group-addon",
            sliders: {
                saturation: {
                    maxLeft: 100,
                    maxTop: 100,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 0,
                    maxTop: 100,
                    callLeft: !1,
                    callTop: "setHue"
                },
                alpha: {
                    maxLeft: 0,
                    maxTop: 100,
                    callLeft: !1,
                    callTop: "setAlpha"
                }
            },
            slidersHorz: {
                saturation: {
                    maxLeft: 100,
                    maxTop: 100,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 100,
                    maxTop: 0,
                    callLeft: "setHue",
                    callTop: !1
                },
                alpha: {
                    maxLeft: 100,
                    maxTop: 0,
                    callLeft: "setAlpha",
                    callTop: !1
                }
            },
            template: '<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div></div>'
        },
        i = function(i, o) {
            this.element = t(i).addClass("colorpicker-element"), this.options = t.extend({}, n, this.element.data(), o), this.component = this.options.component, this.component = this.component !== !1 ? this.element.find(this.component) : !1, this.component && 0 === this.component.length && (this.component = !1), this.container = this.options.container === !0 ? this.element : this.options.container, this.container = this.container !== !1 ? t(this.container) : !1, this.input = this.element.is("input") ? this.element : this.options.input ? this.element.find(this.options.input) : !1, this.input && 0 === this.input.length && (this.input = !1), this.color = new e(this.options.color !== !1 ? this.options.color : this.getValue()), this.format = this.options.format !== !1 ? this.options.format : this.color.origFormat, this.picker = t(this.options.template), this.picker.addClass(this.options.inline ? "colorpicker-inline colorpicker-visible" : "colorpicker-hidden"), this.options.horizontal && this.picker.addClass("colorpicker-horizontal"), ("rgba" === this.format || "hsla" === this.format) && this.picker.addClass("colorpicker-with-alpha"), "right" === this.options.align && this.picker.addClass("colorpicker-right"), this.picker.on("mousedown.colorpicker touchstart.colorpicker", t.proxy(this.mousedown, this)), this.picker.appendTo(this.container ? this.container : t("body")), this.input !== !1 && (this.input.on({
                "keyup.colorpicker": t.proxy(this.keyup, this)
            }), this.component === !1 && this.element.on({
                "focus.colorpicker": t.proxy(this.show, this)
            }), this.options.inline === !1 && this.element.on({
                "focusout.colorpicker": t.proxy(this.hide, this)
            })), this.component !== !1 && this.component.on({
                "click.colorpicker": t.proxy(this.show, this)
            }), this.input === !1 && this.component === !1 && this.element.on({
                "click.colorpicker": t.proxy(this.show, this)
            }), this.input !== !1 && this.component !== !1 && "color" === this.input.attr("type") && this.input.on({
                "click.colorpicker": t.proxy(this.show, this),
                "focus.colorpicker": t.proxy(this.show, this)
            }), this.update(), t(t.proxy(function() {
                this.element.trigger("create")
            }, this))
        };
    i.Color = e, i.prototype = {
        constructor: i,
        destroy: function() {
            this.picker.remove(), this.element.removeData("colorpicker").off(".colorpicker"), this.input !== !1 && this.input.off(".colorpicker"), this.component !== !1 && this.component.off(".colorpicker"), this.element.removeClass("colorpicker-element"), this.element.trigger({
                type: "destroy"
            })
        },
        reposition: function() {
            if (this.options.inline !== !1 || this.options.container) return !1;
            var t = this.container && this.container[0] !== document.body ? "position" : "offset",
                e = this.component || this.element,
                n = e[t]();
            "right" === this.options.align && (n.left -= this.picker.outerWidth() - e.outerWidth()), this.picker.css({
                top: n.top + e.outerHeight(),
                left: n.left
            })
        },
        show: function(e) {
            return this.isDisabled() ? !1 : (this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"), this.reposition(), t(window).on("resize.colorpicker", t.proxy(this.reposition, this)), !e || this.hasInput() && "color" !== this.input.attr("type") || e.stopPropagation && e.preventDefault && (e.stopPropagation(), e.preventDefault()), this.options.inline === !1 && t(window.document).on({
                "mousedown.colorpicker": t.proxy(this.hide, this)
            }), void this.element.trigger({
                type: "showPicker",
                color: this.color
            }))
        },
        hide: function() {
            this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"), t(window).off("resize.colorpicker", this.reposition), t(document).off({
                "mousedown.colorpicker": this.hide
            }), this.update(), this.element.trigger({
                type: "hidePicker",
                color: this.color
            })
        },
        updateData: function(t) {
            return t = t || this.color.toString(this.format), this.element.data("color", t), t
        },
        updateInput: function(t) {
            return t = t || this.color.toString(this.format), this.input !== !1 && this.input.prop("value", t), t
        },
        updatePicker: function(t) {
            void 0 !== t && (this.color = new e(t));
            var n = this.options.horizontal === !1 ? this.options.sliders : this.options.slidersHorz,
                i = this.picker.find("i");
            return 0 !== i.length ? (this.options.horizontal === !1 ? (n = this.options.sliders, i.eq(1).css("top", n.hue.maxTop * (1 - this.color.value.h)).end().eq(2).css("top", n.alpha.maxTop * (1 - this.color.value.a))) : (n = this.options.slidersHorz, i.eq(1).css("left", n.hue.maxLeft * (1 - this.color.value.h)).end().eq(2).css("left", n.alpha.maxLeft * (1 - this.color.value.a))), i.eq(0).css({
                top: n.saturation.maxTop - this.color.value.b * n.saturation.maxTop,
                left: this.color.value.s * n.saturation.maxLeft
            }), this.picker.find(".colorpicker-saturation").css("backgroundColor", this.color.toHex(this.color.value.h, 1, 1, 1)), this.picker.find(".colorpicker-alpha").css("backgroundColor", this.color.toHex()), this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor", this.color.toString(this.format)), t) : void 0
        },
        updateComponent: function(t) {
            if (t = t || this.color.toString(this.format), this.component !== !1) {
                var e = this.component.find("i").eq(0);
                e.length > 0 ? e.css({
                    backgroundColor: t
                }) : this.component.css({
                    backgroundColor: t
                })
            }
            return t
        },
        update: function(t) {
            var e;
            return (this.getValue(!1) !== !1 || t === !0) && (e = this.updateComponent(), this.updateInput(e), this.updateData(e), this.updatePicker()), e
        },
        setValue: function(t) {
            this.color = new e(t), this.update(), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: t
            })
        },
        getValue: function(t) {
            t = void 0 === t ? "#000000" : t;
            var e;
            return e = this.hasInput() ? this.input.val() : this.element.data("color"), (void 0 === e || "" === e || null === e) && (e = t), e
        },
        hasInput: function() {
            return this.input !== !1
        },
        isDisabled: function() {
            return this.hasInput() ? this.input.prop("disabled") === !0 : !1
        },
        disable: function() {
            return this.hasInput() ? (this.input.prop("disabled", !0), this.element.trigger({
                type: "disable",
                color: this.color,
                value: this.getValue()
            }), !0) : !1
        },
        enable: function() {
            return this.hasInput() ? (this.input.prop("disabled", !1), this.element.trigger({
                type: "enable",
                color: this.color,
                value: this.getValue()
            }), !0) : !1
        },
        currentSlider: null,
        mousePointer: {
            left: 0,
            top: 0
        },
        mousedown: function(e) {
            e.pageX || e.pageY || !e.originalEvent || (e.pageX = e.originalEvent.touches[0].pageX, e.pageY = e.originalEvent.touches[0].pageY), e.stopPropagation(), e.preventDefault();
            var n = t(e.target),
                i = n.closest("div"),
                o = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
            if (!i.is(".colorpicker")) {
                if (i.is(".colorpicker-saturation")) this.currentSlider = t.extend({}, o.saturation);
                else if (i.is(".colorpicker-hue")) this.currentSlider = t.extend({}, o.hue);
                else {
                    if (!i.is(".colorpicker-alpha")) return !1;
                    this.currentSlider = t.extend({}, o.alpha)
                }
                var r = i.offset();
                this.currentSlider.guide = i.find("i")[0].style, this.currentSlider.left = e.pageX - r.left, this.currentSlider.top = e.pageY - r.top, this.mousePointer = {
                    left: e.pageX,
                    top: e.pageY
                }, t(document).on({
                    "mousemove.colorpicker": t.proxy(this.mousemove, this),
                    "touchmove.colorpicker": t.proxy(this.mousemove, this),
                    "mouseup.colorpicker": t.proxy(this.mouseup, this),
                    "touchend.colorpicker": t.proxy(this.mouseup, this)
                }).trigger("mousemove")
            }
            return !1
        },
        mousemove: function(t) {
            t.pageX || t.pageY || !t.originalEvent || (t.pageX = t.originalEvent.touches[0].pageX, t.pageY = t.originalEvent.touches[0].pageY), t.stopPropagation(), t.preventDefault();
            var e = Math.max(0, Math.min(this.currentSlider.maxLeft, this.currentSlider.left + ((t.pageX || this.mousePointer.left) - this.mousePointer.left))),
                n = Math.max(0, Math.min(this.currentSlider.maxTop, this.currentSlider.top + ((t.pageY || this.mousePointer.top) - this.mousePointer.top)));
            return this.currentSlider.guide.left = e + "px", this.currentSlider.guide.top = n + "px", this.currentSlider.callLeft && this.color[this.currentSlider.callLeft].call(this.color, e / this.currentSlider.maxLeft), this.currentSlider.callTop && this.color[this.currentSlider.callTop].call(this.color, n / this.currentSlider.maxTop), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color
            }), !1
        },
        mouseup: function(e) {
            return e.stopPropagation(), e.preventDefault(), t(document).off({
                "mousemove.colorpicker": this.mousemove,
                "touchmove.colorpicker": this.mousemove,
                "mouseup.colorpicker": this.mouseup,
                "touchend.colorpicker": this.mouseup
            }), !1
        },
        keyup: function(t) {
            if (38 === t.keyCode) this.color.value.a < 1 && (this.color.value.a = Math.round(100 * (this.color.value.a + .01)) / 100), this.update(!0);
            else if (40 === t.keyCode) this.color.value.a > 0 && (this.color.value.a = Math.round(100 * (this.color.value.a - .01)) / 100), this.update(!0);
            else {
                var n = this.input.val();
                this.color = new e(n), this.getValue(!1) !== !1 && (this.updateData(), this.updateComponent(), this.updatePicker())
            }
            this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: n
            })
        }
    }, t.colorpicker = i, t.fn.colorpicker = function(e) {
        var n, o = arguments,
            r = this.each(function() {
                var r = t(this),
                    s = r.data("colorpicker"),
                    a = "object" == typeof e ? e : {};
                s || "string" == typeof e ? "string" == typeof e && (n = s[e].apply(s, Array.prototype.slice.call(o, 1))) : r.data("colorpicker", new i(this, a))
            });
        return "getValue" === e ? n : r
    }, t.fn.colorpicker.constructor = i
}), $(function() {
    $(".color-picker").colorpicker()
});