webpackJsonp([1],{"0FNq":function(e,t){},"3ko2":function(e,t){},"75l9":function(e,t){e.exports={_from:"axios",_id:"axios@0.21.4",_inBundle:!1,_integrity:"sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==",_location:"/axios",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"axios",name:"axios",escapedName:"axios",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/axios/-/axios-0.21.4.tgz",_shasum:"c67b90dc0568e5c1cf2b0b858c43ba28e2eda575",_spec:"axios",_where:"F:\\db\\spoc\\frontend",author:{name:"Matt Zabriskie"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},bugs:{url:"https://github.com/axios/axios/issues"},bundleDependencies:!1,bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}],dependencies:{"follow-redirects":"^1.14.0"},deprecated:!1,description:"Promise based HTTP client for the browser and node.js",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},homepage:"https://axios-http.com",jsdelivr:"dist/axios.min.js",keywords:["xhr","http","ajax","promise","node"],license:"MIT",main:"index.js",name:"axios",repository:{type:"git",url:"git+https://github.com/axios/axios.git"},scripts:{build:"NODE_ENV=production grunt build",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",examples:"node ./examples/server.js",fix:"eslint --fix lib/**/*.js",postversion:"git push && git push --tags",preversion:"npm test",start:"node ./sandbox/server.js",test:"grunt test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},typings:"./index.d.ts",unpkg:"dist/axios.min.js",version:"0.21.4"}},FhUj:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},r,!1,function(e){n("gsu9")},null,null).exports,o=n("/ocq"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"welcome"},[t("h1",[this._v("Welcome to spoc")]),this._v(" "),t("br"),this._v(" "),t("button",{on:{click:this.goToLogin}},[this._v("进入")])])},staticRenderFns:[]};var c=n("VU/8")({methods:{goToLogin:function(){this.$router.replace("/Login")}}},i,!1,function(e){n("0FNq")},"data-v-b50df610",null).exports,u={name:"Login",data:function(){return{status:-1}},methods:{goToHead:function(){var e=this,t=e.$refs.userName.value,n=e.$refs.userPassWord.value;this.$http.request({url:e.$url+"Login/",method:"get",params:{userName:t,userPassWord:n}}).then(function(t){console.log(t),e.status=t.data,0===e.status?e.$router.replace("Head/"):1===e.status?alert("用户名不存在"):2===e.status&&alert("密码错误")}).catch(function(e){console.log(e)})},goToRegister:function(){this.$router.replace("/Register")}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("h1",[e._v("\n    这是登录页面\n  ")]),e._v(" "),n("p",[n("input",{ref:"userName",attrs:{type:"text",placeholder:"请输入用户名"}})]),e._v(" "),n("p",[n("input",{ref:"userPassWord",attrs:{type:"text",placeholder:"请输入密码"}})]),e._v(" "),n("button",{on:{click:e.goToHead}},[e._v("登录")]),e._v(" "),n("button",{on:{click:e.goToRegister}},[e._v("注册")])])},staticRenderFns:[]};var p=n("VU/8")(u,l,!1,function(e){n("lel6")},"data-v-ee6051e8",null).exports,d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[this._v("\n  这是注册页面\n  "),t("p",[t("button",{on:{click:this.goToLogin}},[this._v("返回")])])])},staticRenderFns:[]};var h=n("VU/8")({methods:{goToLogin:function(){this.$router.replace("/Login")}}},d,!1,function(e){n("FhUj")},"data-v-18a460be",null).exports,m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[this._v("\n  这是首页\n  "),t("p",[t("button",{on:{click:this.goToLogin}},[this._v("返回")])])])},staticRenderFns:[]};var g=n("VU/8")({methods:{goToLogin:function(){this.$router.replace("/Login")}}},m,!1,function(e){n("3ko2")},"data-v-041616f0",null).exports;s.a.use(o.a);var v=new o.a({routes:[{path:"/",name:"HelloWorld",component:c},{path:"/Login",name:"Login",component:p},{path:"/Register",name:"Register",component:h},{path:"/Head",name:"Head",component:g}]}),f=n("mtWM"),b=n.n(f);s.a.config.productionTip=!1,s.a.prototype.$http=b.a,s.a.prototype.$url="http://127.0.0.1:8000/",new s.a({el:"#app",router:v,components:{App:a},template:"<App/>"})},gsu9:function(e,t){},lel6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.08a7b26ed7cf3b3ffb71.js.map