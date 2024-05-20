/*! For license information please see neo-unit.js.LICENSE.txt */
(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(i,t))}return t}toString(){return this.cssText}}const s=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new n(o,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var l;const a=window,u=a.trustedTypes,c=u?u.emptyScript:"",h=a.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:p};class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const o=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,o)=>{e?i.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((e=>{const o=document.createElement("style"),n=t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,i.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var o;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:d).toAttribute(e,i.type);this._$El=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:d;this._$El=n,this[n]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var v;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:b}),(null!==(l=a.reactiveElementVersions)&&void 0!==l?l:a.reactiveElementVersions=[]).push("1.6.1");const y=window,f=y.trustedTypes,g=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,_="?"+$,A=`<${_}>`,x=document,S=(t="")=>x.createComment(t),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,P=/>/g,O=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),T=/'/g,F=/"/g,M=/^(?:script|style|textarea|title)$/i,H=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),k=H(1),B=(H(2),Symbol.for("lit-noChange")),N=Symbol.for("lit-nothing"),R=new WeakMap,z=x.createTreeWalker(x,129,null,!1),L=(t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":"",r=w;for(let e=0;e<i;e++){const i=t[e];let l,a,u=-1,c=0;for(;c<i.length&&(r.lastIndex=c,a=r.exec(i),null!==a);)c=r.lastIndex,r===w?"!--"===a[1]?r=U:void 0!==a[1]?r=P:void 0!==a[2]?(M.test(a[2])&&(n=RegExp("</"+a[2],"g")),r=O):void 0!==a[3]&&(r=O):r===O?">"===a[0]?(r=null!=n?n:w,u=-1):void 0===a[1]?u=-2:(u=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?O:'"'===a[3]?F:T):r===F||r===T?r=O:r===U||r===P?r=w:(r=O,n=void 0);const h=r===O&&t[e+1].startsWith("/>")?" ":"";s+=r===w?i+A:u>=0?(o.push(l),i.slice(0,u)+"$lit$"+i.slice(u)+$+h):i+$+(-2===u?(o.push(void 0),e):h)}const l=s+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(l):l,o]};class D{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const r=t.length-1,l=this.parts,[a,u]=L(t,e);if(this.el=D.createElement(a,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=z.nextNode())&&l.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=u[s++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?G:"@"===e[1]?J:V})}else l.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(M.test(o.tagName)){const t=o.textContent.split($),e=t.length-1;if(e>0){o.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],S()),z.nextNode(),l.push({type:2,index:++n});o.append(t[e],S())}}}else if(8===o.nodeType)if(o.data===_)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf($,t+1));)l.push({type:7,index:n}),t+=$.length-1}n++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function j(t,e,i=t,o){var n,s,r,l;if(e===B)return e;let a=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const u=E(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==u&&(null===(s=null==a?void 0:a._$AO)||void 0===s||s.call(a,!1),void 0===u?a=void 0:(a=new u(t),a._$AT(t,i,o)),void 0!==o?(null!==(r=(l=i)._$Co)&&void 0!==r?r:l._$Co=[])[o]=a:i._$Cl=a),void 0!==a&&(e=j(t,a._$AS(t,e.values),a,o)),e}class I{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);z.currentNode=n;let s=z.nextNode(),r=0,l=0,a=o[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new K(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new Y(s,this,t)),this.u.push(e),a=o[++l]}r!==(null==a?void 0:a.index)&&(s=z.nextNode(),r++)}return n}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{constructor(t,e,i,o){var n;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cm=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),E(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==B&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==N&&E(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=D.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new I(n,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new D(t)),e}k(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new K(this.O(S()),this.O(S()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,i,o,n){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=j(this,t,e,0),s=!E(t)||t!==this._$AH&&t!==B,s&&(this._$AH=t);else{const o=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=j(this,o[i+r],e,r),l===B&&(l=this._$AH[r]),s||(s=!E(l)||l!==this._$AH[r]),l===N?t=N:t!==N&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}s&&!o&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}const W=f?f.emptyScript:"";class G extends V{constructor(){super(...arguments),this.type=4}j(t){t&&t!==N?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class J extends V{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=j(this,t,e,0))&&void 0!==i?i:N)===B)return;const o=this._$AH,n=t===N&&o!==N||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==N&&(o===N||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const Q=y.litHtmlPolyfillSupport;var Z,X;null==Q||Q(D,K),(null!==(v=y.litHtmlVersions)&&void 0!==v?v:y.litHtmlVersions=[]).push("2.6.1");class tt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,n;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=s._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=r=new K(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return B}}tt.finalized=!0,tt._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");const it={"Meter (m)":{unit:"Meter",symbol:"m"},"Centimeter (cm)":{unit:"Centimeter",symbol:"cm"},"Kilometer (km)":{unit:"Kilometer",symbol:"km"},"Inch (in)":{unit:"Inch",symbol:"in"},"Foot (ft)":{unit:"Foot",symbol:"ft"},"Mile (mi)":{unit:"Mile",symbol:"mi"},"Kilogram (kg)":{unit:"Kilogram",symbol:"kg"},"Gram (g)":{unit:"Gram",symbol:"g"},"Pound (lb)":{unit:"Pound",symbol:"lb"},"Ounce (oz)":{unit:"Ounce",symbol:"oz"},"Second (s)":{unit:"Second",symbol:"s"},"Minute (min)":{unit:"Minute",symbol:"min"},"Hour (hr)":{unit:"Hour",symbol:"hr"},"Day (day)":{unit:"Day",symbol:"day"},"Liter (L)":{unit:"Liter",symbol:"L"},"Milliliter (mL)":{unit:"Milliliter",symbol:"mL"},"Cubic Meter (m³)":{unit:"Cubic Meter",symbol:"m³"},"Cubic Centimeter (cm³)":{unit:"Cubic Centimeter",symbol:"cm³"},"Cubic Inch (in³)":{unit:"Cubic Inch",symbol:"in³"},"Cubic Foot (ft³)":{unit:"Cubic Foot",symbol:"ft³"},"Cubic Yard (yd³)":{unit:"Cubic Yard",symbol:"yd³"},"Fluid Ounce (fl oz)":{unit:"Fluid Ounce",symbol:"fl oz"},"Pint (pt)":{unit:"Pint",symbol:"pt"},"Quart (qt)":{unit:"Quart",symbol:"qt"},"Gallon (gal)":{unit:"Gallon",symbol:"gal"},"Celsius (°C)":{unit:"Celsius",symbol:"°C"},"Fahrenheit (°F)":{unit:"Fahrenheit",symbol:"°F"},"Kelvin (K)":{unit:"Kelvin",symbol:"K"},"Square Meter (m²)":{unit:"Square Meter",symbol:"m²"},"Square Kilometer (km²)":{unit:"Square Kilometer",symbol:"km²"},"Square Centimeter (cm²)":{unit:"Square Centimeter",symbol:"cm²"},"Square Inch (in²)":{unit:"Square Inch",symbol:"in²"},"Square Foot (ft²)":{unit:"Square Foot",symbol:"ft²"},"Square Yard (yd²)":{unit:"Square Yard",symbol:"yd²"},"Acre (ac)":{unit:"Acre",symbol:"ac"},"Hectare (ha)":{unit:"Hectare",symbol:"ha"},"Metric Ton (t)":{unit:"Metric Ton",symbol:"t"},"Short Ton (US ton)":{unit:"Short Ton",symbol:"US ton"},"Long Ton (Imperial ton)":{unit:"Long Ton",symbol:"Imperial ton"},"Astronomical Unit (AU)":{unit:"Astronomical Unit",symbol:"AU"},"Bit (b)":{unit:"Bit",symbol:"b"},"Byte (B)":{unit:"Byte",symbol:"B"},"Kilobyte (KB)":{unit:"Kilobyte",symbol:"KB"},"Megabyte (MB)":{unit:"Megabyte",symbol:"MB"},"Gigabyte (GB)":{unit:"Gigabyte",symbol:"GB"},"Terabyte (TB)":{unit:"Terabyte",symbol:"TB"},"Joule (J)":{unit:"Joule",symbol:"J"},"Calorie (cal)":{unit:"Calorie",symbol:"cal"},"Kilowatt-hour (kWh)":{unit:"Kilowatt-hour",symbol:"kWh"},"Watt (W)":{unit:"Watt",symbol:"W"},"Kilowatt (kW)":{unit:"Kilowatt",symbol:"kW"},"Horsepower (hp)":{unit:"Horsepower",symbol:"hp"},"Pascal (Pa)":{unit:"Pascal",symbol:"Pa"},"Bar (bar)":{unit:"Bar",symbol:"bar"},"Atmosphere (atm)":{unit:"Atmosphere",symbol:"atm"},"Ampere (A)":{unit:"Ampere",symbol:"A"},"Volt (V)":{unit:"Volt",symbol:"V"},"Ohm (Ω)":{unit:"Ohm",symbol:"Ω"},"Electronvolt (eV)":{unit:"Electronvolt",symbol:"eV"},"British Thermal Unit (BTU)":{unit:"British Thermal Unit",symbol:"BTU"},unit:{unit:"unit",symbol:"unit"}};class ot extends tt{static getMetaConfig(){return{controlName:"neo-unit",fallbackDisableSubmit:!1,description:"Control for displaying units of measurement",iconUrl:"https://jsdenintex.github.io/plugins/neo-unit/dist/unit-icon.svg",groupName:"Custom controls",version:"1.0",properties:{unittype:{title:"Select unit of measurement",type:"string",enum:Object.keys(it).filter((t=>"unit"!==t)).map((t=>`${t}`)),verticalLayout:!0,defaultValue:"Meter (m)"},unitvalue:{type:"number",title:"Unit value",description:"Decimal unit value",staticProperties:!0},decimalplaces:{type:"integer",title:"Decimal places",description:"enter 0 for none, 1 for .0, 2 for .01 etc.",defaultValue:0},boolRound:{type:"boolean",title:"Enable rounding",description:"Allow values to be rounded. e.g. for 2 decimal places 12.129 becomes 12.13",defaultValue:!1},boolFixed:{type:"boolean",title:"Ensure fixed value",description:"Ensure fixed values are output, with this enabled 10.10 will output as 10.10 instead of 10.1",defaultValue:!1},outputobj:{type:"object",title:"Object Output",description:"this is for output only please ignore.",isValueField:!0,properties:{budgetItems:{type:"array",title:"Budget Items",items:{type:"object",properties:{unittype:{title:"Select unit of measurement",type:"string",defaultValue:"Meter (m)"},unitvalue:{type:"number",title:"Unit value",description:"Decimal unit value"},decimalplaces:{type:"integer",title:"Decimal places",description:"enter 0 for none, 1 for .0, 2 for .01 etc."},boolRound:{type:"boolean",title:"Enable rounding",description:"Allow values to be rounded. e.g. for 2 decimal places 12.129 becomes 12.13"},boolFixed:{type:"boolean",title:"Ensure fixed value",description:"Ensure fixed values are output, with this enabled 10.10 will output as 10.10 instead of 10.1"}}}}}}},standardProperties:{fieldLabel:!0,description:!0},events:["ntx-value-change"]}}static properties={unittype:{type:String},unitvalue:{type:Number},decimalplaces:{type:Number},boolRound:{type:Boolean},boolFixed:{type:Boolean},outputobj:{type:Object}};constructor(){super(),this.unittype="unit",this.unitvalue="",this.decimalplaces=0,this.boolRound=!1,this.boolFixed=!1,this.outputobj={}}updated(t){t.has("unittype")&&(this.unittype=this.unittype||"unit")}static get styles(){const{cssRules:t}=document.styleSheets[0];return[s([Object.values(t).map((t=>t.cssText)).join("\n")]),s`
        .neo-unit-control {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          width: 100%;
          box-sizing: border-box;
        }

        .neo-unit-control .input-unit-group-append {
          border-bottom-left-radius: 4px;
          border-top-left-radius: 4px;
          border-color: #898F94;
          background: #FFFFFF;
          font-size: 14px;
          display: flex;
        }
        
        .neo-unit-control .input-unit-group-append .neo-btn-input-icon:last-child {
          border-bottom-left-radius: 4px;
          border-top-left-radius: 4px;
        }
        
        .neo-unit-control .neo-unit-btn-icon {
          color: #006BD6;
          font-size: 20px;
          padding-left: 7px;
          padding-right: 7px;
        }
        
        .neo-unit-control .input-unit-group-append .neo-unit-btn {
          border-radius: 4px 0 0 4px;
          cursor: default;
          border-left: 1px solid;
          border-right: none;
          border-color: inherit;
          min-width: 36px;
          color: #006bd6;
          font-size: 20px;
          font-style: normal;
          overflow: hidden;
          line-height: var(--bs-body-line-height);
        }     
        
        .neo-btn-input-icon {
          border-left: 1px solid;
          border-right: 1px solid;
          border-top: 1px solid;
          border-bottom: 1px solid;
          border-color: inherit;
          margin-left: 0;
          margin-right: 0;
          margin-bottom: 0;
          background-color: transparent;
          cursor: pointer;
        }
        
      .neo-unit-control .nx-zinc-control-input {
        display: flex;  
        flex: 1;
      }

      .neo-unit-control .nx-zinc-control-input .input-group {
        align-items: stretch;
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        position: relative;
        width: 100%;
      }

      .neo-unit-control > div.nx-zinc-control-input > input {
        word-break: break-word;
        user-select: none;
        box-sizing: border-box;
        margin: 0;
        appearance: none;
        display: flex;
        flex-grow: 1;
        font-weight: 400;
        line-height: var(--bs-body-line-height);
        padding: .4375rem .75rem;
        transition: none;
        width: 100%;
        height: auto;
        border: 1px solid #898F94;
        text-align: right;
        caret-color: #161718;
        color: var(--bs-body-color);
        border-color: #898F94;
        font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
        background: #FFFFFF;
        font-size: 14px;
        border-radius: 0 4px 4px 0;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        outline: none;
        outline-offset: 0;
      }

      .neo-unit-control > div.nx-zinc-control-input > input::placeholder {
        color: var(--bs-body-color);
      }
      `]}onChange(t){const e=t.target.value.trim(),i=parseFloat(e);let o="";if(""!==e){if(!isNaN(i)){o=i.toLocaleString(void 0,{minimumFractionDigits:this.decimalplaces,maximumFractionDigits:this.decimalplaces}),this.boolFixed&&(o=o.padEnd(o.indexOf(".")+this.decimalplaces+1,"0"));const t={unittype:this.unittype,unitvalue:i,decimalplaces:this.decimalplaces,boolRound:this.boolRound,boolFixed:this.boolFixed},e=new CustomEvent("ntx-value-change",{bubbles:!0,cancelable:!1,composed:!0,detail:t});this.dispatchEvent(e)}}else{const t=new CustomEvent("ntx-value-change",{bubbles:!0,cancelable:!1,composed:!0,detail:""});this.dispatchEvent(t)}t.target.value=o}render(){const t=this.decimalplaces>=0?this.decimalplaces:0,e=(0).toLocaleString(void 0,{minimumFractionDigits:t,maximumFractionDigits:t});let i="";if(""!==this.unitvalue){const e=parseFloat(this.unitvalue);i=this.boolRound?e.toLocaleString(void 0,{minimumFractionDigits:t+1,maximumFractionDigits:t+1}):e.toLocaleString(void 0,{minimumFractionDigits:t,maximumFractionDigits:t}),this.boolFixed&&(i=i.padEnd(i.indexOf(".")+t+1,"0"))}return k`
      <div class="neo-unit-control">
          <div class="input-unit-group-append">
            <button type="button" class="neo-btn-input-icon neo-unit-btn">
              <span>${it[this.unittype].symbol}</span>
            </button>
          </div>
          <div class="nx-zinc-control-input input-group">
            <input type="text"
              data-simple-control="true"
              ntxmaskablenumberinputvalueaccessor=""
              class="form-control nx-theme-input-1 ng-untouched ng-pristine ng-valid"
              inputmode="decimal"
              decimalplaces=${this.decimalplaces}
              placeholder=${e}
              value=${i}
              @blur=${this.onChange}
            >
          </div>
      </div>
    `}}customElements.define("neo-unit",ot)})();