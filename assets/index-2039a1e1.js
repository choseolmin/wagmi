import{J as G,K as Y,k as b,l as E,m as $,x as f,L as q,N as V,o as U,n as K}from"./core-224263d7.js";import{_ as a}from"./index-7aa78d5d.js";const w={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){try{return new URL(e).hostname}catch{return""}},getTruncateString({string:e,charsStart:t,charsEnd:i,truncate:r}){return e.length<=t+i?e:r==="end"?`${e.substring(0,t)}...`:r==="start"?`...${e.substring(e.length-i)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(i))}`},generateAvatarColors(e){const i=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(i),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(n==null?void 0:n.replace("px","")),c=`${s}% ${s}% at 65% 40%`,u=[];for(let p=0;p<5;p+=1){const g=this.tintColor(r,.15*p);u.push(`rgb(${g[0]}, ${g[1]}, ${g[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${c}
   `},hexToRgb(e){const t=parseInt(e,16),i=t>>16&255,r=t>>8&255,n=t&255;return[i,r,n]},tintColor(e,t){const[i,r,n]=e,o=Math.round(i+(255-i)*t),s=Math.round(r+(255-r)*t),c=Math.round(n+(255-n)*t);return[o,s,c]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){var t;return e||(typeof window<"u"&&window.matchMedia?(t=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&t.matches?"dark":"light":"dark")},splitBalance(e){const t=e.split(".");return t.length===2?[t[0],t[1]]:["0","00"]},roundNumber(e,t,i){return e.toString().length>=t?Number(e).toFixed(i):e},formatNumberToLocalString(e,t=2){return e===void 0?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})}};function X(e,t){const{kind:i,elements:r}=t;return{kind:i,elements:r,finisher(n){customElements.get(e)||customElements.define(e,n)}}}function Z(e,t){return customElements.get(e)||customElements.define(e,t),t}function T(e){return function(i){return typeof i=="function"?Z(e,i):X(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:Y},Q=(e=J,t,i)=>{const{kind:r,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),r==="accessor"){const{name:s}=i;return{set(c){const u=t.get.call(this);t.set.call(this,c),this.requestUpdate(s,u,e)},init(c){return c!==void 0&&this.C(s,void 0,e,c),c}}}if(r==="setter"){const{name:s}=i;return function(c){const u=this[s];t.call(this,c),this.requestUpdate(s,u,e)}}throw Error("Unsupported decorator location: "+r)};function l(e){return(t,i)=>typeof i=="object"?Q(e,t,i):((r,n,o)=>{const s=n.hasOwnProperty(o);return n.constructor.createProperty(o,r),s?Object.getOwnPropertyDescriptor(n,o):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Et(e){return l({...e,state:!0,attribute:!1})}const tt=b`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var _=globalThis&&globalThis.__decorate||function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(o=(n<3?s(o):n>3?s(t,i,o):s(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let d=class extends ${render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&w.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&w.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&w.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&w.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&w.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&w.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&w.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&w.getSpacingStyles(this.margin,3)};
    `,f`<slot></slot>`}};d.styles=[E,tt];_([l()],d.prototype,"flexDirection",void 0);_([l()],d.prototype,"flexWrap",void 0);_([l()],d.prototype,"flexBasis",void 0);_([l()],d.prototype,"flexGrow",void 0);_([l()],d.prototype,"flexShrink",void 0);_([l()],d.prototype,"alignItems",void 0);_([l()],d.prototype,"justifyContent",void 0);_([l()],d.prototype,"columnGap",void 0);_([l()],d.prototype,"rowGap",void 0);_([l()],d.prototype,"gap",void 0);_([l()],d.prototype,"padding",void 0);_([l()],d.prototype,"margin",void 0);d=_([T("wui-flex")],d);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=e=>e??q;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=e=>e===null||typeof e!="object"&&typeof e!="function",it=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},N=e=>(...t)=>({_$litDirective$:e,values:t});let H=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=(e,t)=>{var r;const i=e._$AN;if(i===void 0)return!1;for(const n of i)(r=n._$AO)==null||r.call(n,t,!1),x(n,t);return!0},I=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},F=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),at(t)}};function ot(e){this._$AN!==void 0?(I(this),this._$AM=e,F(this)):this._$AM=e}function rt(e,t=!1,i=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let o=i;o<r.length;o++)x(r[o],!1),I(r[o]);else r!=null&&(x(r,!1),I(r));else x(this,e)}const at=e=>{e.type==W.CHILD&&(e._$AP??(e._$AP=rt),e._$AQ??(e._$AQ=ot))};class nt extends H{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,r){super._$AT(t,i,r),F(this),this.isConnected=t._$AU}_$AO(t,i=!0){var r,n;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(n=this.disconnected)==null||n.call(this)),i&&(x(this,t),I(this))}setValue(t){if(it(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class st{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class ct{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(t=>this.Z=t))}resume(){var t;(t=this.Z)==null||t.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=e=>!et(e)&&typeof e.then=="function",B=1073741823;class lt extends nt{constructor(){super(...arguments),this._$Cwt=B,this._$Cbt=[],this._$CK=new st(this),this._$CX=new ct}render(...t){return t.find(i=>!j(i))??V}update(t,i){const r=this._$Cbt;let n=r.length;this._$Cbt=i;const o=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<i.length&&!(c>this._$Cwt);c++){const u=i[c];if(!j(u))return this._$Cwt=c,u;c<n&&u===r[c]||(this._$Cwt=B,n=0,Promise.resolve(u).then(async p=>{for(;s.get();)await s.get();const g=o.deref();if(g!==void 0){const D=g._$Cbt.indexOf(u);D>-1&&D<g._$Cwt&&(g._$Cwt=D,g.setValue(p))}}))}return V}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ut=N(lt);class dt{constructor(){this.cache=new Map}set(t,i){this.cache.set(t,i)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}}const C=new dt,_t=b`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var P=globalThis&&globalThis.__decorate||function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(o=(n<3?s(o):n>3?s(t,i,o):s(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};const M={add:async()=>(await a(()=>import("./add-e8c7cb20.js"),["assets/add-e8c7cb20.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).addSvg,allWallets:async()=>(await a(()=>import("./all-wallets-2bcd2940.js"),["assets/all-wallets-2bcd2940.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).allWalletsSvg,arrowBottomCircle:async()=>(await a(()=>import("./arrow-bottom-circle-8c0ed3ff.js"),["assets/arrow-bottom-circle-8c0ed3ff.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).arrowBottomCircleSvg,appStore:async()=>(await a(()=>import("./app-store-f17735a8.js"),["assets/app-store-f17735a8.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).appStoreSvg,apple:async()=>(await a(()=>import("./apple-be405b50.js"),["assets/apple-be405b50.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).appleSvg,arrowBottom:async()=>(await a(()=>import("./arrow-bottom-fb1a3b4d.js"),["assets/arrow-bottom-fb1a3b4d.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).arrowBottomSvg,arrowLeft:async()=>(await a(()=>import("./arrow-left-53277431.js"),["assets/arrow-left-53277431.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).arrowLeftSvg,arrowRight:async()=>(await a(()=>import("./arrow-right-cced64a2.js"),["assets/arrow-right-cced64a2.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).arrowRightSvg,arrowTop:async()=>(await a(()=>import("./arrow-top-f6de6fb1.js"),["assets/arrow-top-f6de6fb1.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).arrowTopSvg,bank:async()=>(await a(()=>import("./bank-60dfd7a9.js"),["assets/bank-60dfd7a9.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).bankSvg,browser:async()=>(await a(()=>import("./browser-2bb27c3e.js"),["assets/browser-2bb27c3e.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).browserSvg,card:async()=>(await a(()=>import("./card-6ad8e7cf.js"),["assets/card-6ad8e7cf.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).cardSvg,checkmark:async()=>(await a(()=>import("./checkmark-a3798666.js"),["assets/checkmark-a3798666.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).checkmarkSvg,checkmarkBold:async()=>(await a(()=>import("./checkmark-bold-b5fb799b.js"),["assets/checkmark-bold-b5fb799b.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).checkmarkBoldSvg,chevronBottom:async()=>(await a(()=>import("./chevron-bottom-d83a672c.js"),["assets/chevron-bottom-d83a672c.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).chevronBottomSvg,chevronLeft:async()=>(await a(()=>import("./chevron-left-b0a1d9f7.js"),["assets/chevron-left-b0a1d9f7.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).chevronLeftSvg,chevronRight:async()=>(await a(()=>import("./chevron-right-ce06b91c.js"),["assets/chevron-right-ce06b91c.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).chevronRightSvg,chevronTop:async()=>(await a(()=>import("./chevron-top-1ad3edb0.js"),["assets/chevron-top-1ad3edb0.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).chevronTopSvg,chromeStore:async()=>(await a(()=>import("./chrome-store-f73b1a18.js"),["assets/chrome-store-f73b1a18.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).chromeStoreSvg,clock:async()=>(await a(()=>import("./clock-c0a0f438.js"),["assets/clock-c0a0f438.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).clockSvg,close:async()=>(await a(()=>import("./close-5da3916b.js"),["assets/close-5da3916b.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).closeSvg,compass:async()=>(await a(()=>import("./compass-cadba537.js"),["assets/compass-cadba537.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).compassSvg,coinPlaceholder:async()=>(await a(()=>import("./coinPlaceholder-ed3aaecd.js"),["assets/coinPlaceholder-ed3aaecd.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).coinPlaceholderSvg,copy:async()=>(await a(()=>import("./copy-8cac26c9.js"),["assets/copy-8cac26c9.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).copySvg,cursor:async()=>(await a(()=>import("./cursor-69af484b.js"),["assets/cursor-69af484b.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).cursorSvg,cursorTransparent:async()=>(await a(()=>import("./cursor-transparent-30dc99e7.js"),["assets/cursor-transparent-30dc99e7.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).cursorTransparentSvg,desktop:async()=>(await a(()=>import("./desktop-422b870f.js"),["assets/desktop-422b870f.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).desktopSvg,disconnect:async()=>(await a(()=>import("./disconnect-a3908631.js"),["assets/disconnect-a3908631.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).disconnectSvg,discord:async()=>(await a(()=>import("./discord-9031e3a0.js"),["assets/discord-9031e3a0.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).discordSvg,etherscan:async()=>(await a(()=>import("./etherscan-25db068f.js"),["assets/etherscan-25db068f.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).etherscanSvg,extension:async()=>(await a(()=>import("./extension-2306fa23.js"),["assets/extension-2306fa23.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).extensionSvg,externalLink:async()=>(await a(()=>import("./external-link-fdc67075.js"),["assets/external-link-fdc67075.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).externalLinkSvg,facebook:async()=>(await a(()=>import("./facebook-9ef79197.js"),["assets/facebook-9ef79197.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).facebookSvg,farcaster:async()=>(await a(()=>import("./farcaster-817531ed.js"),["assets/farcaster-817531ed.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).farcasterSvg,filters:async()=>(await a(()=>import("./filters-62b1a600.js"),["assets/filters-62b1a600.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).filtersSvg,github:async()=>(await a(()=>import("./github-d3ca6f0d.js"),["assets/github-d3ca6f0d.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).githubSvg,google:async()=>(await a(()=>import("./google-04056fbc.js"),["assets/google-04056fbc.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).googleSvg,helpCircle:async()=>(await a(()=>import("./help-circle-4725bb2e.js"),["assets/help-circle-4725bb2e.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).helpCircleSvg,image:async()=>(await a(()=>import("./image-809e09ab.js"),["assets/image-809e09ab.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).imageSvg,id:async()=>(await a(()=>import("./id-fd954bbf.js"),["assets/id-fd954bbf.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).idSvg,infoCircle:async()=>(await a(()=>import("./info-circle-d37f301f.js"),["assets/info-circle-d37f301f.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).infoCircleSvg,lightbulb:async()=>(await a(()=>import("./lightbulb-a5374aec.js"),["assets/lightbulb-a5374aec.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).lightbulbSvg,mail:async()=>(await a(()=>import("./mail-db6172c8.js"),["assets/mail-db6172c8.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).mailSvg,mobile:async()=>(await a(()=>import("./mobile-91dc23be.js"),["assets/mobile-91dc23be.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).mobileSvg,more:async()=>(await a(()=>import("./more-8bf13e98.js"),["assets/more-8bf13e98.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).moreSvg,networkPlaceholder:async()=>(await a(()=>import("./network-placeholder-ea27697f.js"),["assets/network-placeholder-ea27697f.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).networkPlaceholderSvg,nftPlaceholder:async()=>(await a(()=>import("./nftPlaceholder-bc97c122.js"),["assets/nftPlaceholder-bc97c122.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).nftPlaceholderSvg,off:async()=>(await a(()=>import("./off-663a8e08.js"),["assets/off-663a8e08.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).offSvg,playStore:async()=>(await a(()=>import("./play-store-c637236e.js"),["assets/play-store-c637236e.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).playStoreSvg,plus:async()=>(await a(()=>import("./plus-efafd835.js"),["assets/plus-efafd835.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).plusSvg,qrCode:async()=>(await a(()=>import("./qr-code-3bdad37b.js"),["assets/qr-code-3bdad37b.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).qrCodeIcon,recycleHorizontal:async()=>(await a(()=>import("./recycle-horizontal-9d9104aa.js"),["assets/recycle-horizontal-9d9104aa.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).recycleHorizontalSvg,refresh:async()=>(await a(()=>import("./refresh-476c425f.js"),["assets/refresh-476c425f.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).refreshSvg,search:async()=>(await a(()=>import("./search-5c336f30.js"),["assets/search-5c336f30.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).searchSvg,send:async()=>(await a(()=>import("./send-bbcbec20.js"),["assets/send-bbcbec20.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).sendSvg,swapHorizontal:async()=>(await a(()=>import("./swapHorizontal-23b2d7c4.js"),["assets/swapHorizontal-23b2d7c4.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).swapHorizontalSvg,swapHorizontalMedium:async()=>(await a(()=>import("./swapHorizontalMedium-91e71c22.js"),["assets/swapHorizontalMedium-91e71c22.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await a(()=>import("./swapHorizontalBold-27f5745b.js"),["assets/swapHorizontalBold-27f5745b.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await a(()=>import("./swapHorizontalRoundedBold-dd1d51a5.js"),["assets/swapHorizontalRoundedBold-dd1d51a5.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await a(()=>import("./swapVertical-f65bce49.js"),["assets/swapVertical-f65bce49.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).swapVerticalSvg,telegram:async()=>(await a(()=>import("./telegram-427fa97c.js"),["assets/telegram-427fa97c.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).telegramSvg,threeDots:async()=>(await a(()=>import("./three-dots-3b93448d.js"),["assets/three-dots-3b93448d.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).threeDotsSvg,twitch:async()=>(await a(()=>import("./twitch-a61e0d02.js"),["assets/twitch-a61e0d02.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).twitchSvg,twitter:async()=>(await a(()=>import("./x-157af0d1.js"),["assets/x-157af0d1.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).xSvg,twitterIcon:async()=>(await a(()=>import("./twitterIcon-04d4b336.js"),["assets/twitterIcon-04d4b336.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).twitterIconSvg,verify:async()=>(await a(()=>import("./verify-22373d25.js"),["assets/verify-22373d25.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).verifySvg,verifyFilled:async()=>(await a(()=>import("./verify-filled-d895efcb.js"),["assets/verify-filled-d895efcb.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).verifyFilledSvg,wallet:async()=>(await a(()=>import("./wallet-4c278b06.js"),["assets/wallet-4c278b06.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).walletSvg,walletConnect:async()=>(await a(()=>import("./walletconnect-47d216a0.js"),["assets/walletconnect-47d216a0.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).walletConnectSvg,walletConnectLightBrown:async()=>(await a(()=>import("./walletconnect-47d216a0.js"),["assets/walletconnect-47d216a0.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await a(()=>import("./walletconnect-47d216a0.js"),["assets/walletconnect-47d216a0.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).walletConnectBrownSvg,walletPlaceholder:async()=>(await a(()=>import("./wallet-placeholder-86e377ad.js"),["assets/wallet-placeholder-86e377ad.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).walletPlaceholderSvg,warningCircle:async()=>(await a(()=>import("./warning-circle-c22a3dd8.js"),["assets/warning-circle-c22a3dd8.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).warningCircleSvg,x:async()=>(await a(()=>import("./x-157af0d1.js"),["assets/x-157af0d1.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).xSvg,info:async()=>(await a(()=>import("./info-e8435719.js"),["assets/info-e8435719.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).infoSvg,exclamationTriangle:async()=>(await a(()=>import("./exclamation-triangle-851a4d15.js"),["assets/exclamation-triangle-851a4d15.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).exclamationTriangleSvg,reown:async()=>(await a(()=>import("./reown-logo-02c361ed.js"),["assets/reown-logo-02c361ed.js","assets/core-224263d7.js","assets/index-7aa78d5d.js","assets/index-c6990638.css","assets/events-3fc49298.js","assets/index.es-a38ded56.js","assets/index-accd8060.js"])).reownSvg};async function ht(e){if(C.has(e))return C.get(e);const i=(M[e]??M.copy)();return C.set(e,i),i}let m=class extends ${constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,f`${ut(ht(this.name),f`<div class="fallback"></div>`)}`}};m.styles=[E,U,_t];P([l()],m.prototype,"size",void 0);P([l()],m.prototype,"name",void 0);P([l()],m.prototype,"color",void 0);P([l()],m.prototype,"aspectRatio",void 0);m=P([T("wui-icon")],m);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=N(class extends H{constructor(e){var t;if(super(e),e.type!==W.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.nt)!=null&&r.has(o))&&this.st.add(o);return this.render(t)}const i=e.element.classList;for(const o of this.st)o in t||(i.remove(o),this.st.delete(o));for(const o in t){const s=!!t[o];s===this.st.has(o)||(n=this.nt)!=null&&n.has(o)||(s?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return V}}),gt=b`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var O=globalThis&&globalThis.__decorate||function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(o=(n<3?s(o):n>3?s(t,i,o):s(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let y=class extends ${constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,f`<slot class=${pt(t)}></slot>`}};y.styles=[E,gt];O([l()],y.prototype,"variant",void 0);O([l()],y.prototype,"color",void 0);O([l()],y.prototype,"align",void 0);O([l()],y.prototype,"lineClamp",void 0);y=O([T("wui-text")],y);const vt=b`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var v=globalThis&&globalThis.__decorate||function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(o=(n<3?s(o):n>3?s(t,i,o):s(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let h=class extends ${constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,i=this.size==="lg",r=this.size==="xl",n=i?"12%":"16%",o=i?"xxs":r?"s":"3xl",s=this.background==="gray",c=this.background==="opaque",u=this.backgroundColor==="accent-100"&&c||this.backgroundColor==="success-100"&&c||this.backgroundColor==="error-100"&&c||this.backgroundColor==="inverse-100"&&c;let p=`var(--wui-color-${this.backgroundColor})`;return u?p=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(p=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${p};
       --local-bg-mix: ${u||s?"100%":n};
       --local-border-radius: var(--wui-border-radius-${o});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,f` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};h.styles=[E,K,vt];v([l()],h.prototype,"size",void 0);v([l()],h.prototype,"backgroundColor",void 0);v([l()],h.prototype,"iconColor",void 0);v([l()],h.prototype,"iconSize",void 0);v([l()],h.prototype,"background",void 0);v([l({type:Boolean})],h.prototype,"border",void 0);v([l()],h.prototype,"borderColor",void 0);v([l()],h.prototype,"icon",void 0);h=v([T("wui-icon-box")],h);const wt=b`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var L=globalThis&&globalThis.__decorate||function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(o=(n<3?s(o):n>3?s(t,i,o):s(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let S=class extends ${constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,f`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};S.styles=[E,U,wt];L([l()],S.prototype,"src",void 0);L([l()],S.prototype,"alt",void 0);L([l()],S.prototype,"size",void 0);S=L([T("wui-image")],S);const ft=b`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var z=globalThis&&globalThis.__decorate||function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(o=(n<3?s(o):n>3?s(t,i,o):s(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let R=class extends ${constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t=this.size==="md"?"mini-700":"micro-700";return f`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};R.styles=[E,ft];z([l()],R.prototype,"variant",void 0);z([l()],R.prototype,"size",void 0);R=z([T("wui-tag")],R);const mt=b`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var k=globalThis&&globalThis.__decorate||function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(o=(n<3?s(o):n>3?s(t,i,o):s(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let A=class extends ${constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,f`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};A.styles=[E,mt];k([l()],A.prototype,"color",void 0);k([l()],A.prototype,"size",void 0);A=k([T("wui-loading-spinner")],A);export{w as U,pt as a,T as c,N as e,nt as f,l as n,Tt as o,Et as r};
