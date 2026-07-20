import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{c as R}from"./cn-MEeMP3_e.js";const b={xs:"w-6 h-6 text-xs",sm:"w-8 h-8 text-xs",md:"w-10 h-10 text-sm",lg:"w-12 h-12 text-base",xl:"w-16 h-16 text-lg"};function S({src:l,alt:o="",initials:i,size:j="md",className:E,ref:q,...A}){return n.jsx("div",{ref:q,className:R("relative inline-flex items-center justify-center","rounded-full","overflow-hidden","bg-avatar","text-inverse","font-medium","select-none",b[j],E),"aria-label":o||i,role:"img",...A,children:l?n.jsx("img",{src:l,alt:o,className:"w-full h-full object-cover",onError:I=>{I.currentTarget.style.display="none"}}):i&&n.jsx("span",{"aria-hidden":"true",children:i.slice(0,2).toUpperCase()})})}S.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},initials:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}};const M={title:"Components/Avatar",component:S,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"]}}},e={args:{initials:"JD",size:"md"}},a={args:{initials:"AB",size:"sm"}},s={args:{initials:"CL",size:"lg"}},r={args:{initials:"MX",size:"xl"}},t={args:{src:"https://i.pravatar.cc/100",alt:"User avatar",size:"md"}};var m,c,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    initials: 'JD',
    size: 'md'
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    initials: 'AB',
    size: 'sm'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,f,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    initials: 'CL',
    size: 'lg'
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,z,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    initials: 'MX',
    size: 'xl'
  }
}`,...(y=(z=r.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var w,T,L;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/100',
    alt: 'User avatar',
    size: 'md'
  }
}`,...(L=(T=t.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const W=["WithInitials","Small","Large","ExtraLarge","WithImage"];export{r as ExtraLarge,s as Large,a as Small,t as WithImage,e as WithInitials,W as __namedExportsOrder,M as default};
