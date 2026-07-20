import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as x}from"./cn-MEeMP3_e.js";function a({src:p,label:i,alt:h,className:u,ref:g,...b}){return e.jsxs("div",{ref:g,className:x("relative flex h-full min-w-0 flex-1 flex-col items-start justify-end","overflow-hidden rounded-xs","pb-inline-gap pl-item-gap pr-inline-gap",u),...b,children:[e.jsx("img",{src:p,alt:h??i,className:"absolute inset-0 size-full object-cover"}),e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 bg-[image:var(--thumbnail-scrim)]"}),e.jsx("span",{className:"relative whitespace-nowrap text-label text-inverse",children:i})]})}a.__docgenInfo={description:`A small image tile with a dark gradient overlay and a label pinned
to the bottom-left corner. Sized by its parent (give the container
a height; tiles flex to fill the row).`,methods:[],displayName:"Thumbnail",props:{src:{required:!0,tsType:{name:"string"},description:"Image URL"},label:{required:!0,tsType:{name:"string"},description:"Label shown over the image; also used as the image alt text"},alt:{required:!1,tsType:{name:"string"},description:"Override alt text if the label alone isn't descriptive enough"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}};const y={title:"Components/Thumbnail",component:a,tags:["autodocs"]},s="https://picsum.photos/seed/plant/200/300",t={render:()=>e.jsx("div",{style:{height:105,width:90,display:"flex"},children:e.jsx(a,{src:s,label:"Lavender"})})},r={render:()=>e.jsxs("div",{style:{height:105,maxWidth:400,display:"flex",gap:"var(--space-tight-gap)"},children:[e.jsx(a,{src:s,label:"Santolina"}),e.jsx(a,{src:s,label:"Salvia"}),e.jsx(a,{src:s,label:"Rosemary"}),e.jsx(a,{src:s,label:"Lavender"})]})};var l,n,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 105,
    width: 90,
    display: 'flex'
  }}>
      <Thumbnail src={src} label="Lavender" />
    </div>
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 105,
    maxWidth: 400,
    display: 'flex',
    gap: 'var(--space-tight-gap)'
  }}>
      <Thumbnail src={src} label="Santolina" />
      <Thumbnail src={src} label="Salvia" />
      <Thumbnail src={src} label="Rosemary" />
      <Thumbnail src={src} label="Lavender" />
    </div>
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const j=["Default","Row"];export{t as Default,r as Row,j as __namedExportsOrder,y as default};
