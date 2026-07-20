import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as $}from"./cn-MEeMP3_e.js";const p="[&_img]:brightness-0 [&_img]:invert",ee={primary:["bg-accent","text-on-accent","hover:bg-accent-hover","focus-visible:ring-focus","border-transparent",p].join(" "),control:["bg-surface-control","text-primary","border-card","hover:bg-surface-hover","focus-visible:ring-focus"].join(" "),ghost:["bg-transparent","text-secondary","border-transparent","hover:bg-surface-hover","focus-visible:ring-focus"].join(" "),destructive:["bg-fill-critical","text-on-accent","border-transparent","hover:bg-fill-critical-hover","focus-visible:ring-critical",p].join(" "),"destructive-ghost":["bg-transparent","text-critical","border-transparent","hover:bg-surface-critical","focus-visible:ring-critical"].join(" ")},re={sm:"size-8 rounded-sm",md:"size-10 rounded-sm",lg:"size-12 rounded-sm"};function P({variant:W="control",size:J="sm",isLoading:m=!1,disabled:K,className:Q,children:U,ref:X,...Y}){const Z=["inline-flex shrink-0 items-center justify-center","border","transition-colors duration-normal","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2","disabled:pointer-events-none disabled:opacity-50","cursor-pointer"].join(" ");return e.jsx("button",{ref:X,className:$(Z,ee[W],re[J],Q),disabled:K||m,"aria-busy":m,...Y,children:m?e.jsx("span",{className:"inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent","aria-hidden":"true"}):U})}P.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'control'
| 'ghost'
| 'destructive'
| 'destructive-ghost'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'control'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'destructive'"},{name:"literal",value:"'destructive-ghost'"}]},description:"",defaultValue:{value:"'control'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Fixed square sizes: sm 32px, md 40px, lg 48px.",defaultValue:{value:"'sm'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},"aria-label":{required:!0,tsType:{name:"string"},description:"Icon-only — always required so the control has an accessible name."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};function r(){return e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2 4h12M6.667 4V2.667a1.333 1.333 0 0 1 1.333-1.334h0a1.333 1.333 0 0 1 1.333 1.334V4M12.667 4v9.333a1.333 1.333 0 0 1-1.334 1.334H4.667a1.333 1.333 0 0 1-1.334-1.334V4",stroke:"currentColor",strokeWidth:"1.33",strokeLinecap:"round",strokeLinejoin:"round"})})}const ne={title:"Components/IconButton",component:P,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","control","ghost","destructive","destructive-ghost"]},size:{control:"select",options:["sm","md","lg"]}}},a={args:{variant:"primary","aria-label":"Add entry",children:e.jsx(r,{})}},s={args:{variant:"control","aria-label":"Remove item",children:e.jsx(r,{})}},n={args:{variant:"ghost","aria-label":"Clear history",children:e.jsx(r,{})}},t={args:{variant:"destructive","aria-label":"Delete",children:e.jsx(r,{})}},o={args:{variant:"destructive-ghost","aria-label":"Delete",children:e.jsx(r,{})}},i={args:{variant:"control",size:"sm","aria-label":"Small",children:e.jsx(r,{})}},c={args:{variant:"control",size:"md","aria-label":"Medium",children:e.jsx(r,{})}},l={args:{variant:"control",size:"lg","aria-label":"Large",children:e.jsx(r,{})}},d={args:{variant:"primary",isLoading:!0,"aria-label":"Loading",children:e.jsx(r,{})}},u={args:{variant:"control",disabled:!0,"aria-label":"Disabled",children:e.jsx(r,{})}};var g,h,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    'aria-label': 'Add entry',
    children: <TrashIcon />
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,f,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'control',
    'aria-label': 'Remove item',
    children: <TrashIcon />
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,j,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    'aria-label': 'Clear history',
    children: <TrashIcon />
  }
}`,...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var I,S,z;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    'aria-label': 'Delete',
    children: <TrashIcon />
  }
}`,...(z=(S=t.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var L,D,R;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'destructive-ghost',
    'aria-label': 'Delete',
    children: <TrashIcon />
  }
}`,...(R=(D=o.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var M,q,w;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'control',
    size: 'sm',
    'aria-label': 'Small',
    children: <TrashIcon />
  }
}`,...(w=(q=i.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var k,B,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'control',
    size: 'md',
    'aria-label': 'Medium',
    children: <TrashIcon />
  }
}`,...(C=(B=c.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var V,_,N;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'control',
    size: 'lg',
    'aria-label': 'Large',
    children: <TrashIcon />
  }
}`,...(N=(_=l.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var E,G,A;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    isLoading: true,
    'aria-label': 'Loading',
    children: <TrashIcon />
  }
}`,...(A=(G=d.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var H,F,O;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'control',
    disabled: true,
    'aria-label': 'Disabled',
    children: <TrashIcon />
  }
}`,...(O=(F=u.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const te=["Primary","Control","Ghost","Destructive","DestructiveGhost","Small","Medium","Large","Loading","Disabled"];export{s as Control,t as Destructive,o as DestructiveGhost,u as Disabled,n as Ghost,l as Large,d as Loading,c as Medium,a as Primary,i as Small,te as __namedExportsOrder,ne as default};
