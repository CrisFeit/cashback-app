(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23bb3219"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(n(t))}},"13d5":function(t,e,r){"use strict";var n=r("23e7"),i=r("d58f").left,o=r("a640"),a=r("ae40"),c=o("reduce"),s=a("reduce",{1:0});n({target:"Array",proto:!0,forced:!c||!s},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},2909:function(t,e,r){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("e260"),r("d3b7"),r("25f0"),r("3ca3"),r("ddb0");function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){return n(t)||i(t)||o()}r.d(e,"a",(function(){return a}))},"462a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main orders"},[r("h3",{staticClass:"page-title"},[t._v("Minhas Compras")]),r("section",{staticClass:"info"},[r("p",{staticClass:"info-text"},[t._v("Receba 10% de cashback do valor total de cada compra")]),r("div",{staticClass:"loading-wrap"},[r("div",{class:{"loading-bar":!0,"-ready":t.loading}})]),r("div",{staticClass:"cashback"},[r("span",{staticClass:"cashback-text"},[t._v("Cashback")]),r("span",{staticClass:"cashback-value"},[t._v(t._s(t._f("precify")(t.accumulated)))])])]),t.orders.length>0?r("section",{staticClass:"orders-shelf"},t._l(t.orders,(function(e){return r("div",{staticClass:"orders-card"},[r("div",{staticClass:"order-title"},[t._v("Compra Realizada em"),r("div",{staticClass:"orders-date"},[t._v(t._s(e.data.date.day))])]),r("div",{staticClass:"orders-cod"},[t._v("Código "),r("span",{staticClass:"text"},[t._v(" "+t._s(e.id))])]),r("div",{staticClass:"left"},[r("div",{staticClass:"orders-item"},[t._v("Total "),r("span",{staticClass:"text"},[t._v(" "+t._s(t._f("precify")(e.data.total)))])]),r("div",{staticClass:"orders-item"},[t._v("Cashback"),r("span",{staticClass:"text"},[t._v(" "+t._s(t._f("precify")(e.data.cashback)))])]),r("div",{staticClass:"orders-item"},[t._v("Retorno "),r("span",{staticClass:"text"},[t._v(" "+t._s(e.data.percent))])])]),r("div",{staticClass:"right"},[r("div",{staticClass:"orders-item"},[t._v("Status "),r("span",{staticClass:"order-status"},[t._v(" "+t._s(e.data.status))])]),r("button",{staticClass:"order-button cancel",class:{"-disabled":t.loading},on:{click:function(r){return t.deleteOrder(e.id)}}},[t._v("cancelar")])])])})),0):t._e()])},i=[],o=(r("d81d"),r("13d5"),r("5530")),a=r("2909"),c=r("3e8a"),s=r("2f62"),f={data:function(){return{orders:[],loading:!1}},filters:{precify:function(t){return t?t.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}):t}},computed:{accumulated:function(){return this.orders.length?Object(a["a"])(this.orders).reduce((function(t,e){return t+e.data.cashback}),0):0}},methods:Object(o["a"])({},Object(s["b"])(["storeOrders"]),{deleteOrder:function(t){var e=this;this.loading=!0,c["b"].collection("orders").doc(t).delete().then((function(){e.fetchOrders(),e.loading=!1}))},fetchOrders:function(){var t=this,e=c["a"].currentUser.uid;c["b"].collection("orders").where("user_id","==",e).onSnapshot((function(e){t.orders=e.docChanges().map((function(e){return t.storeOrders(),{id:e.doc.id,data:e.doc.data()}}))}))}}),created:function(){this.fetchOrders()}},u=f,d=r("2877"),l=Object(d["a"])(u,n,i,!1,null,null,null);e["default"]=l.exports},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),a=r("ae40"),c=o("filter"),s=a("filter");n({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),a=r("e95a"),c=r("50c4"),s=r("8418"),f=r("35a1");t.exports=function(t){var e,r,u,d,l,b,v=i(t),p="function"==typeof this?this:Array,h=arguments.length,y=h>1?arguments[1]:void 0,g=void 0!==y,m=f(v),O=0;if(g&&(y=n(y,h>2?arguments[2]:void 0,2)),void 0==m||p==Array&&a(m))for(e=c(v.length),r=new p(e);e>O;O++)b=g?y(v[O],O):v[O],s(r,O,b);else for(d=m.call(v),l=d.next,r=new p;!(u=l.call(d)).done;O++)b=g?o(d,y,[u.value,O],!0):u.value,s(r,O,b);return r.length=O,r}},5530:function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"a",(function(){return o}))},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),f=r("fdbf"),u=r("d039"),d=r("5135"),l=r("e8b5"),b=r("861d"),v=r("825a"),p=r("7b0b"),h=r("fc6a"),y=r("c04e"),g=r("5c6c"),m=r("7c73"),O=r("df75"),w=r("241c"),j=r("057f"),C=r("7418"),_=r("06cf"),S=r("9bf2"),P=r("d1e7"),k=r("9112"),x=r("6eeb"),A=r("5692"),E=r("f772"),D=r("d012"),R=r("90e3"),N=r("b622"),T=r("e538"),J=r("746f"),$=r("d44e"),B=r("69f3"),F=r("b727").forEach,I=E("hidden"),L="Symbol",z="prototype",M=N("toPrimitive"),Q=B.set,U=B.getterFor(L),W=Object[z],q=i.Symbol,G=o("JSON","stringify"),H=_.f,K=S.f,V=j.f,X=P.f,Y=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),rt=A("wks"),nt=i.QObject,it=!nt||!nt[z]||!nt[z].findChild,ot=c&&u((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=H(W,e);n&&delete W[e],K(t,e,r),n&&t!==W&&K(W,e,n)}:K,at=function(t,e){var r=Y[t]=m(q[z]);return Q(r,{type:L,tag:t,description:e}),c||(r.description=e),r},ct=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},st=function(t,e,r){t===W&&st(Z,e,r),v(t);var n=y(e,!0);return v(r),d(Y,n)?(r.enumerable?(d(t,I)&&t[I][n]&&(t[I][n]=!1),r=m(r,{enumerable:g(0,!1)})):(d(t,I)||K(t,I,g(1,{})),t[I][n]=!0),ot(t,n,r)):K(t,n,r)},ft=function(t,e){v(t);var r=h(e),n=O(r).concat(vt(r));return F(n,(function(e){c&&!dt.call(r,e)||st(t,e,r[e])})),t},ut=function(t,e){return void 0===e?m(t):ft(m(t),e)},dt=function(t){var e=y(t,!0),r=X.call(this,e);return!(this===W&&d(Y,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(Y,e)||d(this,I)&&this[I][e])||r)},lt=function(t,e){var r=h(t),n=y(e,!0);if(r!==W||!d(Y,n)||d(Z,n)){var i=H(r,n);return!i||!d(Y,n)||d(r,I)&&r[I][n]||(i.enumerable=!0),i}},bt=function(t){var e=V(h(t)),r=[];return F(e,(function(t){d(Y,t)||d(D,t)||r.push(t)})),r},vt=function(t){var e=t===W,r=V(e?Z:h(t)),n=[];return F(r,(function(t){!d(Y,t)||e&&!d(W,t)||n.push(Y[t])})),n};if(s||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),r=function(t){this===W&&r.call(Z,t),d(this,I)&&d(this[I],e)&&(this[I][e]=!1),ot(this,e,g(1,t))};return c&&it&&ot(W,e,{configurable:!0,set:r}),at(e,t)},x(q[z],"toString",(function(){return U(this).tag})),x(q,"withoutSetter",(function(t){return at(R(t),t)})),P.f=dt,S.f=st,_.f=lt,w.f=j.f=bt,C.f=vt,T.f=function(t){return at(N(t),t)},c&&(K(q[z],"description",{configurable:!0,get:function(){return U(this).description}}),a||x(W,"propertyIsEnumerable",dt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:q}),F(O(rt),(function(t){J(t)})),n({target:L,stat:!0,forced:!s},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ut,defineProperty:st,defineProperties:ft,getOwnPropertyDescriptor:lt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:vt}),n({target:"Object",stat:!0,forced:u((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(p(t))}}),G){var pt=!s||u((function(){var t=q();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));n({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(b(e)||void 0!==t)&&!ct(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,G.apply(null,i)}})}q[z][M]||k(q[z],M,q[z].valueOf),$(q,L),D[I]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),a=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:i})},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),a=r("d039"),c=a((function(){o(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return o(i(t))}})},d28b:function(t,e,r){var n=r("746f");n("iterator")},d58f:function(t,e,r){var n=r("1c0b"),i=r("7b0b"),o=r("44ad"),a=r("50c4"),c=function(t){return function(e,r,c,s){n(r);var f=i(e),u=o(f),d=a(f.length),l=t?d-1:0,b=t?-1:1;if(c<2)while(1){if(l in u){s=u[l],l+=b;break}if(l+=b,t?l<0:d<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:d>l;l+=b)l in u&&(s=r(s,u[l],l,f));return s}};t.exports={left:c(!1),right:c(!0)}},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),a=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),i=c.f,f=o(n),u={},d=0;while(f.length>d)r=i(n,e=f[d++]),void 0!==r&&s(u,e,r);return u}})},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("5135"),c=r("861d"),s=r("9bf2").f,f=r("e893"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},l=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof l?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};f(l,u);var b=l.prototype=u.prototype;b.constructor=l;var v=b.toString,p="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;s(b,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=v.call(t);if(a(d,t))return"";var r=p?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:l})}},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),a=r("06cf").f,c=r("83ab"),s=i((function(){a(1)})),f=!c||s;n({target:"Object",stat:!0,forced:f,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n}}]);
//# sourceMappingURL=chunk-23bb3219.b7ab223f.js.map