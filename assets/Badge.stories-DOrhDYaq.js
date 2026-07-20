import{j as C}from"./jsx-runtime-BjG_zV1W.js";import{c as k}from"./cn-MEeMP3_e.js";const q={default:["bg-surface-subtle","text-secondary","border-divider"].join(" "),accent:["bg-accent-muted","text-accent","border-transparent"].join(" ")},A={positive:["bg-surface-positive","text-positive","border-transparent"].join(" "),warning:["bg-surface-warning","text-warning","border-transparent"].join(" "),critical:["bg-surface-critical","text-critical","border-transparent"].join(" ")};function y({variant:S="default",tone:s,children:R,className:j,ref:T,...D}){return C.jsx("span",{ref:T,className:k("inline-flex items-center","px-2.5 py-0.5","text-xs font-medium","rounded-full","border",s?A[s]:q[S],j),...D,children:R})}y.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'accent'"}]},description:"Stylistic kind. Use `tone` for semantic status.",defaultValue:{value:"'default'",computed:!1}},tone:{required:!1,tsType:{name:"union",raw:"'positive' | 'warning' | 'critical'",elements:[{name:"literal",value:"'positive'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'critical'"}]},description:"Semantic status. Takes precedence over `variant` when set."},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _={title:"Components/Badge",component:y,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","accent"]},tone:{control:"select",options:["positive","warning","critical"]}}},e={args:{variant:"default",children:"Default"}},a={args:{variant:"accent",children:"Accent"}},r={args:{tone:"positive",children:"On track"}},t={args:{tone:"warning",children:"Due soon"}},n={args:{tone:"critical",children:"Critical"}};var c,i,o;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    children: 'On track'
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,v,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    children: 'Due soon'
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,w,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tone: 'critical',
    children: 'Critical'
  }
}`,...(b=(w=n.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const B=["Default","Accent","Positive","Warning","Critical"];export{a as Accent,n as Critical,e as Default,r as Positive,t as Warning,B as __namedExportsOrder,_ as default};
