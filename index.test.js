const { JSDOM } = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync('./src/index.html', 'utf-8');

describe('HTML content', () => {
  it('contiene Hola Mundo en h1', () => {
    const dom = new JSDOM(html);
    const h1 = dom.window.document.querySelector('h1');
    expect(h1.textContent).toBe('Hola Mundo');
  });
});
