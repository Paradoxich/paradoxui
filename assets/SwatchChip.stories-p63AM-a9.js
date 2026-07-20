import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as T}from"./index-Bqq-F1qZ.js";import{c as j}from"./cn-MEeMP3_e.js";function u({color:i,label:a,selected:o=!1,className:e,style:r,ref:d,...C}){return n.jsx("button",{ref:d,type:"button","aria-pressed":o,"aria-label":a,title:a,className:j("h-7 w-10 shrink-0 rounded-chip","border border-divider","transition-shadow duration-normal","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-focus",o&&"ring-2 ring-offset-2 ring-accent",e),style:{backgroundColor:i,...r},...C})}u.__docgenInfo={description:`A selectable color swatch — a Chip whose meaning is carried by its fill
rather than a text label. Renders as a toggle button with \`aria-pressed\`;
the label is exposed to assistive tech and as a hover tooltip. A hairline
border keeps very light swatches visible on light surfaces.`,methods:[],displayName:"SwatchChip",props:{color:{required:!0,tsType:{name:"string"},description:"The swatch fill — any CSS color value."},label:{required:!0,tsType:{name:"string"},description:"Accessible name for the color; also shown as a native tooltip."},selected:{required:!1,tsType:{name:"boolean"},description:"Whether the swatch is currently selected",defaultValue:{value:"false",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}},composes:["Omit"]};const q={title:"Components/SwatchChip",component:u,tags:["autodocs"]},t={args:{color:"#7c4d9b",label:"Purple"}},s={args:{color:"#7c4d9b",label:"Purple",selected:!0}},l={args:{color:"#f7f5ee",label:"Off white"}};function k(){const i=[{color:"#f7f5ee",label:"Off white"},{color:"#f0ca3c",label:"Gold"},{color:"#c03a2b",label:"Brick"},{color:"#7c4d9b",label:"Plum"},{color:"#4f74bd",label:"Slate blue"},{color:"#97b060",label:"Moss"}],[a,o]=T.useState(["Gold"]);return n.jsx("div",{className:"flex flex-wrap gap-2",children:i.map(e=>n.jsx(u,{color:e.color,label:e.label,selected:a.includes(e.label),onClick:()=>o(r=>r.includes(e.label)?r.filter(d=>d!==e.label):[...r,e.label])},e.label))})}const c={render:()=>n.jsx(k,{})};var p,b,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: '#7c4d9b',
    label: 'Purple'
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var m,h,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: '#7c4d9b',
    label: 'Purple',
    selected: true
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var w,S,x;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    color: '#f7f5ee',
    label: 'Off white'
  }
}`,...(x=(S=l.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var y,v,R;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <SwatchRowStory />
}`,...(R=(v=c.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};const L=["Default","Selected","LightSwatch","SelectableRow"];export{t as Default,l as LightSwatch,c as SelectableRow,s as Selected,L as __namedExportsOrder,q as default};
