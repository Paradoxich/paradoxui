import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as k}from"./cn-MEeMP3_e.js";const N={neutral:"bg-surface-sunken",soft:"bg-surface-card",warning:"bg-surface-warning",positive:"bg-surface-positive"};function a({label:y,icon:i,tone:v="neutral",className:C,ref:S,children:j,...R}){return e.jsxs("div",{ref:S,className:k("flex flex-col gap-inline-gap","rounded-sm p-row-gap",N[v],C),...R,children:[e.jsxs("div",{className:"flex w-full items-center justify-between gap-row-gap",children:[e.jsx("span",{className:"min-w-0 flex-1 text-label text-primary",children:y}),i&&e.jsx("span",{"aria-hidden":"true",className:"flex size-4 shrink-0 items-center justify-center",children:i})]}),e.jsx("div",{className:"w-full text-body-small text-body-secondary",children:j})]})}a.__docgenInfo={description:`A small labelled stat/info card: header row with label and optional
icon, followed by body content.`,methods:[],displayName:"StatCard",props:{label:{required:!0,tsType:{name:"string"},description:"Short label shown in the card header"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon rendered at the right edge of the header"},tone:{required:!1,tsType:{name:"union",raw:"'neutral' | 'soft' | 'warning' | 'positive'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'soft'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'positive'"}]},description:"Background treatment.\n- `neutral` — default recessed card\n- `soft` — subtle card surface\n- `warning` — warm background for warnings\n- `positive` — green background for benefits",defaultValue:{value:"'neutral'",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const W={title:"Components/StatCard",component:a,tags:["autodocs"],argTypes:{tone:{control:"select",options:["neutral","soft","warning","positive"]}}},s=e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",width:"16",height:"16",children:e.jsx("path",{d:"M8 2C8 2 4 7 4 10a4 4 0 108 0c0-3-4-8-4-8z",stroke:"currentColor",strokeWidth:"1.25"})}),r={args:{label:"Humidity",icon:s,children:"Comfortable range through the afternoon. Expect a drier evening."}},t={args:{tone:"warning",label:"Wind",children:"Strong gusts expected after sunset. Secure anything loose on the balcony."}},n={args:{tone:"positive",label:"Air quality",children:"Clear and clean all week. A good stretch for keeping the windows open."}},o={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-inline-gap)",maxWidth:400},children:[e.jsx(a,{label:"Humidity",icon:s,children:"Comfortable range through the afternoon."}),e.jsx(a,{label:"Light",icon:s,children:"Golden hour starts around seven."}),e.jsx(a,{tone:"warning",label:"Wind",style:{gridColumn:"span 2"},children:"Strong gusts expected after sunset."})]})};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Humidity',
    icon: dropIcon,
    children: 'Comfortable range through the afternoon. Expect a drier evening.'
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,p,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    label: 'Wind',
    children: 'Strong gusts expected after sunset. Secure anything loose on the balcony.'
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,f,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tone: 'positive',
    label: 'Air quality',
    children: 'Clear and clean all week. A good stretch for keeping the windows open.'
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,w,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 'var(--space-inline-gap)',
    maxWidth: 400
  }}>
      <StatCard label="Humidity" icon={dropIcon}>
        Comfortable range through the afternoon.
      </StatCard>
      <StatCard label="Light" icon={dropIcon}>
        Golden hour starts around seven.
      </StatCard>
      <StatCard tone="warning" label="Wind" style={{
      gridColumn: 'span 2'
    }}>
        Strong gusts expected after sunset.
      </StatCard>
    </div>
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const E=["Default","Caution","Positive","Grid"];export{t as Caution,r as Default,o as Grid,n as Positive,E as __namedExportsOrder,W as default};
