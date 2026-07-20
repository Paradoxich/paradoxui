import{j as b}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-Bqq-F1qZ.js";import{c as be}from"./cn-MEeMP3_e.js";const se={reveal:0,organic:1,magnify:2,coarsen:3,spotlight:4},Ae=[0,32,8,40,2,34,10,42,48,16,56,24,50,18,58,26,12,44,4,36,14,46,6,38,60,28,52,20,62,30,54,22,3,35,11,43,1,33,9,41,51,19,59,27,49,17,57,25,15,47,7,39,13,45,5,37,63,31,55,23,61,29,53,21],Ue=`
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`,Se=`
precision highp float;

uniform sampler2D u_image;
uniform sampler2D u_bayer;
uniform vec2 u_resolution;      // canvas size, device px
uniform vec2 u_imageSize;       // natural image size
uniform float u_time;           // seconds
uniform float u_cell;           // dither cell size, device px
uniform float u_levels;         // quantisation steps per channel
uniform vec2 u_mouse;           // cursor, device px (gl_FragCoord space)
uniform float u_radius;         // lens radius, device px
uniform float u_hover;          // lens strength 0..1 (fades on enter/leave)
uniform float u_soft;           // edge feather 0 (hard) .. 1 (very soft)
uniform float u_mode;           // 0 reveal, 1 organic, 2 magnify, 3 coarsen, 4 spotlight
uniform vec2 u_velocity;        // lens velocity, device px/frame (for the smear)
uniform float u_weight;         // 0 weightless .. 1 heavy/viscous

