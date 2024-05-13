/*! For license information please see kbr-budgetcalc.js.LICENSE.txt */
(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,t,i)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var a;const l=window,h=l.trustedTypes,u=h?h.emptyScript:"",d=l.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:p};class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var s;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:c).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:c;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var $;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:v}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.1");const y=window,b=y.trustedTypes,g=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,_="?"+f,A=`<${_}>`,S=document,x=(t="")=>S.createComment(t),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,j=/>/g,U=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),N=/'/g,V=/"/g,M=/^(?:script|style|textarea|title)$/i,P=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),H=P(1),T=(P(2),Symbol.for("lit-noChange")),R=Symbol.for("lit-nothing"),I=new WeakMap,k=S.createTreeWalker(S,129,null,!1),D=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":"",o=C;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,u=0;for(;u<i.length&&(o.lastIndex=u,l=o.exec(i),null!==l);)u=o.lastIndex,o===C?"!--"===l[1]?o=O:void 0!==l[1]?o=j:void 0!==l[2]?(M.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=U):void 0!==l[3]&&(o=U):o===U?">"===l[0]?(o=null!=r?r:C,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?U:'"'===l[3]?V:N):o===V||o===N?o=U:o===O||o===j?o=C:(o=U,r=void 0);const d=o===U&&t[e+1].startsWith("/>")?" ":"";n+=o===C?i+A:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+f+d):i+f+(-2===h?(s.push(void 0),e):d)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(a):a,s]};class L{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,h]=D(t,e);if(this.el=L.createElement(l,i),k.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=k.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(f)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(f),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?W:"?"===e[1]?K:"@"===e[1]?Z:J})}else a.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(M.test(s.tagName)){const t=s.textContent.split(f),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],x()),k.nextNode(),a.push({type:2,index:++r});s.append(t[e],x())}}}else if(8===s.nodeType)if(s.data===_)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(f,t+1));)a.push({type:7,index:r}),t+=f.length-1}r++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,s){var r,n,o,a;if(e===T)return e;let l=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl;const h=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Co)&&void 0!==o?o:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=B(t,l._$AS(t,e.values),l,s)),e}class z{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);k.currentNode=r;let n=k.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new F(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new Y(n,this,t)),this.u.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(n=k.nextNode(),o++)}return r}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{constructor(t,e,i,s){var r;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),E(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==T&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>w(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==R&&E(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=L.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(i);else{const t=new z(r,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new L(t)),e}k(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new F(this.O(x()),this.O(x()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class J{constructor(t,e,i,s,r){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=B(this,t,e,0),n=!E(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=B(this,s[i+o],e,o),a===T&&(a=this._$AH[o]),n||(n=!E(a)||a!==this._$AH[o]),a===R?t=R:t!==R&&(t+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}const q=b?b.emptyScript:"";class K extends J{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class Z extends J{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:R)===T)return;const s=this._$AH,r=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==R&&(s===R||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const G=y.litHtmlPolyfillSupport;var Q,X;null==G||G(L,F),(null!==($=y.litHtmlVersions)&&void 0!==$?$:y.litHtmlVersions=[]).push("2.6.1");class tt extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,r;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new F(e.insertBefore(x(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}tt.finalized=!0,tt._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2"),customElements.define("kbr-budgetcalc",class extends tt{static get properties(){return{listitems:{type:String},itemname:{type:String},currentuser:{type:String},reviewmode:{type:Boolean},inputobj:{type:Object},outputobj:{type:Object},itemValues:{type:Object},statusColors:{type:Object}}}static getMetaConfig(){return{controlName:"kbr-budgetcalc",fallbackDisableSubmit:!1,description:"Yearly budget calculator",iconUrl:"repeating-section",groupName:"KBR",version:"1.0",properties:{listitems:{type:"string",title:"List Items",description:"List of items to be budgeted"},itemname:{type:"string",title:"Item Name",description:"Singular Item Name such as Cost Center or Budget Code"},currentuser:{type:"string",title:"Context current user email",description:"Please enter the context current user email"},reviewmode:{title:"Enable Review Mode",type:"boolean",defaultValue:!1},inputobj:{type:"object",title:"Input Object",description:"Enter the object from previous control here"},outputobj:{type:"object",title:"Object Output",description:"this is for output only you do not need to use it",isValueField:!0,properties:{budgetItems:{type:"array",title:"Budget Items",items:{type:"object",properties:{itemName:{type:"string",title:"Item Name",description:"Name of the budget item"},monthlyValues:{type:"object",title:"Monthly Values",properties:{January:{type:"number",title:"January"},February:{type:"number",title:"February"},March:{type:"number",title:"March"},April:{type:"number",title:"April"},May:{type:"number",title:"May"},June:{type:"number",title:"June"},July:{type:"number",title:"July"},August:{type:"number",title:"August"},September:{type:"number",title:"September"},October:{type:"number",title:"October"},November:{type:"number",title:"November"},December:{type:"number",title:"December"}}},total:{type:"number",title:"Total",description:"Total amount for the budget item"},status:{type:"string",title:"Approval Status",enum:["Rejected","Approved",""],description:"Approval status of the budget item"},comment:{type:"string",title:"Latest Comment",description:"Last recorded comments or notes"},contextuser:{type:"string",title:"Approver Email",description:"Email of the approver"},lastUpdated:{type:"string",title:"Last Updated",description:"Date and time when the item was last updated"},history:{type:"object",title:"History",properties:{status:{type:"string",title:"Approval Status",enum:["Rejected","Approved",""],description:"Approval status of the budget item"},comment:{type:"string",title:"Comment",description:"Last recorded comments or notes"},contextuser:{type:"string",title:"Context user",description:"Email of the approver"},logtime:{type:"string",title:"Log time",description:"Date and time when the item was last updated"}}}}}}}}},events:["ntx-value-change"],standardProperties:{fieldLabel:!0,description:!0,readOnly:!0}}}static get styles(){return n`
      :host {
        display: block;
      }
      .card {
        margin-bottom: 20px;
      }
      .currency-input {
        text-align: right;
      }
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .badge {
        margin: 0 0.25rem;
      }
      .card-footer {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        transition: all 0.3s ease;
      }
      .btn-group {
        flex-grow: 1;
        transition: all 0.3s ease;
        display: flex;
        justify-content: space-between;
      }
      .comments-area {
        width: 100%;
        margin-top: 10px;
      }
      .comments-control {
        transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease, width 0.3s ease, margin 0.3s ease;
        max-height: 0;
        width: 0;
        opacity: 0;
        visibility: hidden;
        overflow: hidden;
        padding: 0;
        margin: 0;
        display: none;
      }
      .comments-control.active {
        max-height: 200px;
        opacity: 1;
        visibility: visible;
        width: 100%;
        padding: .375rem .75rem;
        display: block;
      }
      .input-group {
        padding-bottom: 10px;
      }
      @media (max-width: 576px) {
        .month-input {
          flex: 0 0 100%;
          max-width: 100%;
        }
      }
      @media (min-width: 577px) and (max-width: 768px) {
        .month-input {
          flex: 0 0 50%;
          max-width: 50%;
        }
      }
      @media (min-width: 769px) and (max-width: 992px) {
        .month-input {
          flex: 0 0 33.33%;
          max-width: 33.33%;
        }
      }
      @media (min-width: 993px) {
        .month-input {
          flex: 0 0 25%;
          max-width: 25%;
        }
      }
    `}constructor(){super(),this.listitems="",this.itemname="",this.reviewmode=!1,this.inputobj={},this.outputobj={},this.itemValues={},this.statusColors={},this.numberFormatter=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}updated(t){(t.has("listitems")||t.has("inputobj"))&&this.syncDataWithInput()}syncDataWithInput(){const t=this.listitems.split(",").map((t=>t.trim()));t.forEach((t=>{const e=this.inputobj.budgetItems?.find((e=>e.itemName===t));this.itemValues[t]=e?{...this.initializeMonthlyValues(),...e.monthlyValues,approval:e.approval,comments:e.comments}:this.initializeMonthlyValues()})),Object.keys(this.itemValues).forEach((e=>{t.includes(e)||delete this.itemValues[e]})),this.requestUpdate()}initializeMonthlyValues(){return["January","February","March","April","May","June","July","August","September","October","November","December"].reduce(((t,e)=>(t[e]=null,t)),{})}createHeader(t){const e=this.itemValues[t]?.approval,i=e?H`<div class="badge fs-6 rounded-pill ${"Approved"===e?"bg-success":"bg-danger"}">${e}</div>`:"";return H`
      <div class="card-header d-flex justify-content-between align-items-center">
        <div>
          <div class="badge fs-6 bg-dark">${this.itemname?this.itemname:"Item"}: ${t}</div>
        </div>
        <div>
          ${i}
          <div class="badge fs-6 rounded-pill bg-primary">Total: $${this.calculateTotalForItem(t)}</div>
        </div>
      </div>
    `}createBody(t){return H`
      <div class="card-body d-flex flex-wrap">
        ${this.createMonthInputs(t)}
      </div>
    `}createFooter(t){const e=this.statusColors[t]||{selectedStatus:""},i=this.itemValues[t]?.comment||"",s=`comments-${t}`;return H`
      <div class="card-footer">
        ${this.reviewmode?H`
        <div class="btn-group" role="group" aria-label="Approval Status">
          ${["Rejected","Approved"].map((i=>H`
            <button type="button"
                    class="${this.getButtonClass(i,e.selectedStatus)}"
                    @click="${()=>this.handleApprovalStatusChange(t,i)}">${i}</button>
          `))}
        </div>`:""}
        <div class="comments-area">
          <label for="${s}" class="form-label">Comments:</label>
          <textarea id="${s}" class="form-control comments-control active"
                    placeholder="Enter comments"
                    @input="${this.autoResize}"
                    style="height: auto; min-height: 38px;"></textarea>
          <button type="button" class="btn btn-primary mt-2"
                  @click="${()=>this.handleSaveComment(t)}">Save</button>
        </div>
        ${!this.reviewmode&&i?H`
        <div class="comments-area mt-2">
          <label for="${s}-latest" class="form-label">Latest Comment:</label>
          <textarea id="${s}-latest" class="form-control comments-control active"
                    ?disabled="${this.readOnly}"
                    style="height: auto; min-height: 38px;">${i}</textarea>
        </div>`:""}
      </div>
    `}autoResize(t){t.target.style.height="auto",t.target.style.height=`${t.target.scrollHeight}px`}getButtonClass(t,e){const i="btn";return e===t?"Approved"===t?`${i} btn-success`:`${i} btn-danger`:"Approved"===t?`${i} btn-outline-success`:`${i} btn-outline-danger`}createMonthInputs(t){const e=["January","February","March","April","May","June","July","August","September","October","November","December"],i=this.itemValues[t]||this.initializeMonthlyValues();return H`
      ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(((s,r)=>H`
        <div class="mb-2 px-1 month-input">
          <label for="${s}-${t}" class="form-label">${e[r]}</label>
          <div class="input-group">
            <span class="input-group-text">$</span>
            <input type="text" class="form-control currency-input" id="${s}-${t}"
              aria-label="Amount for ${e[r]}"
              ?disabled="${this.readOnly}"
              placeholder="0.00"
              .value="${null!==i[e[r]]?this.formatNumber(i[e[r]]):""}"
              @blur="${i=>this.handleValueChange(t,e[r],parseFloat(i.target.value.replace(/[^\d.-]/g,""))||null)}">
          </div>
        </div>
      `))}
    `}handleValueChange(t,e,i){this.itemValues[t]||(this.itemValues[t]=this.initializeMonthlyValues()),this.itemValues[t][e]=i,this.updateOutputObject(),this.requestUpdate()}handleApprovalStatusChange(t,e){this.statusColors[t]={borderColor:{Approved:"border-success",Rejected:"border-danger"}[e]||"border-primary",selectedStatus:e},this.itemValues[t]||(this.itemValues[t]=this.initializeMonthlyValues()),this.itemValues[t].status=e,this.itemValues[t].lastUpdated=(new Date).toISOString(),this.updateOutputObject(),this.requestUpdate()}handleSaveComment(t){const e=this.shadowRoot.getElementById(`comments-${t}`),i=e.value.trim();if(i){const s={status:this.itemValues[t].status||"",comment:i,contextuser:this.currentuser,logtime:(new Date).toISOString()};this.itemValues[t].history||(this.itemValues[t].history=[]),this.itemValues[t].history.push(s),this.itemValues[t].comment=i,e.value="",this.updateOutputObject(),this.requestUpdate()}}updateOutputObject(){this.outputobj={budgetItems:Object.keys(this.itemValues).map((t=>({itemName:t,monthlyValues:this.itemValues[t],total:this.calculateTotalForItem(t),status:this.itemValues[t].status||"",comment:this.itemValues[t].comment||"",contextuser:this.currentuser,lastUpdated:(new Date).toISOString(),history:this.itemValues[t].history||[]})))};const t=new CustomEvent("ntx-value-change",{bubbles:!0,cancelable:!1,composed:!0,detail:this.outputobj});this.dispatchEvent(t)}getButtonClass(t,e){const i="btn";return e===t?"Approved"===t?`${i} btn-success`:`${i} btn-danger`:"Approved"===t?`${i} btn-outline-success`:`${i} btn-outline-danger`}calculateTotalForItem(t){if(!this.itemValues[t])return this.formatNumber(0);const e=Object.values(this.itemValues[t]).filter((t=>null!==t&&"number"==typeof t)).reduce(((t,e)=>t+(parseFloat(e)||0)),0);return this.formatNumber(e)}formatNumber(t){return this.numberFormatter.format(t)}render(){return H`
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <div>
        ${this.listitems.split(",").map((t=>H`
          <div class="card">
            ${this.createHeader(t)}
            ${this.createBody(t)}
            ${this.createFooter(t)}
          </div>
        `))}
      </div>
    `}})})();