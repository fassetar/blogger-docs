(function() {
    var aa = "&action=",
        ba = ".wikipedia.org",
        ca = "DIV",
        da = "GET",
        ea = "SCRIPT",
        fa = "SPAN",
        ga = "SW_READER_LIST_",
        ha = "SW_READER_LIST_CLOSED_",
        ia = "Share this post",
        ja = "absolute",
        ka = "block",
        la = "blog.gPlusViewType",
        ma = "chooseWidget",
        na = "click",
        oa = "collapsed",
        pa = "collapsed-backlink",
        qa = "collapsible",
        ra = "comment-editor",
        g = "complete",
        sa = "configure",
        ta = "contact-form-email",
        ua = "contact-form-email-message",
        k = "contact-form-error-message",
        va = "contact-form-error-message-with-border",
        wa = "contact-form-name",
        xa = "contact-form-submit",
        m = "contact-form-success-message",
        ya = "contact-form-success-message-with-border",
        za = "cse_links.xml",
        Aa = "data-height",
        Ba = "data-viewurl",
        Ca = "displayModeFull",
        Da = "displayModeLayout",
        Ea = "displayModeNone",
        n = "div",
        Fa = "dropdown-toggle",
        Ga = "error",
        Ia = "expanded",
        Ja = "expanded-backlink",
        Ka = "followers-grid",
        p = "function",
        La = "https://",
        Ma = "inline",
        Na = "layout-widget-description",
        Oa = "layout-widget-title",
        Pa = "max-height: 0;",
        Qa = "no widget for ",
        r = "none",
        Ra = "number",
        Sa = "object",
        Ta = "opt_onFulfilled should be a function.",
        Ua = "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?",
        Va = "ready",
        Wa = "rotate(-45deg)",
        Xa = "status-message",
        Ya = "status-message-inner",
        Za = "success",
        $a = "text/javascript",
        ab = "toggle",
        bb = "uds-searchClearResults",
        cb = "uds-searchControl",
        db = "uds-searchResults",
        eb = "visible",
        fb = "webkitvisibilitychange",
        gb = "wikipedia-search-input",
        hb = "wikipedia-search-more",
        ib = "wikipedia-search-results",
        jb = "wikipedia-search-results-header";

    function t(a) {
        return function() {
            return this[a]
        }
    }
    var u;
    window.jstiming && window.jstiming.load.tick("widgetJsStart");

    function kb() {
        window.jstiming.load.tick("ol")
    }

    function lb(a, b) {
        a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent("onload", b)
    }

    function mb(a, b) {
        return a.className && -1 != a.className.indexOf(b) ? a : a.parentNode ? mb(a.parentNode, b) : null
    }

    function nb() {
        window.jstiming.load.tick("prt");
        window.tickAboveFold && window.tickAboveFold(this)
    }
    window.BLOG_attachCsiOnload = function(a, b) {
        if (window.jstiming) {
            window.jstiming.load.tick("widgetJsEnd");
            window.jstiming.load.tick("prt");
            window.jstiming.load.name = a + "blogspot";
            a = document.getElementsByTagName("img");
            for (var c = 0; c < a.length; c++) a[c].complete ? null != mb(a[c], "post") && nb.apply(a[c]) : null != mb(a[c], "post") && lb(a[c], nb);
            lb(window, kb);
            a = function() {
                for (var a = {}, c = window.blogger_blog_id, f = ["google_blogger_adsense_experiment_id", "blogger_csi_e", "blogger_templates_experiment_id", "blogger_active_experiements"],
                        h = [], l = f.length, q = 0; q < l; q++) {
                    var x = f[q];
                    x in window && h.push(window[x])
                }
                c && (a.blogId = c);
                0 < h.length && (a.e = h.join(","));
                c = ("https:" == document.location.protocol ? "https:" : "http:") + "//csi.gstatic.com/csi";
                window.jstiming.report(window.jstiming.load, a, b || c)
            };
            window.addEventListener ? window.addEventListener("beforeunload", a, !1) : window.attachEvent("onbeforeunload", a)
        }
    };
    var ob = ob || {},
        v = this;

    function w(a) {
        return void 0 !== a
    }

    function pb() {}

    function qb() {
        throw Error("unimplemented abstract method");
    }

    function rb(a) {
        a.Z = function() {
            return a.Sa ? a.Sa : a.Sa = new a
        }
    }

    function sb(a) {
        var b = typeof a;
        if (b == Sa)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return Sa;
                if ("[object Array]" == c || typeof a.length == Ra && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return p
            } else return "null";
        else if (b == p && "undefined" == typeof a.call) return Sa;
        return b
    }

    function y(a) {
        return "array" == sb(a)
    }

    function tb(a) {
        var b = sb(a);
        return "array" == b || b == Sa && typeof a.length == Ra
    }

    function z(a) {
        return "string" == typeof a
    }

    function ub(a) {
        return typeof a == Ra
    }

    function vb(a) {
        return sb(a) == p
    }

    function wb(a) {
        var b = typeof a;
        return b == Sa && null != a || b == p
    }
    var xb = "closure_uid_" + (1E9 * Math.random() >>> 0),
        yb = 0;

    function zb(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ab(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function A(a, b, c) {
        A = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? zb : Ab;
        return A.apply(null, arguments)
    }

    function Bb(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var Cb = Date.now || function() {
        return +new Date
    };

    function B(a, b) {
        a = a.split(".");
        var c = v;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) !a.length && w(b) ? c[d] = b : c[d] ? c = c[d] : c = c[d] = {}
    }

    function D(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.u = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.dc = function(a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };

    function E(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, E);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    D(E, Error);
    E.prototype.name = "CustomError";
    var Db;

    function Eb(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
        return d + c.join("%s")
    }
    var Fb = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function Gb(a) {
        if (!Hb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ib, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Jb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Kb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Lb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Mb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Nb, "&#0;"));
        return a
    }
    var Ib = /&/g,
        Jb = /</g,
        Kb = />/g,
        Lb = /"/g,
        Mb = /'/g,
        Nb = /\x00/g,
        Hb = /[\x00&<>"']/;

    function Ob(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function Pb(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }

    function Qb(a) {
        var b = z(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
            return b + e.toUpperCase()
        })
    };

    function Rb(a, b) {
        b.unshift(a);
        E.call(this, Eb.apply(null, b));
        b.shift()
    }
    D(Rb, E);
    Rb.prototype.name = "AssertionError";

    function Sb(a, b, c, d) {
        var e = "Assertion failed";
        if (c) var e = e + (": " + c),
            f = d;
        else a && (e += ": " + a, f = b);
        throw new Rb("" + e, f || []);
    }

    function F(a, b, c) {
        a || Sb("", null, b, Array.prototype.slice.call(arguments, 2))
    }

    function Tb(a, b) {
        throw new Rb("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }

    function Ub(a, b, c) {
        ub(a) || Sb("Expected number but got %s: %s.", [sb(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }

    function Vb(a, b, c) {
        z(a) || Sb("Expected string but got %s: %s.", [sb(a), a], b, Array.prototype.slice.call(arguments, 2))
    }

    function Wb(a, b, c) {
        vb(a) || Sb("Expected function but got %s: %s.", [sb(a), a], b, Array.prototype.slice.call(arguments, 2))
    };
    var Xb = Array.prototype.indexOf ? function(a, b, c) {
            F(null != a.length);
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (z(a)) return z(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Yb = Array.prototype.forEach ? function(a, b, c) {
            F(null != a.length);
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = z(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Zb = Array.prototype.filter ? function(a,
            b, c) {
            F(null != a.length);
            return Array.prototype.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, h = z(a) ? a.split("") : a, l = 0; l < d; l++)
                if (l in h) {
                    var q = h[l];
                    b.call(c, q, l, a) && (e[f++] = q)
                }
            return e
        },
        $b = Array.prototype.some ? function(a, b, c) {
            F(null != a.length);
            return Array.prototype.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = z(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        };

    function ac(a) {
        var b;
        a: {
            b = bc;
            for (var c = a.length, d = z(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : z(a) ? a.charAt(b) : a[b]
    }

    function G(a, b) {
        return 0 <= Xb(a, b)
    }

    function cc(a) {
        if (!y(a))
            for (var b = a.length - 1; 0 <= b; b--) delete a[b];
        a.length = 0
    }

    function dc(a, b) {
        b = Xb(a, b);
        var c;
        if (c = 0 <= b) F(null != a.length), Array.prototype.splice.call(a, b, 1);
        return c
    }

    function ec(a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    }

    function fc(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function gc(a, b, c, d) {
        F(null != a.length);
        Array.prototype.splice.apply(a, hc(arguments, 1))
    }

    function hc(a, b, c) {
        F(null != a.length);
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function ic(a) {
        if (!arguments.length) return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    };

    function jc(a) {
        a = a.className;
        return z(a) && a.match(/\S+/g) || []
    }

    function H(a, b) {
        var c = jc(a),
            d = hc(arguments, 1);
        kc(c, d);
        a.className = c.join(" ")
    }

    function lc(a, b) {
        var c = jc(a),
            d = hc(arguments, 1),
            c = mc(c, d);
        a.className = c.join(" ")
    }

    function kc(a, b) {
        for (var c = 0; c < b.length; c++) G(a, b[c]) || a.push(b[c])
    }

    function mc(a, b) {
        return Zb(a, function(a) {
            return !G(b, a)
        })
    }

    function nc(a, b, c) {
        for (var d = jc(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (gc(d, f--, 1), e = !0);
        e && (d.push(c), a.className = d.join(" "))
    }

    function I(a, b) {
        return G(jc(a), b)
    };

    function oc() {
        return function(a) {
            return 500 <= pc(a) ? (a.responseText.length ? document.body.innerHTML = a.responseText : window.alert(LayoutsMessages.SERVER_ERROR), !1) : !0
        }
    };

    function qc(a, b) {
        var c = J,
            d = a.ownerDocument;
        b = b._GetHelper();
        var e = b._GetData(),
            f = c._GetAllData();
        a = rc(d, a, n, "widget-wrap1");
        a = rc(d, a, n, "widget-wrap2");
        a = rc(d, a, n, "widget-wrap3");
        a = rc(d, a, n, "widget-content");
        if (f = f.features && f.features.widgetVisibility && e.version && 1 < e.version) a.className += " visibility", rc(d, a, n, "layout-widget-state " + (e.isVisible ? eb : "not-visible")).setAttribute("title", e.visibilityTooltipMessage);
        var h = rc(d, a, n, "layout-title");
        if (e[Oa]) {
            var l = rc(d, a, n, Na);
            l.appendChild(d.createTextNode(e[Oa]));
            l.setAttribute("title", e[Na])
        }
        h.appendChild(d.createTextNode(e["layout-title"]));
        a = rc(d, a, "a", "editlink");
        var q = b._GenerateWidgetMetadata();
        a.setAttribute("href", q.quickEditUrl);
        a.target = ma;
        a.onclick = function() {
            return c._PopupConfig(d.getElementById(q.instanceId))
        };
        f && (a.className += " icon");
        a.appendChild(d.createTextNode(e["edit-link"]))
    }

    function rc(a, b, c, d) {
        a = a.createElement(c);
        a.className = d;
        b.appendChild(a);
        return a
    };

    function sc(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function tc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function uc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }
    var vc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function wc(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < vc.length; f++) c = vc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var xc;
    a: {
        var yc = v.navigator;
        if (yc) {
            var zc = yc.userAgent;
            if (zc) {
                xc = zc;
                break a
            }
        }
        xc = ""
    }

    function K(a) {
        return -1 != xc.indexOf(a)
    };

    function Ac() {
        this.a = "";
        this.b = Bc
    }
    Ac.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.a + "}"
    };
    var Bc = {};

    function Cc(a, b) {
        this.a = w(a) ? a : 0;
        this.$ = w(b) ? b : 0
    }
    Cc.prototype.toString = function() {
        return "(" + this.a + ", " + this.$ + ")"
    };
    Cc.prototype.floor = function() {
        this.a = Math.floor(this.a);
        this.$ = Math.floor(this.$);
        return this
    };
    Cc.prototype.round = function() {
        this.a = Math.round(this.a);
        this.$ = Math.round(this.$);
        return this
    };

    function Dc(a, b) {
        this.width = a;
        this.height = b
    }
    Dc.prototype.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    Dc.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Dc.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Ec(a) {
        Ec[" "](a);
        return a
    }
    Ec[" "] = pb;

    function Fc(a, b) {
        var c = Gc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Hc = K("Opera"),
        L = K("Trident") || K("MSIE"),
        Ic = K("Edge"),
        Jc = K("Gecko") && !(-1 != xc.toLowerCase().indexOf("webkit") && !K("Edge")) && !(K("Trident") || K("MSIE")) && !K("Edge"),
        Kc = -1 != xc.toLowerCase().indexOf("webkit") && !K("Edge");

    function Lc() {
        var a = v.document;
        return a ? a.documentMode : void 0
    }
    var Mc;
    a: {
        var Nc = "",
            Oc = function() {
                var a = xc;
                if (Jc) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (Ic) return /Edge\/([\d\.]+)/.exec(a);
                if (L) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Kc) return /WebKit\/(\S+)/.exec(a);
                if (Hc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Oc && (Nc = Oc ? Oc[1] : "");
        if (L) {
            var Pc = Lc();
            if (null != Pc && Pc > parseFloat(Nc)) {
                Mc = String(Pc);
                break a
            }
        }
        Mc = Nc
    }
    var Qc = Mc,
        Gc = {};

    function M(a) {
        return Fc(a, function() {
            for (var b = 0, c = Fb(String(Qc)).split("."), d = Fb(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var h = c[f] || "",
                    l = d[f] || "";
                do {
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
                    if (0 == h[0].length && 0 == l[0].length) break;
                    b = Ob(0 == h[1].length ? 0 : parseInt(h[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || Ob(0 == h[2].length, 0 == l[2].length) || Ob(h[2], l[2]);
                    h = h[3];
                    l = l[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var Rc;
    var Sc = v.document;
    Rc = Sc && L ? Lc() || ("CSS1Compat" == Sc.compatMode ? parseInt(Qc, 10) : 5) : void 0;
    var Tc = !L || 9 <= Number(Rc);
    !Jc && !L || L && 9 <= Number(Rc) || Jc && M("1.9.1");
    var Uc = L && !M("9");

    function N(a) {
        return z(a) ? document.getElementById(a) : a
    }

    function Vc(a) {
        var b = a || document;
        return b.querySelectorAll && b.querySelector ? b.querySelectorAll(".cmt_count_iframe_holder") : P("*", "cmt_count_iframe_holder", a)
    }

    function Q(a, b) {
        var c = b || document,
            d = null;
        c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = P("*", a, b)[0];
        return d || null
    }

    function P(a, b, c) {
        var d = document;
        c = c || d;
        a = a && "*" != a ? String(a).toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                for (var d = {}, e = 0, f = 0, h; h = c[f]; f++) a == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (f = e = 0; h = c[f]; f++) a = h.className, typeof a.split == p && G(a.split(/\s+/), b) && (d[e++] = h);
            d.length = e;
            return d
        }
        return c
    }

    function Wc(a, b) {
        sc(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Xc.hasOwnProperty(d) ? a.setAttribute(Xc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var Xc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function R(a, b, c) {
        return Yc(document, arguments)
    }

    function Yc(a, b) {
        var c = String(b[0]),
            d = b[1];
        if (!Tc && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', Gb(d.name), '"');
            if (d.type) {
                c.push(' type="', Gb(d.type), '"');
                var e = {};
                wc(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (z(d) ? c.className = d : y(d) ? c.className = d.join(" ") : Wc(c, d));
        2 < b.length && Zc(a, c, b);
        return c
    }

    function Zc(a, b, c) {
        function d(c) {
            c && b.appendChild(z(c) ? a.createTextNode(c) : c)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !tb(f) || wb(f) && 0 < f.nodeType ? d(f) : Yb($c(f) ? fc(f) : f, d)
        }
    }

    function ad(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function bd(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function cd(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function dd(a) {
        F(a, "Node cannot be null or undefined.");
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function ed(a, b) {
        F(null != a, "goog.dom.setTextContent expects a non-null value for node");
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else {
            ad(a);
            var c = dd(a);
            a.appendChild(c.createTextNode(String(b)))
        }
    }
    var fd = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        gd = {
            IMG: " ",
            BR: "\n"
        };

    function hd(a, b, c) {
        if (!(a.nodeName in fd))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in gd) b.push(gd[a.nodeName]);
        else
            for (a = a.firstChild; a;) hd(a, b, c), a = a.nextSibling
    }

    function $c(a) {
        if (a && typeof a.length == Ra) {
            if (wb(a)) return typeof a.item == p || "string" == typeof a.item;
            if (vb(a)) return typeof a.item == p
        }
        return !1
    }

    function id(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return jd(a, function(a) {
            return (!d || a.nodeName == d) && (!c || z(a.className) && G(a.className.split(/\s+/), c))
        })
    }

    function jd(a, b) {
        for (var c = 0; a;) {
            F("parentNode" != a.name);
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function kd(a) {
        this.b = a || v.document || document
    }
    kd.prototype.ca = function(a) {
        return z(a) ? this.b.getElementById(a) : a
    };
    kd.prototype.a = function(a, b, c) {
        return Yc(this.b, arguments)
    };
    kd.prototype.contains = cd;
    var ld = !L || 9 <= Number(Rc),
        md = L && !M("9");
    !Kc || M("528");
    Jc && M("1.9b") || L && M("8") || Hc && M("9.5") || Kc && M("528");
    Jc && !M("8") || L && M("9");

    function nd() {
        this.i = this.i;
        this.L = this.L
    }
    nd.prototype.i = !1;
    nd.prototype.U = function() {
        this.i || (this.i = !0, this.A())
    };
    nd.prototype.A = function() {
        if (this.L)
            for (; this.L.length;) this.L.shift()()
    };

    function od(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.a = !1;
        this.Ua = !0
    }
    od.prototype.stopPropagation = function() {
        this.a = !0
    };
    od.prototype.preventDefault = function() {
        this.Ua = !1
    };

    function pd(a, b) {
        od.call(this, a ? a.type : "");
        this.currentTarget = this.target = null;
        this.clientY = this.clientX = 0;
        this.i = this.h = this.c = this.g = !1;
        this.b = null;
        if (a) {
            this.type = a.type;
            var c = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            if ((b = a.relatedTarget) && Jc) try {
                Ec(b.nodeName)
            } catch (d) {}
            null === c ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX, this.clientY =
                void 0 !== c.clientY ? c.clientY : c.pageY);
            this.g = a.ctrlKey;
            this.c = a.altKey;
            this.h = a.shiftKey;
            this.i = a.metaKey;
            this.b = a;
            a.defaultPrevented && this.preventDefault()
        }
    }
    D(pd, od);
    pd.prototype.stopPropagation = function() {
        pd.u.stopPropagation.call(this);
        this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
    };
    pd.prototype.preventDefault = function() {
        pd.u.preventDefault.call(this);
        var a = this.b;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, md) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var qd = "closure_listenable_" + (1E6 * Math.random() | 0);

    function rd(a) {
        return !(!a || !a[qd])
    }
    var sd = 0;

    function td(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.na = !!d;
        this.ra = e;
        this.key = ++sd;
        this.aa = this.ma = !1
    }

    function ud(a) {
        a.aa = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.ra = null
    };

    function vd(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }

    function wd(a, b, c, d, e, f) {
        var h = b.toString();
        b = a.a[h];
        b || (b = a.a[h] = [], a.b++);
        var l = xd(b, c, e, f); - 1 < l ? (a = b[l], d || (a.ma = !1)) : (a = new td(c, a.src, h, !!e, f), a.ma = d, b.push(a));
        return a
    }

    function yd(a, b) {
        var c = b.type;
        if (!(c in a.a)) return !1;
        var d = dc(a.a[c], b);
        d && (ud(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        return d
    }

    function zd(a) {
        var b = 0,
            c;
        for (c in a.a) {
            for (var d = a.a[c], e = 0; e < d.length; e++) ++b, ud(d[e]);
            delete a.a[c];
            a.b--
        }
    }

    function Ad(a, b, c, d, e) {
        a = a.a[b.toString()];
        b = -1;
        a && (b = xd(a, c, d, e));
        return -1 < b ? a[b] : null
    }

    function xd(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.aa && f.listener == b && f.na == !!c && f.ra == d) return e
        }
        return -1
    };
    var Bd = "closure_lm_" + (1E6 * Math.random() | 0),
        Cd = {},
        Dd = 0;

    function S(a, b, c, d, e) {
        if (y(b)) {
            for (var f = 0; f < b.length; f++) S(a, b[f], c, d, e);
            return null
        }
        c = Ed(c);
        return rd(a) ? a.S(b, c, d, e) : Fd(a, b, c, !1, d, e)
    }

    function Fd(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var h = !!e,
            l = Gd(a);
        l || (a[Bd] = l = new vd(a));
        c = wd(l, b, c, d, e, f);
        if (c.a) return c;
        d = Hd();
        c.a = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) a.addEventListener(b.toString(), d, h);
        else if (a.attachEvent) a.attachEvent(Id(b.toString()), d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        Dd++;
        return c
    }

    function Hd() {
        var a = Jd,
            b = ld ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    }

    function Kd(a, b, c, d, e) {
        if (y(b))
            for (var f = 0; f < b.length; f++) Kd(a, b[f], c, d, e);
        else c = Ed(c), rd(a) ? wd(a.G, String(b), c, !0, d, e) : Fd(a, b, c, !0, d, e)
    }

    function Ld(a, b, c, d, e) {
        if (y(b))
            for (var f = 0; f < b.length; f++) Ld(a, b[f], c, d, e);
        else c = Ed(c), rd(a) ? a.ea(b, c, d, e) : a && (a = Gd(a)) && (b = Ad(a, b, c, !!d, e)) && Md(b)
    }

    function Md(a) {
        if (ub(a) || !a || a.aa) return !1;
        var b = a.src;
        if (rd(b)) return yd(b.G, a);
        var c = a.type,
            d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.na) : b.detachEvent && b.detachEvent(Id(c), d);
        Dd--;
        (c = Gd(b)) ? (yd(c, a), 0 == c.b && (c.src = null, b[Bd] = null)) : ud(a);
        return !0
    }

    function Nd(a) {
        if (a)
            if (rd(a)) a.G && zd(a.G);
            else if (a = Gd(a)) {
            var b = 0,
                c;
            for (c in a.a)
                for (var d = a.a[c].concat(), e = 0; e < d.length; ++e) Md(d[e]) && ++b
        }
    }

    function Id(a) {
        return a in Cd ? Cd[a] : Cd[a] = "on" + a
    }

    function Od(a, b, c, d) {
        var e = !0;
        if (a = Gd(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.na == c && !f.aa && (f = Pd(f, d), e = e && !1 !== f)
                }
            return e
    }

    function Pd(a, b) {
        var c = a.listener,
            d = a.ra || a.src;
        a.ma && Md(a);
        return c.call(d, b)
    }

    function Jd(a, b) {
        if (a.aa) return !0;
        if (!ld) {
            if (!b) a: {
                b = ["window", "event"];
                for (var c = v, d; d = b.shift();)
                    if (null != c[d]) c = c[d];
                    else {
                        b = null;
                        break a
                    }
                b = c
            }
            d = b;
            b = new pd(d, this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == d.keyCode) try {
                        d.keyCode = -1;
                        break a
                    } catch (h) {
                        e = !0
                    }
                    if (e || void 0 == d.returnValue) d.returnValue = !0
                }
                d = [];
                for (e = b.currentTarget; e; e = e.parentNode) d.push(e);a = a.type;
                for (e = d.length - 1; !b.a && 0 <= e; e--) {
                    b.currentTarget = d[e];
                    var f = Od(d[e], a, !0, b),
                        c = c && f
                }
                for (e = 0; !b.a && e < d.length; e++) b.currentTarget =
                    d[e],
                f = Od(d[e], a, !1, b),
                c = c && f
            }
            return c
        }
        return Pd(a, new pd(b, this))
    }

    function Gd(a) {
        a = a[Bd];
        return a instanceof vd ? a : null
    }
    var Qd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Ed(a) {
        F(a, "Listener can not be null.");
        if (vb(a)) return a;
        F(a.handleEvent, "An object listener must have handleEvent method.");
        a[Qd] || (a[Qd] = function(b) {
            return a.handleEvent(b)
        });
        return a[Qd]
    };

    function T() {
        nd.call(this);
        this.G = new vd(this);
        this.ga = this;
        this.M = null
    }
    D(T, nd);
    T.prototype[qd] = !0;
    u = T.prototype;
    u.Ca = function(a) {
        this.M = a
    };
    u.addEventListener = function(a, b, c, d) {
        S(this, a, b, c, d)
    };
    u.removeEventListener = function(a, b, c, d) {
        Ld(this, a, b, c, d)
    };

    function U(a, b) {
        Rd(a);
        var c, d = a.M;
        if (d) {
            c = [];
            for (var e = 1; d; d = d.M) c.push(d), F(1E3 > ++e, "infinite loop")
        }
        a = a.ga;
        d = b.type || b;
        z(b) ? b = new od(b, a) : b instanceof od ? b.target = b.target || a : (e = b, b = new od(d, a), wc(b, e));
        var e = !0,
            f;
        if (c)
            for (var h = c.length - 1; !b.a && 0 <= h; h--) f = b.currentTarget = c[h], e = Sd(f, d, !0, b) && e;
        b.a || (f = b.currentTarget = a, e = Sd(f, d, !0, b) && e, b.a || (e = Sd(f, d, !1, b) && e));
        if (c)
            for (h = 0; !b.a && h < c.length; h++) f = b.currentTarget = c[h], e = Sd(f, d, !1, b) && e
    }
    u.A = function() {
        T.u.A.call(this);
        this.G && zd(this.G);
        this.M = null
    };
    u.S = function(a, b, c, d) {
        Rd(this);
        return wd(this.G, String(a), b, !1, c, d)
    };
    u.ea = function(a, b, c, d) {
        var e;
        e = this.G;
        a = String(a).toString();
        if (a in e.a) {
            var f = e.a[a];
            b = xd(f, b, c, d); - 1 < b ? (ud(f[b]), F(null != f.length), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.a[a], e.b--), e = !0) : e = !1
        } else e = !1;
        return e
    };

    function Sd(a, b, c, d) {
        b = a.G.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.aa && h.na == c) {
                var l = h.listener,
                    q = h.ra || h.src;
                h.ma && yd(a.G, h);
                e = !1 !== l.call(q, d) && e
            }
        }
        return e && 0 != d.Ua
    }

    function Rd(a) {
        F(a.G, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };

    function Td(a, b, c) {
        this.g = c;
        this.c = a;
        this.i = b;
        this.b = 0;
        this.a = null
    }
    Td.prototype.get = function() {
        var a;
        0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
        return a
    };

    function Ud(a, b) {
        a.i(b);
        a.b < a.g && (a.b++, b.next = a.a, a.a = b)
    };

    function Vd(a) {
        return function() {
            return a
        }
    };

    function Wd(a) {
        v.setTimeout(function() {
            throw a;
        }, 0)
    }
    var Xd;

    function Yd() {
        var a = v.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !K("Presto") && (a = function() {
            var a = document.createElement("IFRAME");
            a.style.display = r;
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow,
                a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
                d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                a = A(function(a) {
                        if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                    },
                    this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && !K("Trident") && !K("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (w(c.next)) {
                    c = c.next;
                    var a = c.La;
                    c.La = null;
                    a()
                }
            };
            return function(a) {
                d.next = {
                    La: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement(ea) ? function(a) {
            var b = document.createElement(ea);
            b.onreadystatechange = function() {
                b.onreadystatechange =
                    null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            document.documentElement.appendChild(b)
        } : function(a) {
            v.setTimeout(a, 0)
        }
    };
    var $d = new Td(function() {
        return new Zd
    }, function(a) {
        a.reset()
    }, 100);

    function ae() {
        var a = be,
            b = null;
        a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
        return b
    }

    function Zd() {
        this.next = this.b = this.a = null
    }
    Zd.prototype.set = function(a, b) {
        this.a = a;
        this.b = b;
        this.next = null
    };
    Zd.prototype.reset = function() {
        this.next = this.b = this.a = null
    };

    function ce(a, b) {
        de || ee();
        fe || (de(), fe = !0);
        var c = be,
            d = $d.get();
        d.set(a, b);
        c.b ? c.b.next = d : (F(!c.a), c.a = d);
        c.b = d
    }
    var de;

    function ee() {
        var a = v.Promise;
        if (-1 != String(a).indexOf("[native code]")) {
            var b = a.resolve(void 0);
            de = function() {
                b.then(ge)
            }
        } else de = function() {
            var a = ge;
            !vb(v.setImmediate) || v.Window && v.Window.prototype && !K("Edge") && v.Window.prototype.setImmediate == v.setImmediate ? (Xd || (Xd = Yd()), Xd(a)) : v.setImmediate(a)
        }
    }
    var fe = !1,
        be = new function() {
            this.b = this.a = null
        };

    function ge() {
        for (var a; a = ae();) {
            try {
                a.a.call(a.b)
            } catch (b) {
                Wd(b)
            }
            Ud($d, a)
        }
        fe = !1
    };

    function he(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }

    function ie(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };

    function je(a, b) {
        this.a = 0;
        this.j = void 0;
        this.g = this.b = this.c = null;
        this.i = this.h = !1;
        if (a != pb) try {
            var c = this;
            a.call(b, function(a) {
                ke(c, 2, a)
            }, function(a) {
                if (!(a instanceof le)) try {
                    if (a instanceof Error) throw a;
                    throw Error("Promise rejected.");
                } catch (e) {}
                ke(c, 3, a)
            })
        } catch (d) {
            ke(this, 3, d)
        }
    }

    function me() {
        this.next = this.g = this.c = this.b = this.a = null;
        this.i = !1
    }
    me.prototype.reset = function() {
        this.g = this.c = this.b = this.a = null;
        this.i = !1
    };
    var ne = new Td(function() {
        return new me
    }, function(a) {
        a.reset()
    }, 100);

    function oe(a, b, c) {
        var d = ne.get();
        d.b = a;
        d.c = b;
        d.g = c;
        return d
    }
    je.prototype.then = function(a, b, c) {
        null != a && Wb(a, Ta);
        null != b && Wb(b, Ua);
        return pe(this, vb(a) ? a : null, vb(b) ? b : null, c)
    };
    he(je);
    je.prototype.cancel = function(a) {
        0 == this.a && ce(function() {
            var b = new le(a);
            qe(this, b)
        }, this)
    };

    function qe(a, b) {
        if (0 == a.a)
            if (a.c) {
                var c = a.c;
                if (c.b) {
                    for (var d = 0, e = null, f = null, h = c.b; h && (h.i || (d++, h.a == a && (e = h), !(e && 1 < d))); h = h.next) e || (f = h);
                    e && (0 == c.a && 1 == d ? qe(c, b) : (f ? (d = f, F(c.b), F(null != d), d.next == c.g && (c.g = d), d.next = d.next.next) : re(c), se(c, e, 3, b)))
                }
                a.c = null
            } else ke(a, 3, b)
    }

    function te(a, b) {
        a.b || 2 != a.a && 3 != a.a || ue(a);
        F(null != b.b);
        a.g ? a.g.next = b : a.b = b;
        a.g = b
    }

    function pe(a, b, c, d) {
        var e = oe(null, null, null);
        e.a = new je(function(a, h) {
            e.b = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (x) {
                    h(x)
                }
            } : a;
            e.c = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    !w(e) && b instanceof le ? h(b) : a(e)
                } catch (x) {
                    h(x)
                }
            } : h
        });
        e.a.c = a;
        te(a, e);
        return e.a
    }
    je.prototype.s = function(a) {
        F(1 == this.a);
        this.a = 0;
        ke(this, 2, a)
    };
    je.prototype.w = function(a) {
        F(1 == this.a);
        this.a = 0;
        ke(this, 3, a)
    };

    function ke(a, b, c) {
        if (0 == a.a) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.a = 1;
            var d;
            a: {
                var e = c,
                    f = a.s,
                    h = a.w;
                if (e instanceof je) null != f && Wb(f, Ta),
                null != h && Wb(h, Ua),
                te(e, oe(f || pb, h || null, a)),
                d = !0;
                else if (ie(e)) e.then(f, h, a),
                d = !0;
                else {
                    if (wb(e)) try {
                        var l = e.then;
                        if (vb(l)) {
                            ve(e, l, f, h, a);
                            d = !0;
                            break a
                        }
                    } catch (q) {
                        h.call(a, q);
                        d = !0;
                        break a
                    }
                    d = !1
                }
            }
            d || (a.j = c, a.a = b, a.c = null, ue(a), 3 != b || c instanceof le || we(a, c))
        }
    }

    function ve(a, b, c, d, e) {
        function f(a) {
            l || (l = !0, d.call(e, a))
        }

        function h(a) {
            l || (l = !0, c.call(e, a))
        }
        var l = !1;
        try {
            b.call(a, h, f)
        } catch (q) {
            f(q)
        }
    }

    function ue(a) {
        a.h || (a.h = !0, ce(a.l, a))
    }

    function re(a) {
        var b = null;
        a.b && (b = a.b, a.b = b.next, b.next = null);
        a.b || (a.g = null);
        null != b && F(null != b.b);
        return b
    }
    je.prototype.l = function() {
        for (var a; a = re(this);) se(this, a, this.a, this.j);
        this.h = !1
    };

    function se(a, b, c, d) {
        if (3 == c && b.c && !b.i)
            for (; a && a.i; a = a.c) a.i = !1;
        if (b.a) b.a.c = null, xe(b, c, d);
        else try {
            b.i ? b.b.call(b.g) : xe(b, c, d)
        } catch (e) {
            ye.call(null, e)
        }
        Ud(ne, b)
    }

    function xe(a, b, c) {
        2 == b ? a.b.call(a.g, c) : a.c && a.c.call(a.g, c)
    }

    function we(a, b) {
        a.i = !0;
        ce(function() {
            a.i && ye.call(null, b)
        })
    }
    var ye = Wd;

    function le(a) {
        E.call(this, a)
    }
    D(le, E);
    le.prototype.name = "cancel";

    function ze(a, b) {
        T.call(this);
        this.b = a || 1;
        this.a = b || v;
        this.c = A(this.bc, this);
        this.g = Cb()
    }
    D(ze, T);
    u = ze.prototype;
    u.qa = !1;
    u.O = null;
    u.bc = function() {
        if (this.qa) {
            var a = Cb() - this.g;
            0 < a && a < .8 * this.b ? this.O = this.a.setTimeout(this.c, this.b - a) : (this.O && (this.a.clearTimeout(this.O), this.O = null), U(this, "tick"), this.qa && (this.O = this.a.setTimeout(this.c, this.b), this.g = Cb()))
        }
    };
    u.start = function() {
        this.qa = !0;
        this.O || (this.O = this.a.setTimeout(this.c, this.b), this.g = Cb())
    };

    function Ae(a) {
        a.qa = !1;
        a.O && (a.a.clearTimeout(a.O), a.O = null)
    }
    u.A = function() {
        ze.u.A.call(this);
        Ae(this);
        delete this.a
    };

    function Be(a, b, c) {
        if (vb(a)) c && (a = A(a, c));
        else if (a && typeof a.handleEvent == p) a = A(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : v.setTimeout(a, b || 0)
    };

    function Ce() {
        this.h = {};
        this.b = {};
        this.g = {};
        this.a = null;
        this.c = []
    }
    rb(Ce);

    function De(a) {
        var b = Ce.Z(),
            c = b.h,
            d = b.b;
        d.lightbox ? a(d.lightbox[1]) : c.lightbox ? c.lightbox.push([1, a]) : (c.lightbox = [
            [1, a]
        ], z(b.a) ? Ee(b, "lightbox") : b.c.push("lightbox"))
    }

    function Fe() {
        return function() {
            var a = arguments;
            De(function(b) {
                b.apply(null, a)
            })
        }
    }
    Ce.prototype.i = function(a, b) {
        return a + "_" + b + ".js"
    };

    function Ge(a) {
        eval(a)
    }

    function He(a, b, c) {
        B("__gjsload__", Ge);
        a.a = b.replace(/\.js$/, "");
        c && (a.i = c);
        Yb(a.c, function(a) {
            Ee(this, a)
        }, a);
        cc(a.c)
    }

    function Ee(a, b) {
        Be(function() {
            if (!this.b[b]) {
                Vb(this.a);
                var a = this.i(this.a, b),
                    d;
                a: {
                    d = this.g;
                    for (var e in d)
                        if (d[e] == a) {
                            d = !0;
                            break a
                        }
                    d = !1
                }
                this.g[b] = a;
                d || (a = R(ea, {
                    type: $a,
                    src: a
                }), document.body.appendChild(a))
            }
        }, 0, a)
    };

    function Ie(a) {
        nd.call(this);
        this.b = a;
        this.a = {}
    }
    D(Ie, nd);
    var Je = [];
    Ie.prototype.S = function(a, b, c, d) {
        y(b) || (b && (Je[0] = b.toString()), b = Je);
        for (var e = 0; e < b.length; e++) {
            var f = S(a, b[e], c || this.handleEvent, d || !1, this.b || this);
            if (!f) break;
            this.a[f.key] = f
        }
        return this
    };
    Ie.prototype.ea = function(a, b, c, d, e) {
        if (y(b))
            for (var f = 0; f < b.length; f++) this.ea(a, b[f], c, d, e);
        else c = c || this.handleEvent, e = e || this.b || this, c = Ed(c), d = !!d, b = rd(a) ? Ad(a.G, String(b), c, d, e) : a ? (a = Gd(a)) ? Ad(a, b, c, d, e) : null : null, b && (Md(b), delete this.a[b.key]);
        return this
    };

    function Ke(a) {
        sc(a.a, function(a, c) {
            this.a.hasOwnProperty(c) && Md(a)
        }, a);
        a.a = {}
    }
    Ie.prototype.A = function() {
        Ie.u.A.call(this);
        Ke(this)
    };
    Ie.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var Le = "StopIteration" in v ? v.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function Me() {}
    Me.prototype.next = function() {
        throw Le;
    };
    Me.prototype.ua = function() {
        return this
    };

    function Ne(a, b) {
        this.b = {};
        this.a = [];
        this.g = this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof Ne ? (c = a.K(), d = a.D()) : (c = uc(a), d = tc(a));
            for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
        }
    }
    u = Ne.prototype;
    u.B = t("c");
    u.D = function() {
        Oe(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
        return a
    };
    u.K = function() {
        Oe(this);
        return this.a.concat()
    };

    function Pe(a, b) {
        return Qe(a.b, b) ? (delete a.b[b], a.c--, a.g++, a.a.length > 2 * a.c && Oe(a), !0) : !1
    }

    function Oe(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                Qe(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], Qe(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    }
    u.get = function(a, b) {
        return Qe(this.b, a) ? this.b[a] : b
    };
    u.set = function(a, b) {
        Qe(this.b, a) || (this.c++, this.a.push(a), this.g++);
        this.b[a] = b
    };
    u.forEach = function(a, b) {
        for (var c = this.K(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    u.ua = function(a) {
        Oe(this);
        var b = 0,
            c = this.g,
            d = this,
            e = new Me;
        e.next = function() {
            if (c != d.g) throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length) throw Le;
            var e = d.a[b++];
            return a ? e : d.b[e]
        };
        return e
    };

    function Qe(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function Re(a) {
        return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    }

    function Se(a) {
        a = String(a);
        if (Re(a)) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    };

    function Te(a) {
        if (a.D && typeof a.D == p) return a.D();
        if (z(a)) return a.split("");
        if (tb(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return tc(a)
    }

    function Ue(a, b) {
        if (a.forEach && typeof a.forEach == p) a.forEach(b, void 0);
        else if (tb(a) || z(a)) Yb(a, b, void 0);
        else {
            var c;
            if (a.K && typeof a.K == p) c = a.K();
            else if (a.D && typeof a.D == p) c = void 0;
            else if (tb(a) || z(a)) {
                c = [];
                for (var d = a.length, e = 0; e < d; e++) c.push(e)
            } else c = uc(a);
            for (var d = Te(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        }
    };

    function Ve(a) {
        this.a = new Ne;
        if (a) {
            a = Te(a);
            for (var b = a.length, c = 0; c < b; c++) {
                var d = a[c];
                this.a.set(We(d), d)
            }
        }
    }

    function We(a) {
        var b = typeof a;
        return b == Sa && a || b == p ? "o" + (a[xb] || (a[xb] = ++yb)) : b.substr(0, 1) + a
    }
    Ve.prototype.B = function() {
        return this.a.B()
    };
    Ve.prototype.contains = function(a) {
        a = We(a);
        return Qe(this.a.b, a)
    };
    Ve.prototype.D = function() {
        return this.a.D()
    };
    Ve.prototype.ua = function() {
        return this.a.ua(!1)
    };
    var Xe = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Ye(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e, f = null;
                0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
                b(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
            }
        }
    };

    function Ze() {}
    Ze.prototype.b = null;
    Ze.prototype.a = qb;

    function $e(a) {
        return a.b || (a.b = a.g())
    }
    Ze.prototype.g = qb;
    var af;

    function bf() {}
    D(bf, Ze);
    bf.prototype.a = function() {
        var a = cf(this);
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    bf.prototype.g = function() {
        var a = {};
        cf(this) && (a[0] = !0, a[1] = !0);
        return a
    };

    function cf(a) {
        if (!a.c && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.c = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.c
    }
    af = new bf;

    function df(a) {
        T.call(this);
        this.headers = new Ne;
        this.I = a || null;
        this.b = !1;
        this.H = this.a = null;
        this.W = "";
        this.h = 0;
        this.g = this.V = this.w = this.N = !1;
        this.s = 0;
        this.F = null;
        this.l = "";
        this.X = this.j = !1
    }
    D(df, T);
    var ef = /^https?$/i,
        ff = ["POST", "PUT"],
        gf = [];

    function hf(a, b, c, d) {
        var e = new df;
        gf.push(e);
        b && e.S(g, b);
        wd(e.G, Va, e.Eb, !0, void 0, void 0);
        jf(e, a, c, d, void 0)
    }
    u = df.prototype;
    u.Eb = function() {
        this.U();
        dc(gf, this)
    };
    u.Pa = t("l");
    u.Qa = t("j");

    function jf(a, b, c, d, e) {
        if (a.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.W + "; newUri=" + b);
        c = c ? c.toUpperCase() : da;
        a.W = b;
        a.h = 0;
        a.N = !1;
        a.b = !0;
        a.a = a.I ? a.I.a() : af.a();
        a.H = a.I ? $e(a.I) : $e(af);
        a.a.onreadystatechange = A(a.Ta, a);
        try {
            a.V = !0, a.a.open(c, String(b), !0), a.V = !1
        } catch (h) {
            kf(a);
            return
        }
        b = d || "";
        var f = new Ne(a.headers);
        e && Ue(e, function(a, b) {
            f.set(b, a)
        });
        e = ac(f.K());
        d = v.FormData && b instanceof v.FormData;
        !G(ff, c) || e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        f.forEach(function(a, b) {
            this.a.setRequestHeader(b, a)
        }, a);
        a.l && (a.a.responseType = a.l);
        "withCredentials" in a.a && a.a.withCredentials !== a.j && (a.a.withCredentials = a.j);
        try {
            lf(a), 0 < a.s && (a.X = mf(a.a), a.X ? (a.a.timeout = a.s, a.a.ontimeout = A(a.T, a)) : a.F = Be(a.T, a.s, a)), a.w = !0, a.a.send(b), a.w = !1
        } catch (h) {
            kf(a)
        }
    }

    function mf(a) {
        return L && M(9) && ub(a.timeout) && w(a.ontimeout)
    }

    function bc(a) {
        return "content-type" == a.toLowerCase()
    }
    u.T = function() {
        "undefined" != typeof ob && this.a && (this.h = 8, U(this, "timeout"), this.abort(8))
    };

    function kf(a) {
        a.b = !1;
        a.a && (a.g = !0, a.a.abort(), a.g = !1);
        a.h = 5;
        nf(a);
        of(a)
    }

    function nf(a) {
        a.N || (a.N = !0, U(a, g), U(a, Ga))
    }
    u.abort = function(a) {
        this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, U(this, g), U(this, "abort"), of(this))
    };
    u.A = function() {
        this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), of(this, !0));
        df.u.A.call(this)
    };
    u.Ta = function() {
        this.i || (this.V || this.w || this.g ? pf(this) : this.Yb())
    };
    u.Yb = function() {
        pf(this)
    };

    function pf(a) {
        if (a.b && "undefined" != typeof ob && (!a.H[1] || 4 != (a.a ? a.a.readyState : 0) || 2 != qf(a)))
            if (a.w && 4 == (a.a ? a.a.readyState : 0)) Be(a.Ta, 0, a);
            else if (U(a, "readystatechange"), 4 == (a.a ? a.a.readyState : 0)) {
            a.b = !1;
            try {
                rf(a) ? (U(a, g), U(a, Za)) : (a.h = 6, nf(a))
            } finally {
                of(a)
            }
        }
    }

    function of(a, b) {
        if (a.a) {
            lf(a);
            var c = a.a,
                d = a.H[0] ? pb : null;
            a.a = null;
            a.H = null;
            b || U(a, Va);
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }

    function lf(a) {
        a.a && a.X && (a.a.ontimeout = null);
        ub(a.F) && (v.clearTimeout(a.F), a.F = null)
    }

    function rf(a) {
        var b = qf(a),
            c;
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.W).match(Xe)[1] || null, !a && v.self && v.self.location && (a = v.self.location.protocol, a = a.substr(0, a.length - 1)), b = !ef.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }

    function qf(a) {
        try {
            return 2 < (a.a ? a.a.readyState : 0) ? a.a.status : -1
        } catch (b) {
            return -1
        }
    }

    function sf(a) {
        try {
            return a.a ? a.a.responseText : ""
        } catch (b) {
            return ""
        }
    };

    function tf() {
        this.b = [];
        this.a = []
    }

    function uf(a) {
        0 == a.b.length && (a.b = a.a, a.b.reverse(), a.a = []);
        return a.b.pop()
    }
    tf.prototype.B = function() {
        return this.b.length + this.a.length
    };
    tf.prototype.contains = function(a) {
        return G(this.b, a) || G(this.a, a)
    };
    tf.prototype.D = function() {
        for (var a = [], b = this.b.length - 1; 0 <= b; --b) a.push(this.b[b]);
        for (var c = this.a.length, b = 0; b < c; ++b) a.push(this.a[b]);
        return a
    };

    function vf(a, b) {
        nd.call(this);
        this.j = a || 0;
        this.c = b || 10;
        if (this.j > this.c) throw Error("[goog.structs.Pool] Min can not be greater than max");
        this.a = new tf;
        this.b = new Ve;
        this.h = null;
        this.ja()
    }
    D(vf, nd);
    u = vf.prototype;
    u.pa = function() {
        var a = Cb();
        if (!(null != this.h && 0 > a - this.h)) {
            for (var b; 0 < this.a.B() && (b = uf(this.a), !this.Ba(b));) this.ja();
            !b && this.B() < this.c && (b = this.xa());
            b && (this.h = a, this.b.a.set(We(b), b));
            return b
        }
    };

    function wf(a, b) {
        Pe(a.b.a, We(b)) && a.va(b)
    }
    u.va = function(a) {
        Pe(this.b.a, We(a));
        this.Ba(a) && this.B() < this.c ? this.a.a.push(a) : xf(a)
    };
    u.ja = function() {
        for (var a = this.a; this.B() < this.j;) {
            var b = this.xa();
            a.a.push(b)
        }
        for (; this.B() > this.c && 0 < this.a.B();) xf(uf(a))
    };
    u.xa = function() {
        return {}
    };

    function xf(a) {
        if (typeof a.U == p) a.U();
        else
            for (var b in a) a[b] = null
    }
    u.Ba = function(a) {
        return typeof a.Db == p ? a.Db() : !0
    };
    u.contains = function(a) {
        return this.a.contains(a) || this.b.contains(a)
    };
    u.B = function() {
        return this.a.B() + this.b.B()
    };
    u.A = function() {
        vf.u.A.call(this);
        if (0 < this.b.B()) throw Error("[goog.structs.Pool] Objects not released");
        delete this.b;
        for (var a = this.a; 0 != a.b.length || 0 != a.a.length;) xf(uf(a));
        delete this.a
    };

    function yf(a, b) {
        this.a = a;
        this.b = b
    };

    function zf(a) {
        this.a = [];
        if (a) a: {
            var b;
            if (a instanceof zf) {
                if (b = a.K(), a = a.D(), 0 >= this.B()) {
                    for (var c = this.a, d = 0; d < b.length; d++) c.push(new yf(b[d], a[d]));
                    break a
                }
            } else b = uc(a),
            a = tc(a);
            for (d = 0; d < b.length; d++) Af(this, b[d], a[d])
        }
    }

    function Af(a, b, c) {
        var d = a.a;
        d.push(new yf(b, c));
        b = d.length - 1;
        a = a.a;
        for (c = a[b]; 0 < b;)
            if (d = b - 1 >> 1, a[d].a > c.a) a[b] = a[d], b = d;
            else break;
        a[b] = c
    }
    zf.prototype.D = function() {
        for (var a = this.a, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].b);
        return b
    };
    zf.prototype.K = function() {
        for (var a = this.a, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].a);
        return b
    };
    zf.prototype.B = function() {
        return this.a.length
    };

    function Bf() {
        zf.call(this)
    }
    D(Bf, zf);

    function Cf(a, b) {
        this.g = new Bf;
        vf.call(this, a, b)
    }
    D(Cf, vf);
    u = Cf.prototype;
    u.pa = function(a, b) {
        if (!a) return Cf.u.pa.call(this);
        Af(this.g, w(b) ? b : 100, a);
        this.za()
    };
    u.za = function() {
        for (var a = this.g; 0 < a.B();) {
            var b = this.pa();
            if (b) {
                var c;
                var d = a,
                    e = d.a,
                    f = e.length;
                c = e[0];
                if (0 >= f) c = void 0;
                else {
                    if (1 == f) cc(e);
                    else {
                        e[0] = e.pop();
                        for (var e = 0, d = d.a, f = d.length, h = d[e]; e < f >> 1;) {
                            var l = 2 * e + 1,
                                q = 2 * e + 2,
                                l = q < f && d[q].a < d[l].a ? q : l;
                            if (d[l].a > h.a) break;
                            d[e] = d[l];
                            e = l
                        }
                        d[e] = h
                    }
                    c = c.b
                }
                c.apply(this, [b])
            } else break
        }
    };
    u.va = function(a) {
        Cf.u.va.call(this, a);
        this.za()
    };
    u.ja = function() {
        Cf.u.ja.call(this);
        this.za()
    };
    u.A = function() {
        Cf.u.A.call(this);
        v.clearTimeout(void 0);
        cc(this.g.a);
        this.g = null
    };

    function Df(a, b, c, d) {
        this.l = a;
        this.s = !!d;
        Cf.call(this, b, c)
    }
    D(Df, Cf);
    Df.prototype.xa = function() {
        var a = new df,
            b = this.l;
        b && b.forEach(function(b, d) {
            a.headers.set(d, b)
        });
        this.s && (a.j = !0);
        return a
    };
    Df.prototype.Ba = function(a) {
        return !a.i && !a.a
    };

    function Ef(a, b, c, d, e, f) {
        T.call(this);
        this.g = w(a) ? a : 1;
        this.h = w(e) ? Math.max(0, e) : 0;
        this.j = !!f;
        this.b = new Df(b, c, d, f);
        this.a = new Ne;
        this.c = new Ie(this)
    }
    D(Ef, T);
    var Ff = [Va, g, Za, Ga, "abort", "timeout"];

    function Gf(a, b, c, d, e, f) {
        if (a.a.get(b)) throw Error("[goog.net.XhrManager] ID in use");
        c = new Hf(c, A(a.s, a, b), d, e, null, f, w(void 0) ? void 0 : a.g, void 0, w(void 0) ? void 0 : a.j);
        a.a.set(b, c);
        b = A(a.l, a, b);
        a.b.pa(b, null)
    }
    Ef.prototype.abort = function(a, b) {
        var c = this.a.get(a);
        if (c) {
            var d = c.ta;
            c.Ia = !0;
            b && (d && (this.c.ea(d, Ff, c.Ea), Kd(d, Va, function() {
                wf(this.b, d)
            }, !1, this)), Pe(this.a, a));
            d && d.abort()
        }
    };
    Ef.prototype.l = function(a, b) {
        var c = this.a.get(a);
        c && !c.ta ? (this.c.S(b, Ff, c.Ea), b.s = Math.max(0, this.h), b.l = c.Pa(), b.j = c.Qa(), c.ta = b, U(this, new If(Va, this, 0, b)), Jf(this, a, b), c.Ia && b.abort()) : wf(this.b, b)
    };
    Ef.prototype.s = function(a, b) {
        var c = b.target;
        switch (b.type) {
            case Va:
                Jf(this, a, c);
                break;
            case g:
                a: {
                    a = this.a.get(a);
                    if (7 == c.h || rf(c) || a.ka > a.ya)
                        if (U(this, new If(g, this, 0, c)), a && (a.Na = !0, a.Ma)) {
                            c = a.Ma.call(c, b);
                            break a
                        }
                    c = null
                }
                return c;
            case Za:
                U(this, new If(Za, this, 0, c));
                break;
            case "timeout":
            case Ga:
                b = this.a.get(a);
                b.ka > b.ya && U(this, new If(Ga, this, 0, c));
                break;
            case "abort":
                U(this, new If("abort", this, 0, c))
        }
        return null
    };

    function Jf(a, b, c) {
        var d = a.a.get(b);
        !d || d.Na || d.ka > d.ya ? (d && (a.c.ea(c, Ff, d.Ea), Pe(a.a, b)), wf(a.b, c)) : (d.ka++, jf(c, d.Nb, d.Vb, d.Gb, d.Mb))
    }
    Ef.prototype.A = function() {
        Ef.u.A.call(this);
        this.b.U();
        this.b = null;
        this.c.U();
        this.c = null;
        var a = this.a;
        a.b = {};
        a.a.length = 0;
        a.c = 0;
        a.g = 0;
        this.a = null
    };

    function If(a, b, c, d) {
        od.call(this, a, b);
        this.ta = d
    }
    D(If, od);

    function Hf(a, b, c, d, e, f, h, l, q) {
        this.Nb = a;
        this.Vb = c || da;
        this.Gb = d;
        this.Mb = e || null;
        this.ya = w(h) ? h : 1;
        this.ka = 0;
        this.Ia = this.Na = !1;
        this.Ea = b;
        this.Ma = f;
        this.a = l || "";
        this.b = !!q;
        this.ta = null
    }
    Hf.prototype.Qa = t("b");
    Hf.prototype.Pa = t("a");

    function Kf(a, b, c, d, e, f) {
        this.b = a;
        this.i = b;
        this.a = d || null;
        this.data = e || null;
        if (f) {
            if (this.c = f, "displayModeSnippet" != f && f != Ca && f != Da && f != Ea) throw "bad display mode: " + f;
        } else this.c = Ea;
        this.g = !1
    }
    Kf.prototype.h = t("b");

    function Lf(a) {
        this.g = !0;
        this.m = a;
        this.b = null
    }

    function V(a, b) {
        return document.getElementById(a.m.b + "_" + b)
    }

    function W(a, b) {
        a = V(a, b);
        if (!a) throw "did not find element for id " + b;
        return a
    }
    Lf.prototype.o = function() {
        return this.m.data
    };
    Lf.prototype.c = function() {
        var a = {};
        a.type = this.b.ha();
        a.instanceId = this.m.b;
        a.sectionId = this.m.i;
        a.actionUrl = J.L;
        a.quickEditUrl = J.Ga + "&widgetType=" + this.b.ha() + "&widgetId=" + this.m.b + "&sectionId=" + this.m.i + aa + J.N;
        return a
    };

    function Mf(a, b, c, d, e) {
        c = c || {};
        window.__wavt && (c.xssi_token = window.__wavt);
        J.Tb(b, c, a.m.b, a.b.ha(), d, e)
    }

    function pc(a) {
        var b = -1;
        try {
            b = a.status
        } catch (c) {}
        return b
    }

    function J() {}
    J.qb = function(a, b, c) {
        J.b = {};
        J.Ga = a;
        J.L = b;
        J.gc = c;
        J.g = {};
        J.j = new Ef;
        J.Ha = 0;
        J.F = 0;
        S(J.j, Va, function() {
            J.F++
        });
        S(J.j, g, function() {
            J.F--
        })
    };
    J.Rb = function() {
        var a = J.eb();
        document.body.appendChild(a)
    };
    J.Pb = function(a) {
        J.Rb();
        if (window.parent == window) {
            var b = "Preview";
            a && (b = a);
            a = J.cb(b);
            document.body.appendChild(a[0]);
            document.body.appendChild(a[1])
        }
    };
    J.sb = ma;
    J.ab = ma;
    J.N = "editWidget";
    J.hb = function() {
        return J.L
    };
    J.Lb = function(a, b) {
        J.M = a;
        J.Ub = b
    };
    J.jb = function() {
        return J.M
    };
    J.Ob = function(a) {
        J.Xb = a
    };
    J.W = function() {
        return J.Xb
    };
    J.Kb = function(a) {
        J.g = a
    };
    J.gb = function() {
        var a = {},
            b;
        for (b in J.g) {
            var c = J.g[b];
            a[c.name] = c.data
        }
        c = {};
        for (b in J.b) c[b] = J.b[b].f.o();
        a.widgets = c;
        return a
    };
    J.X = function(a, b) {
        var c = new Lf(b);
        a = new window[a](c);
        c.b = a;
        J.b[b.b] = a;
        J.I(a);
        return a
    };
    J.xb = function(a, b) {
        a = J.X(a, b);
        a.f.m.g = !0;
        return a
    };
    J.I = function(a) {
        var b = a.f;
        b.m.c != Ea && (b.m.c == Ca && a.C(), a.f.g = !1)
    };
    J.c = function(a) {
        return J.b ? J.b[a] : null
    };
    J.w = function(a, b, c, d, e) {
        var f = "";
        d && (f = "&widgetId=" + d);
        a = J.Ga + aa + a + "&sectionId=" + b + "&widgetType=" + c + f;
        if (window.name == e) return window.location.replace(a), window.focus(), window;
        e = window.open(a, e, "width=570,height=600,left=75,top=20,resizable=yes,scrollbars=yes");
        e.focus();
        return e
    };
    J.Xa = function(a) {
        var b = a.getAttribute("id"),
            c = J.c(b);
        if (c) {
            var d = c.f.a;
            if (null != d && !d.closed) return d.focus(), !1
        }
        d = "config" + b;
        a = J.w(J.N, a.parentNode.getAttribute("id"), a.getAttribute("widgetType"), b, d);
        c && (c.f.a = a);
        return !1
    };
    J.wb = function(a) {
        J.w(J.ab, a.parentNode.getAttribute("id"), a.getAttribute("widgetType"), a.getAttribute("id"), J.sb);
        return !1
    };
    J.fb = function(a, b, c) {
        J.a(c, c.LayoutsMessages.DELETING);
        J.ia("delete", {}, a, b)
    };
    J.Cb = function(a, b) {
        var c = window;
        a.sectionid = document.getElementById("sectionId").value;
        J.a(c, c.LayoutsMessages.SAVING);
        J.ia("addnew", a, "", b)
    };
    J.Hb = function(a, b, c) {
        F(null != c, "no type");
        var d = J.c(b);
        F(null != d, Qa + b);
        d.f.m.g ? J.Cb(a, c) : (b = d.f, c = window, J.a(c, c.LayoutsMessages.SAVING), Mf(b, sa, a))
    };
    J.Tb = function(a, b, c, d, e, f) {
        J.ga(J.L, a, b, c, d, e, f)
    };
    J.ia = function(a, b, c, d) {
        J.M && (b.security_token = J.Ub, J.ga(J.M, a, b, c, d, void 0))
    };
    J.ga = function(a, b, c, d, e, f, h) {
        function l() {
            x(this.a) && window.eval(sf(this))
        }
        b = ["action=" + encodeURIComponent(b), "widgetId=" + encodeURIComponent(d), "widgetType=" + encodeURIComponent(e), "responseType=js"];
        for (var q in c)
            if (typeof c[q] == Sa)
                for (d = c[q], e = 0; e < d.length; ++e) b.push(encodeURIComponent(q) + "=" + encodeURIComponent(d[e]));
            else b.push(encodeURIComponent(q) + "=" + encodeURIComponent(c[q]));
        var x = f || oc();
        h == da ? (a = 0 <= a.indexOf("?") ? a + "&" : a + "?", Gf(J.j, "" + J.Ha++, a + b.join("&"), da, void 0, l)) : Gf(J.j, "" + J.Ha++,
            a, "POST", b.join("&"), l)
    };
    J.Jb = function(a, b) {
        a && (a = J.c(a)) && (a.f.a = b)
    };
    J.i = function(a, b) {
        0 == J.F ? a.setTimeout(function() {
            a.close()
        }, b) : a.setTimeout(function() {
            J.i(a, b)
        }, 200)
    };
    J.rb = function(a, b) {
        a && (J.i(a, 100), J.Sb(a, b))
    };
    J.Sb = function(a, b) {
        if (a) {
            var c = a.document.getElementById(Ya);
            c && (c = c.innerHTML);
            c && a && a.opener.parent && a.opener.parent.editor && a.opener.parent.editor.SetSaveMessage(c, b)
        }
    };
    J.J = function(a, b, c) {
        var d = J.b[a];
        null != c.errors ? ((a = d ? d.f.a : null) || (a = window), J.a(a, c.errors), d && d.Y ? d.Y(b, c, a) : J.Y(c, a)) : (F(null != d, Qa + a), d.J(b, c))
    };
    J.Y = function(a, b) {
        a = a["error-details"];
        for (var c in a) Nf(c, a[c], b.document)
    };

    function Of(a, b) {
        J.a(a.a, b[Xa]);
        J.V(a.m.b, "_OnWidgetConfigured", function(a) {
            window.opener._WidgetManager._OnWidgetConfigured(a, b)
        })
    }
    J.tb = function(a, b) {
        window.parent && window.parent.editor && b ? J.ub(a, b) : window.location.replace(window.location.href)
    };
    J.ub = function(a, b) {
        var c = J.c(a);
        c.f.m.data = b.data;
        a = document.getElementById(a);
        ad(a);
        qc(a, c);
        c.f.a = null
    };
    J.lb = function(a, b, c) {
        var d = c[Xa];
        if (null != c.errors) J.a(window, c.errors), J.Y(c, window);
        else if ("addnew" == b) {
            var e;
            J.l(window) && (window.opener && window.opener.parent && (e = window.opener.parent), e && e.editor && e.editor.HandleAddNewWidget(c));
            J.a(window, d);
            null == window.opener ? window.location = "/rearrange?blogID=" + c.blogID : e && e._WidgetManager ? e._WidgetManager._KillPopupDelay(window) : J.i(window, 100)
        } else c = J.b[a], F(null != c), "delete" == b && (J.a(c.f.a, d), J.V(a, "_OnWidgetDeleted"))
    };
    J.vb = function(a) {
        var b = J.c(a);
        b && (b.f.m.c == Da ? top.editor.HandleDeleteWidget(b.f.m.a) : (b = b.f.m.a, b.parentNode.removeChild(b)), delete J.b[a])
    };
    J.V = function(a, b, c) {
        if (J.l(window)) {
            var d = window.opener;
            c || (c = d._WidgetManager[b]);
            c(a);
            d._WidgetManager ? d._WidgetManager._KillPopupDelay(window, a) : J.i(window, 100)
        } else a = J.W() + "?widgetId=" + a, a += "&func=" + encodeURIComponent(b), window.location.replace(a)
    };
    J.l = function(a) {
        var b = !1;
        try {
            if (a.opener) {
                var c = "X" + a.opener.document.domain;
                c && "X" != c && (b = !0)
            }
        } catch (d) {}
        return b
    };
    J.Fa = "status-msg-yellow-on-white";
    J.a = function(a, b) {
        a || (a = self);
        var c = a.document.getElementById(Ya);
        c && (c.innerHTML = b);
        (a = a.document.getElementById(Xa)) && H(a, J.Fa)
    };
    J.ec = function(a) {
        a || (a = self);
        (a = a.document.getElementById(Xa)) && lc(a, J.Fa)
    };
    J.fc = function(a) {
        a && 0 < a.length && "http" != a.substring(0, 4) && (a = "http://" + a);
        return a
    };
    J.h = function(a, b) {
        if (I(a, b)) return a;
        if (a)
            for (var c = a.childNodes.length, d = 0; d < c; d++) {
                var e = J.h(a.childNodes.item(d), b);
                if (e) return e
            }
        return null
    };
    J.eb = function() {
        var a = window.document.createElement(n);
        a.className = "blogger-clickTrap singleton-element";
        a.style.position = ja;
        a.style.top = "0";
        a.style.left = "0";
        a.style.width = "100%";
        a.style.height = "100%";
        L && !M(7) && (a.style.height = "expression(this.parentNode.clientHeight)");
        a.style.zIndex = "1000";
        a.style.cursor = "default";
        a.onclick = J.s;
        a.onmousedown = J.s;
        a.onmouseup = J.s;
        a.style.background = "white";
        a.style.filter = "alpha(opacity=1)";
        a.style.opacity = ".01";
        a.innerHTML = "&nbsp;";
        return a
    };
    J.cb = function(a) {
        var b = window.document,
            c = J.H(b, a);
        a = J.H(b, a);
        c.style.backgroundColor = "#000";
        c.style.border = "1px solid #aaa";
        L && (c.style.filter = ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678) alpha(opacity=50)');
        c.style.opacity = ".5";
        a.style.border = "1px solid transparent";
        c.style.zIndex = 1200;
        a.style.zIndex = 1200;
        return [c, a]
    };
    J.H = function(a, b) {
        a = a.createElement(n);
        a.style.position = ja;
        a.style.top = "75px";
        a.style.left = "-225px";
        a.style.width = "600px";
        a.style.height = "28px";
        a.style.margin = "0";
        a.style.padding = "10px";
        a.style.fontSize = "24px";
        a.style.textAlign = "center";
        a.style.color = "#fff";
        a.style.fontFamily = '"trebuchet ms",verdana,arial,sans-serif';
        L && (a.style.top = "-140px", a.style.left = "-140px", a.style.filter = ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)');
        a.style.MozTransform = Wa;
        a.style.MozTransformOrigin = "50% 0";
        a.style.WebkitTransform = Wa;
        a.style.WebkitTransformOrigin = "50% 0";
        a.innerHTML = b;
        a.className = "singleton-element";
        return a
    };
    J.s = function(a) {
        a || (a = window.event);
        a && (a.cancelBubble = !0, a.stopPropagation && a.stopPropagation());
        return !1
    };

    function Pf(a) {
        if (a)
            if ("checkbox" == a.type) {
                if (a.checked) return a.value
            } else {
                if (null == a.type) {
                    for (var b = [], c = 0; c < a.length; c++) a[c].checked && (b[b.length] = a[c].value);
                    switch (b.length) {
                        case 0:
                            return;
                        case 1:
                            return b[0];
                        default:
                            return b
                    }
                }
                return a.value
            }
    }

    function Qf(a, b) {
        b || (b = document);
        return b.getElementById("errormessage_" + a)
    }

    function Nf(a, b, c) {
        if (a = Qf(a, c)) a.innerHTML = b, a.className = "errorbox-bad errormsg"
    }

    function Rf() {
        this.a = [];
        for (var a = 0; a < J.g.length; ++a) this.a[this.a.length] = J.g[a]
    }

    function Sf(a, b) {
        null == b && (b = "");
        for (var c = a.a.length - 1; 0 <= c; --c)
            if (a.a[c].name == b) return a.a[c].data;
        return null
    }
    Rf.prototype.o = function(a) {
        var b = Sf(this, a);
        if (null !== b) return b;
        var c = a.split(".");
        if (1 == c.length) return b = Sf(this, ""), b[a];
        b = Sf(this, c[0]);
        a = 0;
        for (b ? a = 1 : b = Sf(this, ""); a < c.length; a++) {
            if (null == b) return null;
            b = b[c[a]]
        }
        return b
    };

    function X(a, b) {
        this.cc = a;
        this.f = b
    }
    u = X.prototype;
    u.ha = t("cc");
    u.Za = t("f");
    u.J = function(a, b) {
        a == sa && Of(this.f, b)
    };
    u.Y = function(a, b, c) {
        J.Y(b, c)
    };
    u.C = function() {};
    B("_WidgetManager", J);
    J._Init = J.qb;
    J._SetPageActionUrl = J.Lb;
    J._GetPageActionUrl = J.jb;
    J._SetWidgetRefreshUrl = J.Ob;
    J._GetWidgetRefreshUrl = J.W;
    J._GetCallbackUrl = J.hb;
    J._DeleteWidgetFromPage = J.fb;
    J._DisplayWidget = J.I;
    J._GetWidget = J.c;
    J._HandleControllerResult = J.J;
    J._HandlePageActionResult = J.lb;
    J._IsOpenerReachable = J.l;
    J._SetConfigWin = J.Jb;
    J._SetDataContext = J.Kb;
    J._SetupPreview = J.Pb;
    J._RegisterWidget = J.X;
    J._RegisterNewWidget = J.xb;
    J._PopupPaneFromParams = J.w;
    J._PopupConfig = J.Xa;
    J._PopupToolbox = J.wb;
    J._KillPopupDelay = J.rb;
    J._OnWidgetConfigured = J.tb;
    J._OnWidgetDeleted = J.vb;
    B("_WidgetInfo", Kf);
    Kf.prototype._getInstanceId = Kf.prototype.h;
    X.prototype._GetHelper = X.prototype.Za;
    Lf.prototype._GetData = Lf.prototype.o;
    Lf.prototype._GenerateWidgetMetadata = Lf.prototype.c;
    J._GetAllData = J.gb;
    B("widget_module_provide", function(a, b, c) {
        var d = Ce.Z(),
            e = d.b,
            f = d.h;
        e[a] || (e[a] = {});
        if (c) e[a][b] = c;
        else if (f[a]) {
            for (b = 0; b < f[a].length; ++b)(0, f[a][b][1])(e[a][f[a][b][0]]);
            delete f[a];
            delete d.g[a]
        }
    });

    function Tf(a) {
        X.call(this, "AdSense", a);
        this.f = a
    }
    D(Tf, X);
    B("_AdSenseView", Tf);

    function Uf(a) {
        X.call(this, "BlogArchive", a);
        this.a = a.m
    }
    D(Uf, X);
    var Vf = "&#9658;&nbsp;";
    u = Uf.prototype;
    u.J = function(a, b) {
        if (a == sa) Of(this.f, b);
        else if ("getTitles" == a) {
            var c;
            a: {
                a = b.path;
                var d = this.a.a.getElementsByTagName("A");
                for (c in d) {
                    var e = d[c];
                    if (e.href == a) {
                        c = id(e, "li", "archivedate");
                        break a
                    }
                }
                c = void 0
            }
            a = Q("posts", c);
            (d = id(c, n, qa)) && Wc(d, {
                style: "",
                "data-height": ""
            });
            ad(a);
            for (d = 0; d < b.posts.length; d++) {
                var e = b.posts[d],
                    f = document.createElement("li");
                f.innerHTML = "<a href=" + e.url + ">" + e.title + "</a>";
                a.appendChild(f)
            }
            Wf(this, c);
            Xf(this, c)
        } else Uf.u.J.call(this, a, b)
    };
    u.C = function() {
        if (V(this.f, "ArchiveList")) {
            var a = P("a", ab, this.a.a);
            1 > a.length && (a = P("li", ab, this.a.a));
            var b;
            0 < a.length && a[0].currentStyle && (b = a[0].parentNode.currentStyle.color);
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                0 < P(n, qa, d).length ? (d.onclick = this.kb.bind(this), Wf(this, d)) : d.onclick = this.mb.bind(this);
                b && (d.style.color = b)
            }
            if (d = V(this.f, "ArchiveMenu")) {
                for (c = 1; c < d.options.length; c++)
                    if (a = d.options[c].value, a == window.location.href || null != window.location.href.match(a)) {
                        d.selectedIndex = c;
                        break
                    }
                d.onchange =
                    this.$a.bind(this)
            } else
                for (a = P(n, Fa, this.a.a), c = 0; c < a.length; c++) d = a[c], d.addEventListener(na, this.pb.bind(this), !1), d.addEventListener(na, this.ib.bind(this), !1);
            "rtl" == this.f.o().languageDirection && (Vf = "&#9668;&nbsp;")
        }
    };
    u.$a = function() {
        var a = V(this.f, "ArchiveMenu");
        a && "" != a.value && (window.location.href = a.value)
    };
    u.mb = function(a) {
        a = a || window.event;
        var b = a.currentTarget || a.srcElement;
        b && !I(b, ab) && (b = b.parentNode);
        a = J.h(b, "zippy");
        b = b.parentNode;
        if (I(b, Ia)) return nc(b, Ia, oa), a.innerHTML = Vf, lc(a, "toggle-open"), !1;
        nc(b, oa, Ia);
        a.innerHTML = "&#9660;&nbsp;";
        H(a, "toggle-open");
        Yf(this, b);
        return !1
    };
    u.pb = function(a) {
        a = a || window.event;
        a = a.currentTarget || a.srcElement;
        (a = I(a, Fa) ? a : id(a, n, Fa)) && (a = Q("menu", a)) && (I(a, "open") ? lc(a, "open") : H(a, "open"))
    };
    u.ib = function(a) {
        a = a || window.event;
        var b = a.currentTarget || a.srcElement;
        if (b = I(b, "ripple") ? b : id(b, n, "ripple")) {
            var c = Q("splash", b);
            if (!c) {
                c = document.createElement("span");
                H(c, "splash");
                var d = document.createElement(n);
                H(d, "splash-wrapper");
                d.appendChild(c);
                b.insertBefore(d, b.firstChild)
            }
            lc(c, "animate");
            var d = b.offsetWidth,
                e = getComputedStyle(b),
                d = d + (parseInt(e.marginLeft) + parseInt(e.marginRight)),
                d = Math.max(d, Zf(b));
            Wc(c, {
                style: "height: " + d + "px; width: " + d + "px; left: " + (a.pageX - b.offsetLeft - d / 2) + "px; top: " +
                    (a.pageY - b.offsetTop - d / 2) + "px;"
            });
            H(c, "animate")
        }
    };
    u.kb = function(a) {
        a = a || window.event;
        if (!a.currentTarget || a.currentTarget == a.srcElement || "A" != a.srcElement.tagName) {
            var b = a.currentTarget || a.srcElement;
            b && !I(b, ab) && (b = b.parentNode);
            a.stopPropagation();
            a = I(b, "archivedate") ? b : b.parentNode;
            I(a, Ia) ? ($f(this, a), nc(a, Ia, oa)) : (Yf(this, a), Xf(this, a), nc(a, oa, Ia))
        }
    };

    function Yf(a, b) {
        var c;
        c = b.getElementsByTagName("UL");
        0 < c.length && !I(c[0], "posts") ? c = !1 : (c = J.h(b, "post-count"), c = parseInt(c.innerHTML.match(/\d+/), 10), c = b.getElementsByTagName("LI").length < c);
        if (c) {
            var d = Q(qa, b);
            c = Q("posts", b);
            c || (c = document.createElement("UL"), d ? d.appendChild(c) : b.appendChild(c), H(c, "posts"));
            d && Wc(d, {
                style: "",
                "data-height": ""
            });
            (d = id(b, n, qa)) && Wc(d, {
                style: "",
                "data-height": ""
            });
            d = document.createElement("LI");
            d.appendChild(document.createTextNode(a.f.o().loadingMessage || "Loading..."));
            c.appendChild(d);
            Mf(a.f, "getTitles", {
                path: J.h(b, "post-count-link").href
            }, null, da)
        }
    }

    function Xf(a, b) {
        var c = Q(qa, b);
        c.getAttribute(Aa) || Wf(a, b);
        var d = (a = c.getAttribute(Aa) || Zf(c)) ? a + "px" : r;
        window.setTimeout(function() {
            Wc(c, {
                style: "max-height: " + d + ";"
            })
        }, 10)
    }

    function $f(a, b) {
        var c = Q(qa, b);
        c.getAttribute(Aa) || Wf(a, b);
        window.setTimeout(function() {
            Wc(c, {
                style: Pa
            })
        }, 10)
    }

    function Wf(a, b) {
        var c = Q(qa, b);
        Wc(c, {
            style: "max-height: none;"
        });
        for (var d = 0, e = P(n, qa, c), f = 0; f < e.length; f++) {
            var h = e[f],
                l = id(h, "li", ab);
            if (I(l, oa)) {
                var q = h.getAttribute(Aa);
                q || (Wf(a, l), q = h.getAttribute(Aa));
                d += parseInt(q)
            }
        }
        a = d + Zf(c);
        c.setAttribute(Aa, a);
        c.setAttribute("style", "max-height: " + a + "px;");
        I(b, oa) && c.setAttribute("style", Pa)
    }

    function Zf(a) {
        var b = a.offsetHeight;
        a = getComputedStyle(a);
        return b += parseInt(a.marginTop) + parseInt(a.marginBottom)
    }
    B("_BlogArchiveView", Uf);

    function ag(a) {
        X.call(this, ag.a, a)
    }
    D(ag, X);
    ag.a = "Attribution";
    B("_AttributionView", ag);

    function bg(a, b, c) {
        if (z(b))(b = cg(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = cg(c, d);
                f && (c.style[f] = e)
            }
    }
    var dg = {};

    function cg(a, b) {
        var c = dg[b];
        if (!c) {
            var d = Pb(b),
                c = d;
            void 0 === a.style[d] && (d = (Kc ? "Webkit" : Jc ? "Moz" : L ? "ms" : Hc ? "O" : null) + Qb(d), void 0 !== a.style[d] && (c = d));
            dg[b] = c
        }
        return c
    }

    function eg(a, b) {
        var c = dd(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function fg(a, b) {
        return eg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function gg(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        L && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function hg(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Kc && !b && !c;
        return w(b) && !d || !a.getBoundingClientRect ? new Dc(b, c) : (a = gg(a), new Dc(a.right - a.left, a.bottom - a.top))
    }

    function ig(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function jg(a) {
        var b = dd(a),
            c = "";
        if (b.body.createTextRange && cd(b, a)) {
            b = b.body.createTextRange();
            b.moveToElementText(a);
            try {
                c = b.queryCommandValue("FontName")
            } catch (d) {
                c = ""
            }
        }
        c || (c = fg(a, "fontFamily"));
        a = c.split(",");
        1 < a.length && (c = a[0]);
        a: for (a = 0; 2 > a; a++)
            if (b = "\"'".charAt(a), c.charAt(0) == b && c.charAt(c.length - 1) == b) {
                c = c.substring(1, c.length - 1);
                break a
            }
        return c
    }
    var kg = /[^\d]+$/,
        lg = {
            cm: 1,
            "in": 1,
            mm: 1,
            pc: 1,
            pt: 1
        },
        mg = {
            em: 1,
            ex: 1
        };

    function ng(a) {
        var b = fg(a, "fontSize"),
            c;
        c = (c = b.match(kg)) && c[0] || null;
        if (b && "px" == c) return parseInt(b, 10);
        if (L) {
            if (String(c) in lg) return ig(a, b);
            if (a.parentNode && 1 == a.parentNode.nodeType && String(c) in mg) return a = a.parentNode, c = fg(a, "fontSize"), ig(a, b == c ? "1em" : b)
        }
        c = R(fa, {
            style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
        });
        a.appendChild(c);
        b = c.offsetHeight;
        bd(c);
        return b
    };

    function og() {}
    rb(og);
    og.prototype.a = 0;

    function pg(a) {
        T.call(this);
        a || (a = Db || (Db = new kd));
        this.I = a;
        this.P = null;
        this.R = !1;
        this.a = null;
        this.b = void 0;
        this.l = this.s = this.c = null
    }
    D(pg, T);
    u = pg.prototype;
    u.Qb = og.Z();
    u.ca = t("a");

    function qg(a) {
        a.b || (a.b = new Ie(a));
        return a.b
    }
    u.Ca = function(a) {
        if (this.c && this.c != a) throw Error("Method not supported");
        pg.u.Ca.call(this, a)
    };
    u.Ra = function() {
        this.a = this.I.b.createElement(ca)
    };
    u.render = function(a) {
        if (this.R) throw Error("Component already rendered");
        this.a || this.Ra();
        a ? a.insertBefore(this.a, null) : this.I.b.body.appendChild(this.a);
        this.c && !this.c.R || this.oa()
    };
    u.oa = function() {
        this.R = !0;
        rg(this, function(a) {
            !a.R && a.ca() && a.oa()
        })
    };

    function sg(a) {
        rg(a, function(a) {
            a.R && sg(a)
        });
        a.b && Ke(a.b);
        a.R = !1
    }
    u.A = function() {
        this.R && sg(this);
        this.b && (this.b.U(), delete this.b);
        rg(this, function(a) {
            a.U()
        });
        this.a && bd(this.a);
        this.c = this.a = this.l = this.s = null;
        pg.u.A.call(this)
    };

    function rg(a, b) {
        a.s && Yb(a.s, b, void 0)
    }
    u.removeChild = function(a, b) {
        if (a) {
            var c = z(a) ? a : a.P || (a.P = ":" + (a.Qb.a++).toString(36));
            this.l && c ? (a = this.l, a = (null !== a && c in a ? a[c] : void 0) || null) : a = null;
            if (c && a) {
                var d = this.l;
                c in d && delete d[c];
                dc(this.s, a);
                b && (sg(a), a.a && bd(a.a));
                b = a;
                if (null == b) throw Error("Unable to set parent component");
                b.c = null;
                pg.u.Ca.call(b, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };

    function tg(a, b, c, d) {
        pg.call(this, d);
        this.j = c || window;
        this.N = a;
        this.F = b;
        this.H = {};
        this.w = this.g = null;
        this.h = {};
        this.h.GOOGLEPLUS = {
            da: "Google+",
            la: this.Ab
        };
        this.h.EMAIL = {
            da: "Email",
            la: this.yb
        };
        this.h.FACEBOOK = {
            da: "Facebook",
            la: this.zb
        };
        this.h.TWITTER = {
            da: "Twitter",
            la: this.Bb
        }
    }
    D(tg, pg);
    u = tg.prototype;
    u.Ra = function() {
        var a = this.I,
            b = a.a(ca, {
                style: "position:absolute;width:100%;left:0;top:0;height:100%;z-index:100;",
                "class": "mobile-share-panel-outer"
            });
        this.g = a.a(ca, {
            style: "position:absolute;;width:230px;height:200px;",
            "class": "mobile-share-panel-inner"
        });
        b.appendChild(this.g);
        var c = a.a(ca, {
            "class": "mobile-share-panel-title"
        });
        c.innerText = ia;
        c.textContent = ia;
        this.g.appendChild(c);
        this.w = a.a("A", {
            href: "javascript:void(0)",
            "class": "mobile-share-panel-button-close"
        });
        this.w.innerHTML = "&times;";
        c.appendChild(this.w);
        for (var d in this.h) {
            var c = a.a("A", {
                    target: "_blank",
                    display: ka,
                    "class": "mobile-share-panel-button mobile-share-panel-button-" + d.toLowerCase()
                }),
                e = a.a(fa),
                f = this.h[d];
            e.innerText = f.da;
            e.textContent = f.da;
            c.href = f.la.call(this);
            c.appendChild(e);
            this.g.appendChild(c);
            this.H[d] = c
        }
        this.a = b
    };
    u.oa = function() {
        tg.u.oa.call(this);
        for (var a in this.H) {
            var b = this.H[a];
            b && qg(this).S(b, na, this.wa)
        }
        qg(this).S(this.w, na, this.wa);
        a = this.ca();
        qg(this).S(a, na, this.wa);
        this.Ja();
        qg(this).S(this.j, "scroll", this.Ja)
    };
    u.Ja = function() {
        var a = this.j.innerHeight,
            b = this.j.innerWidth,
            c = this.j.pageYOffset,
            d = this.j.pageXOffset,
            e = 0;
        200 < a && (e = (a - 200) / 2);
        bg(this.g, "top", e + c + "px");
        a = 0;
        230 < b && (a = (b - 230) / 2);
        bg(this.g, "left", a + d + "px")
    };
    u.Bb = function() {
        return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(this.N + ": " + this.F)
    };
    u.zb = function() {
        return "https://m.facebook.com/sharer.php?u=" + encodeURIComponent(this.F) + "&t=" + encodeURIComponent(this.N)
    };
    u.yb = function() {
        return "mailto:?subject=" + encodeURIComponent(this.N) + "&body=" + encodeURIComponent(this.F)
    };
    u.Ab = function() {
        return "https://plus.google.com/share?source=blogger:mobile:share&url=" + encodeURIComponent(this.F)
    };
    u.wa = function() {
        var a = this.ca();
        a && (a.style.display = r)
    };

    function ug() {
        this.c = null;
        this.a = {};
        this.b = !1
    }
    rb(ug);
    ug.prototype.i = function(a, b, c) {
        c.g || c.c || c.h || c.i || (a = this.a[a]) && 0 < a.length && (vg(this), Fe()(a, b), c.preventDefault())
    };
    ug.prototype.h = function() {
        vg(this);
        De(pb)
    };

    function vg(a) {
        a.b || (document.body.appendChild(R("LINK", {
            type: "text/css",
            rel: "stylesheet",
            href: a.g
        })), a.b = !0)
    }
    var wg = [/(https?:\/\/lighthouse-dev\.corp\.google\.com\/image)\/([^/]+)\/([^/]+\/[^/]+\/[^/]+)\/((s\d+)(-?[hR]?)\/)?([^/]+)/, /(https?:\/\/lh[3-6]+\.google\.[.a-z]+)\/([^/]+)\/([^/]+\/[^/]+\/[^/]+)\/((s\d+)(-?[hR]?)\/)?([^/]+)/, /(https:\/\/lh[3-6]+\.google\.com)\/([^/]+)\/([^/]+\/[^/]+\/[^/]+)\/((s\d+)(-?[hR]?)\/)?([^/]+)/, /(https?:\/\/lh[3-6]+\.ggpht\.com)\/([^/]+)\/([^/]+\/[^/]+\/[^/]+)\/((s\d+)(-?[hR]?)\/)?([^/]+)/, /(https?:\/\/lh[3-6]+\.googleusercontent\.com)\/([^/]+)\/([^/]+\/[^/]+\/[^/]+)\/((s\d+)(-?[hR]?)\/)?([^/]+)/,
        /(https?:\/\/[1-4]+\.bp\.blogspot\.[.a-z]+)\/([^/]+)\/([^/]+\/[^/]+\/[^/]+)\/((s\d+)(-?[hR]?)\/)?([^/]+)/, /(https?:\/\/bp[0-3]+\.blogger\.[.a-z]+)\/([^/]+)\/([^/]+\/[^/]+\/[^/]+)\/((s\d+)(-?[hR]?)\/)?([^/]+)/
    ];

    function xg(a) {
        for (var b = 0; b < wg.length; b++) {
            var c = a.match(wg[b]);
            if (c) return c
        }
        return null
    };

    function yg() {
        this.b = {};
        this.a = 0;
        this.i = [];
        this.c = [];
        var a = this;
        this.h = function() {
            zg(a)
        }
    }

    function Ag(a) {
        for (var b = a.b, c = P("img", "delayLoad", void 0), d = 0; d < c.length; d++)
            if (c[d].style.display == r && (c[d].style.display = ""), 5 > d) {
                var e = c[d];
                "" != e.longDesc && (e.src = e.longDesc)
            } else e = c[d].id, "" == e && (e = "av-delay-tempId-" + d), b[e] = {
                Oa: c[d],
                key: e
            }, a.a++;
        0 != a.a && (a.l = S(window, "scroll", a.h), a.j = S(window, "resize", a.h), Bg(a))
    }

    function zg(a) {
        a.g && window.clearTimeout(a.g);
        a.g = window.setTimeout(function() {
            a.g = null;
            Bg(a)
        }, 100)
    }

    function Bg(a) {
        if (!(0 > a.a))
            if (0 == a.a) Md(a.l), Md(a.j), a.a = -1;
            else {
                var b = !1,
                    c;
                for (c in a.b) {
                    var d;
                    a: {
                        d = a;
                        var e = a.b[c],
                            f = window.document,
                            f = "CSS1Compat" == f.compatMode ? f.documentElement : f.body,
                            f = (new Dc(f.clientWidth, f.clientHeight)).height,
                            h;h = e.Oa;F(h);1 == h.nodeType ? (h = gg(h), h = new Cc(h.left, h.top)) : (h = h.changedTouches ? h.changedTouches[0] : h, h = new Cc(h.clientX, h.clientY));h = h.$;
                        if (0 <= h && h <= f) d.i.push(e);
                        else if (0 < h && h < Math.round(2.25 * f)) d.c.push(e);
                        else if (0 > h && h > Math.round(-1.25 * f)) d.c.push(e);
                        else {
                            d = !1;
                            break a
                        }
                        d = !0
                    }
                    d && (b = !0)
                }
                if (b) {
                    b = a.i.concat(a.c);
                    for (c = 0; c < b.length; c++) d = b[c].Oa, "" != d.longDesc && (d.src = d.longDesc), a.a--, delete a.b[b[c].key];
                    a.i = [];
                    a.c = []
                }
            }
    };
    var Cg = {
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
        darkgrey: "#a9a9a9",
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
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
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
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
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
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
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
        mediumpurple: "#9370db",
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
        palevioletred: "#db7093",
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
        slategrey: "#708090",
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
        yellowgreen: "#9acd32"
    };

    function Dg(a) {
        var b = {};
        a = String(a);
        var c = "#" == a.charAt(0) ? a : "#" + a;
        if (Eg.test(c)) {
            a = c;
            if (!Eg.test(a)) throw Error("'" + a + "' is not a valid hex color");
            4 == a.length && (a = a.replace(Fg, "#$1$1$2$2$3$3"));
            b.Aa = a.toLowerCase();
            b.type = "hex";
            return b
        }
        a: {
            var d = a.match(Gg);
            if (d) {
                var c = Number(d[1]),
                    e = Number(d[2]),
                    d = Number(d[3]);
                if (0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
                    c = [c, e, d];
                    break a
                }
            }
            c = []
        }
        if (c.length) {
            e = c[0];
            a = c[1];
            c = c[2];
            e = Number(e);
            a = Number(a);
            c = Number(c);
            if (e != (e & 255) || a != (a & 255) || c != (c & 255)) throw Error('"(' +
                e + "," + a + "," + c + '") is not a valid RGB color');
            e = Hg(e.toString(16));
            a = Hg(a.toString(16));
            c = Hg(c.toString(16));
            b.Aa = "#" + e + a + c;
            b.type = "rgb";
            return b
        }
        if (Cg && (c = Cg[a.toLowerCase()])) return b.Aa = c, b.type = "named", b;
        throw Error(a + " is not a valid color string");
    }
    var Fg = /#(.)(.)(.)/,
        Eg = /^#(?:[0-9a-f]{3}){1,2}$/i,
        Gg = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

    function Hg(a) {
        return 1 == a.length ? "0" + a : a
    };

    function Y(a, b) {
        this.g = this.j = this.c = "";
        this.h = null;
        this.i = this.l = "";
        this.b = !1;
        var c;
        a instanceof Y ? (this.b = w(b) ? b : a.b, Ig(this, a.c), this.j = a.j, this.g = a.g, Jg(this, a.h), Kg(this, a.l), b = a.a, c = new Lg, c.c = b.c, b.a && (c.a = new Ne(b.a), c.b = b.b), Mg(this, c), this.i = a.i) : a && (c = String(a).match(Xe)) ? (this.b = !!b, Ig(this, c[1] || "", !0), this.j = Ng(c[2] || ""), this.g = Ng(c[3] || "", !0), Jg(this, c[4]), Kg(this, c[5] || "", !0), Mg(this, c[6] || "", !0), this.i = Ng(c[7] || "")) : (this.b = !!b, this.a = new Lg(null, 0, this.b))
    }
    Y.prototype.toString = function() {
        var a = [],
            b = this.c;
        b && a.push(Og(b, Pg, !0), ":");
        var c = this.g;
        if (c || "file" == b) a.push("//"), (b = this.j) && a.push(Og(b, Pg, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c));
        if (c = this.l) this.g && "/" != c.charAt(0) && a.push("/"), a.push(Og(c, "/" == c.charAt(0) ? Qg : Rg, !0));
        (c = this.a.toString()) && a.push("?", c);
        (c = this.i) && a.push("#", Og(c, Sg));
        return a.join("")
    };

    function Ig(a, b, c) {
        a.c = c ? Ng(b, !0) : b;
        a.c && (a.c = a.c.replace(/:$/, ""));
        return a
    }

    function Jg(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.h = b
        } else a.h = null
    }

    function Kg(a, b, c) {
        a.l = c ? Ng(b, !0) : b;
        return a
    }

    function Mg(a, b, c) {
        b instanceof Lg ? (a.a = b, Tg(a.a, a.b)) : (c || (b = Og(b, Ug)), a.a = new Lg(b, 0, a.b))
    }

    function Vg(a, b, c) {
        a.a.set(b, c);
        return a
    }

    function Wg(a) {
        return a instanceof Y ? new Y(a) : new Y(a, void 0)
    }

    function Ng(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function Og(a, b, c) {
        return z(a) ? (a = encodeURI(a).replace(b, Xg), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function Xg(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var Pg = /[#\/\?@]/g,
        Rg = /[\#\?:]/g,
        Qg = /[\#\?]/g,
        Ug = /[\#\?@]/g,
        Sg = /#/g;

    function Lg(a, b, c) {
        this.b = this.a = null;
        this.c = a || null;
        this.g = !!c
    }

    function Yg(a) {
        a.a || (a.a = new Ne, a.b = 0, a.c && Ye(a.c, function(b, c) {
            b = decodeURIComponent(b.replace(/\+/g, " "));
            Yg(a);
            a.c = null;
            b = Zg(a, b);
            var d = a.a.get(b);
            d || a.a.set(b, d = []);
            d.push(c);
            a.b = Ub(a.b) + 1
        }))
    }
    u = Lg.prototype;
    u.B = function() {
        Yg(this);
        return this.b
    };

    function $g(a, b) {
        Yg(a);
        b = Zg(a, b);
        Qe(a.a.b, b) && (a.c = null, a.b = Ub(a.b) - a.a.get(b).length, Pe(a.a, b))
    }

    function ah(a, b) {
        Yg(a);
        b = Zg(a, b);
        return Qe(a.a.b, b)
    }
    u.K = function() {
        Yg(this);
        for (var a = this.a.D(), b = this.a.K(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    u.D = function(a) {
        Yg(this);
        var b = [];
        if (z(a)) ah(this, a) && (b = ec(b, this.a.get(Zg(this, a))));
        else {
            a = this.a.D();
            for (var c = 0; c < a.length; c++) b = ec(b, a[c])
        }
        return b
    };
    u.set = function(a, b) {
        Yg(this);
        this.c = null;
        a = Zg(this, a);
        ah(this, a) && (this.b = Ub(this.b) - this.a.get(a).length);
        this.a.set(a, [b]);
        this.b = Ub(this.b) + 1;
        return this
    };
    u.get = function(a, b) {
        a = a ? this.D(a) : [];
        return 0 < a.length ? String(a[0]) : b
    };

    function bh(a, b, c) {
        $g(a, b);
        0 < c.length && (a.c = null, a.a.set(Zg(a, b), fc(c)), a.b = Ub(a.b) + c.length)
    }
    u.toString = function() {
        if (this.c) return this.c;
        if (!this.a) return "";
        for (var a = [], b = this.a.K(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.D(d), f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
                a.push(h)
            }
        return this.c = a.join("&")
    };

    function Zg(a, b) {
        b = String(b);
        a.g && (b = b.toLowerCase());
        return b
    }

    function Tg(a, b) {
        b && !a.g && (Yg(a), a.c = null, a.a.forEach(function(a, b) {
            var c = b.toLowerCase();
            b != c && ($g(this, b), bh(this, c, a))
        }, a));
        a.g = b
    };

    function ch(a) {
        X.call(this, "Blog", a);
        this.a = a.m;
        if (this.a.data) {
            a = new Rf;
            this.g = this.a.data.showBacklinks;
            this.i = a.o(la);
            this.c = a.o("blog.canonicalUrl");
            this.h = a.o("blog.url");
            if (this.a.data.lightboxEnabled) {
                var b = this.a.data.lightboxModuleUrl,
                    c = this.a.data.lightboxCssUrl,
                    d = ug.Z(),
                    e = Vd(b);
                He(Ce.Z(), b, e);
                d.g = c;
                b = P(ca, "post-body", this.a.a);
                for (c = 0; c < b.length; c++) {
                    for (var e = "fakeId" + dh++, d = ug.Z(), f = P("IMG", void 0, b[c]), h = f.length, l = [], q = 0; q < h; q++) {
                        var x = f[q].src,
                            C = null,
                            O = id(f[q], "A");
                        if (O) {
                            O = O.href;
                            if (O != x) {
                                var Ha = x,
                                    C = xg(O),
                                    Ha = xg(Ha);
                                if (C && Ha && C[C.length - 1] == Ha[Ha.length - 1]) C = x, x = O, x = (O = xg(x)) && G(O, "-h") ? x.replace(/\/s(\d+)-h\//, "/s$1/") : x;
                                else continue
                            }
                            l.push({
                                imageUrl: x,
                                thumbnailUrl: C
                            });
                            S(f[q], na, A(d.i, d, e, l.length - 1))
                        }
                    }
                    0 < l.length && (d.a[e] = l, d.c || (d.c = S(window, "load", d.h, !1, d)))
                }
            }
            this.a.data.mobile && (this.b = new tg(a.o("blog.pageTitle"), this.c))
        }
    }
    D(ch, X);
    u = ch.prototype;
    u.J = function(a, b) {
        if ("backlinks" == a) {
            this.g = !1;
            if (a = V(this.f, "backlinks-container")) a.innerHTML = b;
            b = P("span", "backlink-toggle-zippy", this.a.a);
            for (a = 0; a < b.length; a++) b[a].onclick = this.nb.bind(this);
            b = V(this.f, "backlinks-create-link");
            null != b && (b.onclick = this.Ya.bind(this, b.href))
        } else ch.u.J.call(this, a, b)
    };
    u.nb = function(a) {
        a = a || window.event;
        for (a = (a.srcElement || a.target).parentNode; a && !I(a, "backlink-control");) a = a.parentNode;
        a && (I(a, Ja) ? (lc(a, Ja), H(a, pa)) : (H(a, Ja), lc(a, pa)))
    };
    u.C = function() {
        var a = document.getElementById(this.a.b);
        this.g && Mf(this.f, "backlinks", {
            postID: this.a.data.postId
        }, function(a) {
            500 <= pc(a) ? (window.console && console.log && (a = a.responseText.match(/bX-\w*/)[0], console.log("Error loading backlinks: " + a)), a = !1) : a = !0;
            return a
        }, da);
        if (this.a.data.mobile) {
            var b = N(ra);
            eh() ? b && (b.style.display = ka) : b && (b.style.display = r);
            b = V(this.f, "comment-editor-toggle-link");
            null != b && (b.onclick = this.ob);
            (b = N("mobile-share-button")) && this.b && (b.onclick = A(this.Wb, this))
        }
        this.j =
            new yg;
        Ag(this.j);
        var c = Q("cmt_iframe_holder", a);
        if (c && window.gapi && gapi.comments && gapi.comments.render) {
            var d = this.a.data.iframeCommentsId;
            c.id = d;
            var e = this.a.data.legacyCommentModerationUrl,
                f = this.a.data.viewType,
                h = fh(this.h),
                l = Ig(Wg(this.c), "http").toString();
            window.setTimeout(function() {
                var a;
                if (fg(c, "display") != r) a = hg(c);
                else {
                    a = c.style;
                    var b = a.display,
                        C = a.visibility,
                        O = a.position;
                    a.visibility = "hidden";
                    a.position = ja;
                    a.display = Ma;
                    var Ha = hg(c);
                    a.display = b;
                    a.position = O;
                    a.visibility = C;
                    a = Ha
                }
                gapi.comments.render(d, {
                    href: h,
                    query: l,
                    first_party_property: "BLOGGER",
                    legacy_comment_moderation_url: e,
                    view_type: f,
                    width: a.width
                })
            }, 10)
        }
        a && gh(a, this.i)
    };

    function gh(a, b) {
        var c = Vc(a);
        c && window.gapi && gapi.commentcount && gapi.commentcount.render && window.setTimeout(function() {
            for (var a = 0; a < c.length; a++) {
                var e = c[a],
                    f = "_id_" + a + Math.random() * Math.pow(10, 17);
                e.id = f;
                var h = e.getAttribute("data-url"),
                    l = e.getAttribute("data-post-url"),
                    q = e.getAttribute("data-count"),
                    x = jg(e),
                    C = ng(e),
                    O = hh(e);
                e.style.position = ja;
                e.style.left = "-10000px";
                gapi.commentcount.render(f, {
                    linkify: !0,
                    href: l,
                    query: h,
                    onclick: Bb(function(a) {
                        window.location.href = a + "#gpluscomments"
                    }, l),
                    onready: Bb(function(a) {
                        a.style.verticalAlign =
                            "text-top";
                        a.style.position = "";
                        a.style.left = ""
                    }, e),
                    preexisting_count: q,
                    view_type: b,
                    "font-family": x,
                    "font-size": C + "px",
                    color: O
                })
            }
        }, 10)
    }

    function fh(a) {
        a = Wg(a);
        $g(a.a, "m");
        return a.toString()
    }

    function hh(a) {
        a = eg(a, "color") || (a.currentStyle ? a.currentStyle.color : null) || a.style && a.style.color;
        return Dg(a).Aa
    }
    u.Wb = function() {
        if (this.b.R) {
            var a = this.b.ca();
            a && (a.style.display = "")
        } else this.b.render()
    };

    function eh() {
        var a = window.location.href.split("#");
        return a[a.length - 1] && "comment-form" == a[a.length - 1]
    }
    u.ob = function() {
        var a = N(ra);
        a && (a.style.display = a.style.display == r ? ka : r);
        return !1
    };
    u.Ya = function(a) {
        var b = "";
        document.selection ? b = document.selection.createRange().text : window.getSelection ? b = window.getSelection() : document.getSelection && (b = document.getSelection());
        window.open(a + "?t=" + encodeURIComponent(b) + "&u=" + encodeURIComponent(window.location.href) + "&n=" + encodeURIComponent(document.title), "bloggerForm", "scrollbars=no,width=475,height=300,top=175,left=75,status=yes,resizable=yes");
        return !1
    };
    var dh = 0;
    B("_BlogView", ch);

    function ih(a) {
        X.call(this, "BlogList", a)
    }
    D(ih, X);
    u = ih.prototype;
    u.Da = null;
    u.sa = null;
    u.C = function() {
        var a = this.f.o();
        this.Da = a.totalItems;
        this.sa = a.numItemsToShow;
        0 != this.sa && this.Da > this.sa && (W(this.f, "show-all").onclick = this.Wa.bind(this), W(this.f, "show-n").onclick = this.Wa.bind(this));
        S(window, "load", this.bb)
    };
    u.Wa = function() {
        var a = V(this.f, "blogs");
        if (null != a) {
            for (var a = a.getElementsByTagName("li"), b = this.sa; b < this.Da; b++) {
                var c = a[b];
                c.style.display = c.style.display == r ? ka : r
            }
            a = W(this.f, "show-all");
            a.style.display = a.style.display == r ? Ma : r;
            a = W(this.f, "show-n");
            a.style.display = a.style.display == r ? Ma : r
        }
    };
    u.bb = function() {
        for (var a = 0, b = document.images.length; a < b; a++) {
            var c = document.images[a],
                d = null;
            if (d = c.getAttribute("data-lateloadsrc")) S(c, Ga, function() {
                this.style.visibility = "hidden"
            }), c.src = d
        }
    };
    B("_BlogListView", ih);

    function jh(a) {
        X.call(this, "BlogSearch", a)
    }
    D(jh, X);
    B("_BlogSearchView", jh);
    var kh = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;

    function lh(a) {
        X.call(this, "ContactForm", a);
        this.a = a.m;
        this.c = this.a.data
    }
    D(lh, X);
    B("_ContactFormView", lh);
    lh.prototype.C = function() {
        var a = N(V(this.f, xa));
        if (a) {
            var b = this;
            a.onclick = function() {
                mh(b) && nh(b)
            }
        }
    };

    function mh(a) {
        N(V(a.f, k)).className = k;
        N(V(a.f, k)).innerHTML = "";
        N(V(a.f, m)).className = m;
        N(V(a.f, m)).innerHTML = "";
        var b = document.createElement("img");
        b.src = "https://resources.blogblog.com/img/widgets/icon_contactform_cross.gif";
        b.className = "contact-form-cross";
        b.onclick = function() {
            N(V(a.f, k)).className = k;
            N(V(a.f, k)).innerHTML = ""
        };
        var c = Fb(N(V(a.f, ta)).value);
        if (!kh.test(c)) return N(V(a.f, k)).className = va, N(V(a.f, k)).innerHTML = a.c.contactFormInvalidEmailMsg, N(V(a.f, k)).appendChild(b), !1;
        c = N(V(a.f, ua)).value;
        return null == c || "" == Fb(c) ? (N(V(a.f, k)).className = va, N(V(a.f, k)).innerHTML = a.c.contactFormEmptyMessageMsg, N(V(a.f, k)).appendChild(b), !1) : !0
    }

    function nh(a) {
        N(V(a.f, xa)).className = "contact-form-button contact-form-button-submit disabled";
        N(V(a.f, xa)).disabled = !0;
        N(V(a.f, m)).className = ya;
        N(V(a.f, m)).innerHTML = a.c.contactFormMessageSendingMsg;
        var b = encodeURIComponent(Fb(N(V(a.f, wa)).value)),
            c = encodeURIComponent(Fb(N(V(a.f, ta)).value)),
            d = encodeURIComponent(Fb(N(V(a.f, ua)).value)),
            b = ["name=" + b, "email=" + c, "message=" + d, "blogID=" + encodeURIComponent(a.c.blogId)],
            c = a.c.submitUrl;
        if (window.XDomainRequest && L && !M("10")) {
            var e = new XDomainRequest;
            e.onload =
                function() {
                    var b = eval("(" + e.responseText + ")"),
                        b = eval(b.details.emailSentStatus);
                    oh(a, b)
                };
            e.open("post", c, !0);
            e.send(b.join("&"))
        } else hf(c, a.ia.bind(a), "POST", b.join("&"))
    }
    lh.prototype.ia = function(a) {
        a = a.target;
        var b = eval("(" + sf(a) + ")"),
            b = eval(b.details.emailSentStatus);
        oh(this, rf(a) && b)
    };

    function oh(a, b) {
        N(V(a.f, m)).className = ya;
        b ? (N(V(a.f, wa)).value = "", N(V(a.f, ta)).value = "", N(V(a.f, ua)).value = "", N(V(a.f, m)).innerHTML = a.c.contactFormMessageSentMsg) : N(V(a.f, m)).innerHTML = a.c.contactFormMessageNotSentMsg;
        setTimeout(function() {
            N(V(a.f, m)).className = m;
            N(V(a.f, m)).innerHTML = "";
            N(V(a.f, xa)).className = "contact-form-button contact-form-button-submit";
            N(V(a.f, xa)).removeAttribute("disabled")
        }, 3E3)
    };

    function ph(a) {
        X.call(this, "CustomSearch", a)
    }
    D(ph, X);
    ph.prototype.C = function() {
        var a = new Rf;
        google.load("search", "1", {
            callback: A(this.a, this),
            language: a.o("blog.locale")
        });
        a = document.getElementById(cb);
        if (!a) {
            a = document.createElement(ca);
            a.id = cb;
            var b = document.createElement("A");
            b.name = "uds-search-results";
            a.appendChild(b);
            b = document.createElement(ca);
            b.id = db;
            a.appendChild(b);
            b = document.createElement(ca);
            b.id = bb;
            b.className = "gsc-clear-button";
            b.innerHTML = "&nbsp;";
            a.appendChild(b);
            (b = document.getElementById("main")) || (b = document.getElementsByTagName("body")[0]);
            b.insertBefore(a, b.firstChild)
        }
    };
    ph.prototype.a = function() {
        var a = new GSearchControl,
            b = this.f.o();
        if (null != V(this.f, "form")) {
            var c = {
                _enableApiary_: !0
            };
            if (b.includeBlog) {
                var d = (new google.search.CustomSearchControl({
                    crefUrl: b.blogUrl + "cse_blog.xml"
                }, c)).getWebSearcher();
                d.setUserDefinedLabel(b.thisBlogMsg);
                a.addSearcher(d)
            }
            b.includePostLinks && (b.cse_ua ? d = (new google.search.CustomSearchControl({
                    crefUrl: b.blogUrl + za
                }, c)).getWebSearcher() : (d = new GwebSearch, d.setSiteRestriction({
                    crefUrl: b.blogUrl + za
                })), d.setUserDefinedLabel(b.linkedFromHereMsg),
                a.addSearcher(d));
            for (var d = b.linkLists, e = 0; e < d.length; e++) {
                var f;
                b.cse_ua ? f = (new google.search.CustomSearchControl({
                    crefUrl: b.blogUrl + za
                }, c)).getWebSearcher() : f = new GwebSearch;
                f.setSiteRestriction({
                    crefUrl: b.blogUrl + za
                }, d[e].id.toLowerCase());
                f.setUserDefinedLabel(d[e].title);
                a.addSearcher(f)
            }
            b.includeWeb && (f = new GwebSearch, b.cse_ua ? f = (new google.search.CustomSearchControl({
                crefUrl: b.blogUrl + "cse_web.xml"
            }, c)).getWebSearcher() : f = new GwebSearch, f.setUserDefinedLabel(b.theWebMsg), a.addSearcher(f));
            b = new GSearchForm(!1, W(this.f, "form"));
            c = new GdrawOptions;
            c.setDrawMode(GSearchControl.DRAW_MODE_TABBED);
            c.setInput(b.input);
            a.setNoResultsString(GSearchControl.NO_RESULTS_DEFAULT_STRING);
            a.draw(document.getElementById(db), c);
            b.input.onkeyup = b.input.onpaste = null;
            b.setOnSubmitCallback(null, A(qh, null, b, a));
            document.getElementById(bb).onclick = A(rh, null, a);
            sh(!1)
        }
    };

    function qh(a, b) {
        a = a.input.value;
        if (!a) return rh(b), !1;
        b.execute(a);
        sh(!0);
        b = window.location.href;
        a = b.indexOf("#");
        0 <= a && (b = b.substring(0, a));
        window.location.href = b + "#uds-search-results";
        return !0
    }

    function rh(a) {
        a.clearAllResults();
        sh(!1)
    }

    function sh(a) {
        document.getElementById(bb).style.display = a ? ka : r
    }
    B("_CustomSearchView", ph);

    function th(a) {
        X.call(this, "Example", a)
    }
    D(th, X);
    B("_ExampleView", th);

    function uh(a) {
        X.call(this, "FeaturedPost", a);
        this.a = a.m;
        this.a.data && (this.b = (new Rf).o(la))
    }
    D(uh, X);
    uh.prototype.C = function() {
        var a = document.getElementById(this.a.b);
        a && gh(a, this.b)
    };
    B("_FeaturedPostView", uh);
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    function vh(a, b) {
        this.i = [];
        this.F = a;
        this.M = b || null;
        this.g = this.a = !1;
        this.c = void 0;
        this.s = this.w = this.j = !1;
        this.h = 0;
        this.b = null;
        this.l = 0
    }
    vh.prototype.cancel = function(a) {
        if (this.a) this.c instanceof vh && this.c.cancel();
        else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.l--, 0 >= b.l && b.cancel())
            }
            this.F ? this.F.call(this.M, this) : this.s = !0;
            this.a || wh(this, new xh)
        }
    };
    vh.prototype.L = function(a, b) {
        this.j = !1;
        yh(this, a, b)
    };

    function yh(a, b, c) {
        a.a = !0;
        a.c = c;
        a.g = !b;
        zh(a)
    }

    function Ah(a) {
        if (a.a) {
            if (!a.s) throw new Bh;
            a.s = !1
        }
    }
    vh.prototype.H = function(a) {
        Ah(this);
        Ch(a);
        yh(this, !0, a)
    };

    function wh(a, b) {
        Ah(a);
        Ch(b);
        yh(a, !1, b)
    }

    function Ch(a) {
        F(!(a instanceof vh), "An execution sequence may not be initiated with a blocking Deferred.")
    }

    function Dh(a, b, c, d) {
        F(!a.w, "Blocking Deferreds can not be re-used");
        a.i.push([b, c, d]);
        a.a && zh(a)
    }
    vh.prototype.then = function(a, b, c) {
        var d, e, f = new je(function(a, b) {
            d = a;
            e = b
        });
        Dh(this, d, function(a) {
            a instanceof xh ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    };
    he(vh);

    function Eh(a) {
        return $b(a.i, function(a) {
            return vb(a[1])
        })
    }

    function zh(a) {
        if (a.h && a.a && Eh(a)) {
            var b = a.h,
                c = Fh[b];
            c && (v.clearTimeout(c.P), delete Fh[b]);
            a.h = 0
        }
        a.b && (a.b.l--, delete a.b);
        for (var b = a.c, d = c = !1; a.i.length && !a.j;) {
            var e = a.i.shift(),
                f = e[0],
                h = e[1],
                e = e[2];
            if (f = a.g ? h : f) try {
                var l = f.call(e || a.M, b);
                w(l) && (a.g = a.g && (l == b || l instanceof Error), a.c = b = l);
                if (ie(b) || typeof v.Promise === p && b instanceof v.Promise) d = !0, a.j = !0
            } catch (q) {
                b = q, a.g = !0, Eh(a) || (c = !0)
            }
        }
        a.c = b;
        d && (l = A(a.L, a, !0), d = A(a.L, a, !1), b instanceof vh ? (Dh(b, l, d), b.w = !0) : b.then(l, d));
        c && (b = new Gh(b), Fh[b.P] =
            b, a.h = b.P)
    }

    function Bh() {
        E.call(this)
    }
    D(Bh, E);
    Bh.prototype.message = "Deferred has already fired";
    Bh.prototype.name = "AlreadyCalledError";

    function xh() {
        E.call(this)
    }
    D(xh, E);
    xh.prototype.message = "Deferred was canceled";
    xh.prototype.name = "CanceledError";

    function Gh(a) {
        this.P = v.setTimeout(A(this.b, this), 0);
        this.a = a
    }
    Gh.prototype.b = function() {
        F(Fh[this.P], "Cannot throw an error that is not scheduled.");
        delete Fh[this.P];
        throw this.a;
    };
    var Fh = {};

    function Hh(a, b) {
        var c = b || {};
        b = c.document || document;
        var d;
        a instanceof Ac && a.constructor === Ac && a.b === Bc ? d = a.a : (Tb("expected object of type TrustedResourceUrl, got '" + a + "' of type " + sb(a)), d = "type_error:TrustedResourceUrl");
        var e = document.createElement(ea);
        a = {
            Va: e,
            T: void 0
        };
        var f = new vh(Ih, a),
            h = null,
            l = null != c.timeout ? c.timeout : 5E3;
        0 < l && (h = window.setTimeout(function() {
            Jh(e, !0);
            wh(f, new Kh(1, "Timeout reached for loading script " + d))
        }, l), a.T = h);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" !=
                e.readyState && e.readyState != g || (Jh(e, c.Fb || !1, h), f.H(null))
        };
        e.onerror = function() {
            Jh(e, !0, h);
            wh(f, new Kh(0, "Error while loading script " + d))
        };
        a = c.attributes || {};
        wc(a, {
            type: $a,
            charset: "UTF-8",
            src: d
        });
        Wc(e, a);
        Lh(b).appendChild(e);
        return f
    }

    function Lh(a) {
        var b;
        return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
    }

    function Ih() {
        if (this && this.Va) {
            var a = this.Va;
            a && a.tagName == ea && Jh(a, !0, this.T)
        }
    }

    function Jh(a, b, c) {
        null != c && v.clearTimeout(c);
        a.onload = pb;
        a.onerror = pb;
        a.onreadystatechange = pb;
        b && window.setTimeout(function() {
            bd(a)
        }, 0)
    }

    function Kh(a, b) {
        a = "Jsloader error (code #" + a + ")";
        b && (a += ": " + b);
        E.call(this, a)
    }
    D(Kh, E);

    function Mh(a, b) {
        this.b = new Y(a);
        this.a = b ? b : "callback";
        this.T = 5E3
    }
    var Nh = 0;

    function Oh(a, b, c, d) {
        b = b || null;
        var e = "_" + (Nh++).toString(36) + Cb().toString(36),
            f = "_callbacks___" + e,
            h = new Y(a.b);
        if (b)
            for (var l in b)
                if (!b.hasOwnProperty || b.hasOwnProperty(l)) {
                    var q = h,
                        x = l,
                        C = b[l];
                    y(C) || (C = [String(C)]);
                    bh(q.a, x, C)
                }
        c && (v[f] = Ph(e, c), c = a.a, y(f) || (f = [String(f)]), bh(h.a, c, f));
        a = {
            timeout: a.T,
            Fb: !0
        };
        c = new Ac;
        c.a = h.toString();
        h = Hh(c, a);
        Dh(h, null, Qh(e, b, d), void 0)
    }
    Mh.prototype.cancel = function(a) {
        a && (a.Ib && a.Ib.cancel(), a.P && Rh(a.P, !1))
    };

    function Qh(a, b, c) {
        return function() {
            Rh(a, !1);
            c && c(b)
        }
    }

    function Ph(a, b) {
        return function(c) {
            Rh(a, !0);
            b.apply(void 0, arguments)
        }
    }

    function Rh(a, b) {
        a = "_callbacks___" + a;
        if (v[a])
            if (b) try {
                delete v[a]
            } catch (c) {
                v[a] = void 0
            } else v[a] = pb
    };

    function Sh(a) {
        X.call(this, "Feed", a)
    }
    D(Sh, X);
    Sh.prototype.J = function(a, b) {
        "getFeed" == a ? (this.a.c = b, Th(this.a)) : Sh.u.J.call(this, a, b)
    };
    Sh.prototype.C = function() {
        if (this.b = V(this.f, "feedItemListDisplay")) {
            var a = this.f.o();
            this.a = new Uh(a.feedUrl, this.b, {
                numItemsShow: a.numItemsShow,
                showItemAuthor: a.showItemAuthor,
                showItemDate: a.showItemDate,
                linkTarget: a.openLinksInNewWindow ? "_blank" : "_self",
                useFeedWidgetServ: "true" === a.useFeedWidgetServ
            });
            "true" === a.useFeedWidgetServ ? Mf(this.f, "getFeed", null, null, da) : Th(this.a)
        }
    };
    var Vh = {
        moduleTitle: null,
        feedUrl: function(a) {
            a = a.replace(/^\s+/, "").replace(/\s+$/, "");
            if (0 == a.length) return LayoutsMessages.FIELD_CANNOT_BE_BLANK
        },
        numItemsShow: function(a, b) {
            return function(c) {
                c = parseInt(c, 10);
                if (isNaN(c)) return LayoutsMessages.MUST_SPECIFY_A_NUMBER;
                if (c < a) return LayoutsMessages.NUMBER_TOO_SMALL + " " + a;
                if (c > b) return LayoutsMessages.NUMBER_TOO_LARGE + " " + b
            }
        }(1, 5),
        showItemDate: null,
        showItemAuthor: null,
        securityToken: null,
        openLinksInNewWindow: null
    };

    function Uh(a, b, c) {
        this.j = a;
        this.b = b;
        this.a = c
    }

    function Th(a) {
        if (a.a.useFeedWidgetServ) "ok" == a.c.status ? Wh(a, a.c.feed) : Xh(a);
        else {
            var b = new Mh("//ajax.googleapis.com/ajax/services/feed/load");
            b.T = -1;
            Oh(b, {
                q: a.j,
                num: a.a.numItemsShow,
                output: "json",
                v: "1.0"
            }, A(a.g, a))
        }
    }
    Uh.prototype.g = function(a) {
        200 == a.responseStatus ? Wh(this, a.responseData.feed) : Xh(this)
    };

    function Wh(a, b) {
        ad(a.b);
        var c = document.createElement("ul");
        a.b.appendChild(c);
        for (var d = Math.min(b.entries.length, a.a.numItemsShow), e = 0; e < d; e++) {
            var f = b.entries[e],
                h = document.createElement("li");
            c.appendChild(h);
            var l;
            (l = a.a.previewMode) || (l = (new Y(f.link)).c, l = !("" == l || "http" == l || "https" == l));
            l = l ? R("A", {
                href: "javascript:void(0);"
            }, f.title) : R("A", {
                href: f.link
            }, f.title);
            l.target = a.a.linkTarget;
            h.appendChild(R(fa, {
                "class": "item-title"
            }, l));
            a.a.showItemDate && (l = R(fa, {
                    "class": "item-date"
                }, "\u00a0-\u00a0" +
                (new Date(f.publishedDate)).toLocaleDateString()), h.appendChild(l));
            a.a.showItemAuthor && (f = R(fa, {
                "class": "item-author"
            }, "\u00a0-\u00a0" + f.author), h.appendChild(f))
        }
        a.i && a.i(b)
    }

    function Xh(a) {
        ad(a.b);
        a.b.appendChild(R(fa, null, "Error loading feed."));
        a.h && a.h()
    }
    B("_FeedView", Sh);
    Sh._setConfigurationOptions = function() {
        var a;
        Vh.security_token = null;
        Vh.visible = null;
        a || (a = "config");
        var b = document.forms[a].widgetId.value,
            c = document.forms[a].widgetType.value;
        a = document.forms[a];
        var d = !0,
            e = {},
            f;
        for (f in Vh) {
            var h = Pf(a[f]);
            if (w(h)) {
                var l = Vh[f],
                    q = Qf(f);
                q && (ad(q), q.className = "errorbox-good");
                l && (l = l(h)) && (Nf(f, l), d = !1);
                e[f] = h
            }
        }
        d && J.Hb(e, b, c)
    };

    function Yh(a) {
        X.call(this, Yh.a, a)
    }
    D(Yh, X);
    Yh.a = "FollowByEmail";
    B("_FollowByEmailView", Yh);

    function Zh(a) {
        X.call(this, "Followers", a);
        this.a = a.m
    }
    D(Zh, X);

    function $h(a) {
        window.open(a, "_blank", "height=600, width=640, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, directories=no, status=no")
    }
    Zh.prototype.J = function(a, b) {
        "getFacepile" == a ? (ai(this, b), bi(this), ci(this, b)) : Zh.u.J.call(this, a, b)
    };
    Zh.prototype.C = function() {
        var a;
        a: {
            a = this.a.data;
            for (var b in a) {
                a = !1;
                break a
            }
            a = !0
        }
        a || (bi(this), ci(this, this.a.data))
    };

    function ai(a, b) {
        a = Q(Ka, a.a.a);
        b = ic(b.followers, P("a", "follower-link", a));
        for (a = 0; a < b.length; a++) {
            var c = b[a][0],
                d = b[a][1];
            d.setAttribute(Ba, c.viewUrl);
            d.onclick = function() {
                return !1
            };
            d = Q("follower-thumbnail", d);
            d.setAttribute("src", c.thumbnailUrl);
            d.setAttribute("title", c.displayName)
        }
    }

    function bi(a) {
        var b = Q(Ka, a.a.a);
        if (b)
            for (var b = P("a", "follower-link", b), c = 0; c < b.length; c++) {
                var d = b[c];
                d.getAttribute(Ba) && (d.onclick = A($h, a, d.getAttribute(Ba)))
            }
    }

    function ci(a, b) {
        var c = Q("followers-next-link", a.a.a);
        c && (b.nextTimestamp ? (c.style.display = Ma, c = Q("next-page-link", c), c.href = "#", c.onclick = function() {
            return !1
        }, Nd(c), S(c, na, A(Zh.prototype.b, a, b.nextTimestamp))) : c.style.display = r)
    }
    Zh.prototype.b = function(a) {
        Mf(this.f, "getFacepile", {
            fcMT: a
        }, null, da)
    };
    B("_FollowersView", Zh);

    function di(a) {
        X.call(this, "Gadget", a)
    }
    D(di, X);
    B("_GadgetView", di);

    function ei(a) {
        X.call(this, ei.a, a)
    }
    D(ei, X);
    ei.a = "Header";
    B("_HeaderView", ei);

    function fi(a, b) {
        X.call(this, b, a)
    }
    D(fi, X);

    function gi(a) {
        X.call(this, "Text", a)
    }
    D(gi, fi);

    function hi(a) {
        X.call(this, "HTML", a)
    }
    D(hi, fi);
    B("_TextView", gi);
    B("_HTMLView", hi);

    function ii(a) {
        X.call(this, "Image", a);
        this.a = a.m
    }
    D(ii, X);
    ii.prototype.C = function() {
        if (1 == this.a.data.resize) {
            var a = V(this.f, "img"),
                b = this.a.a;
            if (a && b) {
                if (document.defaultView) b = parseInt(document.defaultView.getComputedStyle(b, null).width, 10);
                else if (b.currentStyle) a.style.display = r, b = b.offsetWidth, a.style.display = "";
                else return;
                a.width > b && (a.height = Math.round(b / a.width * a.height), a.width = b);
                a.style.visibility = eb
            }
        }
    };
    B("_ImageView", ii);

    function ji(a) {
        X.call(this, "Label", a)
    }
    D(ji, X);
    B("_LabelView", ji);

    function ki(a) {
        X.call(this, "TextList", a)
    }
    D(ki, X);
    B("_TextListView", ki);

    function li(a) {
        X.call(this, "LinkList", a)
    }
    D(li, X);
    B("_LinkListView", li);

    function mi(a) {
        X.call(this, "BloggerButton", a)
    }
    D(mi, X);
    B("_BloggerButtonView", mi);

    function ni(a) {
        X.call(this, "Navbar", a)
    }
    D(ni, X);
    B("_NavbarView", ni);

    function oi(a) {
        X.call(this, "PageList", a)
    }
    D(oi, X);
    oi.prototype.ha = function() {
        return "PageList"
    };
    oi.prototype.C = function() {
        if (0 != this.f.o().mobile) {
            var a = V(this.f, "select");
            a && (a.onchange = function(a) {
                a = a || window.event;
                a = a.target || a.srcElement;
                if (a = a.options[a.selectedIndex].value) window.location = a
            })
        }
    };
    var _PageListView = oi;
    B("_PageListView", oi);

    function pi(a) {
        X.call(this, pi.a, a)
    }
    D(pi, X);
    pi.a = "PlusBadge";
    B("_PlusBadgeView", pi);

    function qi(a) {
        X.call(this, qi.a, a)
    }
    D(qi, X);
    qi.a = "PlusFollowers";
    B("_PlusFollowersView", qi);

    function ri(a) {
        X.call(this, ri.a, a)
    }
    D(ri, X);
    ri.a = "PlusOne";
    B("_PlusOneView", ri);

    function si(a) {
        X.call(this, "Poll", a);
        this.c = this.b = this.a = null;
        if (a = this.f.o()) this.a = "poll-widget" + a.pollid, this.b = a.iframeurl, this.c = S(window, "message", this.g, !1, this), a = document.getElementsByName(this.a)[0], void 0 != a && (a.src = this.b)
    }
    D(si, X);
    si.prototype.g = function(a) {
        var b = document.getElementsByName(this.a)[0];
        void 0 != b && (a = a.b, a.source === b.contentWindow && 0 == this.b.lastIndexOf(a.origin, 0) && (a = a.data, !ub(a) || 0 > a || (b.height = a + "px", Md(this.c))))
    };
    B("_PollView", si);

    function ti(a) {
        X.call(this, "PopularPosts", a)
    }
    D(ti, X);
    B("_PopularPostsView", ti);

    function ui(a) {
        X.call(this, "Profile", a);
        this.a = a.m
    }
    D(ui, X);
    ui.prototype.C = function() {
        this.a && this.a.a && 0 == this.f.o().isDisplayable && (this.a.a.style.display = r)
    };
    B("_ProfileView", ui);

    function vi(a) {
        X.call(this, "RecentPosts", a)
    }
    D(vi, X);
    B("_RecentPostsView", vi);

    function wi(a) {
        X.call(this, wi.a, a)
    }
    D(wi, X);
    wi.a = "Sharing";
    B("_SharingView", wi);

    function xi(a) {
        X.call(this, "Slideshow", a)
    }
    D(xi, X);
    xi.prototype.C = function() {
        "http:" == window.location.protocol && google.load("feeds", "1", {
            callback: this.a.bind(this)
        })
    };
    xi.prototype.a = function() {
        if (V(this.f, "slideshow")) {
            var a = W(this.f, "slideshow"),
                b = this.f.o().computedFeed,
                c = {
                    linkTarget: this.f.o().linkNewWindow ? google.feeds.LINK_TARGET_BLANK : google.feeds.LINK_TARGET_SELF,
                    scaleImages: !0,
                    fullControlPanel: !0,
                    fullControlPanelSmallIcons: !0,
                    pauseOnHover: !1,
                    displayTime: this.f.o().speed
                };
            0 == b.indexOf("http://api.flickr.com") && (c.thumbnailUrlResolver = yi);
            this.f.o().randomizeFeed && (c.feedLoadCallback = zi);
            new GFslideShow(b, a, c)
        }
    };

    function yi(a) {
        var b = google.feeds.getElementsByTagNameNS(a.xmlNode, "http://search.yahoo.com/mrss/", "thumbnail");
        a = null;
        b.length && (b = b[0], a = b.getAttribute("url"), a || (a = b.firstChild.nodeValue), a = a.replace(/^(.*)_[st]\.([a-zA-Z]+)$/, "$1_m.$2"));
        return a
    }

    function zi(a) {
        a = a.feed.entries;
        for (var b = a.length - 1; 0 < b; --b) {
            var c = Math.floor(Math.random() * (b + 1)),
                d = a[b];
            a[b] = a[c];
            a[c] = d
        }
    }
    B("_SlideshowView", xi);

    function Ai(a) {
        X.call(this, "Stats", a)
    }
    D(Ai, X);
    Ai.prototype.C = function() {
        null != V(this.f, "totalCount") && hf(this.f.o().statsUrl, A(this.g, this))
    };
    Ai.prototype.g = function(a) {
        a = a.target;
        if (rf(a)) {
            a = a.a ? Se(a.a.responseText) : void 0;
            var b = this.f.o(),
                c = V(this.f, "totalCount");
            if (null != c) {
                if (b.showGraphicalCounter) {
                    this.c = a.total;
                    for (var d = "" + a.total, e = 0; e < d.length; e++) c.appendChild(R(fa, {
                        "class": "digit stage-0"
                    }, R("STRONG", null, document.createTextNode(String(d.charAt(e)))), R(fa, {
                        "class": "blind-plate"
                    })));
                    b.showAnimatedCounter && (this.b = new ze(a.nextTickMs), S(this.b, "tick", A(this.i, this, c)), this.b.start())
                } else {
                    d = a.total;
                    if (isNaN(d) || 0 > d) d = "NaN";
                    else {
                        for (var d =
                                d.toString(), e = [], f = 0, h = d.length; f < h; f++) 0 < f && 0 == f % 3 && e.push(","), e.push(d.charAt(h - 1 - f));
                        d = e.reverse().join("")
                    }
                    ed(c, d)
                }
                b.showSparkline && (W(this.f, "sparkline").src = a.sparklineUrl);
                W(this.f, "content").style.display = ""
            }
        }
    };
    Ai.prototype.i = function(a) {
        if (Bi(this.c + 1) > Bi(this.c)) Nd(this.b), Ae(this.b);
        else {
            this.c++;
            for (var b = "" + this.c, c = 0; c < b.length; c++) {
                var d = a.childNodes[c],
                    e = b.charAt(c),
                    f = d.firstChild;
                if (Uc && null !== f && "innerText" in f) f = f.innerText.replace(/(\r\n|\r|\n)/g, "\n");
                else {
                    var h = [];
                    hd(f, h, !0);
                    f = h.join("")
                }
                f = f.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
                f = f.replace(/\u200B/g, "");
                Uc || (f = f.replace(/ +/g, " "));
                " " != f && (f = f.replace(/^\s*/, ""));
                f != e && (ed(d.firstChild, e), Be(A(this.a, this, d, 1), 50), Be(A(this.a, this, d,
                    2), 100), Be(A(this.a, this, d, 3), 150), Be(A(this.a, this, d, 0), 200))
            }
        }
    };

    function Bi(a) {
        return 0 == a ? 1 : Math.floor(Math.log(a) / Math.LN10) + 1
    }
    Ai.prototype.a = function(a, b) {
        var c = "stage-" + (0 != b ? b - 1 : 3);
        b = "stage-" + b;
        var d = jc(a);
        z(c) ? dc(d, c) : y(c) && (d = mc(d, c));
        z(b) && !G(d, b) ? d.push(b) : y(b) && kc(d, b);
        a.className = d.join(" ")
    };
    B("_StatsView", Ai);

    function Ci(a) {
        X.call(this, "Subscribe", a)
    }
    D(Ci, X);
    var Di = null,
        Ei = null;

    function Fi(a, b) {
        a.style.zIndex = 1 == b ? "20" : ""
    }

    function Gi(a, b) {
        return a ? a.className && -1 != a.className.search(b) ? a : Gi(a.parentNode, b) : null
    }

    function Hi(a, b) {
        Fi(a.parentNode, b);
        if (L) {
            var c = Gi(a, "section");
            c && (c.parentNode.className && -1 != c.parentNode.className.search("columns-cell") && Fi(c.parentNode.parentNode.parentNode.parentNode, b), Fi(c, b));
            (a = Gi(a, "widget Subscribe")) && Fi(a.parentNode.parentNode, b)
        }
    }
    B("_SubscribeView", Ci);
    B("_SW_toggleReaderList", function(a, b) {
        var c = document.getElementById(ga + b),
            d = document.getElementById(ha + b);
        a || (a = window.event);
        a.cancelBubble = !0;
        a.stopPropagation && a.stopPropagation();
        var e = document.onclick;
        null != Di && Di != c && (Hi(Di, !1), Di.style.display = r, Ei.style.visibility = eb);
        c.style.display == r ? (Hi(c, !0), c.style.display = "", Di = c, Ei = d, d.style.visibility = "hidden", document.onclick = function() {
            c.style.display = r;
            Hi(c, !1);
            d.style.visibility = eb;
            e && (document.onclick = e)
        }) : (c.style.display = r, Hi(c, !1), d.style.visibility =
            eb, e && (document.onclick = e));
        return !1
    });
    B("_SW_hideReaderList", function(a) {
        var b = document.getElementById(ga + a);
        a = document.getElementById(ha + a);
        b.style.display = r;
        Hi(b, !1);
        a.style.visibility = eb
    });

    function Ii(a) {
        X.call(this, Ii.a, a)
    }
    D(Ii, X);
    Ii.a = "Translate";
    B("_TranslateView", Ii);

    function Ji(a) {
        X.call(this, "VideoBar", a)
    }
    D(Ji, X);
    Ji.prototype.C = function() {
        var a = this.f;
        V(a, "bar") && (gapi.load("client", A(this.a, this)), a = W(a, "bar"), H(a, "videoBar-container"))
    };
    Ji.prototype.a = function() {
        var a = this.f.o()["api-key"];
        if (gapi.client.youtube) {
            var a = W(this.f, "bar"),
                b = this.f.o().format,
                c, d, e = this.f.o().expression;
            "VERTICAL" == b ? (c = !1, d = YTvideoBar.THUMBNAILS_MEDIUM, a.style.width = "110px") : "HORIZONTAL-SMALL" == b ? (c = !0, d = YTvideoBar.THUMBNAILS_SMALL, a.style.width = "232px") : "HORIZONTAL-MEDIUM" == b && (c = !0, d = YTvideoBar.THUMBNAILS_MEDIUM, a.style.width = "432px");
            new YTvideoBar(a, {
                horizontal: c,
                autoExecuteList: {
                    cycleTime: YTvideoBar.CYCLE_TIME_LONG,
                    cycleMode: YTvideoBar.a,
                    executeList: e.split(/,/)
                },
                thumbnailSize: d
            })
        } else gapi.client.setApiKey(a), gapi.client.load("youtube", "v3", A(this.a, this))
    };
    B("_VideoBarView", Ji);

    function Z(a) {
        X.call(this, Z.a, a)
    }
    D(Z, X);
    Z.a = "Wikipedia";
    B("_WikipediaView", Z);
    Z.g = 5;
    Z.b = "";
    Z.c = "en";
    u = Z.prototype;
    u.fa = !1;
    u.ba = !1;
    u.C = function() {
        var a = V(this.f, "wikipedia-search-form");
        if (a) {
            Z.b = this.f.m.data.language || "en";
            var b = this;
            S(a, "submit", function(a) {
                Z.prototype.ba || (Z.prototype.ba = !0, Ki(b));
                a.preventDefault()
            })
        }
    };

    function Ki(a) {
        ad(N(V(a.f, ib)));
        ad(N(V(a.f, hb)));
        var b = Fb(N(V(a.f, gb)).value);
        b ? (b = Vg(Vg(Vg(Kg(new Y(La + (a.fa && Z.c || Z.b) + ba), "/w/api.php"), "action", "opensearch"), "search", b), "format", "json"), b = new Mh(new Y(b)), Oh(b, {
            callback: "?"
        }, A(a.$b, a), A(a.Zb, a))) : (N(V(a.f, jb)).style.display = r, N(V(a.f, ib)).innerHTML = a.f.m.data.enterTextMsg, Z.prototype.ba = !1)
    }
    u.$b = function(a) {
        var b = V(this.f, jb),
            c = V(this.f, ib),
            d = Fb(N(V(this.f, gb)).value),
            e = [];
        a = a[1];
        var f = a.length;
        if (0 == f) b = N(b), b.style.display = ka, N(c).innerHTML = this.f.m.data.noResultsFoundMsg, Z.prototype.ba = !1;
        else {
            for (var h = 0; h < f; h++) e.push('<div id="wikipedia-search-result-link"><a target="_blank" href=' + (La + (this.fa && Z.c || Z.b) + ".wikipedia.org/wiki/" + a[h].replace(/ /g, "_")) + ">" + a[h] + "</a></div>");
            if (f > Z.g) {
                for (h = 0; h < Z.g; h++) N(c).innerHTML += e[h];
                N(V(this.f, hb)).style.display = ka;
                c = '<a target="_blank" href=' +
                    Vg(Vg(Vg(Vg(Kg(new Y(La + (this.fa && Z.c || Z.b) + ba), "/w/index.php"), "title", "Special:Search"), "profile", "default"), "search", d), "fulltext", "Search") + ">" + this.f.m.data.moreMsg + "</a>";
                N(V(this.f, hb)).innerHTML = c
            } else
                for (h = 0; h < f; h++) N(c).innerHTML += e[h];
            b = N(b);
            b.style.display = ka;
            this.fa = Z.prototype.ba = !1
        }
    };
    u.Zb = function() {
        "en" != Z.b ? (this.fa = !0, Ki(this)) : (N(V(this.f, jb)).style.display = r, N(V(this.f, ib)).innerHTML = this.f.m.data.fetchingErrorMsg, Z.prototype.ba = !1)
    };
    if (window.jstiming) {
        window.jstiming.Ka = {};
        window.jstiming.ac = 1;
        var Li = function(a, b, c) {
                var d = a.t[b],
                    e = a.t.start;
                if (d && (e || c)) return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e)
            },
            Mi = function(a, b, c) {
                var d = "";
                window.jstiming.srt && (d += "&srt=" + window.jstiming.srt, delete window.jstiming.srt);
                window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt, delete window.jstiming.pt);
                try {
                    window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" +
                        window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
                } catch (O) {}
                var e = window.chrome;
                if (e && (e = e.loadTimes)) {
                    e().wasFetchedViaSpdy && (d += "&p=s");
                    if (e().wasNpnNegotiated) {
                        var d = d + "&npn=1",
                            f = e().npnNegotiatedProtocol;
                        f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
                    }
                    e().wasAlternateProtocolAvailable && (d += "&apa=1")
                }
                var h = a.t,
                    l = h.start,
                    e = [],
                    f = [],
                    q;
                for (q in h)
                    if ("start" != q && 0 != q.indexOf("_")) {
                        var x = h[q][1];
                        x ? h[x] && f.push(q + "." + Li(a, q, h[x][0])) : l && e.push(q + "." + Li(a,
                            q))
                    }
                delete h.start;
                if (b)
                    for (var C in b) d += "&" + C + "=" + b[C];
                (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
                return [b, "?v=3", "&s=" + (window.jstiming.sn || "blogger") + aa, a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
            },
            Ni = function(a, b, c) {
                a = Mi(a, b, c);
                if (!a) return "";
                b = new Image;
                var d = window.jstiming.ac++;
                window.jstiming.Ka[d] = b;
                b.onload = b.onerror = function() {
                    window.jstiming && delete window.jstiming.Ka[d]
                };
                b.src = a;
                b = null;
                return a
            };
        window.jstiming.report = function(a, b, c) {
            if ("prerender" == document.webkitVisibilityState) {
                var d = !1,
                    e = function() {
                        if (!d) {
                            b ? b.prerender = "1" : b = {
                                prerender: "1"
                            };
                            var f;
                            "prerender" == document.webkitVisibilityState ? f = !1 : (Ni(a, b, c), f = !0);
                            f && (d = !0, document.removeEventListener(fb, e, !1))
                        }
                    };
                document.addEventListener(fb, e, !1);
                return ""
            }
            return Ni(a, b, c)
        }
    };
})()
