import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{c as y}from"./cn-MEeMP3_e.js";function o({src:h,size:e=16,alt:x="",className:v,style:w,ref:I,...S}){return a.jsx("img",{ref:I,src:h,alt:x,width:e,height:e,style:{width:e,height:e,...w},className:y("object-contain",v),...S})}o.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{src:{required:!0,tsType:{name:"string"},description:"Path to the icon asset (e.g. from a consuming app's icon registry)."},size:{required:!1,tsType:{name:"number"},description:`Renders at size × size, undistorted, regardless of the source SVG's
own aspect ratio — pass a mismatched viewBox and it still fits cleanly.`,defaultValue:{value:"16",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLImageElement>",elements:[{name:"HTMLImageElement"}]},description:""},alt:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const C={title:"Components/Icon",component:o,tags:["autodocs"]},n="data:image/svg+xml;utf8,"+encodeURIComponent('<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><rect width="14" height="14" rx="2" fill="#386b41"/></svg>'),R="data:image/svg+xml;utf8,"+encodeURIComponent('<svg viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg"><rect width="12" height="18" rx="2" fill="#2b6e3f"/></svg>'),s={args:{src:n}},t={args:{src:n,size:32}},r={render:()=>a.jsxs("div",{style:{display:"flex",gap:"var(--space-item-gap)",alignItems:"center"},children:[a.jsx(o,{src:n}),a.jsx(o,{src:R})]})};var c,i,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: squareSrc
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,l,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    src: squareSrc,
    size: 32
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-item-gap)',
    alignItems: 'center'
  }}>
      <Icon src={squareSrc} />
      <Icon src={tallSrc} />
    </div>
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const T=["Default","CustomSize","MismatchedAspectRatio"];export{t as CustomSize,s as Default,r as MismatchedAspectRatio,T as __namedExportsOrder,C as default};
