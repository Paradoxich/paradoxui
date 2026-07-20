import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as h}from"./cn-MEeMP3_e.js";function a({stage:m,className:d,ref:c,children:p,...u}){return e.jsxs("div",{ref:c,className:h("flex w-full items-start gap-row-gap","border-b border-divider","py-item-gap",d),...u,children:[e.jsx("span",{className:"w-12 shrink-0 text-label text-muted",children:m}),e.jsx("span",{className:"min-w-0 flex-1 text-body text-primary",children:p})]})}a.__docgenInfo={description:`A row in a stage/timeline list: narrow stage label on the left,
description on the right. Draws a hairline bottom border.`,methods:[],displayName:"SeasonalStageRow",props:{stage:{required:!0,tsType:{name:"string"},description:"Short stage label shown in the narrow left column"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Description of what happens during this stage"}}};const f={title:"Components/SeasonalStageRow",component:a,tags:["autodocs"]},r={args:{stage:"Summer",children:"Peak flowering season. Regular deadheading encourages repeat blooming through warm months."}},s={render:()=>e.jsxs("div",{style:{maxWidth:400},children:[e.jsx(a,{stage:"Early Spring",children:"Fresh basal growth emerges. Foliage begins forming dense clumps."}),e.jsx(a,{stage:"Summer",children:"Peak flowering season. Regular deadheading encourages repeat blooming."}),e.jsx(a,{stage:"Winter",children:"Dormant. Structure disappears almost entirely until spring regrowth."})]})};var t,n,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    stage: 'Summer',
    children: 'Peak flowering season. Regular deadheading encourages repeat blooming through warm months.'
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var i,l,g;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 400
  }}>
      <SeasonalStageRow stage="Early Spring">
        Fresh basal growth emerges. Foliage begins forming dense clumps.
      </SeasonalStageRow>
      <SeasonalStageRow stage="Summer">
        Peak flowering season. Regular deadheading encourages repeat blooming.
      </SeasonalStageRow>
      <SeasonalStageRow stage="Winter">
        Dormant. Structure disappears almost entirely until spring regrowth.
      </SeasonalStageRow>
    </div>
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const R=["Default","List"];export{r as Default,s as List,R as __namedExportsOrder,f as default};
