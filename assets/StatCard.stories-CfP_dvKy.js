import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as k}from"./cn-MEeMP3_e.js";const N={neutral:"bg-surface-sunken",soft:"bg-surface-card",warning:"bg-surface-warning",positive:"bg-surface-positive"};function r({label:y,icon:i,tone:x="neutral",className:C,ref:j,children:S,...R}){return e.jsxs("div",{ref:j,className:k("flex flex-col gap-inline-gap","rounded-sm p-row-gap",N[x],C),...R,children:[e.jsxs("div",{className:"flex w-full items-center justify-between gap-row-gap",children:[e.jsx("span",{className:"min-w-0 flex-1 text-label text-primary",children:y}),i&&e.jsx("span",{"aria-hidden":"true",className:"flex size-4 shrink-0 items-center justify-center",children:i})]}),e.jsx("div",{className:"w-full text-body-small text-body-secondary",children:S})]})}r.__docgenInfo={description:`A small labelled stat/info card: header row with label and optional
icon, followed by body content.`,methods:[],displayName:"StatCard",props:{label:{required:!0,tsType:{name:"string"},description:"Short label shown in the card header"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon rendered at the right edge of the header"},tone:{required:!1,tsType:{name:"union",raw:"'neutral' | 'soft' | 'warning' | 'positive'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'soft'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'positive'"}]},description:"Background treatment.\n- `neutral` — default recessed card\n- `soft` — subtle card surface\n- `warning` — warm background for warnings\n- `positive` — green background for benefits",defaultValue:{value:"'neutral'",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const W={title:"Components/StatCard",component:r,tags:["autodocs"],argTypes:{tone:{control:"select",options:["neutral","soft","warning","positive"]}}},s=e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",width:"16",height:"16",children:e.jsx("path",{d:"M8 2C8 2 4 7 4 10a4 4 0 108 0c0-3-4-8-4-8z",stroke:"currentColor",strokeWidth:"1.25"})}),a={args:{label:"Water",icon:s,children:"Moderate watering while establishing. Drought tolerant once mature."}},n={args:{tone:"warning",label:"Common issues",children:"Can become floppy in overly rich soil or too much shade. Poor drainage may cause crown rot during winter."}},t={args:{tone:"positive",label:"Environment benefits",children:"Highly attractive to bees and other pollinators during peak bloom weeks."}},o={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-inline-gap)",maxWidth:400},children:[e.jsx(r,{label:"Water",icon:s,children:"Moderate watering while establishing."}),e.jsx(r,{label:"Light",icon:s,children:"Performs best in full sun."}),e.jsx(r,{tone:"warning",label:"Common issues",style:{gridColumn:"span 2"},children:"Can become floppy in overly rich soil or too much shade."})]})};var l,c,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Water',
    icon: dropIcon,
    children: 'Moderate watering while establishing. Drought tolerant once mature.'
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    label: 'Common issues',
    children: 'Can become floppy in overly rich soil or too much shade. Poor drainage may cause crown rot during winter.'
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tone: 'positive',
    label: 'Environment benefits',
    children: 'Highly attractive to bees and other pollinators during peak bloom weeks.'
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,w,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 'var(--space-inline-gap)',
    maxWidth: 400
  }}>
      <StatCard label="Water" icon={dropIcon}>
        Moderate watering while establishing.
      </StatCard>
      <StatCard label="Light" icon={dropIcon}>
        Performs best in full sun.
      </StatCard>
      <StatCard tone="warning" label="Common issues" style={{
      gridColumn: 'span 2'
    }}>
        Can become floppy in overly rich soil or too much shade.
      </StatCard>
    </div>
}`,...(v=(w=o.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const D=["Default","Caution","Positive","Grid"];export{n as Caution,a as Default,o as Grid,t as Positive,D as __namedExportsOrder,W as default};
