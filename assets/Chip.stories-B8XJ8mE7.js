import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as v}from"./cn-MEeMP3_e.js";function r({selected:o=!1,children:f,className:g,ref:b,...x}){return e.jsx("button",{ref:b,type:"button","aria-pressed":o,className:v("inline-flex h-8 items-center justify-center","px-row-gap","rounded-chip","border","text-body-small","whitespace-nowrap select-none","transition-colors duration-normal","focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",o?"border-transparent bg-accent text-on-accent hover:bg-accent-hover":"border-card bg-transparent text-primary hover:bg-surface-hover",g),...x,children:f})}r.__docgenInfo={description:"A selectable filter pill. Renders as a toggle button with\n`aria-pressed` reflecting the selected state.",methods:[],displayName:"Chip",props:{selected:{required:!1,tsType:{name:"boolean"},description:"Whether the chip is currently selected",defaultValue:{value:"false",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const R={title:"Components/Chip",component:r,tags:["autodocs"],argTypes:{selected:{control:"boolean"}}},t={args:{children:"Blooming"}},s={args:{selected:!0,children:"All"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-inline-gap)"},children:[e.jsx(r,{selected:!0,children:"All"}),e.jsx(r,{children:"Blooming"}),e.jsx(r,{children:"Pre-bloom"}),e.jsx(r,{children:"Resting"}),e.jsx(r,{children:"Done"})]})};var a,i,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: 'Blooming'
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,p,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    selected: true,
    children: 'All'
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-gap)'
  }}>
      <Chip selected>All</Chip>
      <Chip>Blooming</Chip>
      <Chip>Pre-bloom</Chip>
      <Chip>Resting</Chip>
      <Chip>Done</Chip>
    </div>
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const j=["Default","Selected","Group"];export{t as Default,n as Group,s as Selected,j as __namedExportsOrder,R as default};
