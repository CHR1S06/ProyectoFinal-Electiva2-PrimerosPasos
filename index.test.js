// index.test.js
import fs from 'fs';
import { JSDOM } from 'jsdom';

const html = fs.readFileSync('index.html', 'utf-8');

describe('HTML content', () => {
  test('contiene Hola Mundo en h1', () => {
    const dom = new JSDOM(html);
    const h1 = dom.window.document.querySelector('h1');
    expect(h1.textContent).toBe('Hola Mundo');
  });
});
