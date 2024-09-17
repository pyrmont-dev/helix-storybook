const l={title:"Button"},t={render:n=>{const r=document.createElement("button");r.innerText=n.label;const{variant:s}=n,{size:i}=n,{width:c}=n;return r.className=["button-test",s,i,c].join(" "),r},args:{icon:!0,label:"Button"},argTypes:{variant:{options:["primary","secondary","tertiary","muted"],control:{type:"radio"}},size:{options:["small","medium","large","xlarge"],control:{type:"radio"}},width:{options:["hug","full"],control:{type:"radio"}}}};var e,o,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => {
    const btn = document.createElement('button');
    btn.innerText = args.label;

    // const mode = args.primary ? 'primary' : 'secondary';
    const {
      variant
    } = args;
    const {
      size
    } = args;
    const {
      width
    } = args;
    btn.className = ['button-test', variant, size, width].join(' ');
    return btn;
  },
  args: {
    icon: true,
    label: 'Button'
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'muted'],
      control: {
        type: 'radio'
      }
    },
    size: {
      options: ['small', 'medium', 'large', 'xlarge'],
      control: {
        type: 'radio'
      }
    },
    width: {
      options: ['hug', 'full'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const d=["Primary"];export{t as Primary,d as __namedExportsOrder,l as default};
