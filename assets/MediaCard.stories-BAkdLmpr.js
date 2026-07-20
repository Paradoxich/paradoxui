import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as l}from"./cn-MEeMP3_e.js";const z={card:"bg-surface-card",sunken:"bg-surface-sunken"};function T({image:q,imageHeight:o,title:L,subtitle:d,titleAdornment:A,body:i,bodyClassName:C,footer:c,border:I="solid",surface:H="card",as:M="article",onClick:S,className:D,ref:u}){const m=l("flex flex-col gap-section-gap rounded-card-tile p-card-padding",z[H],I==="dashed"?"border border-dashed border-card":"border border-card",D),p=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"relative w-full shrink-0 overflow-hidden rounded-sm",style:{height:typeof o=="number"?`${o}px`:o},children:q}),e.jsxs("div",{className:"flex flex-col gap-inline-gap",children:[e.jsxs("div",{className:"flex flex-col gap-tight-gap",children:[e.jsxs("div",{className:"flex items-start gap-inline-gap",children:[e.jsx("h3",{className:"text-heading font-semibold text-primary",children:L}),A]}),d&&e.jsx("p",{className:"text-body-small italic text-muted",children:d})]}),i&&e.jsx("p",{className:l("text-body-small text-secondary",C),children:i})]}),c&&e.jsx("div",{className:"flex items-start gap-item-gap",children:c})]});return M==="button"?e.jsx("button",{ref:u,type:"button",onClick:S,className:l(m,"text-left transition-colors duration-normal hover:bg-surface-subtle"),children:p}):e.jsx("article",{ref:u,className:m,children:p})}T.__docgenInfo={description:"",methods:[],displayName:"MediaCard",props:{image:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Image element (e.g. a Next.js `Image` with `fill`) — MediaCard owns the\nwrapping box, height, and corner radius so it never varies per usage."},imageHeight:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Secondary line under the title, e.g. a botanical name or planting caption."},titleAdornment:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Rendered inline next to the title, e.g. a status badge."},body:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},bodyClassName:{required:!1,tsType:{name:"string"},description:"Extra classes for the body `<p>` — e.g. `line-clamp-3` — layout only,\nnever typography (size/leading/tracking are fixed)."},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},border:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},surface:{required:!1,tsType:{name:"union",raw:"'card' | 'sunken'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'sunken'"}]},description:"Card surface tone. 'sunken' recedes toward the page background — use for lower-emphasis/draft cards.",defaultValue:{value:"'card'",computed:!1}},as:{required:!1,tsType:{name:"union",raw:"'article' | 'button'",elements:[{name:"literal",value:"'article'"},{name:"literal",value:"'button'"}]},description:"",defaultValue:{value:"'article'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"Forwarded to the root element (article or button)."}}};const s=e.jsx("div",{style:{width:"100%",height:"100%",background:"var(--color-sage-300)"}}),_={title:"Components/MediaCard",component:T,tags:["autodocs"],parameters:{backgrounds:{default:"page"}}},a={args:{image:s,imageHeight:162,title:"Lavender",subtitle:"Lavandula angustifolia",body:"A fragrant, drought-tolerant perennial that draws pollinators all summer."}},t={args:{image:s,imageHeight:200,title:"Lavender",titleAdornment:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",borderRadius:"var(--radius-md)",background:"var(--color-accent-muted)",color:"var(--color-accent)",fontSize:"var(--font-size-label)",padding:"2px 8px"},children:"blooming"}),body:"❋ Deadhead spent blooms to encourage a second flush."}},r={args:{image:s,imageHeight:148,title:"Lavender",subtitle:"Part shade · Aug–Oct",body:"A fragrant, drought-tolerant perennial that draws pollinators all summer.",border:"dashed",footer:e.jsx("button",{type:"button",style:{flex:1,height:32,borderRadius:"var(--radius-sm)",background:"var(--color-surface-control)"},children:"Mark as planted"})}},n={args:{image:s,imageHeight:162,title:"Lavender",subtitle:"Lavandula angustifolia",body:"A fragrant, drought-tolerant perennial that draws pollinators all summer.",as:"button"}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    image: placeholderImage,
    imageHeight: 162,
    title: 'Lavender',
    subtitle: 'Lavandula angustifolia',
    body: 'A fragrant, drought-tolerant perennial that draws pollinators all summer.'
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,v,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    image: placeholderImage,
    imageHeight: 200,
    title: 'Lavender',
    titleAdornment: <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-accent-muted)',
      color: 'var(--color-accent)',
      fontSize: 'var(--font-size-label)',
      padding: '2px 8px'
    }}>
        blooming
      </span>,
    body: '❋ Deadhead spent blooms to encourage a second flush.'
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var x,R,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    image: placeholderImage,
    imageHeight: 148,
    title: 'Lavender',
    subtitle: 'Part shade · Aug–Oct',
    body: 'A fragrant, drought-tolerant perennial that draws pollinators all summer.',
    border: 'dashed',
    footer: <button type="button" style={{
      flex: 1,
      height: 32,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--color-surface-control)'
    }}>
        Mark as planted
      </button>
  }
}`,...(w=(R=r.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var N,k,j;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    image: placeholderImage,
    imageHeight: 162,
    title: 'Lavender',
    subtitle: 'Lavandula angustifolia',
    body: 'A fragrant, drought-tolerant perennial that draws pollinators all summer.',
    as: 'button'
  }
}`,...(j=(k=n.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const O=["Default","WithBadgeAndFooter","Dashed","Clickable"];export{n as Clickable,r as Dashed,a as Default,t as WithBadgeAndFooter,O as __namedExportsOrder,_ as default};
