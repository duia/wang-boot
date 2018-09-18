window.Q = function (t, i, n) {
  
  function e(t, i, n) {
    if (t.hasChildren()) {
      var s = t._f2 || t[Fh]();
      if (s) {
        s = s._j1 || s;
        for (var h = 0, r = s[Gh]; r > h; h++) if (i[zh](n, s[h]) === !1 || e(s[h], i, n) === !1) return !1;
        return !0
      }
    }
  }
  function s(t) {
    if (!t[Yh]()) return t instanceof uF ? t : null;
    for (var i, n = t._f2._j1, e = n[Gh] - 1; e >= 0;) {
      if (i = n[e], i = s(i)) return i;
      e--
    }
    return null
  }
  function h(t, i, n, e) {
    return e ? r(t, i, n) : a(t, i, n)
  }
  function r(t, i, n) {
    t = t._j1 || t;
    for (var e, s = 0, h = t[Gh]; h > s; s++) if (e = t[s], e[Yh]() && !r(e[Hh], i, n) || i[zh](n, e) === !1) return !1;
    return !0
  }
  function a(t, i, n) {
    t = t._j1 || t;
    for (var e, s = 0, h = t[Gh]; h > s; s++) if (e = t[s], i[zh](n, e) === !1 || e[Yh]() && !a(e.children, i, n)) return !1;
    return !0
  }
  function f(t, i, n, e) {
    return e ? o(t, i, n) : _(t, i, n)
  }
  function o(t, i, n) {
    t = t._j1 || t;
    for (var e, s = t.length, h = s - 1; h >= 0; h--) if (e = t[h], e[Yh]() && !o(e[Hh], i, n) || i.call(n, e) === !1) return !1;
    return !0
  }
  function _(t, i, n) {
    t = t._j1 || t;
    for (var e, s = t[Gh], h = s - 1; h >= 0; h--) if (e = t[h], i[zh](n, e) === !1 || e[Yh]() && !_(e[Hh], i, n)) return !1;
    return !0
  }
  function c(t, i, n) {
    for (var e, s = (t._j1 || t)[qh](0); s.length;) {
      e = s[0],
      s = s[Uh](1);
      var h = i[zh](n, e);
      if (h === !1) return !1;
      if (e[Yh]()) {
        var r = e[Hh];
        r = r._j1 || r,
        s = s[Wh](r)
      }
    }
    return !0
  }
  function u(t, i, n) {
    for (var e, s = (t._j1 || t).slice(0); s[Gh];) {
      e = s[s[Gh] - 1],
      s = s[Uh](0, s[Gh] - 1);
      var h = i.call(n, e);
      if (h === !1) return !1;
      if (e.hasChildren()) {
        var r = e[Hh];
        r = r._j1 || r,
        s = s[Wh](r)
      }
    }
    return !0
  }
  function d(t, i) {
    function n(t, n) {
      for (var e = t[Gh], s = n[Gh], h = e + s, r = new Array(h), a = 0, f = 0, o = 0; h > o;) r[o++] = a === e ? n[f++] : f === s || i(t[a], n[f]) <= 0 ? t[a++] : n[f++];
      return r
    }
    function e(t) {
      var i = t[Gh],
        s = Math[Xh](i / 2);
      return 1 >= i ? t : n(e(t.slice(0, s)), e(t[qh](s)))
    }
    return e(t)
  }
  function l(t, i, n, e) {
    t instanceof ED && (t = t._j1);
    for (var s = 0, h = (t._j1 || t)[Gh]; h > s; s++) {
      var r = i.call(n, t[s], s, e);
      if (r === !1) return !1
    }
    return !0
  }
  function v(t, i, n) {
    for (var e = t instanceof ED, s = t._j1 || t, h = 0, r = s.length; r > h; h++) {
      var a = s[h];
      i.call(n, a) && (e ? t[Vh](a) : t[Uh](h, 1), h--, r--)
    }
  }
  function b(t, i, n, e) {
    t instanceof ED && (t = t._j1);
    for (var s = (t._j1 || t)[Gh] - 1; s >= 0; s--) {
      var h = i.call(n, t[s], s, e);
      if (h === !1) return !1
    }
    return !0
  }
  function y(t) {
    if (t[Kh] instanceof Function) return t[Kh](!0);
    var i, n = [];
    return l(t, function (t) {
      i = t && t[Kh] instanceof Function ? t[Kh]() : t,
      n.push(i)
    }, this),
    n
  }
  function g(t, i, e) {
    e === n || 0 > e ? t.push(i) : t[Uh](e, 0, i)
  }
  function p(t, i) {
    var n = t.indexOf(i);
    return 0 > n || n >= t.length ? !1 : t.splice(n, 1)
  }
  function x(t, i) {
    var n = !1;
    return l(t, function (t) {
      return i == t ? (n = !0, !1) : void 0
    }),
    n
  }
  function E(t, i, n) {
    return i instanceof Object ? t = z(i, t) : i && !n && (n = parseInt(i)),
    i && !n && (n = parseInt(i)),
    n ? setTimeout(t, n) : setTimeout(t)
  }
  function m(i, n) {
    return n && (i = z(n, i)),
    t.requestAnimationFrame(i)
  }
  function w(t, i) {
    return t[Zh] = i,
    t
  }
  function T(t, i) {
    if (!t.hasOwnProperty(Jh)) {
      var n = t[Qh](tr);
      if (!n) return w(t, i);
      for (var e = n.split(ir), s = 0, h = e.length; h > s; s++) if (e[s] == i) return;
      return n += ir + i,
      w(t, n)
    }
    t.classList[nr](i)
  }
  function k(t, i) {
    if (!t.hasOwnProperty(Jh)) {
      var n = t[Qh](tr);
      if (!n || !n[er](i)) return;
      for (var e = "", s = n.split(ir), h = 0, r = s[Gh]; r > h; h++) s[h] != i && (e += s[h] + ir);
      return w(t, e)
    }
    t.classList[Vh](i)
  }
  function O(t) {
    return t instanceof Number || sr == typeof t
  }
  function M(t) {
    return t !== n && (t instanceof String || hr == typeof t)
  }
  function S(t) {
    return t !== n && (t instanceof Boolean || rr == typeof t)
  }
  function j(t) {
    return Array[ar](t)
  }
  function I(i) {
    i || (i = t[fr]),
    i.preventDefault ? i[or]() : i[_r] = !1
  }
  function P(i) {
    i || (i = t.event),
    i[cr] ? i[cr]() : i.cancelBubble || (i[ur] = !0)
  }
  function A(t) {
    I(t),
    P(t)
  }
  function C(t) {
    return Math[dr](Math[lr]() * t)
  }
  function L() {
    return Math[lr]() >= .5
  }
  function R(t, i) {
    var n = t;
    for (var e in i) if (i.__lookupGetter__) {
      var s = i.__lookupGetter__(e),
        h = i.__lookupSetter__(e);
      s || h ? (s && n.__defineGetter__(e, s), h && n.__defineSetter__(e, h)) : n[e] = i[e]
    } else n[e] = i[e];
    return n
  }
  function N(t, i, n) {
    if (!(t instanceof Function)) throw new Error("subclass must be type of Function");
    var e = null;
    vr == typeof i && (e = i, i = t, t = function () {
      i[br](this, arguments)
    });
    var s = t[yr],
      h = function () {};
    return h[yr] = i[yr],
    t.prototype = new h,
    t[gr] = i[yr],
    t[gr].constructor = i,
    R(t.prototype, s),
    e && R(t.prototype, e),
    n && R(t.prototype, n),
    t.prototype[tr] = t,
    t
  }
  function D(t, i, n) {
    return $(t, i, "constructor", n)
  }
  function $(t, i, n, e) {
    var s = i[gr];
    if (s) {
      var h = s[n];
      return h ? h[br](t, e) : void 0
    }
  }
  function B(t) {
    return t[pr](4)
  }
  function F(t) {
    delete t.scope,
    delete t.handle
  }
  function G(t, i) {
    t[i] && (F(t[i]), delete t[i])
  }
  function z(t, i) {
    var n = function () {
      return n[xr][br](n.scope, arguments)
    };
    return n[xr] = i,
    n.scope = t,
    n
  }
  function Y(t, i) {
    return t == i
  }
  function H(t, i, e, s, h) {
    if (s) return void Object.defineProperty(t, i, {
      value: e,
      enumerable: !0
    });
    var r = {
      configurable: !0,
      enumerable: !0
    },
      a = Er + i;
    e !== n && (t[a] = e),
    r[mr] = function () {
        return this[a]
      },
    r.set = function (t) {
        var n = this[a];
        if (Y(n, t)) return !1;
        var e = new FD(this, i, t, n);
        return this.beforeEvent(e) ? (this[a] = t, h && h.call(this, t, n), this[wr](e), !0) : !1
      },
    Object[Tr](t, i, r)
  }
  function q(t, i) {
    for (var n = 0, e = i[Gh]; e > n; n++) {
      var s = i[n];
      H(t, s[kr] || s, s.defaultValue || s[Or], s[Mr], s[Sr])
    }
  }
  function U(t) {
    if (t && t > 0 && 1 > t) {
      var i = Math.floor(16777215 * Math.random());
      return jr + (i >> 16 & 255) + Ir + (i >> 8 & 255) + Ir + (255 & i) + Ir + t[pr](2) + Pr
    }
    return V(Math[dr](16777215 * Math[lr]()))
  }
  function W(t) {
    return t > 0 ? Math[dr](t) : Math[Xh](t)
  }
  function X(t) {
    return t > 0 ? Math.ceil(t) : Math[dr](t)
  }
  function V(t) {
    return 16777216 > t ? Ar + (Cr + t.toString(16)).slice(-6) : jr + (t >> 16 & 255) + Ir + (t >> 8 & 255) + Ir + (255 & t) + Ir + ((t >> 24 & 255) / 255).toFixed(2) + Pr
  }
  function K(t, i, n) {
    vr != typeof n || n.hasOwnProperty(Lr) || (n[Lr] = !0),
    Object.defineProperty(t, i, n)
  }
  function Z(t, i) {
    for (var n in i) if (Rr != n[0]) {
      var e = i[n];
      vr != typeof e || e.hasOwnProperty(Lr) || (e[Lr] = !0)
    }
    Object[Nr](t, i)
  }
  function J(i, n) {
    n || (n = t);
    for (var e = i[Dr]($r), s = 0, h = e.length; h > s; s++) {
      var r = e[s];
      n = n[r]
    }
    return n
  }
  function Q(t) {
    return t instanceof MouseEvent || t instanceof Object && t[Br] !== n
  }
  function ti(i) {
    t[Fr] && console[Gr](i)
  }
  function ii(i) {
    t[Fr] && console.trace(i)
  }
  function ni(i) {
    t[Fr] && console.error(i)
  }
  function ei(t, i, n) {
    var e, s, h;
    0 == t._n7 ? (e = -1, h = 0, s = i) : 0 == t._n9 ? (e = 0, h = 1, s = n) : (e = -1 / t._n7, s = (t._n7 - e) * i + t._n8, h = 1);
    var r = new OD;
    return r._n7 = e,
    r._n8 = s,
    r._n9 = h,
    r._n0 = i,
    r._n2 = n,
    r._kj = Math.atan2(e, h),
    r._n9os = Math.cos(r._kj),
    r._sin = Math.sin(r._kj),
    r
  }
  function si(t, i, n, e, s) {
    var h, r;
    i > e ? h = -1 : e > i && (h = 1),
    n > s ? r = -1 : s > n && (r = 1);
    var a, f;
    if (!h) return f = 0 > r ? t.y : t.bottom,
    {
      x: i,
      y: f
    };
    if (!r) return a = 0 > h ? t.x : t[zr],
    {
      x: a,
      y: n
    };
    var o = (n - s) / (i - e),
      _ = n - o * i,
      c = 0 > h ? i - t.x : i - t[zr],
      u = 0 > r ? n - t.y : n - t[Yr];
    return Math[Hr](o) >= Math[Hr](u / c) ? (f = 0 > r ? t.y : t.bottom, a = (f - _) / o) : (a = 0 > h ? t.x : t[zr], f = o * a + _),
    {
        x: a,
        y: f
      }
  }
  function hi(t, i, n, e, s, h, r, a) {
    return 0 >= r || 0 >= a || 0 >= n || 0 >= e ? !1 : (r += s, a += h, n += t, e += i, (s > r || r > t) && (h > a || a > i) && (t > n || n > s) && (i > e || e > h))
  }
  function ri(t, i, n, e, s, h) {
    return s >= t && t + n >= s && h >= i && i + e >= h
  }
  function ai(t, i, n, e, s, h, r, a) {
    return s >= t && h >= i && t + n >= s + r && i + e >= h + a
  }
  function fi(t, i, e) {
    if (!t) return {
      x: 0,
      y: 0
    };
    if (t.x !== n) return {
      x: t.x,
      y: t.y
    };
    var s, h, r = t.horizontalPosition,
      a = t[qr];
    switch (r) {
      case PD:
        s = 0;
        break;
      case CD:
        s = i;
        break;
      default:
        s = i / 2
      }
    switch (a) {
      case LD:
        h = 0;
        break;
      case ND:
        h = e;
        break;
      default:
        h = e / 2
      }
    return {
        x: s,
        y: h
      }
  }
  function oi(t, i, n) {
    t[Hh][nr](i, n),
    t[Ur](i, n)
  }
  function _i(t, i) {
    t._f2 && (t._f2[Vh](i), t[Wr](i))
  }
  function ci(t) {
    return t.replace(/^-ms-/, Xr)[Vr](/-([\da-z])/gi, function (t, i) {
      return i[Kr]()
    })
  }
  function ui(t) {
    return t[Vr](/[A-Z]/g, function (t) {
      return Zr + t.toLowerCase()
    })[Vr](/^ms-/, Jr)
  }
  function di(t, i) {
    var n = t[Qr];
    if (!n) return !1;
    var e, s;
    for (e in i) i.hasOwnProperty(e) && (s = e$(e)) && (n[s] = i[e]);
    return t
  }
  function li(t) {
    var i, n, e = "";
    for (i in t) t.hasOwnProperty(i) && (n = e$(i)) && (e += ui(n) + ta + t[i] + ia);
    return e ? e[na](0, e[Gh] - 1) : e
  }
  function vi(t, i, n) {
    (i = e$(i)) && (t[Qr][i] = n)
  }
  function bi(t, i) {
    return i$ ? (i && !M(i) && (i = li(i)), i$.insertRule ? void i$[ea](t + sa + i + ha, 0) : void(i$[ra] && i$.addRule(t, i, 0))) : !1
  }
  function yi(i, n) {
    i[Br] && (i = i[aa] && i[aa].length ? i[aa][0] : i.touches[0]);
    var e = n.getBoundingClientRect(),
      s = i[fa] || 0,
      h = i[oa] || 0;
    return lD && oD && (t[_a] && s == i[ca] && (s -= t[_a]), t[ua] && h == i[da] && (h -= t[ua])),
    {
        x: s - e[la],
        y: h - e.top
      }
  }
  function gi(t, i) {
    return this[Er + i] = h$(t, i, function (t) {
      return wi.call(this, t, i)
    }, !1, this)
  }
  function pi(t) {
    var i = this;
    return t.getData = function () {
      return i._k3[va](t)
    },
    t[ba] = function () {
      return i._k3[ya](t)
    },
    t
  }
  function xi(t) {
    this.__n9ancelClick || (this.__n9lickEvent = t, this.__n9lickTime ? this.__n9lickTime++ : (this.__n9lickTime = 1, setTimeout(z(this, function () {
      if (this.__n9lickEvent) {
        var t = this.__n9lickTime;
        this.__n9lickTime = 0,
        1 == t ? this._hy(this.__n9lickEvent, ga) : t > 1 && this._hy(this.__n9lickEvent, pa),
        this.__n9lickEvent = null
      }
    }), pD[xa])))
  }
  function Ei(t) {
    if (t.touches) {
      for (var i = t[Br], n = [], e = 0, s = i[Gh]; s > e; e++) {
        var h = i[e];
        n[Ea]({
          pageX: h.pageX,
          pageY: h.pageY,
          clientX: h.clientX,
          clientY: h[oa]
        })
      }
      return {
        timeStamp: t[ma],
        touches: n,
        scale: t.scale
      }
    }
    return {
      timeStamp: t[ma],
      x: t.clientX,
      y: t.clientY
    }
  }
  function mi(t, i) {
    switch (i) {
    case "touchstart":
      if (t.touches[Gh] >= 2) return this._8r = Ei(t),
      this._n8n.clear(),
      this._1r(),
      void(this._n91 || (this._n91 = t, this._8r = Ei(t)));
    case "mousedown":
      if (A(t), 2 == t.button) return;
      if (this._hy(t, wa), this._n91 = t, this._8r = Ei(t), t.button || (this.__onLongPressFunction ? this.__longPressTimer && this._1r() : this.__onLongPressFunction = z(this, function () {
        this.__longPressTimer = null,
        this._n91 && (this.__n9ancelClick = !0, this._hy(this._n91, Ta))
      }), this.__longPressTimer = setTimeout(this.__onLongPressFunction, pD[ka]), this.__n9ancelClick = !1), lD) return;
      return void(o$._n9urrentInteractionSupport = this);
    case "touchend":
      if (!this._n91) return void(this._moving = null);
      if (t[Br][Gh]) return void(this._8r = Ei(t));
      t.timeStamp - this._n91[ma] < 200 && xi.call(this, this._n91);
    case "touchcancel":
      if (!this._n91) return void(this._moving = null);
      this._moving && (this._moving = null, this._hr(t));
    case "mouseup":
      return void this._dz(t);
    case "click":
      return void xi[zh](this, t);
    case "mousewheel":
    case "DOMMouseScroll":
      return t.delta = t[Oa] || -t[Ma],
      this._hy(t, Sa);
    case "touchmove":
      var n = t.touches[Gh];
      return this._moving || (this._moving = !0, 1 == n && this._e1()),
      void this._jx(t)
    }
  }
  function wi(t, i) {
    return t = pi[zh](this, t),
    mi.call(this, t, i),
    ja != i && Ia != i ? this._hy(t, Pa + i) : void 0
  }
  function Ti(t, i) {
    var n = Er + i;
    r$(t, i, this[n]),
    G(this, n)
  }
  function ki(i) {
    l(a$, function (t) {
      gi[zh](this, i, t)
    }, this),
    lD || o$._n7a || (o$._n7a = !0, h$(t, Aa, function (t) {
      if (o$._n9urrentInteractionSupport) {
        A(t);
        var i = o$._n9urrentInteractionSupport;
        if (!o$._dragging) {
          if (i._n91) {
            var n = i._n91[Ca] - t[Ca],
              e = i._n91[La] - t[La];
            if (4 > n * n + e * e) return
          }
          o$._dragging = !0,
          i._e1()
        }
        i._jx(t)
      }
    }, !0), h$(t, Ra, function (t) {
      var i = o$._n9urrentInteractionSupport;
      delete o$._n9urrentInteractionSupport,
      o$._dragging && (delete o$._dragging, I(t), t = pi[zh](i, t), i._hr(t), i._dz(t))
    }, !0))
  }
  function Oi(t) {
    l(a$, function (i) {
      Ti.call(this, t, i)
    }, this),
    this._n7x()
  }
  function Mi(t, i, n) {
    this._lh = t,
    this._n8n = new ji,
    ki[zh](this, t),
    i && (this._listener = i),
    this._ke = n
  }
  function Si(t) {
    return _D && t[Na] || !_D && t[Da]
  }
  function ji() {
    this.points = []
  }
  function Ii(t, i, n, e, s) {
    Ai(t, function (e) {
      if (i) {
        var s = e[$a];
        if (!s) return void(n || m$)(Ba + t + Fa);
        i(s)
      }
    }, n, e, s)
  }
  function Pi(t, i, n, e, s) {
    Ai(t, function (e) {
      if (i) {
        var s, h = e[Ga];
        if (!h) return (n || m$)(Ba + t + za),
        s = new Error(Ba + t + za),
        i(h, s);
        try {
          h = JSON.parse(h)
        } catch (r) {
          (n || m$)(r),
          s = r
        }
        i(h, s)
      }
    }, n, e, s)
  }
  function Ai(t, i, n, e, s) {
    (n === !1 || e === !1) && (s = !1);
    try {
      var h = new XMLHttpRequest,
        r = encodeURI(t);
      if (s !== !1) {
          var a;
          a = r.indexOf(Ya) > 0 ? "&" : Ya,
          r += a + Ha + Date[qa]()
        }
      h.open(Ua, r),
      h[Wa] = function () {
          return 4 == h[Xa] ? h.status && 200 != h[Va] ? void(n || m$)(Ba + t + Ka) : void(i && i(h)) : void 0
        },
      h[Za](e)
    } catch (f) {
      (n || m$)(Ba + t + Ka, f)
    }
  }
  function hi(t, i, n, e, s, h, r, a) {
    return 0 >= r || 0 >= a || 0 >= n || 0 >= e ? !1 : (r += s, a += h, n += t, e += i, (s > r || r > t) && (h > a || a > i) && (t > n || n > s) && (i > e || e > h))
  }
  function ai(t, i, n, e, s, h, r, a) {
    return s >= t && h >= i && t + n >= s + r && i + e >= h + a
  }
  function Ci(t, i, n) {
    return t instanceof Object && t.x ? Ri(t, i, 0, 0) : Li(t, i, n, 0, 0)
  }
  function Li(t, i, n, e, s) {
    var h = Math[Ja](n),
      r = Math[Qa](n),
      a = t - e,
      f = i - s;
    return t = a * r - f * h + e,
    i = a * h + f * r + s,
    new TD(t, i, n)
  }
  function Ri(t, i, n, e) {
    n = n || 0,
    e = e || 0;
    var s = Math[Ja](i),
      h = Math[Qa](i),
      r = t.x - n,
      a = t.y - e;
    return t.x = r * h - a * s + n,
    t.y = r * s + a * h + e,
    t
  }
  function Ni(t, i, n) {
    return Di(t, i, n, 0, 0)
  }
  function Di(t, i, n, e, s) {
    var h = Li(t.x, t.y, i, e, s),
      r = Ci(t.x + t.width, t.y, i, e, s),
      a = Ci(t.x + t.width, t.y + t[tf], i, e, s),
      f = Ci(t.x, t.y + t[tf], i, e, s);
    return n ? n[nf]() : n = new SD,
    n[ef](h),
    n[ef](r),
    n[ef](a),
    n[ef](f),
    n
  }
  function $i(t, i) {
    var n = this.ratio || 1;
    this.style[sf] = t + hf,
    this.style[tf] = i + hf,
    this.width = t * n,
    this.height = i * n
  }
  function Bi() {
    this[rf].width = this[rf][sf]
  }
  function Fi(t) {
    var i = t[af] || t.mozBackingStorePixelRatio || t[ff] || t[of] || t[_f] || 1;
    return k$ / i
  }
  function Gi(t, n, e) {
    var s = i[cf](rf);
    if (s.g = s[uf](df), t !== !0 && !e) return t && n && (s[sf] = t, s[tf] = n),
    s;
    var h = s.g;
    return h[lf] = s[lf] = Fi(h),
    s[vf] = $i,
    h._kc = Bi,
    t && n && s[vf](t, n),
    s
  }
  function zi(t, i, e) {
    if (t === n || null === t) return {
      width: 0,
      height: 0
    };
    var s = Yi();
    e = e || pD[bf],
    s[yf] != e && (s.font = e);
    for (var h = i * pD.LINE_HEIGHT, r = 0, a = 0, f = t.split(gf), o = 0, _ = f[Gh]; _ > o; o++) {
      var c = f[o];
      r = Math[pf](s[xf](c)[sf], r),
      a += h
    }
    return {
      width: r,
      height: a
    }
  }
  function Yi(t, i) {
    return O$ || (O$ = Gi()),
    t && i && (O$[sf] = t, O$[tf] = i),
    O$.g
  }
  function Hi(t) {
    return Math[Gr](t + Math[Ef](t * t + 1))
  }
  function qi(t, i) {
    i = i || t(1);
    var n = 1 / i,
      e = .5 * n,
      s = Math.min(1, i / 100);
    return function (h) {
        if (0 >= h) return 0;
        if (h >= i) return 1;
        for (var r = h * n, a = 0; a++ < 10;) {
          var f = t(r),
            o = h - f;
          if (Math[Hr](o) <= s) return r;
          r += o * e
        }
        return r
      }
  }
  function Ui(t, i, n) {
    var e = 1 - t,
      s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4],
      h = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
    if (n) {
        var r = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0],
          a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
        return {
            x: s,
            y: h,
            rotate: Math[mf](a, r)
          }
      }
    return {
        t: t,
        x: s,
        y: h
      }
  }
  function Wi(t, i, n) {
    var e = t - 2 * i + n;
    return 0 != e ? (t - i) / e : -1
  }
  function Xi(t, i) {
    i[nr](t[4], t[5]);
    var n = Wi(t[0], t[2], t[4]);
    if (n > 0 && 1 > n) {
      var e = Ui(n, t);
      i[nr](e.x, e.y)
    }
    var s = Wi(t[1], t[3], t[5]);
    if (s > 0 && 1 > s) {
      var e = Ui(s, t);
      i.add(e.x, e.y)
    }
    return i
  }
  function Vi(t) {
    if (t[0] == t[2] && t[1] == t[3] || t[1] == t[3] && t[1] == t[5]) {
      var i = t[0],
        n = t[1],
        e = t[4],
        s = t[5],
        h = Math[Ef](M$(i, n, e, s));
      return function (t) {
          return h * t
        }
    }
    var r = t[0],
      a = t[2],
      f = t[4],
      o = r - 2 * a + f,
      _ = 2 * a - 2 * r;
    r = t[1],
    a = t[3],
    f = t[5];
    var c = r - 2 * a + f,
      u = 2 * a - 2 * r,
      d = 4 * (o * o + c * c),
      l = 4 * (o * _ + c * u),
      v = _ * _ + u * u,
      h = 4 * d * v - l * l,
      b = 1 / h,
      y = .125 * Math[wf](d, -1.5),
      g = 2 * Math[Ef](d),
      p = (h * Hi(l / Math[Ef](h)) + 2 * Math[Ef](d) * l * Math[Ef](v)) * y;
    return function (t) {
        var i = l + 2 * t * d,
          n = i / Math[Ef](h),
          e = i * i * b;
        return (h * Math[Gr](n + Math.sqrt(e + 1)) + g * i * Math.sqrt(v + t * l + t * t * d)) * y - p
      }
  }
  function Ki(t, i, n) {
    var e = 1 - t,
      s = i[0],
      h = i[2],
      r = i[4],
      a = i[6],
      f = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + a * t * t * t;
    if (n) var o = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
    s = i[1],
    h = i[3],
    r = i[5],
    a = i[7];
    var _ = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + a * t * t * t;
    if (n) {
        var c = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
        return {
          x: f,
          y: _,
          rotate: Math[mf](c, o)
        }
      }
    return {
        x: f,
        y: _
      }
  }
  function Zi(t, i, n, e) {
    var s = -t + 3 * i - 3 * n + e;
    if (0 == s) return [(t - i) / (2 * n - 4 * i + 2 * t)];
    var h = 2 * t - 4 * i + 2 * n,
      r = i - t,
      a = h * h - 4 * s * r;
    return 0 > a ? void 0 : 0 == a ? [-h / (2 * s)] : (a = Math[Ef](a), [(a - h) / (2 * s), (-a - h) / (2 * s)])
  }
  function Ji(t, i) {
    i[nr](t[6], t[7]);
    var n = Zi(t[0], t[2], t[4], t[6]);
    if (n) for (var e = 0; e < n[Gh]; e++) {
      var s = n[e];
      if (!(0 >= s || s >= 1)) {
        var h = Ki(s, t);
        i[nr](h.x, h.y)
      }
    }
    if (n = Zi(t[1], t[3], t[5], t[7])) for (var e = 0; e < n[Gh]; e++) {
      var s = n[e];
      if (!(0 >= s || s >= 1)) {
        var h = Ki(s, t);
        i[nr](h.x, h.y)
      }
    }
  }
  function Qi(t) {
    var i = {
      x: t[0],
      y: t[1]
    },
      n = {
        x: t[2],
        y: t[3]
      },
      e = {
        x: t[4],
        y: t[5]
      },
      s = {
        x: t[6],
        y: t[7]
      },
      h = i.x - 0,
      r = i.y - 0,
      a = n.x - 0,
      f = n.y - 0,
      o = e.x - 0,
      _ = e.y - 0,
      c = s.x - 0,
      u = s.y - 0,
      d = 3 * (-h + 3 * a - 3 * o + c),
      l = 6 * (h - 2 * a + o),
      v = 3 * (-h + a),
      b = 3 * (-r + 3 * f - 3 * _ + u),
      y = 6 * (r - 2 * f + _),
      g = 3 * (-r + f),
      p = function (t) {
        var i = d * t * t + l * t + v,
          n = b * t * t + y * t + g;
        return Math.sqrt(i * i + n * n)
      },
      x = (p(0) + 4 * p(.5) + p(1)) / 6;
    return x
  }
  function tn(t, i) {
    function n(t, i, n, e) {
      var s = -t + 3 * i - 3 * n + e,
        h = 2 * t - 4 * i + 2 * n,
        r = i - t;
      return function (t) {
          return 3 * (s * t * t + h * t + r)
        }
    }
    function e(t, i) {
      var n = s(t),
        e = h(t);
      return Math.sqrt(n * n + e * e) * i
    }
    var s = n(t[0], t[2], t[4], t[6]),
      h = n(t[1], t[3], t[5], t[7]);
    i = i || 100;
    var r = 1 / i;
    return function (t) {
        if (!t) return 0;
        for (var i, n = 0, s = 0;;) {
          if (i = n + r, i >= t) return s += e(n, i - n);
          s += e(n, r),
          n = i
        }
      }
  }
  function nn(t, i, n) {
    return M$(i, n, t.cx, t.cy) <= t._squareR + S$
  }
  function en(t, i, n, e) {
    return n = n || sn(t, i),
    new hn((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e)
  }
  function sn(t, i) {
    return kD(t.x, t.y, i.x, i.y)
  }
  function hn(t, i, n, e, s, h, r) {
    this.cx = t,
    this.cy = i,
    this.r = n,
    this._squareR = n * n,
    this.p1 = e,
    this.p2 = s,
    this.p3 = h,
    this._otherPoint = r
  }
  function rn(t, i, n, e) {
    this.cx = t,
    this.cy = i,
    this[sf] = n,
    this.height = e
  }
  function an(t) {
    var i = t[0],
      n = t[1],
      e = t[2],
      s = hn._jhCircle(i, n, e);
    return on(t, i, n, e, s)
  }
  function fn(t, i) {
    i = i || _n(t);
    for (var n, e = i[sf] / i[tf], s = [], h = t[Gh], r = 0; h > r; r++) n = t[r],
    s.push({
      x: n.x,
      y: n.y * e
    });
    var a = an(s);
    return a ? new rn(a.cx, a.cy / e, 2 * a.r, 2 * a.r / e) : void 0
  }
  function on(t, i, n, e, s) {
    for (var h, r, a = t[Gh], f = s._squareR, o = 0; a > o; o++) if (h = t[o], h != i && h != n && h != e) {
      var _ = M$(s.cx, s.cy, h.x, h.y);
      _ - S$ > f && (f = _, r = h)
    }
    if (!r) return s;
    var c, u = hn._jhCircle(r, i, n),
      d = hn._jhCircle(r, i, e),
      l = hn._jhCircle(r, e, n);
    return nn(u, e.x, e.y) && (c = u),
    nn(d, n.x, n.y) && (!c || c.r > d.r) && (c = d),
    nn(l, i.x, i.y) && (!c || c.r > l.r) && (c = l),
    i = c.p1,
    n = c.p2,
    e = c.p3 || c._otherPoint,
    on(t, i, n, e, c)
  }
  function _n(t) {
    for (var i, n = t[Gh], e = new SD, s = 0; n > s; s++) i = t[s],
    e[nr](i.x, i.y);
    return e
  }
  function cn(t, i, n, e, s) {
    this._68 && this[Tf]();
    var h = s ? this[kf](s) : this[Of],
      r = n / h[sf],
      a = t - r * h.x,
      f = e / h[tf],
      o = i - f * h.y,
      _ = this._f4,
      c = [];
    return l(_, function (t) {
        var i = t[Kh](),
          n = i.points;
        if (n && n[Gh]) {
            for (var e = n[Gh], s = [], h = 0; e > h; h++) {
              var _ = n[h];
              h++;
              var u = n[h];
              _ = r * _ + a,
              u = f * u + o,
              s[Ea](_),
              s.push(u)
            }
            i[Mf] = s
          }
        c.push(i)
      }, this),
    new hB(c)
  }
  function un(t, i, n, e, s, h) {
    if (s = s || 0, n = n || 0, !s && !h) return !1;
    if (!e) {
      var r = this.getBounds(s);
      if (!r[Sf](t, i, n)) return !1
    }
    var a = Math[jf](2 * n) || 1,
      f = Yi(a, a),
      o = (f[rf], -t + n),
      _ = -i + n;
    if (f.setTransform(1, 0, 0, 1, o, _), !f[If]) {
        this._lj(f),
        s && f[Pf](),
        h && f[Af]();
        for (var c = f.getImageData(0, 0, a, a)[Cf], u = c[Gh] / 4; u > 0;) {
          if (c[4 * u - 1] > sB) return !0;
          --u
        }
        return !1
      }
    return f[Lf] = (s || 0) + 2 * n,
    this._lj(f),
    s && f.isPointInStroke(n, n) ? !0 : h ? f[Rf](n, n) : !1
  }
  function dn(t, i, n) {
    if (!this._j8) return null;
    var e = this._f4;
    if (e[Gh] < 2) return null;
    n === !1 && (t += this._j8);
    var s = e[0];
    if (0 >= t) return Bs(s.points[0], s[Mf][1], e[1][Mf][0], e[1][Mf][1], t, i);
    if (t >= this._j8) {
      s = e[e[Gh] - 1];
      var h, r, a = s[Mf],
        f = a[Gh],
        o = a[f - 2],
        _ = a[f - 1];
      if (f >= 4) h = a[f - 4],
      r = a[f - 3];
      else {
          s = e[e[Gh] - 2];
          var c = s[Nf];
          h = c.x,
          r = c.y
        }
      return Bs(o, _, o + o - h, _ + _ - r, t - this._j8, i)
    }
    for (var u, d = 0, l = 1, f = e[Gh]; f > l; l++) if (u = e[l], u._j8) {
      if (!(d + u._j8 < t)) {
        var v, c = s[Nf];
        if (u.type == iB) {
          var b = u[Mf];
          v = ln(t - d, u, c.x, c.y, b[0], b[1], b[2], b[3], u._r)
        } else {
          if (!u._lf) return Bs(c.x, c.y, u[Mf][0], u[Mf][1], t - d, i);
          var y = qi(u._lf, u._j8)(t - d),
            b = u[Mf];
          v = u[Df] == tB && 6 == b.length ? Ki(y, [c.x, c.y][Wh](b), !0) : Ui(y, [c.x, c.y][Wh](b), !0)
        }
        return i && (v.x -= i * Math[Ja](v[$f] || 0), v.y += i * Math[Qa](v[$f] || 0)),
        v
      }
      d += u._j8,
      s = u
    } else s = u
  }
  function ln(t, i, n, e, s, h, r, a) {
    if (t <= i._l1) return Bs(n, e, s, h, t);
    if (t >= i._j8) return t -= i._j8,
    Bs(i._p2x, i._p2y, r, a, t);
    if (t -= i._l1, i._o) {
      var f = t / i._r;
      i._CCW && (f = -f);
      var o = Li(i._p1x, i._p1y, f, i._o.x, i._o.y);
      return o.rotate += i._n71 || 0,
      o[$f] += Math.PI,
      o
    }
    return Bs(i._p1x, i._p1y, i._p2x, i._p2y, t)
  }
  function ei(t, i, n) {
    var e, s, h;
    0 == t._n7 ? (e = -1, h = 0, s = i) : 0 == t._n9 ? (e = 0, h = 1, s = n) : (e = -1 / t._n7, s = (t._n7 - e) * i + t._n8, h = 1);
    var r = new OD;
    return r._n7 = e,
    r._n8 = s,
    r._n9 = h,
    r._n0 = i,
    r._n2 = n,
    r
  }
  function vn(t) {
    return t %= 2 * Math.PI,
    0 > t && (t += 2 * Math.PI),
    t
  }
  function bn(t, i, n, e, s, h, r, a) {
    var f = kD(i, n, e, s),
      o = kD(e, s, h, r);
    if (!f || !o) return t._d = 0,
    t._r = 0,
    t._l1 = f,
    t._l2 = o,
    t._j8 = 0;
    var _ = gn(e, s, i, n),
      c = gn(e, s, h, r);
    t._n71 = _,
    t._n72 = c;
    var u = _ - c;
    u = vn(u),
    u > Math.PI && (u = 2 * Math.PI - u, t._CCW = !0);
    var d = Math.PI - u,
      l = Math[Bf](u / 2),
      v = a / l,
      b = Math.min(f, o);
    v > b && (v = b, a = l * v);
    var y, g = e + Math.cos(_) * v,
      p = s + Math.sin(_) * v,
      x = e + Math[Qa](c) * v,
      E = s + Math[Ja](c) * v,
      m = new OD(i, n, e, s),
      w = new OD(e, s, h, r),
      T = ei(m, g, p),
      k = ei(w, x, E),
      O = T._3t(k),
      M = Math[mf](p - O.y, g - O.x),
      S = Math[mf](E - O.y, x - O.x);
    y = t._CCW ? S : M;
    for (var j, I = 0; 4 > I;) {
        var P = I * mD;
        if (vn(P - y) <= d) {
          var A, C;
          if (j ? j++ : j = 1, 0 == I ? (A = O.x + a, C = O.y) : 1 == I ? (A = O.x, C = O.y + a) : 2 == I ? (A = O.x - a, C = O.y) : (A = O.x, C = O.y - a), t[Ff + j] = {
            x: A,
            y: C
          }, 2 == j) break
        }
        I++
      }
    return t._p1x = g,
    t._p1y = p,
    t._p2x = x,
    t._p2y = E,
    t._o = O,
    t._d = v,
    t._r = a,
    t._l1 = f - v,
    t._l2 = o - v,
    t._j8 = t._l1 + d * a
  }
  function yn(t, i, n, e, s, h, r) {
    var a = gn(n, e, t, i),
      f = gn(n, e, s, h),
      o = a - f;
    return r ? o : (0 > o && (o = -o), o > Math.PI && (o -= Math.PI), o)
  }
  function gn(t, i, n, e) {
    return Math[mf](e - i, n - t)
  }
  function pn(t) {
    var i = I$[Gf](t);
    if (i) return i[1];
    var n = t[zf]($r);
    return n >= 0 && n < t.length - 1 ? t[na](n + 1) : void 0
  }
  function xn(t) {
    if (!t) return null;
    if (t instanceof hB) return D$;
    if (t.draw instanceof Function) return N$;
    if (M(t)) {
      var i = pn(t);
      if (i) {
        if (!nD && P$[Yf](i)) return R$;
        if (A$[Yf](i)) return L$
      }
      return C$
    }
  }
  function En(t, i, n) {
    if (this._lq = xn(t), !this._lq) throw new Error("the image format is not supported", t);
    this._lo = t,
    this._n89 = i,
    this._8t = n,
    this[sf] = i || pD.IMAGE_WIDTH,
    this[tf] = n || pD[Hf],
    this._ju = {}
  }
  function mn(t, i, n, e) {
    return i ? (G$[t] = new En(i, n, e), t) : void delete G$[t]
  }
  function wn(t) {
    if (t._kh) return t._kh;
    var i = M(t);
    if (!i && !t[kr]) return t._kh = new En(t);
    var n = t.name || t;
    return n in G$ ? G$[n] : G$[n] = new En(t)
  }
  function Tn(t) {
    return t in G$
  }
  function kn(t, i, n) {
    n = n || {};
    var e = t.getBounds(n.lineWidth);
    if (!e[sf] || !e[tf]) return !1;
    var s = i.getContext(df),
      h = i[lf] || 1,
      r = n[qf] || Uf,
      a = /full/i [Yf](r),
      f = /uniform/i [Yf](r),
      o = 1,
      _ = 1;
    if (a) {
        var c = i.width,
          u = i[tf],
          d = n[Wf],
          l = 0,
          v = 0;
        if (d) {
            var b, y, g, p;
            O(d) ? b = y = g = p = d : (b = d[Xf] || 0, y = d.bottom || 0, g = d[la] || 0, p = d.right || 0),
            c -= g + p,
            u -= b + y,
            l += g,
            v += b
          }
        o = c / e.width,
        _ = u / e[tf],
        f && (o > _ ? (l += (c - _ * e[sf]) / 2, o = _) : _ > o && (v += (u - o * e[tf]) / 2, _ = o)),
        (l || v) && s.translate(l, v)
      }
    s[Vf](-e.x * o, -e.y * _),
    t[Kf](s, h, n, o, _, !0)
  }
  function On(t, i, n) {
    var e = wn(t);
    return e ? (e[Tf](), (e._lq == R$ || e._6a()) && e._n84(function (t) {
      t[Zf] && (this.width = this[sf], kn(t[Zf], this, n))
    }, i), void kn(e, i, n)) : (w$[Jf](Qf + t), !1)
  }
  function Mn(t, i, e, s) {
    var h = t[Gh];
    if (h && !(0 > h)) {
      s = s || 1;
      for (var r, a, f, o = [], _ = 0; _++ < h;) if (r = t[to](_, 0), r && kD(i, e, r.x, r.y) <= s) {
        a = _,
        f = r[$f];
        break
      }
      if (a !== n) {
        for (var r, c, u, d = 0, _ = 0, l = t._f4[Gh]; l > _; _++) {
          if (r = t._f4[_], !c && (d += r._j8 || 0, d > a)) {
            c = !0;
            var v = Math[pf](10, r._j8 / 6),
              b = v * Math[Ja](f),
              y = v * Math[Qa](f);
            if (r[Df] == tB) {
                var g = r.points[0],
                  p = r[Mf][1];
                if (u) {
                    var x = new OD(i, e, i + y, e + b),
                      E = x._3t(new OD(u.lastPoint.x, u.lastPoint.y, r.points[0], r[Mf][1]));
                    E.x !== n && (g = E.x, p = E.y)
                  }
                o.push(new eB(tB, [g, p, i - y, e - b, i, e]))
              } else o.push(new eB(Q$, [i - y, e - b, i, e]));
            if (r[Mf]) if (r[Df] == tB) {
                r.points[0] = i + y,
                r[Mf][1] = e + b;
                var x = new OD(i, e, i + y, e + b),
                  E = x._3t(new OD(r[Mf][2], r[Mf][3], r[Mf][4], r.points[5]));
                E.x !== n && (r[Mf][2] = E.x, r[Mf][3] = E.y)
              } else if (r[Df] == Q$) {
                r.type = tB,
                r[Mf] = [i + y, e + b].concat(r.points);
                var x = new OD(i, e, i + y, e + b),
                  E = x._3t(new OD(r[Mf][2], r[Mf][3], r[Mf][4], r[Mf][5]));
                E.x !== n && (r[Mf][2] = E.x, r.points[3] = E.y)
              } else r[Df] == J$ && (r[Df] = Q$, r[Mf] = [i + y, e + b][Wh](r[Mf]), _ == l - 1 && (r[io] = !0))
          }
          o[Ea](r),
          u = r
        }
        return o
      }
    }
  }
  function Sn(t) {
    var i = t[sf],
      n = t.height;
    try {
        var e = t.g[no](0, 0, i, n);
        return In(e.data, i, n)
      } catch (s) {
        w$.error(s)
      }
  }
  function jn(t, i, n) {
    this._1b(t, i, n)
  }
  function In(t, i, n) {
    return new jn(t, i, n)
  }
  function Pn(t) {
    if (Ar == t[0]) {
      if (t = t.substring(1), 3 == t[Gh]) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
      else if (6 != t.length) return;
      return t = parseInt(t, 16),
      [t >> 16 & 255, t >> 8 & 255, 255 & t]
    }
    if (/^rgb/i [Yf](t)) {
      var i = t[er](eo),
        n = t[er](Pr);
      if (0 > i || i > n) return;
      if (t = t.substring(i + 1, n), t = t[Dr](Ir), t[Gh] < 3) return;
      var e = parseInt(t[0]),
        s = parseInt(t[1]),
        h = parseInt(t[2]),
        r = 3 == t.length ? 255 : parseInt(t[3]);
      return [e, s, h, r]
    }
  }
  function An(t, i, n) {
    return n || (n = pD[so]),
    n == T$.BLEND_MODE_MULTIPLY ? t * i : n == T$[ho] ? Math[ro](t, i) : n == T$.BLEND_MODE_COLOR_BURN ? 1 - (1 - i) / t : n == T$[ao] ? t + i - 1 : n == T$.BLEND_MODE_LIGHTEN ? Math[pf](t, i) : n == T$[fo] ? t + i - t * i : i
  }
  function Cn(t, i, n) {
    var e = Pn(i);
    if (!e) return void w$[Jf](oo + i + _o);
    var s = t.g.getImageData(0, 0, t.width, t[tf]),
      h = s[Cf];
    if (n instanceof Function) h = n(t, h, e) || h;
    else {
        var r = e[0] / 255,
          a = e[1] / 255,
          f = e[2] / 255;
        if (n == T$[co]) for (var o = 0, _ = h[Gh]; _ > o; o += 4) {
            var c = 77 * h[o] + 151 * h[o + 1] + 28 * h[o + 2] >> 8;
            h[o] = c * r | 0,
            h[o + 1] = c * a | 0,
            h[o + 2] = c * f | 0
          } else for (var o = 0, _ = h[Gh]; _ > o; o += 4) h[o] = 255 * An(r, h[o] / 255, n) | 0,
        h[o + 1] = 255 * An(a, h[o + 1] / 255, n) | 0,
        h[o + 2] = 255 * An(f, h[o + 2] / 255, n) | 0
      }
    var t = Gi(t[sf], t[tf]);
    return t.g[uo](s, 0, 0),
    t
  }
  function Ln(t, i, n, e) {
    return 1 > n && (n = 1),
    Rn(t - n, i - n, 2 * n, 2 * n, e)
  }
  function Rn(t, i, n, e, s) {
    n = Math[jf](n) || 1,
    e = Math[jf](e) || 1;
    var h = Yi(n, e);
    h[lo](1, 0, 0, 1, -t, -i),
    s[Kf](h);
    for (var r = h[no](0, 0, n, e)[Cf], a = r[Gh] / 4; a-- > 0;) if (r[4 * a - 1] > sB) return !0;
    return !1
  }
  function Nn(t, i, n, e, s, h) {
    t -= s.$x,
    i -= s.$y;
    var r = s._ex[vo](t, i, n, e);
    if (!r) return !1;
    t = r.x * h,
    i = r.y * h,
    n = r[sf] * h,
    e = r.height * h,
    n = Math.round(n) || 1,
    e = Math[jf](e) || 1;
    var a = Yi(),
      f = a[rf];
    f[sf] < n || f[tf] < e ? (f.width = n, f[tf] = e) : (a[lo](1, 0, 0, 1, 0, 0), a[bo](0, 0, n, e)),
    a.setTransform(1, 0, 0, 1, -t - s.$x * h, -i - s.$y * h),
    a[yo](h, h),
    s._j3(a, 1);
    for (var o = a[no](0, 0, n, e)[Cf], _ = o[Gh] / 4; _-- > 0;) if (o[4 * _ - 1] > sB) return !0;
    return !1
  }
  function Dn(t, i, n, e, s, h, r, a, f) {
    if (ri(t, i, n, e, a, f)) return null;
    var o, _, c, u = new eB(J$, [t + n - s, i]),
      d = new eB(Q$, [t + n, i, t + n, i + h]),
      l = new eB(J$, [t + n, i + e - h]),
      v = new eB(Q$, [t + n, i + e, t + n - s, i + e]),
      b = new eB(J$, [t + s, i + e]),
      y = new eB(Q$, [t, i + e, t, i + e - h]),
      g = new eB(J$, [t, i + h]),
      p = new eB(Q$, [t, i, t + s, i]),
      x = (new eB(nB), [u, d, l, v, b, y, g, p]),
      E = new SD(t + s, i + h, n - s - s, e - h - h);
    t > a ? (o = PD, c = 5) : a > t + n ? (o = CD, c = 1) : (o = AD, c = 0),
    i > f ? (_ = LD, o == PD && (c = 7)) : f > i + e ? (_ = ND, o == CD ? c = 3 : o == AD && (c = 4)) : (_ = RD, o == PD ? c = 6 : o == CD && (c = 2));
    var m = Yn(c, t, i, n, e, s, h, r, a, f, E),
      w = m[0],
      T = m[1],
      k = new hB,
      O = k._f4;
    O[Ea](new eB(Z$, [w.x, w.y])),
    O[Ea](new eB(J$, [a, f])),
    O.push(new eB(J$, [T.x, T.y])),
    T._lp && (O.push(T._lp), T._lpNO++);
    for (var M = T._lpNO % 8, S = w._lpNO; O.push(x[M]), ++M, M %= 8, M != S;);
    return w._lp && O.push(w._lp),
    k[go](),
    k
  }
  function $n(t, i, e, s, h, r, a, f, o, _, c, u, d, l) {
    var v = new OD(u, d, e, s),
      b = new OD(i[0], i[1], i[4], i[5]),
      y = b._3t(v, c),
      g = y[0],
      p = y[1];
    if (g._rest !== n) {
        g._lpNO = (t - 1) % 8,
        p._lpNO = (t + 1) % 8;
        var x = g._rest;
        7 == t ? (g.y = r + _ + Math[ro](l[tf], x), p.x = h + o + Math.min(l[sf], x)) : 5 == t ? (g.x = h + o + Math[ro](l.width, x), p.y = r + f - _ - Math.min(l[tf], x)) : 3 == t ? (g.y = r + f - _ - Math[ro](l[tf], x), p.x = h + a - o - Math.min(l[sf], x)) : 1 == t && (g.x = h + a - o - Math[ro](l[sf], x), p.y = r + _ + Math[ro](l[tf], x))
      } else {
        v._mv(v._n0, v._n2, g.x, g.y),
        g = v._$k(i),
        v._mv(v._n0, v._n2, p.x, p.y),
        p = v._$k(i);
        var E = Hn(i, [g, p]),
          m = E[0],
          w = E[2];
        g._lpNO = t,
        p._lpNO = t,
        g._lp = new eB(Q$, m[qh](2)),
        p._lp = new eB(Q$, w[qh](2))
      }
    return [g, p]
  }
  function Bn(t, i, n, e, s, h, r, a, f, o) {
    var _, c;
    if (f - a >= i + h) _ = {
      y: n,
      x: f - a
    },
    _._lpNO = 0;
    else {
      _ = {
        y: n + r,
        x: Math.max(i, f - a)
      };
      var u = [i, n + r, i, n, i + h, n],
        d = new OD(f, o, _.x, _.y);
      if (_ = d._$k(u)) {
          j(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
          var l = Hn(u, [_]);
          l = l[0],
          l && (_._lp = new eB(Q$, l.slice(2))),
          _._lpNO = 7
        } else _ = {
          y: n,
          x: i + h
        },
      _._lpNO = 0
    }
    if (i + e - h >= f + a) c = {
      y: n,
      x: f + a
    },
    c._lpNO = 0;
    else {
      c = {
        y: n + r,
        x: Math.min(i + e, f + a)
      };
      var v = [i + e - h, n, i + e, n, i + e, n + r],
        d = new OD(f, o, c.x, c.y);
      if (c = d._$k(v)) {
          j(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
          var l = Hn(v, [c]);
          l && l[l[Gh] - 1] && (c._lp = new eB(Q$, l[l.length - 1][qh](2))),
          c._lpNO = 1
        } else c = {
          y: n,
          x: i + e - h
        },
      c._lpNO = 0
    }
    return [_, c]
  }
  function Fn(t, i, n, e, s, h, r, a, f, o) {
    var _, c;
    if (o - a >= n + r) _ = {
      x: i + e,
      y: o - a
    },
    _._lpNO = 2;
    else {
      _ = {
        x: i + e - h,
        y: Math[pf](n, o - a)
      };
      var u = [i + e - h, n, i + e, n, i + e, n + r],
        d = new OD(f, o, _.x, _.y);
      if (_ = d._$k(u)) {
          j(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
          var l = Hn(u, [_]);
          l = l[0],
          l && (_._lp = new eB(Q$, l[qh](2))),
          _._lpNO = 1
        } else _ = {
          x: i + e,
          y: n + r
        },
      _._lpNO = 2
    }
    if (n + s - r >= o + a) c = {
      x: i + e,
      y: o + a
    },
    c._lpNO = 2;
    else {
      c = {
        x: i + e - h,
        y: Math[ro](n + s, o + a)
      };
      var v = [i + e, n + s - r, i + e, n + s, i + e - h, n + s],
        d = new OD(f, o, c.x, c.y);
      if (c = d._$k(v)) {
          j(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
          var l = Hn(v, [c]);
          l[1] && (c._lp = new eB(Q$, l[1][qh](2))),
          c._lpNO = 3
        } else c = {
          x: i + e,
          y: n + s - r
        },
      c._lpNO = 2
    }
    return [_, c]
  }
  function Gn(t, i, n, e, s, h, r, a, f, o) {
    var _, c;
    if (f - a >= i + h) c = {
      y: n + s,
      x: f - a
    },
    c._lpNO = 4;
    else {
      c = {
        y: n + s - r,
        x: Math[pf](i, f - a)
      };
      var u = [i + h, n + s, i, n + s, i, n + s - r],
        d = new OD(f, o, c.x, c.y);
      if (c = d._$k(u)) {
          j(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
          var l = Hn(u, [c]);
          l = l[l.length - 1],
          l && (c._lp = new eB(Q$, l[qh](2))),
          c._lpNO = 5
        } else c = {
          y: n + s,
          x: i + h
        },
      c._lpNO = 4
    }
    if (i + e - h >= f + a) _ = {
      y: n + s,
      x: f + a
    },
    _._lpNO = 4;
    else {
      _ = {
        y: n + s - r,
        x: Math[ro](i + e, f + a)
      };
      var v = [i + e, n + s - r, i + e, n + s, i + e - h, n + s],
        d = new OD(f, o, _.x, _.y);
      if (_ = d._$k(v)) {
          j(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
          var l = Hn(v, [_]);
          l[0] && (_._lp = new eB(Q$, l[0].slice(2))),
          _._lpNO = 3
        } else _ = {
          y: n + s,
          x: i + e - h
        },
      _._lpNO = 4
    }
    return [_, c]
  }
  function zn(t, i, n, e, s, h, r, a, f, o) {
    var _, c;
    if (o - a >= n + r) c = {
      x: i,
      y: o - a
    },
    c._lpNO = 6;
    else {
      c = {
        x: i + h,
        y: Math[pf](n, o - a)
      };
      var u = [i, n + r, i, n, i + h, n],
        d = new OD(f, o, c.x, c.y);
      if (c = d._$k(u)) {
          j(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
          var l = Hn(u, [c]);
          l = l[l[Gh] - 1],
          l && (c._lp = new eB(Q$, l.slice(2)))
        } else c = {
          x: i,
          y: n + r
        };
      c._lpNO = 7
    }
    if (n + s - r >= o + a) _ = {
      x: i,
      y: o + a
    },
    _._lpNO = 6;
    else {
      _ = {
        x: i + h,
        y: Math[ro](n + s, o + a)
      };
      var v = [i + h, n + s, i, n + s, i, n + s - r],
        d = new OD(f, o, _.x, _.y);
      if (_ = d._$k(v)) {
          j(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
          var l = Hn(v, [_]);
          l[0] && (_._lp = new eB(Q$, l[0].slice(2))),
          _._lpNO = 5
        } else _ = {
          x: i,
          y: n + s - r
        },
      _._lpNO = 6
    }
    return [_, c]
  }
  function Yn(t, i, n, e, s, h, r, a, f, o, _) {
    var c = a / 2;
    switch (t) {
    case 7:
      var u = [i, n + r, i, n, i + h, n],
        d = i + h,
        l = n + r;
      return $n(t, u, d, l, i, n, e, s, h, r, a, f, o, _);
    case 5:
      return u = [i + h, n + s, i, n + s, i, n + s - r],
      d = i + h,
      l = n + s - r,
      $n(t, u, d, l, i, n, e, s, h, r, a, f, o, _);
    case 3:
      return u = [i + e, n + s - r, i + e, n + s, i + e - h, n + s],
      d = i + e - h,
      l = n + s - r,
      $n(t, u, d, l, i, n, e, s, h, r, a, f, o, _);
    case 1:
      return u = [i + e - h, n, i + e, n, i + e, n + r],
      d = i + e - h,
      l = n + r,
      $n(t, u, d, l, i, n, e, s, h, r, a, f, o, _);
    case 0:
      return Bn(t, i, n, e, s, h, r, c, f, o, _);
    case 2:
      return Fn(t, i, n, e, s, h, r, c, f, o, _);
    case 4:
      return Gn(t, i, n, e, s, h, r, c, f, o, _);
    case 6:
      return zn(t, i, n, e, s, h, r, c, f, o, _)
    }
  }
  function Hn(t, i) {
    for (var e, s, h, r, a, f, o = t[0], _ = t[1], c = t[2], u = t[3], d = t[4], l = t[5], v = [], b = 0; b < i[Gh]; b++) a = i[b],
    f = a.t,
    0 != f && 1 != f ? (e = o + (c - o) * f, s = _ + (u - _) * f, h = c + (d - c) * f, r = u + (l - u) * f, v[Ea]([o, _, e, s, a.x, a.y]), o = a.x, _ = a.y, c = h, u = r) : v[Ea](null);
    return h !== n && v[Ea]([a.x, a.y, h, r, d, l]),
    v
  }
  function qn(t) {
    return this.$layoutByAnchorPoint && this._n7b && (t.x -= this._n7b.x, t.y -= this._n7b.y),
    this[po] && Ri(t, this[po]),
    t.x += this[xo] || 0,
    t.y += this.$offsetY || 0,
    this[Eo] && this.$_hostRotate ? Ri(t, this.$_hostRotate) : t
  }
  function Un(t) {
    return this.$rotatable && this.$_hostRotate && Ri(t, -this[mo]),
    t.x -= this.$offsetX || 0,
    t.y -= this[wo] || 0,
    this[po] && Ri(t, -this[po]),
    this[To] && this._n7b && (t.x += this._n7b.x, t.y += this._n7b.y),
    t
  }
  function Wn() {
    var t = this[ko];
    this[ko] && (this.$invalidateSize = !1, this[Oo] = !0, this._7r[Mo](this._is), this[So] && this._7r[jo](this[So]), this[Io] && this._7r[jo](this.$border));
    var i = this._$u();
    if (i) var n = this[Po] && this.$pointerWidth;
    return this[Oo] && this.$layoutByAnchorPoint && (this.$invalidateAnchorPoint = !1, n && (t = !0), this._n7b = fi(this[Ao], this._7r.width, this._7r.height), this._n7b.x += this._7r.x, this._n7b.y += this._7r.y),
    i ? (t && (this._n8ackgroundGradientInvalidateFlag = !0, Xn.call(this, n)), this._n8ackgroundGradientInvalidateFlag && (this._n8ackgroundGradientInvalidateFlag = !1, this._n8ackgroundGradient = this[Co] && this._mjShape && this._mjShape[Of] ? z$.prototype.generatorGradient.call(this.backgroundGradient, this._mjShape[Of]) : null), t) : (this.__m4Pointer = !1, t)
  }
  function Xn(t) {
    var i = this._7r.x + this[Io] / 2,
      n = this._7r.y + this[Io] / 2,
      e = this._7r[sf] - this[Io],
      s = this._7r[tf] - this[Io],
      h = 0,
      r = 0;
    if (this.$borderRadius && (O(this[Lo]) ? h = r = this[Lo] : (h = this[Lo].x || 0, r = this[Lo].y || 0), h = Math.min(h, e / 2), r = Math[ro](r, s / 2)), t && (this._pointerX = this._n7b.x - this[xo] + this[Ro], this._pointerY = this._n7b.y - this.$offsetY + this.$pointerY, !this._7r[Sf](this._pointerX, this._pointerY))) {
        var a = new aB(i, n, e, s, h, r, this.$pointerWidth, this._pointerX, this._pointerY);
        return this._mjShape = a._lp,
        this._mjShape[Of][No](i, n, e, s),
        void(this.__m4Pointer = !0)
      }
    this._mjShape && this._mjShape.clear(),
    this._mjShape = lF[Do](i, n, e, s, h, r, this._mjShape),
    this._mjShape.bounds.set(i, n, e, s)
  }
  function Vn(t, i, n, e) {
    return e && (t.width < 0 || t[tf] < 0) ? (t.x = i, t.y = n, void(t.width = t.height = 0)) : (i < t.x ? (t.width += t.x - i, t.x = i) : i > t.x + t[sf] && (t[sf] = i - t.x), void(n < t.y ? (t[tf] += t.y - n, t.y = n) : n > t.y + t.height && (t[tf] = n - t.y)))
  }
  function Kn(t, i, e) {
    var s, h = t[$o],
      r = t.layoutByPath === n ? this.layoutByPath : t.layoutByPath;
    return this.$data instanceof hB && r ? (s = j$._n8d(h, this[Bo], this.lineWidth, i, e), s.x *= this._iu, s.y *= this._iw) : (s = fi(h, this._7r.width, this._7r.height), s.x += this._7r.x, s.y += this._7r.y),
    qn[zh](this, s)
  }
  function Zn(t, i) {
    if (i) if (i._7r[Fo]()) t.$x = i.$x,
    t.$y = i.$y;
    else {
      var n = Kn[zh](i, t);
      t.$x = n.x,
      t.$y = n.y,
      t._hostRotate = n.rotate
    } else t.$x = 0,
    t.$y = 0;
    t[Go] && _B.call(t)
  }
  function Jn(t) {
    if (t.lineDash === n) {
      var i, e;
      if (t[zo]) i = t[Yo],
      e = t.setLineDash;
      else {
        var s;
        if (t.mozDash !== n) s = Ho;
        else {
          if (t[qo] === n) return !1;
          s = qo
        }
        e = function (t) {
          this[s] = t
        },
        i = function () {
          return this[s]
        }
      }
      K(t, Uo, {
        get: function () {
          return i[zh](this)
        },
        set: function (t) {
          e.call(this, t)
        }
      })
    }
    if (t[Wo] === n) {
      var h;
      if (t[Xo] !== n) h = Xo;
      else {
        if (t[Vo] === n) return;
        h = Vo
      }
      K(t, Wo, {
        get: function () {
          return this[h]
        },
        set: function (t) {
          this[h] = t
        }
      })
    }
  }
  function Qn(t, i, n, e, s) {
    var h, r, a, f, o, _, c, u, d = function (t) {
      return function (i) {
        t(i)
      }
    },
      l = function () {
        r = null,
        a = null,
        f = o,
        o = null,
        _ = null
      },
      v = function (t) {
        h = t,
        c || (c = Gi()),
        c[sf] = h.width,
        c.height = h[tf],
        i[sf] = h[sf],
        i[tf] = h[tf]
      },
      b = function (t) {
        y(),
        l(),
        r = t.transparencyGiven ? t[Ko] : null,
        a = 10 * t[Zo],
        o = t[Jo]
      },
      y = function () {
        if (_) {
          var t = _[no](0, 0, h.width, h[tf]),
            n = {
              data: t,
              _pixels: In(t[Cf], h[sf], h[tf]),
              delay: a
            };
          s[zh](i, n)
        }
      },
      g = function (t) {
        _ || (_ = c.getContext(df));
        var i = t[Qo] ? t[t_] : h[i_],
          n = _[no](t[n_], t.topPos, t.width, t[tf]);
        t[e_][s_](function (t, e) {
            r !== t ? (n[Cf][4 * e + 0] = i[t][0], n.data[4 * e + 1] = i[t][1], n[Cf][4 * e + 2] = i[t][2], n[Cf][4 * e + 3] = 255) : (2 === f || 3 === f) && (n.data[4 * e + 3] = 0)
          }),
        _[bo](0, 0, h.width, h[tf]),
        _[uo](n, t.leftPos, t[h_])
      },
      p = function () {},
      x = {
        hdr: d(v),
        gce: d(b),
        com: d(p),
        app: {
          NETSCAPE: d(p)
        },
        img: d(g, !0),
        eof: function () {
          y(),
          n[zh](i)
        }
      },
      E = new XMLHttpRequest;
    nD || E.overrideMimeType("text/plain; charset=x-user-defined"),
    E[r_] = function () {
        u = new vB(E[Ga]);
        try {
          yB(u, x)
        } catch (t) {
          e[zh](i, a_)
        }
      },
    E[f_] = function () {
        e.call(i, o_)
      },
    E.open(Ua, t, !0),
    E[Za]()
  }
  function te(t) {
    var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 51, 49, 51, 51, 55, 51, 51, 55, 50, 49, 56, 10, 10, 48, 10];
    return i.forEach(function (n, e) {
      i[e] = t(n)
    }),
    i[__]("")
  }
  function ie(t, i) {
    try {
      if (null == t || t.length < 8) return;
      if (null == i || i[Gh] <= 0) return;
      for (var n = "", e = 0; e < i[Gh]; e++) n += i[c_](e).toString();
      var s = Math[dr](n[Gh] / 5),
        h = parseInt(n.charAt(s) + n[u_](2 * s) + n.charAt(3 * s) + n[u_](4 * s) + n.charAt(5 * s), 10),
        r = Math[jf](i.length / 2),
        a = Math[wf](2, 31) - 1,
        f = parseInt(t[na](t[Gh] - 8, t[Gh]), 16);
      for (t = t[na](0, t[Gh] - 8), n += f; n[Gh] > 10;) n = (parseInt(n[na](0, 10), 10) + parseInt(n[na](10, n.length), 10)).toString();
      n = (h * n + r) % a;
      for (var o = "", _ = "", e = 0; e < t[Gh]; e += 2) o = parseInt(parseInt(t[na](e, e + 2), 16) ^ Math[dr](n / a * 255), 10),
      _ += String[d_](o),
      n = (h * n + r) % a;
      return 0 | _[0] ? XB = wB[l_ + OB + v_](_) : null
    } catch (c) {}
  }
  function ne() {
    var t = pB;
    if (!t) return void(tF = !0);
    WB = t;
    var i;
    t = t[Dr](Ir);
    for (var n = 0; n < t.length && (i = ie(t[n], EB), !(i && i[Dr](gf)[Gh] >= 8));) 1 == t[Gh] && (i = ie(t[n], b_)),
    n++;
    if (!i || i[Dr](gf)[Gh] < 8) return ZB = !0,
    "" === EB || EB == y_ + IB + g_ + PB + p_ || EB == x_ + jB + E_ ? (JB = sF, tF = !1, nF = !1, void(UB = !1)) : (JB = sF, void(tF = !0));
    UB = i[Dr](gf);
    var e = UB[3];
    if (e != HG) return ZB = !0,
    void(nF = !0);
    tF = !1,
    nF = !1;
    var s = UB[0];
    (m_ == s || w_ == s) && (ZB = !1);
    var h = UB[5];
    QB = h;
    var r = UB[6];
    JB = r
  }
  function ee() {
    var t = WB;
    if (t) {
      var i;
      t = t[Dr](Ir);
      for (var n = 0; n < t.length && (i = hF(t[n], EB), !(i && i[Dr](gf)[Gh] >= 8));) 1 == t.length && (i = hF(t[n], b_)),
      n++;
      if (i[Dr](gf)[Gh] >= 8) return void(iF = !1)
    }
    return "" === EB || EB == y_ + IB + g_ + PB + p_ || EB == x_ + jB + E_ ? void(iF = !1) : void(iF = !0)
  }
  function se() {
    if (ZB) {
      var t = ah[NB + Df]._j3,
        i = KB;
      ah[NB + Df]._j3 = function () {
          t[br](this, arguments),
          i.call(this._n9s, this.g)
        };
      var n = cs[NB + Df]._fz;
      cs[NB + Df]._fz = function (t) {
          n.apply(this, arguments),
          i[zh](this, t)
        }
    }
  }
  function he() {
    if (QB !== !0 && QB) {
      var t = QB[Dr]($r);
      if (3 != t.length) return void(bF[yr]._j3 = null);
      var i = parseInt(t[0], 10),
        n = parseInt(t[1], 10),
        e = parseInt(t[2], 10),
        s = 3,
        h = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
      xB > h && (bF[yr]._j3 = null)
    }
  }
  function re() {
    var t = 0 | JB;
    t && (ED[NB + Df]._k8 = function (i, e) {
      var s = i.id;
      return s === n || this[T_](s) ? !1 : this._j1.length > t ? !1 : (g(this._j1, i, e), this._ll[s] = i, i)
    })
  }
  function ae() {
    tF && (ED[NB + Df]._k8 = ED[NB + Df]._fo)
  }
  function fe() {
    iF && (cs[NB + Df]._jq = null)
  }
  function oe() {
    eF && (ds[yr]._jb = ds[yr]._5q)
  }
  function _e() {
    nF && (FF[NB + Df]._jq = null)
  }
  function ce() {
    UB === n && (cs[NB + Df]._jq = null)
  }
  function ue(t) {
    return t.parent ? (t = t[k_], t._dk ? t._dk : t._fu === !1 ? t : null) : null
  }
  function de(t, i, n) {
    if (n = n || i[O_], n == t) return !1;
    var e = t[M_](n);
    return e || (e = new CG(t, n), t._linkedNodes[n.id] = e),
    e._hk(i, t)
  }
  function le(t, i, n) {
    if (n = n || i.toAgent, n == t) return !1;
    var e = t[M_](n);
    return e ? e._n9n(i, t) : void 0
  }
  function ve(t, i, e) {
    return e === n && (e = i[O_]),
    e != t ? (t._7o || (t._7o = new ED), t._7o.add(i) === !1 ? !1 : void t._95++) : void 0
  }
  function be(t, i, n) {
    return t._7o && t._7o[Vh](i) !== !1 ? (t._95--, void le(t, i, n)) : !1
  }
  function ye(t, i) {
    return i[S_] != t ? (t._8p || (t._8p = new ED), t._8p[nr](i) === !1 ? !1 : void t._n7j++) : void 0
  }
  function ge(t, i) {
    return t._8p && t._8p[Vh](i) !== !1 ? (t._n7j--, void le(i[S_], i, t)) : !1
  }
  function pe(t, i) {
    if (i === n && (i = t instanceof cF), i) {
      if (t[j_]()) return null;
      var e = pe(t[I_], !1);
      if (t[P_]()) return e;
      for (var s = pe(t.to, !1); null != e && null != s;) {
        if (e == s) return e;
        if (e[A_](s)) return s;
        if (s.isDescendantOf(e)) return e;
        e = pe(e, !1),
        s = pe(s, !1)
      }
      return null
    }
    for (var h = t[k_]; null != h;) {
      if (h._hl()) return h;
      h = h[k_]
    }
    return null
  }
  function xe(t, i, n) {
    t._hl() && t[Yh]() && t[Hh][s_](function (t) {
      t instanceof uF && i.add(t) && xe(t, i, n)
    }, this),
    t[C_]() && t._di[s_](function (t) {
      (null == n || n[L_](t)) && i[nr](t) && xe(t, i, n)
    })
  }
  function Ee(t, i) {
    i.parent ? i[k_][R_](i, i[k_][N_] - 1) : t.roots.setIndex(i, t.roots.length - 1)
  }
  function me(t, i) {
    if (i instanceof cF) return void(i[j_]() || Te(t, i));
    for (Ee(t, i); i = i[k_];) Ee(t, i)
  }
  function we(t, i) {
    if (i instanceof cF) return void(i[j_]() || Te(t, i));
    for (Ee(t, i); i = i.parent;) Ee(t, i)
  }
  function Te(t, i) {
    var n = i.fromAgent;
    if (i[P_]()) Ee(t, n);
    else {
      var e = i.toAgent;
      Ee(t, n),
      Ee(t, e)
    }
  }
  function ke(t, i) {
    return t._95++,
    t._fc ? (i._he = t._ht, t._ht._hj = i, void(t._ht = i)) : (t._fc = i, void(t._ht = i))
  }
  function Oe(t, i) {
    t._95--,
    t._ht == i && (t._ht = i._he),
    i._he ? i._he._hj = i._hj : t._fc = i._hj,
    i._hj && (i._hj._he = i._he),
    i._he = null,
    i._hj = null,
    le(t, i, i[D_])
  }
  function Me(t, i) {
    return t._n7j++,
    t._hv ? (i._jd = t._jf, t._jf._jg = i, void(t._jf = i)) : (t._hv = i, void(t._jf = i))
  }
  function Se(t, i) {
    t._n7j--,
    t._jf == i && (t._jf = i._jd),
    i._jd ? i._jd._jg = i._jg : t._hv = i._jg,
    i._jg && (i._jg._jd = i._jd),
    i._jd = null,
    i._jg = null
  }
  function je(t, i) {
    return i = i || new ED,
    t.forEachEdge(function (t) {
      i[nr]({
        id: t.id,
        edge: t,
        fromAgent: t[$_]._dk,
        toAgent: t[D_]._dk
      })
    }),
    t[B_](function (t) {
      t instanceof uF && je(t, i)
    }),
    i
  }
  function Ie(t, i, n) {
    return Ae(t, i, n) === !1 ? !1 : Pe(t, i, n)
  }
  function Pe(t, i, n) {
    if (t._fc) for (var e = t._fc; e;) {
      if (i[zh](n, e) === !1) return !1;
      e = e._hj
    }
  }
  function Ae(t, i, n) {
    if (t._hv) for (var e = t._hv; e;) {
      if (i[zh](n, e) === !1) return !1;
      e = e._jg
    }
  }
  function Ce(t, i, e, s, h, r, a) {
    return r || a ? (r = r || 0, a = a === n ? r : a || 0, r = Math[ro](r, s / 2), a = Math[ro](a, h / 2), t[F_](i + r, e), t.lineTo(i + s - r, e), t[G_](i + s, e, i + s, e + a), t[z_](i + s, e + h - a), t[G_](i + s, e + h, i + s - r, e + h), t[z_](i + r, e + h), t[G_](i, e + h, i, e + h - a), t[z_](i, e + a), t.quadTo(i, e, i + r, e), t[go](), t) : (t[F_](i, e), t[z_](i + s, e), t.lineTo(i + s, e + h), t.lineTo(i, e + h), t.closePath(), t)
  }
  function Le(t, i) {
    var n = i.r || 1,
      e = i.cx || 0,
      s = i.cy || 0,
      h = n * Math.tan(Math.PI / 8),
      r = n * Math[Ja](Math.PI / 4);
    t[F_](e + n, s),
    t[G_](e + n, s + h, e + r, s + r),
    t[G_](e + h, s + n, e, s + n),
    t[G_](e - h, s + n, e - r, s + r),
    t.quadTo(e - n, s + h, e - n, s),
    t[G_](e - n, s - h, e - r, s - r),
    t[G_](e - h, s - n, e, s - n),
    t[G_](e + h, s - n, e + r, s - r),
    t[G_](e + n, s - h, e + n, s)
  }
  function Re(t, i, n, e, s) {
    i instanceof rn && (e = i.width, s = i[tf], n = i.cy - s / 2, i = i.cx - e / 2);
    var h = .5522848,
      r = e / 2 * h,
      a = s / 2 * h,
      f = i + e,
      o = n + s,
      _ = i + e / 2,
      c = n + s / 2;
    return t[F_](i, c),
    t.curveTo(i, c - a, _ - r, n, _, n),
    t.curveTo(_ + r, n, f, c - a, f, c),
    t[Y_](f, c + a, _ + r, o, _, o),
    t.curveTo(_ - r, o, i, c + a, i, c),
    t
  }
  function Ne(t, i, n, e, s) {
    var h = 2 * e,
      r = 2 * s,
      a = i + e / 2,
      f = n + s / 2;
    return t[F_](a - h / 4, f - r / 12),
    t.lineTo(i + .306 * e, n + .579 * s),
    t[z_](a - h / 6, f + r / 4),
    t[z_](i + e / 2, n + .733 * s),
    t[z_](a + h / 6, f + r / 4),
    t.lineTo(i + .693 * e, n + .579 * s),
    t[z_](a + h / 4, f - r / 12),
    t[z_](i + .611 * e, n + .332 * s),
    t[z_](a + 0, f - r / 4),
    t[z_](i + .388 * e, n + .332 * s),
    t.closePath(),
    t
  }
  function De(t, i, n, e, s) {
    return t[F_](i, n),
    t[z_](i + e, n + s / 2),
    t[z_](i, n + s),
    t.closePath(),
    t
  }
  function $e(t, i, n, e, s) {
    return t[F_](i, n + s / 2),
    t.lineTo(i + e / 2, n),
    t[z_](i + e, n + s / 2),
    t[z_](i + e / 2, n + s),
    t[go](),
    t
  }
  function Be(t, i, n, e, s, h) {
    return t[F_](i, n),
    t[z_](i + e, n + s / 2),
    t[z_](i, n + s),
    h || (t[z_](i + .25 * e, n + s / 2), t[go]()),
    t
  }
  function Fe(t, i, n, e, s) {
    if (!t || 3 > t) throw new Error("edge number must greater than 2");
    t = 0 | t,
    e = e || 50,
    s = s || 0,
    i = i || 0,
    n = n || 0;
    for (var h, r, a = 0, f = 2 * Math.PI / t, o = new hB; t > a;) h = i + e * Math[Qa](s),
    r = n + e * Math.sin(s),
    a ? o[z_](h, r) : o[F_](h, r),
    ++a,
    s += f;
    return o[go](),
    o
  }
  function Ge() {
    var t = new hB;
    return t[F_](75, 40),
    t[Y_](75, 37, 70, 25, 50, 25),
    t[Y_](20, 25, 20, 62.5, 20, 62.5),
    t.curveTo(20, 80, 40, 102, 75, 120),
    t[Y_](110, 102, 130, 80, 130, 62.5),
    t.curveTo(130, 62.5, 130, 25, 100, 25),
    t[Y_](85, 25, 75, 37, 75, 40),
    t
  }
  function ze() {
    var t = new hB;
    return t.moveTo(20, 0),
    t.lineTo(80, 0),
    t[z_](100, 100),
    t[z_](0, 100),
    t.closePath(),
    t
  }
  function Ye() {
    var t = new hB;
    return t.moveTo(100, 0),
    t.lineTo(100, 80),
    t.lineTo(0, 100),
    t.lineTo(0, 20),
    t.closePath(),
    t
  }
  function He() {
    var t = new hB;
    return t.moveTo(20, 0),
    t.lineTo(100, 0),
    t[z_](80, 100),
    t.lineTo(0, 100),
    t[go](),
    t
  }
  function qe() {
    var t = new hB;
    return t.moveTo(43, 23),
    t.lineTo(28, 10),
    t[z_](37, 2),
    t[z_](63, 31),
    t[z_](37, 59),
    t[z_](28, 52),
    t.lineTo(44, 38),
    t[z_](3, 38),
    t.lineTo(3, 23),
    t[go](),
    t
  }
  function Ue() {
    var t = new hB;
    return t[F_](1, 8),
    t[z_](7, 2),
    t[z_](32, 26),
    t.lineTo(7, 50),
    t.lineTo(1, 44),
    t.lineTo(18, 26),
    t.closePath(),
    t[F_](27, 8),
    t.lineTo(33, 2),
    t.lineTo(57, 26),
    t.lineTo(33, 50),
    t.lineTo(27, 44),
    t.lineTo(44, 26),
    t.closePath(),
    t
  }
  function We() {
    var t = new hB;
    return t[F_](0, 15),
    t[z_](23, 15),
    t[z_](23, 1),
    t.lineTo(47, 23),
    t[z_](23, 43),
    t[z_](23, 29),
    t[z_](0, 29),
    t[go](),
    t
  }
  function Xe() {
    var t = new hB;
    return t[F_](0, 21),
    t[z_](30, 21),
    t[z_](19, 0),
    t.lineTo(25, 0),
    t[z_](47, 25),
    t[z_](25, 48),
    t.lineTo(19, 48),
    t[z_](30, 28),
    t.lineTo(0, 28),
    t.closePath(),
    t
  }
  function Ve() {
    var t = new hB;
    return t[F_](0, 0),
    t[z_](34, 24),
    t[z_](0, 48),
    t[z_](14, 24),
    t[go](),
    t
  }
  function Ke() {
    var t = new hB;
    return t[F_](20, 0),
    t[z_](34, 14),
    t[z_](20, 28),
    t[z_](22, 18),
    t[z_](1, 25),
    t.lineTo(10, 14),
    t[z_](1, 3),
    t[z_](22, 10),
    t[go](),
    t
  }
  function Ze() {
    var t = new hB;
    return t.moveTo(4, 18),
    t[z_](45, 18),
    t.lineTo(37, 4),
    t[z_](83, 25),
    t[z_](37, 46),
    t[z_](45, 32),
    t[z_](4, 32),
    t[go](),
    t
  }
  function Je() {
    var t = new hB;
    return t[F_](17, 11),
    t[z_](27, 11),
    t[z_](42, 27),
    t[z_](27, 42),
    t.lineTo(17, 42),
    t.lineTo(28, 30),
    t.lineTo(4, 30),
    t[z_](4, 23),
    t.lineTo(28, 23),
    t.closePath(),
    t
  }
  function Qe() {
    lF[H_](T$[q_], Re(new hB, 0, 0, 100, 100)),
    lF[H_](T$.SHAPE_RECT, Ce(new hB, 0, 0, 100, 100)),
    lF[H_](T$[U_], Ce(new hB, 0, 0, 100, 100, 20, 20)),
    lF[H_](T$.SHAPE_STAR, Ne(new hB, 0, 0, 100, 100)),
    lF[H_](T$.SHAPE_TRIANGLE, De(new hB, 0, 0, 100, 100)),
    lF[H_](T$[W_], Fe(5)),
    lF.register(T$.SHAPE_HEXAGON, Fe(6)),
    lF[H_](T$[X_], $e(new hB, 0, 0, 100, 100)),
    lF[H_](T$[V_], Ge()),
    lF.register(T$.SHAPE_TRAPEZIUM, ze()),
    lF[H_](T$[K_], Ye()),
    lF[H_](T$[Z_], He());
    var t = new hB;
    t[F_](20, 0),
    t.lineTo(40, 0),
    t.lineTo(40, 20),
    t[z_](60, 20),
    t[z_](60, 40),
    t[z_](40, 40),
    t[z_](40, 60),
    t[z_](20, 60),
    t[z_](20, 40),
    t.lineTo(0, 40),
    t.lineTo(0, 20),
    t.lineTo(20, 20),
    t.closePath(),
    lF.register(T$[J_], t),
    lF.register(T$[Q_], Be(new hB, 0, 0, 100, 100)),
    lF[H_](T$[tc], qe()),
    lF.register(T$[ic], Ue()),
    lF[H_](T$.SHAPE_ARROW_3, We()),
    lF[H_](T$[nc], Xe()),
    lF.register(T$[ec], Ve()),
    lF.register(T$[sc], Ke()),
    lF.register(T$.SHAPE_ARROW_7, Ze()),
    lF[H_](T$[hc], Je()),
    lF.register(T$.SHAPE_ARROW_OPEN, Be(new hB, 0, 0, 100, 100, !0))
  }
  function ts() {
    D(this, ts, arguments),
    this.busLayout = !0
  }
  function is() {
    D(this, is),
    this._$v = new UD
  }
  function ns() {
    if (this._fu === !0) {
      var t = this._7o,
        i = this._8p;
      if (t) for (t = t._j1; t[Gh];) {
          var n = t[0];
          be(this, n, n[O_])
        }
      if (i) for (i = i._j1; i[Gh];) {
          var n = i[0];
          ge(this, n, n.fromAgent)
        }
      return void this[B_](function (t) {
          t._hl() && ns[zh](t)
        })
    }
    var e = je(this);
    e.forEach(function (t) {
      t = t[rc];
      var i = t[$_],
        n = t.$to,
        e = i[A_](this),
        s = n[A_](this);
      e && !s ? (ve(this, t), de(this, t)) : s && !e && (ye(this, t), de(t[S_], t, this))
    }, this)
  }
  function es() {
    D(this, es, arguments),
    this[ac] = null
  }
  function ss(t, i, n, e) {
    return t[i] = n,
    e ? {
      get: function () {
        return this[i]
      },
      set: function (t) {
        if (t !== this[i]) {
          this[i] = t,
          !this._n7a,
          this._1p = !0;
          for (var n = e[Gh]; --n >= 0;) this[e[n]] = !0
        }
      }
    } : {
      get: function () {
        return this[i]
      },
      set: function (t) {
        t !== this[i] && (this[i] = t)
      }
    }
  }
  function hs(t, i) {
    var n = {},
      e = {};
    for (var s in i) {
        var h = i[s];
        h[fc] && h.validateFlags[s_](function (t, i, n) {
          n[i] = oc + t,
          e[t] = !0
        }),
        n[s] = ss(t, Er + s, h[Or], h.validateFlags)
      }
    for (var r in e) t[oc + r] = !0;
    Object[Nr](t, n)
  }
  function rs(t, i, n, e) {
    if (Array.isArray(i)) for (var s = i.length; --s >= 0;) rs(t, i[s], n, e);
    else {
      var h = i[_c];
      if (h) {
        if (h instanceof bF || (h = t[h]), !h) return
      } else h = t;
      if (e || (e = t[cc](i[uc], n)), i[dc] && (h[i.bindingProperty] = e), i[lc]) {
        var r = i[lc];
        r instanceof Function || (r = t[r]),
        r instanceof Function && r[zh](t, e, h)
      }
    }
  }
  function as() {
    yF.forEach(function (t) {
      this[t] = {}
    }, this)
  }
  function fs(t, i, n, e) {
    return e == T$.PROPERTY_TYPE_ACCESSOR ? void(t[n] = i) : e == T$[vc] ? void t[No](n, i) : e == T$[bc] ? void t[yc](n, i) : !1
  }
  function os() {
    D(this, os, arguments)
  }
  function _s() {
    D(this, _s, arguments)
  }
  function cs(t) {
    this._6x(),
    this._dg(t),
    this._gx = [],
    this._n7d = new $F,
    this._j6 = new ds(this),
    this._mu = new ED;
    var i = this;
    this._mu._fo = function (t, n, e) {
      n[gc]();
      var s = n[pc];
      return n._hn && s && i._n7d._mj(n.$x + n[pc].x, n.$y + n[pc].y, n.uiBounds.width, n[pc][tf]),
      ED[yr]._fo[zh](this, t, n, e)
    },
    this._mu[nf] = function () {
      return this[s_](function (t) {
        t[gc]()
      }),
      ED.prototype[nf][zh](this)
    },
    this._n8z = [],
    this._7n = {},
    this._80 = new SD,
    this._7y = [],
    this._n8y()
  }
  function us(t) {
    var i = Gi(!0);
    return Jn(i.g),
    i.onselectstart = function () {
      return !1
    },
    t.appendChild(i),
    i[Zh] = RF,
    i
  }
  function ds(t) {
    this._n9s = t,
    this._j6 = new xD,
    this._j6[lf] = t[lf],
    this._77 = new SD
  }
  function ls(t, i, n, e) {
    var s = vs(t, i, n, e),
      h = [];
    if (ps(t)) bs(s, i, n, h, e[xc](gF[Ec]));
    else {
        js(t, i, n, h, s, e);
        var r = ys(t, e),
          a = r ? Ts(t, s, i, n, e.getStyle(gF[mc])) : e[xc](gF[wc]);
        0 == a && (s = !s)
      }
    return h
  }
  function vs(t, i, n) {
    if (null != t) {
      if (t == T$[Tc] || t == T$[kc] || t == T$[Oc] || t == T$[Mc] || t == T$[Sc]) return !0;
      if (t == T$.EDGE_TYPE_ELBOW_VERTICAL || t == T$.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == T$[jc] || t == T$[Ic] || t == T$[Pc]) return !1
    }
    var e = ms(i, n),
      s = ws(i, n);
    return e >= s
  }
  function bs(t, i, n, e, s) {
    t ? Ls(i, n, e, s) : Rs(i, n, e, s)
  }
  function ys(t, i) {
    return i[xc](gF.EDGE_SPLIT_BY_PERCENT)
  }
  function gs(t) {
    return null != t && (t == T$[Ic] || t == T$[Mc] || t == T$.EDGE_TYPE_EXTEND_BOTTOM || t == T$[Sc])
  }
  function ps(t) {
    return t && (t == T$[Ac] || t == T$[Tc] || t == T$[Cc])
  }
  function xs(t, i, n, e, s) {
    if (t == T$[Oc] || t == T$[jc]) return new TD(e.x + e.width / 2, e.y + e[tf] / 2);
    var h;
    if (gs(t)) {
      var r = Math[ro](n.y, e.y),
        a = Math[ro](n.x, e.x),
        f = Math.max(n[Yr], e.bottom),
        o = Math.max(n.right, e[zr]);
      if (h = s[xc](gF[Ec]), t == T$[Ic]) return new TD((a + o) / 2, r - h);
      if (t == T$.EDGE_TYPE_EXTEND_LEFT) return new TD(a - h, (r + f) / 2);
      if (t == T$[Pc]) return new TD((a + o) / 2, f + h);
      if (t == T$.EDGE_TYPE_EXTEND_RIGHT) return new TD(o + h, (r + f) / 2)
    }
    var _ = ys(t, s);
    if (h = _ ? Ts(t, i, n, e, s[xc](gF[mc])) : s.getStyle(gF[wc]), h == Number[Lc] || h == Number[Rc]) return new TD(e.x + e[sf] / 2, e.y + e[tf] / 2);
    if (0 == h) return new TD(n.x + n[sf] / 2, n.y + n.height / 2);
    if (i) {
      var c = n.x + n.right < e.x + e[zr];
      return new TD(Ms(c, h, n.x, n[sf]), n.y + n[tf] / 2)
    }
    var u = n.y + n[Yr] < e.y + e[Yr];
    return new TD(n.x + n[sf] / 2, Ms(u, h, n.y, n[tf]))
  }
  function Es(t, i, n, e) {
    var s = Math[pf](i, e) - Math[ro](t, n);
    return s - (i - t + e - n)
  }
  function ms(t, i) {
    var n = Math.max(t.x + t[sf], i.x + i.width) - Math[ro](t.x, i.x);
    return n - t[sf] - i[sf]
  }
  function ws(t, i) {
    var n = Math[pf](t.y + t.height, i.y + i[tf]) - Math.min(t.y, i.y);
    return n - t[tf] - i[tf]
  }
  function Ts(t, i, n, e, s) {
    var h = ks(s, i, n, e, null);
    return h * s
  }
  function ks(t, i, n, e) {
    return i ? Os(t, n.x, n[zr], e.x, e.right) : Os(t, n.y, n[Yr], e.y, e[Yr])
  }
  function Os(t, i, n, e, s) {
    var h = Es(i, n, e, s),
      r = e + s > i + n;
    if (h > 0) {
        if (1 == t) return h + (s - e) / 2;
        if (t >= 0 && 1 > t) return h;
        if (0 > t) return r ? e - i : n - s
      }
    return Math[Hr](r && t > 0 || !r && 0 > t ? n - s : i - e)
  }
  function Ms(t, i, n, e) {
    return t == i > 0 ? n + e + Math[Hr](i) : n - Math[Hr](i)
  }
  function Ss(t, i) {
    var n = t[Gh];
    if (!(3 > n)) {
      var e = i[xc](gF[Nc]);
      if (e != T$[Dc]) {
        var s = i[xc](gF[$c]),
          h = 0,
          r = 0;
        s && (O(s) ? h = r = s : (h = s.x || 0, r = s.y || 0));
        for (var a, f, o, _, c = t[0], u = t[1], d = null, l = 2; n > l; l++) {
            var v = t[l],
              b = u.x - c.x,
              y = u.y - c.y,
              x = v.x - u.x,
              E = v.y - u.y,
              m = !b || b > -S$ && S$ > b,
              w = !y || y > -S$ && S$ > y,
              T = !x || x > -S$ && S$ > x,
              k = !E || E > -S$ && S$ > E,
              M = w;
              (m && k || w && T) && (M ? (a = Math[ro](2 == l ? Math.abs(b) : Math[Hr](b) / 2, h), f = Math[ro](l == n - 1 ? Math[Hr](E) : Math.abs(E) / 2, r), o = new TD(u.x - (b > 0 ? a : -a), u.y), _ = new TD(u.x, u.y + (E > 0 ? f : -f))) : (a = Math[ro](l == n - 1 ? Math[Hr](x) : Math.abs(x) / 2, h), f = Math[ro](2 == l ? Math.abs(y) : Math[Hr](y) / 2, r), o = new TD(u.x, u.y - (y > 0 ? f : -f)), _ = new TD(u.x + (x > 0 ? a : -a), u.y)), p(t, u), l--, n--, (o.x != c.x || o.y != c.y) && (g(t, o, l), l++, n++), e == T$.EDGE_CORNER_BEVEL ? (g(t, _, l), l++, n++) : e == T$.EDGE_CORNER_ROUND && (g(t, [u, _], l), l++, n++)),
            c = u,
            u = v
          }
        null != d && _.x == u.x && _.y == u.y && p(t, u)
      }
    }
  }
  function js(t, i, n, e, s, h) {
    var r = h.getStyle(gF[Bc]),
      a = null == r;
    if (null != r) {
        var f = (new SD)[Fc](i).union(n);
        f.intersects(r) || (s = Is(r.x, r.y, f.y, f.x, f.bottom, f[zr]))
      } else r = xs(t, s, i, n, h);
    s ? Cs(i, n, r, e, a) : As(i, n, r, e, a)
  }
  function Is(t, i, n, e, s, h) {
    return n > i && n - i > e - t && n - i > t - h || i > s && i - s > e - t && i - s > t - h ? !1 : !0
  }
  function Ps(t, i, n) {
    return i >= t.x && i <= t[zr] && n >= t.y && n <= t.bottom
  }
  function As(t, i, n, e, s) {
    var h = Math[pf](t.y, i.y),
      r = Math[ro](t.y + t.height, i.y + i[tf]),
      a = null != n ? n.y : r + (h - r) / 2,
      f = t.x + t[sf] / 2,
      o = i.x + i[sf] / 2;
    if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t[sf] && (f = n.x), n.x >= i.x && n.x <= i.x + i[sf] && (o = n.x)), Ps(i, f, a) || Ps(t, f, a) || e.push(new TD(f, a)), Ps(i, o, a) || Ps(t, o, a) || e[Ea](new TD(o, a)), 0 == e[Gh]) if (null != n) Ps(i, n.x, a) || Ps(t, n.x, a) || e[Ea](new TD(n.x, a));
    else {
        var _ = Math[pf](t.x, i.x),
          c = Math[ro](t.x + t.width, i.x + i[sf]);
        e.push(new TD(_ + (c - _) / 2, a))
      }
  }
  function Cs(t, i, n, e, s) {
    var h = Math.max(t.x, i.x),
      r = Math.min(t.x + t[sf], i.x + i[sf]),
      a = null != n ? n.x : r + (h - r) / 2,
      f = t.y + t.height / 2,
      o = i.y + i[tf] / 2;
    if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t[tf] && (f = n.y), n.y >= i.y && n.y <= i.y + i[tf] && (o = n.y)), Ps(i, a, f) || Ps(t, a, f) || e[Ea](new TD(a, f)), Ps(i, a, o) || Ps(t, a, o) || e.push(new TD(a, o)), 0 == e.length) if (null != n) Ps(i, a, n.y) || Ps(t, a, n.y) || e[Ea](new TD(a, n.y));
    else {
        var _ = Math[pf](t.y, i.y),
          c = Math.min(t.y + t.height, i.y + i[tf]);
        e[Ea](new TD(a, _ + (c - _) / 2))
      }
  }
  function Ls(t, i, n, e) {
    var s = i.x + i[sf] < t.x,
      h = t.x + t[sf] < i.x,
      r = s ? t.x : t.x + t[sf],
      a = t.y + t.height / 2,
      f = h ? i.x : i.x + i.width,
      o = i.y + i[tf] / 2,
      _ = e,
      c = s ? -_ : _,
      u = new TD(r + c, a);
    c = h ? -_ : _;
    var d = new TD(f + c, o);
    if (s == h) {
        var l = s ? Math[ro](r, f) - e : Math[pf](r, f) + e;
        n.push(new TD(l, a)),
        n[Ea](new TD(l, o))
      } else if (u.x < d.x == s) {
        var v = a + (o - a) / 2;
        n[Ea](u),
        n[Ea](new TD(u.x, v)),
        n.push(new TD(d.x, v)),
        n.push(d)
      } else n[Ea](u),
    n[Ea](d)
  }
  function Rs(t, i, n, e) {
    var s = i.y + i[tf] < t.y,
      h = t.y + t[tf] < i.y,
      r = t.x + t.width / 2,
      a = s ? t.y : t.y + t[tf],
      f = i.x + i.width / 2,
      o = h ? i.y : i.y + i.height,
      _ = e,
      c = s ? -_ : _,
      u = new TD(r, a + c);
    c = h ? -_ : _;
    var d = new TD(f, o + c);
    if (s == h) {
        var l = s ? Math[ro](a, o) - e : Math[pf](a, o) + e;
        n[Ea](new TD(r, l)),
        n[Ea](new TD(f, l))
      } else if (u.y < d.y == s) {
        var v = r + (f - r) / 2;
        n[Ea](u),
        n.push(new TD(v, u.y)),
        n.push(new TD(v, d.y)),
        n[Ea](d)
      } else n[Ea](u),
    n[Ea](d)
  }
  function Ns(t) {
    return t == T$[Gc] || t == T$.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == T$[Oc] || t == T$.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == T$[jc] || t == T$[Ic] || t == T$[Mc] || t == T$.EDGE_TYPE_EXTEND_BOTTOM || t == T$.EDGE_TYPE_EXTEND_RIGHT || t == T$[Ac] || t == T$[Tc] || t == T$[Cc]
  }
  function Ds(t, i) {
    var n, e;
    i && i[sf] && i[tf] ? (n = i[sf], e = i[tf]) : n = e = isNaN(i) ? pD[zc] : i;
    var s = lF.getShape(t, -n, -e / 2, n, e);
    return s || (s = new hB, s.moveTo(-n, -e / 2), s.lineTo(0, 0), s[z_](-n, e / 2)),
    s
  }
  function $s(t, i) {
    var n = Math[Ja](i),
      e = Math[Qa](i),
      s = t.x,
      h = t.y;
    return t.x = s * e - h * n,
    t.y = s * n + h * e,
    t
  }
  function Bs(t, i, n, e, s, h) {
    var r = Math[mf](e - i, n - t),
      a = new TD(s, h);
    return a[$f] = r,
    $s(a, r),
    a.x += t,
    a.y += i,
    a
  }
  function Fs(t, i, n, e, s) {
    i = si(e, i.x, i.y, n.x, n.y),
    n = si(s, n.x, n.y, i.x, i.y);
    var h = Math.PI / 2 + Math[mf](n.y - i.y, n.x - i.x),
      r = t * Math[Qa](h),
      a = t * Math[Ja](h),
      f = n.x - i.x,
      o = n.y - i.y,
      _ = i.x + .25 * f,
      c = i.y + .25 * o,
      u = i.x + .75 * f,
      d = i.y + .75 * o;
    return [new eB(tB, [_ + r, c + a, u + r, d + a])]
  }
  function Gs(t, i, e) {
    if (g(t, new eB(Z$, [i.x, i.y]), 0), e) {
      if (t[Gh] > 1) {
        var s = t[t.length - 1];
        if (Q$ == s.type && (s[io] || s[Mf][2] === n || null === s[Mf][2])) return s.points[2] = e.x,
        s[Mf][3] = e.y,
        void(s[io] = !0);
        if (tB == s[Df] && (s[io] || s[Mf][4] === n || null === s.points[4])) return s[Mf][4] = e.x,
        s[Mf][5] = e.y,
        void(s[io] = !0)
      }
      t.push(new eB(J$, [e.x, e.y]))
    }
  }
  function zs(t, i, n, e, s, h, r, a) {
    return i.hasPathSegments() ? void(n._f4 = i._8u[Yc]()) : e == s ? void t[Hc](n, e, h, r) : void t[qc](n, e, s, h, r, a)
  }
  function Ys(t, i, n, e, s) {
    var h = e == s,
      r = t[Uc][ba](e),
      a = h ? r : t.graph[ba](s);
    if (r && a) {
        var f = i[Wc],
          o = r.bodyBounds.clone(),
          _ = h ? o : a[Xc][Kh](),
          c = i.hasPathSegments();
        if (!h && !f && !c) {
            var u = e[Vc],
              d = s[Vc];
            if (u != d) {
                var l, v, b, y, g = i[Kc];
                u ? (l = r, v = o, b = a, y = _) : (l = a, v = _, b = r, y = o);
                var p = Vs(v, l, u, b, y, g);
                if (p && 2 == p.length) {
                  var x = p[0],
                    E = p[1];
                  return n[F_](x.x, x.y),
                  E.x == x.x && E.y == x.y && (E.y += .01),
                  n[z_](E.x, E.y),
                  void(n._68 = !0)
                }
              }
          }
        zs(t, i, n, r, a, f, o, _),
        (!h || c) && Hs(t, i, n, r, a, f, o, _),
        n._68 = !0
      }
  }
  function Hs(t, i, e, s, h, r, a, f) {
    var o = a[Zc],
      _ = f[Zc],
      c = t.fromAtEdge,
      u = t.toAtEdge;
    if (!c && !u) return void Gs(e._f4, o, _);
    var d = e._f4;
    if (d[Gh]) {
        if (c) {
          var l = d[0],
            v = l.firstPoint;
          a[Jc](v.x, v.y) && (l[Df] == tB ? (o = v, v = {
              x: l[Mf][2],
              y: l[Mf][3]
            }, l.points = l[Mf][qh](2), l.type = Q$) : l.type == Q$ && (o = v, v = {
              x: l.points[0],
              y: l[Mf][1]
            }, l[Mf] = l[Mf][qh](2), l.type = J$)),
          qs(s, a, v, o, n, n)
        }
        if (u) {
          var b, y = d[d[Gh] - 1],
            g = y[Nf],
            p = y.points.length,
            x = g.x === n || g.y === n;
          p >= 4 && (x || f[Jc](g.x, g.y)) && (x || (_ = g), b = !0, g = {
              x: y.points[p - 4],
              y: y.points[p - 3]
            }, f[Jc](g.x, g.y) && (_ = g, p >= 6 ? (g = {
              x: y[Mf][p - 6],
              y: y.points[p - 5]
            }, y[Mf] = y[Mf].slice(0, 4), y[Df] = Q$) : 1 == d[Gh] ? (g = {
              x: o.x,
              y: o.y
            }, y.points = y[Mf][qh](0, 2), y[Df] = J$) : (y = d[d[Gh] - 2], g = y[Nf]))),
          qs(h, f, g, _, n, n),
          b && (p = y[Mf][Gh], y[Mf][p - 2] = _.x, y.points[p - 1] = _.y, _ = null)
        }
      } else {
        var E = Math[mf](_.y - o.y, _.x - o.x),
          m = Math[Qa](E),
          w = Math.sin(E);
        c && qs(s, a, _, o, m, w),
        u && qs(h, f, o, _, -m, -w)
      }
    Gs(e._f4, o, _)
  }
  function qs(t, i, e, s, h, r) {
    if (h === n) {
      var a = Math.atan2(e.y - s.y, e.x - s.x);
      h = Math[Qa](a),
      r = Math[Ja](a)
    }
    for (e = {
      x: e.x,
      y: e.y
    }, i[Jc](e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y));;) {
      if (!i.contains(e.x, e.y)) return s;
      if (t[Qc](e.x - h, e.y - r, pD.LOOKING_EDGE_ENDPOINT_TOLERANCE)) {
        s.x = e.x - h / 2,
        s.y = e.y - r / 2;
        break
      }
      e.x -= h,
      e.y -= r
    }
    return s
  }
  function Us(t, i, n, e, s, h, r, a) {
    if (i[tu]()) return i._8u;
    var f = i[Wc];
    if (Ns(f)) {
      var o = ls(f, n, e, t, s, h);
      if (!o || !o.length) return null;
      g(o, r, 0),
      o[Ea](a),
      f != T$[Ac] && Ss(o, t);
      for (var _ = [], c = o[Gh], u = 1; c - 1 > u; u++) {
        var d = o[u];
        _[Ea](j(d) ? new eB(Q$, [d[0].x, d[0].y, d[1].x, d[1].y]) : new eB(J$, [d.x, d.y]))
      }
      return _
    }
    if (i[iu]) {
      var l = t._2r();
      if (!l) return;
      return Fs(l, r, a, n, e)
    }
  }
  function Ws(t, i, n) {
    var e = t[xc](gF[nu]),
      s = t._2r(),
      h = e + .2 * s,
      r = i.x + i[sf] - h,
      a = i.y,
      f = i.x + i[sf],
      o = i.y + h;
    e += s;
    var _ = .707,
      c = -.707,
      u = i.x + i[sf],
      d = i.y,
      l = u + _ * e,
      v = d + c * e,
      b = {
        x: r,
        y: a
      },
      y = {
        x: l,
        y: v
      },
      g = {
        x: f,
        y: o
      },
      p = b.x,
      x = y.x,
      E = g.x,
      m = b.y,
      w = y.y,
      T = g.y,
      k = ((T - m) * (w * w - m * m + x * x - p * p) + (w - m) * (m * m - T * T + p * p - E * E)) / (2 * (x - p) * (T - m) - 2 * (E - p) * (w - m)),
      O = ((E - p) * (x * x - p * p + w * w - m * m) + (x - p) * (p * p - E * E + m * m - T * T)) / (2 * (w - m) * (E - p) - 2 * (T - m) * (x - p)),
      h = Math[Ef]((p - k) * (p - k) + (m - O) * (m - O)),
      M = Math[mf](b.y - O, b.x - k),
      S = Math[mf](g.y - O, g.x - k),
      j = S - M;
    return 0 > j && (j += 2 * Math.PI),
    Xs(k, O, M, j, h, h, !0, n)
  }
  function Xs(t, i, n, e, s, h, r, a) {
    var f, o, _, c, u, d, l, v, b, y, g;
    if (Math[Hr](e) > 2 * Math.PI && (e = 2 * Math.PI), u = Math.ceil(Math[Hr](e) / (Math.PI / 4)), f = e / u, o = f, _ = n, u > 0) {
      d = t + Math.cos(_) * s,
      l = i + Math[Ja](_) * h,
      moveTo ? a.moveTo(d, l) : a[z_](d, l);
      for (var p = 0; u > p; p++) _ += o,
      c = _ - o / 2,
      v = t + Math[Qa](_) * s,
      b = i + Math[Ja](_) * h,
      y = t + Math[Qa](c) * (s / Math.cos(o / 2)),
      g = i + Math.sin(c) * (h / Math.cos(o / 2)),
      a[G_](y, g, v, b)
    }
  }
  function Vs(t, i, e, s, h, r) {
    var a = h.cx,
      f = h.cy,
      o = a < t.x,
      _ = a > t[zr],
      c = f < t.y,
      u = f > t[Yr],
      d = t.cx,
      l = t.cy,
      v = o || _,
      b = c || u,
      y = r === n || null === r;
    y && (r = Math[mf](f - l, a - d), v || b || (r += Math.PI));
    var g = Math[Qa](r),
      p = Math[Ja](r),
      x = Zs(i, t, {
        x: a,
        y: f
      }, -g, -p);
    x || (r = Math[mf](f - l, a - d), v || b || (r += Math.PI), g = Math[Qa](r), p = Math[Ja](r), x = Zs(i, t, {
        x: a,
        y: f
      }, -g, -p) || {
        x: d,
        y: l
      });
    var E = Zs(s, h, {
        x: x.x,
        y: x.y
      }, -x.perX || g, -x[eu] || p, !1) || {
        x: a,
        y: f
      };
    return e ? [x, E] : [E, x]
  }
  function Ks(t, i, n, e, s, h) {
    var r = i < t.x,
      a = i > t.right,
      f = n < t.y,
      o = n > t[Yr];
    if (r && e > 0) {
        var _ = t.x - i,
          c = n + _ * s / e;
        if (c >= t.y && c <= t.bottom) return {
            x: t.x,
            y: c,
            perX: e,
            perY: s
          }
      }
    if (a && 0 > e) {
        var _ = t[zr] - i,
          c = n + _ * s / e;
        if (c >= t.y && c <= t[Yr]) return {
            x: t[zr],
            y: c,
            perX: e,
            perY: s
          }
      }
    if (f && s > 0) {
        var u = t.y - n,
          d = i + u * e / s;
        if (d >= t.x && d <= t.right) return {
            x: d,
            y: t.y,
            perX: e,
            perY: s
          }
      }
    if (o && 0 > s) {
        var u = t[Yr] - n,
          d = i + u * e / s;
        if (d >= t.x && d <= t[zr]) return {
            x: d,
            y: t.bottom,
            perX: e,
            perY: s
          }
      }
    return h !== !1 ? Ks(t, i, n, -e, -s, !1) : void 0
  }
  function Zs(t, i, n, e, s, h) {
    if (!i[Jc](n.x, n.y)) {
      if (n = Ks(i, n.x, n.y, e, s, h), !n) return;
      return Js(t, i, n, n[su], n.perY)
    }
    return h === !1 ? Js(t, i, n, e, s) : Js(t, i, {
      x: n.x,
      y: n.y,
      perX: e,
      perY: s
    }, e, s) || Js(t, i, n, -e, -s)
  }
  function Js(t, i, n, e, s) {
    for (;;) {
      if (!i[Jc](n.x, n.y)) return;
      if (t.hitTest(n.x + e, n.y + s)) break;
      n.x += e,
      n.y += s
    }
    return n
  }
  function Qs(t) {
    return Tn(t) ? t : t[hu](/.(gif|jpg|jpeg|png)$/gi) ? t : (t = J(t), t instanceof Object && t.draw ? t : void 0)
  }
  function th(t) {
    for (var i = t.parent; i;) {
      if (i.enableSubNetwork) return i;
      i = i[k_]
    }
    return null
  }
  function ih() {
    D(this, ih, arguments)
  }
  function nh(t, n, e, s, h, r, a) {
    var f = i[cf](ru);
    f[Zh] = au,
    di(f, YF),
    n && di(f, n);
    var o = i[cf](fu);
    return r && (lD ? o[ou] = r : o[_u] = r),
    o.name = a,
    o[cu] = e,
    di(o, HF),
    h && di(o, h),
    s && vi(o, uu, du),
    f._img = o,
    f.appendChild(o),
    t[lu](f),
    f
  }
  function eh(t, n) {
    this._navPane = i[cf](ru),
    this._navPane[Zh] = vu,
    di(this._navPane, {
      "background-color": bu,
      overflow: yu,
      "float": la,
      "user-select": gu,
      position: pu
    }),
    this._top = nh(this._navPane, {
      width: xu
    }, pD[Eu], !1, null, n, Xf),
    this._left = nh(this._navPane, {
      height: xu
    }, pD[mu], !1, qF, n, la),
    this._right = nh(this._navPane, {
      height: xu,
      right: wu
    }, pD.NAVIGATION_IMAGE_LEFT, !0, qF, n, zr),
    this._n8ottom = nh(this._navPane, {
      width: xu,
      bottom: wu
    }, pD[Eu], !0, null, n, Yr),
    t.appendChild(this._navPane)
  }
  function sh(t, i) {
    this._n9s = t;
    var n = function (i) {
      var n, e, s = i[_c],
        h = s[kr];
      if (la == h) n = 1;
      else if (zr == h) n = -1;
      else if (Xf == h) e = 1;
      else {
          if (Yr != h) return;
          e = -1
        }
      lD && (s.className = Tu, setTimeout(function () {
          s[Zh] = ""
        }, 100)),
      A(i),
      t._k3._9b(n, e)
    };
    eh[zh](this, i, n),
    this._3s(i.clientWidth, i[ku])
  }
  function hh(t, i) {
    this._n9s = t,
    this.init(i, t)
  }
  function rh() {
    D(this, rh, arguments)
  }
  function ah(t, i) {
    this._n9s = t,
    this._jp = us(i),
    this.g = this._jp.g,
    this._9q = new ED
  }
  function fh(t) {
    var i = t[Ou],
      n = [];
    return t[Mu][s_](function (i) {
        t[Su](i) && t[ju](i) && n.push(i)
      }),
    i[No](n)
  }
  function oh(t, i, e, s) {
    s === n && (s = pD[Iu]);
    var h = t.globalToLocal(i);
    return e ? t[Pu](h.x, h.y, s) : t[Au](h.x, h.y, s)
  }
  function _h(t, i, n) {
    var e = t[Of];
    n = n || e,
    i = i || 1;
    var s = null;
    s && n.width * n.height * i * i > s && (i = Math[Ef](s / n[sf] / n[tf]));
    var h = Gi();
    Jn(h.g),
    h[sf] = n.width * i,
    h[tf] = n[tf] * i,
    t._83._fz(h.g, i, n);
    var r = null;
    try {
      r = h[Cu](Lu)
    } catch (a) {
      w$[Jf](a)
    }
    return {
      canvas: h,
      data: r,
      width: h[sf],
      height: h[tf]
    }
  }
  function ch(t) {
    this[Uc] = t,
    this.topCanvas = t.topCanvas
  }
  function uh(t, i) {
    this[Ru] = t,
    this[Nu] = i || Du
  }
  function dh() {
    D(this, dh, arguments)
  }
  function lh(t, i) {
    if (!t) return i;
    var e = {};
    for (var s in t) e[s] = t[s];
    for (var s in i) e[s] === n && (e[s] = i[s]);
    return e
  }
  function vh() {
    D(this, vh, arguments)
  }
  function bh() {
    D(this, bh, arguments)
  }
  function yh() {
    D(this, yh, arguments)
  }
  function gh() {
    D(this, gh, arguments)
  }
  function ph(i, n, e) {
    i += t[_a],
    n += t[ua];
    var s = e[$u]();
    return {
      x: i + s[la],
      y: n + s[Xf]
    }
  }
  function xh(t, i, n) {
    var e = t[Bu],
      s = t[Fu];
    t[Qr].left = i - e / 2 + hf,
    t.style[Xf] = n - s / 2 + hf
  }
  function Eh(t) {
    var n = i.createElement(rf),
      e = n[uf](df),
      s = getComputedStyle(t, null),
      h = s[yf];
    h || (h = s[Gu] + ir + s.fontSize + ir + s.fontFamily),
    e.font = h;
    var r = t.value,
      a = r.split(gf),
      f = parseInt(s[zu]),
      o = 0,
      _ = 0;
    return w$[s_](a, function (t) {
        var i = e[xf](t)[sf];
        i > o && (o = i),
        _ += 1.2 * f
      }),
    {
        width: o,
        height: _
      }
  }
  function mh(t, n) {
    if (sr == typeof t.selectionStart && sr == typeof t.selectionEnd) {
      var e = t[Or],
        s = t[Yu];
      t[Or] = e[qh](0, s) + n + e[qh](t[Hu]),
      t[Hu] = t.selectionStart = s + n[Gh]
    } else if (qu != typeof i[Uu]) {
      var h = i[Uu].createRange();
      h[Wu] = n,
      h[Xu](!1),
      h[Vu]()
    }
  }
  function wh(i) {
    if (nD) {
      var n = t[Ku] || t.pageXOffset,
        e = t[Zu] || t[ua];
      return i[Vu](),
      void t.scrollTo(n, e)
    }
    i.select()
  }
  function Th() {}
  function kh(t) {
    this.graph = t,
    this[Ju] = t[Ju],
    this.handlerSize = lD ? 8 : 5
  }
  function Oh(t) {
    this[Uc] = t,
    this[Ju] = t[Ju],
    this.handlerSize = lD ? 8 : 4,
    this._rotateHandleLength = lD ? 30 : 20
  }
  function Mh(t, i) {
    var n = new SD;
    return n.addPoint(qn[zh](t, {
      x: i.x,
      y: i.y
    })),
    n[ef](qn[zh](t, {
      x: i.x + i[sf],
      y: i.y
    })),
    n[ef](qn.call(t, {
      x: i.x + i[sf],
      y: i.y + i.height
    })),
    n.addPoint(qn.call(t, {
      x: i.x,
      y: i.y + i[tf]
    })),
    n
  }
  function Sh(t) {
    t %= 2 * Math.PI;
    var i = Math[jf](t / XF);
    return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : Qu
  }
  function jh(n, e, s) {
    var h = i[td],
      r = new w$[id](t[_a], t[ua], h[nd] - 2, h.clientHeight - 2),
      a = n[Bu],
      f = n[Fu];
    e + a > r.x + r.width && (e = r.x + r.width - a),
    s + f > r.y + r[tf] && (s = r.y + r[tf] - f),
    e < r.x && (e = r.x),
    s < r.y && (s = r.y),
    n[Qr][la] = e + hf,
    n[Qr][Xf] = s + hf
  }
  function Ih(t, i, n, e, s) {
    this[Zf] = t,
    this[Df] = ed,
    this.kind = i,
    this[fr] = n,
    this.data = e,
    this.datas = s
  }
  function Ph(t) {
    this._4u = {},
    this._k3 = t,
    this._k3._1w[sd](this._8o, this),
    this[hd] = T$[rd]
  }
  function Ah(t) {
    return t >= 10 && 20 > t
  }
  function Ch(t) {
    return t == uG || t == vG
  }
  function Lh() {
    var t, i, n = {},
      e = [],
      s = 0,
      h = {},
      r = 0;
    this[Uc][s_](function (a) {
        if (this.isLayoutable(a)) if (a instanceof uF) {
          var f = {
            node: a,
            id: a.id,
            x: a.x,
            y: a.y
          };
          for (this.appendNodeInfo && this.appendNodeInfo(a, f), n[a.id] = f, e[Ea](f), s++, i = a[k_]; i instanceof vF;) {
            t || (t = {});
            var o = t[i.id];
            o || (o = t[i.id] = {
              id: i.id,
              children: []
            }),
            o[Hh][Ea](f),
            i = i[k_]
          }
        } else if (a instanceof cF && !a[P_]() && a[S_] && a[O_]) {
          var f = {
            edge: a
          };
          h[a.id] = f,
          r++
        }
      }, this);
    var a = {};
    for (var f in h) {
        var o = h[f],
          _ = o.edge,
          c = _.fromAgent,
          u = _.toAgent,
          d = c.id + Zr + u.id,
          l = u.id + Zr + c.id;
        if (n[c.id] && n[u.id] && !a[d] && !a[l]) {
            var v = n[c.id],
              b = n[u.id];
            o.from = v,
            o.to = b,
            a[d] = o,
            this[ad] && this[ad](_, o)
          } else delete h[f],
        r--
      }
    return {
        groups: t,
        nodesArray: e,
        nodes: n,
        nodeCount: s,
        edges: h,
        edgeCount: r,
        minEnergy: this[fd](s, r)
      }
  }
  function Rh(t) {
    this[Uc] = t,
    this.currentMovingNodes = {}
  }
  function Nh() {
    D(this, Nh, arguments)
  }
  function Dh(t, i, n, e, s) {
    e ? t[od](function (e) {
      var h = e[_d](t);
      h != n && h._marker != s && i(h, t)
    }, this, !0) : t[cd](function (e) {
      var h = e[O_];
      h != n && h._marker != s && i(h, t)
    })
  }
  // var $h = "320b03436ca09382b243c56f27760091e33c172dc385dfcafd6efdb4c81747fe4bfcacf45e27c72cf5cd42580c4b3ff7ba9146d7beeac63a917e8316a4f691b1a470d1f594519f2d4357704c655c5ba2fc87cf59c3fb01e85fa75aec8b37b2c80527a048fd11c23035ea4b843afc512dd90fd8bc3ee67f36ef493c7043b7f0f8e5e16f314a395ffbf5134c9db341af731dd73c3304df3afb58a7f97b98e1a396d820ac853ffd4affab9b7be6e462376ba9f43553e93f9035b6786d6d7618f8a41a1ea26a7cc0a84c13aa2ad57888e71eab013aebdcf1aed56bf70904989994239fa660836da6b82f445065386bb958eec1bf451875f9769973eb0fa011d33854a3efdedf4dfabe208fafc3abb0e7e81a2f3c9147f873ee4118d88cea186077af1fa99409c17049b17b91f682ec4fe75b29135de3d183250760805024b3a1e91a70a3a0cec1ec91431e08b4c906f00f0005239fda9de507341160b07963cc71ab181f789d49506a2ce249fd12c6fd53af79dfec6be8c80be40986c94e570246289aba98b0d7bc66a641f2049462c557ab8f0a8e76355956af8dbf6e9ac100f4a318f30e16dcaa2286d6137520d03e205459a55c02562f533bd726182742dea64312a584aebc1feef2edf05907dd717141b09a61e503da1597aa8a746f484850fd59efe426dfb7f999d98c3a3cd37695cf1e9725fca632cb102393172befd0e65bcc1e8015d1b785850cd2ef62c370d64818e1f009233b884001280d24ce61a2c4db08440755417ae9a7fe870bd646f5a9de3c88c650297b8c05e19d547bcb03501bf04947752764f24126c556b9cf1a65ea11df23038173789de225c4086b6d7ddaf5715136f37844ceb922b586f5a204402f4e6563cc0afd2d00125ee16f0d91e99bb64ba9ba46bff6182e2c3d5e2a47f2a8b7aed6fd851c69c1c04b6724448024333a931372efb971c600f4fb5f0dc4ff9bfe5a18d4459485ecbbf0754d39c4914c05d1416841383f37a10c14dd647c5af1d377830e497e19cf82c2fc1d156814611edb1eb281b1b7d098199439805658519500f23879d4189016f4b250898e67ef88e22d84ba99b95c1bea5b4c111661df88e7448c11da031c0374c71a1eb0a369fd5e5413b2eeb4face785d9542e5f14ac55d3ad2f998679cec1db00caec3356c733b617d28c17fb5e74639bf960b430b3f5d7864eedd0bc77e6b57800b84715c0fa233ec0e0e5d243eb42a29aaf4c2c6353ae21fa2c82889e571bf03d754dacc2e409be854d4e71ee3957adbbc6f34e457378d65f6c5741488c9bce19b9e5a72614e4feab4ad8d3ab2ff5a912ecb5ffd02fd2dc03bdef3b76a99bdb0e865c3cb6b816c1474f2a6a809a5cda442a80bbd3f9bdb7453c0258e68596c9963e194ea79d488c2f7b343af9ba32c943b6bc36b65732201681dae15a1fb6dbe4dc41f5f03e06899aaf407f5984b412ed501f97536567f6f9759b93a99cfcfcf971570309c963c135f76a01b54b1a57eb9e484b6a60926e56ed9abc2fe1400cad2a25962467b450ecf092a47b12bd31488c3bd6191c017248838ebbcca79a148a2d8d05ec4750f1a49d75b46b10bfb385cdd83907c93015ca4d8d95144d5ffcac65ce8513e0421d7d8eabd8863d88cebda667cd5358e8d45507c6a81023a20d9511cb87a825baee40a68ce452d5b8765b2b856394aa8ee6128c06ad732569f305d19ccaa6b8d1f535d765f3b16d477ac3211c2198092d6f96dd2f4b6932ff393e5e6d93f27908243b82ea3a5fece7ffe53453640d0e85aa890dbef8e1edaf04f27c5d0d16794cda242b0a3206117fecf6e79664e48fd475d88b955cafbb3cbe25b6fb04a0de7ab055818fa1e0997abf7e77a47308bf7bf6db58298553f09e8ce467fe3b02f137e19576620d91d27a0d4a84c151b492ba83da3e8c2359a1441f832aa499460fb7efe943022fcb69b579c0a0fb0377f7fafc6e1f95ae42110a21e08da5675813194a3aea774ab7138d1b543d8247d738c3e2f340c5fabf2412a2301ec51da4ff94f4b4bcf02a4b6678fa88737ee9d56cc8003c1645f7255c460baaa0f3b523ae7629b7c09620fa4d1dd1cdc730fccd2e700bff6b23424313aa5b2bd4c3e6cc88e3b30a3a6538b0b47542001710202c5441936cfeff48e60f04e6710de31c6d0585900c8f37fe6ec745fb381d9e6218e072aeec5c3d3e2be10845aa30bf2e2eeb6a80863a6e09f8b20609e35592c76830e96bc2acaf0878e882d7ab68994a581cdaa6c6ef6aabc55ac10f5d9467bbd747fcc996c72505c155db6c0dca1ee9e36e8178fac2122ec03a6e3f2ac3d11ed89083c3eb9d5b9518afa0165d74ea7cf6d0cbe467b78063fb6b841f4a0a6a4c4f3a11b79bc3044cef74369980d91a8d8630d7cecba879e384a6770157f610d429f7b349aff4cd74de0cb98c46eddd3b7182f0b44a2725448ba65195e851f0f4bf227b4f4f310ef6ea48fbb6e258cae70f6953fa2de49c8a27d5e9f5866bad703e68fe62c2332831ba41e0dd6fd298185a386f3a6a42ca91bc8f0256c5d587297144df22b8dc5892443b46831fa1e4c15168f86a4911a793ba2f7d19c67af32f8e9380423013531e322e38d70059e76478ec1a37f15eacd1ef800b33479def3ff0e0f9ea67ebfe36df7020df01dd2a30678a47ce2a06960b18001d2ee748dd74bce119648b331022e9a7c78442d408d6ecced77fad1a2ccaa80d8c86ced73cffc34ce32c93fb642e12fb19ccb45509b28cc3c30f424a7b33a19a0ddb748761e831e2792e836c423ac463be14af4637b2faa6227aafaa081e4343e152a1598f61257869e40d702a92ae64fce7d43a15bb38c5b0baf05b7ebfc7f8172935efac70398c17d929bb38e4ac1deea0a50750b5912655977e47ec9ed720669e8c6a24c1077fb0fe24d78dcdc037a150e700d2121af93e31a37e06feafa39fa6e055db5bdea475e27e2de78d7c16afb03a2d08b4a510008168780fb84ca5909b6a799d3aeb9f68c0850ca4e3d0005e737d99e4ef8a83c6871c5cca40f71f26861437aa27d2f874128caffec50074189a222da5f454098d743b16e1cac7692bc9166b441ca77a66b9de8fe6fdb1b02af8d5e07cba754a0a9296a3f57732a2a01e78a037c07788b0172aa614a506bf5fd163365cd3babc9a0e3be89ee34951db5bb28569fb57ec831cf179baf6124961147135a8d4134157da3296b9fd26f8731e59ca2a0f8295e24b3a0252cb93d63a14fefc8020e106339284a018397b27cd5fd61455f8b3ac487f6d5fdffb6af3fe0d5990d458f11df49a2b20bdd1e0b5ac0775f28e76cef47364225ae3e236a63aeca22d0956241cb273663df43d72c1b333e5e98669e4875106bdcd697a9b85c9e90d5ed968a7ae611b095ae8b7d8dfbdbcb2b33869d40d7cc97d65f0292bda51cd98a8b428312f2efa7390a2ef596caad7ece8ff1e500d6a73e45710ed9853926dc501e2e0f1ff85e4174ac2a8f11b9478e1b46122b3b6b5c19ef9636674d7d2bbbd6a9f025c458285e07abbcdb625fdcff6dd70c2018ebac9d70b86f491c6ba9e82910b6bad2d49169245258d2d12f18d2ea06057181d5cd9e0780febb0ea9e7268a8368afb8320950134e91e14ce1e573283c6ad3442271ec8c8a489b7829371caf8b376e3ea334eb3c4f7f80327f86ce9d785eb2ba6183d604148656de574a85283c20b45bc3f9208c7f199fa2e871e5900b6af9831bc4c2379e3da29198c8958eebcb7aea7ba49d5b92372c12e3b11834ed35d418b2bd3fa59b73113e837607566fad52200abc24c93373d4fcc2bc251da986b527939d5dcc0a0f343bb0f8c4ae89345111be3c5081d7b76019beb80743479325f0320e9c9ea710d8306299b699036ddbe3cedae48a1bb7c098a197edb9d3f868d8895cfe79d97aa812e7e32c4c6260ac3d4cda84e36bf037848af8ff6c48ee0abdb085aed074f9ba04f64cefc0ce4478fe8dde1d5a2f8614c6308e408d31c6876d00b6588620633342c28ffe5fac7ca5dea73855372c074f61547c21983e3ac4718f22137fce5a2f1239f6b7d4c3fb11322e452d23cc7d8be656698d1d009999edbbd9291d5fd749b61348018e4e362bedb54777ded1fe0e84698fce558fefee01cc344a77e900ae829e046fe069646e2e31fb0ac2b6cebd844aaf34c7270d4498367623cbca3f45489109b8abcea6b90464396c37bd8c1a1f25b938e301efa766e8dded090a5545e6d178e0d9461294ad8de8bd835d37f3770d1c319145578bdeb914368ffa7c4c8ea701eb977605d46cb8d6716b2867ad5b215e5b9a0ec2a85ae60d09802f6c73d68fcb0b5dc84670de2d27318822082d8bb52b353a44d05f97ff0cb0a596feb873eaf5e8f7a1c7df826082d168cebd4de7685b4e96c7b411205d4c5c37c2c3f4af89112228f4339c34815261d9b944f8adcdc4acb0146731e185b4e994ab30e883ec1c4b489e2d485ab4b382da5406cf15faabb8ce4a34a7d7fc13594e2f34637ff12b425bf976dc724424c480fffa2a1f65cca3e2b7a7fe9590a53fea944d094ec4debb2c024fc56a0523c564c28446ba81898015605b53789ff98f91f4af1e051771734f961e61e1e80c69a7a727fcd3f4dc0ef10a01f023d6fe33765d5e3af51f4c3555a0c99ae91f4e933eb439f7fed66f64b86587b1eb586f2fbdd11bfa7e89f6512ba1f31b10b591a96fd13fe93abd46f0ebf929acbc15e400b9a2cc38b20e89a8e21bdecf33f64bf3630660f1eacd5bd397907b8d767c35eb1f61f0204e7b37017e35cc9cf70a2517e157091ac778fa9c963f75d7e3b4bcb6d0c243a0f0fa3a3ae3c63883323e2ff961dff4e3f3a22fcc3f8693f114ee4fe3d22f1d3fb31cc19759b0e5a39be7686c5a1f22e8e1393cd7831bd2e41a501f04cb99790d818a136bdd3a938195cbdeda4fcdc3901857cf840874227964f60544c8c45116608f6878a414d3ffd1adc0123569cedc472f31133a9469f26095fc95710f478a00c766c1e57f523e5115860131c7f7fe3ec67e0080391566f5099b096022154affb3738af62fae3946b2afb943509f941e6fc47ea8fdfcb463b97b333949a0111a1c6c66e0aba0df96abc59e4a3f0ddc412ed72e5b27d1490229ffd9e9ac6e8772ebd77a4e2ffc2ad2ff9ba8ce13a4ac1d3d3ce20a6b93a0f07951ab82454ad6d681aea3b42ab7e51ef1bf7734992db3287227a8bd3c7eff4d180353be58c732a55d89ad0cf5e1ba4aaf44b502ae79be388511865a440bc856ce93e3c1185d31c0a330699228bebd58d4049df7292f0ac04246aef48a43ad6384ddbbcb5af6db8d21350cebd40d59c56e02123a0c90dad7fef714c9117f94a631ce2c71c6f0a312a612e61541b340b7b9f605eccee18caf4f676391a6348377936dc9706a648d8e6dcdcc553914045b3014aedab02c44efe4d128953297fbef48573153347ece60e44750933df9d023b0b186ff12fba933d098a161f9a4663e5ebb5b5abe00a12065c2f51f579eeaa87da9b218c2acc0363b1ab652d40c92a78e526d51584395d8dac5eff4f9c0c9d94a19d1eec8eafdb906feead7ffad13ded7ff52b3c5b04f58efe766926d864222d212e7e318f1b6a6931f335ef0f93eec88c874eafa217e51cab999c6cfdfaf879b5fa8da11ecf420d22a50c9816e35feeda8fd1c20896d4a38e2736bbecd1c60ca1d59c90ec2dc325635a9feeca2edb8466f6ede4c142026ce1a6fea919b34349d28c4a8427c1f7071fa2d1ed7c7f863ba59415986660f5dc2f0c6b97185311ea9cb395fc2adcc27c0ee7b43e93cfa60e6567535c5e845aebecc9c1ed192a841e611ad1a95855950b4c297d7f72bf20523fb88329a0f698a0b5067a157de0a650d697e354330f5ccada28f7155d65e388f8d99f0daa3901e94134db6721158f05316d09446603a1e7911764c9033ff206d2932c5c180d98ca21fcfcd2445c6279fcf3c97cbd5e92c715327726486624fef1d5840a1a6a9cdb05d7f9947fd0f605cb79830d4e33137086647ea61687d270897581d184592a1db2b1c42d3af10e5a24fc287ced053e7ffe86a4f43dc07c3ee866764fd041a5b658cd1f948247f0e589ddc9cae6e3456fa829b1630ee24fbf3731cb899a37e2b918fa1199353e0389195aef04c2e736be8308e36ec07fc4a71e4f6c1a28531b98c93f68db9d74dd07faa6a7cf201da4416cb28a9828f06c6a303c1efd77d3848e0e7f0241a535f7e8bb8c0186d0e2de0b5dcde3f6650d906595d80f1904e4967ffac201eee95e8f70d5cac963419d095af473ab1c750ae7424325fb8f1f0c1fbdf8bbf6da049db92dfa759e6d14e73799542aa7d45ed7ec21c667b714d0c1a0035ef1cd12c4c3bd7dcf5ae9d0809cd82ed43fb783e8ebacb71d216e3f2b42d03057e9240061a5eaf93105faf3dca584ae77bd283e037d52d311d1f9f25e9ceb3c20274cc60b39e51718b407aa6e2d2e02aec52439b0977aa9aefa23fbf20384be2de5c6363d7483c00c2da19e1c7a8f7f04bf90228649a3f5183840b1c6d6137b2cf0b7d53f00ce79ad78d9a491573acea6d2508cd75078eb66071e7211fe2a20bfd3008c607d3ffe39997c24b793de5786d5ec705abde9e67b646058648cec89c9b210da51e0afd8f3d95b6e67bc72e7fb78622e81655a32b185b9f640d25f3a74be7fa97c8c7ac181e834b06ee7c4aef0835759b87b6037fbd15f1b1f94c80b302ebf08b587e71cfdf7f11abb703bdeedb4fc3fc4b9400b6b87acf7c515193905aab4a9b7d79a0d5450d29b483a61eb8e4a8d28ac52b1381989648ddaef81361da207cb64325ec57fa3876fa3ac0828da3dff63aea926b830bc6aeb13ad0c7e8bb3129c0341e5d8a46e1642fb38f0f6a259ef076f911dec44a6526edbd04ccb441d5811f6c739703cc802208dfa22f43f77daa5e4c3bff7c191b1a4e28d82b70a1880e952a7c5ce44479f9e49ceb0ac85ead73e77e73a78f4d2f506437944656ef1e8bd670ec8ee660e4329a56b42ba303e38037c34bede27ac29dfdae7fa5ad5ff33663d1693321bb9210c9bda096e35a439e09a6b25c460cfac3342bcd98e53ffdf244023e0e1b3693e3c65b0d24181da208246544e0c5f9d0ac9a7e56bff0741e1c0f11c83002f04988d305bdfcb407c0e79c3ddede3ee386c3ba8d3b1076813e9e3b92c6feac2c707fe106ec8ad7b77f035a0b2b8d2b4aa6d3a06761340a737576a8749acd8208017e0453bb15edd3554535b76516dabc9d22064bd312b3ed9b70ba1126d3edf315924d2922d4e7cf8544ee5469631b560734b305a973a6157b7f58b29ea74d403eae650c3ab84e4e9357fa944b0f0a6b8e5e7d82073d676448711cdb6fb89832db5f077ba26418fef563ace6ad504eb39ad765341ed764c5ad84e1523d95c0d128414b46980a7e450eba4dad2a15d984085f5ac7c5997767cf33be2470df551ed18cb57de84254517a9f5f77ebc1cdc98666bf5508c630cfd1d5f9b4e7365349c5726e5d401a67ef039f4fe7f679cd13105f21b07e7a68178d24a5a2d80a2ff2014ffd7b33155939dfa6efa2b428b34bc0ddf6195d19451b50d7aa78757f33083192981d7993b6965affcd4070824b3985084ddc8131441dd2913dd393d4a853b9783936c19c093861ae4b9f053bdcb86d1881221e1f8eb1479746a850661d0d4b90a0d61ed91b270d2a4b94eb8585d8d2e91e30e5e437eed4717bd3da78eaa176c8d95ea8cf4ae8c015f422f32e99ea8b7b18f0f813e1c7a82c1f4a4385d04c4c2ae6b13b67a100b2efa1ebe64d25973bffb8d602a6b1121e33a3f7712bb204024e2d136aa455611d4cc9ca46c4ff7a7296389d4aa806cdcb90c25b46caf8dc908f92b43f2fcb0c845b72c001301300a4a72f1fb205affc233cef2edbaec5aa287c38c1f29c39f00651654e11ce6cba2983ab8c624037bd2eb0a8c43bcf8bb5607a21e4e0407fd8d6bfca5bef955b5cb475bfac026570da078d004e9932f1add94f46d99e235f7daa2a40299dc8f77c4bfb17a1a7d23dc1b70f6fbf3b4988001030b29c930b5ef2620b5c76650e7da6eda8ffa80c9857279476f94c451bae352ba43a0ea52aef78576c8a984d12b2c511a78206768bf4ffb03af975c4cdb3fd90fc7d0ce85974471adea749649085c88101e12ddc14190eae4d4336c03f8a4141165911de513d1608f7e8bde1858addc82bdcf967042cd7c002ba3f838d59b7801de6060da7c57571a5db7a5d163c0d2b56a2d1bb5b6c48b30a88582a707449f047f5345104848c4028fc062f2941f67c27de1633607b12cfed9f4296179d128ef3cbca074bd0f35019e009daab41ead066ecbef81642e650180c361eea3d8ffa850f95114552e3f2244cbb61719346962fbc4860de2c9bc7116a2b79825e335625e8a8524cd861f585440450318bc85a4cfcc8bf4cc9cd0bb8810ed4f27dcf475b158d02d0e09b185701e098c6841bd3349984ddbc41b3e3ac5692c042d07ef0ee474ac3fab5dbe5907ec7449e1feaaae76635e14f4328396df13fec08528c95ea7e341a65ab2c839510e96553434afcb63259add9833f9244918157f017f29a86a97ae031976db0faa842dac63f9d162dc20ca5dcb7bbfc4dfff1595f5f7fb17e9bb2849514d3f8ce88a8eccda615361441b1b73833d83e630494d28bbe574bca523e6d8983266b8409f9428b66c4e5cca61ccfdca3671840a651c45a1fbfa13f8f57e7e5c6131b0258b791b9be52c2f98577f7066825a0b80c26ff1f4acf0e886607b676c9634d1c4773829576a089cc4d5740422377cb8aa721ec73f37de0ade6c1a59cc025bb982df97f0871191264c32726b7be572f473ec5a12fc1f5ac5af053afba04128071b0ef34d46f725958399643647a9acc94bff20e10466fe43e7c1113fb21bcef06682874f294005e8037b0ece1eadbe4ce00fcef7ff44b68762d0ddc22b88b79fa2830ef37caccde214ce0e291ae631006a2228dc1decb08d5dc5f6fb9a9365bb611453f51602b846bd109b030cc8bf7c7bc5f2a2ea68e6f99a8a8fb1049d05f1735a723d2037d0ba872660e0281f0f225a036ef19ab9ec83992a5713fbcb1086cf9c9925f3b2490ea3dc4a47c339eb7b186bff26652340e2efeff6b77192aeba8553ccbead84cb8588c17c70f397293b056727984954089efa3e42363a9e38778917e66ff06649cdee7bedbddd60c30a507d6dc9af6e5ca6f7f5b197635251570e15bd41c4839e9b5e070de6a9d9a137ea9add7c0c5efd7c08dea68644a3b2ed9fc91c99ce8f740a522989379e6eb44752f7ed26ff34fd43fcbf5310a20d1514b6934aa78c59fa991f1445971aa94e030b532e7ff975ae436716117c057bfad846e619046275b491d92c0a5368102fd0469355233ed059abf9baceb630159325a0604ba6d581d0a77725e7131385e76ed2e27d6b6b9c15ae09623d7f53a08f4163682ed8be297179d4efca6f0ca8111d560953ed1c865b2a8211b02f8a915ee44bac6b4b6b10990aa8702a8b8dfe02156545af207c39efae635a22e6abb17b8aa4f19f72b25d73dc6a003be24b8f9294de784eee9a7fdbae948b492b6413e718dafe22091e0db78184b248f44ef3ef9a19e62b10e02fc2a7e2f1aede1af613c0f8549c9269ea6b67bd7c779f7dd5f07b23876898f83498abedc2700756bde0d916266446ce8a97acda98d3d983e0673190e11cd024d7aa28c263d0dcf45a5d1b56af94dddef10ede32b1c6221c64d572bc72553edacd792565f0371bac30d6b92810fce9613ff0c84ccf706466dd5d6a71fd629502feb24bd71c478e74e478cf31446b868f19e0afc9c0101bdc161fa4045576d41a71014e75856ee2267fed3d06dba4f854342acf047b8fd8ce261568c93b4c9ad78107df92bbd853f7499206bb88e0916d1a72fd213e709c1a2a64d3647ae572f9eced1a1bccf3efd8e05200e62cdcd72057294feae96cb9699335ddbf9f39308d5b7a579c80dd52188b1fedfb33fb342bfb449195196c0df43bd34b547a256cde3cf4aea2e20d6552f7f0f9a519c750a5937b698947f1317520c1c13948149ea6b8f436540b3cba16683e6c61118c566b86875d0ed0b5773bb92df164b2cc4eaea8c7c8b0995df81c50b6e42fa5d90fd933957037cb8e2b8a54ef07d7c7c5423e6cac13c0c7d76a384fdb2de6f658ac5384ff0ad3f853d48334b0aeec1a49cc0865bdb22373433a7a490bafa30c5811defd19e64faa90a3ebd0846d3a3940e5b65cdb36e4c63cfbf66ff716201d2b9a5da62503577a8ece08adfd1b311227369ef8597fd3da0a7ebea8b36923783de5434c9674160c28e0b5436765c4b009f0067331b5f7e839b2427b2d06833fe40ae78816ab986e3b302229ce48e478f0bee9b2feb782686ba2edf7a67a9830db9a8859b3e050cc6bf691aae6cd4bb5546c3cf80c6a5c40636fc2f6071ba45852fbc364a749e608ac5a6148d2e80b10a6b6084c99dbb95672d7da7704cb6cd29c1b7a1e34d0d4f861f0d1316efef677de9ecc9a3a2bf95899356cd5a190fe6d47c1eef0671dbef1f23d6d42c7fafd2ea419d6dee5a83d0e0244e5ff4d1013b19ea6dcf83c14c6e1a8c7a0e998328031abb328b38787bef55a68648f94a89041f90fe0563b7d8c4029191290bf738dca18e9bac173490165fead4d294f9003b46e672c2bb49b564cbb409e84f9a071422a1f706596ee59a58e28aa4678c9b659c7feea40721db58d82d32d80490dd938eaabe41e194e18bf0e85cbad421e8bba9025037b73eac893e02aee8b8f255f73c12e49f0e0ad16539015665748312f15ce7c8521d0ed35fd367b89c270f761d160ef0cc70274f525f9a34ffe7bbe37e6a9a0fadc120bd71fa4a0134f83fd519a66e8b8e5e1931b4d659a600376d93592b8d24ac6b472bd9ff56e485fbe13032c68ab43197aabfd67e9773ce53bf3a66adcc74d10da79996003a2ae922792e830b6e3683ac059aa01a53f39721cb6bfae4fbdd2424884f31f6e013981c134582afac5a8a5bc443f9796dba0b007bec6a0cb9253cc9189a86394551f71f8ad3c1275bb6a1faa637a1fc1b8952fac3fde641c39e28316b0bcf82ce8a871ab6cac0e615ee81daeb5fbc02408195419fb18d95c0fae6a4f10ed21fde7790ce929ecdc509702f37a0f617abc2ee142ce9943da38eaf94479b786e949bbad5964107bf1bfcfad2698f507d36da339a3f601ea294d6177c8fbed7ad005642ee8ffec699ea12b9ac9c2ca5d22c1cf8d0802bf75c33ce856f1008ec0f1dcb2de177f24f7b042f01d357a75a33d56e2e136ead9fb0c160c4a282bd2f65c1406c318129932ca5e2efcce987c42554737b214eda18f7c5965105b0cbea8af04b8f74cb79be4fce584f5c3a2af04ad02628d386543f82bd0f8fd20fa6a5ad7d474bdfe4c65f4e21e7d96f42bb2c489eebcc855957d70d14dcb5e49e8069e9420d87c2153efc478d9b0469d3d70e85880fa996bc8351770b2e32c7fcce10c4147b3cae7eeaf5c1834cbae5d1218fd8264ad028fe44b4bc9abcfbe83a143085b2ce2138e9a57f62e8ee4eba6ae07b346c31fc84779e1a0210bc2254e98005672210e7075e2506dfe3153242d8c3e9b0ed9cdfa94f0ecd4a42cadc08b1142a903030fd78b9410c2845a11dd78d4f57172369404650d03539f09d61dead79c9e41cc8a5a719802c682f50a3e61e22ef41d1644ba5e55f90618038962bc567fac7cb3a6aeaac21612782d7b44195c3a33c41d416edf0f566cbc1bdab0093fa89fdd4079a8c5a20a3d0ad0118fe5f7e50e6a2ccf90cbf20970c9653b6d361b09eb22cf7b7de9f61b9546b22a5a5c7428e90ed32c7a611426f1152d7edef50a67bf85cb3c91057cca13471c290a52dc3a9ee9f627ddc29ad39dd39e8ccc22aa21a8f3fda935c0c1b23727cd84add4f267cf6cc762b5444f203d07cdc0855dc88acab6b0459f31fcd9d65f68f84cec6c532255d6c5a830b2be970e03484c73a5e2865c7adf319b649b285bf7bc37fc5d5c060a1b81591e6765f0552d7b2f3343496dbc6ac5a698342e46053e1ce03255215da4161f16bc62fa2d736c0be85e829444cb8db05557001c26d7fa7a3c50fafe250a1f0667bc357747844ff8025ea9d6e168b24d980de6dc707a27115f8ca9af2294e65a88747ed1911a4e6e7c913b3dc7af98ea9cf7a98e5da7bb10a302b830655c7de8bc4120fe3f2ba9a0189ba78c096c6fc50b12d779696a77d235dcbdf721a3f7ea3d1a98861e0dea0e3ab662d3f370b51c85954776b58f7702b0bc63f902522322e6770a84ec5ccb5238eaaddda34daf006ff1d66950c78b29209ab9c826d759f4b8fc143b9c97a13cf83f0616da8fc1afe359a14309cf552252b74ac1c399716fd141136210928105d1f64e629d38d996a67ea8b8798f18d9c4f74a26a4b5edc776b2fb8dce85949d2a37a8bc6a9ccbb1bc47973dd5fa19af38ad1c6581abbcbf60201ad1ef6550a9c03ebe7d79b3156b1832f8f632f8493ba5256d7321f9bccfcaf66b14ed27a8f79f257390eaaa739bafcd68cda4a32501508eaad563a7a6d7018961e87611899982e4c999d729a97c0fd126da3cf64515f4fabba16211a2f33fdd10f911f31d6e8395d568fee96bf2fa4b8c21adfa87c9867819f00c2fdfeeb2c3ab24050c4d975aeb5474c1f1582f0cc1ca9792c53233fd988e31da3ce4ea9ba96f2bf45f2a6c39dfcd1c760c668934b5e2990d2890287ee7ba905a9f9d91fcda78122f87e790e2f8b197bf479b2930537e329e300e6ed6723f82df2a9ca2b535e51c964784f5067e3addbc071702a7957a293f86a95effe01ef653556cd6066c60a874dfc3274acdcc34d396fa82ddbbd6b034f8fb77aae356f6ccb46fbd48675e188f9aa9aeb262d9f34ec8f31fdab1edf1ec4cb9dc9a2c1280309ff1de77370adfe475d5d8e4df9697cdc6902cde7c651052c98b2cf265b11940177f35791eded0dbd9028be16c14edfd89fc81fdb35d5fe8264e1ed8fd0af08275fc716b83c0aa1b085718935f6b32e60fda01e130d9edb86a5dfe85bcfd96ec86b2157c538bebec3980f4d8e55c8840355e69730e1130f73992491a6b6ebff6c1cc9f94a393cf66231da10d1ecbc4e971c7afd804b3cdd9da7cca10f1aaec37889076713fc6d09bfabaa1d97ff41a5d2d33ed78175abf808f9cd2d35fff9ae017847b798735ed08174a54f527670c9b7ef32fa330224f4951d0034697ff67e2eb53549e3cd5130fcbc839196e6f37c0888b82ac8acd1f30518e423c9ad4e53c1ff1a30be189ab412d35e3feffcaf9c844925ea419863f99bb189e0e38cb1af896ddb10f6d02917e68ddaca59fb60c2a0e78b2c5fd660caff87da168f0d34fc779a97ba0e1748529014f796df7a228eb7eece061d6aacb4cfdebaeac476e07e79a4bbcef05abe7d4af16a90d0d78dcf789d69965b258de112d058a56e99847e679f1c259d440dbda91193f44d8f0063187ca399ca8a5d06b27cefbfd5f5d2494f4f29191d04f695f7a6c50efc71de7558dc527bf5cd7ce15af275150d7825300654ea3ae49297474640f563dc643977ed08679e3d4e9964813a9e0b0f295f8cc97901070088ba835dce3d4954df713132d2b15b9c1548a8bf83ad970d3786bb7f41713e7a02e0cb0a23142a72c2cfc766dcf44a9bfb8533b2d6fbfaf490c0b1346763bbe767a0051ba44838e75250f205a2079a234cdbca431616beb47f2af96d987d044748314ec3e9f3dadc0c6869d23e88e3a2d0b1d7470e786e138c590064fabd1e1c26b326288b7edd9d29139f98b0519476705f05ba2745f0bbe4c720542c8808ad46ff7107d0626a5c76afb9ef44afc00855f31f54c7a0f19525fe95fdb42ed52c22662dd148d6c2a01997ac204eecafda02fb3c62c7d4737019ccaf35c688da1c33ca11cd8064a971de7516c4bf7d95ed66a02cfca1080811ed3f9b3bb028c751d44d559fec068a4a6d3533aaa04b9f88be8378235349575530a103e92778af818bcb48fec57fb787f972675ffc8ad0381a193ffc6c916d52de34b0c75b7237e19e424dc00e286379375060f0d05f23b847e97b21a2c9006e5fb232140d9a0ffada1905cb8c40067889ec824e1108a04fd7741fbfd33232de7e4ba602dd1558ec7360f2128dd2c38fb6940b87d5f49faa900ca1e892e96fd4528dee2bcf7ed03ecda4b41b9a3adcb856b90dfb83fc94f32894298b2ef23abf9e93befed480fd835f14618c4d3f6708ec1c9b748000287adf862d8fb407b6e20a46c284d063d709714310079011a3875abe7b1288805f5e342a8b9a4b2288a95c0603bece777636385364b1e33a504b11120423c02b66fc2275eb1718237814b29340f8f94b87a4065ce35247247c9538d953f378c2bb5b191789fd62810f584a8078df49cd19b5dfe49a40ec4a127b1d7ef43f60f7ad207a5ad702b72062eda170c703df3e5a11df8153826fa2a2ea7dc5e73c4acd657fca5fda30c66f62cf4f32a63be2fe72207834748b720f25affceddeba523fa60a7dea1516fb956cc680e70fa40bb532cdf3766e84196107bbcb9bb9a2c362266b1323f26146e01eaeb6086ca2b2dfe827d61b1a5c5a8fe5a071ab3e96c30d7e63b15e7497cba2b4fdd8ac677ecdb4f81eae2728dcac864c64f589d4d81792471738a21c54d11b74b2b8626b40e233d00fdb3c4894f818c833a28d59d361cebbd5e64da241fd20b961019a008f44861dd5829963e258370eb86da96bab780590ffa36da01468410c1b4280a4a245774196bccc9d39461168386bb164907e077f116ae0c72fafc9fde7b10827cc2248da3dbe69c6e55a847dc1391d37ca8455125ef398c874352890138be38f738f0d4a551e8439ae952e5d3f2bbe857512684f214a54e908058bf2610cb7c1c56d817906ce8f1950792943c09fa9655b1cc036c36d257e9303bd5d379039d3b4d32e6de960ab608d998e950929c160f837356e65752cd61b497ecefeb74ab3d86b81025097751a3682899d38b77167ec61e25762102c13bac62e29a91469bd3bce85b2a5e34fa3aa6625e391040449c1be01c11ed3ad52592d696aecf4870227e764a2708a1383c17bf1f750356ec74b5293e9095806da5fc44cbdad243fb35d67e520ec1ad16a9eb96f735eab96abcf1a266016d02c279362b0dbdf26f56dc81ede02c95e0f70d828bf629294f1e14825bf5c64bb6a5e8942c14e5d702139644f2e07fca2c51b0d36441b6bc3426f77566105ced6bbd11805ee67bb256777bcd82fde5c3fabf2553dcb5d99392ebdaa39bf2ebde7a263324cb5e9b27c348ce94d44adfe38c6e5fdcc6789f74a98cf57610fef20556d90e14b62dbad840a7180b54f30c6995c3d2207398f18fc6f7ba60ca304fb36a55df86ae266c72b32549272437c0cd25a7618bac95f8dec0e1bc99fa9a58eec4ef458ca9d88518a2314be67693d90c4607c2f10e331fe34dce54a3887c193e430fcee5937a81db0cea15243640fd38c7b9a6172babc1b75cffb62d326fb34176aa18fecfc16df28f124a6bb0f0d21952af963d95d0b5e278500ce4d1efbe325c76a5e3ae3bccf72aa50d11b30b3ca6bf47569ef3657e1e50e1fee61182390fc46711cee1b70a906ac3d22fea88c8b738942b7fb0b3e6d4a7240466576704a3e81656f57c44895847f96eff8ff9732343998743f825afbafc7ffe7196c1b458f2907d0999a60a3c6a70062c6d241be30027a7352e8570a1a479157e2e80497a5efc677a1688e7dfff995edd671339e756a75941dffe7b8e1459ca0f2fb18087290662266669a8de6bb83633173eba18fb061ce740152ac64a211dca28c627be3a1aaaaff32e3ae4aa9492d35e3c37784b697dc93222e54647645fad94d53f9fb6481aa07ff975df49bf6c1281c46a666432131fe057a56440613a1305ed5698c6fe4afc458c1427dc45e2d22ae5360082e14f868c2cc1a02ced911dc9b7d8c39c27be34332dc3f0ff98c19a4d902e7a8105da7674a7876f466f068c5f52569f0d8289ebb8b1399ebed19199a385536846d9af4f144bf7c18bb1e94f0b546dac39a1854f65fa3946c0e84a8e663ef61b7505530369c658c75fb4e1e76662ccfc2551d0b52d67fee180c290ea4480ccec3059d3794beaa64be74d154b34237adc84825b982e2199c737e04e47b77d4d1ad338d1008744102e719f05d9ba60fec252f205f1f75fdfb1e2cc74d373652307d5cbec286ef04804cf960c900e14ae4405d20ade91476d4f67b7b1574d866838fd98b4b741ddfdb479e406c66697dc3335bc371d81ab360b5d59bc70b01c8503a26e0291455d2590640aead68a3846443d6dcbb482fc87e604664e7d1a373d59add7dd140041911cec8e167a01c862f363b191e59281f7ef6a275f65b95261b908b4eb903f4aa782bc389d2a65bfcd7f46b7d86a5400e8fa4ea83b2ba47e10d1c71a91c9df3261885e1f24a8f9cf17844193ca4ba7d2acf6f9e86381471b29d9077c525537351f092002090f667821f1a719f8997b4229794b8e3f98e0c7d58223730a653bbdb21bd6a4e92dfeda0d42976dc3c0822388f6afeeffc10503ab01fec504562363feacf917da18ea0d663ec96f69c6bd0f95a21ece435f7af779a02797059f1c58c23b5c57ce145a5a5d2382b4e64df23394ae67d1a378db5a4ed10b52305b5a9cbeb36239184bfc724ce45f26976cd091252164bbbe33b0eed0a748d6b54b5a173a90e7d0f8b751028ca85d5fe8767fe50a4c81ea3a76cf81d44868ed713407faa8516d82b904e0fd5858e63528bc976e6ccb85cec4fcfb5ad5efc915ee6203550023d43814a0509739702abc96893ca149b38fa503ad7baa8ac8f768e5ba8fdfd2709575b162a28d23800b56fb8427d9dbcdd759de2aebce3c5e1c7e5eb75cf223a2612774a6982bbe7b66704b01a3cbbacf8a0148b60abd08806a1eb5e9268525978b99f1a13b3c7217176067ae9e17c5b6f3ee28492eaa3d3285fe15e8a6558dbbade62320e0e2f099e4ca76a60ad8d1d19f7aa92b2354ca5eba2a62925d7f6ad24849fb7a15d4e0bc0ea8912e03e879e93ca9ffd5201884789e2b1dafe3ddbd483b6c9592ee25fa1a9bddd2910ad920629c268c6334db75d7ebd3b30490b093aa4fe4b2543ada6d81bd0b9a6ba81a36802d68548980cebd52b0fbcdf182b5259a391cb83615241aa8c32115033b7bcf75d409e49052e3ca2",
  //   Bh = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]";
  // !
  // function (t) {
  //     function i(t, i) {

  //       // for (var n = "", e = 0; e < i.length; e++) n += i.charCodeAt(e).toString();
  //       var n = "8185786969";
  //       var s = 2,//Math.floor(n.length / 5),
  //         h = 8766,//parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s)),
  //         r = 3,//Math.round(i.length / 2),
  //         a = Math.pow(2, 31) - 1,
  //         f = parseInt(t.substring(t.length - 8, t.length), 16);
  //       //alert(r);
  //       for (t = t.substring(0, t.length - 8), n += f; n.length > 10;) n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
  //       n = (h * n + r) % a;
  //       for (var o = "", _ = "", e = 0; e < t.length; e += 2) o = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / a * 255)),
  //       _ += String.fromCharCode(o),
  //       n = (h * n + r) % a;
  //       return _
  //     }
  //     t = i(t, "wpc"),
  //     Bh = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
  //   }($h);
  // var Bh = new Array("get","C","hildren","length","call","has","children","slice","splice","concat","ceil","remove","clone","class","N","ame","L","ist","A","ttribute"," ","add","index","O","f","number","string","boolean","is","rray","event","prevent","D","efault","return","V","alue","stop","P","ropagation","cancel","B","ubble","floor","random","object","apply","prototype","superclass","to","F","ixed","handle","$","on","E","vent","define","roperty","name","value","read","nly","S","etting","rgba","(",",",")","#","000000","enumerable","_","roperties","split",".","touches","console","log","right","bottom","abs","vertical","osition","hild","dd","R","emove","ms","-","replace","U","pper","ase","style",":",";","substring","insert","ule","{","}","changed","T","ouches","client","X","Y","page","XO","ffset","YO","left","lement","y","M","ouse","UI","UIB","onclick","ondblclick","DOUBLE","CLICK","INTERVAL","TIME","push","time","tamp","onstart","onlongpress","LONG","PRESS","wheel","elta","detail","onmousewheel","click","dblclick","mousemove","screen","mouseup","meta","K","ey","ctrl","response","XML","'","' ","format","error","ext","JSON","?","__","=","now","GET","onreadystatechange","ready","tate","status","load","send","sin","cos","height","clear","oint","width","px","canvas","webkit","acking","tore","ixel","atio","o","backing","create","ontext","2","d","ratio","set","ize","FONT","font","\\n","max","measure","sqrt","atan","pow","validate","ounds","bounds","points","intersects","round","I","n","troke","stroke","fill","data","line","W","idth","ath","last","type","rotate","tan","8","oundary","exec","ndex","test","IMAGE","HEIGHT","scale","ode","full","uniform","padding","top","translate","draw","source","image"," - ","ocation","invalid","erminal","mage","ata","BLEND","MODE","DARKEN","min","LINEAR","BURN","SCREEN","color",", [","]","GRAY","put","ransform","intersection","ect","close","offset","rotatable","$_","host","otate","layout","nchor","invalidate","grow","border","show","ointer","anchor","background","G","radient","adius","pointer","position","mpty","ine","ash","moz","transparency","delay","ime","disposal","ethod","lct","lag","gct","os","pixels","for","ach","onload","parse","onerror","xhr","join","char","t","from","har","decode","omponent","qunee","lo","lh","12","0","1","3","contains","parent","gent","dge","undle","nvalid","ooped","escendant","ollowers","accept","ount","move","quad","curve","register","SHAPE","CIRCLE","ROUNDRECT","PENTAGON","DIAMOND","HEART","RHOMBUS","PARALLELOGRAM","CROSS","ARROW","STANDARD","4","5","6","edge","lags","target","property","binding","callback","PROPERTY","TYPE","CLIENT","STYLE","tyle","destroy","ui","EDGE","EXTEND","SPLIT","PERCENT","VALUE","ELBOW","HORIZONTAL","ORTHOGONAL","VERTICAL","LEFT","RIGHT","TOP","BOTTOM","NEGATIVE","INFINITY","POSITIVE","CORNER","NONE","RADIUS","CONTROL","POINT","union","SIZE","atas","graph","ype","body","bus","ayout","angle","center","hit","est","egments","bundle","nabled","LOOPED","EXTAND","per","match","div","Q","raph","av","utton","img","ontouchstart","onmousedown","src","transform","180","deg","append",", ","hidden","none","absolute","100","%","NAVIGATION","hover","H","eight","selection","odel","isible","electable","ZOOM","ANIMATE","zoom","ut","URL","/","png","interactions","default","ursor","ounding","lient","tart","nd","undefined","text","collapse","select","scroll","anvas","nesw","resize","document","interaction","istener","current","INTERACTION","DEFAULT","nfo","nergy","unction","other","navigator","user","equest","nimation","rame","imeout","ancel","333","normal","FAMILY","matrix","not","exist","first","node","tag","next","ibling","distance","a","MAX"," , ","horizontal","sort","l","c","r","m","b","MIDDLE","CENTER","classify","radius","kind",": ","change","old","child","new","listener","before","scope","equals","listeners","list","KIND","ADD","REMOVE","CLEAR","INDEX","CHANGE","arent","hanged","lear","k","fo","filter","hange","ispatcher","roots","disconnect","dges"," '","box","datas","head","ower","opup","css","styles","sheet",";\\n","DOMM","croll","mousedown","keydown","touchstart","touchmove","touchend","touchcancel","startdrag","ondrag","onpinch","urrent","peed","enddrag","onrelease","anel","cale","prev","limit","pop","interval","in","out","grab","grabbing","crosshair","url","gif","base","64","i","VBOR","w","KG","go","AAAANSU","h","EU","g","AAABAAAAAQCAYAAAA","9","AAAAGXRFWHRT","Z","ZQBBZG","ZSBJ","WF","ZVJ","YWR","ccll","PAAAAFVJREFU","e","pi","//","lg","BG","AY","MIO","j","GQZANIM","osky","AKYZG","yi","PIOSWGA","z","RBGU","MB","q","GUBM","gxh","nfp","KQD","qq","RE","qu","RGY","BA","AEAD","ad","TI","zw","AAAAASUVORK","CYII","=) ","bounce","ly","IOS","nsets","election","IL","calculate","istance","rag","upport","alert","prompt","confirm","CSSR","flip","mirror","rect","shadow","elbow","orthogonal","extend","zigzag","bevel","circle","ELLIPSE","oval","roundrect","star","triangle","hexagon","pentagon","trapezium","rhombus","parallelogram","heart","diamond","cross","arrow","standard","7","open","butt","LINE","CAP","ROUND","SQUARE","square","JOIN","BEVEL","MITER","miter","SELECTION","SHADOW","TOLERANCE","BLUR","COLOR","BORDER","POINTER","WIDTH","device","quadratic","urve","bezier","CACHE","PIXELS","visibility","bind","cacheable","save","CCC","lign","aseline","middle","888","FFF","000","restore","olor","lur","oading","...","render","rror","lend","colors","GRADIENT","RADIAL","positions","inear","adial","RAINBOW","SEGMENT","MOVE","TO","QUAD","CURVE","CLOSE","umber","egment","hadow","order","ap","J","oin","outline","begin","darken","MULTIPLY","multiply","burn","linear","lighten","gray","clip","imit","186493","145","115","87","85","125","89","176291","2479","2881","BB","FA","86","004063","ece","efefef","arc","135","186494","70","257","AB","2377","AD","DA","105984","6969","545252","646262","4948","494645","808080","888888","939293","FFFFFF","EAEA","fa","caca","39","CBEA","ECE","global","lpha","727171","reduce","len","pos","yte","ytes","nsigned","LZW","code","sig","ver","GIF","ot","file","shift","es","sorted","bg","reserved","nput","iven","terminator","gce","comment","pt","eader","pte","unknown","app","NETSCAPE","identifier","auth","label","com","interlaced","lzw","sentinel","eof","nknown","block","x","alt","key","ersion","ublish","ate","publish","copyright","43","1133375609","ab","3212","157552652782","dc","abfe","47273959","defd","82","eba","3781","7138","bd","02954591","ffc","95","aca","49","03","ae","3317","fcd","2397","fee","cfafc","22186728105736650","cb","696","47","44","741","bf","667","aefb","497","aa","dcfcdabc","9817288","dface","24","fd","afdb","18","ddb","42","bdca","295","58191399","633","34","ebd","8329","aef","54181232","088","ff","aea","de","05","749","icensed","20","website","demo","map","fil","nee","RIC","ho","ca","ifr","end","ont","proto","locat","11000","15000","17000","20000","31000","32000","ion","stname","u","HTML","iframe","display","content","indow","localhost","127","00","overflow","cont","ent","ering","isibility","lass","tooltip","enable","ub","etwork","tyles","connect","edges","path","segment","fire","location","oops","follower","size","SHAPENODE","STYLES","hape","segments","generator","us","GROUP","RECT","PADDING","MIN","group","expanded","roup","444","ackground","sync","selected","alpha","visible","initialize","do","alidate","it","ACCESSOR","OFFSET","RENDER","ALPHA","blur","STROKE","shape","DASH","dash","FILL","gradient","OUTLINE","cap","LAYOUT","BY","PATH","by","BACKGROUND","adjust","LABEL","ROTATE","POSITION","VISIBLE","ANCHOR","family","ALIGN","align","ROTATABLE","ON","BUNDLE","GAP","gap","looped","extand","control","point","percent","corner","FROM","AT","at","op","amily","ADJUST","check","ody","50","rrow","utline","ill","abel","inding","ender","BOUNDS","GROW","easured","rom","init","ZIGZAG","can","ind","ositive","rder","editable","eference","everse","origin","enter","efresh","; ",";-","tap","highlight",");","inherit","555555","075","bc","2898","SCROLLBAR","navigation","scrollbar","button","kc","epth","irst","found","efore","fter","reverse","xpanded","BUTTON","element","update","iewport","ondrop","ondragover","ransfer","rop","ogical","drop","ction","properties","reated","ELEMENT","CREATED","nteraction","movable","selectable","resizable","linkable","ink","tep","focus","ater","un","elect","ll","ovable","ustom","viewport","onresize","html","inner","elete","lements","UIC","start","dit","allow","an","agent","+","bindable","cursor","_$","AAABQAAAA","CAYAAAD","drb","PAAAA","09","JREFU","qc","EY","fqeb","ua","QTWQK","udkd","KMXI","gg","XQRRBD","RBD","dh","RAVFUS","FVXE","EEBVEIIFIN","JGEEF","HU","VR","DP","dn","KLT","OD","zzf","ud","ezj","ZG","SE","xx","FG","HW","pgu","MQ","gh","nz","OS","zno","KB","BQUWBK","nsanzhx","DX","JRIQ","ODVFRUSE","661","oe","886","HA","+/","SWF","xzc","mwqe","IWP","upqcbvd","TFV","ZWOA","BH","dr","RL","sy","NTW","670","IS","ipfw","yu","FX","od","HR","VVC","ql","ER","MR","ajpq","ysr","SPA","pa","iq","tb","XWRCKR","la","gml","579","p","ow","JK","anp","60","rj","s","ID","dg","cz","WL","ET","uaw","gm","mv","YJFG","lfn","v","CM","ydlb","FMV","vw","rs","EVQ","MX","gox","CJ","FT","FHWK","vs","zlf","br","sz","lla","LDH","gx","FW","sw","ry","KM","ZSO","YK","tf","DQ","YWQ","GQD","BQVPBEW","HC","puz","IZOMRCK","yt","LR","fh","PNYQ","kq","GN","bs","xsbk","62","pvbm","GXDORJB","wv","mpi","dvwx","TASJZ","qws","KCRKNR","ysl","SNG","wl","uld","BRJB","fr","IUZR","ci","SD","grt","35","hm","BI","ANU","AIB","oi","jl","MBI","em","EL","RQ","jbr","RC","FU","YLI","MN","pcd","UMK","WQ","ZE","764","DT","uyy","TQO","sj","BAV","pnby","qi","jc","RJJ","PN","ufnr","qw","umgom","NOF","107","ww","jw","TTS","YV","hr","41","TUJAZ","gs","eh","lj","je","WP","ZH","mxfohd","KH","NZ","QY","zv","df","CTAAM","91","ig","AAAC","AAAAUCAYAAAD","oh","MV","LU","EUP","NBGJXKW","BC","RZ","CF","HY","dvazd","ft","AP","HZ","gdk","OKAQRSA","RP","BK","XN","mcb","57","ve","893","vn","fut","oixrh","UJ","um","zn","YH","AWB","NHWBV","tono","va","AR","IXUK","RXLBYFAIJ","bqlc","GQT","jnu","yxz","HJZ","PO","ul","zq","CN","ffd","LH","CD","AG","EA","JO","py","WRSM","80","63","pd","oy","04","AL","gve","HJ","XISD","oedie","LQ","im","RXL","si","SVS","kkym","RT","ip","oa","08","bjsb","LW","gn","YANG","ynw","lf","UQ","ijmpsa","wh","QT","ht","zt","BW","AW","KUTE","VT","PYG","fxh","boap","YNS","kkl","RU","fw","ALR","rrt","936","pws","VUIL","aix","gj","ZTMZ","zso","kbz","ngtta","zo","IH","YG","ar","CZ","QK","ZQIP","wuukjy","SNR","MOP","GXKNEK","QX","cln","rdk","OOR","1358","xjh","tybfow","vci","AX","nqe","SX","QN","PP","oydxa","45","ld","pcnap","LD","domxx","DV","eeg","ch","90","jek","XD","vm","MI","EN","VO","TNH","vl","MF","TD","kbt","OAAQD","EZVA","yg","AAAABJRU","rk","ggg","==","10","opacity","ease","relative","transition","cubic","sizing",": #","120","margin","ane","nertia","oth","drawable","ANIMATION","MAXTIME","trong","animation","HANDLER","TOUCH","DESKTOP","rawable","escapable","lose","raw","finish","responded","reate","imple","EDITOR","SUBMIT","WHEN","LOST","FOCUS","textarea","ditor","solid"," #","oninput","hen","lick","diting","ouble","verview","ditable","export","ragging","elected","dragging","START","END","ocal","handler","555","esizable","ontrol","RECTANGLE","SELECT","BETWEEN","nwse","ns","ew","255","FF","otatable","RESIZE","original","ROTATING","esize","TOOLTIP","DURATION","DELAY","ooltip","FFFFCA","<",">","ontent","evt","elay","heel","oom","MOVING","moving","created","REMOVED","removed","resizing","rotating","between","long","nstances","view","zoomin","zoomout","simple","CREATE","nteractions","VIEW","SIMPLE","ZOOMIN","ZOOMOUT","ove","ectangle","oints","layoutable","animate","locations","nimate","esult","ocations","DIRECTION","even","two","side","EVEN","TWO","SIDE","orizontal","irection","root","97","dv","DY","timer","reset","ax","terations","step","nodes","onstop","unning","ngle","alloon","ayouter","proportional","regular","variable","ANGLE","SPACING","REGULAR","VARIABLE","ayoutable","layouter","pacing","EXPANDED","stack","dx","quads","mass","nternal","attractive","elastic","ass","groups","repulsion","pring","duration","IE","ebkit","ecko","irefox","afari","ac","efaults","onsts","hapes","ree","unee","version","about","iagramming","omponents","13","2016");
  var 
    Fh='getChildren',
    Gh='length',
    zh='call',
    Yh='hasChildren',
    Hh='children',
    qh='slice',
    Uh='splice',
    Wh='concat',
    Xh='ceil',
    Vh='remove',
    Kh='clone',
    Zh='className',
    Jh='classList',
    Qh='getAttribute',
    tr='class',
    ir=' ',
    nr='add',
    er='indexOf',
    sr='number',
    hr='string',
    rr='boolean',
    ar='isArray',
    fr='event',
    or='preventDefault',
    _r='returnValue',
    cr='stopPropagation',
    ur='cancelBubble',
    dr='floor',
    lr='random',
    vr='object',
    br='apply',
    yr='prototype',
    gr='superclass',
    pr='toFixed',
    xr='handle',
    Er='$',
    mr='get',
    wr='onEvent',
    Tr='defineProperty',
    kr='name',
    Or='value',
    Mr='readOnly',
    Sr='onSetting',
    jr='rgba(',
    Ir=',',
    Pr=')',
    Ar='#',
    Cr='000000',
    Lr='enumerable',
    Rr='_',
    Nr='defineProperties',
    Dr='split',
    $r='.',
    Br='touches',
    Fr='console',
    Gr='log',
    zr='right',
    Yr='bottom',
    Hr='abs',
    qr='verticalPosition',
    Ur='onChildAdd',
    Wr='onChildRemove',
    Xr='ms-',
    Vr='replace',
    Kr='toUpperCase',
    Zr='-',
    Jr='-ms-',
    Qr='style',
    ta=':',
    ia=';',
    na='substring',
    ea='insertRule',
    sa='{',
    ha='}',
    ra='addRule',
    aa='changedTouches',
    fa='clientX',
    oa='clientY',
    _a='pageXOffset',
    ca='pageX',
    ua='pageYOffset',
    da='pageY',
    la='left',
    va='getElementByMouseEvent',
    ba='getUI',
    ya='getUIByMouseEvent',
    ga='onclick',
    pa='ondblclick',
    xa='DOUBLE_CLICK_INTERVAL_TIME',
    Ea='push',
    ma='timeStamp',
    wa='onstart',
    Ta='onlongpress',
    ka='LONG_PRESS_INTERVAL',
    Oa='wheelDelta',
    Ma='detail',
    Sa='onmousewheel',
    ja='click',
    Ia='dblclick',
    Pa='on',
    Aa='mousemove',
    Ca='screenX',
    La='screenY',
    Ra='mouseup',
    Na='metaKey',
    Da='ctrlKey',
    $a='responseXML',
    Ba='\'',
    Fa='\' XML format error.',
    Ga='responseText',
    za='\' JSON format error.',
    Ya='?',
    Ha='__time=',
    qa='now',
    Ua='GET',
    Wa='onreadystatechange',
    Xa='readyState',
    Va='status',
    Ka='\' load error',
    Za='send',
    Ja='sin',
    Qa='cos',
    tf='height',
    nf='clear',
    ef='addPoint',
    sf='width',
    hf='px',
    rf='canvas',
    af='webkitBackingStorePixelRatio',
    ff='msBackingStorePixelRatio',
    of='oBackingStorePixelRatio',
    _f='backingStorePixelRatio',
    cf='createElement',
    uf='getContext',
    df='2d',
    lf='ratio',
    vf='setSize',
    bf='FONT',
    yf='font',
    gf='\n',
    pf='max',
    xf='measureText',
    Ef='sqrt',
    mf='atan2',
    wf='pow',
    Tf='validate',
    kf='getBounds',
    Of='bounds',
    Mf='points',
    Sf='intersectsPoint',
    jf='round',
    If='isPointInStroke',
    Pf='stroke',
    Af='fill',
    Cf='data',
    Lf='lineWidth',
    Rf='isPointInPath',
    Nf='lastPoint',
    Df='type',
    $f='rotate',
    Bf='tan',
    Ff='_n8oundaryPoint',
    Gf='exec',
    zf='lastIndexOf',
    Yf='test',
    Hf='IMAGE_HEIGHT',
    qf='scaleMode',
    Uf='full.uniform',
    Wf='padding',
    Xf='top',
    Vf='translate',
    Kf='draw',
    Zf='source',
    Jf='error',
    Qf='draw image error - ',
    to='getLocation',
    io='invalidTerminal',
    no='getImageData',
    eo='(',
    so='BLEND_MODE',
    ho='BLEND_MODE_DARKEN',
    ro='min',
    ao='BLEND_MODE_LINEAR_BURN',
    fo='BLEND_MODE_SCREEN',
    oo='color error, [',
    _o=']',
    co='BLEND_MODE_GRAY',
    uo='putImageData',
    lo='setTransform',
    vo='intersection',
    bo='clearRect',
    yo='scale',
    go='closePath',
    po='$rotate',
    xo='$offsetX',
    Eo='$rotatable',
    mo='$_hostRotate',
    wo='$offsetY',
    To='$layoutByAnchorPoint',
    ko='$invalidateSize',
    Oo='$invalidateAnchorPoint',
    Mo='setByRect',
    So='$padding',
    jo='grow',
    Io='$border',
    Po='showPointer',
    Ao='$anchorPosition',
    Co='backgroundGradient',
    Lo='$borderRadius',
    Ro='$pointerX',
    No='set',
    Do='getRect',
    $o='position',
    Bo='$data',
    Fo='isEmpty',
    Go='$invalidateRotate',
    zo='setLineDash',
    Yo='getLineDash',
    Ho='mozDash',
    qo='webkitLineDash',
    Uo='lineDash',
    Wo='lineDashOffset',
    Xo='mozDashOffset',
    Vo='webkitLineDashOffset',
    Ko='transparencyIndex',
    Zo='delayTime',
    Jo='disposalMethod',
    Qo='lctFlag',
    t_='lct',
    i_='gct',
    n_='leftPos',
    e_='pixels',
    s_='forEach',
    h_='topPos',
    r_='onload',
    a_='parse',
    f_='onerror',
    o_='xhr',
    __='join',
    c_='charCodeAt',
    u_='charAt',
    d_='fromCharCode',
    l_='decodeU',
    v_='omponent',
    b_='qunee',
    y_='lo',
    g_='lh',
    p_='t',
    x_='12',
    E_='0.0.1',
    m_='2',
    w_='3',
    T_='containsById',
    k_='parent',
    O_='toAgent',
    M_='getEdgeBundle',
    S_='fromAgent',
    j_='isInvalid',
    I_='from',
    P_='isLooped',
    A_='isDescendantOf',
    C_='hasFollowers',
    L_='accept',
    R_='setChildIndex',
    N_='childrenCount',
    D_='$to',
    $_='$from',
    B_='forEachChild',
    F_='moveTo',
    G_='quadTo',
    z_='lineTo',
    Y_='curveTo',
    H_='register',
    q_='SHAPE_CIRCLE',
    U_='SHAPE_ROUNDRECT',
    W_='SHAPE_PENTAGON',
    X_='SHAPE_DIAMOND',
    V_='SHAPE_HEART',
    K_='SHAPE_RHOMBUS',
    Z_='SHAPE_PARALLELOGRAM',
    J_='SHAPE_CROSS',
    Q_='SHAPE_ARROW_STANDARD',
    tc='SHAPE_ARROW_1',
    ic='SHAPE_ARROW_2',
    nc='SHAPE_ARROW_4',
    ec='SHAPE_ARROW_5',
    sc='SHAPE_ARROW_6',
    hc='SHAPE_ARROW_8',
    rc='edge',
    ac='$image',
    fc='validateFlags',
    oc='$invalidate',
    _c='target',
    cc='getProperty',
    uc='property',
    dc='bindingProperty',
    lc='callback',
    vc='PROPERTY_TYPE_CLIENT',
    bc='PROPERTY_TYPE_STYLE',
    yc='setStyle',
    gc='destroy',
    pc='uiBounds',
    xc='getStyle',
    Ec='EDGE_EXTEND',
    mc='EDGE_SPLIT_PERCENT',
    wc='EDGE_SPLIT_VALUE',
    Tc='EDGE_TYPE_ELBOW_HORIZONTAL',
    kc='EDGE_TYPE_ORTHOGONAL_HORIZONTAL',
    Oc='EDGE_TYPE_HORIZONTAL_VERTICAL',
    Mc='EDGE_TYPE_EXTEND_LEFT',
    Sc='EDGE_TYPE_EXTEND_RIGHT',
    jc='EDGE_TYPE_VERTICAL_HORIZONTAL',
    Ic='EDGE_TYPE_EXTEND_TOP',
    Pc='EDGE_TYPE_EXTEND_BOTTOM',

    Ac='EDGE_TYPE_ELBOW',
    Cc='EDGE_TYPE_ELBOW_VERTICAL',
    Lc='NEGATIVE_INFINITY',
    Rc='POSITIVE_INFINITY',
    Nc='EDGE_CORNER',
    Dc='EDGE_CORNER_NONE',
    $c='EDGE_CORNER_RADIUS',
    Bc='EDGE_CONTROL_POINT',
    Fc='union',
    Gc='EDGE_TYPE_ORTHOGONAL',
    zc='ARROW_SIZE',
    Yc='toDatas',
    Hc='drawLoopedEdge',
    qc='drawEdge',
    Uc='graph',
    Wc='edgeType',
    Xc='bodyBounds',
    Vc='busLayout',
    Kc='angle',
    Zc='center',
    Jc='contains',
    Qc='hitTest',
    tu='hasPathSegments',
    iu='$bundleEnabled',
    nu='EDGE_LOOPED_EXTAND',
    eu='perY',
    su='perX',
    hu='match',
    ru='div',
    au='Q-Graph-Nav-Button',
    fu='img',
    ou='ontouchstart',
    _u='onmousedown',
    cu='src',
    uu='transform',
    du='rotate(180deg)',
    lu='appendChild',
    vu='Q-Graph-Nav',
    bu='rgba(0, 0, 0, 0)',
    yu='hidden',
    gu='none',
    pu='absolute',
    xu='100%',
    Eu='NAVIGATION_IMAGE_TOP',
    mu='NAVIGATION_IMAGE_LEFT',
    wu='0px',
    Tu='hover',
    ku='clientHeight',
    Ou='selectionModel',
    Mu='graphModel',
    Su='isVisible',
    ju='isSelectable',
    Iu='ZOOM_ANIMATE',
    Pu='zoomIn',
    Au='zoomOut',
    Cu='toDataURL',
    Lu='image/png',
    Ru='interactions',
    Nu='defaultCursor',
    Du='default',
    $u='getBoundingClientRect',
    Bu='offsetWidth',
    Fu='offsetHeight',
    Gu='fontStyle',
    zu='fontSize',
    Yu='selectionStart',
    Hu='selectionEnd',
    qu='undefined',
    Uu='selection',
    Wu='text',
    Xu='collapse',
    Vu='select',
    Ku='scrollX',
    Zu='scrollY',
    Ju='topCanvas',
    Qu='nesw-resize',
    td='documentElement',
    id='Rect',
    nd='clientWidth',
    ed='interaction',
    sd='addListener',
    hd='currentMode',
    rd='INTERACTION_MODE_DEFAULT',
    ad='appendEdgeInfo',
    fd='minEnergyFunction',
    od='forEachEdge',
    _d='otherNode',
    cd='forEachOutEdge',
    ud='navigator',
    dd='userAgent',
    ld='webkitRequestAnimationFrame',
    vd='oRequestAnimationFrame',
    bd='msRequestAnimationFrame',
    yd='setTimeout',
    gd='cancelAnimationFrame',
    pd='mozCancelAnimationFrame',
    xd='oCancelAnimationFrame',
    Ed='msCancelAnimationFrame',
    md='clearTimeout',
    wd='#333',
    Td='normal',
    kd='FONT_STYLE',
    Od='FONT_SIZE',
    Md='px ',
    Sd='FONT_FAMILY',
    jd='matrix(',
    Id=',0,0,',
    Pd='getByIndex',
    Ad='\' not exist',
    Cd='getById',
    Ld='removeById',
    Rd='firstChild',
    Nd='nodeType',
    Dd='tagName',
    $d='nextSibling',
    Bd='nextElementSibling',
    Fd='Point(',
    Gd=', ',
    zd='distance',
    Yd='NaN',
    Hd='Size(',
    qd='intersectsRect',
    Ud='addRect',
    Wd='MAX_VALUE',
    Xd=' , ',
    Vd='horizontalPosition',
    Kd='sortName',
    Zd='l',
    Jd='c',
    Qd='r',
    tl='m',
    il='b',
    nl='LEFT_TOP',
    el='LEFT_MIDDLE',
    sl='CENTER_TOP',
    hl='CENTER_MIDDLE',
    rl='RIGHT_TOP',
    al='RIGHT_MIDDLE',
    fl='RIGHT_BOTTOM',
    ol='classify',
    _l='radius',
    cl='kind',
    ul='source: ',
    dl=', type: ',
    ll=', kind: ',
    vl='propertyType',
    bl='property.change',
    yl=', propertyName: ',
    gl=', oldValue: ',
    pl=', value: ',
    xl='propertyName',
    El='oldValue',
    ml='oldIndex',
    wl='getChildIndex',
    Tl='child.add',
    kl='child.remove',
    Ol='child',
    Ml='newIndex',
    Sl='child.index',
    jl='listener',
    Il='beforeEvent',
    Pl='scope',
    Al='equals',
    Cl='listeners',
    Ll='removeListener',
    Rl='list',
    Nl='index',
    Dl=', data: ',
    $l=', index: ',
    Bl=', oldIndex: ',
    Fl='KIND_ADD',
    Gl='KIND_REMOVE',
    zl='KIND_CLEAR',
    Yl='KIND_INDEX_CHANGE',
    Hl='index.change',
    ql='onParentChanged',
    Ul='toChildren',
    Wl='onChildrenClear',
    Xl='getId',
    Vl='_k8',
    Kl='_fo',
    Zl='filter',
    Jl='listChangeDispatcher',
    Ql='selectionChangeDispatcher',
    tv='dataChangeDispatcher',
    iv='parentChangeDispatcher',
    nv='childIndexChangeDispatcher',
    ev='$roots',
    sv='setIndex',
    hv='disconnect',
    rv='getEdges',
    av='removeChild',
    fv='data \'',
    ov='box',
    _v='datas',
    cv='head',
    uv='Transform',
    dv='toLowerCase',
    lv='createPopup',
    vv='createTextNode',
    bv='text/css',
    yv='qunee-styles',
    gv='sheet',
    pv=';\n',
    xv='addEventListener',
    Ev='DOMMouseScroll',
    mv=',mousedown,mouseup,click,mousemove,keydown',
    wv=',touchstart,touchmove,touchend,touchcancel',
    Tv='getData',
    kv='startdrag',
    Ov='ondrag',
    Mv='onpinch',
    Sv='getCurrentSpeed',
    jv='enddrag',
    Iv='onrelease',
    Pv='canvasPanel',
    Av='onClear',
    Cv='dScale',
    Lv='prev',
    Rv='limitCount',
    Nv='pop',
    Dv='interval',
    $v='-webkit-zoom-in',
    Bv='-webkit-zoom-out',
    Fv='-webkit-grab',
    Gv='-webkit-grabbing',
    zv='-moz-zoom-in',
    Yv='-moz-zoom-out',
    Hv='-moz-grab',
    qv='-moz-grabbing',
    Uv='crosshair',
    Wv='move',
    Xv='url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFVJREFUeNpi/P//PwMlgBGfAYyMIOn/jGQZANIMoskyAKYZGeAyiGgX4PIOSWGAzRBGUmMBw1CqGUBMlA1yA4gxhKhYwBnfpKQDqqREquRGYgBAgAEAD8h/4adTIzwAAAAASUVORK5CYII=) 8 8,crosshair',
    Vv='bounceOut',
    Kv='_ly',
    Zv='0.0',
    Jv='isIOS',
    Qv='containsRect',
    tb='Size',
    ib='Insets',
    nb='PropertyChangeEvent',
    eb='ListEvent',
    sb='Position',
    hb='Data',
    rb='SelectionModel',
    ab='DataModel',
    fb='IListener',
    ob='loadURL',
    _b='loadXML',
    cb='loadJSON',
    ub='calculateDistance',
    db='HashList',
    lb='DragSupport',
    vb='alert',
    bb='prompt',
    yb='confirm',
    gb='addCSSRule',
    pb='flip',
    xb='mirror',
    Eb='border.rect',
    mb='border',
    wb='shadow',
    Tb='elbow',
    kb='elbow.H',
    Ob='elbow.V',
    Mb='orthogonal',
    Sb='orthogonal.H',
    jb='orthogonal.V',
    Ib='orthogonal.H.V',
    Pb='orthogonal.V.H',
    Ab='extend.top',
    Cb='extend.left',
    Lb='extend.bottom',
    Rb='extend.right',
    Nb='zigzag',
    Db='bevel',
    $b='rect',
    Bb='circle',
    Fb='ELLIPSE',
    Gb='oval',
    zb='roundrect',
    Yb='star',
    Hb='triangle',
    qb='hexagon',
    Ub='pentagon',
    Wb='trapezium',
    Xb='rhombus',
    Vb='parallelogram',
    Kb='heart',
    Zb='diamond',
    Jb='cross',
    Qb='arrow.standard',
    ty='arrow.1',
    iy='arrow.2',
    ny='arrow.3',
    ey='arrow.4',
    sy='arrow.5',
    hy='arrow.6',
    ry='arrow.7',
    ay='arrow.8',
    fy='arrow.open',
    oy='butt',
    _y='LINE_CAP_TYPE_ROUND',
    cy='LINE_CAP_TYPE_SQUARE',
    uy='square',
    dy='LINE_JOIN_TYPE_BEVEL',
    ly='LINE_JOIN_TYPE_ROUND',
    vy='LINE_JOIN_TYPE_MITER',
    by='miter',
    yy='SELECTION_TYPE',
    gy='SELECTION_TYPE_SHADOW',
    py='SELECTION_TOLERANCE',
    xy='SELECTION_SHADOW_BLUR',
    Ey='SELECTION_COLOR',
    my='BORDER_RADIUS',
    wy='POINTER_WIDTH',
    Ty='LINE_HEIGHT',
    ky='devicePixelRatio',
    Oy='createCanvas',
    My='quadraticCurveTo',
    Sy='bezierCurveTo',
    jy='IMAGE_WIDTH',
    Iy='MAX_CACHE_PIXELS',
    Py='parentNode',
    Ay='Image load error - ',
    Cy='visibility',
    Ly='bind',
    Ry='drawImage',
    Ny='cacheable',
    Dy='IMAGE_MAX_SIZE',
    $y='save',
    By='#CCC',
    Fy='textAlign',
    Gy='textBaseline',
    zy='middle',
    Yy='#888',
    Hy='normal ',
    qy='strokeStyle',
    Uy='#FFF',
    Wy='strokeText',
    Xy='#000',
    Vy='fillText',
    Ky='restore',
    Zy='shadowColor',
    Jy='shadowBlur',
    Qy='shadowOffsetY',
    tg='Loading...',
    ig='renderColor',
    ng='Error...',
    eg='renderColorBlendMode',
    sg='maxScale',
    hg='image',
    rg='load',
    ag='registerImage',
    fg='hasImage',
    og='colors',
    _g='GRADIENT_TYPE_RADIAL',
    cg='GRADIENT_TYPE_LINEAR',
    ug='positions',
    dg='createLinearGradient',
    lg='createRadialGradient',
    vg='addColorStop',
    bg='LINEAR_GRADIENT_HORIZONTAL',
    yg='RADIAL_GRADIENT',
    gg='RAINBOW_LINEAR_GRADIENT_VERTICAL',
    pg='q',
    xg='a',
    Eg='z',
    mg='SEGMENT_MOVE_TO',
    wg='SEGMENT_LINE_TO',
    Tg='SEGMENT_QUAD_TO',
    kg='SEGMENT_CURVE_TO',
    Og='SEGMENT_CLOSE',
    Mg='isNumber',
    Sg='PathSegment',
    jg='toJSON',
    Ig='selectionColor',
    Pg='selectionShadowBlur',
    Ag='shadowOffsetX',
    Cg='selectionShadowOffsetY',
    Lg='SELECTION_TYPE_BORDER',
    Rg='selectionBorder',
    Ng='lineCap',
    Dg='lineJoin',
    $g='outlineStyle',
    Bg='outline',
    Fg='fillStyle',
    Gg='fillColor',
    zg='fillGradient',
    Yg='beginPath',
    Hg='darken',
    qg='BLEND_MODE_MULTIPLY',
    Ug='multiply',
    Wg='BLEND_MODE_COLOR_BURN',
    Xg='color.burn',
    Vg='linear.burn',
    Kg='lighten',
    Zg='screen',
    Jg='gray',
    Qg='clip',
    tp='rgba(0,0,0,0)',
    ip='miterLimit',
    np='#1C6B9D',
    ep='#186493',
    sp='#145E8B',
    hp='#115B87',
    rp='#115A85',
    ap='#125C89',

    fp='#176291',
    op='#1D6C9F',
    _p='#2479B0',
    cp='#2881BB',
    up='#1F6FA2',
    dp='#115A86',
    lp='#004063',
    vp='#2e8ece',
    bp='#efefef',
    yp='arc',
    gp='#135D89',
    pp='#186494',
    xp='#1F70A4',
    Ep='#257AB2',
    mp='#2377AD',
    wp='#1E6DA0',
    Tp='#105984',
    kp='#f7f8f8',
    Op='#6A6969',
    Mp='#4F4C4B',
    Sp='#545252',
    jp='#646262',
    Ip='#6F6E6F',
    Pp='#4C4948',
    Ap='#494645',
    Cp='#7D7D7D',
    Lp='#808080',
    Rp='#888888',
    Np='#939293',
    Dp='#9E9D9D',
    $p='#A7A5A4',
    Bp='#A9A6A5',
    Fp='#A7A4A3',
    Gp='#FFFFFF',
    zp='#E9EAEA',
    Yp='#9fa0a0',
    Hp='#c9caca',
    qp='#3e3a39',
    Up='#B2CBEA',
    Wp='#2E8ECE',
    Xp='globalAlpha',
    Vp='#727171',
    Kp='#b5b5b6',
    Zp='Q-',
    Jp='delay',
    Qp='reduce',
    tx='len',
    ix='pos',
    nx='readByte',
    ex='readBytes',
    sx='read',
    hx='readUnsigned',
    rx='Invalid LZW code.',
    ax='sig',
    fx='ver',
    ox='GIF',
    _x='Not a GIF file.',
    cx='shift',
    ux='colorRes',
    dx='sorted',
    lx='gctSize',
    vx='bgColor',
    bx='reserved',
    yx='userInput',
    gx='transparencyGiven',
    px='terminator',
    xx='gce',
    Ex='comment',
    mx='ptHeader',
    wx='ptData',
    Tx='pte',
    kx='unknown',
    Ox='app',
    Mx='NETSCAPE',
    Sx='identifier',
    jx='authCode',
    Ix='label',
    Px='com',
    Ax='extType',
    Cx='interlaced',
    Lx='lctSize',
    Rx='lzwMinCodeSize',
    Nx='sentinel',
    Dx='ext',
    $x='eof',
    Bx='Unknown block: 0x',
    Fx='keydown',
    Gx='altKey',
    zx='keyCode',
    Yx='\nVersion - ',
    Hx='\nPublish Date - ',
    qx='publishDate',
    Ux='copyright',
    Wx='f43b4e1133375609ab7a3212e157552652782c3dc9abfe47273959defd82eba0b5f3781a7138bd02954591b7ffc3a95aca49c9b03a2ae3317fcd2397fee2cfafc22186728105736650,cb1a696d47a44f741bf667aefb497aa4dcfcdabc9817288dface24a7fd3c0afdb18ddb42e49bdca295d58191399e633bf2c34e9ebd8329aef54181232fd9a088ff85aea0de05a749e4',
    Xx='\nLicensed to: ',
    Vx='%20website%3A%20demo.qunee.com%2Cmap.qunee.com',
    Kx='fil',
    Zx='',
    Jx='RIC',
    Qx='setT',
    tE='ho',
    iE='7.',
    nE='ca',
    eE='os',
    sE='ifr',
    hE='Canvas',
    rE='Rend',
    aE='Cont',
    fE='proto',
    oE='locat',
    _E='create',
    cE='11000',
    uE='15000',
    dE='17000',
    lE='20000',
    vE='31000',
    bE='32000',
    yE='imeout',
    gE='ion',
    pE='stname',
    xE='',
    EE='',
    mE='iframe',
    wE='display',
    TE='contentWindow',
    kE='localhost',
    OE='127.00.1',
    ME='overflow',
    SE='Element',
    jE='ame',
    IE='cont',
    PE='entWindow',
    AE='Date',
    CE='ering',
    LE='ext2D',
    RE='lText',
    NE='$name',
    DE='hasEdge',
    $E='invalidateVisibility',
    BE='ui',
    FE='invalidate',
    GE='Q.Element',
    zE='uiClass',
    YE='zIndex',
    HE='tooltip',
    qE='enableSubNetwork',
    UE='putStyles',
    WE='connect',
    XE='Q.Edge',
    VE='edges',
    KE='bundleEnabled',
    ZE='path.segment',
    JE='firePathChange',
    QE='to',
    tm='Q-node',
    im='$location',
    nm='hasLoops',
    em='location',
    sm='host',
    hm='toFollowers',
    rm='Q.Node',
    am='follower.add',
    fm='follower.remove',
    om='size',
    _m='anchorPosition',
    cm='$path',
    um='SHAPENODE_STYLES',
    dm='Q.ShapeNode',
    lm='path',
    vm='segments',
    bm='ShapeNode',
    ym='generator',
    gm='Q.Bus',
    pm='Bus',
    xm='currentSubNetwork',
    Em='GROUP_TYPE',
    mm='GROUP_TYPE_RECT',
    wm='GROUP_PADDING',
    Tm='GROUP_MIN_SIZE',
    km='invalidateFlag',
    Om='$groupType',
    Mm='$minSize',
    Sm='expanded',
    jm='Q.Group',
    Im='minSize',
    Pm='groupType',
    Am='groupImage',
    Cm='Group',
    Lm='Q.Text',
    Rm='Text',
    Nm='invalidateData',
    Dm='#444',
    $m='selectionShadowOffsetX',
    Bm='selectionBackgroundColor',
    Fm='strokeRect',
    Gm='syncSelection',
    zm='selected',
    Ym='syncSelectionStyles',
    Hm='$alpha',
    qm='offsetX',
    Um='offsetY',
    Wm='selectionType',
    Xm='SELECTION_TYPE_BORDER_RECT',
    Vm='borderColor',
    Km='borderLineDash',
    Zm='borderLineDashOffset',
    Jm='$backgroundColor',
    Qm='$backgroundGradient',
    tw='$invalidateData',
    iw='validateSize',
    nw='onBoundsChanged',
    ew='$invalidateVisibility',
    sw='$visible',
    hw='$showEmpty',
    rw='initialize',
    aw='doValidate',
    fw='doHitTest',
    ow='offset',
    _w='onDataChanged',
    cw='Visibility',
    uw='Location',
    dw='AnchorPoint',
    lw='BackgroundGradient',
    vw='SELECTION_BORDER',
    bw='Rotate',
    yw='PROPERTY_TYPE_ACCESSOR',
    gw='selection.color',
    pw='selection.border',
    xw='SELECTION_SHADOW_OFFSET_Y',
    Ew='selection.type',
    mw='RENDER_COLOR',
    ww='render.color',
    Tw='RENDER_COLOR_BLEND_MODE',
    kw='ALPHA',
    Ow='alpha',
    Mw='shadow.blur',
    Sw='SHADOW_COLOR',
    jw='shadow.color',
    Iw='shadow.offset.x',
    Pw='SHADOW_OFFSET_Y',
    Aw='shadow.offset.y',
    Cw='SHAPE_STROKE',
    Lw='shape.stroke',
    Rw='shape.stroke.style',
    Nw='SHAPE_LINE_DASH',
    Dw='shape.line.dash',
    $w='SHAPE_FILL_COLOR',
    Bw='shape.fill.color',
    Fw='SHAPE_FILL_GRADIENT',
    Gw='shape.fill.gradient',
    zw='SHAPE_OUTLINE',
    Yw='shape.outline',
    Hw='SHAPE_OUTLINE_STYLE',
    qw='shape.outline.style',
    Uw='LINE_CAP',
    Ww='line.cap',
    Xw='LINE_JOIN',
    Vw='line.join',
    Kw='LAYOUT_BY_PATH',
    Zw='layout.by.path',
    Jw='BACKGROUND_COLOR',
    Qw='background.color',
    tT='BACKGROUND_GRADIENT',
    iT='background.gradient',
    nT='BORDER',
    eT='border.width',
    sT='border.color',
    hT='BORDER_LINE_DASH',
    rT='border.line.dash',
    aT='BORDER_LINE_DASH_OFFSET',
    fT='border.radius',
    oT='PADDING',
    _T='IMAGE_BACKGROUND_COLOR',
    cT='IMAGE_BACKGROUND_GRADIENT',
    uT='IMAGE_BORDER',
    dT='image.border.width',
    lT='image.border.style',
    vT='IMAGE_BORDER_LINE_DASH',
    bT='IMAGE_RADIUS',
    yT='IMAGE_BORDER_RADIUS',
    gT='image.radius',
    pT='IMAGE_PADDING',
    xT='image.padding',
    ET='IMAGE_Z_INDEX',
    mT='image.z.index',
    wT='image.adjust',
    TT='IMAGE_ALPHA',
    kT='image.alpha',
    OT='LABEL_ROTATE',
    MT='label.rotate',
    ST='LABEL_POSITION',
    jT='label.position',
    IT='LABEL_VISIBLE',
    PT='label.visible',
    AT='LABEL_ANCHOR_POSITION',
    CT='LABEL_COLOR',
    LT='label.color',
    RT='LABEL_FONT_SIZE',
    NT='label.font.size',
    DT='label.font.family',
    $T='LABEL_FONT_STYLE',
    BT='label.font.style',
    FT='LABEL_PADDING',
    GT='label.padding',
    zT='LABEL_POINTER_WIDTH',
    YT='label.pointer.width',
    HT='LABEL_POINTER',
    qT='label.pointer',
    UT='label.radius',
    WT='LABEL_OFFSET_X',
    XT='label.offset.x',
    VT='LABEL_OFFSET_Y',
    KT='label.offset.y',
    ZT='label.size',
    JT='LABEL_ALIGN_POSITION',
    QT='label.align.position',
    tk='LABEL_BORDER',
    ik='label.border',
    nk='LABEL_BORDER_STYLE',
    ek='label.border.style',
    sk='LABEL_BACKGROUND_COLOR',
    hk='LABEL_BACKGROUND_GRADIENT',
    rk='LABEL_ROTATABLE',
    ak='label.rotatable',
    fk='LABEL_SHADOW_BLUR',
    ok='label.shadow.blur',
    _k='label.shadow.color',
    ck='LABEL_SHADOW_OFFSET_Y',
    uk='LABEL_Z_INDEX',
    dk='label.z.index',
    lk='LABEL_ON_TOP',
    vk='label.on.top',
    bk='GROUP_BACKGROUND_COLOR',
    yk='group.stroke',
    gk='GROUP_STROKE_STYLE',
    pk='group.stroke.color',
    xk='GROUP_STROKE_LINE_DASH',
    Ek='GROUP_STROKE_LINE_DASH_OFFSET',
    mk='EDGE_BUNDLE_LABEL_ROTATE',
    wk='EDGE_BUNDLE_LABEL_POSITION',
    Tk='EDGE_BUNDLE_LABEL_FONT_FAMILY',
    kk='EDGE_BUNDLE_LABEL_FONT_STYLE',
    Ok='EDGE_BUNDLE_LABEL_PADDING',
    Mk='EDGE_BUNDLE_LABEL_POINTER_WIDTH',
    Sk='EDGE_BUNDLE_LABEL_RADIUS',
    jk='EDGE_BUNDLE_LABEL_OFFSET_X',
    Ik='EDGE_BUNDLE_LABEL_BORDER',
    Pk='EDGE_BUNDLE_LABEL_BORDER_STYLE',
    Ak='EDGE_BUNDLE_LABEL_BACKGROUND_COLOR',
    Ck='EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT',
    Lk='EDGE_BUNDLE_LABEL_ROTATABLE',
    Rk='EDGE_WIDTH',
    Nk='edge.width',
    Dk='EDGE_COLOR',
    $k='edge.color',
    Bk='edge.outline',
    Fk='EDGE_OUTLINE_STYLE',
    Gk='edge.outline.style',
    zk='EDGE_LINE_DASH',
    Yk='edge.line.dash',
    Hk='EDGE_LINE_DASH_OFFSET',
    qk='edge.from.offset',
    Uk='edge.to.offset',
    Wk='EDGE_BUNDLE_GAP',
    Xk='edge.bundle.gap',
    Vk='edge.looped.extand',
    Kk='edge.extend',
    Zk='edge.control.point',
    Jk='EDGE_SPLIT_BY_PERCENT',
    Qk='edge.split.percent',
    tO='edge.split.value',
    iO='edge.corner',
    nO='edge.corner.radius',
    eO='EDGE_FROM_AT_EDGE',
    sO='edge.from.at.edge',
    hO='EDGE_TO_AT_EDGE',
    rO='edge.to.at.edge',
    aO='ARROW_FROM',
    fO='arrow.from',
    oO='ARROW_FROM_SIZE',
    _O='arrow.from.size',
    cO='ARROW_FROM_OFFSET',
    uO='arrow.from.offset',
    dO='ARROW_FROM_STROKE',
    lO='arrow.from.stroke',
    vO='arrow.from.outline',
    bO='ARROW_FROM_OUTLINE_STYLE',
    yO='ARROW_FROM_LINE_DASH',
    gO='arrow.from.line.dash',
    pO='ARROW_FROM_LINE_DASH_OFFSET',
    xO='ARROW_FROM_FILL_COLOR',
    EO='ARROW_FROM_LINE_CAP',
    mO='arrow.from.line.cap',
    wO='arrow.from.line.join',
    TO='arrow.to',
    kO='arrow.to.size',
    OO='ARROW_TO_OFFSET',
    MO='arrow.to.offset',
    SO='ARROW_TO_STROKE',
    jO='arrow.to.stroke',
    IO='ARROW_TO_OUTLINE',

    PO='arrow.to.outline',
    AO='ARROW_TO_OUTLINE_STYLE',
    CO='arrow.to.line.dash',
    LO='ARROW_TO_LINE_DASH_OFFSET',
    RO='ARROW_TO_FILL_COLOR',
    NO='arrow.to.fill.color',
    DO='ARROW_TO_LINE_CAP',
    $O='arrow.to.line.cap',
    BO='arrow.to.line.join',
    FO='SELECTION_SHADOW_OFFSET_X',
    GO='visible',
    zO='color',
    YO='backgroundColor',
    HO='showOnTop',
    qO='SHADOW_BLUR',
    UO='LABEL_FONT_FAMILY',
    WO='fontFamily',
    XO='alignPosition',
    VO='pointerWidth',
    KO='LABEL_RADIUS',
    ZO='borderRadius',
    JO='rotatable',
    QO='LABEL_SHADOW_COLOR',
    tM='_2y',
    iM='BORDER_COLOR',
    nM='_n8m',
    eM='layoutByPath',
    sM='IMAGE_ADJUST',
    hM='adjustType',
    rM='SHAPE_LINE_DASH_OFFSET',
    aM='checkBody',
    fM='_50',
    oM='shape',
    _M='GROUP_BACKGROUND_GRADIENT',
    cM='_4e',
    uM='fromArrow',
    dM='ARROW_TO',
    lM='toArrow',
    vM='fromAtEdge',
    bM='toAtEdge',
    yM='EDGE_OUTLINE',
    gM='EDGE_FROM_OFFSET',
    pM='fromArrowSize',
    xM='fromArrowOffset',
    EM='fromArrowStroke',
    mM='ARROW_FROM_STROKE_STYLE',
    wM='fromArrowStrokeStyle',
    TM='ARROW_FROM_OUTLINE',
    kM='fromArrowOutline',
    OM='fromArrowFillColor',
    MM='ARROW_FROM_FILL_GRADIENT',
    SM='fromArrowLineDash',
    jM='ARROW_FROM_LINE_JOIN',
    IM='fromArrowLineJoin',
    PM='fromArrowLineCap',
    AM='ARROW_TO_SIZE',
    CM='toArrowSize',
    LM='toArrowOffset',
    RM='toArrowStroke',
    NM='ARROW_TO_STROKE_STYLE',
    DM='toArrowStrokeStyle',
    $M='toArrowOutline',
    BM='toArrowOutlineStyle',
    FM='toArrowFillColor',
    GM='ARROW_TO_FILL_GRADIENT',
    zM='toArrowFillGradient',
    YM='ARROW_TO_LINE_DASH',
    HM='toArrowLineDash',
    qM='ARROW_TO_LINE_JOIN',
    UM='toArrowLineJoin',
    WM='toArrowLineCap',
    XM='EDGE_BUNDLE_LABEL_COLOR',
    VM='bundleLabel',
    KM='EDGE_BUNDLE_LABEL_ANCHOR_POSITION',
    ZM='EDGE_BUNDLE_LABEL_FONT_SIZE',
    JM='EDGE_BUNDLE_LABEL_POINTER',
    QM='EDGE_BUNDLE_LABEL_OFFSET_Y',
    tS='invalidateShape',
    iS='IMAGE_BORDER_COLOR',
    nS='invalidateChildrenIndex',
    eS='invalidateSize',
    sS='$invalidateChild',
    hS='removeBinding',
    rS='onBindingPropertyChange',
    aS='invalidateRender',
    fS='addChild',
    oS='bindingProperties',
    _S='addBinding',
    cS='measure',
    uS='sort',
    dS='$selectionBorder',
    lS='$shadowOffsetX',
    vS='$selectionShadowOffsetY',
    bS='$shadowBlur',
    yS='$selectionShadowBlur',
    gS='$invalidateBounds',
    pS='$renderColorBlendMode',
    xS='$shadowColor',
    ES='$shadowOffsetY',
    mS='bodyChanged',
    wS='hitTestChildren',
    TS='body',
    kS='$renderColor',
    OS='UI_BOUNDS_GROW',
    MS='$invalidateScale',
    SS='$invalidateFillGradient',
    jS='generatorGradient',
    IS='$fillGradient',
    PS='$adjustType',
    AS='$lineWidth',
    CS='$fillColor',
    LS='Scale',
    RS='FillGradient',
    NS='ALIGN_POSITION',
    DS='$fontSize',
    $S='$font',
    BS='$size',
    FS='setMeasuredBounds',
    GS='Font',
    zS='$invalidateFont',
    YS='$invalidateToArrow',
    HS='$outline',
    qS='pathBounds',
    US='$invalidateFromArrow',
    WS='validateFromArrow',
    XS='validateToArrow',
    VS='$fromArrow',
    KS='fromArrowLocation',
    ZS='$fromArrowShape',
    JS='fromArrowStyles',
    QS='fromArrowFillGradient',
    tj='Gradient',
    ij='$toArrow',
    nj='$toArrowOffset',
    ej='toArrowLocation',
    sj='$toArrowShape',
    hj='$toArrowSize',
    rj='toArrowStyles',
    aj='ArrowStroke',
    fj='ArrowStrokeStyle',
    oj='ArrowStyles',
    _j='ArrowLineDash',
    cj='ArrowLineDashOffset',
    uj='ArrowFillColor',
    dj='ArrowFillGradient',
    lj='ArrowLineCap',
    vj='ArrowLineJoin',
    bj='ArrowOutline',
    yj='ArrowOutlineStyle',
    gj='FromArrow',
    pj='ToArrow',
    xj='initBindingProperties',
    Ej='EDGE_TYPE_ZIGZAG',
    mj='canBind',
    wj='getYOffset',
    Tj='isPositiveOrder',
    kj='getBundleLabel',
    Oj='createBundleLabel',
    Mj='editable',
    Sj='checkBundleLabel',
    jj='drawReferenceLine',
    Ij='EDGE_TYPE_DEFAULT',
    Pj='EDGE_TYPE_ORTHOGONAL_VERTICAL',
    Aj='pathSegments',
    Cj='forEachReverse',
    Lj='originAtCenter',
    Rj='fullRefresh',
    Nj='uiId',
    Dj='Q-Graph',
    $j='.Q-Graph',
    Bj='text-align: left; outline: none;-webkit-tap-highlight-color:rgba(0,0,0,0);user-select: none',
    Fj='0 0',
    Gj='Q-Canvas',
    zj='0',
    Yj='Q-CanvasPanel',
    Hj='inherit',
    qj='CENTER_BOTTOM',
    Uj='#555555',
    Wj='GROUP_STROKE',
    Xj='#075bc5',
    Vj='SHAPE_STROKE_STYLE',
    Kj='#2898E0',
    Zj='NAVIGATION_SCROLLBAR',
    Jj='navigation.scrollbar',
    Qj='navigation.none',
    tI='navigation.button',
    iI='onPropertyChange',
    nI='_kc',
    eI='validateEdgeBundle',
    sI='forEachByDepthFirst',
    hI='UI \'',
    rI='\' not found',
    aI='setIndexBefore',
    fI='setIndexAfter',
    oI='reverseExpanded',
    _I='NAVIGATION_BUTTON',
    cI='element.bounds',
    uI='resize',
    dI='updateViewport',
    lI='ondrop',
    vI='ondragover',
    bI='dataTransfer',
    yI='getDropInfo',
    gI='toLogical',
    pI='dropAction',
    xI='stopEvent',
    EI='Node',
    mI='createText',
    wI='createShapeNode',
    TI='properties',
    kI='clientProperties',
    OI='styles',
    MI='onElementCreated',
    SI='ELEMENT_CREATED',
    jI='onInteractionEvent',
    II='movable',
    PI='selectable',
    AI='resizable',
    CI='linkable',
    LI='canLinkTo',
    RI='addElement',
    NI='translateTo',
    DI='zoomAnimation',
    $I='minScale',
    BI='zoomAt',
    FI='scaleStep',
    GI='focus',
    zI='scrollTo',
    YI='callLater',
    HI='unSelectAll',
    qI='setLocation',
    UI='isMovable',
    WI='addCustomInteraction',
    XI='viewport',
    VI='_onresize',
    KI='html',
    ZI='innerHTML',
    JI='Delete Elements - ',
    QI='removeSelection',
    tP='Shape',
    iP='Line',
    nP='Styles',
    eP='createEdge',
    sP='Edge',
    hP='edgeUIClass',
    rP='interactionProperties',
    aP='startEdit',
    fP='allowEmptyLabel',
    oP='invalidateElement',
    _P='Label Can\'t Empty',
    cP='agentEdge',
    uP='+',
    dP='bindableEdges',
    lP='cursor',
    vP='interactionMode',
    bP='propertyChangeDispatcher',
    yP='GROUP_MIN_HEIGHT',
    gP='GROUP_TYPE_ELLIPSE',
    pP='GROUP_MIN_WIDTH',
    xP='GROUP_TYPE_CIRCLE',
    EP='_$z',
    mP='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09JREFUeNqcVl1Ik1EYfqebIuaQTWQK/udkdKMXIggG3XQRRBDdRBDdhDdBhRAVFUS/1FVXEt1EEBVEIIFIN0JGEEF6E+HU6VR0iDPdnKLT2fN87h2fY+aODzzfDud8ezjP9/6c49jZ2ZGhoSExxFGwHWwDh7u6ut7pguMQghR7nzX3GaL3OSgQc1zno6qqSgKBgBQUWBKnsanzhxG8DXaUlJRIQ0ODVFRUSEtLi661mQoeA886HA7x+/1SWFgo/Fxzc3O6PmwqeIWP6upqcbvd1gTFVlZWOAyBH0wEabVdrRLr6+syNTWl670ISipfwXa1yu/FX1odHR2VVCqlER7Ul/MR7OajpqZGysrKrInZ2VmJx+Mc/gEf2V8+SPAu2FpaWiq1tbXWRCKRkHA4bLe6la9gB3gml1X+An0Q+579p/0EnRpV7ow7JKanp60dAiMQe5Drj/sJ3gID/Gb8dgS/2czMjK6/3M9WLsETuawGg0G1+gm7+5mvYJFGlfnGvCMmJydlbW2Nw1/g4/9FMVvwDrsJK4EVQcRiMXt5vTgox+yCJ8FTrFHWKq1ub2/vsQr+zlfQpVbr6+szVllaLDHgx0FWswV7wLry8vKM1eXlZSOr2YKtfDQ2NmYWQqGQDl+BQVPBEW1HCt0puzHoNhXkIZOMRCKytLRkTfh8PvF4PNYQvGkqGNbsHxsbk62t3Xpvbm4Wp9OpGXDORJB4DX7d3NyUiYmJ3SwvKpKmpiZdvwx6TASJZ+DqwsKCRKNRa6KyslK8Xi+H3nSNGwlG0lG1rCeTyYx1l8uldX7BRJB4Cw5SbHx8fDfrIUZRtY4z2GciSDwF/y4uLgrtW35hm/aBI+ANU8GoRp0BYqAIBoiBAo5jl5dMBImP4BemEL+n1caRQjbr3RCtMxFU6xEmO5OeYLIz6dMNpcdUMKbW2WQ3NjZEa764uJjDTuyy20TQOsjBAVpnbyS0Z9qi7jcRJJ6wPNnS5ufnrQl7qwOumgomNOFpPd107c24A7u8aHr7GgD7eSww6jwWaF0vT9pTTS+cD9l7eYVj7+Shr41Ee6rTUJAZ3gs+p3Veh7lj4BvO6jeHvWPz6tZHy2mxfohdMw3KHqTvNZ0sQYzv2df+CTAAM91P5i8bXigAAAAASUVORK5CYII=',
    wP='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUCAYAAAD/Rn+7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAohJREFUeNrMVs+LUlEUPk8jNBGJXKWgBCrRZhAiCFy0HYigVdvazdQf0A+CftAPaFlNu4HZtQqGgdkOKAQRSAgRPkEUtG2ImBKj9n2Pc0XNmcb3Xj8OfN57ve/d893vnHfutYrFoixrhUJh4f+lUumEzn8Xn+yYH4uAWBjNHWBVx7tonoFo3+vaAR/IXUKzRXLBYFAIJbqlc/9GQTjnu/eAyxzHYjHJZrPOnG3b0ul0zqD7As/toH0CNffd+LHc5CDsIrAGnA0EApJOpyWRSMw80G63pdFoyGg04vAL8AYk3/8NgveBK+xEo1HJ5XISDoedieFw6LQaZun3+1KtVqXb7Zp3t0Hy8Z8imAfWgRXLsiSVSkkymRT2aQipE1oaQ82Q08bjsbRaLWk2m04f9gnYANGynwTvAlfZiUQijmpsaQwhQ8mQThtDztAzBWi9Xs9Rk63aO5B86pXgOeAWcJ5KUTEqZ1Rj6OiUoVTb1PYGfxh6boapYNSkklRU1fwIvALRz24Irrt1hC936Y3h3Y2jEpws7jVUILpMaixUc57gjGqZTMZzsoPkbz+uWq12oJqG4Gngtta3X1Tzo1yA6IHlaYGarJfP4eMrCZ7C4C1wMhQKzZQIPwuukjy0wJtSNRgMOPwGXKNEKyQXj8cln89PyFG1SqUi9XrdkOORdV1358p0Y1xjh2tybfow4aVvciAXciI3nqe2SX7NrXnV6lQN2PPj5qNn8kOoydxa45ldLpcnapLD1Adomxx8DVww6lFqNeegB/aPch90EfLjek2bXDim/H+An5vmNvMIeKk3EN9VO0TNH/NqTvl/MF9mTD6aEjJa9kbtUc0Z//Dh+LdM3v2v9lOAAQDlEZVA4N7FygAAAABJRU5ErkJggg==',
    TP='10px',
    kP='opacity 0.2s ease-in',
    OP='relative',
    MP='block',
    SP='.Q-Graph-Nav img',
    jP='opacity:1;background-color: rgba(0, 0, 0, 0.5)',
    IP='.Q-Graph-Nav',
    PP='opacity:0;',
    AP='transition',
    CP=':opacity 3s cubic-bezier(0.8, 0, 0.8, 1)',
    LP='.Q-Graph-Nav:hover',
    RP='opacity:1;',
    NP=':opacity 0.3s linear',
    DP='viewportBounds',
    $P='.Q-Graph-ScrollBar',
    BP='position: absolute;box-sizing: border-box;box-shadow: #FFF 0px 0px 1px; background-color: rgba(120,120,120,0.3);border-radius: 4px;margin: 1px;',
    FP='margin-bottom: 8px;',
    GP='margin-right: 8px;',
    zP='.Q-Graph-ScrollPane',
    YP=':opacity 3s cubic-bezier(0.8, 0, 0.8, 1);',
    HP='Q-Graph-ScrollPane',
    qP='isH',
    UP='enableInertia',
    WP='Both',
    XP='drawable',
    VP='ANIMATION_TYPE',
    KP='easeOut',
    ZP='ANIMATION_MAXTIME',
    JP='easeOutStrong',
    QP='animationType',
    tA='INTERACTION_HANDLER_SIZE_TOUCH',
    iA='INTERACTION_HANDLER_SIZE_DESKTOP',
    nA='INTERACTION_ROTATE_HANDLER_SIZE_TOUCH',
    eA='INTERACTION_ROTATE_HANDLER_SIZE_DESKTOP',
    sA='element',
    hA='removeDrawable',
    rA='addDrawable',
    aA='escapable',
    fA='DrawableInteraction',
    oA='drawPoint',
    _A='isClosePath',
    cA='styleDraw',
    uA='getDefaultDrawStyles',
    dA='currentPoint',
    lA='start',
    vA='doDraw',
    bA='createEdgeByInteraction',
    yA='finish',
    gA='toLogicalPoint',
    pA='setCurrentPoint',
    xA='responded',
    EA='getDefaultStyle',
    mA='createShapeByInteraction',
    wA='CreateShapeInteraction',
    TA='createLineByInteraction',
    kA='EdgeUI',
    OA='canLinkFrom',
    MA='CreateSimpleEdgeInteraction',
    SA='LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS',
    jA='textarea',
    IA='Q-LabelEditor',
    PA='solid #08E 1px',
    AA='5px',
    CA='boxShadow',
    LA='oninput',
    RA='cancelEdit',
    NA='onSizeChange',
    DA='stopEdit',
    $A='stopEditWhenClickOnWindow',
    BA='onClickOnWindow',
    FA='mousedown',
    GA='isEditing',
    zA='removeEventListener',
    YA='LabelEditor',
    HA='labelEditor',
    qA='enableDoubleClickToOverview',
    UA='isEditable',
    WA='toCanvas',
    XA='startLabelEdit',
    VA='hasEdgeBundle',
    KA='removeSelectionByInteraction',
    ZA='open',
    JA='export image - ',
    QA=' x ',
    tC='currentDraggingElement',
    iC='isSelected',
    nC='draggingElements',
    eC='ELEMENT_MOVE_START',
    sC='moveElements',
    hC='forEachReverseVisibleUI',
    rC='ELEMENT_MOVE_END',
    aC='globalToLocal',
    fC='dataPropertyChangeDispatcher',
    oC='drawLineId',
    _C='drawLine',
    cC='handlerSize',
    uC='#555',
    dC='removePathSegmentByIndex',
    lC='isResizable',
    vC='isControlPoint',
    bC='nextSegment',
    yC='point',
    gC='pointIndex',
    pC='POINT_MOVE_END',
    xC='SELECTION_RECTANGLE_STROKE_COLOR',
    EC='SELECT_START',
    mC='SELECT_END',
    wC='SELECTION_RECTANGLE_FILL_COLOR',
    TC='forEachVisibleUI',
    kC='SELECT_BETWEEN',
    OC='nwse-resize',
    MC='ns-resize',
    SC='ew-resize',
    jC='rgba(0, 255, 0, 1)',
    IC='#FF0',
    PC='isRotatable',
    AC='RESIZE_START',
    CC='originalBounds',
    LC='LABEL_SIZE',
    RC='shiftKey',
    NC='ROTATING',
    DC='RESIZE_END',
    $C='ResizeInteraction',
    BC='reverseSelect',
    FC='SELECT',
    GC='setSelection',
    zC='sendToTop',
    YC='selectAll',
    HC='TOOLTIP_DURATION',
    qC='TOOLTIP_DELAY',
    UC='Q-Tooltip',
    WC='#FFFFCA',
    XC='1px solid #D9D9D9',
    VC='2px 4px',
    KC='tooltipType',
    ZC='<br>',
    JC='textContent',
    QC='evt',

    tL='tooltipDelay',
    iL='createFunction',
    nL='getTooltip',
    eL='enableWheelZoom',
    sL='element.move.start',
    hL='ELEMENT_MOVING',
    rL='element.moving',
    aL='element.move.end',
    fL='element.created',
    oL='ELEMENT_REMOVED',
    _L='element.removed',
    cL='POINT_MOVE_START',
    uL='point.move.start',
    dL='POINT_MOVING',
    lL='point.moving',
    vL='point.move.end',
    bL='resize.start',
    yL='resizing',
    gL='resize.end',
    pL='rotating',
    xL='ROTATE_END',
    EL='rotate.end',
    mL='EDGE_BUNDLE',
    wL='edge.bundle',
    TL='select.start',
    kL='select.between',
    OL='select.end',
    ML='LONG_CLICK',
    SL='long.click',
    jL='currentInteractionMode',
    IL='getInteractionInstances',
    PL='view',
    AL='INTERACTION_MODE_SELECTION',
    CL='zoomin',
    LL='zoomout',
    RL='create.simple.edge',
    NL='INTERACTION_MODE_CREATE_EDGE',
    DL='create.edge',
    $L='INTERACTION_MODE_CREATE_SHAPE',
    BL='create.shape',
    FL='INTERACTION_MODE_CREATE_LINE',
    GL='create.line',
    zL='registerInteractions',
    YL='INTERACTION_MODE_VIEW',
    HL='INTERACTION_MODE_CREATE_SIMPLE_EDGE',
    qL='INTERACTION_MODE_ZOOMIN',
    UL='INTERACTION_MODE_ZOOMOUT',
    WL='PanInteraction',
    XL='SelectionInteraction',
    VL='MoveInteraction',
    KL='DoubleClickInteraction',
    ZL='RectangleSelectionInteraction',
    JL='PointsInteraction',
    QL='layoutable',
    tR='animate',
    iR='locations',
    nR='byAnimate',
    eR='getLayoutResult',
    sR='updateLocations',
    hR='DIRECTION_RIGHT',
    rR='DIRECTION_CENTER',
    aR='DIRECTION_BOTTOM',
    fR='even',
    oR='two.side',
    _R='even.h',
    cR='even.v',
    uR='LAYOUT_TYPE_EVEN_HORIZONTAL',
    dR='LAYOUT_TYPE_TWO_SIDE',
    lR='isHorizontalDirection',
    vR='defaultSize',
    bR='getNodeSize',
    yR='parentChildrenDirection',
    gR='hGap',
    pR='vGap',
    xR='layoutType',
    ER='root',
    mR='doLayout',
    wR='parentBounds',
    TR='_n97',
    kR='_dv',
    OR='hostDY',
    MR='hostDX',
    SR='node',
    jR='nodeX',
    IR='nodeY',
    PR='layoutReverse',
    AR='layoutDatas',
    CR='invalidateLayoutDatas',
    LR='timer',
    RR='resetLayoutDatas',
    NR='getMaxIterations',
    DR='step',
    $R='nodes',
    BR='onstop',
    FR='timeStep',
    GR='isRunning',
    zR='stop',
    YR='gap',
    HR='startAngle',
    qR='BalloonLayouter',
    UR='proportional',
    WR='regular',
    XR='uniform',
    VR='variable',
    KR='ANGLE_SPACING_REGULAR',
    ZR='RADIUS_MODE_VARIABLE',
    JR='isLayoutable',
    QR='getGap',
    tN='layouter',
    iN='angleSpacing',
    nN='radiusMode',
    eN='node1',
    sN='EDGE_BUNDLE_EXPANDED',
    hN='isBundleEnabled',
    rN='stack',
    aN='popIdx',
    fN='quads',
    oN='mass',
    _N='massX',
    cN='massY',
    uN='isInternal',
    dN='reset',
    lN='MIN_VALUE',
    vN='attractive',
    bN='elastic',
    yN='layoutMass',
    gN='groups',
    pN='init',
    xN='nodesArray',
    EN='repulsion',
    mN='update',
    wN='minEnergy',
    TN='currentEnergy',
    kN='SpringLayouter',
    ON='oldLocations',
    MN='duration',
    SN='hasInEdge',
    jN='isIE',
    IN='isWebkit',
    PN='isGecko',
    AN='isFirefox',
    CN='isSafari',
    LN='isMac',
    RN='DefaultStyles',
    NN='Defaults',
    DN='Consts',
    $N='ElementUI',
    BN='Shapes',
    FN='Path',
    GN='GraphModel',
    zN='EdgeBundle',
    YN='TreeLayouter',
    HN='',
    qN='2.0',
    UN='version',
    WN='',
    XN='about',
    VN='Diagramming Components for HTML5/Canvas',
    KN='css',
    ZN='IDrawable',
    JN='13/1/2016',
    QN = 0;

  if (t[ud]) {
    var tD = navigator[dd],
      iD = /opera/i [Yf](tD),
      nD = !iD && /msie/i.test(tD),
      eD = /rv:11.0/i [Yf](tD),
      sD = /MSIE 10./i [Yf](tD);
    if (eD && (nD = !0), /msie\s[6,7,8]/i [Yf](tD)) throw new Error("your browser is not supported");
    var hD = /webkit|khtml/i.test(tD),
      rD = !hD && /gecko/i [Yf](tD),
      aD = /firefox\//i [Yf](tD),
      fD = /Chrome\//i [Yf](tD),
      oD = !fD && /Safari\//i.test(tD),
      _D = /Macintosh;/i.test(tD),
      cD = /(iPad|iPhone|iPod)/g [Yf](tD),
      uD = /Android/g [Yf](tD),
      dD = /Windows Phone/g [Yf](tD),
      lD = (cD || uD || dD) && ou in t,
      vD = tD[hu](/AppleWebKit\/([0-9\.]*)/);
    if (vD && vD[Gh] > 1) var bD = parseFloat(vD[1]);
    if (uD) {
        var yD = parseFloat(tD[hu](/Android\s([0-9\.]*)/)[1]);
        if (bD && 534.3 >= bD) var gD = !0
      }
  }
  t.requestAnimationFrame || (t.requestAnimationFrame = t[ld] || t.mozRequestAnimationFrame || t[vd] || t[bd] ||
    function (i) {
      return t[yd](function () {
        i()
      }, 1e3 / 60)
    }),
  t[gd] || (t[gd] = t.webkitCancelAnimationFrame || t[pd] || t[xd] || t[Ed] ||
    function (i) {
      return t[md](i)
    });
  var pD = {
      SELECTION_TOLERANCE: 2,
      DOUBLE_BUFFER: n,
      LABEL_COLOR: wd
    };
  Z(pD, {
      FONT_STYLE: {
        get: function () {
          return this._eu || (this._eu = Td)
        },
        set: function (t) {
          this._eu != t && (this._eu = t, this._fontChanged = !0)
        }
      },
      FONT_SIZE: {
        get: function () {
          return this._h0 || (this._h0 = 12)
        },
        set: function (t) {
          this._h0 != t && (this._h0 = t, this._fontChanged = !0)
        }
      },
      FONT_FAMILY: {
        get: function () {
          return this._n9m || (this._n9m = "Verdana,helvetica,arial,sans-serif")
        },
        set: function (t) {
          this._n9m != t && (this._n9m = t, this._fontChanged = !0)
        }
      },
      FONT: {
        get: function () {
          return (this._fontChanged || this._fontChanged === n) && (this._fontChanged = !1, this._font = this[kd] + ir + this[Od] + Md + this[Sd]),
          this._font
        }
      }
    });
  var xD = function () {};
  xD[yr] = {
      _mz: 0,
      _n4: 0,
      _l7: !0,
      _ks: 1,
      _g8: function (t, i, n) {
        var e = this._n9t(i),
          s = this._n8l(n),
          h = t * e,
          r = t * s;
        return this._9p(t, i - h, n - r)
      },
      _n9t: function (t) {
        return (t - this._mz) / this._ks
      },
      _n8l: function (t) {
        return (t - this._n4) / this._ks
      },
      _d8: function (t, i) {
        return this._9p(this._ks, this._mz + t, this._n4 + i)
      },
      _9p: function (t, i, n) {
        return this._ks == t && this._mz == i && this._n4 == n ? !1 : (this._l7 && (1 != this[lf] || 2 != this.ratio ? (i = Math.round(i * this.ratio) / this.ratio, n = Math.round(n * this[lf]) / this[lf]) : (i = Math[jf](i), n = Math.round(n))), this._mz = i, this._n4 = n, this._ks = t, void(this._3g && this._3g()))
      },
      _g6: function () {
        return {
          a: this._ks,
          b: 0,
          c: 0,
          d: this._ks,
          e: this._mz,
          f: this._n4
        }
      },
      toString: function () {
        return jd + B(this._ks) + Id + B(this._ks) + Ir + B(this._mz) + Ir + B(this._n4) + Pr
      },
      _g3: function (t) {
        vi(t, uu, this.toString())
      }
    };
  var ED = function (t) {
      this._j1 = [],
      this._ll = {},
      t && this[nr](t)
    };
  ED[yr] = {
      _j1: null,
      _ll: null,
      get: function (t) {
        return this[Pd](t)
      },
      getById: function (t) {
        return this._ll[t]
      },
      getByIndex: function (t) {
        return this._j1[t]
      },
      forEach: function (t, i, n) {
        return l(this._j1, t, i, n)
      },
      forEachReverse: function (t, i, n) {
        return b(this._j1, t, i, n)
      },
      size: function () {
        return this._j1[Gh]
      },
      contains: function (t) {
        return this.containsById(t.id)
      },
      containsById: function (t) {
        return this._ll.hasOwnProperty(t)
      },
      setIndex: function (t, i) {
        var n = this._j1[er](t);
        if (0 > n) throw new Error(Ba + t.id + Ad);
        return n == i ? !1 : (this._j1[Uh](n, 1), this._j1[Uh](i, 0, t), !0)
      },
      setIndexAfter: function (t, i) {
        var n = this._j1[er](t);
        if (0 > n) throw new Error(Ba + t.id + Ad);
        return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1), this._j1[Uh](n, 1), this._j1.splice(i, 0, t), i)
      },
      setIndexBefore: function (t, i) {
        var n = this._j1[er](t);
        if (0 > n) throw new Error(Ba + t.id + Ad);
        return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1), this._j1.splice(n, 1), this._j1[Uh](i, 0, t), i)
      },
      indexOf: function (t) {
        return this._j1.indexOf(t)
      },
      getIndexById: function (t) {
        var i = this[Cd](t);
        return i ? this._j1.indexOf(i) : -1
      },
      add: function (t, i) {
        return j(t) ? this._fi(t, i) : this._k8(t, i)
      },
      addFirst: function (t) {
        return this[nr](t, 0)
      },
      _fi: function (t, i) {
        if (0 == t.length) return !1;
        var e = !1,
          s = i >= 0;
        t = t._j1 || t;
        for (var h = 0, r = t[Gh]; r > h; h++) {
            var a = t[h];
            null !== a && a !== n && this._k8(a, i, !0) && (e = !0, s && i++)
          }
        return e
      },
      _k8: function (t, i) {
        var e = t.id;
        return e === n || this[T_](e) ? !1 : (g(this._j1, t, i), this._ll[e] = t, t)
      },
      remove: function (t) {
        return j(t) ? this._9y(t) : t.id ? this._fo(t.id, t) : this[Ld](t)
      },
      _9y: function (t) {
        if (0 == t[Gh]) return !1;
        var i = !1;
        t = t._j1 || t;
        for (var e = 0, s = t[Gh]; s > e; e++) {
          var h = t[e];
          if (null !== h && h !== n) {
            h.id === n && (h = this._ll[h]);
            var r = h.id;
            this._fo(r, h, !0) && (i = !0)
          }
        }
        return i
      },
      _fo: function (t, i) {
        return t !== n && this.containsById(t) ? ((null === i || i === n) && (i = this[Cd](t)), delete this._ll[t], p(this._j1, i), !0) : !1
      },
      removeById: function (t) {
        var i = this._ll[t];
        return i ? this._fo(t, i) : !1
      },
      set: function (t) {
        if (!t || 0 == t) return void this[nf]();
        if (this.isEmpty() || !j(t)) return this.clear(),
        this.add(t);
        var i = [],
          n = {},
          e = 0;
        if (l(t, function (t) {
            this._ll[t.id] ? (n[t.id] = t, e++) : i.push(t)
          }, this), e != this[Gh]) {
            var s = [];
            this[s_](function (t) {
              n[t.id] || s[Ea](t)
            }, this),
            s[Gh] && this._9y(s)
          }
        return i[Gh] && this._fi(i),
        !0
      },
      clear: function () {
        return this[Fo]() ? !1 : (this._j1[Gh] = 0, this._ll = {}, !0)
      },
      toDatas: function () {
        return this._j1.slice(0)
      },
      isEmpty: function () {
        return 0 == this._j1[Gh]
      },
      valueOf: function () {
        return this._j1[Gh]
      },
      clone: function (t) {
        var i = new ED;
        return i[nr](t ? y(this._j1) : this[Yc]()),
        i
      }
    },
  Z(ED[yr], {
      datas: {
        get: function () {
          return this._j1
        }
      },
      random: {
        get: function () {
          return this._j1 && this._j1.length ? this._j1[C(this._j1.length)] : null
        }
      },
      length: {
        get: function () {
          return this._j1 ? this._j1.length : 0
        }
      }
    });
  var mD = (2 * Math.PI, .5 * Math.PI),
    wD = function (t, i) {
      i = i[Kr]();
      for (var n = nD ? t[Rd] : t.firstElementChild; n && (1 != n[Nd] || n.tagName && n[Dd].toUpperCase() != i);) n = nD ? n[$d] : n[Bd];
      return n && 1 == n[Nd] && n.tagName && n[Dd][Kr]() == i ? n : null
    },
    TD = function (t, i, n) {
      t instanceof TD && (i = t.y, t = t.x, n = t[$f]),
      this[No](t, i, n)
    },
    kD = function (t, i, n, e) {
      var s = t - n,
        h = i - e;
      return Math.sqrt(s * s + h * h)
    };
  TD.prototype = {
      x: 0,
      y: 0,
      rotate: n,
      set: function (t, i, n) {
        this.x = t || 0,
        this.y = i || 0,
        this.rotate = n || 0
      },
      negate: function () {
        this.x = -this.x,
        this.y = -this.y
      },
      offset: function (t, i) {
        this.x += t,
        this.y += i
      },
      equals: function (t) {
        return this.x == t.x && this.y == t.y
      },
      distanceTo: function (t) {
        return kD(this.x, this.y, t.x, t.y)
      },
      toString: function () {
        return Fd + this.x + Gd + this.y + Pr
      },
      clone: function () {
        return new TD(this.x, this.y)
      }
    },
  Object.defineProperty(TD[yr], zd, {
      get: function () {
        return Math[Ef](this.x * this.x + this.y * this.y)
      }
    });
  var OD = function (t, i, e, s) {
      t !== n && this._mv(t, i, e, s)
    };
  OD[yr] = {
      _n0: null,
      _n2: null,
      _n5: null,
      _n3: null,
      _n7: null,
      _n8: null,
      _n9: 1,
      _mv: function (t, i, n, e) {
        this._n0 = t,
        this._n2 = i,
        this._n5 = n,
        this._n3 = e,
        t == n ? (this._n7 = -1, this._n9 = 0, this._n8 = t) : (this._n7 = (i - e) / (t - n), this._n8 = i - this._n7 * t, this._n9 = 1),
        this._kj = Math[mf](this._n3 - this._n2, this._n5 - this._n0),
        this._n9os = Math[Qa](this._kj),
        this._sin = Math.sin(this._kj)
      },
      _n9j: function (t) {
        return 0 == this._n9 ? Number[Yd] : this._n7 * t + this._n8
      },
      _n9l: function (t) {
        return 0 == this._n7 ? Number.NaN : (t - this._n8) / this._n7
      },
      _$k: function (t) {
        var i, n, e, s, h, r = t[0],
          a = t[2],
          f = t[4],
          o = t[1],
          _ = t[3],
          c = t[5],
          u = this._n7,
          d = this._n8,
          l = this._n9;
        if (0 == l ? (e = Math[Ef]((-u * u * r - u * d) * f + u * u * a * a + 2 * u * d * a - u * d * r), s = -u * a + u * r, h = u * f - 2 * u * a + u * r) : (e = Math[Ef]((-o + u * r + d) * c + _ * _ + (-2 * u * a - 2 * d) * _ + (u * f + d) * o + (-u * u * r - u * d) * f + u * u * a * a + 2 * u * d * a - u * d * r), s = -_ + o + u * a - u * r, h = c - 2 * _ + o - u * f + 2 * u * a - u * r), 0 != h) {
            i = (e + s) / h,
            n = (-e + s) / h;
            var v, b;
            return i >= 0 && 1 >= i && (v = Ui(i, t)),
            n >= 0 && 1 >= n && (b = Ui(n, t)),
            v && b ? [v, b] : v ? v : b ? b : void 0
          }
      },
      _3t: function (t, i, n) {
        if (this._n7 == t._n7 || 0 == this._n9 && 0 == t._n9) return null;
        var e, s;
        if (e = 0 == this._n9 ? this._n8 : 0 == t._n9 ? t._n8 : (t._n8 - this._n8) / (this._n7 - t._n7), s = 0 == this._n7 ? this._n8 : 0 == t._n7 ? t._n8 : this._n9 ? this._n7 * e + this._n8 : t._n7 * e + t._n8, !i) return {
          x: e,
          y: s
        };
        var h, r, a;
        if (n) h = -i / 2,
        r = -h;
        else {
          h = -kD(this._n0, this._n2, e, s),
          r = kD(this._n5, this._n3, e, s);
          var f = -h + r;
          if (f > i) {
            var o = i / f;
            h *= o,
            r *= o
          } else a = (i - f) / 2
        }
        var _ = this._6d(e, s, h),
          c = this._6d(e, s, r);
        return a && (_._rest = a, c._rest = a),
        [_, c]
      },
      _6d: function (t, i, n) {
        return 0 == this._n9 ? {
          x: t,
          y: i + n
        } : {
          x: t + n * this._n9os,
          y: i + n * this._sin
        }
      }
    };
  var MD = function (t, i) {
      this[sf] = t,
      this.height = i
    };
  MD[yr] = {
      width: 0,
      height: 0,
      isEmpty: function () {
        return this[sf] <= 0 || this[tf] <= 0
      },
      clone: function () {
        return new MD(this[sf], this[tf])
      },
      toString: function () {
        return Hd + this.width + Gd + this.height + Pr
      }
    };
  var SD = function (t, i, e, s) {
      t instanceof Object && !O(t) && (i = t.y, e = t.width, s = t[tf], t = t.x),
      e === n && (e = -1),
      s === n && (s = -1),
      this.x = t || 0,
      this.y = i || 0,
      this.width = e,
      this[tf] = s
    };
  SD.prototype = {
      x: 0,
      y: 0,
      width: -1,
      height: -1,
      setByRect: function (t) {
        this.x = t.x || 0,
        this.y = t.y || 0,
        this[sf] = t.width || 0,
        this.height = t[tf] || 0
      },
      set: function (t, i, n, e) {
        this.x = t || 0,
        this.y = i || 0,
        this[sf] = n || 0,
        this[tf] = e || 0
      },
      offset: function (t, i) {
        this.x += t,
        this.y += i
      },
      contains: function (t, i) {
        return t instanceof SD ? ai(this.x, this.y, this.width, this[tf], t.x, t.y, t[sf], t[tf]) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height
      },
      intersectsPoint: function (t, i, n) {
        return this[sf] <= 0 && this.height <= 0 ? !1 : n ? this[qd](t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this[sf] && i >= this.y && i <= this.y + this[tf]
      },
      intersectsRect: function (t, i, n, e) {
        return hi(this.x, this.y, this.width, this[tf], t, i, n, e)
      },
      intersects: function (t, i) {
        return O(t[sf]) ? this[qd](t.x, t.y, t.width, t[tf]) : this.intersectsPoint(t, i)
      },
      intersection: function (t, i, n, e) {
        var s = this.x,
          h = this.y,
          r = s;
        r += this.width;
        var a = h;
        a += this[tf];
        var f = t;
        f += n;
        var o = i;
        return o += e,
        t > s && (s = t),
        i > h && (h = i),
        r > f && (r = f),
        a > o && (a = o),
        r -= s,
        a -= h,
        0 > r || 0 > a ? null : new SD(s, h, r, a)
      },
      addPoint: function (t) {
        this[nr](t.x, t.y)
      },
      add: function (t, i) {
        if (O(t[sf])) return this[Ud](t.x, t.y, t[sf], t[tf]);
        if (O(t.x) && (i = t.y, t = t.x), this[sf] < 0 || this.height < 0) return this.x = t,
        this.y = i,
        void(this[sf] = this.height = 0);
        var n = this.x,
          e = this.y,
          s = this.width,
          h = this.height;
        s += n,
        h += e,
        n > t && (n = t),
        e > i && (e = i),
        t > s && (s = t),
        i > h && (h = i),
        s -= n,
        h -= e,
        s > Number.MAX_VALUE && (s = Number.MAX_VALUE),
        h > Number[Wd] && (h = Number[Wd]),
        this[No](n, e, s, h)
      },
      addRect: function (t, i, n, e) {
        var s = this[sf],
          h = this[tf];
          (0 > s || 0 > h) && this.set(t, i, n, e);
        var r = n,
          a = e;
        if (!(0 > r || 0 > a)) {
            var f = this.x,
              o = this.y;
            s += f,
            h += o;
            var _ = t,
              c = i;
            r += _,
            a += c,
            f > _ && (f = _),
            o > c && (o = c),
            r > s && (s = r),
            a > h && (h = a),
            s -= f,
            h -= o,
            s > Number[Wd] && (s = Number.MAX_VALUE),
            h > Number.MAX_VALUE && (h = Number[Wd]),
            this.set(f, o, s, h)
          }
      },
      shrink: function (t, i, n, e) {
        return O(t) ? 1 == arguments[Gh] ? e = i = n = t || 0 : 2 == arguments[Gh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[la] || 0, n = t.bottom || 0, e = t.right || 0, t = t[Xf] || 0),
        this.x += i,
        this.y += t,
        this.width -= i + e,
        this[tf] -= t + n,
        this
      },
      grow: function (t, i, n, e) {
        return O(t) ? 1 == arguments[Gh] ? e = i = n = t || 0 : 2 == arguments[Gh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[la] || 0, n = t[Yr] || 0, e = t[zr] || 0, t = t[Xf] || 0),
        this.x -= i,
        this.y -= t,
        this[sf] += i + e,
        this[tf] += t + n,
        this
      },
      isEmpty: function () {
        return this[sf] <= 0 && this.height <= 0
      },
      toString: function () {
        return this.x + Xd + this.y + Xd + this[sf] + Xd + this.height
      },
      union: function (t) {
        var i = this.width,
          n = this[tf];
        if (0 > i || 0 > n) return new SD(t.x, t.y, t[sf], t[tf]);
        var e = t[sf],
          s = t[tf];
        if (0 > e || 0 > s) return new SD(this.x, this.y, this[sf], this[tf]);
        var h = this.x,
          r = this.y;
        i += h,
        n += r;
        var a = t.x,
          f = t.y;
        return e += a,
        s += f,
        h > a && (h = a),
        r > f && (r = f),
        e > i && (i = e),
        s > n && (n = s),
        i -= h,
        n -= r,
        i > Number.MAX_VALUE && (i = Number[Wd]),
        n > Number[Wd] && (n = Number[Wd]),
        new SD(h, r, i, n)
      },
      clear: function () {
        this[No](0, 0, -1, -1)
      },
      equals: function (t) {
        return this.x == t.x && this.y == t.y && this.width == t.width && this[tf] == t[tf]
      },
      clone: function (t, i) {
        return new SD(this.x + (t || 0), this.y + (i || 0), this.width, this[tf])
      },
      getIntersectionPoint: function (t, i, n, e) {
        return si(this, t, i, n, e)
      }
    },
  N(SD, MD),
  Z(SD[yr], {
      left: {
        get: function () {
          return this.x
        }
      },
      top: {
        get: function () {
          return this.y
        }
      },
      bottom: {
        get: function () {
          return this.y + this[tf]
        }
      },
      right: {
        get: function () {
          return this.x + this[sf]
        }
      },
      cx: {
        get: function () {
          return this.x + this.width / 2
        }
      },
      cy: {
        get: function () {
          return this.y + this[tf] / 2
        }
      },
      center: {
        get: function () {
          return new TD(this.cx, this.cy)
        }
      }
    });
  var jD = function (t, i, n, e) {
      1 == arguments[Gh] ? i = n = e = t : 2 == arguments[Gh] && (n = t, e = i),
      this.set(t, i, n, e)
    };
  jD.prototype = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      set: function (t, i, n, e) {
        this[Xf] = t || 0,
        this[la] = i || 0,
        this.bottom = n || 0,
        this.right = e || 0
      },
      clone: function () {
        return new jD(this.top, this[la], this[Yr], this[zr])
      },
      equals: function (t) {
        return t && this[Xf] == t[Xf] && this[Yr] == t.bottom && this[la] == t.left && this[zr] == t[zr]
      }
    };
  var ID = function (t, i) {
      this.horizontalPosition = t,
      this.verticalPosition = i
    };
  ID[yr] = {
      verticalPosition: !1,
      horizontalPosition: !1,
      toString: function () {
        return (this[Vd] || "") + (this[qr] || "")
      }
    },
  K(ID.prototype, Kd, {
      get: function () {
        return (this[Vd] || "") + (this[qr] || "")
      }
    });
  var PD = Zd,
    AD = Jd,
    CD = Qd,
    LD = p_,
    RD = tl,
    ND = il;
  ID[nl] = new ID(PD, LD),
  ID[el] = new ID(PD, RD),
  ID.LEFT_BOTTOM = new ID(PD, ND),
  ID[sl] = new ID(AD, LD),
  ID[hl] = new ID(AD, RD),
  ID.CENTER_BOTTOM = new ID(AD, ND),
  ID[rl] = new ID(CD, LD),
  ID[al] = new ID(CD, RD),
  ID[fl] = new ID(CD, ND);
  var DD = [ID[nl], ID[el], ID.LEFT_BOTTOM, ID[sl], ID.CENTER_MIDDLE, ID.CENTER_BOTTOM, ID[rl], ID[al], ID.RIGHT_BOTTOM];
  K(ID, lr, {
      get: function () {
        return DD[C(DD[Gh])]
      }
    });
  var $D = function (t, i, n, e, s) {
      this.set(t, i, n, e),
      this.radius = s
    };
  $D[yr] = {
      radius: 0,
      classify: function (t, i, n, e) {
        return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
      },
      intersectsRect: function (t, i, n, e) {
        if ($(this, $D, qd, arguments) === !1) return !1;
        var s = this.x,
          h = this.y,
          r = s + this[sf],
          a = h + this[tf],
          f = 2 * radius,
          o = 2 * radius,
          _ = Math.min(this[sf], Math[Hr](f)) / 2,
          c = Math[ro](this[tf], Math[Hr](o)) / 2,
          u = this[ol](t, s, r, _),
          d = this[ol](t + n, s, r, _),
          l = this[ol](i, h, a, c),
          v = this[ol](i + e, h, a, c);
        return 2 == u || 2 == d || 2 == l || 2 == v ? !0 : 2 > u && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + n - (s + _) : t -= r - _, i = 1 == v ? i = i + e - (h + c) : i -= a - c, t /= _, i /= c, 1 >= t * t + i * i)
      },
      intersectsPoint: function (t, i) {
        if ($(this, $D, Sf, arguments) === !1) return !1;
        var n = this.x,
          e = this.y,
          s = n + this.width,
          h = e + this[tf];
        if (n > t || e > i || t >= s || i >= h) return !1;
        var r = 2 * radius,
          a = 2 * radius,
          f = Math[ro](this[sf], Math.abs(r)) / 2,
          o = Math[ro](this[tf], Math[Hr](a)) / 2;
        return t >= (n += f) && t < (n = s - f) ? !0 : i >= (e += o) && i < (e = h - o) ? !0 : (t = (t - n) / f, i = (i - e) / o, 1 >= t * t + i * i)
      },
      clone: function () {
        return new $D(this.x, this.y, this[sf], this.height, this[_l])
      }
    },
  N($D, SD);
  var BD = function (t, i, n, e) {
      this.source = t,
      this[Df] = i,
      this[cl] = n,
      this.value = e
    };
  BD[yr] = {
      source: null,
      type: null,
      kind: null,
      value: null,
      toString: function () {
        return ul + this.source + dl + this[Df] + ll + this[cl]
      }
    };
  var FD = function (t, i, n, e, s) {
      this.source = t,
      this[cl] = i,
      this.oldValue = e,
      this.value = n,
      this[vl] = s
    };
  FD[yr] = {
      type: bl,
      propertyType: null,
      toString: function () {
        return ul + this[Zf] + dl + this[Df] + yl + this.kind + gl + this.oldValue + pl + this.value
      }
    },
  N(FD, BD),
  K(FD[yr], xl, {
      get: function () {
        return this[cl]
      },
      set: function (t) {
        this[cl] = t
      }
    });
  var GD = function (t, i, n) {
      this[Zf] = t,
      this[El] = t[k_],
      this.value = i,
      this.newIndex = n,
      this[El] && (this[ml] = this.oldValue[wl](t))
    };
  GD[yr] = {
      kind: k_
    },
  N(GD, FD);
  var zD = function (t, i) {
      this[Zf] = t,
      this[Or] = i
    };
  zD.prototype[cl] = Tl,
  N(zD, FD);
  var YD = function (t, i) {
      this[Zf] = t,
      this.value = i
    };
  YD.prototype[cl] = kl,
  N(YD, FD);
  var HD = function (t, i, n, e) {
      this.source = i,
      this.oldValue = n,
      this[Or] = e,
      this[k_] = t,
      this[Ol] = i,
      this[ml] = n,
      this[Ml] = e
    };
  HD[yr].kind = Sl,
  N(HD, FD);
  var qD = function () {};
  qD.prototype = {
      listener: null,
      beforeEvent: function (t) {
        return null != this[jl] && this[jl][Il] ? this.listener[Il](t) : !0
      },
      onEvent: function (t) {
        null != this[jl] && this[jl].onEvent && this.listener.onEvent(t)
      }
    };
  var UD = function () {
      D(this, UD, arguments),
      this.events = {},
      this.listeners = []
    },
    WD = function (t, i) {
      this[jl] = t,
      this[Pl] = i,
      t instanceof Function ? this[wr] = t : (this[wr] = t.onEvent, this[Il] = t[Il]),
      this[Al] = function (t) {
        return t && this.listener == t[jl] && this[Pl] == t.scope
      }
    };
  WD[yr] = {
      equals: function (t) {
        return t && this[jl] == t[jl] && this[Pl] == t.scope
      },
      destroy: function () {
        delete this.scope,
        delete this[jl]
      }
    },
  UD.prototype = {
      listeners: null,
      _n7n: function () {
        return this.listeners && this[Cl][Gh] > 0
      },
      _79: function (t, i) {
        return t instanceof UD ? t : new WD(t, i)
      },
      _9l: function (t, i) {
        if (t instanceof UD) return this.listeners[er](t);
        for (var n = this.listeners, e = 0, s = n.length; s > e; e++) {
          var h = n[e];
          if (h.listener == t && h[Pl] == i) return e
        }
        return -1
      },
      contains: function (t, i) {
        return this._9l(t, i) >= 0
      },
      addListener: function (t, i) {
        return this[Jc](t, i) ? !1 : void this[Cl].push(this._79(t, i))
      },
      removeListener: function (t, i, n) {
        var e = this._9l(t, i);
        if (e >= 0) {
          var s = this[Cl].splice(e, 1)[0];
          n || F(s)
        }
      },
      on: function (t, i) {
        this[sd](t, i)
      },
      un: function (t, i, n) {
        this[Ll](t, i, n)
      },
      onEvent: function (t) {
        return this[Cl] ? void l(this[Cl], function (i) {
          i[wr] && (i[Pl] ? i.onEvent.call(i[Pl], t) : i[wr](t))
        }, this) : !1
      },
      beforeEvent: function (t) {
        return this[Cl] ? l(this.listeners, function (i) {
          return i[Il] ? i[Pl] ? i.beforeEvent.call(i.scope, t) : i[Il](t) : !0
        }, this) : !0
      },
      _db: function (t) {
        return this.beforeEvent(t) === !1 ? !1 : (this.onEvent(t), !0)
      },
      clear: function () {
        this[Cl] = []
      },
      destroy: function () {
        this[nf]()
      }
    },
  N(UD, qD);
  var XD = {
      onEvent: function () {},
      beforeEvent: function () {}
    },
    VD = function (t, i, n, e, s) {
      this[Zf] = t,
      this[Df] = Rl,
      this[cl] = i,
      this[Cf] = n,
      this[Nl] = e,
      this.oldIndex = s
    };
  VD.prototype = {
      index: -1,
      oldIndex: -1,
      toString: function () {
        return ul + this[Zf] + dl + this[Df] + ll + this[cl] + Dl + this[Cf] + $l + this.index + Bl + this[ml]
      }
    },
  N(VD, BD),
  VD[Fl] = nr,
  VD[Gl] = Vh,
  VD[zl] = nf,
  VD[Yl] = Hl;
  var KD = function () {
      this.id = ++QN,
      this._n8r = {}
    };
  KD.prototype = {
      _n8r: null,
      id: null,
      get: function (t) {
        return this._n8r[t]
      },
      set: function (t, i) {
        var n = this[mr](t);
        if (n === i) return !1;
        var e = new FD(this, t, i, n);
        return e[vl] = T$.PROPERTY_TYPE_CLIENT,
        this._n72(t, i, e, this._n8r)
      },
      _n72: function (t, i, e, s) {
        return this[Il](e) === !1 ? !1 : (s || (s = this._n8r), i === n ? delete s[t] : s[t] = i, this[wr](e), !0)
      },
      remove: function (t) {
        this[No](t, null)
      },
      valueOf: function () {
        return this.id
      },
      toString: function () {
        return this.id
      },
      _dg: function (t, i) {
        if (i === n && (i = -1), this == t || t == this._j0) return !1;
        if (t && this == t._j0 && !t._dg(null)) return !1;
        var e = new GD(this, t, i);
        if (!this[Il](e)) return !1;
        var s, h, r = this._j0;
        return t && (s = new zD(t, this), !t[Il](s)) ? !1 : null == r || (h = new YD(r, this), r[Il](h)) ? (this._j0 = t, null != t && oi(t, this, i), null != r && _i(r, this), this.onEvent(e), null != t && t[wr](s), null != r && r.onEvent(h), this[ql](r, t), !0) : !1
      },
      addChild: function (t, i) {
        var n = t._dg(this, i);
        return n && this[Ur](t, i),
        n
      },
      onChildAdd: function () {},
      removeChild: function (t) {
        if (!this._f2 || !this._f2.contains(t)) return !1;
        var i = t._dg(null);
        return this[Wr](t),
        i
      },
      onChildRemove: function () {},
      toChildren: function () {
        return this._f2 ? this._f2.toDatas() : null
      },
      clearChildren: function () {
        if (this._f2 && this._f2.length) {
          var t = this[Ul]();
          l(t, function (t) {
            t._dg(null)
          }, this),
          this[Wl](t)
        }
      },
      forEachChild: function (t, i) {
        return this[Yh]() ? this._f2[s_](t, i) : !1
      },
      onChildrenClear: function () {},
      getChildIndex: function (t) {
        return this._f2 && this._f2.length ? this._f2[er](t) : -1
      },
      setChildIndex: function (t, i) {
        if (!this._f2 || !this._f2[Gh]) return !1;
        var n = this._f2[er](t);
        if (0 > n || n == i) return !1;
        var e = new HD(this, t, n, i);
        return this.beforeEvent(e) === !1 ? !1 : (this._f2[Vh](t) && this._f2[nr](t, i), this[wr](e), !0)
      },
      hasChildren: function () {
        return this._f2 && this._f2[Gh] > 0
      },
      getChildAt: function (t) {
        return null == this._f2 ? null : this._f2._j1[t]
      },
      isDescendantOf: function (t) {
        if (!t.hasChildren()) return !1;
        for (var i = this[k_]; null != i;) {
          if (t == i) return !0;
          i = i.parent
        }
        return !1
      },
      onParentChanged: function () {},
      firePropertyChangeEvent: function (t, i, n, e) {
        this[wr](new FD(this, t, i, n, e))
      }
    },
  N(KD, qD),
  Z(KD[yr], {
      childrenCount: {
        get: function () {
          return this._f2 ? this._f2.length : 0
        }
      },
      children: {
        get: function () {
          return this._f2 || (this._f2 = new ED),
          this._f2
        }
      },
      parent: {
        get: function () {
          return this._j0
        },
        set: function (t) {
          this._dg(t, -1)
        }
      },
      properties: {
        get: function () {
          return this._n8r
        },
        set: function (t) {
          this._n8r != t && (this._n8r = t)
        }
      }
    });
  var ZD = function () {
      this._j1 = [],
      this._ll = {},
      this._1w = new UD
    };
  ZD.prototype = {
      beforeEvent: function (t) {
        return null != this._1w && this._1w[Il] ? this._1w[Il](t) : !0
      },
      onEvent: function (t) {
        return this._1w instanceof Function ? void this._1w(t) : void(null != this._1w && this._1w[wr] && this._1w[wr](t))
      },
      _1w: null,
      setIndex: function (t, i) {
        if (!this[Jc](t)) throw new Error(Ba + t[Xl]() + Ad);
        var n = this[er](t);
        if (n == i) return !1;
        var e = new VD(this, VD[Yl], t, i, n);
        return this.beforeEvent(e) === !1 ? !1 : (this._j1.remove(t) >= 0 && this._j1[nr](i, t), this.onEvent(e), !0)
      },
      _fi: function (t, i) {
        if (0 == t[Gh]) return !1;
        var e = !1,
          s = i >= 0,
          h = new VD(this, VD[Fl], t, i);
        if (this[Il](h) === !1) return !1;
        var r = [];
        t = t._j1 || t;
        for (var a = 0, f = t[Gh]; f > a; a++) {
            var o = t[a];
            null !== o && o !== n && this._k8(o, i, !0) && (r.push(o), e = !0, s && i++)
          }
        return h[Cf] = r,
        this.onEvent(h),
        e
      },
      _k8: function (t, i, n) {
        if (this[L_](t) === !1) return !1;
        if (n) return $(this, ZD, Vl, arguments);
        var e = new VD(this, VD[Fl], t, i);
        return this.beforeEvent(e) === !1 ? !1 : $(this, ZD, Vl, arguments) ? (this._k6(t, e), t) : !1
      },
      _k6: function (t, i) {
        this[wr](i)
      },
      _9y: function (t) {
        if (0 == t[Gh]) return !1;
        var i = new VD(this, VD[Gl], t);
        if (this[Il](i) === !1) return !1;
        var e = [],
          s = !1;
        t = t._j1 || t;
        for (var h = 0, r = t[Gh]; r > h; h++) {
            var a = t[h];
            if (null !== a && a !== n) {
              var f = a.id || a;
              a.id === n && (a = null),
              this._fo(f, a, !0) && (e[Ea](a), s = !0)
            }
          }
        return i[Cf] = e,
        this.onEvent(i),
        s
      },
      _fo: function (t, i, n) {
        if (n) return $(this, ZD, Kl, arguments);
        var e = new VD(this, VD[Gl], i);
        return this[Il](e) === !1 ? !1 : $(this, ZD, Kl, arguments) ? (this[wr](e), !0) : !1
      },
      clear: function () {
        if (this[Fo]()) return !1;
        var t = new VD(this, VD.KIND_CLEAR, this[Yc]());
        return this.beforeEvent(t) === !1 ? !1 : $(this, ZD, nf) ? (this.onEvent(t), !0) : !1
      },
      accept: function (t) {
        return this[Zl] && this[Zl](t) === !1 ? !1 : !0
      }
    },
  N(ZD, ED),
  K(ZD[yr], Jl, {
      get: function () {
        return this._1w
      }
    });
  var JD = function () {
      D(this, JD, arguments),
      this[Ql] = new UD,
      this._selectionModel = new QD(this),
      this._selectionModel._1w = this[Ql],
      this[tv] = new UD,
      this[tv].addListener({
        beforeEvent: this.beforeDataPropertyChange,
        onEvent: this.onDataPropertyChanged
      }, this),
      this[iv] = new UD,
      this[nv] = new UD,
      this[ev] = new ED;
      var t = this;
      this.$roots[sv] = function (i, n) {
        if (!t.$roots[Jc](i)) throw new Error(Ba + i.id + Ad);
        var e = t[ev]._j1.indexOf(i);
        if (e == n) return !1;
        t[ev]._j1[Uh](e, 1),
        t[ev]._j1[Uh](n, 0, i),
        t._n8yIndexFlag = !0;
        var s = new HD(t, i, e, n);
        return t._2n(s),
        !0
      }
    };
  JD.prototype = {
      selectionModel: null,
      selectionChangeDispatcher: null,
      dataChangeDispatcher: null,
      parentChangeDispatcher: null,
      roots: null,
      _k6: function (t, i) {
        t[jl] = this[tv],
        t[k_] || this[ev].add(t),
        this[wr](i)
      },
      _fo: function (t, i) {
        if ($(this, JD, Kl, arguments)) {
          if (i instanceof cF) i[hv]();
          else if (i instanceof uF) {
            var n = i[rv]();
            this.remove(n)
          }
          var e = i.parent;
          return null == e ? this.$roots[Vh](i) : (e[av](i), e.__68 = !0),
          i[Yh]() && this.remove(i[Ul]()),
          i[jl] = null,
          !0
        }
        return !1
      },
      _4x: function (t) {
        var i = t[Zf];
        this[Jc](i) && (null == i[k_] ? this[ev].add(i) : null == t.oldValue && this.$roots[Vh](i), this[iv][wr](t))
      },
      _2n: function (t) {
        this.childIndexChangeDispatcher.onEvent(t)
      },
      beforeDataPropertyChange: function (t) {
        return t instanceof GD ? this.parentChangeDispatcher[Il](t) : !0
      },
      onDataPropertyChanged: function (t) {
        return t instanceof GD ? (this._n8yIndexFlag = !0, t[Zf]._n8yIndexFlag = !0, void this._4x(t)) : void(t instanceof HD && (this._n8yIndexFlag = !0, t[Zf]._n8yIndexFlag = !0, this._2n(t)))
      },
      toRoots: function () {
        return this[ev].toDatas()
      },
      _gj: function (t) {
        var i, n = t._j0;
        i = n ? n._f2 : this[ev];
        var e = i.indexOf(t);
        if (0 > e) throw new Error(fv + t + "' not exist in the box");
        return 0 == e ? n : i[Pd](e - 1)
      },
      _gf: function (t) {
        var i, n = t._j0;
        i = n ? n._f2 : this[ev];
        var e = i[er](t);
        if (0 > e) throw new Error(fv + t + "' not exist in the box");
        return e == i.length - 1 ? n ? this._gf(n) : null : i[Pd](e + 1)
      },
      forEachByDepthFirst: function (t, i, n) {
        return this[ev].length ? h(this[ev], t, i, n) : !1
      },
      forEachByDepthFirstReverse: function (t, i, n) {
        return this[ev][Gh] ? f(this[ev], t, i, n) : !1
      },
      forEachByBreadthFirst: function (t, i) {
        return this[ev].length ? c(this[ev], t, i) : !1
      },
      forEachByBreadthFirstReverse: function (t, i) {
        return this[ev].length ? u(this[ev], t, i) : !1
      },
      clear: function () {
        return $(this, JD, nf) ? (this[ev][nf](), this[Ou][nf](), !0) : !1
      }
    },
  N(JD, ZD),
  Z(JD[yr], {
      selectionModel: {
        get: function () {
          return this._selectionModel
        }
      },
      roots: {
        get: function () {
          return this.$roots
        }
      }
    });
  var QD = function (t) {
      D(this, QD),
      this[ov] = t,
      this._n8oxChangeListener = {
        onEvent: function (t) {
          VD[Gl] == t.kind ? null != t[Cf] ? this[Vh](t[Cf]) : null != t.datas && this[Vh](t[_v]) : VD[zl] == t[cl] && this[nf]()
        }
      },
      this.box[Jl][sd](this._n8oxChangeListener, this)
    };
  QD[yr] = {
      box: null,
      isSelected: function (t) {
        return this.containsById(t.id || t)
      },
      select: function (t) {
        return this[nr](t)
      },
      unselect: function (t) {
        return this.remove(t)
      },
      reverseSelect: function (t) {
        return this[Jc](t) ? this[Vh](t) : this[nr](t)
      },
      accept: function (t) {
        return this[ov][Jc](t)
      }
    },
  N(QD, ZD);
  var t$ = null,
    i$ = null,
    n$ = null,
    e$ = function () {
      if (!i.createElement) return function (t) {
        return t
      };
      var t = i[cf](ru),
        e = t.style,
        s = {};
      return function (t) {
          if (s[t]) return s[t];
          var i = ci(t);
          return e[i] !== n || n$ && e[i = ci(n$ + i)] !== n ? (s[t] = i, i) : t
        }
    }(),
    s$ = {};
  !
  function () {
      if (!i[cv]) return !1;
      for (var e = i.head, s = "Webkit Moz O ms Khtml".split(ir), h = 0; h < s[Gh]; h++) if (e[Qr][s[h] + uv] !== n) {
        n$ = Zr + s[h][dv]() + Zr;
        break
      }
      var r = i[cf](Qr);
      t[lv] || r[lu](i[vv]("")),
      r[Jh] && (t$ = !0),
      r[Df] = bv,
      r.id = yv,
      e[lu](r),
      i$ = r[gv];
      var a, f;
      for (var o in s$) {
        var _ = s$[o];
        a = o,
        f = "";
        for (var c in _) f += e$(c) + ta + _[c] + pv;
        bi(a, f)
      }
    }();
  var h$ = function (t, i, n, e, s) {
      if (s) {
        var h = function (t) {
          h[xr][zh](h[Pl], t)
        };
        return h.scope = s,
        h.handle = n,
        t.addEventListener(i, h, e),
        h
      }
      return t[xv](i, n, e),
      n
    },
    r$ = function (t, i, n) {
      t.removeEventListener(i, n)
    },
    I = function (t) {
      t[or] ? t[or]() : t[_r] = !1
    },
    P = function (t) {
      t.stopPropagation ? t[cr]() : t[ur] || (t[ur] = !0)
    },
    A = function (t) {
      I(t),
      P(t)
    };
  pD.DOUBLE_CLICK_INTERVAL_TIME = lD ? 500 : 300,
  pD.LONG_PRESS_INTERVAL = lD ? 1500 : 1e3;
  var a$, f$ = Sa in t ? "mousewheel" : Ev;
  a$ = f$ + mv,
  lD && (a$ += wv),
  a$ = a$.split(Ir),
  Mi[yr] = {
      _n7x: function () {
        o$._n9urrentInteractionSupport == this && (delete o$._dragging, delete o$._n9urrentInteractionSupport),
        this._1r(),
        delete this._8r,
        this._n91 && (delete this._n91[Tv], delete this._n91.getUI, delete this._n91)
      },
      _ke: null,
      _i0: function () {
        var t = this._lh;
        t && Oi[zh](this, t)
      },
      destroy: function () {
        this._i0()
      },
      _n91: null,
      _1r: function () {
        this.__longPressTimer && (clearTimeout(this.__longPressTimer), this.__longPressTimer = null)
      },
      _e1: function () {
        this.__n9ancelClick = !0,
        this._1r(),
        this._hy(this._n91, kv),
        this._n8n.clear()
      },
      _n8n: null,
      _6m: function (t) {
        var i = this._8r;
        this._8r = Ei(t),
        this._n8n.add(i, this._8r, t)
      },
      _jx: function (t) {
        this._6m(t),
        this._hy(t, Ov),
        t[Br] && t.touches[Gh] > 1 && this._hy(t, Mv)
      },
      _hr: function (t) {
        lD || this._6m(t);
        var i = this._n8n[Sv]();
        i && (t.vx = i.x, t.vy = i.y),
        this._hy(t, jv),
        this._n8n[nf]()
      },
      _dz: function (t) {
        this._n91 && (this._1r(), this._hy(t, Iv), this._n91 = null, this._8r = null)
      },
      _hy: function (t, i) {
        this._listener && this._listener[i] instanceof Function && this._listener[i].call(this._listener, t, this._ke || this._lh)
      }
    };
  var o$ = function (t) {
      this._k3 = t,
      D(this, o$, [t[Pv]])
    };
  o$._n9urrentInteractionSupport = null,
  o$[yr] = {
      _43: function (t) {
        this._4g(function (i) {
          i.onElementRemoved instanceof Function && i.onElementRemoved(t, this._k3)
        })
      },
      _71: function () {
        this._4g(function (t) {
          t[Av] instanceof Function && t[Av](this._k3)
        })
      },
      _i0: function () {
        this._26 && this._2h(this._26),
        this._$n && this._2h(this._$n),
        this._n7x()
      },
      _k3: null,
      _26: null,
      _$n: null,
      _6p: function (t) {
        return this._26 == t ? !1 : (this._26 && this._26[Gh] && this._2h(this._26), void(this._26 = t))
      },
      _$e: function (t) {
        this._$n || (this._$n = []),
        this._$n[Ea](t)
      },
      _7: function (t) {
        this._$n && 0 != this._$n[Gh] && p(this._$n, t)
      },
      _hy: function (t, i, n) {
        this._k3[i] instanceof Function && this._k3[i][zh](this._k3, t, n),
        this._26 && this._gl(t, i, this._26, n),
        this._$n && this._gl(t, i, this._$n, n)
      },
      _4g: function (t) {
        this._26 && l(this._26, t, this),
        this._$n && l(this._$n, t, this)
      },
      _gl: function (t, i, n, e) {
        if (!j(n)) return void this._9n(t, i, n, e);
        for (var s = 0; s < n.length; s++) {
          var h = n[s];
          this._9n(t, i, h, e)
        }
      },
      _9n: function (t, i, n, e) {
        var s = n[i];
        s && s[zh](n, t, this._k3, e)
      },
      _35: function (t) {
        t[gc] instanceof Function && t[gc].call(t, this._k3)
      },
      _2h: function (t) {
        if (!j(t)) return void this._35(t);
        for (var i = 0; i < t[Gh]; i++) {
          var n = t[i];
          n && this._35(n)
        }
      }
    },
  N(o$, Mi),
  ji[yr] = {
      limitCount: 10,
      points: null,
      add: function (t, i, n) {
        var e = i.timeStamp - t.timeStamp || 1;
        n.interval = e;
        var s, h;
        if (!n[Br]) return s = i.x - t.x,
        h = i.y - t.y,
        n.dx = s,
        n.dy = h,
        void this._k8(s, h, e);
        var r = n[Br].length;
        if (1 == r) s = n.touches[0][fa] - t.touches[0].clientX,
        h = n[Br][0][oa] - t.touches[0][oa];
        else {
          for (var a, f, o, _ = [], c = [], u = 0, d = 0, l = 0, v = 0, b = 0, y = 0, g = 0, r = t[Br][Gh]; r > g; g++) {
            a = t[Br][g];
            var p = a.clientX,
              x = a[oa];
            u += p,
            d += x,
            g && (b = Math.max(b, Math.sqrt((p - f) * (p - f) + (x - o) * (x - o)))),
            f = p,
            o = x,
            _[Ea]({
                x: p,
                y: x
              })
          }
          u /= r,
          d /= r;
          for (var g = 0, r = n.touches[Gh]; r > g; g++) {
            a = n.touches[g];
            var p = a.clientX,
              x = a.clientY;
            l += p,
            v += x,
            g && (y = Math[pf](y, Math[Ef]((p - f) * (p - f) + (x - o) * (x - o)))),
            f = p,
            o = x,
            c.push({
                x: p,
                y: x
              })
          }
          if (l /= r, v /= r, s = l - u, h = v - d, b && y) {
            var E = y / b;
            n[yo] && t.scale && (E = n[yo] / t[yo]),
            n[Zc] = {
              x: l,
              y: v,
              clientX: l,
              clientY: v
            },
            n[Cv] = E,
            n[Lv] = t
          }
        }
        n.dx = s,
        n.dy = h,
        this._k8(s, h, e)
      },
      _k8: function (t, i, n) {
        var e = {
          interval: n,
          dx: t,
          dy: i
        };
        this[Mf][Uh](0, 0, e),
        this[Mf].length > this[Rv] && this[Mf][Nv]()
      },
      getCurrentSpeed: function () {
        if (!this[Mf][Gh]) return null;
        for (var t = 0, i = 0, n = 0, e = 0, s = this.points[Gh]; s > e; e++) {
          var h = this.points[e],
            r = h[Dv];
          if (r > 300) break;
          if (t += h[Dv], i += h.dx, n += h.dy, t > 500) break
        }
        return 0 == t || 0 == i && 0 == n ? null : {
          x: i / t,
          y: n / t
        }
      },
      clear: function () {
        this.points = []
      }
    };
  var _$, c$, u$, d$;
  hD ? (_$ = $v, c$ = Bv, u$ = Fv, d$ = Gv) : rD ? (_$ = zv, c$ = Yv, u$ = Hv, d$ = qv) : (_$ = Uv, c$ = Uv, u$ = Du, d$ = Wv);
  var l$ = Xv,
    v$ = Math.PI,
    b$ = Math[wf],
    y$ = Math[Ja],
    g$ = 1.70158,
    p$ = {
      swing: function (t) {
        return -Math.cos(t * v$) / 2 + .5
      },
      easeNone: function (t) {
        return t
      },
      easeIn: function (t) {
        return t * t
      },
      easeOut: function (t) {
        return (2 - t) * t
      },
      easeBoth: function (t) {
        return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
      },
      easeInStrong: function (t) {
        return t * t * t * t
      },
      easeOutStrong: function (t) {
        return 1 - --t * t * t * t
      },
      easeBothStrong: function (t) {
        return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
      },
      elasticIn: function (t) {
        var i = .3,
          n = i / 4;
        return 0 === t || 1 === t ? t : -(b$(2, 10 * (t -= 1)) * y$(2 * (t - n) * v$ / i))
      },
      elasticOut: function (t) {
        var i = .3,
          n = i / 4;
        return 0 === t || 1 === t ? t : b$(2, -10 * t) * y$(2 * (t - n) * v$ / i) + 1
      },
      elasticBoth: function (t) {
        var i = .45,
          n = i / 4;
        return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * b$(2, 10 * (t -= 1)) * y$(2 * (t - n) * v$ / i) : b$(2, -10 * (t -= 1)) * y$(2 * (t - n) * v$ / i) * .5 + 1
      },
      backIn: function (t) {
        return 1 === t && (t -= .001),
        t * t * ((g$ + 1) * t - g$)
      },
      backOut: function (t) {
        return (t -= 1) * t * ((g$ + 1) * t + g$) + 1
      },
      backBoth: function (t) {
        return (t *= 2) < 1 ? .5 * t * t * (((g$ *= 1.525) + 1) * t - g$) : .5 * ((t -= 2) * t * (((g$ *= 1.525) + 1) * t + g$) + 2)
      },
      bounceIn: function (t) {
        return 1 - p$[Vv](1 - t)
      },
      bounceOut: function (t) {
        var i, n = 7.5625;
        return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
      },
      bounceBoth: function (t) {
        return.5 > t ? .5 * p$.bounceIn(2 * t) : .5 * p$[Vv](2 * t - 1) + .5
      }
    },
    x$ = function (t) {
      this._iy = t
    };
  x$[yr] = {
      _iy: null,
      _kg: function (t) {
        var i = Date.now();
        this._ly();
        var n = this;
        this._requestID = requestAnimationFrame(function e() {
          var s = Date.now(),
            h = s - i;
          return !h || n._iy && n._iy(h) !== !1 ? (i = s, void(n._requestID = requestAnimationFrame(e))) : (n._ly(), void(t instanceof Function && t[zh]()))
        })
      },
      _ly: function () {
        return this._requestID ? (t[gd](this._requestID), void delete this._requestID) : !1
      },
      _d1: function () {
        return null != this._requestID
      }
    };
  var E$ = function (t, i, n, e) {
      this._onStep = t,
      this._ke = i || this,
      this._3w = e,
      n && n > 0 && (this._ii = n)
    };
  E$.prototype = {
      _ii: 1e3,
      _3w: null,
      _e2: 0,
      _ly: function () {
        return this._e2 = 0,
        this._n8v = 0,
        $(this, E$, Kv)
      },
      _n8v: 0,
      _iy: function (t) {
        if (this._e2 += t, this._e2 >= this._ii) return this._onStep[zh](this._ke, 1, (1 - this._n8v) * this._ii, t, this._ii),
        !1;
        var i = this._e2 / this._ii;
        return this._3w && (i = this._3w(i)),
        this._onStep.call(this._ke, i, (i - this._n8v) * this._ii, t, this._ii) === !1 ? !1 : void(this._n8v = i)
      }
    },
  N(E$, x$);
  var m$ = function (t) {
      ni(t)
    },
    w$ = {
      version: Zv,
      extend: N,
      doSuperConstructor: D,
      doSuper: $,
      createFunction: z,
      setClass: w,
      appendClass: T,
      removeClass: k,
      forEach: l,
      forEachReverse: b,
      isNumber: O,
      isString: M,
      isBoolean: S,
      isArray: j,
      eventPreventDefault: I,
      eventStopPropagation: P,
      stopEvent: A,
      callLater: E,
      nextFrame: m,
      forEachChild: e,
      forEachByDepthFirst: h,
      forEachByDepthFirstReverse: f,
      forEachByBreadthFirst: c,
      randomInt: C,
      randomBool: L,
      randomColor: U,
      addEventListener: h$,
      getFirstElementChildByTagName: wD
    };
  w$.isTouchSupport = lD,
  w$[Jv] = cD,
  w$[Sf] = ri,
  w$[Qv] = ai,
  w$[id] = SD,
  w$[tb] = MD,
  w$.Point = TD,
  w$[ib] = jD,
  w$.Event = BD,
  w$[nb] = FD,
  w$[eb] = VD,
  w$.Handler = qD,
  w$.Dispatcher = UD,
  w$[sb] = ID,
  w$[hb] = KD,
  w$[rb] = QD,
  w$[ab] = JD,
  w$[fb] = XD,
  w$[ob] = Ai,
  w$[_b] = Ii,
  w$[cb] = Pi,
  w$.isMetaKey = Si,
  w$[ub] = kD,
  w$[db] = ED,
  w$[lb] = Mi,
  w$[vb] = function (t) {
      alert(t)
    },
  w$[bb] = function (t, i, n, e) {
      var s = prompt(t, i);
      return s != i && n ? n.call(e, s) : s
    },
  w$[yb] = function (t, i, n) {
      var e = confirm(t);
      return e && i ? i[zh](n) : e
    },
  w$[gb] = bi;
  var T$ = {
      IMAGE_ADJUST_FLIP: pb,
      IMAGE_ADJUST_MIRROR: xb,
      SELECTION_TYPE_BORDER_RECT: Eb,
      SELECTION_TYPE_BORDER: mb,
      SELECTION_TYPE_SHADOW: wb,
      NS_SVG: "http://www.w3.org/2000/svg",
      PROPERTY_TYPE_ACCESSOR: 0,
      PROPERTY_TYPE_STYLE: 1,
      PROPERTY_TYPE_CLIENT: 2,
      EDGE_TYPE_DEFAULT: null,
      EDGE_TYPE_ELBOW: Tb,
      EDGE_TYPE_ELBOW_HORIZONTAL: kb,
      EDGE_TYPE_ELBOW_VERTICAL: Ob,
      EDGE_TYPE_ORTHOGONAL: Mb,
      EDGE_TYPE_ORTHOGONAL_HORIZONTAL: Sb,
      EDGE_TYPE_ORTHOGONAL_VERTICAL: jb,
      EDGE_TYPE_HORIZONTAL_VERTICAL: Ib,
      EDGE_TYPE_VERTICAL_HORIZONTAL: Pb,
      EDGE_TYPE_EXTEND_TOP: Ab,
      EDGE_TYPE_EXTEND_LEFT: Cb,
      EDGE_TYPE_EXTEND_BOTTOM: Lb,
      EDGE_TYPE_EXTEND_RIGHT: Rb,
      EDGE_TYPE_ZIGZAG: Nb,
      EDGE_CORNER_NONE: gu,
      EDGE_CORNER_ROUND: jf,
      EDGE_CORNER_BEVEL: Db,
      GROUP_TYPE_RECT: $b,
      GROUP_TYPE_CIRCLE: Bb,
      GROUP_TYPE_ELLIPSE: Fb,
      SHAPE_CIRCLE: Gb,
      SHAPE_RECT: $b,
      SHAPE_ROUNDRECT: zb,
      SHAPE_STAR: Yb,
      SHAPE_TRIANGLE: Hb,
      SHAPE_HEXAGON: qb,
      SHAPE_PENTAGON: Ub,
      SHAPE_TRAPEZIUM: Wb,
      SHAPE_RHOMBUS: Xb,
      SHAPE_PARALLELOGRAM: Vb,
      SHAPE_HEART: Kb,
      SHAPE_DIAMOND: Zb,
      SHAPE_CROSS: Jb,
      SHAPE_ARROW_STANDARD: Qb,
      SHAPE_ARROW_1: ty,
      SHAPE_ARROW_2: iy,
      SHAPE_ARROW_3: ny,
      SHAPE_ARROW_4: ey,
      SHAPE_ARROW_5: sy,
      SHAPE_ARROW_6: hy,
      SHAPE_ARROW_7: ry,
      SHAPE_ARROW_8: ay,
      SHAPE_ARROW_OPEN: fy
    };
  T$.LINE_CAP_TYPE_BUTT = oy,
  T$[_y] = jf,
  T$[cy] = uy,
  T$[dy] = Db,
  T$[ly] = jf,
  T$[vy] = by,
  pD[yy] = T$[gy],
  pD[py] = 3,
  pD.SELECTION_BORDER = 2,
  pD[xy] = 7,
  pD[Ey] = V(3422561023),
  pD.SELECTION_TYPE = T$[gy],
  pD[my] = 10,
  pD[wy] = 10,
  pD.DOUBLE_BUFFER = n,
  pD[zc] = 10,
  pD.IMAGE_MAX_SIZE = 200,
  pD[Ty] = 1.2;
  var k$ = t[ky] || 1;
  1 > k$ && (k$ = 1);
  var O$;
  w$[Oy] = Gi;
  var M$ = function (t, i, n, e) {
      var s = t - n,
        h = i - e;
      return s * s + h * h
    };
  hn.prototype = {
      equals: function (t) {
        return this.cx == t.cx && this.cy == t.cy && this.r == t.r
      }
    },
  hn._jhCircle = function (t, i, n) {
      if (!n) return en(t, i);
      var e = M$(t.x, t.y, i.x, i.y),
        s = M$(t.x, t.y, n.x, n.y),
        h = M$(n.x, n.y, i.x, i.y);
      if (e + S$ >= s + h) return en(t, i, 0, n);
      if (s + S$ >= e + h) return en(t, n, 0, i);
      if (h + S$ >= e + s) return en(i, n, 0, t);
      var r;
      Math[Hr](n.y - i.y) < 1e-4 && (r = t, t = i, i = r),
      r = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
      var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * r),
        f = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
      return new hn(a, f, kD(a, f, t.x, t.y), t, i, n)
    };
  var S$ = .01,
    j$ = {
      _n8d: function (t, i, e, s, h) {
        var r = 0,
          a = 0,
          f = i._j8;
        if (e = e || 0, t.x === n) {
            var o = t[Vd],
              _ = t[qr],
              c = !0;
            switch (o) {
              case CD:
                c = !1;
                break;
              case AD:
                r += f / 2
              }
            switch (_) {
              case LD:
                a -= e / 2;
                break;
              case ND:
                a += e / 2
              }
          } else r = t.x,
        a = t.y,
        Math[Hr](r) > 0 && Math[Hr](r) < 1 && (r *= f);
        h && null != s && (a += s.y, r += Math[Hr](s.x) < 1 ? s.x * f : s.x);
        var u = dn.call(i, r, a, c);
        return u ? (h || null == s || u.offset(s), u) : {
            x: 0,
            y: 0
          }
      },
      _lj: function (t, i) {
        var n = i[Df],
          e = i.points;
        switch (n) {
          case iB:
            t.arcTo(e[0], e[1], e[2], e[3], i._r);
            break;
          case Z$:
            t.moveTo(e[0], e[1]);
            break;
          case J$:
            t[z_](e[0], e[1]);
            break;
          case Q$:
            t[My](e[0], e[1], e[2], e[3]);
            break;
          case tB:
            t[Sy](e[0], e[1], e[2], e[3], e[4], e[5]);
            break;
          case nB:
            t.closePath()
          }
      },
      _5w: function (t, i, n, e) {
        var s = i[Df];
        if (s != Z$ && s != nB) {
          var h = n[Nf],
            r = i[Mf];
          switch (n[Df] == Z$ && t.add(h.x, h.y), s) {
            case iB:
              bn(i, h.x, h.y, r[0], r[1], r[2], r[3], r[4]),
              t.add(r[0], r[1]),
              t[nr](i._p1x, i._p1y),
              t[nr](i._p2x, i._p2y),
              i._n8oundaryPoint1 && t[nr](i._n8oundaryPoint1.x, i._n8oundaryPoint1.y),
              i._n8oundaryPoint2 && t[nr](i._n8oundaryPoint2.x, i._n8oundaryPoint2.y);
              break;
            case J$:
              t[nr](r[0], r[1]);
              break;
            case Q$:
              Xi([h.x, h.y][Wh](r), t);
              break;
            case tB:
              Ji([h.x, h.y][Wh](r), t);
              break;
            case nB:
              e && t.add(e[Mf][0], e[Mf][1])
            }
        }
      },
      _5r: function (t, i, n) {
        var e = t.type;
        if (e == Z$) return 0;
        var s = i.lastPoint,
          h = t[Mf];
        switch (e == tB && 4 == h[Gh] && (e = Q$), e) {
          case J$:
            return kD(h[0], h[1], s.x, s.y);
          case iB:
            return t._j8;
          case Q$:
            var r = Vi([s.x, s.y][Wh](h));
            return t._lf = r,
            r(1);
          case tB:
            var r = tn([s.x, s.y].concat(h));
            return t._lf = r,
            r(1) || Qi([s.x, s.y][Wh](h));
          case nB:
            if (s && n) return t.points = n[Mf],
            kD(n[Mf][0], n.points[1], s.x, s.y)
          }
        return 0
      }
    },
    I$ = /^data:image\/(\w+);base64,/i,
    P$ = /^gif/i,
    A$ = /^svg/i,
    C$ = 10,
    L$ = 11,
    R$ = 12,
    N$ = 20,
    D$ = 30;
  pD[jy] = 50,
  pD.IMAGE_HEIGHT = 30,
  pD[Iy] = 1e6;
  var $$ = 1,
    B$ = 2,
    F$ = 3;
  En[yr] = {
      _jv: 0,
      _68: !0,
      _kh: null,
      _jp: null,
      _lo: null,
      _lq: null,
      _n89: n,
      _8t: n,
      _6a: function () {
        return this._jv == $$
      },
      getBounds: function (t) {
        return this._lq == D$ ? this._lo[kf](t) : (this._68 && this._fa(), this)
      },
      validate: function () {
        this._68 && this._fa()
      },
      _fa: function () {
        if (this._68 = !1, this._lq == D$) return this._lo[Tf](),
        void this[Mo](this._lo.bounds);
        if (this._lq == N$) return void this._97();
        if (this._jv != $$) try {
          this._dm()
        } catch (t) {
          this._jv = F$,
          w$.error(t)
        }
      },
      _52: function () {
        this._db(),
        this._dispatcher.clear(),
        delete this._dispatcher
      },
      _h9: function (t) {
        this._kh && this._kh[Py] && this._kh[Py].removeChild(this._kh),
        this._jv = F$,
        w$[Jf](Ay + this._lo),
        this._pixels = null,
        this._jp = null,
        this._kh = null,
        t !== !1 && this._52()
      },
      _dm: function () {
        var t = this._lo;
        if (this._jv = $$, this._dispatcher = new UD, this._lq == R$) {
          for (var n in uB) this[n] = uB[n];
          return void Qn(this._lo, this, this._n9v, this._h9, this._d6)
        }
        this._kh || (nD ? (this._kh = i[cf](fu), this._kh[Qr][Cy] = yu, i.body[lu](this._kh)) : this._kh = new Image),
        this._kh[cu] = t,
        !nD && this._kh[sf] ? (this._kh[r_] = this._kh[f_] = null, this._7t()) : (this._kh[r_] = nD ?
        function (t) {
          setTimeout(this._7t.bind(this, t), 100)
        }[Ly](this) : this._7t.bind(this), this._kh[f_] = this._h9[Ly](this))
      },
      _7t: function () {
        this._jv = B$;
        var t = this._kh.width,
          i = this._kh.height;
        if (this._kh[Py] && this._kh.parentNode.removeChild(this._kh), !t || !i) return void this._h9();
        this[sf] = t,
        this[tf] = i;
        var n = this._do();
        n[sf] = t,
        n[tf] = i,
        n.g[Ry](this._kh, 0, 0, t, i),
        this._pixels = nD && this._lq == L$ ? null : Sn(n),
        this._52()
      },
      _97: function () {
        var t = this._lo;
        if (!(t[Kf] instanceof Function)) return void this._h9(!1);
        if (t[Ny] === !1 && t.width && t[tf]) return this[sf] = t[sf],
        void(this[tf] = t.height);
        var i = t[sf] || pD.IMAGE_MAX_SIZE,
          n = t.height || pD[Dy],
          e = this._do();
        e[sf] = i,
        e[tf] = n;
        var s = e.g;
        t[Kf](s);
        var h = s[no](0, 0, i, n),
          r = In(h[Cf], i, n);
        this.x = r._x,
        this.y = r._y,
        this[sf] = r._width,
        this[tf] = r._height,
        e.width = this[sf],
        e[tf] = this.height,
        s.putImageData(h, -this.x, -this.y),
        this._pixels = r
      },
      _do: function () {
        return this._jp || (this._jp = Gi())
      },
      _65: function (t, i, n, e, s, h) {
        i[$y](),
        i[$b](0, 0, e, s),
        i.fillStyle = h || By,
        i.fill(),
        i.clip(),
        i[Fy] = Zc,
        i[Gy] = zy,
        i.fillStyle = Yy;
        var r = 6 * (i[rf][lf] || 1);
        i[yf] = Hy + r + "px Verdana,helvetica,arial,sans-serif",
        i[qy] = Uy,
        i[Lf] = 1,
        i[Wy](t, e / 2 + .5, s / 2 + .5),
        i[qy] = Xy,
        i[Wy](t, e / 2 - .5, s / 2 - .5),
        i[Vy](t, e / 2, s / 2),
        i[Ky]()
      },
      draw: function (t, i, n, e, s, h) {
        if (this[sf] && this[tf]) {
          i = i || 1,
          e = e || 1,
          s = s || 1;
          var r = this[sf] * e,
            a = this[tf] * s;
          if (h && n[Zy] && (t[Zy] = n[Zy], t[Jy] = (n[Jy] || 0) * i, t.shadowOffsetX = (n.shadowOffsetX || 0) * i, t.shadowOffsetY = (n[Qy] || 0) * i), this._jv == $$) return this._65(tg, t, i, r, a, n[ig]);
          if (this._jv == F$) return this._65(ng, t, i, r, a, n[ig]);
          if (this._lq == D$) return t[yo](e, s),
          void this._lo[Kf](t, i, n);
          var f = this._ey(i, e, s);
          return f ? ((this.x || this.y) && t.translate(this.x * e, this.y * s), t[yo](e / f[yo], s / f[yo]), void f._lj(t, n[ig], n[eg])) : void this._jq(t, i, e, s, this.width * e, this[tf] * s, n)
        }
      },
      _jq: function (t, i, n, e, s, h, r) {
        if (this._lq == N$) return 1 != n && 1 != e && t[yo](n, e),
        void this._lo[Kf](t, r);
        if (this._kh) {
          if (!aD) return void t[Ry](this._kh, 0, 0, s, h);
          var n = i * s / this.width,
            e = i * h / this[tf];
          t[yo](1 / n, 1 / e),
          t.drawImage(this._kh, 0, 0, s * n, h * e)
        }
      },
      _ju: null,
      _ey: function (t, i, n) {
        if (this._lq == N$ && this._lo[Ny] === !1) return null;
        if (this._lq == C$ || (t *= Math[pf](i, n)) <= 1) return this._defaultCache || (this._defaultCache = this._f0(this._jp || this._kh, 1)),
        this._defaultCache;
        var e = this._ju[sg] || 0;
        if (t = Math[Xh](t), e >= t) {
          for (var s = t, h = this._ju[s]; !h && ++s <= e;) h = this._ju[s];
          if (h) return h
        }
        t % 2 && t++;
        var r = this.width * t,
          a = this[tf] * t;
        if (r * a > pD[Iy]) return null;
        var f = Gi(r, a);
        return (this.x || this.y) && f.g[Vf](-this.x * t, -this.y * t),
        this._jq(f.g, 1, t, t, r, a),
        this._f0(f, t)
      },
      _f0: function (t, i) {
        var n = new rB(t, i);
        return this._ju[i] = n,
        this._ju[sg] = i,
        n
      },
      hitTest: function (t, i, n) {
        if (this._lq == D$) return this._lo.hitTest.apply(this._lo, arguments);
        if (!(this._pixels || this._kh && this._kh._pixels)) return !0;
        var e = this._pixels || this._kh._pixels;
        return e._i1(t, i, n)
      },
      _db: function () {
        this._dispatcher && this._dispatcher[wr](new BD(this, hg, rg, this._kh))
      },
      _n84: function (t, i) {
        this._dispatcher && this._dispatcher[sd](t, i)
      },
      _66: function (t, i) {
        this._dispatcher && this._dispatcher[Ll](t, i)
      },
      _n8p: function (t) {
        this._ju = {},
        (t || this[sf] * this[tf] > 1e5) && (this._kh = null, this._jp = null)
      }
    },
  N(En, SD);
  var G$ = {};
  w$[Ry] = On,
  w$[ag] = mn,
  w$[fg] = Tn,
  w$.getAllImages = function () {
      var t = [];
      for (var i in G$) t.push(i);
      t.push('../static/images/qunee/ying.png');
      return t
    };
  var z$ = function (t, i, n, e, s, h) {
      this.type = t,
      this[og] = i,
      this.positions = n,
      this[Kc] = e || 0,
      this.tx = s || 0,
      this.ty = h || 0
    };
  T$[_g] = Qd,
  T$[cg] = Zd,
  z$[yr] = {
      type: null,
      colors: null,
      positions: null,
      angle: null,
      tx: 0,
      ty: 0,
      position: ID[hl],
      isEmpty: function () {
        return null == this[og] || 0 == this[og][Gh]
      },
      _6h: function () {
        var t = this.colors[Gh];
        if (1 == t) return [0];
        for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++) i.push(n * e);
        return this[ug] || (this[ug] = i),
        i
      },
      generatorGradient: function (t) {
        if (null == this[og] || 0 == this[og].length) return null;
        var i, n = Yi();
        if (this[Df] == T$[cg]) {
          var e = this[Kc];
          e > Math.PI && (e -= Math.PI);
          var s;
          if (e <= Math.PI / 2) {
            var h = Math[mf](t[tf], t[sf]),
              r = Math[Ef](t[sf] * t[sf] + t[tf] * t.height),
              a = h - e;
            s = Math[Qa](a) * r
          } else {
            var h = Math[mf](t[sf], t[tf]),
              r = Math[Ef](t.width * t[sf] + t[tf] * t[tf]),
              a = h - (e - Math.PI / 2);
            s = Math[Qa](a) * r
          }
          var f = s / 2,
            o = f * Math[Qa](e),
            _ = f * Math[Ja](e),
            c = t.x + t.width / 2 - o,
            u = t.y + t[tf] / 2 - _,
            d = t.x + t[sf] / 2 + o,
            l = t.y + t[tf] / 2 + _;
          i = n[dg](c, u, d, l)
        } else {
          if (!(this[Df] = T$[_g])) return null;
          var v = fi(this.position, t.width, t[tf]);
          v.x += t.x,
          v.y += t.y,
          this.tx && (v.x += Math[Hr](this.tx) < 1 ? t.width * this.tx : this.tx),
          this.ty && (v.y += Math[Hr](this.ty) < 1 ? t[tf] * this.ty : this.ty);
          var b = kD(v.x, v.y, t.x, t.y);
          b = Math[pf](b, kD(v.x, v.y, t.x, t.y + t[tf])),
          b = Math[pf](b, kD(v.x, v.y, t.x + t[sf], t.y + t[tf])),
          b = Math.max(b, kD(v.x, v.y, t.x + t[sf], t.y)),
          i = n[lg](v.x, v.y, 0, v.x, v.y, b)
        }
        var y = this[og],
          g = this[ug];
        g && g.length == y[Gh] || (g = this._6h());
        for (var p = 0, x = y[Gh]; x > p; p++) i[vg](g[p], y[p]);
        return i
      }
    };
  var Y$ = new z$(T$[cg], [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
    H$ = new z$(T$[cg], [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], 0),
    q$ = (new z$(T$.GRADIENT_TYPE_LINEAR, [V(1154272460), V(1442840575)], [.1, .9], 0), new z$(T$[_g], [V(2298478591), V(1156509422), V(1720223880), V(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
    U$ = [V(0), V(4294901760), V(4294967040), V(4278255360), V(4278250239), V(4278190992), V(4294901958), V(0)],
    W$ = [0, .12, .28, .45, .6, .75, .8, 1],
    X$ = new z$(T$[cg], U$, W$),
    V$ = new z$(T$[cg], U$, W$, Math.PI / 2),
    K$ = new z$(T$[_g], U$, W$);
  z$.LINEAR_GRADIENT_VERTICAL = Y$,
  z$[bg] = H$,
  z$[yg] = q$,
  z$.RAINBOW_LINEAR_GRADIENT = X$,
  z$[gg] = V$,
  z$.RAINBOW_RADIAL_GRADIENT = K$;
  var Z$ = tl,
    J$ = Zd,
    Q$ = pg,
    tB = Jd,
    iB = xg,
    nB = Eg;
  T$[mg] = Z$,
  T$[wg] = J$,
  T$[Tg] = Q$,
  T$[kg] = tB,
  T$.SEGMENT_ARC_TO = iB,
  T$[Og] = nB;
  var eB = function (t, i) {
      this.id = ++QN,
      j(t) ? this[Mf] = t : (this.type = t, this[Mf] = i)
    };
  eB.prototype = {
      toJSON: function () {
        var t = {
          type: this[Df],
          points: this[Mf]
        };
        return this[io] && (t[io] = !0),
        t
      },
      parseJSON: function (t) {
        this[Df] = t[Df],
        this[Mf] = t[Mf],
        this.invalidTerminal = t.invalidTerminal
      },
      points: null,
      type: J$,
      clone: function () {
        return new eB(this[Df], y(this.points))
      },
      move: function (t, i) {
        if (this[Mf]) for (var n = 0, e = this.points.length; e > n; n++) {
          var s = this[Mf][n];
          w$[Mg](s) && (this[Mf][n] += n % 2 == 0 ? t : i)
        }
      }
    },
  Z(eB.prototype, {
      lastPoint: {
        get: function () {
          return this[Df] == iB ? {
            x: this._p2x,
            y: this._p2y
          } : {
            x: this.points[this[Mf][Gh] - 2],
            y: this.points[this[Mf].length - 1]
          }
        }
      },
      firstPoint: {
        get: function () {
          return {
            x: this[Mf][0],
            y: this[Mf][1]
          }
        }
      }
    }),
  w$[Sg] = eB;
  var sB = 0,
    hB = function (t) {
      this.bounds = new SD,
      this._f4 = t || []
    };
  hB[yr] = {
      toJSON: function () {
        var t = [];
        return this._f4[s_](function (i) {
          t[Ea](i[jg]())
        }),
        t
      },
      parseJSON: function (t) {
        var i = this._f4;
        t[s_](function (t) {
          i[Ea](new eB(t[Df], t[Mf]))
        })
      },
      clear: function () {
        this._f4[Gh] = 0,
        this.bounds.clear(),
        this._j8 = 0,
        this._68 = !0
      },
      _dh: !0,
      _63: function (t, i) {
        this._dh && 0 === this._f4[Gh] && t != Z$ && this._f4.push(new eB(Z$, [0, 0])),
        this._f4[Ea](new eB(t, i)),
        this._68 = !0
      },
      add: function (t) {
        this._f4[Ea](t),
        this._68 = !0
      },
      removePathSegment: function (t) {
        return t >= this._f4[Gh] ? !1 : (this._f4.splice(t, 1), void(this._68 = !0))
      },
      moveTo: function (t, i) {
        this._63(Z$, [t, i])
      },
      lineTo: function (t, i) {
        this._63(J$, [t, i])
      },
      quadTo: function (t, i, n, e) {
        this._63(Q$, [t, i, n, e])
      },
      curveTo: function (t, i, n, e, s, h) {
        this._63(tB, [t, i, n, e, s, h])
      },
      arcTo: function (t, i, n, e, s) {
        this._63(iB, [t, i, n, e, s])
      },
      closePath: function () {
        this._63(nB)
      },
      _7q: function (t, i, n, e, s) {
        if (e[Ig]) {
          if (n == T$[gy]) {
            if (!e[Pg]) return;
            return t[Zy] = e.selectionColor,
            t[Jy] = e[Pg] * i,
            t[Ag] = (e.selectionShadowOffsetX || 0) * i,
            void(t[Qy] = (e[Cg] || 0) * i)
          }
          if (n == T$[Lg]) {
            if (!e[Rg]) return;
            t[qy] = e.selectionColor,
            t[Lf] = e[Rg] + (s[Lf] || 0),
            this._lj(t),
            t.stroke()
          }
        }
      },
      _68: !0,
      _f4: null,
      _j8: 0,
      lineCap: oy,
      lineJoin: jf,
      draw: function (t, i, n, e, s) {
        t.lineCap = n[Ng] || this[Ng],
        t.lineJoin = n[Dg] || this[Dg],
        e && (s || (s = n), this._7q(t, i, s.selectionType, s, n)),
        n[$g] && (this._lj(t), t[Lf] = n[Lf] + 2 * (n[Bg] || 0), t[qy] = n[$g], t[Pf]()),
        t.lineWidth = 0,
        this._lj(t),
        n.fillColor && (t[Fg] = n.renderColor || n[Gg], t.fill()),
        n[zg] && (t.fillStyle = n._fillGradient || n[zg], t.fill()),
        n.lineWidth && (t.lineWidth = n[Lf], n.lineDash && (t.lineDash = n[Uo], t.lineDashOffset = n[Wo]), t[qy] = n[ig] || n[qy], t[Pf](), t[Uo] = [])
      },
      _lj: function (t) {
        t[Yg]();
        for (var i, n, e = 0, s = this._f4[Gh]; s > e; e++) i = this._f4[e],
        j$._lj(t, i, n),
        n = i
      },
      invalidate: function () {
        this._68 = !0
      },
      validate: function () {
        if (this._68 = !1, this[Of].clear(), this._j8 = 0, 0 != this._f4[Gh]) for (var t, i, n = this._f4, e = 1, s = n[0], h = s, r = n[Gh]; r > e; e++) t = n[e],
        t[Df] == Z$ ? h = t : (j$._5w(this[Of], t, s, h), i = j$._5r(t, s, h), t._j8 = i, this._j8 += i),
        s = t
      },
      getBounds: function (t, i) {
        if (this._68 && this[Tf](), i = i || new SD, t) {
          var n = t / 2;
          i.set(this.bounds.x - n, this[Of].y - n, this[Of].width + t, this[Of][tf] + t)
        } else i[No](this.bounds.x, this.bounds.y, this[Of][sf], this[Of][tf]);
        return i
      },
      hitTest: function (t, i, n, e, s, h) {
        return un.call(this, t, i, n, e, s, h)
      },
      toSegments: function () {
        return [].concat(this._f4)
      },
      generator: function (t, i, n, e, s) {
        return cn[zh](this, t, i, n, e, s)
      },
      getLocation: function (t, i) {
        return dn.call(this, t, i || 0)
      }
    },
  Z(hB[yr], {
      segments: {
        get: function () {
          return this._f4
        },
        set: function (t) {
          this[nf](),
          this._f4 = t
        }
      },
      length: {
        get: function () {
          return this._68 && this[Tf](),
          this._j8
        }
      },
      _empty: {
        get: function () {
          return 0 == this._f4.length
        }
      }
    }),
  jn[yr] = {
      _1b: function (t, i) {
        var n, e, s, h, r, a = t.length,
          f = 0,
          o = 0;
        for (r = 0; a > r; r += 4) if (t[r + 3] > 0) {
            n = (r + 4) / i / 4 | 0;
            break
          }
        for (r = a - 4; r >= 0; r -= 4) if (t[r + 3] > 0) {
            e = (r + 4) / i / 4 | 0;
            break
          }
        for (f = 0; i > f; f++) {
            for (o = n; e > o; o++) if (t[o * i * 4 + 4 * f + 3] > 0) {
              s = f;
              break
            }
            if (s >= 0) break
          }
        for (f = i - 1; f >= 0; f--) {
            for (o = n; e > o; o++) if (t[o * i * 4 + 4 * f + 3] > 0) {
              h = f;
              break
            }
            if (h >= 0) break
          }
        this._x = s,
        this._y = n,
        this._width = h - s + 1,
        this._height = e - n + 1,
        this._is = new SD(s, n, this._width, this._height),
        this._pixelSize = this._width * this._height,
        this._originalPixelsWidth = i,
        this._originalPixels = t
      },
      _e4: function (t, i) {
        return this._originalPixels[4 * (t + this._x + (this._y + i) * this._originalPixelsWidth) + 3]
      },
      _i1: function (t, i, n) {
        if (t = Math[jf](t - this._x), i = Math.round(i - this._y), !n || 1 >= n) return this._e4(t, i);
        n = 0 | n;
        for (var e = t, s = i; i + n > s;) {
          for (var e = t; t + n > e;) {
            if (this._e4(e, s)) return !0;
            ++e
          }++s
        }
        return !1
      }
    },
  T$[ho] = Hg,
  T$[qg] = Ug,
  T$[Wg] = Xg,
  T$[ao] = Vg,
  T$.BLEND_MODE_LIGHTEN = Kg,
  T$[fo] = Zg,
  T$[co] = Jg,
  pD[so] = T$.BLEND_MODE_LINEAR_BURN;
  var rB = function (t, i, n) {
      this._jp = t,
      this.scale = i || 1,
      t instanceof Image && (n = !1),
      this._ie = n
    };
  rB[yr] = {
      scale: 1,
      _jp: null,
      _ju: null,
      _ie: !0,
      _lj: function (t, i, n) {
        if (!i || this._ie === !1) return void t[Ry](this._jp, 0, 0);
        this._ju || (this._ju = {});
        var e = i + n,
          s = this._ju[e];
        if (s || (s = Cn(this._jp, i, n), s || (this._ie = !1), this._ju[e] = s || this._jp), s) if (nD) try {
            t[Ry](s, 0, 0)
          } catch (h) {} else t[Ry](s, 0, 0)
      }
    };
  var aB = function (t, i, n, e, s, h, r, a, f) {
      this._lp = Dn(t, i, n, e, s, h, r, a, f)
    },
    fB = {
      server: {
        draw: function (t) {
          t.save(),
          t[Vf](0, 0),
          t.beginPath(),
          t[F_](0, 0),
          t[z_](40, 0),
          t.lineTo(40, 40),
          t.lineTo(0, 40),
          t[go](),
          t[Qg](),
          t[Vf](0, 0),
          t[Vf](0, 0),
          t.scale(1, 1),
          t[Vf](0, 0),
          t.strokeStyle = tp,
          t[Ng] = oy,
          t.lineJoin = by,
          t[ip] = 4,
          t[$y](),
          t[$y](),
          t.restore(),
          t[$y](),
          t[Ky](),
          t[$y](),
          t[Ky](),
          t[$y](),
          t[Ky](),
          t.save(),
          t[Ky](),
          t[$y](),
          t[Ky](),
          t.save(),
          t.restore(),
          t.save(),
          t[Ky](),
          t[$y](),
          t[Ky](),
          t.save(),
          t[Ky](),
          t.save(),
          t.restore(),
          t[$y](),
          t[Ky](),
          t[$y](),
          t[Ky](),
          t.restore(),
          t[$y]();
          var i = t[dg](6.75, 3.9033, 30.5914, 27.7447);
          i[vg](.0493, np),
          i.addColorStop(.0689, ep),
          i[vg](.0939, sp),
          i[vg](.129, hp),
          i[vg](.2266, rp),
          i.addColorStop(.2556, ap),
          i[vg](.2869, fp),
          i[vg](.3194, op),
          i[vg](.3525, _p),
          i.addColorStop(.3695, cp),
          i[vg](.5025, up),
          i.addColorStop(.9212, dp),
          i.addColorStop(1, lp),
          t[Fg] = i,
          t.beginPath(),
          t[F_](25.677, 4.113),
          t.bezierCurveTo(25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004),
          t.bezierCurveTo(19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003),
          t[Sy](12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004),
          t[Sy](9.19, 2.897, 8.977, 2.989, 8.805, 3.094),
          t[Sy](8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63),
          t[Sy](5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05),
          t[Sy](4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307),
          t[Sy](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575),
          t[Sy](24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004),
          t.bezierCurveTo(25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004),
          t[Sy](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85),
          t[Sy](25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253),
          t.bezierCurveTo(25.706, 4.885, 25.749, 4.478, 25.677, 4.113),
          t[Sy](25.67, 4.077, 25.697, 4.217, 25.677, 4.113),
          t[go](),
          t.fill(),
          t[Pf](),
          t[Ky](),
          t[$y](),
          t[$y](),
          t.fillStyle = vp,
          t[Yg](),
          t.moveTo(19.763, 6.645),
          t.bezierCurveTo(20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778),
          t[Sy](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999),
          t[Sy](21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999),
          t.bezierCurveTo(21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372),
          t.lineTo(21.398, 36.253),
          t[Sy](21.397, 36.489, 21.349, 36.713, 21.262, 36.917),
          t[Sy](21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458),
          t.bezierCurveTo(20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996),
          t[Sy](20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949),
          t[z_](4.675, 37.877),
          t[Sy](4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741),
          t.bezierCurveTo(3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376),
          t[Sy](3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996),
          t.bezierCurveTo(3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172),
          t[z_](2.924, 8.431),
          t[Sy](2.923, 8.192, 2.971, 7.964, 3.057, 7.758),
          t[Sy](3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209),
          t.bezierCurveTo(3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837),
          t[Sy](4.17, 6.749, 4.396, 6.701, 4.633, 6.7),
          t[z_](19.763, 6.645),
          t[go](),
          t.fill(),
          t[Pf](),
          t[Ky](),
          t[Ky](),
          t[$y](),
          t.fillStyle = bp,
          t[Yg](),
          t[yp](12.208, 26.543, 2.208, 0, 6.283185307179586, !0),
          t[go](),
          t[Af](),
          t[Pf](),
          t[Ky](),
          t[$y](),
          t.fillStyle = vp,
          t.beginPath(),
          t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0),
          t[go](),
          t[Af](),
          t[Pf](),
          t.restore(),
          t[$y](),
          t[Fg] = bp,
          t[Yg](),
          t[F_](19.377, 17.247),
          t.bezierCurveTo(19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998),
          t.lineTo(5.882, 18.108999999999998),
          t[Sy](5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247),
          t.lineTo(5.02, 11.144),
          t[Sy](5.02, 10.666, 5.406, 10.281, 5.882, 10.281),
          t[z_](18.516, 10.281),
          t[Sy](18.993, 10.281, 19.377, 10.666, 19.377, 11.144),
          t[z_](19.377, 17.247),
          t[go](),
          t[Af](),
          t[Pf](),
          t[Ky](),
          t[$y](),
          t[$y](),
          t[Fg] = vp,
          t.beginPath(),
          t[F_](18.536, 13.176),
          t.bezierCurveTo(18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794),
          t[z_](6.479, 13.794),
          t.bezierCurveTo(6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176),
          t[z_](5.861, 11.84),
          t[Sy](5.861, 11.498, 6.137, 11.221, 6.479, 11.221),
          t[z_](17.918, 11.221),
          t[Sy](18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84),
          t[z_](18.535, 13.176),
          t.closePath(),
          t[Af](),
          t[Pf](),
          t[Ky](),
          t[$y](),
          t[Fg] = vp,
          t[Yg](),
          t[F_](18.536, 16.551),
          t[Sy](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997),
          t[z_](6.479, 17.168999999999997),
          t[Sy](6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551),
          t[z_](5.861, 15.215999999999998),
          t[Sy](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998),
          t[z_](17.918, 14.596999999999998),
          t[Sy](18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998),
          t[z_](18.535, 16.551),
          t.closePath(),
          t[Af](),
          t.stroke(),
          t[Ky](),
          t[Ky](),
          t[Ky]()
        }
      },
      exchanger2: {
        draw: function (t) {
          t[$y](),
          t[Vf](0, 0),
          t[Yg](),
          t[F_](0, 0),
          t[z_](40, 0),
          t[z_](40, 40),
          t[z_](0, 40),
          t.closePath(),
          t[Qg](),
          t[Vf](0, 0),
          t.translate(0, 0),
          t[yo](1, 1),
          t.translate(0, 0),
          t.strokeStyle = tp,
          t[Ng] = oy,
          t[Dg] = by,
          t[ip] = 4,
          t[$y](),
          t.save(),
          t[Ky](),
          t[$y](),
          t[Ky](),
          t[$y](),
          t[Ky](),
          t.save(),
          t.restore(),
          t[$y](),
          t[Ky](),
          t.save(),
          t.restore(),
          t[$y](),
          t.restore(),
          t.save(),
          t.restore(),
          t.save(),
          t.restore(),
          t.save(),
          t[Ky](),
          t[Ky](),
          t[$y]();
          var i = t[dg](.4102, 24.3613, 39.5898, 24.3613);
          i.addColorStop(0, np),
          i[vg](.0788, rp),
          i[vg](.2046, gp),
          i.addColorStop(.3649, pp),
          i[vg](.5432, xp),
          i[vg](.6798, Ep),
          i.addColorStop(.7462, mp),
          i.addColorStop(.8508, wp),
          i[vg](.98, ap),
          i[vg](1, Tp),
          t[Fg] = i,
          t[Yg](),
          t[F_](.41, 16.649),
          t.bezierCurveTo(.633, 19.767, .871, 20.689, 1.094, 23.807000000000002),
          t[Sy](1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002),
          t[Sy](10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523),
          t[Sy](26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004),
          t[Sy](38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005),
          t[Sy](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005),
          t[Sy](39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649),
          t[go](),
          t[Af](),
          t[Pf](),
          t[Ky](),
          t[$y](),
          t[$y](),
          t[Fg] = vp,
          t[Yg](),
          t.moveTo(16.4, 25.185),
          t.bezierCurveTo(12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705),
          t[Sy](3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999),
          t[Sy](1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998),
          t[Sy](11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998),
          t[Sy](22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998),
          t[Sy](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998),
          t[Sy](40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997),
          t.bezierCurveTo(33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996),
          t[Sy](23.289, 25.28, 19.824, 25.436, 16.4, 25.185),
          t.bezierCurveTo(13.529, 24.977, 19.286, 25.396, 16.4, 25.185),
          t[go](),
          t.fill(),
          t[Pf](),
          t[Ky](),
          t.restore(),
          t[$y](),
          t[$y](),
          t[$y](),
          t.save(),
          t.save(),
          t.fillStyle = kp,
          t[Yg](),
          t.moveTo(5.21, 21.754),
          t[z_](8.188, 17.922),
          t[z_](9.53, 18.75),
          t[z_](15.956, 16.004),
          t[z_](18.547, 17.523),
          t[z_](12.074, 20.334),
          t[z_](13.464, 21.204),
          t.lineTo(5.21, 21.754),
          t[go](),
          t[Af](),
          t.stroke(),
          t[Ky](),
          t.restore(),
          t[Ky](),
          t[$y](),
          t[$y](),
          t[$y](),
          t[Fg] = kp,
          t.beginPath(),
          t[F_](17.88, 14.61),
          t[z_](9.85, 13.522),
          t[z_](11.703, 12.757),
          t.lineTo(7.436, 10.285),
          t[z_](10.783, 8.942),
          t[z_](15.091, 11.357),
          t[z_](16.88, 10.614),
          t[z_](17.88, 14.61),
          t.closePath(),
          t.fill(),
          t[Pf](),
          t[Ky](),
          t[Ky](),
          t[$y](),
          t[$y](),
          t[Fg] = kp,
          t[Yg](),
          t[F_](17.88, 14.61),
          t.lineTo(9.85, 13.522),
          t[z_](11.703, 12.757),
          t.lineTo(7.436, 10.285),
          t.lineTo(10.783, 8.942),
          t[z_](15.091, 11.357),
          t[z_](16.88, 10.614),
          t[z_](17.88, 14.61),
          t[go](),
          t.fill(),
          t[Pf](),
          t[Ky](),
          t[Ky](),
          t.restore(),
          t[$y](),
          t.save(),
          t.save(),
          t[Fg] = kp,
          t.beginPath(),
          t.moveTo(23.556, 15.339),
          t.lineTo(20.93, 13.879),
          t[z_](26.953, 11.304),
          t.lineTo(25.559, 10.567),
          t[z_](33.251, 9.909),
          t[z_](31.087, 13.467),
          t[z_](29.619, 12.703),
          t[z_](23.556, 15.339),
          t.closePath(),
          t[Af](),
          t[Pf](),
          t.restore(),
          t[Ky](),
          t.restore(),
          t[$y](),
          t[$y](),
          t.save(),
          t[Fg] = kp,
          t[Yg](),
          t.moveTo(30.028, 23.383),
          t.lineTo(24.821, 20.366),
          t.lineTo(22.915, 21.227),
          t[z_](21.669, 16.762),
          t[z_](30.189, 17.942),
          t.lineTo(28.33, 18.782),
          t[z_](33.579, 21.725),
          t[z_](30.028, 23.383),
          t.closePath(),
          t[Af](),
          t[Pf](),
          t[Ky](),
          t[Ky](),
          t[$y](),
          t[$y](),
          t.fillStyle = kp,
          t[Yg](),
          t[F_](30.028, 23.383),
          t[z_](24.821, 20.366),
          t[z_](22.915, 21.227),
          t[z_](21.669, 16.762),
          t[z_](30.189, 17.942),
          t[z_](28.33, 18.782),
          t[z_](33.579, 21.725),
          t.lineTo(30.028, 23.383),
          t[go](),
          t[Af](),
          t.stroke(),
          t[Ky](),
          t.restore(),
          t[Ky](),
          t[Ky](),
          t[Ky](),
          t[Ky]()
        }
      },
      exchanger: {
        draw: function (t) {
          t[$y](),
          t.translate(0, 0),
          t[Yg](),
          t[F_](0, 0),
          t.lineTo(40, 0),
          t.lineTo(40, 40),
          t[z_](0, 40),
          t[go](),
          t[Qg](),
          t[Vf](0, 0),
          t.translate(0, 0),
          t.scale(1, 1),
          t[Vf](0, 0),
          t.strokeStyle = tp,
          t[Ng] = oy,
          t.lineJoin = by,
          t.miterLimit = 4,
          t.save(),
          t.save(),
          t[Ky](),
          t[$y](),
          t[Ky](),
          t[$y](),
          t.restore(),
          t.save(),
          t[Ky](),
          t[$y](),
          t.restore(),
          t.save(),
          t.restore(),
          t[$y](),
          t[Ky](),
          t[Ky](),
          t[$y]();
          var i = t.createLinearGradient(.2095, 20.7588, 39.4941, 20.7588);
          i[vg](0, Op),
          i.addColorStop(.0788, Mp),
          i.addColorStop(.352, Sp),
          i.addColorStop(.6967, jp),
          i[vg](.8916, Ip),
          i[vg](.9557, Pp),
          i[vg](1, Ap),
          t[Fg] = i,
          t.beginPath(),
          t[F_](39.449, 12.417),
          t.lineTo(39.384, 9.424),
          t.bezierCurveTo(39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024),
          t[Sy](-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002),
          t.bezierCurveTo(.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437),
          t.bezierCurveTo(1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094),
          t[Sy](8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089),
          t[Sy](23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996),
          t[Sy](34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997),
          t[Sy](37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997),
          t[z_](37.711, 30.316999999999997),
          t[z_](39.281, 16.498999999999995),
          t[Sy](39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994),
          t[Sy](39.515, 14.105, 39.449, 12.417, 39.449, 12.417),
          t.closePath(),
          t[Af](),
          t[Pf](),
          t.restore(),
          t.save(),
          t.save(),
          t[$y](),
          t.save(),
          t[Ky](),
          t[$y](),
          t[Ky](),
          t[$y](),
          t[Ky](),
          t.save(),
          t[Ky](),
          t[$y](),
          t[Ky](),
          t.save(),
          t[Ky](),
          t[$y](),
          t[Ky](),
          t[$y](),
          t.restore(),
          t[$y](),
          t[Ky](),
          t[Ky](),
          t[$y]();
          var i = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
          i[vg](0, Cp),
          i[vg](.1455, Lp),
          i[vg](.2975, Rp),
          i[vg](.4527, Np),
          i.addColorStop(.6099, Dp),
          i.addColorStop(.7687, $p),
          i[vg](.9268, Bp),
          i[vg](.9754, Fp),
          i.addColorStop(1, Gp),
          t.fillStyle = i,
          t[Yg](),
          t[F_](33.591, 24.763),
          t[Sy](23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003),
          t[Sy](3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003),
          t.bezierCurveTo(1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004),
          t[Sy](4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004),
          t[Sy](6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004),
          t[Sy](16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005),
          t[Sy](30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004),
          t.bezierCurveTo(36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005),
          t[Sy](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005),
          t.bezierCurveTo(39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005),
          t[Sy](38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005),
          t.bezierCurveTo(37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007),
          t.bezierCurveTo(37.151, 24.271, 35.264, 24.77, 33.591, 24.763),
          t.closePath(),
          t.fill(),
          t.stroke(),
          t[Ky](),
          t[Ky](),
          t.restore(),
          t[$y](),
          t.save(),
          t[$y](),
          t[Fg] = kp,
          t[Yg](),
          t[F_](10.427, 19.292),
          t[z_](5.735, 16.452),
          t[z_](12.58, 13.8),
          t[z_](12.045, 15.07),
          t[z_](20.482, 15.072),
          t[z_](19.667, 17.887),
          t[z_](11.029, 17.851),
          t[z_](10.427, 19.292),
          t.closePath(),
          t[Af](),
          t[Pf](),
          t[Ky](),
          t[Ky](),
          t[$y](),
          t[$y](),
          t[Fg] = kp,
          t[Yg](),
          t.moveTo(13.041, 13.042),
          t.lineTo(8.641, 10.73),
          t.lineTo(14.82, 8.474),
          t[z_](14.373, 9.537),
          t[z_](22.102, 9.479),
          t[z_](21.425, 11.816),
          t[z_](13.54, 11.85),
          t.lineTo(13.041, 13.042),
          t[go](),
          t.fill(),
          t[Pf](),
          t[Ky](),
          t[Ky](),
          t[$y](),
          t[$y](),
          t.fillStyle = kp,
          t[Yg](),
          t[F_](29.787, 16.049),
          t[z_](29.979, 14.704),
          t.lineTo(21.51, 14.706),
          t[z_](22.214, 12.147),
          t.lineTo(30.486, 12.116),
          t.lineTo(30.653, 10.926),
          t[z_](36.141, 13.4),
          t[z_](29.787, 16.049),
          t.closePath(),
          t[Af](),
          t.stroke(),
          t[Ky](),
          t[Ky](),
          t[$y](),
          t.save(),
          t.fillStyle = kp,
          t[Yg](),
          t[F_](28.775, 23.14),
          t[z_](29.011, 21.49),
          t[z_](19.668, 21.405),
          t.lineTo(20.523, 18.295),
          t[z_](29.613, 18.338),
          t.lineTo(29.815, 16.898),
          t.lineTo(35.832, 19.964),
          t[z_](28.775, 23.14),
          t[go](),
          t[Af](),
          t[Pf](),
          t[Ky](),
          t[Ky](),
          t[Ky](),
          t[Ky]()
        }
      },
      cloud: {
        draw: function (t) {
          t[$y](),
          t[Yg](),
          t[F_](0, 0),
          t.lineTo(90.75, 0),
          t.lineTo(90.75, 62.125),
          t.lineTo(0, 62.125),
          t[go](),
          t.clip(),
          t[qy] = tp,
          t.lineCap = oy,
          t[Dg] = by,
          t[ip] = 4,
          t[$y]();
          var i = t[dg](44.0054, 6.4116, 44.0054, 51.3674);
          i[vg](0, "rgba(159, 160, 160, 0.7)"),
          i[vg](.9726, zp),
          t.fillStyle = i,
          t[Yg](),
          t[F_](57.07, 20.354),
          t[Sy](57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358),
          t[Sy](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001),
          t[Sy](33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003),
          t[Sy](18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004),
          t[Sy](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49),
          t[Sy](29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961),
          t[Sy](34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995),
          t[Sy](43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994),
          t[Sy](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999),
          t[Sy](66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999),
          t[Sy](73.986, 27.436, 66.413, 20.354, 57.07, 20.354),
          t[go](),
          t[Af](),
          t[Pf](),
          t.restore(),
          t[Ky]()
        }
      },
      node: {
        width: 60,
        height: 100,
        draw: function (t) {
          t[$y](),
          t[Vf](0, 0),
          t[Yg](),
          t[F_](0, 0),
          t[z_](40, 0),
          t[z_](40, 40),
          t[z_](0, 40),
          t[go](),
          t.clip(),
          t[Vf](0, 0),
          t[Vf](0, 0),
          t.scale(1, 1),
          t[Vf](0, 0),
          t[qy] = tp,
          t[Ng] = oy,
          t[Dg] = by,
          t[ip] = 4,
          t[$y](),
          t[Fg] = Yp,
          t[Yg](),
          t[F_](13.948, 31.075),
          t.lineTo(25.914, 31.075),
          t.quadraticCurveTo(25.914, 31.075, 25.914, 31.075),
          t[z_](25.914, 34.862),
          t[My](25.914, 34.862, 25.914, 34.862),
          t[z_](13.948, 34.862),
          t[My](13.948, 34.862, 13.948, 34.862),
          t[z_](13.948, 31.075),
          t.quadraticCurveTo(13.948, 31.075, 13.948, 31.075),
          t[go](),
          t[Af](),
          t.stroke(),
          t[Ky](),
          t.save(),
          t.fillStyle = Hp,
          t.beginPath(),
          t[F_](29.679, 35.972),
          t.bezierCurveTo(29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244),
          t[z_](11.456, 37.244),
          t.bezierCurveTo(10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972),
          t[z_](10.183, 36.136),
          t[Sy](10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863),
          t[z_](28.407, 34.863),
          t.bezierCurveTo(29.11, 34.863, 29.678, 35.431, 29.678, 36.136),
          t[z_](29.678, 35.972),
          t.closePath(),
          t[Af](),
          t[Pf](),
          t.restore(),
          t[$y](),
          t.fillStyle = Hp,
          t.beginPath(),
          t[F_](.196, 29.346),
          t[Sy](.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075),
          t[z_](37.936, 31.075),
          t[Sy](38.891, 31.075, 39.665, 30.301, 39.665, 29.346),
          t[z_](39.665, 27.174),
          t[z_](.196, 27.174),
          t.lineTo(.196, 29.346),
          t[go](),
          t[Af](),
          t.stroke(),
          t[Ky](),
          t[$y](),
          t[Fg] = qp,
          t[Yg](),
          t[F_](37.937, 3.884),
          t.lineTo(1.926, 3.884),
          t.bezierCurveTo(.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614),
          t[z_](.19699999999999984, 27.12),
          t[z_](39.666000000000004, 27.12),
          t[z_](39.666000000000004, 5.615),
          t[Sy](39.665, 4.657, 38.892, 3.884, 37.937, 3.884),
          t[go](),
          t.fill(),
          t.stroke(),
          t[Ky](),
          t.save(),
          t.save(),
          t[Ky](),
          t[$y](),
          t.restore(),
          t.restore(),
          t[$y]();
          var i = t.createLinearGradient(6.9609, 2.9341, 32.9008, 28.874);
          i[vg](0, Up),
          i[vg](1, Wp),
          t[Fg] = i,
          t[Yg](),
          t[F_](35.788, 6.39),
          t[z_](4.074, 6.39),
          t.bezierCurveTo(3.315, 6.39, 2.702, 7.003, 2.702, 7.763),
          t[z_](2.702, 24.616),
          t.lineTo(37.159, 24.616),
          t[z_](37.159, 7.763),
          t.bezierCurveTo(37.159, 7.003, 36.546, 6.39, 35.788, 6.39),
          t.closePath(),
          t[Af](),
          t[Pf](),
          t.restore(),
          t[Ky]()
        }
      },
      group: {
        draw: function (t) {
          t[$y](),
          t.translate(0, 0),
          t[Yg](),
          t.moveTo(0, 0),
          t[z_](47.75, 0),
          t.lineTo(47.75, 40),
          t.lineTo(0, 40),
          t[go](),
          t[Qg](),
          t.translate(0, 0),
          t[Vf](0, 0),
          t[yo](1, 1),
          t.translate(0, 0),
          t.strokeStyle = tp,
          t.lineCap = oy,
          t[Dg] = by,
          t[ip] = 4,
          t[$y](),
          t[$y](),
          t.fillStyle = Yp,
          t.beginPath(),
          t[F_](10.447, 26.005),
          t[z_](18.847, 26.005),
          t[My](18.847, 26.005, 18.847, 26.005),
          t.lineTo(18.847, 28.663),
          t[My](18.847, 28.663, 18.847, 28.663),
          t.lineTo(10.447, 28.663),
          t[My](10.447, 28.663, 10.447, 28.663),
          t[z_](10.447, 26.005),
          t[My](10.447, 26.005, 10.447, 26.005),
          t[go](),
          t[Af](),
          t[Pf](),
          t[Ky](),
          t[$y](),
          t[Fg] = Hp,
          t[Yg](),
          t.moveTo(21.491, 29.443),
          t[Sy](21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338),
          t[z_](8.698, 30.338),
          t[Sy](8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443),
          t[z_](7.8020000000000005, 29.557000000000002),
          t[Sy](7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003),
          t[z_](20.597, 28.662000000000003),
          t.bezierCurveTo(21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002),
          t[z_](21.491, 29.443),
          t[go](),
          t[Af](),
          t[Pf](),
          t.restore(),
          t[$y](),
          t.fillStyle = Hp,
          t[Yg](),
          t.moveTo(.789, 24.79),
          t[Sy](.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005),
          t.lineTo(27.289, 26.005),
          t.bezierCurveTo(27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79),
          t.lineTo(28.504, 23.267),
          t[z_](.789, 23.267),
          t.lineTo(.789, 24.79),
          t[go](),
          t[Af](),
          t[Pf](),
          t.restore(),
          t.save(),
          t[Fg] = qp,
          t[Yg](),
          t[F_](27.289, 6.912),
          t[z_](2.006, 6.912),
          t[Sy](1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126),
          t.lineTo(.7889999999999997, 23.227),
          t[z_](28.503999999999998, 23.227),
          t[z_](28.503999999999998, 8.126),
          t[Sy](28.504, 7.455, 27.961, 6.912, 27.289, 6.912),
          t[go](),
          t[Af](),
          t[Pf](),
          t[Ky](),
          t[$y](),
          t.save(),
          t.restore(),
          t[$y](),
          t.restore(),
          t.restore(),
          t[$y]();
          var i = t[dg](5.54, 6.2451, 23.7529, 24.458);
          i[vg](0, Up),
          i[vg](1, Wp),
          t.fillStyle = i,
          t.beginPath(),
          t[F_](25.78, 8.671),
          t[z_](3.514, 8.671),
          t.bezierCurveTo(2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635),
          t[z_](2.549, 21.466),
          t.lineTo(26.743, 21.466),
          t[z_](26.743, 9.636),
          t[Sy](26.743, 9.102, 26.312, 8.671, 25.78, 8.671),
          t.closePath(),
          t[Af](),
          t.stroke(),
          t[Ky](),
          t[Ky](),
          t[$y](),
          t[$y](),
          t[Fg] = Yp,
          t[Yg](),
          t[F_](27.053, 33.602),
          t.lineTo(36.22, 33.602),
          t[My](36.22, 33.602, 36.22, 33.602),
          t.lineTo(36.22, 36.501),
          t.quadraticCurveTo(36.22, 36.501, 36.22, 36.501),
          t[z_](27.053, 36.501),
          t[My](27.053, 36.501, 27.053, 36.501),
          t.lineTo(27.053, 33.602),
          t[My](27.053, 33.602, 27.053, 33.602),
          t[go](),
          t[Af](),
          t.stroke(),
          t[Ky](),
          t.save(),
          t[Fg] = Hp,
          t[Yg](),
          t[F_](39.104, 37.352),
          t[Sy](39.104, 37.891, 38.67, 38.327, 38.13, 38.327),
          t[z_](25.143, 38.327),
          t[Sy](24.602, 38.327, 24.166, 37.891, 24.166, 37.352),
          t.lineTo(24.166, 37.477999999999994),
          t[Sy](24.166, 36.937, 24.602, 36.501, 25.143, 36.501),
          t.lineTo(38.131, 36.501),
          t[Sy](38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994),
          t[z_](39.105, 37.352),
          t[go](),
          t[Af](),
          t.stroke(),
          t.restore(),
          t.save(),
          t[Fg] = Hp,
          t[Yg](),
          t.moveTo(16.514, 32.275),
          t[Sy](16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601),
          t.lineTo(45.433, 33.601),
          t.bezierCurveTo(46.166, 33.601, 46.758, 33.005, 46.758, 32.275),
          t[z_](46.758, 30.607999999999997),
          t[z_](16.514, 30.607999999999997),
          t.lineTo(16.514, 32.275),
          t[go](),
          t[Af](),
          t.stroke(),
          t[Ky](),
          t.save(),
          t[Fg] = qp,
          t[Yg](),
          t.moveTo(45.433, 12.763),
          t.lineTo(17.839, 12.763),
          t[Sy](17.107, 12.763, 16.514, 13.356, 16.514, 14.089),
          t[z_](16.514, 30.57),
          t[z_](46.757999999999996, 30.57),
          t.lineTo(46.757999999999996, 14.088),
          t.bezierCurveTo(46.758, 13.356, 46.166, 12.763, 45.433, 12.763),
          t[go](),
          t[Af](),
          t.stroke(),
          t[Ky](),
          t.save(),
          t[$y](),
          t[Ky](),
          t.save(),
          t[Ky](),
          t.restore(),
          t.save(),
          i = t[dg](21.6973, 12.0352, 41.5743, 31.9122),
          i.addColorStop(0, Up),
          i[vg](1, Wp),
          t.fillStyle = i,
          t[Yg](),
          t.moveTo(43.785, 14.683),
          t[z_](19.486, 14.683),
          t.bezierCurveTo(18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735),
          t[z_](18.433, 28.649),
          t.lineTo(44.837, 28.649),
          t[z_](44.837, 15.734),
          t[Sy](44.838, 15.153, 44.367, 14.683, 43.785, 14.683),
          t.closePath(),
          t.fill(),
          t.stroke(),
          t[Ky](),
          t[Ky](),
          t[$y](),
          t[Xp] = .5,
          t[Yg](),
          t[F_](23.709, 36.33),
          t[z_](4.232, 36.33),
          t.lineTo(4.232, 27.199),
          t[z_](5.304, 27.199),
          t[z_](5.304, 35.259),
          t[z_](23.709, 35.259),
          t.lineTo(23.709, 36.33),
          t[go](),
          t[Af](),
          t[Pf](),
          t[Ky](),
          t[Ky]()
        }
      },
      subnetwork: {
        draw: function (t) {
          t[$y](),
          t[Vf](0, 0),
          t[Yg](),
          t.moveTo(0, 0),
          t[z_](60.75, 0),
          t[z_](60.75, 42.125),
          t.lineTo(0, 42.125),
          t.closePath(),
          t.clip(),
          t[Vf](0, .26859504132231393),
          t[yo](.6694214876033058, .6694214876033058),
          t[Vf](0, 0),
          t.strokeStyle = tp,
          t[Ng] = oy,
          t.lineJoin = by,
          t[ip] = 4,
          t[$y](),
          t[$y](),
          t[Ky](),
          t.save(),
          t.restore(),
          t.restore(),
          t[$y]();
          var i = t[dg](43.6724, -2.7627, 43.6724, 59.3806);
          i[vg](0, "rgba(159, 160, 160, 0.7)"),
          i[vg](.9726, zp),
          t.fillStyle = i,
          t[Yg](),
          t[F_](61.732, 16.509),
          t[Sy](61.686, 16.509, 61.644, 16.515, 61.599, 16.515),
          t[Sy](58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006),
          t[Sy](29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415),
          t[Sy](9.09, 20.566, 2.229, 28.136, 2.229, 37.326),
          t[Sy](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006),
          t[Sy](23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001),
          t[Sy](31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001),
          t[Sy](42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001),
          t[Sy](51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014),
          t[Sy](74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001),
          t[Sy](85.116, 26.298, 74.646, 16.509, 61.732, 16.509),
          t[go](),
          t.fill(),
          t[Pf](),
          t[Ky](),
          t.save(),
          t[$y](),
          t[Fg] = Yp,
          t[Yg](),
          t.moveTo(34.966, 44.287),
          t[z_](45.112, 44.287),
          t[My](45.112, 44.287, 45.112, 44.287),
          t[z_](45.112, 47.497),
          t[My](45.112, 47.497, 45.112, 47.497),
          t[z_](34.966, 47.497),
          t[My](34.966, 47.497, 34.966, 47.497),
          t[z_](34.966, 44.287),
          t[My](34.966, 44.287, 34.966, 44.287),
          t[go](),
          t.fill(),
          t[Pf](),
          t.restore(),
          t[$y](),
          t[Fg] = Vp,
          t[Yg](),
          t[F_](48.306, 48.439),
          t[Sy](48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52),
          t[z_](32.854, 49.52),
          t.bezierCurveTo(32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439),
          t[z_](31.771, 48.578),
          t[Sy](31.771, 47.981, 32.253, 47.497, 32.854, 47.497),
          t[z_](47.226, 47.497),
          t[Sy](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578),
          t[z_](48.306, 48.439),
          t[go](),
          t[Af](),
          t[Pf](),
          t[Ky](),
          t[$y](),
          t.fillStyle = Kp,
          t.beginPath(),
          t.moveTo(23.302, 42.82),
          t[Sy](23.302, 43.63, 23.96, 44.287, 24.772, 44.287),
          t[z_](55.308, 44.287),
          t.bezierCurveTo(56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82),
          t[z_](56.775, 40.98),
          t.lineTo(23.302, 40.98),
          t[z_](23.302, 42.82),
          t[go](),
          t.fill(),
          t.stroke(),
          t.restore(),
          t.save(),
          t[Fg] = qp,
          t.beginPath(),
          t[F_](55.307, 21.229),
          t.lineTo(24.771, 21.229),
          t[Sy](23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695),
          t[z_](23.301000000000002, 40.933),
          t[z_](56.774, 40.933),
          t.lineTo(56.774, 22.695),
          t.bezierCurveTo(56.774, 21.884, 56.119, 21.229, 55.307, 21.229),
          t.closePath(),
          t[Af](),
          t[Pf](),
          t[Ky](),
          t[$y](),
          t[$y](),
          t.restore(),
          t[$y](),
          t.restore(),
          t[Ky](),
          t[$y](),
          i = t[dg](29.04, 20.4219, 51.0363, 42.4181),
          i[vg](0, Up),
          i[vg](1, Wp),
          t[Fg] = i,
          t[Yg](),
          t.moveTo(53.485, 23.353),
          t[z_](26.592, 23.353),
          t[Sy](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003),
          t[z_](25.427, 38.807),
          t[z_](54.647, 38.807),
          t[z_](54.647, 24.517000000000003),
          t[Sy](54.648, 23.873, 54.127, 23.353, 53.485, 23.353),
          t[go](),
          t[Af](),
          t.stroke(),
          t[Ky](),
          t[Ky](),
          t[Ky]()
        }
      }
    };
  for (var oB in fB) mn(Zp + oB, fB[oB]);
  var _B = function () {
      this.$invalidateRotate = !1;
      var t = this._ex;
      t[nf]();
      var i = this._7r.x + this[Io] / 2,
        n = this._7r.y + this[Io] / 2,
        e = this._7r[sf] - this[Io],
        s = this._7r.height - this[Io],
        h = qn[zh](this, {
          x: i,
          y: n
        });
      Vn(t, h.x, h.y, !0),
      h = qn.call(this, {
          x: i + e,
          y: n
        }),
      Vn(t, h.x, h.y),
      h = qn[zh](this, {
          x: i + e,
          y: n + s
        }),
      Vn(t, h.x, h.y),
      h = qn[zh](this, {
          x: i,
          y: n + s
        }),
      Vn(t, h.x, h.y),
      this.__m4Pointer && (h = qn.call(this, {
          x: this._pointerX,
          y: this._pointerY
        }), Vn(t, h.x, h.y)),
      this[Io] && t.grow(this[Io] / 2)
    },
    cB = 20,
    uB = {
      _fx: !1,
      _j4: null,
      _n9z: 0,
      _l1: -1,
      _l5: null,
      _d6: function (t) {
        this._j4 || (this._j4 = [], this._jv = B$),
        this._j4[Ea](t),
        this._da(),
        this._kg()
      },
      _kg: function () {
        if (!this._l5) {
          var t = this;
          this._l5 = setTimeout(function i() {
            return t._da() !== !1 ? void(t._l5 = setTimeout(i, t._gn())) : void delete t._l5
          }, this._gn())
        }
      },
      _gn: function () {
        return Math.max(cB, this._j4[this._l1][Jp])
      },
      _da: function () {
        return this._gk(this._l1 + 1)
      },
      _gk: function (t) {
        if (this._fx) t %= this._n9z;
        else if (t >= this._j4[Gh]) return !1;
        if (this._l1 == t) return !1;
        this._l1 = t;
        var i = this._j4[this._l1],
          n = i._n9ache;
        return n || (i._n9ache = n = Gi(this[sf], this[tf]), n.g[uo](i.data, 0, 0), n._pixels = i._pixels),
        this._kh = n,
        this[ko] = !0,
        this._db()
      },
      _n9v: function () {
        return this._j4 ? (this._fx = !0, this._n9z = this._j4.length, 1 == this._n9z ? this._db() : void this._kg()) : void this._h9()
      },
      _ly: function () {
        this._l5 && (clearTimeout(this._l5), delete this._l5)
      },
      _db: function () {
        var t = this._dispatcher[Cl];
        if (!t || !t.length) return !1;
        for (var i = new BD(this, hg, rg, this._kh), n = 0, e = t.length; e > n; n++) {
          var s = t[n];
          s[Pl]._j0 && s[Pl]._j0._i0ed ? (t[Uh](n, 1), n--, e--) : s[wr][zh](s[Pl], i)
        }
        return t[Gh] > 0
      },
      _n84: function (t, i) {
        this._dispatcher[sd](t, i),
        this._fx && !this._l5 && this._kg()
      },
      _66: function (t, i) {
        this._dispatcher[Ll](t, i),
        this._dispatcher._n7n() || this._ly()
      },
      _i0: function () {
        this._ly(),
        this._dispatcher[nf]()
      },
      _ey: function () {
        var t = this._kh._n8ufferedImage;
        return t || (this._kh._n8ufferedImage = t = new rB(this._kh, 1)),
        t
      }
    },
    dB = function (t) {
      return t[Qp](function (t, i) {
        return 2 * t + i
      }, 0)
    },
    lB = function (t) {
      for (var i = [], n = 7; n >= 0; n--) i.push( !! (t & 1 << n));
      return i
    },
    vB = function (t) {
      this.data = t,
      this[tx] = this.data.length,
      this[ix] = 0,
      this[nx] = function () {
        if (this[ix] >= this[Cf].length) throw new Error("Attempted to read past end of stream.");
        return 255 & t[c_](this[ix]++)
      },
      this[ex] = function (t) {
        for (var i = [], n = 0; t > n; n++) i[Ea](this[nx]());
        return i
      },
      this[sx] = function (t) {
        for (var i = "", n = 0; t > n; n++) i += String.fromCharCode(this[nx]());
        return i
      },
      this[hx] = function () {
        var t = this[ex](2);
        return (t[1] << 8) + t[0]
      }
    },
    bB = function (t, i) {
      for (var n, e, s = 0, h = function (t) {
        for (var n = 0, e = 0; t > e; e++) i.charCodeAt(s >> 3) & 1 << (7 & s) && (n |= 1 << e),
        s++;
        return n
      }, r = [], a = 1 << t, f = a + 1, o = t + 1, _ = [], c = function () {
        _ = [],
        o = t + 1;
        for (var i = 0; a > i; i++) _[i] = [i];
        _[a] = [],
        _[f] = null
      };;) if (e = n, n = h(o), n !== a) {
        if (n === f) break;
        if (n < _[Gh]) e !== a && _[Ea](_[e][Wh](_[n][0]));
        else {
          if (n !== _.length) throw new Error(rx);
          _[Ea](_[e][Wh](_[e][0]))
        }
        r[Ea][br](r, _[n]),
        _[Gh] === 1 << o && 12 > o && o++
      } else c();
      return r
    },
    yB = function (t, i) {
      i || (i = {});
      var n = function (i) {
        for (var n = [], e = 0; i > e; e++) n.push(t[ex](3));
        return n
      },
        e = function () {
          var i, n;
          n = "";
          do i = t[nx](),
          n += t[sx](i);
          while (0 !== i);
          return n
        },
        s = function () {
          var e = {};
          if (e[ax] = t[sx](3), e[fx] = t[sx](3), ox !== e[ax]) throw new Error(_x);
          e[sf] = t[hx](),
          e[tf] = t[hx]();
          var s = lB(t[nx]());
          e.gctFlag = s[cx](),
          e[ux] = dB(s[Uh](0, 3)),
          e[dx] = s[cx](),
          e[lx] = dB(s[Uh](0, 3)),
          e[vx] = t[nx](),
          e.pixelAspectRatio = t.readByte(),
          e.gctFlag && (e.gct = n(1 << e[lx] + 1)),
          i.hdr && i.hdr(e)
        },
        h = function (n) {
          var s = function (n) {
            var e = (t[nx](), lB(t[nx]()));
            n[bx] = e[Uh](0, 3),
            n.disposalMethod = dB(e[Uh](0, 3)),
            n[yx] = e.shift(),
            n[gx] = e.shift(),
            n[Zo] = t[hx](),
            n[Ko] = t[nx](),
            n[px] = t.readByte(),
            i[xx] && i[xx](n)
          },
            h = function (t) {
              t[Ex] = e(),
              i.com && i.com(t)
            },
            r = function (n) {
              t.readByte(),
              n[mx] = t.readBytes(12),
              n[wx] = e(),
              i[Tx] && i[Tx](n)
            },
            a = function (n) {
              var s = function (n) {
                t[nx](),
                n[kx] = t[nx](),
                n.iterations = t[hx](),
                n[px] = t[nx](),
                i[Ox] && i[Ox][Mx] && i.app[Mx](n)
              },
                h = function (t) {
                  t.appData = e(),
                  i.app && i[Ox][t.identifier] && i[Ox][t.identifier](t)
                };
              switch (t[nx](), n[Sx] = t[sx](8), n[jx] = t.read(3), n[Sx]) {
                case "NETSCAPE":
                  s(n);
                  break;
                default:
                  h(n)
                }
            },
            f = function (t) {
              t.data = e(),
              i[kx] && i[kx](t)
            };
          switch (n[Ix] = t.readByte(), n.label) {
            case 249:
              n.extType = xx,
              s(n);
              break;
            case 254:
              n.extType = Px,
              h(n);
              break;
            case 1:
              n.extType = Tx,
              r(n);
              break;
            case 255:
              n[Ax] = Ox,
              a(n);
              break;
            default:
              n[Ax] = kx,
              f(n)
            }
        },
        r = function (s) {
          var h = function (t, i) {
            for (var n = new Array(t[Gh]), e = t[Gh] / i, s = function (e, s) {
              var h = t.slice(s * i, (s + 1) * i);
              n.splice.apply(n, [e * i, i][Wh](h))
            }, h = [0, 4, 2, 1], r = [8, 8, 4, 2], a = 0, f = 0; 4 > f; f++) for (var o = h[f]; e > o; o += r[f]) s(o, a),
            a++;
            return n
          };
          s[n_] = t[hx](),
          s[h_] = t.readUnsigned(),
          s.width = t[hx](),
          s[tf] = t.readUnsigned();
          var r = lB(t[nx]());
          s[Qo] = r[cx](),
          s[Cx] = r.shift(),
          s[dx] = r[cx](),
          s.reserved = r[Uh](0, 2),
          s.lctSize = dB(r.splice(0, 3)),
          s[Qo] && (s[t_] = n(1 << s[Lx] + 1)),
          s[Rx] = t.readByte();
          var a = e();
          s[e_] = bB(s[Rx], a),
          s[Cx] && (s[e_] = h(s[e_], s[sf])),
          i.img && i.img(s)
        },
        a = function () {
          var n = {};
          switch (n.sentinel = t.readByte(), String[d_](n[Nx])) {
          case "!":
            n.type = Dx,
            h(n);
            break;
          case ",":
            n[Df] = fu,
            r(n);
            break;
          case ";":
            n[Df] = $x,
            i[$x] && i[$x](n);
            break;
          default:
            throw new Error(Bx + n.sentinel.toString(16))
          }
          $x !== n.type && setTimeout(a, 0)
        },
        f = function () {
          s(),
          setTimeout(a, 0)
        };
      f()
    },
    gB = "";
  i[xv] && i[xv](Fx, function (t) {
      if (t[Da] && t.shiftKey && t[Gx] && 73 == t[zx]) {
        var i = w$.name + Yx + w$.version + Hx + w$[qx] + gf + w$.about + gf + w$[Ux] + gB;
        w$.alert(i)
      }
    }, !1);
  var pB = Wx;
  gB = Xx + decodeURIComponent(Vx);
  var xB, EB, mB, wB = t,
    TB = Kx,
    kB = Zx,
    OB = Jx,
    MB = Qx,
    SB = tE,
    jB = iE,
    IB = nE,
    PB = eE,
    AB = sE,
    CB = hE,
    LB = rE,
    RB = aE,
    NB = fE,
    DB = oE,
    $B = _E,
    BB = cE,
    FB = uE,
    GB = dE,
    zB = lE,
    YB = vE,
    HB = bE,
    qB = wB[MB + yE];
  qB && (EB = wB[DB + gE][SB + pE], qB[zh](wB, ne, BB), qB[zh](wB, ee, zB), qB[zh](wB, function () {
      WB && WB == pB && (eF = !1)
    }, FB));
  var UB, WB, XB, VB = 111,
    KB = function (t, i) {
      i || (i = xE + kB + EE);
      try {
        mB[zh](t, i, 6 * VB, 1 * VB)
      } catch (n) {}
    },
    ZB = !0,
    JB = !0,
    QB = !0,
    tF = !0,
    iF = !0,
    nF = !0,
    eF = !0,
    sF = lD ? 200 : 1024,
    hF = function (t, i) {
      return ie ? ie(t, i) || "" : void 0
    };
  if (i.createElement) {
      var rF = i[cf](mE);
      rF[Qr][wE] = gu,
      rF.onload = function (t) {
        var i = t[_c][TE],
          n = EB;
        if ("" === n || kE == n || OE == n) return void this.parentNode.parentNode.removeChild(this.parentNode);
        var e = i.String[d_];
        i[MB + yE](function () {
            te(e) != UB && (bF[yr]._j3 = null)
          }, zB),
        this[Py].parentNode[av](this[Py])
      };
      var aF = i[cf](ru);
      aF.style.width = wu,
      aF[Qr].height = wu,
      aF[Qr][ME] = yu,
      aF.appendChild(rF),
      i[td][lu](aF)
    }
  if (i[$B + SE]) {
      var fF = i[$B + SE](AB + jE);
      fF[Qr].display = gu,
      fF.onload = function (t) {
        var i = IE,
          n = t[_c][i + PE];
        xB = n[AE][qa]();
        var e = n[CB + LB + CE + RB + LE][NB + Df];
        mB = e[TB + RE],
        fD && (n = wB);
        var s = n[MB + yE];
        s.call(wB, ae, zB),
        s[zh](wB, fe, YB),
        s[zh](wB, _e, HB),
        s[zh](wB, ce, FB),
        s[zh](wB, se, GB),
        s.call(wB, re, HB),
        s[zh](wB, oe, zB),
        s[zh](wB, he, zB),
        this[Py][Py][av](this.parentNode)
      };
      var aF = i[cf](ru);
      aF[Qr].width = wu,
      aF.style[tf] = wu,
      aF[Qr].overflow = yu,
      aF.appendChild(fF),
      i[td][lu](aF)
    }
  var oF = function (t, i, n, e) {
      this[Zf] = t,
      this[cl] = i,
      this[El] = e,
      this[Or] = n,
      this[vl] = T$[bc]
    };
  N(oF, FD);
  var _F = function (t) {
      this.id = ++QN,
      this._n8r = {},
      this._iq = {},
      t && (this[NE] = t)
    };
  _F[yr] = {
      _iq: null,
      getStyle: function (t) {
        return this._iq[t]
      },
      setStyle: function (t, i) {
        var n = this._iq[t];
        return n === i || n && i && n[Al] && n[Al](i) ? !1 : this._n72(t, i, new oF(this, t, i, n), this._iq)
      },
      putStyles: function (t, i) {
        for (var n in t) {
          var e = t[n];
          i ? this._iq[n] = e : this[yc](n, e)
        }
      },
      _$t: !0,
      invalidateVisibility: function (t) {
        this._$t = !0,
        t || (this instanceof uF && this[DE]() && this[od](function (t) {
          t._$t = !0
        }), this._hl() && this[Yh]() && this[B_](function (t) {
          t[$E]()
        }))
      },
      onParentChanged: function () {
        this.invalidateVisibility()
      },
      _hl: function () {
        return !this._4b && this instanceof vF
      },
      invalidate: function () {
        this.onEvent(new BD(this, BE, FE))
      },
      _n8w: null,
      addUI: function (t, i) {
        if (this._n8w || (this._n8w = new ED), t.id || (t.id = ++QN), this._n8w[T_](t.id)) return !1;
        var n = {
          id: t.id,
          ui: t,
          bindingProperties: i
        };
        this._n8w[nr](n);
        var e = new BD(this, BE, nr, n);
        return this[wr](e)
      },
      removeUI: function (t) {
        if (!this._n8w) return !1;
        var i = this._n8w.getById(t.id);
        return i ? (this._n8w[Vh](i), void this.onEvent(new BD(this, BE, Vh, i))) : !1
      },
      toString: function () {
        return this[NE] || this.id
      },
      type: GE,
      _4b: !1,
      _hn: !0
    },
  N(_F, KD),
  q(_F[yr], [zE, kr, YE, HE]),
  Z(_F[yr], {
      enableSubNetwork: {
        get: function () {
          return this._4b
        },
        set: function (t) {
          if (this._4b != t) {
            var i = this._4b;
            this._4b = t,
            this instanceof uF && this._19(),
            this[wr](new FD(this, qE, t, i))
          }
        }
      },
      bindingUIs: {
        get: function () {
          return this._n8w
        }
      },
      styles: {
        get: function () {
          return this._iq
        },
        set: function (t) {
          if (this._iq != t) {
            for (var i in this._iq) i in t || (t[i] = n);
            this[UE](t),
            this._iq = t
          }
        }
      }
    });
  var cF = function (t, i, n) {
      this.id = ++QN,
      this._n8r = {},
      this._iq = {},
      n && (this[NE] = n),
      this[$_] = t,
      this[D_] = i,
      this[WE]()
    };
  cF[yr] = {
      $uiClass: os,
      _jd: null,
      _he: null,
      _jg: null,
      _hj: null,
      _em: !1,
      type: XE,
      otherNode: function (t) {
        return t == this[I_] ? this.to : t == this.to ? this[I_] : void 0
      },
      connect: function () {
        if (this._em) return !1;
        if (!this.$from || !this[D_]) return !1;
        if (this._em = !0, this.$from == this.$to) return void this[$_]._hq(this);
        Me(this[D_], this),
        ke(this.$from, this),
        de(this.$from, this, this.$to);
        var t = this[S_],
          i = this.toAgent;
        if (t != i) {
            var n;
            this[$_]._dk && (ve(t, this, i), n = !0),
            this[D_]._dk && (ye(i, this, t), n = !0),
            n && de(t, this, i)
          }
      },
      disconnect: function () {
        if (!this._em) return !1;
        if (this._em = !1, this[$_] == this.$to) return void this.$from._n8j(this);
        Oe(this[$_], this),
        Se(this[D_], this),
        le(this[$_], this, this[D_]);
        var t = this[S_],
          i = this[O_];
        if (t != i) {
            var n;
            this[$_]._dk && (be(t, this, i), n = !0),
            this[D_]._dk && (ge(i, this, t), n = !0),
            n && le(t, this, i)
          }
      },
      isConnected: function () {
        return this._em
      },
      isInvalid: function () {
        return !this[$_] || !this[D_]
      },
      isLooped: function () {
        return this[$_] == this.$to
      },
      getEdgeBundle: function (t) {
        return t ? this._2w() : this[P_]() ? this[$_]._49 : this.$from.getEdgeBundle(this[D_])
      },
      hasEdgeBundle: function () {
        var t = this[M_](!0);
        return t && t[VE].length > 1
      },
      _2w: function () {
        var t = this[S_],
          i = this[O_];
        return t == i ? this[$_]._dk || this[D_]._dk ? null : this[$_]._49 : this[S_].getEdgeBundle(this[O_])
      },
      _8u: null,
      hasPathSegments: function () {
        return this._8u && !this._8u.isEmpty()
      },
      isBundleEnabled: function () {
        return this[KE] && !this.hasPathSegments()
      },
      firePathChange: function (t) {
        this[wr](new FD(this, ZE, t))
      },
      addPathSegment: function (t, i, n) {
        var e = new eB(i || J$, t);
        this._8u || (this._8u = new ED),
        this._8u[nr](e, n),
        this[JE](e)
      },
      addPathSegement: function () {
        return w$[Gr]('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'),
        this.addPathSegment[br](this, arguments)
      },
      removePathSegmentByIndex: function (t) {
        if (!this._8u) return !1;
        var i = this._8u[Pd](t);
        i && (this._8u[Vh](i), this.firePathChange(i))
      },
      removePathSegment: function (t) {
        return this._8u ? (this._8u[Vh](t), void this.firePathChange(t)) : !1
      },
      movePathSegment: function (t, i, n) {
        if (!this._8u) return !1;
        if (t = t || 0, i = i || 0, w$.isNumber(n)) {
          var e = this._8u.getByIndex(n);
          return e ? (e[Wv](t, i), void this.firePathChange()) : !1
        }
        l(function (n) {
          n[Wv](t, i)
        }),
        this.firePathChange()
      },
      move: function (t, i) {
        return this._8u ? (this._8u.forEach(function (n) {
          n[Wv](t, i)
        }, this), void this[JE]()) : !1
      },
      validateEdgeBundle: function () {}
    },
  N(cF, _F),
  Z(cF[yr], {
      pathSegments: {
        get: function () {
          return this._8u
        },
        set: function (t) {
          w$[ar](t) && (t = new ED(t)),
          this._8u = t,
          this.firePathChange()
        }
      },
      from: {
        get: function () {
          return this.$from
        },
        set: function (t) {
          if (this.$from != t) {
            var i = new FD(this, I_, t, this[$_]);
            this.beforeEvent(i) !== !1 && (this[hv](), this[$_] = t, this[WE](), this[wr](i))
          }
        }
      },
      to: {
        get: function () {
          return this.$to
        },
        set: function (t) {
          if (this[D_] != t) {
            var i = new FD(this, QE, t, this[D_]);
            this.beforeEvent(i) !== !1 && (this[hv](), this[D_] = t, this[WE](), this[wr](i))
          }
        }
      },
      fromAgent: {
        get: function () {
          return this.$from ? this.$from._dk || this[$_] : null
        }
      },
      toAgent: {
        get: function () {
          return this.$to ? this.$to._dk || this[D_] : null
        }
      }
    }),
  q(cF.prototype, [Wc, {
      name: KE,
      value: !0
    },
    Kc]);
  var uF = function (t, i, n) {
      this.id = ++QN,
      this._n8r = {},
      this._iq = {},
      t && (this[NE] = t),
      this[ac] = tm,
      this.$anchorPosition = ID[hl],
      this[im] = {
        x: i || 0,
        y: n || 0
      },
      this._linkedNodes = {}
    };
  uF.prototype = {
      $uiClass: _s,
      _dk: null,
      forEachEdge: function (t, i, n) {
        return !n && this._kd && this._kd[s_](t, i) === !1 ? !1 : Ie(this, t, i)
      },
      forEachOutEdge: function (t, i) {
        return Pe(this, t, i)
      },
      forEachInEdge: function (t, i) {
        return Ae(this, t, i)
      },
      getEdges: function () {
        var t = [];
        return this.forEachEdge(function (i) {
          t[Ea](i)
        }),
        t
      },
      _hv: null,
      _fc: null,
      _jf: null,
      _ht: null,
      _n7j: 0,
      _95: 0,
      hasInEdge: function () {
        return null != this._hv
      },
      hasOutEdge: function () {
        return null != this._fc
      },
      hasEdge: function () {
        return null != this._hv || null != this._fc || this[nm]()
      },
      linkedWith: function (t) {
        return t.from == this || t.to == this || t.fromAgent == this || t[O_] == this
      },
      hasEdgeWith: function (t) {
        var i = this.getEdgeBundle(t);
        return i && i.edges.length > 0
      },
      _kd: null,
      _49: null,
      hasLoops: function () {
        return this._kd && this._kd[Gh] > 0
      },
      _hq: function (t) {
        return this._kd || (this._kd = new ED, this._49 = new CG(this, this, this._kd)),
        this._49._hk(t)
      },
      _n8j: function (t) {
        return this._49 ? this._49._n9n(t) : void 0
      },
      getEdgeBundle: function (t) {
        return t == this ? this._49 : this._linkedNodes[t.id] || t._linkedNodes[this.id]
      },
      _6o: function () {
        return this._8p && this._8p.length
      },
      _59: function () {
        return this._7o && this._7o[Gh]
      },
      _90: function () {
        return this._6o() || this._59()
      },
      _7o: null,
      _8p: null,
      _n8i: function () {
        var t = this._dk,
          i = ue(this);
        if (t != i) {
            var n = je(this);
            this._8n(i),
            n.forEach(function (t) {
              var i = t[S_],
                n = t[O_],
                t = t.edge,
                e = t[$_]._dk,
                s = t[D_]._dk;
              i != n && (i && be(i, t, n || t.$to), n && ge(n, t, i || t[$_])),
              e != s && (e && ve(e, t, s || t[D_]), s && ye(s, t, e || t[$_]), de(e || t.$from, t, s || t.$to))
            }, this)
          }
      },
      onParentChanged: function () {
        this[$E](),
        this._n8i()
      },
      _88: null,
      _19: function () {
        var t;
        if (this._4b ? t = null : (t = this._dk, t || this._fu !== !1 || (t = this)), this._88 == t) return !1;
        if (this._88 = t, this._f2 && this._f2._j1.length) for (var i, n = this._f2._j1, e = 0, s = n.length; s > e; e++) i = n[e],
        i instanceof uF && i._8n(t)
      },
      setLocation: function (t, i) {
        if (this[im] && this[im].x == t && this[im].y == i) return !1;
        var n = new FD(this, em, this.$location, {
          x: t,
          y: i
        });
        return this.beforeEvent(n) === !1 ? !1 : (this[im] ? (this.$location.x = t, this[im].y = i) : this[im] = new TD(t, i), this[wr](n), !0)
      },
      _di: null,
      addFollower: function (t) {
        return null == t ? !1 : t[sm] = this
      },
      removeFollower: function (t) {
        return this._di && this._di[Jc](t) ? t[sm] = null : !1
      },
      hasFollowers: function () {
        return this._di && !this._di.isEmpty()
      },
      toFollowers: function () {
        return this[C_]() ? this._di.toDatas() : null
      },
      clearFollowers: function () {
        this[C_]() && (this[hm](), l(this[hm](), function (t) {
          t[sm] = null
        }))
      },
      getFollowerIndex: function (t) {
        return this._di && this._di.contains(t) ? this._di[er](t) : -1
      },
      setFollowerIndex: function (t, i) {
        return this._di && this._di[Jc](t) ? void this._di[sv](t, i) : -1
      },
      getFollowerCount: function () {
        return this._di ? this._di[Gh] : 0
      },
      _9f: function () {
        return this._di ? this._di : (this._di = new ED, this._di)
      },
      isFollow: function (t) {
        if (!t || !this._host) return !1;
        for (var i = this._host; i;) {
          if (i == t) return !0;
          i = i._host
        }
        return !1
      },
      _8n: function (t) {
        return t == this._dk ? !1 : (this._dk = t, this[$E](), void this._19())
      },
      type: rm
    },
  N(uF, _F),
  Z(uF[yr], {
      loops: {
        get: function () {
          return this._kd
        }
      },
      edgeCount: {
        get: function () {
          return this._n7j + this._95
        }
      },
      agentNode: {
        get: function () {
          return this._dk || this
        }
      },
      host: {
        set: function (t) {
          if (this == t || t == this._host) return !1;
          var i = new FD(this, sm, this._host, t);
          if (!1 === this[Il](i)) return !1;
          var n = null,
            e = null,
            s = this._host;
          if (null != t && (n = new FD(t, am, null, this), !1 === t.beforeEvent(n))) return !1;
          if (null != s && (e = new FD(s, fm, null, this), !1 === s[Il](e))) return !1;
          if (this._host = t, null != t) {
              var h = t._9f();
              h[nr](this)
            }
          if (null != s) {
              var h = s._9f();
              h[Vh](this)
            }
          return this.onEvent(i),
          null != t && t[wr](n),
          null != s && s[wr](e),
          !0
        },
        get: function () {
          return this._host
        }
      }
    }),
  q(uF[yr], [em, om, hg, $f, _m]),
  Z(uF[yr], {
      x: {
        get: function () {
          return this[em].x
        },
        set: function (t) {
          t != this[em].x && (this.location = new TD(t, this[em].y))
        }
      },
      y: {
        get: function () {
          return this[em].y
        },
        set: function (t) {
          t != this[em].y && (this[em] = new TD(this[em].x, t))
        }
      }
    });
  var dF = function (t, i) {
      t instanceof hB && (i = t, t = n),
      D(this, dF, [t]),
      this.$path = i || new hB,
      this[hg] = this[cm],
      this[_m] = null,
      this.uiClass = rh,
      pD[um] || (pD.SHAPENODE_STYLES = {}, pD[um][gF.ARROW_TO] = !1),
      this[UE](pD[um])
    };
  dF[yr] = {
      $uiClass: rh,
      type: dm,
      moveTo: function (t, i) {
        this[lm][F_](t, i),
        this.firePathChange()
      },
      lineTo: function (t, i) {
        this.path[z_](t, i),
        this[JE]()
      },
      quadTo: function (t, i, n, e) {
        this.path[G_](t, i, n, e),
        this[JE]()
      },
      curveTo: function (t, i, n, e, s, h) {
        this[lm].curveTo(t, i, n, e, s, h),
        this.firePathChange()
      },
      arcTo: function (t, i, n, e, s) {
        this[lm].arcTo(t, i, n, e, s),
        this[JE]()
      },
      closePath: function () {
        this[lm][go](),
        this[JE]()
      },
      clear: function () {
        this.path[nf](),
        this.firePathChange()
      },
      removePathSegmentByIndex: function (t) {
        this.path.removePathSegment(t) !== !1 && this.firePathChange()
      },
      firePathChange: function () {
        this[lm]._68 = !0,
        this[wr](new FD(this, ZE))
      }
    },
  N(dF, uF),
  q(dF.prototype, [lm]),
  Z(dF.prototype, {
      pathSegments: {
        get: function () {
          return this.path[vm]
        },
        set: function (t) {
          this[lm][vm] = t || [],
          this[JE]()
        }
      },
      length: {
        get: function () {
          return this[lm][Gh]
        }
      }
    }),
  w$[bm] = dF;
  var lF = {
      _j7: {},
      register: function (t, i) {
        lF._j7[t] = i
      },
      getShape: function (t, i, e, s, h, r) {
        s === n && (s = i, h = e, i = 0, e = 0),
        s || (s = 50),
        h || (h = 50);
        var a = lF._j7[t];
        return a ? a[ym] instanceof Function ? a.generator(i, e, s, h, r) : a : void 0
      },
      getRect: function (t, i, n, e, s, h, r) {
        return Ce(r || new hB, t, i, n, e, s, h)
      },
      getAllShapes: function (t, i, n, e, s) {
        var h = {};
        for (var r in lF._j7) {
          var a = lF.getShape(r, t, i, n, e, s);
          a && (h[r] = a)
        }
        return h
      },
      createRegularShape: function (t, i, n, e, s) {
        return Fe(t, i, n, e, s)
      }
    };
  Qe(),
  ts[yr] = {
      type: gm
    },
  N(ts, dF),
  w$[pm] = ts,
  is[yr] = {
      _h8: function (t) {
        var i, n = t._j0;
        i = n ? n._f2 : this[ev];
        var e = i[er](t);
        if (0 > e) throw new Error(fv + t + "' not exist in the box");
        for (; e >= 0;) {
          if (0 == e) return n instanceof uF ? n : null;
          e -= 1;
          var h = i[Pd](e);
          if (h = s(h)) return h
        }
        return null
      },
      forEachNode: function (t, i) {
        this[s_](function (n) {
          return n instanceof uF && t.call(i, n) === !1 ? !1 : void 0
        })
      },
      _3v: null
    },
  N(is, JD),
  Z(is[yr], {
      propertyChangeDispatcher: {
        get: function () {
          return this._$v
        }
      },
      currentSubNetwork: {
        get: function () {
          return this._3v
        },
        set: function (t) {
          if (t && !t.enableSubNetwork && (t = null), this._3v != t) {
            var i = this._3v;
            this._3v = t,
            this._$v[wr](new FD(this, xm, t, i))
          }
        }
      }
    }),
  pD[Em] = T$[mm],
  pD[wm] = 5,
  pD.GROUP_EXPANDED = !0,
  pD[Tm] = {
      width: 60,
      height: 60
    };
  var vF = function (t, i, e) {
      D(this, vF, arguments),
      (i === n || e === n) && (this[im][km] = !0),
      this[Om] = pD.GROUP_TYPE,
      this.$padding = pD[wm],
      this.$image = fB.group,
      this[Mm] = pD[Tm],
      this[Sm] = pD.GROUP_EXPANDED
    };
  vF.prototype = {
      type: jm,
      $uiClass: ih,
      _9j: function () {
        return !this._fu && !this._dk
      },
      forEachOutEdge: function (t, i, n) {
        return Pe(this, t, i) === !1 ? !1 : !n && this._9j() && this._7o ? this._7o[s_](t, i) : void 0
      },
      forEachInEdge: function (t, i, n) {
        return Ae(this, t, i) === !1 ? !1 : !n && this._9j() && this._8p ? this._8p[s_](t, i) : void 0
      },
      forEachEdge: function (t, i, n) {
        return $(this, vF, od, arguments) === !1 ? !1 : n || n || !this._9j() ? void 0 : this._8p && this._8p[s_](t, i) === !1 ? !1 : this._7o ? this._7o[s_](t, i) : void 0
      },
      hasInEdge: function (t) {
        return t ? null != this._hv : null != this._hv || this._6o()
      },
      hasOutEdge: function (t) {
        return t ? null != this._fc : null != this._fc || this._59()
      },
      hasEdge: function (t) {
        return t ? null != this._hv || null != this._fc : null != this._hv || null != this._fc || this._90()
      }
    },
  N(vF, uF),
  Z(vF[yr], {
      expanded: {
        get: function () {
          return this._fu
        },
        set: function (t) {
          if (this._fu != t) {
            var i = new FD(this, Sm, t, this._fu);
            this[Il](i) !== !1 && (this._fu = t, this._19(), this[wr](i), this._dk || ns[zh](this))
          }
        }
      }
    }),
  q(vF[yr], [Im, Pm, Wf, Am]),
  w$[Cm] = vF,
  es[yr][Df] = Lm,
  N(es, uF),
  w$[Rm] = es;
  var bF = function (t) {
      this._is = new SD,
      this._7r = new SD,
      this._ex = new SD,
      this.id = ++QN,
      t && (this[Cf] = t)
    };
  bF[yr] = {
      invalidate: function () {
        this[Nm]()
      },
      _1p: !0,
      _is: null,
      _7r: null,
      _ex: null,
      _n7a: !1,
      _iu: 1,
      _iw: 1,
      _hn: !0,
      _7l: 0,
      _64: 0,
      _j0: null,
      _n7b: null,
      borderColor: Dm,
      borderLineDash: null,
      borderLineDashOffset: null,
      syncSelection: !0,
      syncSelectionStyles: !0,
      _1j: function () {
        this.$anchorPoint = fi(this.anchorPosition, this._7l, this._64)
      },
      setMeasuredBounds: function (t, i, n, e) {
        return t instanceof Object && (n = t.x, e = t.y, i = t[tf], t = t.width),
        this._is[sf] == t && this._is[tf] == i && this._is.x == n && this._is.y == e ? !1 : void this._is[No](n || 0, e || 0, t || 0, i || 0)
      },
      initialize: function () {},
      measure: function () {},
      draw: function () {},
      _7q: function (t, i, n) {
        n.selectionType == T$[gy] ? (t[Zy] = n.selectionColor, t[Jy] = n[Pg] * i, t[Ag] = (n[$m] || 0) * i, t[Qy] = (n[Cg] || 0) * i) : this._29(t, i, n)
      },
      _29: function (t, i, n) {
        var e = n[Rg] || 0;
        n[Bm] && (t[Fg] = n[Bm], t.fillRect(this._7r.x - e / 2, this._7r.y - e / 2, this._7r[sf] + e, this._7r[tf] + e)),
        t.strokeStyle = n[Ig],
        t[Lf] = e,
        t[Fm](this._7r.x - e / 2, this._7r.y - e / 2, this._7r[sf] + e, this._7r.height + e)
      },
      _j3: function (t, i, n, e) {
        if (!this._hn) return !1;
        if (this[Gm] || (n = this[zm]), (n && !this[Ym] || !e) && (e = this), t[$y](), 1 != this[Hm] && (t[Xp] = this.$alpha), t[Vf](this.$x, this.$y), this.$rotatable && this[mo] && t[$f](this.$_hostRotate), (this[qm] || this.offsetY) && t[Vf](this[qm], this[Um]), this[po] && t[$f](this.$rotate), this[To] && this._n7b && t[Vf](-this._n7b.x, -this._n7b.y), this[Zy] && (t[Zy] = this.shadowColor, t.shadowBlur = this[Jy] * i, t[Ag] = this[Ag] * i, t.shadowOffsetY = this[Qy] * i), n && e[Wm] == T$[Xm] && (this._29(t, i, e), n = !1), this._$u() && this._mjShape && !this._mjShape._empty) {
          this._mjShape[Tf]();
          var s = {
            lineWidth: this[Io],
            strokeStyle: this[Vm],
            lineDash: this[Km],
            lineDashOffset: this[Zm],
            fillColor: this.$backgroundColor,
            fillGradient: this._n8ackgroundGradient,
            lineCap: oy,
            lineJoin: jf
          };
          this._mjShape[Kf](t, i, s, n, e),
          n = !1,
          t.shadowColor = tp
        }
        t.beginPath(),
        this.draw(t, i, n, e),
        t.restore()
      },
      invalidateData: function () {
        this.$invalidateData = !0,
        this._1p = !0
      },
      invalidateSize: function () {
        this[ko] = !0,
        this._1p = !0
      },
      invalidateRender: function () {
        this._1p = !0
      },
      _54: function () {},
      _$u: function () {
        return this[Jm] || this[Qm] || this[Io]
      },
      _4f: function () {
        return this.$backgroundColor || this[Qm]
      },
      doValidate: function () {
        return this.$invalidateData && (this[tw] = !1, this.measure() !== !1 && (this[ko] = !0)),
        this[ko] && this.validateSize && this[iw](),
        Wn.call(this) ? (this.$invalidateRotate = !0, this[nw] && this.onBoundsChanged(), !0) : this.$invalidateLocation ? (this.$invalidateLocation = !1, !0) : void 0
      },
      validate: function () {
        var t = this._hn;
        return this[ew] && (this[ew] = !1, this._hn = this[sw], !this._hn || (this[Bo] || this[hw]) && this._54() !== !1 || (this._hn = !1)),
        this._hn ? (this._1p = !1, this._n7a || (this[rw](), this._n7a = !0), this[aw]()) : t != this._hn
      },
      _hd: function (t, i) {
        return t -= this.$x,
        i -= this.$y,
        Un[zh](this, {
          x: t,
          y: i
        })
      },
      hitTest: function (t, i, n, e) {
        if (t -= this.$x, i -= this.$y, !this._ex[Sf](t, i, n)) return !1;
        var s = Un[zh](this, {
          x: t,
          y: i
        });
        return t = s.x,
        i = s.y,
        !e && this._$u() && this._mjShape && this._mjShape.hitTest(t, i, n, !1, this[Io], this[Jm] || this.$backgroundGradient) ? !0 : this[fw](t, i, n)
      },
      doHitTest: function (t, i, n) {
        return this._is.intersectsPoint(t, i, n)
      },
      hitTestByBounds: function (t, i, n, e) {
        var s = this._hd(t, i);
        return !e && this._$u() && this._mjShape && this._mjShape[Qc](t, i, n, !1, this[Io], this.$backgroundColor || this[Qm]) ? !0 : this._is[Sf](s.x, s.y, n)
      },
      onDataChanged: function () {
        this.$invalidateData = !0,
        this._1p = !0,
        this[ew] = !0
      },
      getBounds: function () {
        var t = this._ex.clone();
        return t[ow](this.x, this.y),
        this[k_] && (this[k_][$f] && Ni(t, this.parent.rotate, t), t.offset(this.parent.x || 0, this[k_].y || 0)),
        t
      },
      destroy: function () {
        this._i0ed = !0
      },
      _dt: !1
    },
  Z(bF[yr], {
      originalBounds: {
        get: function () {
          return this._is
        }
      },
      data: {
        get: function () {
          return this.$data
        },
        set: function (t) {
          if (this.$data != t) {
            var i = this[Bo];
            this[Bo] = t,
            this[_w](t, i)
          }
        }
      },
      parent: {
        get: function () {
          return this._j0
        }
      },
      showOnTop: {
        get: function () {
          return this._dt
        },
        set: function (t) {
          t != this._dt && (this._dt = t, this._1p = !0, this._j0 && this._j0._n76 && this._j0._n76(this))
        }
      }
    }),
  hs(bF[yr], {
      visible: {
        value: !0,
        validateFlags: [cw, uw]
      },
      showEmpty: {
        validateFlags: [cw]
      },
      anchorPosition: {
        value: ID[hl],
        validateFlags: [dw]
      },
      position: {
        value: ID[hl],
        validateFlags: [uw]
      },
      offsetX: {
        value: 0,
        validateFlags: [uw]
      },
      offsetY: {
        value: 0,
        validateFlags: [uw]
      },
      layoutByAnchorPoint: {
        value: !0,
        validateFlags: [tb, dw]
      },
      padding: {
        value: 0,
        validateFlags: [tb]
      },
      border: {
        value: 0,
        validateFlags: [tb]
      },
      borderRadius: {
        value: pD[my]
      },
      showPointer: {
        value: !1,
        validateFlags: [tb]
      },
      pointerX: {
        value: 0,
        validateFlags: [tb]
      },
      pointerY: {
        value: 0,
        validateFlags: [tb]
      },
      pointerWidth: {
        value: pD.POINTER_WIDTH
      },
      backgroundColor: {
        validateFlags: [tb]
      },
      backgroundGradient: {
        validateFlags: [tb, lw]
      },
      selected: {
        value: !1,
        validateFlags: [tb]
      },
      selectionBorder: {
        value: pD[vw],
        validateFlags: [tb]
      },
      selectionShadowBlur: {
        value: pD[xy],
        validateFlags: [tb]
      },
      selectionColor: {
        value: pD[Ey],
        validateFlags: [tb]
      },
      selectionType: {
        value: pD.SELECTION_TYPE,
        validateFlags: [tb]
      },
      selectionShadowOffsetX: {
        value: 0,
        validateFlags: [tb]
      },
      selectionShadowOffsetY: {
        value: 0,
        validateFlags: [tb]
      },
      shadowBlur: {
        value: 0,
        validateFlags: [tb]
      },
      shadowColor: {
        validateFlags: [tb]
      },
      shadowOffsetX: {
        value: 0,
        validateFlags: [tb]
      },
      shadowOffsetY: {
        value: 0,
        validateFlags: [tb]
      },
      renderColorBlendMode: {},
      renderColor: {},
      x: {
        value: 0,
        validateFlags: [uw]
      },
      y: {
        value: 0,
        validateFlags: [uw]
      },
      rotatable: {
        value: !0,
        validateFlags: [bw, tb]
      },
      rotate: {
        value: 0,
        validateFlags: [bw, tb]
      },
      _hostRotate: {
        validateFlags: [bw]
      },
      lineWidth: {
        value: 0,
        validateFlags: [hb]
      },
      alpha: {
        value: 1
      }
    });
  var yF = [T$[yw], T$.PROPERTY_TYPE_STYLE, T$[vc]];
  as[yr] = {
      removeBinding: function (t) {
        for (var i = yF[Gh]; --i >= 0;) {
          var n = yF[i],
            e = this[n];
          for (var s in e) {
              var h = e[s];
              Array.isArray(h) ? (v(h, function (i) {
                return i.target == t
              }, this), h[Gh] || delete e[s]) : h.target == t && delete e[s]
            }
        }
      },
      _27: function (t, i, n) {
        if (!n && (n = this[i[vl] || T$[yw]], !n)) return !1;
        var e = n[t];
        e ? (Array[ar](e) || (n[t] = e = [e]), e.push(i)) : n[t] = i
      },
      _2t: function (t, i, n, e, s, h) {
        t = t || T$.PROPERTY_TYPE_ACCESSOR;
        var r = this[t];
        if (!r) return !1;
        var a = {
          property: i,
          propertyType: t,
          bindingProperty: e,
          target: n,
          callback: s,
          invalidateSize: h
        };
        this._27(i, a, r)
      },
      onBindingPropertyChange: function (t, i, n, e) {
        var s = this[n || T$[yw]];
        if (!s) return !1;
        var h = s[i];
        return h ? (t._1p = !0, rs(t, h, n, e), !0) : !1
      },
      initBindingProperties: function (t, i) {
        for (var e = yF[Gh]; --e >= 0;) {
          var s = yF[e],
            h = this[s];
          for (var r in h) {
              var a = h[r];
              if (a.bindingProperty) {
                var f = a.target;
                if (f) {
                  if (!(f instanceof bF || (f = t[f]))) continue
                } else f = t;
                var o;
                o = i === !1 ? t[cc](a[uc], s) : s == T$.PROPERTY_TYPE_STYLE ? t[Uc][xc](t.$data, a[uc]) : t[Bo][a[uc]],
                o !== n && (f[a[dc]] = o)
              }
            }
        }
      }
    };
  var gF = {};
  gF[Ey] = gw,
  gF[vw] = pw,
  gF[xy] = "selection.shadow.blur",
  gF.SELECTION_SHADOW_OFFSET_X = "selection.shadow.offset.x",
  gF[xw] = "selection.shadow.offset.y",
  gF[yy] = Ew,
  gF[mw] = ww,
  gF[Tw] = "render.color.blend.mode",
  gF[kw] = Ow,
  gF.SHADOW_BLUR = Mw,
  gF[Sw] = jw,
  gF.SHADOW_OFFSET_X = Iw,
  gF[Pw] = Aw,
  gF[Cw] = Lw,
  gF.SHAPE_STROKE_STYLE = Rw,
  gF[Nw] = Dw,
  gF.SHAPE_LINE_DASH_OFFSET = "shape.line.dash.offset",
  gF[$w] = Bw,
  gF[Fw] = Gw,
  gF[zw] = Yw,
  gF[Hw] = qw,
  gF[Uw] = Ww,
  gF[Xw] = Vw,
  gF[Kw] = Zw,
  gF[Jw] = Qw,
  gF[tT] = iT,
  gF[nT] = eT,
  gF.BORDER_COLOR = sT,
  gF[hT] = rT,
  gF[aT] = "border.line.dash.offset",
  gF[my] = fT,
  gF[oT] = Wf,
  gF[_T] = "image.background.color",
  gF[cT] = "image.background.gradient",
  gF[uT] = dT,
  gF.IMAGE_BORDER_STYLE = gF.IMAGE_BORDER_COLOR = lT,
  gF[vT] = "image.border.line.dash",
  gF.IMAGE_BORDER_LINE_DASH_OFFSET = "image.border.line.dash.offset",
  gF[bT] = gF[yT] = gT,
  gF[pT] = xT,
  gF[ET] = mT,
  gF.IMAGE_ADJUST = wT,
  gF[TT] = kT,
  gF[OT] = MT,
  gF[ST] = jT,
  gF[IT] = PT,
  gF[AT] = "label.anchor.position",
  gF[CT] = LT,
  gF[RT] = NT,
  gF.LABEL_FONT_FAMILY = DT,
  gF[$T] = BT,
  gF[FT] = GT,
  gF[zT] = YT,
  gF[HT] = qT,
  gF.LABEL_RADIUS = UT,
  gF[WT] = XT,
  gF[VT] = KT,
  gF.LABEL_SIZE = ZT,
  gF[JT] = QT,
  gF[tk] = ik,
  gF[nk] = ek,
  gF[sk] = "label.background.color",
  gF[hk] = "label.background.gradient",
  gF[rk] = ak,
  gF[fk] = ok,
  gF.LABEL_SHADOW_COLOR = _k,
  gF.LABEL_SHADOW_OFFSET_X = "label.shadow.offset.x",
  gF[ck] = "label.shadow.offset.y",
  gF[uk] = dk,
  gF[lk] = vk,
  gF[bk] = "group.background.color",
  gF.GROUP_BACKGROUND_GRADIENT = "group.background.gradient",
  gF.GROUP_STROKE = yk,
  gF[gk] = pk,
  gF[xk] = "group.stroke.line.dash",
  gF[Ek] = "group.stroke.line.dash.offset",
  gF[mk] = "edge.bundle.label.rotate",
  gF[wk] = "edge.bundle.label.position",
  gF.EDGE_BUNDLE_LABEL_ANCHOR_POSITION = "edge.bundle.label.anchor.position",
  gF.EDGE_BUNDLE_LABEL_COLOR = "edge.bundle.label.color",
  gF.EDGE_BUNDLE_LABEL_FONT_SIZE = "edge.bundle.label.font.size",
  gF[Tk] = "edge.bundle.label.font.family",
  gF[kk] = "edge.bundle.label.font.style",
  gF[Ok] = "edge.bundle.label.padding",
  gF[Mk] = "edge.bundle.label.pointer.width",
  gF.EDGE_BUNDLE_LABEL_POINTER = "edge.bundle.label.pointer",
  gF[Sk] = "edge.bundle.label.radius",
  gF[jk] = "edge.bundle.label.offset.x",
  gF.EDGE_BUNDLE_LABEL_OFFSET_Y = "edge.bundle.label.offset.y",
  gF[Ik] = "edge.bundle.label.border",
  gF[Pk] = "edge.bundle.label.border.color",
  gF[Ak] = "edge.bundle.label.background.color",
  gF[Ck] = "edge.bundle.label.background.gradient",
  gF[Lk] = "edge.bundle.label.rotatable",
  gF[Rk] = Nk,
  gF[Dk] = $k,
  gF.EDGE_OUTLINE = Bk,
  gF[Fk] = Gk,
  gF[zk] = Yk,
  gF[Hk] = "edge.line.dash.offset",
  gF.EDGE_FROM_OFFSET = qk,
  gF.EDGE_TO_OFFSET = Uk,
  gF[Wk] = Xk,
  gF[nu] = Vk,
  gF[Ec] = Kk,
  gF.EDGE_CONTROL_POINT = Zk,
  gF[Jk] = "edge.split.by.percent",
  gF[mc] = Qk,
  gF[wc] = tO,
  gF[Nc] = iO,
  gF[$c] = nO,
  gF[eO] = sO,
  gF[hO] = rO,
  gF[aO] = fO,
  gF[oO] = _O,
  gF[cO] = uO,
  gF[dO] = lO,
  gF.ARROW_FROM_STROKE_STYLE = "arrow.from.stroke.style",
  gF.ARROW_FROM_OUTLINE = vO,
  gF[bO] = "arrow.from.outline.style",
  gF[yO] = gO,
  gF[pO] = "arrow.from.line.dash.offset",
  gF[xO] = "arrow.from.fill.color",
  gF.ARROW_FROM_FILL_GRADIENT = "arrow.from.fill.gradient",
  gF[EO] = mO,
  gF.ARROW_FROM_LINE_JOIN = wO,
  gF.ARROW_TO = TO,
  gF.ARROW_TO_SIZE = kO,
  gF[OO] = MO,
  gF[SO] = jO,
  gF.ARROW_TO_STROKE_STYLE = "arrow.to.stroke.style",
  gF[IO] = PO,
  gF[AO] = "arrow.to.outline.style",
  gF.ARROW_TO_LINE_DASH = CO,
  gF[LO] = "arrow.to.line.dash.offset",
  gF[RO] = NO,
  gF.ARROW_TO_FILL_GRADIENT = "arrow.to.fill.gradient",
  gF[DO] = $O,
  gF.ARROW_TO_LINE_JOIN = BO;
  var pF = new as,
    xF = T$[yw],
    EF = T$.PROPERTY_TYPE_STYLE,
    mF = !1;
  pF._2t(EF, gF.SELECTION_TYPE, null, Wm),
  pF._2t(EF, gF[vw], null, Rg),
  pF._2t(EF, gF[xy], null, Pg),
  pF._2t(EF, gF[Ey], null, Ig),
  pF._2t(EF, gF[FO], null, "selectionShadowOffsetX"),
  pF._2t(EF, gF.SELECTION_SHADOW_OFFSET_Y, null, "selectionShadowOffsetY"),
  pF._2t(xF, kr, Ix, Cf),
  pF._2t(EF, gF[IT], Ix, GO),
  pF._2t(EF, gF.LABEL_POSITION, Ix, $o),
  pF._2t(EF, gF.LABEL_ANCHOR_POSITION, Ix, _m),
  pF._2t(EF, gF[CT], Ix, zO),
  pF._2t(EF, gF[RT], Ix, zu),
  pF._2t(EF, gF[tk], Ix, mb),
  pF._2t(EF, gF[nk], Ix, Vm),
  pF._2t(EF, gF.LABEL_BACKGROUND_COLOR, Ix, YO),
  pF._2t(EF, gF[lk], Ix, HO),
  mF || (pF._2t(EF, gF[qO], null, Jy), pF._2t(EF, gF[Sw], null, Zy), pF._2t(EF, gF.SHADOW_OFFSET_X, null, Ag), pF._2t(EF, gF[Pw], null, Qy), pF._2t(EF, gF[UO], Ix, WO), pF._2t(EF, gF.LABEL_FONT_STYLE, Ix, Gu), pF._2t(EF, gF.LABEL_ALIGN_POSITION, Ix, XO), pF._2t(EF, gF[OT], Ix, $f), pF._2t(EF, gF[FT], Ix, Wf), pF._2t(EF, gF[zT], Ix, VO), pF._2t(EF, gF[HT], Ix, Po), pF._2t(EF, gF[KO], Ix, ZO), pF._2t(EF, gF.LABEL_OFFSET_X, Ix, qm), pF._2t(EF, gF.LABEL_OFFSET_Y, Ix, Um), pF._2t(EF, gF.LABEL_ROTATABLE, Ix, JO), pF._2t(EF, gF.LABEL_BACKGROUND_GRADIENT, Ix, Co), pF._2t(EF, gF.LABEL_SIZE, Ix, om), pF._2t(EF, gF.LABEL_SHADOW_BLUR, Ix, Jy), pF._2t(EF, gF[QO], Ix, Zy), pF._2t(EF, gF.LABEL_SHADOW_OFFSET_X, Ix, Ag), pF._2t(EF, gF[ck], Ix, Qy), pF._2t(EF, gF.LABEL_Z_INDEX, Ix, YE), pF._2t(EF, gF.RENDER_COLOR, null, ig), pF._2t(EF, gF.RENDER_COLOR_BLEND_MODE, null, eg), pF._2t(EF, gF[kw], null, Ow));
  var wF = new as;
  wF._2t(xF, em),
  wF._2t(xF, _m, null, tM),
  wF._2t(xF, $f, null, $f),
  mF || (wF._2t(EF, gF.BACKGROUND_COLOR, null, YO), wF._2t(EF, gF[tT], null, Co), wF._2t(EF, gF.PADDING, null, Wf), wF._2t(EF, gF[nT], null, mb), wF._2t(EF, gF[my], null, ZO), wF._2t(EF, gF[iM], null, Vm), wF._2t(EF, gF[hT], null, Km), wF._2t(EF, gF[aT], null, Zm)),
  wF._2t(xF, hg, hg, Cf, nM),
  wF._2t(xF, om, hg, om),
  wF._2t(EF, gF.SHAPE_STROKE, hg, Lf),
  wF._2t(EF, gF.SHAPE_STROKE_STYLE, hg, qy),
  wF._2t(EF, gF.SHAPE_FILL_COLOR, hg, Gg),
  wF._2t(EF, gF.LAYOUT_BY_PATH, hg, eM),
  mF || (wF._2t(EF, gF[sM], hg, hM), wF._2t(EF, gF[zw], hg, Bg), wF._2t(EF, gF[Hw], hg, $g), wF._2t(EF, gF[Fw], hg, zg), wF._2t(EF, gF.SHAPE_LINE_DASH, hg, Uo), wF._2t(EF, gF[rM], hg, Wo), wF._2t(EF, gF[Uw], hg, Ng), wF._2t(EF, gF[Xw], hg, Dg), wF._2t(EF, gF[_T], hg, YO), wF._2t(EF, gF[cT], hg, Co), wF._2t(EF, gF[pT], hg, Wf), wF._2t(EF, gF[uT], hg, mb), wF._2t(EF, gF[yT], hg, ZO), wF._2t(EF, gF.IMAGE_BORDER_COLOR, hg, Vm), wF._2t(EF, gF[vT], hg, Km), wF._2t(EF, gF.IMAGE_BORDER_LINE_DASH_OFFSET, hg, Zm), wF._2t(EF, gF.IMAGE_Z_INDEX, hg, YE), wF._2t(EF, gF.IMAGE_ALPHA, hg, Ow)),
  wF._2t(xF, Sm, null, null, aM),
  wF._2t(xF, qE, null, null, aM);
  var TF = new as;
  TF._2t(xF, Pm, null, null, fM),
  TF._2t(xF, Am, null, null, fM),
  TF._2t(xF, Im, null, null, fM),
  TF._2t(xF, Wf, null, null, fM),
  TF._2t(EF, gF[bk], oM, Gg),
  TF._2t(EF, gF[_M], oM, zg),
  TF._2t(EF, gF.GROUP_STROKE, oM, Lf),
  TF._2t(EF, gF.GROUP_STROKE_STYLE, oM, qy),
  TF._2t(EF, gF[xk], oM, Uo),
  TF._2t(EF, gF[Ek], oM, Wo);
  var kF = new as;
  kF._2t(xF, I_, oM, null, cM),
  kF._2t(xF, QE, oM, null, cM),
  kF._2t(xF, Wc, oM, null, cM),
  kF._2t(EF, gF[Rk], oM, Lf),
  kF._2t(EF, gF[Dk], oM, qy),
  kF._2t(EF, gF[aO], oM, uM),
  kF._2t(EF, gF[dM], oM, lM),
  mF || (kF._2t(EF, gF.EDGE_FROM_AT_EDGE, null, vM, cM), kF._2t(EF, gF[hO], null, bM, cM), kF._2t(EF, gF[yM], oM, Bg), kF._2t(EF, gF[Fk], oM, $g), kF._2t(EF, gF[zk], oM, Uo), kF._2t(EF, gF.EDGE_LINE_DASH_OFFSET, oM, Wo), kF._2t(EF, gF[Bc], oM, null, cM), kF._2t(EF, gF[gM], oM, null, cM), kF._2t(EF, gF.EDGE_TO_OFFSET, oM, null, cM), kF._2t(EF, gF[Uw], oM, Ng), kF._2t(EF, gF.LINE_JOIN, oM, Dg), kF._2t(xF, ZE, null, null, cM, !0), kF._2t(xF, Kc, null, null, cM, !0), kF._2t(EF, gF[oO], oM, pM), kF._2t(EF, gF[cO], oM, xM), kF._2t(EF, gF[dO], oM, EM), kF._2t(EF, gF[mM], oM, wM), kF._2t(EF, gF[TM], oM, kM), kF._2t(EF, gF[bO], oM, "fromArrowOutlineStyle"), kF._2t(EF, gF[xO], oM, OM), kF._2t(EF, gF[MM], oM, "fromArrowFillGradient"), kF._2t(EF, gF.ARROW_FROM_LINE_DASH, oM, SM), kF._2t(EF, gF[pO], oM, "fromArrowLineDashOffset"), kF._2t(EF, gF[jM], oM, IM), kF._2t(EF, gF[EO], oM, PM), kF._2t(EF, gF[AM], oM, CM), kF._2t(EF, gF[OO], oM, LM), kF._2t(EF, gF[SO], oM, RM), kF._2t(EF, gF[NM], oM, DM), kF._2t(EF, gF[IO], oM, $M), kF._2t(EF, gF.ARROW_TO_OUTLINE_STYLE, oM, BM), kF._2t(EF, gF[RO], oM, FM), kF._2t(EF, gF[GM], oM, zM), kF._2t(EF, gF[YM], oM, HM), kF._2t(EF, gF[LO], oM, "toArrowLineDashOffset"), kF._2t(EF, gF[qM], oM, UM), kF._2t(EF, gF[DO], oM, WM));
  var OF = new as;
  OF._2t(EF, gF[XM], VM, zO),
  OF._2t(EF, gF[wk], VM, $o),
  OF._2t(EF, gF[KM], VM, _m),
  OF._2t(EF, gF[ZM], VM, zu),
  OF._2t(EF, gF[Lk], VM, JO),
  mF || (OF._2t(EF, gF.EDGE_BUNDLE_LABEL_ROTATE, VM, $f), OF._2t(EF, gF[Tk], VM, WO), OF._2t(EF, gF[kk], VM, Gu), OF._2t(EF, gF[Ok], VM, Wf), OF._2t(EF, gF.EDGE_BUNDLE_LABEL_POINTER_WIDTH, VM, VO), OF._2t(EF, gF[JM], VM, Po), OF._2t(EF, gF[Sk], VM, ZO), OF._2t(EF, gF[jk], VM, qm), OF._2t(EF, gF[QM], VM, Um), OF._2t(EF, gF.EDGE_BUNDLE_LABEL_BORDER, VM, mb), OF._2t(EF, gF[Pk], VM, Vm), OF._2t(EF, gF[Ak], VM, YO), OF._2t(EF, gF.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT, VM, Co));
  var MF = new as;
  MF._2t(xF, em),
  MF._2t(EF, gF.BACKGROUND_COLOR, null, YO),
  MF._2t(EF, gF.BACKGROUND_GRADIENT, null, Co),
  MF._2t(EF, gF.PADDING, null, Wf),
  MF._2t(EF, gF[nT], null, mb),
  MF._2t(EF, gF[my], null, ZO),
  MF._2t(EF, gF[iM], null, Vm),
  MF._2t(EF, gF[hT], null, Km),
  MF._2t(EF, gF[aT], null, Zm),
  MF._2t(xF, $f, null, $f),
  MF._2t(xF, ZE, null, null, tS),
  MF._2t(xF, lm, hg, Cf),
  MF._2t(xF, om, hg, om),
  MF._2t(EF, gF[Cw], hg, Lf),
  MF._2t(EF, gF.SHAPE_STROKE_STYLE, hg, qy),
  MF._2t(EF, gF[$w], hg, Gg),
  MF._2t(EF, gF.SHAPE_FILL_GRADIENT, hg, zg),
  mF || (MF._2t(EF, gF[zw], hg, Bg), MF._2t(EF, gF.SHAPE_OUTLINE_STYLE, hg, $g), MF._2t(EF, gF.SHAPE_LINE_DASH, hg, Uo), MF._2t(EF, gF[rM], hg, Wo), MF._2t(EF, gF[Uw], hg, Ng), MF._2t(EF, gF[Xw], hg, Dg), MF._2t(EF, gF[Kw], hg, eM), MF._2t(EF, gF.IMAGE_BACKGROUND_COLOR, hg, YO), MF._2t(EF, gF[cT], hg, Co), MF._2t(EF, gF[pT], hg, Wf), MF._2t(EF, gF[uT], hg, mb), MF._2t(EF, gF.IMAGE_BORDER_RADIUS, hg, ZO), MF._2t(EF, gF[iS], hg, Vm), MF._2t(EF, gF[vT], hg, Km), MF._2t(EF, gF.IMAGE_BORDER_LINE_DASH_OFFSET, hg, Zm), MF._2t(EF, gF[aO], hg, uM), MF._2t(EF, gF[oO], hg, pM), MF._2t(EF, gF[cO], hg, xM), MF._2t(EF, gF.ARROW_FROM_STROKE, hg, EM), MF._2t(EF, gF[mM], hg, wM), MF._2t(EF, gF[xO], hg, OM), MF._2t(EF, gF[MM], hg, "fromArrowFillGradient"), MF._2t(EF, gF.ARROW_FROM_LINE_DASH, hg, SM), MF._2t(EF, gF[pO], hg, "fromArrowLineDashOffset"), MF._2t(EF, gF.ARROW_FROM_LINE_JOIN, hg, IM), MF._2t(EF, gF[EO], hg, PM), MF._2t(EF, gF[AM], hg, CM), MF._2t(EF, gF[OO], hg, LM), MF._2t(EF, gF.ARROW_TO, hg, lM), MF._2t(EF, gF.ARROW_TO_STROKE, hg, RM), MF._2t(EF, gF[NM], hg, DM), MF._2t(EF, gF[RO], hg, FM), MF._2t(EF, gF[GM], hg, zM), MF._2t(EF, gF.ARROW_TO_LINE_DASH, hg, HM), MF._2t(EF, gF.ARROW_TO_LINE_DASH_OFFSET, hg, "toArrowLineDashOffset"), MF._2t(EF, gF[qM], hg, UM), MF._2t(EF, gF.ARROW_TO_LINE_CAP, hg, WM));
  var SF = function (t, i) {
      return t = t[YE],
      i = i[YE],
      t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
    },
    jF = function (t, i) {
      this[pc] = new SD,
      D(this, jF, arguments),
      this.id = this[Bo].id,
      this[Uc] = i,
      this._f2 = [],
      this._n96 = new as
    };
  jF[yr] = {
      syncSelection: !1,
      graph: null,
      layoutByAnchorPoint: !1,
      _n96: null,
      _f2: null,
      addChild: function (t, i) {
        t._j0 = this,
        i !== n ? g(this._f2, t, i) : this._f2[Ea](t),
        t._dt && this._n76(t),
        this[nS](),
        this[eS](),
        this[sS] = !0
      },
      removeChild: function (t) {
        this._n96[hS](t),
        t._j0 = null,
        p(this._f2, t),
        this._ip && this._ip[Vh](t),
        this[eS](),
        this[sS] = !0
      },
      getProperty: function (t, i) {
        return i == T$[bc] ? this.graph[xc](this[Bo], t) : i == T$[vc] ? this[Bo][mr](t) : this.$data[t]
      },
      getStyle: function (t) {
        return this[Uc].getStyle(this[Bo], t)
      },
      _$z: function (t, i, n) {
        var e = this._n96[rS](this, t, i, n);
        return pF[rS](this, t, i, n) || e
      },
      onPropertyChange: function (t) {
        if (YE == t[cl]) return this[aS](),
        !0;
        if (BE == t[Df]) {
          if (FE == t[cl]) return this[FE](),
          !0;
          var i = t.value;
          return i && i.ui ? (nr == t[cl] ? this._8s(i) : Vh == t.kind && this[av](i.ui), !0) : !1
        }
        return this._$z(t.kind, t[vl] || xF, t.value)
      },
      label: null,
      initLabel: function () {
        var t = new PF;
        t[kr] = Ix,
        this[fS](t),
        this[Ix] = t
      },
      initialize: function () {
        this.initLabel(),
        this.$data._n8w && this[Bo]._n8w[s_](this._8s, this),
        pF.initBindingProperties(this),
        this._n96.initBindingProperties(this, !1)
      },
      addBinding: function (t, i) {
        return i.property ? (i[_c] = t, void this._n96._27(i.property, i)) : !1
      },
      _f8: function (t, i) {
        var n = this.$data;
        if (!n._n8w) return !1;
        var e = n._n8w[Cd](t.id);
        if (!e || !e[oS]) return !1;
        var s = e[oS];
        if (j(s)) {
          var h = !1;
          return l(s, function (t) {
            return Cf == t[dc] ? (h = fs(n, i, t[uc], t[vl]), !1) : void 0
          }, this),
          h
        }
        return Cf == s[dc] ? fs(n, i, s.property, s.propertyType) : !1
      },
      _8s: function (t) {
        var i = t.ui;
        if (i) {
          var n = t[oS];
          n && (Array[ar](n) ? n[s_](function (t) {
            this[_S](i, t)
          }, this) : this.addBinding(i, n)),
          this.addChild(i)
        }
      },
      validate: function () {
        return this._n7a || (this.initialize(), this._n7a = !0),
        this[aw]()
      },
      _$i: !0,
      invalidateChildrenIndex: function () {
        this._$i = !0
      },
      doValidate: function () {
        if (this._1p && (this._1p = !1, this.validateChildren() && (this[cS](), this[ko] = !0), this._$i && (this._$i = !1, fD ? this._f2 = d(this._f2, SF) : this._f2[uS](SF))), Wn[zh](this) && (this[Go] = !0), this[Go]) {
          _B[zh](this),
          this.uiBounds[Mo](this._ex);
          var t = this[dS] || 0,
            i = Math.max(this[dS] || 0, this[lS] || 0, this.$selectionShadowOffsetX || 0),
            n = Math.max(this.$shadowOffsetY || 0, this[vS] || 0),
            e = Math.max(2 * t, this[bS], this[yS]);
          e += pD.UI_BOUNDS_GROW || 0;
          var s = e - i,
            h = e + i,
            r = e - n,
            a = e + n;
          return 0 > s && (s = 0),
          0 > h && (h = 0),
          0 > r && (r = 0),
          0 > a && (a = 0),
          this[pc].grow(r, s, a, h),
          this[nw] && this.onBoundsChanged(),
          this[gS] = !0,
          !0
        }
      },
      validateChildren: function () {
        var t = this.$invalidateChild;
        this[sS] = !1;
        var i = this._n8ody,
          n = this.bodyChanged;
        i && (i.$renderColor = this.$renderColor, i[pS] = this.$renderColorBlendMode, i[xS] = this.$shadowColor, i[bS] = this[bS], i[lS] = this.$shadowOffsetX, i[ES] = this.$shadowOffsetY),
        this[mS] = !1,
        i && i._1p && (n = i[Tf]() || n, i.$x = 0, i.$y = 0, i[Go] && _B[zh](i), t = !0);
        for (var e = 0, s = this._f2[Gh]; s > e; e++) {
            var h = this._f2[e];
            if (h != i) {
              var r = h._1p && h[Tf]();
              (r || n) && h._hn && Zn(h, i, this),
              !t && r && (t = !0)
            }
          }
        return t
      },
      measure: function () {
        this._is.clear();
        for (var t, i, n = 0, e = this._f2.length; e > n; n++) t = this._f2[n],
        t._hn && (i = t._ex, i[sf] <= 0 || i.height <= 0 || this._is.addRect(t.$x + i.x, t.$y + i.y, i.width, i[tf]))
      },
      _ip: null,
      _n76: function (t) {
        if (!this._ip) {
          if (!t[HO]) return;
          return this._ip = new ED,
          this._ip[nr](t)
        }
        return t[HO] ? this._ip.add(t) : this._ip[Vh](t)
      },
      draw: function (t, i, n) {
        for (var e, s = 0, h = this._f2.length; h > s; s++) e = this._f2[s],
        e._hn && !e.showOnTop && e._j3(t, i, n, this)
      },
      _8w: function (t, i) {
        if (!this._hn || !this._ip || !this._ip.length) return !1;
        t[$y](),
        t[Vf](this.$x, this.$y),
        this[Eo] && this[mo] && t.rotate(this[mo]),
        (this[qm] || this[Um]) && t[Vf](this[qm], this[Um]),
        this[po] && t[$f](this[po]),
        this[To] && this._n7b && t[Vf](-this._n7b.x, -this._n7b.y),
        this.shadowColor && (t[Zy] = this[Zy], t.shadowBlur = this[Jy] * i, t[Ag] = this[Ag] * i, t[Qy] = this.shadowOffsetY * i),
        t[Yg]();
        for (var n, e = 0, s = this._f2[Gh]; s > e; e++) n = this._f2[e],
        n._hn && n[HO] && n._j3(t, i, this.selected, this);
        t[Ky]()
      },
      doHitTest: function (t, i, n) {
        if (n) {
          if (!this._is[qd](t - n, i - n, 2 * n, 2 * n)) return !1
        } else if (!this._is[Sf](t, i)) return !1;
        return this[wS](t, i, n)
      },
      hitTestChildren: function (t, i, n) {
        for (var e, s = this._f2.length - 1; s >= 0; s--) if (e = this._f2[s], e._hn && e[Qc](t, i, n)) return e;
        return !1
      },
      destroy: function () {
        this._i0ed = !0;
        for (var t, i = this._f2.length - 1; i >= 0; i--) t = this._f2[i],
        t[gc]()
      }
    },
  N(jF, bF),
  Z(jF[yr], {
      renderColorBlendMode: {
        get: function () {
          return this[pS]
        },
        set: function (t) {
          this[pS] = t,
          this._1p = !0,
          this[TS] && (this[TS][eg] = this[pS])
        }
      },
      renderColor: {
        get: function () {
          return this[kS]
        },
        set: function (t) {
          this[kS] = t,
          this._1p = !0,
          this[TS] && (this[TS][ig] = this[kS])
        }
      },
      bodyBounds: {
        get: function () {
          if (this[gS]) {
            this.$invalidateBounds = !1;
            var t, i = this[TS];
            t = i && i._hn && !this._$u() ? i._ex[Kh]() : this._ex[Kh](),
            this[$f] && Ni(t, this[$f], t),
            t.x += this.$x,
            t.y += this.$y,
            this._n9p = t
          }
          return this._n9p
        }
      },
      bounds: {
        get: function () {
          return new SD((this.$x || 0) + this.uiBounds.x, (this.$y || 0) + this[pc].y, this[pc].width, this[pc].height)
        }
      },
      body: {
        get: function () {
          return this._n8ody
        },
        set: function (t) {
          t && this._n8ody != t && (this._n8ody = t, this[mS] = !0, this[eS]())
        }
      }
    }),
  pD[OS] = 1;
  var IF = function () {
      D(this, IF, arguments)
    };
  IF.prototype = {
      strokeStyle: Xy,
      lineWidth: 0,
      fillColor: null,
      fillGradient: null,
      _iu: 1,
      _iw: 1,
      outline: 0,
      onDataChanged: function (t) {
        $(this, IF, _w, arguments),
        this._kh && this._7t && this._kh._66(this._7t, this),
        t && this._n8m(t)
      },
      _n8m: function (t) {
        this._kh = wn(t),
        this._kh[Tf](),
        (this._kh._lq == R$ || this._kh._6a()) && (this._7t || (this._7t = function () {
          this[Nm](),
          this._j0 && this._j0.graph && (this._j0.invalidateSize(), this._j0[Uc][FE]())
        }), this._kh._n84(this._7t, this))
      },
      _kh: null,
      initialize: function () {
        this._n8m(this.$data)
      },
      _54: function () {
        return this._kh && this._kh[Kf]
      },
      _9r: function (t) {
        if (!t || t.width <= 0 || t.height <= 0 || !this.$size || !(this.size instanceof Object)) return this._iu = 1,
        void(this._iw = 1);
        var i = this[om][sf],
          e = this[om][tf];
        if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e) return this._iu = 1,
        void(this._iw = 1);
        var s, h, r = t[sf],
          a = t[tf];
        i >= 0 && (s = i / r),
        e >= 0 && (h = e / a),
        0 > i ? s = h : 0 > e && (h = s),
        this._iu = s,
        this._iw = h
      },
      validateSize: function () {
        if (this[MS]) {
          this.$invalidateScale = !1;
          var t = this._originalBounds;
          this._iu,
          this._iw,
          this._9r(t),
          this.setMeasuredBounds(t[sf] * this._iu, t.height * this._iw, t.x * this._iu, t.y * this._iw)
        }
      },
      measure: function () {
        var t = this._kh[kf](this.lineWidth + this[Bg]);
        return t ? (this.$invalidateScale = !0, void(this._originalBounds = t.clone())) : void this._is[No](0, 0, 0, 0)
      },
      onBoundsChanged: function () {
        this[SS] = !0
      },
      _1s: function () {
        this[SS] = !1,
        this._fillGradient = this.fillGradient ? z$[yr][jS][zh](this[IS], this._7r) : null
      },
      _ja: function (t) {
        var i, n;
        if (pb == this.$adjustType) i = 1,
        n = -1;
        else {
          if (xb != this[PS]) return;
          i = -1,
          n = 1
        }
        var e = this._is.cx,
          s = this._is.cy;
        t[Vf](e, s),
        t.scale(i, n),
        t.translate(-e, -s)
      },
      draw: function (t, i, n, e) {
        if (this._iu && this._iw) {
          if (this.$invalidateFillGradient && this._1s(), t.save(), this[PS] && this._ja(t), this._kh._lq == D$) return t[yo](this._iu, this._iw),
          this._kh._lo[Kf](t, i, this, n, e || this),
          void t.restore();
          n && this._7q(t, i, e),
          this._kh.draw(t, i, this, this._iu, this._iw),
          t.restore()
        }
      },
      doHitTest: function (t, i, n) {
        if (this._kh[Qc]) {
          if (pb == this.$adjustType) {
            var e = this._is.cy;
            i = 2 * e - i
          } else if (xb == this.$adjustType) {
            var s = this._is.cx;
            t = 2 * s - t
          }
          t /= this._iu,
          i /= this._iw;
          var h = (this._iu + this._iw) / 2;
          return h > 1 && (n /= h, n = 0 | n),
          this._kh._lo instanceof hB ? this._kh._lo[Qc](t, i, n, !0, this[AS], this[CS] || this[IS]) : this._kh[Qc](t, i, n)
        }
        return !0
      },
      $invalidateScale: !0,
      $invalidateFillGradient: !0
    },
  N(IF, bF),
  hs(IF[yr], {
      adjustType: {},
      fillColor: {},
      size: {
        validateFlags: [tb, LS]
      },
      fillGradient: {
        validateFlags: [RS]
      }
    }),
  Z(IF.prototype, {
      originalBounds: {
        get: function () {
          return this._originalBounds
        }
      }
    }),
  pD[NS] = ID[hl];
  var PF = function () {
      D(this, PF, arguments),
      this[zO] = pD[CT]
    };
  PF[yr] = {
      color: pD[CT],
      showPointer: !0,
      fontSize: null,
      fontFamily: null,
      fontStyle: null,
      _h2: null,
      alignPosition: null,
      measure: function () {
        this[yf];
        var t = zi(this[Bo], this[DS] || pD[Od], this[$S]);
        if (this._h2 = t, this[BS]) {
          var i = this.$size[sf] || 0,
            n = this[BS][tf] || 0;
          return this[FS](i > t[sf] ? i : t.width, n > t[tf] ? n : t[tf])
        }
        return this[FS](t.width, t.height)
      },
      doHitTest: function (t, i, n) {
        return this[Bo] ? Ln(t, i, n, this) : !1
      },
      draw: function (t, i, n, e) {
        n && this._7q(t, i, e);
        var s = this.$fontSize || pD[Od];
        if (this[Eo] && this.$_hostRotate) {
          var h = vn(this[mo]);
          h > mD && 3 * mD > h && (t[Vf](this._is[sf] / 2, this._is[tf] / 2), t[$f](Math.PI), t[Vf](-this._is[sf] / 2, -this._is[tf] / 2))
        }
        var r = this.alignPosition || pD[NS],
          a = r.horizontalPosition,
          f = r[qr],
          o = s * pD[Ty],
          _ = o / 2;
        if (f != LD && this._h2[tf] < this._is[tf]) {
            var c = this._is[tf] - this._h2[tf];
            _ += f == RD ? c / 2 : c
          }
        t[Vf](0, _),
        t[yf] != this[$S] && (t[yf] = this[$S]),
        a == AD ? (t[Fy] = Zc, t[Vf](this._is[sf] / 2, 0)) : a == CD ? (t[Fy] = zr, t.translate(this._is[sf], 0)) : t[Fy] = la,
        t[Gy] = zy,
        t[Fg] = this[zO];
        for (var u = 0, d = this.$data[Dr](gf), l = 0, v = d[Gh]; v > l; l++) {
            var b = d[l];
            t[Vy](b, 0, u),
            u += o
          }
      },
      _54: function () {
        return null != this[Bo] || this.$size
      },
      $invalidateFont: !0
    },
  N(PF, bF),
  hs(PF[yr], {
      size: {
        validateFlags: [hb]
      },
      fontStyle: {
        validateFlags: [hb, GS]
      },
      fontSize: {
        validateFlags: [hb, GS]
      },
      fontFamily: {
        validateFlags: [hb, GS]
      }
    }),
  Z(PF[yr], {
      font: {
        get: function () {
          return this[zS] && (this[zS] = !1, this.$font = (this.$fontStyle || pD.FONT_STYLE) + ir + (this[DS] || pD[Od]) + Md + (this.$fontFamily || pD[Sd])),
          this[$S]
        }
      }
    });
  var AF = function (t) {
      t = t || new hB,
      this.pathBounds = new SD,
      D(this, AF, [t])
    };
  AF.prototype = {
      layoutByPath: !0,
      layoutByAnchorPoint: !1,
      measure: function () {
        this.$invalidateFromArrow = !0,
        this[YS] = !0,
        this[Bo][kf](this.$lineWidth + this[HS], this[qS]),
        this[FS](this[qS])
      },
      validateSize: function () {
        if (this[US] || this.$invalidateToArrow) {
          var t = this.pathBounds[Kh]();
          if (this.$invalidateFromArrow) {
            this[US] = !1;
            var i = this[WS]();
            i && t.add(i)
          }
          if (this[YS]) {
            this[YS] = !1;
            var i = this[XS]();
            i && t.add(i)
          }
          this[FS](t)
        }
      },
      validateFromArrow: function () {
        if (!this.$data._j8 || !this[VS]) return void(this.$fromArrowShape = null);
        var t = this[Bo],
          i = 0,
          n = 0,
          e = this.$fromArrowOffset;
        e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._j8)),
        this.fromArrowLocation = t[to](i, n),
        this[KS][$f] = Math.PI + this[KS][$f] || 0,
        this[ZS] = Ds(this[VS], this.$fromArrowSize);
        var s = this.$fromArrowShape[kf](this[JS].lineWidth + this[JS][Bg]);
        return this[QS] instanceof w$[tj] ? this[JS]._fillGradient = z$.prototype[jS][zh](this[QS], s) : this[JS] && (this[JS]._fillGradient = null),
        Di(s, this.fromArrowLocation[$f], s, s.right, s.cy),
        s[ow](this[KS].x, this.fromArrowLocation.y),
        s
      },
      validateToArrow: function () {
        if (!this[Bo]._j8 || !this[ij]) return void(this.$toArrowShape = null);
        var t = this[Bo],
          i = 0,
          n = 0,
          e = this[nj];
        e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0),
        0 > i && i > -1 && (i *= t._j8),
        i += t._j8,
        this[ej] = t[to](i, n),
        this[sj] = Ds(this.$toArrow, this[hj]);
        var s = this[sj].getBounds(this[rj][Lf] + this.toArrowStyles[Bg]);
        return this[zM] instanceof w$.Gradient ? this[rj]._fillGradient = z$[yr][jS][zh](this[zM], s) : this.toArrowStyles && (this[rj]._fillGradient = null),
        Di(s, this.toArrowLocation[$f], s, s[zr], s.cy),
        s.offset(this.toArrowLocation.x, this[ej].y),
        s
      },
      _2j: function (t) {
        var i = t ? "from" : QE,
          e = this[i + aj];
        e === n && (e = this.$lineWidth);
        var s = this[i + fj];
        s === n && (s = this[qy]);
        var h = this[i + oj];
        h || (this[i + oj] = h = {}),
        h[Lf] = e,
        h[qy] = s,
        h[Uo] = this[i + _j],
        h[Wo] = this[i + cj],
        h.fillColor = this[i + uj],
        h.fillGradient = this[i + dj],
        h[Ng] = this[i + lj],
        h.lineJoin = this[i + vj],
        h.outline = this[i + bj] || 0,
        h[$g] = this[i + yj]
      },
      doValidate: function () {
        return this[VS] && this._2j(!0),
        this[ij] && this._2j(!1),
        $(this, AF, aw)
      },
      drawArrow: function (t, i, n, e) {
        if (this[VS] && this[ZS]) {
          t[$y]();
          var s = this[KS],
            h = s.x,
            r = s.y,
            a = s[$f];
          t[Vf](h, r),
          a && t.rotate(a),
          this[ZS].draw(t, i, this[JS], n, e),
          t[Ky]()
        }
        if (this[ij] && this[sj]) {
          t[$y]();
          var s = this[ej],
            h = s.x,
            r = s.y,
            a = s[$f];
          t.translate(h, r),
          a && t[$f](a),
          this.$toArrowShape.draw(t, i, this[rj], n, e),
          t.restore()
        }
      },
      outlineStyle: null,
      outline: 0,
      onBoundsChanged: function () {
        this.$invalidateFillGradient = !0
      },
      _1s: function () {
        this.$invalidateFillGradient = !1,
        this._fillGradient = this[IS] ? z$.prototype[jS][zh](this[IS], this._7r) : null
      },
      draw: function (t, i, n, e) {
        this[SS] && this._1s(),
        this[Bo][Kf](t, i, this, n, e),
        this.drawArrow(t, i, n, e)
      },
      doHitTest: function (t, i, n) {
        if (this[Bo][Qc](t, i, n, !0, this[AS] + this[HS], this.$fillColor || this[IS])) return !0;
        if (this[ij] && this[sj]) {
          var e = t - this[ej].x,
            s = i - this[ej].y;
          if (this[ej].rotate) {
              var h = Ci(e, s, -this[ej][$f]);
              e = h.x,
              s = h.y
            }
          var r = this.toArrowStyles[Gg] || this[rj][zg];
          if (this[sj][Qc](e, s, n, !0, this[rj][Lf], r)) return !0
        }
        if (this[VS] && this[ZS]) {
          var e = t - this[KS].x,
            s = i - this.fromArrowLocation.y;
          if (this[KS][$f]) {
              var h = Ci(e, s, -this.fromArrowLocation[$f]);
              e = h.x,
              s = h.y
            }
          var r = this[JS][Gg] || this.fromArrowStyles[zg];
          if (this[ZS].hitTest(e, s, n, !0, this[JS][Lf], r)) return !0
        }
        return !1
      },
      $fromArrowOutline: 0,
      $toArrowOutline: 0,
      $invalidateFillGradient: !0,
      $invalidateFromArrow: !0,
      $invalidateToArrow: !0
    },
  N(AF, bF),
  hs(AF[yr], {
      fillColor: {},
      fillGradient: {
        validateFlags: [RS]
      },
      fromArrowOffset: {
        validateFlags: [gj, tb]
      },
      fromArrowSize: {
        validateFlags: [gj, tb]
      },
      fromArrow: {
        validateFlags: [gj, tb]
      },
      fromArrowOutline: {
        validateFlags: [gj, tb]
      },
      fromArrowStroke: {
        validateFlags: [gj, tb]
      },
      toArrowOffset: {
        validateFlags: [pj, tb]
      },
      toArrowSize: {
        validateFlags: [pj, tb]
      },
      toArrow: {
        validateFlags: [pj, tb]
      },
      toArrowOutline: {
        validateFlags: [pj, tb]
      },
      toArrowStroke: {
        validateFlags: [pj, tb]
      },
      outline: {
        value: 0,
        validateFlags: [hb]
      }
    }),
  Z(AF[yr], {
      length: {
        get: function () {
          return this[Cf][Gh]
        }
      }
    }),
  os.prototype = {
      shape: null,
      path: null,
      initialize: function () {
        $(this, os, rw),
        this[lm] = new hB,
        this[lm]._dh = !1,
        this[oM] = new AF(this.path),
        this.addChild(this[oM], 0),
        this._n8ody = this.shape,
        kF[xj](this)
      },
      _24: !0,
      _5n: null,
      _$u: function () {
        return !1
      },
      _4f: function () {
        return !1
      },
      validatePoints: function () {
        this.shape.invalidateData();
        var t = this[Bo],
          i = this[lm];
        i.clear();
        var n = t[S_],
          e = t.toAgent;
        n && e && Ys(this, t, i, n, e)
      },
      drawLoopedEdge: function (t, i, n, e) {
        Ws(this, e, t)
      },
      drawEdge: function (t, i, n, e, s, h) {
        var r = this[xc](gF.EDGE_FROM_OFFSET),
          a = this[xc](gF.EDGE_TO_OFFSET);
        if (r && (s.x += r.x || 0, s.y += r.y || 0), a && (h.x += a.x || 0, h.y += a.y || 0), e == T$[Ej]) {
            var f = s[Zc],
              o = h[Zc],
              _ = (f.x + o.x) / 2,
              c = (f.y + o.y) / 2,
              u = f.x - o.x,
              d = f.y - o.y,
              l = Math.sqrt(u * u + d * d),
              v = Math.atan2(d, u);
            v += Math.PI / 6,
            l *= .04,
            l > 30 && (l = 30);
            var b = Math[Qa](v) * l,
              y = Math[Ja](v) * l;
            return t[z_](_ - y, c + b),
            void t.lineTo(_ + y, c - b)
          }
        var g = Us(this, this[Cf], s, h, i, n, s[Zc], h[Zc]);
        g && (t._f4 = g)
      },
      _2r: function () {
        if (!this[Bo].isBundleEnabled()) return null;
        var t = this[Uc]._83._84(this[Bo]);
        if (!t || !t[mj](this[Uc]) || !t._fu) return null;
        var i = t[wj](this);
        return t[Tj](this.$data) || (i = -i),
        i
      },
      checkBundleLabel: function () {
        var t = this[kj]();
        return t ? (this[VM] || this[Oj](), this[VM]._hn = !0, void(this.bundleLabel.data = t)) : void(this[VM] && (this[VM]._hn = !1, this[VM][Cf] = null))
      },
      createBundleLabel: function () {
        var t = new PF;
        t[Mj] = !1,
        this[VM] = t,
        this.addChild(this[VM]),
        OF.initBindingProperties(this)
      },
      getBundleLabel: function () {
        return this[Uc][kj](this[Cf])
      },
      doValidate: function () {
        return this._24 && (this._24 = !1, this.validatePoints()),
        this[Sj](),
        $(this, os, aw)
      },
      _4e: function () {
        this._24 = !0,
        this[eS]()
      },
      _$z: function (t, i, n) {
        var e = this._n96.onBindingPropertyChange(this, t, i, n);
        return e = pF[rS](this, t, i, n) || e,
        this.bundleLabel && this[VM].$data && (e = OF[rS](this, t, i, n) || e),
        kF.onBindingPropertyChange(this, t, i, n) || e
      }
    },
  N(os, jF),
  os[jj] = function (t, i, n, e) {
      if (t.moveTo(i.x, i.y), !e || e == T$[Ij]) return void t[z_](n.x, n.y);
      if (e == T$.EDGE_TYPE_VERTICAL_HORIZONTAL) t[z_](i.x, n.y);
      else if (e == T$[Oc]) t[z_](n.x, i.y);
      else if (0 == e[er](T$[Gc])) {
        var s;
        s = e == T$.EDGE_TYPE_ORTHOGONAL_HORIZONTAL ? !0 : e == T$[Pj] ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y);
        var h = (i.x + n.x) / 2,
          r = (i.y + n.y) / 2;
        s ? (t[z_](h, i.y), t[z_](h, n.y)) : (t.lineTo(i.x, r), t[z_](n.x, r))
      }
      t[z_](n.x, n.y)
    },
  Z(os.prototype, {
      length: {
        get: function () {
          return this[lm] ? this[lm].length : 0
        }
      }
    }),
  os[yr][ef] = function (t, i, n) {
      var e = Mn(this[lm], t, i, n);
      if (e && e[Gh] > 2) {
        var s = this[Cf],
          h = e[e[Gh] - 1];
        s[Aj] = h[Df] == J$ ? e[Uh](1, e[Gh] - 2) : e[Uh](1, e[Gh] - 1)
      }
    },
  _s.prototype = {
      _2y: null,
      image: null,
      initialize: function () {
        $(this, _s, rw),
        this._n74(),
        wF[xj](this)
      },
      _n8m: function () {
        this[Cf].image ? this[hg] && (this[TS] = this[hg]) : this[Ix] && (this.body = this.label)
      },
      _n74: function () {
        this[hg] = new IF,
        this[fS](this[hg], 0),
        this._n8m()
      },
      doValidate: function () {
        this.body && (this instanceof ih && !this[Bo][Am] && this._4z() ? this[TS].$layoutByAnchorPoint = !1 : (this[TS][To] = null != this._2y, this[TS][_m] = this._2y));
        var t = this[Bo][im],
          i = 0,
          n = 0;
        t && (i = t.x, n = t.y);
        var e = this.$x != i || this.$y != n;
        return e && (this[gS] = !0),
        this.$x = i,
        this.$y = n,
        jF[yr].doValidate[zh](this) || e
      },
      _$z: function (t, i, n) {
        var e = this._n96[rS](this, t, i, n);
        return e = pF[rS](this, t, i, n) || e,
        wF.onBindingPropertyChange(this, t, i, n) || e
      }
    },
  N(_s, jF);
  var CF = function (t, i) {
      return t = t[Bo].zIndex || 0,
      i = i[Bo].zIndex || 0,
      t - i
    };
  cs[yr] = {
      _ka: 1,
      _n8z: null,
      _7n: null,
      _80: null,
      _$g: !0,
      _mu: null,
      _mt: null,
      _jp: null,
      _n7d: null,
      _68: !1,
      _n7a: !1,
      _j6: null,
      _4d: function (t, i) {
        for (var n = this._n8z, e = 0, s = n.length; s > e; e++) if (t[zh](i, n[e]) === !1) return !1
      },
      _e3: function (t, i) {
        this._mu.forEach(t, i)
      },
      _10: function (t, i) {
        for (var n = this._n8z, e = n.length - 1; e >= 0; e--) if (t.call(i, n[e]) === !1) return !1
      },
      _45: function (t, i) {
        this._mu[Cj](t, i)
      },
      _3s: function (t, i) {
        this._7i && this._7i._3s && this._7i._3s(t, i)
      },
      _n9c: function () {
        this._j6._4c(),
        this._k3 && this._k3[Lj] ? this._j6._ei(0, 0) : this._j6._2p = !0
      },
      _47: function () {
        return this._$g && (this._$g = !1, this._23()),
        this._80
      },
      _3q: function () {
        return this._j6._16 ? !1 : (this._j6._16 = !0, void this._n8y())
      },
      _n8y: function () {
        this._68 || (this._68 = !0, m(this._fa[Ly](this)))
      },
      _n78: function () {
        var t = !this._n7a || 0 == this._mu.length;
        this._n7a || (this._n7a = !0, this._n9c(), this._$g = !0),
        this._n7l(t);
        var i = this._jp.g;
        if (this._mu[Fo]()) return i._kc(),
        this._topCanvas._j3(),
        this._68 = !1,
        this._j6._jb(this, !0),
        void this._47();
        if (this._j6._jb(this, this._k3[Rj] || this._n7d._mk), this._jq) {
          var n = this._ks;
          i.canvas.ratio && (n *= i.canvas[lf]),
          this._jq(i, n, t)
        }
        this._n7d._kc(),
        this._j6._75(),
        this._topCanvas._j3(),
        this._68 = !1
      },
      _fa: function () {
        this._68 && (this._i0ed || (this._n7a && this._k3 && this._k3._$t && (this._k3._$t = !1, this._k3.forEach(function (t) {
          t[$E](!0)
        })), this._n78(), this._2l()))
      },
      _gx: null,
      _1i: function (t, i, n, e, s) {
        if (!n || !e) return void this._5k();
        var h = this._n8z,
          r = this._7n;
        this._5k(),
        this._gx.length = 0;
        var a, f = {},
          o = this._n7d;
        s = s || o._mk;
        for (var _, c, u, d, l, v, b = this._mu._j1, y = t + n, g = i + e, p = 0, x = b[Gh]; x > p; p++) if (v = b[p], l = v.__oldBounds, v.__oldBounds = null, v._hn) if (d = v.__isChanged, v.__isChanged = !1, _ = v.uiBounds, c = _.x + v.$x, u = _.y + v.$y, y > c && g > u && c + _[sf] > t && u + _[tf] > i) {
            if (a = v[Bo][YE], a in f || (f[a] = !0, this._gx[Ea](a || 0)), h.push(v), this._7n[v.id] = v, s) continue;
            l && (o._mj(l.x, l.y, l[sf], l[tf]), s = o._mk),
            d && (o._mj(c, u, _[sf], _.height), s = o._mk)
          } else!s && r[v.id] && l && (o._mj(l.x, l.y, l[sf], l[tf]), s = o._mk);
        else!s && l && (o._mj(l.x, l.y, l.width, l[tf]), s = o._mk)
      },
      _n9g: function (t) {
        var i = t.$data.__hnChanged;
        return t.$data.__hnChanged = !1,
        t._1p || t[Bo]._68 ? (t[Bo]._68 = !1, t._n7a && (t.__oldBounds = {
          x: t.$x + t[pc].x,
          y: t.$y + t[pc].y,
          width: t[pc][sf],
          height: t[pc][tf]
        }), t.__isChanged = t.validate(), i || t.__isChanged) : (i && t._n7a && (t.__oldBounds = {
          x: t.$x + t[pc].x,
          y: t.$y + t[pc].y,
          width: t[pc].width,
          height: t[pc].height
        }), i)
      },
      _jq: function (t, i, n, e) {
        e = e || this._j6._77;
        var s = e.x,
          h = e.y,
          r = e[sf],
          a = e[tf];
        this._1i(s, h, r, a, n),
        this._47(),
        this._gx.length && (fD ? (this._gx[uS](), this._n8z = d(this._n8z, CF)) : this._n8z[uS](CF));
        try {
            this._i5(t, i)
          } catch (f) {
            w$[Jf](f),
            this._kpFlag || (this._kpFlag = !0, this._k3[FE]())
          }
      },
      _i5: function (t, i) {
        t[$y](),
        this._n7d._jo(t, this._jp, this._j6),
        this._j6._n7s(t);
        for (var n, e, s = this._n8z, h = [], r = 0, a = s.length; a > r; r++) n = s[r],
        e = n.uiBounds,
        (this._n7d._mk || this._n7d._e6(e.x + n.$x, e.y + n.$y, e.width, e[tf])) && (n._j3(t, i), n._ip && n._ip[Gh] && h[Ea](n));
        if (h[Gh]) for (r = 0, a = h[Gh]; a > r; r++) h[r]._8w(t, i);
        t.restore()
      },
      _fz: function (t, i, n) {
        t[$y](),
        t[Vf](-n.x * i, -n.y * i),
        t[yo](i, i);
        var e, s, h = this._mu._j1[qh]();
        this._gx[Gh] && (fD ? (this._gx.sort(), h = d(h, CF)) : h.sort(CF));
        for (var r = [], a = 0, f = h[Gh]; f > a; a++) e = h[a],
        e._hn && (s = e.uiBounds, n[qd](s.x + e.$x, s.y + e.$y, s.width, s[tf]) && (e._j3(t, i), e._ip && e._ip[Gh] && r.push(e)));
        if (r[Gh]) for (a = 0, f = r[Gh]; f > a; a++) r[a]._8w(t, i);
        t[Ky]()
      },
      _13: function () {},
      _23: function () {
        for (var t, i, n = this._mu._j1, e = new SD, s = n[Gh] - 1; s >= 0; s--) t = n[s],
        t._hn && (i = t[pc], e[Ud](t.$x + i.x, t.$y + i.y, i.width, i[tf]));
        var h = this._80;
        this._80 = e,
        e[Al](h) || this._13(h, e)
      },
      _n7l: function () {
        for (var t, i = this._mu._j1, n = i.length - 1; n >= 0; n--) t = i[n],
        this._n9g(t) && !this._$g && (this._$g = !0)
      },
      _1x: function (t, i, n, e) {
        this._n7d._mk || (t && (t > 0 && this._n7d._mj(this._j6._77.x, this._j6._77.y, t / this._j6._ks, this._j6._8y / this._j6._ks), n + t < this._j6._n7q && this._n7d._mj(this._j6._77.x + (n + t) / this._j6._ks, this._j6._77.y, (this._j6._n7q - n - t) / this._j6._ks, this._j6._8y / this._j6._ks)), i && (i > 0 && this._n7d._mj(this._j6._77.x, this._j6._77.y, this._j6._n7q / this._j6._ks, i / this._j6._ks), e + i < this._j6._8y && this._n7d._mj(this._j6._77.x, this._j6._77.y + (e + i) / this._j6._ks, this._j6._n7q / this._j6._ks, (this._j6._8y - e - i) / this._j6._ks)))
      },
      _d8: function (t, i) {
        this._n8y(),
        this._j6._d8(t, i)
      },
      _n75: function (t, i, n) {
        this._n8y(),
        this._j6._n75(t, i, n)
      },
      _8h: function () {},
      _g8: function (t, i, n) {
        return this._n7a ? void(this._j6._g8(t, i, n) !== !1 && this._n8y()) : void(this._j6._ks = t)
      },
      _1n: function () {
        var t = this._47();
        if (!t[Fo]()) {
          var i = this._j6._n7q / t[sf],
            n = this._j6._8y / t[tf],
            e = Math[ro](i, n);
          return e = Math.max(this._gh, Math[ro](this._gi, e)),
          {
              scale: e,
              cx: t.cx,
              cy: t.cy
            }
        }
      },
      _jj: function (t, i, n) {
        return this._j6._jj(t, i, n) === !1 ? !1 : void this._n8y()
      },
      _hx: function (t, i) {
        return this._j6._hx(t, i) === !1 ? !1 : void this._n8y()
      },
      _jk: function (t, i) {
        return this._j6._jk(t, i) === !1 ? !1 : void this._n8y()
      },
      _6e: function () {
        return this._j6._6eFlag ? !1 : (this._j6._6eFlag = !0, void this._n8y())
      },
      _5k: function () {
        this._n8z.length = 0,
        this._7n = {}
      },
      _k5: function () {
        this._kc()
      },
      _i0: function () {
        this._kc(),
        this._i0ed = !0,
        this._68 = !1,
        this._topCanvas[nf](),
        this._7y[Gh] = 0,
        this._7i && (this._7i._i0(), delete this._7i)
      },
      _kc: function () {
        this._n7a = !1,
        this._$g = !0,
        this._mu[nf](),
        this._5k(),
        this._n7d._kc(),
        this._n8y()
      },
      _7v: function (t, i, n, e) {
        var s = this._ks;
        return new SD(this._n9t(t), this._n8l(i), n / s, e / s)
      },
      _n9t: function (t) {
        return this._j6._n9t(t)
      },
      _n8l: function (t) {
        return this._j6._n8l(t)
      },
      _dc: function (t) {
        return this._j6._dc(t)
      },
      _dd: function (t) {
        return this._j6._dd(t)
      },
      _k4: function (t) {
        return this._mu.getById(t.id || t)
      },
      _$j: function (t) {
        var i = this._7s(t);
        return i.x = this._n9t(i.x),
        i.y = this._n8l(i.y),
        i
      },
      _g1: function (t, i) {
        return {
          x: this._dc(t),
          y: this._dd(i)
        }
      },
      _df: function (t, i) {
        return {
          x: this._n9t(t),
          y: this._n8l(i)
        }
      },
      _7s: function (t) {
        return yi(t, this._jpPanel)
      },
      _3j: function (t) {
        if (t[Nj] !== n) return t[Nj] ? this._mu[Cd](t[Nj]) : null;
        var i = Math.round(pD.SELECTION_TOLERANCE / this._j6._ks) || .1;
        this._jp[lf] && (i *= this._jp[lf]);
        for (var e, s = this._$j(t), h = s.x, r = s.y, a = this._n8z, f = a[Gh] - 1; f >= 0; f--) if (e = a[f], e._hn && e[Qc](h, r, i)) return t.uiId = e.id,
        e;
        t[Nj] = null
      },
      hitTest: function (t) {
        var i = this._3j(t);
        if (!i) return null;
        var n = Math.round(pD[py] / this._j6._ks) || 1;
        this._jp.ratio && (n *= this._jp.ratio);
        var e = this._$j(t),
          s = e.x,
          h = e.y,
          r = i[Qc](s, h, n, !0);
        return r instanceof bF ? r : i
      },
      _n70: function (t) {
        t.id !== n && (t = t.id);
        var i = this._mu[Cd](t);
        return i ? new SD((i.$x || 0) + i[pc].x, (i.$y || 0) + i[pc].y, i[pc][sf], i.uiBounds.height) : void 0
      },
      _7y: null,
      _2l: function () {
        if (!this._7y[Gh]) return !1;
        var t = this._7y;
        this._7y = [],
        l(t, function (t) {
          try {
            t[Jp] ? E(t[zh], t[Pl], t.delay) : t[zh][zh](t[Pl])
          } catch (i) {}
        }, this),
        this._fa()
      },
      callLater: function (t, i, n) {
        i && O(i) && (n = i, i = null);
        var e = this._7y;
        e[Ea]({
          call: t,
          scope: i,
          delay: n
        }),
        this._68 || this._2l()
      },
      _6x: function () {
        return this._jpPanel || this._5h(),
        this._jpPanel
      },
      _5h: function () {
        var t = i.createElement(ru);
        t[Zh] = DF,
        t.tabIndex = 0,
        this._jp = us(t),
        this.ratio = this._jp[lf] || 1,
        this._topCanvas = new ah(this, t),
        this._jpPanel = t
      },
      _dg: function (t) {
        var i = this._6x();
        i.parentNode && i[Py][av](i),
        t.appendChild(this._6x()),
        T(t, Dj)
      }
    },
  bi($j, Bj);
  var LF = {
      position: pu,
      "user-select": gu,
      outline: gu,
      "transform-origin": Fj,
      "-webkit-tap-highlight-color": tp
    },
    RF = Gj;
  bi($r + RF, LF);
  var NF = {
      width: xu,
      height: xu,
      overflow: yu,
      outline: gu,
      padding: zj
    },
    DF = Yj;
  bi($r + DF, NF),
  Z(cs[yr], {
      _77: {
        get: function () {
          return this._j6._77
        }
      },
      _ek: {
        get: function () {
          return this._j6._ek
        },
        set: function (t) {
          return !t || 1 > t ? !1 : void(this._j6._ek = t)
        }
      },
      _gi: {
        get: function () {
          return this._j6._gi
        },
        set: function (t) {
          return !t || 1 > t ? !1 : void(this._j6._gi = t)
        }
      },
      _gh: {
        get: function () {
          return this._j6._gh
        },
        set: function (t) {
          return !t || 0 >= t ? !1 : void(this._j6._gh = t)
        }
      },
      _ks: {
        get: function () {
          return this._j6._gd()
        },
        set: function (t) {
          this._g8(t)
        }
      },
      _mz: {
        get: function () {
          return this._j6._ku()
        }
      },
      _n4: {
        get: function () {
          return this._j6._kw()
        }
      }
    }),
  ds[yr] = {
      _n9s: null,
      _n7q: 0,
      _8y: 0,
      _2p: !0,
      _16: !0,
      _j6: null,
      _77: null,
      _ek: 1.3,
      _gi: 10,
      _gh: .1,
      _ks: 1,
      _mz: 0,
      _n4: 0,
      _75: function () {
        this._j6._g3(this._n9s._jp)
      },
      _4c: function () {
        return this._16 = !1,
        this._5q(this._n9s._jpPanel[nd], this._n9s._jpPanel[ku])
      },
      _5q: function (t, i) {
        return this._n7q == t && this._8y == i ? !1 : (this._n7q = t, this._8y = i, void this._n9s._3s(t, i))
      },
      _ei: function (t, i, n) {
        n && (n = Math[pf](this._gh, Math.min(this._gi, n)), this._ks = n),
        this._mz = this._n7q / 2 - t * this._ks,
        this._n4 = this._8y / 2 - i * this._ks,
        this._2p = !0
      },
      _33: function (t, i) {
        t = t || this._n7q,
        i = i || this._8y,
        this._77[No](-this._mz / this._ks, -this._n4 / this._ks, t / this._ks, i / this._ks)
      },
      _jj: function (t, i, n) {
        return this._g8(this._5o() * t, i, n)
      },
      _jk: function (t, i) {
        return this._g8(this._5o() * this._ek, t, i)
      },
      _hx: function (t, i) {
        return this._g8(this._5o() / this._ek, t, i)
      },
      _g8: function (t, i, e) {
        this._6eFlag = !1,
        t = Math[pf](this._gh, Math[ro](this._gi, t));
        var s = this._5o();
        return i === n && (i = this._n7q / 2, e = this._8y / 2),
        t != s && (this._2p = !0, this._n9s._8h(s, t)),
        this._j6._g8(t / this._ks, i, e)
      },
      _5o: function () {
        return this._ks * this._j6._ks
      },
      _d8: function (t, i) {
        this._j6._d8(t, i)
      },
      _n75: function (t, i, n) {
        var e = this._ku(),
          s = this._kw(),
          h = this._gd();
        return n && (n = Math[pf](this._gh, Math[ro](this._gi, n))),
        t != e || i != s || n && n != h ? (n && n != h ? (n /= this._ks, this._2p = !0) : n = this._j6._ks, t -= e * n, i -= s * n, this._j6._9p(n, t, i), this._n9s._3g(e, s, h, arguments[0], arguments[1], arguments[2]), h != arguments[2] && this._n9s._8h(h, arguments[2]), !0) : !1
      },
      _6e: function () {
        this._6eFlag = !0
      },
      _gd: function () {
        return this._ks * this._j6._ks
      },
      _ku: function () {
        return this._mz * this._j6._ks + this._j6._mz
      },
      _kw: function () {
        return this._n4 * this._j6._ks + this._j6._n4
      },
      _jb: function (t, i) {
        this._16 && this._4c(),
        lD && uD && (i = !0);
        var n = t._jp,
          e = n[lf] || 1,
          s = n[nd],
          h = n[ku],
          r = this._n7q != s,
          a = this._8y != h,
          f = r || a;
        f && t._topCanvas._jp[vf](this._n7q, this._8y);
        var o = this._mz,
          _ = this._n4,
          c = this._ks;
        if (this._6eFlag) {
            this._6eFlag = !1;
            var u = t._1n();
            u && this._ei(u.cx, u.cy, u.scale)
          }
        if (this._2p || i || f) return this._2p = !1,
        this._ks *= this._j6._ks,
        this._mz = this._mz * this._j6._ks + this._j6._mz,
        this._n4 = this._n4 * this._j6._ks + this._j6._n4,
        this._j6._ks = 1,
        this._j6._mz = 0,
        this._j6._n4 = 0,
        f && n.setSize(this._n7q, this._8y),
        t._n7d._mk = !0,
        this._33(this._n7q, this._8y),
        void((o != this._mz || _ != this._n4 || c != this._ks) && (t._3g(o, _, c, this._mz, this._n4, this._ks), c != this._ks && t._8h(c, this._ks)));
        var d = this._j6._mz,
          l = this._j6._n4;
        if (d || l) {
            this._j6._mz = 0,
            this._j6._n4 = 0,
            this._mz += d,
            this._n4 += l,
            this._33(s, h);
            var v = n.g;
            this._d4(v, n, d * e, l * e),
            t._1x(d, l, s, h),
            t._3g(o, _, c, this._mz, this._n4, this._ks)
          }
      },
      _d4: function (t, n, e, s) {
        var h = this._n8ackCanvas;
        h || (h = this._n8ackCanvas = i[cf](rf), h.g = h[uf](df)),
        h[sf] = n[sf],
        h[tf] = n.height,
        h.g[Ry](n, e, s),
        t._kc(),
        t[Ry](h, 0, 0)
      },
      _n7s: function (t) {
        1 != t[rf].ratio && t[yo](t[rf][lf], t.canvas[lf]),
        t[Vf](this._mz, this._n4),
        t.scale(this._ks, this._ks)
      },
      _n9t: function (t) {
        return (t - this._mz) / this._ks
      },
      _n8l: function (t) {
        return (t - this._n4) / this._ks
      },
      _dc: function (t) {
        return t * this._ks + this._mz
      },
      _dd: function (t) {
        return t * this._ks + this._n4
      }
    };
  var $F = function () {
      this._fj = [],
      this._is = new SD
    };
  $F[yr] = {
      _fk: 20,
      _fj: null,
      _mk: !1,
      _is: null,
      _kc: function () {
        this._mk = !1,
        this._fj[Gh] = 0,
        this._is.clear()
      },
      _ib: function () {
        return this._mk || this._fj.length > 0
      },
      _mj: function (t, i, n, e) {
        this._mk || 0 >= n || 0 >= e || (this._fj[Ea]({
          x: t,
          y: i,
          width: n,
          height: e
        }), this._is[Ud](t, i, n, e))
      },
      _fg: function (t) {
        this._mj(t.x, t.y, t[sf], t.height)
      },
      _e6: function (t, i, n, e) {
        if (!this._is[qd](t, i, n, e)) return !1;
        if (gD || this._fj[Gh] >= this._fk) return !0;
        for (var s, h = 0, r = this._fj[Gh]; r > h; h++) if (s = this._fj[h], hi(t, i, n, e, s.x, s.y, s[sf], s.height)) return !0;
        return !1
      },
      _jo: function (t, i, n) {
        if (this._mk) return t[lo](1, 0, 0, 1, 0, 0),
        void(uD && 4.3 > yD ? (t.clearRect(0, 0, i[sf], i.height), i[Qr][wE] = gu, i[Fu], i[Qr].display = Hj) : t[bo](0, 0, i[sf], i[tf]));
        t[Yg]();
        var e, s, h, r, a = n._ks,
          f = this._fj,
          o = i[lf] || 1;
        if (gD || f[Gh] >= this._fk) return e = n._dc(this._is.x) * o,
        s = n._dd(this._is.y) * o,
        h = X(e + this._is.width * a * o) - (e = W(e)),
        r = X(s + this._is.height * a * o) - (s = W(s)),
        t.clearRect(e, s, h, r),
        t[$b](e, s, h, r),
        void t[Qg]();
        for (var _, c = 0, u = f.length; u > c; c++) _ = f[c],
        e = n._dc(_.x) * o,
        s = n._dd(_.y) * o,
        h = X(e + _[sf] * a * o) - (e = W(e)),
        r = X(s + _[tf] * a * o) - (s = W(s)),
        t.clearRect(e, s, h, r),
        t[$b](e, s, h, r);
        t[Qg]()
      }
    };
  var BF = {};
  BF[gF[Ey]] = pD[Ey],
  BF[gF.SELECTION_BORDER] = pD[vw],
  BF[gF[xy]] = pD[xy],
  BF[gF[yy]] = T$[gy],
  BF[gF.SELECTION_SHADOW_OFFSET_X] = 2,
  BF[gF[xw]] = 2,
  BF[gF[CT]] = pD[CT],
  BF[gF[ST]] = ID[qj],
  BF[gF[AT]] = ID.CENTER_TOP,
  BF[gF[FT]] = new jD(0, 2),
  BF[gF[zT]] = 8,
  BF[gF[KO]] = 8,
  BF[gF[HT]] = !0,
  BF[gF[tk]] = 0,
  BF[gF[nk]] = Xy,
  BF[gF[rk]] = !0,
  BF[gF[sk]] = null,
  BF[gF.LABEL_BACKGROUND_GRADIENT] = null,
  BF[gF[Dk]] = Uj,
  BF[gF[Rk]] = 1.5,
  BF[gF[eO]] = !0,
  BF[gF[hO]] = !0,
  BF[gF[bk]] = V(3438210798),
  BF[gF[Wj]] = 1,
  BF[gF[gk]] = Xy,
  BF[gF.ARROW_TO] = !0,
  BF[gF[oO]] = pD[zc],
  BF[gF.ARROW_TO_SIZE] = pD[zc],
  BF[gF[nu]] = 10,
  BF[gF[$c]] = 8,
  BF[gF.EDGE_CORNER] = T$.EDGE_CORNER_ROUND,
  BF[gF.EDGE_SPLIT_BY_PERCENT] = !0,
  BF[gF[Ec]] = 20,
  BF[gF.EDGE_SPLIT_PERCENT] = .5,
  BF[gF[wc]] = 20,
  BF[gF[Wk]] = 20,
  BF[gF.EDGE_BUNDLE_LABEL_ANCHOR_POSITION] = ID[qj],
  BF[gF.EDGE_BUNDLE_LABEL_POSITION] = ID[sl],
  BF[gF[XM]] = Xj,
  BF[gF[Cw]] = 1,
  BF[gF[Vj]] = Kj,
  BF[gF.RENDER_COLOR_BLEND_MODE] = pD[so],
  BF[gF[kw]] = 1,
  pD.LOOKING_EDGE_ENDPOINT_TOLERANCE = 2,
  T$[Zj] = Jj,
  T$.NAVIGATION_NONE = Qj,
  T$.NAVIGATION_BUTTON = tI,
  pD.NAVIGATION_TYPE = T$[Zj];
  var FF = function (t, n) {
      this._k3 = t,
      M(n) && (n = i.getElementById(n)),
      n && n[Dd] || (n = i[cf](ru)),
      D(this, FF, [n]),
      this._k3._$v[sd](this._14, this),
      this._k3._$c.addListener(this._22, this),
      this._k3._1w.addListener(this._8o, this),
      this._k3._18[sd](this._7a, this),
      this._k3._$o.addListener(this._38, this),
      this._k3._$r[sd](this._3z, this),
      this._n7p = {},
      this._41(pD.NAVIGATION_TYPE, !0)
    };
  FF[yr] = {
      _$l: null,
      _3z: function (t) {
        var i = t.source,
          n = t[Cf];
        if (n) if (this._n7a) {
            var e, s;
            if (j(n)) for (var h = 0, r = n[Gh]; r > h; h++) s = n[h].id,
            e = this._mu[Cd](s),
            e && (e[zm] = i[T_](s), e[aS]());
            else {
              if (s = n.id, e = this._mu[Cd](s), !e) return;
              e[zm] = i[T_](s),
              e[aS]()
            }
            this._n8y()
          } else {
            this._$l || (this._$l = {});
            var e, s;
            if (j(n)) for (var h = 0, r = n[Gh]; r > h; h++) s = n[h].id,
            this._$l[s] = !0;
            else s = n.id,
            this._$l[s] = !0
          }
      },
      _k3: null,
      _n9u: function (t) {
        var i = t[zE];
        return i ? new i(t, this._k3) : void 0
      },
      _14: function () {},
      _22: function (t) {
        if (!this._n7a) return !1;
        var i = t[Zf],
          n = t[cl];
        qE == n && this._k3.invalidateVisibility(),
        zE == n ? (this._mu.removeById(i.id), this._k6(i)) : Sm == n && i._hl() && t[Or] && this._5s(i);
        var e = this._mu[Cd](i.id);
        e && e._n7a && e[iI](t) && this._n8y()
      },
      _3o: function (t) {
        var i = this._k4(t);
        i && (i[Nm](), this._n8y())
      },
      _8o: function (t) {
        if (!this._n7a) return !1;
        switch (this._$g = !0, t.kind) {
        case VD[Fl]:
          this._k6(t[Cf]);
          break;
        case VD[Gl]:
          this._gm(t.data);
          break;
        case VD[zl]:
          this._hh(t.data)
        }
      },
      _kc: function () {
        this._n7p = {},
        $(this, FF, nI)
      },
      _n7p: null,
      _k6: function (t) {
        var i = this._n9u(t);
        i && (this._mu.add(i), this._n7a && (this._n7p[t.id] = t), this._n8y())
      },
      _gm: function (t) {
        if (w$[ar](t)) {
          for (var i, n = [], e = 0, s = t.length; s > e; e++) i = t[e].id,
          n.push(i),
          delete this._n7p[i];
          t = n
        } else t = t.id,
        delete this._n7p[t];
        this._mu[Vh](t) && this._n8y()
      },
      _hh: function () {
        this._kc()
      },
      _7a: function (t) {
        return this._n7a ? void(t[Zf] instanceof uF && !this._n7p[t.source.id] && (t[El] && (this._3o(t[El]), t.oldValue.__68 = !0), t[Or] && (this._3o(t[Or]), t.value.__68 = !0), this._5s(t.source))) : !1
      },
      _38: function (t) {
        return this._n7a ? void(t[Zf] instanceof uF && !this._n7p[t[Zf].id] && this._5s(t.source)) : !1
      },
      _n7l: function (t) {
        return t ? this._$x() : void this._94()
      },
      _3a: function (t) {
        if (t._edgeBundleInvalidateFlag) {
          var i = t.getEdgeBundle(!0);
          if (!i) return t._edgeBundleInvalidateFlag = !1,
          void t[eI]();
          i._fa(this._k3),
          i._n81(function (t) {
            t[eI]()
          })
        }
      },
      _$x: function () {
        var t, i = (this._k3, this._k3.graphModel),
          n = this._mu,
          e = [],
          s = 1;
        if (i[sI](function (i) {
            return i instanceof cF ? (this._3a(i), void e[Ea](i)) : (t = this._n9u(i), void(t && (n.add(t), t._hn = this._ea(i, !1, !0), i.__l1 = s++)))
          }, this), n[Gh]) for (var h = n._j1, s = h[Gh] - 1; s >= 0; s--) t = h[s],
        t._hn && this._3p(t, t[Bo]);
        for (var r, s = 0, a = e[Gh]; a > s; s++) if (r = e[s], t = this._n9u(r)) if (t._hn = this._ea(r, !0, !0), t._hn) {
            this._3p(t, r, !0),
            n.add(t);
            var f = r.fromAgent,
              o = r.toAgent,
              _ = f.__l1 || 0;
            f != o && (_ = Math[pf](_, o.__l1 || 0)),
            r.__l1 = _
          } else n.add(t);
        if (e.length && n._j1.sort(function (t, i) {
            return t.$data.__l1 - i[Bo].__l1
          }), this._$l) {
            var c = i.selectionModel;
            for (var u in this._$l) if (c[T_](u)) {
              var t = n.getById(u);
              t && (t[zm] = !0)
            }
            this._$l = null
          }
      },
      _94: function () {
        for (var t in this._n7p) {
          var i = this._n7p[t];
          i instanceof uF ? this._5s(i) : this._5u(i)
        }
        this._n7p = {};
        for (var n, e, s, h = this._mu._j1, r = [], a = h[Gh] - 1; a >= 0; a--) n = h[a],
        e = n[Bo],
        s = e instanceof cF,
        s && this._3a(e),
        n._hn = this._ea(e, s),
        n._hn ? s ? r[Ea](n) : this._3p(n, e) && !this._$g && (this._$g = !0) : e.__hnChanged && n._n7a && (n.__oldBounds = {
          x: n.$x + n[pc].x,
          y: n.$y + n[pc].y,
          width: n[pc][sf],
          height: n[pc][tf]
        });
        if (r[Gh]) for (var a = 0, f = r[Gh]; f > a; a++) n = r[a],
        this._3p(n, n[Bo]) && !this._$g && (this._$g = !0)
      },
      _3p: function (t, i, e) {
        if (e || e === n && i instanceof cF) return i.__4e && (i.__4e = !1, t._4e()),
        this._n9g(t);
        if (i.__68 && i._hl() && (t._50(), i.__68 = !1), this._n9g(t)) {
          var s = this._46(i);
          return s && (s.__68 = !0),
          i.hasEdge() && i.forEachEdge(function (t) {
            t.__4e = !0
          }, this),
          !0
        }
      },
      _3c: function (t, i) {
        var n = t[S_],
          e = t.toAgent,
          s = i.getIndexById(n.id);
        if (n == e) return s;
        var h = i.getIndexById(e.id);
        return Math[pf](s, h)
      },
      _3d: function (t, i) {
        var n = this[Mu]._h8(t);
        return n ? i.getIndexById(n.id) : 0
      },
      _5s: function (t) {
        var i = this._mu,
          n = i[Cd](t.id);
        if (!n) throw new Error(hI + t[kr] + rI);
        var s = this._3d(t, i),
          h = [n];
        t[Yh]() && e(t, function (t) {
            t instanceof uF && (n = i[Cd](t.id), n && h[Ea](n))
          }, this),
        this._4a(i, s, h)
      },
      _5u: function (t) {
        var i = this._mu[Cd](t.id);
        if (i) {
          var n = this._3c(t, this._mu);
          this._mu[aI](i, n)
        }
      },
      _4a: function (t, i, n) {
        function e(t) {
          s[nr](t)
        }
        var s = new ED;
        l(n, function (n) {
          i = t[fI](n, i),
          n[Bo][od](e)
        }, this),
        0 != s.length && s[s_](this._5u, this)
      },
      _84: function (t) {
        return t[M_](!0)
      },
      _5x: function (t) {
        if (!t.isBundleEnabled()) return !1;
        var i = t.getEdgeBundle(!0);
        i && i[oI]() !== !1 && this._n8y()
      },
      _46: function (t) {
        var i = pe(t);
        return i && i[Sm] ? i : null
      },
      _gq: function (t) {
        return pe(t)
      },
      _3f: function (t, i, n) {
        t._$t = !1;
        var e = t._hn;
        t._hn = this._54(t, i),
        n || t._hn == e || (t.__hnChanged = !0)
      },
      _54: function (t, i) {
        return this._42(t, i) ? !this._k3._hnFilter || this._k3._hnFilter(t) !== !1 : !1
      },
      _ea: function (t, i, n) {
        return t._$t && this._3f(t, i, n),
        t._hn
      },
      _9e: function (t) {
        return !this._k3._3v || this._k3._3v == th(t)
      },
      _42: function (t, i) {
        if (t.visible === !1) return !1;
        if (i === n && (i = t instanceof cF), !i) return this._k3._3v != th(t) ? !1 : !t._dk;
        var e = t[S_],
          s = t.toAgent;
        if (!e || !s) return !1;
        if (e == s && !t[P_]()) return !1;
        if (t.isBundleEnabled()) {
            var h = t.getEdgeBundle(!0);
            if (h && !h._ea(t)) return !1
          }
        var r = this._ea(e, !1),
          a = this._ea(s, !1);
        return r && a ? !0 : !1
      },
      _7g: null,
      _7i: null,
      _41: function (t, i) {
        return i || t != this._7g ? (this._7g = t, this._7i && (this._7i._i0(), delete this._7i), t == T$.NAVIGATION_SCROLLBAR ? void(this._7i = new hh(this, this._jpPanel)) : t == T$[_I] ? void(this._7i = new sh(this, this._jpPanel)) : void 0) : !1
      },
      _3g: function (t, i, n, e, s, h) {
        this._k3._4v(new FD(this._k3, uu, {
          tx: e,
          ty: s,
          scale: h
        }, {
          tx: t,
          ty: i,
          scale: n
        })),
        this._60()
      },
      _8h: function (t, i) {
        this._k3._4v(new FD(this._k3, yo, i, t))
      },
      _60: function () {
        this._7i && this._7i._jb(),
        this._k3._4v(new FD(this._k3, Of))
      },
      _13: function (t, i) {
        this._k3._4v(new FD(this._k3, cI, i, t)),
        this._60()
      }
    },
  N(FF, cs),
  Z(FF.prototype, {
      graphModel: {
        get: function () {
          return this._k3._k3Model
        }
      }
    });
  var GF = function (i, n) {
      this._$v = new UD,
      this._$v.on(function (t) {
        xm == t.kind && this[$E]()
      }, this),
      this._1w = new UD,
      this._1w.addListener(function (t) {
        !this[xm] || t.kind != VD.KIND_CLEAR && t[cl] != VD.KIND_REMOVE || this.graphModel.contains(this[xm]) || (this[xm] = null)
      }, this),
      this._$c = new UD,
      this._18 = new UD,
      this._$o = new UD,
      this._$r = new UD,
      this[Mu] = n || new is,
      this._83 = new FF(this, i),
      this._32 = new Ph(this),
      this._1h = new UD,
      this._onresize = h$(t, uI, function () {
        this[dI]()
      }, !1, this),
      this._83._jpPanel[lI] = function (t) {
        this.ondrop(t)
      }[Ly](this),
      this._83._jpPanel[vI] = function (t) {
        this[vI](t)
      }[Ly](this)
    };
  GF[yr] = {
      fullRefresh: !1,
      originAtCenter: !0,
      editable: !1,
      ondragover: function (t) {
        w$.stopEvent(t)
      },
      getDropInfo: function (t, i) {
        var n = null;
        if (i) try {
          n = JSON[a_](i)
        } catch (e) {}
        return n
      },
      ondrop: function (t) {
        var i = t[bI];
        if (i) {
          var n = i[Tv](Wu),
            e = this[yI](t, n);
          e || (e = {}, e.image = i[Tv](hg), e[Df] = i[Tv](Df), e[Ix] = i[Tv](Ix), e[Am] = i[Tv](Am));
          var s = this.globalToLocal(t);
          if (s = this[gI](s.x, s.y), !(this[pI] instanceof Function && this[pI].call(this, t, s, e) === !1) && (e.image || e[Ix])) {
              var h = e[hg],
                r = e[Df],
                a = e.label,
                f = e.groupImage;
              w$[xI](t);
              var o;
              if (r && EI != r ? Rm == r ? o = this[mI](a, s.x, s.y) : bm == r ? o = this[wI](a, s.x, s.y) : Cm == r ? (o = this.createGroup(a, s.x, s.y), f && (f = Qs(f), f && (o[Am] = f))) : (r = J(r), r instanceof Function && r[yr] instanceof uF && (o = new r, o.name = a, o.location = new TD(s.x, s.y), this._k3Model.add(o))) : o = this.createNode(a, s.x, s.y), o) {
                  if (h && (h = Qs(h), h && (o.image = h)), t.shiftKey) {
                    var _ = this[va](t);
                    (_.enableSubNetwork || _ instanceof vF) && (o[k_] = _)
                  }
                  if (e[TI]) for (var c in e[TI]) o[c] = e[TI][c];
                  if (e.clientProperties) for (var c in e.clientProperties) o[No](c, e[kI][c]);
                  if (e[OI] && o[UE](e.styles), this[MI](o, t, e) === !1) return !1;
                  var u = new Ih(this, Ih[SI], t, o);
                  return this[jI](u),
                  o
                }
            }
        }
      },
      enableDoubleClickToOverview: !0,
      _83: null,
      _$v: null,
      _1w: null,
      _$c: null,
      _$r: null,
      _18: null,
      _$o: null,
      _1z: function (t) {
        return this._$v[Il](t)
      },
      _4v: function (t) {
        this._$v[wr](t)
      },
      isVisible: function (t) {
        return this._83._ea(t)
      },
      isMovable: function (t) {
        return (t instanceof uF || t instanceof cF && t[tu]()) && t[II] !== !1
      },
      isSelectable: function (t) {
        return t[PI] !== !1
      },
      isEditable: function (t) {
        return t[Mj] !== !1
      },
      isRotatable: function (t) {
        return t.rotatable !== !1
      },
      isResizable: function (t) {
        return t[AI] !== !1
      },
      canLinkFrom: function (t) {
        return t[CI] !== !1 && t.canLinkFrom !== !1
      },
      canLinkTo: function (t) {
        return t[CI] !== !1 && t[LI] !== !1
      },
      createNode: function (t, i, n) {
        var e = new uF(t, i, n);
        return this._k3Model[nr](e),
        e
      },
      createText: function (t, i, n) {
        var e = new es(t, i, n);
        return this._k3Model.add(e),
        e
      },
      createShapeNode: function (t, i, n, e) {
        O(i) && (e = n, n = i, i = null);
        var s = new dF(t, i);
        return s.$location = new TD(n, e),
        this._k3Model[nr](s),
        s
      },
      createGroup: function (t, i, n) {
        var e = new vF(t, i, n);
        return this._k3Model[nr](e),
        e
      },
      createEdge: function (t, i, n) {
        if (t instanceof uF) {
          var e = n;
          n = i,
          i = t,
          t = e
        }
        var s = new cF(i, n);
        return t && (s.$name = t),
        this._k3Model[nr](s),
        s
      },
      addElement: function (t, i) {
        this._k3Model[nr](t),
        i && t[Yh]() && t[B_](function (t) {
          this[RI](t, i)
        }, this)
      },
      removeElement: function (t) {
        this._k3Model.remove(t)
      },
      clear: function () {
        this._k3Model[nf]()
      },
      getStyle: function (t, i) {
        var e = t._iq[i];
        return e !== n ? e : this.getDefaultStyle(i)
      },
      getDefaultStyle: function (t) {
        if (this._iq) {
          var i = this._iq[t];
          if (i !== n) return i
        }
        return BF[t]
      },
      translate: function (t, i, n) {
        return n ? this[NI](this.tx + t, this.ty + i, this.scale, n) : this._83._d8(t, i)
      },
      translateTo: function (t, i, n, e) {
        if (e) {
          var s = this._4y();
          return s._kz(t, i, n, e)
        }
        return this._83._n75(t, i, n)
      },
      centerTo: function (t, i, n, e) {
        return (!n || 0 >= n) && (n = this.scale),
        this[NI](this.width / 2 - t * n, this.height / 2 - i * n, n, e)
      },
      moveToCenter: function (t, i) {
        this.callLater(function () {
          var n = this[Of];
          this.centerTo(n.cx, n.cy, t, i)
        }, this)
      },
      zoomToOverview: function (t, i) {
        return this.callLater(function () {
          var n = this._83._1n();
          n && (i && (n[yo] = Math.min(n.scale, i)), this.centerTo(n.cx, n.cy, n.scale, t))
        }, this)
      },
      zoomAt: function (t, i, e, s) {
        if (s === n && (s = this[DI] === n || null === this[DI] ? pD[Iu] : this.zoomAnimation), i === n && (i = this[sf] / 2), i = i || 0, e === n && (e = this[tf] / 2), e = e || 0, s) {
          var h = this[yo];
          return t = h * t,
          t >= this.maxScale || t <= this[$I] ? !1 : (i = t * (this.tx - i) / h + i, e = t * (this.ty - e) / h + e, this[NI](i, e, t, s))
        }
        return this._83._jj(t, i, e)
      },
      zoomOut: function (t, i, n) {
        return n ? this.zoomAt(1 / this.scaleStep, t, i, n) : this._83._hx(t, i)
      },
      zoomIn: function (t, i, n) {
        return n ? this[BI](this[FI], t, i, n) : this._83._jk(t, i)
      },
      _4y: function () {
        return this._panAnimation || (this._panAnimation = new WF(this)),
        this._panAnimation
      },
      enableInertia: !0,
      _9b: function (t, i) {
        var n = this._4y();
        return n._f6(t || 0, i || 0)
      },
      stopAnimation: function () {
        this._panAnimation && this._panAnimation._ly()
      },
      getUI: function (t) {
        return Q(t) ? this._83._3j(t) : this._83._k4(t)
      },
      getUIByMouseEvent: function (t) {
        return this._83._3j(t)
      },
      hitTest: function (t) {
        return this._83.hitTest(t)
      },
      globalToLocal: function (t) {
        return this._83._7s(t)
      },
      toCanvas: function (t, i) {
        return this._83._g1(t, i)
      },
      toLogical: function (t, i) {
        return Q(t) ? this._83._$j(t) : this._83._df(t, i)
      },
      getElementByMouseEvent: function (t) {
        var i = this._83._3j(t);
        return i ? i[Bo] : void 0
      },
      getElement: function (t) {
        if (Q(t)) {
          var i = this._83._3j(t);
          return i ? i[Bo] : null
        }
        return this._k3Model[Cd](t)
      },
      invalidate: function () {
        this._83._n8y()
      },
      invalidateUI: function (t) {
        t[FE](),
        this[FE]()
      },
      invalidateElement: function (t) {
        this._83._3o(t)
      },
      getUIBounds: function (t) {
        return this._83._n70(t)
      },
      forEachVisibleUI: function (t, i) {
        return this._83._4d(t, i)
      },
      forEachReverseVisibleUI: function (t, i) {
        return this._83._10(t, i)
      },
      forEachUI: function (t, i) {
        return this._83._e3(t, i)
      },
      forEachReverseUI: function (t, i) {
        return this._83._45(t, i)
      },
      forEach: function (t, i) {
        return this._k3Model.forEach(t, i)
      },
      getElementByName: function (t) {
        var i;
        return this._k3Model['forEach'](function (n) {
          console.log(t);
          return n['name'] == t ? (i = n, !1) : void 0
        }),
        i
      },
      getElementByIp: function (t) {
        var i;
        return this._k3Model['forEach'](function (n) {
          console.log(t);
          return n['ip'] == t ? (i = n, !1) : void 0
        }),
        i
      },
      focus: function (i) {
        if (i) {
          var n = t[Ku] || t[_a],
            e = t.scrollY || t[ua];
          return this[Pv][GI](),
          void t[zI](n, e)
        }
        this[Pv][GI]()
      },
      callLater: function (t, i, n) {
        this._83[YI](t, i, n)
      },
      exportImage: function (t, i) {
        return _h(this, t, i)
      },
      setSelection: function (t) {
        return this._k3Model._selectionModel[No](t)
      },
      select: function (t) {
        return this._k3Model._selectionModel.select(t)
      },
      unselect: function (t) {
        return this._k3Model._selectionModel.unselect(t)
      },
      reverseSelect: function (t) {
        return this._k3Model._selectionModel.reverseSelect(t)
      },
      selectAll: function () {
        fh(this)
      },
      unSelectAll: function () {
        this[Ou].clear()
      },
      unselectAll: function () {
        this[HI]()
      },
      isSelected: function (t) {
        return this._k3Model._selectionModel.contains(t)
      },
      sendToTop: function (t) {
        me(this._k3Model, t)
      },
      sendToBottom: function (t) {
        we(this._k3Model, t)
      },
      moveElements: function (t, i, n) {
        var e = [],
          s = new ED;
        return l(t, function (t) {
            t instanceof uF ? e[Ea](t) : t instanceof cF && s[nr](t)
          }),
        this._er(e, i, n, s)
      },
      _er: function (t, i, n, e) {
        if (0 == i && 0 == n || 0 == t[Gh] && 0 == e[Gh]) return !1;
        if (0 != t[Gh]) {
          var s = this._4i(t);
          e = this._4p(s, e),
          l(s, function (t) {
            var e = t[im];
            e ? t[qI](e.x + i, e.y + n) : t[qI](i, n)
          })
        }
        return e && e[Gh] && this._es(e, i, n),
        !0
      },
      _es: function (t, i, n) {
        t[s_](function (t) {
          t[Wv](i, n)
        })
      },
      _4p: function (t, i) {
        return this[Mu][s_](function (n) {
          n instanceof cF && this[UI](n) && t[Jc](n[S_]) && t[Jc](n.toAgent) && i[nr](n)
        }, this),
        i
      },
      _4i: function (t) {
        var i = new ED;
        return l(t, function (t) {
          !this[UI](t),
          i[nr](t),
          xe(t, i, this._movableFilter)
        }, this),
        i
      },
      reverseExpanded: function (t) {
        return this._83._5x(t)
      },
      _32: null,
      _1h: null,
      beforeInteractionEvent: function (t) {
        return this._1h[Il](t)
      },
      onInteractionEvent: function (t) {
        this._1h[wr](t)
      },
      addCustomInteraction: function (t) {
        this._32[WI](t)
      },
      enableWheelZoom: !0,
      enableTooltip: !0,
      getTooltip: function (t) {
        return t.tooltip || t.name
      },
      updateViewport: function () {
        this._83._3q();
        var t = new FD(this, XI);
        this._4v(t)
      },
      destroy: function () {
        this._4v(new FD(this, gc, !0, this._i0ed)),
        this._i0ed = !0,
        r$(t, uI, this._onresize),
        G(this, VI),
        this._32[gc](),
        this.graphModel = new is;
        var i = this[KI];
        this._83._i0(),
        i && (i[ZI] = "")
      },
      onPropertyChange: function (t, i, n) {
        this._$v.addListener(function (e) {
          e.kind == t && i[zh](n, e)
        })
      },
      removeSelection: function () {
        var t = this.selectionModel._j1;
        return t && 0 != t.length ? (t = t.slice(), this._k3Model.remove(t), t) : !1
      },
      removeSelectionByInteraction: function (t) {
        var i = this.selectionModel[_v];
        return i && 0 != i.length ? void w$.confirm(JI + i.length, function () {
          var i = this[QI]();
          if (i) {
            var n = new Ih(this, Ih.ELEMENT_REMOVED, t, i);
            this.onInteractionEvent(n)
          }
        }, this) : !1
      },
      createShapeByInteraction: function (t, i, n, e) {
        var s = new hB(i);
        i[Gh] > 2 && s[go]();
        var h = this.createShapeNode(tP, s, n, e);
        this[MI](h, t);
        var r = new Ih(this, Ih.ELEMENT_CREATED, t, h);
        return this[jI](r),
        h
      },
      createLineByInteraction: function (t, i, n, e) {
        var s = new hB(i),
          h = this.createShapeNode(iP, s, n, e);
        h[yc](w$[nP][$w], null),
        h[yc](w$[nP].SHAPE_FILL_GRADIENT, null),
        h[yc](w$[nP].LAYOUT_BY_PATH, !0),
        this[MI](h, t);
        var r = new Ih(this, Ih[SI], t, h);
        return this[jI](r),
        h
      },
      createEdgeByInteraction: function (t, i, n, e) {
        var s = this[eP](sP, t, i);
        if (e) s._8u = e;
        else {
          var h = this[hP],
            r = this[Wc];
          this.interactionProperties && (h = this.interactionProperties[zE] || h, r = this[rP][Wc] || r),
          h && (s[zE] = h),
          r && (s[Wc] = r)
        }
        this[MI](s, n);
        var a = new Ih(this, Ih[SI], n, s);
        return this[jI](a),
        s
      },
      onElementCreated: function (t) {
        !t[k_] && this[xm] && (t[k_] = this[xm])
      },
      allowEmptyLabel: !1,
      startLabelEdit: function (t, i, n, e) {
        /*var s = this;
        n[aP](e.x, e.y, i[Cf], this.getStyle(t, gF[RT]), function (n) {
          return s.onLabelEdit(t, i, n, i[k_])
        })*/
      },
      onLabelEdit: function (t, i, n, e) {
        return n || this[fP] ? void(Ix == i[kr] ? t.name = n : e._f8(i, n) === !1 && (i.data = n, this[oP](t))) : (w$.alert(_P), !1)
      },
      setInteractionMode: function (t, i) {
        this.interactionMode = t,
        this[rP] = i
      },
      upSubNetwork: function () {
        return this._3v ? this.currentSubNetwork = th(this._3v) : !1
      },
      _$t: !1,
      invalidateVisibility: function () {
        this._$t = !0,
        this[FE]()
      },
      getBundleLabel: function (t) {
        var i = t[M_](!0);
        return i && i[cP] == t ? uP + i[dP][Gh] : null
      },
      zoomAnimation: null
    },
  Z(GF.prototype, {
      center: {
        get: function () {
          return this[gI](this[KI].clientWidth / 2, this[KI][ku] / 2)
        }
      },
      visibleFilter: {
        get: function () {
          return this._hnFilter
        },
        set: function (t) {
          this._hnFilter = t,
          this[$E]()
        }
      },
      topCanvas: {
        get: function () {
          return this._83._topCanvas
        }
      },
      propertyChangeDispatcher: {
        get: function () {
          return this._$v
        }
      },
      listChangeDispatcher: {
        get: function () {
          return this._1w
        }
      },
      dataPropertyChangeDispatcher: {
        get: function () {
          return this._$c
        }
      },
      selectionChangeDispatcher: {
        get: function () {
          return this._$r
        }
      },
      parentChangeDispatcher: {
        get: function () {
          return this._18
        }
      },
      childIndexChangeDispatcher: {
        get: function () {
          return this._$o
        }
      },
      interactionDispatcher: {
        get: function () {
          return this._1h
        }
      },
      cursor: {
        set: function (t) {
          this[Pv].style[lP] = t || this._32[Nu]
        },
        get: function () {
          return this.canvasPanel.style[lP]
        }
      },
      interactionMode: {
        get: function () {
          return this._32._n9urrentMode
        },
        set: function (t) {
          var i = this[vP];
          i != t && (this._32[hd] = t, this._4v(new FD(this, vP, t, i)))
        }
      },
      scaleStep: {
        get: function () {
          return this._83._ek
        },
        set: function (t) {
          this._83._ek = t
        }
      },
      maxScale: {
        get: function () {
          return this._83._gi
        },
        set: function (t) {
          this._83._gi = t
        }
      },
      minScale: {
        get: function () {
          return this._83._gh
        },
        set: function (t) {
          this._83._gh = t
        }
      },
      scale: {
        get: function () {
          return this._83._ks
        },
        set: function (t) {
          return this._83._ks = t
        }
      },
      tx: {
        get: function () {
          return this._83._mz
        }
      },
      ty: {
        get: function () {
          return this._83._n4
        }
      },
      styles: {
        get: function () {
          return this._iq
        },
        set: function (t) {
          this._iq = t
        }
      },
      selectionModel: {
        get: function () {
          return this._k3Model._selectionModel
        }
      },
      graphModel: {
        get: function () {
          return this._k3Model
        },
        set: function (t) {
          if (this._k3Model == t) return !1;
          var i = this._k3Model,
            n = new FD(this, Mu, i, t);
          return this._1z(n) === !1 ? !1 : (null != i && (i[bP][Ll](this._$v, this), i.listChangeDispatcher.removeListener(this._1w, this), i[tv][Ll](this._$c, this), i[iv].removeListener(this._18, this), i.childIndexChangeDispatcher.removeListener(this._$o, this), i[Ql][Ll](this._$r, this)), this._k3Model = t, this._k3Model && (this._k3Model[bP].addListener(this._$v, this), this._k3Model[Jl][sd](this._1w, this), this._k3Model[tv][sd](this._$c, this), this._k3Model[iv][sd](this._18, this), this._k3Model[nv][sd](this._$o, this), this._k3Model[Ql][sd](this._$r, this)), this._83 && this._83._k5(), void this._4v(n))
        }
      },
      count: {
        get: function () {
          return this._k3Model[Gh]
        }
      },
      width: {
        get: function () {
          return this[KI][nd]
        }
      },
      height: {
        get: function () {
          return this[KI].clientHeight
        }
      },
      viewportBounds: {
        get: function () {
          return this._83._77
        }
      },
      bounds: {
        get: function () {
          return this._83._47()
        }
      },
      canvasPanel: {
        get: function () {
          return this._83._jpPanel
        }
      },
      html: {
        get: function () {
          return this._83._jpPanel[Py]
        }
      },
      navigationType: {
        get: function () {
          return this._83._7g
        },
        set: function (t) {
          this._83._41(t)
        }
      },
      _3v: {
        get: function () {
          return this._k3Model._3v
        }
      },
      currentSubNetwork: {
        get: function () {
          return this._k3Model.currentSubNetwork
        },
        set: function (t) {
          this._k3Model[xm] = t
        }
      }
    }),
  pD.GROUP_MIN_WIDTH = 60,
  pD[yP] = 60,
  ih[yr] = {
      initialize: function () {
        $(this, ih, rw),
        this[aM]()
      },
      _n7k: function () {
        this._lp = new hB,
        this[oM] = new IF(this._lp),
        this.shape.layoutByPath = !1,
        this.addChild(this[oM], 0),
        this[TS] = this[oM]
      },
      checkBody: function () {
        return this._4z() ? (this._2c = !0, this[oM] ? (this[oM].visible = !0, this[TS] = this.shape) : (this._n7k(), TF.initBindingProperties(this)), void(this[hg] && (this[hg][GO] = !1))) : (this[hg] ? (this[hg][GO] = !0, this.body = this.image) : this._n74(), void(this.shape && (this[oM][GO] = !1)))
      },
      _4z: function () {
        return this.$data._hl() && this.$data[Sm]
      },
      _lp: null,
      _2c: !0,
      _50: function () {
        this._1p = !0,
        this._2c = !0
      },
      doValidate: function () {
        if (this._2c && this._4z()) {
          if (this._2c = !1, this[oM][Nm](), this[Bo][Am]) {
            this[oM][Cf] = this[Bo].groupImage;
            var t = this._2b();
            return this.shape[qm] = t.x + t[sf] / 2,
            this[oM][Um] = t.y + t[tf] / 2,
            this[oM][om] = {
              width: t[sf],
              height: t[tf]
            },
            _s.prototype[aw].call(this)
          }
          this.shape.offsetX = 0,
          this.shape[Um] = 0;
          var i = this._8f(this.$data[Pm]);
          this._lp.clear(),
          i instanceof SD ? Ce(this._lp, i.x, i.y, i.width, i[tf], i.rx, i.ry) : i instanceof hn ? Le(this._lp, i) : i instanceof rn && Re(this._lp, i),
          this._lp._68 = !0,
          this.shape[Nm]()
        }
        return _s[yr].doValidate[zh](this)
      },
      _6k: function (t, i, n) {
        switch (t) {
        case T$.GROUP_TYPE_CIRCLE:
          return new hn(0, 0, Math[pf](i, n) / 2);
        case T$[gP]:
          return new rn(0, 0, i, n);
        default:
          return new SD(-i / 2, -n / 2, i, n)
        }
      },
      _2b: function () {
        return this._8f(null)
      },
      _8f: function (t) {
        var i = this[Cf],
          n = i.padding,
          e = i[Im],
          s = pD[pP],
          h = pD.GROUP_MIN_HEIGHT;
        if (e && (s = e[sf], h = e[tf]), !i.hasChildren()) return this._6k(t, s, h);
        var r, a = this[Bo]._f2._j1;
          (t == T$[xP] || t == T$.GROUP_TYPE_ELLIPSE) && (r = []);
        for (var f, o, _, c, u = new SD, d = 0, l = a.length; l > d; d++) {
            var v = a[d];
            if (this[Uc][Su](v)) {
              var b = this.graph[ba](v);
              b && (f = b.$x + b._ex.x, o = b.$y + b._ex.y, _ = b._ex.width, c = b._ex.height, u[Ud](f, o, _, c), r && (r.push({
                x: f,
                y: o
              }), r[Ea]({
                x: f + _,
                y: o
              }), r[Ea]({
                x: f + _,
                y: o + c
              }), r.push({
                x: f,
                y: o + c
              })))
            }
          }
        n && u[jo](n);
        var y = this.$data[im];
        y ? y[km] && (y.invalidateFlag = !1, y.x = u.cx, y.y = u.cy) : y = this[Bo][im] = {
            x: u.cx,
            y: u.cy
          };
        var g, p = y.x,
          x = y.y;
        if (t == T$.GROUP_TYPE_CIRCLE) {
            g = an(r),
            g.cx -= p,
            g.cy -= x;
            var E = Math[pf](s, h) / 2;
            return g.r < E && (g.cx += E - g.r, g.cy += E - g.r, g.r = E),
            g
          }
        return t == T$.GROUP_TYPE_ELLIPSE ? (g = fn(r, u), g.cx -= p, g.cy -= x, g[sf] < s && (g.cx += (s - g.width) / 2, g[sf] = s), g[tf] < h && (g.cy += (h - g[tf]) / 2, g[tf] = h), g) : (g = u, u[sf] < s && (u[sf] = s), u[tf] < h && (u[tf] = h), u.offset(-p, -x), g)
      },
      _$z: function (t, i, n) {
        if (!this._4z()) return $(this, ih, EP, arguments);
        var e = this._n96[rS](this, t, i, n);
        return e = pF.onBindingPropertyChange(this, t, i, n) || e,
        e = wF.onBindingPropertyChange(this, t, i, n) || e,
        TF[rS](this, t, i, n) || e
      }
    },
  N(ih, _s);
  var zF = {
      draw: function () {}
    };
  pD[mu] = mP,
  pD[Eu] = wP;
  var YF = {
      position: pu,
      "text-align": Zc
    },
    HF = {
      padding: TP,
      transition: kP
    },
    qF = {
      position: OP,
      display: MP
    };
  bi(SP, "opacity:0.7;vertical-align:middle;"),
  bi(".Q-Graph-Nav img:hover,img.hover", jP),
  lD || (bi(IP, PP + e$(AP) + CP), bi(LP, RP + e$(AP) + NP)),
  sh.prototype = {
      _n92: function (t, i) {
        return t._hn == i ? !1 : (t._hn = i, void(t[Qr][wE] = i ? "block" : gu))
      },
      _3s: function (t, i) {
        var n = i / 2 - this._left._img[ku] / 2 + hf;
        this._left._img.style[Xf] = n,
        this._right._img[Qr].top = n,
        this._navPane[Qr][sf] = t + hf,
        this._navPane[Qr][tf] = i + hf
      },
      _93: function (t, i, n, e) {
        this._n92(this._top, t),
        this._n92(this._left, i),
        this._n92(this._n8ottom, n),
        this._n92(this._right, e)
      },
      _i0: function () {
        var t = this._navPane[Py];
        t && t[av](this._navPane)
      },
      _jb: function () {
        var t = this._n9s._k3;
        if (t) {
          var i = t.bounds;
          if (i[Fo]()) return void this._93(!1, !1, !1, !1);
          var n = t[DP],
            e = n.y > i.y + 1,
            s = n.x > i.x + 1,
            h = n.bottom < i.bottom - 1,
            r = n.right < i[zr] - 1;
          this._93(e, s, h, r)
        }
      }
    };
  var UF = 8;
  bi($P, BP),
  bi(".Q-Graph-ScrollBar:hover", "background-color: #7E7E7E;" + e$(AP) + ": background-color 0.2s linear;"),
  bi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"),
  bi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"),
  bi(".Q-Graph-ScrollBar--V.Both", FP),
  bi(".Q-Graph-ScrollBar--H.Both", GP),
  lD || (bi(zP, PP + e$(AP) + YP), bi(".Q-Graph:hover .Q-Graph-ScrollPane", RP + e$(AP) + ":opacity 0.3s linear;")),
  hh[yr] = {
      _i0: function () {
        this._verticalDragSupport._i0(),
        this._horizontalDragSupport._i0(),
        delete this._verticalDragSupport,
        delete this._horizontalDragSupport,
        this._lh[Py] && this._lh[Py][av](this._lh)
      },
      _lh: null,
      _n7h: null,
      _8g: null,
      init: function (t) {
        var n = i[cf](ru);
        n[Zh] = HP,
        di(n, {
          width: xu,
          height: xu,
          position: OP
        });
        var e = i[cf](ru);
        e.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
        var s = i[cf](ru);
        s[Zh] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H",
        n[lu](e),
        n[lu](s),
        t[lu](n),
        this._lh = n,
        this._8g = s,
        this._n7h = e,
        s.isH = !0;
        var h = this,
          r = {
            ondrag: function (t, i) {
              var n = h._n9s._k3;
              if (n) {
                var e = i[qP],
                  s = e ? t.dx : t.dy;
                if (s && i[yo]) {
                    var r = n.scale / i.scale;
                    e ? n[Vf](-r * s, 0) : n.translate(0, -r * s),
                    w$.stopEvent(t)
                  }
              }
            },
            enddrag: function (t, i) {
              var n = h._n9s._k3;
              if (n && n[UP]) {
                var e = i.isH,
                  s = e ? t.vx : t.vy;
                if (Math[Hr](s) > .1) {
                    var r = n[yo] / i[yo];
                    s *= r,
                    e ? n._9b(-s, 0) : n._9b(0, -s)
                  }
              }
            }
          };
        this._verticalDragSupport = new Mi(e, r),
        this._horizontalDragSupport = new Mi(s, r)
      },
      _jb: function () {
        var t = this._n9s._k3;
        if (t) {
          var i = t[Of];
          if (i.isEmpty()) return this._4s(!1),
          void this._4t(!1);
          var n = t[DP],
            e = t[sf],
            s = t[tf],
            h = t.scale,
            r = 1 / h,
            a = n.x > i.x + r || n.right < i[zr] - r,
            f = n.y > i.y + r || n[Yr] < i.bottom - r,
            o = a && f;
          o ? (T(this._n7h, WP), T(this._8g, WP)) : (k(this._n7h, WP), k(this._8g, WP)),
          this._4s(a, n, i, o ? e - UF : e),
          this._4t(f, n, i, o ? s - UF : s)
        }
      },
      _4s: function (t, i, n, e) {
        if (!t) return this._8g[Qr][wE] = gu,
        void(this._8g.scale = 0);
        var s = Math[ro](i.x, n.x),
          h = Math[pf](i[zr], n.right),
          r = h - s,
          a = e / r;
        this._8g.scale = a,
        this._8g[Qr][la] = parseInt((i.x - s) * a) + hf,
        this._8g[Qr][zr] = parseInt((h - i.right) * a) + hf,
        this._8g[Qr][wE] = ""
      },
      _4t: function (t, i, n, e) {
        if (!t) return this._n7h.style[wE] = gu,
        void(this._n7h.scale = 0);
        var s = Math[ro](i.y, n.y),
          h = Math.max(i.bottom, n[Yr]),
          r = h - s,
          a = e / r;
        this._n7h[yo] = a,
        this._n7h[Qr][Xf] = parseInt((i.y - s) * a) + hf,
        this._n7h[Qr][Yr] = parseInt((h - i[Yr]) * a) + hf,
        this._n7h[Qr][wE] = ""
      }
    },
  rh[yr] = {
      shape: null,
      initialize: function () {
        $(this, rh, rw),
        this._n74(),
        MF[xj](this)
      },
      _n74: function () {
        this[hg] = new AF(this[Bo].path),
        this.addChild(this[hg], 0),
        this[TS] = this.image
      },
      invalidateShape: function () {
        this[hg][Nm](),
        this[aS]()
      },
      _$z: function (t, i, n) {
        var e = this._n96.onBindingPropertyChange(this, t, i, n);
        return e = pF[rS](this, t, i, n) || e,
        MF[rS](this, t, i, n) || e
      },
      doValidate: function () {
        this[TS] && (this.body.$layoutByAnchorPoint = null != this._2y, this.body[_m] = this._2y);
        var t = this[Bo][im],
          i = 0,
          n = 0;
        t && (i = t.x, n = t.y);
        var e = this.$x != i || this.$y != n;
        return e && (this[gS] = !0),
        this.$x = i,
        this.$y = n,
        jF[yr][aw][zh](this) || e
      }
    },
  N(rh, jF),
  Z(rh[yr], {
      path: {
        get: function () {
          return this.data.path
        }
      },
      length: {
        get: function () {
          return this[Cf].length
        }
      }
    }),
  rh[yr][ef] = function (t, i, n) {
      var e = this._hd(t, i),
        s = this[Cf],
        h = Mn(s[lm], e.x, e.y, n);
      h && (s[Aj] = h)
    },
  ah.prototype = {
      _m4: function () {
        this._jp[Qr].visibility = GO
      },
      _k1: function () {
        this._jp.style[Cy] = yu
      },
      clear: function () {
        this._9q[nf](),
        this._n8y()
      },
      contains: function (t) {
        return t instanceof Object && t.id && (t = t.id),
        this._9q[T_](t)
      },
      addDrawable: function (t, i) {
        if (i) {
          var n = {
            id: ++QN,
            drawable: t,
            scope: i
          };
          return this._9q[nr](n),
          n
        }
        return t.id || (t.id = ++QN),
        this._9q[nr](t),
        t
      },
      removeDrawable: function (t) {
        return t.id ? void this._9q[Vh](t) : this._9q[Ld](t)
      },
      _9q: null,
      invalidate: function () {
        this._n8y()
      },
      _n8y: function () {
        this._n9s._68 || this._j3()
      },
      _j3: function () {
        vi(this._jp, uu, "");
        var t = this._n9s._ks,
          i = this.g;
        i[lo](1, 0, 0, 1, 0, 0),
        i.clearRect(0, 0, this._jp.width, this._jp.height),
        i.save(),
        this._n9s._j6._n7s(i);
        for (var n = this._9q._j1, e = 0, s = n[Gh]; s > e; e++) i[$y](),
        i[Yg](),
        this._g5(i, n[e], t),
        i[Ky]();
        i[Ky]()
      },
      _g5: function (t, i, n) {
        return i instanceof Function ? void i(t, n) : void(i[XP] instanceof Function && i[Pl] && i[XP][zh](i[Pl], t, n))
      }
    },
  pD.ZOOM_ANIMATE = nD ? !1 : !0;
  var WF = function (t) {
      this._k3 = t
    };
  pD.ANIMATION_MAXTIME = 600,
  pD[VP] = p$[KP],
  WF.prototype = {
      _k3: null,
      _n7: .001,
      _ds: null,
      _n9h: function (t) {
        return t > 1 ? 1 : -1 > t ? -1 : t
      },
      _f6: function (t, i) {
        t *= .6,
        i *= .6,
        t = this._n9h(t),
        i = this._n9h(i),
        this._ly();
        var n = Math[Ef](t * t + i * i);
        if (.01 > n) return !1;
        var e = Math[ro](pD[ZP], n / this._n7);
        this._speedX = t,
        this._speedY = i,
        this._n7X = t / e,
        this._n7Y = i / e,
        this._ds = new E$(this._56, this, e, p$[JP]),
        this._ds._kg()
      },
      _56: function (t, i) {
        if (0 != t) {
          var n = this._speedX * i - .5 * this._n7X * i * i,
            e = this._speedY * i - .5 * this._n7Y * i * i;
          this._speedX -= this._n7X * i,
          this._speedY -= this._n7Y * i,
          this._k3.translate(n, e)
        }
      },
      _ly: function () {
        this._ds && this._ds._ly()
      },
      _i9: function (t) {
        var i = this._fromTX + (this._toTX - this._fromTX) * t,
          n = this._fromTY + (this._toTY - this._fromTY) * t,
          e = this._fromScale + (this._toScale - this._fromScale) * t;
        this._k3.translateTo(i, n, e)
      },
      _kz: function (t, i, n, e) {
        var s = this._k3,
          h = s[yo];
        if (0 >= n && (n = h), this._ly(), t != s.tx || i != s.ty || n != h) {
            var r, a, f;
            e instanceof Object && (r = e.duration, a = e.maxTime, f = e[QP]);
            var o = s.tx,
              _ = s.ty;
            if (!r) {
                var c = kD(t, i, o, _);
                if (r = c / 2, n != h) {
                  var u = n > h ? n / h : h / n;
                  r = Math[pf](r, 50 * u)
                }
              }
            a = a || pD[ZP],
            f = f || pD.ANIMATION_TYPE,
            r = Math[ro](a, r),
            this._fromTX = o,
            this._fromTY = _,
            this._fromScale = h,
            this._toTX = t,
            this._toTY = i,
            this._toScale = n,
            this._ds = new E$(this._i9, this, r, f),
            this._ds._kg()
          }
      }
    },
  pD[tA] = 8,
  pD[iA] = 4,
  pD[nA] = 30,
  pD[eA] = 20;
  var XF = Math.PI / 4;
  ch.prototype = {
      onElementRemoved: function (t, i) {
        this.element && (t == this[sA] || j(t) && x(t, this.element)) && this[gc](i)
      },
      onClear: function (t) {
        this.element && this[gc](t)
      },
      destroy: function () {
        delete this[sA],
        this[hA]()
      },
      invalidate: function () {
        this[Ju][FE]()
      },
      removeDrawable: function () {
        this._fsId && (this[Ju][hA](this._fsId), delete this._fsId, this[FE]())
      },
      addDrawable: function () {
        this._fsId || (this._fsId = this.topCanvas[rA](this.doDraw, this).id, this[FE]())
      },
      doDraw: function () {},
      escapable: !0,
      onkeydown: function (t, i) {
        this[aA] && 27 == t.keyCode && (A(t), this[gc](i))
      }
    },
  w$[fA] = ch,
  uh[yr] = {
      defaultCursor: Du,
      getInteractionInstances: function (t) {
        if (!this[Ru]) return null;
        for (var i = [], n = 0, e = this[Ru].length; e > n; n++) {
          var s = this[Ru][n];
          s instanceof Function ? i[Ea](new s(t)) : s instanceof Object && i.push(s)
        }
        return i
      }
    },
  dh[yr] = {
      _e8: null,
      _in: null,
      destroy: function () {
        $(this, dh, gc, arguments),
        delete this._in,
        delete this._8r,
        delete this._e8
      },
      doDraw: function (t) {
        var i = this.points;
        i && (i.forEach(function (i) {
          this[oA](t, i)
        }, this), this[_A] && t[go](), this[cA](t))
      },
      styleDraw: function (t) {
        var i = lh(this.graph[rP], this[uA](this[Uc]));
        i[Lf] && (t.lineWidth = i[Lf], i[Ng] && (t[Ng] = i[Ng]), i[Dg] && (t[Dg] = i[Dg]), i[Uo] && (t[Uo] = i.lineDash, t[Wo] = i[Wo] || 0), t.strokeStyle = i[qy], t[Pf]()),
        i[Fg] && (t[Fg] = i.fillStyle, t.fill())
      },
      drawPoint: function (t, i, n) {
        if (n) return void t[F_](i.x, i.y);
        if (w$[ar](i)) {
          var e = i[0],
            s = i[1];
          t[My](e.x, e.y, s.x, s.y)
        } else t.lineTo(i.x, i.y)
      },
      setCurrentPoint: function (t) {
        this[dA] = t
      },
      addPoint: function (t) {
        this._in || (this._in = [], this.addDrawable()),
        this._in.push(t),
        this[FE]()
      }
    },
  Z(dh.prototype, {
      currentPoint: {
        get: function () {
          return this._8r
        },
        set: function (t) {
          this._8r = t,
          this[FE]()
        }
      },
      prevPoint: {
        get: function () {
          return this._in && this._in[Gh] ? this._in[this._in.length - 1] : null
        }
      },
      points: {
        get: function () {
          return this._8r && this._in && this._in[Gh] ? this._in[Wh](this._8r) : void 0
        }
      }
    }),
  N(dh, ch),
  w$.DrawPathInteraction = dh,
  vh[yr] = {
      destroy: function () {
        $(this, vh, gc, arguments),
        delete this._kgTime,
        delete this[lA]
      },
      doDraw: function (t, i) {
        return this._in ? this._in.length <= 1 ? gh[yr].doDraw.call(this, t, i) : void $(this, vh, vA, arguments) : void 0
      },
      ondblclick: function (t, i) {
        this.destroy(i)
      },
      finish: function (t, i, n) {
        if (this._kgTime && Date.now() - this._kgTime < 200) return void this[gc](i);
        var e;
        this._in && this._in[Gh] >= 2 && (this._in[cx](), e = new ED, l(this._in, function (t) {
          if (w$[ar](t)) {
            var i = t[0],
              n = t[1];
            e[nr](new eB(T$.SEGMENT_QUAD_TO, [i.x, i.y, n.x, n.y]))
          } else e[nr](new eB(T$[wg], [t.x, t.y]))
        }, this)),
        i[bA](this[lA], n, t, e),
        this[gc](i)
      },
      onstart: function (t, i) {
        if (2 != t.button) {
          var n = t.getData();
          if (this.start) {
            var e = n instanceof uF && i[LI](n, this[lA]);
            return e ? void this[yA](t, i, n) : void this[ef](this[gA](t))
          }
          var s = n instanceof uF && i.canLinkFrom(n);
          s && (this[lA] = n, this._kgTime = Date.now(), this[ef](this[gA](t)))
        }
      },
      onmousemove: function (t) {
        this[lA] && this[pA](this[gA](t))
      },
      toLogicalPoint: function (t) {
        return this[Uc][gI](t)
      },
      startdrag: function (t) {
        this.start && (t[xA] = !0)
      },
      ondrag: function (t) {
        this[lA] && this[pA](this[gA](t))
      },
      enddrag: function (t, i) {
        if (this[lA]) {
          var n = t[Tv](),
            e = n instanceof uF && i[LI](n, this.start);
          e && this[yA](t, i, n)
        }
      },
      getDefaultDrawStyles: function () {
        return {
          lineWidth: this[Uc].getDefaultStyle(gF[Rk]),
          strokeStyle: this[Uc][EA](gF[Dk]),
          lineDash: this[Uc][EA](gF.EDGE_LINE_DASH),
          lineDashOffset: this[Uc][EA](gF[Hk]),
          lineCap: this[Uc][EA](gF.LINE_CAP),
          lineJoin: this.graph[EA](gF.LINE_JOIN)
        }
      }
    },
  N(vh, dh),
  w$.CreateEdgeInteraction = vh,
  bh[yr] = {
      getDefaultDrawStyles: function () {
        return {
          lineWidth: this[Uc][EA](gF.SHAPE_STROKE),
          strokeStyle: this[Uc][EA](gF.SHAPE_STROKE_STYLE),
          fillStyle: this.graph[EA](gF.SHAPE_FILL_COLOR)
        }
      },
      finish: function (t, i) {
        if (this._in && this._in[Gh]) {
          var n = this._in,
            e = 0,
            s = 0,
            h = 0;
          n[s_](function (t) {
              return w$[ar](t) ? void t[s_](function () {
                e += t.x,
                s += t.y,
                h++
              }) : (e += t.x, s += t.y, void h++)
            }),
          e /= h,
          s /= h;
          var r = [];
          n[s_](function (t, i) {
              if (0 == i) return void r[Ea](new eB(T$[mg], [t.x - e, t.y - s]));
              if (w$[ar](t)) {
                var n = t[0],
                  h = t[1];
                r[Ea](new eB(T$.SEGMENT_QUAD_TO, [n.x - e, n.y - s, h.x - e, h.y - s]))
              } else r[Ea](new eB(T$.SEGMENT_LINE_TO, [t.x - e, t.y - s]))
            }),
          this[cf](t, r, e, s),
          this[gc](i)
        }
      },
      startdrag: function (t) {
        t[xA] = !0
      },
      createElement: function (t, i, n, e) {
        return this.graph[mA](t, i, n, e)
      },
      onstart: function (t, i) {
        var n = i[gI](t);
        this._e8 = n,
        this[ef](n)
      },
      onmousemove: function (t, i) {
        this._e8 && (this[dA] = i[gI](t))
      },
      ondblclick: function (t, i) {
        if (this._e8) {
          if (this._in[Gh] < 3) return void this[gc](i);
          delete this._in[this._in.length - 1],
          this[yA](t, i)
        }
      },
      isClosePath: !0
    },
  N(bh, dh),
  w$[wA] = bh,
  yh[yr] = {
      isClosePath: !1,
      createElement: function (t, i, n, e) {
        return this[Uc][TA](t, i, n, e)
      },
      getDefaultDrawStyles: function () {
        return {
          lineWidth: BF[gF[Cw]],
          strokeStyle: BF[gF.SHAPE_STROKE_STYLE],
          lineDash: this[Uc][EA](gF[Nw]),
          lineDashOffset: this[Uc][EA](gF[rM]),
          lineCap: this.graph[EA](gF[Uw]),
          lineJoin: this[Uc][EA](gF[Xw])
        }
      }
    },
  N(yh, bh),
  w$.CreateLineInteraction = yh,
  gh[yr] = {
      destroy: function (t) {
        $(this, gh, gc, arguments),
        t[lP] = "",
        this[lA] = null
      },
      doDraw: function (t) {
        if (this[lA] && this[dA]) {
          var i, n;
          this.graph[rP] && (i = this[Uc][rP][zE], n = this[Uc][rP][Wc]),
          i = i || this[Uc][hP] || w$[kA],
          n = n || this[Uc][Wc];
          var e = i.drawReferenceLine || w$[kA].drawReferenceLine,
            s = this[Uc][ba](this[lA]);
          s && s[Xc] && (s = s[Xc][Zc], e(t, s, this.currentPoint, n), this[cA](t))
        }
      },
      canLinkFrom: function (t, i) {
        return t instanceof uF && i[OA](t)
      },
      canLinkTo: function (t, i) {
        return t instanceof uF && i[LI](t, this[lA])
      },
      startdrag: function (t, i) {
        var n = t[Tv]();
        this[OA](n, i) && (t[xA] = !0, this[lA] = n, i[lP] = Uv, this.addDrawable())
      },
      ondrag: function (t, i) {
        this[lA] && (w$[xI](t), this[dA] = i[gI](t), this.invalidate())
      },
      enddrag: function (t, i) {
        if (this[lA]) {
          this[FE]();
          var n = t[Tv]();
          this[LI](n, i) && i.createEdgeByInteraction(this[lA], n, t),
          this[gc](i)
        }
      },
      getDefaultDrawStyles: function () {
        return {
          lineWidth: this[Uc].getDefaultStyle(gF[Rk]),
          strokeStyle: this.graph.getDefaultStyle(gF[Dk]),
          lineDash: this[Uc][EA](gF[zk]),
          lineDashOffset: this[Uc][EA](gF[Hk]),
          lineCap: this[Uc][EA](gF[Uw]),
          lineJoin: this[Uc].getDefaultStyle(gF[Xw])
        }
      }
    },
  N(gh, dh),
  w$[MA] = gh,
  pD[SA] = !1,
  Th[yr] = {
      html: null,
      createHTML: function () {
        var t = i[cf](jA);
        t[Zh] = IA,
        t[Qr][$o] = pu,
        t[Qr][Fy] = Zc,
        t[Qr][mb] = PA,
        t[Qr][Wf] = AA,
        t[Qr][CA] = "0px 0px 10px rgba(40, 85, 184, 0.75)",
        t[Qr][wE] = gu,
        t[Qr][ME] = yu;
        console.log(t);
        var n = this;
        return t[LA] = function (t) {
          n.onValueChange(t)
        },
        t.onkeydown = function (t) {
          return 27 == t[zx] ? void n[RA]() : void 0
        },
        t.onkeypress = function (i) {
          if (13 == i[zx] || 10 == i[zx]) {
            if (i[or](), i[Gx] || i[Da] || i.shiftKey) return mh(t, gf),
            void n.onValueChange(i);
            n.stopEdit()
          }
        },
        i[TS][lu](t),
        t
      },
      setText: function (t, i) {
        this.html[Or] = t || "",
        i && (this[KI].style[zu] = i),
        wh(this[KI]),
        this.onSizeChange(this.html)
      },
      onSizeChange: function (t) {
        var i = (t[Bu], t.offsetHeight, Eh(t));
        return t[Qr].width = i[sf] + 30 + hf,
        t.style.height = i[tf] + 10 + hf,
        i
      },
      onValueChange: function (t) {
        var i = t[_c];
        this[NA](i),
        i[Qr].left = i.x - i[Bu] / 2 + hf
      },
      onClickOnWindow: function (t) {
        t[_c] != this[KI] && (pD[SA] ? this[DA]() : this[RA]())
      },
      startEdit: function (i, n, e, s, h) {
        this[KI] || (this.html = this.createHTML()),
        this[$A] || (this[$A] = function (t) {
          this[BA](t)
        }.bind(this)),
        t[xv](FA, this.stopEditWhenClickOnWindow, !0),
        this.callback = h,
        this.html.x = i,
        this[KI].y = n,
        this[KI][Qr].display = MP,
        xh(this[KI], i, n),
        this.setText(e, s || 10),
        xh(this[KI], i, n)
      },
      isEditing: function () {
        return gu != this[KI].style[wE]
      },
      cancelEdit: function () {
        this[DA](!0)
      },
      stopEdit: function (i) {
        if (this[GA]()) {
          t[zA](FA, this.stopEditWhenClickOnWindow);
          var n = this.html[Or];
          if (!i && this[lc] && this[lc](n) === !1) return !1;
          this[KI].style[wE] = gu,
          this.html.value = null,
          this[lc] = null
        }
      },
      destroy: function () {
        this[KI] && i[TS][av](this[KI])
      }
    },
  w$[YA] = Th;
  var VF = function (t) {
      this[Uc] = t
    };
  VF[yr] = {
      destroy: function (t) {
        t[HA] && (t[HA][gc](), delete t.labelEditor)
      },
      ondblclick: function (t, i) {
        var n = t[Tv]();
        if (!n) return i[xm] ? void i.upSubNetwork() : void(i[qA] && i.zoomToOverview(pD.ZOOM_ANIMATE));
        if (i[Mj] && i[UA](n)) {
          var e = i[Qc](t);
          if (e instanceof PF && e.editable !== !1) {
            var s = i[HA];
            s || (i[HA] = s = new Th);
            var h = e[kf]();
            return h = i[WA](h.x + h[sf] / 2, h.y + h[tf] / 2),
            h = ph(h.x, h.y, i[KI]),
            void i[XA](n, e, s, h)
          }
        }
        var r = n instanceof vF,
          a = n instanceof cF && n[VA]();
        return n._4b && (Si(t) || !r && !a) ? void(i[xm] = n) : r ? void(n[Sm] = !n[Sm]) : a ? void this[Uc][oI](n) : void 0
      }
    };
  var KF = function (t) {
      this[Uc] = t
    };
  KF[yr] = {
      onmousedown: function (t, i) {
        i[GI](!0)
      },
      onkeydown: function (t, i) {
        if (i.editable) {
          var n = t.keyCode;
          if (8 == n || 46 == n || 127 == n) return i[KA](t),
          void I(t);
          if (Si(t)) {
            if (67 == n);
            else if (86 == n);
            else if (90 == n);
            else if (89 != n) return;
            I(t)
          }
        }
      }
    },
  w$.EditInteraction = KF;
  var ZF = function (t) {
      this[Uc] = t
    };
  ZF[yr] = {
      onkeydown: function (i, n) {
        if (i[Na] && 83 == i[zx]) {
          var e = n.exportImage(n[yo], n.viewportBounds),
            s = t[ZA](),
            h = s.document;
          h.title = JA + e[sf] + QA + e[tf];
          var r = h[cf](fu);
          r.src = e[Cf],
          h[TS][lu](r),
          I(i)
        }
      }
    };
  var JF = function (t) {
      this[Uc] = t
    };
  JF.prototype = {
      destroy: function () {
        delete this.draggingElements,
        delete this.currentDraggingElement
      },
      _2a: function (t) {
        var i = new ED;
        return t[Ou][s_](function (n) {
          t[UI](n) && t[Su](n) && i[nr](n)
        }, this),
        i
      },
      onstart: function (t, i) {
        this[tC] && this[gc](i)
      },
      startdrag: function (t, i) {
        if (!t[xA]) {
          var n = t[Tv]();
          if (!n || !i[iC](n) || !i[UI](n)) return void this[gc](i);
          t[xA] = !0,
          this[tC] = n,
          this[nC] = this._2a(i);
          var e = new Ih(i, Ih[eC], t, this.currentDraggingElement, this[nC][_v]);
          return i.beforeInteractionEvent(e) === !1 ? void this[gc](i) : void i[jI](e)
        }
      },
      ondrag: function (t, i) {
        if (this[tC]) {
          A(t);
          var n = t.dx,
            e = t.dy,
            s = i.scale;
          n /= s,
          e /= s;
          var h = new Ih(i, Ih.ELEMENT_MOVING, t, this[tC], this[nC][_v]);
          i[sC](this[nC][_v], n, e),
          i[jI](h)
        }
      },
      enddrag: function (t, i) {
        if (this.currentDraggingElement) {
          if (this[nC] && this[nC][Gh]) {
            if (t.shiftKey) {
              var n, e = i[gI](t),
                s = e.x,
                h = e.y;
              i[hC](function (t) {
                  var i = t[Cf];
                  if (!this.draggingElements[Jc](i) && t[pc][Sf](s - t.x, h - t.y) && t[Qc](s, h, 1)) {
                    if (i instanceof w$.Edge) {
                      if (!i[qE]) return;
                      for (var e = this[nC][Gh]; e-- > 0;) {
                        var r = this.draggingElements[mr](e);
                        if (r instanceof w$[EI] && r.linkedWith(i)) return
                      }
                      return n = i,
                      !1
                    }
                    return (i.enableSubNetwork || i._hl() && i.expanded) && (n = i),
                    !1
                  }
                }, this),
              n && this.draggingElements[s_](function (t) {
                  for (var i = t[k_]; i;) {
                    if (this[nC][Jc](i)) return;
                    i = i.parent
                  }
                  t[k_] = n
                }, this)
            }
            var r = new Ih(i, Ih.ELEMENT_MOVE_END, t, this[tC], this[nC][_v]);
            i.onInteractionEvent(r)
          }
          this[gc](i)
        }
      },
      onpinch: function (t, i) {
        this.currentDraggingElement && this.enddrag(t, i)
      },
      step: 1,
      onkeydown: function (t, i) {
        if (Si(t)) {
          var n, e;
          if (37 == t[zx] ? n = -1 : 39 == t.keyCode ? n = 1 : 38 == t[zx] ? e = -1 : 40 == t[zx] && (e = 1), n || e) {
            var s = this._2a(i)[_v];
            if (0 != s[Gh]) {
              I(t),
              n = n || 0,
              e = e || 0;
              var h = this.step / i[yo],
                r = new Ih(i, Ih[rC], t, null, s);
              i.moveElements(s, n * h, e * h),
              i.onInteractionEvent(r)
            }
          }
        }
      }
    };
  var QF = function (t) {
      this[Uc] = t
    };
  QF[yr] = {
      onkeydown: function (t, i) {
        Si(t) || (37 == t[zx] ? (this._57(i, 1, 0), I(t)) : 39 == t[zx] ? (this._57(i, -1, 0), I(t)) : 38 == t[zx] ? (this._57(i, 0, 1), I(t)) : 40 == t[zx] && (this._57(i, 0, -1), I(t)))
      },
      _57: function (t, i, n) {
        t._9b(i, n)
      },
      onstart: function (t, i) {
        this._kg && this[gc](i)
      },
      _kg: !1,
      startdrag: function (t, i) {
        t[xA] || (t[xA] = !0, this._kg = !0, i[lP] = d$)
      },
      ondrag: function (t, i) {
        this._kg && (A(t), i[Vf](t.dx || 0, t.dy || 0))
      },
      enddrag: function (t, i) {
        if (this._kg) {
          if (i[UP] !== !1) {
            var n = t.vx,
              e = t.vy;
              (Math.abs(n) > .1 || Math[Hr](e) > .1) && i._9b(n, e)
          }
          this[gc](i)
        }
      },
      onpinch: function (t, i) {
        this._kg = !0;
        var n = t[Cv];
        if (n && 1 != n) {
          var e = i[aC](t.center);
          i[BI](n, e.x, e.y, !1)
        }
      },
      destroy: function (t) {
        this._kg = !1,
        t.cursor = null
      }
    },
  kh[yr] = {
      _22: function (t) {
        this[sA] && t[Zf] == this[sA] && this[Uc].callLater(function () {
          this._jb()
        }, this)
      },
      _8: function () {
        this._loPropertyChangeListing || (this._loPropertyChangeListing = !0, this[Uc].dataPropertyChangeDispatcher[sd](this._22, this))
      },
      _5: function () {
        this._loPropertyChangeListing = !1,
        this[Uc][fC][Ll](this._22, this)
      },
      onElementRemoved: function (t, i) {
        this[sA] && (t == this[sA] || j(t) && x(t, this[sA])) && this.destroy(i)
      },
      onClear: function (t) {
        this[sA] && this[gc](t)
      },
      destroy: function () {
        this[Uc].cursor = null,
        this[sA] && delete this[sA]._editting,
        delete this[sA],
        delete this._8u,
        delete this._8r,
        delete this._n9anEdit,
        this._6u(),
        this._5()
      },
      _6u: function () {
        this[oC] && (this[Ju][hA](this.drawLineId), delete this[oC], this.topCanvas[FE]())
      },
      _n7u: function () {
        this.drawLineId && this[Ju][Jc](this[oC]) || (this[oC] = this.topCanvas.addDrawable(this[_C], this).id, this[Ju][FE]())
      },
      _8u: null,
      _5l: function (t) {
        this._8u = t,
        this.invalidate()
      },
      _e9: function (t, i, n) {
        t[Yg](),
        i.isControlPoint ? t.rect(i.x - this[cC] / n, i.y - this[cC] / n, this.handlerSize / n * 2, this[cC] / n * 2) : t[yp](i.x, i.y, this[cC] / n, 0, 2 * Math.PI, !1),
        t.lineWidth = 1 / n,
        t[Uo] = [],
        t[qy] = Yy,
        t[Fg] = "rgba(255, 255, 0, 0.8)",
        t[Pf](),
        t[Af]()
      },
      _fs: function (t, i, n, e) {
        e ? t.moveTo(i, n) : t[z_](i, n)
      },
      drawLine: function (t, i) {
        if (this._8u && this._8u[Gh]) {
          t[$y]();
          var n = this[sA] instanceof dF;
          n && (t[Vf](this.element.x, this[sA].y), this.element[$f] && t[$f](this[sA][$f]));
          var e, s = [];
          t.beginPath(),
          this._8u.length,
          l(this._8u, function (i) {
            if (i[Df] != T$[Og]) for (var n = 0, h = i.points; n + 1 < h[Gh];) {
              var r = h[n],
                a = h[n + 1],
                f = {
                  x: r,
                  y: a,
                  isControlPoint: this._72(i, n)
                };
              s.push(f),
              this._fs(t, f.x, f.y, null == e),
              e = f,
              n += 2
            }
          }, this),
          t.lineWidth = 1 / i,
          t[Uo] = [2 / i, 3 / i],
          t[qy] = uC,
          t[Pf](),
          l(s, function (n) {
            this._e9(t, n, i)
          }, this),
          t[Ky]()
        }
      },
      invalidate: function () {
        this[Ju][FE]()
      },
      _3i: function (t) {
        if (this.element != t && (this.element && this[gc](), t && this[UA](t))) {
          var i = this._5j(t, this[Uc]);
          i && (this[sA] = t, t._editting = !0, this._n9anEdit = !0, this._5l(i), this._8(), this._n7u())
        }
      },
      _jb: function () {
        if (this[oC] && this[sA]) {
          var t = this._5j(this.element, this[Uc]);
          return t ? void this._5l(t) : void this[gc](this[Uc])
        }
      },
      _5j: function (t, i) {
        return i.isEditable(t) ? t.pathSegments || [] : void 0
      },
      _hd: function (t, i) {
        t -= this[sA].x,
        i -= this.element.y;
        var n = {
          x: t,
          y: i
        };
        return this[sA].rotate && $s(n, -this.element.rotate),
        n
      },
      onclick: function (t, i) {
        if (i.editable && t.altKey && this[sA]) {
          var n = this._fm(t, i);
          if (n && n.isControlPoint) return void this[sA][dC](n[Nl]);
          if (this[sA] == t[Tv]()) {
            var e = i[gI](t),
              s = i[ba](this[sA]);
            s[ef](e.x, e.y, this[cC] || 2)
          }
        }
      },
      isEditable: function (t) {
        return this[Uc][UA](t) && (t instanceof cF || t instanceof dF)
      },
      ondblclick: function (t, i) {
        if (!i.editable) return void(this[sA] && this[gc](i));
        var n = t[Tv]();
        return !n || n == this.element || n._editting ? void this[gc](i) : void this._3i(n)
      },
      onstart: function (t, i) {
        if (!i.editable) return void(this.element && this[gc](i));
        if (!t[xA]) {
          if (this[sA] && this._fm(t, i)) return void(t.responded = !0);
          var n = t.getData();
          return n && i[lC](n) && n instanceof dF ? void(this[sA] && n != this.element && this.destroy()) : void this._3i(n)
        }
      },
      onrelease: function () {
        this[sA] && (this._n9anEdit = !0)
      },
      _8r: null,
      _fm: function (t, i) {
        var n = i[gI](t);
        this[sA] instanceof dF && (n = this._hd(n.x, n.y));
        var e, s = i[yo],
          h = this[cC] / s,
          r = this._8u;
        return l(r, function (t, i) {
            for (var s = 0, a = t[Mf]; s + 1 < a.length;) {
              var f = a[s],
                o = a[s + 1],
                _ = kD(n.x, n.y, f, o);
              if (h > _) {
                  if (e = {
                    segment: t,
                    index: i,
                    pointIndex: s
                  }, this._72(t, s)) {
                    e[vC] = !0;
                    var c = r instanceof ED ? r[Pd](i + 1) : r[i + 1];
                    c && (e[bC] = c)
                  }
                  return !1
                }
              s += 2
            }
          }, this),
        e
      },
      _72: function (t, i) {
        return i == t[Mf].length - 2
      },
      startdrag: function (t, i) {
        if (this[sA] && this._n9anEdit && (this._8r = this._fm(t, i), this._8r)) {
          this._6u(),
          t[xA] = !0;
          var n = new Ih(i, Ih.POINT_MOVE_START, t, this[sA]);
          n[yC] = this._8r,
          i[jI](n)
        }
      },
      ondrag: function (t, i) {
        if (this.element && this._8r) {
          var n = t.dx,
            e = t.dy,
            s = i.scale;
          if (n /= s, e /= s, this[sA][$f]) {
              var h = {
                x: n,
                y: e
              };
              $s(h, -this[sA][$f]),
              n = h.x,
              e = h.y
            }
          var r = this._8r.segment;
          if (!this._8r[vC] || r.type != Q$ && r[Df] != tB) r[Mf][this._8r.pointIndex] += n,
          r.points[this._8r[gC] + 1] += e;
          else {
              for (var a = r[Mf][Gh] - 4; a < r.points[Gh];) r[Mf][a] += n,
              r[Mf][a + 1] += e,
              a += 2;
              !this._8r.nextSegment || this._8r[bC][Df] != tB && this._8r.nextSegment.type != Q$ || (this._8r[bC][Mf][0] += n, this._8r.nextSegment[Mf][1] += e)
            }
          this[sA][JE]();
          var f = new Ih(i, Ih.POINT_MOVING, t, this[sA]);
          f[yC] = this._8r,
          i[jI](f)
        }
      },
      enddrag: function (t, i) {
        if (this[sA] && this._8r) {
          this._n7u(),
          this._jb();
          var n = new Ih(i, Ih[pC], t, this[sA]);
          n[yC] = this._8r,
          i[jI](n)
        }
      },
      onmousemove: function (t, i) {
        this[sA] && (i[lP] = t[Gx] && (this._fm(t, i) || this[sA] == t[Tv]()) ? "crosshair" : null)
      }
    },
  pD.SELECTION_RECTANGLE_STROKE = 1,
  pD[xC] = V(3724541951),
  pD.SELECTION_RECTANGLE_FILL_COLOR = V(1430753245);
  var tG = function (t) {
      this[Uc] = t,
      this[Ju] = t._83._topCanvas
    };
  tG[yr] = {
      onstart: function (t, i) {
        this._kg && this[gc](i)
      },
      startdrag: function (t, i) {
        t[xA] || (t[xA] = !0, this._kg = i.toLogical(t), i.cursor = Uv, this._1dId = this.topCanvas[rA](this._1d, this).id)
      },
      ondrag: function (t, i) {
        if (this._kg) {
          A(t),
          this._end = i[gI](t),
          this[FE]();
          var n = new Ih(i, Ih[EC], t, i[Ou]);
          i.onInteractionEvent(n)
        }
      },
      enddrag: function (t, i) {
        if (this._kg) {
          this._faTimer && (clearTimeout(this._faTimer), this._faTimer = null),
          this._fa(!0),
          this[gc](i);
          var n = new Ih(i, Ih[mC], t, i[Ou]);
          i.onInteractionEvent(n)
        }
      },
      onpinch: function (t, i) {
        this._kg && this[jv](t, i)
      },
      _1d: function (t, i) {
        t.strokeStyle = pD[xC],
        t[Fg] = pD[wC],
        t[Lf] = pD.SELECTION_RECTANGLE_STROKE / i;
        var n = this._kg.x,
          e = this._kg.y;
        t.rect(n, e, this._end.x - n, this._end.y - e),
        t[Af](),
        t.stroke()
      },
      invalidate: function () {
        return this[km] ? void this[Ju].invalidate() : (this[km] = !0, void(this._faTimer = setTimeout(this._fa.bind(this), 100)))
      },
      _fa: function (t) {
        if (this[km] = !1, this._faTimer = null, !this._kg || sD && !t) return void this[Ju].invalidate();
        var i = Math[ro](this._kg.x, this._end.x),
          n = Math.min(this._kg.y, this._end.y),
          e = Math[Hr](this._kg.x - this._end.x),
          s = Math[Hr](this._kg.y - this._end.y);
        if (!e || !s) return void this.graph[Ou][nf]();
        var h, r = [],
          a = this[Uc][yo];
        if (this[Uc][TC](function (t) {
            t._hn && this[Uc][ju](t.$data) && (h = t._ex, (ai(i, n, e, s, h.x + t._x, h.y + t._y, h[sf], h.height) || Nn(i, n, e, s, t, a)) && r.push(t[Bo]))
          }, this), this[Uc][Ou][No](r), this.topCanvas[FE](), !t) {
            var f = new Ih(this[Uc], Ih[kC], null, this[Uc][Ou]);
            this.graph[jI](f)
          }
      },
      destroy: function (t) {
        this._kg = null,
        t[lP] = null,
        this._1dId && (this[Ju][hA](this._1dId), delete this._1dId, this[Ju][FE]())
      }
    };
  var XF = Math.PI / 4;
  Oh[yr] = {
      _ed: !1,
      _ec: !1,
      _22: function (t) {
        this.element && t[Zf] == this[sA] && this[Uc][YI](function () {
          this._9a()
        }, this)
      },
      _8: function () {
        this._loPropertyChangeListing || (this._loPropertyChangeListing = !0, this.graph[fC].addListener(this._22, this))
      },
      _5: function () {
        this._loPropertyChangeListing = !1,
        this[Uc].dataPropertyChangeDispatcher[Ll](this._22, this)
      },
      onElementRemoved: function (t, i) {
        this[sA] && (t == this[sA] || j(t) && x(t, this.element)) && this[gc](i)
      },
      onClear: function (t) {
        this[sA] && this.destroy(t)
      },
      ondblclick: function (t, i) {
        this.element && this.destroy(i)
      },
      destroy: function (t) {
        t.cursor = null,
        delete this[sA],
        delete this._n9p,
        delete this._n8ody,
        delete this._8r,
        delete this._n9anEdit,
        delete this._in,
        delete this._rotatePoint,
        delete this._ec,
        delete this._ed,
        delete this._insets,
        this._6u(),
        this._5()
      },
      _6u: function () {
        this._fsId && (this[Ju][hA](this._fsId), delete this._fsId, this.topCanvas[FE]())
      },
      _n7u: function () {
        this._fsId && this[Ju].contains(this._fsId) || (this._fsId = this[Ju][rA](this._fs, this).id, this[Ju].invalidate())
      },
      _n9p: null,
      _in: null,
      _7z: function (t) {
        this._n9p = t;
        var i = this._n9p.x,
          n = this._n9p.y,
          e = this._n9p[sf],
          s = this._n9p[tf],
          h = this[sA] instanceof vF && this[sA].expanded;
        if (this._ec) {
            var r = [];
            h || (r[Ea]({
              x: i,
              y: n,
              p: ID.LEFT_TOP,
              cursor: OC,
              rotate: 5 * XF
            }), r[Ea]({
              x: i + e / 2,
              y: n,
              p: ID[sl],
              cursor: MC,
              rotate: 6 * XF
            }), r[Ea]({
              x: i + e,
              y: n,
              p: ID[rl],
              cursor: Qu,
              rotate: 7 * XF
            }), r[Ea]({
              x: i,
              y: n + s / 2,
              p: ID.LEFT_MIDDLE,
              cursor: SC,
              rotate: 4 * XF
            }), r[Ea]({
              x: i,
              y: n + s,
              p: ID.LEFT_BOTTOM,
              cursor: Qu,
              rotate: 3 * XF
            })),
            r[Ea]({
              x: i + e,
              y: n + s / 2,
              p: ID.RIGHT_MIDDLE,
              cursor: SC,
              rotate: 0
            }),
            r[Ea]({
              x: i + e / 2,
              y: n + s,
              p: ID[qj],
              cursor: MC,
              rotate: 2 * XF
            }),
            r.push({
              x: i + e,
              y: n + s,
              p: ID[fl],
              cursor: OC,
              rotate: XF
            }),
            this._in = r
          }
        this._rotatePoint = this._ed ? {
            x: i + e / 2,
            y: n,
            cursor: l$
          } : null,
        this._n8y()
      },
      _e9: function (t, i, n, e) {
        t[Yg]();
        var s = (this[cC] - 1) / e;
        t[$b](i - s, n - s, 2 * s, 2 * s),
        t.lineWidth = 1 / e,
        t[Uo] = [],
        t[qy] = Yy,
        t.fillStyle = "rgba(255, 255, 255, 0.8)",
        t[Pf](),
        t.fill()
      },
      _5b: function (t, i, n, e, s, h) {
        s = s || this[cC],
        h = h || jC,
        t[Yg](),
        s /= e,
        t[yp](i, n, s, 0, 2 * Math.PI, !1),
        t[Lf] = 1 / e,
        t.lineDash = [],
        t[qy] = Yy,
        t[Fg] = h,
        t.stroke(),
        t[Af]()
      },
      _hd: function (t, i) {
        t -= this.element.x,
        i -= this.element.y;
        var n = {
          x: t,
          y: i
        };
        return this[sA][$f] && $s(n, -this[sA][$f]),
        n
      },
      _fs: function (t, i) {
        if (this._n9p) {
          if (t.save(), t[Vf](this[sA].x, this[sA].y), this.element.rotate && t[$f](this.element.rotate), this._rotatePoint) {
            this._5b(t, 0, 0, i, 3, IC);
            var n = this._rotatePoint.x,
              e = this._rotatePoint.y - this._rotateHandleLength / i;
            t[Yg](),
            t[F_](n, this._rotatePoint.y),
            t[z_](n, e),
            t[Lf] = 1 / i,
            t[qy] = uC,
            t.stroke(),
            this._5b(t, n, e, i)
          }
          if (this._in) {
            var s = this._n9p.x,
              h = this._n9p.y,
              r = this._n9p[sf],
              a = this._n9p[tf];
            t[Yg](),
            t.rect(s, h, r, a),
            t.lineWidth = 1 / i,
            t[Uo] = [2 / i, 3 / i],
            t[qy] = uC,
            t[Pf](),
            l(this._in, function (n) {
                this._e9(t, n.x, n.y, i)
              }, this)
          }
          t.restore()
        }
      },
      _n8y: function () {
        this.topCanvas[FE]()
      },
      _3i: function (t, i, n, e) {
        this[sA] = t,
        this._n7u();
        var s = i.getUI(t);
        this._n8ody = s[TS],
        this._ec = n,
        this._ed = e,
        this._9a(),
        this._8()
      },
      _9a: function () {
        if (this._fsId) {
          var t = Mh(this._n8ody, this._n8ody._is),
            i = Mh(this._n8ody, this._n8ody._7r);
          this._insets = new jD(t.y - i.y, t.x - i.x, i[Yr] - t.bottom, i[zr] - t[zr]),
          this._7z(i)
        }
      },
      _n86: function (t, i) {
        return i[lC](t)
      },
      _n87: function (t, i) {
        return (!t._hl() || !t.expanded) && i[PC](t)
      },
      _d0: function (t, i) {
        return t instanceof uF && i.isEditable(t)
      },
      onstart: function (t, i) {
        if (!i[Mj]) return void(this[sA] && this.destroy(i));
        if (!t[xA]) {
          var n = i[ba](t),
            e = t.getData();
          if (e != this[sA]) {
              if (this[sA]) {
                if (this._fm(t, i)) return void(t[xA] = !0);
                this[gc](i)
              }
              if (e && !e._editting && this._d0(e, i)) {
                var s = this._n86(e, i, n),
                  h = this._n87(e, i, n);
                  (s || h) && this._3i(e, i, s, h)
              }
            }
        }
      },
      onrelease: function (t, i) {
        this[sA] && (this._n9anEdit = !0, this._n7u(), i.callLater(function () {
          this._9a()
        }, this))
      },
      _8r: null,
      _fm: function (t, i) {
        var n = i[gI](t);
        n = this._hd(n.x, n.y);
        var e = i.scale,
          s = this.handlerSize / e;
        if (this._rotatePoint) {
            var h = this._rotatePoint.x,
              r = this._rotatePoint.y - this._rotateHandleLength / e;
            if (kD(n.x, n.y, h, r) < s) return this._rotatePoint
          }
        if (this._in && this._in.length) {
            var a;
            return l(this._in, function (t) {
              return kD(n.x, n.y, t.x, t.y) < s ? (a = t, !1) : void 0
            }, this),
            a
          }
      },
      onmousemove: function (t, i) {
        if (this[sA]) {
          var n = this._fm(t, i);
          if (!n) return void(i.cursor = null);
          if (n != this._rotatePoint && this.element[$f]) {
            var e = n[$f] + this[sA].rotate;
            return void(i[lP] = Sh(e))
          }
          i.cursor = n[lP]
        }
      },
      startdrag: function (t, i) {
        if (this.element && (this._6u(), this._n9anEdit && (this._8r = this._fm(t, i), this._8r))) {
          if (t[xA] = !0, this._8r == this._rotatePoint) return this._8r[lA] = i[gI](t),
          void(this._8r[$f] = this.element[$f] || 0);
          var n = new Ih(i, Ih[AC], t, this.element);
          n[yC] = this._8r,
          i[jI](n)
        }
      },
      _6q: function (t, i, n, e, s, h) {
        var r = this._n9p,
          a = r.x,
          f = r.y,
          o = r[sf],
          _ = r[tf];
        if (h) {
            var c = e != o;
            c ? s = e * _ / o : e = s * o / _
          }
        var u = t[lm]._f4,
          d = e / o,
          l = s / _,
          v = -a * d + i,
          b = -f * l + n;
        u.forEach(function (t) {
            if (t[Df] != T$[Og]) {
              var e = t[Mf];
              if (e && e[Gh]) for (var s = 0, h = e.length; h > s; s += 2) {
                var r = e[s],
                  o = e[s + 1];
                e[s] = (r - a) * d + i - v,
                e[s + 1] = (o - f) * l + n - b
              }
            }
          }),
        this._n9p[No](i - v, n - b, e, s),
        t[qI](t.x + v, t.y + b),
        t.firePathChange()
      },
      _9h: function (t, i, n, e, s) {
        this._n9p[No](i, n, e, s),
        t[Im] = {
          width: e,
          height: s
        }
      },
      _4n: function (t, i, n, e, s) {
        if (this[sA] instanceof vF) return this._9h(this[sA], t, i, n, e, s);
        if (this[sA] instanceof dF) return this._6q(this.element, t, i, n, e, s);
        var h = this._n8ody instanceof PF;
        if (!h && s) {
          var r = this._n9p,
            a = this._n8ody[CC],
            f = n != r[sf];
          f ? e = n * a[tf] / a[sf] : n = e * a.width / a[tf]
        }
        var o = this.element[_m],
          _ = new MD(n - this._insets[la] - this._insets[zr], e - this._insets[Xf] - this._insets[Yr]);
        if (_[sf] < 1 && (n = this._insets[la] + this._insets[zr] + 1, _[sf] = 1), _[tf] < 1 && (e = this._insets[Xf] + this._insets.bottom + 1, _[tf] = 1), h ? this[sA].setStyle(gF[LC], _) : this[sA].size = _, o) {
            var c = fi(o, n, e),
              u = c.x + t - (this._n8ody[qm] || 0),
              d = c.y + i - (this._n8ody[Um] || 0);
            if (this._n9p[No](t - u, i - d, n, e), this[sA][$f]) {
                var c = $s({
                  x: u,
                  y: d
                }, this.element[$f]);
                u = c.x,
                d = c.y
              }
            this.element.x += u,
            this[sA].y += d
          } else {
            var u = this._n9p.x * n / this._n9p[sf] - t,
              d = this._n9p.y * e / this._n9p[tf] - i;
            if (this._n9p[No](t + u, i + d, n, e), this[sA][$f]) {
                var c = $s({
                  x: u,
                  y: d
                }, this[sA][$f]);
                u = c.x,
                d = c.y
              }
            this.element.x -= u,
            this[sA].y -= d
          }
      },
      ondrag: function (t, i) {
        if (this.element && this._8r) if (this._8r != this._rotatePoint) {
          var n = t.dx,
            e = t.dy,
            s = i.scale;
          if (n /= s, e /= s, this[sA].rotate) {
              var h = {
                x: n,
                y: e
              };
              $s(h, -this.element[$f]),
              n = h.x,
              e = h.y
            }
          var r = this._8r.p,
            a = this._n9p,
            f = a.x,
            o = a.y,
            _ = a[sf],
            c = a[tf];
          r.horizontalPosition == PD ? n >= _ ? (f += _, _ = n - _ || 1) : (f += n, _ -= n) : r[Vd] == CD && (-n >= _ ? (_ = -n - _ || 1, f -= _) : _ += n),
          r[qr] == LD ? e >= c ? (o += c, c = e - c || 1) : (o += e, c -= e) : r[qr] == ND && (-e >= c ? (c = -e - c || 1, o -= c) : c += e),
          this._4n(f, o, _, c, t[RC]);
          var u = new Ih(i, Ih.RESIZING, t, this[sA]);
          u.point = this._8r,
          i.onInteractionEvent(u)
        } else {
          var h = i.toLogical(t),
            d = yn(h.x, h.y, this[sA].x, this[sA].y, this._8r[lA].x, this._8r.start.y, !0);
          d += this._8r[$f] || 0,
          t.shiftKey && (d = Math[jf](d / Math.PI * 4) * Math.PI / 4),
          this[sA].rotate = d % (2 * Math.PI);
          var u = new Ih(i, Ih[NC], t, this[sA])
        }
      },
      enddrag: function (t, i) {
        if (this.element && this._8r && this._8r != this._rotatePoint) {
          var n = new Ih(i, Ih[DC], t, this[sA]);
          n.point = this._8r,
          i[jI](n)
        }
      }
    },
  w$[$C] = Oh;
  var iG = function (t) {
      this[Uc] = t
    };
  iG[yr] = {
      onstart: function (t, i) {
        if (!t.responded) {
          !lD && nD && i[GI](!0);
          var n = t[Tv]();
          if (n && !i[ju](n) && (n = null), n && Si(t)) {
            i[BC](n);
            var e = new Ih(i, Ih[FC], t, i[Ou]);
            return void i[jI](e)
          }
          if (!n || !i[Ou][iC](n)) {
            n ? (i[GC](n), i[zC](n)) : i[GC](null);
            var e = new Ih(i, Ih.SELECT, t, i[Ou]);
            i.onInteractionEvent(e)
          }
        }
      },
      onkeydown: function (t, i) {
        return 27 == t[zx] ? void i.unSelectAll() : void(Si(t) && 65 == t[zx] && (i[YC](), I(t)))
      }
    };
  var nG = 0,
    eG = 15;
  pD[HC] = 3e3,
  pD[qC] = 1e3;
  var sG = UC;
  bi($r + sG, {
      "background-color": WC,
      overflow: yu,
      "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
      color: Xy,
      "pointer-events": gu,
      border: XC,
      padding: VC,
      display: MP,
      position: pu
    });
  var hG = function (t) {
      this[Uc] = t,
      this._n7v = {}
    };
  hG[yr] = {
      _n7v: null,
      _n7y: null,
      _n7z: function () {
        delete this._initTimer,
        this._n7v[Cf] && (this._n7y || (this._n7y = i.createElement(ru), this._n7y.className = sG), this._n7y.parentNode || i[TS][lu](this._n7y), this._n9e(this.graph, this._n7v[Cf]))
      },
      _n9e: function (t, i) {
        var n = t.getTooltip(i),
          e = Wu == i[KC];
        n && !e && (n = n[Vr](/\n/g, ZC)),
        e ? this._n7y[JC] = n || "" : this._n7y[ZI] = n || "";
        var s = this._n7v[QC][ca] + nG,
          h = this._n7v.evt.pageY + eG;
        jh(this._n7y, s, h),
        this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer),
        this._deleteTimer = setTimeout(w$.createFunction(this, this._86), t.tooltipDuration || pD.TOOLTIP_DURATION)
      },
      _86: function () {
        delete this._deleteTimer,
        this._n7y && this._n7y[Py] && this._n7y[Py][av](this._n7y),
        delete this._n7y,
        this._n7v = {}
      },
      _ef: function (t, i, n, e) {
        if (!this._n7y) {
          var s = e[tL];
          return isNaN(s) && (s = pD[qC]),
          void(this._initTimer = setTimeout(w$[iL](this, this._n7z), s))
        }
        this._n9e(e, t)
      },
      onstart: function (t, i) {
        this[gc](i)
      },
      onmousemove: function (t, i) {
        if (i.enableTooltip) {
          var n = t[Tv]();
          if (this._n7v[QC] = t, this._n7v.data != n && (this._n7v.data = n, this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), n)) {
            var e = i[nL](n);
            e && this._ef(n, e, t, i)
          }
        }
      },
      destroy: function () {
        this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer),
        this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer),
        this._n7y && this._86(),
        this._n7v = {}
      }
    };
  var rG = function (t) {
      this[Uc] = t
    };
  rG.prototype = {
      onmousewheel: function (t, i) {
        if (i[eL] !== !1) {
          if (i._scaling) return void I(t);
          i._scaling = !0,
          E(function () {
            delete i._scaling
          }, this, 100),
          oh(i, t, t.delta > 0) !== !1 && I(t)
        }
      }
    };
  var aG = function (t) {
      this[Uc] = t
    };
  aG[yr] = {
      onclick: function (t, i) {
        oh(i, t, !Si(t))
      }
    };
  var fG = function (t) {
      this.graph = t
    };
  fG[yr] = {
      onclick: function (t, i) {
        oh(i, t, Si(t))
      }
    },
  N(Ih, BD),
  Ih[eC] = sL,
  Ih[hL] = rL,
  Ih[rC] = aL,
  Ih.ELEMENT_CREATED = fL,
  Ih[oL] = _L,
  Ih[cL] = uL,
  Ih[dL] = lL,
  Ih.POINT_MOVE_END = vL,
  Ih[AC] = bL,
  Ih.RESIZING = yL,
  Ih[DC] = gL,
  Ih.ROTATING = pL,
  Ih[xL] = EL,
  Ih[mL] = wL,
  Ih.SELECT = Vu,
  Ih[EC] = TL,
  Ih[kC] = kL,
  Ih.SELECT_END = OL,
  Ih[ML] = SL,
  Ph.prototype = {
      _8o: function (t) {
        if (this._interactionSupport) switch (t[cl]) {
        case VD[Gl]:
          this._interactionSupport._43(t[Cf]);
          break;
        case VD[zl]:
          this._interactionSupport._71(t[Cf])
        }
      },
      destroy: function () {
        delete this._k3,
        delete this._4u,
        this._interactionSupport && (this._interactionSupport._i0(), delete this._interactionSupport)
      },
      _k3: null,
      _4u: null,
      defaultMode: null,
      _fy: function (t, i, n) {
        this._4u[t] = new uh(i, n),
        t == this.currentMode && this._interactionSupport._6p(i)
      },
      addCustomInteraction: function (t) {
        this._interactionSupport._$e(t)
      },
      _mn: function (t) {
        var i = this._4u[t];
        return i ? i : oG[t]
      }
    },
  Z(Ph[yr], {
      defaultCursor: {
        get: function () {
          return this[jL] ? this[jL][Nu] : void 0
        }
      },
      currentMode: {
        get: function () {
          return this._n9urrentMode
        },
        set: function (t) {
          this._n9urrentMode != t && (this._n9urrentMode, this._interactionSupport || (this._interactionSupport = new o$(this._k3)), this._n9urrentMode = t, this[jL] = this._mn(this._n9urrentMode), this._k3.cursor = this[Nu], this._interactionSupport._6p(this.currentInteractionMode ? this[jL][IL](this._k3) : []))
        }
      }
    });
  var oG = {};
  pD.registerInteractions = function (t, i, n) {
      var e = new uh(i, n);
      oG[t] = e
    },
  T$.INTERACTION_MODE_VIEW = PL,
  T$.INTERACTION_MODE_DEFAULT = Du,
  T$[AL] = Uu,
  T$.INTERACTION_MODE_ZOOMIN = CL,
  T$.INTERACTION_MODE_ZOOMOUT = LL,
  T$.INTERACTION_MODE_CREATE_SIMPLE_EDGE = RL,
  T$[NL] = DL,
  T$[$L] = BL,
  T$[FL] = GL,
  pD[zL](T$[YL], [iG, QF, rG, ZF, VF, hG]),
  pD[zL](T$[HL], [KF, gh, iG, QF, rG, ZF, hG]),
  pD[zL](T$[NL], [KF, vh, iG, QF, rG, ZF, hG]),
  pD.registerInteractions(T$[$L], [KF, bh, iG, QF, rG, ZF, hG]),
  pD[zL](T$[FL], [yh, iG, QF, rG, ZF, hG]),
  pD[zL](T$.INTERACTION_MODE_DEFAULT, [KF, Oh, kh, iG, JF, QF, rG, ZF, VF, hG]),
  pD.registerInteractions(T$[AL], [KF, Oh, kh, iG, JF, tG, QF, rG, ZF, VF, hG]),
  pD[zL](T$[qL], [rG, ZF, aG], _$),
  pD[zL](T$[UL], [rG, ZF, fG], c$),
  w$[WL] = QF,
  w$[XL] = iG,
  w$[VL] = JF,
  w$.WheelZoomInteraction = rG,
  w$[KL] = VF,
  w$.ExportInteraction = ZF,
  w$.TooltipInteraction = hG,
  w$[ZL] = tG,
  w$[JL] = kh;
  var _G = function (t) {
      this[Uc] = t
    };
  w$.Layouter = _G,
  _G[yr] = {
      getNodeBounds: function (t) {
        return this[Uc].getUIBounds(t)
      },
      isLayoutable: function (t) {
        return t[QL] !== !1
      },
      getLayoutResult: function () {},
      updateLocations: function (t, i, n, e, s) {
        if (i === !0) {
          if (this[tR] || (this.animate = new DG), n && (this[tR].duration = n), e && (this.animate[QP] = e), this.animate[iR] = t, s) {
            var h = s,
              r = this;
            s = function () {
                h[zh](r, t)
              }
          }
          return void this[tR].start(s)
        }
        for (var a in t) {
          var f = t[a],
            o = f.node;
          o[qI](f.x, f.y)
        }
        s && s[zh](this, t)
      },
      _fe: function (t) {
        var i, n, e, s = null;
        t && (i = t[nR], s = t.callback, n = t.duration, e = t[QP]);
        var h = this[eR](t);
        return h ? (this[sR](h, i, n, e, s), h) : !1
      },
      doLayout: function (t, i) {
        return this.graph && i !== !0 ? void this.graph[YI](function () {
          this._fe(t)
        }, this) : this._fe(t)
      }
    };
  var cG = 11,
    uG = 12,
    dG = 13,
    lG = 21,
    vG = 22,
    bG = 23;
  T$[hR] = cG,
  T$.DIRECTION_LEFT = uG,
  T$[rR] = dG,
  T$[aR] = lG,
  T$.DIRECTION_TOP = vG,
  T$.DIRECTION_MIDDLE = bG;
  var yG = fR,
    gG = oR,
    pG = _R,
    xG = cR;
  T$.LAYOUT_TYPE_EVEN = yG,
  T$[uR] = pG,
  T$.LAYOUT_TYPE_EVEN_VERTICAL = xG,
  T$[dR] = gG,
  w$[lR] = Ah;
  var EG = function (t) {
      this[Uc] = t
    };
  EG[yr] = {
      hGap: 50,
      vGap: 50,
      parentChildrenDirection: lG,
      layoutType: yG,
      defaultSize: {
        width: 50,
        height: 60
      },
      getNodeSize: function (t) {
        if (this.graph._83._n7a) {
          var i = this[Uc].getUI(t);
          if (i) return i._ex
        }
        return t[hg] && t[hg].bounds ? {
          width: t.image.bounds[sf],
          height: t[hg][Of][tf]
        } : this[vR]
      },
      _n9a: function (t, i) {
        if (this.isLayoutable(t)) {
          var n = this[bR](t),
            e = t.id,
            s = (t[yR], i ? this._99[i.id] : this._n7f);
          this._99[e] = new mG(t[gR] || this.hGap, t[pR] || this[pR], t.layoutType || this[xR], t[yR], s, t, n[sf], n[tf])
        }
      },
      _99: null,
      _n7f: null,
      _kc: function () {
        this._99 = null,
        this._n7f = null
      },
      getLayoutResult: function (t) {
        var i, n, e, s, h = this[Uc];
        t instanceof Object && (i = t.x, n = t.y, h = t[ER] || this[Uc], e = t[Of], s = t.undirected),
        this._99 = {},
        this._n7f = new mG,
        this._n7f._mv(this[gR], this.vGap, this[yR], this.layoutType);
        var r = {},
          a = FG(h, this._n9a, this, !1, s);
        return a && (this._n7f._fe(i || 0, n || 0, r), e && e[No](this._n7f.x, this._n7f.y, this._n7f.width, this._n7f[tf])),
        this._kc(),
        r
      },
      doLayout: function (t, i) {
        if (O(t)) {
          var n = t,
            e = 0;
          O(i) && (e = i),
          t = {
              x: n,
              y: e
            },
          i = !0
        }
        return $(this, EG, mR, [t, i])
      }
    },
  N(EG, _G);
  var mG = function (t, i, n, e, s, h, r, a) {
      this._m8 = t || 0,
      this._mb = i || 0,
      this[xR] = n,
      this[yR] = e,
      this[wR] = s,
      s && s._gs(this),
      this.node = h,
      this._dv = r,
      this._n97 = a
    };
  mG.prototype = {
      _mv: function (t, i, n, e) {
        this._m8 = t,
        this._mb = i,
        this[yR] = n,
        this[xR] = e
      },
      _8c: function () {
        this._f2 = []
      },
      _m8: 0,
      _mb: 0,
      _f2: null,
      _dv: 0,
      _n97: 0,
      layoutType: null,
      parentChildrenDirection: null,
      _gs: function (t) {
        this._f2 || (this._f2 = []),
        this._f2[Ea](t)
      },
      _n9d: function (t, i, n, e) {
        var s = new SD;
        return n(this._f2, function (n) {
          n._3n(t, i),
          s[nr](n),
          e ? t += n[sf] + this._m8 : i += n[tf] + this._mb
        }, this),
        s
      },
      _8d: function (t, i, n, e, s) {
        var h, r = e ? this._m8 : this._mb,
          a = e ? this._mb : this._m8,
          f = e ? "width" : tf,
          o = e ? "height" : sf,
          _ = e ? "_dv" : TR,
          c = e ? "_n97" : kR,
          u = e ? "hostDX" : OR,
          d = e ? "hostDY" : MR,
          v = new SD,
          b = 0,
          y = 0,
          g = [],
          p = 0,
          x = 0;
        n(this._f2, function (n) {
            var s = x >= y;
            n._inheritedParentChildrenDirection = s ? e ? uG : vG : e ? cG : lG,
            n._3n(t, i),
            s ? (g[Ea](n), b = Math.max(b, n[f]), y += n[o] + a) : (h || (h = []), h.push(n), p = Math[pf](p, n[f]), x += n[o] + a)
          }, this),
        y -= a,
        x -= a;
        var E = Math.max(y, x),
          m = r,
          w = 0;
        this[SR] && (s && (m += this[_] + r, E > this[c] ? this[d] = (E - this[c]) / 2 : w = (this[c] - E) / 2), this[u] = b + m / 2 - this[_] / 2);
        var T = 0,
          k = w;
        return l(g, function (t) {
            e ? t[ow](b - t[f], k) : t[ow](k, b - t[f]),
            k += a + t[o],
            v.add(t)
          }, this),
        h ? (k = w, T = b + m, l(h, function (t) {
            e ? t[ow](T, k) : t[ow](k, T),
            k += a + t[o],
            v[nr](t)
          }, this), v) : v
      },
      offset: function (t, i) {
        this.x += t,
        this.y += i,
        this[jR] += t,
        this.nodeY += i,
        this._67(t, i)
      },
      _n8a: function (t, i) {
        return 2 * this.cx - t - i - t
      },
      _n8c: function (t, i) {
        return 2 * this.cy - t - i - t
      },
      _mh: function (t) {
        if (this._f2 && 0 != this._f2[Gh]) {
          if (t) return this[SR] && (this[jR] += this._n8a(this[jR], this._dv)),
          void l(this._f2, function (t) {
            t[ow](this._n8a(t.x, t[sf]), 0)
          }, this);
          this[SR] && (this[IR] += this._n8c(this.nodeY, this._n97)),
          l(this._f2, function (t) {
            t[ow](0, this._n8c(t.y, t.height))
          }, this)
        }
      },
      _67: function (t, i) {
        this._f2 && l(this._f2, function (n) {
          n.offset(t, i)
        }, this)
      },
      _3n: function (t, i) {
        return this.x = t || 0,
        this.y = i || 0,
        this._f2 && 0 != this._f2[Gh] ? void this._1u(this.x, this.y, this[xR]) : void(this.node && (this[sf] = this._dv, this[tf] = this._n97, this[jR] = this.x, this[IR] = this.y))
      },
      _7e: function (t) {
        this[SR] && (t[this[SR].id] = {
          node: this.node,
          x: this[jR] + this._dv / 2,
          y: this[IR] + this._n97 / 2,
          left: this.nodeX,
          top: this[IR],
          width: this._dv,
          height: this._n97
        }),
        this._f2 && l(this._f2, function (i) {
          i._7e(t)
        }, this)
      },
      _fe: function (t, i, n) {
        this._3n(t, i),
        this._7e(n)
      },
      _1u: function (t, i, e) {
        var s, h = t,
          r = i;
        !this.parentChildrenDirection && this.parentBounds && (this[yR] = this._inheritedParentChildrenDirection || this[wR].parentChildrenDirection);
        var a = this[yR],
          f = Ah(a);
        if (this[SR]) {
            s = a == dG || a == bG;
            var o = Ch(a);
            s || (f ? t += this._dv + this._m8 : i += this._n97 + this._mb)
          }
        var _, c = this.node && this[SR][PR] ? b : l;
        if (e == gG) _ = this._8d(t, i, c, !f, s);
        else {
            var u;
            u = e == yG ? !f : e == pG,
            _ = this._n9d(t, i, c, u, s)
          }
        var d = 0,
          v = 0;
        _ && !_[Fo]() && (d = _.width, v = _.height, this.add(_)),
        this[SR] && (this[jR] = h, this[IR] = r, this.hostDX !== n || this.hostDY !== n ? (this.nodeX += this[MR] || 0, this[IR] += this[OR] || 0) : f ? this.nodeY += v / 2 - this._n97 / 2 : this[jR] += d / 2 - this._dv / 2, this[Ud](this[jR], this[IR], this._dv, this._n97), o && this._mh(f))
      },
      node: null,
      uiBounds: null
    },
  N(mG, SD),
  Rh[yr] = {
      layoutDatas: null,
      isMovable: function (t) {
        return !this.currentMovingNodes[t.id]
      },
      _69: !1,
      _3l: function () {
        this._69 = !0,
        this[Uc]._1w.addListener(this._8k, this),
        this[Uc]._1h.addListener(this._2f, this)
      },
      _1m: function () {
        this._69 = !1,
        this.graph._1w[Ll](this._8k, this),
        this[Uc]._1h.removeListener(this._2f, this)
      },
      invalidateFlag: !0,
      invalidateLayoutDatas: function () {
        this.invalidateFlag = !0
      },
      resetLayoutDatas: function () {
        return this[km] = !1,
        this[AR] = Lh[zh](this)
      },
      _2f: function (t) {
        Ih[eC] == t[cl] ? (this.currentMovingNodes = {}, t[_v][s_](function (t) {
          this.currentMovingNodes[t.id] = t
        }, this)) : Ih[rC] == t[cl] && (this.currentMovingNodes = {})
      },
      _8k: function () {
        this[CR]()
      },
      isRunning: function () {
        return this.timer && this[LR]._d1()
      },
      getLayoutResult: function () {
        this.stop(),
        this[RR]();
        for (var t = this[NR](this[AR].nodeCount || 0, this[AR].edgeCount || 0), i = 0; t > i && this[DR](!1) !== !1; i++);
        var n = this[AR][$R];
        return this[BR](),
        n
      },
      _lr: function () {
        return !1
      },
      step: function (t) {
        if (t === !1) return this._lr(this[FR]);
        (this[km] || !this[AR]) && this.resetLayoutDatas();
        var i = this._lr(t),
          n = this[AR].nodes;
        for (var e in n) {
            var s = n[e],
              h = s[SR];
            this.isMovable(h) ? h[qI](s.x, s.y) : (s.x = h.x, s.y = h.y, s.vx = 0, s.vy = 0)
          }
        return i
      },
      onstop: function () {
        delete this[AR]
      },
      start: function (t) {
        if (this[GR]()) return !1;
        this._69 || this._3l(),
        this._iyr || (this._iyr = z(this, function (t) {
          return this[DR](t)
        })),
        this.invalidateLayoutDatas(),
        this[LR] = new x$(this._iyr);
        var i = this;
        return this.timer._kg(function () {
          i.onstop(),
          t && t()
        }),
        !0
      },
      stop: function () {
        this[LR] && (this[LR]._ly(), this[BR]())
      },
      getMaxIterations: function (t) {
        return Math.min(1e3, 3 * t + 10)
      },
      minEnergyFunction: function (t, i) {
        return 10 + Math.pow(t + i, 1.4)
      },
      resetGraph: function () {
        this._69 || this._3l(),
        this.resetLayoutDatas()
      },
      destroy: function () {
        this[zR](),
        this._1m()
      }
    },
  N(Rh, _G);
  var wG = function (t, i, n, e) {
      this[Uc] = t,
      O(i) && (this[_l] = i),
      O(n) && (this[YR] = n),
      O(e) && (this[HR] = e)
    };
  w$[qR] = wG;
  var TG = UR,
    kG = WR,
    OG = XR,
    MG = VR;
  T$.ANGLE_SPACING_PROPORTIONAL = TG,
  T$[KR] = kG,
  T$.RADIUS_MODE_UNIFORM = OG,
  T$[ZR] = MG,
  wG.prototype = {
      angleSpacing: TG,
      radiusMode: MG,
      gap: 4,
      radius: 50,
      startAngle: 0,
      _99: null,
      _n7f: null,
      _kc: function () {
        this._99 = null,
        this._n7f = null
      },
      getLayoutResult: function (t) {
        var i, n = 0,
          e = 0,
          s = this.graph;
        t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t[ER] || this[Uc], i = t.bounds),
        this._99 = {},
        this._n7f = new IG(this);
        var h = {},
          r = GG(s, this._n9a, this);
        return r && (this._n7f._f2 && 1 == this._n7f._f2[Gh] && (this._n7f = this._n7f._f2[0]), this._n7f._eo(!0), this._n7f._61(n, e, this[HR], h, i)),
        this._kc(),
        h
      },
      _n9a: function (t, i) {
        if (this[JR](t)) {
          var n = i ? this._99[i.id] : this._n7f;
          this._99[t.id] = new IG(this, t, n)
        }
      },
      defaultSize: 40,
      getRadius: function () {
        return this[_l]
      },
      getNodeSize: function (t) {
        if (this[Uc]._83._n7a) {
          var i = this[Uc][ba](t);
          if (i) return (i._ex[sf] + i._ex.height) / 2
        }
        return this[vR]
      },
      getGap: function () {
        return this[YR]
      },
      _2x: function (t, i, n) {
        return this.getNodeSize(t, i, n) + this[QR](t, i, n)
      }
    };
  var SG = function (t) {
      var i, n = this._f2[Gh],
        e = 0,
        s = 0;
      if (l(this._f2, function (t) {
          var n = t._eo();
          1 > n && (n = 1),
          s += n,
          n > e && (e = n, i = t)
        }, this), n > 1) {
          var h = 0,
            r = {},
            a = s / n / 3;
          s = 0,
          l(this._f2, function (t) {
              var i = t._lw;
              a > i && (i = a),
              r[t.id] = i,
              s += i
            }, this);
          var f = PG / s;
          l(this._f2, function (i, n) {
              var e = r[i.id],
                s = e * f;
              0 === n && (h = t ? -s / 2 : -s),
              i._kj = h + s / 2,
              i._ki = s,
              h += s
            }, this)
        }
      return [e, i._ki]
    },
    jG = function (t) {
      var i = this._8a,
        n = 2 * Math.PI / i,
        e = 0,
        s = t ? 0 : i > 1 ? -n / 2 : 0;
      return l(this._f2, function (t) {
          t._kj = s % PG,
          s += n,
          t._ki = n;
          var i = t._eo();
          i > e && (e = i)
        }, this),
      [e, n]
    },
    IG = function (t, i, n) {
      this[tN] = t,
      i && (this._m0 = i, this.id = i.id),
      n && (n._gs(this), n._lt = !1, this._kl = n._kl + 1)
    },
    PG = 2 * Math.PI;
  IG[yr] = {
      _ki: 0,
      _kj: 0,
      _jz: 0,
      _ep: 0,
      _n94: 0,
      _kl: 0,
      _lt: !0,
      _lw: 0,
      _gv: 0,
      _f2: null,
      _m0: null,
      _gs: function (t) {
        this._f2 || (this._f2 = []),
        this._f2.push(t),
        t.parent = this
      },
      _gt: function (t) {
        if (this._kj = (this._kj + t) % PG, this._f2) {
          var i = this._f2.length;
          if (1 == i) return void this._f2[0]._gt(this._kj);
          t = this._kj + Math.PI,
          l(this._f2, function (i) {
            i._gt(t)
          }, this)
        }
      },
      _8a: 0,
      _7j: function (t) {
        return this._m0 && (this._gv = this[tN]._2x(this._m0, this._kl, this._lt) / 2),
        this._f2 ? (this._gv, this._8a = this._f2[Gh], this._8a <= 2 || this.layouter[iN] == kG ? jG[zh](this, t) : SG[zh](this, t)) : null
      },
      _eo: function (t) {
        var i = this._7j(t);
        if (!i) return this._lw = this._gv;
        var n = i[0],
          e = i[1],
          s = this[tN].getRadius(this._m0, this._kl);
        if (s < this._gv && (s = this._gv), this._ep = s, this._gv + n > s && (s = this._gv + n), n && this._8a > 1 && e < Math.PI) {
            var h = n / Math[Ja](e / 2);
            h > s && (s = h)
          }
        return this._jz = s,
        this._lw = s + n,
        this._m0 && this._f2 && this[tN][nN] == MG && l(this._f2, function (t) {
            var i = t._lw;
            1 == t._8a && (i /= 2);
            var n = this._gv + i,
              e = t._ki;
            if (e && e < Math.PI) {
                var s = Math[Ja](e / 2),
                  h = i / s;
                h > i && (i = h)
              }
            n > i && (i = n),
            t._n94 = i
          }, this),
        (!this._m0 || t) && this._gt(0),
        this._lw
      },
      _61: function (t, i, n, e, s) {
        if (this._m0 && (e[this._m0.id] = {
          x: t,
          y: i,
          node: this._m0
        }, s && s[Ud](t - this._gv / 2, i - this._gv / 2, this._gv, this._gv)), this._f2) {
          if (!this._m0 && 1 == this._f2.length) return void this._f2[0]._61(t, i, n, e, s);
          n = n || 0;
          var h = this._jz,
            r = this._ep;
          l(this._f2, function (a) {
              var f = h;
              a._n94 && (f = Math[pf](r, a._n94));
              var o = a._kj + n,
                _ = t + f * Math[Qa](o),
                c = i + f * Math.sin(o);
              a._61(_, c, n, e, s)
            }, this)
        }
      }
    },
  N(wG, _G);
  var AG = function () {
      D(this, AG, arguments)
    };
  N(AG, Nh);
  var CG = function (t, i) {
      this[eN] = t,
      this.node2 = i,
      t == i ? (this[P_] = !0, this._ld = t._kd) : this._ld = new ED,
      this._8i = [],
      this._fu = pD[sN]
    };
  pD.EDGE_BUNDLE_EXPANDED = !0,
  CG[yr] = {
      node1: null,
      node2: null,
      _ld: null,
      _fu: pD[sN],
      _8i: null,
      _fv: null,
      agentEdge: null,
      _n81: function (t, i, n) {
        this._ld[s_](function (e) {
          return n && e[$_] != n && e[S_] != n ? void 0 : t[zh](i, e)
        })
      },
      _5g: 0,
      _5f: 0,
      _hk: function (t, i) {
        return this._ld.add(t) === !1 ? !1 : (i == this[eN] ? this._5g++ : this._5f++, this._n7a ? void this._12(t) : void(this._n7a = !0))
      },
      _n9n: function (t, i) {
        return this._ld[Vh](t) === !1 ? !1 : (i == this[eN] ? this._5g-- : this._5f--, this._12(t), void this._ld.forEach(function (t) {
          t._edgeBundleInvalidateFlag = !0,
          t.__4e = !0
        }, this))
      },
      _12: function (t) {
        this._n8yBindableFlag = !0,
        this._68 = !0,
        t._edgeBundleInvalidateFlag = !0,
        t.__4e = !0
      },
      _n8y: function () {
        this._68 || (this._68 = !0, this._ld[s_](function (t) {
          t._edgeBundleInvalidateFlag = !0
        }))
      },
      isEmpty: function () {
        return this._ld[Fo]()
      },
      isPositiveOrder: function (t) {
        return this.node1 == t[$_] || this[eN] == t[S_]
      },
      canBind: function (t) {
        return t && this._68 && this._fa(t),
        this._ld[Gh] > 1 && this._8i.length > 1
      },
      _hp: function (t) {
        return this._8i[er](t)
      },
      getYOffset: function (t) {
        return this._fv[t.id]
      },
      _4l: function (t) {
        if (!this.canBind()) return void(this._fv = {});
        var i = {},
          n = this._8i[Gh];
        if (!(2 > n)) {
            var e = 0,
              s = this._8i[0];
            i[s.id] = 0;
            for (var h = 1; n > h; h++) {
                s = this._8i[h];
                var r = t.getStyle(s, gF[Wk]) || BF[gF[Wk]];
                e += r,
                i[s.id] = e
              }
            if (!this[P_]) for (var a = e / 2, h = 0; n > h; h++) s = this._8i[h],
            i[s.id] -= a;
            this._fv = i
          }
      },
      _n80: function (t) {
        return this._fu == t ? !1 : (this._fu = t, this._n8y(), !0)
      },
      reverseExpanded: function () {
        return this._n80(!this._fu)
      },
      _1k: function () {
        this._n8yBindableFlag = !1,
        this._8i[Gh] = 0;
        var t;
        this._ld[s_](function (i) {
          if (i[hN]()) {
            if (!this[Tj](i)) return t || (t = []),
            void t.push(i);
            this._8i.push(i)
          }
        }, this),
        t && (this._8i = t[Wh](this._8i))
      },
      _ea: function (t) {
        return t == this[cP] || !this[mj]() || this._fu
      },
      _fa: function (t) {
        this._68 = !1,
        this._ld.forEach(function (t) {
          t._edgeBundleInvalidateFlag = !1
        }),
        this._n8yBindableFlag && this._1k();
        var i = this._fu,
          n = this[mj](),
          e = !n || i;
        l(this._8i, function (t) {
            t._$t = !0,
            t._hnInBundle = e,
            e && (t.__4e = !0)
          }, this),
        e ? this._9d(null, t) : (this._9d(this._8i[0], t), this.agentEdge._hnInBundle = !0, this[cP].__4e = !0),
        e && this._4l(t)
      },
      _9d: function (t, i) {
        if (t != this.agentEdge) {
          var n = this[cP];
          return this[cP] = t,
          i && i._4v(new FD(this, cP, t, n)),
          !0
        }
      }
    },
  Z(CG.prototype, {
      bindableEdges: {
        get: function () {
          return this._8i
        }
      },
      edges: {
        get: function () {
          return this._ld._j1
        }
      },
      length: {
        get: function () {
          return this._ld ? this._ld.length : 1
        }
      },
      expanded: {
        get: function () {
          return this._fu
        },
        set: function (t) {
          return this._fu == t ? !1 : (this._fu = t, void this._n8y())
        }
      }
    });
  var LG = function () {
      function t(t, i) {
        this[SR] = t,
        this[TS] = i
      }
      function i() {
        this[rN] = [],
        this[aN] = 0
      }
      var n = -1e6,
        e = .8;
      i[yr] = {
          isEmpty: function () {
            return 0 === this[aN]
          },
          push: function (i, n) {
            var e = this.stack[this[aN]];
            e ? (e[SR] = i, e.body = n) : this.stack[this.popIdx] = new t(i, n),
            ++this[aN]
          },
          pop: function () {
            return this[aN] > 0 ? this[rN][--this.popIdx] : void 0
          },
          reset: function () {
            this[aN] = 0
          }
        };
      var s = [],
        h = new i,
        r = function () {
          this[TS] = null,
          this[fN] = [],
          this[oN] = 0,
          this[_N] = 0,
          this[cN] = 0,
          this.left = 0,
          this[Xf] = 0,
          this.bottom = 0,
          this[zr] = 0,
          this.isInternal = !1
        },
        a = [],
        f = 0,
        o = function () {
          var t;
          return a[f] ? (t = a[f], t[fN][0] = null, t[fN][1] = null, t[fN][2] = null, t.quads[3] = null, t[TS] = null, t[oN] = t.massX = t[cN] = 0, t[la] = t[zr] = t[Xf] = t[Yr] = 0, t[uN] = !1) : (t = new r, a[f] = t),
          ++f,
          t
        },
        _ = o(),
        c = function (t, i) {
          var n = Math[Hr](t.x - i.x),
            e = Math[Hr](t.y - i.y);
          return 1e-8 > n && 1e-8 > e
        },
        u = function (t) {
          for (h[dN](), h[Ea](_, t); !h[Fo]();) {
            var i = h[Nv](),
              n = i[SR],
              e = i.body;
            if (n[uN]) {
                var s = e.x,
                  r = e.y;
                n[oN] = n[oN] + e[oN],
                n[_N] = n[_N] + e.mass * s,
                n[cN] = n.massY + e[oN] * r;
                var a = 0,
                  f = n[la],
                  u = (n[zr] + f) / 2,
                  d = n[Xf],
                  l = (n.bottom + d) / 2;
                if (s > u) {
                    a += 1;
                    var v = f;
                    f = u,
                    u += u - v
                  }
                if (r > l) {
                    a += 2;
                    var b = d;
                    d = l,
                    l += l - b
                  }
                var y = n[fN][a];
                y || (y = o(), y.left = f, y[Xf] = d, y[zr] = u, y.bottom = l, n.quads[a] = y),
                h[Ea](y, e)
              } else if (n[TS]) {
                var g = n[TS];
                if (n.body = null, n.isInternal = !0, c(g, e)) {
                  if (n[zr] - n.left < 1e-8) return;
                  do {
                    var p = Math[lr](),
                      x = (n.right - n[la]) * p,
                      E = (n[Yr] - n[Xf]) * p;
                    g.x = n[la] + x, g.y = n[Xf] + E
                  } while (c(g, e))
                }
                h[Ea](n, g),
                h[Ea](n, e)
              } else n.body = e
          }
        },
        d = function (t) {
          var i, h, r, a, f = s,
            o = 1,
            c = 0,
            u = 1;
          for (f[0] = _; o;) {
              var d = f[c],
                l = d.body;
              o -= 1,
              c += 1,
              l && l !== t ? (h = l.x - t.x, r = l.y - t.y, a = Math.sqrt(h * h + r * r), 0 === a && (h = (Math[lr]() - .5) / 50, r = (Math[lr]() - .5) / 50, a = Math[Ef](h * h + r * r)), i = n * l.mass * t.mass / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (h = d.massX / d[oN] - t.x, r = d[cN] / d[oN] - t.y, a = Math[Ef](h * h + r * r), 0 === a && (h = (Math[lr]() - .5) / 50, r = (Math[lr]() - .5) / 50, a = Math.sqrt(h * h + r * r)), (d[zr] - d[la]) / a < e ? (i = n * d.mass * t.mass / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (d.quads[0] && (f[u] = d[fN][0], o += 1, u += 1), d[fN][1] && (f[u] = d[fN][1], o += 1, u += 1), d[fN][2] && (f[u] = d[fN][2], o += 1, u += 1), d.quads[3] && (f[u] = d[fN][3], o += 1, u += 1)))
            }
        },
        l = function (t, i) {
          n = i;
          var e, s = Number.MAX_VALUE,
            h = Number.MAX_VALUE,
            r = Number[lN],
            a = Number[lN],
            c = t,
            d = c.length;
          for (e = d; e--;) {
              var l = c[e].x,
                v = c[e].y;
              s > l && (s = l),
              l > r && (r = l),
              h > v && (h = v),
              v > a && (a = v)
            }
          var b = r - s,
            y = a - h;
          for (b > y ? a = h + b : r = s + y, f = 0, _ = o(), _[la] = s, _[zr] = r, _[Xf] = h, _[Yr] = a, e = d; e--;) u(c[e], _)
        };
      return {
          init: l,
          update: d
        }
    },
    RG = function (t) {
      t.fx -= t.x * this[vN],
      t.fy -= t.y * this[vN]
    },
    NG = function (t) {
      if (0 != t.k) {
        var i = this._n9r,
          n = t[I_],
          e = t.to,
          s = e.x - n.x,
          h = e.y - n.y,
          r = s * s + h * h,
          a = Math[Ef](r) || .1,
          f = (a - i) * t.k * this[bN];
        f /= a;
        var o = f * s,
          _ = f * h;
        e.fx -= o,
        e.fy -= _,
        n.fx += o,
        n.fy += _
      }
    };
  Nh[yr] = {
      appendNodeInfo: function (t, i) {
        i[oN] = t[yN] || 1,
        i.fx = 0,
        i.fy = 0,
        i.vx = 0,
        i.vy = 0
      },
      appendEdgeInfo: function (t, i) {
        i.k = t.layoutElasticity || 1
      },
      setMass: function (t, i) {
        t[yN] = i,
        this[AR] && this.layoutDatas[$R] && (t = this[AR][$R][t.id], t && (t.mass = i))
      },
      setElasticity: function (t, i) {
        t.layoutElasticity = i,
        this[AR] && this[AR][VE] && (t = this[AR][VE][t.id], t && (t.k = i))
      },
      _n9r: 50,
      _i2: .5,
      timeStep: .15,
      repulsion: 50,
      attractive: .1,
      elastic: 3,
      _ma: 1e3,
      _js: function (t) {
        return this._ma + .3 * (t - this._ma)
      },
      _lr: function (t, i) {
        var n = (Date[qa](), this[AR].nodes);
        for (var e in n) {
          var s = n[e];
          i && (s.x += Math[lr]() - .5, s.y += Math[lr]() - .5),
          RG[zh](this, s)
        }
        var h = this[AR][gN];
        if (h) for (var e in h) {
          var r = h[e],
            a = r.children,
            f = 0,
            o = 0;
          a.forEach(function (t) {
              f += t.x,
              o += t.y
            }),
          f /= a.length,
          o /= a[Gh];
          var _ = 10 * this.attractive;
          a[s_](function (t) {
              t.fx -= (t.x - f) * _,
              t.fy -= (t.y - o) * _
            })
        }
        var c = this._nbodyForce;
        c || (c = this._nbodyForce = LG()),
        c[pN](this[AR][xN], -this[EN] * this[EN] * this.repulsion);
        for (var e in n) c[mN](n[e]);
        if (this[bN]) {
          var u = this[AR][VE];
          for (var e in u) NG[zh](this, u[e])
        }
        return this._md(t)
      },
      _md: function (t) {
        var i = this[AR][wN],
          n = (this[AR].currentEnergy, this[AR].nodes),
          t = this[FR],
          e = 0,
          s = this._i2;
        for (var h in n) {
            var r = n[h],
              a = r.fx / r.mass,
              f = r.fy / r[oN],
              o = r.vx += a * t,
              _ = r.vy += f * t;
            r.x += o * t,
            r.y += _ * t,
            i > e && (e += 2 * (o * o + _ * _)),
            r.fx = 0,
            r.fy = 0,
            r.vx *= s,
            r.vy *= s
          }
        return this[AR][TN] = e,
        e >= i
      }
    },
  N(Nh, Rh),
  w$[kN] = Nh;
  var DG = function (t) {
      this[iR] = t
    };
  DG[yr] = {
      oldLocations: null,
      _dq: null,
      duration: 700,
      animationType: p$.easeOutStrong,
      _7c: function (t) {
        if (this._dq = t, this[ON] = {}, t) for (var i in t) {
          var n = t[i],
            e = n[SR];
          this[ON][i] = {
              x: e.x,
              y: e.y
            }
        }
      },
      setLocation: function (t, i, n) {
        t.setLocation(i, n)
      },
      forEach: function (t, i) {
        for (var n in this.locations) {
          var e = this[ON][n],
            s = this[iR][n];
          t[zh](i, e, s)
        }
      },
      _jm: function (t) {
        this.forEach(function (i, n) {
          var e = n[SR],
            s = i.x + (n.x - i.x) * t,
            h = i.y + (n.y - i.y) * t;
          this[qI](e, s, h)
        }, this)
      },
      stop: function () {
        this._n7nimate && this._n7nimate._ly()
      },
      start: function (t) {
        this._n7nimate ? (this._n7nimate._ly(), this._n7nimate._ii = this[MN], this._n7nimate._dsType = this[QP], this._n7nimate._onfinish = this._onfinish) : this._n7nimate = new E$(this._jm, this, this[MN], this.animationType),
        this._n7nimate._kg(t)
      }
    },
  Z(DG[yr], {
      locations: {
        get: function () {
          return this._dq
        },
        set: function (t) {
          this._dq != t && this._7c(t)
        }
      }
    });
  var $G = function (t) {
      var i = new ED;
      return t[s_](function (t) {
        t instanceof uF && (t[SN]() || i[nr](t._dk || t))
      }),
      i
    },
    BG = function (t, i, n, e, s, h) {
      if (i instanceof KD) return t(i, n, e, s, h),
      i;
      if (i instanceof GF) {
        var r = new ED;
        i._k3Model[s_](function (t) {
          return i[Su](t) ? t._hl() && t._fu && t[Yh]() ? void(t[im] && (t[im][km] = !1)) : void r[nr](t) : void 0
        }),
        i = r
      }
      var i = $G(i);
      return l(i, function (i) {
        t(i, n, e, s, h)
      }),
      i
    },
    FG = function (t, i, n, e, s) {
      return BG(zG, t, i, n, e, s)
    },
    GG = function (t, i, n, e, s) {
      return BG(YG, t, i, n, e, s)
    };
  is.prototype.forEachByTopoDepthFirstSearch = function (t, i, n, e) {
      FG(this, t, i, n, e)
    },
  is[yr].forEachByTopoBreadthFirstSearch = function (t, i, n, e) {
      GG(this, t, i, n, e)
    };
  var zG = function (t, i, n, e, s) {
      function h(t, i, n, e, s, r, a, f) {
        t._marker = r,
        e || i[zh](n, t, f, a),
        Dh(t, function (f) {
          h(f, i, n, e, s, r, a + 1, t)
        }, f, s, r),
        e && i[zh](n, t, f, a)
      }
      h(t, i, n, e, s, {}, 0)
    },
    YG = function (t, i, n, e, s) {
      function h(t, i, n, e, s, r, a) {
        var f, o = t.length;
        t.forEach(function (t, h) {
          var _ = t.v;
          _._marker = r,
          e || i.call(n, _, t._from, a, h, o),
          Dh(_, function (t) {
            f || (f = []),
            t._marker = r,
            f.push({
              v: t,
              _from: _
            })
          }, _, s, r)
        }),
        f && h(f, i, n, e, s, r, a + 1),
        e && t[s_](function (t, e) {
          i[zh](n, t.v, t._from, a, e, o)
        })
      }
      h([{
        v: t
      }], i, n, e, s, {}, 0)
    };
  w$.toColor = V,
  w$[Gr] = ti,
  w$[Jf] = ni,
  w$.trace = ii,
  w$[jN] = nD,
  w$.isOpera = iD,
  w$[IN] = hD,
  w$[PN] = rD,
  w$[AN] = aD,
  w$[CN] = oD,
  w$.isChrome = fD,
  w$[LN] = _D,
  w$[RN] = BF,
  w$[NN] = pD,
  w$[nP] = gF,
  w$[DN] = T$,
  w$.Graphs = fB,
  w$.Graph = GF,
  w$.BaseUI = bF,
  w$[$N] = jF,
  w$.NodeUI = _s,
  w$[kA] = os,
  w$.LabelUI = PF,
  w$.ImageUI = IF,
  w$[BN] = lF,
  w$[FN] = hB,
  w$[tj] = z$,
  w$.InteractionEvent = Ih,
  w$[SE] = _F,
  w$.Node = uF,
  w$.Edge = cF,
  w$[GN] = is,
  w$[zN] = CG,
  w$[YN] = EG,
  w$[kr] = HN;
  var HG = qN;
  return w$[UN] = WN,
  w$[XN] = VN,
  w$[Ux] = "Copyright � 2016 fxdigital.com.cn",
  w$[KN] = di,
  w$[ZN] = zF,
  ti = function () {},
  w$[qx] = JN,
  w$
}(window, document);