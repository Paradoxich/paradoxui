import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as x}from"./cn-MEeMP3_e.js";function s({src:p,label:r,alt:h,className:u,ref:b,...g}){return e.jsxs("div",{ref:b,className:x("relative flex h-full min-w-0 flex-1 flex-col items-start justify-end","overflow-hidden rounded-xs","pb-inline-gap pl-item-gap pr-inline-gap",u),...g,children:[e.jsx("img",{src:p,alt:h??r,className:"absolute inset-0 size-full object-cover"}),e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 bg-[image:var(--thumbnail-scrim)]"}),e.jsx("span",{className:"relative whitespace-nowrap text-label text-inverse",children:r})]})}s.__docgenInfo={description:`A small image tile with a dark gradient overlay and a label pinned
to the bottom-left corner. Sized by its parent (give the container
a height; tiles flex to fill the row).`,methods:[],displayName:"Thumbnail",props:{src:{required:!0,tsType:{name:"string"},description:"Image URL"},label:{required:!0,tsType:{name:"string"},description:"Label shown over the image; also used as the image alt text"},alt:{required:!1,tsType:{name:"string"},description:"Override alt text if the label alone isn't descriptive enough"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}};const y={title:"Components/Thumbnail",component:s,tags:["autodocs"]},t="https://picsum.photos/seed/coast/200/300",a={render:()=>e.jsx("div",{style:{height:105,width:90,display:"flex"},children:e.jsx(s,{src:t,label:"Lisbon"})})},i={render:()=>e.jsxs("div",{style:{height:105,maxWidth:400,display:"flex",gap:"var(--space-tight-gap)"},children:[e.jsx(s,{src:t,label:"Trieste"}),e.jsx(s,{src:t,label:"Split"}),e.jsx(s,{src:t,label:"Kotor"}),e.jsx(s,{src:t,label:"Lisbon"})]})};var l,n,o;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 105,
    width: 90,
    display: 'flex'
  }}>
      <Thumbnail src={src} label="Lisbon" />
    </div>
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,d,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 105,
    maxWidth: 400,
    display: 'flex',
    gap: 'var(--space-tight-gap)'
  }}>
      <Thumbnail src={src} label="Trieste" />
      <Thumbnail src={src} label="Split" />
      <Thumbnail src={src} label="Kotor" />
      <Thumbnail src={src} label="Lisbon" />
    </div>
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const T=["Default","Row"];export{a as Default,i as Row,T as __namedExportsOrder,y as default};
