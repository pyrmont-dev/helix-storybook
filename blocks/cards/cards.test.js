import {
  describe, it, expect, beforeEach, vi,
} from 'vitest';
import decorate from './cards.js';

// Mock the createOptimizedPicture function
vi.mock('../../scripts/aem.js', () => ({
  createOptimizedPicture: vi.fn((src, alt) => {
    const picture = document.createElement('picture');
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    picture.appendChild(img);
    return picture;
  }),
}));

describe('decorate function', () => {
  let block;

  beforeEach(() => {
    // Create a mock block element with children
    block = document.createElement('div');
    block.innerHTML = `
      <div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Sample Image 1">
        </div>
        <div>
          <p><strong>Unmatched speed</strong></p>
          <p>AEM is the fastest way to publish, create, and serve websites</p>
        </div>
      </div>
      <div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Sample Image 2">
        </div>
        <div>
          <p><strong>Seamless Integration</strong></p>
          <p>Easily integrate with other Adobe products</p>
        </div>
      </div>
    `;
  });

  it('should transform the block into a list of cards', () => {
    decorate(block);

    // Check if the block is transformed into a ul element
    const ul = block.querySelector('ul');
    expect(ul).not.toBeNull();

    // Check if the ul element contains li elements
    const liElements = ul.querySelectorAll('li');
    expect(liElements.length).toBe(2);
  });
});
