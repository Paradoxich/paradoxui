import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as i}from"./cn-MEeMP3_e.js";const z={card:"bg-surface-card",sunken:"bg-surface-sunken"};function k({image:S,imageHeight:n,title:T,subtitle:d,titleAdornment:K,body:l,bodyClassName:M,footer:c,border:C="solid",surface:I="card",as:H="article",onClick:B,className:A,ref:u}){const m=i("flex flex-col gap-section-gap rounded-card-tile p-card-padding",z[I],C==="dashed"?"border border-dashed border-card":"border border-card",A),p=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"relative w-full shrink-0 overflow-hidden rounded-sm",style:{height:typeof n=="number"?`${n}px`:n},children:S}),e.jsxs("div",{className:"flex flex-col gap-inline-gap",children:[e.jsxs("div",{className:"flex flex-col gap-tight-gap",children:[e.jsxs("div",{className:"flex items-start gap-inline-gap",children:[e.jsx("h3",{className:"text-heading font-semibold text-primary",children:T}),K]}),d&&e.jsx("p",{className:"text-body-small italic text-muted",children:d})]}),l&&e.jsx("p",{className:i("text-body-small text-secondary",M),children:l})]}),c&&e.jsx("div",{className:"flex items-start gap-item-gap",children:c})]});return H==="button"?e.jsx("button",{ref:u,type:"button",onClick:B,className:i(m,"text-left transition-colors duration-normal hover:bg-surface-subtle"),children:p}):e.jsx("article",{ref:u,className:m,children:p})}k.__docgenInfo={description:"",methods:[],displayName:"MediaCard",props:{image:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Image element (e.g. a Next.js `Image` with `fill`) — MediaCard owns the\nwrapping box, height, and corner radius so it never varies per usage."},imageHeight:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Secondary line under the title, e.g. a subtitle or short caption."},titleAdornment:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Rendered inline next to the title, e.g. a status badge."},body:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},bodyClassName:{required:!1,tsType:{name:"string"},description:"Extra classes for the body `<p>` — e.g. `line-clamp-3` — layout only,\nnever typography (size/leading/tracking are fixed)."},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},border:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},surface:{required:!1,tsType:{name:"union",raw:"'card' | 'sunken'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'sunken'"}]},description:"Card surface tone. 'sunken' recedes toward the page background — use for lower-emphasis/draft cards.",defaultValue:{value:"'card'",computed:!1}},as:{required:!1,tsType:{name:"union",raw:"'article' | 'button'",elements:[{name:"literal",value:"'article'"},{name:"literal",value:"'button'"}]},description:"",defaultValue:{value:"'article'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"Forwarded to the root element (article or button)."}}};const o=e.jsx("div",{style:{width:"100%",height:"100%",background:"var(--color-sage-300)"}}),F={title:"Components/MediaCard",component:k,tags:["autodocs"],parameters:{backgrounds:{default:"page"}}},t={args:{image:o,imageHeight:162,title:"Kotor",subtitle:"Bay of Kotor, Montenegro",body:"Steep alleys, quiet courtyards, and the best light an hour before sunset."}},a={args:{image:o,imageHeight:200,title:"Kotor",titleAdornment:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",borderRadius:"var(--radius-md)",background:"var(--color-accent-muted)",color:"var(--color-accent)",fontSize:"var(--font-size-label)",padding:"2px 8px"},children:"new"}),body:"❋ Saved as a highlight in your latest collection."}},r={args:{image:o,imageHeight:148,title:"Kotor",subtitle:"Old town · Best in May",body:"Steep alleys, quiet courtyards, and the best light an hour before sunset.",border:"dashed",footer:e.jsx("button",{type:"button",style:{flex:1,height:32,borderRadius:"var(--radius-sm)",background:"var(--color-surface-control)"},children:"Add to trip"})}},s={args:{image:o,imageHeight:162,title:"Kotor",subtitle:"Bay of Kotor, Montenegro",body:"Steep alleys, quiet courtyards, and the best light an hour before sunset.",as:"button"}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    image: placeholderImage,
    imageHeight: 162,
    title: 'Kotor',
    subtitle: 'Bay of Kotor, Montenegro',
    body: 'Steep alleys, quiet courtyards, and the best light an hour before sunset.'
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,y,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    image: placeholderImage,
    imageHeight: 200,
    title: 'Kotor',
    titleAdornment: <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-accent-muted)',
      color: 'var(--color-accent)',
      fontSize: 'var(--font-size-label)',
      padding: '2px 8px'
    }}>
        new
      </span>,
    body: '❋ Saved as a highlight in your latest collection.'
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,R,N;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    image: placeholderImage,
    imageHeight: 148,
    title: 'Kotor',
    subtitle: 'Old town · Best in May',
    body: 'Steep alleys, quiet courtyards, and the best light an hour before sunset.',
    border: 'dashed',
    footer: <button type="button" style={{
      flex: 1,
      height: 32,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--color-surface-control)'
    }}>
        Add to trip
      </button>
  }
}`,...(N=(R=r.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var w,q,j;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    image: placeholderImage,
    imageHeight: 162,
    title: 'Kotor',
    subtitle: 'Bay of Kotor, Montenegro',
    body: 'Steep alleys, quiet courtyards, and the best light an hour before sunset.',
    as: 'button'
  }
}`,...(j=(q=s.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};const _=["Default","WithBadgeAndFooter","Dashed","Clickable"];export{s as Clickable,r as Dashed,t as Default,a as WithBadgeAndFooter,_ as __namedExportsOrder,F as default};
