(function(e){function t(t){for(var n,i,o=t[0],c=t[1],l=t[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-16bf72ca":"c722b3f8","chunk-23bb3219":"e6594399","chunk-2d0b68e6":"6b000fbe","chunk-2d0d65ee":"e8f14c05","chunk-2d21f214":"012417be","chunk-6a112e9f":"14004636"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(e);var l=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,a[1](l)}r[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/cashback-app/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1227:function(e,t,a){},"3e8a":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var n=a("59ca"),r=a.n(n),s=(a("e71f"),a("ea7b"),{apiKey:"AIzaSyBfC36_zYgXeVJqUO5owmFJP9Q51c-flTU",authDomain:"agent-e436e.firebaseapp.com",databaseURL:"https://agent-e436e.firebaseio.com",projectId:"agent-e436e",appId:"1:277209267641:web:7af19109616cc1b74e0a68"}),i=r.a.initializeApp(s),o=i.firestore(),c=i.auth()},"4b66":function(e,t){e.exports="data:image/png;base64,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"},"525d":function(e,t,a){"use strict";var n=a("1227"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],i={name:"App"},o=i,c=(a("525d"),a("2877")),l=Object(c["a"])(o,r,s,!1,null,null,null),u=l.exports,d=(a("45fc"),a("b0c0"),a("d3b7"),a("8c4f")),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"home"},[a("Header"),a("main",{staticClass:"main"},[a("Login")],1),a("Footer")],1)},b=[],m=a("70a2"),f=a("9bd2"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"login"},[a("form",{staticClass:"form",attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("h4",{staticClass:"title"},[e._v("Login para Portal de Representante")]),a("div",{staticClass:"loading-wrap"},[a("div",{class:{"loading-bar":!0,"-ready":e.loading}})]),a("fieldset",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{input:!0,"-labelUp":0!=e.email},attrs:{type:"email",name:"email"},domProps:{value:e.email},on:{focus:function(t){e.feedback=null},input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{staticClass:"label",attrs:{for:"email"}},[e._v("Digite seu Email")])]),a("fieldset",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{input:!0,"-labelUp":0!=e.password},attrs:{type:"password",name:"password"},domProps:{value:e.password},on:{focus:function(t){e.feedback=null},input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("label",{staticClass:"label",attrs:{for:"password"}},[e._v("Digite sua Senha")])]),a("p",{class:{feedback:!0,"-danger":e.danger},domProps:{textContent:e._s(e.feedback)}}),a("fieldset",{staticClass:"field"},[a("button",{class:{"button-submit":!0,"-disabled":e.loading},attrs:{disabled:e.loading}},[e._v("Entrar")])]),a("p",{staticClass:"redirect"},[e._v("Ainda não é representante ? "),a("router-link",{staticClass:"redirect-link",attrs:{to:{name:"Signup"}}},[e._v("Cadastre-se aqui")])],1)])])},g=[],W=a("3e8a"),k={name:"Login",data:function(){return{email:null,password:null,feedback:"",danger:!0,loading:!1}},methods:{login:function(){var e=this;this.email&&this.password?(this.loading=!0,this.danger=!1,this.feedback="Aguarde ...",W["a"].signInWithEmailAndPassword(this.email,this.password).then((function(){e.$router.push({name:"Shop"})})).catch((function(t){e.danger=!0,e.loading=!1,"auth/user-not-found"===t.code?e.feedback="Usuário não cadastrado":"auth/wrong-password"===t.code?e.feedback="Senha incorreta":e.feedback="Senha ou usuário incorreto"})),this.feedback=null):(this.danger=!0,this.loading=!1,this.feedback="Preencha todos os campos")}}},w=k,v=Object(c["a"])(w,h,g,!1,null,null,null),C=v.exports,A={name:"Home",components:{Header:m["a"],Footer:f["a"],Login:C}},x=A,S=Object(c["a"])(x,p,b,!1,null,null,null),y=S.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"home"},[a("Header"),a("main",{staticClass:"main"},[a("section",{staticClass:"signup"},[a("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.signup(t)}}},[a("h4",{staticClass:"title"},[e._v("Cadastro de Representante Eudora")]),a("div",{staticClass:"loading-wrap"},[a("div",{class:{"loading-bar":!0,"-ready":e.loading}})]),a("fieldset",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],class:{input:!0,"-labelUp":0!=e.name},attrs:{type:"name",name:"name",maxlength:"50"},domProps:{value:e.name},on:{keyup:function(t){return e.mask(t.target,"0",t,/[^a-zA-Z\s]+/g)},focus:function(t){e.feedback=null},input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("label",{staticClass:"label",attrs:{for:"name"}},[e._v("Digite seu Nome")])]),a("fieldset",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.cpf,expression:"cpf"}],class:{input:!0,"-labelUp":0!=e.cpf},attrs:{type:"text",name:"cpf",minlength:"14",maxlength:"14"},domProps:{value:e.cpf},on:{keyup:function(t){return e.mask(t.target,"000.000.000-00",t,/[^\d]+/g)},focus:function(t){e.feedback=null},input:function(t){t.target.composing||(e.cpf=t.target.value)}}}),a("label",{staticClass:"label",attrs:{for:"cpf"}},[e._v("Digite seu Cpf")]),a("fieldset",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{input:!0,"-labelUp":0!=e.email},attrs:{type:"email",name:"email"},domProps:{value:e.email},on:{focus:function(t){e.feedback=null},input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{staticClass:"label",attrs:{for:"email"}},[e._v("Digite seu Email")])]),a("fieldset",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{input:!0,"-labelUp":0!=e.password},attrs:{type:"password",name:"password"},domProps:{value:e.password},on:{focus:function(t){e.feedback=null},input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("label",{staticClass:"label",attrs:{for:"password"}},[e._v("Digite sua Senha")])]),a("p",{class:{feedback:!0,"-danger":e.danger},domProps:{textContent:e._s(e.feedback)}}),a("fieldset",{staticClass:"field"},[a("button",{class:{"button-submit":!0,"-disabled":e.loading},attrs:{disabled:e.loading}},[e._v("Cadastrar")])])])])])]),a("Footer")],1)},N=[],P=(a("96cf"),a("1da1")),T=(a("ac1f"),a("25f0"),a("5319"),function(e,t,a,n){var r,s=a.keyCode,i=n,o=e.value.toString().replace(i,""),c=0,l="",u=o.length;if(8!==s){for(var d=0;d<=u;d++)r="-"===t.charAt(d)||"."===t.charAt(d)||"/"===t.charAt(d),r=r||"("===t.charAt(d)||")"===t.charAt(d)||" "===t.charAt(d),r?(l+=t.charAt(d),u+=u):(l+=o.charAt(c),c++);return e.value=l,!0}return!0}),E=T,O={name:"Signup",components:{Header:m["a"],Footer:f["a"]},data:function(){return{email:null,password:null,cpf:null,name:null,feedback:" ",danger:!0,loading:!1}},methods:{signup:function(){var e=this;this.email&&this.password&&this.name&&this.cpf?Object(P["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,e.danger=!1,e.feedback="Aguarde ... ",a=W["b"].collection("users").doc(e.cpf),t.next=6,a.get().then((function(e){return e.exists}));case 6:if(!t.sent){t.next=12;break}e.danger=!0,e.loading=!1,e.feedback="Usuário já cadastrado",t.next=13;break;case 12:W["a"].createUserWithEmailAndPassword(e.email,e.password).then((function(t){a.set({name:e.name,cpf:e.cpf,email:e.email,user_id:t.user.uid})})).then((function(){e.$router.push({name:"Shop"})})).catch((function(t){e.danger=!0,e.loading=!1,"auth/weak-password"==t.code?e.feedback="Senha deve conter no mínimo 6 caracteres":"auth/email-already-in-use"==t.code?e.feedback="Usuário já cadastrado":e.feedback="Preencha os dados corretamente"}));case 13:case"end":return t.stop()}}),t)})))():(this.danger=!0,this.loading=!1,this.feedback="Preencha todos os campos")},mask:function(e,t,a,n){return E(e,t,a,n)}}},j=O,I=Object(c["a"])(j,U,N,!1,null,null,null),D=I.exports;n["a"].use(d["a"]);var L=[{path:"/",name:"Home",component:y},{path:"/cadastro",name:"Signup",component:D},{path:"/dashboard",name:"Dashboard",meta:{requiresAuth:!0},component:function(){return a.e("chunk-2d0d65ee").then(a.bind(null,"71ec"))},children:[{path:"/loja",name:"Shop",component:function(){return a.e("chunk-6a112e9f").then(a.bind(null,"9c5c"))}},{path:"/sacola",name:"Bag",component:function(){return a.e("chunk-16bf72ca").then(a.bind(null,"ccb9"))}},{path:"/compras",name:"Orders",component:function(){return a.e("chunk-23bb3219").then(a.bind(null,"462a"))}},{path:"/perfil",name:"Profile",component:function(){return a.e("chunk-2d21f214").then(a.bind(null,"d909"))}},{path:"/informacoes",name:"Info",component:function(){return a.e("chunk-2d0b68e6").then(a.bind(null,"1e51"))}}]}],Z=new d["a"]({mode:"history",base:"/cashback-app/",routes:L});Z.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))?W["a"].currentUser?a():a({name:"Home"}):W["a"].currentUser&&"Home"===e.name?a({name:"Shop"}):a()}));var H=Z,V=(a("4160"),a("d81d"),a("6062"),a("3ca3"),a("159b"),a("ddb0"),a("2f62"));n["a"].use(V["a"]);var J=new V["a"].Store({state:{user:null,bag:new Set,orders:[]},mutations:{changeUser:function(e,t){e.user=t},addItem:function(e,t){!e.bag.has(t)&&e.bag.add(t),e.bag=new Set(e.bag)},removeItem:function(e,t){e.bag.delete(t),e.bag=new Set(e.bag)},updateItem:function(e,t){e.bag=new Set(t)},emptyBag:function(e){e.bag=new Set},updateOrders:function(e,t){e.orders=t}},actions:{emitAuth:function(e){return Object(P["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W["a"].currentUser.uid;case 2:a=t.sent,n=W["b"].collection("users").where("user_id","==",a).get().then((function(t){t.forEach((function(e){n=e.data()})),e.commit("changeUser",n)}));case 4:case"end":return t.stop()}}),t)})))()},storeOrders:function(e){var t=W["a"].currentUser.uid;W["b"].collection("orders").where("user_id","==",t).onSnapshot((function(t){e.commit("updateOrders",t.docChanges().map((function(e){return{id:e.doc.id,data:e.doc.data()}})))}))}},modules:{}});n["a"].config.productionTip=!1;var R=null;W["a"].onAuthStateChanged((function(){R||(R=new n["a"]({router:H,store:J,render:function(e){return e(u)}}).$mount("#app"))}))},"70a2":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[a("router-link",{staticClass:"logo",attrs:{to:{name:e.user?"Shop":"Home"}}},[a("img",{staticClass:"logo-img",attrs:{src:"img/logo-eudora-white.png"}})]),e.user?e._e():a("router-link",{staticClass:"link button-login",attrs:{to:{name:"Home"}}},[e._v("Login")]),e.user?e._e():a("router-link",{staticClass:"link button-signup",attrs:{to:{name:"Signup"}}},[e._v("Cadastro")]),e.user?a("router-link",{staticClass:"link button-user",attrs:{to:{name:"Profile"}}},[a("i",{staticClass:"user-avatar"}),a("span",{staticClass:"user-name"},[e._v(e._s(e._f("breakword")(e.userName)))])]):e._e(),e.user?a("a",{staticClass:"link button-logout",on:{click:e.logout}},[e._v("Sair")]):e._e()],1)},r=[],s=(a("c975"),a("b0c0"),a("ac1f"),a("1276"),a("3e8a")),i={name:"Header",data:function(){return{user:null}},filters:{breakword:function(e){return e?-1!=e.indexOf(" ")?e.split(" ")[0]:e:""}},methods:{logout:function(){var e=this;s["a"].signOut().then((function(){return e.$router.push({name:"Home"})}))}},created:function(){var e=this;s["a"].onAuthStateChanged((function(t){e.user=t||null}))},computed:{userName:function(){return this.$store.state.user?this.$store.state.user.name:""},isMobile:function(){return window.innerWidth<768}}},o=i,c=a("2877"),l=Object(c["a"])(o,n,r,!1,null,null,null);t["a"]=l.exports},"9bd2":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("a",{staticClass:"company",attrs:{href:"http://www.grupoboticario.com.br/pt/Paginas/Inicial.aspx",tabindex:"0",target:"_blank"}},[e._v("©"),n("img",{staticClass:"company-logo",attrs:{src:a("4b66")}})]),n("section",{staticClass:"social"},[n("p",{staticClass:"social-title"},[e._v("Siga a Eudora:")]),n("div",{staticClass:"social-media"},[n("a",{staticClass:"link instagram",attrs:{href:"https://www.instagram.com/eudora/",target:"_blank"}}),n("a",{staticClass:"link facebook",attrs:{href:"https://www.facebook.com/eudora/",target:"_blank"}}),n("a",{staticClass:"link twitter",attrs:{href:"https://twitter.com/Eudora/",target:"_blank"}}),n("a",{staticClass:"link youtube",attrs:{href:"https://www.youtube.com/user/eudora/",target:"_blank"}})])])])}],s={name:"Footer"},i=s,o=a("2877"),c=Object(o["a"])(i,n,r,!1,null,null,null);t["a"]=c.exports}});
//# sourceMappingURL=app.5915d0aa.js.map