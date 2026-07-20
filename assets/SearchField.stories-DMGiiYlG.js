import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as n}from"./cn-MEeMP3_e.js";function g({label:b,placeholder:s="Search...",className:x,trailingAction:o,ref:y,...w}){return e.jsxs("label",{className:n("flex h-12 w-full items-center gap-item-gap","rounded-full","bg-surface-field","px-section-gap","shadow-soft","transition-colors duration-normal","focus-within:bg-gray-0",x),children:[e.jsx("svg",{"aria-hidden":"true",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",className:"shrink-0 text-secondary",children:e.jsx("path",{d:"M14 14L11.0093 11.004M12.6667 7C12.6667 8.50289 12.0696 9.94423 11.0069 11.0069C9.94423 12.0696 8.50289 12.6667 7 12.6667C5.49711 12.6667 4.05577 12.0696 2.99306 11.0069C1.93036 9.94423 1.33333 8.50289 1.33333 7C1.33333 5.49711 1.93036 4.05577 2.99306 2.99306C4.05577 1.93036 5.49711 1.33333 7 1.33333C8.50289 1.33333 9.94423 1.93036 11.0069 2.99306C12.0696 4.05577 12.6667 5.49711 12.6667 7Z",stroke:"currentColor",strokeWidth:"1.33333",strokeLinecap:"round"})}),e.jsx("input",{ref:y,type:"search","aria-label":b??s,placeholder:s,className:n("w-full min-w-0 flex-1 bg-transparent","text-body-small text-primary","placeholder:text-secondary","outline-none","[&::-webkit-search-cancel-button]:hidden"),...w}),o&&e.jsx("span",{className:"shrink-0",children:o})]})}g.__docgenInfo={description:`A pill-shaped search input with a leading magnifier icon and an optional
trailing action slot.`,methods:[],displayName:"SearchField",props:{label:{required:!1,tsType:{name:"string"},description:"Accessible label for the input. Defaults to the placeholder."},className:{required:!1,tsType:{name:"string"},description:"Class applied to the outer pill wrapper."},trailingAction:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Optional slot rendered at the trailing edge of the pill — typically an
icon button (e.g. a filter toggle). Interactive elements are safe here:
clicking them does not activate the label's input focus.`},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Forwarded to the underlying search `<input>`."},placeholder:{defaultValue:{value:"'Search...'",computed:!1},required:!1}},composes:["Omit"]};const k={title:"Components/SearchField",component:g,tags:["autodocs"]},a={args:{placeholder:"Search notes..."}},t={args:{placeholder:"Search...",label:"Search the catalog"}},r={args:{placeholder:"Search...",trailingAction:e.jsx("button",{type:"button","aria-label":"Open filters",className:"flex size-8 items-center justify-center rounded-full transition-colors duration-normal hover:bg-surface-overlay",children:e.jsx("svg",{"aria-hidden":"true",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",className:"text-secondary",children:e.jsx("path",{d:"M2 4h12M4.5 8h7M7 12h2",stroke:"currentColor",strokeWidth:"1.33333",strokeLinecap:"round"})})})}};var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search notes...'
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,h,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    label: 'Search the catalog'
  }
}`,...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var u,m,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    trailingAction: <button type="button" aria-label="Open filters" className="flex size-8 items-center justify-center rounded-full transition-colors duration-normal hover:bg-surface-overlay">
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-secondary">
          <path d="M2 4h12M4.5 8h7M7 12h2" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" />
        </svg>
      </button>
  }
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const C=["Default","WithLabel","WithTrailingAction"];export{a as Default,t as WithLabel,r as WithTrailingAction,C as __namedExportsOrder,k as default};
