(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-16bf72ca":"b5abde98","chunk-23bb3219":"d8ee7f85","chunk-2d0b68e6":"e2439844","chunk-2d0d65ee":"e8f14c05","chunk-2d21f214":"18419481","chunk-6a112e9f":"3910dc1b"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(e);var u=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(l);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,a[1](u)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/cashback-app/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1227:function(e,t,a){},"3e8a":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a("59ca"),r=a.n(n),s=(a("e71f"),a("ea7b"),{apiKey:"AIzaSyBfC36_zYgXeVJqUO5owmFJP9Q51c-flTU",authDomain:"agent-e436e.firebaseapp.com",databaseURL:"https://agent-e436e.firebaseio.com",projectId:"agent-e436e",appId:"1:277209267641:web:7af19109616cc1b74e0a68"}),o=r.a.initializeApp(s),i=o.firestore(),c=o.auth()},"525d":function(e,t,a){"use strict";var n=a("1227"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o={name:"App"},i=o,c=(a("525d"),a("2877")),u=Object(c["a"])(i,r,s,!1,null,null,null),l=u.exports,d=(a("45fc"),a("b0c0"),a("d3b7"),a("8c4f")),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"home"},[a("Header"),a("main",{staticClass:"main"},[a("Login")],1),a("Footer")],1)},p=[],m=a("70a2"),h=a("9bd2"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"login"},[a("form",{staticClass:"form",attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("h4",{staticClass:"title"},[e._v("Login para Portal de Representante")]),a("div",{staticClass:"loading-wrap"},[a("div",{class:{"loading-bar":!0,"-ready":e.loading}})]),a("fieldset",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{input:!0,"-labelUp":0!=e.email},attrs:{type:"email",name:"email"},domProps:{value:e.email},on:{focus:function(t){e.feedback=null},input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{staticClass:"label",attrs:{for:"email"}},[e._v("Digite seu Email")])]),a("fieldset",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{input:!0,"-labelUp":0!=e.password},attrs:{type:"password",name:"password"},domProps:{value:e.password},on:{focus:function(t){e.feedback=null},input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("label",{staticClass:"label",attrs:{for:"password"}},[e._v("Digite sua Senha")])]),a("p",{class:{feedback:!0,"-danger":e.danger},domProps:{textContent:e._s(e.feedback)}}),a("fieldset",{staticClass:"field"},[a("button",{class:{"button-submit":!0,"-disabled":e.loading},attrs:{disabled:e.loading}},[e._v("Entrar")])]),a("p",{staticClass:"redirect"},[e._v("Ainda não é representante ? "),a("router-link",{staticClass:"redirect-link",attrs:{to:{name:"Signup"}}},[e._v("Cadastre-se aqui")])],1)])])},b=[],v=a("3e8a"),w={name:"Login",data:function(){return{email:null,password:null,feedback:"",danger:!0,loading:!1}},methods:{login:function(){var e=this;this.email&&this.password?(this.loading=!0,this.danger=!1,this.feedback="Aguarde ...",v["a"].signInWithEmailAndPassword(this.email,this.password).then((function(){e.$router.push({name:"Shop"})})).catch((function(t){e.danger=!0,e.loading=!1,"auth/user-not-found"===t.code?e.feedback="Usuário não cadastrado":"auth/wrong-password"===t.code?e.feedback="Senha incorreta":e.feedback="Senha ou usuário incorreto"})),this.feedback=null):(this.danger=!0,this.loading=!1,this.feedback="Preencha todos os campos")}}},k=w,C=Object(c["a"])(k,g,b,!1,null,null,null),_=C.exports,y={name:"Home",components:{Header:m["a"],Footer:h["a"],Login:_}},x=y,S=Object(c["a"])(x,f,p,!1,null,null,null),P=S.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"home"},[a("Header"),a("main",{staticClass:"main"},[a("section",{staticClass:"signup"},[a("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.signup(t)}}},[a("h4",{staticClass:"title"},[e._v("Cadastro de Representante Eudora")]),a("div",{staticClass:"loading-wrap"},[a("div",{class:{"loading-bar":!0,"-ready":e.loading}})]),a("fieldset",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],class:{input:!0,"-labelUp":0!=e.name},attrs:{type:"name",name:"name",maxlength:"50"},domProps:{value:e.name},on:{keyup:function(t){return e.mask(t.target,"0",t,/[^a-zA-Z\s]+/g)},focus:function(t){e.feedback=null},input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("label",{staticClass:"label",attrs:{for:"name"}},[e._v("Digite seu Nome")])]),a("fieldset",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.cpf,expression:"cpf"}],class:{input:!0,"-labelUp":0!=e.cpf},attrs:{type:"text",name:"cpf",minlength:"14",maxlength:"14"},domProps:{value:e.cpf},on:{keyup:function(t){return e.mask(t.target,"000.000.000-00",t,/[^\d]+/g)},focus:function(t){e.feedback=null},input:function(t){t.target.composing||(e.cpf=t.target.value)}}}),a("label",{staticClass:"label",attrs:{for:"cpf"}},[e._v("Digite seu Cpf")]),a("fieldset",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{input:!0,"-labelUp":0!=e.email},attrs:{type:"email",name:"email"},domProps:{value:e.email},on:{focus:function(t){e.feedback=null},input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{staticClass:"label",attrs:{for:"email"}},[e._v("Digite seu Email")])]),a("fieldset",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{input:!0,"-labelUp":0!=e.password},attrs:{type:"password",name:"password"},domProps:{value:e.password},on:{focus:function(t){e.feedback=null},input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("label",{staticClass:"label",attrs:{for:"password"}},[e._v("Digite sua Senha")])]),a("p",{class:{feedback:!0,"-danger":e.danger},domProps:{textContent:e._s(e.feedback)}}),a("fieldset",{staticClass:"field"},[a("button",{class:{"button-submit":!0,"-disabled":e.loading},attrs:{disabled:e.loading}},[e._v("Cadastrar")])])])])])]),a("Footer")],1)},j=[],A=(a("96cf"),a("1da1")),E=(a("ac1f"),a("25f0"),a("5319"),function(e,t,a,n){var r,s=a.keyCode,o=n,i=e.value.toString().replace(o,""),c=0,u="",l=i.length;if(8!==s){for(var d=0;d<=l;d++)r="-"===t.charAt(d)||"."===t.charAt(d)||"/"===t.charAt(d),r=r||"("===t.charAt(d)||")"===t.charAt(d)||" "===t.charAt(d),r?(u+=t.charAt(d),l+=l):(u+=i.charAt(c),c++);return e.value=u,!0}return!0}),U=E,$={name:"Signup",components:{Header:m["a"],Footer:h["a"]},data:function(){return{email:null,password:null,cpf:null,name:null,feedback:" ",danger:!0,loading:!1}},methods:{signup:function(){var e=this;this.email&&this.password&&this.name&&this.cpf?Object(A["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,e.danger=!1,e.feedback="Aguarde ... ",a=v["b"].collection("users").doc(e.cpf),t.next=6,a.get().then((function(e){return e.exists}));case 6:if(!t.sent){t.next=12;break}e.danger=!0,e.loading=!1,e.feedback="Usuário já cadastrado",t.next=13;break;case 12:v["a"].createUserWithEmailAndPassword(e.email,e.password).then((function(t){a.set({name:e.name,cpf:e.cpf,email:e.email,user_id:t.user.uid})})).then((function(){e.$router.push({name:"Shop"})})).catch((function(t){e.danger=!0,e.loading=!1,"auth/weak-password"==t.code?e.feedback="Senha deve conter no mínimo 6 caracteres":"auth/email-already-in-use"==t.code?e.feedback="Usuário já cadastrado":e.feedback="Preencha os dados corretamente"}));case 13:case"end":return t.stop()}}),t)})))():(this.danger=!0,this.loading=!1,this.feedback="Preencha todos os campos")},mask:function(e,t,a,n){return U(e,t,a,n)}}},H=$,D=Object(c["a"])(H,O,j,!1,null,null,null),I=D.exports;n["a"].use(d["a"]);var N=[{path:"/",name:"Home",component:P},{path:"/cadastro",name:"Signup",component:I},{path:"/dashboard",name:"Dashboard",meta:{requiresAuth:!0},component:function(){return a.e("chunk-2d0d65ee").then(a.bind(null,"71ec"))},children:[{path:"/loja",name:"Shop",component:function(){return a.e("chunk-6a112e9f").then(a.bind(null,"9c5c"))}},{path:"/sacola",name:"Bag",component:function(){return a.e("chunk-16bf72ca").then(a.bind(null,"ccb9"))}},{path:"/compras",name:"Orders",component:function(){return a.e("chunk-23bb3219").then(a.bind(null,"462a"))}},{path:"/perfil",name:"Profile",component:function(){return a.e("chunk-2d21f214").then(a.bind(null,"d909"))}},{path:"/informacoes",name:"Info",component:function(){return a.e("chunk-2d0b68e6").then(a.bind(null,"1e51"))}}]}],L=new d["a"]({mode:"history",base:"/cashback-app/",routes:N});L.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))?v["a"].currentUser?a():a({name:"Home"}):v["a"].currentUser&&"Home"===e.name?a({name:"Shop"}):a()}));var R=L,F=(a("4160"),a("d81d"),a("6062"),a("3ca3"),a("159b"),a("ddb0"),a("2f62"));n["a"].use(F["a"]);var T=new F["a"].Store({state:{user:null,bag:new Set,orders:[]},mutations:{changeUser:function(e,t){e.user=t},addItem:function(e,t){!e.bag.has(t)&&e.bag.add(t),e.bag=new Set(e.bag)},removeItem:function(e,t){e.bag.delete(t),e.bag=new Set(e.bag)},updateItem:function(e,t){e.bag=new Set(t)},emptyBag:function(e){e.bag=new Set},updateOrders:function(e,t){e.orders=t}},actions:{emitAuth:function(e){return Object(A["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v["a"].currentUser.uid;case 2:a=t.sent,n=v["b"].collection("users").where("user_id","==",a).get().then((function(t){t.forEach((function(e){n=e.data()})),e.commit("changeUser",n)})).catch((function(e){console.log(e)}));case 4:case"end":return t.stop()}}),t)})))()},storeOrders:function(e){var t=v["a"].currentUser.uid;v["b"].collection("orders").where("user_id","==",t).onSnapshot((function(t){e.commit("updateOrders",t.docChanges().map((function(e){return console.log(e),{id:e.doc.id,data:e.doc.data()}})))}))}},modules:{}});n["a"].config.productionTip=!1;var q=null;v["a"].onAuthStateChanged((function(){q||(q=new n["a"]({router:R,store:T,render:function(e){return e(l)}}).$mount("#app"))}))},"70a2":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[a("router-link",{staticClass:"logo",attrs:{to:{name:e.user?"Shop":"Home"}}},[a("img",{staticClass:"logo-img",attrs:{src:"img/logo-eudora-white.png"}})]),e.user?e._e():a("router-link",{staticClass:"link button-login",attrs:{to:{name:"Home"}}},[e._v("Login")]),e.user?e._e():a("router-link",{staticClass:"link button-signup",attrs:{to:{name:"Signup"}}},[e._v("Cadastro")]),e.user?a("router-link",{staticClass:"link button-user",attrs:{to:{name:"Profile"}}},[a("i",{staticClass:"user-avatar"}),a("span",{staticClass:"user-name"},[e._v(e._s(e._f("breakword")(e.userName)))])]):e._e(),e.user?a("a",{staticClass:"link button-logout",on:{click:e.logout}},[e._v("Sair")]):e._e()],1)},r=[],s=(a("c975"),a("b0c0"),a("ac1f"),a("1276"),a("3e8a")),o={name:"Header",data:function(){return{user:null}},filters:{breakword:function(e){return e?-1!=e.indexOf(" ")?e.split(" ")[0]:e:""}},methods:{logout:function(){var e=this;s["a"].signOut().then((function(){return e.$router.push({name:"Home"})}))}},created:function(){var e=this;s["a"].onAuthStateChanged((function(t){e.user=t||null}))},computed:{userName:function(){return this.$store.state.user?this.$store.state.user.name:""},isMobile:function(){return window.innerWidth<768}}},i=o,c=a("2877"),u=Object(c["a"])(i,n,r,!1,null,null,null);t["a"]=u.exports},"9bd2":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("a",{staticClass:"company",attrs:{href:"http://www.grupoboticario.com.br/pt/Paginas/Inicial.aspx",tabindex:"0",target:"_blank"}},[e._v("©"),a("img",{staticClass:"company-logo",attrs:{src:"img/logo-group.png"}})]),a("section",{staticClass:"social"},[a("p",{staticClass:"social-title"},[e._v("Siga a Eudora:")]),a("div",{staticClass:"social-media"},[a("a",{staticClass:"link instagram",attrs:{href:"https://www.instagram.com/eudora/",target:"_blank"}}),a("a",{staticClass:"link facebook",attrs:{href:"https://www.facebook.com/eudora/",target:"_blank"}}),a("a",{staticClass:"link twitter",attrs:{href:"https://twitter.com/Eudora/",target:"_blank"}}),a("a",{staticClass:"link youtube",attrs:{href:"https://www.youtube.com/user/eudora/",target:"_blank"}})])])])}],s={name:"Footer"},o=s,i=a("2877"),c=Object(i["a"])(o,n,r,!1,null,null,null);t["a"]=c.exports}});
//# sourceMappingURL=app.96473ddd.js.map