void main() {
  // Velocity-stretched distance: while the lens moves it elongates along the
  // motion axis and thins across it (a droplet smearing through liquid), then
  // relaxes to a circle at rest. Combined with the spring lag on u_mouse, this
  // gives the lens a sense of mass — moving through something, not over it.
  vec2 off = gl_FragCoord.xy - u_mouse;
  float speed = length(u_velocity);
  vec2 dir = speed > 0.001 ? u_velocity / speed : vec2(1.0, 0.0);
  float para = dot(off, dir);
  float perp = dot(off, vec2(-dir.y, dir.x));
  float stretch = clamp(speed * u_weight * 0.05, 0.0, 1.4);
  para /= (1.0 + stretch);
  perp *= (1.0 + stretch * 0.25);
  float dist = length(vec2(para, perp));
  float core = 1.0 - smoothstep(0.0, u_radius, dist); // hard proximity 0..1

  // Lens edge. Organic mode wobbles the radius by angle (a torn-paper edge).
  float radius = u_radius;
  if (u_mode > 0.5 && u_mode < 1.5) {
    float ang = atan(gl_FragCoord.y - u_mouse.y, gl_FragCoord.x - u_mouse.x);
    radius *= 1.0 + 0.18 * sin(ang * 5.0 + u_time * 0.6)
                  + 0.10 * sin(ang * 9.0 - u_time * 0.4);
  }
  float lens = (1.0 - smoothstep(radius * (1.0 - u_soft), radius, dist)) * u_hover;

  // Screen position feeding the image sample. Magnify pulls it toward the
  // cursor so the image bulges (a loupe). The dither stays on real gl_FragCoord.
  vec2 pos = gl_FragCoord.xy;
  if (u_mode > 1.5 && u_mode < 2.5) {
    pos = mix(pos, u_mouse, core * 0.35 * u_hover);
  }

  // object-cover fit of the image into the canvas.
  vec2 uv = pos / u_resolution;
  uv.y = 1.0 - uv.y;
  float canvasAspect = u_resolution.x / u_resolution.y;
  float imageAspect = u_imageSize.x / u_imageSize.y;
  vec2 scale = canvasAspect > imageAspect
    ? vec2(1.0, imageAspect / canvasAspect)
    : vec2(canvasAspect / imageAspect, 1.0);
  vec2 cover = (uv - 0.5) * scale + 0.5;

  // Ken Burns orbit: breathing zoom + quarter-period-offset x/y drift, so the
  // loop closes on itself with no cut. Slack comes from the >1 zoom.
  float t = u_time * 0.157; // ~40s period
  float zoom = 1.2 + 0.1 * sin(t);
  vec2 drift = vec2(0.11 * sin(t), 0.06 * sin(t - 1.5708));
  vec2 img = (cover - 0.5) / zoom + 0.5 + drift;

  vec3 c = texture2D(u_image, img).rgb;

  // Screen-locked ordered dither. Coarsen mode grows the cell toward the cursor
  // so the dots swell into chunky blocks under the pointer.
  float cell = u_cell;
  if (u_mode > 2.5 && u_mode < 3.5) {
    cell = u_cell * (1.0 + 6.0 * core * u_hover);
  }
  vec2 cellCoord = floor(gl_FragCoord.xy / cell);
  float threshold = texture2D(u_bayer, (cellCoord + 0.5) / 8.0).r;

  // Colour-preserving ordered dither: quantise each channel to u_levels steps,
  // using the Bayer threshold to spread the rounding.
  float steps = max(u_levels - 1.0, 1.0);
  vec3 dithered = floor(c * steps + threshold) / steps;

  vec3 outColor = dithered;
  if (u_mode < 2.5) {
    // reveal (0), organic (1), magnify (2): dissolve to the clean image inside.
    outColor = mix(dithered, c, lens);
  } else if (u_mode < 3.5) {
    // coarsen (3): the chunky dots are the effect; nothing to reveal.
    outColor = dithered;
  } else {
    // spotlight (4): brighten + saturate the image inside the lens.
    float l = dot(c, vec3(0.299, 0.587, 0.114));
    vec3 boosted = clamp(mix(vec3(l), c, 1.5) * 1.15, 0.0, 1.0);
    outColor = mix(dithered, boosted, lens);
  }

  gl_FragColor = vec4(outColor, 1.0);
}
`;function ne(a,f,h,s,g){const d=2/s,n=d*g,p=1/(1+n+.48*n*n+.235*n*n*n),v=a-f,T=(h+d*v)*g,A=(h-d*T)*p;return[f+(v+T)*p,A]}function le(a,f,h){const s=a.createShader(f);return a.shaderSource(s,h),a.compileShader(s),a.getShaderParameter(s,a.COMPILE_STATUS)?s:(console.error("[DitheredImage] shader compile failed:",a.getShaderInfoLog(s)),a.deleteShader(s),null)}function q({src:a,alt:f="",className:h,levels:s=6,cell:g=2,revealRadius:d=130,softness:n=.45,weight:p=.5,hoverMode:v="reveal"}){const T=l.useRef(null),A=l.useRef(s),V=l.useRef(g),C=l.useRef(d),W=l.useRef(n),I=l.useRef(p),H=l.useRef(se[v]);A.current=s,V.current=g,C.current=d,W.current=n,I.current=p,H.current=se[v];const R=l.useRef(null);return l.useEffect(()=>{const t=T.current;if(!t)return;const e=t.getContext("webgl",{antialias:!1,premultipliedAlpha:!1});if(!e){console.warn("[DitheredImage] no WebGL; leaving fallback image visible");return}const X=le(e,e.VERTEX_SHADER,Ue),N=le(e,e.FRAGMENT_SHADER,Se);if(!X||!N)return;const r=e.createProgram();if(e.attachShader(r,X),e.attachShader(r,N),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){console.error("[DitheredImage] link failed:",e.getProgramInfoLog(r));return}e.useProgram(r);const O=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,O),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const Y=e.getAttribLocation(r,"a_pos");e.enableVertexAttribArray(Y),e.vertexAttribPointer(Y,2,e.FLOAT,!1,0,0);const i={image:e.getUniformLocation(r,"u_image"),bayer:e.getUniformLocation(r,"u_bayer"),resolution:e.getUniformLocation(r,"u_resolution"),imageSize:e.getUniformLocation(r,"u_imageSize"),time:e.getUniformLocation(r,"u_time"),cell:e.getUniformLocation(r,"u_cell"),levels:e.getUniformLocation(r,"u_levels"),mouse:e.getUniformLocation(r,"u_mouse"),radius:e.getUniformLocation(r,"u_radius"),hover:e.getUniformLocation(r,"u_hover"),soft:e.getUniformLocation(r,"u_soft"),mode:e.getUniformLocation(r,"u_mode"),velocity:e.getUniformLocation(r,"u_velocity"),weight:e.getUniformLocation(r,"u_weight")};e.uniform1i(i.image,0),e.uniform1i(i.bayer,1);const j=e.createTexture();e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,j);const K=new Uint8Array(64);for(let o=0;o<64;o++)K[o]=Math.round(((Ae[o]??0)+.5)/64*255);e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,8,8,0,e.LUMINANCE,e.UNSIGNED_BYTE,K),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST);const M=e.createTexture();e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,M),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR);let Q=1,$=1,J=!1;const _=new Image;_.crossOrigin="anonymous",_.onload=()=>{Q=_.naturalWidth,$=_.naturalHeight,J=!0,e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,M),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,_),u(performance.now())},_.src=a;const U=()=>Math.min(window.devicePixelRatio||1,2),ye=()=>{const o=U(),c=Math.round(t.clientWidth*o),E=Math.round(t.clientHeight*o);(t.width!==c||t.height!==E)&&(t.width=c,t.height=E)},m=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Z=performance.now();let F=0,G=0,S=0,L=0,D=0,P=0,ee=Z,B=0,z=0;const te=o=>{const c=t.getBoundingClientRect(),E=U();F=(o.clientX-c.left)*E,G=t.height-(o.clientY-c.top)*E,B=1,m&&u(performance.now())},re=()=>{B=0,m&&u(performance.now())};t.addEventListener("pointermove",te),t.addEventListener("pointerleave",re);const u=o=>{if(ye(),t.width===0||t.height===0)return;const c=Math.min((o-ee)/1e3,.05);if(ee=o,m||c<=0)S=F,L=G,D=0,P=0;else{const ie=.03+.32*Math.min(Math.max(I.current,0),1);[S,D]=ne(S,F,D,ie,c),[L,P]=ne(L,G,P,ie,c)}z+=(B-z)*(m?1:.12),e.viewport(0,0,t.width,t.height),e.uniform2f(i.resolution,t.width,t.height),e.uniform2f(i.imageSize,Q,$),e.uniform1f(i.cell,Math.max(1,V.current*U())),e.uniform1f(i.levels,A.current),e.uniform2f(i.mouse,S,L),e.uniform1f(i.radius,Math.max(1,C.current*U())),e.uniform1f(i.hover,C.current>0?z:0),e.uniform1f(i.soft,W.current),e.uniform1f(i.mode,H.current),e.uniform2f(i.velocity,D/60,P/60),e.uniform1f(i.weight,I.current),e.uniform1f(i.time,m?0:(o-Z)/1e3),e.drawArrays(e.TRIANGLES,0,3)};let k=0;const oe=o=>{u(o),k=requestAnimationFrame(oe)};m?u(performance.now()):k=requestAnimationFrame(oe);const ae=new ResizeObserver(()=>{m&&u(performance.now())});return ae.observe(t),J&&u(performance.now()),R.current=()=>u(performance.now()),()=>{R.current=null,t.removeEventListener("pointermove",te),t.removeEventListener("pointerleave",re),cancelAnimationFrame(k),ae.disconnect(),e.deleteTexture(M),e.deleteTexture(j),e.deleteBuffer(O),e.deleteProgram(r),e.deleteShader(X),e.deleteShader(N)}},[a]),l.useEffect(()=>{var t;(t=R.current)==null||t.call(R)},[s,g,d,n,p,v]),b.jsxs("div",{className:be("relative overflow-hidden",h),children:[b.jsx("img",{src:a,alt:f,className:"absolute inset-0 h-full w-full object-cover"}),b.jsx("canvas",{ref:T,className:"absolute inset-0 h-full w-full","aria-hidden":!0})]})}q.__docgenInfo={description:"",methods:[],displayName:"DitheredImage",props:{src:{required:!0,tsType:{name:"string"},description:"Image URL. For a WebGL texture from another origin it must be CORS-enabled."},alt:{required:!1,tsType:{name:"string"},description:"Alt text for the fallback image. Defaults to '' (decorative).",defaultValue:{value:"''",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classes for the root box (sizing, radius, background)."},levels:{required:!1,tsType:{name:"number"},description:`Quantisation steps per colour channel. Higher = subtler (keeps the image's
real colour, just a fine dither grain); lower = heavier posterisation.`,defaultValue:{value:"6",computed:!1}},cell:{required:!1,tsType:{name:"number"},description:"Dither cell size in CSS pixels. Larger = chunkier.",defaultValue:{value:"2",computed:!1}},revealRadius:{required:!1,tsType:{name:"number"},description:"Radius in CSS pixels of the cursor lens. 0 disables the interaction.",defaultValue:{value:"130",computed:!1}},softness:{required:!1,tsType:{name:"number"},description:"Lens edge feather, 0 (hard edge) to 1 (very soft).",defaultValue:{value:"0.45",computed:!1}},weight:{required:!1,tsType:{name:"number"},description:`How much mass the lens has: 0 follows the cursor instantly (weightless),
1 lags and glides with momentum and smears along its motion (viscous).`,defaultValue:{value:"0.5",computed:!1}},hoverMode:{required:!1,tsType:{name:"union",raw:"'reveal' | 'organic' | 'magnify' | 'coarsen' | 'spotlight'",elements:[{name:"literal",value:"'reveal'"},{name:"literal",value:"'organic'"},{name:"literal",value:"'magnify'"},{name:"literal",value:"'coarsen'"},{name:"literal",value:"'spotlight'"}]},description:`What the lens does under the cursor:
- reveal: dissolve the dither back to the clean image (soft circle)
- organic: same reveal with a torn, wobbling edge
- magnify: bulge the image toward the cursor and reveal it (a loupe)
- coarsen: grow the dots into chunky blocks under the cursor
- spotlight: brighten and saturate the image inside the lens`,defaultValue:{value:"'reveal'",computed:!1}}}};const Le=`data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#2b6e3f"/>
        <stop offset="1" stop-color="#e8c14a"/>
      </linearGradient>
    </defs>
    <rect width="800" height="1000" fill="url(#g)"/>
    <circle cx="250" cy="300" r="130" fill="#f2d24b"/>
    <circle cx="560" cy="640" r="180" fill="#7fae5a"/>
    <circle cx="380" cy="820" r="90" fill="#c9b8e0"/>
  </svg>`)}`,Ie={title:"Components/DitheredImage",component:q,tags:["autodocs"],parameters:{docs:{description:{component:"An image rendered through a WebGL dither shader with a slow Ken Burns drift and an interactive cursor lens. Hover the image to move the lens."}}},args:{src:Le,levels:6,cell:2,revealRadius:130,softness:.45,weight:.5,hoverMode:"reveal"},render:a=>b.jsx("div",{style:{width:360,height:460},children:b.jsx(q,{...a,className:"h-full w-full rounded-[16px]"})})},x={},w={args:{levels:3,cell:3}},y={args:{levels:14,hoverMode:"spotlight",revealRadius:100,softness:.8,weight:.5}};var ce,ue,de,me,fe;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:"{}",...(de=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:de.source},description:{story:"A fine grain over the real colour. Hover to reveal the clean image.",...(fe=(me=x.parameters)==null?void 0:me.docs)==null?void 0:fe.description}}};var he,ge,pe,ve,_e;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    levels: 3,
    cell: 3
  }
}`,...(pe=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:pe.source},description:{story:"Fewer levels collapse the image toward posterised blocks.",...(_e=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:_e.description}}};var Ee,Te,Re,xe,we;y.parameters={...y.parameters,docs:{...(Ee=y.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    levels: 14,
    hoverMode: 'spotlight',
    revealRadius: 100,
    softness: 0.8,
    weight: 0.5
  }
}`,...(Re=(Te=y.parameters)==null?void 0:Te.docs)==null?void 0:Re.source},description:{story:"Spotlight lens: the image brightens and saturates under a weighted cursor.",...(we=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:we.description}}};const Xe=["Default","Posterised","Spotlight"];export{x as Default,w as Posterised,y as Spotlight,Xe as __namedExportsOrder,Ie as default};
