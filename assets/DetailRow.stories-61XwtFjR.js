import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as b}from"./cn-MEeMP3_e.js";function a({label:m,value:d,className:u,ref:p,...x}){return e.jsxs("div",{ref:p,className:b("flex w-full items-start gap-row-gap","border-b border-divider","py-item-gap",u),...x,children:[e.jsx("span",{className:"w-[100px] shrink-0 text-label text-muted",children:m}),e.jsx("span",{className:"min-w-0 flex-1 text-body text-primary",children:d})]})}a.__docgenInfo={description:`A label/value row for definition-style lists. Draws a hairline
bottom border; stack rows directly to form a list.`,methods:[],displayName:"DetailRow",props:{label:{required:!0,tsType:{name:"string"},description:"Left-hand label"},value:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Right-hand value"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}};const R={title:"Components/DetailRow",component:a,tags:["autodocs"]},t={args:{label:"Height",value:"30–90 cm"}},l={render:()=>e.jsxs("div",{style:{maxWidth:400},children:[e.jsx(a,{label:"Plant type",value:"Herbaceous perennial"}),e.jsx(a,{label:"Height",value:"30–90 cm"}),e.jsx(a,{label:"Exposure",value:"Full sun"}),e.jsx(a,{label:"Family",value:"Lamiaceae"})]})};var r,s,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Height',
    value: '30–90 cm'
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var n,o,c;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 400
  }}>
      <DetailRow label="Plant type" value="Herbaceous perennial" />
      <DetailRow label="Height" value="30–90 cm" />
      <DetailRow label="Exposure" value="Full sun" />
      <DetailRow label="Family" value="Lamiaceae" />
    </div>
}`,...(c=(o=l.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const h=["Default","List"];export{t as Default,l as List,h as __namedExportsOrder,R as default};
