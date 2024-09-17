function r(t,a){const i=()=>window.performance?window.performance.now():Date.now()-window.hlx.rum.firstReadTime;try{if(window.hlx=window.hlx||{},r.enhance=()=>{},!window.hlx.rum){const c=window.SAMPLE_PAGEVIEWS_AT_RATE==="high"&&10||window.SAMPLE_PAGEVIEWS_AT_RATE==="low"&&1e3||new URLSearchParams(window.location.search).get("rum")==="on"&&1||100,l=Math.random().toString(36).slice(-4),h=Math.random()*c<1;if(window.hlx.rum={weight:c,id:l,isSelected:h,firstReadTime:window.performance?window.performance.timeOrigin:Date.now(),sampleRUM:r,queue:[],collector:(...d)=>window.hlx.rum.queue.push(d)},h){const d=n=>{const e={source:"undefined error"};try{e.target=n.toString(),e.source=n.stack.split(`
`).filter(o=>o.match(/https?:\/\//)).shift().replace(/at ([^ ]+) \((.+)\)/,"$1@$2").replace(/ at /,"@").trim()}catch{}return e};window.addEventListener("error",({error:n})=>{const e=d(n);r("error",e)}),window.addEventListener("unhandledrejection",({reason:n})=>{let e={source:"Unhandled Rejection",target:n||"Unknown"};n instanceof Error&&(e=d(n)),r("error",e)}),r.baseURL=r.baseURL||new URL(window.RUM_BASE||"/",new URL("https://rum.hlx.page")),r.collectBaseURL=r.collectBaseURL||r.baseURL,r.sendPing=(n,e,o={})=>{const s=JSON.stringify({weight:c,id:l,referer:window.location.href,checkpoint:n,t:e,...o}),{href:f,origin:g}=new URL(`.rum/${c}`,r.collectBaseURL),E=g===window.location.origin?new Blob([s],{type:"application/json"}):s;navigator.sendBeacon(f,E),console.debug(`ping:${n}`,o)},r.sendPing("top",i()),r.enhance=()=>{const n=document.createElement("script");n.src=new URL(".rum/@adobe/helix-rum-enhancer@^2/src/index.js",r.baseURL).href,document.head.appendChild(n)},window.hlx.RUM_MANUAL_ENHANCE||r.enhance()}}window.hlx.rum&&window.hlx.rum.isSelected&&t&&window.hlx.rum.collector(t,a,i()),document.dispatchEvent(new CustomEvent("rum",{detail:{checkpoint:t,data:a}}))}catch{}}function S(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.RUM_MANUAL_ENHANCE=!0,window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const t=document.querySelector('script[src$="/scripts/scripts.js"]');if(t)try{[window.hlx.codeBasePath]=new URL(t.src).pathname.split("/scripts/scripts.js")}catch(a){console.log(a)}}function A(){S(),r()}function b(t,a="",i=!1,c=[{media:"(min-width: 600px)",width:"2000"},{width:"750"}]){const l=new URL(t,window.location.href),h=document.createElement("picture"),{pathname:d}=l,n=d.substring(d.lastIndexOf(".")+1);return c.forEach(e=>{const o=document.createElement("source");e.media&&o.setAttribute("media",e.media),o.setAttribute("type","image/webp"),o.setAttribute("srcset",`${d}?width=${e.width}&format=webply&optimize=medium`),h.appendChild(o)}),c.forEach((e,o)=>{if(o<c.length-1){const s=document.createElement("source");e.media&&s.setAttribute("media",e.media),s.setAttribute("srcset",`${d}?width=${e.width}&format=${n}&optimize=medium`),h.appendChild(s)}else{const s=document.createElement("img");s.setAttribute("loading",i?"eager":"lazy"),s.setAttribute("alt",a),h.appendChild(s),s.setAttribute("src",`${d}?width=${e.width}&format=${n}&optimize=medium`)}}),h}A();function R(t){const a=document.createElement("ul");[...t.children].forEach(i=>{const c=document.createElement("li");for(;i.firstElementChild;)c.append(i.firstElementChild);[...c.children].forEach(l=>{l.children.length===1&&l.querySelector("picture")?l.className="cards-card-image":l.className="cards-card-body"}),a.append(c)}),a.querySelectorAll("picture > img").forEach(i=>i.closest("picture").replaceWith(b(i.src,i.alt,!1,[{width:"750"}]))),t.textContent="",t.append(a)}const x={title:"Cards"},U=()=>{const t=document.createElement("div");return t.classList.add("cards"),[{imgSrc:"https://via.placeholder.com/150",title:"Unmatched speed",description:"AEM is the fastest way to publish, create, and serve websites"},{imgSrc:"https://via.placeholder.com/150",title:"Seamless Integration",description:"Easily integrate with other Adobe products"},{imgSrc:"https://via.placeholder.com/150",title:"Scalability",description:"Scale your content effortlessly with AEM"}].forEach(i=>{t.innerHTML+=`
      <div class="card">
        <div>
          <img src="${i.imgSrc}" alt="Sample Image">
        </div>
        <div>
          <p><strong>${i.title}</strong></p>
          <p>${i.description}</p>
        </div>
      </div>
    `}),R(t),t},m=U.bind({});var p,w,u;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const block = document.createElement('div');
  block.classList.add('cards');

  // Array of card data
  const cardData = [{
    imgSrc: 'https://via.placeholder.com/150',
    title: 'Unmatched speed',
    description: 'AEM is the fastest way to publish, create, and serve websites'
  }, {
    imgSrc: 'https://via.placeholder.com/150',
    title: 'Seamless Integration',
    description: 'Easily integrate with other Adobe products'
  }, {
    imgSrc: 'https://via.placeholder.com/150',
    title: 'Scalability',
    description: 'Scale your content effortlessly with AEM'
  }];
  cardData.forEach(data => {
    block.innerHTML += \`
      <div class="card">
        <div>
          <img src="\${data.imgSrc}" alt="Sample Image">
        </div>
        <div>
          <p><strong>\${data.title}</strong></p>
          <p>\${data.description}</p>
        </div>
      </div>
    \`;
  });

  // Apply the decorate function
  decorate(block);

  // Return the decorated block
  return block;
}`,...(u=(w=m.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};const L=["Default"];export{m as Default,L as __namedExportsOrder,x as default};
