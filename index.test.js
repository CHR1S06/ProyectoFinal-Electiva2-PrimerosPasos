// index.test.js
import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';
import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf-8');

describe('HTML content', () => {
  it('contiene Hola Mundo en h1', () => {
    const dom = new JSDOM(html);
    const h1 = dom.window.document.querySelector('h1');
    expect(h1.textContent).toBe('Hola Mundo');
  });
});
