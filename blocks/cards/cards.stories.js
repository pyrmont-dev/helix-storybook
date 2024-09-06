import decorate from './cards.js';
import './cards.css';

export default {
  title: 'Cards',
};

const Template = () => {
  // Create a sample block element
  const block = document.createElement('div');
  // add class of blocks
  block.classList.add('cards');
  block.innerHTML = `
    <div>
      <div>
          <img src="https://via.placeholder.com/150" alt="Sample Image">
      </div>
      <div>
        <p><strong>Unmatched speed</strong></p>
        <p>AEM is the fastest way to publish, create, and serve websites</p>
      </div>
    </div>
  `;

  // Apply the decorate function
  decorate(block);

  // Return the decorated block
  return block;
};

export const Default = Template.bind({});
