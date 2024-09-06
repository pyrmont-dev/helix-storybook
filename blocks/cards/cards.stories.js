import decorate from './cards';
import './cards.css';

export default {
  title: 'Cards',
};

const Template = () => {
  // Create a sample block element
  const block = document.createElement('div');
  block.innerHTML = `
    <div>
      <div>
          <img src="https://via.placeholder.com/150" alt="Sample Image">
      </div>
      <div>
        <p>Sample text content</p>
      </div>
    </div>
  `;

  // Apply the decorate function
  decorate(block);

  // Return the decorated block
  return block;
};

export const Default = Template.bind({});