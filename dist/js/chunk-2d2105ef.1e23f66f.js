(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2105ef"],{b836:function(t,e,a){"use strict";a.r(e),a.d(e,"amplify_authenticator",(function(){return b}));var n=a("0b1e"),i=a("36de"),r=a("4327"),s=a("7a37"),o=a("4c44"),u=a("bf82"),c=(a("3474"),a("7585")),h=a("d4cf"),l=a("fd98"),d=function(t,e,a,n){function i(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,r){function s(t){try{u(n.next(t))}catch(e){r(e)}}function o(t){try{u(n["throw"](t))}catch(e){r(e)}}function u(t){t.done?a(t.value):i(t.value).then(s,o)}u((n=n.apply(t,e||[])).next())}))},f=function(t,e){var a,n,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(t){return function(e){return u([t,e])}}function u(r){if(a)throw new TypeError("Generator is already executing.");while(s)try{if(a=1,n&&(i=2&r[0]?n["return"]:r[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,n=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(o){r=[6,o],n=0}finally{a=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},p=":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px}",g=new i["a"]("Authenticator"),b=function(){function t(t){var e=this;Object(n["k"])(this,t),this.initialAuthState=s["a"].SignIn,this.handleAuthStateChange=function(){},this.authState=s["a"].Loading,this.toastMessage="",this.handleExternalAuthEvent=function(t){var a=t.payload;switch(a.event){case"cognitoHostedUI":case"signIn":Object(l["a"])(a.data,h["d"]);break;case"cognitoHostedUI_failure":case"parsingUrl_failure":case"signOut":case"customGreetingSignOut":return Object(h["d"])(e.initialAuthState)}},this.handleToastEvent=function(t){var a=t.payload;switch(a.event){case c["h"]:a.message&&(e.toastMessage=a.message);break}}}return t.prototype.componentWillLoad=function(){return d(this,void 0,void 0,(function(){var t,e=this;return f(this,(function(a){switch(a.label){case 0:return Object(h["h"])((function(t,a){e.onAuthStateChange(t,a),e.toastMessage=""})),r["a"].listen(c["i"],this.handleToastEvent),r["a"].listen(c["a"],this.handleExternalAuthEvent),Object(o["j"])("amplify-authenticator"),t=localStorage.getItem(c["f"]),localStorage.removeItem(c["f"]),"true"===t?[3,2]:[4,this.checkUser()];case 1:a.sent(),a.label=2;case 2:return[2]}}))}))},t.prototype.checkUser=function(){return d(this,void 0,void 0,(function(){var t,e,a;return f(this,(function(n){switch(n.label){case 0:if(!u["a"]||"function"!==typeof u["a"].currentAuthenticatedUser)throw new Error(c["d"]);n.label=1;case 1:return n.trys.push([1,3,,9]),[4,u["a"].currentAuthenticatedUser()];case 2:return t=n.sent(),Object(h["d"])(s["a"].SignedIn,t),[3,9];case 3:n.sent(),e=null;try{e=localStorage.getItem(c["l"])}catch(i){g.debug("Failed to get the auth state from local storage",i)}n.label=4;case 4:return n.trys.push([4,7,,8]),e!==s["a"].SignedIn?[3,6]:[4,u["a"].signOut()];case 5:n.sent(),n.label=6;case 6:return Object(h["d"])(this.initialAuthState),[3,8];case 7:return a=n.sent(),g.debug("Failed to sign out",a),[3,8];case 8:return[3,9];case 9:return[2]}}))}))},t.prototype.onAuthStateChange=function(t,e){return d(this,void 0,void 0,(function(){return f(this,(function(a){return void 0===t?[2,g.error("nextAuthState cannot be undefined")]:(g.info("Inside onAuthStateChange Method current authState:",this.authState),t===s["a"].SignedOut?this.authState=this.initialAuthState:this.authState=t,this.authData=e,this.authData&&g.log("Auth Data was set:",this.authData),this.authState===t&&(this.handleAuthStateChange(this.authState,this.authData),g.info("authState has been updated to "+this.authState)),[2])}))}))},t.prototype.renderAuthComponent=function(t){switch(t){case s["a"].SignIn:return Object(n["i"])("slot",{name:"sign-in"},Object(n["i"])("amplify-sign-in",{federated:this.federated,usernameAlias:this.usernameAlias}));case s["a"].ConfirmSignIn:return Object(n["i"])("slot",{name:"confirm-sign-in"},Object(n["i"])("amplify-confirm-sign-in",{user:this.authData}));case s["a"].SignUp:return Object(n["i"])("slot",{name:"sign-up"},Object(n["i"])("amplify-sign-up",{usernameAlias:this.usernameAlias}));case s["a"].ConfirmSignUp:return Object(n["i"])("slot",{name:"confirm-sign-up"},Object(n["i"])("amplify-confirm-sign-up",{user:this.authData,usernameAlias:this.usernameAlias}));case s["a"].ForgotPassword:return Object(n["i"])("slot",{name:"forgot-password"},Object(n["i"])("amplify-forgot-password",{usernameAlias:this.usernameAlias}));case s["a"].ResetPassword:return Object(n["i"])("slot",{name:"require-new-password"},Object(n["i"])("amplify-require-new-password",{user:this.authData}));case s["a"].VerifyContact:return Object(n["i"])("slot",{name:"verify-contact"},Object(n["i"])("amplify-verify-contact",{user:this.authData}));case s["a"].TOTPSetup:return Object(n["i"])("slot",{name:"totp-setup"},Object(n["i"])("amplify-totp-setup",{user:this.authData}));case s["a"].Loading:return Object(n["i"])("slot",{name:"loading"},Object(n["i"])("div",null,"Loading..."));case s["a"].SignedIn:return[Object(n["i"])("slot",{name:"greetings"}),Object(n["i"])("slot",null)];default:throw new Error("Unhandled auth state: "+t)}},t.prototype.componentWillUnload=function(){return r["a"].remove(c["a"],this.handleExternalAuthEvent),r["a"].remove(c["i"],this.handleToastEvent),h["h"]},t.prototype.render=function(){var t=this;return Object(n["i"])(n["b"],null,this.toastMessage?Object(n["i"])("amplify-toast",{message:this.toastMessage,handleClose:function(){t.toastMessage=""},"data-test":"authenticator-error"}):null,this.renderAuthComponent(this.authState))},t}();b.style=p}}]);
//# sourceMappingURL=chunk-2d2105ef.1e23f66f.js.map