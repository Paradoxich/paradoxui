import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as N}from"./cn-MEeMP3_e.js";const i="flex h-8 shrink-0 items-center justify-center rounded-sm bg-accent px-inline-gap text-body-small text-on-accent transition-colors duration-normal hover:bg-accent-hover";function k({message:y,ctaLabel:a,illustration:n,ctaHref:o,linkComponent:w,onCtaClick:x,className:C,ref:v}){const b=w??"a";return e.jsxs("div",{ref:v,className:N("flex w-full max-w-[411px] flex-col gap-section-gap rounded-md border border-dashed border-card p-card-padding",C),children:[n&&e.jsx("div",{className:"relative aspect-[726/557] w-full overflow-hidden rounded-md bg-surface-subtle",children:n}),e.jsxs("div",{className:"flex items-center justify-between gap-row-gap",children:[e.jsx("p",{className:"text-body-small text-secondary",children:y}),o?e.jsx(b,{href:o,className:i,children:a}):e.jsx("button",{type:"button",onClick:x,className:i,children:a})]})]})}k.__docgenInfo={description:`Prominent, page-level empty state — a dashed panel holding a contained
illustration tile, with the message and a single CTA in a row beneath it.
For low-emphasis inline empties (e.g. small cards) use plain text instead.`,methods:[],displayName:"EmptyState",props:{message:{required:!0,tsType:{name:"string"},description:""},ctaLabel:{required:!0,tsType:{name:"string"},description:""},illustration:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Optional illustration rendered inside the tile above the message — an\ninline SVG or `<img>`. Decorative by contract: the message carries the\nmeaning, so pass `aria-hidden="true"` (or an empty `alt`) on the element\nitself. It fills the tile, which supplies the background and clipping.'},ctaHref:{required:!1,tsType:{name:"string"},description:"Navigation target for the CTA. Rendered through `linkComponent`\n(a plain `<a>` by default). For in-page actions use `onCtaClick` instead."},linkComponent:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Framework link component used to render `ctaHref` — e.g. Next's `Link`.\nDefaults to a plain `<a>` so the kit carries no framework dependency."},onCtaClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}};const T={title:"Components/EmptyState",component:k,tags:["autodocs"]},t={args:{message:"Nothing saved yet. Items you add will show up here.",ctaLabel:"Browse items",ctaHref:"#"}},r={args:{message:"No results for this filter.",ctaLabel:"Clear filters",onCtaClick:()=>{}}},s={args:{message:"Nothing saved yet. Items you add will show up here.",ctaLabel:"Browse items",ctaHref:"#",illustration:e.jsxs("svg",{"aria-hidden":"true",width:"96",height:"96",viewBox:"0 0 48 48",fill:"none",className:"text-secondary",children:[e.jsx("path",{d:"M10 38h10M26 38h12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("path",{d:"M24 38V22",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("path",{d:"M24 27c-6 0-10-4-10-10 6 0 10 4 10 10Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),e.jsx("path",{d:"M24 22c5 0 9-4 9-9-5 0-9 4-9 9Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"})]})}};var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    message: 'Nothing saved yet. Items you add will show up here.',
    ctaLabel: 'Browse items',
    ctaHref: '#'
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    message: 'No results for this filter.',
    ctaLabel: 'Clear filters',
    onCtaClick: () => {}
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    message: 'Nothing saved yet. Items you add will show up here.',
    ctaLabel: 'Browse items',
    ctaHref: '#',
    illustration: <svg aria-hidden="true" width="96" height="96" viewBox="0 0 48 48" fill="none" className="text-secondary">
        <path d="M10 38h10M26 38h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 38V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 27c-6 0-10-4-10-10 6 0 10 4 10 10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 22c5 0 9-4 9-9-5 0-9 4-9 9Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const M=["Default","WithAction","WithIllustration"];export{t as Default,r as WithAction,s as WithIllustration,M as __namedExportsOrder,T as default};
