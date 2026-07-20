import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as w}from"./cn-MEeMP3_e.js";function n({title:s,meta:o,className:u,ref:y,children:x,...b}){return e.jsxs("section",{ref:y,className:w("flex flex-col gap-section-gap","rounded-card-dashboard","border border-card-translucent","bg-surface-card p-card-padding",u),...b,children:[(s||o)&&e.jsxs("div",{className:"flex w-full items-baseline justify-between gap-row-gap",children:[s&&e.jsx("h2",{className:"min-w-0 flex-1 text-section font-medium text-primary",children:s}),o&&e.jsx("span",{className:"shrink-0 whitespace-nowrap text-body text-muted",children:o})]}),x]})}n.__docgenInfo={description:`A dashboard panel: soft card surface with a translucent border, large
radius, and an optional header row (title left, meta right).`,methods:[],displayName:"Panel",props:{title:{required:!1,tsType:{name:"string"},description:"Panel heading shown at the top left"},meta:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Secondary content shown at the top right, baseline-aligned with the title.
A plain string renders as muted meta text; pass a node (e.g. a button) when
the header needs an affordance.`},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const z={title:"Components/Panel",component:n,tags:["autodocs"],parameters:{backgrounds:{default:"page"}}},a={args:{title:"Care tips",meta:"4 tasks",children:e.jsx("p",{style:{fontSize:"var(--font-size-body)",color:"var(--color-text-body-secondary)"},children:"Panel body content goes here."})}},t={args:{children:e.jsx("p",{style:{fontSize:"var(--font-size-subheading)",fontWeight:500,color:"var(--color-text-primary)"},children:"A headline-style panel with no header row."})}},r={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-section-gap)",maxWidth:720},children:[e.jsx(n,{title:"My plants",meta:"12 in garden",children:e.jsx("p",{style:{fontSize:"var(--font-size-body)"},children:"Left panel"})}),e.jsx(n,{title:"Weather",meta:"Opatija",children:e.jsx("p",{style:{fontSize:"var(--font-size-body)"},children:"Right panel"})})]})};var i,d,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Care tips',
    meta: '4 tasks',
    children: <p style={{
      fontSize: 'var(--font-size-body)',
      color: 'var(--color-text-body-secondary)'
    }}>
        Panel body content goes here.
      </p>
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <p style={{
      fontSize: 'var(--font-size-subheading)',
      fontWeight: 500,
      color: 'var(--color-text-primary)'
    }}>
        A headline-style panel with no header row.
      </p>
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,f,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 'var(--space-section-gap)',
    maxWidth: 720
  }}>
      <Panel title="My plants" meta="12 in garden">
        <p style={{
        fontSize: 'var(--font-size-body)'
      }}>Left panel</p>
      </Panel>
      <Panel title="Weather" meta="Opatija">
        <p style={{
        fontSize: 'var(--font-size-body)'
      }}>Right panel</p>
      </Panel>
    </div>
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const R=["Default","WithoutHeader","Grid"];export{a as Default,r as Grid,t as WithoutHeader,R as __namedExportsOrder,z as default};
