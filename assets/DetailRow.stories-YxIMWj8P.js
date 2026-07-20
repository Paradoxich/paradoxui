import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as i}from"./cn-MEeMP3_e.js";function a({label:f,value:x,labelWidth:w="md",className:g,ref:R,...W}){return e.jsxs("div",{ref:R,className:i("flex w-full items-start gap-row-gap","border-b border-divider","py-item-gap",g),...W,children:[e.jsx("span",{className:i("shrink-0 text-label text-muted",w==="sm"?"w-12":"w-[100px]"),children:f}),e.jsx("span",{className:"min-w-0 flex-1 text-body text-primary",children:x})]})}a.__docgenInfo={description:`A label/value row for definition-style lists. Draws a hairline
bottom border; stack rows directly to form a list.`,methods:[],displayName:"DetailRow",props:{label:{required:!0,tsType:{name:"string"},description:"Left-hand label"},value:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Right-hand value"},labelWidth:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:`Width of the label column. 'md' suits word-length labels;
'sm' suits short stage/step labels in timeline-style lists.`,defaultValue:{value:"'md'",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}};const j={title:"Components/DetailRow",component:a,tags:["autodocs"]},t={args:{label:"Width",value:"80 cm"}},s={render:()=>e.jsxs("div",{style:{maxWidth:400},children:[e.jsx(a,{label:"Material",value:"Solid oak"}),e.jsx(a,{label:"Width",value:"80 cm"}),e.jsx(a,{label:"Finish",value:"Natural oil"}),e.jsx(a,{label:"Made in",value:"Copenhagen"})]})},l={render:()=>e.jsxs("div",{style:{maxWidth:400},children:[e.jsx(a,{labelWidth:"sm",label:"Day 1",value:"Kickoff. Scope agreed and the first drafts shared."}),e.jsx(a,{labelWidth:"sm",label:"Week 2",value:"First review. Direction locked, details still moving."}),e.jsx(a,{labelWidth:"sm",label:"Week 6",value:"Handoff. Final files delivered and archived."})]})};var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Width',
    value: '80 cm'
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var d,m,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 400
  }}>
      <DetailRow label="Material" value="Solid oak" />
      <DetailRow label="Width" value="80 cm" />
      <DetailRow label="Finish" value="Natural oil" />
      <DetailRow label="Made in" value="Copenhagen" />
    </div>
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,p,h,v,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 400
  }}>
      <DetailRow labelWidth="sm" label="Day 1" value="Kickoff. Scope agreed and the first drafts shared." />
      <DetailRow labelWidth="sm" label="Week 2" value="First review. Direction locked, details still moving." />
      <DetailRow labelWidth="sm" label="Week 6" value="Handoff. Final files delivered and archived." />
    </div>
}`,...(h=(p=l.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:"Narrow label column for timeline-style lists of short stage labels.",...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.description}}};const k=["Default","List","Timeline"];export{t as Default,s as List,l as Timeline,k as __namedExportsOrder,j as default};
