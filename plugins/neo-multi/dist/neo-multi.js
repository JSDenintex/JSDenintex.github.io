/*! For license information please see neo-multi.js.LICENSE.txt */
(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(i,t,s)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var l;const a=window,h=a.trustedTypes,c=h?h.emptyScript:"",d=a.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},u=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u};class $ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var s;const i=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{e?s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),o=t.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=v){var i;const o=this.constructor._$Ep(t,s);if(void 0!==o&&!0===s.reflect){const n=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:p).toAttribute(e,s.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,o=i._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=i.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:p;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var f;$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:$}),(null!==(l=a.reactiveElementVersions)&&void 0!==l?l:a.reactiveElementVersions=[]).push("1.6.1");const _=window,g=_.trustedTypes,y=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,A="?"+m,b=`<${A}>`,S=document,E=(t="")=>S.createComment(t),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,N=/>/g,P=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),U=/'/g,H=/"/g,k=/^(?:script|style|textarea|title)$/i,T=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),R=T(1),M=(T(2),Symbol.for("lit-noChange")),J=Symbol.for("lit-nothing"),L=new WeakMap,j=S.createTreeWalker(S,129,null,!1),D=(t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":"",r=C;for(let e=0;e<s;e++){const s=t[e];let l,a,h=-1,c=0;for(;c<s.length&&(r.lastIndex=c,a=r.exec(s),null!==a);)c=r.lastIndex,r===C?"!--"===a[1]?r=O:void 0!==a[1]?r=N:void 0!==a[2]?(k.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=P):void 0!==a[3]&&(r=P):r===P?">"===a[0]?(r=null!=o?o:C,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?P:'"'===a[3]?H:U):r===H||r===U?r=P:r===O||r===N?r=C:(r=P,o=void 0);const d=r===P&&t[e+1].startsWith("/>")?" ":"";n+=r===C?s+b:h>=0?(i.push(l),s.slice(0,h)+"$lit$"+s.slice(h)+m+d):s+m+(-2===h?(i.push(void 0),e):d)}const l=n+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(l):l,i]};class I{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,h]=D(t,e);if(this.el=I.createElement(a,s),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=j.nextNode())&&l.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const s=h[n++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?W:"?"===e[1]?F:"@"===e[1]?Z:V})}else l.push({type:6,index:o})}for(const e of t)i.removeAttribute(e)}if(k.test(i.tagName)){const t=i.textContent.split(m),e=t.length-1;if(e>0){i.textContent=g?g.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],E()),j.nextNode(),l.push({type:2,index:++o});i.append(t[e],E())}}}else if(8===i.nodeType)if(i.data===A)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(m,t+1));)l.push({type:7,index:o}),t+=m.length-1}o++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function z(t,e,s=t,i){var o,n,r,l;if(e===M)return e;let a=void 0!==i?null===(o=s._$Co)||void 0===o?void 0:o[i]:s._$Cl;const h=x(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,s,i)),void 0!==i?(null!==(r=(l=s)._$Co)&&void 0!==r?r:l._$Co=[])[i]=a:s._$Cl=a),void 0!==a&&(e=z(t,a._$AS(t,e.values),a,i)),e}class K{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:s},parts:i}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(s,!0);j.currentNode=o;let n=j.nextNode(),r=0,l=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new B(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new G(n,this,t)),this.u.push(e),a=i[++l]}r!==(null==a?void 0:a.index)&&(n=j.nextNode(),r++)}return o}p(t){let e=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class B{constructor(t,e,s,i){var o;this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cm=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),x(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==M&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>w(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==J&&x(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=I.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.p(s);else{const t=new K(o,this),e=t.v(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new I(t)),e}k(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new B(this.O(E()),this.O(E()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,s,i,o){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=J}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=z(this,t,e,0),n=!x(t)||t!==this._$AH&&t!==M,n&&(this._$AH=t);else{const i=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=z(this,i[s+r],e,r),l===M&&(l=this._$AH[r]),n||(n=!x(l)||l!==this._$AH[r]),l===J?t=J:t!==J&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!i&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}const q=g?g.emptyScript:"";class F extends V{constructor(){super(...arguments),this.type=4}j(t){t&&t!==J?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class Z extends V{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=z(this,t,e,0))&&void 0!==s?s:J)===M)return;const i=this._$AH,o=t===J&&i!==J||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==J&&(i===J||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const Q=_.litHtmlPolyfillSupport;var X,Y;null==Q||Q(I,B),(null!==(f=_.litHtmlVersions)&&void 0!==f?f:_.litHtmlVersions=[]).push("2.6.1");class tt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var i,o;const n=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new B(e.insertBefore(E(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}}tt.finalized=!0,tt._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.2.2");class st extends tt{static getMetaConfig(){return{controlName:"neo-multi",fallbackDisableSubmit:!1,description:"Provide a multiple select dropdown based on a data source variable.",iconUrl:"Lookup",groupName:"Visual Data",version:"1.0",properties:{dsvdata:{type:"string",title:"JSON Input",description:"Provide the data source variable as a JSON array."},displayKey:{type:"string",title:"Display Key",description:"Specify the key of the object to be displayed in the dropdown."},valueKey:{type:"string",title:"Value Key",description:"Specify the key of the object to be used as the value in the output JSON."},outputJSON:{type:"string",title:"Output JSON",description:"Provide the data source variable output as a string using a convert to string function variable",isValueField:!0}},events:["ntx-value-change"],standardProperties:{fieldLabel:!0,description:!0}}}static styles=n`
    .chosen-container {
      position: relative;
      display: inline-block;
      width: 100%;
    }

    .chosen-container .chosen-choices {
      background-color: #f2f2f2;
      border-radius: 4px;
      cursor: text;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 4px 8px;
      min-height: 32px;
    }

    .chosen-container .chosen-choices .chosen-choice {
      display: inline-block;
      padding: 2px 4px;
      margin: 2px;
      background-color: #dddddd;
      border-radius: 3px;
    }

    .chosen-container .chosen-choices .chosen-choice span {
      margin-right: 4px;
    }

    .chosen-container .chosen-choices .chosen-choice .chosen-close {
      cursor: pointer;
    }

    .chosen-container .chosen-single {
      display: block;
      background-color: #ffffff;
      border: 1px solid #cccccc;
      border-radius: 4px;
      padding: 4px 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
    }

    .chosen-container .chosen-single span {
      margin-right: 4px;
    }

    .chosen-container .chosen-drop {
      position: absolute;
      z-index: 9999;
      background-color: #ffffff;
      border: 1px solid #cccccc;
      border-top: none;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .chosen-container .chosen-results {
      max-height: 200px;
      overflow-y: auto;
    }

    .chosen-container .chosen-results li {
      padding: 4px 8px;
      cursor: pointer;
    }

    .chosen-container .chosen-results li.highlighted {
      background-color: #e8e8e8;
    }
  `;static properties={dsvdata:{type:String},displayKey:{type:String},valueKey:{type:String},outputJSON:{type:String}};onChange(t){const e=Array.from(t.target.selectedOptions).map((t=>({[this.displayKey]:t.text,[this.valueKey]:t.value}))),s=JSON.stringify(e);this.outputJSON=s,this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:s}))}updateSelectedItems(t){Array.from(this.shadowRoot.querySelectorAll("select")).forEach((e=>{Array.from(e.options).forEach((e=>{e.selected=t.some((t=>t[this.valueKey]===e.value))}))})),this.requestUpdate()}connectedCallback(){super.connectedCallback();const t=JSON.parse(this.outputJSON||"[]");this.updateSelectedItems(t)}updated(t){if(t.has("outputJSON")){const t=JSON.parse(this.outputJSON||"[]");this.updateSelectedItems(t)}}render(){const t=JSON.parse(this.dsvdata||"[]");if(!t||0===t.length)return R`
      <p>No Data Found</p>
    `;const e=JSON.parse(this.outputJSON||"[]"),s=t.map((t=>R`
    <option value="${t[this.valueKey]}">${t[this.displayKey]}</option>
  `)),i=e.map((t=>R`
    <span class="chosen-choice">
      <span>${t[this.displayKey]}</span>
      <span class="chosen-close" @click="${()=>this.removeChoice(t)}">&#10005;</span>
    </span>
  `));return R`
    <div class="chosen-container">
      <div class="chosen-choices">
        ${i}
        <select multiple @change="${this.onChange}">
          ${s}
        </select>
      </div>
    </div>
  `}}customElements.define("neo-multi",st)})();