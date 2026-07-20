import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{c as C}from"./cn-MEeMP3_e.js";const H={default:["border-divider","focus:border-accent","focus:ring-focus"].join(" "),error:["border-critical","focus:border-critical","focus:ring-critical"].join(" ")},P={sm:"px-3 py-1.5 text-sm rounded-md",md:"px-3 py-2 text-base rounded-md",lg:"px-4 py-3 text-lg rounded-lg"};function I({variant:w="default",label:r,helperText:i,errorMessage:a,size:N="md",id:S,className:q,ref:D,...W}){const e=S??(r==null?void 0:r.toLowerCase().replace(/\s+/g,"-")),d=e?`${e}-helper`:void 0,c=e?`${e}-error`:void 0,R=["w-full border bg-surface-field","text-primary","placeholder:text-faint","focus:outline-none focus:ring-2 focus:ring-offset-0","disabled:bg-surface-subtle disabled:cursor-not-allowed disabled:opacity-70","transition-colors duration-normal"].join(" "),m=a?"error":w;return s.jsxs("div",{className:"flex flex-col gap-1",children:[r&&s.jsx("label",{htmlFor:e,className:"text-sm font-medium text-secondary",children:r}),s.jsx("input",{ref:D,id:e,className:C(R,H[m],P[N],q),"aria-describedby":[a?c:null,i?d:null].filter(Boolean).join(" ")||void 0,"aria-invalid":m==="error",...W}),a&&s.jsx("p",{id:c,className:"text-sm text-critical",role:"alert",children:a}),i&&!a&&s.jsx("p",{id:d,className:"text-sm text-muted",children:i})]})}I.__docgenInfo={description:"",methods:[],displayName:"Input",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""}},composes:["Omit"]};const L={title:"Components/Input",component:I,tags:["autodocs"]},t={args:{label:"Project name",placeholder:"e.g. Field Notes"}},l={args:{label:"Email",placeholder:"you@example.com",helperText:"We will never share your email."}},o={args:{label:"Email",placeholder:"you@example.com",errorMessage:"Please enter a valid email address."}},n={args:{label:"Disabled field",value:"Cannot edit this",disabled:!0}};var u,p,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Project name',
    placeholder: 'e.g. Field Notes'
  }
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var x,g,b;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    helperText: 'We will never share your email.'
  }
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,y,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    errorMessage: 'Please enter a valid email address.'
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var j,T,E;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Disabled field',
    value: 'Cannot edit this',
    disabled: true
  }
}`,...(E=(T=n.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const V=["Default","WithHelperText","WithError","Disabled"];export{t as Default,n as Disabled,o as WithError,l as WithHelperText,V as __namedExportsOrder,L as default};
