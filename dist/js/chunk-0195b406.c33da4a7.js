(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0195b406"],{"00ef":function(e,n,t){"use strict";var r=t("bf82");t("4c44");n["a"]=r["a"]},2482:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("36de"),a=new r["a"]("I18n"),o=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!==typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),a.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,n){if(void 0===n&&(n=void 0),!this._lang)return"undefined"!==typeof n?n:e;var t=this._lang,r=this.getByLanguage(e,t);return r||(t.indexOf("-")>0&&(r=this.getByLanguage(e,t.split("-")[0])),r||("undefined"!==typeof n?n:e))},e.prototype.getByLanguage=function(e,n,t){if(void 0===t&&(t=null),!n)return t;var r=this._dict[n];return r?r[e]:t},e.prototype.putVocabulariesForLanguage=function(e,n){var t=this._dict[e];t||(t=this._dict[e]={}),Object.assign(t,n)},e.prototype.putVocabularies=function(e){var n=this;Object.keys(e).map((function(t){n.putVocabulariesForLanguage(t,e[t])}))},e}(),i=t("7d03"),E=new r["a"]("I18n"),u=null,c=null,s=function(){function e(){}return e.configure=function(n){return E.debug("configure I18n"),n?(u=Object.assign({},u,n.I18n||n),e.createInstance(),u):u},e.getModuleName=function(){return"I18n"},e.createInstance=function(){E.debug("create I18n instance"),c||(c=new o(u))},e.setLanguage=function(n){return e.checkConfig(),c.setLanguage(n)},e.get=function(n,t){return e.checkConfig()?c.get(n,t):"undefined"===typeof t?n:t},e.putVocabulariesForLanguage=function(n,t){return e.checkConfig(),c.putVocabulariesForLanguage(n,t)},e.putVocabularies=function(n){return e.checkConfig(),c.putVocabularies(n)},e.checkConfig=function(){return c||(c=new o(u)),!0},e}();i["a"].register(s)},3474:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r,a,o=t("60ac");(function(e){e["BACK_TO_SIGN_IN"]="Back to Sign In",e["CHANGE_PASSWORD_ACTION"]="Change",e["CHANGE_PASSWORD"]="Change Password",e["CODE_LABEL"]="Verification code",e["CODE_PLACEHOLDER"]="Enter code",e["CONFIRM_SIGN_UP_CODE_LABEL"]="Confirmation Code",e["CONFIRM_SIGN_UP_CODE_PLACEHOLDER"]="Enter your code",e["CONFIRM_SIGN_UP_HEADER_TEXT"]="Confirm Sign up",e["CONFIRM_SIGN_UP_LOST_CODE"]="Lost your code?",e["CONFIRM_SIGN_UP_RESEND_CODE"]="Resend Code",e["CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT"]="Confirm",e["CONFIRM_SMS_CODE"]="Confirm SMS Code",e["CONFIRM_TOTP_CODE"]="Confirm TOTP Code",e["CONFIRM"]="Confirm",e["CREATE_ACCOUNT_TEXT"]="Create account",e["EMAIL_LABEL"]="Email Address *",e["EMAIL_PLACEHOLDER"]="Enter your email address",e["FORGOT_PASSWORD_TEXT"]="Forgot your password?",e["LESS_THAN_TWO_MFA_VALUES_MESSAGE"]="Less than two mfa types available",e["NEW_PASSWORD_LABEL"]="New password",e["NEW_PASSWORD_PLACEHOLDER"]="Enter your new password",e["NO_ACCOUNT_TEXT"]="No account?",e["PASSWORD_LABEL"]="Password *",e["PASSWORD_PLACEHOLDER"]="Enter your password",e["PHONE_LABEL"]="Phone Number *",e["PHONE_PLACEHOLDER"]="(555) 555-1212",e["QR_CODE_ALT"]="qrcode",e["RESET_PASSWORD_TEXT"]="Reset password",e["RESET_YOUR_PASSWORD"]="Reset your password",e["SELECT_MFA_TYPE_HEADER_TEXT"]="Select MFA Type",e["SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT"]="Verify",e["SEND_CODE"]="Send Code",e["SUBMIT"]="Submit",e["SETUP_TOTP_REQUIRED"]="TOTP needs to be configured",e["SIGN_IN_ACTION"]="Sign In",e["SIGN_IN_HEADER_TEXT"]="Sign in to your account",e["SIGN_IN_TEXT"]="Sign in",e["SIGN_IN_WITH_AMAZON"]="Sign in with Amazon",e["SIGN_IN_WITH_AUTH0"]="Sign in with Auth0",e["SIGN_IN_WITH_AWS"]="Sign in with AWS",e["SIGN_IN_WITH_FACEBOOK"]="Sign in with Facebook",e["SIGN_IN_WITH_GOOGLE"]="Sign in with Google",e["SIGN_OUT"]="Sign Out",e["SIGN_UP_EMAIL_PLACEHOLDER"]="Email",e["SIGN_UP_HAVE_ACCOUNT_TEXT"]="Have an account?",e["SIGN_UP_HEADER_TEXT"]="Create a new account",e["SIGN_UP_PASSWORD_PLACEHOLDER"]="Password",e["SIGN_UP_SUBMIT_BUTTON_TEXT"]="Create Account",e["SIGN_UP_USERNAME_PLACEHOLDER"]="Username",e["SUCCESS_MFA_TYPE"]="Success! Your MFA Type is now:",e["TOTP_HEADER_TEXT"]="Scan then enter verification code",e["TOTP_LABEL"]="Enter Security Code:",e["TOTP_ISSUER"]="AWSCognito",e["TOTP_SETUP_FAILURE"]="TOTP Setup has failed",e["TOTP_SUBMIT_BUTTON_TEXT"]="Verify Security Token",e["TOTP_SUCCESS_MESSAGE"]="Setup TOTP successfully!",e["UNABLE_TO_SETUP_MFA_AT_THIS_TIME"]="Failed! Unable to configure MFA at this time",e["USERNAME_LABEL"]="Username *",e["USERNAME_PLACEHOLDER"]="Enter your username",e["VERIFY_CONTACT_EMAIL_LABEL"]="Email",e["VERIFY_CONTACT_HEADER_TEXT"]="Account recovery requires verified contact information",e["VERIFY_CONTACT_PHONE_LABEL"]="Phone Number",e["VERIFY_CONTACT_SUBMIT_LABEL"]="Submit",e["VERIFY_CONTACT_VERIFY_LABEL"]="Verify",e["ADDRESS_LABEL"]="Address",e["ADDRESS_PLACEHOLDER"]="Enter your address",e["NICKNAME_LABEL"]="Nickname",e["NICKNAME_PLACEHOLDER"]="Enter your nickname",e["BIRTHDATE_LABEL"]="Birthday",e["BIRTHDATE_PLACEHOLDER"]="Enter your birthday",e["PICTURE_LABEL"]="Picture URL",e["PICTURE_PLACEHOLDER"]="Enter your picture URL",e["FAMILY_NAME_LABEL"]="Family Name",e["FAMILY_NAME_PLACEHOLDER"]="Enter your family name",e["PREFERRED_USERNAME_LABEL"]="Preferred Username",e["PREFERRED_USERNAME_PLACEHOLDER"]="Enter your preferred username",e["GENDER_LABEL"]="Gender",e["GENDER_PLACEHOLDER"]="Enter your gender",e["PROFILE_LABEL"]="Profile URL",e["PROFILE_PLACEHOLDER"]="Enter your profile URL",e["GIVEN_NAME_LABEL"]="First Name",e["GIVEN_NAME_PLACEHOLDER"]="Enter your first name",e["ZONEINFO_LABEL"]="Time zone",e["ZONEINFO_PLACEHOLDER"]="Enter your time zone",e["LOCALE_LABEL"]="Locale",e["LOCALE_PLACEHOLDER"]="Enter your locale",e["UPDATED_AT_LABEL"]="Updated At",e["UPDATED_AT_PLACEHOLDER"]="Enter the time the information was last updated",e["MIDDLE_NAME_LABEL"]="Middle Name",e["MIDDLE_NAME_PLACEHOLDER"]="Enter your middle name",e["WEBSITE_LABEL"]="Website",e["WEBSITE_PLACEHOLDER"]="Enter your website",e["NAME_LABEL"]="Full Name",e["NAME_PLACEHOLDER"]="Enter your full name",e["PHOTO_PICKER_TITLE"]="Picker Title",e["PHOTO_PICKER_HINT"]="Ancilliary text or content may occupy this space here",e["PHOTO_PICKER_PLACEHOLDER_HINT"]="Placeholder hint",e["PHOTO_PICKER_BUTTON_TEXT"]="Button",e["IMAGE_PICKER_TITLE"]="Add Profile Photo",e["IMAGE_PICKER_HINT"]="Preview the image before upload",e["IMAGE_PICKER_PLACEHOLDER_HINT"]="Tap to image select",e["IMAGE_PICKER_BUTTON_TEXT"]="Upload",e["PICKER_TEXT"]="Pick a file",e["TEXT_FALLBACK_CONTENT"]="Fallback Content",e["CONFIRM_SIGN_UP_FAILED"]="Confirm Sign Up Failed",e["SIGN_UP_FAILED"]="Sign Up Failed"})(r||(r={})),function(e){e["CHATBOT_TITLE"]="ChatBot Lex",e["TEXT_INPUT_PLACEHOLDER"]="Write a message",e["VOICE_INPUT_PLACEHOLDER"]="Click mic to speak",e["CHAT_DISABLED_ERROR"]="Error: Either voice or text must be enabled for the chatbot",e["NO_BOT_NAME_ERROR"]="Error: Bot name must be provided to ChatBot"}(a||(a={}));var i=Object.assign(Object.assign(Object.assign({},r),o["a"]),a)},"57dd":function(e,n,t){"use strict";t.r(n),t.d(n,"amplify_greetings",(function(){return i}));var r=t("0b1e"),a=(t("7a37"),t("3474"),t("7585"),t("d4cf")),o=":host{--background-color:var(--amplify-white);--border-color:var(--amplify-light-grey);--font-family:var(--amplify-font-family)}.greetings{display:-ms-flexbox;display:flex;border:1px solid transparent;background-color:var(--background-color);border-color:var(--border-color);padding:0.625rem;font-family:var(--font-family);-ms-flex-pack:justify;justify-content:space-between}.nav{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center}.logo{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;justify-self:flex-start}amplify-sign-out{margin-left:1rem}",i=function(){function e(e){Object(r["k"])(this,e),this.username=null,this.logo=null,this.handleAuthStateChange=a["d"]}return e.prototype.render=function(){return Object(r["i"])("header",{class:"greetings"},Object(r["i"])("span",{class:"logo"},Object(r["i"])("slot",{name:"logo"},this.logo&&Object(r["i"])("span",null,this.logo))),Object(r["i"])("span",{class:"nav"},Object(r["i"])("slot",{name:"nav"},Object(r["i"])("amplify-nav",null,this.username&&Object(r["i"])("slot",{name:"greetings-message"},Object(r["i"])("span",null,"Hello, ",this.username)),Object(r["i"])("amplify-sign-out",{handleAuthStateChange:this.handleAuthStateChange})))))},e}();i.style=o},7585:function(e,n,t){"use strict";t.d(n,"a",(function(){return C})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return L})),t.d(n,"e",(function(){return A})),t.d(n,"f",(function(){return _})),t.d(n,"g",(function(){return g})),t.d(n,"h",(function(){return I})),t.d(n,"i",(function(){return p})),t.d(n,"j",(function(){return R})),t.d(n,"k",(function(){return i})),t.d(n,"l",(function(){return l})),t.d(n,"m",(function(){return d})),t.d(n,"n",(function(){return f})),t.d(n,"o",(function(){return T})),t.d(n,"p",(function(){return O})),t.d(n,"q",(function(){return c})),t.d(n,"r",(function(){return S})),t.d(n,"s",(function(){return s})),t.d(n,"t",(function(){return o})),t.d(n,"u",(function(){return E})),t.d(n,"v",(function(){return r}));var r="username",a="email",o="code",i="phone",E="password",u="country-dial-code-select",c="+1",s="amplify-auth-source",_="amplify-redirected-from-hosted-ui",l="amplify-authenticator-authState",A="Phone number can not be empty",L="No Auth module found, please ensure @aws-amplify/auth is imported",f="No Storage module found, please ensure @aws-amplify/storage is imported",d="No Interactions module found, please ensure @aws-amplify/interactions is imported",g="SETUP_TOTP",T="User has not set up software token mfa",O="User has not verified software token mfa",S="SUCCESS",C="auth",p="UI Auth",I="ToastAuthError",R="AuthStateChange"},"7a37":function(e,n,t){"use strict";var r,a,o,i,E;t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return E})),t.d(n,"e",(function(){return i})),function(e){e["SignUp"]="signup",e["SignOut"]="signout",e["SignIn"]="signin",e["Loading"]="loading",e["SignedOut"]="signedout",e["SignedIn"]="signedin",e["SigningUp"]="signingup",e["ConfirmSignUp"]="confirmSignUp",e["confirmingSignUpCustomFlow"]="confirmsignupcustomflow",e["ConfirmSignIn"]="confirmSignIn",e["confirmingSignInCustomFlow"]="confirmingsignincustomflow",e["VerifyingAttributes"]="verifyingattributes",e["ForgotPassword"]="forgotpassword",e["ResetPassword"]="resettingpassword",e["SettingMFA"]="settingMFA",e["TOTPSetup"]="TOTPSetup",e["CustomConfirmSignIn"]="customConfirmSignIn",e["VerifyContact"]="verifyContact"}(r||(r={})),function(e){e["TOTP"]="TOTP",e["SMS"]="SMS",e["NOMFA"]="NOMFA"}(a||(a={})),function(e){e["SoftwareTokenMFA"]="SOFTWARE_TOKEN_MFA",e["SMSMFA"]="SMS_MFA",e["NewPasswordRequired"]="NEW_PASSWORD_REQUIRED",e["MFASetup"]="MFA_SETUP",e["CustomChallenge"]="CUSTOM_CHALLENGE"}(o||(o={})),function(e){e["Password"]="password"}(i||(i={})),function(e){e["username"]="username",e["email"]="email",e["phone_number"]="phone_number"}(E||(E={}))},d4cf:function(e,n,t){"use strict";t.d(n,"a",(function(){return L})),t.d(n,"b",(function(){return d})),t.d(n,"c",(function(){return g})),t.d(n,"d",(function(){return f})),t.d(n,"e",(function(){return A})),t.d(n,"f",(function(){return C})),t.d(n,"g",(function(){return O})),t.d(n,"h",(function(){return T})),t.d(n,"i",(function(){return S}));var r=t("36de"),a=t("4327"),o=t("2482"),i=t("7a37"),E=t("00ef"),u=t("3474"),c=t("7585"),s=function(e,n,t,r){function a(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,o){function i(e){try{u(r.next(e))}catch(n){o(n)}}function E(e){try{u(r["throw"](e))}catch(n){o(n)}}function u(e){e.done?t(e.value):a(e.value).then(i,E)}u((r=r.apply(e,n||[])).next())}))},_=function(e,n){var t,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:E(0),throw:E(1),return:E(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function E(e){return function(n){return u([e,n])}}function u(o){if(t)throw new TypeError("Generator is already executing.");while(i)try{if(t=1,r&&(a=2&o[0]?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(a=i.trys,!(a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(e,i)}catch(E){o=[6,E],r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},l=new r["a"]("helpers"),A=function(e){return!!e.shadowRoot&&!!e.attachShadow},L=function(e){a["a"].dispatch(c["i"],{event:c["h"],message:o["a"].get(e.message)})},f=function(e,n){a["a"].dispatch(c["i"],{event:c["j"],message:e,data:n})},d=function(e){if(!e.phoneNumberValue)throw new Error(c["e"]);var n=e.phoneNumberValue.replace(/[-()\s]/g,"");return""+e.countryDialCodeValue+n},g=function(e){if(!(e in i["d"]))throw new Error("Invalid username Alias - "+e+". Instead use "+Object.values(i["d"]))},T=function(e){var n=function(n){return s(void 0,void 0,void 0,(function(){var t,r,a;return _(this,(function(o){switch(o.label){case 0:switch(t=n.payload,r=t.event,r){case c["j"]:return[3,1]}return[3,8];case 1:if(!t.message)return[3,7];if(t.message!==i["a"].SignedIn)return[3,6];o.label=2;case 2:return o.trys.push([2,4,,5]),[4,E["a"].currentAuthenticatedUser()];case 3:return a=o.sent(),e(t.message,a),[3,5];case 4:return o.sent(),l.error("User is not authenticated"),[3,5];case 5:return[3,7];case 6:e(t.message,t.data),o.label=7;case 7:return[3,8];case 8:return[2]}}))}))};return a["a"].listen(c["i"],n),function(){return a["a"].remove(c["i"],n)}},O=function(e){return!(null===e["hint"]||"string"===typeof e["hint"])},S={address:{label:o["a"].get(u["a"].ADDRESS_LABEL),placeholder:o["a"].get(u["a"].ADDRESS_PLACEHOLDER)},nickname:{label:o["a"].get(u["a"].NICKNAME_LABEL),placeholder:o["a"].get(u["a"].NICKNAME_PLACEHOLDER)},birthdate:{label:o["a"].get(u["a"].BIRTHDATE_LABEL),placeholder:o["a"].get(u["a"].BIRTHDATE_PLACEHOLDER)},phone_number:{label:o["a"].get(u["a"].PHONE_LABEL),placeholder:o["a"].get(u["a"].PHONE_PLACEHOLDER)},email:{lable:o["a"].get(u["a"].EMAIL_LABEL),placeholder:o["a"].get(u["a"].EMAIL_PLACEHOLDER)},picture:{label:o["a"].get(u["a"].PICTURE_LABEL),placeholder:o["a"].get(u["a"].PICTURE_PLACEHOLDER)},family_name:{label:o["a"].get(u["a"].FAMILY_NAME_LABEL),placeholder:o["a"].get(u["a"].FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:o["a"].get(u["a"].PREFERRED_USERNAME_LABEL),placeholder:o["a"].get(u["a"].PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:o["a"].get(u["a"].GENDER_LABEL),placeholder:o["a"].get(u["a"].GENDER_PLACEHOLDER)},profile:{label:o["a"].get(u["a"].PROFILE_LABEL),placeholder:o["a"].get(u["a"].PROFILE_PLACEHOLDER)},given_name:{label:o["a"].get(u["a"].GIVEN_NAME_LABEL),placeholder:o["a"].get(u["a"].GIVEN_NAME_LABEL)},zoneinfo:{label:o["a"].get(u["a"].ZONEINFO_LABEL),placeholder:o["a"].get(u["a"].ZONEINFO_PLACEHOLDER)},locale:{label:o["a"].get(u["a"].LOCALE_LABEL),placeholder:o["a"].get(u["a"].LOCALE_PLACEHOLDER)},updated_at:{label:o["a"].get(u["a"].UPDATED_AT_LABEL),placeholder:o["a"].get(u["a"].UPDATED_AT_PLACEHOLDER)},middle_name:{label:o["a"].get(u["a"].MIDDLE_NAME_LABEL),placeholder:o["a"].get(u["a"].MIDDLE_NAME_PLACEHOLDER)},website:{label:o["a"].get(u["a"].WEBSITE_LABEL),placeholder:o["a"].get(u["a"].WEBSITE_PLACEHOLDER)},name:{label:o["a"].get(u["a"].NAME_LABEL),placeholder:o["a"].get(u["a"].NAME_PLACEHOLDER)}};function C(e,n){var t=e.target.name,r=e.target.value;t===c["b"]&&(n.countryDialCodeValue=r),t===c["k"]&&(n.phoneNumberValue=r)}}}]);
//# sourceMappingURL=chunk-0195b406.c33da4a7.js.map