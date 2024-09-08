export default {
  title: 'Button',
};

export const Primary = {
  render: (args) => {
    const btn = document.createElement('button');
    btn.innerText = args.label;

    const mode = args.primary ? 'primary' : 'secondary';
    btn.className = ['button-test', mode].join(' ');

    return btn;
  },
  args: {
    primary: true,
    label: 'Button',
  },
};
