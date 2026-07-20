import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as i}from"./cn-MEeMP3_e.js";import{B as R}from"./Button-CLp1FMyo.js";function n({children:r,className:a,ref:t,...d}){return e.jsx("div",{ref:t,className:i("bg-surface-card rounded-lg","border border-card","shadow-sm","overflow-hidden",a),...d,children:r})}function y({children:r,className:a,ref:t,...d}){return e.jsx("div",{ref:t,className:i("px-card-padding py-row-gap","border-b border-divider",a),...d,children:r})}function c({children:r,className:a,ref:t,...d}){return e.jsx("div",{ref:t,className:i("px-card-padding py-row-gap",a),...d,children:r})}function g({children:r,className:a,ref:t,...d}){return e.jsx("div",{ref:t,className:i("px-card-padding py-row-gap","border-t border-divider","bg-surface-subtle",a),...d,children:r})}n.__docgenInfo={description:"",methods:[],displayName:"Card",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"CardBody",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"CardFooter",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const C={title:"Components/Card",component:n,tags:["autodocs"]},o={render:()=>e.jsxs(n,{style:{width:320},children:[e.jsx(y,{children:e.jsx("h3",{style:{margin:0,fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)"},children:"Monstera Deliciosa"})}),e.jsx(c,{children:e.jsx("p",{style:{margin:0,color:"var(--color-text-secondary)"},children:"Tropical plant with large, glossy leaves. Thrives in indirect light."})}),e.jsx(g,{children:e.jsx(R,{size:"sm",variant:"secondary",children:"View care guide"})})]})},s={render:()=>e.jsx(n,{style:{width:280},children:e.jsx(c,{children:e.jsx("p",{style:{margin:0},children:"A simple card with no header or footer."})})})};var l,p,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 320
  }}>
      <CardHeader>
        <h3 style={{
        margin: 0,
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)'
      }}>
          Monstera Deliciosa
        </h3>
      </CardHeader>
      <CardBody>
        <p style={{
        margin: 0,
        color: 'var(--color-text-secondary)'
      }}>
          Tropical plant with large, glossy leaves. Thrives in indirect light.
        </p>
      </CardBody>
      <CardFooter>
        <Button size="sm" variant="secondary">
          View care guide
        </Button>
      </CardFooter>
    </Card>
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,h,u;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 280
  }}>
      <CardBody>
        <p style={{
        margin: 0
      }}>A simple card with no header or footer.</p>
      </CardBody>
    </Card>
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const T=["Default","Simple"];export{o as Default,s as Simple,T as __namedExportsOrder,C as default};
