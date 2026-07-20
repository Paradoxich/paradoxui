import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as r}from"./cn-MEeMP3_e.js";function a({label:v,value:x,labelWidth:w="md",className:f,ref:R,...y}){return e.jsxs("div",{ref:R,className:r("flex w-full items-start gap-row-gap","border-b border-divider","py-item-gap",f),...y,children:[e.jsx("span",{className:r("shrink-0 text-label text-muted",w==="sm"?"w-12":"w-[100px]"),children:v}),e.jsx("span",{className:"min-w-0 flex-1 text-body text-primary",children:x})]})}a.__docgenInfo={description:`A label/value row for definition-style lists. Draws a hairline
bottom border; stack rows directly to form a list.`,methods:[],displayName:"DetailRow",props:{label:{required:!0,tsType:{name:"string"},description:"Left-hand label"},value:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Right-hand value"},labelWidth:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:`Width of the label column. 'md' suits word-length labels;
'sm' suits short stage/step labels in timeline-style lists.`,defaultValue:{value:"'md'",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}};const W={title:"Components/DetailRow",component:a,tags:["autodocs"]},t={args:{label:"Height",value:"30–90 cm"}},s={render:()=>e.jsxs("div",{style:{maxWidth:400},children:[e.jsx(a,{label:"Plant type",value:"Herbaceous perennial"}),e.jsx(a,{label:"Height",value:"30–90 cm"}),e.jsx(a,{label:"Exposure",value:"Full sun"}),e.jsx(a,{label:"Family",value:"Lamiaceae"})]})},l={render:()=>e.jsxs("div",{style:{maxWidth:400},children:[e.jsx(a,{labelWidth:"sm",label:"Spring",value:"Fresh growth emerges and clumps begin to form."}),e.jsx(a,{labelWidth:"sm",label:"Summer",value:"Peak season. Regular attention keeps things going."}),e.jsx(a,{labelWidth:"sm",label:"Winter",value:"Dormant. Structure disappears until regrowth."})]})};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Height',
    value: '30–90 cm'
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 400
  }}>
      <DetailRow label="Plant type" value="Herbaceous perennial" />
      <DetailRow label="Height" value="30–90 cm" />
      <DetailRow label="Exposure" value="Full sun" />
      <DetailRow label="Family" value="Lamiaceae" />
    </div>
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,p,b,h,g;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 400
  }}>
      <DetailRow labelWidth="sm" label="Spring" value="Fresh growth emerges and clumps begin to form." />
      <DetailRow labelWidth="sm" label="Summer" value="Peak season. Regular attention keeps things going." />
      <DetailRow labelWidth="sm" label="Winter" value="Dormant. Structure disappears until regrowth." />
    </div>
}`,...(b=(p=l.parameters)==null?void 0:p.docs)==null?void 0:b.source},description:{story:"Narrow label column for timeline-style lists of short stage labels.",...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};const S=["Default","List","Timeline"];export{t as Default,s as List,l as Timeline,S as __namedExportsOrder,W as default};
