var ny=Object.defineProperty;var ry=(r,e,t)=>e in r?ny(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var M=(r,e,t)=>ry(r,typeof e!="symbol"?e+"":e,t);import{s as _A,E as yA,d as $e,_ as Zs,y as w_}from"./react.BGjYHp9I.mjs";var yp=()=>{};var Ip=function(r){let e=[],t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},sy=function(r){let e=[],t=0,n=0;for(;t<r.length;){let s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){let i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){let i=r[t++],a=r[t++],u=r[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{let i=r[t++],a=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Dp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){let i=r[s],a=s+1<r.length,u=a?r[s+1]:0,c=s+2<r.length,l=c?r[s+2]:0,h=i>>2,d=(i&3)<<4|u>>4,g=(u&15)<<2|l>>6,w=l&63;c||(w=64,a||(g=64)),n.push(t[h],t[d],t[g],t[w])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ip(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):sy(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){let i=t[r.charAt(s++)],u=s<r.length?t[r.charAt(s)]:0;++s;let l=s<r.length?t[r.charAt(s)]:64;++s;let d=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||u==null||l==null||d==null)throw new Oc;let g=i<<2|u>>4;if(n.push(g),l!==64){let w=u<<4&240|l>>2;if(n.push(w),d!==64){let D=l<<6&192|d;n.push(D)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}},Oc=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},iy=function(r){let e=Ip(r);return Dp.encodeByteArray(e,!0)},gi=function(r){return iy(r).replace(/\./g,"")},$a=function(r){try{return Dp.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Tp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var ay=()=>Tp().__FIREBASE_DEFAULTS__,oy=()=>{if(typeof process>"u"||typeof process.env>"u")return;let r=process.env.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},uy=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=r&&$a(r[1]);return e&&JSON.parse(e)},Ya=()=>{try{return yp()||ay()||oy()||uy()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Fc=r=>Ya()?.emulatorHosts?.[r],Ap=r=>{let e=Fc(r);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Lc=()=>Ya()?.config,kc=r=>Ya()?.[`_${r}`];var $r=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}};function bp(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[gi(JSON.stringify(t)),gi(JSON.stringify(a)),""].join(".")}function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function cy(){let r=Ya()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sp(){let r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Pp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Np(){let r=qe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Op(){return!cy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vc(){try{return typeof indexedDB=="object"}catch{return!1}}function xp(){return new Promise((r,e)=>{try{let t=!0,n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}var ly="FirebaseError",Ct=class r extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=ly,Object.setPrototypeOf(this,r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,on.prototype.create)}},on=class{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?By(i,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Ct(s,u,n)}};function By(r,e){try{let t=0,n="";for(;t<r.length;){let s=r.indexOf("{$",t);if(s===-1){n+=r.substring(t);break}let i=r.indexOf("}",s+2);if(i===-1){n+=r.substring(t);break}let a=r.substring(s+2,i),u=e[a];n+=r.substring(t,s)+(u!=null?String(u):`<${a}?>`),t=i+1}return n}catch{return r}}function Fp(r){for(let e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ot(r,e){if(r===e)return!0;let t=Object.keys(r),n=Object.keys(e);for(let s of t){if(!n.includes(s))return!1;let i=r[s],a=e[s];if(wp(i)&&wp(a)){if(!Ot(i,a))return!1}else if(i!==a)return!1}for(let s of n)if(!t.includes(s))return!1;return!0}function wp(r){return r!==null&&typeof r=="object"}function Yr(r){let e=[];for(let[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Xr(r){let e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){let[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Zr(r){let e=r.indexOf("?");if(!e)return"";let t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Lp(r,e){let t=new xc(r,e);return t.subscribe.bind(t)}var xc=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");hy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Nc),s.error===void 0&&(s.error=Nc),s.complete===void 0&&(s.complete=Nc);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function hy(r,e){if(typeof r!="object"||r===null)return!1;for(let t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Nc(){}var RA=4*60*60*1e3;function ot(r){return r&&r._delegate?r._delegate:r}function sr(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Xa(r){return(await fetch(r,{credentials:"include"})).ok}var Tt=class{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var ir="[DEFAULT]";var Mc=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let n=new $r;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{let s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dy(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(let[t,n]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(t);try{let i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[i,a]of this.instancesDeferred.entries()){let u=this.normalizeInstanceIdentifier(i);n===u&&a.resolve(s)}return s}onInit(e,t){let n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);let i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:fy(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function fy(r){return r===ir?void 0:r}function dy(r){return r.instantiationMode==="EAGER"}var Za=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Mc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var py=[],ue;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ue||(ue={}));var gy={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Cy=ue.INFO,my={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Ey=(r,e,...t)=>{if(e<r.logLevel)return;let n=new Date().toISOString(),s=my[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Pn=class{constructor(e){this.name=e,this._logLevel=Cy,this._logHandler=Ey,this._userLogHandler=null,py.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}};var _y=(r,e)=>e.some(t=>r instanceof t),kp,Vp;function yy(){return kp||(kp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wy(){return Vp||(Vp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Mp=new WeakMap,Uc=new WeakMap,Gp=new WeakMap,Gc=new WeakMap,qc=new WeakMap;function Iy(r){let e=new Promise((t,n)=>{let s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{t(Kt(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Mp.set(t,r)}).catch(()=>{}),qc.set(e,r),e}function Dy(r){if(Uc.has(r))return;let e=new Promise((t,n)=>{let s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});Uc.set(r,e)}var Hc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Uc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Gp.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Kt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Up(r){Hc=r(Hc)}function Ty(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let n=r.call(eo(this),e,...t);return Gp.set(n,e.sort?e.sort():[e]),Kt(n)}:wy().includes(r)?function(...e){return r.apply(eo(this),e),Kt(Mp.get(this))}:function(...e){return Kt(r.apply(eo(this),e))}}function Ay(r){return typeof r=="function"?Ty(r):(r instanceof IDBTransaction&&Dy(r),_y(r,yy())?new Proxy(r,Hc):r)}function Kt(r){if(r instanceof IDBRequest)return Iy(r);if(Gc.has(r))return Gc.get(r);let e=Ay(r);return e!==r&&(Gc.set(r,e),qc.set(e,r)),e}var eo=r=>qc.get(r);function qp(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){let a=indexedDB.open(r,e),u=Kt(a);return n&&a.addEventListener("upgradeneeded",c=>{n(Kt(a.result),c.oldVersion,c.newVersion,Kt(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),u.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),u}var by=["get","getKey","getAll","getAllKeys","count"],vy=["put","add","delete","clear"],jc=new Map;function Hp(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(jc.get(e))return jc.get(e);let t=e.replace(/FromIndex$/,""),n=e!==t,s=vy.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||by.includes(t)))return;let i=async function(a,...u){let c=this.transaction(a,s?"readwrite":"readonly"),l=c.store;return n&&(l=l.index(u.shift())),(await Promise.all([l[t](...u),s&&c.done]))[0]};return jc.set(e,i),i}Up(r=>({...r,get:(e,t,n)=>Hp(e,t)||r.get(e,t,n),has:(e,t)=>!!Hp(e,t)||r.has(e,t)}));var Jc=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ry(t)){let n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}};function Ry(r){return r.getComponent()?.type==="VERSION"}var zc="@firebase/app",jp="0.16.5";var cn=new Pn("@firebase/app"),Sy="@firebase/app-compat",Py="@firebase/analytics-compat",Ny="@firebase/analytics",Oy="@firebase/app-check-compat",xy="@firebase/app-check",Fy="@firebase/auth",Ly="@firebase/auth-compat",ky="@firebase/crashlytics",Vy="@firebase/database",My="@firebase/data-connect",Gy="@firebase/database-compat",Uy="@firebase/functions",Hy="@firebase/functions-compat",qy="@firebase/installations",jy="@firebase/installations-compat",Ky="@firebase/messaging",Jy="@firebase/messaging-compat",zy="@firebase/performance",Wy="@firebase/performance-compat",Qy="@firebase/remote-config",$y="@firebase/remote-config-compat",Yy="@firebase/storage",Xy="@firebase/storage-compat",Zy="@firebase/firestore",ew="@firebase/ai",tw="@firebase/firestore-compat",nw="firebase",rw="13.2.0";var Wc="[DEFAULT]",sw={[zc]:"fire-core",[Sy]:"fire-core-compat",[Ny]:"fire-analytics",[Py]:"fire-analytics-compat",[xy]:"fire-app-check",[Oy]:"fire-app-check-compat",[Fy]:"fire-auth",[Ly]:"fire-auth-compat",[ky]:"fire-cls",[Vy]:"fire-rtdb",[My]:"fire-data-connect",[Gy]:"fire-rtdb-compat",[Uy]:"fire-fn",[Hy]:"fire-fn-compat",[qy]:"fire-iid",[jy]:"fire-iid-compat",[Ky]:"fire-fcm",[Jy]:"fire-fcm-compat",[zy]:"fire-perf",[Wy]:"fire-perf-compat",[Qy]:"fire-rc",[$y]:"fire-rc-compat",[Yy]:"fire-gcs",[Xy]:"fire-gcs-compat",[Zy]:"fire-fst",[tw]:"fire-fst-compat",[ew]:"fire-vertex","fire-js":"fire-js",[nw]:"fire-js-all"};var to=new Map,iw=new Map,Qc=new Map;function Kp(r,e){try{r.container.addComponent(e)}catch(t){cn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Nn(r){let e=r.name;if(Qc.has(e))return cn.debug(`There were multiple attempts to register component ${e}.`),!1;Qc.set(e,r);for(let t of to.values())Kp(t,r);for(let t of iw.values())Kp(t,r);return!0}function mi(r,e){let t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function mt(r){return r==null?!1:r.settings!==void 0}var aw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},un=new on("app","Firebase",aw);var $c=class{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}};var On=rw;function Zc(r,e={}){let t=r;typeof e!="object"&&(e={name:e});let n={name:Wc,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw un.create("bad-app-name",{appName:String(s)});if(t||(t=Lc()),!t)throw un.create("no-options");let i=to.get(s);if(i)if(Ot(t,i.options)){if(Ot(n,i.config))return i;throw un.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw un.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});let a=new Za(s);for(let c of Qc.values())a.addComponent(c);let u=new $c(t,n,a);return to.set(s,u),u}function no(r=Wc){let e=to.get(r);if(!e&&r===Wc&&Lc())return Zc();if(!e)throw un.create("no-app",{appName:r});return e}function xt(r,e,t){let n=sw[r]??r;t&&(n+=`-${t}`);let s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){let a=[`Unable to register library "${n}" with version "${e}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cn.warn(a.join(" "));return}Nn(new Tt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}var ow="firebase-heartbeat-database",uw=1,Ci="firebase-heartbeat-store",Kc=null;function Qp(){return Kc||(Kc=qp(ow,uw,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ci)}catch(t){console.warn(t)}}}}).catch(r=>{throw un.create("idb-open",{originalErrorMessage:r.message})})),Kc}async function cw(r){try{let t=(await Qp()).transaction(Ci),n=await t.objectStore(Ci).get($p(r));return await t.done,n}catch(e){if(e instanceof Ct)cn.warn(e.message);else{let t=un.create("idb-get",{originalErrorMessage:e?.message});cn.warn(t.message)}}}async function Jp(r,e){try{let n=(await Qp()).transaction(Ci,"readwrite");await n.objectStore(Ci).put(e,$p(r)),await n.done}catch(t){if(t instanceof Ct)cn.warn(t.message);else{let n=un.create("idb-set",{originalErrorMessage:t?.message});cn.warn(n.message)}}}function $p(r){return`${r.name}!${r.options.appId}`}var lw=1024,Bw=30,Yc=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Xc(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{let t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=zp();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(s=>s.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>Bw){let s=fw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){cn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let e=zp(),{heartbeatsToSend:t,unsentEntries:n}=hw(this._heartbeatsCache.heartbeats),s=gi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return cn.warn(e),""}}};function zp(){return new Date().toISOString().substring(0,10)}function hw(r,e=lw){let t=[],n=r.slice();for(let s of r){let i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Wp(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Wp(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}var Xc=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vc()?xp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await cw(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){let n=await this.read();return Jp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){let n=await this.read();return Jp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}};function Wp(r){return gi(JSON.stringify({version:2,heartbeats:r})).length}function fw(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}function dw(r){Nn(new Tt("platform-logger",e=>new Jc(e),"PRIVATE")),Nn(new Tt("heartbeat",e=>new Yc(e),"PRIVATE")),xt(zc,jp,r),xt(zc,jp,"esm2020"),xt("fire-js","")}dw("");var pw="firebase",gw="13.2.0";xt(pw,gw,"app");function gg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Cg=gg,mg=new on("auth","Firebase",gg());var lo=new Pn("@firebase/auth");function so(r,...e){lo.logLevel<=ue.WARN&&lo.warn(`Auth (${On}): ${r}`,...e)}function io(r,...e){lo.logLevel<=ue.ERROR&&lo.error(`Auth (${On}): ${r}`,...e)}function At(r,...e){throw wl(r,...e)}function Ft(r,...e){return wl(r,...e)}function xo(r,e,t){let n={...Cg(),[e]:t};return new on("auth","Firebase",n).create(e,{appName:r.name})}function ar(r){return xo(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cw(r,e,t){let n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&At(r,"argument-error"),xo(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wl(r,...e){if(typeof r!="string"){let t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return mg.create(r,...e)}function Y(r,e,...t){if(!r)throw wl(e,...t)}function Jt(r){let e="INTERNAL ASSERTION FAILED: "+r;throw io(e),new Error(e)}function Bn(r,e){r||Jt(e)}function il(){return typeof self<"u"&&self.location?.href||""}function mw(){return Yp()==="http:"||Yp()==="https:"}function Yp(){return typeof self<"u"&&self.location?.protocol||null}function Ew(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mw()||Sp()||"connection"in navigator)?navigator.onLine:!0}function _w(){if(typeof navigator>"u")return null;let r=navigator;return r.languages&&r.languages[0]||r.language||null}var or=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bn(t>e,"Short delay should be less than long delay!"),this.isMobile=vp()||Pp()}get(){return Ew()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Il(r,e){Bn(r.emulator,"Emulator should always be set here");let{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Bo=class{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var yw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var ww=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Iw=new or(3e4,6e4);function je(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function tt(r,e,t,n,s={}){return Eg(r,s,async()=>{let i={},a={};n&&(e==="GET"?a=n:i={body:JSON.stringify(n)});let u=Yr({...a,key:r.config.apiKey}).slice(1),c=await r._getAdditionalHeaders();c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode);let l={method:e,headers:c,...i};return Rp()||(l.referrerPolicy="strict-origin-when-cross-origin"),r.emulatorConfig&&sr(r.emulatorConfig.host)&&(l.credentials="include"),Bo.fetch()(await _g(r,r.config.apiHost,t,u),l)})}async function Eg(r,e,t){r._canInitEmulator=!1;let n={...yw,...e};try{let s=new al(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();let a=await i.json();if("needConfirmation"in a)throw _i(r,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{let u=i.ok?a.errorMessage:a.error.message,[c,l]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _i(r,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw _i(r,"email-already-in-use",a);if(c==="USER_DISABLED")throw _i(r,"user-disabled",a);let h=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw xo(r,h,l);At(r,h)}}catch(s){if(s instanceof Ct)throw s;At(r,"network-request-failed",{message:String(s)})}}async function fr(r,e,t,n,s={}){let i=await tt(r,e,t,n,s);return"mfaPendingCredential"in i&&At(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function _g(r,e,t,n){let s=`${e}${t}?${n}`,i=r,a=i.config.emulator?Il(r.config,s):`${r.config.apiScheme}://${s}`;return ww.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Dw(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var al=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ft(this.auth,"network-request-failed")),Iw.get())})}};function _i(r,e,t){let n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);let s=Ft(r,e,n);return s.customData._tokenResponse=t,s}function Xp(r){return r!==void 0&&r.enterprise!==void 0}var ho=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Dw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function yg(r,e){return tt(r,"GET","/v2/recaptchaConfig",je(r,e))}async function Tw(r,e){return tt(r,"POST","/v1/accounts:delete",e)}async function fo(r,e){return tt(r,"POST","/v1/accounts:lookup",e)}function yi(r){if(r)try{let e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wg(r,e=!1){let t=ot(r),n=await t.getIdToken(e),s=Dl(n);Y(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");let i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:n,authTime:yi(el(s.auth_time)),issuedAtTime:yi(el(s.iat)),expirationTime:yi(el(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function el(r){return Number(r)*1e3}function Dl(r){let[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return io("JWT malformed, contained fewer than 3 sections"),null;try{let s=$a(t);return s?JSON.parse(s):(io("Failed to decode base64 JWT payload"),null)}catch(s){return io("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Zp(r){let e=Dl(r);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function Ai(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw Ig(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Ig(r){return r instanceof Ct?r.code==="auth/user-disabled"||r.code==="auth/user-token-expired":!1}var ol=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){let t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;let n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var bi=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yi(this.lastLoginAt),this.creationTime=yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function po(r){let e=r.auth,t=await r.getIdToken(),n=await Ai(r,fo(e,{idToken:t}));Y(n?.users.length,e,"internal-error");let s=n.users[0];r._notifyReloadListener(s);let i=s.providerUserInfo?.length?Tg(s.providerUserInfo):[],a=Aw(r.providerData,i),u=r.isAnonymous,c=!(r.email&&s.passwordHash)&&!a?.length,l=u?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bi(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(r,h)}async function Dg(r){let e=ot(r);await po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Aw(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Tg(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}async function bw(r,e){let t=await Eg(r,{},async()=>{let n=Yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,a=await _g(r,s,"/v1/token",`key=${i}`),u=await r._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";let c={method:"POST",headers:u,body:n};return r.emulatorConfig&&sr(r.emulatorConfig.host)&&(c.credentials="include"),Bo.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function vw(r,e){return tt(r,"POST","/v2/accounts:revokeToken",je(r,e))}var wi=class r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e5}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Y(e.length!==0,"internal-error");let t=Zp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:s,expiresIn:i}=await bw(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){let{refreshToken:n,accessToken:s,expirationTime:i}=t,a=new r;return n&&(Y(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),s&&(Y(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new r,this.toJSON())}_performRefresh(){return Jt("not implemented")}};function xn(r,e){Y(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}var Fn=class r{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new ol(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await Ai(this,this.stsTokenManager.getToken(this.auth,e));return Y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wg(this,e)}reload(){return Dg(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new r({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await po(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(ar(this.auth));let e=await this.getIdToken();return await Ai(this,Tw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){let n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,u=t.tenantId??void 0,c=t._redirectEventId??void 0,l=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:d,emailVerified:g,isAnonymous:w,providerData:D,stsTokenManager:P}=t;Y(d&&P,e,"internal-error");let k=wi.fromJSON(this.name,P);Y(typeof d=="string",e,"internal-error"),xn(n,e.name),xn(s,e.name),Y(typeof g=="boolean",e,"internal-error"),Y(typeof w=="boolean",e,"internal-error"),xn(i,e.name),xn(a,e.name),xn(u,e.name),xn(c,e.name),xn(l,e.name),xn(h,e.name);let q=new r({uid:d,auth:e,email:s,emailVerified:g,displayName:n,isAnonymous:w,photoURL:a,phoneNumber:i,tenantId:u,stsTokenManager:k,createdAt:l,lastLoginAt:h});return D&&Array.isArray(D)&&(q.providerData=D.map(Q=>({...Q}))),c&&(q._redirectEventId=c),q}static async _fromIdTokenResponse(e,t,n=!1){let s=new wi;s.updateFromServerResponse(t);let i=new r({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await po(i),i}static async _fromGetAccountInfoResponse(e,t,n){let s=t.users[0];Y(s.localId!==void 0,"internal-error");let i=s.providerUserInfo!==void 0?Tg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,u=new wi;u.updateFromIdToken(n);let c=new r({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new bi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,l),c}};var eg=new Map;function ln(r){Bn(r instanceof Function,"Expected a class definition");let e=eg.get(r);return e?(Bn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,eg.set(r,e),e)}var go=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};go.type="NONE";var ul=go;function ao(r,e,t){return`firebase:${r}:${e}:${t}`}var Ii=class r{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:s,name:i}=this.auth;this.fullUserKey=ao(this.userKey,s.apiKey,i),this.fullPersistenceKey=ao("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await fo(this.auth,{idToken:e}).catch(()=>{});return t?Fn._fromGetAccountInfoResponse(this.auth,t,e):null}return Fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,n="authUser"){if(!t.length)return new r(ln(ul),e,n);let s=(await Promise.all(t.map(async l=>{try{if(await l._isAvailable())return l}catch{return}}))).filter(l=>l),i=s[0]||ln(ul),a=ao(n,e.config.apiKey,e.name),u=null;for(let l of t)try{let h=await l._get(a);if(h){let d;if(typeof h=="string"){let g=await fo(e,{idToken:h}).catch(()=>{});if(!g)break;d=await Fn._fromGetAccountInfoResponse(e,g,h)}else d=Fn._fromJSON(e,h);l!==i&&(u=d),i=l;break}}catch{}let c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new r(i,e,n):(i=c[0],u&&await i._set(a,u.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(a)}catch{}})),new r(i,e,n))}};function tg(r){let e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ag(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pg(e))return"Blackberry";if(Ng(e))return"Webos";if(bg(e))return"Safari";if((e.includes("chrome/")||vg(e))&&!e.includes("edge/"))return"Chrome";if(Sg(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if(n?.length===2)return n[1]}return"Other"}function Ag(r=qe()){return/firefox\//i.test(r)}function bg(r=qe()){let e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vg(r=qe()){return/crios\//i.test(r)}function Rg(r=qe()){return/iemobile/i.test(r)}function Sg(r=qe()){return/android/i.test(r)}function Pg(r=qe()){return/blackberry/i.test(r)}function Ng(r=qe()){return/webos/i.test(r)}function Tl(r=qe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Rw(r=qe()){return Tl(r)&&!!window.navigator?.standalone}function Sw(){return Np()&&document.documentMode===10}function Og(r=qe()){return Tl(r)||Sg(r)||Ng(r)||Pg(r)||/windows phone/i.test(r)||Rg(r)}function xg(r,e=[]){let t;switch(r){case"Browser":t=tg(qe());break;case"Worker":t=`${tg(qe())}-${r}`;break;default:t=r}let n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${On}/${n}`}var cl=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=i=>new Promise((a,u)=>{try{let c=e(i);a(c)}catch(c){u(c)}});n.onAbort=t,this.queue.push(n);let s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(let s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}};async function Pw(r,e={}){return tt(r,"GET","/v2/passwordPolicy",je(r,e))}var Nw=6,ll=class{constructor(e){let t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Nw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){let t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}};var Bl=class{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Co(this),this.idTokenSubscription=new Co(this),this.beforeStateQueue=new cl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ln(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted){try{this.persistenceManager=await Ii.create(this,e)}catch(n){so(`Failed to initialize persistence: ${n}`),this.persistenceManager=await Ii.create(this,[])}finally{this._resolvePersistenceManagerAvailable?.()}if(!this._deleted){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(n){so(`Failed to initialize current user: ${n}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await fo(this,{idToken:e}),n=await Fn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(mt(this.app)){let i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}let t=await this.assertedPersistence.getCurrentUser(),n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let i=this.redirectUser?._redirectEventId,a=n?._redirectEventId,u=await this.tryRedirectSignIn(e);(!i||i===a)&&u?.user&&(n=u.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await po(e)}catch(t){if(Ig(t))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_w()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(ar(this));let t=e?ot(e):null;return t&&Y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Pw(this),t=new ll(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new on("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await vw(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&ln(e)||this._popupRedirectResolver;Y(t,this,"argument-error"),this.redirectPersistenceManager=await Ii.create(this,[ln(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};let i=typeof t=="function"?t:t.next.bind(t),a=!1,u=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(u,this,"internal-error"),u.then(()=>{a||i(this.currentUser)}).catch(c=>{if(!a)if(typeof t!="function"&&t.error)t.error(c);else if(n)n(c);else throw c}),typeof t=="function"){let c=e.addObserver(t,n,s);return()=>{a=!0,c()}}else{let c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){let n=t?.message||String(t),s=xo(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw s.customData={originalError:t},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){let e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);let t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);let n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&so(`Error while retrieving App Check token: ${e.error}`),e?.token}};function dr(r){return ot(r)}var Co=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lp(t=>this.observer=t)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Fo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ow(r){Fo=r}function Fg(r){return Fo.loadJS(r)}function xw(){return Fo.recaptchaEnterpriseScript}function Fw(){return Fo.gapiScript}function Lg(r){return`__${r}${Math.floor(Math.random()*1e6)}`}var hl=class{constructor(){this.enterprise=new fl}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},fl=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var Lw="recaptcha-enterprise",Di="NO_RECAPTCHA",ng="onFirebaseAuthREInstanceReady",vi=class r{constructor(e){this.type=Lw,this.auth=dr(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,u)=>{yg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{let l=new ho(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,a(l.siteKey)}}).catch(c=>{u(c)})})}function s(i,a,u){let c=window.grecaptcha;Xp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{a(l)}).catch(()=>{a(Di)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hl().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{n(this.auth).then(async u=>{if(!t&&Xp(window.grecaptcha)&&r.scriptInjectionDeferred)await r.scriptInjectionDeferred.promise,s(u,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=xw();c.length!==0&&(c+=u+`&onload=${ng}`),r.scriptInjectionDeferred=new $r,window[ng]=()=>{r.scriptInjectionDeferred?.resolve()},Fg(c).then(()=>r.scriptInjectionDeferred?.promise).then(()=>{s(u,i,a)}).catch(l=>{a(l)})}}).catch(u=>{a(u)})})}};vi.scriptInjectionDeferred=null;async function Ei(r,e,t,n=!1,s=!1){let i=new vi(r),a;if(s)a=Di;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}let u={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){let c=u.phoneEnrollmentInfo.phoneNumber,l=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){let c=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return n?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function Ti(r,e,t,n,s){if(s==="EMAIL_PASSWORD_PROVIDER")if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let i=await Ei(r,e,t,t==="getOobCode");return n(r,i)}else return n(r,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let a=await Ei(r,e,t,t==="getOobCode");return n(r,a)}else return Promise.reject(i)});else if(s==="PHONE_PROVIDER")if(r._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){let i=await Ei(r,e,t);return n(r,i).catch(async a=>{if(r._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(a.code==="auth/missing-recaptcha-token"||a.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let u=await Ei(r,e,t,!1,!0);return n(r,u)}return Promise.reject(a)})}else{let i=await Ei(r,e,t,!1,!0);return n(r,i)}else return Promise.reject(s+" provider is not supported.")}async function kw(r){let e=dr(r),t=await yg(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ho(t);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isAnyProviderEnabled()&&new vi(e).verify().catch(()=>{})}function kg(r,e){let t=mi(r,"auth");if(t.isInitialized()){let s=t.getImmediate(),i=t.getOptions();if(Ot(i,e??{}))return s;At(s,"already-initialized")}return t.initialize({options:e})}function Vw(r,e){let t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(ln);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e?.popupRedirectResolver)}function Vg(r,e,t){let n=dr(r);Y(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");let s=!!t?.disableWarnings,i=Mg(e),{host:a,port:u}=Mw(e),c=u===null?"":`:${u}`,l={url:`${i}//${a}${c}/`},h=Object.freeze({host:a,port:u,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){Y(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),Y(Ot(l,n.config.emulator)&&Ot(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=l,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,sr(a)?Xa(`${i}//${a}${c}`):s||Gw()}function Mg(r){let e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Mw(r){let e=Mg(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};let n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){let i=s[1];return{host:i,port:rg(n.substr(i.length+1))}}else{let[i,a]=n.split(":");return{host:i,port:rg(a)}}}function rg(r){if(!r)return null;let e=Number(r);return isNaN(e)?null:e}function Gw(){function r(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}var ur=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,t){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}};async function Uw(r,e){return tt(r,"POST","/v1/accounts:signUp",e)}async function Hw(r,e){return fr(r,"POST","/v1/accounts:signInWithPassword",je(r,e))}async function qw(r,e){return fr(r,"POST","/v1/accounts:signInWithEmailLink",je(r,e))}async function jw(r,e){return fr(r,"POST","/v1/accounts:signInWithEmailLink",je(r,e))}var Ri=class r extends ur{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new r(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new r(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ti(e,t,"signInWithPassword",Hw,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return qw(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ti(e,n,"signUpPassword",Uw,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return jw(e,{idToken:t,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function es(r,e){return fr(r,"POST","/v1/accounts:signInWithIdp",je(r,e))}var Kw="http://localhost",cr=class r extends ur{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):At("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;let a=new r(n,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return es(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,es(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,es(e,t)}buildRequest(){let e={requestUri:Kw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yr(t)}return e}};async function sg(r,e){return tt(r,"POST","/v1/accounts:sendVerificationCode",je(r,e))}async function Jw(r,e){return fr(r,"POST","/v1/accounts:signInWithPhoneNumber",je(r,e))}async function zw(r,e){let t=await fr(r,"POST","/v1/accounts:signInWithPhoneNumber",je(r,e));if(t.temporaryProof)throw _i(r,"account-exists-with-different-credential",t);return t}var Ww={USER_NOT_FOUND:"user-not-found"};async function Qw(r,e){let t={...e,operation:"REAUTH"};return fr(r,"POST","/v1/accounts:signInWithPhoneNumber",je(r,t),Ww)}var Si=class r extends ur{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new r({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new r({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Jw(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return zw(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return Qw(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:s}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:i}=e;return!n&&!t&&!s&&!i?null:new r({verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:i})}};function $w(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yw(r){let e=Xr(Zr(r)).link,t=e?Xr(Zr(e)).deep_link_id:null,n=Xr(Zr(r)).deep_link_id;return(n?Xr(Zr(n)).link:null)||n||t||e||r}var mo=class r{constructor(e){let t=Xr(Zr(e)),n=t.apiKey??null,s=t.oobCode??null,i=$w(t.mode??null);Y(n&&s&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){let t=Yw(e);try{return new r(t)}catch{return null}}};var ts=class r{constructor(){this.providerId=r.PROVIDER_ID}static credential(e,t){return Ri._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=mo.parseLink(t);return Y(n,"argument-error"),Ri._fromEmailAndCode(e,n.code,n.tenantId)}};ts.PROVIDER_ID="password";ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var Pi=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var lr=class extends Pi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var Ni=class r extends lr{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return r.credentialFromTaggedObject(e)}static credentialFromError(e){return r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return r.credential(e.oauthAccessToken)}catch{return null}}};Ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ni.PROVIDER_ID="facebook.com";var Br=class r extends lr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return r.credentialFromTaggedObject(e)}static credentialFromError(e){return r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return r.credential(t,n)}catch{return null}}};Br.GOOGLE_SIGN_IN_METHOD="google.com";Br.PROVIDER_ID="google.com";var Oi=class r extends lr{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return r.credentialFromTaggedObject(e)}static credentialFromError(e){return r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return r.credential(e.oauthAccessToken)}catch{return null}}};Oi.GITHUB_SIGN_IN_METHOD="github.com";Oi.PROVIDER_ID="github.com";var xi=class r extends lr{constructor(){super("twitter.com")}static credential(e,t){return cr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return r.credentialFromTaggedObject(e)}static credentialFromError(e){return r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return r.credential(t,n)}catch{return null}}};xi.TWITTER_SIGN_IN_METHOD="twitter.com";xi.PROVIDER_ID="twitter.com";var Fi=class r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){let i=await Fn._fromIdTokenResponse(e,n,s),a=ig(n);return new r({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);let s=ig(n);return new r({user:e,providerId:s,_tokenResponse:n,operationType:t})}};function ig(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}var dl=class r extends Ct{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,r.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new r(e,t,n,s)}};function Gg(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?dl._fromErrorAndOperation(r,i,e,n):i})}async function Xw(r,e,t=!1){let n=await Ai(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Fi._forOperation(r,"link",n)}async function Zw(r,e,t=!1){let{auth:n}=r;if(mt(n.app))return Promise.reject(ar(n));let s="reauthenticate";try{let i=await Ai(r,Gg(n,s,e,r),t);Y(i.idToken,n,"internal-error");let a=Dl(i.idToken);Y(a,n,"internal-error");let{sub:u}=a;return Y(r.uid===u,n,"user-mismatch"),Fi._forOperation(r,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&At(n,"user-mismatch"),i}}async function eI(r,e,t=!1){if(mt(r.app))return Promise.reject(ar(r));let n="signIn",s=await Gg(r,n,e),i=await Fi._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function Ug(r,e,t,n){return ot(r).onIdTokenChanged(e,t,n)}function Hg(r,e,t){return ot(r).beforeAuthStateChanged(e,t)}function Lo(r,e,t,n){return ot(r).onAuthStateChanged(e,t,n)}function ag(r,e){return tt(r,"POST","/v2/accounts/mfaEnrollment:start",je(r,e))}function tI(r,e){return tt(r,"POST","/v2/accounts/mfaEnrollment:finalize",je(r,e))}function nI(r,e){return tt(r,"POST","/v2/accounts/mfaEnrollment:start",je(r,e))}function rI(r,e){return tt(r,"POST","/v2/accounts/mfaEnrollment:finalize",je(r,e))}var Eo="__sak";var _o=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Eo,"1"),this.storage.removeItem(Eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var sI=1e3,iI=10,yo=class extends _o{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Og(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,c)=>{this.notifyListeners(a,c)});return}let n=e.key;t?this.detachListener():this.stopPolling();let s=()=>{let a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},i=this.storage.getItem(n);Sw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,iI):s()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},sI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};yo.type="LOCAL";var qg=yo;var aI=1e3;function tl(r){let e=r.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return document.cookie.match(t)?.[1]??null}function nl(r){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${r.split(":")[3]}`}var pl=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=nl(e);return window.cookieStore?(await window.cookieStore.get(t))?.value:tl(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let n=nl(e);document.cookie=`${n}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let n=nl(e);if(window.cookieStore){let u=l=>{let h=l.changed.find(g=>g.name===n);h&&t(h.value),l.deleted.find(g=>g.name===n)&&t(null)},c=()=>window.cookieStore.removeEventListener("change",u);return this.listenerUnsubscribes.set(t,c),window.cookieStore.addEventListener("change",u)}let s=tl(n),i=setInterval(()=>{let u=tl(n);u!==s&&(t(u),s=u)},aI),a=()=>clearInterval(i);this.listenerUnsubscribes.set(t,a)}_removeListener(e,t){let n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}};pl.type="COOKIE";var wo=class extends _o{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};wo.type="SESSION";var Al=wo;function oI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var Io=class r{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;let n=new r(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:n,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});let u=Array.from(a).map(async l=>l(t.origin,i)),c=await oI(u);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Io.receivers=[];function bl(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}var gl=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((u,c)=>{let l=bl("",20);s.port1.start();let h=setTimeout(()=>{c(new Error("unsupported_event"))},n);a={messageChannel:s,onMessage(d){let g=d;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),u(g.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function zt(){return window}function uI(r){zt().location.href=r}function jg(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function cI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lI(){return navigator?.serviceWorker?.controller||null}function BI(){return jg()?self:null}var Kg="firebaseLocalStorageDb",hI=1,Do="firebaseLocalStorage",Jg="fbase_key",hr=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function ko(r,e){return r.transaction([Do],e?"readwrite":"readonly").objectStore(Do)}function fI(){let r=indexedDB.deleteDatabase(Kg);return new hr(r).toPromise()}function zg(){let r=indexedDB.open(Kg,hI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{let n=r.result;try{n.createObjectStore(Do,{keyPath:Jg})}catch(s){t(s)}}),r.addEventListener("success",async()=>{let n=r.result;n.objectStoreNames.contains(Do)?e(n):(n.close(),await fI(),e(await zg()))})})}async function og(r,e,t){let n=ko(r,!0).put({[Jg]:e,value:t});return new hr(n).toPromise()}async function dI(r,e){let t=ko(r,!1).get(e),n=await new hr(t).toPromise();return n===void 0?null:n.value}function ug(r,e){let t=ko(r,!0).delete(e);return new hr(t).toPromise()}var pI=800,gI=3,To=class{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=zg(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{let n=await this._openDb();return await e(n)}catch(n){if(t++>gI)throw n;if(this.dbPromise){let s=this.dbPromise;this.dbPromise=null;try{(await s).close()}catch{}}}}async initializeServiceWorkerMessaging(){return jg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Io._getInstance(BI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await cI(),!this.activeServiceWorker)return;this.sender=new gl(this.activeServiceWorker);let e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await og(e,Eo,"1"),await ug(e,Eo)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>og(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(n=>dI(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ug(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{let e=await this._withRetries(s=>{let i=ko(s,!1).getAll();return new hr(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],n=new Set;if(e.length!==0)for(let{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(let s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||so(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e).catch(()=>{})),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}};To.type="LOCAL";var Wg=To;function cg(r,e){return tt(r,"POST","/v2/accounts/mfaSignIn:start",je(r,e))}function CI(r,e){return tt(r,"POST","/v2/accounts/mfaSignIn:finalize",je(r,e))}function mI(r,e){return tt(r,"POST","/v2/accounts/mfaSignIn:finalize",je(r,e))}var tb=Lg("rcb"),nb=new or(3e4,6e4);var oo="recaptcha";async function EI(r,e,t){if(!r._getRecaptchaConfig())try{await kw(r)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let n;if(typeof e=="string"?n={phoneNumber:e}:n=e,"session"in n){let s=n.session;if("phoneNumber"in n){Y(s.type==="enroll",r,"internal-error");let i={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:n.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Ti(r,i,"mfaSmsEnrollment",async(l,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===Di){Y(t?.type===oo,l,"argument-error");let d=await rl(l,h,t);return ag(l,d)}return ag(l,h)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).phoneSessionInfo.sessionInfo}else{Y(s.type==="signin",r,"internal-error");let i=n.multiFactorHint?.uid||n.multiFactorUid;Y(i,r,"missing-multi-factor-info");let a={mfaPendingCredential:s.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Ti(r,a,"mfaSmsSignIn",async(h,d)=>{if(d.phoneSignInInfo.captchaResponse===Di){Y(t?.type===oo,h,"argument-error");let g=await rl(h,d,t);return cg(h,g)}return cg(h,d)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:n.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Ti(r,s,"sendVerificationCode",async(c,l)=>{if(l.captchaResponse===Di){Y(t?.type===oo,c,"argument-error");let h=await rl(c,l,t);return sg(c,h)}return sg(c,l)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{t?._reset()}}async function rl(r,e,t){Y(t.type===oo,r,"argument-error");let n=await t.verify();Y(typeof n=="string",r,"argument-error");let s={...e};if("phoneEnrollmentInfo"in s){let i=s.phoneEnrollmentInfo.phoneNumber,a=s.phoneEnrollmentInfo.captchaResponse,u=s.phoneEnrollmentInfo.clientType,c=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:n,captchaResponse:a,clientType:u,recaptchaVersion:c}}),s}else if("phoneSignInInfo"in s){let i=s.phoneSignInInfo.captchaResponse,a=s.phoneSignInInfo.clientType,u=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:i,clientType:a,recaptchaVersion:u}}),s}else return Object.assign(s,{recaptchaToken:n}),s}var Li=class r{constructor(e){this.providerId=r.PROVIDER_ID,this.auth=dr(e)}verifyPhoneNumber(e,t){return EI(this.auth,e,ot(t))}static credential(e,t){return Si._fromVerification(e,t)}static credentialFromResult(e){let t=e;return r.credentialFromTaggedObject(t)}static credentialFromError(e){return r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?Si._fromTokenResponse(t,n):null}};Li.PROVIDER_ID="phone";Li.PHONE_SIGN_IN_METHOD="phone";function Qg(r,e){return e?ln(e):(Y(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}var ki=class extends ur{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,t){return es(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function _I(r){return eI(r.auth,new ki(r),r.bypassAuthState)}function yI(r){let{auth:e,user:t}=r;return Y(t,e,"internal-error"),Zw(t,new ki(r),r.bypassAuthState)}async function wI(r){let{auth:e,user:t}=r;return Y(t,e,"internal-error"),Xw(t,new ki(r),r.bypassAuthState)}var Ao=class{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{if(this.eventManager=await this.resolver._initialize(this.auth),!this.pendingPromise||(await this.onExecution(),!this.pendingPromise))return;this.eventManager.registerConsumer(this)}catch(n){this.pendingPromise&&this.reject(n)}})}async onAuthEvent(e){if(!this.pendingPromise)return;let{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:a,type:u}=e;if(a){this.reject(a);return}let c={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _I;case"linkViaPopup":case"linkViaRedirect":return wI;case"reauthViaPopup":case"reauthViaRedirect":return yI;default:At(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var II=new or(2e3,1e4);async function vl(r,e,t){if(mt(r.app))return Promise.reject(Ft(r,"operation-not-supported-in-this-environment"));let n=dr(r);Cw(r,e,Pi);let s=Qg(n,t);return new bo(n,"signInViaPopup",e,s).executeNotNull()}var bo=class r extends Ao{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");let e=bl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}pollUserCancellation(){let e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,II.get())};e()}};bo.currentPopupAction=null;var DI="pendingRedirect",uo=new Map,Cl=class extends Ao{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=uo.get(this.auth._key());if(!e){try{let n=await TI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}uo.set(this.auth._key(),e)}return this.bypassAuthState||uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function TI(r,e){let t=vI(e),n=bI(r);if(!await n._isAvailable())return!1;let s=await n._get(t)==="true";return await n._remove(t),s}function AI(r,e){uo.set(r._key(),e)}function bI(r){return ln(r._redirectPersistence)}function vI(r){return ao(DI,r.config.apiKey,r.name)}async function RI(r,e,t=!1){if(mt(r.app))return Promise.reject(ar(r));let n=dr(r),s=Qg(n,e),a=await new Cl(n,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}var SI=10*60*1e3,ml=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!$g(e)){let n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Ft(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SI&&this.cachedEventUids.clear(),this.cachedEventUids.has(lg(e))}saveEventToCache(e){this.cachedEventUids.add(lg(e)),this.lastProcessedEventTime=Date.now()}};function lg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function $g({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function PI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $g(r);default:return!1}}async function NI(r,e={}){return tt(r,"GET","/v1/projects",e)}var OI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xI=/^https?/;async function FI(r){if(r.config.emulator)return;let{authorizedDomains:e}=await NI(r);for(let t of e)try{if(LI(t))return}catch{}At(r,"unauthorized-domain")}function LI(r){let e=il(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){let a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!xI.test(t))return!1;if(OI.test(r))return n===r;let s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}var kI=new or(3e4,6e4);function Bg(){let r=zt().___jsl;if(r?.H){for(let e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function VI(r){return new Promise((e,t)=>{function n(){Bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bg(),t(Ft(r,"network-request-failed"))},timeout:kI.get()})}if(zt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(zt().gapi?.load)n();else{let s=Lg("iframefcb");return zt()[s]=()=>{gapi.load?n():t(Ft(r,"network-request-failed"))},Fg(`${Fw()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw co=null,e})}var co=null;function MI(r){return co=co||VI(r),co}var GI=new or(5e3,15e3),UI="__/auth/iframe",HI="emulator/auth/iframe",qI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KI(r){let e=r.config;Y(e.authDomain,r,"auth-domain-config-required");let t=e.emulator?Il(e,HI):`https://${r.config.authDomain}/${UI}`,n={apiKey:e.apiKey,appName:r.name,v:On},s=jI.get(r.config.apiHost);s&&(n.eid=s);let i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Yr(n).slice(1)}`}async function JI(r){let e=await MI(r),t=zt().gapi;return Y(t,r,"internal-error"),e.open({where:document.body,url:KI(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qI,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});let a=Ft(r,"network-request-failed"),u=zt().setTimeout(()=>{i(a)},GI.get());function c(){zt().clearTimeout(u),s(n)}n.ping(c).then(c,()=>{i(a)})}))}var zI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WI=500,QI=600,$I="_blank",YI="http://localhost",vo=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function XI(r,e,t,n=WI,s=QI){let i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),u="",c={...zI,width:n.toString(),height:s.toString(),top:i,left:a},l=qe().toLowerCase();t&&(u=vg(l)?$I:t),Ag(l)&&(e=e||YI,c.scrollbars="yes");let h=Object.entries(c).reduce((g,[w,D])=>`${g}${w}=${D},`,"");if(Rw(l)&&u!=="_self")return ZI(e||"",u),new vo(null);let d=window.open(e||"",u,h);Y(d,r,"popup-blocked");try{d.focus()}catch{}return new vo(d)}function ZI(r,e){let t=document.createElement("a");t.href=r,t.target=e;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}var eD="__/auth/handler",tD="emulator/auth/handler",nD=encodeURIComponent("fac");async function hg(r,e,t,n,s,i){Y(r.config.authDomain,r,"auth-domain-config-required"),Y(r.config.apiKey,r,"invalid-api-key");let a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:On,eventId:s};if(e instanceof Pi){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",Fp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[h,d]of Object.entries(i||{}))a[h]=d}if(e instanceof lr){let h=e.getScopes().filter(d=>d!=="");h.length>0&&(a.scopes=h.join(","))}r.tenantId&&(a.tid=r.tenantId);let u=a;for(let h of Object.keys(u))u[h]===void 0&&delete u[h];let c=await r._getAppCheckToken(),l=c?`#${nD}=${encodeURIComponent(c)}`:"";return`${rD(r)}?${Yr(u).slice(1)}${l}`}function rD({config:r}){return r.emulator?Il(r,tD):`https://${r.authDomain}/${eD}`}var sl="webStorageSupport",El=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Al,this._completeRedirectFn=RI,this._overrideRedirectResult=AI}async _openPopup(e,t,n,s){Bn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");let i=await hg(e,t,n,il(),s);return XI(e,i,bl())}async _openRedirect(e,t,n,s){await this._originValidation(e);let i=await hg(e,t,n,il(),s);return uI(i),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Bn(i,"If manager is not set, promise should be"),i)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await JI(e),n=new ml(e);return t.register("authEvent",s=>(Y(s?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sl,{type:sl},s=>{let i=s?.[0]?.[sl];i!==void 0&&t(!!i),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=FI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Og()||bg()||Tl()}},Yg=El,Ro=class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Jt("unexpected MultiFactorSessionType")}}},_l=class r extends Ro{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new r(e)}_finalizeEnroll(e,t,n){return tI(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return CI(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},So=class{constructor(){}static assertion(e){return _l._fromCredential(e)}};So.FACTOR_ID="phone";var Po=class{static assertionForEnrollment(e,t){return No._fromSecret(e,t)}static assertionForSignIn(e,t){return No._fromEnrollmentId(e,t)}static async generateSecret(e){let t=e;Y(typeof t.user?.auth<"u","internal-error");let n=await nI(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Oo._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}};Po.FACTOR_ID="totp";var No=class r extends Ro{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new r(t,void 0,e)}static _fromEnrollmentId(e,t){return new r(t,e)}async _finalizeEnroll(e,t,n){return Y(typeof this.secret<"u",e,"argument-error"),rI(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){Y(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let n={verificationCode:this.otp};return mI(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}},Oo=class r{constructor(e,t,n,s,i,a,u){this.sessionInfo=a,this.auth=u,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=s,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new r(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let n=!1;return(ro(e)||ro(t))&&(n=!0),n&&(ro(e)&&(e=this.auth.currentUser?.email||"unknownuser"),ro(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function ro(r){return typeof r>"u"||r?.length===0}var fg="@firebase/auth",dg="1.13.9";var yl=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function sD(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iD(r){Nn(new Tt("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=n.options;Y(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});let c={apiKey:a,authDomain:u,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xg(r)},l=new Bl(n,s,i,c);return Vw(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Nn(new Tt("auth-internal",e=>{let t=dr(e.getProvider("auth").getImmediate());return(n=>new yl(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(fg,dg,sD(r)),xt(fg,dg,"esm2020")}var aD=5*60,oD=kc("authIdTokenMaxAge")||aD,pg=null,uD=r=>async e=>{let t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>oD)return;let s=t?.token;pg!==s&&(pg=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Rl(r=no()){let e=mi(r,"auth");if(e.isInitialized())return e.getImmediate();let t=kg(r,{popupRedirectResolver:Yg,persistence:[Wg,qg,Al]}),n=kc("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){let i=new URL(n,location.origin);if(location.origin===i.origin){let a=uD(i.toString());Hg(t,a,()=>a(t.currentUser)),Ug(t,u=>a(u))}}let s=Fc("auth");return s&&Vg(t,`http://${s}`),t}function cD(){return document.getElementsByTagName("head")?.[0]??document}Ow({loadJS(r){return new Promise((e,t)=>{let n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{let i=Ft("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",cD().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iD("Browser");var Xg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zg={};var hn,Sl;(function(){var r;function e(A,E){function y(){}y.prototype=E.prototype,A.F=E.prototype,A.prototype=new y,A.prototype.constructor=A,A.D=function(v,T,S){for(var _=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)_[lt-2]=arguments[lt];return E.prototype[T].apply(v,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,E,y){y||(y=0);let v=Array(16);if(typeof E=="string")for(var T=0;T<16;++T)v[T]=E.charCodeAt(y++)|E.charCodeAt(y++)<<8|E.charCodeAt(y++)<<16|E.charCodeAt(y++)<<24;else for(T=0;T<16;++T)v[T]=E[y++]|E[y++]<<8|E[y++]<<16|E[y++]<<24;E=A.g[0],y=A.g[1],T=A.g[2];let S=A.g[3],_;_=E+(S^y&(T^S))+v[0]+3614090360&4294967295,E=y+(_<<7&4294967295|_>>>25),_=S+(T^E&(y^T))+v[1]+3905402710&4294967295,S=E+(_<<12&4294967295|_>>>20),_=T+(y^S&(E^y))+v[2]+606105819&4294967295,T=S+(_<<17&4294967295|_>>>15),_=y+(E^T&(S^E))+v[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=E+(S^y&(T^S))+v[4]+4118548399&4294967295,E=y+(_<<7&4294967295|_>>>25),_=S+(T^E&(y^T))+v[5]+1200080426&4294967295,S=E+(_<<12&4294967295|_>>>20),_=T+(y^S&(E^y))+v[6]+2821735955&4294967295,T=S+(_<<17&4294967295|_>>>15),_=y+(E^T&(S^E))+v[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=E+(S^y&(T^S))+v[8]+1770035416&4294967295,E=y+(_<<7&4294967295|_>>>25),_=S+(T^E&(y^T))+v[9]+2336552879&4294967295,S=E+(_<<12&4294967295|_>>>20),_=T+(y^S&(E^y))+v[10]+4294925233&4294967295,T=S+(_<<17&4294967295|_>>>15),_=y+(E^T&(S^E))+v[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=E+(S^y&(T^S))+v[12]+1804603682&4294967295,E=y+(_<<7&4294967295|_>>>25),_=S+(T^E&(y^T))+v[13]+4254626195&4294967295,S=E+(_<<12&4294967295|_>>>20),_=T+(y^S&(E^y))+v[14]+2792965006&4294967295,T=S+(_<<17&4294967295|_>>>15),_=y+(E^T&(S^E))+v[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=E+(T^S&(y^T))+v[1]+4129170786&4294967295,E=y+(_<<5&4294967295|_>>>27),_=S+(y^T&(E^y))+v[6]+3225465664&4294967295,S=E+(_<<9&4294967295|_>>>23),_=T+(E^y&(S^E))+v[11]+643717713&4294967295,T=S+(_<<14&4294967295|_>>>18),_=y+(S^E&(T^S))+v[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=E+(T^S&(y^T))+v[5]+3593408605&4294967295,E=y+(_<<5&4294967295|_>>>27),_=S+(y^T&(E^y))+v[10]+38016083&4294967295,S=E+(_<<9&4294967295|_>>>23),_=T+(E^y&(S^E))+v[15]+3634488961&4294967295,T=S+(_<<14&4294967295|_>>>18),_=y+(S^E&(T^S))+v[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=E+(T^S&(y^T))+v[9]+568446438&4294967295,E=y+(_<<5&4294967295|_>>>27),_=S+(y^T&(E^y))+v[14]+3275163606&4294967295,S=E+(_<<9&4294967295|_>>>23),_=T+(E^y&(S^E))+v[3]+4107603335&4294967295,T=S+(_<<14&4294967295|_>>>18),_=y+(S^E&(T^S))+v[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=E+(T^S&(y^T))+v[13]+2850285829&4294967295,E=y+(_<<5&4294967295|_>>>27),_=S+(y^T&(E^y))+v[2]+4243563512&4294967295,S=E+(_<<9&4294967295|_>>>23),_=T+(E^y&(S^E))+v[7]+1735328473&4294967295,T=S+(_<<14&4294967295|_>>>18),_=y+(S^E&(T^S))+v[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=E+(y^T^S)+v[5]+4294588738&4294967295,E=y+(_<<4&4294967295|_>>>28),_=S+(E^y^T)+v[8]+2272392833&4294967295,S=E+(_<<11&4294967295|_>>>21),_=T+(S^E^y)+v[11]+1839030562&4294967295,T=S+(_<<16&4294967295|_>>>16),_=y+(T^S^E)+v[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=E+(y^T^S)+v[1]+2763975236&4294967295,E=y+(_<<4&4294967295|_>>>28),_=S+(E^y^T)+v[4]+1272893353&4294967295,S=E+(_<<11&4294967295|_>>>21),_=T+(S^E^y)+v[7]+4139469664&4294967295,T=S+(_<<16&4294967295|_>>>16),_=y+(T^S^E)+v[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=E+(y^T^S)+v[13]+681279174&4294967295,E=y+(_<<4&4294967295|_>>>28),_=S+(E^y^T)+v[0]+3936430074&4294967295,S=E+(_<<11&4294967295|_>>>21),_=T+(S^E^y)+v[3]+3572445317&4294967295,T=S+(_<<16&4294967295|_>>>16),_=y+(T^S^E)+v[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=E+(y^T^S)+v[9]+3654602809&4294967295,E=y+(_<<4&4294967295|_>>>28),_=S+(E^y^T)+v[12]+3873151461&4294967295,S=E+(_<<11&4294967295|_>>>21),_=T+(S^E^y)+v[15]+530742520&4294967295,T=S+(_<<16&4294967295|_>>>16),_=y+(T^S^E)+v[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=E+(T^(y|~S))+v[0]+4096336452&4294967295,E=y+(_<<6&4294967295|_>>>26),_=S+(y^(E|~T))+v[7]+1126891415&4294967295,S=E+(_<<10&4294967295|_>>>22),_=T+(E^(S|~y))+v[14]+2878612391&4294967295,T=S+(_<<15&4294967295|_>>>17),_=y+(S^(T|~E))+v[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=E+(T^(y|~S))+v[12]+1700485571&4294967295,E=y+(_<<6&4294967295|_>>>26),_=S+(y^(E|~T))+v[3]+2399980690&4294967295,S=E+(_<<10&4294967295|_>>>22),_=T+(E^(S|~y))+v[10]+4293915773&4294967295,T=S+(_<<15&4294967295|_>>>17),_=y+(S^(T|~E))+v[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=E+(T^(y|~S))+v[8]+1873313359&4294967295,E=y+(_<<6&4294967295|_>>>26),_=S+(y^(E|~T))+v[15]+4264355552&4294967295,S=E+(_<<10&4294967295|_>>>22),_=T+(E^(S|~y))+v[6]+2734768916&4294967295,T=S+(_<<15&4294967295|_>>>17),_=y+(S^(T|~E))+v[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=E+(T^(y|~S))+v[4]+4149444226&4294967295,E=y+(_<<6&4294967295|_>>>26),_=S+(y^(E|~T))+v[11]+3174756917&4294967295,S=E+(_<<10&4294967295|_>>>22),_=T+(E^(S|~y))+v[2]+718787259&4294967295,T=S+(_<<15&4294967295|_>>>17),_=y+(S^(T|~E))+v[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,A.g[2]=A.g[2]+T&4294967295,A.g[3]=A.g[3]+S&4294967295}n.prototype.v=function(A,E){E===void 0&&(E=A.length);let y=E-this.blockSize,v=this.C,T=this.h,S=0;for(;S<E;){if(T==0)for(;S<=y;)s(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<E;)if(v[T++]=A.charCodeAt(S++),T==this.blockSize){s(this,v),T=0;break}}else for(;S<E;)if(v[T++]=A[S++],T==this.blockSize){s(this,v),T=0;break}}this.h=T,this.o+=E},n.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;E=this.o*8;for(var y=A.length-8;y<A.length;++y)A[y]=E&255,E/=256;for(this.v(A),A=Array(16),E=0,y=0;y<4;++y)for(let v=0;v<32;v+=8)A[E++]=this.g[y]>>>v&255;return A};function i(A,E){var y=u;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=E(A)}function a(A,E){this.h=E;let y=[],v=!0;for(let T=A.length-1;T>=0;T--){let S=A[T]|0;v&&S==E||(y[T]=S,v=!1)}this.g=y}var u={};function c(A){return-128<=A&&A<128?i(A,function(E){return new a([E|0],E<0?-1:0)}):new a([A|0],A<0?-1:0)}function l(A){if(isNaN(A)||!isFinite(A))return d;if(A<0)return k(l(-A));let E=[],y=1;for(let v=0;A>=y;v++)E[v]=A/y|0,y*=4294967296;return new a(E,0)}function h(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return k(h(A.substring(1),E));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');let y=l(Math.pow(E,8)),v=d;for(let S=0;S<A.length;S+=8){var T=Math.min(8,A.length-S);let _=parseInt(A.substring(S,S+T),E);T<8?(T=l(Math.pow(E,T)),v=v.j(T).add(l(_))):(v=v.j(y),v=v.add(l(_)))}return v}var d=c(0),g=c(1),w=c(16777216);r=a.prototype,r.m=function(){if(P(this))return-k(this).m();let A=0,E=1;for(let y=0;y<this.g.length;y++){let v=this.i(y);A+=(v>=0?v:4294967296+v)*E,E*=4294967296}return A},r.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(D(this))return"0";if(P(this))return"-"+k(this).toString(A);let E=l(Math.pow(A,6));var y=this;let v="";for(;;){let T=Se(y,E).g;y=q(y,T.j(E));let S=((y.g.length>0?y.g[0]:y.h)>>>0).toString(A);if(y=T,D(y))return S+v;for(;S.length<6;)S="0"+S;v=S+v}},r.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function D(A){if(A.h!=0)return!1;for(let E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function P(A){return A.h==-1}r.l=function(A){return A=q(this,A),P(A)?-1:D(A)?0:1};function k(A){let E=A.g.length,y=[];for(let v=0;v<E;v++)y[v]=~A.g[v];return new a(y,~A.h).add(g)}r.abs=function(){return P(this)?k(this):this},r.add=function(A){let E=Math.max(this.g.length,A.g.length),y=[],v=0;for(let T=0;T<=E;T++){let S=v+(this.i(T)&65535)+(A.i(T)&65535),_=(S>>>16)+(this.i(T)>>>16)+(A.i(T)>>>16);v=_>>>16,S&=65535,_&=65535,y[T]=_<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function q(A,E){return A.add(k(E))}r.j=function(A){if(D(this)||D(A))return d;if(P(this))return P(A)?k(this).j(k(A)):k(k(this).j(A));if(P(A))return k(this.j(k(A)));if(this.l(w)<0&&A.l(w)<0)return l(this.m()*A.m());let E=this.g.length+A.g.length,y=[];for(var v=0;v<2*E;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(let T=0;T<A.g.length;T++){let S=this.i(v)>>>16,_=this.i(v)&65535,lt=A.i(T)>>>16,Xn=A.i(T)&65535;y[2*v+2*T]+=_*Xn,Q(y,2*v+2*T),y[2*v+2*T+1]+=S*Xn,Q(y,2*v+2*T+1),y[2*v+2*T+1]+=_*lt,Q(y,2*v+2*T+1),y[2*v+2*T+2]+=S*lt,Q(y,2*v+2*T+2)}for(A=0;A<E;A++)y[A]=y[2*A+1]<<16|y[2*A];for(A=E;A<2*E;A++)y[A]=0;return new a(y,0)};function Q(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function se(A,E){this.g=A,this.h=E}function Se(A,E){if(D(E))throw Error("division by zero");if(D(A))return new se(d,d);if(P(A))return E=Se(k(A),E),new se(k(E.g),k(E.h));if(P(E))return E=Se(A,k(E)),new se(k(E.g),E.h);if(A.g.length>30){if(P(A)||P(E))throw Error("slowDivide_ only works with positive integers.");for(var y=g,v=E;v.l(A)<=0;)y=Ze(y),v=Ze(v);var T=be(y,1),S=be(v,1);for(v=be(v,2),y=be(y,2);!D(v);){var _=S.add(v);_.l(A)<=0&&(T=T.add(y),S=_),v=be(v,1),y=be(y,1)}return E=q(A,T.j(E)),new se(T,E)}for(T=d;A.l(E)>=0;){for(y=Math.max(1,Math.floor(A.m()/E.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),S=l(y),_=S.j(E);P(_)||_.l(A)>0;)y-=v,S=l(y),_=S.j(E);D(S)&&(S=g),T=T.add(S),A=q(A,_)}return new se(T,A)}r.B=function(A){return Se(this,A).h},r.and=function(A){let E=Math.max(this.g.length,A.g.length),y=[];for(let v=0;v<E;v++)y[v]=this.i(v)&A.i(v);return new a(y,this.h&A.h)},r.or=function(A){let E=Math.max(this.g.length,A.g.length),y=[];for(let v=0;v<E;v++)y[v]=this.i(v)|A.i(v);return new a(y,this.h|A.h)},r.xor=function(A){let E=Math.max(this.g.length,A.g.length),y=[];for(let v=0;v<E;v++)y[v]=this.i(v)^A.i(v);return new a(y,this.h^A.h)};function Ze(A){let E=A.g.length+1,y=[];for(let v=0;v<E;v++)y[v]=A.i(v)<<1|A.i(v-1)>>>31;return new a(y,A.h)}function be(A,E){let y=E>>5;E%=32;let v=A.g.length-y,T=[];for(let S=0;S<v;S++)T[S]=E>0?A.i(S+y)>>>E|A.i(S+y+1)<<32-E:A.i(S+y);return new a(T,A.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Sl=Zg.Md5=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=l,a.fromString=h,hn=Zg.Integer=a}).apply(typeof Xg<"u"?Xg:typeof self<"u"?self:typeof window<"u"?window:{});function Ke(r,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(r):n?n.value:e.get(r)}var Vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fn={};var Pl,lD,ns,Nl,Vi,Mo,Ol,xl,Fl;(function(){var r,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vo=="object"&&Vo];for(var B=0;B<o.length;++B){var f=o[B];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function s(o,B){if(B)e:{var f=n;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in f))break e;f=f[R]}o=o[o.length-1],p=f[o],B=B(p),B!=p&&B!=null&&e(f,o,{configurable:!0,writable:!0,value:B})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(B){var f=[],p;for(p in B)Object.prototype.hasOwnProperty.call(B,p)&&f.push([p,B[p]]);return f}});var i=i||{},a=this||self;function u(o){var B=typeof o;return B=="object"&&o!=null||B=="function"}function c(o,B,f){return o.call.apply(o.bind,arguments)}function l(o,B,f){return l=c,l.apply(null,arguments)}function h(o,B){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function d(o,B){function f(){}f.prototype=B.prototype,o.Z=B.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(p,R,N){for(var j=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)j[ie-2]=arguments[ie];return B.prototype[R].apply(p,j)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function w(o){let B=o.length;if(B>0){let f=Array(B);for(let p=0;p<B;p++)f[p]=o[p];return f}return[]}function D(o,B){for(let p=1;p<arguments.length;p++){let R=arguments[p];var f=typeof R;if(f=f!="object"?f:R?Array.isArray(R)?"array":f:"null",f=="array"||f=="object"&&typeof R.length=="number"){f=o.length||0;let N=R.length||0;o.length=f+N;for(let j=0;j<N;j++)o[f+j]=R[j]}else o.push(R)}}class P{constructor(B,f){this.i=B,this.j=f,this.h=0,this.g=null}get(){let B;return this.h>0?(this.h--,B=this.g,this.g=B.next,B.next=null):B=this.i(),B}}function k(o){a.setTimeout(()=>{throw o},0)}function q(){var o=A;let B=null;return o.g&&(B=o.g,o.g=o.g.next,o.g||(o.h=null),B.next=null),B}class Q{constructor(){this.h=this.g=null}add(B,f){let p=se.get();p.set(B,f),this.h?this.h.next=p:this.g=p,this.h=p}}var se=new P(()=>new Se,o=>o.reset());class Se{constructor(){this.next=this.g=this.h=null}set(B,f){this.h=B,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ze,be=!1,A=new Q,E=()=>{let o=Promise.resolve(void 0);Ze=()=>{o.then(y)}};function y(){for(var o;o=q();){try{o.h.call(o.g)}catch(f){k(f)}var B=se;B.j(o),B.h<100&&(B.h++,o.next=B.g,B.g=o)}be=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,B){this.type=o,this.g=this.target=B,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,B=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let f=()=>{};a.addEventListener("test",f,B),a.removeEventListener("test",f,B)}catch{}return o}();function _(o){return/^[\s\xa0]*$/.test(o)}function lt(o,B){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,B)}d(lt,T),lt.prototype.init=function(o,B){let f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=B,B=o.relatedTarget,B||(f=="mouseover"?B=o.fromElement:f=="mouseout"&&(B=o.toElement)),this.relatedTarget=B,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&lt.Z.h.call(this)},lt.prototype.h=function(){lt.Z.h.call(this);let o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Xn="closure_listenable_"+(Math.random()*1e6|0),D_=0;function T_(o,B,f,p,R){this.listener=o,this.proxy=null,this.src=B,this.type=f,this.capture=!!p,this.ha=R,this.key=++D_,this.da=this.fa=!1}function xa(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Fa(o,B,f){for(let p in o)B.call(f,o[p],p,o)}function A_(o,B){for(let f in o)B.call(void 0,o[f],f,o)}function _d(o){let B={};for(let f in o)B[f]=o[f];return B}let yd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wd(o,B){let f,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(f in p)o[f]=p[f];for(let N=0;N<yd.length;N++)f=yd[N],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function La(o){this.src=o,this.g={},this.h=0}La.prototype.add=function(o,B,f,p,R){let N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);let j=lc(o,B,p,R);return j>-1?(B=o[j],f||(B.fa=!1)):(B=new T_(B,this.src,N,!!p,R),B.fa=f,o.push(B)),B};function cc(o,B){let f=B.type;if(f in o.g){var p=o.g[f],R=Array.prototype.indexOf.call(p,B,void 0),N;(N=R>=0)&&Array.prototype.splice.call(p,R,1),N&&(xa(B),o.g[f].length==0&&(delete o.g[f],o.h--))}}function lc(o,B,f,p){for(let R=0;R<o.length;++R){let N=o[R];if(!N.da&&N.listener==B&&N.capture==!!f&&N.ha==p)return R}return-1}var Bc="closure_lm_"+(Math.random()*1e6|0),hc={};function Id(o,B,f,p,R){if(Array.isArray(B)){for(let N=0;N<B.length;N++)Id(o,B[N],f,p,R);return null}return f=Ad(f),o&&o[Xn]?o.J(B,f,u(p)?!!p.capture:!1,R):b_(o,B,f,!1,p,R)}function b_(o,B,f,p,R,N){if(!B)throw Error("Invalid event type");let j=u(R)?!!R.capture:!!R,ie=dc(o);if(ie||(o[Bc]=ie=new La(o)),f=ie.add(B,f,p,j,N),f.proxy)return f;if(p=v_(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)S||(R=j),R===void 0&&(R=!1),o.addEventListener(B.toString(),p,R);else if(o.attachEvent)o.attachEvent(Td(B.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function v_(){function o(f){return B.call(o.src,o.listener,f)}let B=R_;return o}function Dd(o,B,f,p,R){if(Array.isArray(B))for(var N=0;N<B.length;N++)Dd(o,B[N],f,p,R);else p=u(p)?!!p.capture:!!p,f=Ad(f),o&&o[Xn]?(o=o.i,N=String(B).toString(),N in o.g&&(B=o.g[N],f=lc(B,f,p,R),f>-1&&(xa(B[f]),Array.prototype.splice.call(B,f,1),B.length==0&&(delete o.g[N],o.h--)))):o&&(o=dc(o))&&(B=o.g[B.toString()],o=-1,B&&(o=lc(B,f,p,R)),(f=o>-1?B[o]:null)&&fc(f))}function fc(o){if(typeof o!="number"&&o&&!o.da){var B=o.src;if(B&&B[Xn])cc(B.i,o);else{var f=o.type,p=o.proxy;B.removeEventListener?B.removeEventListener(f,p,o.capture):B.detachEvent?B.detachEvent(Td(f),p):B.addListener&&B.removeListener&&B.removeListener(p),(f=dc(B))?(cc(f,o),f.h==0&&(f.src=null,B[Bc]=null)):xa(o)}}}function Td(o){return o in hc?hc[o]:hc[o]="on"+o}function R_(o,B){if(o.da)o=!0;else{B=new lt(B,this);let f=o.listener,p=o.ha||o.src;o.fa&&fc(o),o=f.call(p,B)}return o}function dc(o){return o=o[Bc],o instanceof La?o:null}var pc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ad(o){return typeof o=="function"?o:(o[pc]||(o[pc]=function(B){return o.handleEvent(B)}),o[pc])}function et(){v.call(this),this.i=new La(this),this.M=this,this.G=null}d(et,v),et.prototype[Xn]=!0,et.prototype.removeEventListener=function(o,B,f,p){Dd(this,o,B,f,p)};function it(o,B){var f,p=o.G;if(p)for(f=[];p;p=p.G)f.push(p);if(o=o.M,p=B.type||B,typeof B=="string")B=new T(B,o);else if(B instanceof T)B.target=B.target||o;else{var R=B;B=new T(p,o),wd(B,R)}R=!0;let N,j;if(f)for(j=f.length-1;j>=0;j--)N=B.g=f[j],R=ka(N,p,!0,B)&&R;if(N=B.g=o,R=ka(N,p,!0,B)&&R,R=ka(N,p,!1,B)&&R,f)for(j=0;j<f.length;j++)N=B.g=f[j],R=ka(N,p,!1,B)&&R}et.prototype.N=function(){if(et.Z.N.call(this),this.i){var o=this.i;for(let B in o.g){let f=o.g[B];for(let p=0;p<f.length;p++)xa(f[p]);delete o.g[B],o.h--}}this.G=null},et.prototype.J=function(o,B,f,p){return this.i.add(String(o),B,!1,f,p)},et.prototype.K=function(o,B,f,p){return this.i.add(String(o),B,!0,f,p)};function ka(o,B,f,p){if(B=o.i.g[String(B)],!B)return!0;B=B.concat();let R=!0;for(let N=0;N<B.length;++N){let j=B[N];if(j&&!j.da&&j.capture==f){let ie=j.listener,Me=j.ha||j.src;j.fa&&cc(o.i,j),R=ie.call(Me,p)!==!1&&R}}return R&&!p.defaultPrevented}function S_(o,B){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=l(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(B)>2147483647?-1:a.setTimeout(o,B||0)}function bd(o){o.g=S_(()=>{o.g=null,o.i&&(o.i=!1,bd(o))},o.l);let B=o.h;o.h=null,o.m.apply(null,B)}class P_ extends v{constructor(B,f){super(),this.m=B,this.l=f,this.h=null,this.i=!1,this.g=null}j(B){this.h=arguments,this.g?this.i=!0:bd(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ei(o){v.call(this),this.h=o,this.g={}}d(ei,v);var vd=[];function Rd(o){Fa(o.g,function(B,f){this.g.hasOwnProperty(f)&&fc(B)},o),o.g={}}ei.prototype.N=function(){ei.Z.N.call(this),Rd(this)},ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gc=a.JSON.stringify,N_=a.JSON.parse,O_=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Sd(){}function Pd(){}var ti={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Cc(){T.call(this,"d")}d(Cc,T);function mc(){T.call(this,"c")}d(mc,T);var Zn={},Nd=null;function Va(){return Nd=Nd||new et}Zn.Ia="serverreachability";function Od(o){T.call(this,Zn.Ia,o)}d(Od,T);function ni(o){let B=Va();it(B,new Od(B))}Zn.STAT_EVENT="statevent";function xd(o,B){T.call(this,Zn.STAT_EVENT,o),this.stat=B}d(xd,T);function at(o){let B=Va();it(B,new xd(B,o))}Zn.Ja="timingevent";function Fd(o,B){T.call(this,Zn.Ja,o),this.size=B}d(Fd,T);function ri(o,B){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},B)}function si(){this.g=!0}si.prototype.ua=function(){this.g=!1};function x_(o,B,f,p,R,N){o.info(function(){if(o.g)if(N){var j="",ie=N.split("&");for(let Ce=0;Ce<ie.length;Ce++){var Me=ie[Ce].split("=");if(Me.length>1){let He=Me[0];Me=Me[1];let jt=He.split("_");j=jt.length>=2&&jt[1]=="type"?j+(He+"="+Me+"&"):j+(He+"=redacted&")}}}else j=null;else j=N;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+B+`
`+f+`
`+j})}function F_(o,B,f,p,R,N,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+B+`
`+f+`
`+N+" "+j})}function zr(o,B,f,p){o.info(function(){return"XMLHTTP TEXT ("+B+"): "+k_(o,f)+(p?" "+p:"")})}function L_(o,B){o.info(function(){return"TIMEOUT: "+B})}si.prototype.info=function(){};function k_(o,B){if(!o.g)return B;if(!B)return null;try{let N=JSON.parse(B);if(N){for(o=0;o<N.length;o++)if(Array.isArray(N[o])){var f=N[o];if(!(f.length<2)){var p=f[1];if(Array.isArray(p)&&!(p.length<1)){var R=p[0];if(R!="noop"&&R!="stop"&&R!="close")for(let j=1;j<p.length;j++)p[j]=""}}}}return gc(N)}catch{return B}}var Ma={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ld={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},kd;function Ec(){}d(Ec,Sd),Ec.prototype.g=function(){return new XMLHttpRequest},kd=new Ec;function ii(o){return encodeURIComponent(String(o))}function V_(o){var B=1;o=o.split(":");let f=[];for(;B>0&&o.length;)f.push(o.shift()),B--;return o.length&&f.push(o.join(":")),f}function Tn(o,B,f,p){this.j=o,this.i=B,this.l=f,this.S=p||1,this.V=new ei(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vd}function Vd(){this.i=null,this.g="",this.h=!1}var Md={},_c={};function yc(o,B,f){o.M=1,o.A=Ua(qt(B)),o.u=f,o.R=!0,Gd(o,null)}function Gd(o,B){o.F=Date.now(),Ga(o),o.B=qt(o.A);var f=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Zd(f.i,"t",p),o.C=0,f=o.j.L,o.h=new Vd,o.g=Cp(o.j,f?B:null,!o.u),o.P>0&&(o.O=new P_(l(o.Y,o,o.g),o.P)),B=o.V,f=o.g,p=o.ba;var R="readystatechange";Array.isArray(R)||(R&&(vd[0]=R.toString()),R=vd);for(let N=0;N<R.length;N++){let j=Id(f,R[N],p||B.handleEvent,!1,B.h||B);if(!j)break;B.g[j.key]=j}B=o.J?_d(o.J):{},o.u?(o.v||(o.v="POST"),B["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,B)):(o.v="GET",o.g.ea(o.B,o.v,null,B)),ni(),x_(o.i,o.v,o.B,o.l,o.S,o.u)}Tn.prototype.ba=function(o){o=o.target;let B=this.O;B&&vn(o)==3?B.j():this.Y(o)},Tn.prototype.Y=function(o){try{if(o==this.g)e:{let ie=vn(this.g),Me=this.g.ya(),Ce=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||ap(this.g)))){this.K||ie!=4||Me==7||(Me==8||Ce<=0?ni(3):ni(2)),wc(this);var B=this.g.ca();this.X=B;var f=M_(this);if(this.o=B==200,F_(this.i,this.v,this.B,this.l,this.S,ie,B),this.o){if(this.U&&!this.L){t:{if(this.g){var p,R=this.g;if((p=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var N=p;break t}}N=null}if(o=N)zr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ic(this,o);else{this.o=!1,this.m=3,at(12),er(this),ai(this);break e}}if(this.R){o=!0;let He;for(;!this.K&&this.C<f.length;)if(He=G_(this,f),He==_c){ie==4&&(this.m=4,at(14),o=!1),zr(this.i,this.l,null,"[Incomplete Response]");break}else if(He==Md){this.m=4,at(15),zr(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else zr(this.i,this.l,He,null),Ic(this,He);if(Ud(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||f.length!=0||this.h.h||(this.m=1,at(16),o=!1),this.o=this.o&&o,!o)zr(this.i,this.l,f,"[Invalid Chunked Response]"),er(this),ai(this);else if(f.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Sc(j),j.P=!0,at(11))}}else zr(this.i,this.l,f,null),Ic(this,f);ie==4&&er(this),this.o&&!this.K&&(ie==4?fp(this.j,this):(this.o=!1,Ga(this)))}else ey(this.g),B==400&&f.indexOf("Unknown SID")>0?(this.m=3,at(12)):(this.m=0,at(13)),er(this),ai(this)}}}catch{}finally{}};function M_(o){if(!Ud(o))return o.g.la();let B=ap(o.g);if(B==="")return"";let f="",p=B.length,R=vn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return er(o),ai(o),"";o.h.i=new a.TextDecoder}for(let N=0;N<p;N++)o.h.h=!0,f+=o.h.i.decode(B[N],{stream:!(R&&N==p-1)});return B.length=0,o.h.g+=f,o.C=0,o.h.g}function Ud(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function G_(o,B){var f=o.C,p=B.indexOf(`
`,f);return p==-1?_c:(f=Number(B.substring(f,p)),isNaN(f)?Md:(p+=1,p+f>B.length?_c:(B=B.slice(p,p+f),o.C=p+f,B)))}Tn.prototype.cancel=function(){this.K=!0,er(this)};function Ga(o){o.T=Date.now()+o.H,Hd(o,o.H)}function Hd(o,B){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ri(l(o.aa,o),B)}function wc(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Tn.prototype.aa=function(){this.D=null;let o=Date.now();o-this.T>=0?(L_(this.i,this.B),this.M!=2&&(ni(),at(17)),er(this),this.m=2,ai(this)):Hd(this,this.T-o)};function ai(o){o.j.I==0||o.K||fp(o.j,o)}function er(o){wc(o);var B=o.O;B&&typeof B.dispose=="function"&&B.dispose(),o.O=null,Rd(o.V),o.g&&(B=o.g,o.g=null,B.abort(),B.dispose())}function Ic(o,B){try{var f=o.j;if(f.I!=0&&(f.g==o||Dc(f.h,o))){if(!o.L&&Dc(f.h,o)&&f.I==3){try{var p=f.Ba.g.parse(B)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)za(f),Ka(f);else break e;Rc(f),at(18)}}else f.xa=R[1],0<f.xa-f.K&&R[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ri(l(f.Va,f),6e3));Kd(f.h)<=1&&f.ta&&(f.ta=void 0)}else nr(f,11)}else if((o.L||f.g==o)&&za(f),!_(B))for(R=f.Ba.g.parse(B),B=0;B<R.length;B++){let Ce=R[B],He=Ce[0];if(!(He<=f.K))if(f.K=He,Ce=Ce[1],f.I==2)if(Ce[0]=="c"){f.M=Ce[1],f.ba=Ce[2];let jt=Ce[3];jt!=null&&(f.ka=jt,f.j.info("VER="+f.ka));let rr=Ce[4];rr!=null&&(f.za=rr,f.j.info("SVER="+f.za));let Rn=Ce[5];Rn!=null&&typeof Rn=="number"&&Rn>0&&(p=1.5*Rn,f.O=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;let Sn=o.g;if(Sn){let Qa=Sn.g?Sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qa){var N=p.h;N.g||Qa.indexOf("spdy")==-1&&Qa.indexOf("quic")==-1&&Qa.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Tc(N,N.h),N.h=null))}if(p.G){let Pc=Sn.g?Sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Pc&&(p.wa=Pc,De(p.J,p.G,Pc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),p=f;var j=o;if(p.na=gp(p,p.L?p.ba:null,p.W),j.L){Jd(p.h,j);var ie=j,Me=p.O;Me&&(ie.H=Me),ie.D&&(wc(ie),Ga(ie)),p.g=j}else Bp(p);f.i.length>0&&Ja(f)}else Ce[0]!="stop"&&Ce[0]!="close"||nr(f,7);else f.I==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?nr(f,7):vc(f):Ce[0]!="noop"&&f.l&&f.l.qa(Ce),f.A=0)}}ni(4)}catch{}}var U_=class{constructor(o,B){this.g=o,this.map=B}};function qd(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function jd(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Kd(o){return o.h?1:o.g?o.g.size:0}function Dc(o,B){return o.h?o.h==B:o.g?o.g.has(B):!1}function Tc(o,B){o.g?o.g.add(B):o.h=B}function Jd(o,B){o.h&&o.h==B?o.h=null:o.g&&o.g.has(B)&&o.g.delete(B)}qd.prototype.cancel=function(){if(this.i=zd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function zd(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let B=o.i;for(let f of o.g.values())B=B.concat(f.G);return B}return w(o.i)}var Wd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function H_(o,B){if(o){o=o.split("&");for(let f=0;f<o.length;f++){let p=o[f].indexOf("="),R,N=null;p>=0?(R=o[f].substring(0,p),N=o[f].substring(p+1)):R=o[f],B(R,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function An(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let B;o instanceof An?(this.l=o.l,oi(this,o.j),this.o=o.o,this.g=o.g,ui(this,o.u),this.h=o.h,Ac(this,ep(o.i)),this.m=o.m):o&&(B=String(o).match(Wd))?(this.l=!1,oi(this,B[1]||"",!0),this.o=ci(B[2]||""),this.g=ci(B[3]||"",!0),ui(this,B[4]),this.h=ci(B[5]||"",!0),Ac(this,B[6]||"",!0),this.m=ci(B[7]||"")):(this.l=!1,this.i=new Bi(null,this.l))}An.prototype.toString=function(){let o=[];var B=this.j;B&&o.push(li(B,Qd,!0),":");var f=this.g;return(f||B=="file")&&(o.push("//"),(B=this.o)&&o.push(li(B,Qd,!0),"@"),o.push(ii(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(li(f,f.charAt(0)=="/"?K_:j_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",li(f,z_)),o.join("")},An.prototype.resolve=function(o){let B=qt(this),f=!!o.j;f?oi(B,o.j):f=!!o.o,f?B.o=o.o:f=!!o.g,f?B.g=o.g:f=o.u!=null;var p=o.h;if(f)ui(B,o.u);else if(f=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var R=B.h.lastIndexOf("/");R!=-1&&(p=B.h.slice(0,R+1)+p)}if(R=p,R==".."||R==".")p="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){p=R.lastIndexOf("/",0)==0,R=R.split("/");let N=[];for(let j=0;j<R.length;){let ie=R[j++];ie=="."?p&&j==R.length&&N.push(""):ie==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),p&&j==R.length&&N.push("")):(N.push(ie),p=!0)}p=N.join("/")}else p=R}return f?B.h=p:f=o.i.toString()!=="",f?Ac(B,ep(o.i)):f=!!o.m,f&&(B.m=o.m),B};function qt(o){return new An(o)}function oi(o,B,f){o.j=f?ci(B,!0):B,o.j&&(o.j=o.j.replace(/:$/,""))}function ui(o,B){if(B){if(B=Number(B),isNaN(B)||B<0)throw Error("Bad port number "+B);o.u=B}else o.u=null}function Ac(o,B,f){B instanceof Bi?(o.i=B,W_(o.i,o.l)):(f||(B=li(B,J_)),o.i=new Bi(B,o.l))}function De(o,B,f){o.i.set(B,f)}function Ua(o){return De(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ci(o,B){return o?B?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function li(o,B,f){return typeof o=="string"?(o=encodeURI(o).replace(B,q_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function q_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Qd=/[#\/\?@]/g,j_=/[#\?:]/g,K_=/[#\?]/g,J_=/[#\?@]/g,z_=/#/g;function Bi(o,B){this.h=this.g=null,this.i=o||null,this.j=!!B}function tr(o){o.g||(o.g=new Map,o.h=0,o.i&&H_(o.i,function(B,f){o.add(decodeURIComponent(B.replace(/\+/g," ")),f)}))}r=Bi.prototype,r.add=function(o,B){tr(this),this.i=null,o=Wr(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(B),this.h+=1,this};function $d(o,B){tr(o),B=Wr(o,B),o.g.has(B)&&(o.i=null,o.h-=o.g.get(B).length,o.g.delete(B))}function Yd(o,B){return tr(o),B=Wr(o,B),o.g.has(B)}r.forEach=function(o,B){tr(this),this.g.forEach(function(f,p){f.forEach(function(R){o.call(B,R,p,this)},this)},this)};function Xd(o,B){tr(o);let f=[];if(typeof B=="string")Yd(o,B)&&(f=f.concat(o.g.get(Wr(o,B))));else for(o=Array.from(o.g.values()),B=0;B<o.length;B++)f=f.concat(o[B]);return f}r.set=function(o,B){return tr(this),this.i=null,o=Wr(this,o),Yd(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[B]),this.h+=1,this},r.get=function(o,B){return o?(o=Xd(this,o),o.length>0?String(o[0]):B):B};function Zd(o,B,f){$d(o,B),f.length>0&&(o.i=null,o.g.set(Wr(o,B),w(f)),o.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],B=Array.from(this.g.keys());for(let p=0;p<B.length;p++){var f=B[p];let R=ii(f);f=Xd(this,f);for(let N=0;N<f.length;N++){let j=R;f[N]!==""&&(j+="="+ii(f[N])),o.push(j)}}return this.i=o.join("&")};function ep(o){let B=new Bi;return B.i=o.i,o.g&&(B.g=new Map(o.g),B.h=o.h),B}function Wr(o,B){return B=String(B),o.j&&(B=B.toLowerCase()),B}function W_(o,B){B&&!o.j&&(tr(o),o.i=null,o.g.forEach(function(f,p){let R=p.toLowerCase();p!=R&&($d(this,p),Zd(this,R,f))},o)),o.j=B}function Q_(o,B){let f=new si;if(a.Image){let p=new Image;p.onload=h(bn,f,"TestLoadImage: loaded",!0,B,p),p.onerror=h(bn,f,"TestLoadImage: error",!1,B,p),p.onabort=h(bn,f,"TestLoadImage: abort",!1,B,p),p.ontimeout=h(bn,f,"TestLoadImage: timeout",!1,B,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else B(!1)}function $_(o,B){let f=new si,p=new AbortController,R=setTimeout(()=>{p.abort(),bn(f,"TestPingServer: timeout",!1,B)},1e4);fetch(o,{signal:p.signal}).then(N=>{clearTimeout(R),N.ok?bn(f,"TestPingServer: ok",!0,B):bn(f,"TestPingServer: server error",!1,B)}).catch(()=>{clearTimeout(R),bn(f,"TestPingServer: error",!1,B)})}function bn(o,B,f,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(f)}catch{}}function Y_(){this.g=new O_}function Ha(o){this.i=o.Sb||null,this.h=o.ab||!1}d(Ha,Sd),Ha.prototype.g=function(){return new qa(this.i,this.h)};function qa(o,B){et.call(this),this.H=o,this.o=B,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(qa,et),r=qa.prototype,r.open=function(o,B){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=B,this.readyState=1,fi(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;let B={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(B.body=o),(this.H||a).fetch(new Request(this.D,B)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=0},r.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,fi(this)),this.g&&(this.readyState=3,fi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;tp(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function tp(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}r.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var B=o.value?o.value:new Uint8Array(0);(B=this.B.decode(B,{stream:!o.done}))&&(this.response=this.responseText+=B)}o.done?hi(this):fi(this),this.readyState==3&&tp(this)}},r.Oa=function(o){this.g&&(this.response=this.responseText=o,hi(this))},r.Na=function(o){this.g&&(this.response=o,hi(this))},r.ga=function(){this.g&&hi(this)};function hi(o){o.readyState=4,o.l=null,o.j=null,o.B=null,fi(o)}r.setRequestHeader=function(o,B){this.A.append(o,B)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],B=this.h.entries();for(var f=B.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=B.next();return o.join(`\r
`)};function fi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function np(o){let B="";return Fa(o,function(f,p){B+=p,B+=":",B+=f,B+=`\r
`}),B}function bc(o,B,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=np(f),typeof o=="string"?f!=null&&ii(f):De(o,B,f))}function Pe(o){et.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(Pe,et);var X_=/^https?$/i,Z_=["POST","PUT"];r=Pe.prototype,r.Fa=function(o){this.H=o},r.ea=function(o,B,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);B=B?B.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():kd.g(),this.g.onreadystatechange=g(l(this.Ca,this));try{this.B=!0,this.g.open(B,String(o),!0),this.B=!1}catch(N){rp(this,N);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)f.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(let N of p.keys())f.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),R=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Z_,B,void 0)>=0)||p||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[N,j]of f)this.g.setRequestHeader(N,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(N){rp(this,N)}};function rp(o,B){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=B,o.o=5,sp(o),ja(o)}function sp(o){o.A||(o.A=!0,it(o,"complete"),it(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,it(this,"complete"),it(this,"abort"),ja(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ja(this,!0)),Pe.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?ip(this):this.Xa())},r.Xa=function(){ip(this)};function ip(o){if(o.h&&typeof i<"u"){if(o.v&&vn(o)==4)setTimeout(o.Ca.bind(o),0);else if(it(o,"readystatechange"),vn(o)==4){o.h=!1;try{let N=o.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var B=!0;break e;default:B=!1}var f;if(!(f=B)){var p;if(p=N===0){let j=String(o.D).match(Wd)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),p=!X_.test(j?j.toLowerCase():"")}f=p}if(f)it(o,"complete"),it(o,"success");else{o.o=6;try{var R=vn(o)>2?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.ca()+"]",sp(o)}}finally{ja(o)}}}}function ja(o,B){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);let f=o.g;o.g=null,B||it(o,"ready");try{f.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function vn(o){return o.g?o.g.readyState:0}r.ca=function(){try{return vn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(o){if(this.g){var B=this.g.responseText;return o&&B.indexOf(o)==0&&(B=B.substring(o.length)),N_(B)}};function ap(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ey(o){let B={};o=(o.g&&vn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var f=V_(o[p]);let R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();let N=B[R]||[];B[R]=N,N.push(f)}A_(B,function(p){return p.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function di(o,B,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||B}function op(o){this.za=0,this.i=[],this.j=new si,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=di("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=di("baseRetryDelayMs",5e3,o),this.Za=di("retryDelaySeedMs",1e4,o),this.Ta=di("forwardChannelMaxRetries",2,o),this.va=di("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new qd(o&&o.concurrentRequestLimit),this.Ba=new Y_,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=op.prototype,r.ka=8,r.I=1,r.connect=function(o,B,f,p){at(0),this.W=o,this.H=B||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.J=gp(this,null,this.W),Ja(this)};function vc(o){if(up(o),o.I==3){var B=o.V++,f=qt(o.J);if(De(f,"SID",o.M),De(f,"RID",B),De(f,"TYPE","terminate"),pi(o,f),B=new Tn(o,o.j,B),B.M=2,B.A=Ua(qt(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(B.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=B.A,f=!0),f||(B.g=Cp(B.j,null),B.g.ea(B.A)),B.F=Date.now(),Ga(B)}pp(o)}function Ka(o){o.g&&(Sc(o),o.g.cancel(),o.g=null)}function up(o){Ka(o),o.v&&(a.clearTimeout(o.v),o.v=null),za(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Ja(o){if(!jd(o.h)&&!o.m){o.m=!0;var B=o.Ea;Ze||E(),be||(Ze(),be=!0),A.add(B,o),o.D=0}}function ty(o,B){return Kd(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=B.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ri(l(o.Ea,o,B),dp(o,o.D)),o.D++,!0)}r.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;let R=new Tn(this,this.j,o),N=this.o;if(this.U&&(N?(N=_d(N),wd(N,this.U)):N=this.U),this.u!==null||this.R||(R.J=N,N=null),this.S)e:{for(var B=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(B+=p,B>4096){B=f;break e}if(B===4096||f===this.i.length-1){B=f+1;break e}}B=1e3}else B=1e3;B=lp(this,R,B),f=qt(this.J),De(f,"RID",o),De(f,"CVER",22),this.G&&De(f,"X-HTTP-Session-Id",this.G),pi(this,f),N&&(this.R?B="headers="+ii(np(N))+"&"+B:this.u&&bc(f,this.u,N)),Tc(this.h,R),this.Ra&&De(f,"TYPE","init"),this.S?(De(f,"$req",B),De(f,"SID","null"),R.U=!0,yc(R,f,null)):yc(R,f,B),this.I=2}}else this.I==3&&(o?cp(this,o):this.i.length==0||jd(this.h)||cp(this))};function cp(o,B){var f;B?f=B.l:f=o.V++;let p=qt(o.J);De(p,"SID",o.M),De(p,"RID",f),De(p,"AID",o.K),pi(o,p),o.u&&o.o&&bc(p,o.u,o.o),f=new Tn(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),B&&(o.i=B.G.concat(o.i)),B=lp(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Tc(o.h,f),yc(f,p,B)}function pi(o,B){o.H&&Fa(o.H,function(f,p){De(B,p,f)}),o.l&&Fa({},function(f,p){De(B,p,f)})}function lp(o,B,f){f=Math.min(o.i.length,f);let p=o.l?l(o.l.Ka,o.l,o):null;e:{var R=o.i;let ie=-1;for(;;){let Me=["count="+f];ie==-1?f>0?(ie=R[0].g,Me.push("ofs="+ie)):ie=0:Me.push("ofs="+ie);let Ce=!0;for(let He=0;He<f;He++){var N=R[He].g;let jt=R[He].map;if(N-=ie,N<0)ie=Math.max(0,R[He].g-100),Ce=!1;else try{N="req"+N+"_"||"";try{var j=jt instanceof Map?jt:Object.entries(jt);for(let[rr,Rn]of j){let Sn=Rn;u(Rn)&&(Sn=gc(Rn)),Me.push(N+rr+"="+encodeURIComponent(Sn))}}catch(rr){throw Me.push(N+"type="+encodeURIComponent("_badmap")),rr}}catch{p&&p(jt)}}if(Ce){j=Me.join("&");break e}}j=void 0}return o=o.i.splice(0,f),B.G=o,j}function Bp(o){if(!o.g&&!o.v){o.Y=1;var B=o.Da;Ze||E(),be||(Ze(),be=!0),A.add(B,o),o.A=0}}function Rc(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ri(l(o.Da,o),dp(o,o.A)),o.A++,!0)}r.Da=function(){if(this.v=null,hp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ri(l(this.Wa,this),o)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,at(10),Ka(this),hp(this))};function Sc(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function hp(o){o.g=new Tn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var B=qt(o.na);De(B,"RID","rpc"),De(B,"SID",o.M),De(B,"AID",o.K),De(B,"CI",o.F?"0":"1"),!o.F&&o.ia&&De(B,"TO",o.ia),De(B,"TYPE","xmlhttp"),pi(o,B),o.u&&o.o&&bc(B,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Ua(qt(B)),f.u=null,f.R=!0,Gd(f,o)}r.Va=function(){this.C!=null&&(this.C=null,Ka(this),Rc(this),at(19))};function za(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function fp(o,B){var f=null;if(o.g==B){za(o),Sc(o),o.g=null;var p=2}else if(Dc(o.h,B))f=B.G,Jd(o.h,B),p=1;else return;if(o.I!=0){if(B.o)if(p==1){f=B.u?B.u.length:0,B=Date.now()-B.F;var R=o.D;p=Va(),it(p,new Fd(p,f)),Ja(o)}else Bp(o);else if(R=B.m,R==3||R==0&&B.X>0||!(p==1&&ty(o,B)||p==2&&Rc(o)))switch(f&&f.length>0&&(B=o.h,B.i=B.i.concat(f)),R){case 1:nr(o,5);break;case 4:nr(o,10);break;case 3:nr(o,6);break;default:nr(o,2)}}}function dp(o,B){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*B}function nr(o,B){if(o.j.info("Error code "+B),B==2){var f=l(o.bb,o),p=o.Ua;let R=!p;p=new An(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||oi(p,"https"),Ua(p),R?Q_(p.toString(),f):$_(p.toString(),f)}else at(2);o.I=0,o.l&&o.l.pa(B),pp(o),up(o)}r.bb=function(o){o?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function pp(o){if(o.I=0,o.ja=[],o.l){let B=zd(o.h);(B.length!=0||o.i.length!=0)&&(D(o.ja,B),D(o.ja,o.i),o.h.i.length=0,w(o.i),o.i.length=0),o.l.oa()}}function gp(o,B,f){var p=f instanceof An?qt(f):new An(f);if(p.g!="")B&&(p.g=B+"."+p.g),ui(p,p.u);else{var R=a.location;p=R.protocol,B=B?B+"."+R.hostname:R.hostname,R=+R.port;let N=new An(null);p&&oi(N,p),B&&(N.g=B),R&&ui(N,R),f&&(N.h=f),p=N}return f=o.G,B=o.wa,f&&B&&De(p,f,B),De(p,"VER",o.ka),pi(o,p),p}function Cp(o,B,f){if(B&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return B=o.Aa&&!o.ma?new Pe(new Ha({ab:f})):new Pe(o.ma),B.Fa(o.L),B}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function mp(){}r=mp.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Wa(){}Wa.prototype.g=function(o,B){return new gt(o,B)};function gt(o,B){et.call(this),this.g=new op(B),this.l=o,this.h=B&&B.messageUrlParams||null,o=B&&B.messageHeaders||null,B&&B.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=B&&B.initMessageHeaders||null,B&&B.messageContentType&&(o?o["X-WebChannel-Content-Type"]=B.messageContentType:o={"X-WebChannel-Content-Type":B.messageContentType}),B&&B.sa&&(o?o["X-WebChannel-Client-Profile"]=B.sa:o={"X-WebChannel-Client-Profile":B.sa}),this.g.U=o,(o=B&&B.Qb)&&!_(o)&&(this.g.u=o),this.A=B&&B.supportsCrossDomainXhr||!1,this.v=B&&B.sendRawJson||!1,(B=B&&B.httpSessionIdParam)&&!_(B)&&(this.g.G=B,o=this.h,o!==null&&B in o&&(o=this.h,B in o&&delete o[B])),this.j=new Qr(this)}d(gt,et),gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){vc(this.g)},gt.prototype.o=function(o){var B=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=gc(o),o=f);B.i.push(new U_(B.Ya++,o)),B.I==3&&Ja(B)},gt.prototype.N=function(){this.g.l=null,delete this.j,vc(this.g),delete this.g,gt.Z.N.call(this)};function Ep(o){Cc.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var B=o.__sm__;if(B){e:{for(let f in B){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,B=B!==null&&o in B?B[o]:void 0),this.data=B}else this.data=o}d(Ep,Cc);function _p(){mc.call(this),this.status=1}d(_p,mc);function Qr(o){this.g=o}d(Qr,mp),Qr.prototype.ra=function(){it(this.g,"a")},Qr.prototype.qa=function(o){it(this.g,new Ep(o))},Qr.prototype.pa=function(o){it(this.g,new _p)},Qr.prototype.oa=function(){it(this.g,"b")},Wa.prototype.createWebChannel=Wa.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,Fl=fn.createWebChannelTransport=function(){return new Wa},xl=fn.getStatEventTarget=function(){return Va()},Ol=fn.Event=Zn,Mo=fn.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ma.NO_ERROR=0,Ma.TIMEOUT=8,Ma.HTTP_ERROR=6,Vi=fn.ErrorCode=Ma,Ld.COMPLETE="complete",Nl=fn.EventType=Ld,Pd.EventType=ti,ti.OPEN="a",ti.CLOSE="b",ti.ERROR="c",ti.MESSAGE="d",et.prototype.listen=et.prototype.J,ns=fn.WebChannel=Pd,lD=fn.FetchXmlHttpFactory=Ha,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa,Pl=fn.XhrIo=Pe}).apply(typeof Vo<"u"?Vo:typeof self<"u"?self:typeof window<"u"?window:{});var Ee,F=(Ee=class{},M(Ee,"FOLD_CASE",1),M(Ee,"LITERAL",2),M(Ee,"CLASS_NL",4),M(Ee,"DOT_NL",8),M(Ee,"ONE_LINE",16),M(Ee,"NON_GREEDY",32),M(Ee,"PERL_X",64),M(Ee,"UNICODE_GROUPS",128),M(Ee,"WAS_DOLLAR",256),M(Ee,"LOOKBEHIND",512),M(Ee,"MATCH_NL",Ee.CLASS_NL|Ee.DOT_NL),M(Ee,"PERL",Ee.CLASS_NL|Ee.ONE_LINE|Ee.PERL_X|Ee.UNICODE_GROUPS),M(Ee,"POSIX",0),M(Ee,"UNANCHORED",0),M(Ee,"ANCHOR_START",1),M(Ee,"ANCHOR_BOTH",2),Ee),Lt={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},Hi=128,Ul=new Int32Array(Hi),Hl=new Int32Array(Hi),Go=65535;for(let r=0;r<Hi;r++)r>=97&&r<=122?Ul[r]=r-32:Ul[r]=r,r>=65&&r<=90?Hl[r]=r+32:Hl[r]=r;var Gl,L=(Gl=class{static toUpperCase(r){if(r<Hi)return Ul[r];let e=String.fromCodePoint(r).toUpperCase(),t=e.codePointAt(0)>Go?2:1;if(e.length>t)return r;let n=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),s=n.codePointAt(0)>Go?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}static toLowerCase(r){if(r<Hi)return Hl[r];let e=String.fromCodePoint(r).toLowerCase(),t=e.codePointAt(0)>Go?2:1;if(e.length>t)return r;let n=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),s=n.codePointAt(0)>Go?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}},M(Gl,"CODES",Object.freeze({"\x07":7,"\b":8,"	":9,"\n":10,"\v":11,"\f":12,"\r":13," ":32,'"':34,$:36,"&":38,"'":39,"(":40,")":41,"*":42,"+":43,"-":45,".":46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,":":58,"<":60,">":62,"?":63,A:65,B:66,C:67,F:70,P:80,Q:81,U:85,Z:90,"[":91,"\\":92,"]":93,"^":94,_:95,"`":96,a:97,b:98,f:102,i:105,m:109,n:110,r:114,s:115,t:116,v:118,x:120,z:122,"{":123,"|":124,"}":125})),Gl),C=class{constructor(r,e=!1){this.data=r,this.isStride1=e,this.SIZE=e?2:3}getLo(r){return this.data[r*this.SIZE]}getHi(r){return this.data[r*this.SIZE+1]}getStride(r){return this.isStride1?1:this.data[r*this.SIZE+2]}get length(){return this.data.length/this.SIZE}},BD="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-",RC=new Uint8Array(256);for(let r=0;r<64;r++)RC[BD.charCodeAt(r)]=r;var SC=r=>{let e=[],t=0,n=0;for(let s=0;s<r.length;s++){let i=RC[r.charCodeAt(s)];t|=(i&31)<<n,i&32?n+=5:(e.push(t),t=0,n=0)}return e},m=(r,e)=>{let t=SC(r),n=e?t.length/2:t.length/3,s=new Uint32Array(n*3),i=0,a=0;for(let u=0;u<n;u++)i+=t[a++],s[u*3]=i,i+=t[a++],s[u*3+1]=i,s[u*3+2]=e?1:t[a++];return s},hD=r=>{let e=SC(r),t=new Map,n=0;for(let s=0;s<e.length;s+=2){n+=e[s];let i=e[s+1],a=i>>>1^-(i&1);t.set(n,n+a)}return t},Uo=class{constructor(r){this.initializer=r,this.cache=new Map}has(r){return r in this.initializer}get(r){if(this.cache.has(r))return this.cache.get(r);let e=this.initializer[r],t=e?e():null;return this.cache.set(r,t),t}},Ln,Et=(Ln=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=hD("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new C(m("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}},M(Ln,"_CASE_ORBIT",null),M(Ln,"_Print",null),M(Ln,"CATEGORIES",new Uo({C:()=>new C(m("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new C(m("AfgDgB",!0)),Cf:()=>new C(m("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new C(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new C(m("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new C(m("gg2B--B",!0)),L:()=>new C(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new C(m("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new C(m("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new C(m("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new C(m("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new C(m("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new C(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new C(m("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new C(m("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new C(m("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new C(m("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new C(m("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new C(m("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new C(m("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new C(m("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new C(m("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new C(m("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new C(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new C(m("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new C(m("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new C(m("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new C(m("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new C(m("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new C(m("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new C(m("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new C(m("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new C(m("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new C(m("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new C(m("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new C(m("ohIA",!0)),Zp:()=>new C(m("phIA",!0)),Zs:()=>new C(m("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new C(m("wBJIFbF",!0)),Alphabetic:()=>new C(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new C(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new C(m("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new C(m("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new C(m("7-8DE",!0)),Emoji_Modifier_Base:()=>new C(m("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new C(m("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new C(m("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new C(m("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new C(m("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new C(m("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new C(m("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new C(m("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new C(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new C(m("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),M(Ln,"SCRIPTS",new Uo({Adlam:()=>new C(m("go6DrCFJFB",!0)),Ahom:()=>new C(m("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new C(m("ggxCmS",!0)),Arabic:()=>new C(m("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new C(m("xpBlBDxBDCks9BE",!0)),Avestan:()=>new C(m("g4iC1BEG",!0)),Balinese:()=>new C(m("g4GsCCxB",!0)),Bamum:()=>new C(m("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new C(m("w26CdDF",!0)),Batak:()=>new C(m("g+GzBJD",!0)),Bengali:()=>new C(m("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new C(m("g17CYDY",!0)),Bhaiksuki:()=>new C(m("ggnCICsBCNLc",!0)),Bopomofo:()=>new C(m("qXB6wLqBxDf",!0)),Brahmi:()=>new C(m("ggkCtCFjBKA",!0)),Braille:()=>new C(m("ggK-H",!0)),Buginese:()=>new C(m("gwGbDB",!0)),Buhid:()=>new C(m("g6FT",!0)),Canadian_Aboriginal:()=>new C(m("ggF-TxRlC7tgCP",!0)),Carian:()=>new C(m("g1gCwB",!0)),Caucasian_Albanian:()=>new C(m("wphCzBMA",!0)),Chakma:()=>new C(m("gokC0BCR",!0)),Cham:()=>new C(m("gwqB2BKNDJDD",!0)),Cherokee:()=>new C(m("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new C(m("w9jCb",!0)),Common:()=>new C(m("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new C(m("ifNxkKzDGG",!0)),Cuneiform:()=>new C(m("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new C(m("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new C(m("w8rCiD",!0)),Cyrillic:()=>new C(m("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new C(m("gghCvC",!0)),Devanagari:()=>new C(m("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new C(m("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new C(m("ggmC7B",!0)),Duployan:()=>new C(m("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new C(m("ggsC1iBL68D",!0)),Elbasan:()=>new C(m("gohCnB",!0)),Elymaic:()=>new C(m("g-jCW",!0)),Ethiopic:()=>new C(m("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new C(m("gqjClBEcJB",!0)),Georgian:()=>new C(m("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new C(m("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new C(m("w5gCa",!0)),Grantha:()=>new C(m("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new C(m("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new C(m("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new C(m("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new C(m("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new C(m("go4C5B",!0)),Han:()=>new C(m("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new C(m("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new C(m("gojCnBJJ",!0)),Hanunoo:()=>new C(m("g5FU",!0)),Hatran:()=>new C(m("gniCSCBGE",!0)),Hebrew:()=>new C(m("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new C(m("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new C(m("giiCVCI",!0)),Inherited:()=>new C(m("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new C(m("g7iCSGH",!0)),Inscriptional_Parthian:()=>new C(m("g6iCVDH",!0)),Javanese:()=>new C(m("gsqBtCDJFB",!0)),Kaithi:()=>new C(m("gkkCiCLA",!0)),Kannada:()=>new C(m("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new C(m("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new C(m("g4nCQCoBEc",!0)),Kayah_Li:()=>new C(m("goqBtBCA",!0)),Kharoshthi:()=>new C(m("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new C(m("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new C(m("g8F9CDJHJnPf",!0)),Khojki:()=>new C(m("gwkCRCuB",!0)),Khudawadi:()=>new C(m("w1kC6BGJ",!0)),Kirat_Rai:()=>new C(m("gq7C5B",!0)),Lao:()=>new C(m("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new C(m("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new C(m("ggH3BEOEC",!0)),Limbu:()=>new C(m("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new C(m("gwhC2JKVLH",!0)),Linear_B:()=>new C(m("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new C(m("wmpBvBx1eA",!0)),Lycian:()=>new C(m("g0gCc",!0)),Lydian:()=>new C(m("gpiCZGA",!0)),Mahajani:()=>new C(m("wqkCmB",!0)),Makasar:()=>new C(m("g3nCY",!0)),Malayalam:()=>new C(m("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new C(m("giCbDA",!0)),Manichaean:()=>new C(m("g2iCmBFL",!0)),Marchen:()=>new C(m("wjnCfDVCN",!0)),Masaram_Gondi:()=>new C(m("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new C(m("gy7C6C",!0)),Meetei_Mayek:()=>new C(m("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new C(m("gg6DkGDP",!0)),Meroitic_Cursive:()=>new C(m("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new C(m("gsiCf",!0)),Miao:()=>new C(m("g47CqCF4BIQ",!0)),Modi:()=>new C(m("gwlCkCMJ",!0)),Mongolian:()=>new C(m("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new C(m("gy6CeCJFB",!0)),Multani:()=>new C(m("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new C(m("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new C(m("gkiCeJI",!0)),Nag_Mundari:()=>new C(m("wm5DpB",!0)),Nandinagari:()=>new C(m("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new C(m("gsGrBFZHKEB",!0)),Newa:()=>new C(m("gglC7CCE",!0)),Nko:()=>new C(m("g+B6BDC",!0)),Nushu:()=>new C(m("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new C(m("go4DsBENDJFB",!0)),Ogham:()=>new C(m("g0Fc",!0)),Ol_Chiki:()=>new C(m("wiHvB",!0)),Ol_Onal:()=>new C(m("wu5DqBFA",!0)),Old_Hungarian:()=>new C(m("gkjCyBOyBIF",!0)),Old_Italic:()=>new C(m("g4gCjBKC",!0)),Old_North_Arabian:()=>new C(m("g0iCf",!0)),Old_Permic:()=>new C(m("w6gCqB",!0)),Old_Persian:()=>new C(m("g9gCjBFN",!0)),Old_Sogdian:()=>new C(m("g4jCnB",!0)),Old_South_Arabian:()=>new C(m("gziCf",!0)),Old_Turkic:()=>new C(m("ggjCoC",!0)),Old_Uyghur:()=>new C(m("w7jCZ",!0)),Oriya:()=>new C(m("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new C(m("wlhCjBFjB",!0)),Osmanya:()=>new C(m("gkhCdDJ",!0)),Pahawh_Hmong:()=>new C(m("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new C(m("gjiCf",!0)),Pau_Cin_Hau:()=>new C(m("g2mC4B",!0)),Phags_Pa:()=>new C(m("giqB3B",!0)),Phoenician:()=>new C(m("goiCbEA",!0)),Psalter_Pahlavi:()=>new C(m("g8iCRIDNG",!0)),Rejang:()=>new C(m("wpqBjBMA",!0)),Runic:()=>new C(m("g1FqCEK",!0)),Samaritan:()=>new C(m("ggCtBDO",!0)),Saurashtra:()=>new C(m("gkqBlCJL",!0)),Sharada:()=>new C(m("gskC-ChsCH",!0)),Shavian:()=>new C(m("wihCvB",!0)),Siddham:()=>new C(m("gslC1BDlB",!0)),Sidetic:()=>new C(m("gqiCZ",!0)),SignWriting:()=>new C(m("gg2DrUQECO",!0)),Sinhala:()=>new C(m("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new C(m("w5jCpB",!0)),Sora_Sompeng:()=>new C(m("wmkCYIJ",!0)),Soyombo:()=>new C(m("wymCyC",!0)),Sundanese:()=>new C(m("g8G-BhIH",!0)),Sunuwar:()=>new C(m("g+mChBPJ",!0)),Syloti_Nagri:()=>new C(m("ggqBsB",!0)),Syriac:()=>new C(m("g4BNC7BDCxIK",!0)),Tagalog:()=>new C(m("g4FVKA",!0)),Tagbanwa:()=>new C(m("g7FMCCCB",!0)),Tai_Le:()=>new C(m("wqGdDE",!0)),Tai_Tham:()=>new C(m("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new C(m("g0qBiCZE",!0)),Tai_Yo:()=>new C(m("g25DeCVJB",!0)),Takri:()=>new C(m("g0lC5BHJ",!0)),Tamil:()=>new C(m("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new C(m("wz6CuCCJ",!0)),Tangut:()=>new C(m("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new C(m("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new C(m("g8BxB",!0)),Thai:()=>new C(m("hwD5BGb",!0)),Tibetan:()=>new C(m("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new C(m("wpL3BIBPA",!0)),Tirhuta:()=>new C(m("gklCnCJJ",!0)),Todhri:()=>new C(m("guhCzB",!0)),Tolong_Siki:()=>new C(m("wtnCrBFJ",!0)),Toto:()=>new C(m("w04De",!0)),Tulu_Tigalari:()=>new C(m("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new C(m("g8gCdCA",!0)),Unknown:()=>new C(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new C(m("gopBrJ",!0)),Vithkuqi:()=>new C(m("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new C(m("g24D5BGA",!0)),Warang_Citi:()=>new C(m("glmCyCNA",!0)),Yezidi:()=>new C(m("g0jCpBCCDB",!0)),Yi:()=>new C(m("ggoBskBE2B",!0)),Zanabazar_Square:()=>new C(m("gwmCnC",!0))})),M(Ln,"FOLD_CATEGORIES",new Uo({L:()=>new C(m("laA",!0)),LC:()=>new C(m("laA",!0)),Ll:()=>new C(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new C(m("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new C(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new C(m("5cgBgBlgHAB",!1)),Mn:()=>new C(m("5cgBgBlgHAB",!1)),Emoji:()=>new C(m("8mJA",!0)),Extended_Pictographic:()=>new C(m("8mJA",!0)),Lowercase:()=>new C(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new C(m("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new C(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),M(Ln,"FOLD_SCRIPT",new Uo({Common:()=>new C(m("8cgBgB",!1)),Greek:()=>new C(m("1FwUwU",!1)),Inherited:()=>new C(m("5cgBgBlgHAB",!1))})),Ln),pe,z=(pe=class{static isUnsearchable(e){return e===pe.RUNE_ERROR||e>=pe.MIN_HIGH_SURROGATE&&e<=pe.MAX_LOW_SURROGATE}static is32(e,t){let n=0,s=e.length;for(;n<s;){let i=n+Math.floor((s-n)/2),a=e.getLo(i),u=e.getHi(i);if(a<=t&&t<=u){let c=e.getStride(i);return(t-a)%c===0}t<a?s=i:n=i+1}return!1}static is(e,t){if(t<=pe.MAX_LATIN1){for(let n=0;n<e.length;n++){if(t>e.getHi(n))continue;let s=e.getLo(n);if(t<s)return!1;let i=e.getStride(n);return(t-s)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&pe.is32(e,t)}static isPrint(e){return e<=pe.MAX_LATIN1?e>=32&&e<pe.MAX_ASCII||e>=161&&e!==173:pe.is(Et.Print,e)}static simpleFold(e){if(Et.CASE_ORBIT.has(e))return Et.CASE_ORBIT.get(e);if(e<=pe.MAX_ASCII){let t=L.toLowerCase(e);return t!==e?t:L.toUpperCase(e)}return e}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=pe.MAX_ASCII&&t<=pe.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let n=pe.simpleFold(e);n!==e;n=pe.simpleFold(n))if(n===t)return!0;return!1}},M(pe,"MAX_RUNE",1114111),M(pe,"RUNE_ERROR",65533),M(pe,"MAX_ASCII",127),M(pe,"MAX_LATIN1",255),M(pe,"MAX_BMP",65535),M(pe,"MIN_FOLD",65),M(pe,"MAX_FOLD",125251),M(pe,"MIN_HIGH_SURROGATE",55296),M(pe,"MAX_HIGH_SURROGATE",56319),M(pe,"MIN_LOW_SURROGATE",56320),M(pe,"MAX_LOW_SURROGATE",57343),M(pe,"MIN_SUPPLEMENTARY_CODE_POINT",65536),pe),jl=256,PC=new Uint8Array(jl);for(let r=0;r<jl;r++)PC[r]=97<=r&&r<=122||65<=r&&r<=90||48<=r&&r<=57||r===95?1:0;var Ll=null,kl=null,Te,K=(Te=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||Object.prototype.toString.call(e)==="[object Uint8Array]"}static isalnum(e){return L.CODES[0]<=e&&e<=L.CODES[9]||L.CODES.a<=e&&e<=L.CODES.z||L.CODES.A<=e&&e<=L.CODES.Z}static unhex(e){return L.CODES[0]<=e&&e<=L.CODES[9]?e-L.CODES[0]:L.CODES.a<=e&&e<=L.CODES.f?e-L.CODES.a+10:L.CODES.A<=e&&e<=L.CODES.F?e-L.CODES.A+10:-1}static escapeRune(e){let t="";if(z.isPrint(e))Te.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case L.CODES['"']:t+='\\"';break;case L.CODES["\\"]:t+="\\\\";break;case L.CODES["	"]:t+="\\t";break;case L.CODES[`
`]:t+="\\n";break;case L.CODES["\r"]:t+="\\r";break;case L.CODES["\b"]:t+="\\b";break;case L.CODES["\f"]:t+="\\f";break;default:{let n=e.toString(16);e<256?(t+="\\x",n.length===1&&(t+="0"),t+=n):t+=`\\x{${n}}`;break}}return t}static stringToRunes(e){let t=String(e),n=[],s=0;for(;s<t.length;){let i=t.codePointAt(s);n.push(i),s+=i>z.MAX_BMP?2:1}return new Int32Array(n)}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<jl?PC[e]===1:!1}static emptyOpContext(e,t){let n=0;return e<0&&(n|=Te.EMPTY_BEGIN_TEXT|Te.EMPTY_BEGIN_LINE),e===10&&(n|=Te.EMPTY_BEGIN_LINE),t<0&&(n|=Te.EMPTY_END_TEXT|Te.EMPTY_END_LINE),t===10&&(n|=Te.EMPTY_END_LINE),Te.isWordRune(e)!==Te.isWordRune(t)?n|=Te.EMPTY_WORD_BOUNDARY:n|=Te.EMPTY_NO_WORD_BOUNDARY,n}static quoteMeta(e){return e.split("").map(t=>Te.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>z.MAX_BMP?2:1}static toArray(e){let t=e.length,n=new Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Ll||(Ll=new TextEncoder),Ll.encode(e);{let t=[],n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===z.MIN_HIGH_SURROGATE&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===z.MIN_LOW_SURROGATE?(i=z.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){kl||(kl=new TextDecoder("utf-8"));let t=e instanceof Uint8Array?e:new Uint8Array(e);return kl.decode(t)}else{let t=[],n=0,s=0;for(;n<e.length;){let i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[s++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){let a=e[n++],u=e[n++],c=e[n++],l=((i&7)<<18|(a&63)<<12|(u&63)<<6|c&63)-z.MIN_SUPPLEMENTARY_CODE_POINT;t[s++]=String.fromCharCode(z.MIN_HIGH_SURROGATE+(l>>10)),t[s++]=String.fromCharCode(z.MIN_LOW_SURROGATE+(l&1023))}else{let a=e[n++],u=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(a&63)<<6|u&63)}}return t.join("")}}},M(Te,"METACHARACTERS","\\.+*?()|[]{}^$"),M(Te,"EMPTY_BEGIN_LINE",1),M(Te,"EMPTY_END_LINE",2),M(Te,"EMPTY_BEGIN_TEXT",4),M(Te,"EMPTY_END_TEXT",8),M(Te,"EMPTY_WORD_BOUNDARY",16),M(Te,"EMPTY_NO_WORD_BOUNDARY",32),M(Te,"EMPTY_ALL",-1),Te),NC=(r=[],e=0)=>{let t=Object.create(null);for(let n=0;n<r.length;n++){let s=r[n],i=e+n;t[s]=i,t[i]=s}return Object.freeze(t)},kn,_r=(kn=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===kn.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===kn.Encoding.UTF_16}},M(kn,"Encoding",NC(["UTF_16","UTF_8"])),kn),eC=class extends _r{constructor(r=null){super(),this.bytes=r}getEncoding(){return _r.Encoding.UTF_8}asCharSequence(){return K.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},fD=class extends _r{constructor(r=null){super(),this.charSequence=r}getEncoding(){return _r.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return K.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},Cr=class{static utf16(r){return new fD(r)}static utf8(r){return K.isByteArray(r)?new eC(r):new eC(K.stringToUtf8ByteArray(r))}},ut=class{static EOF(){return-8}constructor(){this.start=0,this.end=0}canCheckPrefix(){return!0}endPos(){return this.end-this.start}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},Vt,dD=(Vt=class extends ut{constructor(e,t=0,n=e.length){super(),this.bytes=e,this.start=t,this.end=n}hasString(e,t){let n=e.bytes;if(n.length===0)return!0;let s=this.indexOf(this.bytes,n,this.start+t);return s!==-1&&s<=this.end-n.length}hasAnyString(e,t){return e.automaton8().searchUTF8(this.bytes,this.start+t,this.end)}step(e){if(e+=this.start,e>=this.end)return ut.EOF();let t=this.bytes[e]&255;if(t<128)return t<<3|1;let n,s,i=128,a=191;if(t>=194&&t<=223)n=2,s=t&31;else if(t>=224&&t<=239)n=3,s=t&15,t===224?i=160:t===237&&(a=159);else if(t>=240&&t<=244)n=4,s=t&7,t===240?i=144:t===244&&(a=143);else return Vt.RUNE_ERROR_STEP;if(e+n>this.end)return Vt.RUNE_ERROR_STEP;let u=this.bytes[e+1]&255;if(u<i||u>a)return Vt.RUNE_ERROR_STEP;if(s=s<<6|u&63,n>2){let c=this.bytes[e+2]&255;if((c&192)!==128)return Vt.RUNE_ERROR_STEP;if(s=s<<6|c&63,n>3){let l=this.bytes[e+3]&255;if((l&192)!==128)return Vt.RUNE_ERROR_STEP;s=s<<6|l&63}}return s<<3|n}index(e,t){t+=this.start;let n=this.indexOf(this.bytes,e.prefixUTF8,t);return n<0?n:n-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let s=e-1;if(t=this.bytes[s--],t>=128){let i=e-4;for(i<this.start&&(i=this.start);s>=i&&(this.bytes[s]&192)===128;)s--;s<this.start&&(s=this.start);let a=this.step(s-this.start);t=s+(a&7)===e?a>>3:z.RUNE_ERROR}}let n=e<this.end?this.step(e-this.start)>>3:-1;return K.emptyOpContext(t,n)}indexOf(e,t,n=0){let s=t.length;if(s===0)return n<=this.end?n:-1;let i=t[0],a=this.end-s,u=typeof e.indexOf=="function",c=n;for(;c<=a;){if(u){if(c=e.indexOf(i,c),c===-1||c>a)return-1}else{for(;c<=a&&e[c]!==i;)c++;if(c>a)return-1}let l=!0;for(let h=1;h<s;h++)if(e[c+h]!==t[h]){l=!1;break}if(l)return c;c++}return-1}prefixLength(e){return e.prefixUTF8.length}},M(Vt,"RUNE_ERROR_STEP",z.RUNE_ERROR<<3|1),Vt),pD=class extends ut{constructor(r,e=0,t=r.length){super(),this.charSequence=r,this.start=e,this.end=t}hasString(r,e){let t=this.charSequence.indexOf(r.str,this.start+e);return t!==-1&&t<=this.end-r.str.length}hasAnyString(r,e){return r.automaton16().searchUTF16(this.charSequence,this.start+e,this.end)}step(r){if(r+=this.start,r>=this.end)return ut.EOF();let e=this.charSequence.charCodeAt(r);if(e<z.MIN_HIGH_SURROGATE||e>z.MAX_HIGH_SURROGATE||r+1>=this.end)return e<<3|1;let t=this.charSequence.charCodeAt(r+1);return t>=z.MIN_LOW_SURROGATE&&t<=z.MAX_LOW_SURROGATE?(e-z.MIN_HIGH_SURROGATE)*1024+(t-z.MIN_LOW_SURROGATE)+z.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(r,e){e+=this.start;let t=this.charSequence.indexOf(r.prefix,e);return t<0||t>this.end-r.prefix.length?-1:t-e}context(r){r+=this.start;let e=r>this.start&&r<=this.end?this.charSequence.charCodeAt(r-1):-1,t=r<this.end?this.charSequence.charCodeAt(r):-1;return K.emptyOpContext(e,t)}prefixLength(r){return r.prefix.length}},me=class{static fromUTF8(r,e=0,t=r.length){return new dD(r,e,t)}static fromUTF16(r,e=0,t=r.length){return new pD(r,e,t)}},qi=class extends Error{constructor(r){super(r),this.name="RE2JSException"}},ye=class extends qi{constructor(r,e=null){let t=`error parsing regexp: ${r}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=r,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},Ui=class extends qi{constructor(r){super(r),this.name="RE2JSCompileException"}},Bt=class extends qi{constructor(r){super(r),this.name="RE2JSGroupException"}},gD=class extends qi{constructor(r){super(r),this.name="RE2JSFlagsException"}},zo=class extends qi{constructor(r){super(r),this.name="RE2JSInternalException"}},mr,tC=(mr=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(n=>{let s=n.codePointAt(0);return s===L.CODES["\\"]||s===L.CODES.$?`\\${n}`:n}).join(""):e.indexOf("$")<0?e:e.split("").map(n=>n.codePointAt(0)===L.CODES.$?"$$":n).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;let n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.hasNamedGroups=Object.keys(this.namedGroups).length>0,this.numberOfInstructions=n.numberOfInstructions(),this.lookbehindState=null,t instanceof _r?this.resetMatcherInput(t):K.isByteArray(t)?this.resetMatcherInput(Cr.utf8(t)):this.resetMatcherInput(Cr.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof _r||(K.isByteArray(e)?e=Cr.utf8(e):e=Cr.utf16(e)),this.matcherInput=e,this.lookbehindState!==null?this.lookbehindState.reset():this.lookbehindState=this.patternInput.re2().createLookbehindState(),this.reset(),this}start(e=0){if(typeof e=="string"){let t=this.namedGroups[e];if(!Number.isFinite(t))throw new Bt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){let t=this.namedGroups[e];if(!Number.isFinite(t))throw new Bt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){let s=this.namedGroups[e];if(!Number.isFinite(s))throw new Bt(`group '${e}' not found`);e=s}let t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new Bt("perhaps no match attempted");let e=Object.create(null);for(let t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(!Number.isInteger(e)||e<0||e>this.patternGroupCount)throw new Bt(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new Bt("perhaps no match attempted");if(e===0||this.hasGroups)return;let t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount,this.lookbehindState);if(!n[0])throw new Bt("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,F.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,F.ANCHOR_START)}find(e=null){if(e!==null){if(!Number.isInteger(e)||e<0||e>this.matcherInputLength)throw new Bt(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){let t=(this.matcherInput.isUTF16Encoding()?me.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):me.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,F.UNANCHORED)}genMatch(e,t){let n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1,this.lookbehindState);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?K.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="",s=this.start(),i=this.end();return this.appendPos<s&&(n+=this.substring(this.appendPos,s)),this.appendPos=i,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0,s=e.length,i=0;for(;i<s;){let a=e.codePointAt(i);if(a===L.CODES["\\"]){if(n<i&&(t+=e.substring(n,i)),i++,i>=s)throw new Bt("character to be escaped is missing");n=i,i++;continue}if(a===L.CODES.$){if(n<i&&(t+=e.substring(n,i)),i+1>=s)throw new Bt("Illegal group reference: group index is missing");let u=e.codePointAt(i+1);if(L.CODES[0]<=u&&u<=L.CODES[9]){let c=u-L.CODES[0],l=i+2;for(;l<s;l++){let d=e.codePointAt(l);if(d<L.CODES[0]||d>L.CODES[9]||c*10+d-L.CODES[0]>this.patternGroupCount)break;c=c*10+d-L.CODES[0]}if(c>this.patternGroupCount)throw new Bt(`n > number of groups: ${c}`);let h=this.group(c);h!==null&&(t+=h),i=l,n=i}else if(u===L.CODES["{"]){let c=i+2;for(;c<s&&e.codePointAt(c)!==L.CODES["}"];)c++;if(c>=s)throw new Bt("named capture group is missing trailing '}'");let l=e.substring(i+2,c),h=this.group(l);h!==null&&(t+=h),i=c+1,n=i}else throw new Bt("Illegal group reference");continue}i++}return n<s&&(t+=e.substring(n,s)),t}appendReplacementInternalJs(e){let t=a=>a>=48&&a<=57,n=this.patternGroupCount,s="",i=0;for(;i<e.length;){let a=e.indexOf("$",i);if(a<0)break;s+=e.substring(i,a),i=a;let u=e.charCodeAt(i+1);if(u===L.CODES.$)s+="$",i+=2;else if(u===L.CODES["&"])s+=this.group(0),i+=2;else if(u===L.CODES["`"])s+=this.substring(0,this.start(0)),i+=2;else if(u===L.CODES["'"])s+=this.substring(this.end(0),this.matcherInputLength),i+=2;else if(t(u)){let c=1,l=u-48,h=e.charCodeAt(i+2);if(t(h)&&l*10+h-48<=n&&(c=2,l=l*10+h-48),l>=1&&l<=n){let d=this.group(l);d!==null&&(s+=d)}else s+=e.substring(i,i+1+c);i+=1+c}else if(u===L.CODES["<"]&&this.hasNamedGroups){let c=e.indexOf(">",i+2);if(c<0)s+="$<",i+=2;else{let l=e.substring(i+2,c);if(Object.prototype.hasOwnProperty.call(this.namedGroups,l)){let h=this.group(l);h!==null&&(s+=h)}i=c+1}}else s+="$",i+=1}return s+e.substring(i)}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,n=!1){let s="";this.reset();let i=typeof e=="function",a=null;if(i){if(this.groupCount()>=mr.MAX_REPLACER_ARGS)throw new Bt("Too many capture groups to safely invoke replacer function");a=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(s+=i?this.appendReplacementFunc(e,a):this.appendReplacement(e,n),!!t););return s+=this.appendTail(),s}appendReplacementFunc(e,t){let n="",s=this.start(),i=this.end();this.appendPos<s&&(n+=this.substring(this.appendPos,s)),this.appendPos=i;let a=this.matchArray();return a.push(s,t),this.hasNamedGroups&&a.push(this.namedGroupsObject()),n+=String(e(...a)),n}matchArray(){let e=[this.group(0)];for(let t=1;t<=this.patternGroupCount;t++){let n=this.group(t);e.push(n===null?void 0:n)}return e}namedGroupsObject(){if(!this.hasNamedGroups)return;let e=this.getNamedGroups();for(let t in e)e[t]===null&&(e[t]=void 0);return e}},M(mr,"MAX_REPLACER_ARGS",65535),mr),Be,O=(Be=class{static isRuneOp(e){return Be.RUNE<=e&&e<=Be.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=K.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=new Int32Array(0),this.next=null}matchRune(e){if(this.runes.length===1){let a=this.runes[0];return this.arg&F.FOLD_CASE?z.equalsIgnoreCase(a,e):e===a}let t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let a=0;a<t;a+=2){if(e<this.runes[a])return!1;if(e<=this.runes[a+1])return!0}return!1}let n=0,s=t>>1;for(;s>1;){let a=s>>1;n+=this.runes[n+a<<1]<=e?a:0,s-=a}n+=this.runes[n<<1]<=e?1:0;let i=n-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){let a=this.runes[0];return this.arg&F.FOLD_CASE?z.equalsIgnoreCase(a,e)?0:-1:e===a?0:-1}let t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let a=0;a<t;a+=2){if(e<this.runes[a])return-1;if(e<=this.runes[a+1])return Math.floor(a/2)}return-1}let n=0,s=t>>1;for(;s>1;){let a=s>>1;n+=this.runes[n+a<<1]<=e?a:0,s-=a}n+=this.runes[n<<1]<=e?1:0;let i=n-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case Be.ALT:return`alt -> ${this.out}, ${this.arg}`;case Be.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case Be.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case Be.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case Be.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case Be.FAIL:return"fail";case Be.NOP:return`nop -> ${this.out}`;case Be.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case Be.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case Be.RUNE:return this.runes===null?"rune <null>":["rune ",Be.escapeRunes(this.runes),this.arg&F.FOLD_CASE?"/i":""," -> ",this.out].join("");case Be.RUNE1:return`rune1 ${Be.escapeRunes(this.runes)} -> ${this.out}`;case Be.RUNE_ANY:return`any -> ${this.out}`;case Be.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},M(Be,"ALT",1),M(Be,"ALT_MATCH",2),M(Be,"CAPTURE",3),M(Be,"EMPTY_WIDTH",4),M(Be,"FAIL",5),M(Be,"MATCH",6),M(Be,"NOP",7),M(Be,"RUNE",8),M(Be,"RUNE1",9),M(Be,"RUNE_ANY",10),M(Be,"RUNE_ANY_NOT_NL",11),M(Be,"LB_WRITE",12),M(Be,"LB_CHECK",13),Be),Er,nC=(Er=class{constructor(e){this.sparse=new Int32Array(e),this.densePcs=new Int32Array(e),this.denseCaps=null,this.size=0,this.ncap=0,this.mainThreads=0}init(e){this.ncap=e;let t=Math.min(this.densePcs.length,Er.INITIAL_THREADS)*e;(!this.denseCaps||this.denseCaps.length<t)&&(this.denseCaps=new Int32Array(t))}growCaps(e){let t=this.densePcs.length*this.ncap,n=new Int32Array(Math.min(t,Math.max(e,2*this.denseCaps.length)));n.set(this.denseCaps),this.denseCaps=n}contains(e){let t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){let t=this.size++;return this.sparse[e]=t,this.densePcs[t]=e,t}clear(){this.size=0,this.mainThreads=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}},M(Er,"INITIAL_THREADS",32),Er),CD=class{constructor(r){this.pos=-1,this.pcs=new Int32Array(r.numInst()),this.size=0,this.lbTable=new Int32Array(r.numLb+1)}reset(){this.pos=-1,this.size=0}},OC=class xC{static fromRE2(e){let t=new xC;return t.prog=e.prog,t.re2=e,t.q0=new nC(t.prog.numInst()),t.q1=new nC(t.prog.numInst()),t.addStack=new Int32Array(2*(t.prog.numInst()+1)),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.addStack=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?K.emptyInts():K.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n,s=null){let i=this.re2.cond;if(i===K.EMPTY_ALL||(n===F.ANCHOR_START||n===F.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let a=this.prog.numLb>0,u=t,c=t,l=!1;a&&(s!==null&&s.pos>=0&&s.pos<=t?(c=s.pos,l=!0):c=0);let h=a&&s!==null,d=this.q0,g=this.q1,w=e.step(c),D=w>>3,P=w&7,k=-1,q=0;w!==ut.EOF()&&(w=e.step(c+P),k=w>>3,q=w&7);let Q;for(c===0?Q=K.emptyOpContext(-1,D):Q=e.context(c),a&&(l?this.restoreLookbehinds(s,d,Q):this.spawnLookbehinds(d,c,Q));;){if(d.mainThreads===0){if(i&K.EMPTY_BEGIN_TEXT&&c!==0||(n===F.ANCHOR_START||n===F.ANCHOR_BOTH)&&c!==0||this.matched)break;if(this.prog.numLb===0&&d.isEmpty()&&this.re2.prefix.length!==0&&k!==this.re2.prefixRune&&e.canCheckPrefix()){let Ze=e.index(this.re2,c);if(Ze<0)break;c+=Ze,w=e.step(c),D=w>>3,P=w&7,w=e.step(c+P),k=w>>3,q=w&7,Q=e.context(c)}}c>=u&&(h&&(this.saveLookbehinds(s,d,c),h=!1),!this.matched&&(c===0||n===F.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=c),this.add(d,this.prog.start,c,this.matchcap,0,Q)));let se=c+P;if(Q=e.context(se),this.step(d,g,c,se,D,Q,n,c===e.endPos()),P===0||this.ncap===0&&this.matched)break;c+=P,D=k,P=q,D!==-1&&(w=e.step(c+P),k=w>>3,q=w&7);let Se=d;d=g,g=Se}return d.clear(),g.clear(),this.matched}matchSet(e,t,n){let s=this.re2.cond;if(s===K.EMPTY_ALL)return[];if((n===F.ANCHOR_START||n===F.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,a=t,u=this.q0,c=this.q1,l=e.step(i),h=l>>3,d=l&7,g=-1,w=0;l!==ut.EOF()&&(l=e.step(i+d),g=l>>3,w=l&7);let D=i===0?K.emptyOpContext(-1,h):e.context(i),P=new Set;for(this.prog.numLb>0&&this.spawnLookbehinds(u,i,D);!(u.mainThreads===0&&(s&K.EMPTY_BEGIN_TEXT&&i!==0||(n===F.ANCHOR_START||n===F.ANCHOR_BOTH)&&i!==0));){(i===0||n===F.UNANCHORED)&&i>=a&&this.add(u,this.prog.start,i,this.matchcap,0,D);let k=i+d;D=e.context(k);for(let Q=0;Q<u.size;Q++){let se=u.densePcs[Q],Se=this.prog.inst[se],Ze=Q*this.ncap,be=!1;switch(Se.op){case O.MATCH:if(n===F.ANCHOR_BOTH&&i!==e.endPos())break;P.add(Se.arg);break;case O.RUNE:be=Se.matchRune(h);break;case O.RUNE1:be=h===Se.runes[0];break;case O.RUNE_ANY:be=!0;break;case O.RUNE_ANY_NOT_NL:be=h!==10;break;default:continue}be&&this.add(c,Se.out,k,u.denseCaps,Ze,D)}if(u.clear(),d===0)break;i+=d,h=g,d=w,h!==-1&&(l=e.step(i+d),g=l>>3,w=l&7);let q=u;u=c,c=q}return c.clear(),Array.from(P).sort((k,q)=>k-q)}step(e,t,n,s,i,a,u,c){let l=this.re2.longest;for(let h=0;h<e.size;h++){let d=e.densePcs[h],g=h*this.ncap;if(l&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[g])continue;let w=this.prog.inst[d],D=!1;switch(w.op){case O.MATCH:if(u===F.ANCHOR_BOTH&&!c)break;if(this.ncap>0&&(!l||!this.matched||this.matchcap[1]<n)){e.denseCaps[g+1]=n;for(let P=0;P<this.ncap;P++)this.matchcap[P]=e.denseCaps[g+P]}l||(e.size=0),this.matched=!0;break;case O.RUNE:D=w.matchRune(i);break;case O.RUNE1:D=i===w.runes[0];break;case O.RUNE_ANY:D=!0;break;case O.RUNE_ANY_NOT_NL:D=i!==10;break;default:continue}D&&this.add(t,w.out,s,e.denseCaps,g,a)}e.clear()}spawnLookbehinds(e,t,n){for(let s=0;s<this.prog.lbStarts.length;s++)this.add(e,this.prog.lbStarts[s],t,this.matchcap,0,n)}restoreLookbehinds(e,t,n){this.lbTable.set(e.lbTable);for(let s=0;s<e.size;s++)this.add(t,e.pcs[s],e.pos,this.matchcap,0,n)}saveLookbehinds(e,t,n){let s=0;for(let i=0;i<t.size;i++){let a=t.densePcs[i];this.prog.lbInst[a]===1&&O.isRuneOp(this.prog.inst[a].op)&&(e.pcs[s++]=a)}e.size=s,e.pos=n,e.lbTable.set(this.lbTable)}add(e,t,n,s,i,a){let u=this.addStack,c=0;for(;;){for(;t!==0&&!e.contains(t);){let h=e.add(t),d=this.prog.inst[t];switch(d.op){case O.FAIL:t=0;break;case O.ALT:case O.ALT_MATCH:u[c++]=d.arg,u[c++]=0,t=d.out;break;case O.EMPTY_WIDTH:t=d.arg&~a?0:d.out;break;case O.NOP:t=d.out;break;case O.CAPTURE:d.arg<this.ncap&&(u[c++]=-d.arg-1,u[c++]=s[i+d.arg],s[i+d.arg]=n),t=d.out;break;case O.LB_WRITE:this.lbTable[Math.abs(d.arg)]=n,t=d.out;break;case O.LB_CHECK:d.arg>0?t=this.lbTable[d.arg]===n?d.out:0:t=this.lbTable[-d.arg]!==n?d.out:0;break;case O.MATCH:case O.RUNE:case O.RUNE1:case O.RUNE_ANY:case O.RUNE_ANY_NOT_NL:if(this.prog.lbInst[t]===0&&e.mainThreads++,this.ncap>0){let g=h*this.ncap;g+this.ncap>e.denseCaps.length&&e.growCaps(g+this.ncap);for(let w=0;w<this.ncap;w++)e.denseCaps[g+w]=s[i+w]}t=0;break;default:throw new zo("unhandled")}}if(c===0)return;c-=2;let l=u[c];l<0?(s[i-l-1]=u[c+1],t=0):t=l}}},mD=(r,e,t)=>{let n=-2128831035;for(let s=0;s<r.length;s++)n^=r[s],n=Math.imul(n,16777619);n^=e,n=Math.imul(n,16777619);for(let s=0;s<t.length;s++)n^=t[s],n=Math.imul(n,16777619);return n},rC=(r,e)=>{if(r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0},sC=(r,e,t,n)=>r.flag===t&&rC(r.nfaStates,e)&&rC(r.matchIDs,n),Vl=[],Mi=-1,Ho=class{constructor(r,e,t){this.nfaStates=r,this.flag=e,this.isMatch=(e&Kl.FLAG_MATCH)!==0,this.matchIDs=t,this.next=null,this.nextAnchored=null}},de,Kl=(de=class{constructor(e,t=8388608){this.prog=e,this.maxMem=t,this.stateCache=new Map,this.stateCount=0,this.startStates=new Map,this.failed=!1;for(let n=0;n<e.numInst();n++){let s=e.getInst(n).op;if(s===O.LB_WRITE||s===O.LB_CHECK){this.failed=!0;break}}this.computeRuneClasses(),this.stateBudget=t,this.memBudget=t}computeRuneClasses(){let e=new Set,t=(s,i)=>{e.add(s),e.add(i+1)};for(let s=0;s<this.prog.numInst();s++){let i=this.prog.getInst(s);switch(i.op){case O.RUNE:case O.RUNE1:if(i.runes.length===1){if(t(i.runes[0],i.runes[0]),i.arg&F.FOLD_CASE)for(let a=z.simpleFold(i.runes[0]);a!==i.runes[0];a=z.simpleFold(a))t(a,a)}else for(let a=0;a<i.runes.length;a+=2)t(i.runes[a],i.runes[a+1]);break;case O.RUNE_ANY_NOT_NL:t(10,10);break;case O.EMPTY_WIDTH:i.arg&(K.EMPTY_BEGIN_LINE|K.EMPTY_END_LINE)&&t(10,10),i.arg&(K.EMPTY_WORD_BOUNDARY|K.EMPTY_NO_WORD_BOUNDARY)&&(t(48,57),t(65,90),t(95,95),t(97,122))}}e.delete(0),this.classBounds=Int32Array.from(e).sort(),this.numClasses=this.classBounds.length+1;let n=new Int32Array(z.MAX_LATIN1+1);for(let s=0;s<=z.MAX_LATIN1;s++)n[s]=this.searchClass(s);this.latin1Class=n}runeClass(e){return e<=z.MAX_LATIN1?this.latin1Class[e]:this.searchClass(e)}searchClass(e){let t=this.classBounds,n=0,s=t.length;for(;n<s;){let i=n+s>>1;t[i]<=e?n=i+1:s=i}return n}closure(e,t){let n=new Set,s=Array.from(e),i=0;for(;s.length>0;){let a=s.pop();if(a===0||n.has(a))continue;n.add(a);let u=this.prog.getInst(a);switch(u.op){case O.ALT:case O.ALT_MATCH:s.push(u.out),s.push(u.arg);break;case O.NOP:case O.CAPTURE:s.push(u.out);break;case O.EMPTY_WIDTH:i|=u.arg,u.arg&~t||s.push(u.out)}}return{pcs:Array.from(n).sort((a,u)=>a-u),needflags:i}}getState(e,t,n){let s=mD(e,t,n),i=this.stateCache.get(s);if(i instanceof Ho){if(sC(i,e,t,n))return i}else if(i!==void 0){for(let c=0;c<i.length;c++)if(sC(i[c],e,t,n))return i[c]}let a=de.stateCost(e,n);if(this.memBudget<a)return null;this.memBudget-=a;let u=new Ho(e,t,n);return i===void 0?this.stateCache.set(s,u):i instanceof Ho?this.stateCache.set(s,[i,u]):i.push(u),this.stateCount++,u}static stateCost(e,t){let n=t.length===0?0:de.ARRAY_OVERHEAD+de.ELEMENT_SIZE*t.length;return de.STATE_OVERHEAD+de.ELEMENT_SIZE*e.length+n}*cachedStates(){for(let e of this.stateCache.values())e instanceof Ho?yield e:yield*e}makeState(e,t,n){let s=this.closure(e,t&de.FLAG_EMPTY_MASK),i=t;return s.needflags===0&&(i&=de.FLAG_MATCH),i|=s.needflags<<de.FLAG_NEED_SHIFT,this.getState(s.pcs,i,n)}allocTable(e,t){let n=this.numClasses+1,s=de.TABLE_OVERHEAD+de.ELEMENT_SIZE*n;if(this.memBudget<s)return null;this.memBudget-=s;let i=new Array(n).fill(null);return t===F.UNANCHORED?e.next=i:e.nextAnchored=i,i}clearCache(){this.stateCache.clear(),this.stateCount=0,this.startStates.clear(),this.memBudget=this.stateBudget}resetCache(e){return this.clearCache(),this.getState(e.nfaStates,e.flag,e.matchIDs)}step(e,t,n,s){let i=s===F.UNANCHORED?e.next:e.nextAnchored;if(i!==null){let Q=i[t];if(Q!==null)return Q}else if(i=this.allocTable(e,s),i===null)return null;let a=e.flag>>>de.FLAG_NEED_SHIFT,u=e.flag&de.FLAG_EMPTY_MASK,c=u,l=0;n===10&&(c|=K.EMPTY_END_LINE,l|=K.EMPTY_BEGIN_LINE),n===Mi&&(c|=K.EMPTY_END_LINE|K.EMPTY_END_TEXT);let h=(e.flag&de.FLAG_LAST_WORD)!==0,d=n!==Mi&&K.isWordRune(n);c|=d===h?K.EMPTY_NO_WORD_BOUNDARY:K.EMPTY_WORD_BOUNDARY;let g=e.nfaStates;c&~u&a&&(g=this.closure(g,c).pcs);let w=[],D=!1,P=Vl;for(let Q=0;Q<g.length;Q++){let se=this.prog.getInst(g[Q]);se.op===O.MATCH?(D||(D=!0,P=[]),P.push(se.arg)):n!==Mi&&O.isRuneOp(se.op)&&se.matchRune(n)&&w.push(se.out)}P.length>1&&P.sort((Q,se)=>Q-se),s===F.UNANCHORED&&n!==Mi&&w.push(this.prog.start);let k=l;D&&(k|=de.FLAG_MATCH),d&&(k|=de.FLAG_LAST_WORD);let q=this.makeState(w,k,P);return q===null?null:(i[t]=q,q)}start(e,t){let n=e.context(t),s;if(n&K.EMPTY_BEGIN_TEXT)s=K.EMPTY_BEGIN_TEXT|K.EMPTY_BEGIN_LINE;else if(n&K.EMPTY_BEGIN_LINE)s=K.EMPTY_BEGIN_LINE;else{let a=e.step(t),u=a>=0&&K.isWordRune(a>>3);s=(n&K.EMPTY_WORD_BOUNDARY)!==0!==u?de.FLAG_LAST_WORD:0}let i=this.startStates.get(s);if(i===void 0){if(i=this.makeState([this.prog.start],s,Vl),i===null&&(this.clearCache(),i=this.makeState([this.prog.start],s,Vl),i===null))return null;this.startStates.set(s,i)}return i}stepOrReset(e,t,n,s,i,a){let u=this.step(e,t,n,s);if(u!==null)return u;if(a.resetPos>=0&&i-a.resetPos<de.PROGRESS_PER_STATE*this.stateCount)return null;a.resetPos=i;let c=this.resetCache(e);return c===null?null:(u=this.step(c,t,n,s),u)}run(e,t,n,s,i){let a=e.endPos(),u=this.latin1Class,c=n===F.UNANCHORED,l={resetPos:-1},h=t;for(;h<a;){let d=e.step(h),g=d>>3,w=d&7;if(w===0)break;let D=g<=z.MAX_LATIN1?u[g]:this.runeClass(g),P=c&&s.next!==null?s.next[D]:null;if(P===null&&(P=this.stepOrReset(s,D,g,n,h,l),P===null))return null;if(s=P,s.isMatch&&i(s,!1))return!0;if(!c&&s.nfaStates.length===0)return!1;h+=w}return s=this.stepOrReset(s,this.numClasses,Mi,n,h,l),s===null?null:s.isMatch&&i(s,!0)}match(e,t,n){if(this.failed)return null;if((n===F.ANCHOR_START||n===F.ANCHOR_BOTH)&&t!==0)return!1;let s=this.start(e,t);return s===null?null:this.run(e,t,n,s,(i,a)=>n!==F.ANCHOR_BOTH||a)}matchSet(e,t,n){if(this.failed)return null;if((n===F.ANCHOR_START||n===F.ANCHOR_BOTH)&&t!==0)return[];let s=this.start(e,t);if(s===null)return null;let i=new Set,a=(u,c)=>{if(n!==F.ANCHOR_BOTH||c)for(let l=0;l<u.matchIDs.length;l++)i.add(u.matchIDs[l]);return!1};return this.run(e,t,n,s,a)===null?null:Array.from(i).sort((u,c)=>u-c)}},M(de,"FLAG_EMPTY_MASK",255),M(de,"FLAG_MATCH",256),M(de,"FLAG_LAST_WORD",512),M(de,"FLAG_NEED_SHIFT",16),M(de,"STATE_OVERHEAD",150),M(de,"ARRAY_OVERHEAD",40),M(de,"ELEMENT_SIZE",8),M(de,"TABLE_OVERHEAD",48),M(de,"PROGRESS_PER_STATE",10),de),ED=32,_D=500,Ml=256,yD=262144,wD=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(Ml),this.jobArg=new Uint8Array(Ml),this.jobPos=new Int32Array(Ml),this.jobLen=0,this.visited=new Uint32Array(0)}reset(r,e,t){this.end=e,this.jobLen=0,this.ncap=t;let n=r.numInst()*(e+1)+ED-1>>>5;this.visited.length<n?this.visited=new Uint32Array(n):this.visited.fill(0,0,n),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(r,e){let t=r*(this.end+1)+e,n=t>>>5,s=1<<(t&31);return this.visited[n]&s?!1:(this.visited[n]|=s,!0)}push(r,e,t,n){if(r.prog.getInst(e).op!==O.FAIL&&(n||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){let s=this.jobPc.length*2,i=new Int32Array(s);i.set(this.jobPc),this.jobPc=i;let a=new Uint8Array(s);a.set(this.jobArg),this.jobArg=a;let u=new Int32Array(s);u.set(this.jobPos),this.jobPos=u}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=n?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(r,e,t,n,s){let i=r.longest;for(this.push(r,t,n,!1);this.jobLen>0;){this.jobLen--;let a=this.jobPc[this.jobLen],u=this.jobArg[this.jobLen]===1,c=this.jobPos[this.jobLen],l=!0;for(;!(!l&&!this.shouldVisit(a,c));){l=!1;let h=r.prog.getInst(a);switch(h.op){case O.FAIL:break;case O.ALT:if(u){u=!1,a=h.arg;continue}else{this.push(r,a,c,!0),a=h.out;continue}case O.ALT_MATCH:{let d=r.prog.getInst(h.out);if(O.isRuneOp(d.op)){this.push(r,h.arg,c,!1),a=h.arg,c=this.end;continue}this.push(r,h.out,this.end,!1),a=h.out;continue}case O.RUNE:{let d=e.step(c);if(d===ut.EOF()||!h.matchRune(d>>3))break;c+=d&7,a=h.out;continue}case O.RUNE1:{let d=e.step(c);if(d===ut.EOF()||d>>3!==h.runes[0])break;c+=d&7,a=h.out;continue}case O.RUNE_ANY_NOT_NL:{let d=e.step(c);if(d===ut.EOF()||d>>3===10)break;c+=d&7,a=h.out;continue}case O.RUNE_ANY:{let d=e.step(c);if(d===ut.EOF())break;c+=d&7,a=h.out;continue}case O.CAPTURE:if(u){this.cap[h.arg]=c;break}else{h.arg<this.ncap&&(this.push(r,a,this.cap[h.arg],!0),this.cap[h.arg]=c),a=h.out;continue}case O.EMPTY_WIDTH:{let d=e.context(c);if(h.arg&~d)break;a=h.out;continue}case O.NOP:a=h.out;continue;case O.MATCH:{if(s===F.ANCHOR_BOTH&&c!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=c);let d=this.matchcap[1];if((d===-1||i&&c>0&&c>d)&&this.matchcap.set(this.cap),!i||c===this.end)return!0;break}case O.LB_WRITE:case O.LB_CHECK:throw new zo("Backtracker cannot evaluate Lookbehind instructions");default:throw new zo("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}},qo=[],jo=class FC{static shouldBacktrack(e){return e.numInst()<=_D}static maxBitStateLen(e){return FC.shouldBacktrack(e)?Math.floor(yD/e.numInst()):0}static execute(e,t,n,s,i){let a=e.cond;if(a===K.EMPTY_ALL||(s===F.ANCHOR_START||s===F.ANCHOR_BOTH)&&n!==0||a&K.EMPTY_BEGIN_TEXT&&n!==0)return null;let u=qo.length>0?qo.pop():new wD,c=t.endPos();u.reset(e.prog,c,i);let l=!1;if(a&K.EMPTY_BEGIN_TEXT||s===F.ANCHOR_START||s===F.ANCHOR_BOTH)u.ncap>0&&(u.cap[0]=n),u.tryBacktrack(e,t,e.prog.start,n,s)&&(l=!0);else{let d=-1;for(;n<=c&&d!==0;n+=d){if(e.prefix.length>0){let w=t.index(e,n);if(w<0)break;n+=w}if(u.ncap>0&&(u.cap[0]=n),u.tryBacktrack(e,t,e.prog.start,n,s)){l=!0;break}let g=t.step(n);d=g===ut.EOF()?0:g&7}}if(!l)return qo.push(u),null;let h=i===0?[]:K.toArray(u.matchcap.subarray(0,i));return qo.push(u),h}},iC=class{constructor(r){this.sparse=new Uint32Array(r),this.dense=new Uint32Array(r),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(r){return r<this.sparse.length&&this.sparse[r]<this.size&&this.dense[this.sparse[r]]===r}insert(r){this.contains(r)||this.insertNew(r)}insertNew(r){r>=this.sparse.length||(this.sparse[r]=this.size,this.dense[this.size]=r,this.size++)}},ID=(r,e,t,n)=>{let s=r.length,i=e.length,a=0,u=0,c=[],l=[],h=!0,d=-1,g=w=>{let D=w?r:e,P=w?a:u,k=w?t:n;return d>0&&D[P]<=c[d]?!1:(c.push(D[P],D[P+1]),w?a+=2:u+=2,d+=2,l.push(k),!0)};for(;a<s||u<i;)if(u>=i?h=g(!0):a>=s||e[u]<r[a]?h=g(!1):h=g(!0),!h)return null;return{merged:c,next:l}},DD=class{constructor(r){this.start=r.start,this.numCap=r.numCap,this.inst=new Array(r.inst.length);for(let e=0;e<r.inst.length;e++){let t=r.inst[e],n=new O(t.op);n.out=t.out,n.arg=t.arg,n.runes=t.runes?new Int32Array(t.runes):new Int32Array(0),n.next=null,this.inst[e]=n}}},TD=r=>{let e=new DD(r);for(let t=0;t<e.inst.length;t++){let n=e.inst[t];if(n.op!==O.ALT&&n.op!==O.ALT_MATCH)continue;let s="out",i="arg",a=e.inst[n[i]];if(a.op!==O.ALT&&a.op!==O.ALT_MATCH&&(s="arg",i="out",a=e.inst[n[i]],a.op!==O.ALT&&a.op!==O.ALT_MATCH))continue;let u=e.inst[n[s]];if(u.op===O.ALT||u.op===O.ALT_MATCH)continue;let c="out",l="arg",h=!1;a.out===t?h=!0:a.arg===t&&(h=!0,c="arg",l="out"),h&&(a[c]=n[s]),n[s]===a[c]&&(n[i]=a[l])}return e},AD=r=>{if(r.inst.length>=1e3)return null;let e=new iC(r.inst.length),t=new iC(r.inst.length),n=new Array(r.inst.length),s=new Array(r.inst.length).fill(!1),i=a=>{let u=!0,c=r.inst[a];if(t.contains(a))return!0;switch(t.insert(a),c.op){case O.ALT:case O.ALT_MATCH:{u=i(c.out)&&i(c.arg);let l=s[c.out],h=s[c.arg];if(l&&h)return!1;if(h){let D=c.out;c.out=c.arg,c.arg=D;let P=l;l=h,h=P}l&&(s[a]=!0,c.op=O.ALT_MATCH);let d=n[c.out]||[],g=n[c.arg]||[],w=ID(d,g,c.out,c.arg);if(!w)return!1;n[a]=new Int32Array(w.merged),c.next=new Uint32Array(w.next);break}case O.CAPTURE:case O.EMPTY_WIDTH:case O.NOP:u=i(c.out),s[a]=s[c.out],n[a]=n[c.out]?new Int32Array(n[c.out]):new Int32Array(0),c.next=new Uint32Array(Math.floor(n[a].length/2)+1).fill(c.out);break;case O.MATCH:case O.FAIL:s[a]=c.op===O.MATCH;break;case O.RUNE:{if(s[a]=!1,c.next&&c.next.length>0)break;if(e.insert(c.out),!c.runes||c.runes.length===0){n[a]=new Int32Array(0),c.next=new Uint32Array([c.out]);break}let l=[];if(c.runes.length===1&&c.arg&F.FOLD_CASE){let h=c.runes[0];l.push(h,h);for(let d=z.simpleFold(h);d!==h;d=z.simpleFold(d))l.push(d,d);l.sort((d,g)=>d-g)}else for(let h=0;h<c.runes.length;h++)l.push(c.runes[h]);n[a]=new Int32Array(l),c.next=new Uint32Array(Math.floor(l.length/2)+1).fill(c.out),c.op=O.RUNE;break}case O.RUNE1:{if(s[a]=!1,c.next&&c.next.length>0)break;e.insert(c.out);let l=[];if(c.arg&F.FOLD_CASE){let h=c.runes[0];l.push(h,h);for(let d=z.simpleFold(h);d!==h;d=z.simpleFold(d))l.push(d,d);l.sort((d,g)=>d-g)}else l.push(c.runes[0],c.runes[0]);n[a]=new Int32Array(l),c.next=new Uint32Array(Math.floor(l.length/2)+1).fill(c.out),c.op=O.RUNE;break}case O.RUNE_ANY:if(s[a]=!1,c.next&&c.next.length>0)break;e.insert(c.out),n[a]=new Int32Array([0,z.MAX_RUNE]),c.next=new Uint32Array([c.out]);break;case O.RUNE_ANY_NOT_NL:if(s[a]=!1,c.next&&c.next.length>0)break;e.insert(c.out),n[a]=new Int32Array([0,9,11,z.MAX_RUNE]),c.next=new Uint32Array(Math.floor(n[a].length/2)+1).fill(c.out)}return u};for(e.clear(),e.insert(r.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let a=0;a<r.inst.length;a++)n[a]&&(r.inst[a].runes=n[a]);return r},bD=(r,e)=>{for(let t=0;t<e.inst.length;t++){let n=e.inst[t];switch(n.op){case O.ALT:case O.ALT_MATCH:case O.RUNE:break;case O.CAPTURE:case O.EMPTY_WIDTH:case O.NOP:case O.MATCH:case O.FAIL:r.inst[t].next=null;break;case O.RUNE1:case O.RUNE_ANY:case O.RUNE_ANY_NOT_NL:r.inst[t].next=null,r.inst[t].op=n.op,r.inst[t].runes=n.runes?new Int32Array(n.runes):new Int32Array(0)}}},aC=class LC{static compile(e){if(e.start===0||e.numLb>0)return null;let t=e.inst[e.start];if(t.op!==O.EMPTY_WIDTH||!(t.arg&K.EMPTY_BEGIN_TEXT))return null;let n=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===O.ALT||e.inst[i].op===O.ALT_MATCH){n=!0;break}for(let i=0;i<e.inst.length;i++){let a=e.inst[i],u=e.inst[a.out].op;switch(a.op){case O.ALT:case O.ALT_MATCH:if(u===O.MATCH||e.inst[a.arg].op===O.MATCH)return null;break;case O.EMPTY_WIDTH:if(u===O.MATCH){if((a.arg&K.EMPTY_END_TEXT)===K.EMPTY_END_TEXT)continue;return null}break;default:if(u===O.MATCH&&n)return null}}let s=TD(e);return s=AD(s),s!==null&&bD(s,e),s}static next(e,t){let n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===O.ALT_MATCH?e.out:0}static execute(e,t,n,s,i){let a=e.onepass;if(!a)return null;let u=new Int32Array(i).fill(-1),c=!1,l=t.step(n),h=l>>3,d=l&7,g=ut.EOF(),w=-1,D=0;l!==ut.EOF()&&(g=t.step(n+d),g!==ut.EOF()&&(w=g>>3,D=g&7));let P=n===0?K.emptyOpContext(-1,h):t.context(n),k=a.start,q;for(;;){switch(q=a.inst[k],k=q.out,q.op){case O.MATCH:return s===F.ANCHOR_BOTH&&n!==t.endPos()?null:(c=!0,u.length>0&&(u[0]=0,u[1]=n),i===0?[]:K.toArray(u));case O.RUNE:if(!q.matchRune(h))return null;break;case O.RUNE1:if(h!==q.runes[0])return null;break;case O.RUNE_ANY:break;case O.RUNE_ANY_NOT_NL:if(h===10)return null;break;case O.ALT:case O.ALT_MATCH:k=LC.next(q,h);continue;case O.FAIL:return null;case O.NOP:continue;case O.EMPTY_WIDTH:if(q.arg&~P)return null;continue;case O.CAPTURE:q.arg<u.length&&(u[q.arg]=n);continue;default:throw new zo("bad inst")}if(d===0)break;P=K.emptyOpContext(h,w),n+=d,h=w,d=D,h!==-1&&(g=t.step(n+d),g!==ut.EOF()?(w=g>>3,D=g&7):(w=-1,D=0))}return c?i===0?[]:K.toArray(u):null}},X,I=(X=class{static isPseudoOp(e){return e>=X.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===L.CODES["-"]?"\\":""}static fromRegexp(e){let t=new X(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=X.emptySubs(),this.runes=new Int32Array(0),this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=X.emptySubs(),this.runes=new Int32Array(0),this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case X.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case X.Op.EMPTY_MATCH:e+="(?:)";break;case X.Op.STAR:case X.Op.PLUS:case X.Op.QUEST:case X.Op.REPEAT:{let t=this.subs[0];switch(t.op>X.Op.CAPTURE||t.op===X.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case X.Op.STAR:e+="*";break;case X.Op.PLUS:e+="+";break;case X.Op.QUEST:e+="?";break;case X.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}"}this.flags&F.NON_GREEDY&&(e+="?");break}case X.Op.CONCAT:for(let t of this.subs)t.op===X.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case X.Op.ALTERNATE:{let t="";for(let n of this.subs)e+=t,t="|",e+=n.appendTo();break}case X.Op.LITERAL:this.flags&F.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=K.escapeRune(t);this.flags&F.FOLD_CASE&&(e+=")");break;case X.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case X.Op.ANY_CHAR:e+="(?s:.)";break;case X.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case X.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case X.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==X.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case X.Op.BEGIN_TEXT:e+="\\A";break;case X.Op.END_TEXT:this.flags&F.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case X.Op.BEGIN_LINE:e+="^";break;case X.Op.END_LINE:e+="$";break;case X.Op.WORD_BOUNDARY:e+="\\b";break;case X.Op.NO_WORD_BOUNDARY:e+="\\B";break;case X.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===z.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){let n=this.runes[t]+1,s=this.runes[t+1]-1;e+=X.quoteIfHyphen(n),e+=K.escapeRune(n),n!==s&&(e+="-",e+=X.quoteIfHyphen(s),e+=K.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){let n=this.runes[t],s=this.runes[t+1];e+=X.quoteIfHyphen(n),e+=K.escapeRune(n),n!==s&&(e+="-",e+=X.quoteIfHyphen(s),e+=K.escapeRune(s))}e+="]";break;default:e+=this.op}return e}maxCap(){let e=0;if(this.op===X.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){let n=t.maxCap();e<n&&(e=n)}return e}equals(e){if(!(e!==null&&e instanceof X)||this.op!==e.op)return!1;switch(this.op){case X.Op.END_TEXT:if((this.flags&F.WAS_DOLLAR)!==(e.flags&F.WAS_DOLLAR))return!1;break;case X.Op.LITERAL:case X.Op.CHAR_CLASS:if((this.flags&F.FOLD_CASE)!==(e.flags&F.FOLD_CASE))return!1;if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case X.Op.ALTERNATE:case X.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case X.Op.STAR:case X.Op.PLUS:case X.Op.QUEST:if((this.flags&F.NON_GREEDY)!==(e.flags&F.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.REPEAT:if((this.flags&F.NON_GREEDY)!==(e.flags&F.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.PLB:case X.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1}return!0}},M(X,"Op",NC(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),X),Jl=class{static walk(r,e){let t=[],n=r,s;for(;;){if(n.subs.length===0)s=e.leaf(n);else{let i=e.enter(n);if(i.result===void 0){t.push({re:n,state:i,i:0}),n=n.subs[0];continue}s=i.result}for(;;){if(t.length===0)return s;let i=t[t.length-1];if(e.child(i.re,i.state,s,i.i),i.i++,i.state.result===void 0&&i.i<i.re.subs.length){n=i.re.subs[i.i];break}t.pop(),s=i.state.result!==void 0?i.state.result:e.leave(i.re,i.state)}}}},oC=class{constructor(r,e){let t=new Map,n=[0],s=[0],i=[0],a=[0];for(let D of r){let P=0;for(let k=0;k<D.length;k++){let q=P*e+D[k],Q=t.get(q);Q===void 0&&(Q=n.length,t.set(q,Q),n.push(P),s.push(D[k]),i.push(i[P]+1),a.push(0)),P=Q}a[P]=1}let u=n.length,c=new Int32Array(u-1);for(let D=1;D<u;D++)c[D-1]=D;c.sort((D,P)=>n[D]-n[P]||s[D]-s[P]);let l=new Int32Array(u+1);for(let D=1;D<u;D++)l[n[D]+1]++;for(let D=0;D<u;D++)l[D+1]+=l[D];let h=new Int32Array(u-1);for(let D=0;D<c.length;D++)h[D]=s[c[D]];this.childStart=l,this.childUnit=h,this.childNode=c;let d=new Int32Array(u);for(let D=0;D<u;D++)d[D]=D;d.sort((D,P)=>i[D]-i[P]);let g=new Int32Array(u),w=Uint8Array.from(a);for(let D=1;D<u;D++){let P=d[D],k=n[P];if(k!==0){let q=g[k],Q=this.next(q,s[P]);for(;Q<0&&q!==0;)q=g[q],Q=this.next(q,s[P]);g[P]=Q>=0?Q:0}w[P]|=w[g[P]]}this.fail=g,this.match=w}next(r,e){let t=this.childStart[r],n=this.childStart[r+1],s=this.childUnit;for(;t<n;){let i=t+n>>1,a=s[i];if(a===e)return this.childNode[i];a<e?t=i+1:n=i}return-1}advance(r,e){for(;;){let t=this.next(r,e);if(t>=0)return t;if(r===0)return 0;r=this.fail[r]}}searchUTF16(r,e,t){let n=0;for(let s=e;s<t;s++)if(n=this.advance(n,r.charCodeAt(s)),this.match[n]===1)return!0;return!1}searchUTF8(r,e,t){let n=0;for(let s=e;s<t;s++)if(n=this.advance(n,r[s]),this.match[n]===1)return!0;return!1}},_t,ae=(_t=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.cost=e===_t.Type.EXACT?1:0,this.allExact=!1,this.ac16=null,this.ac8=null}automaton16(){if(this.ac16===null){let e=this.subs.map(t=>{let n=new Array(t.str.length);for(let s=0;s<t.str.length;s++)n[s]=t.str.charCodeAt(s);return n});this.ac16=new oC(e,65536)}return this.ac16}automaton8(){return this.ac8===null&&(this.ac8=new oC(this.subs.map(e=>e.bytes),256)),this.ac8}eval(e,t){switch(this.type){case _t.Type.NONE:return!0;case _t.Type.EXACT:return e.hasString(this,t);case _t.Type.AND:for(let n=0;n<this.subs.length;n++)if(!this.subs[n].eval(e,t))return!1;return!0;case _t.Type.OR:if(this.allExact)return e.hasAnyString(this,t);for(let n=0;n<this.subs.length;n++)if(this.subs[n].eval(e,t))return!0;return!1;default:return!0}}},M(_t,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),M(_t,"MAX_SCANS",32),M(_t,"MAX_AC_UNITS",1<<18),_t),Mt,vD=(Mt=class{static build(e){return e?Jl.walk(e,Mt.WALKER):new ae(ae.Type.NONE)}static leaf(e){if(e.op!==I.Op.LITERAL)return new ae(ae.Type.NONE);if(e.runes.length===0||e.flags&F.FOLD_CASE)return new ae(ae.Type.NONE);let t="";for(let s=0;s<e.runes.length;s++){if(z.isUnsearchable(e.runes[s]))return new ae(ae.Type.NONE);t+=String.fromCodePoint(e.runes[s])}let n=new ae(ae.Type.EXACT);return n.str=t,n.bytes=K.stringToUtf8ByteArray(n.str),n}static enter(e){switch(e.op){case I.Op.CAPTURE:case I.Op.PLUS:return{sub:null};case I.Op.REPEAT:return e.min>=1?{sub:null}:{result:new ae(ae.Type.NONE)};case I.Op.CONCAT:return{pf:new ae(ae.Type.AND),subs:[]};case I.Op.ALTERNATE:return{pf:new ae(ae.Type.OR),subs:[]};default:return{result:new ae(ae.Type.NONE)}}}static child(e,t,n){if(t.subs===void 0){t.sub=n;return}if(t.pf.type===ae.Type.AND){if(n.type===ae.Type.NONE)return;if(n.type===ae.Type.AND){for(let s=0;s<n.subs.length;s++)t.subs.push(n.subs[s]);return}t.subs.push(n);return}if(n.type===ae.Type.NONE){t.result=new ae(ae.Type.NONE);return}if(n.type===ae.Type.OR){for(let s=0;s<n.subs.length;s++)t.subs.push(n.subs[s]);return}t.subs.push(n)}static leave(e,t){if(t.subs===void 0)return t.sub;let n=t.pf,s=new Set,i=[];for(let l of t.subs){if(l.type===ae.Type.EXACT){if(s.has(l.str))continue;s.add(l.str)}i.push(l)}if(n.type===ae.Type.AND){let l=[],h=0;for(let d of i)h+d.cost>ae.MAX_SCANS||(l.push(d),h+=d.cost);return l.length===0?new ae(ae.Type.NONE):l.length===1?l[0]:(n.subs=l,n.cost=h,n)}if(i.length===0)return new ae(ae.Type.NONE);if(i.length===1)return i[0];n.subs=i;let a=!0,u=0,c=0;for(let l of i)l.type!==ae.Type.EXACT?a=!1:c+=l.bytes.length,u+=l.cost;return a?c>ae.MAX_AC_UNITS?new ae(ae.Type.NONE):(n.allExact=!0,n.cost=1,n):u>ae.MAX_SCANS?new ae(ae.Type.NONE):(n.cost=u,n)}},M(Mt,"WALKER",{leaf:e=>Mt.leaf(e),enter:e=>Mt.enter(e),child:(e,t,n)=>Mt.child(e,t,n),leave:(e,t)=>Mt.leave(e,t)}),Mt),bt=class{constructor(r=0,e=0){this.head=r,this.tail=e}},RD=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0,this.lbInst=null}getInst(r){return this.inst[r]}numInst(){return this.inst.length}addInst(r){this.inst.push(new O(r))}markLookbehindInsts(){let r=new Uint8Array(this.inst.length),e=this.lbStarts.slice();for(;e.length>0;){let t=e.pop();if(t===0||r[t]===1)continue;r[t]=1;let n=this.inst[t];switch(n.op){case O.ALT:case O.ALT_MATCH:e.push(n.out,n.arg);break;case O.MATCH:case O.FAIL:break;default:e.push(n.out)}}this.lbInst=r}skipNop(r){let e=this.inst[r];for(;e.op===O.NOP||e.op===O.CAPTURE;)e=this.inst[r],r=e.out;return e}prefix(){let r="",e=this.skipNop(this.start);if(!O.isRuneOp(e.op)||e.runes.length!==1)return[e.op===O.MATCH,r];for(;O.isRuneOp(e.op)&&e.runes.length===1&&!(e.arg&F.FOLD_CASE)&&!z.isUnsearchable(e.runes[0]);)r+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===O.MATCH,r]}startCond(){let r=0,e=this.start;e:for(;;){let t=this.inst[e];switch(t.op){case O.EMPTY_WIDTH:r|=t.arg;break;case O.FAIL:return-1;case O.CAPTURE:case O.NOP:break;default:break e}e=t.out}return r}patch(r,e){let t=r.head;for(;t!==0;){let n=this.inst[t>>1];t&1?(t=n.arg,n.arg=e):(t=n.out,n.out=e)}}append(r,e){if(r.head===0)return e;if(e.head===0)return r;let t=this.inst[r.tail>>1];return r.tail&1?t.arg=e.head:t.out=e.head,new bt(r.head,e.tail)}toString(){let r="";for(let e=0;e<this.inst.length;e++){let t=r.length;r+=e,e===this.start&&(r+="*"),r+="        ".substring(r.length-t),r+=this.inst[e],r+=`
`}return r}},SD=new Int32Array([0,L.CODES[`
`]-1,L.CODES[`
`]+1,z.MAX_RUNE]),uC=new Int32Array([0,z.MAX_RUNE]),Ko=class{constructor(r=0,e=new bt,t=!1){this.i=r,this.out=e,this.nullable=t}},kC=class ql{static compileRegexp(e){let t=new ql,n=t.compile(e);return t.prog.patch(n.out,t.newInst(O.MATCH).i),t.prog.start=n.i,t.prog.markLookbehindInsts(),t.prog}static compileSet(e){let t=new ql;if(e.length===0)return t.prog.start=t.newInst(O.FAIL).i,t.prog.markLookbehindInsts(),t.prog;let n=[];for(let i=0;i<e.length;i++){t.lbOffset=t.prog.numLb;let a=t.compile(e[i]),u=t.newInst(O.MATCH);t.prog.getInst(u.i).arg=i,t.prog.patch(a.out,u.i),n.push(a.i)}let s=n[0];for(let i=1;i<n.length;i++){let a=t.newInst(O.ALT),u=t.prog.getInst(a.i);u.out=s,u.arg=n[i],s=a.i}return t.prog.start=s,t.prog.markLookbehindInsts(),t.prog}constructor(){this.prog=new RD,this.newInst(O.FAIL),this.lbOffset=0,this.runeCache=new Map,this.walker={leaf:e=>this.leaf(e),enter:e=>this.enter(e),child:(e,t,n)=>this.child(e,t,n),leave:(e,t)=>this.leave(e,t)}}newInst(e){return this.prog.addInst(e),new Ko(this.prog.numInst()-1,new bt,!0)}nop(){let e=this.newInst(O.NOP);return e.out=new bt(e.i<<1,e.i<<1),e}fail(){return new Ko}cap(e){let t=this.newInst(O.CAPTURE);return t.out=new bt(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?(this.prog.patch(e.out,0),this.prog.patch(t.out,0),this.fail()):(this.prog.patch(e.out,t.i),new Ko(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;let n=this.newInst(O.ALT),s=this.prog.getInst(n.i);return s.out=e.i,s.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){let n=this.newInst(O.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new bt(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new bt(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){if(e.i===0)return this.nop();let n=this.newInst(O.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new bt(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new bt(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return e.i===0?this.nop():e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return e.i===0?this.fail():new Ko(e.i,this.loop(e,t).out,e.nullable)}empty(e){let t=this.newInst(O.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new bt(t.i<<1,t.i<<1),t}rune(e,t){let n=this.newInst(O.RUNE);n.nullable=!1;let s=this.prog.getInst(n.i);return s.runes=e,t&=F.FOLD_CASE,(e.length!==1||z.simpleFold(e[0])===e[0])&&(t&=~F.FOLD_CASE),s.arg=t,n.out=new bt(n.i<<1,n.i<<1),!(t&F.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?s.op=O.RUNE1:e.length===2&&e[0]===0&&e[1]===z.MAX_RUNE?s.op=O.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===L.CODES[`
`]-1&&e[2]===L.CODES[`
`]+1&&e[3]===z.MAX_RUNE&&(s.op=O.RUNE_ANY_NOT_NL),n}lookBehind(e,t){let n=Math.sign(t)*(Math.abs(t)+this.lbOffset),s=this.newInst(O.LB_WRITE);this.prog.getInst(s.i).arg=n;let i=this.rune(uC,0),a=this.star(i,!0),u=this.cat(a,e);this.prog.patch(u.out,s.i);let c=this.newInst(O.LB_CHECK);return this.prog.getInst(c.i).arg=n,this.prog.lbStarts.push(u.i),Math.abs(n)>this.prog.numLb&&(this.prog.numLb=Math.abs(n)),c.out=new bt(c.i<<1,c.i<<1),c}compile(e){return Jl.walk(e,this.walker)}leaf(e){switch(e.op){case I.Op.NO_MATCH:return this.fail();case I.Op.EMPTY_MATCH:return this.nop();case I.Op.LITERAL:{if(e.runes.length===0)return this.nop();let t=null;for(let n of e.runes){let s=this.runeCache.get(n);s===void 0&&(s=new Int32Array([n]),this.runeCache.set(n,s));let i=this.rune(s,e.flags);t=t===null?i:this.cat(t,i)}return t}case I.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case I.Op.ANY_CHAR_NOT_NL:return this.rune(SD,0);case I.Op.ANY_CHAR:return this.rune(uC,0);case I.Op.BEGIN_LINE:return this.empty(K.EMPTY_BEGIN_LINE);case I.Op.END_LINE:return this.empty(K.EMPTY_END_LINE);case I.Op.BEGIN_TEXT:return this.empty(K.EMPTY_BEGIN_TEXT);case I.Op.END_TEXT:return this.empty(K.EMPTY_END_TEXT);case I.Op.WORD_BOUNDARY:return this.empty(K.EMPTY_WORD_BOUNDARY);case I.Op.NO_WORD_BOUNDARY:return this.empty(K.EMPTY_NO_WORD_BOUNDARY);case I.Op.CONCAT:case I.Op.ALTERNATE:return this.nop();default:throw new Ui("regexp: unhandled case in compile")}}enter(e){switch(e.op){case I.Op.PLB:case I.Op.NLB:case I.Op.STAR:case I.Op.PLUS:case I.Op.QUEST:return{sub:null};case I.Op.CAPTURE:return{bra:this.cap(e.cap<<1),sub:null};case I.Op.CONCAT:case I.Op.ALTERNATE:return{f:null};default:throw new Ui("regexp: unhandled case in compile")}}child(e,t,n){e.op===I.Op.CONCAT?t.f=t.f===null?n:this.cat(t.f,n):e.op===I.Op.ALTERNATE?t.f=t.f===null?n:this.alt(t.f,n):t.sub=n}leave(e,t){switch(e.op){case I.Op.PLB:case I.Op.NLB:return this.lookBehind(t.sub,e.lb);case I.Op.CAPTURE:{let n=this.cap(e.cap<<1|1);return this.cat(this.cat(t.bra,t.sub),n)}case I.Op.STAR:return this.star(t.sub,(e.flags&F.NON_GREEDY)!==0);case I.Op.PLUS:return this.plus(t.sub,(e.flags&F.NON_GREEDY)!==0);case I.Op.QUEST:return this.quest(t.sub,(e.flags&F.NON_GREEDY)!==0);case I.Op.CONCAT:case I.Op.ALTERNATE:return t.f;default:throw new Ui("regexp: unhandled case in compile")}}},Ne,VC=(Ne=class{static simplify(e){return e===null?null:Jl.walk(e,Ne.WALKER)}static leaf(e){if(e.op===I.Op.CHAR_CLASS){if(e.runes===null)return e;if(e.runes.length===0)return new I(I.Op.NO_MATCH);if(e.runes.length===2&&e.runes[0]===0&&e.runes[1]===z.MAX_RUNE)return new I(I.Op.ANY_CHAR);if(e.runes.length===4&&e.runes[0]===0&&e.runes[1]===L.CODES[`
`]-1&&e.runes[2]===L.CODES[`
`]+1&&e.runes[3]===z.MAX_RUNE)return new I(I.Op.ANY_CHAR_NOT_NL)}return e}static enter(e){switch(e.op){case I.Op.PLB:case I.Op.NLB:case I.Op.CAPTURE:case I.Op.STAR:case I.Op.PLUS:case I.Op.QUEST:return{sub:null};case I.Op.CONCAT:case I.Op.ALTERNATE:return{subs:[],changed:!1};case I.Op.REPEAT:return e.min===0&&e.max===0?{result:new I(I.Op.EMPTY_MATCH)}:{sub:null};default:return{result:e}}}static child(e,t,n,s){if(t.subs===void 0){t.sub=n;return}if(n!==e.subs[s]&&(t.changed=!0),e.op===I.Op.CONCAT){if(n.op===I.Op.NO_MATCH){t.result=new I(I.Op.NO_MATCH);return}if(n.op===I.Op.EMPTY_MATCH){t.changed=!0;return}if(n.op===I.Op.CONCAT){t.changed=!0;for(let i=0;i<n.subs.length;i++)t.subs.push(n.subs[i]);return}}else{if(n.op===I.Op.NO_MATCH){t.changed=!0;return}if(n.op===I.Op.ALTERNATE){t.changed=!0;for(let i=0;i<n.subs.length;i++)t.subs.push(n.subs[i]);return}}t.subs.push(n)}static leave(e,t){switch(e.op){case I.Op.PLB:case I.Op.NLB:case I.Op.CAPTURE:{let n=t.sub;if(n!==e.subs[0]){let s=I.fromRegexp(e);return s.runes=new Int32Array(0),s.subs=[n],s}return e}case I.Op.CONCAT:case I.Op.ALTERNATE:if(t.changed){let n=t.subs;if(n.length===0)return new I(e.op===I.Op.CONCAT?I.Op.EMPTY_MATCH:I.Op.NO_MATCH);if(n.length===1)return n[0];let s=I.fromRegexp(e);return s.runes=new Int32Array(0),s.subs=n,s}return e;case I.Op.STAR:case I.Op.PLUS:case I.Op.QUEST:return Ne.simplify1(e.op,e.flags,t.sub,e);case I.Op.REPEAT:return Ne.simplifyRepeat(e,t.sub);default:return e}}static simplifyRepeat(e,t){if(e.max===-1){if(e.min===0)return Ne.simplify1(I.Op.STAR,e.flags,t,null);if(e.min===1)return Ne.simplify1(I.Op.PLUS,e.flags,t,null);let s=[];for(let i=0;i<e.min-1;i++)s.push(t);return s.push(Ne.simplify1(I.Op.PLUS,e.flags,t,null)),Ne.concat(s)}if(e.min===1&&e.max===1)return t;let n=null;if(e.min>0){n=[];for(let s=0;s<e.min;s++)n.push(t)}if(e.max>e.min){let s=Ne.simplify1(I.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++)s=Ne.simplify1(I.Op.QUEST,e.flags,Ne.concat([t,s]),null);if(n===null)return s;n.push(s)}return n!==null?Ne.concat(n):new I(I.Op.NO_MATCH)}static concat(e){let t=[];for(let s=0;s<e.length;s++){let i=e[s];if(i.op===I.Op.NO_MATCH)return new I(I.Op.NO_MATCH);if(i.op!==I.Op.EMPTY_MATCH){if(i.op===I.Op.CONCAT){for(let a=0;a<i.subs.length;a++)t.push(i.subs[a]);continue}t.push(i)}}if(t.length===0)return new I(I.Op.EMPTY_MATCH);if(t.length===1)return t[0];let n=new I(I.Op.CONCAT);return n.subs=t,n}static simplify1(e,t,n,s){if(n.op===I.Op.EMPTY_MATCH)return n;if(n.op===I.Op.NO_MATCH)return e===I.Op.PLUS?n:new I(I.Op.EMPTY_MATCH);if(e===n.op&&(t&F.NON_GREEDY)===(n.flags&F.NON_GREEDY))return n;if(s!==null&&s.op===e&&(s.flags&F.NON_GREEDY)===(t&F.NON_GREEDY)&&n===s.subs[0])return s;let i=new I(e);return i.flags=t,i.subs=[n],i}},M(Ne,"WALKER",{leaf:e=>Ne.leaf(e),enter:e=>Ne.enter(e),child:(e,t,n,s)=>Ne.child(e,t,n,s),leave:(e,t)=>Ne.leave(e,t)}),Ne),he=class{constructor(r,e){this.sign=r,this.cls=e}},cC=[48,57],lC=[9,10,12,13,32,32],BC=[48,57,65,90,95,95,97,122],hC=new Map([["\\d",new he(1,cC)],["\\D",new he(-1,cC)],["\\s",new he(1,lC)],["\\S",new he(-1,lC)],["\\w",new he(1,BC)],["\\W",new he(-1,BC)]]),fC=[48,57,65,90,97,122],dC=[65,90,97,122],pC=[0,127],gC=[9,9,32,32],CC=[0,31,127,127],mC=[48,57],EC=[33,126],_C=[97,122],yC=[32,126],wC=[33,47,58,64,91,96,123,126],IC=[9,13,32,32],DC=[65,90],TC=[48,57,65,90,95,95,97,122],AC=[48,57,65,70,97,102],bC=new Map([["[:alnum:]",new he(1,fC)],["[:^alnum:]",new he(-1,fC)],["[:alpha:]",new he(1,dC)],["[:^alpha:]",new he(-1,dC)],["[:ascii:]",new he(1,pC)],["[:^ascii:]",new he(-1,pC)],["[:blank:]",new he(1,gC)],["[:^blank:]",new he(-1,gC)],["[:cntrl:]",new he(1,CC)],["[:^cntrl:]",new he(-1,CC)],["[:digit:]",new he(1,mC)],["[:^digit:]",new he(-1,mC)],["[:graph:]",new he(1,EC)],["[:^graph:]",new he(-1,EC)],["[:lower:]",new he(1,_C)],["[:^lower:]",new he(-1,_C)],["[:print:]",new he(1,yC)],["[:^print:]",new he(-1,yC)],["[:punct:]",new he(1,wC)],["[:^punct:]",new he(-1,wC)],["[:space:]",new he(1,IC)],["[:^space:]",new he(-1,IC)],["[:upper:]",new he(1,DC)],["[:^upper:]",new he(-1,DC)],["[:word:]",new he(1,TC)],["[:^word:]",new he(-1,TC)],["[:xdigit:]",new he(1,AC)],["[:^xdigit:]",new he(-1,AC)]]),pr=class Jo{static charClassToString(e,t){let n="[";for(let s=0;s<t;s+=2){s>0&&(n+=" ");let i=e[s],a=e[s+1];i===a?n+=`0x${i.toString(16)}`:n+=`0x${i.toString(16)}-0x${a.toString(16)}`}return n+="]",n}static sortRanges(e,t){let n=t>>1,s=new Array(n);for(let a=0;a<n;a++)s[a]=a;s.sort((a,u)=>e[2*a]-e[2*u]||e[2*u+1]-e[2*a+1]);let i=e.slice(0,t);for(let a=0;a<n;a++)e[2*a]=i[2*s[a]],e[2*a+1]=i[2*s[a]+1]}constructor(e=K.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.r instanceof Int32Array?this.len===this.r.length?this.r:this.r.subarray(0,this.len):new Int32Array(this.len===this.r.length?this.r:this.r.slice(0,this.len))}toGrowableArray(){return Array.isArray(this.r)?(this.r.length=this.len,this.r):Array.from(this.r.subarray(0,this.len))}cleanClass(){if(this.len<4)return this;Jo.sortRanges(this.r,this.len);let e=2;for(let t=2;t<this.len;t+=2){let n=this.r[t],s=this.r[t+1];if(n<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=n,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return t&F.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let n=2;n<=4;n+=2)if(this.len>=n){let s=this.r[this.len-n],i=this.r[this.len-n+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-n]=e),t>i&&(this.r[this.len-n+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=z.MIN_FOLD&&t>=z.MAX_FOLD)return this.appendRange(e,t);if(t<z.MIN_FOLD||e>z.MAX_FOLD)return this.appendRange(e,t);e<z.MIN_FOLD&&(this.appendRange(e,z.MIN_FOLD-1),e=z.MIN_FOLD),t>z.MAX_FOLD&&(this.appendRange(z.MAX_FOLD+1,t),t=z.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let s=z.simpleFold(n);s!==n;s=z.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){let s=e[n],i=e[n+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=z.MAX_RUNE&&this.appendRange(t,z.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){let n=e.getLo(t),s=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(n,s);continue}for(let a=n;a<=s;a+=i)this.appendRange(a,a)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){let s=e.getLo(n),i=e.getHi(n),a=e.getStride(n);if(a===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let u=s;u<=i;u+=a)t<=u-1&&this.appendRange(t,u-1),t=u+1}return t<=z.MAX_RUNE&&this.appendRange(t,z.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){let s=this.r[n],i=this.r[n+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=z.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=z.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let n=e.cls;return t&&(n=new Jo().appendFoldedClass(n).cleanClass().toArray()),this.appendClassWithSign(n,e.sign)}toString(){return Jo.charClassToString(this.r,this.len)}},PD=class{constructor(r){this.str=r,this.position=0}pos(){return this.position}rewindTo(r){this.position=r}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(r){this.position+=r}skipString(r){this.position+=r.length}pop(){let r=this.str.codePointAt(this.position);return this.position+=K.charCount(r),r}lookingAt(r){return this.str.startsWith(r,this.position)}rest(){return this.str.substring(this.position)}from(r){return this.str.substring(r,this.position)}toString(){return this.rest()}},U,Gi=(U=class{static unicodeTable(e){return e==="Any"?{tab:U.ANY_TABLE,fold:U.ANY_TABLE,sign:1}:e==="Ascii"?{tab:U.ASCII_TABLE,fold:U.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:Et.CATEGORIES.get("Cn"),fold:Et.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:Et.CATEGORIES.get("LC"),fold:Et.FOLD_CATEGORIES.get("LC"),sign:1}:Et.CATEGORIES.has(e)?{tab:Et.CATEGORIES.get(e),fold:Et.FOLD_CATEGORIES.get(e),sign:1}:Et.SCRIPTS.has(e)?{tab:Et.SCRIPTS.get(e),fold:Et.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<z.MIN_FOLD||e>z.MAX_FOLD)return e;let t=e,n=e;for(e=z.simpleFold(e);e!==n;e=z.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===I.Op.EMPTY_MATCH)return null;if(e.op===I.Op.CONCAT&&e.subs.length>0){let t=e.subs[0];return t.op===I.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){let n=new I(I.Op.LITERAL);return n.flags=t,n.runes=K.stringToRunes(e),n}static parse(e,t){return new U(e,t).parseInternal()}static parseRepeat(e){let t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);let n=U.parseInt(e);if(n===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=n;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=U.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),n<0||n>1e3||s===-2||s>1e3||s>=0&&n>s)throw new ye(U.ERR_INVALID_REPEAT_SIZE,e.from(t));return n<<16|s&z.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){let n=e.codePointAt(t);if(n!==L.CODES._&&!K.isalnum(n))return!1}return!0}static parseInt(e){let t=e.pos();for(;e.more()&&e.peek()>=L.CODES[0]&&e.peek()<=L.CODES[9];)e.skip(1);let n=e.from(t);return n.length===0||n.length>1&&n.codePointAt(0)===L.CODES[0]?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===I.Op.LITERAL&&e.runes.length===1||e.op===I.Op.CHAR_CLASS||e.op===I.Op.ANY_CHAR_NOT_NL||e.op===I.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case I.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case I.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case I.Op.ANY_CHAR_NOT_NL:return t!==L.CODES[`
`];case I.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case I.Op.ANY_CHAR:break;case I.Op.ANY_CHAR_NOT_NL:U.matchRune(t,L.CODES[`
`])&&(e.op=I.Op.ANY_CHAR);break;case I.Op.CHAR_CLASS:{let n=new pr(Array.isArray(e.runes)?e.runes:Array.from(e.runes));t.op===I.Op.LITERAL?n.appendLiteral(t.runes[0],t.flags):n.appendClass(t.runes),e.runes=n.toGrowableArray();break}case I.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=I.Op.CHAR_CLASS,e.runes=new pr().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toGrowableArray()}}static parseEscape(e){let t=e.pos();if(e.skip(1),!e.more())throw new ye(U.ERR_TRAILING_BACKSLASH);let n=e.pop();e:switch(n){case L.CODES[1]:case L.CODES[2]:case L.CODES[3]:case L.CODES[4]:case L.CODES[5]:case L.CODES[6]:case L.CODES[7]:if(!e.more()||e.peek()<L.CODES[0]||e.peek()>L.CODES[7])break;case L.CODES[0]:{let s=n-L.CODES[0];for(let i=1;i<3&&!(!e.more()||e.peek()<L.CODES[0]||e.peek()>L.CODES[7]);i++)s=s*8+e.peek()-L.CODES[0],e.skip(1);return s}case L.CODES.x:{if(!e.more())break;if(n=e.pop(),n===L.CODES["{"]){let a=0,u=0;for(;;){if(!e.more())break e;if(n=e.pop(),n===L.CODES["}"])break;let c=K.unhex(n);if(c<0||(u=u*16+c,u>z.MAX_RUNE))break e;a++}if(a===0)break e;return u}let s=K.unhex(n);if(!e.more())break;n=e.pop();let i=K.unhex(n);if(s<0||i<0)break;return s*16+i}case L.CODES.a:return L.CODES["\x07"];case L.CODES.f:return L.CODES["\f"];case L.CODES.n:return L.CODES[`
`];case L.CODES.r:return L.CODES["\r"];case L.CODES.t:return L.CODES["	"];case L.CODES.v:return L.CODES["\v"];default:if(n<=z.MAX_ASCII&&!K.isalnum(n))return n}throw new ye(U.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new ye(U.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?U.parseEscape(e):e.pop()}static hasCapture(e){if(e===null)return!1;if(e.op===I.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(U.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new I(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>U.MAX_RUNES)throw new ye(U.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===I.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(U.MAX_SIZE/this.repeats)?this.repeats=U.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(U.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>U.MAX_SIZE)throw new ye(U.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case I.Op.LITERAL:n=e.runes.length;break;case I.Op.PLB:case I.Op.NLB:case I.Op.CAPTURE:case I.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case I.Op.PLUS:case I.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case I.Op.CONCAT:for(let s of e.subs)n=n+this.calcSize(s);break;case I.Op.ALTERNATE:for(let s of e.subs)n=n+this.calcSize(s);e.subs.length>1&&(n=n+e.subs.length-1);break;case I.Op.REPEAT:{let s=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?n=2+s:n=1+e.min*s;break}n=e.max*s+(e.max-e.min);break}}return n=Math.max(1,n),this.size===null&&(this.size=new Map),this.size.set(e,n),n}checkHeight(e){if(!(this.numRegexp<U.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>U.MAX_HEIGHT)throw new ye(U.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let n=1;for(let s of e.subs){let i=this.calcHeight(s);n<1+i&&(n=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){let e=this.stack.length,t=e;for(;t>0&&!I.isPseudoOp(this.stack[t-1].op);)t--;return this.stack.splice(t,e-t)}push(e){if(this.numRunes+=e.runes.length,e.op===I.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&~F.FOLD_CASE))return null;e.op=I.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&~F.FOLD_CASE}else if(e.op===I.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&z.simpleFold(e.runes[0])===e.runes[2]&&z.simpleFold(e.runes[2])===e.runes[0]||e.op===I.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&z.simpleFold(e.runes[0])===e.runes[1]&&z.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|F.FOLD_CASE))return null;e.op=I.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|F.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){let n=this.stack.length;if(n<2)return!1;let s=this.stack[n-1],i=this.stack[n-2];if(s.op!==I.Op.LITERAL||i.op!==I.Op.LITERAL||(s.flags&F.FOLD_CASE)!==(i.flags&F.FOLD_CASE))return!1;Array.isArray(i.runes)||(i.runes=Array.from(i.runes));for(let a=0;a<s.runes.length;a++)i.runes.push(s.runes[a]);return e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1)}newLiteral(e,t){let n=this.newRegexp(I.Op.LITERAL);return n.flags=t,t&F.FOLD_CASE&&(e=U.minFoldRune(e)),n.runes=[e],n}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){let t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,n,s,i,a){let u=this.flags;if(u&F.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),u^=F.NON_GREEDY),a!==-1))throw new ye(U.ERR_INVALID_REPEAT_OP,i.from(a));let c=this.stack.length;if(c===0)throw new ye(U.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));let l=this.stack[c-1];if(I.isPseudoOp(l.op))throw new ye(U.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));let h=this.newRegexp(e);if(h.min=t,h.max=n,h.flags=u,h.subs=[l],this.stack[c-1]=h,this.checkLimits(h),e===I.Op.REPEAT&&(t>=2||n>=2)&&!this.repeatIsValid(h,1e3))throw new ye(U.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===I.Op.REPEAT){let n=e.max;if(n===0)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);let e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(I.Op.EMPTY_MATCH)):this.push(this.collapse(e,I.Op.CONCAT))}alternate(){let e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(I.Op.NO_MATCH)):this.push(this.collapse(e,I.Op.ALTERNATE))}cleanAlt(e){e.op===I.Op.CHAR_CLASS&&(e.runes=new pr(Array.from(e.runes)).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===z.MAX_RUNE?(e.runes=new Int32Array(0),e.op=I.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===L.CODES[`
`]-1&&e.runes[2]===L.CODES[`
`]+1&&e.runes[3]===z.MAX_RUNE&&(e.runes=new Int32Array(0),e.op=I.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let n=0;for(let u of e)n+=u.op===t?u.subs.length:1;let s=new Array(n).fill(null),i=0;for(let u of e)if(u.op===t){for(let c=0;c<u.subs.length;c++)s[i++]=u.subs[c];this.reuse(u)}else s[i++]=u;let a=this.newRegexp(t);if(a.subs=s,t===I.Op.ALTERNATE&&(a.subs=this.factor(a.subs),a.subs.length===1)){let u=a;a=a.subs[0],this.reuse(u)}return a}factor(e){if(e.length<2)return e;let t=0,n=e.length,s=0,i=null,a=0,u=0,c=0;for(let h=0;h<=n;h++){let d=null,g=0,w=0;if(h<n){let D=e[t+h];if(D.op===I.Op.CONCAT&&D.subs.length>0&&(D=D.subs[0]),D.op===I.Op.LITERAL&&(d=D.runes,g=D.runes.length,w=D.flags&F.FOLD_CASE),w===u){let P=0;for(;P<a&&P<g&&i[P]===d[P];)P++;if(P>0){a=P;continue}}}if(h!==c)if(h===c+1)e[s++]=e[t+c];else{let D=this.newRegexp(I.Op.LITERAL);D.flags=u,D.runes=i.slice(0,a);for(let q=c;q<h;q++)e[t+q]=this.removeLeadingString(e[t+q],a),this.checkLimits(e[t+q]);let P=this.collapse(e.slice(t+c,t+h),I.Op.ALTERNATE),k=this.newRegexp(I.Op.CONCAT);k.subs=[D,P],e[s++]=k}c=h,i=d,a=g,u=w}n=s,t=0,c=0,s=0;let l=null;for(let h=0;h<=n;h++){let d=null;if(!(h<n&&(d=U.leadingRegexp(e[t+h]),l!==null&&l.equals(d)&&(U.isCharClass(l)||l.op===I.Op.REPEAT&&l.min===l.max&&U.isCharClass(l.subs[0]))))){if(h!==c)if(h===c+1)e[s++]=e[t+c];else{let g=l;for(let P=c;P<h;P++){let k=P!==c;e[t+P]=this.removeLeadingRegexp(e[t+P],k),this.checkLimits(e[t+P])}let w=this.collapse(e.slice(t+c,t+h),I.Op.ALTERNATE),D=this.newRegexp(I.Op.CONCAT);D.subs=[g,w],e[s++]=D}c=h,l=d}}n=s,t=0,c=0,s=0;for(let h=0;h<=n;h++)if(!(h<n&&U.isCharClass(e[t+h]))){if(h!==c)if(h===c+1)e[s++]=e[t+c];else{let d=c;for(let w=c+1;w<h;w++){let D=e[t+d],P=e[t+w];(D.op<P.op||D.op===P.op&&(D.runes!==null?D.runes.length:0)<(P.runes!==null?P.runes.length:0))&&(d=w)}let g=e[t+c];e[t+c]=e[t+d],e[t+d]=g;for(let w=c+1;w<h;w++)U.mergeCharClass(e[t+c],e[t+w]),this.reuse(e[t+w]);this.cleanAlt(e[t+c]),e[s++]=e[t+c]}h<n&&(e[s++]=e[t+h]),c=h+1}n=s,t=0,c=0,s=0;for(let h=0;h<n;++h)h+1<n&&e[t+h].op===I.Op.EMPTY_MATCH&&e[t+h+1].op===I.Op.EMPTY_MATCH||(e[s++]=e[t+h]);return n=s,t=0,e.slice(t,n)}removeLeadingString(e,t){if(e.op===I.Op.CONCAT&&e.subs.length>0){let n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===I.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=I.Op.EMPTY_MATCH,e.subs=I.emptySubs();break;case 2:{let s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length)}return e}return e.op===I.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=I.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===I.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=I.Op.EMPTY_MATCH,e.subs=I.emptySubs();break;case 1:{let n=e;e=e.subs[0],this.reuse(n);break}}return e}return t&&this.reuse(e),this.newRegexp(I.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&F.LITERAL)return U.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,n=-1,s=new PD(this.wholeRegexp);for(;s.more();){let i=-1;e:switch(s.peek()){case L.CODES["("]:if(this.flags&F.LOOKBEHIND){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if(this.flags&F.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(I.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case L.CODES["|"]:this.parseVerticalBar(),s.skip(1);break;case L.CODES[")"]:this.parseRightParen(),s.skip(1);break;case L.CODES["^"]:this.flags&F.ONE_LINE?this.op(I.Op.BEGIN_TEXT):this.op(I.Op.BEGIN_LINE),s.skip(1);break;case L.CODES.$:this.flags&F.ONE_LINE?this.op(I.Op.END_TEXT).flags|=F.WAS_DOLLAR:this.op(I.Op.END_LINE),s.skip(1);break;case L.CODES["."]:this.flags&F.DOT_NL?this.op(I.Op.ANY_CHAR):this.op(I.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case L.CODES["["]:this.parseClass(s);break;case L.CODES["*"]:case L.CODES["+"]:case L.CODES["?"]:{i=s.pos();let a=null;switch(s.pop()){case L.CODES["*"]:a=I.Op.STAR;break;case L.CODES["+"]:a=I.Op.PLUS;break;case L.CODES["?"]:a=I.Op.QUEST}this.repeat(a,t,n,i,s,e);break}case L.CODES["{"]:{let a=s.pos(),u=U.parseRepeat(s);if(u<0){s.rewindTo(a),this.literal(s.pop());break}i=a,t=u>>16,n=(u&z.MAX_BMP)<<16>>16,this.repeat(I.Op.REPEAT,t,n,i,s,e);break}case L.CODES["\\"]:{let a=s.pos();if(s.skip(1),this.flags&F.PERL_X&&s.more())switch(s.pop()){case L.CODES.A:this.op(I.Op.BEGIN_TEXT);break e;case L.CODES.b:this.op(I.Op.WORD_BOUNDARY);break e;case L.CODES.B:this.op(I.Op.NO_WORD_BOUNDARY);break e;case L.CODES.C:throw new ye(U.ERR_INVALID_ESCAPE,"\\C");case L.CODES.Q:{let l=s.rest(),h=l.indexOf("\\E");h>=0?(l=l.substring(0,h),s.skipString(l),s.skipString("\\E")):s.skipString(l);let d=0;for(;d<l.length;){let g=l.codePointAt(d);this.literal(g),d+=K.charCount(g)}break e}case L.CODES.z:this.op(I.Op.END_TEXT);break e;default:s.rewindTo(a)}else s.rewindTo(a);let u=this.newRegexp(I.Op.CHAR_CLASS);if(u.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){let l=new pr;if(this.parseUnicodeClass(s,l)){u.runes=l.toArray(),this.push(u);break e}}let c=new pr;if(this.parsePerlClassEscape(s,c)){u.runes=c.toArray(),this.push(u);break e}s.rewindTo(a),this.reuse(u),this.literal(U.parseEscape(s));break}default:this.literal(s.pop())}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new ye(U.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){let t=e.pos(),n=e.rest();if(n.startsWith("(?P<")||n.startsWith("(?<")){let u=n.charAt(2)==="P"?4:3,c=n.indexOf(">");if(c<0)throw new ye(U.ERR_INVALID_NAMED_CAPTURE,n);let l=n.substring(u,c);if(e.skipString(l),e.skip(u+1),!U.isValidCaptureName(l))throw new ye(U.ERR_INVALID_NAMED_CAPTURE,n.substring(0,c+1));let h=this.op(I.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[l])throw new ye(U.ERR_DUPLICATE_NAMED_CAPTURE,l);this.namedGroups[l]=this.numCap,h.name=l;return}e.skip(2);let s=this.flags,i=1,a=!1;e:for(;e.more();){let u=e.pop();switch(u){case L.CODES.i:s|=F.FOLD_CASE,a=!0;break;case L.CODES.m:s&=~F.ONE_LINE,a=!0;break;case L.CODES.s:s|=F.DOT_NL,a=!0;break;case L.CODES.U:s|=F.NON_GREEDY,a=!0;break;case L.CODES["-"]:if(i<0)break e;i=-1,s=~s,a=!1;break;case L.CODES[":"]:case L.CODES[")"]:if(i<0){if(!a)break e;s=~s}u===L.CODES[":"]&&this.op(I.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new ye(U.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){let e=this.newRegexp(I.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){let e=this.newRegexp(I.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(I.Op.VERTICAL_BAR)}swapVerticalBar(){let e=this.stack.length;if(e>=3&&this.stack[e-2].op===I.Op.VERTICAL_BAR&&U.isCharClass(this.stack[e-1])&&U.isCharClass(this.stack[e-3])){let t=this.stack[e-1],n=this.stack[e-3];if(t.op>n.op){let s=n;n=t,t=s,this.stack[e-3]=n}return U.mergeCharClass(n,t),this.reuse(t),this.pop(),!0}if(e>=2){let t=this.stack[e-1],n=this.stack[e-2];if(n.op===I.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new ye(U.ERR_UNEXPECTED_PAREN,this.wholeRegexp);let e=this.pop(),t=this.pop();if(t.op!==I.Op.LEFT_PAREN)throw new ye(U.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(U.hasCapture(e))throw new ye(U.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=I.Op.PLB:t.op=I.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=I.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){let n=e.pos();if(!(this.flags&F.PERL_X)||!e.more()||e.pop()!==L.CODES["\\"]||!e.more())return!1;e.pop();let s=e.from(n),i=hC.has(s)?hC.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&F.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){let n=e.rest(),s=n.indexOf(":]");if(s<0)return!1;let i=n.substring(0,s+2);e.skipString(i);let a=bC.has(i)?bC.get(i):null;if(a===null)throw new ye(U.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(a,(this.flags&F.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){let n=e.pos();if(!(this.flags&F.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===L.CODES.P&&(s=-1),!e.more())throw e.rewindTo(n),new ye(U.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let a;if(i!==L.CODES["{"])a=K.runeToString(i);else{let h=e.rest(),d=h.indexOf("}");if(d<0)throw e.rewindTo(n),new ye(U.ERR_INVALID_CHAR_RANGE,e.rest());a=h.substring(0,d),e.skipString(a),e.skip(1)}a.length!==0&&a.codePointAt(0)===L.CODES["^"]&&(s=0-s,a=a.substring(1));let u=U.unicodeTable(a);if(u===null)throw new ye(U.ERR_INVALID_CHAR_RANGE,e.from(n));u.sign<0&&(s=0-s);let c=u.tab,l=u.fold;if(!(this.flags&F.FOLD_CASE)||l===null)t.appendTableWithSign(c,s);else{let h=new pr().appendTable(c).appendTable(l).cleanClass().toArray();t.appendClassWithSign(Array.from(h),s)}return!0}parseClass(e){let t=e.pos();e.skip(1);let n=this.newRegexp(I.Op.CHAR_CLASS);n.flags=this.flags;let s=new pr,i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),this.flags&F.CLASS_NL||s.appendRange(L.CODES[`
`],L.CODES[`
`]));let a=!0;for(;!e.more()||e.peek()!==L.CODES["]"]||a;){if(e.more()&&e.lookingAt("-")&&!(this.flags&F.PERL_X)&&!a){let h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new ye(U.ERR_INVALID_CHAR_RANGE,e.rest())}a=!1;let u=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(u)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(u);let c=U.parseClassChar(e,t),l=c;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(l=U.parseClassChar(e,t),l<c)throw new ye(U.ERR_INVALID_CHAR_RANGE,e.from(u))}this.flags&F.FOLD_CASE?s.appendFoldedRange(c,l):s.appendRange(c,l)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),n.runes=s.toArray(),this.push(n)}},M(U,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),M(U,"ERR_INVALID_CHAR_RANGE","invalid character class range"),M(U,"ERR_INVALID_ESCAPE","invalid escape sequence"),M(U,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),M(U,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),M(U,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),M(U,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),M(U,"ERR_MISSING_BRACKET","missing closing ]"),M(U,"ERR_MISSING_PAREN","missing closing )"),M(U,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),M(U,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),M(U,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),M(U,"ERR_UNEXPECTED_PAREN","unexpected )"),M(U,"ERR_NESTING_DEPTH","expression nests too deeply"),M(U,"ERR_LARGE","expression too large"),M(U,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),M(U,"MAX_HEIGHT",1e3),M(U,"MAX_SIZE",1398101),M(U,"MAX_RUNES",33554432),M(U,"ANY_TABLE",new C(new Uint32Array([0,z.MAX_RUNE,1]))),M(U,"ASCII_TABLE",new C(new Uint32Array([0,127,1]))),M(U,"ASCII_FOLD_TABLE",new C(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),U),ND=class gr{static initTest(e){let t=gr.compile(e),n=new gr(t.expr,t.prog,t.numSubexp,t.longest);return n.cond=t.cond,n.prefix=t.prefix,n.prefixUTF8=t.prefixUTF8,n.prefixComplete=t.prefixComplete,n.prefixRune=t.prefixRune,n.prefilter=t.prefilter,n.namedGroups=t.namedGroups,n}static compile(e){return gr.compileImpl(e,F.PERL,!1)}static compilePOSIX(e){return gr.compileImpl(e,F.POSIX,!0)}static compileImpl(e,t,n){let s=Gi.parse(e,t),i=s.maxCap(),a=s.namedGroups;s=VC.simplify(s);let u=vD.build(s),c=kC.compileRegexp(s),l=new gr(e,c,i,n);l.prefilter=u.type===ae.Type.NONE?null:u;let[h,d]=c.prefix();return l.prefixComplete=h,l.prefix=d,l.prefixUTF8=K.stringToUtf8ByteArray(l.prefix),l.prefix.length>0&&(l.prefixRune=l.prefix.codePointAt(0)),l.namedGroups=a,l}static match(e,t){return gr.compile(e).match(t)}constructor(e,t,n=0,s=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.namedGroups=Object.create(null),this.machinePool=[],this.lazyDFA=null,this.onepass=aC.compile(this.prog),this.prefilter=null}get dfa(){return this.lazyDFA===null&&(this.lazyDFA=new Kl(this.prog)),this.lazyDFA}matchPrefixComplete(e,t,n,s){if((n===F.ANCHOR_START||n===F.ANCHOR_BOTH)&&t!==0)return null;let i=-1,a=-1,u=e.prefixLength(this);if(n===F.UNANCHORED){let c=e.index(this,t);if(c<0)return null;i=t+c,a=i+u}else if(n===F.ANCHOR_BOTH){if(e.endPos()!==u||e.index(this,0)!==0)return null;i=0,a=u}else if(n===F.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,a=u}if(i<0)return null;if(s>0){let c=new Int32Array(s).fill(-1);return c[0]=i,c[1]=a,Array.from(c)}return[]}createLookbehindState(){return this.prog.numLb>0?new CD(this.prog):null}executeEngine(e,t,n,s,i=null){if(this.prefixComplete&&(s===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,n,s);if(this.prefilter!==null&&n===F.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return aC.execute(this,e,t,n,s);if(s>0)return this.prog.numLb===0&&e.endPos()<=jo.maxBitStateLen(this.prog)?jo.execute(this,e,t,n,s):this.doExecuteNFA(e,t,n,s,i);if(this.prog.numLb===0){let a=this.dfa.match(e,t,n);if(a!==null)return a?[]:null;if(e.endPos()<=jo.maxBitStateLen(this.prog))return jo.execute(this,e,t,n,s)}return this.doExecuteNFA(e,t,n,s,i)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,s,i=null){let a=this.get();a||(a=OC.fromRE2(this)),a.init(s);let u=a.match(e,t,n,i)?a.submatches():null;return this.put(a),u}match(e){return this.executeEngine(me.fromUTF16(e),0,F.UNANCHORED,0)!==null}matchWithGroup(e,t,n,s,i,a=null){return e instanceof _r||(K.isByteArray(e)?e=Cr.utf8(e):e=Cr.utf16(e)),this.matchMachineInput(e,t,n,s,i,a)}matchMachineInput(e,t,n,s,i,a=null){if(t>n)return[!1,null];let u=e.isUTF16Encoding()?me.fromUTF16(e.asCharSequence(),0,n):me.fromUTF8(e.asBytes(),0,n),c=this.executeEngine(u,t,s,2*i,a);return c===null?[!1,null]:[!0,c]}matchUTF8(e){return this.executeEngine(me.fromUTF8(e),0,F.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let s=0,i=0,a="",u=me.fromUTF16(e),c=this.createLookbehindState(),l=0;for(;i<=e.length;){let h=this.executeEngine(u,i,F.UNANCHORED,2,c);if(h===null||h.length===0)break;a+=e.substring(s,h[0]),(h[1]>s||h[0]===0)&&(a+=t(e.substring(h[0],h[1])),l++),s=h[1];let d=u.step(i)&7;if(i+d>h[1]?i+=d:i+1>h[1]?i++:i=h[1],l>=n)break}return a+=e.substring(s),a}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let n=new Array(t).fill(-1);for(let s=0;s<e.length;s++)n[s]=e[s];e=n}return e}allMatches(e,t,n=s=>s){let s=[],i=e.endPos();t<0&&(t=i+1);let a=0,u=0,c=-1,l=this.createLookbehindState();for(;u<t&&a<=i;){let h=this.executeEngine(e,a,F.UNANCHORED,this.prog.numCap,l);if(h===null||h.length===0)break;let d=!0;if(h[1]===a){h[0]===c&&(d=!1);let g=e.step(a);g<0?a=i+1:a+=g&7}else a=h[1];c=h[1],d&&(s.push(n(this.pad(h))),u++)}return s}findUTF8(e){let t=this.executeEngine(me.fromUTF8(e),0,F.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){let t=this.executeEngine(me.fromUTF8(e),0,F.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){let t=this.executeEngine(me.fromUTF16(e),0,F.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(me.fromUTF16(e),0,F.UNANCHORED,2)}findUTF8Submatch(e){let t=this.executeEngine(me.fromUTF8(e),0,F.UNANCHORED,this.prog.numCap);if(t===null)return null;let n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.slice(t[2*s],t[2*s+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(me.fromUTF8(e),0,F.UNANCHORED,this.prog.numCap))}findSubmatch(e){let t=this.executeEngine(me.fromUTF16(e),0,F.UNANCHORED,this.prog.numCap);if(t===null)return null;let n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.substring(t[2*s],t[2*s+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine(me.fromUTF16(e),0,F.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){let n=this.allMatches(me.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return n.length===0?null:n}findAllUTF8Index(e,t){let n=this.allMatches(me.fromUTF8(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAll(e,t){let n=this.allMatches(me.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return n.length===0?null:n}findAllIndex(e,t){let n=this.allMatches(me.fromUTF16(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAllUTF8Submatch(e,t){let n=this.allMatches(me.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let a=0;a<i.length;a++)s[2*a]>=0&&(i[a]=e.slice(s[2*a],s[2*a+1]));return i});return n.length===0?null:n}findAllUTF8SubmatchIndex(e,t){let n=this.allMatches(me.fromUTF8(e),t);return n.length===0?null:n}findAllSubmatch(e,t){let n=this.allMatches(me.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let a=0;a<i.length;a++)s[2*a]>=0&&(i[a]=e.substring(s[2*a],s[2*a+1]));return i});return n.length===0?null:n}findAllSubmatchIndex(e,t){let n=this.allMatches(me.fromUTF16(e),t);return n.length===0?null:n}},kt,Ev=(kt=class{constructor(e=kt.UNANCHORED,t=0,n=8388608){this.anchor=e,this.jsFlags=t,this.maxMem=n;let s=F.PERL;t&Lt.DISABLE_UNICODE_GROUPS&&(s&=~F.UNICODE_GROUPS),t&Lt.LOOKBEHINDS&&(s|=F.LOOKBEHIND),this.re2Flags=s,this.regexps=[],this.prog=null,this.dfa=null,this.dummyRe2=null}add(e){if(this.prog)throw new Ui("Cannot add patterns after compile");let t=e;this.jsFlags&Lt.CASE_INSENSITIVE&&(t=`(?i)${t}`),this.jsFlags&Lt.DOTALL&&(t=`(?s)${t}`),this.jsFlags&Lt.MULTILINE&&(t=`(?m)${t}`);let n=Gi.parse(t,this.re2Flags);return this.regexps.push(VC.simplify(n)),this.regexps.length-1}compile(){if(this.prog)return;let e=kC.compileSet(this.regexps);if(e.numInst()>Gi.MAX_SIZE)throw new Ui(`${Gi.ERR_LARGE}: the set compiles to ${e.numInst()} instructions, more than ${Gi.MAX_SIZE}`);this.prog=e,this.dfa=new Kl(this.prog,this.maxMem),this.dummyRe2={prog:this.prog,cond:this.prog.startCond(),prefix:"",prefixRune:0,longest:!1}}match(e){this.prog||this.compile();let t=K.isByteArray(e)?me.fromUTF8(e):me.fromUTF16(e),n=F.UNANCHORED;this.anchor===kt.ANCHOR_START?n=F.ANCHOR_START:this.anchor===kt.ANCHOR_BOTH&&(n=F.ANCHOR_BOTH);let s=this.dfa.matchSet(t,0,n);if(s!==null)return s;let i=OC.fromRE2(this.dummyRe2);return i.init(0),i.matchSet(t,0,n)}},M(kt,"UNANCHORED",F.UNANCHORED),M(kt,"ANCHOR_START",F.ANCHOR_START),M(kt,"ANCHOR_BOTH",F.ANCHOR_BOTH),kt),OD=class rs{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let n="",s=!1,i=e.length;i===0&&(n="(?:)",s=!0);let a=!1,u=0;for(;u<i;){let l=e[u];if(l==="\\"){if(u+1<i)switch(l=e[u+1],l){case"\\":n+="\\\\",u+=2;continue;case"c":if(u+2<i){let g=e[u+2].charCodeAt(0);if(g>=65&&g<=90||g>=97&&g<=122){let w=g%32;n+="\\x",n+=(w>>4).toString(16).toUpperCase(),n+=(w&15).toString(16).toUpperCase(),u+=3,s=!0;continue}}n+="c",u+=2,s=!0;continue;case"u":if(u+2<i){if(e[u+2]==="{"){let g=u+3,w=!1,D=!1;for(;g<i;){let P=e[g];if(P==="}"){D=!0;break}if(!rs.isHexadecimal(P))break;w=!0,g++}if(D&&w){n+="\\x",u+=2,s=!0;continue}}else if(u+5<i){let g=!0;for(let w=0;w<4;w++)if(!rs.isHexadecimal(e[u+2+w])){g=!1;break}if(g){n+="\\x{"+e.substring(u+2,u+6)+"}",u+=6,s=!0;continue}}}n+="u",u+=2,s=!0;continue;case"x":{let g=!1;if(u+2<i&&e[u+2]==="{"){let w=u+3,D=!1,P=!1;for(;w<i;){let k=e[w];if(k==="}"){P=!0;break}if(!rs.isHexadecimal(k))break;D=!0,w++}P&&D&&(g=!0)}else u+3<i&&rs.isHexadecimal(e[u+2])&&rs.isHexadecimal(e[u+3])&&(g=!0);g?(n+="\\x",u+=2):(n+="x",u+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":n+="\\"+l,u+=2;continue;default:{let g=e.codePointAt(u+1);if(g>=48&&g<=57||g>=65&&g<=90||g>=97&&g<=122){let w=K.charCount(g);n+=e.substring(u+1,u+1+w),u+=w+1,s=!0}else{n+="\\";let w=K.charCount(g);n+=e.substring(u+1,u+1+w),u+=w+1}continue}}}else if(l==="/"){n+="\\/",u+=1,s=!0;continue}else if(l==="["){if(!a&&e[u+1]==="]"){n+="[^\\x00-\\x{10FFFF}]",u+=2,s=!0;continue}if(!a&&e[u+1]==="^"&&e[u+2]==="]"){n+="[\\x00-\\x{10FFFF}]",u+=3,s=!0;continue}a=!0}else if(l==="]")a=!1;else if(!a&&l==="("&&u+2<i&&e[u+1]==="?"&&e[u+2]==="<"&&u+3<i&&!"=!>)".includes(e[u+3])){n+="(?P<",u+=3,s=!0;continue}let h=e.codePointAt(u),d=K.charCount(h);n+=e.substring(u,u+d),u+=d}let c=s?n:e;return t.length>0?`(?${t})${c}`:c}},vC=(r,e)=>{let t=r.matchArray();return t.index=r.start(0),t.input=e,t.groups=r.namedGroupsObject(),t},we,Wo=(we=class{static quote(e){return K.quoteMeta(e)}static quoteReplacement(e,t=!1){return tC.quoteReplacement(e,t)}static translateRegExp(e){return OD.translate(e)}static compile(e,t=0){let n=e;if(t&we.CASE_INSENSITIVE&&(n=`(?i)${n}`),t&we.DOTALL&&(n=`(?s)${n}`),t&we.MULTILINE&&(n=`(?m)${n}`),t&~(we.MULTILINE|we.DOTALL|we.CASE_INSENSITIVE|we.DISABLE_UNICODE_GROUPS|we.LONGEST_MATCH|we.LOOKBEHINDS))throw new gD("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let s=F.PERL;t&we.DISABLE_UNICODE_GROUPS&&(s&=~F.UNICODE_GROUPS),t&we.LOOKBEHINDS&&(s|=F.LOOKBEHIND);let i=new we(e,t);return i.re2Input=ND.compileImpl(n,s,(t&we.LONGEST_MATCH)!==0),i}static matches(e,t){return we.compile(e).testExact(t)}static initTest(e,t,n){if(e==null)throw new Error("pattern is null");if(n==null)throw new Error("re2 is null");let s=new we(e,t);return s.re2Input=n,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return K.isByteArray(e)&&(e=Cr.utf8(e)),new tC(this,e)}test(e){return K.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){let t=K.isByteArray(e)?me.fromUTF8(e):me.fromUTF16(e);return this.re2Input.executeEngine(t,0,F.ANCHOR_BOTH,0)!==null}exec(e){let t=this.matcher(e);return t.find()?vC(t,e):null}split(e,t=0){let n=this.matcher(e),s=[],i=0,a=0;for(;n.find();){if(a===0&&n.end()===0){a=n.end();continue}if(t>0&&s.length===t-1)break;if(a===n.start()){if(t===0){i+=1,a=n.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(n.substring(a,n.start())),a=n.end()}if(t===0&&a!==n.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(n.substring(a,n.inputLength()))}return(t!==0||s.length===0&&!(a===n.inputLength()&&a>0))&&s.push(n.substring(a,n.inputLength())),s}*matchAll(e){let t=this.matcher(e);for(;t.find();)yield vC(t,e)}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},M(we,"CASE_INSENSITIVE",Lt.CASE_INSENSITIVE),M(we,"DOTALL",Lt.DOTALL),M(we,"MULTILINE",Lt.MULTILINE),M(we,"DISABLE_UNICODE_GROUPS",Lt.DISABLE_UNICODE_GROUPS),M(we,"LONGEST_MATCH",Lt.LONGEST_MATCH),M(we,"LOOKBEHINDS",Lt.LOOKBEHINDS),we);var Ws="13.2.0";function Im(r){Ws=r}var Ar=new Pn("@firebase/firestore");function ss(){return Ar.logLevel}function J(r,...e){if(Ar.logLevel<=ue.DEBUG){let t=e.map(Kf);Ar.debug(`Firestore (${Ws}): ${r}`,...t)}}function Cn(r,...e){if(Ar.logLevel<=ue.ERROR){let t=e.map(Kf);Ar.error(`Firestore (${Ws}): ${r}`,...t)}}function St(r,...e){if(Ar.logLevel<=ue.WARN){let t=e.map(Kf);Ar.warn(`Firestore (${Ws}): ${r}`,...t)}}function Kf(r){if(typeof r=="string")return r;try{return function(t){return JSON.stringify(t)}(r)}catch{return r}}function Z(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Dm(r,n,t)}function Dm(r,e,t){let n=`FIRESTORE (${Ws}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Cn(n),new Error(n)}function $(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Dm(e,s,n)}function re(r,e){return r}function xD(r){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}var ps=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516),n="";for(;n.length<20;){let s=xD(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}};function oe(r,e){return r<e?-1:r>e?1:0}function Zi(r,e){let t=Math.min(r.length,e.length);for(let n=0;n<t;n++){let s=r.charAt(n),i=e.charAt(n);if(s!==i)return zl(s)===zl(i)?oe(s,i):zl(s)?1:-1}return oe(r.length,e.length)}var FD=55296,LD=57343;function zl(r){let e=r.charCodeAt(0);return e>=FD&&e<=LD}function gs(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}var Re=class r{constructor(e,t){this.comparator=e,this.root=t||Xt.EMPTY}insert(e,t){return new r(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xt.BLACK,null,null))}remove(e){return new r(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cs(this.root,e,this.comparator,!1)}getReverseIterator(){return new cs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cs(this.root,e,this.comparator,!0)}},cs=class{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Xt=class r{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??r.RED,this.left=s??r.EMPTY,this.right=i??r.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new r(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this,i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return r.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return r.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,r.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,r.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}};Xt.EMPTY=null,Xt.RED=!0,Xt.BLACK=!1;Xt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Ue=class r{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ru(this.data.getIterator())}getIteratorFrom(e){return new ru(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof r)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new r(this.comparator);return t.data=e,t}},ru=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},W=class extends Ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Cs="__name__",su=class r{constructor(e,t,n){t===void 0?t=0:t>e.length&&Z(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&Z(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return r.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof r?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let s=0;s<n;s++){let i=r.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return oe(e.length,t.length)}static compareSegments(e,t){let n=r.isNumericId(e),s=r.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?r.extractNumericId(e).compare(r.extractNumericId(t)):Zi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hn.fromString(e.substring(4,e.length-2))}},_e=class r extends su{construct(e,t,n){return new r(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new r(t)}static emptyPath(){return new r([])}},kD=/^[_a-zA-Z][_a-zA-Z0-9]*$/,ft=class is extends su{construct(e,t,n){return new is(e,t,n)}static isValidIdentifier(e){return kD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),is.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cs}static keyField(){return new is([Cs])}static fromServerFormat(e){let t=[],n="",s=0,i=()=>{if(n.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},a=!1;for(;s<e.length;){let u=e[s];if(u==="\\"){if(s+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new is(t)}static emptyPath(){return new is([])}};var Wt=class r{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new r([])}unionWith(e){let t=new Ue(ft.comparator);for(let n of this.fields)t=t.add(n);for(let n of e)t=t.add(n);return new r(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return gs(this.fields,e.fields,(t,n)=>t.isEqual(n))}};function br(r){let e=0;for(let t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Kr(r,e){for(let t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Tm(r,e){let t=[];for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function Am(r){for(let e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}var ee=class r{constructor(e){this.path=e}static fromPath(e){return new r(_e.fromString(e))}static fromName(e){return new r(_e.fromString(e).popFirst(5))}static empty(){return new r(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return _e.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new r(new _e(e.slice()))}};function VD(r,e,t){if(!t)throw new W(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function bm(r,e,t,n){if(e===!0&&n===!0)throw new W(V.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function MC(r){if(!ee.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ba(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Qu(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{let e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Z(12329,{type:typeof r})}function Qs(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=Qu(r);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function xe(r,e){let t={typeString:r};return e&&(t.value=e),t}function va(r,e){if(!ba(r))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(let n in e)if(e[n]){let s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0,a=e[n].optional;if(!(n in r)){if(a)continue;t=`JSON missing required field: '${n}'`;break}let u=r[n];if(s&&typeof u!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&u!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new W(V.INVALID_ARGUMENT,t);return!0}var GC=-62135596800,UC=1e6,ve=class r{static now(){return r.fromMillis(Date.now())}static fromDate(e){return r.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*UC);return new r(t,n)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new W(V.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return r._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,n;if(e>=0n)t=Number(e/1000000000n),n=Number(e%1000000000n);else{let s=e%1000000000n;s===0n?(t=Number(e/1000000000n),n=0):(t=Number(e/1000000000n-1n),n=Number(s+1000000000n))}return new r(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<GC)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/UC}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new W(V.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");let e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:r._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(va(e,r._jsonSchema))return new r(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds-GC;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};ve._jsonSchemaVersion="firestore/timestamp/1.0",ve._jsonSchema={type:xe("string",ve._jsonSchemaVersion),seconds:xe("number"),nanoseconds:xe("number")};var iu=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Ae=class r{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new iu("Invalid base64 string: "+i):i}}(e);return new r(t)}static fromUint8Array(e){let t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new r(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Ae.EMPTY_BYTE_STRING=new Ae("");var MD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(r){if($(!!r,39018),typeof r=="string"){let e=0,t=MD.exec(r);if($(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}let n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Ie(r.seconds),nanos:Ie(r.nanos)}}function Ie(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Gt(r){return typeof r=="string"?Ae.fromBase64String(r):Ae.fromUint8Array(r)}var vm="server_timestamp",Rm="__type__",Sm="__previous_value__",Pm="__local_write_time__";function $u(r){return(r?.mapValue?.fields||{})[Rm]?.stringValue===vm}function Ra(r){let e=r.mapValue.fields[Sm];return $u(e)?Ra(e):e}function ms(r){let e=mn(r.mapValue.fields[Pm].timestampValue);return new ve(e.seconds,e.nanos)}var eB=class{constructor(e,t,n,s,i,a,u,c,l,h,d,g,w){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=h,this.apiKey=d,this._customHeaders=g,this.grpcFlowControlWindow=w}},au="(default)",ea=class r{constructor(e,t){this.projectId=e,this.database=t||au}static empty(){return new r("","")}get isDefaultDatabase(){return this.database===au}isEqual(e){return e instanceof r&&e.projectId===this.projectId&&e.database===this.database}};function Nm(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(r.options.projectId,e)}var Oe=class r{constructor(){this.exponent=0,this.i=0n,this.o=0n,this.u=new Array(4).fill(0n),this.l=new Array(6).fill(0n),this.h=new Array(6).fill(0n),this.T=new Array(6).fill(0n),this.P=new Array(12).fill(0n)}static I(e,t){let n=new r;return n.parse(e,t),n}parse(e,t){t+=e.length-1,this.exponent=0,this.i=0n,this.o=0n;let n=this.T,s=this.R(e,n);if(s==0&&this.isEmpty(n)||(t+=s)<r.A)return;if(t>r.V)return void(this.exponent=Number(r.m));let i=this.p(t,n);this.S(t,i,n)}R(e,t){for(let i=0;i<6;i++)t[i]=0n;let n=0;for(;n<e.length&&e[n]==0;)n+=1;if(n==e.length)return 0;let s=-n;if(e.length-n>r.v){let i=e[r.v]>=5,a=new Array(r.v).fill(0);for(let u=0;u<r.v;u++)a[u]=e[u+n];i&&(s+=this.D(a)),e=a,n=0}for(let i=e.length-1;i>=n;i--)t[0]|=BigInt(e[i])<<32n,this.C(t);return s}C(e){let t=e.length;for(let n=0;n<t;n++){let s=e[n]%10n;e[n]=e[n]/10n,n+1<t&&(e[n+1]+=s<<32n)}}isEmpty(e){for(let t=0;t<e.length;t++)if(e[t]!=0n)return!1;return!0}D(e){for(let t=e.length-1;t>=0;t--){if(e[t]!=9)return e[t]=e[t]+1,0;e[t]=0}return e[0]=1,1}p(e,t){let n=t[0]<<31n|t[1]>>1n,s=Number(n)/r.F;return Math.floor(Number(e)*r.O+this.log2(s))}log2(e){return r.M*Math.log(e)}S(e,t,n){let s=this.u;this.N(-t,s);let i=this.P;this.B(n,s,i),this.L(i),BigInt(s[0])!=BigInt(-e)&&this.L(i),t+=this.$(i),(t+=r.U)<=0||(t+=this.k(i),BigInt(t)>=r.m?this.exponent=Number(r.m):(this.exponent=Number(t),this.i=(i[0]<<32n)+i[1]&0xffffffffffffffffn,this.o=(i[2]<<32n)+i[3]&0xffffffffffffffffn))}N(e,t){if(e==0)return void this.q(r.K[0],t);let n=r.K;e<0&&(e=-e,n=r.W);let s=r.G,i=32,a=!0;for(;e>0;)e>=s&&(a?(this.q(n[i],t),a=!1):this.j(t,n[i],t),e-=s),i-=1,s*=.5}q(e,t){for(let n=0;n<t.length;n++)t[n]=e[n]}j(e,t,n){this.H(e,t,this.P);let s=this.J(this.P);this.Y(this.P,n),n[0]=e[0]+t[0]+BigInt(s)}H(e,t,n){for(let s=0;s<n.length;s++)n[s]=0n;this.Z(e,this.l),this.Z(t,this.h);for(let s=5;s>=0;s--)for(let i=5;i>=0;i--){let a=this.l[s]*this.h[i];n[i+s+1]=n[i+s+1]+(a&r.X)&0xffffffffffffffffn,n[i+s]=n[i+s]+(a>>32n)&0xffffffffffffffffn}for(let s=11;s>=1;s--)n[s-1]=n[s-1]+(n[s]>>32n)&0xffffffffffffffffn,n[s]&=r.X}J(e){let t=0;for(;this.ee(e);)this.L(e),t-=1;return t}ee(e){if(e[0]<0x19999999n)return!0;if(e[0]>0x19999999n)return!1;for(let t=1;t<e.length;t++){if(e[t]<0x99999999n)return!0;if(e[t]>0x99999999n)return!1}return!1}B(e,t,n){for(let a=0;a<n.length;a++)n[a]=0n;let s=this.h;this.Z(t,s);let i=e.length;for(let a=i-1;a>=0;a--)for(let u=i-1;u>=0;u--){let c=e[a]*s[u];n[u+a+1]=n[u+a+1]+(c&r.X)&0xffffffffffffffffn,n[u+a]=n[u+a]+(c>>32n)&0xffffffffffffffffn}for(let a=11;a>=1;a--)n[a-1]=n[a-1]+(n[a]>>32n)&0xffffffffffffffffn,n[a]&=r.X}L(e){let t=e.length-1;e[0]&=r.X,e[t]*=10n;for(let n=t-1;n>=0;n--)e[n]=10n*e[n]+(e[n+1]>>32n)&0xffffffffffffffffn,e[n+1]&=r.X}$(e){let t=31-r.te(e[0]);return t!=0&&this.ne(e,t),t}k(e){return this.re(e,5,100n),this.re(e,4,0x80000000n),(e[0]&r.ie<<1n)!=0n?(this.ne(e,1),1):0}Y(e,t){t[1]=(e[0]<<32n)+e[1],t[2]=(e[2]<<32n)+e[3],t[3]=(e[4]<<32n)+e[5]}Z(e,t){t[0]=e[1]>>32n,t[1]=e[1]&r.X,t[2]=e[2]>>32n,t[3]=e[2]&r.X,t[4]=e[3]>>32n,t[5]=e[3]&r.X}ne(e,t){let n=e.length-1,s=BigInt(32-Math.abs(t));if(t>0){let i=BigInt(t);for(let a=n+1-1;a>=1;a--)e[a]=e[a]>>i|e[a-1]<<s&r.X;e[0]=e[0]>>i}else if(t<0){let i=BigInt(-t);e[0]=0xffffffffffffffffn&(e[0]<<i|e[1]>>s);for(let a=1;a<n;a++)e[a]=0xffffffffffffffffn&(e[a]<<i&r.X|e[a+1]>>s);e[n]=e[n]<<i&r.X}}re(e,t,n){let s=t;e[s]=e[s]+n&0xffffffffffffffffn;for(let i=s+1-1;i>=1&&(e[i]&r.ie)!=0n;i--)e[i]&=r.X,e[i-1]+=1n}static te(e){let t=Number(e>>32n);return t==0?32+Math.clz32(Number(BigInt.asUintN(32,e))):Math.clz32(t)}};var Je,ls,tB,Zo,eu,Ji;Oe.v=59,Oe.V=646456993,Oe.A=-646457032,Oe.F=0xccccccccccccd00,Oe.se=0x8000000000000000n,Oe.G=2147483648,Oe.X=0x00000000ffffffffn,Oe.ie=0xffffffff00000000n,Oe.O=Math.log(10)/Math.log(2),Oe.M=1/Math.log(2),Oe.U=2147483647,Oe.m=0xffffffffn,Oe.K=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],Oe.W=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];var ge=class r{constructor(e,t,n,s){this.negative=e,this._e=t,this.i=n,this.o=s}exponent(){return this._e-Oe.U}oe(){return this._e===0&&this.i===0n&&this.o===0n}ae(){return this._e===Ke(r,Je,"f",ls)&&this.i===0n&&this.o===0n}isNaN(){return this._e===Ke(r,Je,"f",ls)&&!(this.i===0n&&this.o===0n)}compareTo(e){if(this.isNaN())return e.isNaN()?0:1;if(e.isNaN())return-1;let t,n;if(this.negative){if(!e.negative)return-1;t=1,n=-1}else{if(e.negative)return 1;t=-1,n=1}return this._e<e._e?t:this._e>e._e?n:this.i<e.i?t:this.i>e.i?n:this.o<e.o?t:this.o>e.o?n:0}debug(){return(this.negative?"+":"-")+Ke(r,Je,"m",tB).call(r,this.i)+Ke(r,Je,"m",tB).call(r,this.o)+"*2^"+this.exponent()}static fromNumber(e){if(isNaN(e))return r.NaN;if(!isFinite(e))return e<0?r.ue:r.ce;if(e===0)return Math.sign(1/e)>0?r.le:r.Ee;let t=new DataView(new ArrayBuffer(8));t.setFloat64(0,e);let n=t.getBigUint64(0),s=BigInt.asUintN(64,n<<12n),i=2047&Number(n>>52n);if(i===0){let a=Oe.te(s);s=a<63?s<<BigInt(a+1):0n,i=-a}return new r(e<0,Ke(r,Je,"m",Ji).call(r,i-1023),s,0n)}static fromString(e){if(e==="NaN")return r.NaN;if(e==="-Infinity")return r.ue;if(e==="Infinity"||e==="+Infinity")return r.ce;let t=new Array(e.length).fill(0),n=0,s=0,i=0,a=!1;for(e[n]==="-"?(a=!0,n++):e[n]==="+"&&n++;Ke(r,Je,"m",Zo).call(r,e,n);)t[s++]=Ke(r,Je,"m",eu).call(r,e,n++);if(e[n]==="."){let c=++n;for(;Ke(r,Je,"m",Zo).call(r,e,n);)t[s++]=Ke(r,Je,"m",eu).call(r,e,n++);i=c-n}if(e[n]==="e"||e[n]==="E"){let c=0;n++;let l=1;e[n]==="-"?(l=-1,n++):e[n]==="+"&&n++;let h=n;for(;Ke(r,Je,"m",Zo).call(r,e,n);)if(c=10*c+Ke(r,Je,"m",eu).call(r,e,n++),n-h>9)throw new Error("Exponent too large "+e);if(n===h)throw new Error("Invalid number "+e);i+=c*l}if(s===0||n!==e.length)throw new Error("Invalid number "+e);let u=Oe.I(t.slice(0,s),i);return new r(a,u.exponent,u.i,u.o)}};Je=ge,tB=function(e){return e.toString(16).padStart(16,"0")},Zo=function(e,t){let n=e.codePointAt(t);return n!==void 0&&n>=48&&n<=57},eu=function(e,t){return e.codePointAt(t)-48},Ji=function(e){return e+Oe.U},ls={value:Number(Oe.m)},ge.le=new ge(!1,0,0n,0n),ge.Ee=new ge(!0,0,0n,0n),ge.NaN=new ge(!1,Ke(ge,Je,"f",ls),1n<<63n,0n),ge.ue=new ge(!0,Ke(ge,Je,"f",ls),0n,0n),ge.ce=new ge(!1,Ke(ge,Je,"f",ls),0n,0n),new ge(!0,Ke(ge,Je,"m",Ji).call(ge,63),0n,0n),new ge(!1,Ke(ge,Je,"m",Ji).call(ge,0),0n,0n),new ge(!0,Ke(ge,Je,"m",Ji).call(ge,0),0n,0n);var Jf=-1;function Yu(r){return r==null}function Es(r){return r===0&&1/r==-1/0}function GD(r){return typeof r=="number"&&Number.isInteger(r)&&!Es(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}function UD(r){return typeof r=="string"}var Xu="__type__",Zu="__vector__",vr="value",HD="server_timestamp",zf="__min__",Sa="__max__",Qt="__regex__",_s="pattern",ys="options",Rr="__oid__",Yn="__int__",En="__decimal128__",dn="__request_timestamp__",ta="seconds",na="increment",ws="__binary__",Is={nullValue:"NULL_VALUE"},Qo={mapValue:{fields:{__type__:{stringValue:Sa}}}},aR={mapValue:{fields:{[Xu]:{stringValue:Zu},[vr]:{arrayValue:{}}}}},oR={mapValue:{fields:{[zf]:{nullValue:"NULL_VALUE"}}}},uR={mapValue:{fields:{[Sa]:{nullValue:"NULL_VALUE"}}}},cR={mapValue:{fields:{[Rr]:{stringValue:""}}}},lR={mapValue:{fields:{[dn]:{mapValue:{fields:{[ta]:{integerValue:0},[na]:{integerValue:0}}}}}}},BR={mapValue:{fields:{[Qt]:{mapValue:{fields:{[_s]:{stringValue:""},[ys]:{stringValue:""}}}}}}},le,vt;(vt=le||(le={})).he="regexValue",vt.Te="bsonObjectIdValue",vt.Pe="int32Value",vt.Ie="decimal128Value",vt.Re="bsonTimestampValue",vt.Ae="bsonBinaryValue",vt.Ve="minKeyValue",vt.de="maxKeyValue",vt.fe="maxValue",vt.me="vectorValue",vt.pe="serverTimestampValue",vt.ge="regularMapValue";var HC={[Zu]:le.me,[Sa]:le.fe,[HD]:le.pe},Om={[Qt]:le.he,[Rr]:le.Te,[Yn]:le.Pe,[En]:le.Ie,[dn]:le.Re,[ws]:le.Ae,[zf]:le.Ve,[Sa]:le.de},qD=new Set(Object.values(Om)),dt={booleanValue:!0},We={booleanValue:!1};function Ve(r){if("nullValue"in r)return 0;if("booleanValue"in r)return 2;if("integerValue"in r||"doubleValue"in r)return 3;if("timestampValue"in r)return 4;if("stringValue"in r)return 7;if("bytesValue"in r)return 8;if("referenceValue"in r)return 9;if("geoPointValue"in r)return 11;if("arrayValue"in r)return 13;if(!("mapValue"in r))return Z(28295,{value:r});switch(Wf(r)){case le.pe:return 6;case le.fe:return 9007199254740991;case le.me:return 14;case le.he:return 12;case le.Te:return 10;case le.Pe:case le.Ie:return 3;case le.Re:return 5;case le.Ae:return 8;case le.Ve:return 1;case le.de:return 16;default:return 15}}function Pt(r,e,t){if(r===e)return!0;let n=Ve(r);if(n!==Ve(e))return!1;switch(n){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return r.booleanValue===e.booleanValue;case 6:return ms(r).isEqual(ms(e));case 4:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;let u=mn(i.timestampValue),c=mn(a.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,e);case 7:return r.stringValue===e.stringValue;case 8:return function(i,a){return km(i,a)===0}(r,e);case 9:return r.referenceValue===e.referenceValue;case 11:return function(i,a){return Ie(i.geoPointValue.latitude)===Ie(a.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(a.geoPointValue.longitude)}(r,e);case 3:return function(i,a,u){if(Nt(i)&&Nt(a))return Fm(i,a)===0;if("integerValue"in i&&"integerValue"in a||jn(i)&&jn(a))return sa(i)===sa(a);let c,l;if("doubleValue"in i&&"doubleValue"in a)c=Ie(i.doubleValue),l=Ie(a.doubleValue);else{if(!u?.ye)return!1;c=Ie(i.integerValue??i.doubleValue),l=Ie(a.integerValue??a.doubleValue)}return c===l?!!u?.we||Es(c)===Es(l):!!(u===void 0||u.be)&&isNaN(c)&&isNaN(l)}(r,e,t);case 13:return gs(r.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>Pt(s,i,t));case 14:case 15:return function(i,a,u){let c=i.mapValue.fields||{},l=a.mapValue.fields||{};if(br(c)!==br(l))return!1;for(let h in c)if(c.hasOwnProperty(h)&&(l[h]===void 0||!Pt(c[h],l[h],u)))return!1;return!0}(r,e,t);case 5:return Lm(r,e)===0;case 12:return Vm(r,e)===0;case 10:return Mm(r,e)===0;default:return Z(52216,{left:r})}}function ra(r,e){return(r.values||[]).find(t=>Pt(t,e))!==void 0}function pt(r,e){if(r===e)return 0;let t=Ve(r),n=Ve(e);if(t!==n)return oe(t,n);switch(t){case 0:case 1:case 16:case 9007199254740991:return 0;case 2:return oe(r.booleanValue,e.booleanValue);case 3:return ia(r,e);case 4:return jC(r.timestampValue,e.timestampValue);case 6:return jC(ms(r),ms(e));case 7:return Zi(r.stringValue,e.stringValue);case 8:return km(r,e);case 9:return function(i,a){let u=i.split("/"),c=a.split("/");for(let l=0;l<u.length&&l<c.length;l++){let h=oe(u[l],c[l]);if(h!==0)return h}return oe(u.length,c.length)}(r.referenceValue,e.referenceValue);case 11:return function(i,a){let u=oe(Ie(i.latitude),Ie(a.latitude));return u!==0?u:oe(Ie(i.longitude),Ie(a.longitude))}(r.geoPointValue,e.geoPointValue);case 13:return KC(r.arrayValue,e.arrayValue);case 14:return function(i,a){let u=i.fields||{},c=a.fields||{},l=u[vr]?.arrayValue,h=c[vr]?.arrayValue,d=oe(l?.values?.length||0,h?.values?.length||0);return d!==0?d:KC(l,h)}(r.mapValue,e.mapValue);case 15:return function(i,a){if(i===Qo.mapValue&&a===Qo.mapValue)return 0;if(i===Qo.mapValue)return 1;if(a===Qo.mapValue)return-1;let u=i.fields||{},c=Object.keys(u),l=a.fields||{},h=Object.keys(l);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){let g=Zi(c[d],h[d]);if(g!==0)return g;let w=pt(u[c[d]],l[h[d]]);if(w!==0)return w}return oe(c.length,h.length)}(r.mapValue,e.mapValue);case 5:return Lm(r,e);case 12:return Vm(r,e);case 10:return Mm(r,e);default:throw Z(23264,{Se:t})}}function sa(r){let e;return e=jn(r)?r.mapValue.fields[Yn].integerValue:r.integerValue||r.doubleValue,Ie(e)}function xm(r){return r.mapValue.fields[En].stringValue}function ia(r,e){if(Nt(r)||Nt(e))return Fm(r,e);let t=sa(r),n=sa(e);return isNaN(t)?isNaN(n)?0:-1:isNaN(n)?1:oe(t,n)}function Fm(r,e){let t=qC(r),n=qC(e);return t.oe()&&n.oe()?0:t.isNaN()?n.isNaN()?0:-1:n.isNaN()?1:t.compareTo(n)}function qC(r){return Nt(r)?ge.fromString(xm(r)):ge.fromNumber(sa(r))}function jC(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return oe(r,e);let t=mn(r),n=mn(e),s=oe(t.seconds,n.seconds);return s!==0?s:oe(t.nanos,n.nanos)}function KC(r,e){let t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){let i=pt(t[s],n[s]);if(i!==void 0&&i!==0)return i}return oe(t.length,n.length)}function Lm(r,e){let t=r.mapValue.fields?.[dn].mapValue?.fields?.[ta],n=e.mapValue.fields?.[dn].mapValue?.fields?.[ta],s=r.mapValue.fields?.[dn].mapValue?.fields?.[na],i=e.mapValue.fields?.[dn].mapValue?.fields?.[na],a=ia(t,n);return a!==0?a:ia(s,i)}function JC(r){if("bytesValue"in r)return{subtype:0,bytes:Gt(r.bytesValue)};let e=r.mapValue?.fields,t=e?.[ws],n=t?.bytesValue;if(!n)throw new Error("Received incorrect value for BsonBinaryData");let s=Gt(n).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");let i=s[0],a=s.slice(1);return{subtype:i,bytes:Ae.fromUint8Array(a)}}function km(r,e){let t=JC(r),n=JC(e);return t.subtype!==n.subtype?t.subtype<n.subtype?-1:1:t.bytes.compareTo(n.bytes)}function Vm(r,e){let t=r.mapValue.fields,n=t?.[Qt]?.mapValue?.fields?.[_s]?.stringValue??"",s=t?.[Qt]?.mapValue?.fields?.[ys]?.stringValue??"",i=e.mapValue.fields,a=i?.[Qt]?.mapValue?.fields?.[_s]?.stringValue??"",u=i?.[Qt]?.mapValue?.fields?.[ys]?.stringValue??"",c=Zi(n,a);return c!==0?c:oe(s,u)}function Mm(r,e){return Zi(r.mapValue.fields?.[Rr]?.stringValue??"",e.mapValue.fields?.[Rr]?.stringValue??"")}function Ds(r){return nB(r)}function nB(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){let n=mn(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Gt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return ee.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(let i of t.values||[])s?s=!1:n+=",",n+=nB(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){let n=Object.keys(t.fields||{}).sort(),s="{",i=!0;for(let a of n)i?i=!1:s+=",",s+=`${a}:${nB(t.fields[a])}`;return s+"}"}(r.mapValue):Z(61005,{value:r})}function ou(r){switch(Ve(r)){case 0:case 2:return 4;case 3:return Nt(r)?16:8;case 4:case 11:return 16;case 6:let e=Ra(r);return e?16+ou(e):16;case 7:return 2*r.stringValue.length;case 8:return"bytesValue"in r?Gt(r.bytesValue).approximateByteSize():zC(r.mapValue);case 9:return r.referenceValue.length;case 13:return function(n){return(n.values||[]).reduce((s,i)=>s+ou(i),0)}(r.arrayValue);case 14:case 15:case 12:case 10:case 5:case 1:case 16:return zC(r.mapValue);default:throw Z(13486,{value:r})}}function zC(r){let e=0;return Kr(r.fields,(t,n)=>{e+=t.length+ou(n)}),e}function $t(r){return!!r&&"integerValue"in r}function Yt(r){return!!r&&"doubleValue"in r}function Nt(r){if(!r.mapValue?.fields)return!1;let e=r.mapValue.fields;return br(e)===1&&e[En]&&!!e[En].stringValue}function jn(r){if(!r.mapValue?.fields)return!1;let e=r.mapValue.fields;return br(e)===1&&e[Yn]?.integerValue!==void 0}function _n(r){return $t(r)||Yt(r)||!!r&&jn(r)||!!r&&Nt(r)}function Ts(r){return!!r&&"arrayValue"in r}function It(r){return!!r&&"nullValue"in r}function Qe(r){return!(!Yt(r)||!isNaN(Number(r.doubleValue)))||!(!Nt(r)||xm(r)!=="NaN")}function Dr(r){return!!r&&"mapValue"in r}function Wf(r){if(!r.mapValue?.fields)return le.ge;let e=r.mapValue.fields,t=e[Xu]?.stringValue;if(t&&HC[t])return HC[t];if(br(e)===1){let n=Object.keys(e);return Om[n[0]]??le.ge}return le.ge}function rB(r){return(r?.mapValue?.fields||{})[Xu]?.stringValue===Zu}function sB(r){return(r?.mapValue?.fields||{})[vr]?.arrayValue}function zi(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){let e={mapValue:{fields:{}}};return Kr(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=zi(n)),e}if(r.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zi(r.arrayValue.values[t]);return e}return{...r}}var wt=class r{constructor(e){this.value=e}static empty(){return new r({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Dr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zi(t)}setAll(e){let t=ft.emptyPath(),n={},s=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){let c=this.getFieldsMap(t);this.applyChanges(c,n,s),n={},s=[],t=u.popLast()}a?n[u.lastSegment()]=zi(a):s.push(u.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){let t=this.field(e.popLast());Dr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Dr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Kr(t,(s,i)=>e[s]=i);for(let s of n)delete e[s]}clone(){return new r(zi(this.value))}};function Gm(r){let e=[];return Kr(r.fields,(t,n)=>{let s=new ft([t]);if(Dr(n)&&!function(a){return qD.has(Wf(a))}(n)){let i=Gm(n.mapValue).fields;if(i.length===0)e.push(s);else for(let a of i)e.push(s.child(a))}else e.push(s)}),new Wt(e)}function Qf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Es(e)?"-0":e}}function Bs(r){return{integerValue:""+r}}function $f(r,e,t){return GD(e)?Bs(e):Qf(r,e)}var As=class{constructor(){this._=void 0}};function jD(r,e,t){return r instanceof Sr?function(s,i){let a={fields:{[Rm]:{stringValue:vm},[Pm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$u(i)&&(i=Ra(i)),i&&(a.fields[Sm]=i),{mapValue:a}}(t,e):r instanceof Pr?Hm(r,e):r instanceof Nr?qm(r,e):r instanceof Or?function(s,i){let a=Um(s,i),u=WC(a)+WC(s.xe);return Nt(a)||Nt(s.xe)?{mapValue:{fields:{[En]:{stringValue:u.toString()}}}}:jn(a)?Yt(s.xe)?{doubleValue:u}:$t(s.xe)?{integerValue:u.toString()}:{mapValue:{fields:{[Yn]:Bs(u)}}}:$t(a)&&($t(s.xe)||jn(s.xe))?Bs(u):Qf(s.serializer,u)}(r,e):r instanceof bs?function(s,i){return!_n(i)||Qe(s.xe)?s.xe:Qe(i)?i:ia(s.xe,i)<0?s.xe:i}(r,e):r instanceof vs?function(s,i){return!_n(i)||Qe(s.xe)?s.xe:Qe(i)?i:ia(s.xe,i)>0?s.xe:i}(r,e):void 0}function KD(r,e,t){return r instanceof Pr?Hm(r,e):r instanceof Nr?qm(r,e):t}function Um(r,e){return r instanceof Or?_n(e)?e:{integerValue:0}:null}var Sr=class extends As{},Pr=class extends As{constructor(e){super(),this.elements=e}};function Hm(r,e){let t=jm(e);for(let n of r.elements)t.some(s=>Pt(s,n))||t.push(n);return{arrayValue:{values:t}}}var Nr=class extends As{constructor(e){super(),this.elements=e}};function qm(r,e){let t=jm(e);for(let n of r.elements)t=t.filter(s=>!Pt(s,n));return{arrayValue:{values:t}}}var aa=class extends As{constructor(e,t){super(),this.serializer=e,this.xe=t}},Or=class extends aa{},bs=class extends aa{},vs=class extends aa{};function WC(r){return $t(r)?Ie(r.integerValue):Yt(r)?Ie(r.doubleValue):jn(r)?Ie(r.mapValue.fields[Yn].integerValue):Nt(r)?parseFloat(r.mapValue.fields[En].stringValue):0}function jm(r){return Ts(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}var iB=class{constructor(e,t){this.field=e,this.transform=t}};function JD(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof Pr&&s instanceof Pr||n instanceof Nr&&s instanceof Nr?gs(n.elements,s.elements,Pt):n instanceof Or&&s instanceof Or||n instanceof bs&&s instanceof bs||n instanceof vs&&s instanceof vs?Pt(n.xe,s.xe):n instanceof Sr&&s instanceof Sr}(r.transform,e.transform)}var aB=class{constructor(e,t){this.version=e,this.transformResults=t}},Gn=class r{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new r}static exists(e){return new r(void 0,e)}static updateTime(e){return new r(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function tu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}var Rs=class{};function Km(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new oa(r.key,Gn.none()):new xr(r.key,r.data,Gn.none());{let t=r.data,n=wt.empty(),s=new Ue(ft.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new yn(r.key,n,new Wt(s.toArray()),Gn.none())}}function zD(r,e,t){r instanceof xr?function(s,i,a){let u=s.value.clone(),c=$C(s.fieldTransforms,i,a.transformResults);u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):r instanceof yn?function(s,i,a){if(!tu(s.precondition,i))return void i.convertToUnknownDocument(a.version);let u=$C(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Jm(s)),c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Wi(r,e,t,n){return r instanceof xr?function(i,a,u,c){if(!tu(i.precondition,a))return u;let l=i.value.clone(),h=YC(i.fieldTransforms,c,a);return l.setAll(h),a.convertToFoundDocument(a.version,l).setHasLocalMutations(),null}(r,e,t,n):r instanceof yn?function(i,a,u,c){if(!tu(i.precondition,a))return u;let l=YC(i.fieldTransforms,c,a),h=a.data;return h.setAll(Jm(i)),h.setAll(l),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(r,e,t,n):function(i,a,u){return tu(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,e,t)}function WD(r,e){let t=null;for(let n of r.fieldTransforms){let s=e.data.field(n.field),i=Um(n.transform,s||null);i!=null&&(t===null&&(t=wt.empty()),t.set(n.field,i))}return t||null}function QC(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&gs(n,s,(i,a)=>JD(i,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}var xr=class extends Rs{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}},yn=class extends Rs{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}};function Jm(r){let e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let n=r.data.field(t);e.set(t,n)}}),e}function $C(r,e,t){let n=new Map;$(r.length===t.length,32656,{ve:t.length,De:r.length});for(let s=0;s<t.length;s++){let i=r[s],a=i.transform,u=e.data.field(i.field);n.set(i.field,KD(a,u,t[s]))}return n}function YC(r,e,t){let n=new Map;for(let s of r){let i=s.transform,a=t.data.field(s.field);n.set(s.field,jD(i,a,e))}return n}var oa=class extends Rs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},oB=class extends Rs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Fr=class{constructor(e,t){this.position=e,this.inclusive=t}};function XC(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){let i=e[s],a=r.position[s];if(i.field.isKeyField()?n=ee.comparator(ee.fromName(a.referenceValue),t.key):n=pt(a,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function ZC(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Pt(r.position[t],e.position[t]))return!1;return!0}var uu=class{},ke=class r extends uu{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new cB(e,t,n):t==="array-contains"?new hB(e,n):t==="in"?new fB(e,n):t==="not-in"?new dB(e,n):t==="array-contains-any"?new pB(e,n):new r(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new lB(e,n):new BB(e,n)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(pt(t,this.value)):t!==null&&Ve(this.value)===Ve(t)&&this.matchesComparison(pt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Ut=class r extends uu{constructor(e,t){super(),this.filters=e,this.op=t,this.Ce=null}static create(e,t){return new r(e,t)}matches(e){return zm(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Ce!==null||(this.Ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Ce}getFilters(){return Object.assign([],this.filters)}};function zm(r){return r.op==="and"}function Wm(r){return QD(r)&&zm(r)}function QD(r){for(let e of r.filters)if(e instanceof Ut)return!1;return!0}function uB(r){if(r instanceof ke)return r.field.canonicalString()+r.op.toString()+Ds(r.value);if(Wm(r))return r.filters.map(e=>uB(e)).join(",");{let e=r.filters.map(t=>uB(t)).join(",");return`${r.op}(${e})`}}function Qm(r,e){return r instanceof ke?function(n,s){return s instanceof ke&&n.op===s.op&&n.field.isEqual(s.field)&&Pt(n.value,s.value)}(r,e):r instanceof Ut?function(n,s){return s instanceof Ut&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&Qm(a,s.filters[u]),!0):!1}(r,e):void Z(19439)}function $m(r){return r instanceof ke?function(t){return`${t.field.canonicalString()} ${t.op} ${Ds(t.value)}`}(r):r instanceof Ut?function(t){return t.op.toString()+" {"+t.getFilters().map($m).join(" ,")+"}"}(r):"Filter"}var cB=class extends ke{constructor(e,t,n){super(e,t,n),this.key=ee.fromName(n.referenceValue)}matches(e){let t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}},lB=class extends ke{constructor(e,t){super(e,"in",t),this.keys=Ym("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},BB=class extends ke{constructor(e,t){super(e,"not-in",t),this.keys=Ym("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function Ym(r,e){return(e.arrayValue?.values||[]).map(t=>ee.fromName(t.referenceValue))}var hB=class extends ke{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Ts(t)&&ra(t.arrayValue,this.value)}},fB=class extends ke{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&ra(this.value.arrayValue,t)}},dB=class extends ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ra(this.value.arrayValue,t)}},pB=class extends ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Ts(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>ra(this.value.arrayValue,n))}};var Lr=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function $D(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}var ne=class r{static fromTimestamp(e){return new r(e)}static min(){return new r(new ve(0,0))}static max(){return new r(new ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Ht=class r{constructor(e,t,n,s,i,a,u){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(e){return new r(e,0,ne.min(),ne.min(),ne.min(),wt.empty(),0)}static newFoundDocument(e,t,n,s){return new r(e,1,t,ne.min(),n,s,0)}static newNoDocument(e,t){return new r(e,2,t,ne.min(),ne.min(),wt.empty(),0)}static newUnknownDocument(e,t){return new r(e,3,t,ne.min(),ne.min(),wt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof r&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new r(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var ua=-1,cu=class{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}};cu.UNKNOWN_ID=-1;function YD(r,e){let t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(n===1e9?new ve(t+1,0):new ve(t,n));return new kr(s,ee.empty(),e)}function XD(r){return new kr(r.readTime,r.key,ua)}var kr=class r{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new r(ne.min(),ee.empty(),ua)}static max(){return new r(ne.max(),ee.empty(),ua)}};function ZD(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ee.comparator(r.documentKey,e.documentKey),t!==0?t:oe(r.largestBatchId,e.largestBatchId))}var gB=class{constructor(e,t=null,n=[],s=[],i=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Fe=null}};function em(r,e=null,t=[],n=[],s=null,i=null,a=null){return new gB(r,e,t,n,s,i,a)}function Xm(r){let e=re(r);if(e.Fe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>uB(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Yu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Ds(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Ds(n)).join(",")),e.Fe=t}return e.Fe}function Zm(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!$D(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Qm(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ZC(r.startAt,e.startAt)&&ZC(r.endAt,e.endAt)}function yr(r){return!!r.isCorePipeline}function eE(r){return!!r.path&&ee.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}var Ss=class{constructor(e,t=null,n=[],s=[],i=null,a="F",u=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=c,this.Oe=null,this.Me=null,this.Ne=null,this.startAt,this.endAt}};function eT(r,e,t,n,s,i,a,u){return new Ss(r,e,t,n,s,i,a,u)}function ec(r){return new Ss(r)}function tm(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function tT(r){return ee.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function tE(r){return r.collectionGroup!==null}function hs(r){let e=re(r);if(e.Oe===null){e.Oe=[];let t=new Set;for(let i of e.explicitOrderBy)e.Oe.push(i),t.add(i.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Ue(ft.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(u=u.add(l.field))})}),u})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Oe.push(new Lr(i,n))}),t.has(ft.keyField().canonicalString())||e.Oe.push(new Lr(ft.keyField(),n))}return e.Oe}function Zt(r){let e=re(r);return e.Me||(e.Me=nT(e,hs(r))),e.Me}function nT(r,e){if(r.limitType==="F")return em(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{let i=s.dir==="desc"?"asc":"desc";return new Lr(s.field,i)});let t=r.endAt?new Fr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Fr(r.startAt.position,r.startAt.inclusive):null;return em(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function lu(r,e,t){return new Ss(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function rT(r,e){return Zm(Zt(r),Zt(e))&&r.limitType===e.limitType}function Qi(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>$m(s)).join(", ")}]`),Yu(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ds(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ds(s)).join(",")),`Target(${n})`}(Zt(r))}; limitType=${r.limitType})`}function tc(r,e){return e.isFoundDocument()&&function(n,s){let i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ee.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(let i of hs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(let i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(a,u,c){let l=XC(a,u,c);return a.inclusive?l<=0:l<0}(n.startAt,hs(n),s)||n.endAt&&!function(a,u,c){let l=XC(a,u,c);return a.inclusive?l>=0:l>0}(n.endAt,hs(n),s))}(r,e)}function Yf(r){return(e,t)=>{let n=!1;for(let s of hs(r)){let i=sT(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function sT(r,e,t){let n=r.field.isKeyField()?ee.comparator(e.key,t.key):function(i,a,u){let c=a.data.field(i),l=u.data.field(i);return c!==null&&l!==null?pt(c,l):Z(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return Z(19790,{direction:r.dir})}}var CB=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var Fe,fe;function iT(r){switch(r){case V.OK:return Z(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Z(15467,{code:r})}}function nE(r){if(r===void 0)return Cn("GRPC error has no .code"),V.UNKNOWN;switch(r){case Fe.OK:return V.OK;case Fe.CANCELLED:return V.CANCELLED;case Fe.UNKNOWN:return V.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return V.INTERNAL;case Fe.UNAVAILABLE:return V.UNAVAILABLE;case Fe.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Fe.NOT_FOUND:return V.NOT_FOUND;case Fe.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Fe.ABORTED:return V.ABORTED;case Fe.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Fe.DATA_LOSS:return V.DATA_LOSS;default:return Z(39323,{code:r})}}(fe=Fe||(Fe={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";var wn=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(let[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){let n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Kr(this.inner,(t,n)=>{for(let[s,i]of n)e(s,i)})}isEmpty(){return Am(this.inner)}size(){return this.innerSize}};var aT=new Re(ee.comparator);function ht(){return aT}var rE=new Re(ee.comparator);function as(...r){let e=rE;for(let t of r)e=e.insert(t.key,t);return e}function sE(r){let e=rE;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Vn(){return $i()}function iE(){return $i()}function $i(){return new wn(r=>r.toString(),(r,e)=>r.isEqual(e))}var oT=new Re(ee.comparator),uT=new Ue(ee.comparator);function ce(...r){let e=uT;for(let t of r)e=e.add(t);return e}var cT=new Ue(oe);function lT(){return cT}var BT=null;function hT(){return new TextEncoder}var fT=new hn([4294967295,4294967295],0);function nm(r){let e=hT().encode(r),t=new Sl;return t.update(e),new Uint8Array(t.digest())}function rm(r){let e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hn([t,n],0),new hn([s,i],0)]}var mB=class r{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new wr(`Invalid padding: ${t}`);if(n<0)throw new wr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new wr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new wr(`Invalid padding when bitmap length is 0: ${t}`);this.Be=8*e.length-t,this.Le=hn.fromNumber(this.Be)}$e(e,t,n){let s=e.add(t.multiply(hn.fromNumber(n)));return s.compare(fT)===1&&(s=new hn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Le).toNumber()}Ue(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Be===0)return!1;let t=nm(e),[n,s]=rm(t);for(let i=0;i<this.hashCount;i++){let a=this.$e(n,s,i);if(!this.Ue(a))return!1}return!0}static create(e,t,n){let s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new r(i,s,t);return n.forEach(u=>a.insert(u)),a}insert(e){if(this.Be===0)return;let t=nm(e),[n,s]=rm(t);for(let i=0;i<this.hashCount;i++){let a=this.$e(n,s,i);this.ke(a)}}ke(e){let t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}},wr=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var ca=class r{constructor(e,t,n,s,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let s=new Map;return s.set(e,la.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new r(ne.min(),s,new Re(oe),ht(),ht(),ce())}},la=class r{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new r(n,t,ce(),ce(),ce())}};var fs=class{constructor(e,t,n,s){this.Qe=e,this.removedTargetIds=t,this.key=n,this.qe=s}},Bu=class{constructor(e,t){this.targetId=e,this.Ke=t}},hu=class{constructor(e,t,n=Ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}},fu=class{constructor(e){this.targetId=e,this.We=0,this.Ge=sm(),this.je=Ae.EMPTY_BYTE_STRING,this.ze=!1,this.He=!0}get current(){return this.ze}get resumeToken(){return this.je}get Je(){return this.We!==0}get Ye(){return this.He}Ze(e){e.approximateByteSize()>0&&(this.He=!0,this.je=e)}Xe(){let e=ce(),t=ce(),n=ce();return this.Ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:Z(38017,{changeType:i})}}),new la(this.je,this.ze,e,t,n)}et(){this.He=!1,this.Ge=sm()}tt(e,t){this.He=!0,this.Ge=this.Ge.insert(e,t)}nt(e){this.He=!0,this.Ge=this.Ge.remove(e)}rt(){this.We+=1}it(){this.We-=1,$(this.We>=0,3241,{We:this.We,targetId:this.targetId})}st(){this.He=!0,this.ze=!0}},ji="WatchChangeAggregator",EB=class{constructor(e){this._t=e,this.ot=new Map,this.ut=ht(),this.ct=$o(),this.lt=ht(),this.Et=$o(),this.ht=new Re(oe)}Tt(e){for(let t of e.Qe)e.qe&&e.qe.isFoundDocument()?this.Pt(t,e.qe):this.It(t,e.key,e.qe);for(let t of e.removedTargetIds)this.It(t,e.key,e.qe)}Rt(e){this.forEachTarget(e,t=>{let n=this.ot.get(t);if(n)switch(e.state){case 0:this.At(t)&&n.Ze(e.resumeToken);break;case 1:n.it(),n.Je||n.et(),n.Ze(e.resumeToken);break;case 2:n.it(),n.Je||this.removeTarget(t);break;case 3:this.At(t)&&(n.st(),n.Ze(e.resumeToken));break;case 4:this.At(t)&&(this.Vt(t),n.Ze(e.resumeToken));break;default:Z(56790,{state:e.state})}else J(ji,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ot.forEach((n,s)=>{this.At(s)&&t(s)})}dt(e){return yr(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:eE(e)}ft(e){let t=e.targetId,n=e.Ke.count,s=this.gt(t);if(s){let i=s.target;if(this.dt(i))if(n===0){let a=new ee(yr(i)?_e.fromString(i.getPipelineDocuments()[0]):i.path);this.It(t,a,Ht.newNoDocument(a,ne.min()))}else $(n===1,20013,"Single document existence filter with count: "+n);else{let a=this.yt(t);if(a!==n){let u=this.wt(e),c=u?this.bt(u,e,a):1;if(c!==0){this.Vt(t);let l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ht=this.ht.insert(t,l)}BT?.St(function(h,d,g,w,D){let P={localCacheCount:h,existenceFilterCount:d.count,databaseId:g.database,projectId:g.projectId},k=d.unchangedNames;return k&&(P.bloomFilter={applied:D===0,hashCount:k?.hashCount??0,bitmapLength:k?.bits?.bitmap?.length??0,padding:k?.bits?.padding??0,mightContain:q=>w?.mightContain(q)??!1}),P}(a,e.Ke,this._t.xt(),u,c))}}}}wt(e){let t=e.Ke.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t,a,u;try{a=Gt(n).toUint8Array()}catch(c){if(c instanceof iu)return St("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new mB(a,s,i)}catch(c){return St(c instanceof wr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Be===0?null:u}bt(e,t,n){return t.Ke.count===n-this.vt(e,t.targetId)?0:2}vt(e,t){let n=this._t.getRemoteKeysForTarget(t),s=0;return n.forEach(i=>{let a=this._t.xt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.It(t,i,null),s++)}),s}Dt(e){let t=new Map;this.ot.forEach((i,a)=>{let u=this.gt(a);if(u){if(i.current&&this.dt(u.target)){let c=yr(u.target)?_e.fromString(u.target.getPipelineDocuments()[0]):u.target.path,l=new ee(c);this.Ct(l).has(a)||this.Ft(a,l)||this.It(a,l,Ht.newNoDocument(l,e))}i.Ye&&(t.set(a,i.Xe()),i.et())}});let n=ce();this.Et.forEach((i,a)=>{let u=!0;a.forEachWhile(c=>{let l=this.gt(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.ut.forEach((i,a)=>a.setReadTime(e)),this.lt.forEach((i,a)=>a.setReadTime(e));let s=new ca(e,t,this.ht,this.ut,this.lt,n);return this.ut=ht(),this.ct=$o(),this.lt=ht(),this.Et=$o(),this.ht=new Re(oe),s}Pt(e,t){let n=this.ot.get(e);if(!n||!this.At(e))return void J(ji,`addDocumentToTarget received document for unknown inactive target (${e})`);let s=this.Ft(e,t.key)?2:0;n.tt(t.key,s),yr(this.gt(e).target)&&this.gt(e).target.getPipelineFlavor()!=="exact"?this.lt=this.lt.insert(t.key,t):this.ut=this.ut.insert(t.key,t),this.ct=this.ct.insert(t.key,this.Ct(t.key).add(e)),this.Et=this.Et.insert(t.key,this.Ot(t.key).add(e))}It(e,t,n){let s=this.ot.get(e);s&&this.At(e)?(this.Ft(e,t)?s.tt(t,1):s.nt(t),this.Et=this.Et.insert(t,this.Ot(t).delete(e)),this.Et=this.Et.insert(t,this.Ot(t).add(e)),n&&(yr(this.gt(e).target)&&this.gt(e).target.getPipelineFlavor()!=="exact"?this.lt=this.lt.insert(t,n):this.ut=this.ut.insert(t,n))):J(ji,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ot.delete(e)}yt(e){let t=this.ot.get(e);if(!t)return 0;let n=t.Xe();return this._t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}rt(e){let t=this.ot.get(e);t||(J(ji,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new fu(e),this.ot.set(e,t)),t.rt()}Ot(e){let t=this.Et.get(e);return t||(t=new Ue(oe),this.Et=this.Et.insert(e,t)),t}Ct(e){let t=this.ct.get(e);return t||(t=new Ue(oe),this.ct=this.ct.insert(e,t)),t}At(e){let t=this.gt(e)!==null;return t||J(ji,"Detected inactive target",e),t}gt(e){let t=this.ot.get(e);return t===void 0||t.Je?null:this._t.Mt(e)}Vt(e){this.ot.set(e,new fu(e)),this._t.getRemoteKeysForTarget(e).forEach(t=>{this.It(e,t,null)})}Ft(e,t){return this._t.getRemoteKeysForTarget(e).has(t)}};function $o(){return new Re(ee.comparator)}function sm(){return new Re(ee.comparator)}var dT={asc:"ASCENDING",desc:"DESCENDING"},pT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gT={and:"AND",or:"OR"},_B=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function yB(r,e){return r.useProto3Json||Yu(e)?e:{value:e}}function Yi(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xf(r){let e=mn(r);return new ve(e.seconds,e.nanos)}function wB(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function nu(r,e){return Yi(r,e.toTimestamp())}function en(r){return $(!!r,49232),ne.fromTimestamp(Xf(r))}function Zf(r,e){return IB(r,e).canonicalString()}function IB(r,e){let t=function(s){return new _e(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function aE(r){let e=_e.fromString(r);return $(BE(e),10190,{key:e.toString()}),e}function du(r,e){return Zf(r.databaseId,e.path)}function Wl(r,e){let t=aE(e);if(t.get(1)!==r.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ee(uE(t))}function oE(r,e){return Zf(r.databaseId,e)}function CT(r){let e=aE(r);return e.length===4?_e.emptyPath():uE(e)}function DB(r){return new _e(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function uE(r){return $(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function im(r,e,t){return{name:du(r,e),fields:t.value.mapValue.fields}}function mT(r,e){let t;if("targetChange"in e){e.targetChange;let n=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Z(39313,{state:l})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,h){return l.useProto3Json?($(h===void 0||typeof h=="string",58123),Ae.fromBase64String(h||"")):($(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Ae.fromUint8Array(h||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(l){let h=l.code===void 0?V.UNKNOWN:nE(l.code);return new W(h,l.message||"")}(a);t=new hu(n,s,i,u||null)}else if("documentChange"in e){e.documentChange;let n=e.documentChange;n.document,n.document.name,n.document.updateTime;let s=Wl(r,n.document.name),i=en(n.document.updateTime),a=n.document.createTime?en(n.document.createTime):ne.min(),u=new wt({mapValue:{fields:n.document.fields}}),c=Ht.newFoundDocument(s,i,a,u),l=n.targetIds||[],h=n.removedTargetIds||[];t=new fs(l,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;let n=e.documentDelete;n.document;let s=Wl(r,n.document),i=n.readTime?en(n.readTime):ne.min(),a=Ht.newNoDocument(s,i),u=n.removedTargetIds||[];t=new fs([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;let n=e.documentRemove;n.document;let s=Wl(r,n.document),i=n.removedTargetIds||[];t=new fs([],i,s,null)}else{if(!("filter"in e))return Z(11601,{Nt:e});{e.filter;let n=e.filter;n.targetId;let{count:s=0,unchangedNames:i}=n,a=new CB(s,i),u=n.targetId;t=new Bu(u,a)}}return t}function ET(r,e){let t;if(e instanceof xr)t={update:im(r,e.key,e.value)};else if(e instanceof oa)t={delete:du(r,e.key)};else if(e instanceof yn)t={update:im(r,e.key,e.data),updateMask:RT(e.fieldMask)};else{if(!(e instanceof oB))return Z(16599,{Bt:e.type});t={verify:du(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,a){let u=a.transform;if(u instanceof Sr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Pr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Nr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Or)return{fieldPath:a.field.canonicalString(),increment:u.xe};if(u instanceof bs)return{fieldPath:a.field.canonicalString(),minimum:u.xe};if(u instanceof vs)return{fieldPath:a.field.canonicalString(),maximum:u.xe};throw Z(20930,{transform:a.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:nu(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z(27497)}(r,e.precondition)),t}function _T(r,e){return r&&r.length>0?($(e!==void 0,14353),r.map(t=>function(s,i){let a=s.updateTime?en(s.updateTime):en(i);return a.isEqual(ne.min())&&(a=en(i)),new aB(a,s.transformResults||[])}(t,e))):[]}function yT(r,e){return{documents:[oE(r,e.path)]}}function wT(r,e){let t={structuredQuery:{}},n=e.path,s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=oE(r,s);let i=function(l){if(l.length!==0)return lE(Ut.create(l,"and"))}(e.filters);i&&(t.structuredQuery.where=i);let a=function(l){if(l.length!==0)return l.map(h=>function(g){return{field:os(g.field),direction:AT(g.dir)}}(h))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let u=yB(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{Lt:t,parent:s}}function IT(r){let e=CT(r.parent),t=r.structuredQuery,n=t.from?t.from.length:0,s=null;if(n>0){$(n===1,65062);let h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(d){let g=cE(d);return g instanceof Ut&&Wm(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(d){return d.map(g=>function(D){return new Lr(us(D.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(g))}(t.orderBy));let u=null;t.limit&&(u=function(d){let g;return g=typeof d=="object"?d.value:d,Yu(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(d){let g=!!d.before,w=d.values||[];return new Fr(w,g)}(t.startAt));let l=null;return t.endAt&&(l=function(d){let g=!d.before,w=d.values||[];return new Fr(w,g)}(t.endAt)),eT(e,s,a,i,u,"F",c,l)}function DT(r,e){let t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function TT(r,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(r))}}}}function cE(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let n=us(t.unaryFilter.field);return ke.create(n,"==",{doubleValue:NaN});case"IS_NULL":let s=us(t.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=us(t.unaryFilter.field);return ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=us(t.unaryFilter.field);return ke.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(r):r.fieldFilter!==void 0?function(t){return ke.create(us(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Ut.create(t.compositeFilter.filters.map(n=>cE(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(t.compositeFilter.op))}(r):Z(30097,{filter:r})}function AT(r){return dT[r]}function bT(r){return pT[r]}function vT(r){return gT[r]}function os(r){return{fieldPath:r.canonicalString()}}function us(r){return ft.fromServerFormat(r.fieldPath)}function lE(r){return r instanceof ke?function(t){if(t.op==="=="){if(Qe(t.value))return{unaryFilter:{field:os(t.field),op:"IS_NAN"}};if(It(t.value))return{unaryFilter:{field:os(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Qe(t.value))return{unaryFilter:{field:os(t.field),op:"IS_NOT_NAN"}};if(It(t.value))return{unaryFilter:{field:os(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(t.field),op:bT(t.op),value:t.value}}}(r):r instanceof Ut?function(t){let n=t.getFilters().map(s=>lE(s));return n.length===1?n[0]:{compositeFilter:{op:vT(t.op),filters:n}}}(r):Z(54877,{filter:r})}function RT(r){let e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function BE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function hE(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}function Ba(r,e){let t={fields:{}};return e.forEach((n,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=n._toProto(r)}),{mapValue:t}}function fE(r){return{stringValue:r}}function nc(r){return new _B(r,!0)}var Ps=class{constructor(e){this.value=e}isEqual(e){return this.value===e.value}};var Ns=class{constructor(e,t){if(this.seconds=e,this.increment=t,!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(t)||t<0||t>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(e){return this.seconds===e.seconds&&this.increment===e.increment}};var tn=class r{constructor(e,t=0){if(this.subtype=t,!Number.isInteger(t)||t<0||t>255)throw new W(V.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=e}static fromBase64String(e,t=0){try{return new r(Ae.fromBase64String(e),t)}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e,t=0){return new r(Ae.fromUint8Array(e),t)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(e){return this.subtype===e.subtype&&this._byteString.isEqual(e._byteString)}toJSON(){let e={type:r._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(e.subtype=this.subtype),e}static fromJSON(e){if(va(e,r._jsonSchema)){let t=e.subtype??0;return r.fromBase64String(e.bytes,t)}}};tn._jsonSchemaVersion="firestore/bytes/1.0",tn._jsonSchema={type:xe("string",tn._jsonSchemaVersion),bytes:xe("string"),subtype:{...xe("number"),optional:!0}};var Os=class{constructor(e){this.stringValue=e,this.value=ge.fromString(e)}isEqual(e){return!(!this.value.oe()||!e.value.oe())||this.value.compareTo(e.value)===0}toJSON(){return{Ut:{stringValue:this.stringValue}}}};var xs=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};function dE(){return new xs(Cs)}var Fs=class{constructor(e){this._methodName=e}};var pn=class r{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:r._jsonSchemaVersion}}static fromJSON(e){if(va(e,r._jsonSchema))return new r(e.latitude,e.longitude)}};pn._jsonSchemaVersion="firestore/geoPoint/1.0",pn._jsonSchema={type:xe("string",pn._jsonSchemaVersion),latitude:xe("number"),longitude:xe("number")};var Ls=class{constructor(e){this.value=e}isEqual(e){return this.value===e.value}};var Vr=class r{constructor(){this.type="MaxKey"}static instance(){return r.MAX_KEY_VALUE_INSTANCE||(r.MAX_KEY_VALUE_INSTANCE=new r),r.MAX_KEY_VALUE_INSTANCE}};Vr.MAX_KEY_VALUE_INSTANCE=null;var Mr=class r{constructor(){this.type="MinKey"}static instance(){return r.MIN_KEY_VALUE_INSTANCE||(r.MIN_KEY_VALUE_INSTANCE=new r),r.MIN_KEY_VALUE_INSTANCE}};Mr.MIN_KEY_VALUE_INSTANCE=null;var ze=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");var nn=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var pu=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},gu=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ze.UNAUTHENTICATED))}shutdown(){}},TB=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},Cu=class{constructor(e){this.kt=e,this.currentUser=ze.UNAUTHENTICATED,this.Qt=0,this.forceRefresh=!1,this.auth=null}start(e,t){$(this.qt===void 0,42304);let n=this.Qt,s=c=>this.Qt!==n?(n=this.Qt,t(c)):Promise.resolve(),i=new nn;this.qt=()=>{this.Qt++,this.currentUser=this.Kt(),i.resolve(),i=new nn,e.enqueueRetryable(()=>s(this.currentUser))};let a=()=>{let c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},u=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.qt&&(this.auth.addAuthTokenListener(this.qt),a())};this.kt.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){let c=this.kt.getImmediate({optional:!0});c?u(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nn)}},0),a()}getToken(){let e=this.Qt,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.Qt!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?($(typeof n.accessToken=="string",31837,{Wt:n}),new pu(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.qt&&this.auth.removeAuthTokenListener(this.qt),this.qt=void 0}Kt(){let e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string",2055,{Gt:e}),new ze(e)}},AB=class{constructor(e,t,n){this.jt=e,this.zt=t,this.Ht=n,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.Jt=new Map}Yt(){return this.Ht?this.Ht():null}get headers(){this.Jt.set("X-Goog-AuthUser",this.jt);let e=this.Yt();return e&&this.Jt.set("Authorization",e),this.zt&&this.Jt.set("X-Goog-Iam-Authorization-Token",this.zt),this.Jt}},bB=class{constructor(e,t,n){this.jt=e,this.zt=t,this.Ht=n}getToken(){return Promise.resolve(new AB(this.jt,this.zt,this.Ht))}start(e,t){e.enqueueRetryable(()=>t(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}},mu=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Eu=class{constructor(e,t){this.Zt=t,this.forceRefresh=!1,this.appCheck=null,this.Xt=null,this.en=null,mt(e)&&e.settings.appCheckToken&&(this.en=e.settings.appCheckToken)}start(e,t){$(this.qt===void 0,3512);let n=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);let a=i.token!==this.Xt;return this.Xt=i.token,J("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.qt=i=>{e.enqueueRetryable(()=>n(i))};let s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.qt&&this.appCheck.addTokenListener(this.qt)};this.Zt.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){let i=this.Zt.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.en)return Promise.resolve(new mu(this.en));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?($(typeof t.token=="string",44558,{tokenResult:t}),this.Xt=t.token,new mu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.qt&&this.appCheck.removeTokenListener(this.qt),this.qt=void 0}};function pE(r){let e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}var vB=class{tn(e){}shutdown(){}};var am="ConnectivityMonitor",_u=class{constructor(){this.nn=()=>this.rn(),this.sn=()=>this._n(),this.an=[],this.un()}tn(e){this.an.push(e)}shutdown(){window.removeEventListener("online",this.nn),window.removeEventListener("offline",this.sn)}un(){window.addEventListener("online",this.nn),window.addEventListener("offline",this.sn)}rn(){J(am,"Network connectivity changed: AVAILABLE");for(let e of this.an)e(0)}_n(){J(am,"Network connectivity changed: UNAVAILABLE");for(let e of this.an)e(1)}static cn(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var Yo=null;function RB(){return Yo===null?Yo=function(){return 268435456+Math.round(2147483648*Math.random())}():Yo++,"0x"+Yo.toString(16)}var Ql="RestConnection",ST={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"},SB=class{get En(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.hn=t+"://"+e.host,this.Tn=`projects/${n}/databases/${s}`,this.Pn=this.databaseId.database===au?`project_id=${n}`:`project_id=${n}&database_id=${s}`}In(e,t,n,s,i){let a=RB(),u=this.Rn(e,t.toUriEncodedString());J(Ql,`Sending RPC '${e}' ${a}:`,u,n);let c={"google-cloud-resource-prefix":this.Tn,"x-goog-request-params":this.Pn};this.An(c,s,i);let{host:l}=new URL(u),h=sr(l);return this.Vn(e,u,c,n,h).then(d=>(J(Ql,`Received RPC '${e}' ${a}: `,d),d),d=>{throw St(Ql,`RPC '${e}' ${a} failed with error: `,d,"url: ",u,"request:",n),d})}dn(e,t,n,s,i,a){return this.In(e,t,n,s,i)}An(e,t,n){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ws}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(let s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}Rn(e,t){let n=ST[e],s=`${this.hn}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}};var PB=class{constructor(e){this.fn=e.fn,this.mn=e.mn}pn(e){this.gn=e}yn(e){this.wn=e}bn(e){this.Sn=e}onMessage(e){this.xn=e}close(){this.mn()}send(e){this.fn(e)}vn(){this.gn()}Dn(){this.wn()}Cn(e){this.Sn(e)}Fn(e){this.xn(e)}};var nt="WebChannelConnection",Ki=(r,e,t)=>{r.listen(e,n=>{try{t(n)}catch(s){setTimeout(()=>{throw s},0)}})},yu=class r extends SB{constructor(e){super(e),this.On=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static Mn(){if(!r.Nn){let e=xl();Ki(e,Ol.STAT_EVENT,t=>{t.stat===Mo.PROXY?J(nt,"STAT_EVENT: detected buffering proxy"):t.stat===Mo.NOPROXY&&J(nt,"STAT_EVENT: detected no buffering proxy")}),r.Nn=!0}}Vn(e,t,n,s,i){let a=RB();return new Promise((u,c)=>{let l=new Pl;l.setWithCredentials(!0),l.listenOnce(Nl.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Vi.NO_ERROR:let d=l.getResponseJson();J(nt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(d)),u(d);break;case Vi.TIMEOUT:J(nt,`RPC '${e}' ${a} timed out`),c(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Vi.HTTP_ERROR:let g=l.getStatus();if(J(nt,`RPC '${e}' ${a} failed with status:`,g,"response text:",l.getResponseText()),g>0){let w=l.getResponseJson();Array.isArray(w)&&(w=w[0]);let D=w?.error;if(D&&D.status&&D.message){let P=function(q){let Q=q.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(Q)>=0?Q:V.UNKNOWN}(D.status);c(new W(P,D.message))}else c(new W(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new W(V.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{Bn:e,streamId:a,Ln:l.getLastErrorCode(),$n:l.getLastError()})}}finally{J(nt,`RPC '${e}' ${a} completed.`)}});let h=JSON.stringify(s);J(nt,`RPC '${e}' ${a} sending request:`,s),l.send(t,"POST",h,n,15)})}Un(e,t,n){let s=RB(),i=[this.hn,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.An(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;let l=i.join("");J(nt,`Creating RPC '${e}' stream ${s}: ${l}`,u);let h=a.createWebChannel(l,u);this.kn(h);let d=!1,g=!1,w=new PB({fn:D=>{g?J(nt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(d||(J(nt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),J(nt,`RPC '${e}' stream ${s} sending:`,D),h.send(D))},mn:()=>h.close()});return Ki(h,ns.EventType.OPEN,()=>{g||(J(nt,`RPC '${e}' stream ${s} transport opened.`),w.vn())}),Ki(h,ns.EventType.CLOSE,()=>{g||(g=!0,J(nt,`RPC '${e}' stream ${s} transport closed`),w.Cn(),this.Qn(h))}),Ki(h,ns.EventType.ERROR,D=>{g||(g=!0,St(nt,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),w.Cn(new W(V.UNAVAILABLE,"The operation could not be completed")))}),Ki(h,ns.EventType.MESSAGE,D=>{if(!g){let P=D.data[0];$(!!P,16349);let k=P,q=k?.error||k[0]?.error;if(q){J(nt,`RPC '${e}' stream ${s} received error:`,q);let Q=q.status,se=function(be){let A=Fe[be];if(A!==void 0)return nE(A)}(Q),Se=q.message;Q==="NOT_FOUND"&&Se.includes("database")&&Se.includes("does not exist")&&Se.includes(this.databaseId.database)&&St(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),se===void 0&&(se=V.INTERNAL,Se="Unknown error status: "+Q+" with message "+q.message),g=!0,w.Cn(new W(se,Se)),h.close()}else J(nt,`RPC '${e}' stream ${s} received:`,P),w.Fn(P)}}),r.Mn(),setTimeout(()=>{w.Dn()},0),w}terminate(){this.On.forEach(e=>e.close()),this.On=[]}kn(e){this.On.push(e)}Qn(e){this.On=this.On.filter(t=>t===e)}An(e,t,n){super.An(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Fl()}};function PT(r){return new yu(r)}yu.Nn=!1;var wu=class{constructor(e,t,n=1e3,s=1.5,i=6e4){this.qn=e,this.timerId=t,this.Kn=n,this.Wn=s,this.Gn=i,this.jn=0,this.zn=null,this.Hn=Date.now(),this.reset()}reset(){this.jn=0}Jn(){this.jn=this.Gn}Yn(e){this.cancel();let t=Math.floor(this.jn+this.Zn()),n=Math.max(0,Date.now()-this.Hn),s=Math.max(0,t-n);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.jn} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.zn=this.qn.enqueueAfterDelay(this.timerId,s,()=>(this.Hn=Date.now(),e())),this.jn*=this.Wn,this.jn<this.Kn&&(this.jn=this.Kn),this.jn>this.Gn&&(this.jn=this.Gn)}Xn(){this.zn!==null&&(this.zn.skipDelay(),this.zn=null)}cancel(){this.zn!==null&&(this.zn.cancel(),this.zn=null)}Zn(){return(Math.random()-.5)*this.jn}};var om="PersistentStream",Iu=class{constructor(e,t,n,s,i,a,u,c){this.qn=e,this.er=n,this.tr=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.nr=0,this.rr=null,this.ir=null,this.stream=null,this.sr=0,this._r=new wu(e,t)}ar(){return this.state===1||this.state===5||this.ur()}ur(){return this.state===2||this.state===3}start(){this.sr=0,this.state!==4?this.auth():this.cr()}async stop(){this.ar()&&await this.close(0)}lr(){this.state=0,this._r.reset()}Er(){this.ur()&&this.rr===null&&(this.rr=this.qn.enqueueAfterDelay(this.er,6e4,()=>this.hr()))}Tr(e){this.Pr(),this.stream.send(e)}async hr(){if(this.ur())return this.close(0)}Pr(){this.rr&&(this.rr.cancel(),this.rr=null)}Ir(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this.Pr(),this.Ir(),this._r.cancel(),this.nr++,e!==4?this._r.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Cn(t.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this._r.Jn()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Rr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.bn(t)}Rr(){}auth(){this.state=1;let e=this.Ar(this.nr),t=this.nr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.nr===t&&this.Vr(n,s)},n=>{e(()=>{let s=new W(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.dr(s)})})}Vr(e,t){let n=this.Ar(this.nr);this.stream=this.mr(e,t),this.stream.pn(()=>{n(()=>this.listener.pn())}),this.stream.yn(()=>{n(()=>(this.state=2,this.ir=this.qn.enqueueAfterDelay(this.tr,1e4,()=>(this.ur()&&(this.state=3),Promise.resolve())),this.listener.yn()))}),this.stream.bn(s=>{n(()=>this.dr(s))}),this.stream.onMessage(s=>{n(()=>++this.sr==1?this.pr(s):this.onNext(s))})}cr(){this.state=5,this._r.Yn(async()=>{this.state=0,this.start()})}dr(e){return J(om,`close with error: ${e}`),this.stream=null,this.close(4,e)}Ar(e){return t=>{this.qn.enqueueAndForget(()=>this.nr===e?t():(J(om,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},NB=class extends Iu{constructor(e,t,n,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}mr(e,t){return this.connection.Un("Listen",e,t)}pr(e){return this.onNext(e)}onNext(e){this._r.reset();let t=mT(this.serializer,e),n=function(i){if(!("targetChange"in i))return ne.min();let a=i.targetChange;return a.targetIds&&a.targetIds.length?ne.min():a.readTime?en(a.readTime):ne.min()}(e);return this.listener.gr(t,n)}yr(e){let t={};t.database=DB(this.serializer),t.addTarget=function(i,a){let u,c=a.target;if(u=yr(c)?{pipelineQuery:TT(i,c)}:eE(c)?{documents:yT(i,c)}:{query:wT(i,c).Lt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=wB(i,a.resumeToken);let l=yB(i,a.expectedCount);l!==null&&(u.expectedCount=l)}else if(a.snapshotVersion.compareTo(ne.min())>0){u.readTime=Yi(i,a.snapshotVersion.toTimestamp());let l=yB(i,a.expectedCount);l!==null&&(u.expectedCount=l)}return u}(this.serializer,e);let n=DT(this.serializer,e);n&&(t.labels=n),this.Tr(t)}wr(e){let t={};t.database=DB(this.serializer),t.removeTarget=e,this.Tr(t)}},OB=class extends Iu{constructor(e,t,n,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}get br(){return this.sr>0}start(){this.lastStreamToken=void 0,super.start()}Rr(){this.br&&this.Sr([])}mr(e,t){return this.connection.Un("Write",e,t)}pr(e){return $(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$(!e.writeResults||e.writeResults.length===0,55816),this.listener.vr()}onNext(e){$(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this._r.reset();let t=_T(e.writeResults,e.commitTime),n=en(e.commitTime);return this.listener.Dr(n,t)}Cr(){let e={};e.database=DB(this.serializer),this.Tr(e)}Sr(e){let t={streamToken:this.lastStreamToken,writes:e.map(n=>ET(this.serializer,n))};this.Tr(t)}};var xB=class{},FB=class extends xB{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.Fr=!1}Or(){if(this.Fr)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}In(e,t,n,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.In(e,IB(t,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(V.UNKNOWN,i.toString())})}dn(e,t,n,s,i){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.dn(e,IB(t,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(V.UNKNOWN,a.toString())})}terminate(){this.Fr=!0,this.connection.terminate()}};function NT(r,e,t,n){return new FB(r,e,t,n)}var OT="ComponentProvider",um=new Map;function xT(r,e,t,n,s){return new eB(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,pE(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n,s._customHeaders,s.grpcFlowControlWindow)}var cm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gE=41943040,Rt=class r{static withCacheSize(e){return new r(e,r.DEFAULT_COLLECTION_PERCENTILE,r.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}};Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(gE,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);var ks=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.Mr(n),this.Nr=n=>t.writeSequenceNumber(n))}Mr(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.Nr&&this.Nr(e),e}};ks.Br=-1;var FT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",LB=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function $s(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==FT)throw r;J("LocalStore","Unexpectedly lost primary lease")}var G=class r{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new r((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof r?t:r.resolve(t)}catch(t){return r.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):r.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):r.reject(t)}static resolve(e){return new r((t,n)=>{t(e)})}static reject(e){return new r((t,n)=>{n(e)})}static waitFor(e){return new r((t,n)=>{let s=0,i=0,a=!1;e.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&t()},c=>n(c))}),a=!0,i===s&&t()})}static or(e){let t=r.resolve(!1);for(let n of e)t=t.next(s=>s?r.resolve(s):n());return t}static forEach(e,t){let n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new r((n,s)=>{let i=e.length,a=new Array(i),u=0;for(let c=0;c<i;c++){let l=c;t(e[l]).next(h=>{a[l]=h,++u,u===i&&n(a)},h=>s(h))}})}static doWhile(e,t){return new r((n,s)=>{let i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}};function LT(r){let e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ys(r){return r.name==="IndexedDbTransactionError"}var lm="LruGarbageCollector",kT=1048576;function Bm([r,e],[t,n]){let s=oe(r,t);return s===0?oe(e,n):s}var kB=class{constructor(e){this.ai=e,this.buffer=new Ue(Bm),this.ui=0}ci(){return++this.ui}li(e){let t=[e,this.ci()];if(this.buffer.size<this.ai)this.buffer=this.buffer.add(t);else{let n=this.buffer.last();Bm(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}},VB=class{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ei=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.hi(6e4)}stop(){this.Ei&&(this.Ei.cancel(),this.Ei=null)}get started(){return this.Ei!==null}hi(e){J(lm,`Garbage collection scheduled in ${e}ms`),this.Ei=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ei=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ys(t)?J(lm,"Ignoring IndexedDB error during garbage collection: ",t):await $s(t)}await this.hi(3e5)})}},MB=class{constructor(e,t){this.Ti=e,this.params=t}calculateTargetCount(e,t){return this.Ti.Pi(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return G.resolve(ks.Br);let n=new kB(t);return this.Ti.forEachTarget(e,s=>n.li(s.sequenceNumber)).next(()=>this.Ti.Ii(e,s=>n.li(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Ti.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Ti.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(cm)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cm):this.Ri(e,t))}getCacheSize(e){return this.Ti.getCacheSize(e)}Ri(e,t){let n,s,i,a,u,c,l,h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,a=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(n=d,u=Date.now(),this.removeTargets(e,n,t))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(d=>(l=Date.now(),ss()<=ue.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-h}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${d} documents in `+(l-c)+`ms
Total Duration: ${l-h}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}};function VT(r,e){return new MB(r,e)}var CE="firestore.googleapis.com",hm=!0,Du=class{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=CE,this.ssl=hm}else this.host=e.host,this.ssl=e.ssl??hm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=gE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kT)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(bm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pE(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new W(V.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(n,s){if(n===s)return!0;if(!n||!s)return!1;let i=Object.keys(n),a=Object.keys(s);if(i.length!==a.length)return!1;for(let u of i)if(n[u]!==s[u])return!1;return!0}(this._customHeaders,e._customHeaders)}},ed=class{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Du({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Du(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new gu;switch(n.type){case"firstParty":return new bB(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let n=um.get(t);n&&(J(OT,"Removing Datastore"),um.delete(t),n.terminate())}(this),Promise.resolve()}};function mE(r,e,t,n={}){r=Qs(r,ed);let s=sr(e),i=r._getSettings(),a={...i,emulatorOptions:r._getEmulatorOptions()},u=`${e}:${t}`;s&&Xa(`https://${u}`),i.host!==CE&&i.host!==u&&St("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let c={...i,host:u,ssl:s,emulatorOptions:n};if(!Ot(c,a)&&(r._setSettings(c),n.mockUserToken)){let l,h;if(typeof n.mockUserToken=="string")l=n.mockUserToken,h=ze.MOCK_USER;else{l=bp(n.mockUserToken,r._app?.options.projectId);let d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new ze(d)}r._authCredentials=new TB(new pu(l,h))}}var Tu=class r{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new r(this.firestore,e,this._query)}},Ye=class r{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new r(this.firestore,e,this._key)}toJSON(){return{type:r._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(va(t,r._jsonSchema))return new r(e,n||null,new ee(_e.fromString(t.referencePath)))}};Ye._jsonSchemaVersion="firestore/documentReference/1.0",Ye._jsonSchema={type:xe("string",Ye._jsonSchemaVersion),referencePath:xe("string")};var Vs=class r extends Tu{constructor(e,t,n){super(e,t,ec(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Ye(this.firestore,null,new ee(e))}withConverter(e){return new r(this.firestore,e,this._path)}};function rc(r,e,...t){if(r=ot(r),arguments.length===1&&(e=ps.newId()),VD("doc","path",e),r instanceof ed){let n=_e.fromString(e,...t);return MC(n),new Ye(r,null,new ee(n))}{if(!(r instanceof Ye||r instanceof Vs))throw new W(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=r._path.child(_e.fromString(e,...t));return MC(n),new Ye(r.firestore,r instanceof Vs?r.converter:null,new ee(n))}}var Ms=class{constructor(e,t){this.pattern=e,this.options=t}isEqual(e){return this.pattern===e.pattern&&this.options===e.options}};var Dt=class r{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:r._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(va(e,r._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new r(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};Dt._jsonSchemaVersion="firestore/vectorValue/1.0",Dt._jsonSchema={type:xe("string",Dt._jsonSchemaVersion),vectorValues:xe("object")};var MT=/^__.*__$/,GB=class{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new yn(e,this.data,this.fieldMask,t,this.fieldTransforms):new xr(e,this.data,t,this.fieldTransforms)}};function EE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{dataSource:r})}}var UB=class r{constructor(e,t,n,s,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new r({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){let t=this.path?.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){let t=this.path?.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Au(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(EE(this.dataSource)&&MT.test(e))throw this.createError('Document fields cannot begin and end with "__"')}},HB=class{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||nc(e)}createContext(e,t,n,s=!1){return new UB({dataSource:e,methodName:t,targetDoc:n,path:ft.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function _E(r){let e=r._freezeSettings(),t=nc(r._databaseId);return new HB(r._databaseId,!!e.ignoreUndefinedProperties,t)}function yE(r,e,t,n,s,i={}){let a=r.createContext(i.merge||i.mergeFields?2:0,e,t,s);TE("Data must be an object, but it was:",a,n);let u=wE(n,a),c,l;if(i.merge)c=new Wt(a.fieldMask),l=a.fieldTransforms;else if(i.mergeFields){let h=[];for(let d of i.mergeFields){let g=Pa(e,d,t);if(!a.contains(g))throw new W(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);UT(h,g)||h.push(g)}c=new Wt(h),l=a.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,l=a.fieldTransforms;return new GB(new wt(u),c,l)}var qB=class r extends Fs{_toFieldTransform(e){return new iB(e.path,new Sr)}isEqual(e){return e instanceof r}};function ha(r,e,t){if(DE(r=ot(r)))return TE("Unsupported field value:",e,r),wE(r,e);if(r instanceof Fs)return function(s,i){if(!EE(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);let a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){let a=[],u=0;for(let c of s){let l=ha(c,i.childContextForArray(u));l==null&&(l={nullValue:"NULL_VALUE"}),a.push(l),u++}return{arrayValue:{values:a}}}(r,e)}return function(s,i,a){if((s=ot(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return $f(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){let u=ve.fromDate(s);return{timestampValue:Yi(i.serializer,u)}}if(s instanceof ve){let u=new ve(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Yi(i.serializer,u)}}if(IE(s)){let u=ve.fromInstant(s),c=new ve(u.seconds,1e3*Math.floor(u.nanoseconds/1e3));return{timestampValue:Yi(i.serializer,c)}}if(s instanceof pn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof tn)return s.subtype===0?{bytesValue:wB(i.serializer,s._byteString)}:function(c,l){let h=l.toUint8Array(),d=new Uint8Array(h.length+1);return d[0]=l.subtype,d.set(h,1),{mapValue:{fields:{[ws]:{bytesValue:wB(c,Ae.fromUint8Array(d))}}}}}(i.serializer,s);if(s instanceof Ye){let u=i.databaseId,c=s.firestore._databaseId;if(!c.isEqual(u))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Zf(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Dt)return function(c,l){let h=c instanceof Dt?c.toArray():c;return{mapValue:{fields:{[Xu]:{stringValue:Zu},[vr]:{arrayValue:{values:h.map(g=>{if(typeof g!="number")throw l.createError("VectorValues must only contain numeric values.");return Qf(l.serializer,g)})}}}}}}(s,i);if(s instanceof Ms)return function(c){return{mapValue:{fields:{[Qt]:{mapValue:{fields:{[_s]:{stringValue:c.pattern},[ys]:{stringValue:c.options}}}}}}}}(s);if(s instanceof Ps)return function(c){return{mapValue:{fields:{[Rr]:{stringValue:c.value}}}}}(s);if(s instanceof Ls)return function(c){return{mapValue:{fields:{[Yn]:Bs(c.value)}}}}(s);if(s instanceof Os)return function(c){return{mapValue:{fields:{[En]:{stringValue:c.stringValue}}}}}(s);if(s instanceof Ns)return function(c){return{mapValue:{fields:{[dn]:{mapValue:{fields:{[ta]:Bs(c.seconds),[na]:Bs(c.increment)}}}}}}}(s);if(s instanceof Mr)return function(){return{mapValue:{fields:{[zf]:{nullValue:"NULL_VALUE"}}}}}();if(s instanceof Vr)return function(){return{mapValue:{fields:{[Sa]:{nullValue:"NULL_VALUE"}}}}}();if(hE(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Qu(s)}`)}(r,e)}function wE(r,e){let t={};return Am(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kr(r,(n,s)=>{let i=ha(s,e.childContextForField(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function IE(r){if(typeof r!="object"||r===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&r instanceof Temporal.Instant)return!0;let e=r;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function DE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ve||r instanceof pn||r instanceof tn||r instanceof Ye||r instanceof Fs||r instanceof Dt||r instanceof Mr||r instanceof Vr||r instanceof Ls||r instanceof Os||r instanceof Ms||r instanceof Ps||r instanceof Ns||IE(r)||hE(r))}function TE(r,e,t){if(!DE(t)||!ba(t)){let n=Qu(t);throw n==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+n)}}function Pa(r,e,t){if((e=ot(e))instanceof xs)return e._internalPath;if(typeof e=="string")return AE(r,e);throw Au("Field path arguments must be of type string or ",r,!1,void 0,t)}var GT=new RegExp("[~\\*/\\[\\]]");function AE(r,e,t){if(e.search(GT)>=0)throw Au(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new xs(...e.split("."))._internalPath}catch{throw Au(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Au(r,e,t,n,s){let i=n&&!n.isEmpty(),a=s!==void 0,u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${n}`),a&&(c+=` in document ${s}`),c+=")"),new W(V.INVALID_ARGUMENT,u+r+c)}function UT(r,e){return r.some(t=>t.isEqual(e))}function HT(r){return typeof r._readUserData=="function"}var st=class r{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){let n=wt.empty();for(let s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){let i=this.optionDefinitions[s];if(s in e){let a=e[s],u;i.nestedOptions&&ba(a)?u={mapValue:{fields:new r(i.nestedOptions).getOptionsProto(t,a)}}:a&&(u=ha(a,t)??void 0),u&&n.set(ft.fromServerFormat(i.serverName),u)}}return n}getOptionsProto(e,t,n){let s=this._getKnownOptions(t,e);if(n){let i=new Map(Tm(n,(a,u)=>[ft.fromServerFormat(u),a!==void 0?ha(a,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}};function qT(r){return typeof r=="object"&&r!==null&&!!("nullValue"in r&&(r.nullValue===null||r.nullValue==="NULL_VALUE")||"booleanValue"in r&&(r.booleanValue===null||typeof r.booleanValue=="boolean")||"integerValue"in r&&(r.integerValue===null||typeof r.integerValue=="number"||typeof r.integerValue=="string")||"doubleValue"in r&&(r.doubleValue===null||typeof r.doubleValue=="number")||"timestampValue"in r&&(r.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(r.timestampValue))||"stringValue"in r&&(r.stringValue===null||typeof r.stringValue=="string")||"bytesValue"in r&&(r.bytesValue===null||r.bytesValue instanceof Uint8Array)||"referenceValue"in r&&(r.referenceValue===null||typeof r.referenceValue=="string")||"geoPointValue"in r&&(r.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(r.geoPointValue))||"arrayValue"in r&&(r.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(r.arrayValue))||"mapValue"in r&&(r.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!ba(t.fields))}(r.mapValue))||"fieldReferenceValue"in r&&(r.fieldReferenceValue===null||typeof r.fieldReferenceValue=="string")||"functionValue"in r&&(r.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(r.functionValue))||"pipelineValue"in r&&(r.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(r.pipelineValue)))}function td(){return new qB("serverTimestamp")}function bE(r){return new Dt(r)}function H(r){let e;return r instanceof In?r:(e=ba(r)?JT(r):r instanceof Array?zT(r):vE(r,void 0),e)}function $l(r){if(r instanceof In)return r;if(r instanceof Dt)return fa(r);if(Array.isArray(r))return fa(bE(r));throw new Error("Unsupported value: "+typeof r)}function nd(r){return UD(r)?jT(r):H(r)}var In=class{constructor(){this._protoValueType="ProtoValue"}add(e){return new x("add",[this,H(e)],"add")}asBoolean(){if(this instanceof Kn)return this;if(this instanceof Gs)return new vu(this);if(this instanceof Gr)return new JB(this);if(this instanceof x)return new bu(this);throw new W("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new x("subtract",[this,H(e)],"subtract")}multiply(e){return new x("multiply",[this,H(e)],"multiply")}divide(e){return new x("divide",[this,H(e)],"divide")}mod(e){return new x("mod",[this,H(e)],"mod")}equal(e){return new x("equal",[this,H(e)],"equal").asBoolean()}notEqual(e){return new x("not_equal",[this,H(e)],"notEqual").asBoolean()}lessThan(e){return new x("less_than",[this,H(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new x("less_than_or_equal",[this,H(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new x("greater_than",[this,H(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new x("greater_than_or_equal",[this,H(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){let n=[e,...t].map(s=>H(s));return new x("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new x("array_contains",[this,H(e)],"arrayContains").asBoolean()}arrayContainsAll(e){let t=Array.isArray(e)?new Ir(e.map(H),"arrayContainsAll"):e;return new x("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){let t=Array.isArray(e)?new Ir(e.map(H),"arrayContainsAny"):e;return new x("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new x("array_reverse",[this])}arrayLength(){return new x("array_length",[this],"arrayLength")}equalAny(e){let t=Array.isArray(e)?new Ir(e.map(H),"equalAny"):e;return new x("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){let t=Array.isArray(e)?new Ir(e.map(H),"notEqualAny"):e;return new x("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new x("exists",[this],"exists").asBoolean()}charLength(){return new x("char_length",[this],"charLength")}like(e){return new x("like",[this,H(e)],"like").asBoolean()}regexContains(e){return new x("regex_contains",[this,H(e)],"regexContains").asBoolean()}regexFind(e){return new x("regex_find",[this,H(e)],"regexFind")}regexFindAll(e){return new x("regex_find_all",[this,H(e)],"regexFindAll")}regexMatch(e){return new x("regex_match",[this,H(e)],"regexMatch").asBoolean()}stringContains(e){return new x("string_contains",[this,H(e)],"stringContains").asBoolean()}startsWith(e){return new x("starts_with",[this,H(e)],"startsWith").asBoolean()}endsWith(e){return new x("ends_with",[this,H(e)],"endsWith").asBoolean()}toLower(){return new x("to_lower",[this],"toLower")}toUpper(){return new x("to_upper",[this],"toUpper")}trim(e){let t=[this];return e&&t.push(H(e)),new x("trim",t,"trim")}ltrim(e){let t=[this];return e&&t.push(H(e)),new x("ltrim",t,"ltrim")}rtrim(e){let t=[this];return e&&t.push(H(e)),new x("rtrim",t,"rtrim")}type(){return new x("type",[this])}isType(e){return new x("is_type",[this,fa(e)],"isType").asBoolean()}stringConcat(e,...t){let n=[e,...t].map(H);return new x("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new x("string_index_of",[this,H(e)],"stringIndexOf")}stringRepeat(e){return new x("string_repeat",[this,H(e)],"stringRepeat")}stringReplaceAll(e,t){return new x("string_replace_all",[this,H(e),H(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new x("string_replace_one",[this,H(e),H(t)],"stringReplaceOne")}concat(e,...t){let n=[e,...t].map(H);return new x("concat",[this,...n],"concat")}reverse(){return new x("reverse",[this],"reverse")}arrayFilter(e,t){return new x("array_filter",[this,H(e),t],"arrayFilter")}arrayTransform(e,t){return new x("array_transform",[this,H(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new x("array_transform",[this,H(e),H(t),n],"arrayTransformWithIndex")}arraySlice(e,t){let n=[this,H(e)];return t!==void 0&&n.push(H(t)),new x("array_slice",n,"arraySlice")}arrayFirst(){return new x("array_first",[this],"arrayFirst")}arrayFirstN(e){return new x("array_first_n",[this,H(e)],"arrayFirstN")}arrayLast(){return new x("array_last",[this],"arrayLast")}arrayLastN(e){return new x("array_last_n",[this,H(e)],"arrayLastN")}arrayMaximum(){return new x("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new x("maximum_n",[this,H(e)],"arrayMaximumN")}arrayMinimum(){return new x("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new x("minimum_n",[this,H(e)],"arrayMinimumN")}arrayIndexOf(e){return new x("array_index_of",[this,H(e),H("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new x("array_index_of",[this,H(e),H("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new x("array_index_of_all",[this,H(e)],"arrayIndexOfAll")}byteLength(){return new x("byte_length",[this],"byteLength")}ceil(){return new x("ceil",[this])}floor(){return new x("floor",[this])}abs(){return new x("abs",[this])}exp(){return new x("exp",[this])}mapGet(e){return new x("map_get",[this,fa(e)],"mapGet")}mapSet(e,t,...n){let s=[this,H(e),H(t),...n.map(H)];return new x("map_set",s,"mapSet")}mapKeys(){return new x("map_keys",[this],"mapKeys")}mapValues(){return new x("map_values",[this],"mapValues")}mapEntries(){return new x("map_entries",[this],"mapEntries")}getField(e){return new x("get_field",[this,H(e)],"get_field")}count(){return yt._create("count",[this],"count")}sum(){return yt._create("sum",[this],"sum")}average(){return yt._create("average",[this],"average")}minimum(){return yt._create("minimum",[this],"minimum")}maximum(){return yt._create("maximum",[this],"maximum")}first(){return yt._create("first",[this],"first")}last(){return yt._create("last",[this],"last")}arrayAgg(){return yt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return yt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return yt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){let n=[e,...t];return new x("maximum",[this,...n.map(H)],"logicalMaximum")}logicalMinimum(e,...t){let n=[e,...t];return new x("minimum",[this,...n.map(H)],"minimum")}vectorLength(){return new x("vector_length",[this],"vectorLength")}cosineDistance(e){return new x("cosine_distance",[this,$l(e)],"cosineDistance")}dotProduct(e){return new x("dot_product",[this,$l(e)],"dotProduct")}euclideanDistance(e){return new x("euclidean_distance",[this,$l(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new x("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new x("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new x("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new x("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new x("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new x("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new x("timestamp_add",[this,H(e),H(t)],"timestampAdd")}timestampSubtract(e,t){return new x("timestamp_subtract",[this,H(e),H(t)],"timestampSubtract")}timestampDiff(e,t){return new x("timestamp_diff",[this,nd(e),H(t)],"timestampDiff")}timestampExtract(e,t){let n=[this,H(e)];return t&&n.push(H(t)),new x("timestamp_extract",n,"timestampExtract")}documentId(){return new x("document_id",[this],"documentId")}parent(){return new x("parent",[this],"parent")}substring(e,t){let n=H(e);return new x("substring",t===void 0?[this,n]:[this,n,H(t)],"substring")}arrayGet(e){return new x("array_get",[this,H(e)],"arrayGet")}isError(){return new x("is_error",[this],"isError").asBoolean()}ifError(e){let t=new x("if_error",[this,H(e)],"ifError");return e instanceof Kn?t.asBoolean():t}isAbsent(){return new x("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new x("map_remove",[this,H(e)],"mapRemove")}mapMerge(e,...t){let n=H(e),s=t.map(H);return new x("map_merge",[this,n,...s],"mapMerge")}pow(e){return new x("pow",[this,H(e)])}trunc(e){return e===void 0?new x("trunc",[this]):new x("trunc",[this,H(e)],"trunc")}round(e){return e===void 0?new x("round",[this]):new x("round",[this,H(e)],"round")}collectionId(){return new x("collection_id",[this])}length(){return new x("length",[this])}ln(){return new x("ln",[this])}sqrt(){return new x("sqrt",[this])}stringReverse(){return new x("string_reverse",[this])}ifAbsent(e){return new x("if_absent",[this,H(e)],"ifAbsent")}ifNull(e){return new x("if_null",[this,H(e)],"ifNull")}coalesce(e,...t){return new x("coalesce",[this,H(e),...t.map(H)],"coalesce")}join(e){return new x("join",[this,H(e)],"join")}log10(){return new x("log10",[this])}arraySum(){return new x("sum",[this])}split(e){return new x("split",[this,H(e)])}timestampTruncate(e,t){let n=[this,H(e)];return t&&n.push(H(t)),new x("timestamp_trunc",n)}ascending(){return WT(this)}descending(){return QT(this)}as(e){return new KB(this,e,"as")}},yt=class r{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){let s=new r(e,t);return s._methodName=n,s}as(e){return new jB(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}},jB=class{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}},KB=class{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}},Ir=class extends In{constructor(e,t){super(),this.di=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.di.map(t=>t._toProto(e))}}}_readUserData(e){this.di.forEach(t=>t._readUserData(e))}},Gr=class extends In{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new x("geo_distance",[this,H(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}};function jT(r){return KT(r,"field")}function KT(r,e){return new Gr(typeof r=="string"?Cs===r?dE()._internalPath:Pa("field",r):r._internalPath,e)}var Gs=class r extends In{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){let t=new r(e,void 0);return t._protoValue=e,t}_toProto(e){return $(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,qT(this._protoValue)||(this._protoValue=ha(this.value,e))}};function fa(r,e){return vE(r,"constant")}function vE(r,e){let t=new Gs(r,e);return typeof r=="boolean"?new vu(t):t}var x=class extends In{constructor(e,t,n,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,n!==void 0&&(this._methodName=n),s!==void 0&&(this._options=s)}get _optionsUtil(){return new st({})}_toProto(e){let t={functionValue:{name:this.name,args:this.params.map(n=>n._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}},Kn=class r extends In{get _methodName(){return this._expr._methodName}countIf(){return yt._create("count_if",[this],"countIf")}not(){return new x("not",[this],"not").asBoolean()}conditional(e,t){return new x("conditional",[this,e,t],"conditional")}ifError(e){let t=H(e),n=new x("if_error",[this,t],"ifError");return t instanceof r?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}},bu=class extends Kn{constructor(e){super(),this._expr=e,this.expressionType="Function"}},vu=class extends Kn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}},JB=class extends Kn{constructor(e){super(),this._expr=e,this.expressionType="Field"}};function JT(r,e){let t=[];for(let n in r)if(Object.prototype.hasOwnProperty.call(r,n)){let s=r[n];t.push(fa(n)),t.push(H(s))}return new x("map",t,"map")}function zT(r){return function(t,n){return new x("array",t.map(s=>H(s)),n)}(r,"array")}function WT(r){return new Ru(nd(r),"ascending","ascending")}function QT(r){return new Ru(nd(r),"descending","descending")}var Ru=class{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:fE(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}};var ct=class{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}},Su=class extends ct{get _name(){return"add_fields"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Ba(e,this.fields)]}}_readUserData(e){super._readUserData(e),Jn(this.fields,e)}};var Pu=class extends ct{get _name(){return"aggregate"}get _optionsUtil(){return new st({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Ba(e,this.accumulators),Ba(e,this.groups)]}}_readUserData(e){super._readUserData(e),Jn(this.groups,e),Jn(this.accumulators,e)}},Nu=class extends ct{get _name(){return"distinct"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Ba(e,this.groups)]}}_readUserData(e){super._readUserData(e),Jn(this.groups,e)}},Us=class extends ct{get _name(){return"collection"}get _optionsUtil(){return new st({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.pi=$T(e)}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.pi}]}}_readUserData(e){super._readUserData(e)}},Hs=class extends ct{get _name(){return"collection_group"}get _optionsUtil(){return new st({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}};var da=class extends ct{get _name(){return"database"}get _optionsUtil(){return new st({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}},pa=class extends ct{get _name(){return"documents"}get _optionsUtil(){return new st({})}constructor(e,t){if(super(t),!e||e.length===0)throw new W(V.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");let n=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(n);if(s.size!==n.length)throw new W(V.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.gi=n,this.yi=s}_toProto(e){return{...super._toProto(e),args:this.gi.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}};var ga=class extends ct{get _name(){return"where"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Jn(this.condition,e)}};var Ur=class extends ct{get _name(){return"limit"}get _optionsUtil(){return new st({})}constructor(e,t){$(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[$f(e,this.limit)]}}},Ou=class extends ct{get _name(){return"offset"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[$f(e,this.offset)]}}},zB=class extends ct{get _name(){return"select"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Ba(e,this.selections)]}}_readUserData(e){super._readUserData(e),Jn(this.selections,e)}},Ca=class extends ct{get _name(){return"sort"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),Jn(this.orderings,e)}};var WB=class r extends ct{get _name(){return"replace_with"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),fE(r.bi)]}}_readUserData(e){super._readUserData(e),Jn(this.map,e)}};WB.bi="full_replace";function $T(r){let e=typeof r=="string"?r:r.path;return e.startsWith("/")?e:"/"+e}function Jn(r,e){return HT(r)?r._readUserData(e):Array.isArray(r)?r.forEach(t=>t._readUserData(e)):r instanceof Map?r.forEach(t=>t._readUserData(e)):Object.values(r).forEach(t=>t._readUserData(e)),r}var rt=class{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return sc(this)}getPipelineCollectionGroup(){return rd(this)}getPipelineCollectionId(){return YT(this)}getPipelineDocuments(){return QB(this)}getPipelineFlavor(){return function(t){let n="exact";return t.stages.forEach((s,i)=>{s._name!==Nu.name&&s._name!==Pu.name||(n="keyless"),s._name===zB.name&&n==="exact"&&(n="augmented"),s._name===Su.name&&i<t.stages.length-1&&n==="exact"&&(n="augmented")}),n}(this)}getPipelineSourceType(){return Un(this)}};function Un(r){let e=r.stages[0];return e instanceof Us||e instanceof Hs||e instanceof da||e instanceof pa?e._name:"unknown"}function sc(r){if(Un(r)==="collection")return r.stages[0].pi}function rd(r){if(Un(r)==="collection_group")return r.stages[0].collectionId}function YT(r){switch(Un(r)){case"collection":return _e.fromString(sc(r)).lastSegment();case"collection_group":return rd(r);default:return}}function QB(r){if(Un(r)==="documents")return r.stages[0].gi}var b=class r{constructor(e,t){this.type=e,this.value=t}static Oi(){return new r("ERROR",void 0)}static Mi(){return new r("UNSET",void 0)}static Ni(){return new r("NULL",Is)}static newValue(e){return It(e)?new r("NULL",Is):function(n){return!!n&&"booleanValue"in n}(e)?new r("BOOLEAN",e):$t(e)?new r("INT",e):Yt(e)?new r("DOUBLE",e):function(n){return!!n&&"timestampValue"in n&&!!n.timestampValue}(e)?new r("TIMESTAMP",e):function(n){return!!n&&"stringValue"in n}(e)?new r("STRING",e):function(n){return!!n&&"bytesValue"in n}(e)?new r("BYTES",e):e.referenceValue?new r("REFERENCE",e):e.geoPointValue?new r("GEO_POINT",e):Ts(e)?new r("ARRAY",e):rB(e)?new r("VECTOR",e):Dr(e)?new r("MAP",e):new r("ERROR",void 0)}Bi(){return this.type==="ERROR"||this.type==="UNSET"}Li(){return this.type==="NULL"}};function Xi(r){if(!r.Bi())return r.value}function RE(r){return r instanceof Kn?r._expr:r}function te(r){if((r=RE(r))instanceof Gr)return new $B(r);if(r instanceof Gs)return new YB(r);if(r instanceof Ir)return new XB(r);if(r instanceof x){if(r.name==="add")return new ZB(r);if(r.name==="subtract")return new eh(r);if(r.name==="multiply")return new th(r);if(r.name==="divide")return new nh(r);if(r.name==="mod")return new rh(r);if(r.name==="and")return new sh(r);if(r.name==="equal")return new Ch(r);if(r.name==="not_equal")return new mh(r);if(r.name==="less_than")return new Eh(r);if(r.name==="less_than_or_equal")return new _h(r);if(r.name==="greater_than")return new yh(r);if(r.name==="greater_than_or_equal")return new wh(r);if(r.name==="array_concat")return new Ih(r);if(r.name==="array_reverse")return new Dh(r);if(r.name==="array_contains")return new Th(r);if(r.name==="array_contains_all")return new Ah(r);if(r.name==="array_contains_any")return new bh(r);if(r.name==="array_length")return new vh(r);if(r.name==="array_element")return new Rh(r);if(r.name==="equal_any")return new xu(r);if(r.name==="not_equal_any")return new oh(r);if(r.name==="is_nan")return new uh(r);if(r.name==="is_not_nan")return new ch(r);if(r.name==="is_null")return new lh(r);if(r.name==="is_not_null")return new Bh(r);if(r.name==="is_error")return new hh(r);if(r.name==="exists")return new fh(r);if(r.name==="not")return new qs(r);if(r.name==="or")return new ih(r);if(r.name==="xor")return new ah(r);if(r.name==="conditional")return new dh(r);if(r.name==="maximum")return new ph(r);if(r.name==="minimum")return new gh(r);if(r.name==="reverse")return new Sh(r);if(r.name==="replace_first")return new Ph(r);if(r.name==="replace_all")return new Nh(r);if(r.name==="char_length")return new Oh(r);if(r.name==="byte_length")return new xh(r);if(r.name==="like")return new Fh(r);if(r.name==="regex_contains")return new Lh(r);if(r.name==="regex_match")return new kh(r);if(r.name==="string_contains")return new Vh(r);if(r.name==="starts_with")return new Mh(r);if(r.name==="ends_with")return new Gh(r);if(r.name==="to_lower")return new Uh(r);if(r.name==="to_upper")return new Hh(r);if(r.name==="trim")return new qh(r);if(r.name==="string_concat")return new jh(r);if(r.name==="map_get")return new Kh(r);if(r.name==="cosine_distance")return new Jh(r);if(r.name==="dot_product")return new zh(r);if(r.name==="euclidean_distance")return new Wh(r);if(r.name==="vector_length")return new Qh(r);if(r.name==="unix_micros_to_timestamp")return new $h(r);if(r.name==="timestamp_to_unix_micros")return new Zh(r);if(r.name==="unix_millis_to_timestamp")return new Yh(r);if(r.name==="timestamp_to_unix_millis")return new ef(r);if(r.name==="unix_seconds_to_timestamp")return new Xh(r);if(r.name==="timestamp_to_unix_seconds")return new tf(r);if(r.name==="timestamp_add")return new nf(r);if(r.name==="timestamp_subtract")return new rf(r)}throw new Error(`Unknown Expr : ${r}`)}var $B=class{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Cs)return b.newValue({referenceValue:du(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return b.newValue({timestampValue:nu(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return b.newValue({timestampValue:nu(e.serializer,t.createTime)});let n=t.data.field(this.expr._fieldPath);return n?$u(n)?b.newValue(function(i,a){if(i.serverTimestampBehavior==="estimate")return{timestampValue:nu(i.serializer,ne.fromTimestamp(ms(a)))};if(i.serverTimestampBehavior==="previous"){let u=Ra(a);if(u)return u}return{nullValue:"NULL_VALUE"}}(e,n)):b.newValue(n):b.Mi()}},YB=class{constructor(e){this.expr=e}evaluate(e,t){return b.newValue(this.expr._getValue())}},XB=class{constructor(e){this.expr=e}evaluate(e,t){let n=this.expr.di.map(s=>te(s).evaluate(e,t));return n.some(s=>s.Bi())?b.Oi():b.newValue({arrayValue:{values:n.map(s=>s.value)}})}};function Xe(r){return Yt(r)?Number(r.doubleValue):Number(r.integerValue)}function rn(r){return BigInt(r.integerValue)}var XT=BigInt("0x7fffffffffffffff"),ZT=-BigInt("0x8000000000000000"),Hr=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length>=2,24778);let n=te(this.expr.params[0]).evaluate(e,t),s=te(this.expr.params[1]).evaluate(e,t),i=this.$i(n,s);for(let a of this.expr.params.slice(2)){let u=te(a).evaluate(e,t);i=this.$i(i,u)}return i}$i(e,t){if(e.Bi()||t.Bi())return b.Oi();if(e.Li()||t.Li())return b.Ni();let n=e.value,s=t.value;if(!Yt(n)&&!$t(n)||!Yt(s)&&!$t(s))return b.Oi();if(Yt(n)||Yt(s)){let i=this.Ui(n,s);return i?b.newValue(i):b.Oi()}if($t(n)&&$t(s)){let i=this.ki(n,s);return i===void 0?b.Oi():typeof i=="number"?b.newValue({doubleValue:i}):i<ZT||i>XT?b.Oi():b.newValue({integerValue:`${i}`})}return b.Oi()}};function Dn(r,e){return Ve(r)!==Ve(e)?"TYPE_MISMATCH":Qe(r)||Qe(e)?"NOT_EQ":It(r)&&It(e)?"EQ":It(r)||It(e)?"NULL":Ts(r)&&Ts(e)?function(n,s){if(n.values?.length!==s.values?.length)return"NOT_EQ";let i=!1;for(let a=0;a<(n.values?.length??0);a++){let u=n.values[a],c=s.values[a];switch(Dn(u,c)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:Z(44609,{Qi:u,qi:c})}}return i?"NULL":"EQ"}(r.arrayValue,e.arrayValue):rB(r)&&rB(e)||Dr(r)&&Dr(e)?function(n,s){let i=n.fields||{},a=s.fields||{};if(br(i)!==br(a))return"NOT_EQ";let u=!1;for(let c in i)if(i.hasOwnProperty(c)){if(a[c]===void 0)return"NOT_EQ";switch(Dn(i[c],a[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":u=!0}}return u?"NULL":"EQ"}(r.mapValue,e.mapValue):function(n,s){return Pt(n,s,{be:!1,ye:!0,we:!0})}(r,e)?"EQ":"NOT_EQ"}var ZB=class extends Hr{ki(e,t){return rn(e)+rn(t)}Ui(e,t){return{doubleValue:Xe(e)+Xe(t)}}},eh=class extends Hr{constructor(e){super(e),this.expr=e}ki(e,t){return rn(e)-rn(t)}Ui(e,t){return{doubleValue:Xe(e)-Xe(t)}}},th=class extends Hr{constructor(e){super(e),this.expr=e}ki(e,t){return rn(e)*rn(t)}Ui(e,t){return{doubleValue:Xe(e)*Xe(t)}}},nh=class extends Hr{constructor(e){super(e),this.expr=e}ki(e,t){let n=rn(t);if(n!==BigInt(0))return rn(e)/n}Ui(e,t){let n=Xe(t);return n===0?{doubleValue:Es(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Xe(e)/n}}},rh=class extends Hr{constructor(e){super(e),this.expr=e}ki(e,t){let n=rn(t);if(n!==BigInt(0))return rn(e)%n}Ui(e,t){let n=Xe(t);if(n!==0)return{doubleValue:Xe(e)%n}}},sh=class{constructor(e){this.expr=e}evaluate(e,t){let n=!1,s=!1;for(let i of this.expr.params){let a=te(i).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!a.value?.booleanValue)return b.newValue(We);break;case"NULL":s=!0;break;default:n=!0}}return n?b.Oi():s?b.Ni():b.newValue(dt)}},qs=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,9634);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return b.newValue({booleanValue:!n.value?.booleanValue});case"NULL":return b.Ni();default:return b.Oi()}}},ih=class{constructor(e){this.expr=e}evaluate(e,t){let n=!1,s=!1;for(let i of this.expr.params){let a=te(i).evaluate(e,t);switch(a.type){case"BOOLEAN":if(a.value?.booleanValue)return b.newValue(dt);break;case"NULL":s=!0;break;default:n=!0}}return n?b.Oi():s?b.Ni():b.newValue(We)}},ah=class r{constructor(e){this.expr=e}evaluate(e,t){let n=!1,s=!1;for(let i of this.expr.params){let a=te(i).evaluate(e,t);switch(a.type){case"BOOLEAN":n=r.xor(n,!!a.value?.booleanValue);break;case"NULL":s=!0;break;default:return b.Oi()}}return s?b.Ni():b.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}},xu=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===2,55094);let n=!1,s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return b.Oi()}let i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return b.Oi()}if(n)return b.Ni();for(let a of i.value?.arrayValue?.values??[])switch(It(s.value)&&It(a)?"EQ":Dn(s.value,a)){case"EQ":return b.newValue(dt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Z(44608,{value:s.value,candidate:a})}return n?b.Ni():b.newValue(We)}},oh=class{constructor(e){this.expr=e}evaluate(e,t){return new qs(new x("not",[new x("equal_any",this.expr.params)])).evaluate(e,t)}},uh=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,23322);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return b.newValue(We);case"DOUBLE":return b.newValue({booleanValue:isNaN(Xe(n.value))});case"NULL":return b.Ni();default:return b.Oi()}}},ch=class{constructor(e){this.expr=e}evaluate(e,t){return $(this.expr.params.length===1,50406),new qs(new x("not",[new x("is_nan",this.expr.params)])).evaluate(e,t)}},lh=class{constructor(e){this.expr=e}evaluate(e,t){switch($(this.expr.params.length===1,23123),te(this.expr.params[0]).evaluate(e,t).type){case"NULL":return b.newValue(dt);case"UNSET":case"ERROR":return b.Oi();default:return b.newValue(We)}}},Bh=class{constructor(e){this.expr=e}evaluate(e,t){return $(this.expr.params.length===1,23167),new qs(new x("not",[new x("is_null",this.expr.params)])).evaluate(e,t)}},hh=class{constructor(e){this.expr=e}evaluate(e,t){return $(this.expr.params.length===1,5228),te(this.expr.params[0]).evaluate(e,t).type==="ERROR"?b.newValue(dt):b.newValue(We)}},fh=class{constructor(e){this.expr=e}evaluate(e,t){switch($(this.expr.params.length===1,6877),te(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return b.Oi();case"UNSET":return b.newValue(We);default:return b.newValue(dt)}}},dh=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===3,11706);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return n.value?.booleanValue?te(this.expr.params[1]).evaluate(e,t):te(this.expr.params[2]).evaluate(e,t);case"NULL":return te(this.expr.params[2]).evaluate(e,t);default:return b.Oi()}}},ph=class{constructor(e){this.expr=e}evaluate(e,t){let n=this.expr.params.map(i=>te(i).evaluate(e,t)),s;for(let i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||pt(i.value,s.value)>0?i:s}return s===void 0?b.Ni():s}},gh=class{constructor(e){this.expr=e}evaluate(e,t){let n=this.expr.params.map(i=>te(i).evaluate(e,t)),s;for(let i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||pt(i.value,s.value)<0?i:s}return s===void 0?b.Ni():s}},zn=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return b.Oi()}let s=te(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return b.Oi()}return this.Ki(n,s)}},Ch=class extends zn{constructor(e){super(e),this.expr=e}Ki(e,t){if(e.Li()&&t.Li())return b.newValue(dt);if(e.Li()||t.Li()||Qe(e.value)||Qe(t.value)||Ve(e.value)!==Ve(t.value))return b.newValue(We);switch(Dn(e.value,t.value)){case"EQ":return b.newValue(dt);case"NOT_EQ":return b.newValue(We);case"NULL":return b.Ni();default:Z(44615,{left:e,right:t})}}},mh=class extends zn{constructor(e){super(e),this.expr=e}Ki(e,t){switch(Dn(e.value,t.value)){case"EQ":return b.newValue(We);case"NOT_EQ":case"TYPE_MISMATCH":return b.newValue(dt);case"NULL":return b.Ni();default:Z(44614,{left:e,right:t})}}},Eh=class extends zn{constructor(e){super(e),this.expr=e}Ki(e,t){return Ve(e.value)!==Ve(t.value)||Qe(e.value)||Qe(t.value)?b.newValue(We):b.newValue({booleanValue:pt(e.value,t.value)<0})}},_h=class extends zn{constructor(e){super(e),this.expr=e}Ki(e,t){return Ve(e.value)!==Ve(t.value)||Qe(e.value)||Qe(t.value)?b.newValue(We):Dn(e.value,t.value)==="EQ"?b.newValue(dt):b.newValue({booleanValue:pt(e.value,t.value)<0})}},yh=class extends zn{constructor(e){super(e),this.expr=e}Ki(e,t){return Ve(e.value)!==Ve(t.value)||Qe(e.value)||Qe(t.value)?b.newValue(We):b.newValue({booleanValue:pt(e.value,t.value)>0})}},wh=class extends zn{constructor(e){super(e),this.expr=e}Ki(e,t){return Ve(e.value)!==Ve(t.value)||Qe(e.value)||Qe(t.value)?b.newValue(We):Dn(e.value,t.value)==="EQ"?b.newValue(dt):b.newValue({booleanValue:pt(e.value,t.value)>0})}},Ih=class{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}},Dh=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,216);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return b.Ni();case"ARRAY":{let s=n.value.arrayValue?.values??[];return b.newValue({arrayValue:{values:[...s].reverse()}})}default:return b.Oi()}}},Th=class{constructor(e){this.expr=e}evaluate(e,t){return $(this.expr.params.length===2,52884),new xu(new x("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}},Ah=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===2,1392);let n=!1,s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return b.Oi()}let i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return b.Oi()}if(n)return b.Ni();let a=i.value?.arrayValue?.values??[],u=s.value?.arrayValue?.values??[];for(let c of a){let l=!1;n=!1;for(let h of u){switch(It(c)&&It(h)?"EQ":Dn(c,h)){case"EQ":l=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Z(44613,{value:h,search:c})}if(l)break}if(!l)return b.newValue(We)}return b.newValue(dt)}},bh=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===2,2680);let n=!1,s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return b.Oi()}let i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return b.Oi()}if(n)return b.Ni();let a=i.value?.arrayValue?.values??[],u=s.value?.arrayValue?.values??[];for(let c of u)for(let l of a)switch(It(c)&&It(l)?"EQ":Dn(c,l)){case"EQ":return b.newValue(dt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Z(60403,{value:c,search:l})}return n?b.Ni():b.newValue(We)}},vh=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,38605);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return b.Ni();case"ARRAY":return b.newValue({integerValue:`${n.value?.arrayValue?.values?.length??0}`});default:return b.Oi()}}},Rh=class{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}},Sh=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,1508);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return b.Ni();case"BYTES":{let s=n.value?.bytesValue;if(typeof s=="string"){let i=Ae.fromBase64String(s).toUint8Array();return i.reverse(),b.newValue({bytesValue:Ae.fromUint8Array(i).toBase64()})}return b.newValue({bytesValue:new Uint8Array(s).reverse()})}case"STRING":{let s=n.value?.stringValue,i=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(s),a=Array.from(i,u=>u.segment).reverse();return b.newValue({stringValue:a.join("")})}default:return b.Oi()}}},Ph=class{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}},Nh=class{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}},Oh=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,19400);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return b.Ni();case"STRING":{let s=function(a){let u=0;for(let c=0;c<a.length;c++){let l=a.codePointAt(c);if(l===void 0)return;if(l<=65535)if(l>=55296&&l<=57343)if(l<=56319){let h=a.codePointAt(c+1);h!==void 0&&h>=56320&&h<=57343?(u+=1,c++):u+=1}else u+=1;else u+=1;else{if(!(l<=1114111))return;u+=1,c++}}return u}(n.value.stringValue);return s===void 0?b.Oi():b.newValue({integerValue:s})}default:return b.Oi()}}},xh=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,8486);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{let s=n.value?.bytesValue;return typeof s=="string"?b.newValue({integerValue:Ae.fromBase64String(s).toUint8Array().length}):b.newValue({integerValue:new Uint8Array(s).length})}case"STRING":{let s=function(a){let u=0;for(let c=0;c<a.length;c++){let l=a.codePointAt(c);if(l===void 0)return;if(l>=55296&&l<=57343){if(!(l<=56319))return;{let h=a.codePointAt(c+1);if(h===void 0||!(h>=56320&&h<=57343))return;u+=4,c++}}else if(l<=127)u+=1;else if(l<=2047)u+=2;else if(l<=65535)u+=3;else{if(!(l<=1114111))return;u+=4,c++}}return u}(n.value?.stringValue);return s===void 0?b.Oi():b.newValue({integerValue:s})}case"NULL":return b.Ni();default:return b.Oi()}}},Wn=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1,s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":n=!0;break;default:return b.Oi()}let i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":n=!0;break;default:return b.Oi()}return n?b.Ni():this.Wi(s.value?.stringValue,i.value?.stringValue)}},Fh=class extends Wn{Wi(e,t){try{let n=function(a){let u="";for(let c=0;c<a.length;c++){let l=a.charAt(c);switch(l){case"_":u+=".";break;case"%":u+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":u+="\\"+l;break;default:u+=l}}return"^"+u+"$"}(t),s=Wo.compile(n);return b.newValue({booleanValue:s.matches(e)})}catch(n){return St(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${n}`),b.Oi()}}},Lh=class extends Wn{Wi(e,t){try{let n=Wo.compile(t);return b.newValue({booleanValue:n.test(e)})}catch{return St(`Invalid regex pattern found in regex_contains: ${t}, returning error`),b.Oi()}}},kh=class extends Wn{Wi(e,t){try{return b.newValue({booleanValue:Wo.compile(t).matches(e)})}catch{return St(`Invalid regex pattern found in regex_match: ${t}, returning error`),b.Oi()}}},Vh=class extends Wn{Wi(e,t){return b.newValue({booleanValue:e.includes(t)})}},Mh=class extends Wn{Wi(e,t){return b.newValue({booleanValue:e.startsWith(t)})}},Gh=class extends Wn{Wi(e,t){return b.newValue({booleanValue:e.endsWith(t)})}},Uh=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,29079);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return b.newValue({stringValue:n.value?.stringValue?.toLowerCase()});case"NULL":return b.Ni();default:return b.Oi()}}},Hh=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,60487);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return b.newValue({stringValue:n.value?.stringValue?.toUpperCase()});case"NULL":return b.Ni();default:return b.Oi()}}},qh=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,28544);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return b.newValue({stringValue:n.value?.stringValue?.trim()});case"NULL":return b.Ni();default:return b.Oi()}}},jh=class{constructor(e){this.expr=e}evaluate(e,t){let n=this.expr.params.map(a=>te(a).evaluate(e,t)),s="",i=!1;for(let a of n)switch(a.type){case"STRING":s+=a.value.stringValue;break;case"NULL":i=!0;break;default:return b.Oi()}return i?b.Ni():b.newValue({stringValue:s})}},Kh=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===2,4483);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return b.Mi();case"MAP":break;default:return b.Oi()}let s=te(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return b.Oi();let i=n.value?.mapValue?.fields?.[s.value?.stringValue];return i===void 0?b.Mi():b.newValue(i)}},ma=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1,s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":n=!0;break;default:return b.Oi()}let i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":n=!0;break;default:return b.Oi()}if(n)return b.Ni();let a=sB(s.value),u=sB(i.value);if(a===void 0||u===void 0||a.values?.length!==u.values?.length)return b.Oi();let c=this.Gi(a,u);return c===void 0||isNaN(c)?b.Oi():b.newValue({doubleValue:c})}},Jh=class extends ma{Gi(e,t){let n=e?.values??[],s=t?.values??[];if(n.length===0)return;let i=0,a=0,u=0;for(let l=0;l<n.length;l++){if(!_n(n[l])||!_n(s[l]))return;let h=Xe(n[l]),d=Xe(s[l]);i+=h*d,a+=h*h,u+=d*d}let c=Math.sqrt(a)*Math.sqrt(u);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}},zh=class extends ma{Gi(e,t){let n=e?.values??[],s=t?.values??[];if(n.length===0)return 0;let i=0;for(let a=0;a<n.length;a++){if(!_n(n[a])||!_n(s[a]))return;i+=Xe(n[a])*Xe(s[a])}return i}},Wh=class extends ma{Gi(e,t){let n=e?.values??[],s=t?.values??[];if(n.length===0)return 0;let i=0;for(let a=0;a<n.length;a++){if(!_n(n[a])||!_n(s[a]))return;let u=Xe(n[a]),c=Xe(s[a]);i+=Math.pow(u-c,2)}return Math.sqrt(i)}},Qh=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,39044);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{let s=sB(n.value);return b.newValue({integerValue:s?.values?.length??0})}case"NULL":return b.Ni();default:return b.Oi()}}},Ea=BigInt(-62135596800),_a=BigInt(253402300799),Fu=BigInt(1e3),Hn=BigInt(1e6),e0=Ea*Fu,t0=_a*Fu+BigInt(999),n0=Ea*Hn,r0=_a*Hn+BigInt(999999);function sd(r){return r>=n0&&r<=r0}function SE(r){return r>=Ea&&r<=_a}function ya(r,e){let t=BigInt(r);return!(t<Ea||t>_a)&&!(e<0||e>=1e9)&&(t!==Ea||e===0)&&!(t===_a&&e>999999999)}function PE(r,e){return e<0?{seconds:r-1,nanos:e+1e9}:{seconds:r,nanos:e}}function id(r){return BigInt(r.seconds)*Hn+BigInt(Math.trunc(r.nanoseconds/1e3))}var wa=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return b.Ni();default:return b.Oi()}}},$h=class extends wa{toTimestamp(e){if(!sd(e))return b.Oi();let t=Number(e/Hn),n=Number(e%Hn*BigInt(1e3)),s=PE(t,n);return t=s.seconds,n=s.nanos,ya(t,n)?b.newValue({timestampValue:{seconds:t,nanos:n}}):b.Oi()}},Yh=class extends wa{toTimestamp(e){if(!function(a){return a>=e0&&a<=t0}(e))return b.Oi();let t=Number(e/Fu),n=Number(e%Fu*BigInt(1e6)),s=PE(t,n);return t=s.seconds,n=s.nanos,ya(t,n)?b.newValue({timestampValue:{seconds:t,nanos:n}}):b.Oi()}},Xh=class extends wa{toTimestamp(e){if(!SE(e))return b.Oi();let t=Number(e);return b.newValue({timestampValue:{seconds:t,nanos:0}})}},Ia=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);let n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return b.Ni();default:return b.Oi()}let s=Xf(n.value.timestampValue);return ya(s.seconds,s.nanoseconds)?this.ji(s):b.Oi()}},Zh=class extends Ia{ji(e){let t=id(e);return sd(t)?b.newValue({integerValue:`${t.toString()}`}):b.Oi()}},ef=class extends Ia{ji(e){let t=id(e),n=t/BigInt(1e3),s=t%BigInt(1e3);return n>BigInt(0)||s===BigInt(0)?b.newValue({integerValue:n.toString()}):b.newValue({integerValue:(n-BigInt(1)).toString()})}},tf=class extends Ia{ji(e){let t=BigInt(e.seconds);return SE(t)?b.newValue({integerValue:t.toString()}):b.Oi()}},Lu=class{constructor(e){this.expr=e}evaluate(e,t){$(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1,s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return b.Oi()}let i=te(this.expr.params[1]).evaluate(e,t),a;switch(i.type){case"STRING":if(a=function(Q){switch(Q){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),a===void 0)return b.Oi();break;case"NULL":n=!0;break;default:return b.Oi()}let u=te(this.expr.params[2]).evaluate(e,t);switch(u.type){case"INT":break;case"NULL":n=!0;break;default:return b.Oi()}if(n)return b.Ni();let c=BigInt(u.value.integerValue),l;try{switch(a){case"microsecond":l=c;break;case"millisecond":l=c*BigInt(1e3);break;case"second":l=c*BigInt(1e6);break;case"minute":l=c*BigInt(6e7);break;case"hour":l=c*BigInt(36e8);break;case"day":l=c*BigInt(864e8);break;default:return b.Oi()}if(a!=="microsecond"&&c!==BigInt(0)&&l/c!==BigInt(this.zi(a)))return b.Oi()}catch(q){return St(`Error during timestamp arithmetic: ${q}`),b.Oi()}let h=Xf(s.value.timestampValue);if(!ya(h.seconds,h.nanoseconds))return b.Oi();let d=id(h),g=this.Hi(d,l);if(!sd(g))return b.Oi();let w=Number(g/Hn),D=g%Hn,P=Number((D<0?D+Hn:D)*BigInt(1e3)),k=D<0?w-1:w;return ya(k,P)?b.newValue({timestampValue:{seconds:k,nanos:P}}):b.Oi()}zi(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}},nf=class extends Lu{Hi(e,t){return e+t}},rf=class extends Lu{Hi(e,t){return e-t}};function Da(r){if((r=RE(r))instanceof Gr)return`fld(${r.fieldName})`;if(r instanceof Gs)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ye?`ref(${t.path})`:t instanceof Dt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(r.value)})`;if(r instanceof x)return`fn(${r.name},[${r.params.map(Da).join(",")}])`;if(r.expressionType==="ListOfExpressions")return`list([${r.di.map(Da).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(r,null,2)}`)}function s0(r){if(r instanceof Su)return`${r._name}(${Xo(r.fields)})`;if(r instanceof Pu){let e=`${r._name}(${Xo(r.accumulators)})`;return r.groups.size>0&&(e+=`grouping(${Xo(r.groups)})`),e}if(r instanceof Nu)return`${r._name}(${Xo(r.groups)})`;if(r instanceof Us)return`${r._name}(${r.pi})`;if(r instanceof Hs)return`${r._name}(${r.collectionId})`;if(r instanceof da)return`${r._name}()`;if(r instanceof pa)return`${r._name}(${r.gi.sort()})`;if(r instanceof ga)return`${r._name}(${Da(r.condition)})`;if(r instanceof Ur)return`${r._name}(${r.limit})`;if(r instanceof Ca)return`${r._name}(${function(t){return t.map(n=>`${Da(n.expr)}${n.direction}`).join(",")}(r.orderings)})`;throw new Error(`Unrecognized stage ${r._name}`)}function Xo(r){return`${Array.from(r.entries()).sort().map(([e,t])=>`${e}=${Da(t)}`).join(",")}`}function gn(r){return r.stages.map(e=>s0(e)).join("|")}function NE(r,e){return gn(r)===gn(e)}function Ge(r){return r instanceof rt}function fm(r){return Ge(r)?gn(r):Qi(r)}function OE(r){return Ge(r)?gn(r):function(t){return`${Xm(Zt(t))}|lt:${t.limitType}`}(r)}function ic(r,e){return r instanceof rt&&e instanceof rt?NE(r,e):!(r instanceof rt&&!(e instanceof rt)||!(r instanceof rt)&&e instanceof rt)&&rT(r,e)}function xE(r){return yr(r)?gn(r):Xm(r)}function FE(r,e){return r instanceof rt&&e instanceof rt?NE(r,e):!(r instanceof rt&&!(e instanceof rt)||!(r instanceof rt)&&e instanceof rt)&&Zm(r,e)}var sf=class{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){let i=this.mutations[s];i.key.isEqual(e.key)&&zD(i,e,n[s])}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=Wi(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=Wi(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=iE();return this.mutations.forEach(s=>{let i=e.get(s.key),a=i.overlayedDocument,u=this.applyToLocalView(a,i.mutatedFields);u=t.has(s.key)?null:u;let c=Km(a,u);c!==null&&n.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ne.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ce())}isEqual(e){return this.batchId===e.batchId&&gs(this.mutations,e.mutations,(t,n)=>QC(t,n))&&gs(this.baseMutations,e.baseMutations,(t,n)=>QC(t,n))}},af=class r{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){$(e.mutations.length===n.length,58842,{Ji:e.mutations.length,Yi:n.length});let s=function(){return oT}(),i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new r(e,t,n,s)}};var LE="";function i0(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=dm(e)),e=a0(r.get(t),e);return dm(e)}function a0(r,e){let t=e,n=r.length;for(let s=0;s<n;s++){let i=r.charAt(s);switch(i){case"\0":t+="";break;case LE:t+="";break;default:t+=i}}return t}function dm(r){return r+LE+""}var o0="remoteDocuments",kE="owner";var VE="mutationQueues";var ME="mutations";var GE="documentMutations",u0="remoteDocumentsV14";var UE="remoteDocumentGlobal";var HE="targets";var qE="targetDocuments";var jE="targetGlobal",KE="collectionParents";var JE="clientMetadata";var zE="bundles";var WE="namedQueries";var c0="indexConfiguration";var l0="indexState";var B0="indexEntries";var QE="documentOverlays";var h0="globals";var f0=[VE,ME,GE,o0,HE,kE,jE,qE,JE,UE,KE,zE,WE],fR=[...f0,QE],d0=[VE,ME,GE,u0,HE,kE,jE,qE,JE,UE,KE,zE,WE,QE],p0=d0,g0=[...p0,c0,l0,B0];var dR=[...g0,h0];var of=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var js=class r{constructor(e,t,n,s,i=ne.min(),a=ne.min(),u=Ae.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new r(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var uf=class{constructor(e){this.Xi=e}};function C0(r){let e=IT({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?lu(e,e.limit,"L"):e}var ku=class{constructor(){}Ts(e,t){this.Ps(e,t),t.Is()}Ps(e,t){if("nullValue"in e)this.Rs(t,5);else if("booleanValue"in e)this.Rs(t,10),t.As(e.booleanValue?1:0);else if("integerValue"in e)this.Rs(t,15),t.As(Ie(e.integerValue));else if("doubleValue"in e){let n=Ie(e.doubleValue);this.Vs(n,t)}else if("timestampValue"in e)this.ds(e.timestampValue,t);else if("stringValue"in e)this.fs(e.stringValue,t),this.ps(t);else if("bytesValue"in e)this.Rs(t,30),t.gs(Gt(e.bytesValue)),this.ps(t);else if("referenceValue"in e)this.ys(e.referenceValue,t);else if("geoPointValue"in e)this.ws(e.geoPointValue,t);else if("mapValue"in e){let n=Wf(e);if(n===le.fe)this.Rs(t,Number.MAX_SAFE_INTEGER);else if(n===le.me)this.bs(e.mapValue,t);else if(n===le.de)this.Rs(t,999);else if(n===le.Ve)this.Rs(t,7);else if(n===le.Ae){let s=e.mapValue?.fields,i=s?.[ws],a=i?.bytesValue,u=Gt(a).toUint8Array();if(u[0]===0){let c=u.slice(1);this.Rs(t,30),t.gs(Ae.fromUint8Array(c)),this.ps(t)}else this.Ss(e.mapValue,t)}else if(n===le.he)this.xs(e.mapValue,t);else if(n===le.Re)this.vs(e.mapValue,t);else if(n===le.Te)this.Ds(e.mapValue,t);else if(n===le.Pe)this.Cs(e.mapValue,t);else if(n===le.Ie){let s=parseFloat(e.mapValue.fields[En].stringValue);this.Vs(s,t)}else this.Fs(e.mapValue,t),this.ps(t)}else"arrayValue"in e?(this.Os(e.arrayValue,t),this.ps(t)):Z(19022,{Ms:e})}fs(e,t){this.Rs(t,25),this.Ns(e,t)}Ns(e,t){t.Bs(e)}Vs(e,t){isNaN(e)?this.Rs(t,13):(this.Rs(t,15),Es(e)?t.As(0):t.As(e))}Cs(e,t){this.Rs(t,15),t.As(Ie(e.fields[Yn].integerValue))}ds(e,t){this.Rs(t,20),typeof e=="string"&&(e=mn(e)),t.Bs(`${e.seconds||""}`),t.As(e.nanos||0)}ws(e,t){this.Rs(t,45),t.As(e.latitude||0),t.As(e.longitude||0)}Fs(e,t){let n=e.fields||{};this.Rs(t,55);for(let s of Object.keys(n))this.fs(s,t),this.Ps(n[s],t)}bs(e,t){let n=e.fields||{};this.Rs(t,53);let s=vr,i=n[s].arrayValue?.values?.length||0;this.Rs(t,15),t.As(Ie(i)),this.fs(s,t),this.Ps(n[s],t)}Os(e,t){let n=e.values||[];this.Rs(t,50);for(let s of n)this.Ps(s,t)}ys(e,t){this.Rs(t,37);let n=e.split("/").filter(s=>s.length>0);ee.fromSegments(n.slice(5)).path.forEach(s=>{this.Rs(t,60),this.Ns(s,t)})}Rs(e,t){e.As(t)}ps(e){e.As(2)}vs(e,t){this.Rs(t,22);let n=e.fields||{};n&&this.Fs(n[dn].mapValue,t)}Ds(e,t){this.Rs(t,43);let n=e.fields||{},s=n[Rr]?.stringValue||"";t.gs(Gt(s))}Ss(e,t){this.Rs(t,31);let n=e.fields||{},s=n[ws]?.bytesValue||"";t.gs(Gt(s)),this.ps(t)}xs(e,t){this.Rs(t,47);let n=e.fields||{},s=n[Qt]?.mapValue?.fields||{};s&&(t.Bs(s[_s]?.stringValue||""),t.Bs(s[ys]?.stringValue||"")),this.ps(t)}};ku.Ls=new ku;var cf=class{constructor(){this.d_=new lf}addToCollectionParentIndex(e,t){return this.d_.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.d_.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(kr.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(kr.min())}updateCollectionGroup(e,t,n){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}},lf=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new Ue(_e.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new Ue(_e.comparator)).toArray()}};var pR=new Uint8Array(0);var qr=class r{constructor(e){this.K_=e}next(){return this.K_+=2,this.K_}static W_(){return new r(0)}static G_(){return new r(-1)}};function $E(r,e){let t=e;for(let n of r.stages)t=E0({serializer:r.serializer,serverTimestampBehavior:r.listenOptions?.serverTimestampBehavior},n,t);return t}function ac(r,e){return $E(r,[e]).length>0}function m0(r,e){return Ge(r)?ac(r,e):tc(r,e)}function E0(r,e,t){if(e instanceof Us)return function(s,i,a){return a.filter(u=>u.isFoundDocument()&&`/${u.key.getCollectionPath().canonicalString()}`===i.pi)}(0,e,t);if(e instanceof ga)return function(s,i,a){return a.filter(u=>{let c=Xi(te(i.condition).evaluate(s,u));return c!==void 0&&Pt(c,dt)})}(r,e,t);if(e instanceof Hs)return function(s,i,a){return a.filter(u=>u.isFoundDocument()&&u.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof da)return function(s,i,a){return a.filter(u=>u.isFoundDocument())}(0,0,t);if(e instanceof pa)return function(s,i,a){return a.filter(u=>u.isFoundDocument()&&i.yi.has(u.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof Ur)return function(s,i,a){return a.slice(0,i.limit)}(0,e,t);if(e instanceof Ca)return function(s,i,a){let u=i.orderings.map(c=>({eo:te(c.expr),direction:c.direction}));return[...a].sort((c,l)=>{for(let{eo:h,direction:d}of u){let g=Xi(h.evaluate(s,c)),w=Xi(h.evaluate(s,l)),D=pt(g??Is,w??Is);if(D!==0)return d==="ascending"?D:-D}return 0})}(r,e,t);throw new Error(`Unknown stage: ${e._name}`)}function Bf(r){let e=function(n){for(let s=n.stages.length-1;s>=0;s--){let i=n.stages[s];if(i instanceof Ca)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(r);return(t,n)=>{for(let s of e){let i=Xi(te(s.expr).evaluate({serializer:r.serializer},t)),a=Xi(te(s.expr).evaluate({serializer:r.serializer},n)),u=pt(i||Is,a||Is);if(u!==0)return s.direction==="ascending"?u:-u}return 0}}function Yl(r){for(let e=r.stages.length-1;e>=0;e--){let t=r.stages[e];if(t instanceof Ur)return{limit:t.limit}}}var hf=class{constructor(){this.changes=new wn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return n!==void 0?G.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var ff=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var df=class{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Wi(n.mutation,s,Wt.empty(),ve.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,ce()).next(()=>n))}getLocalViewOfDocuments(e,t,n=ce()){let s=Vn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let a=as();return i.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let n=Vn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ce()))}populateOverlays(e,t,n){let s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,n,s){let i=ht(),a=$i(),u=function(){return $i()}();return t.forEach((c,l)=>{let h=n.get(l.key);s.has(l.key)&&(h===void 0||h.mutation instanceof yn)?i=i.insert(l.key,l):h!==void 0?(a.set(l.key,h.mutation.getFieldMask()),Wi(h.mutation,l,h.mutation.getFieldMask(),ve.now())):a.set(l.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,h)=>a.set(l,h)),t.forEach((l,h)=>u.set(l,new ff(h,a.get(l)??null))),u))}recalculateAndSaveOverlays(e,t){let n=$i(),s=new Re((a,u)=>a-u),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let u of a)u.keys().forEach(c=>{let l=t.get(c);if(l===null)return;let h=n.get(c)||Wt.empty();h=u.applyToLocalView(l,h),n.set(c,h);let d=(s.get(u.batchId)||ce()).add(c);s=s.insert(u.batchId,d)})}).next(()=>{let a=[],u=s.getReverseIterator();for(;u.hasNext();){let c=u.getNext(),l=c.key,h=c.value,d=iE();h.forEach(g=>{if(!i.has(g)){let w=Km(t.get(g),n.get(g));w!==null&&d.set(g,w),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,l,d))}return G.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return Ge(t)?this.getDocumentsMatchingPipeline(e,t,n,s):tT(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{let a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):G.resolve(Vn()),u=ua,c=i;return a.next(l=>G.forEach(l,(h,d)=>(u<d.largestBatchId&&(u=d.largestBatchId),i.get(h)?G.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{c=c.insert(h,g)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ce())).next(h=>({batchId:u,changes:sE(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next(n=>{let s=as();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){let i=t.collectionGroup,a=as();return this.indexManager.getCollectionParents(e,i).next(u=>G.forEach(u,c=>{let l=function(d,g){return new Ss(g,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,n,s).next(h=>{h.forEach((d,g)=>{a=a.insert(d,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(a=>this.retrieveMatchingLocalDocuments(i,a,u=>tc(t,u)))}getDocumentsMatchingPipeline(e,t,n,s){if(Un(t)==="collection_group"){let i=rd(t),a=as();return this.indexManager.getCollectionParents(e,i).next(u=>G.forEach(u,c=>{let l=function(d,g){let w=d.stages.map(D=>D instanceof Hs?new Us(g.canonicalString(),{}):D);return new rt(d.serializer,w)}(t,c.child(i));return this.getDocumentsMatchingPipeline(e,l,n,s).next(h=>{h.forEach((d,g)=>{a=a.insert(d,g)})})}).next(()=>a))}{let i;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next(a=>{switch(i=a,Un(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s);case"documents":let u=ce();for(let c of QB(t))u=u.add(ee.fromPath(c));return this.remoteDocumentCache.getEntries(e,u);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new W("invalid-argument",`Invalid pipeline source to execute offline: ${gn(t)}`)}}).next(a=>this.retrieveMatchingLocalDocuments(i,a,u=>ac(t,u)))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach((i,a)=>{let u=a.getKey();t.get(u)===null&&(t=t.insert(u,Ht.newInvalidDocument(u)))});let s=as();return t.forEach((i,a)=>{let u=e.get(i);u!==void 0&&Wi(u.mutation,a,Wt.empty(),ve.now()),n(a)&&(s=s.insert(i,a))}),s}getOverlaysForPipeline(e,t,n){switch(Un(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,_e.fromString(sc(t)),n);case"collection_group":throw new W("invalid-argument",`Unexpected collection group pipeline: ${gn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,QB(t).map(s=>ee.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new W("invalid-argument",`Failed to get overlays for pipeline: ${gn(t)}`)}}};var pf=class{constructor(e){this.serializer=e,this.co=new Map,this.lo=new Map}getBundleMetadata(e,t){return G.resolve(this.co.get(t))}saveBundleMetadata(e,t){return this.co.set(t.id,function(s){return{id:s.id,version:s.version,createTime:en(s.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.lo.get(t))}saveNamedQuery(e,t){return this.lo.set(t.name,function(s){return{name:s.name,query:C0(s.bundledQuery),readTime:en(s.readTime)}}(t)),G.resolve()}};var gf=class{constructor(){this.overlays=new Re(ee.comparator),this.Eo=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){let n=Vn();return G.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}getAllOverlays(e,t){let n=Vn();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&n.set(s,i)}),G.resolve(n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.Es(e,t,i)}),G.resolve()}removeOverlaysForBatchId(e,t,n){let s=this.Eo.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Eo.delete(n)),G.resolve()}getOverlaysForCollection(e,t,n){let s=Vn(),i=t.length+1,a=new ee(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){let c=u.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return G.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new Re((l,h)=>l-h),a=this.overlays.getIterator();for(;a.hasNext();){let l=a.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>n){let h=i.get(l.largestBatchId);h===null&&(h=Vn(),i=i.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}let u=Vn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,h)=>u.set(l,h)),!(u.size()>=s)););return G.resolve(u)}Es(e,t,n){let s=this.overlays.get(n.key);if(s!==null){let a=this.Eo.get(s.largestBatchId).delete(n.key);this.Eo.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new of(t,n));let i=this.Eo.get(t);i===void 0&&(i=ce(),this.Eo.set(t,i)),this.Eo.set(t,i.add(n.key))}};var Cf=class{constructor(){this.sessionToken=Ae.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}};var Ta=class{constructor(){this.ho=new Ue(Le.To),this.Po=new Ue(Le.Io)}isEmpty(){return this.ho.isEmpty()}addReference(e,t){let n=new Le(e,t);this.ho=this.ho.add(n),this.Po=this.Po.add(n)}Ro(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Ao(new Le(e,t))}Vo(e,t){e.forEach(n=>this.removeReference(n,t))}fo(e){let t=new ee(new _e([])),n=new Le(t,e),s=new Le(t,e+1),i=[];return this.Po.forEachInRange([n,s],a=>{this.Ao(a),i.push(a.key)}),i}mo(){this.ho.forEach(e=>this.Ao(e))}Ao(e){this.ho=this.ho.delete(e),this.Po=this.Po.delete(e)}po(e){let t=new ee(new _e([])),n=new Le(t,e),s=new Le(t,e+1),i=ce();return this.Po.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(e){let t=new Le(e,0),n=this.ho.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}},Le=class{constructor(e,t){this.key=e,this.yo=t}static To(e,t){return ee.comparator(e.key,t.key)||oe(e.yo,t.yo)}static Io(e,t){return oe(e.yo,t.yo)||ee.comparator(e.key,t.key)}};var mf=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.rs=1,this.wo=new Ue(Le.To)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){let i=this.rs;this.rs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new sf(i,t,n,s);this.mutationQueue.push(a);for(let u of s)this.wo=this.wo.add(new Le(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return G.resolve(a)}lookupMutationBatch(e,t){return G.resolve(this.bo(t))}getNextMutationBatchAfterBatchId(e,t){let n=t+1,s=this.So(n),i=s<0?0:s;return G.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?Jf:this.rs-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new Le(t,0),s=new Le(t,Number.POSITIVE_INFINITY),i=[];return this.wo.forEachInRange([n,s],a=>{let u=this.bo(a.yo);i.push(u)}),G.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ue(oe);return t.forEach(s=>{let i=new Le(s,0),a=new Le(s,Number.POSITIVE_INFINITY);this.wo.forEachInRange([i,a],u=>{n=n.add(u.yo)})}),G.resolve(this.xo(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,s=n.length+1,i=n;ee.isDocumentKey(i)||(i=i.child(""));let a=new Le(new ee(i),0),u=new Ue(oe);return this.wo.forEachWhile(c=>{let l=c.key.path;return!!n.isPrefixOf(l)&&(l.length===s&&(u=u.add(c.yo)),!0)},a),G.resolve(this.xo(u))}xo(e){let t=[];return e.forEach(n=>{let s=this.bo(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){$(this.vo(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.wo;return G.forEach(t.mutations,s=>{let i=new Le(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wo=n})}us(e){}containsKey(e,t){let n=new Le(t,0),s=this.wo.firstAfterOrEqual(n);return G.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}vo(e,t){return this.So(e)}So(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}bo(e){let t=this.So(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var Ef=class{constructor(e){this.Do=e,this.docs=function(){return new Re(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,s=this.docs.get(n),i=s?s.size:0,a=this.Do(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return G.resolve(n?n.document.mutableCopy():Ht.newInvalidDocument(t))}getEntries(e,t){let n=ht();return t.forEach(s=>{let i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():Ht.newInvalidDocument(s))}),G.resolve(n)}getAllEntries(e){let t=ht();return this.docs.forEach((n,s)=>{t=t.insert(n,s.document)}),G.resolve(t)}getDocumentsMatchingQuery(e,t,n,s){let i,a;Ge(t)?(i=_e.fromString(sc(t)),a=h=>ac(t,h)):(i=t.path,a=h=>tc(t,h));let u=ht(),c=new ee(i.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){let{key:h,value:{document:d}}=l.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||ZD(XD(d),n)<=0||(s.has(d.key)||a(d))&&(u=u.insert(d.key,d.mutableCopy()))}return G.resolve(u)}getAllFromCollectionGroup(e,t,n,s){Z(9500)}Co(e,t){return G.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new _f(this)}getSize(e){return G.resolve(this.size)}},_f=class extends hf{constructor(e){super(),this.ao=e}applyChanges(e){let t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.ao.addEntry(e,s)):this.ao.removeEntry(n)}),G.waitFor(t)}getFromCache(e,t){return this.ao.getEntry(e,t)}getAllFromCache(e,t){return this.ao.getEntries(e,t)}};var yf=class{constructor(e){this.persistence=e,this.Fo=new wn(t=>xE(t),FE),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Oo=0,this.Mo=new Ta,this.targetCount=0,this.No=qr.W_()}forEachTarget(e,t){return this.Fo.forEach((n,s)=>t(s)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.Oo)}allocateTargetId(e){return this.highestTargetId=this.No.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Oo&&(this.Oo=t),G.resolve()}H_(e){this.Fo.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.No=new qr(t),this.highestTargetId=t),e.sequenceNumber>this.Oo&&(this.Oo=e.sequenceNumber)}addTargetData(e,t){return this.H_(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.H_(t),G.resolve()}removeTargetData(e,t){return this.Fo.delete(t.target),this.Mo.fo(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,n){let s=0,i=[];return this.Fo.forEach((a,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.Fo.delete(a),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),G.waitFor(i).next(()=>s)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){let n=this.Fo.get(t)||null;return G.resolve(n)}addMatchingKeys(e,t,n){return this.Mo.Ro(t,n),G.resolve()}removeMatchingKeys(e,t,n){this.Mo.Vo(t,n);let s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),G.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Mo.fo(t),G.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Mo.po(t);return G.resolve(n)}containsKey(e,t){return G.resolve(this.Mo.containsKey(t))}};var Vu=class{constructor(e,t){this.Bo={},this.overlays={},this.Lo=new ks(0),this.$o=!1,this.$o=!0,this.Uo=new Cf,this.referenceDelegate=e(this),this.ko=new yf(this),this.indexManager=new cf,this.remoteDocumentCache=function(s){return new Ef(s)}(n=>this.referenceDelegate.Qo(n)),this.serializer=new uf(t),this.qo=new pf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$o=!1,Promise.resolve()}get started(){return this.$o}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gf,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Bo[e.toKey()];return n||(n=new mf(t,this.referenceDelegate),this.Bo[e.toKey()]=n),n}getGlobalsCache(){return this.Uo}getTargetCache(){return this.ko}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qo}runTransaction(e,t,n){J("MemoryPersistence","Starting transaction:",e);let s=new wf(this.Lo.next());return this.referenceDelegate.Ko(),n(s).next(i=>this.referenceDelegate.Wo(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Go(e,t){return G.or(Object.values(this.Bo).map(n=>()=>n.containsKey(e,t)))}},wf=class extends LB{constructor(e){super(),this.currentSequenceNumber=e}},If=class r{constructor(e){this.persistence=e,this.jo=new Ta,this.zo=null}static Ho(e){return new r(e)}get Jo(){if(this.zo)return this.zo;throw Z(60996)}addReference(e,t,n){return this.jo.addReference(n,t),this.Jo.delete(n.toString()),G.resolve()}removeReference(e,t,n){return this.jo.removeReference(n,t),this.Jo.add(n.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.Jo.add(t.toString()),G.resolve()}removeTarget(e,t){this.jo.fo(t.targetId).forEach(s=>this.Jo.add(s.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Jo.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}Ko(){this.zo=new Set}Wo(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.Jo,n=>{let s=ee.fromPath(n);return this.Yo(e,s).next(i=>{i||t.removeEntry(s,ne.min())})}).next(()=>(this.zo=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yo(e,t).next(n=>{n?this.Jo.delete(t.toString()):this.Jo.add(t.toString())})}Qo(e){return 0}Yo(e,t){return G.or([()=>G.resolve(this.jo.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Go(e,t)])}},Mu=class r{constructor(e,t){this.persistence=e,this.Zo=new wn(n=>i0(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=VT(this,t)}static Ho(e,t){return new r(e,t)}Ko(){}Wo(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Pi(e){let t=this.Y_(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}Y_(e){let t=0;return this.Ii(e,n=>{t++}).next(()=>t)}Ii(e,t){return G.forEach(this.Zo,(n,s)=>this.X_(e,n,s).next(i=>i?G.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Co(e,a=>this.X_(e,a,t).next(u=>{u||(n++,i.removeEntry(a,ne.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.Zo.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.Zo.set(n,e.currentSequenceNumber),G.resolve()}removeReference(e,t,n){return this.Zo.set(n,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.Zo.set(t,e.currentSequenceNumber),G.resolve()}Qo(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ou(e.data.value)),t}X_(e,t,n){return G.or([()=>this.persistence.Go(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let s=this.Zo.get(t);return G.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var Df=class r{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.$a=n,this.Ua=s}static ka(e,t){let n=ce(),s=ce();for(let i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new r(e,t.fromCache,n,s)}};function _0(r,e){return ee.comparator(r.key,e.key)}var Tf=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var Af=class{constructor(){this.Qa=!1,this.qa=!1,this.Ka=100,this.Wa=function(){return Op()?8:LT(qe())>0?6:4}()}initialize(e,t){this.Ga=e,this.indexManager=t,this.Qa=!0}getDocumentsMatchingQuery(e,t,n,s){let i={result:null};return this.ja(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.za(e,t,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;let a=new Tf;return this.Ha(e,t,a).next(u=>{if(i.result=u,this.qa)return this.Ja(e,t,a,u.size)})}).next(()=>i.result)}Ja(e,t,n,s){return Ge(t)?G.resolve():n.documentReadCount<this.Ka?(ss()<=ue.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Qi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ka,"documents"),G.resolve()):(ss()<=ue.DEBUG&&J("QueryEngine","Query:",Qi(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Wa*s?(ss()<=ue.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Qi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(t))):G.resolve())}ja(e,t){if(Ge(t))return G.resolve(null);let n=t;if(tm(n))return G.resolve(null);let s=Zt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=lu(n,null,"F"),s=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(a=>{let u=ce(...a);return this.Ga.getDocuments(e,u).next(c=>this.indexManager.getMinOffset(e,s).next(l=>{let h=this.Ya(n,c);return this.Za(n,h,u,l.readTime)?this.ja(e,lu(n,null,"F")):this.Xa(e,h,n,l)}))})))}za(e,t,n,s){return(Ge(t)?function(a){for(let u of a.stages){if(u instanceof Ur||u instanceof Ou)return!1;if(u instanceof ga){if(u.condition instanceof bu&&u.condition._expr.name==="exists"&&u.condition._expr.params[0]instanceof Gr&&u.condition._expr.params[0].fieldName===Cs)continue;return!1}}return!0}(t):tm(t))||s.isEqual(ne.min())?G.resolve(null):this.Ga.getDocuments(e,n).next(i=>{let a=this.Ya(t,i);return this.Za(t,a,n,s)?G.resolve(null):(ss()<=ue.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fm(t)),this.Xa(e,a,t,YD(s,ua)).next(u=>u))})}Ya(e,t){let n,s;return Ge(e)?(n=new Ue(_0),s=i=>ac(e,i)):(n=new Ue(Yf(e)),s=i=>tc(e,i)),t.forEach((i,a)=>{s(a)&&(n=n.add(a))}),n}Za(e,t,n,s){if(Ge(e))return function(u){return u.stages.some(c=>c instanceof Ur||c instanceof Ou)}(e);if(e.limit===null)return!1;if(n.size!==t.size)return!0;let i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ha(e,t,n){return ss()<=ue.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",fm(t)),this.Ga.getDocumentsMatchingQuery(e,t,kr.min(),n)}Xa(e,t,n,s){return this.Ga.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}};var ad="LocalStore",y0=3e8,bf=class{constructor(e,t,n,s){this.persistence=e,this.eu=t,this.serializer=s,this.tu=new Re(oe),this.nu=new wn(i=>xE(i),FE),this.ru=new Map,this.iu=e.getRemoteDocumentCache(),this.ko=e.getTargetCache(),this.qo=e.getBundleCache(),this.su(n)}su(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new df(this.iu,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.iu.setIndexManager(this.indexManager),this.eu.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.tu))}};function w0(r,e,t,n){return new bf(r,e,t,n)}async function YE(r,e){let t=re(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.su(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{let a=[],u=[],c=ce();for(let l of s){a.push(l.batchId);for(let h of l.mutations)c=c.add(h.key)}for(let l of i){u.push(l.batchId);for(let h of l.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(n,c).next(l=>({_u:l,removedBatchIds:a,addedBatchIds:u}))})})}function I0(r,e){let t=re(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{let s=e.batch.keys(),i=t.iu.newChangeBuffer({trackRemovals:!0});return function(u,c,l,h){let d=l.batch,g=d.keys(),w=G.resolve();return g.forEach(D=>{w=w.next(()=>h.getEntry(c,D)).next(P=>{let k=l.docVersions.get(D);$(k!==null,48541),P.version.compareTo(k)<0&&(d.applyToRemoteDocument(P,l),P.isValidDocument()&&(P.setReadTime(l.commitVersion),h.addEntry(P)))})}),w.next(()=>u.mutationQueue.removeMutationBatch(c,d))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=ce();for(let l=0;l<u.mutationResults.length;++l)u.mutationResults[l].transformResults.length>0&&(c=c.add(u.batch.mutations[l].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function XE(r){let e=re(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ko.getLastRemoteSnapshotVersion(t))}function D0(r,e){let t=re(r),n=e.snapshotVersion,s=t.tu;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{let a=t.iu.newChangeBuffer({trackRemovals:!0});s=t.tu;let u=[];e.targetChanges.forEach((h,d)=>{let g=s.get(d);if(!g)return;u.push(t.ko.removeMatchingKeys(i,h.removedDocuments,d).next(()=>t.ko.addMatchingKeys(i,h.addedDocuments,d)));let w=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?w=w.withResumeToken(Ae.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,n)),s=s.insert(d,w),function(P,k,q){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=y0?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(g,w,h)&&u.push(t.ko.updateTargetData(i,w))});let c=ht(),l=ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),u.push(T0(i,a,e.documentUpdates).next(h=>{c=h.ou,l=h.au})),!n.isEqual(ne.min())){let h=t.ko.getLastRemoteSnapshotVersion(i).next(d=>t.ko.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(h)}return G.waitFor(u).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(t.tu=s,i))}function T0(r,e,t){let n=ce(),s=ce();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let a=ht();return t.forEach((u,c)=>{let l=i.get(u);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(ne.min())?(e.removeEntry(u,c.readTime),a=a.insert(u,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),a=a.insert(u,c)):J(ad,"Ignoring outdated watch update for ",u,". Current version:",l.version," Watch version:",c.version)}),{ou:a,au:s}})}function A0(r,e){let t=re(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Jf),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function b0(r,e){let t=re(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.ko.getTargetData(n,e).next(i=>i?(s=i,G.resolve(s)):t.ko.allocateTargetId(n).next(a=>(s=new js(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.ko.addTargetData(n,s).next(()=>s))))}).then(n=>{let s=t.tu.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.tu=t.tu.insert(n.targetId,n),t.nu.set(e,n.targetId)),n})}async function vf(r,e,t){let n=re(r),s=n.tu.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ys(a))throw a;J(ad,`Failed to update sequence numbers for target ${e}: ${a}`)}n.tu=n.tu.remove(e),n.nu.delete(s.target)}function pm(r,e,t){let n=re(r),s=ne.min(),i=ce();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,l,h){let d=re(c),g=d.nu.get(h);return g!==void 0?G.resolve(d.tu.get(g)):d.ko.getTargetData(l,h)}(n,a,Ge(e)?e:Zt(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.ko.getMatchingKeysForTargetId(a,u.targetId).next(c=>{i=c})}).next(()=>n.eu.getDocumentsMatchingQuery(a,e,t?s:ne.min(),t?i:ce())).next(u=>(v0(n,u),{documents:u,uu:i})))}function v0(r,e){e.forEach((t,n)=>{let s=n.key.getCollectionGroup(),i=r.ru.get(s)||ne.min();n.readTime.compareTo(i)>0&&r.ru.set(s,n.readTime)})}var Rf=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Pu=0,this.Iu=null,this.Ru=!0}Au(){this.Pu===0&&(this.Vu("Unknown"),this.Iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Iu=null,this.du("Backend didn't respond within 10 seconds."),this.Vu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.Vu("Unknown"):(this.Pu++,this.Pu>=1&&(this.mu(),this.du(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Vu("Offline")))}set(e){this.mu(),this.Pu=0,e==="Online"&&(this.Ru=!1),this.Vu(e)}Vu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}du(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ru?(Cn(t),this.Ru=!1):J("OnlineStateTracker",t)}mu(){this.Iu!==null&&(this.Iu.cancel(),this.Iu=null)}};var sn="RemoteStore",Sf=class{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.pu=[],this.gu=new Map,this.yu=new Map,this.wu=new Map,this.bu=new qr(1e3),this.Su=new qr(1001),this.xu=new Set,this.vu=[],this.Du=i,this.Du.tn(a=>{n.enqueueAndForget(async()=>{Jr(this)&&(J(sn,"Restarting streams for network reachability change."),await async function(c){let l=re(c);l.xu.add(4),await Na(l),l.Cu.set("Unknown"),l.xu.delete(4),await oc(l)}(this))})}),this.Cu=new Rf(n,s)}};async function oc(r){if(Jr(r))for(let e of r.vu)await e(!0)}async function Na(r){for(let e of r.vu)await e(!1)}function Pf(r,e){return r.yu.get(e)||void 0}function ZE(r,e){let t=re(r),n=Pf(t,e.targetId);if(n!==void 0&&t.gu.has(n))return;let s=function(u,c){let l=Pf(u,c);l!==void 0&&u.wu.delete(l);let h=function(g,w){return w%2!=0?g.Su.next():g.bu.next()}(u,c);return u.yu.set(c,h),u.wu.set(h,c),h}(t,e.targetId);J(sn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);let i=new js(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.gu.set(s,i),ld(t)?cd(t):Xs(t).ur()&&ud(t,i)}function od(r,e){let t=re(r),n=Xs(t),s=Pf(t,e);J(sn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.gu.delete(s),t.yu.delete(e),t.wu.delete(s),n.ur()&&e_(t,s),t.gu.size===0&&(n.ur()?n.Er():Jr(t)&&t.Cu.set("Unknown"))}function ud(r,e){if(r.Fu.rt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){let t=r.wu.get(e.targetId);if(t===void 0)return void J(sn,"SDK target ID not found for remote ID: "+e.targetId);let n=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}Xs(r).yr(e)}function e_(r,e){r.Fu.rt(e),Xs(r).wr(e)}function cd(r){r.Fu=new EB({getRemoteKeysForTarget:e=>{let t=r.wu.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):ce()},Mt:e=>r.gu.get(e)||null,xt:()=>r.datastore.serializer.databaseId}),Xs(r).start(),r.Cu.Au()}function ld(r){return Jr(r)&&!Xs(r).ar()&&r.gu.size>0}function Jr(r){return re(r).xu.size===0}function t_(r){r.Fu=void 0}async function R0(r){r.Cu.set("Online")}async function S0(r){r.gu.forEach((e,t)=>{ud(r,e)})}async function P0(r,e){t_(r),ld(r)?(r.Cu.fu(e),cd(r)):r.Cu.set("Unknown")}async function N0(r,e,t){if(r.Cu.set("Online"),e instanceof hu&&e.state===2&&e.cause)try{await async function(s,i){let a=i.cause;for(let u of i.targetIds){if(s.gu.has(u)){let c=s.wu.get(u);c!==void 0&&(await s.remoteSyncer.rejectListen(c,a),s.yu.delete(c),s.wu.delete(u)),s.gu.delete(u)}s.Fu.removeTarget(u)}}(r,e)}catch(n){J(sn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Gu(r,n)}else if(e instanceof fs?r.Fu.Tt(e):e instanceof Bu?r.Fu.ft(e):r.Fu.Rt(e),!t.isEqual(ne.min()))try{let n=await XE(r.localStore);t.compareTo(n)>=0&&await function(i,a){let u=i.Fu.Dt(a);u.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){let d=i.gu.get(h);d&&i.gu.set(h,d.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,h)=>{let d=i.gu.get(l);if(!d)return;i.gu.set(l,d.withResumeToken(Ae.EMPTY_BYTE_STRING,d.snapshotVersion)),e_(i,l);let g=new js(d.target,l,h,d.sequenceNumber);ud(i,g)});let c=function(h,d){let g=new Map;d.targetChanges.forEach((D,P)=>{let k=h.wu.get(P);k!==void 0&&g.set(k,D)});let w=new Re(oe);return d.targetMismatches.forEach((D,P)=>{let k=h.wu.get(D);k!==void 0&&(w=w.insert(k,P))}),new ca(d.snapshotVersion,g,w,d.documentUpdates,d.augmentedDocumentUpdates,d.resolvedLimboDocuments)}(i,u);return i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){J(sn,"Failed to raise snapshot:",n),await Gu(r,n)}}async function Gu(r,e,t){if(!Ys(e))throw e;r.xu.add(1),await Na(r),r.Cu.set("Offline"),t||(t=()=>XE(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{J(sn,"Retrying IndexedDB access"),await t(),r.xu.delete(1),await oc(r)})}function n_(r,e){return e().catch(t=>Gu(r,t,e))}async function uc(r){let e=re(r),t=Qn(e),n=e.pu.length>0?e.pu[e.pu.length-1].batchId:Jf;for(;O0(e);)try{let s=await A0(e.localStore,n);if(s===null){e.pu.length===0&&t.Er();break}n=s.batchId,x0(e,s)}catch(s){await Gu(e,s)}r_(e)&&s_(e)}function O0(r){return Jr(r)&&r.pu.length<10}function x0(r,e){r.pu.push(e);let t=Qn(r);t.ur()&&t.br&&t.Sr(e.mutations)}function r_(r){return Jr(r)&&!Qn(r).ar()&&r.pu.length>0}function s_(r){Qn(r).start()}async function F0(r){Qn(r).Cr()}async function L0(r){let e=Qn(r);for(let t of r.pu)e.Sr(t.mutations)}async function k0(r,e,t){let n=r.pu.shift(),s=af.from(n,e,t);await n_(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await uc(r)}async function V0(r,e){e&&Qn(r).br&&await async function(n,s){if(function(a){return iT(a)&&a!==V.ABORTED}(s.code)){let i=n.pu.shift();Qn(n).lr(),await n_(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await uc(n)}}(r,e),r_(r)&&s_(r)}async function gm(r,e){let t=re(r);t.asyncQueue.verifyOperationInProgress(),J(sn,"RemoteStore received new credentials");let n=Jr(t);t.xu.add(3),await Na(t),n&&t.Cu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.xu.delete(3),await oc(t)}async function M0(r,e){let t=re(r);e?(t.xu.delete(2),await oc(t)):e||(t.xu.add(2),await Na(t),t.Cu.set("Unknown"))}function Xs(r){return r.Ou||(r.Ou=function(t,n,s){let i=re(t);return i.Or(),new NB(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{pn:R0.bind(null,r),yn:S0.bind(null,r),bn:P0.bind(null,r),gr:N0.bind(null,r)}),r.vu.push(async e=>{e?(r.Ou.lr(),ld(r)?cd(r):r.Cu.set("Unknown")):(await r.Ou.stop(),t_(r))})),r.Ou}function Qn(r){return r.Mu||(r.Mu=function(t,n,s){let i=re(t);return i.Or(),new OB(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{pn:()=>Promise.resolve(),yn:F0.bind(null,r),bn:V0.bind(null,r),vr:L0.bind(null,r),Dr:k0.bind(null,r)}),r.vu.push(async e=>{e?(r.Mu.lr(),await uc(r)):(await r.Mu.stop(),r.pu.length>0&&(J(sn,`Stopping write stream with ${r.pu.length} pending writes`),r.pu=[]))})),r.Mu}var Nf=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Nu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Nu(this.observer.error,e):Cn("Uncaught Error in snapshot listener:",e.toString()))}Bu(){this.muted=!0}Nu(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var Of=class r{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){let a=Date.now()+n,u=new r(e,t,a,s,i);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Bd(r,e){if(Cn("AsyncQueue",`${e}: ${r}`),Ys(r))return new W(V.UNAVAILABLE,`${e}: ${r}`);throw r}var Uu=class{constructor(){this.activeTargetIds=lT()}nc(e){this.activeTargetIds=this.activeTargetIds.add(e)}rc(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tc(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var xf=class{constructor(){this.kc=new Uu,this.Qc={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.kc.nc(e),this.Qc[e]||"not-current"}updateQueryState(e,t,n){this.Qc[e]=t}removeLocalQueryTarget(e){this.kc.rc(e)}isLocalQueryTarget(e){return this.kc.activeTargetIds.has(e)}clearQueryState(e){delete this.Qc[e]}getAllActiveQueryTargets(){return this.kc.activeTargetIds}isActiveQueryTarget(e){return this.kc.activeTargetIds.has(e)}start(){return this.kc=new Uu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};function Xl(){return typeof document<"u"?document:null}var Aa=class r{static emptySet(e){return new r(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||ee.comparator(t.key,n.key):(t,n)=>ee.comparator(t.key,n.key),this.keyedMap=as(),this.sortedSet=new Re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof r)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let n=new r;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}};var Hu=class{constructor(){this.qc=new Re(ee.comparator)}track(e){let t=e.doc.key,n=this.qc.get(t);n?e.type!==0&&n.type===3?this.qc=this.qc.insert(t,e):e.type===3&&n.type!==1?this.qc=this.qc.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.qc=this.qc.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.qc=this.qc.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.qc=this.qc.remove(t):e.type===1&&n.type===2?this.qc=this.qc.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.qc=this.qc.insert(t,{type:2,doc:e.doc}):Z(63341,{Nt:e,Kc:n}):this.qc=this.qc.insert(t,e)}Wc(){let e=[];return this.qc.inorderTraversal((t,n)=>{e.push(n)}),e}},Ks=class r{constructor(e,t,n,s,i,a,u,c,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,s,i){let a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new r(e,t,Aa.emptySet(t),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}};var Ff=class{constructor(){this.Gc=void 0,this.jc=[]}zc(){return this.jc.some(e=>e.Hc())}},Lf=class{constructor(){this.queries=Cm(),this.onlineState="Unknown",this.Jc=new Set}terminate(){(function(t,n){let s=re(t),i=s.queries;s.queries=Cm(),i.forEach((a,u)=>{for(let c of u.jc)c.onError(n)})})(this,new W(V.ABORTED,"Firestore shutting down"))}};function Cm(){return new wn(r=>OE(r),ic)}async function G0(r,e){let t=re(r),n=3,s=e.query,i=t.queries.get(s);i?!i.zc()&&e.Hc()&&(n=2):(i=new Ff,n=e.Hc()?0:1);try{switch(n){case 0:i.Gc=await t.onListen(s,!0);break;case 1:i.Gc=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){let u=Bd(a,`Initialization of query '${Ge(e.query)?gn(e.query):Qi(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,i),i.jc.push(e),e.Yc(t.onlineState),i.Gc&&e.Zc(i.Gc)&&hd(t)}async function U0(r,e){let t=re(r),n=e.query,s=3,i=t.queries.get(n);if(i){let a=i.jc.indexOf(e);a>=0&&(i.jc.splice(a,1),i.jc.length===0?s=e.Hc()?0:1:!i.zc()&&e.Hc()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function H0(r,e){let t=re(r),n=!1;for(let s of e){let i=s.query,a=t.queries.get(i);if(a){for(let u of a.jc)u.Zc(s)&&(n=!0);a.Gc=s}}n&&hd(t)}function q0(r,e,t){let n=re(r),s=n.queries.get(e);if(s)for(let i of s.jc)i.onError(t);n.queries.delete(e)}function hd(r){r.Jc.forEach(e=>{e.next()})}var kf;(function(r){r.Default="default",r.Cache="cache"})(kf||(kf={}));var Vf=class{constructor(e,t,n){this.query=e,this.Xc=t,this.el=!1,this.tl=null,this.onlineState="Unknown",this.options=n||{}}Zc(e){if(!this.options.includeMetadataChanges){let n=[];for(let s of e.docChanges)s.type!==3&&n.push(s);e=new Ks(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.el?this.nl(e)&&(this.Xc.next(e),t=!0):this.rl(e,this.onlineState)&&(this.il(e),t=!0),this.tl=e,t}onError(e){this.Xc.error(e)}Yc(e){this.onlineState=e;let t=!1;return this.tl&&!this.el&&this.rl(this.tl,e)&&(this.il(this.tl),t=!0),t}rl(e,t){if(!e.fromCache||!this.Hc())return!0;let n=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}nl(e){if(e.docChanges.length>0)return!0;let t=this.tl&&this.tl.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}il(e){e=Ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.el=!0,this.Xc.next(e)}Hc(){return this.options.source!==kf.Cache}};var qu=class{constructor(e){this.key=e}},ju=class{constructor(e){this.key=e}},Mf=class{constructor(e,t){this.query=e,this.hl=t,this.Tl=null,this.hasCachedResults=!1,this.current=!1,this.Pl=ce(),this.mutatedKeys=ce(),this.Il=Ge(e)?Bf(e):Yf(e),this.Rl=new Aa(this.Il)}get Al(){return this.hl}Vl(e,t){let n=t?t.dl:new Hu,s=t?t.Rl:this.Rl,i=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1,[c,l]=this.fl(this.query,s);e.inorderTraversal((d,g)=>{let w=s.get(d),D=m0(this.query,g)?g:null,P=!!w&&this.mutatedKeys.has(w.key),k=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations),q=!1;w&&D?w.data.isEqual(D.data)?P!==k&&(n.track({type:3,doc:D}),q=!0):this.ml(w,D)||(n.track({type:2,doc:D}),q=!0,(c&&this.Il(D,c)>0||l&&this.Il(D,l)<0)&&(u=!0)):!w&&D?(n.track({type:0,doc:D}),q=!0):w&&!D&&(n.track({type:1,doc:w}),q=!0,(c||l)&&(u=!0)),q&&(D?(a=a.add(D),i=k?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))});let h=this.pl(this.query);if(h)if(Ge(this.query)){let d=[];a.forEach(D=>d.push(D));let g=$E(this.query,d),w=new Aa(Bf(this.query));for(let D of g)w=w.add(D);a.forEach(D=>{w.has(D.key)||(i=i.delete(D.key),n.track({type:1,doc:D}))}),a=w}else{let d=this.gl(this.query);for(;a.size>h;){let g=d==="F"?a.last():a.first();a=a.delete(g.key),i=i.delete(g.key),n.track({type:1,doc:g})}}return{Rl:a,dl:n,Za:u,mutatedKeys:i}}pl(e){return Ge(e)?Yl(e)?.limit:e.limit||void 0}gl(e){if(Ge(e)){let t=Yl(e);return t&&t.limit<0?"L":"F"}return e.limitType}fl(e,t){if(Ge(e)){let n=Yl(e)?.limit;return[t.size===n?t.last():null,null]}return[e.limitType==="F"&&t.size===this.pl(this.query)?t.last():null,e.limitType==="L"&&t.size===this.pl(this.query)?t.first():null]}ml(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){let i=this.Rl;this.Rl=e.Rl,this.mutatedKeys=e.mutatedKeys;let a=e.dl.Wc();a.sort((h,d)=>function(w,D){let P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Nt:k})}};return P(w)-P(D)}(h.type,d.type)||this.Il(h.doc,d.doc)),this.yl(n),s=s??!1;let u=t&&!s?this.wl():[],c=this.Pl.size===0&&this.current&&!s?1:0,l=c!==this.Tl;return this.Tl=c,a.length!==0||l?{snapshot:new Ks(this.query,e.Rl,i,a,e.mutatedKeys,c===0,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),bl:u}:{bl:u}}Yc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Rl:this.Rl,dl:new Hu,mutatedKeys:this.mutatedKeys,Za:!1},!1)):{bl:[]}}Sl(e){return!this.hl.has(e)&&!!this.Rl.has(e)&&!this.Rl.get(e).hasLocalMutations}yl(e){e&&(e.addedDocuments.forEach(t=>this.hl=this.hl.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.hl=this.hl.delete(t)),this.current=e.current)}wl(){if(!this.current)return[];let e=this.Pl;this.Pl=ce(),this.Rl.forEach(n=>{this.Sl(n.key)&&(this.Pl=this.Pl.add(n.key))});let t=[];return e.forEach(n=>{this.Pl.has(n)||t.push(new ju(n))}),this.Pl.forEach(n=>{e.has(n)||t.push(new qu(n))}),t}xl(e){this.hl=e.uu,this.Pl=ce();let t=this.Vl(e.documents);return this.applyChanges(t,!0)}vl(){return Ks.fromInitialDocuments(this.query,this.Rl,this.mutatedKeys,this.Tl===0,this.hasCachedResults)}},fd="SyncEngine",Gf=class{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}},Uf=class{constructor(e){this.key=e,this.Dl=!1}},Hf=class{constructor(e,t,n,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Cl={},this.Fl=new wn(u=>OE(u),ic),this.Ol=new Map,this.Ml=new Set,this.Nl=new Re(ee.comparator),this.Bl=new Map,this.Ll=new Ta,this.$l={},this.Ul=new Map,this.kl=qr.G_(),this.onlineState="Unknown",this.Ql=void 0}get isPrimaryClient(){return this.Ql===!0}};async function j0(r,e,t=!0){let n=l_(r),s,i=n.Fl.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.vl()):s=await i_(n,e,t,!0),s}async function K0(r,e){let t=l_(r);await i_(t,e,!0,!1)}async function i_(r,e,t,n){let s=await b0(r.localStore,Ge(e)?e:Zt(e)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,t),u;return n&&(u=await J0(r,e,i,a==="current",s.resumeToken)),r.isPrimaryClient&&t&&ZE(r.remoteStore,s),u}async function J0(r,e,t,n,s){r.ql=(d,g,w)=>async function(P,k,q,Q){let se=k.view.Vl(q);se.Za&&(se=await pm(P.localStore,k.query,!1).then(({documents:A})=>k.view.Vl(A,se)));let Se=Q&&Q.targetChanges.get(k.targetId),Ze=Q&&Q.targetMismatches.get(k.targetId)!=null,be=k.view.applyChanges(se,P.isPrimaryClient,Se,Ze);return Em(P,k.targetId,be.bl),be.snapshot}(r,d,g,w);let i=await pm(r.localStore,e,!0),a=new Mf(e,i.uu),u=a.Vl(i.documents),c=la.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),l=a.applyChanges(u,r.isPrimaryClient,c);Em(r,t,l.bl);let h=new Gf(e,t,a);return r.Fl.set(e,h),r.Ol.has(t)?r.Ol.get(t).push(e):r.Ol.set(t,[e]),l.snapshot}async function z0(r,e,t){let n=re(r),s=n.Fl.get(e),i=n.Ol.get(s.targetId);if(i.length>1)return n.Ol.set(s.targetId,i.filter(a=>!ic(a,e))),void n.Fl.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await vf(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&od(n.remoteStore,s.targetId),qf(n,s.targetId)}).catch($s)):(qf(n,s.targetId),await vf(n.localStore,s.targetId,!0))}async function W0(r,e){let t=re(r),n=t.Fl.get(e),s=t.Ol.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),od(t.remoteStore,n.targetId))}async function Q0(r,e,t){let n=nA(r);try{let s=await function(a,u){let c=re(a),l=ve.now(),h=u.reduce((w,D)=>w.add(D.key),ce()),d,g;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let D=ht(),P=ce();return c.iu.getEntries(w,h).next(k=>{D=k,D.forEach((q,Q)=>{Q.isValidDocument()||(P=P.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,D)).next(k=>{d=k;let q=[];for(let Q of u){let se=WD(Q,d.get(Q.key).overlayedDocument);se!=null&&q.push(new yn(Q.key,se,Gm(se.value.mapValue),Gn.exists(!0)))}return c.mutationQueue.addMutationBatch(w,l,q,u)}).next(k=>{g=k;let q=k.applyToLocalDocumentSet(d,P);return c.documentOverlayCache.saveOverlays(w,k.batchId,q)})}).then(()=>({batchId:g.batchId,changes:sE(d)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,c){let l=a.$l[a.currentUser.toKey()];l||(l=new Re(oe)),l=l.insert(u,c),a.$l[a.currentUser.toKey()]=l}(n,s.batchId,t),await Oa(n,s.changes),await uc(n.remoteStore)}catch(s){let i=Bd(s,"Failed to persist write");t.reject(i)}}async function a_(r,e){let t=re(r);try{let n=await D0(t.localStore,e);e.targetChanges.forEach((s,i)=>{let a=t.Bl.get(i);a&&($(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Dl=!0:s.modifiedDocuments.size>0?$(a.Dl,14607):s.removedDocuments.size>0&&($(a.Dl,42227),a.Dl=!1))}),await Oa(t,n,e)}catch(n){await $s(n)}}function mm(r,e,t){let n=re(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){let s=[];n.Fl.forEach((i,a)=>{let u=a.view.Yc(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){let c=re(a);c.onlineState=u;let l=!1;c.queries.forEach((h,d)=>{for(let g of d.jc)g.Yc(u)&&(l=!0)}),l&&hd(c)}(n.eventManager,e),s.length&&n.Cl.gr(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function $0(r,e,t){let n=re(r);n.sharedClientState.updateQueryState(e,"rejected",t);let s=n.Bl.get(e),i=s&&s.key;if(i){let a=new Re(ee.comparator);a=a.insert(i,Ht.newNoDocument(i,ne.min()));let u=ce().add(i),c=new ca(ne.min(),new Map,new Re(oe),a,ht(),u);await a_(n,c),n.Nl=n.Nl.remove(i),n.Bl.delete(e),dd(n)}else await vf(n.localStore,e,!1).then(()=>qf(n,e,t)).catch($s)}async function Y0(r,e){let t=re(r),n=e.batch.batchId;try{let s=await I0(t.localStore,e);u_(t,n,null),o_(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Oa(t,s)}catch(s){await $s(s)}}async function X0(r,e,t){let n=re(r);try{let s=await function(a,u){let c=re(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let h;return c.mutationQueue.lookupMutationBatch(l,u).next(d=>($(d!==null,37113),h=d.keys(),c.mutationQueue.removeMutationBatch(l,d))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,h,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,h)).next(()=>c.localDocuments.getDocuments(l,h))})}(n.localStore,e);u_(n,e,t),o_(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Oa(n,s)}catch(s){await $s(s)}}function o_(r,e){(r.Ul.get(e)||[]).forEach(t=>{t.resolve()}),r.Ul.delete(e)}function u_(r,e,t){let n=re(r),s=n.$l[n.currentUser.toKey()];if(s){let i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.$l[n.currentUser.toKey()]=s}}function qf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(let n of r.Ol.get(e))r.Fl.delete(n),t&&r.Cl.Kl(n,t);r.Ol.delete(e),r.isPrimaryClient&&r.Ll.fo(e).forEach(n=>{r.Ll.containsKey(n)||c_(r,n)})}function c_(r,e){r.Ml.delete(e.path.canonicalString());let t=r.Nl.get(e);t!==null&&(od(r.remoteStore,t),r.Nl=r.Nl.remove(e),r.Bl.delete(t),dd(r))}function Em(r,e,t){for(let n of t)n instanceof qu?(r.Ll.addReference(n.key,e),Z0(r,n)):n instanceof ju?(J(fd,"Document no longer in limbo: "+n.key),r.Ll.removeReference(n.key,e),r.Ll.containsKey(n.key)||c_(r,n.key)):Z(19791,{Wl:n})}function Z0(r,e){let t=e.key,n=t.path.canonicalString();r.Nl.get(t)||r.Ml.has(n)||(J(fd,"New document in limbo: "+t),r.Ml.add(n),dd(r))}function dd(r){for(;r.Ml.size>0&&r.Nl.size<r.maxConcurrentLimboResolutions;){let e=r.Ml.values().next().value;r.Ml.delete(e);let t=new ee(_e.fromString(e)),n=r.kl.next();r.Bl.set(n,new Uf(t)),r.Nl=r.Nl.insert(t,n),ZE(r.remoteStore,new js(Zt(ec(t.path)),n,"TargetPurposeLimboResolution",ks.Br))}}async function Oa(r,e,t){let n=re(r),s=[],i=[],a=[];n.Fl.isEmpty()||(n.Fl.forEach((u,c)=>{a.push(n.ql(c,e,t).then(l=>{if((l||t)&&n.isPrimaryClient){let h=l?!l.fromCache:t?.targetChanges.get(c.targetId)?.current;n.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(l){s.push(l);let h=Df.ka(c.targetId,l);i.push(h)}}))}),await Promise.all(a),n.Cl.gr(s),await async function(c,l){let h=re(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>G.forEach(l,g=>G.forEach(g.$a,w=>h.persistence.referenceDelegate.addReference(d,g.targetId,w)).next(()=>G.forEach(g.Ua,w=>h.persistence.referenceDelegate.removeReference(d,g.targetId,w)))))}catch(d){if(!Ys(d))throw d;J(ad,"Failed to update sequence numbers: "+d)}for(let d of l){let g=d.targetId;if(!d.fromCache){let w=h.tu.get(g),D=w.snapshotVersion,P=w.withLastLimboFreeSnapshotVersion(D);h.tu=h.tu.insert(g,P)}}}(n.localStore,i))}async function eA(r,e){let t=re(r);if(!t.currentUser.isEqual(e)){J(fd,"User change. New user:",e.toKey());let n=await YE(t.localStore,e);t.currentUser=e,function(i,a){i.Ul.forEach(u=>{u.forEach(c=>{c.reject(new W(V.CANCELLED,a))})}),i.Ul.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Oa(t,n._u)}}function tA(r,e){let t=re(r),n=t.Bl.get(e);if(n&&n.Dl)return ce().add(n.key);{let s=ce(),i=t.Ol.get(e);if(!i)return s;for(let a of i??[]){let u=t.Fl.get(a);s=s.unionWith(u.view.Al)}return s}}function l_(r){let e=re(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=a_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$0.bind(null,e),e.Cl.gr=H0.bind(null,e.eventManager),e.Cl.Kl=q0.bind(null,e.eventManager),e}function nA(r){let e=re(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Y0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=X0.bind(null,e),e}var jr=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nc(e.databaseInfo.databaseId),this.sharedClientState=this.jl(e),this.persistence=this.zl(e),await this.persistence.start(),this.localStore=this.Hl(e),this.gcScheduler=this.Jl(e,this.localStore),this.indexBackfillerScheduler=this.Yl(e,this.localStore)}Jl(e,t){return null}Yl(e,t){return null}Hl(e){return w0(this.persistence,new Af,e.initialUser,this.serializer)}zl(e){return new Vu(If.Ho,this.serializer)}jl(e){return new xf}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};jr.provider={build:()=>new jr};var Ku=class extends jr{constructor(e){super(),this.cacheSizeBytes=e}Jl(e,t){$(this.persistence.referenceDelegate instanceof Mu,46915);let n=this.persistence.referenceDelegate.garbageCollector;return new VB(n,e.asyncQueue,t)}zl(e){let t=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new Vu(n=>Mu.Ho(n,t),this.serializer)}};var Js=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>mm(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=eA.bind(null,this.syncEngine),await M0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Lf}()}createDatastore(e){let t=nc(e.databaseInfo.databaseId),n=PT(e.databaseInfo);return NT(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,a,u){return new Sf(n,s,i,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>mm(this.syncEngine,t,0),function(){return _u.cn()?new _u:new vB}())}createSyncEngine(e,t){return function(s,i,a,u,c,l,h){let d=new Hf(s,i,a,u,c,l);return h&&(d.Ql=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){let n=re(t);J(sn,"RemoteStore shutting down."),n.xu.add(5),await Na(n),n.Du.shutdown(),n.Cu.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}};Js.provider={build:()=>new Js};var $n="FirestoreClient",jf=class{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=ze.UNAUTHENTICATED,this.clientId=ps.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{J($n,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(J($n,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let n=Bd(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}};async function Zl(r,e){r.asyncQueue.verifyOperationInProgress(),J($n,"Initializing OfflineComponentProvider");let t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await YE(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function _m(r,e){r.asyncQueue.verifyOperationInProgress();let t=await rA(r);J($n,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>gm(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>gm(e.remoteStore,s)),r._onlineComponents=e}async function rA(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){J($n,"Using user provided OfflineComponentProvider");try{await Zl(r,r._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;St("Error using user provided cache. Falling back to memory cache: "+t),await Zl(r,new jr)}}else J($n,"Using default OfflineComponentProvider"),await Zl(r,new Ku(void 0));return r._offlineComponents}async function B_(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(J($n,"Using user provided OnlineComponentProvider"),await _m(r,r._uninitializedComponentsProvider._online)):(J($n,"Using default OnlineComponentProvider"),await _m(r,new Js))),r._onlineComponents}function sA(r){return B_(r).then(e=>e.syncEngine)}async function iA(r){let e=await B_(r),t=e.eventManager;return t.onListen=j0.bind(null,e.syncEngine),t.onUnlisten=z0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=K0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=W0.bind(null,e.syncEngine),t}function h_(r,e,t={}){let n=new nn;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,l){let h=new Nf({next:g=>{h.Bu(),a.enqueueAndForget(()=>U0(i,d));let w=g.docs.has(u);!w&&g.fromCache?l.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&c&&c.source==="server"?l.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(g)},error:g=>l.reject(g)}),d=new Vf(ec(u.path),h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return G0(i,d)}(await iA(r),r.asyncQueue,e,t,n)),n.promise}function f_(r,e){let t=new nn;return r.asyncQueue.enqueueAndForget(async()=>Q0(await sA(r),e,t)),t.promise}var pd=class{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new aA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){let t=this._document.data.field(Pa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},aA=class extends pd{data(){return super.data()}};var Ju=class{convertValue(e,t="none"){switch(Ve(e)){case 0:return null;case 2:return e.booleanValue;case 3:if("mapValue"in e){if(jn(e))return this.convertToInt32Value(e.mapValue);if(Nt(e))return this.convertToDecimal128Value(e.mapValue)}return Ie(e.integerValue||e.doubleValue);case 4:return this.convertTimestamp(e.timestampValue);case 6:return this.convertServerTimestamp(e,t);case 7:return e.stringValue;case 8:return"bytesValue"in e?this.convertBytes(Gt(e.bytesValue)):this.convertToBytesWithSubtype(e.mapValue);case 9:return this.convertReference(e.referenceValue);case 11:return this.convertGeoPoint(e.geoPointValue);case 13:return this.convertArray(e.arrayValue,t);case 15:return this.convertObject(e.mapValue,t);case 14:return this.convertVectorValue(e.mapValue);case 12:return this.convertToRegexValue(e.mapValue);case 10:return this.convertToBsonObjectId(e.mapValue);case 5:return this.convertToBsonTimestamp(e.mapValue);case 16:return Vr.instance();case 1:return Mr.instance();default:throw Z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return Kr(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){let t=e.fields?.[vr].arrayValue?.values?.map(n=>Ie(n.doubleValue));return new Dt(t)}convertToBsonObjectId(e){let t=e.fields?.[Rr]?.stringValue??"";return new Ps(t)}convertToBytesWithSubtype(e){let t=e.fields?.[ws],n=t?.bytesValue;if(!n)throw new Error("Received incorrect bytesValue for Bytes with subtype");let s=Gt(n).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for Bytes with subtype");let i=s[0],a=s.slice(1);return new tn(Ae.fromUint8Array(a),i)}convertToBsonTimestamp(e){let t=e.fields?.[dn],n=Number(t?.mapValue?.fields?.[ta]?.integerValue),s=Number(t?.mapValue?.fields?.[na]?.integerValue);return new Ns(n,s)}convertToRegexValue(e){let t=e.fields?.[Qt]?.mapValue?.fields?.[_s]?.stringValue??"",n=e.fields?.[Qt]?.mapValue?.fields?.[ys]?.stringValue??"";return new Ms(t,n)}convertToInt32Value(e){let t=Number(e.fields?.[Yn]?.integerValue);return new Ls(t)}convertToDecimal128Value(e){let t=e.fields?.[En]?.stringValue??"";return new Os(t)}convertGeoPoint(e){return new pn(Ie(e.latitude),Ie(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=Ra(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ms(e));default:return null}}convertTimestamp(e){let t=mn(e);return new ve(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=_e.fromString(e);$(BE(n),9688,{name:e});let s=new ea(n.get(1),n.get(3)),i=new ee(n.popFirst(5));return s.isEqual(t)||Cn(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}};function d_(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}var ym="AsyncQueue",zu=class{constructor(e=Promise.resolve()){this._E=[],this.oE=!1,this.aE=[],this.uE=null,this.cE=!1,this.lE=!1,this.EE=[],this._r=new wu(this,"async_queue_retry"),this.hE=()=>{let n=Xl();n&&J(ym,"Visibility state changed to "+n.visibilityState),this._r.Xn()},this.TE=e;let t=Xl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hE)}get isShuttingDown(){return this.oE}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.PE(),this.IE(e)}enterRestrictedMode(e){if(!this.oE){this.oE=!0,this.lE=e||!1;let t=Xl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hE)}}enqueue(e){if(this.PE(),this.oE)return new Promise(()=>{});let t=new nn;return this.IE(()=>this.oE&&this.lE?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this._E.push(e),this.RE()))}async RE(){if(this._E.length!==0){try{await this._E[0](),this._E.shift(),this._r.reset()}catch(e){if(!Ys(e))throw e;J(ym,"Operation failed with retryable error: "+e)}this._E.length>0&&this._r.Yn(()=>this.RE())}}IE(e){let t=this.TE.then(()=>(this.cE=!0,e().catch(n=>{throw this.uE=n,this.cE=!1,Cn("INTERNAL UNHANDLED ERROR: ",wm(n)),n}).then(n=>(this.cE=!1,n))));return this.TE=t,t}enqueueAfterDelay(e,t,n){this.PE(),this.EE.indexOf(e)>-1&&(t=0);let s=Of.createAndSchedule(this,e,t,n,i=>this.AE(i));return this.aE.push(s),s}PE(){this.uE&&Z(47125,{VE:wm(this.uE)})}verifyOperationInProgress(){}async dE(){let e;do e=this.TE,await e;while(e!==this.TE)}fE(e){for(let t of this.aE)if(t.timerId===e)return!0;return!1}mE(e){return this.dE().then(()=>{this.aE.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(let t of this.aE)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.dE()})}pE(e){this.EE.push(e)}AE(e){let t=this.aE.indexOf(e);this.aE.splice(t,1)}};function wm(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}var zs=class extends ed{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new zu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new zu(e),this._firestoreClient=void 0,await e}}};function gd(r,e){let t=typeof r=="object"?r:no(),n=typeof r=="string"?r:e||au,s=mi(t,"firestore").getImmediate({identifier:n});if(!s._initialized){let i=Ap("firestore");i&&mE(s,...i)}return s}function Cd(r){if(r._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||oA(r),r._firestoreClient}function oA(r){let e=r._freezeSettings(),t=xT(r._databaseId,r._app?.options.appId||"",r._persistenceKey,r._app?.options.apiKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new jf(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(s){let i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(r._componentsProvider))}var Wu=class extends Ju{constructor(e){super(),this.firestore=e}convertBytes(e){return new tn(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,t)}};var Mn=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},qn=class r extends pd{constructor(e,t,n,s,i,a){super(e,t,n,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new Tr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(Pa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=r._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};qn._jsonSchemaVersion="firestore/documentSnapshot/1.0",qn._jsonSchema={type:xe("string",qn._jsonSchemaVersion),bundleSource:xe("string","DocumentSnapshot"),bundleName:xe("string"),bundle:xe("string")};var Tr=class extends qn{data(e={}){return super.data(e)}},ds=class r{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Mn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Tr(this._firestore,this._userDataWriter,n.key,n,new Mn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{Ge(s._snapshot.query)?Bf(s._snapshot.query):Yf(s.query._query);let c=new Tr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Mn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{let c=new Tr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Mn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter),l=-1,h=-1;return u.type!==0&&(l=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),h=a.indexOf(u.doc.key)),{type:uA(u.type),doc:c,oldIndex:l,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=r._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ps.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function uA(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:r})}}ds._jsonSchemaVersion="firestore/querySnapshot/1.0",ds._jsonSchema={type:xe("string",ds._jsonSchemaVersion),bundleSource:xe("string","QuerySnapshot"),bundleName:xe("string"),bundle:xe("string")};function C_(r){r=Qs(r,Ye);let e=Qs(r.firestore,zs),t=Cd(e);return h_(t,r._key,{source:"server"}).then(n=>lA(e,r,n))}function m_(r,e,t){r=Qs(r,Ye);let n=Qs(r.firestore,zs),s=d_(r.converter,e,t),i=_E(n);return cA(n,[yE(i,"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Gn.none())])}function cA(r,e){let t=Cd(r);return f_(t,e)}function lA(r,e,t){let n=t.docs.get(e._key),s=new Wu(r);return new qn(r,s,e._key,n,new Mn(t.hasPendingWrites,t.fromCache),e.converter)}var p_="@firebase/firestore",g_="4.19.1";(function(e,t=!0){Im(On),Nn(new Tt("firestore",(n,{instanceIdentifier:s,options:i})=>{let a=n.getProvider("app").getImmediate(),u=new zs(new Cu(n.getProvider("auth-internal")),new Eu(a,n.getProvider("app-check-internal")),Nm(a,s),a);return i={useFetchStreams:t,...i},u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),xt(p_,g_,e),xt(p_,g_,"esm2020")})();var md={projectId:"gen-lang-client-0444330995",appId:"1:620002939912:web:dac2171259f5c6fb10adbd",apiKey:"AIzaSyAkFTDWw3pRG8bg3LWW02Cj-Iu5O1UGAJ8",authDomain:"gen-lang-client-0444330995.firebaseapp.com",firestoreDatabaseId:"ai-studio-fintechxclone-ded71318-e1ad-476d-afd1-d95303b81650",storageBucket:"gen-lang-client-0444330995.firebasestorage.app",messagingSenderId:"620002939912",measurementId:"",oAuthClientId:"620002939912-70iv2c8juqdes8trtu7gggqtf64omvve.apps.googleusercontent.com",recaptchaSiteKey:""};var E_=Zc(md),__=gd(E_,md.firestoreDatabaseId),an=Rl(E_),hA=new Br,fA=3,dA=256,pA=/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/,gA=128,CA=/^[a-zA-Z0-9_-]+$/;function mA(r,e,t){let n={error:r instanceof Error?r.message:String(r),authInfo:{userId:an.currentUser?.uid,email:an.currentUser?.email,emailVerified:an.currentUser?.emailVerified,isAnonymous:an.currentUser?.isAnonymous,tenantId:an.currentUser?.tenantId,providerInfo:an.currentUser?.providerData?.map(s=>({providerId:s.providerId,email:s.email}))||[]},operationType:e,path:t};throw console.error("Firestore Error: ",JSON.stringify(n)),new Error(JSON.stringify(n))}async function EA(){try{await C_(rc(__,"test","connection"))}catch(r){r instanceof Error&&r.message.includes("the client is offline")&&console.error("Please check your Firebase configuration.")}}EA();function Ed(r){let e=r.trim().slice(0,dA);return e.length<fA?{valid:!1,normalized:e,error:"Please enter a website URL (e.g., Example.com)"}:pA.test(e)?{valid:!0,normalized:e}:{valid:!1,normalized:e,error:"Please enter a valid domain or URL (e.g., Example.com)"}}async function y_(r){let e=Ed(r);if(!e.valid)throw new Error(e.error||"Invalid website URL");let n=(await vl(an,hA)).user,s=`sub_${n.uid.replace(/[^a-zA-Z0-9_-]/g,"").slice(0,40)}_${Date.now()}`.slice(0,gA);if(!CA.test(s))throw new Error("Invalid submission ID generated");let i=`submissions/${s}`;try{await m_(rc(__,"submissions",s),{uid:n.uid,websiteUrl:e.normalized,status:"pending",createdAt:td()})}catch(a){mA(a,"write",i)}return{user:n,websiteUrl:e.normalized}}_A();yA();var wA=`
.fintechx-hero-url-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}
.fintechx-hero-url-shell {
  width: min(630px, 90vw);
  padding: 5px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.45);
  border: 1.5px solid rgba(255, 255, 255, 0.88);
  box-shadow: 0 14px 34px rgba(35, 100, 195, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-sizing: border-box;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.fintechx-hero-url-shell:focus-within {
  box-shadow: 0 16px 40px rgba(17, 110, 252, 0.26), 0 0 0 3px rgba(66, 152, 255, 0.28), inset 0 1px 1px rgba(255, 255, 255, 1);
}
.fintechx-hero-url-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 66px;
  padding: 6px 7px 6px 14px;
  border-radius: 9999px;
  background: linear-gradient(180deg, rgba(231, 242, 255, 0.92) 0%, rgba(220, 236, 255, 0.96) 100%);
  border: 1.5px solid rgba(255, 255, 255, 0.96);
  box-shadow: inset 0 2px 6px rgba(59, 130, 246, 0.08);
  box-sizing: border-box;
  gap: 12px;
  margin: 0;
}
.fintechx-hero-url-favicon-box {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid rgba(17, 110, 252, 0.14);
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.08);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.fintechx-hero-url-favicon-img {
  width: 22px;
  height: 22px;
  object-fit: contain;
  border-radius: 4px;
  display: block;
}
.fintechx-hero-url-favicon-placeholder {
  width: 20px;
  height: 20px;
  display: block;
}
.fintechx-hero-url-input {
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-family: "Inter Display", "Inter", system-ui, -apple-system, sans-serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #1d2430;
  padding: 0;
  margin: 0;
}
.fintechx-hero-url-input::placeholder {
  color: #64748b;
  opacity: 0.9;
  font-weight: 500;
}
.fintechx-hero-url-btn {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  height: 52px;
  padding: 0 9px 0 24px;
  border-radius: 9999px;
  background: linear-gradient(180deg, #4298ff 0%, #116efc 100%);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 6px 16px rgba(17, 110, 252, 0.36), inset 0 1px 1px rgba(255, 255, 255, 0.42);
  color: #ffffff;
  font-family: "Inter Display", "Inter", system-ui, -apple-system, sans-serif;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.01em;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
}
.fintechx-hero-url-btn:hover:not(:disabled) {
  filter: brightness(1.05);
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(17, 110, 252, 0.44), inset 0 1px 1px rgba(255, 255, 255, 0.5);
}
.fintechx-hero-url-btn:active:not(:disabled) {
  transform: translateY(0);
}
.fintechx-hero-url-btn:disabled {
  opacity: 0.75;
  cursor: wait;
}
.fintechx-hero-url-btn-icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 5px rgba(15, 23, 42, 0.12);
}
.fintechx-hero-url-feedback {
  margin: 10px 0 0 0;
  font-family: "Inter Display", "Inter", system-ui, -apple-system, sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
}
.fintechx-hero-url-error {
  color: #dc2626;
}
.fintechx-hero-url-success {
  color: #0f766e;
}
.fintechx-hero-url-user {
  color: #334155;
}
@media (max-width: 1439px) and (min-width: 1024px) {
  .fintechx-hero-url-shell { width: min(590px, 88vw); }
  .fintechx-hero-url-form { height: 64px; padding: 6px 7px 6px 13px; }
  .fintechx-hero-url-favicon-box { width: 36px; height: 36px; }
  .fintechx-hero-url-input { font-size: 19px; }
  .fintechx-hero-url-btn { height: 50px; padding: 0 8px 0 22px; font-size: 16.5px; gap: 12px; }
  .fintechx-hero-url-btn-icon { width: 33px; height: 33px; }
}
@media (max-width: 1023px) and (min-width: 640px) {
  .fintechx-hero-url-shell { width: min(520px, 90vw); }
  .fintechx-hero-url-form { height: 60px; padding: 6px 6px 6px 12px; }
  .fintechx-hero-url-favicon-box { width: 34px; height: 34px; }
  .fintechx-hero-url-favicon-img { width: 20px; height: 20px; }
  .fintechx-hero-url-input { font-size: 18px; }
  .fintechx-hero-url-btn { height: 46px; padding: 0 7px 0 18px; font-size: 15.5px; gap: 10px; }
  .fintechx-hero-url-btn-icon { width: 30px; height: 30px; }
}
@media (max-width: 639px) {
  .fintechx-hero-url-shell { width: calc(100vw - 28px); max-width: 420px; padding: 4px; }
  .fintechx-hero-url-form { height: 54px; padding: 4px 5px 4px 10px; gap: 8px; }
  .fintechx-hero-url-favicon-box { width: 30px; height: 30px; }
  .fintechx-hero-url-favicon-img, .fintechx-hero-url-favicon-placeholder { width: 17px; height: 17px; }
  .fintechx-hero-url-input { font-size: 16px; }
  .fintechx-hero-url-btn { height: 44px; padding: 0 6px 0 14px; font-size: 14px; gap: 8px; }
  .fintechx-hero-url-btn-icon { width: 28px; height: 28px; }
}
`;function I_(){if(typeof document>"u")return;let r=document.getElementById("fintechx-hero-url-styles");r||(r=document.createElement("style"),r.id="fintechx-hero-url-styles",document.head.appendChild(r)),r.textContent=wA}I_();function IA(r){let e=r.trim().toLowerCase();if(!e)return null;let n=e.replace(/^(https?:\/\/|\/\/)/i,"").split(/[/?#:]/)[0];return!n||!/^([a-z0-9-]+\.)+[a-z]{2,}$/i.test(n)?null:n}function DA(){return $e("svg",{className:"fintechx-hero-url-favicon-placeholder",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},$e("circle",{cx:"12",cy:"12",r:"9",stroke:"#64748B",strokeWidth:"1.75"}),$e("path",{d:"M3.6 9H20.4M3.6 15H20.4",stroke:"#64748B",strokeWidth:"1.5",strokeLinecap:"round"}),$e("path",{d:"M12 3C14.5 5.4 15.9 8.6 15.9 12C15.9 15.4 14.5 18.6 12 21C9.5 18.6 8.1 15.4 8.1 12C8.1 8.6 9.5 5.4 12 3Z",stroke:"#116EFC",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}))}function TA(){let[r,e]=Zs(""),[t,n]=Zs(!1),[s,i]=Zs(null),[a,u]=Zs(null),[c,l]=Zs(an.currentUser),[h,d]=Zs("primary"),g=IA(r);w_(()=>{d("primary")},[g]),w_(()=>{I_();let k=Lo(an,q=>{l(q)});return()=>k()},[]);let w=null;g&&h!=="failed"&&(w=h==="primary"?`https://www.google.com/s2/favicons?domain=${encodeURIComponent(g)}&sz=64`:`https://icons.duckduckgo.com/ip3/${encodeURIComponent(g)}.ico`);let D=async k=>{k&&typeof k.preventDefault=="function"&&k.preventDefault(),i(null),u(null);let q=Ed(r);if(!q.valid){i(q.error||"Please enter a valid website URL (e.g., Example.com)");return}n(!0);try{let{user:Q,websiteUrl:se}=await y_(r);u(`Authenticated as ${Q.displayName||Q.email||"User"} \xB7 ${se} saved`)}catch(Q){let se=Q instanceof Error?Q.message:String(Q);se.includes("auth/popup-closed-by-user")?i("Sign-in popup was closed before completing authentication."):i(se)}finally{n(!1)}},P=k=>{k.key==="Enter"&&(k.preventDefault(),D())};return $e("div",{className:"fintechx-hero-url-wrap"},$e("div",{className:"fintechx-hero-url-shell"},$e("form",{className:"fintechx-hero-url-form",onSubmit:D,noValidate:!0},$e("span",{className:"fintechx-hero-url-favicon-box","aria-hidden":"true"},w?$e("img",{key:w,src:w,alt:"",className:"fintechx-hero-url-favicon-img",onError:()=>{d(k=>k==="primary"?"backup":"failed")}}):DA()),$e("input",{type:"url",inputMode:"url",autoComplete:"url",placeholder:"Example.com","aria-label":"Enter your website URL",value:r,onChange:k=>{e(k.target.value),s&&i(null)},onKeyDown:P,disabled:t,className:"fintechx-hero-url-input"}),$e("button",{type:"submit",disabled:t,className:"fintechx-hero-url-btn","aria-label":"Get started"},$e("span",{className:"fintechx-hero-url-btn-text"},t?"Connecting...":"Get started"),$e("span",{className:"fintechx-hero-url-btn-icon","aria-hidden":"true"},$e("svg",{width:"14",height:"10",viewBox:"0 0 13 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$e("path",{d:"M8.5 1L12 4.5M12 4.5L8.5 8M12 4.5H1",stroke:"#116EFC",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})))))),s?$e("p",{className:"fintechx-hero-url-feedback fintechx-hero-url-error",role:"alert"},s):null,!s&&a?$e("p",{className:"fintechx-hero-url-feedback fintechx-hero-url-success",role:"status"},a):null,!s&&!a&&c?$e("p",{className:"fintechx-hero-url-feedback fintechx-hero-url-user"},`Signed in as ${c.displayName||c.email}`):null)}var qS=TA;export{TA as HeroUrlAuthWidget,qS as default};
/*! Bundled license information:

@firebase/util/dist/postinstall.mjs:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-Bz2J43nW.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

re2js/build/index.js:
  (*!
  * re2js
  * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
  *
  * @version v2.9.1
  * @author Oleksii Vasyliev
  * @homepage https://github.com/le0pard/re2js#readme
  * @repository [object Object]
  * @license MIT
  *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * Copyright 2021 M.Vokhmentsev
   *
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (* Copyright 2024 Google LLC* @license *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law | agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (* Copyright 2024 Google LLC* @license *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-aOCKfaeU.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
