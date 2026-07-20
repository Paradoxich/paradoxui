import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as s}from"./cn-MEeMP3_e.js";import{B as g}from"./Button-CLp1FMyo.js";function i({children:r,className:a,ref:t,...d}){return e.jsx("div",{ref:t,className:s("bg-surface-card rounded-lg","border border-card","shadow-sm","overflow-hidden",a),...d,children:r})}function y({children:r,className:a,ref:t,...d}){return e.jsx("div",{ref:t,className:s("px-card-padding py-row-gap","border-b border-divider",a),...d,children:r})}function c({children:r,className:a,ref:t,...d}){return e.jsx("div",{ref:t,className:s("px-card-padding py-row-gap",a),...d,children:r})}function R({children:r,className:a,ref:t,...d}){return e.jsx("div",{ref:t,className:s("px-card-padding py-row-gap","border-t border-divider","bg-surface-subtle",a),...d,children:r})}i.__docgenInfo={description:"",methods:[],displayName:"Card",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"CardBody",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"CardFooter",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const w={title:"Components/Card",component:i,tags:["autodocs"]},o={render:()=>e.jsxs(i,{style:{width:320},children:[e.jsx(y,{children:e.jsx("h3",{style:{margin:0,fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)"},children:"Field Notes"})}),e.jsx(c,{children:e.jsx("p",{style:{margin:0,color:"var(--color-text-secondary)"},children:"A quiet home for drafts, clippings, and half-formed ideas."})}),e.jsx(R,{children:e.jsx(g,{size:"sm",variant:"secondary",children:"Open notebook"})})]})},n={render:()=>e.jsx(i,{style:{width:280},children:e.jsx(c,{children:e.jsx("p",{style:{margin:0},children:"A simple card with no header or footer."})})})};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 320
  }}>
      <CardHeader>
        <h3 style={{
        margin: 0,
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)'
      }}>
          Field Notes
        </h3>
      </CardHeader>
      <CardBody>
        <p style={{
        margin: 0,
        color: 'var(--color-text-secondary)'
      }}>
          A quiet home for drafts, clippings, and half-formed ideas.
        </p>
      </CardBody>
      <CardFooter>
        <Button size="sm" variant="secondary">
          Open notebook
        </Button>
      </CardFooter>
    </Card>
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var f,u,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 280
  }}>
      <CardBody>
        <p style={{
        margin: 0
      }}>A simple card with no header or footer.</p>
      </CardBody>
    </Card>
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const N=["Default","Simple"];export{o as Default,n as Simple,N as __namedExportsOrder,w as default};
