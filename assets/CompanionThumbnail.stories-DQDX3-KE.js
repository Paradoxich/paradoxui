import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as x}from"./cn-MEeMP3_e.js";function a({src:p,label:r,alt:h,className:u,ref:g,...b}){return e.jsxs("div",{ref:g,className:x("relative flex h-full min-w-0 flex-1 flex-col items-start justify-end","overflow-hidden rounded-xs","pb-inline-gap pl-item-gap pr-inline-gap",u),...b,children:[e.jsx("img",{src:p,alt:h??r,className:"absolute inset-0 size-full object-cover"}),e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 bg-[image:var(--thumbnail-scrim)]"}),e.jsx("span",{className:"relative whitespace-nowrap text-label text-inverse",children:r})]})}a.__docgenInfo={description:`A small image tile with a dark gradient overlay and a label pinned
to the bottom-left corner. Sized by its parent (give the container
a height; tiles flex to fill the row).`,methods:[],displayName:"CompanionThumbnail",props:{src:{required:!0,tsType:{name:"string"},description:"Image URL"},label:{required:!0,tsType:{name:"string"},description:"Label shown over the image; also used as the image alt text"},alt:{required:!1,tsType:{name:"string"},description:"Override alt text if the label alone isn't descriptive enough"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}};const y={title:"Components/CompanionThumbnail",component:a,tags:["autodocs"]},s="https://picsum.photos/seed/plant/200/300",t={render:()=>e.jsx("div",{style:{height:105,width:90,display:"flex"},children:e.jsx(a,{src:s,label:"Lavender"})})},i={render:()=>e.jsxs("div",{style:{height:105,maxWidth:400,display:"flex",gap:"var(--space-tight-gap)"},children:[e.jsx(a,{src:s,label:"Santolina"}),e.jsx(a,{src:s,label:"Salvia"}),e.jsx(a,{src:s,label:"Rosemary"}),e.jsx(a,{src:s,label:"Lavender"})]})};var n,l,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 105,
    width: 90,
    display: 'flex'
  }}>
      <CompanionThumbnail src={src} label="Lavender" />
    </div>
}`,...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var d,m,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 105,
    maxWidth: 400,
    display: 'flex',
    gap: 'var(--space-tight-gap)'
  }}>
      <CompanionThumbnail src={src} label="Santolina" />
      <CompanionThumbnail src={src} label="Salvia" />
      <CompanionThumbnail src={src} label="Rosemary" />
      <CompanionThumbnail src={src} label="Lavender" />
    </div>
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const j=["Default","Row"];export{t as Default,i as Row,j as __namedExportsOrder,y as default};
