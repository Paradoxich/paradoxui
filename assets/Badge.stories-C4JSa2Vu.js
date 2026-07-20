import{j as C}from"./jsx-runtime-BjG_zV1W.js";import{c as q}from"./cn-MEeMP3_e.js";const A={default:["bg-surface-subtle","text-secondary","border-divider"].join(" "),accent:["bg-accent-muted","text-accent","border-transparent"].join(" ")},D={positive:["bg-surface-positive","text-positive","border-transparent"].join(" "),warning:["bg-surface-warning","text-warning","border-transparent"].join(" "),critical:["bg-surface-critical","text-critical","border-transparent"].join(" ")};function b({variant:S="default",tone:s,children:R,className:j,ref:T,...N}){return C.jsx("span",{ref:T,className:q("inline-flex items-center","px-2.5 py-0.5","text-xs font-medium","rounded-full","border",s?D[s]:A[S],j),...N,children:R})}b.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'accent'"}]},description:"Stylistic kind. Use `tone` for semantic status.",defaultValue:{value:"'default'",computed:!1}},tone:{required:!1,tsType:{name:"union",raw:"'positive' | 'warning' | 'critical'",elements:[{name:"literal",value:"'positive'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'critical'"}]},description:"Semantic status. Takes precedence over `variant` when set."},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _={title:"Components/Badge",component:b,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","accent"]},tone:{control:"select",options:["positive","warning","critical"]}}},e={args:{variant:"default",children:"Default"}},a={args:{variant:"accent",children:"Accent"}},r={args:{tone:"positive",children:"Healthy"}},t={args:{tone:"warning",children:"Needs water"}},n={args:{tone:"critical",children:"Critical"}};var c,i,o;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: 'Default'
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var l,d,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    children: 'Accent'
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tone: 'positive',
    children: 'Healthy'
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,v,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    children: 'Needs water'
  }
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var w,x,y;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    tone: 'critical',
    children: 'Critical'
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const B=["Default","Accent","Positive","Warning","Critical"];export{a as Accent,n as Critical,e as Default,r as Positive,t as Warning,B as __namedExportsOrder,_ as default};
