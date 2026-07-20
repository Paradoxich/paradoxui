import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{c as z}from"./cn-MEeMP3_e.js";const h={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-10 h-10"};function u({size:g="md",label:f="Loading…",className:S,ref:x,...w}){return r.jsxs("svg",{ref:x,className:z("animate-spin","text-accent",h[g],S),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",role:"status","aria-label":f,...w,children:[r.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),r.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]})}u.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Loading…'",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},description:""}}};const V={title:"Components/Spinner",component:u,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},e={args:{size:"md"}},s={args:{size:"sm"}},a={args:{size:"lg"}};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var l,m,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const j=["Default","Small","Large"];export{e as Default,a as Large,s as Small,j as __namedExportsOrder,V as default};
